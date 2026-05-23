import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Paperclip, Loader2 } from "lucide-react";

export default function CareerForm({ prefilledData }) {
  const [formData, setFormData] = useState({
    fullName: "", email: "", phone: "", position: "", experience: "", location: "", message: "",
  });
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(false);

  // Listen for changes to prefilledData from the parent page
  useEffect(() => {
    if (prefilledData) {
      setFormData((prevData) => ({
        ...prevData,
        position: prefilledData.position || "",
        location: prefilledData.location || ""
      }));
    }
  }, [prefilledData]);

  const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    // Validation
    const allowedTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    if (!allowedTypes.includes(file.type)) {
      toast.error("Only PDF, DOC, or DOCX files are allowed.");
      e.target.value = null;
      return;
    }
    if (file.size > 5 * 1024 * 1024) { // 5MB limit
      toast.error("File size must be less than 5MB.");
      e.target.value = null;
      return;
    }
    setResume(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!resume) return toast.error("Please upload your resume.");

    setLoading(true);
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => data.append(key, value));
    data.append("resume", resume);

    try {
      // Point this to your backend API route
      const response = await fetch("http://localhost:5000/api/apply", {
        method: "POST",
        body: data, // FormData sets headers automatically
      });

      const result = await response.json().catch(() => null);

      if (response.ok) {
        toast.success("Application submitted successfully!");
        setFormData({ fullName: "", email: "", phone: "", position: "", experience: "", location: "", message: "" });
        setResume(null);
        e.target.reset();
      } else {
        toast.error(result?.error || "Failed to submit application. Try again.");
      }
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Server error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-white" id="apply-form">
      <Toaster position="bottom-right" />
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter mb-4">Submit Your <span className="text-[#f25810]">Application</span></h2>
          <p className="text-gray-500 font-medium">Take the first step towards building a massive career.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-gray-50 p-8 md:p-12 shadow-sm border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Full Name *</label>
              <input required type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} className="w-full bg-white border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#f25810] transition-colors" />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Email Address *</label>
              <input required type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full bg-white border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#f25810] transition-colors" />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Phone Number *</label>
              <input required type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full bg-white border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#f25810] transition-colors" />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Position Applying For *</label>
              <input required type="text" name="position" value={formData.position} onChange={handleInputChange} className="w-full bg-white border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#f25810] transition-colors" />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Years of Experience *</label>
              <select required name="experience" value={formData.experience} onChange={handleInputChange} className="w-full bg-white border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#f25810] transition-colors">
                <option value="">Select...</option>
                <option value="0-2">0 - 2 Years</option>
                <option value="3-5">3 - 5 Years</option>
                <option value="5-10">5 - 10 Years</option>
                <option value="10+">10+ Years</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Current Location *</label>
              <input required type="text" name="location" value={formData.location} onChange={handleInputChange} className="w-full bg-white border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#f25810] transition-colors" />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Cover Letter / Message</label>
            <textarea name="message" rows="4" value={formData.message} onChange={handleInputChange} className="w-full bg-white border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#f25810] transition-colors"></textarea>
          </div>

          <div className="mb-10">
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Upload Resume (PDF/DOC) *</label>
            <div className="relative border-2 border-dashed border-gray-300 bg-white p-6 flex flex-col items-center justify-center hover:border-[#f25810] transition-colors cursor-pointer">
              <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} required className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
              <Paperclip className="text-gray-400 mb-2" size={24} />
              <p className="text-sm text-gray-600 font-medium text-center">
                {resume ? <span className="text-[#f25810]">{resume.name}</span> : "Drag & Drop or Click to Upload"}
              </p>
              <p className="text-xs text-gray-400 mt-1">Max file size: 5MB</p>
            </div>
          </div>

          <button type="submit" disabled={loading} className="w-full bg-[#f25810] hover:bg-[#d44a0d] text-white py-4 font-black uppercase tracking-widest text-sm transition-all flex items-center justify-center disabled:opacity-70 cursor-pointer">
            {loading ? <><Loader2 className="animate-spin mr-2" size={18} /> Sending Application...</> : "Submit Application"}
          </button>
        </form>
      </div>
    </section>
  );
}