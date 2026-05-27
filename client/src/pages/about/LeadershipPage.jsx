import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Mail,
  ArrowRight,
  X,
  ChevronRight,
  Hand,
} from "lucide-react";

import { leadershipTeam } from "../../data/leadershipData";
import LeadershipImage from "../../assets/img/hero/leadership.jpg";
// Reusable Organizational Node Component
const OrgNode = ({ title, level }) => {
  let styles = "";

  if (level === "top") {
    styles =
      "bg-gray-900 text-white border-2 border-gray-900 shadow-lg";
  } else if (level === "mid") {
    styles =
      "bg-[#57c7c1] text-gray-900 border-2 border-gray-700 shadow-md";
  } else {
    styles =
      "bg-[#d9c8ff] text-gray-900 border-2 border-gray-400 shadow-sm";
  }

  return (
    <div
      className={`px-4 py-4 rounded-xl text-xs md:text-sm font-black tracking-wide text-center w-40 md:w-48 uppercase transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${styles}`}
    >
      {title}
    </div>
  );
};

export default function LeadershipPage() {
  const [selectedLeader, setSelectedLeader] = useState(null);

  return (
    <div className="w-full bg-[#fafafa] min-h-screen flex flex-col font-sans text-gray-900 selection:bg-[#f25810]/10 selection:text-[#f25810]">
      
      {/* HERO SECTION */}
      <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
        
        <div className="absolute inset-0 z-0">
       
 <img
          src={LeadershipImage}
          alt="Heavy Machinery Fleet"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[40px_40px]"></div>

          <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-black/40 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="h-0.5 w-12 bg-[#f25810]"></div>

              <span className="text-[#f25810] font-bold tracking-wider text-xs md:text-sm uppercase">
                Corporate Governance
              </span>

              <div className="h-0.5 w-12 bg-[#f25810]"></div>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-5 uppercase">
              Engineering{" "}
              <span className="text-transparent pr-2 bg-clip-text bg-linear-to-r from-[#f25810] to-[#ff8c54]">
                Leadership
              </span>
            </h1>

            <p className="text-gray-300 text-sm md:text-base font-medium max-w-2xl mx-auto leading-relaxed">
              Meet the structural minds, executive planners, and civil
              engineering veterans guiding India's massive infrastructure
              programs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* BOARD OF DIRECTORS */}
      <section className="py-24 bg-white relative z-20 -mt-8 shadow-xs">
        
        <div className="max-w-7xl mx-auto px-6 xl:px-12">
          
          <div className="border-b-2 border-gray-900 pb-4 mb-16 flex items-baseline justify-between">
            
            <h2 className="text-2xl md:text-4xl font-black tracking-tighter uppercase">
              The <span className="text-[#f25810]">Board</span> of Directors
            </h2>

            <span className="text-xs font-bold text-gray-400 tracking-widest hidden sm:inline uppercase">
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
                transition={{
                  duration: 0.6,
                  delay: idx * 0.1,
                }}
                className="bg-gray-50 border border-gray-200 p-6 md:p-10 grid grid-cols-1 md:grid-cols-5 gap-8 hover:shadow-xl transition-all duration-300 relative overflow-hidden group border-t-4 border-t-gray-900"
              >
                
                <div className="absolute top-0 right-0 w-24 h-24 bg-gray-100 rounded-bl-full z-0 translate-x-8 -translate-y-8 group-hover:bg-[#f25810]/5 transition-colors duration-300"></div>

                <div className="md:col-span-2 relative h-72 md:h-full min-h-70 bg-gray-200 overflow-hidden shadow-xs rounded-sm">
                  
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover object-top transition-all duration-500 transform group-hover:scale-105"
                  />

                  <div className="absolute bottom-0 left-0 bg-gray-900 px-3 py-1.5 text-[11px] text-white font-bold tracking-wider uppercase">
                    Director
                  </div>
                </div>

                <div className="md:col-span-3 flex flex-col justify-between relative z-10">
                  
                  <div>
                    <h3 className="text-xl md:text-2xl font-black tracking-tight text-gray-900 mb-1">
                      {leader.name}
                    </h3>

                    <p className="text-[#f25810] text-sm font-bold tracking-wide mb-4">
                      {leader.role}
                    </p>

                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 line-clamp-4">
                      {leader.bio}
                    </p>
                  </div>

                  <div className="border-t border-gray-200 pt-5 flex flex-wrap items-center justify-between gap-4">
                    
                    <button
                      onClick={() => setSelectedLeader(leader)}
                      className="text-gray-900 font-bold tracking-wider text-xs flex items-center gap-1.5 hover:text-[#f25810] transition-colors group/btn uppercase"
                    >
                      Read Full Profile

                      <ArrowRight
                        size={14}
                        className="transform group-hover/btn:translate-x-1 transition-transform"
                      />
                    </button>

                    <div className="flex gap-3">
                      <a
                        href={`mailto:${leader.email}`}
                        className="w-8 h-8 bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-white hover:bg-[#f25810] hover:border-[#f25810] transition-all rounded-sm"
                      >
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

      {/* ORGANIZATIONAL FLOWCHART */}
     {/* 3. Organizational Hierarchy Flowchart */}
<section className="py-24 bg-gray-50 border-t border-b border-gray-200 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 xl:px-12">

    <div className="border-b-2 border-gray-900 pb-4 mb-10 flex flex-col md:flex-row md:items-baseline justify-between gap-4">
      <div>
        <h2 className="text-2xl md:text-4xl font-black tracking-tighter uppercase">
          Project-Level <span className="text-[#f25810]">Organizational</span> Structure
        </h2>

        <p className="text-gray-500 text-xs md:text-sm font-medium mt-1">
          Internal task assignment and independent reporting hierarchy used across active infrastructure project sites.
        </p>
      </div>

      <span className="text-xs font-bold text-gray-400 tracking-widest uppercase whitespace-nowrap">
        Engineering Command Matrix
      </span>
    </div>

    {/* Mobile Swipe Hint */}
    <div className="flex md:hidden items-center justify-end text-xs font-bold text-[#f25810] mb-4 animate-pulse gap-1">
      <Hand size={14} />
      Swipe to explore structure
      <ChevronRight size={14} />
    </div>

    {/* Scroll Container */}
    <div className="overflow-x-auto pb-8">

      <div className="min-w-312.5 flex flex-col items-center px-10">

        {/* TOP EXECUTIVE STRUCTURE */}
        <div className="flex flex-col items-center w-full">

          {/* TOP ROW */}
          <div className="relative flex items-center ml-78.75 justify-center gap-28">

            {/* CONNECTOR BETWEEN TOP BOXES */}
            <div className="absolute top-1/2 left-1/2 w-28 h-0.5 bg-gray-700 -translate-x-1/2"></div>

            {/* Managing Director */}
            <div className="relative z-10 w-52 bg-[#ff4f6d] text-white rounded-xl border-2 border-gray-800 px-6 py-5 text-center shadow-lg">
              <h3 className="text-xl font-black leading-tight">
                Managing Director
              </h3>

              <p className="text-sm font-bold mt-1 uppercase tracking-wide">
                Project Command Head
              </p>
            </div>

            {/* Technical Director */}
            <div className="relative z-10 w-52 bg-[#ff4f6d] text-white rounded-xl border-2 border-gray-800 px-6 py-5 text-center shadow-lg">
              <h3 className="text-xl font-black leading-tight">
                Technical Director
              </h3>

              <p className="text-sm font-bold mt-1 uppercase tracking-wide">
                Technical Oversight
              </p>
            </div>

          </div>

          {/* ROOT CONNECTOR FROM MANAGING DIRECTOR */}
          <div className="w-0.5 h-12 bg-gray-700"></div>

          {/* MAIN HORIZONTAL ROOT LINE */}
          <div className="w-[85%] h-0.5 bg-gray-700"></div>

        </div>

        {/* MAIN BRANCHES */}
        <div className="w-full flex justify-between items-start mt-0">

          {/* SITE 1 */}
          <div className="flex flex-col items-center flex-1">

            <div className="w-0.5 h-10 bg-gray-700"></div>

            <div className="w-48 bg-[#57c7c1] border-2 border-gray-700 rounded-xl px-4 py-4 text-center shadow-md">
              <h3 className="font-black text-gray-900 text-lg leading-tight">
                Project Manager
              </h3>

              <p className="font-bold text-sm mt-1">
                Site 1
              </p>
            </div>

            <div className="w-0.5 h-10 bg-gray-400"></div>

            <OrgNode title="Site Engineers" level="low" />

            <div className="w-0.5 h-8 bg-gray-400"></div>

            <div className="bg-yellow-300 border-2 border-gray-700 rounded-xl px-4 py-4 text-center shadow-sm w-40">
              <h3 className="font-black text-gray-900 text-sm uppercase">
                Supervisors
              </h3>
            </div>

            <div className="w-0.5 h-8 bg-gray-400"></div>

            <OrgNode title="Store Manager" level="low" />

            <div className="w-0.5 h-8 bg-gray-400"></div>

            <OrgNode title="Machine Operators" level="low" />
          </div>

          {/* SITE 2 */}
          <div className="flex flex-col items-center flex-1">

            <div className="w-0.5 h-10 bg-gray-700"></div>

            <div className="w-48 bg-[#57c7c1] border-2 border-gray-700 rounded-xl px-4 py-4 text-center shadow-md">
              <h3 className="font-black text-gray-900 text-lg leading-tight">
                Project Manager
              </h3>

              <p className="font-bold text-sm mt-1">
                Site 2
              </p>
            </div>

            <div className="w-0.5 h-10 bg-gray-400"></div>

            <OrgNode title="Site Engineers" level="low" />

            <div className="w-0.5 h-8 bg-gray-400"></div>

            <div className="bg-yellow-300 border-2 border-gray-700 rounded-xl px-4 py-4 text-center shadow-sm w-40">
              <h3 className="font-black text-gray-900 text-sm uppercase">
                Supervisors
              </h3>
            </div>

            <div className="w-0.5 h-8 bg-gray-400"></div>

            <OrgNode title="Store Manager" level="low" />

            <div className="w-0.5 h-8 bg-gray-400"></div>

            <OrgNode title="Machine Operators" level="low" />
          </div>

          {/* SITE 3 */}
          <div className="flex flex-col items-center flex-1">

            <div className="w-0.5 h-10 bg-gray-700"></div>

            <div className="w-48 bg-[#57c7c1] border-2 border-gray-700 rounded-xl px-4 py-4 text-center shadow-md">
              <h3 className="font-black text-gray-900 text-lg leading-tight">
                Project Manager
              </h3>

              <p className="font-bold text-sm mt-1">
                Site 3
              </p>
            </div>

            <div className="w-0.5 h-10 bg-gray-400"></div>

            <OrgNode title="Site Engineers" level="low" />

            <div className="w-0.5 h-8 bg-gray-400"></div>

            <div className="bg-yellow-300 border-2 border-gray-700 rounded-xl px-4 py-4 text-center shadow-sm w-40">
              <h3 className="font-black text-gray-900 text-sm uppercase">
                Supervisors
              </h3>
            </div>

            <div className="w-0.5 h-8 bg-gray-400"></div>

            <OrgNode title="Store Manager" level="low" />

            <div className="w-0.5 h-8 bg-gray-400"></div>

            <OrgNode title="Machine Operators" level="low" />
          </div>

          {/* ACCOUNTS DIVISION */}
          <div className="flex flex-col items-center flex-1">

            <div className="w-0.5 h-10 bg-gray-700"></div>

            <div className="w-48 bg-[#57c7c1] border-2 border-gray-700 rounded-xl px-4 py-4 text-center shadow-md">
              <h3 className="font-black text-gray-900 text-lg leading-tight">
                Chief Accountant
              </h3>

              <p className="font-bold text-sm mt-1">
                Finance Division
              </p>
            </div>

            <div className="w-0.5 h-10 bg-gray-400"></div>

            <OrgNode title="Site Accountants" level="low" />
          </div>

        </div>

      </div>
    </div>
  </div>
</section>

      {/* MODAL */}
      <AnimatePresence>
        
        {selectedLeader && (
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-999 bg-black/70 backdrop-blur-xs p-4 flex items-center justify-center"
            onClick={() => setSelectedLeader(null)}
          >
            
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{
                type: "spring",
                duration: 0.5,
              }}
              className="bg-white max-w-3xl w-full max-h-[90vh] relative border border-gray-300 overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              
              <button
                onClick={() => setSelectedLeader(null)}
                className="absolute top-3 right-3 bg-[#f25810] hover:bg-gray-900 text-white p-2 transition-colors z-50 rounded-sm shadow-md"
              >
                <X size={18} />
              </button>

              <div className="overflow-y-auto w-full flex-1">
                
                <div className="grid grid-cols-1 md:grid-cols-12">

                  <div className="md:col-span-5 bg-gray-900 relative h-72 md:h-auto min-h-75">
                    
                    <img
                      src={selectedLeader.image}
                      alt={selectedLeader.name}
                      className="w-full h-full object-cover object-top"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-gray-950 via-transparent to-transparent"></div>
                  </div>

                  <div className="md:col-span-7 p-6 md:p-10 flex flex-col justify-between bg-white">
                    
                    <div>
                      <h3 className="text-2xl md:text-3xl font-black tracking-tighter text-gray-900 mb-1 pr-10">
                        {selectedLeader.name}
                      </h3>

                      <p className="text-[#f25810] text-sm font-bold tracking-wide mb-6">
                        {selectedLeader.role}
                      </p>

                      <h4 className="text-xs font-bold tracking-widest text-gray-400 mb-2 uppercase">
                        Professional Summary
                      </h4>

                      <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
                        {selectedLeader.bio}
                      </p>

                      <h4 className="text-xs font-bold tracking-widest text-gray-400 mb-3 uppercase">
                        Vetted Credentials
                      </h4>

                      <ul className="space-y-2 mb-8">
                        
                        {selectedLeader.credentials.map(
                          (item, idx) => (
                            <li
                              key={idx}
                              className="flex items-center gap-2 text-xs md:text-sm text-gray-800 font-semibold"
                            >
                              <ShieldCheck
                                size={16}
                                className="text-[#f25810] shrink-0"
                              />

                              {item}
                            </li>
                          )
                        )}
                      </ul>
                    </div>

                    <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      
                      <span className="text-[11px] font-bold text-gray-400 tracking-wider">
                        MB Infraprojects Pvt. Ltd.
                      </span>

                      <a
                        href={`mailto:${selectedLeader.email}`}
                        className="text-gray-600 hover:text-[#f25810] transition-colors flex items-center gap-1 font-bold text-xs tracking-wider uppercase"
                      >
                        <Mail size={14} />
                        Contact Executive
                      </a>
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