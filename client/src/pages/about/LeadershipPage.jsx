import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Award, Briefcase, Mail, ArrowRight, X } from "lucide-react";
import { leadershipTeam } from "../../data/leadershipData";
// Curated High-Fidelity Colorful Construction/Engineering Leadership Data

export default function LeadershipPage() {
  const [selectedLeader, setSelectedLeader] = useState(null);

  return (
    <div className="w-full bg-gray-50 min-h-screen flex flex-col font-sans text-gray-900">
      
      {/* 1. Hero Section - With Technical Blueprint Pattern */}
      <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541888086925-920eb71e0e55?q=80&w=2070&auto=format&fit=crop"
            alt="Corporate Industrial Engineering"
            className="w-full h-full object-cover opacity-35"
          />
          {/* Engineering blueprint grid line scheme */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-40px_40px]"></div>
          <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-black/40 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="h-0.5 w-12 bg-[#f25810]"></div>
              <span className="text-[#f25810] font-bold tracking-wider text-xs md:text-sm">
                Corporate Governance
              </span>
              <div className="h-0.5 w-12 bg-[#f25810]"></div>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-5">
              Engineering <span className="text-transparent bg-clip-text bg-linear-to-r from-[#f25810] to-[#ff8c54]">Leadership</span>
            </h1>
            <p className="text-gray-300 text-sm md:text-base font-medium max-w-2xl mx-auto leading-relaxed">
              Meet the structural minds, executive planners, and civil engineering veterans guiding India's massive infrastructure programs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Board of Directors Section */}
      <section className="py-24 bg-white relative z-20 -mt-8 shadow-sm">
        <div className="max-w-350 mx-auto px-6 xl:px-12">
          <div className="border-b-2 border-gray-900 pb-4 mb-16 flex items-baseline justify-between">
            <h2 className="text-2xl md:text-4xl font-black tracking-tighter">
              The <span className="text-[#f25810]">Board</span> of Directors
            </h2>
            <span className="text-xs font-bold text-gray-400 tracking-widest hidden sm:inline">
              MB Infra / Board Level
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {leadershipTeam.executives.map((leader, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-gray-50 border border-gray-200 p-6 md:p-10 grid grid-cols-1 md:grid-cols-5 gap-8 hover:shadow-xl transition-all duration-300 relative overflow-hidden group border-t-4 border-t-gray-900"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gray-100 rounded-bl-full z-0 translate-x-8 -translate-y-8 group-hover:bg-[#f25810]/5 transition-colors duration-300"></div>

                {/* Profile Capture - Colorful & Scaled */}
                <div className="md:col-span-2 relative h-72 md:h-full min-h-70 bg-gray-200 overflow-hidden shadow-sm">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover object-top transition-all duration-500 transform group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 bg-gray-900 px-3 py-1.5 text-[11px] text-white font-bold tracking-wider">
                    Director
                  </div>
                </div>

                {/* Profile Overview - Upgraded Typography */}
                <div className="md:col-span-3 flex flex-col justify-between relative z-10">
                  <div>
                    <h3 className="text-xl md:text-2xl font-black tracking-tight text-gray-900 mb-1">
                      {leader.name}
                    </h3>
                    <p className="text-[#f25810] text-sm font-bold tracking-wide mb-4">
                      {leader.role}
                    </p>
                    <p className="text-gray-600 text-base leading-relaxed mb-6">
                      {leader.bio}
                    </p>
                  </div>

                  <div className="border-t border-gray-200 pt-5 flex flex-wrap items-center justify-between gap-4">
                    <button
                      onClick={() => setSelectedLeader(leader)}
                      className="text-gray-900 font-bold tracking-wider text-xs flex items-center gap-1.5 hover:text-[#f25810] transition-colors group/btn"
                    >
                      Read Full Profile 
                      <ArrowRight size={14} className="transform group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                    <div className="flex gap-3">
                      <a href={`mailto:${leader.email}`} className="w-8 h-8 bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-white hover:bg-[#f25810] hover:border-[#f25810] transition-all rounded-sm">
                        <Mail size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Management & Project Officers Section - Fixed Image Sizes & Larger Info Text */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-350 mx-auto px-6 xl:px-12">
          <div className="border-b-2 border-gray-900 pb-4 mb-16 flex items-baseline justify-between">
            <h2 className="text-2xl md:text-4xl font-black tracking-tighter">
              Executive <span className="text-[#f25810]">Management</span> & Officers
            </h2>
            <span className="text-xs font-bold text-gray-400 tracking-widest hidden sm:inline">
              EPC Project Management
            </span>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {leadershipTeam.management.map((leader, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white border border-gray-200 p-8 flex flex-col sm:flex-row justify-between gap-6 group hover:shadow-xl transition-all duration-300 border-l-4 border-l-gray-900 hover:border-l-[#f25810]"
              >
                {/* Profile Column - Large and Colorful */}
                <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gray-100 overflow-hidden shrink-0 border border-gray-200 shadow-sm rounded-sm">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover object-top transition-all duration-300 transform group-hover:scale-105"
                  />
                </div>

                {/* Information Content Block - Scaled for Better Viewability */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-xl font-black tracking-tight text-gray-900">
                          {leader.name}
                        </h3>
                        <p className="text-[#f25810] font-bold text-xs sm:text-sm mt-0.5">
                          {leader.role}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <a href={`mailto:${leader.email}`} className="text-gray-400 hover:text-[#f25810] transition-colors p-1 bg-gray-50 border border-gray-100 rounded-sm">
                          <Mail size={14} />
                        </a>
                      </div>
                    </div>

                    {/* Upgraded Info Paragraph Area */}
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4 bg-gray-50 p-4 border-l-4 border-gray-300 font-medium">
                      {leader.bio}
                    </p>
                  </div>

                  {/* Expertise Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-gray-100">
                    <div className="flex flex-wrap gap-1.5">
                      {leader.credentials.map((cred, cIdx) => (
                        <span key={cIdx} className="text-[12px] bg-gray-100 text-gray-800 px-3 py-1 font-semibold border border-gray-200 rounded-sm">
                          {cred}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={() => setSelectedLeader(leader)}
                      className="text-xs font-bold tracking-wider text-gray-900 hover:text-[#f25810] transition-colors shrink-0"
                    >
                      View Profile →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Full Profile Modal Component Layer */}
      <AnimatePresence>
        {selectedLeader && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-999 bg-black/70 backdrop-blur-sm p-4 flex items-center justify-center"
            onClick={() => setSelectedLeader(null)}
          >
            {/* Modal Wrapper - Added max-h-[90vh], overflow hidden to constrain total height, flex-col to structure internal scrolling */}
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white max-w-3xl w-full max-h-[90vh] relative border border-gray-300 overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button - Stays absolutely pinned to the top right of the modal wrapper */}
              <button
                onClick={() => setSelectedLeader(null)}
                className="absolute top-3 right-3 md:top-4 md:right-4 bg-[#f25810] hover:bg-gray-900 text-white p-2 transition-colors z-100 rounded-sm shadow-md"
              >
                <X size={18} />
              </button>

              {/* Scrollable Internal Content */}
              <div className="overflow-y-auto w-full flex-1">
                <div className="grid grid-cols-1 md:grid-cols-12">
                  {/* Left Visual Column */}
                  <div className="md:col-span-5 bg-gray-900 relative h-72 md:h-auto min-h-75 md:min-h-85">
                    <img
                      src={selectedLeader.image}
                      alt={selectedLeader.name}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-gray-950 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6">
                      <span className="text-[11px] bg-[#f25810] text-white px-3 py-1 font-bold tracking-wider rounded-sm shadow-sm">
                        {selectedLeader.category}
                      </span>
                    </div>
                  </div>

                  {/* Right Profile Details Column */}
                  <div className="md:col-span-7 p-6 md:p-10 flex flex-col justify-between bg-white">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-black tracking-tighter text-gray-900 mb-1 pr-10">
                        {selectedLeader.name}
                      </h3>
                      <p className="text-[#f25810] text-sm font-bold tracking-wide mb-6">
                        {selectedLeader.role}
                      </p>

                      <h4 className="text-xs font-bold tracking-widest text-gray-400 mb-2 uppercase">Professional Summary</h4>
                      <p className="text-gray-700 text-base leading-relaxed mb-6">
                        {selectedLeader.bio}
                      </p>

                      <h4 className="text-xs font-bold tracking-widest text-gray-400 mb-3 uppercase">Vetted Credentials</h4>
                      <ul className="space-y-2 mb-8">
                        {selectedLeader.credentials.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-gray-800 font-medium">
                            <ShieldCheck size={16} className="text-[#f25810] shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <span className="text-[11px] font-bold text-gray-400 tracking-wider">
                        MB Infraprojects Pvt. Ltd.
                      </span>
                      <div className="flex gap-4">
                        <a href={`mailto:${selectedLeader.email}`} className="text-gray-600 hover:text-[#f25810] transition-colors flex items-center gap-1 font-bold text-xs tracking-wider">
                          <Mail size={14} /> Email
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}