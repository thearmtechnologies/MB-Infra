import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Combined Dataset (All Completed Projects)
const allCompletedProjects = [
  {
    id: "challakere-hariyur-nh150a",
    title: "Construction of Flyovers, Minor Bridges, VUP, PUP, LVUP and Culverts",
    location: "Karnataka, India",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1518241052219-5eb8cce55dc5?q=80&w=1200&auto=format&fit=crop",
    desc: "Comprehensive development of critical structures from Km. 359+100 to Km. 370+000 along the state corridor."
  },
  {
    id: "nagpur-mumbai-expressway",
    title: "Construction of Major Bridges, Minor Bridge, CUP, VUP, POP, VOP, WOP, WUP and Box Culverts",
    location: "Maharashtra, India",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop",
    desc: "Heavy structural execution spanning across the critical timeline milestones from Km. 170+000 to Km. 179+997."
  },
  {
    id: "chitradurga-nh48",
    title: "Construction of Flyovers, Minor Bridges, VUP, PUP, LVUP and Culverts",
    location: "Karnataka, India",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1463177699119-9188fca4a96c?q=80&w=1200&auto=format&fit=crop",
    desc: "Pavement and structural civil deployment executed flawlessly from Km. 9+725 to Km. 20+400."
  },
  {
    id: "northern-kota-bypass",
    title: "Construction of Northern Kota Bypass",
    location: "Rajasthan, India",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?q=80&w=1200&auto=format&fit=crop",
    desc: "Strategic bypass development to enhance regional heavy logistics distribution and structural grading."
  },
  {
    id: "bhilwara-ladpura-nh758",
    title: "Bhilwara Ladpura Project",
    location: "Rajasthan, India",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=1200&auto=format&fit=crop",
    desc: "National highway integration and precision paving development supporting enhanced axle loads."
  },
  {
    id: "panvel-jnpt-project",
    title: "Panvel Project (JNPT)",
    location: "Maharashtra, India",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
    desc: "Specialized logistical road paving and sub-grade preparation designed for high-density terminal transport traffic."
  },
  {
    id: "honnahalli-harihara-bridges",
    title: "Construction of Major Bridges across River Networks",
    location: "Davanagere District, Karnataka",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=1200&auto=format&fit=crop",
    desc: "Precision engineering over river streams involving complex pile foundation works and heavy girder launch schemes."
  },
  {
    id: "rgs-detour-dfccil",
    title: "RGS Detour Construction in Connection with DFCCIL",
    location: "Rajasthan, India",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=1200&auto=format&fit=crop",
    desc: "Grade separation detour structural execution to facilitate seamless crossing layout over high-speed cargo lines."
  },
  {
    id: "delhi-vadodara-expressway-bridges",
    title: "Construction of Minor Bridges, VUP, PUP & LVUP",
    location: "Gujarat/Rajasthan Border",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1513828565645-cdb46ba559ac?q=80&w=1200&auto=format&fit=crop",
    desc: "Structural grade separators and cross-drainage assets completed precisely between Km. 373+000 to Km. 378+000."
  }
];

export default function CompletedProjects() {
  // Start by loading 6 items to perfectly fit a 3-column grid
  const [loadLimit, setLoadLimit] = useState(6);

  return (
    <div className="bg-white min-h-screen font-sans antialiased text-gray-900">
      
      {/* 1. Hero Banner */}
      <section className="relative h-[40vh] min-h-87.5 flex items-center bg-gray-950 overflow-hidden border-b-8 border-gray-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356f58?q=80&w=2070&auto=format&fit=crop"
            alt="Heavy Construction Progress"
            className="w-full h-full object-cover opacity-25 object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]  bg-size-[30px_30px]" />
          <div className="absolute inset-0 bg-linear-to-t from-gray-950 via-gray-950/70 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <span className="inline-block py-1 px-3 rounded-sm bg-[#f25810] text-white text-xs font-bold tracking-wider uppercase  mb-4">
            Audited Registry
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4 capitalize">
            Completed Infrastructure Projects
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl font-medium">
            Verifiable tracking logs of large-scale civil works successfully handed over to India's frontline EPC corporations.
          </p>
        </div>
      </section>

      {/* 2. Compact Engineering Layout Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {allCompletedProjects.slice(0, loadLimit).map((project) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  key={project.id}
                  className="bg-gray-50 border border-gray-200 rounded-md overflow-hidden flex flex-col justify-between hover:border-gray-400 hover:shadow-xl transition-all duration-300 group"
                >
                  <Link to={`/projects/${project.id}`} className="flex flex-col h-full">
                    {/* Compact Media Container */}
                    <div className="h-48 relative overflow-hidden bg-gray-900">
                      <div className="absolute top-3 left-3 z-10 bg-[#f25810] text-white font-semibold text-[10px] px-2.5 py-1 tracking-widest uppercase shadow-sm rounded-sm">
                        {project.status}
                      </div>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-95"
                      />
                    </div>

                    {/* Metadata Content Block */}
                    <div className="p-6 flex flex-col grow">
                      <h2 className="text-[17px] font-semibold text-gray-900 leading-snug mb-3 line-clamp-2">
                        {project.title}
                      </h2>
                      
                      <div className="flex items-center gap-2 text-sm font-medium text-gray-500 mb-4">
                        <MapPin className="w-4 h-4 text-[#f25810] shrink-0" />
                        <span className="truncate">{project.location}</span>
                      </div>

                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-6">
                        {project.desc}
                      </p>
                      
                      {/* Fake bottom margin to push the action button to the bottom if description is short */}
                      <div className="mt-auto">
                        <span className="text-[#f25810] font-bold text-sm tracking-wide flex items-center gap-1 group-hover:gap-2 transition-all">
                          View Project Details
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* 3. Dynamic Loading Node */}
          {loadLimit < allCompletedProjects.length && (
            <div className="text-center mt-12">
              <button
                onClick={() => setLoadLimit((prev) => prev + 3)}
                className="bg-gray-900 hover:bg-[#f25810] text-white px-8 py-3.5 font-semibold text-sm tracking-wider transition-colors shadow-md rounded-sm"
              >
                Load More Projects
              </button>
            </div>
          )}

        </div>
      </section>

      {/* 4. Enterprise CTA Section - Simplified */}
      <section className="bg-gray-900 text-white py-16 relative overflow-hidden border-t-8 border-[#f25810]">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(#f25810_1px,transparent_1px)] bg-size-[16px_16px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Want To Discuss Your Next Infrastructure Project?
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed text-sm">
            Connect with our industrial procurement, estimation, and machinery leasing divisions to finalize contracts on upcoming tenders.
          </p>
          <div className="flex justify-center">
            <Link
              to="/contact"
              className="bg-[#f25810] hover:bg-[#d44a0d] text-white px-8 py-3.5 font-bold text-sm transition-all shadow-md shadow-orange-950/40 rounded-sm"
            >
              Contact Commercial Team
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}