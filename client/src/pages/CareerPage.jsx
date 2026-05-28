import React, { useState } from "react";
import { motion } from "framer-motion";
import CareerForm from "../components/careers/CareerForm"; // Adjust path if needed
import { Briefcase, Clock, HardHat, MapPin, ShieldCheck, TrendingUp, ArrowRight } from "lucide-react";
import CareerImage from "../assets/img/hero/career.jpg";
const benefits = [
  { icon: TrendingUp, title: "Career Growth", desc: "Fast-tracked progression in a rapidly growing EPC environment." },
  { icon: HardHat, title: "Professional Team", desc: "Work alongside industry-leading engineers and project managers." },
  { icon: Briefcase, title: "Modern Equipment", desc: "Hands-on experience with our massive, state-of-the-art machinery fleet." },
  { icon: ShieldCheck, title: "Safe Environment", desc: "Strict adherence to safety protocols with a zero-harm policy." },
];

const openPositions = [
  { title: "Senior Site Engineer", location: "Mumbai, MH", exp: "5-8 Years", type: "Full-Time", desc: "Oversee highway execution, manage site teams, and ensure strict quality control." },
  { title: "Heavy Crane Operator", location: "Pune, MH", exp: "3+ Years", type: "Full-Time", desc: "Operate 100T+ crawler cranes for bridge girder launching and heavy lifting." },
  { title: "Safety Supervisor", location: "Ahmedabad, GJ", exp: "4-6 Years", type: "Contract", desc: "Implement HSE protocols and conduct daily safety audits on industrial sites." },
  { title: "Project Manager (Bridges)", location: "Pan India", exp: "10+ Years", type: "Full-Time", desc: "End-to-end management of complex bridge and flyover structures." },
];

export default function CareerPage() {
  // 1. State to hold the job data when a user clicks "Apply Now"
  const [selectedJob, setSelectedJob] = useState(null);

  // 2. Function to handle the click event
  const handleApplyClick = (job) => {
    setSelectedJob({
      position: job.title,
      // You can also pre-fill location or experience if you want to map it
      location: job.location, 
    });

    // Smooth scroll down to the form
    const formElement = document.getElementById("apply-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="w-full bg-gray-50 min-h-screen">
      {/* 1. Hero Section - Upgraded with Engineering Grid Overlay */}
      <section className="relative w-full hero-section flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 z-0">
          <img
            src={CareerImage}
            alt="Large scale highway construction"
            className="w-full h-full object-cover"
          />
     
          <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-black/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-0.5 w-12 bg-[#f25810]"></div>
              <span className="text-[#f25810] font-black tracking-[0.25em] uppercase text-xs md:text-sm shadow-black drop-shadow-md">
                Join Our Fleet
              </span>
              <div className="h-0.5 w-12 bg-[#f25810]"></div>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-6 leading-tight drop-shadow-lg">
              Build Your Career With <br/>
              <span className="text-transparent bg-clip-text pr-2 bg-linear-to-r from-[#f25810] to-[#ff8c54]">MB Infraprojects</span>
            </h1>
            <p className="text-gray-300 text-base md:text-lg font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              We are engineering the future. Join a team of dedicated professionals building India's most critical infrastructure, highways, and mega-structures.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Why Join Us Section - Premium Cards */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 xl:px-12">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter mb-4">
              Why Work <span className="text-[#f25810]">With Us?</span>
            </h2>
            <div className="w-24 h-1 bg-[#f25810]"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group relative bg-white p-10 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-1"
              >
                <div className="absolute top-0 left-0 w-0 h-1 bg-[#f25810] group-hover:w-full transition-all duration-500"></div>
                <div className="w-16 h-16 bg-gray-50 flex items-center justify-center mb-8 text-gray-900 group-hover:bg-[#f25810] group-hover:text-white transition-all duration-500 rounded-sm">
                  <item.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-black text-gray-900 uppercase mb-4 tracking-tight">{item.title}</h3>
                <p className="text-gray-600 font-medium text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Open Positions - Corporate Docket Style */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 xl:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-0.5 w-8 bg-[#f25810]"></div>
                <span className="text-[#f25810] font-bold tracking-[0.2em] uppercase text-xs">Explore Opportunities</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter">
                Current <span className="text-[#f25810]">Openings</span>
              </h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {openPositions.map((job, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, scale: 0.98 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                viewport={{ once: true }}
                className="group bg-white p-8 md:p-10 border border-gray-200 border-l-4 border-l-gray-300 hover:border-l-[#f25810] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-2xl font-black text-gray-900 uppercase mb-5 tracking-tight group-hover:text-[#f25810] transition-colors">{job.title}</h3>
                  
                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-gray-600 bg-gray-100 px-3 py-2">
                      <MapPin size={14} className="text-[#f25810]"/> {job.location}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-gray-600 bg-gray-100 px-3 py-2">
                      <Clock size={14} className="text-[#f25810]"/> {job.exp}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-[#f25810] bg-orange-50 px-3 py-2 border border-orange-100">
                      {job.type}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 font-medium mb-8 leading-relaxed">{job.desc}</p>
                </div>
                
                {/* 3. Button Click Event Trigger */}
                <button 
                  onClick={() => handleApplyClick(job)}
                  className="self-start flex items-center gap-2 text-sm font-black uppercase tracking-widest bg-gray-900 text-white px-8 py-4 hover:bg-[#f25810] transition-all duration-300 cursor-pointer"
                >
                  Apply Now
                  <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Pass the selected job state as a prop to CareerForm */}
      <CareerForm prefilledData={selectedJob} />
    </div>
  );
}