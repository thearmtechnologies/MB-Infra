import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowLeft, MapPin, Building2, IndianRupee, 
  Clock, ShieldCheck, CheckCircle2, Settings, 
  HardHat, Route 
} from "lucide-react";
import { allProjectsData } from "../../data/allProjects"; // Adjust path as needed

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the exact project matching the URL parameter
  const project = allProjectsData.find((p) => p.id === id);

  // Scroll to the top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Handle missing projects (e.g., if a user types a wrong URL)
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-900">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <p className="text-gray-500 mb-8">The engineering docket you are looking for does not exist.</p>
        <button 
          onClick={() => navigate("/projects")}
          className="bg-[#f25810] text-white px-6 py-3 font-bold text-sm tracking-wider uppercase rounded-sm"
        >
          Return to Portfolio
        </button>
      </div>
    );
  }

  // Determine badge color based on status
  const isCompleted = project.status.toLowerCase() === "completed";
  const badgeColor = isCompleted ? "bg-green-600" : "bg-blue-600";

  return (
    <div className="bg-gray-50 min-h-screen font-sans antialiased text-gray-900">
      
      {/* 1. Technical Hero Header */}
      <section className="relative h-[55vh] min-h-[450px] flex items-end pb-12 bg-gray-950 overflow-hidden border-b-8 border-[#f25810]">
        <div className="absolute inset-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-30 object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-transparent" />
          {/* Engineering blueprint grid line scheme */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px]" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-semibold tracking-wide mb-8 uppercase"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Portfolio
          </button>
          
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className={`inline-flex items-center gap-1.5 py-1 px-3 ${badgeColor} text-white text-xs font-bold tracking-widest uppercase rounded-sm shadow-sm`}>
              {isCompleted ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Clock className="w-3.5 h-3.5" />}
              {project.status}
            </span>
            <span className="inline-block py-1 px-3 bg-gray-800 border border-gray-700 text-gray-300 text-xs font-bold tracking-widest uppercase rounded-sm">
              {project.category}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-4 max-w-4xl">
            {project.title}
          </h1>
          
          <div className="flex items-center gap-2 text-[#f25810] font-bold tracking-wider uppercase text-sm">
            <Route className="w-5 h-5" />
            Corridor: {project.highway}
          </div>
        </div>
      </section>

      {/* 2. Main Content Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            
            {/* Left Column: Technical Report (70%) */}
            <div className="lg:w-2/3 space-y-12">
              
              {/* Executive Summary */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-1 bg-[#f25810] inline-block"></span>
                  Executive Summary
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {project.desc}
                </p>
              </motion.div>

              {/* Scope of Work */}
              {project.projectDetails?.scopeOfWork && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="w-8 h-1 bg-[#f25810] inline-block"></span>
                    Scope of Execution
                  </h2>
                  <div className="bg-white border border-gray-200 p-8 rounded-sm shadow-sm">
                    <ul className="space-y-4">
                      {project.projectDetails.scopeOfWork.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-4">
                          <CheckCircle2 className="w-6 h-6 text-[#f25810] shrink-0 mt-0.5" />
                          <span className="text-gray-700 leading-relaxed font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}

              {/* Key Engineering Features */}
              {project.projectDetails?.keyFeatures && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="w-8 h-1 bg-[#f25810] inline-block"></span>
                    Key Engineering Features
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.projectDetails.keyFeatures.map((feature, idx) => (
                      <div key={idx} className="bg-white border-l-4 border-gray-900 p-6 shadow-sm hover:shadow-md transition-shadow">
                        <Settings className="w-6 h-6 text-gray-400 mb-3" />
                        <p className="text-gray-800 font-semibold text-sm leading-relaxed">{feature}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Health, Safety & Environment */}
              {project.projectDetails?.safetyAndEnvironment && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  className="bg-gray-900 text-white p-8 md:p-10 rounded-sm relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                    <ShieldCheck className="w-32 h-32" />
                  </div>
                  <div className="relative z-10">
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-white">
                      <ShieldCheck className="w-6 h-6 text-green-500" />
                      Health, Safety & Environment (HSE)
                    </h2>
                    <p className="text-gray-300 leading-relaxed max-w-2xl">
                      {project.projectDetails.safetyAndEnvironment}
                    </p>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Right Column: Key Metrics & Machinery (30%) */}
            <div className="lg:w-1/3 w-full space-y-8 sticky top-24">
              
              {/* Data Card */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
                className="bg-white border border-gray-200 shadow-xl rounded-sm overflow-hidden"
              >
                <div className="bg-gray-900 px-6 py-4 border-b-4 border-[#f25810]">
                  <h3 className="text-white font-bold tracking-wider uppercase text-sm">Project Specifications</h3>
                </div>
                
                <div className="p-6 space-y-6">
                  <div className="flex items-start gap-4">
                    <Building2 className="w-5 h-5 text-gray-400 shrink-0 mt-1" />
                    <div>
                      <p className="text-[11px] text-gray-400 font-bold tracking-widest uppercase mb-1">Contracting Client</p>
                      <p className="text-gray-900 font-bold">{project.client}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <IndianRupee className="w-5 h-5 text-gray-400 shrink-0 mt-1" />
                    <div>
                      <p className="text-[11px] text-gray-400 font-bold tracking-widest uppercase mb-1">Project Value</p>
                      <p className="text-[#f25810] font-bold text-lg">{project.value}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-gray-400 shrink-0 mt-1" />
                    <div>
                      <p className="text-[11px] text-gray-400 font-bold tracking-widest uppercase mb-1">Location</p>
                      <p className="text-gray-900 font-bold">{project.location}</p>
                    </div>
                  </div>

                  {project.projectDetails?.timeline && (
                    <div className="flex items-start gap-4">
                      <Clock className="w-5 h-5 text-gray-400 shrink-0 mt-1" />
                      <div>
                        <p className="text-[11px] text-gray-400 font-bold tracking-widest uppercase mb-1">Execution Timeline</p>
                        <p className="text-gray-900 font-bold">{project.projectDetails.timeline}</p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Machinery Deployed List */}
              {project.projectDetails?.machineryUsed && (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-gray-100 border border-gray-200 p-6 rounded-sm"
                >
                  <h3 className="text-gray-900 font-bold tracking-wider uppercase text-sm mb-4 flex items-center gap-2">
                    <HardHat className="w-4 h-4 text-[#f25810]" /> Fleet Deployed
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.projectDetails.machineryUsed.map((machine, idx) => (
                      <span key={idx} className="bg-white border border-gray-300 text-gray-700 text-xs font-bold px-3 py-1.5 rounded-sm">
                        {machine}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}

            </div>
          </div>
        </div>
      </section>

      {/* 3. CTA Section */}
      <section className="bg-gray-200 py-16 border-t border-gray-300">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Require Our Expertise For A Similar Project?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our estimation and commercial teams are available to review tenders and provide robust structural execution plans.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#f25810] hover:bg-[#d44a0d] text-white px-8 py-3.5 font-bold text-sm transition-all shadow-md rounded-sm"
          >
            Contact Commercial Team
          </Link>
        </div>
      </section>

    </div>
  );
}