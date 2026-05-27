import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { allProjectsData } from "../../data/allProjects"; // Adjust path if necessary
import CompleteImage from "../../assets/img/hero/complete.jpg";
export default function CompletedProjects() {
  // Start by loading 6 items to perfectly fit a 3-column grid
  const [loadLimit, setLoadLimit] = useState(6);

  // Filter the central dataset to ONLY include strictly completed projects
  const completedProjects = allProjectsData.filter(
    (project) => project.status === "Completed",
  );

  return (
    <div className="bg-white min-h-screen font-sans antialiased text-gray-900">
      {/* 1. Hero Banner */}
      <section className="relative h-[40vh] min-h-87.5 flex items-center bg-gray-950 overflow-hidden border-b-8 border-gray-900">
        <div className="absolute inset-0">
          <img
            src={CompleteImage}
            alt="Heavy Construction Progress"
            className="w-full h-full object-cover bject-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[30px_30px]" />
          <div className="absolute inset-0 bg-linear-to-t from-gray-950 via-gray-950/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <span className="inline-block py-1 px-3 rounded-sm bg-[#f25810] text-white text-xs font-bold tracking-wider uppercase mb-4">
            Audited Registry
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4 capitalize">
            Completed Infrastructure Projects
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl font-medium">
            Verifiable tracking logs of large-scale civil works successfully
            handed over to India's frontline EPC corporations.
          </p>
        </div>
      </section>

      {/* 2. Compact Engineering Layout Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {completedProjects.slice(0, loadLimit).map((project) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  key={project.id}
                  className="bg-gray-50 border border-gray-200 rounded-md overflow-hidden flex flex-col justify-between hover:border-gray-400 hover:shadow-xl transition-all duration-300 group"
                >
                  <Link
                    to={`/projects/${project.id}`}
                    className="flex flex-col h-full"
                  >
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
          {loadLimit < completedProjects.length && (
            <div className="text-center mt-12">
              <button
                onClick={() => setLoadLimit((prev) => prev + 3)}
                className="bg-gray-900 hover:bg-[#f25810] text-white px-8 py-3.5 font-semibold text-sm tracking-wider transition-colors shadow-md rounded-sm cursor-pointer"
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
            Connect with our industrial procurement, estimation, and machinery
            leasing divisions to finalize contracts on upcoming tenders.
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
