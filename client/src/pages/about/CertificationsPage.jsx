import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { complianceData, completionCertificatesData } from "../../data/CertificateData"; 
import { Lock, ShieldCheck, Eye, X, Award, Download } from "lucide-react";

export default function CertificationsPage() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <div className="w-full bg-gray-50 min-h-screen flex flex-col font-sans text-gray-900">
      
      {/* 1. Hero Section */}
      <section className="relative w-full min-h-[45vh] lg:min-h-[50vh] flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop"
            alt="Corporate Compliance Engineering"
            className="w-full h-full object-cover opacity-25 grayscale"
          />
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

      <section className="py-20 md:py-24 bg-gray-50 relative z-20">
        <div className="max-w-300 mx-auto px-6 xl:px-12">
          
          {/* --- SECTION A: OFFICIAL REGISTRY (NO VIEW BUTTON) --- */}
          <div className="mb-12 border-b-2 border-gray-900 pb-4 flex items-center justify-between">
            <h2 className="text-2xl md:text-3xl font-black tracking-tighter text-gray-900">
              Official Registry & Credentials
            </h2>
            <div className="hidden sm:flex items-center gap-2 text-gray-500 font-bold text-xs tracking-widest uppercase">
              <Lock size={14} /> Secure Verification
            </div>
          </div>

          <div className="flex flex-col gap-6 md:gap-8 mb-24">
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

                {/* Right Side: Verification Details */}
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

          {/* --- SECTION B: PROJECT COMPLETION (CLIENT LOGOS ADDED) --- */}
          <div className="mb-12 border-b-2 border-gray-900 pb-4 flex items-center justify-between">
            <h2 className="text-2xl md:text-3xl font-black tracking-tighter text-gray-900">
              Project Completion Certificates
            </h2>
            <div className="hidden sm:flex items-center gap-2 text-gray-500 font-bold text-xs tracking-widest uppercase">
              <Award size={14} /> Client Endorsements
            </div>
          </div>

          <div className="flex flex-col gap-6 md:gap-8">
            {completionCertificatesData.map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row group border-l-4 border-l-gray-900 hover:border-l-[#f25810]"
              >
                {/* Left Side: Logo & Title Header */}
                <div className="w-full md:w-[40%] lg:w-[35%] bg-gray-50 p-6 md:p-8 flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-100 relative overflow-hidden">
                  
                  {/* Background Watermark */}
                  <div className="absolute -bottom-6 -right-6 text-gray-100 group-hover:text-[#f25810]/5 transition-colors duration-500">
                    <cert.icon size={120} strokeWidth={1} />
                  </div>
                  
                  <div className="relative z-10">
                    {/* CLIENT LOGO RENDER BLOCK - DYNAMIC BACKGROUND */}
                    <div className={`h-16 w-auto min-w-16 max-w-50 ${cert.darkLogoBg ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} border flex items-center justify-center text-gray-900 mb-5 rounded-sm shadow-sm p-2 group-hover:border-[#f25810] group-hover:text-[#f25810] transition-colors self-start`}>
                      {cert.clientLogo ? (
                        <img 
                          src={cert.clientLogo} 
                          alt={`${cert.authority} Logo`} 
                          className="w-full h-full object-contain" 
                        />
                      ) : (
                        <cert.icon size={28} strokeWidth={1.5} className={cert.darkLogoBg ? 'text-white' : ''} />
                      )}
                    </div>
                    
                    <h3 className="text-xl font-black tracking-tight text-gray-900 mb-3 mt-4">
                      {cert.title}
                    </h3>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-700 font-bold text-[10px] tracking-wider uppercase border border-green-200 rounded-sm">
                      <ShieldCheck size={12} /> {cert.status}
                    </div>
                  </div>
                </div>

                {/* Right Side: Verification Details */}
                <div className="w-full md:w-[60%] lg:w-[65%] p-6 md:p-8 flex flex-col justify-center">
                  
                  {cert.details ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-6 mb-5 bg-gray-50/50 p-5 border border-gray-100 rounded-sm">
                      <div className="sm:col-span-2">
                        <span className="block text-[10px] font-bold text-gray-400 mb-1 tracking-wider uppercase">Project Details</span>
                        <span className="block text-sm font-black text-gray-900">{cert.details.project}</span>
                      </div>
                      
                      <div className="sm:col-span-2">
                        <span className="block text-[10px] font-bold text-gray-400 mb-1 tracking-wider uppercase">Scope of Work</span>
                        <span className="block text-xs font-bold text-gray-700">{cert.details.scope}</span>
                      </div>

                      <div>
                        <span className="block text-[10px] font-bold text-gray-400 mb-1 tracking-wider uppercase">Client </span>
                        <span className="block text-xs font-bold text-gray-800">{cert.authority}</span>
                      </div>

                      <div>
                        <span className="block text-[10px] font-bold text-gray-400 mb-1 tracking-wider uppercase">Execution Mode</span>
                        <span className="block text-xs font-bold text-gray-800">{cert.details.executionMode}</span>
                      </div>

                      <div>
                        <span className="block text-[10px] font-bold text-gray-400 mb-1 tracking-wider uppercase">Timeline</span>
                        <span className="block text-xs font-bold text-gray-800">{cert.details.startDate} - {cert.details.completionDate}</span>
                      </div>

                      <div>
                        <span className="block text-[10px] font-bold text-gray-400 mb-1 tracking-wider uppercase">Completed Value</span>
                        <span className="block text-xs font-black text-green-700 bg-green-50 px-2 py-1 rounded-sm w-fit border border-green-200">
                          {cert.details.completedValue}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8 mb-5">
                      <div>
                        <span className="block text-[11px] font-bold text-gray-400 mb-1 tracking-wider uppercase">Project / Package No.</span>
                        <span className="block text-sm font-black text-gray-900 font-mono tracking-wide bg-gray-100 px-2 py-1 rounded-sm w-fit border border-gray-200">
                          {cert.number}
                        </span>
                      </div>
                      <div className="sm:col-span-2">
                        <span className="block text-[11px] font-bold text-gray-400 mb-1 tracking-wider uppercase">Issuing Client / Authority</span>
                        <span className="block text-sm font-bold text-gray-800">
                          {cert.authority}
                        </span>
                      </div>
                    </div>
                  )}

                  <p className="text-gray-600 text-sm leading-relaxed font-medium border-t border-gray-100 pt-5">
                    {cert.desc}
                  </p>
                  
                  <div className="mt-6 flex flex-wrap items-center gap-6">
                    <button
                      onClick={() => setSelectedCert(cert)}
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#f25810] hover:text-gray-900 transition-colors uppercase tracking-wider w-fit"
                    >
                      <Eye size={16} /> View Certificate
                    </button>

                    <a
                      href={cert.image}
                      download={`MB_Infra_${cert.authority.replace(/\s+/g, '_')}_Certificate`}
                      className="inline-flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-gray-900 transition-colors uppercase tracking-wider w-fit"
                    >
                      <Download size={16} /> Download
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Certificate Image Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-sm shadow-2xl flex flex-col overflow-hidden"
            >
              <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-gray-50">
                <div className="flex items-center gap-3">
                  {/* Dynamic Modal Logo Background */}
                  {selectedCert.clientLogo && (
                    <div className={`flex items-center justify-center p-1.5 rounded-sm ${selectedCert.darkLogoBg ? 'bg-gray-900' : ''}`}>
                      <img 
                        src={selectedCert.clientLogo} 
                        alt="Client Logo" 
                        className="h-6 w-auto object-contain"
                      />
                    </div>
                  )}
                  <h3 className="text-lg font-black text-gray-900 tracking-tight">
                    {selectedCert.authority} - {selectedCert.title}
                  </h3>
                </div>
                
                <div className="flex items-center gap-2 sm:gap-3">
                  <a
                    href={selectedCert.image}
                    download={`MB_Infra_${selectedCert.authority.replace(/\s+/g, '_')}_Certificate`}
                    title="Download Certificate"
                    className="p-2 text-gray-500 hover:text-gray-900 transition-colors bg-white border border-gray-200 rounded-sm hover:border-gray-900"
                  >
                    <Download size={20} />
                  </a>
                  <button
                    onClick={() => setSelectedCert(null)}
                    title="Close"
                    className="p-2 text-gray-500 hover:text-[#f25810] transition-colors bg-white border border-gray-200 rounded-sm hover:border-[#f25810]"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              <div className="relative flex-1 overflow-auto bg-gray-100 p-4 sm:p-8 flex items-center justify-center">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="max-w-full max-h-[70vh] object-contain shadow-lg"
                />
                
                <div className="absolute bottom-4 right-4 pointer-events-none opacity-50">
                  <p className="text-[10px] sm:text-xs font-bold text-gray-900 bg-white/80 px-2 py-1 rounded-sm uppercase tracking-widest">
                    MB Infraprojects Verification
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}