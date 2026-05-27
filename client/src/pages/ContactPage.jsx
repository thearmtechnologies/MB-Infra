import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, Loader2 } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import { useLocation } from "react-router-dom";
import { equipmentData } from "../data/EquipmentData";
import ContactImage from "../assets/img/hero/contact.jpg";
const contactDetails = [
  { 
    icon: MapPin, 
    title: "Corporate HQ", 
    detail1: "G-6, RS Platinum Building, Bhalej Road, Ganesh Colony, Anand, Gujarat, 388001"
  },
  { 
    icon: Phone, 
    title: "Call Us", 
    detail1: "+91 99094 14001", 
    detail2: "Tele Fax - 02692 269001" 
  },
  { 
    icon: Mail, 
    title: "Email Us", 
    detail1: "mayurprajapati@mbipl.in", 

  },
  { 
    icon: Clock, 
    title: "Working Hours", 
    detail1: "Mon - Sat: 9:00 AM - 7:00 PM", 
    detail2: "Sunday: Closed (Site operations 24/7)" 
  },
];

export default function ContactPage() {
  const location = useLocation();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    inquiryType: "",
    equipmentName: "",
    equipmentQty: 1,
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const equipmentOptions = useMemo(
    () => [...equipmentData].sort((a, b) => a.name.localeCompare(b.name)),
    []
  );

  const selectedEquipment = useMemo(
    () => equipmentData.find((item) => item.name === formData.equipmentName),
    [formData.equipmentName]
  );

  useEffect(() => {
    const state = location.state || {};
    if (!state.inquiryType && !state.equipmentName) {
      return;
    }

    setFormData((prev) => ({
      ...prev,
      inquiryType: state.inquiryType || prev.inquiryType,
      equipmentName: state.equipmentName || prev.equipmentName,
      equipmentQty: state.equipmentQty || prev.equipmentQty || 1,
      message: state.message || prev.message,
    }));
  }, [location.state]);

  useEffect(() => {
    if (formData.inquiryType !== "Equipment Rental") {
      setFormData((prev) => ({
        ...prev,
        equipmentName: "",
        equipmentQty: 1,
      }));
    }
  }, [formData.inquiryType]);

  useEffect(() => {
    if (!selectedEquipment) {
      return;
    }

    setFormData((prev) => ({
      ...prev,
      equipmentQty: Math.min(Math.max(prev.equipmentQty || 1, 1), selectedEquipment.qty),
    }));
  }, [selectedEquipment]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEquipmentQtyChange = (e) => {
    const rawValue = Number.parseInt(e.target.value, 10);
    const maxQty = selectedEquipment?.qty ?? 1;
    const nextValue = Number.isNaN(rawValue) ? 1 : rawValue;

    setFormData((prev) => ({
      ...prev,
      equipmentQty: Math.min(Math.max(nextValue, 1), maxQty),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Point this to your backend API contact route
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json().catch(() => null);

      if (response.ok) {
        toast.success("Message sent successfully! Our team will contact you soon.");
        setFormData({ 
          fullName: "", 
          email: "", 
          phone: "", 
          company: "", 
          inquiryType: "", 
          equipmentName: "",
          equipmentQty: 1,
          message: "" 
        });
        e.target.reset();
      } else {
        toast.error(result?.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Server error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-gray-50 min-h-screen flex flex-col">
      <Toaster position="bottom-right" />

      {/* 1. Hero Section - With Engineering Blueprint Grid */}
      <section className="relative w-full h-[55vh] flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 z-0">
          <img
            src={ContactImage}
            alt="Bridge structural engineering"
            className="w-full h-full object-cover "
          />
 
          <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-black/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-0.5 w-12 bg-[#f25810]"></div>
              <span className="text-[#f25810] font-black tracking-[0.25em] uppercase text-xs md:text-sm shadow-black drop-shadow-md">
                Get In Touch
              </span>
              <div className="h-0.5 w-12 bg-[#f25810]"></div>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-6 leading-tight drop-shadow-lg">
              Contact <span className="text-transparent bg-clip-text bg-linear-to-r from-[#f25810] to-[#ff8c54] pr-2">MB Infraprojects</span>
            </h1>
            <p className="text-gray-300 text-base md:text-lg font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              Whether you are a government entity, private stakeholder, or a prospective partner, we are ready to discuss your next mega-project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Contact Information Cards */}
      <section className="py-20 bg-white relative z-20 -mt-10">
        <div className="max-w-7xl mx-auto px-6 xl:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {contactDetails.map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group relative bg-white p-8 md:p-10 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Top orange accent line that expands on hover */}
                <div className="absolute top-0 left-0 w-0 h-1 bg-[#f25810] group-hover:w-full transition-all duration-500"></div>
                
                <div className="w-14 h-14 bg-gray-50 flex items-center justify-center mb-6 text-gray-900 group-hover:bg-[#f25810] group-hover:text-white transition-all duration-500 rounded-sm">
                  <item.icon size={26} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-black text-gray-900 uppercase mb-4 tracking-tight">{item.title}</h3>
                <p className="text-gray-600 font-medium text-sm mb-1">{item.detail1}</p>
                <p className="text-gray-600 font-medium text-sm">{item.detail2}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Main Form & Map Section */}
      <section className="py-20 bg-gray-50 flex-1">
        <div className="max-w-7xl mx-auto px-6 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left: Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 shadow-sm border border-gray-200 border-t-4 border-t-gray-900"
            >
              <div className="mb-10">
                <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tighter mb-3">
                  Send a <span className="text-[#f25810]">Message</span>
                </h2>
                <p className="text-gray-500 font-medium text-sm">
                  Fill out the form below to connect with our project management or tender division.
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Full Name *</label>
                    <input required type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#f25810] focus:bg-white transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Email Address *</label>
                    <input required type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#f25810] focus:bg-white transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Phone Number *</label>
                    <input required type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#f25810] focus:bg-white transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Company / Organization</label>
                    <input type="text" name="company" value={formData.company} onChange={handleInputChange} className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#f25810] focus:bg-white transition-colors" />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Nature of Inquiry *</label>
                  <select required name="inquiryType" value={formData.inquiryType} onChange={handleInputChange} className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#f25810] focus:bg-white transition-colors">
                    <option value="">Select an option...</option>
                    <option value="Equipment Rental">Equipment Rental</option>
                    <option value="New Project/Tender">New Project / Tender Proposal</option>
                    <option value="Vendor/Supplier">Vendor / Supplier Registration</option>
                    <option value="Media/PR">Media & PR</option>
                    <option value="General">General Inquiry</option>
                  </select>
                </div>

                {formData.inquiryType === "Equipment Rental" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Equipment / Vehicle *</label>
                      <select
                        required
                        name="equipmentName"
                        value={formData.equipmentName}
                        onChange={handleInputChange}
                        className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#f25810] focus:bg-white transition-colors"
                      >
                        <option value="">Select equipment...</option>
                        {equipmentOptions.map((item) => (
                          <option key={item.id} value={item.name}>
                            {item.name} ({item.qty} available)
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Quantity *</label>
                      <input
                        required
                        type="number"
                        name="equipmentQty"
                        min="1"
                        max={selectedEquipment?.qty || 1}
                        value={formData.equipmentQty}
                        onChange={handleEquipmentQtyChange}
                        disabled={!selectedEquipment}
                        className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#f25810] focus:bg-white transition-colors disabled:opacity-60"
                      />
                      {selectedEquipment && (
                        <p className="text-[11px] text-gray-400 mt-2">
                          Max available: {selectedEquipment.qty}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                <div className="mb-8">
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Message *</label>
                  <textarea required name="message" rows="5" value={formData.message} onChange={handleInputChange} className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#f25810] focus:bg-white transition-colors"></textarea>
                </div>

                <button type="submit" disabled={loading} className="w-full sm:w-auto bg-[#f25810] hover:bg-[#d44a0d] text-white px-10 py-4 font-black uppercase tracking-widest text-sm transition-all flex items-center justify-center disabled:opacity-70 group">
                  {loading ? (
                    <><Loader2 className="animate-spin mr-2" size={18} /> Sending...</>
                  ) : (
                    <>
                      Send Message
                      <Send size={16} className="ml-2 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Right: Map & Additional Info */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              className="flex flex-col h-full"
            >
              <div className="bg-white p-8 border border-gray-200 mb-8 border-l-4 border-l-[#f25810]">
                <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-4">Vendor & Supplier Relations</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  For equipment leasing, raw material supply, and subcontractor registration, please ensure you select "Vendor / Supplier Registration" in the inquiry form to be routed to our procurement division.
                </p>
                <a href="#" className="text-[#f25810] text-sm font-bold uppercase tracking-widest hover:text-gray-900 transition-colors">
                  Download Vendor Form →
                </a>
              </div>

              {/* Map Container */}
              <div className="flex-1 bg-gray-300 min-h-75 border border-gray-200 relative group overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31433.806629653067!2d72.92075740033292!3d22.558570121744133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e4e84b2569f97%3A0x882ca4231a5bd1fb!2sMB%20Infraprojects%20Pvt.%20Ltd.!5e1!3m2!1sen!2sin!4v1779717794851!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0,  }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Corporate Office Location"
                  className="absolute inset-0 group-hover:filter-none transition-all duration-700"
                ></iframe>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}