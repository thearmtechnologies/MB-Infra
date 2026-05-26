import React from "react";
import { motion } from "framer-motion";
import { complianceData } from "../../data/CertificateData";
import { Lock, ShieldCheck } from "lucide-react";

export default function CertificationsPage() {
  return (
    <div className="w-full bg-gray-50 min-h-screen flex flex-col font-sans text-gray-900">
      
      {/* 1. Hero Section - Technical Blueprint Pattern */}
      <section className="relative w-full min-h-[45vh] lg:min-h-[50vh] flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop"
            alt="Corporate Compliance Engineering"
            className="w-full h-full object-cover opacity-25 grayscale"
          />
          {/* Engineering blueprint grid line scheme */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[40px_40px]"></div>
          <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-black/50 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="h-0.5 w-12 bg-[#f25810]"></div>
              <span className="text-[#f25810] font-bold tracking-wider text-xs md:text-sm uppercase">
                Regulatory Framework
              </span>
              <div className="h-0.5 w-12 bg-[#f25810]"></div>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-5">
              Corporate <span className="text-transparent pr-2 bg-clip-text bg-linear-to-r from-[#f25810] to-[#ff8c54]">Certifications</span>
            </h1>
            <p className="text-gray-300 text-sm md:text-base font-medium max-w-2xl mx-auto leading-relaxed">
              MB Infraprojects Pvt. Ltd. maintains strict regulatory, financial, and industrial compliance standards through nationally recognized certifications and registrations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Compliance Dockets List */}
      <section className="py-20 md:py-24 bg-gray-50 relative z-20">
        <div className="max-w-300 mx-auto px-6 xl:px-12">
          
          <div className="mb-12 border-b-2 border-gray-900 pb-4 flex items-center justify-between">
            <h2 className="text-2xl md:text-3xl font-black tracking-tighter text-gray-900">
              Official Registry & Credentials
            </h2>
            <div className="hidden sm:flex items-center gap-2 text-gray-500 font-bold text-xs tracking-widest uppercase">
              <Lock size={14} /> Secure Verification
            </div>
          </div>

          <div className="flex flex-col gap-6 md:gap-8">
            {complianceData.map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row group border-l-4 border-l-gray-900 hover:border-l-[#f25810]"
              >
                
                {/* Left Side: Icon & Title Header */}
                <div className="w-full md:w-[40%] lg:w-[35%] bg-gray-50 p-6 md:p-8 flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-100 relative overflow-hidden">
                  <div className="absolute -bottom-6 -right-6 text-gray-100 group-hover:text-[#f25810]/5 transition-colors duration-500">
                    <cert.icon size={120} strokeWidth={1} />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-white border border-gray-200 flex items-center justify-center text-gray-900 mb-5 rounded-sm shadow-sm group-hover:border-[#f25810] group-hover:text-[#f25810] transition-colors">
                      <cert.icon size={24} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-black tracking-tight text-gray-900 mb-3">
                      {cert.title}
                    </h3>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-700 font-bold text-[10px] tracking-wider uppercase border border-green-200 rounded-sm">
                      <ShieldCheck size={12} /> {cert.status}
                    </div>
                  </div>
                </div>

                {/* Right Side: Verification Details (Expanded Width) */}
                <div className="w-full md:w-[60%] lg:w-[65%] p-6 md:p-8 flex flex-col justify-center">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8 mb-5">
                    <div>
                      <span className="block text-[11px] font-bold text-gray-400 mb-1 tracking-wider uppercase">Registration No.</span>
                      <span className="block text-sm font-black text-gray-900 font-mono tracking-wide bg-gray-100 px-2 py-1 rounded-sm w-fit border border-gray-200">
                        {cert.number}
                      </span>
                    </div>
                    <div>
                      <span className="block text-[11px] font-bold text-gray-400 mb-1 tracking-wider uppercase">Validity</span>
                      <span className="block text-sm font-bold text-gray-800">
                        {cert.validity}
                      </span>
                    </div>
                    <div className="sm:col-span-2">
                      <span className="block text-[11px] font-bold text-gray-400 mb-1 tracking-wider uppercase">Issuing Authority</span>
                      <span className="block text-sm font-bold text-gray-800">
                        {cert.authority}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed font-medium border-t border-gray-100 pt-5">
                    {cert.desc}
                  </p>
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}