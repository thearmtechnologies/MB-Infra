import express from "express";
import cors from "cors";
import multer from "multer";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); // Parses incoming JSON payloads for the contact route

// 1. Configure Multer for Memory Storage (NO local saving)
const storage = multer.memoryStorage();
const upload = multer({ 
  storage,
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit validation
});

// 2. Configure Nodemailer Transporter
const requiredEmailEnv = ["EMAIL_USER", "EMAIL_PASS", "RECEIVER_EMAIL"];
const missingEmailEnv = requiredEmailEnv.filter((key) => !process.env[key]);

if (missingEmailEnv.length > 0) {
  console.warn(`Missing email environment variables: ${missingEmailEnv.join(", ")}`);
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// 3. API Route for Career Form Submission (Uses Multer for Attachments)
app.post("/api/apply", upload.single("resume"), async (req, res) => {
  try {
    const { fullName, email, phone, position, experience, location, message } = req.body;
    const file = req.file;

    if (missingEmailEnv.length > 0) {
      return res.status(500).json({
        error: `Email service is not configured. Missing: ${missingEmailEnv.join(", ")}`,
      });
    }

    if (!file) {
      return res.status(400).json({ error: "Resume file is required." });
    }

    const mailOptions = {
      from: `"${fullName}" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      replyTo: email,
      subject: `New Career Application: ${position} - ${fullName}`,
      html: `
        <h2 style="color: #f25810;">New Job Application Received</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Name:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${fullName}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${email}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Phone:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${phone}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Position:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${position}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Experience:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${experience}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Location:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${location}</td></tr>
        </table>
        <h3 style="margin-top: 20px;">Cover Letter / Message:</h3>
        <p style="background: #f9f9f9; padding: 15px; border-left: 4px solid #f25810;">${message || "No message provided."}</p>
      `,
      attachments: [
        {
          filename: file.originalname,
          content: file.buffer,
        },
      ],
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Application submitted successfully." });

  } catch (error) {
    console.error("Email sending error:", error);
    res.status(500).json({ error: "Failed to send application." });
  }
});

// 4. NEW: API Route for Contact Form Submission (Handles Clean JSON)
app.post("/api/contact", async (req, res) => {
  try {
    const { fullName, email, phone, company, inquiryType, message } = req.body;

    if (missingEmailEnv.length > 0) {
      return res.status(500).json({
        error: `Email service is not configured. Missing: ${missingEmailEnv.join(", ")}`,
      });
    }

    // Clean structural validation
    if (!fullName || !email || !phone || !inquiryType || !message) {
      return res.status(400).json({ error: "Please fill out all required fields marked with *." });
    }

    const mailOptions = {
      from: `"${fullName}" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      replyTo: email,
      subject: `New Inquiry [${inquiryType}]: ${fullName} ${company ? `(${company})` : ""}`,
      html: `
        <h2 style="color: #f25810; border-bottom: 2px solid #f25810; padding-bottom: 8px; uppercase">New Business Inquiry Received</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
          <tr><td style="padding: 10px; border-bottom: 1px solid #eee; width: 30%;"><strong>Full Name:</strong></td><td style="padding: 10px; border-bottom: 1px solid #eee;">${fullName}</td></tr>
          <tr><td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Email Address:</strong></td><td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Phone Number:</strong></td><td style="padding: 10px; border-bottom: 1px solid #eee;">${phone}</td></tr>
          <tr><td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Company/Org:</strong></td><td style="padding: 10px; border-bottom: 1px solid #eee;">${company || "Not Specified"}</td></tr>
          <tr><td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Nature of Inquiry:</strong></td><td style="padding: 10px; border-bottom: 1px solid #eee;"><span style="background: #222; color: #fff; padding: 4px 8px; font-size: 12px; font-weight: bold;">${inquiryType}</span></td></tr>
        </table>
        <h3 style="margin-top: 30px; color: #222; font-weight: bold; text-transform: uppercase; font-size: 14px;">Message Details:</h3>
        <p style="background: #f5f5f5; padding: 18px; border-left: 4px solid #f25810; color: #333; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Inquiry submission sent successfully." });

  } catch (error) {
    console.error("Contact form route mail error:", error);
    res.status(500).json({ error: "Failed to dispatch email infrastructure." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend server running on port ${PORT}`));