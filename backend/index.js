import express from "express";
import cors from "cors";
import multer from "multer";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// 1. Configure Multer for Memory Storage (NO local saving)
const storage = multer.memoryStorage();
const upload = multer({ 
  storage,
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit validation on backend too
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

// 3. API Route for Form Submission
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

    // Email content construction
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
          content: file.buffer, // Buffer straight from memory
        },
      ],
    };

    // Send Email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Application submitted successfully." });

  } catch (error) {
    console.error("Email sending error:", error);
    res.status(500).json({ error: "Failed to send application." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend server running on port ${PORT}`));