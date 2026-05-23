import React from "react";
import { motion } from "framer-motion";
import { MapPin, Building2, IndianRupee, ArrowRight, Activity, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { allProjectsData } from "../../data/allProjects"; // Adjust path if necessary

export default function OngoingProjects() {
  // Use startsWith to catch statuses like "Ongoing (40% Completed)"
  const ongoingProjects = allProjectsData.filter(
    (project) => project.status.startsWith("Ongoing")
  );

  return (
    <div className="bg-gray-50 min-h-screen font-sans antialiased text-gray-900">
      
      {/* 1. Hero Banner - Active Construction Theme */}
      <section className="relative h-[40vh] min-h-[350px] flex items-center bg-gray-950 overflow-hidden border-b-8 border-gray-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=2070&auto=format&fit=crop"
            alt="Active Construction Site"
            className="w-full h-full object-cover opacity-20 object-center"
          />
          {/* Engineering grid mask */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/70 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <span className="inline-flex items-center gap-2 py-1 px-3 bg-blue-600 text-white text-xs font-semibold tracking-wide rounded-sm shadow-sm mb-4">
            <Activity className="w-3.5 h-3.5 animate-pulse" />
            Active Execution
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Ongoing Infrastructure Projects
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl font-medium">
            Real-time tracking of our active structural developments, earthworks, and highway expansions currently underway across India.
          </p>
        </div>
      </section>

      {/* 2. Active Projects Layout Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Using a 2-column grid to give the 4 ongoing projects maximum visual weight */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {ongoingProjects.map((project, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={project.id}
                className="bg-white border border-gray-200 rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
              >
                {/* Image & Status Container */}
                <div className="h-64 relative overflow-hidden bg-gray-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-sm shadow-md flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span className="text-xs font-bold text-gray-900">{project.status}</span>
                  </div>
                  
                  {/* Dynamic Visual Progress Bar */}
                  <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gray-800">
                    <div 
                      className="h-full bg-blue-600 transition-all duration-1000 ease-out"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>

                {/* Content Block */}
                <div className="p-8 flex flex-col grow">
                  <span className="text-sm font-bold text-[#f25810] tracking-wide block mb-2">
                    {project.highway}
                  </span>
                  
                  <h2 className="text-xl font-bold text-gray-900 leading-snug mb-4 line-clamp-2">
                    {project.title}
                  </h2>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-8 line-clamp-2">
                    {project.desc}
                  </p>

                  {/* Operational Metrics Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-100 mt-auto mb-6">
                    <div className="flex flex-col gap-1">
                      <span className="text-[11px] text-gray-400 font-semibold tracking-wide uppercase">Client</span>
                      <div className="flex items-center gap-1.5 text-sm font-semibold text-gray-800">
                        <Building2 className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                        <span className="truncate" title={project.client}>{project.client}</span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1">
                      <span className="text-[11px] text-gray-400 font-semibold tracking-wide uppercase">Project Value</span>
                      <div className="flex items-center gap-1 text-sm font-bold text-[#f25810]">
                        <IndianRupee className="w-3.5 h-3.5 shrink-0" />
                        {project.value}
                      </div>
                    </div>

                    <div className="flex flex-col gap-1">
                      <span className="text-[11px] text-gray-400 font-semibold tracking-wide uppercase">Location</span>
                      <div className="flex items-center gap-1.5 text-sm font-semibold text-gray-700">
                        <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                        <span className="truncate" title={project.location}>{project.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Link */}
                  <Link
                    to={`/projects/${project.id}`}
                    className="inline-flex items-center gap-2 text-gray-900 font-bold text-sm hover:text-[#f25810] transition-colors w-fit group/link"
                  >
                    View Project Details
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Enterprise CTA Section */}
      <section className="bg-gray-900 text-white py-16 relative overflow-hidden border-t-8 border-[#f25810]">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(#f25810_1px,transparent_1px)] bg-[size:16px_16px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Discuss Your Next Infrastructure Requirement
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed text-sm">
            Reach out to our commercial estimation and procurement divisions to formalize contracts and explore our machinery leasing capabilities.
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