import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Navigation, TrendingUp, CheckCircle, ArrowRight, Shield, Tractor } from "lucide-react";
import { Link } from "react-router-dom";

export default function HighwaysAndRoads() {
  const [activeTab, setActiveTab] = useState(0);

  // Tabbed Capabilities Data
  const capabilities = [
    {
      title: "Mass Earthworks & Grading",
      icon: Tractor,
      image: "https://images.unsplash.com/photo-1572025442646-866d16c84a54?q=80&w=1200&auto=format&fit=crop",
      desc: "Our earthworks division handles massive volumetric terrain modifications. Utilizing a heavy fleet of excavators and automated graders, we prepare highly stable sub-grades across diverse geological terrains, ensuring long-term highway integrity."
    },
    {
      title: "Asphalt & Rigid Paving",
      icon: Navigation,
      image: "https://images.unsplash.com/photo-1518241052219-5eb8cce55dc5?q=80&w=1200&auto=format&fit=crop",
      desc: "We deploy state-of-the-art sensor-guided pavers capable of laying both flexible asphalt and continuous rigid concrete pavements. Our high-capacity batching plants ensure uninterrupted material flow for rapid mega-project execution."
    },
    {
      title: "Structural Viaducts & Underpasses",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=1200&auto=format&fit=crop",
      desc: "Highways require complex crossing solutions. We construct heavily reinforced vehicular underpasses, elevated viaducts, and drainage culverts that integrate seamlessly into the primary road network without disrupting existing terrain."
    }
  ];

  // Featured Projects for Zig-Zag Layout
  const projects = [
    {
      name: "Western Corridor Expressway",
      location: "Maharashtra - Gujarat Border",
      stats: { length: "142 Km", value: "₹2,450 Cr", status: "Completed 2023" },
      image: "https://images.unsplash.com/photo-1463177699119-9188fca4a96c?q=80&w=1200&auto=format&fit=crop",
      desc: "A massive 6-lane access-controlled expressway cutting through challenging hilly terrain. This project required the excavation of over 4 million cubic meters of rock and the deployment of 3 specialized asphalt batching plants."
    },
    {
      name: "NH-44 Highway Upgradation",
      location: "Central India Zone",
      stats: { length: "210 Km", value: "₹3,100 Cr", status: "Ongoing" },
      image: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=1200&auto=format&fit=crop",
      desc: "Expanding the existing 4-lane national highway into a 6-lane economic corridor. The project involves real-time traffic management, the construction of 14 major grade separators, and continuous rigid concrete paving."
    }
  ];

  return (
    <div className="w-full bg-white min-h-screen flex flex-col font-sans text-gray-900">
      
      {/* 1. Responsive Split Hero Section (Image behind text on mobile) */}
      <section className="relative w-full min-h-[85vh] lg:min-h-[75vh] flex bg-gray-900 overflow-hidden">
        
        {/* Background Image Layer (Absolute on mobile, 55% split on desktop) */}
        <div className="absolute inset-0 lg:left-[45%] lg:w-[55%] z-0">
          <motion.img 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1 }}
            src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop" 
            alt="Highway Construction Site" 
            className="w-full h-full object-cover opacity-30 lg:opacity-100"
          />
          {/* Desktop gradient blend */}
          <div className="hidden lg:block absolute inset-0 bg-linear-to-r from-gray-900 via-transparent to-transparent w-40"></div>
          {/* Mobile gradient to ensure text readability */}
          <div className="block lg:hidden absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
        </div>

        {/* Text Canvas Layer */}
        <div className="w-full lg:w-[45%] bg-transparent lg:bg-gray-900 flex flex-col justify-end lg:justify-center px-6 sm:px-12 lg:px-20 py-16 lg:py-0 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1.5 w-10 md:w-12 bg-[#f25810]"></div>
              <span className="text-[#f25810] font-bold text-xs md:text-sm tracking-wide">
                Core EPC Capability
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-black text-white tracking-tighter mb-6 leading-[1.1]">
              Highways And <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#f25810] to-[#ff8c54]">Arterial Roads</span>
            </h1>
            <p className="text-gray-300 lg:text-gray-400 text-sm md:text-lg font-medium leading-relaxed mb-8 max-w-md">
              Connecting the nation through high-speed, heavy-load road networks. We deliver state-of-the-art expressways engineered for maximum durability and zero-harm execution.
            </p>
            <button 
              onClick={() => document.getElementById('featured-projects').scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#f25810] hover:bg-[#d44a0d] text-white px-6 md:px-8 py-3.5 md:py-4 font-bold text-sm transition-all shadow-lg rounded-sm inline-flex items-center group w-fit"
            >
              Explore Our Highways
              <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. Interactive Capabilities (State-Driven Tab Layout) */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-350 mx-auto px-6 xl:px-12">
          
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-gray-900 mb-3 md:mb-4">
              Execution Capabilities
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl font-medium">
              Our highway division is equipped to handle every phase of road construction, from initial terrain leveling to final smart-tolling integration.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
            {/* Left: Tab Navigation List */}
            <div className="w-full lg:w-1/3 flex flex-col gap-3">
              {capabilities.map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center gap-3 md:gap-4 p-4 lg:p-5 text-left transition-all duration-300 rounded-sm border-l-4 ${
                    activeTab === idx 
                      ? "bg-gray-50 border-[#f25810] shadow-sm" 
                      : "bg-white border-transparent hover:bg-gray-50"
                  }`}
                >
                  <div className={`p-2 rounded-sm transition-colors ${activeTab === idx ? "bg-[#f25810] text-white" : "bg-gray-100 text-gray-500"}`}>
                    <tab.icon size={20} strokeWidth={2} />
                  </div>
                  <span className={`text-sm md:text-base font-bold ${activeTab === idx ? "text-gray-900" : "text-gray-500"}`}>
                    {tab.title}
                  </span>
                </button>
              ))}
            </div>

            {/* Right: Dynamic Tab Content Crossfade */}
            <div className="w-full lg:w-2/3 relative min-h-100 lg:min-h-112.5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 flex flex-col h-full"
                >
                  <div className="w-full h-56 sm:h-72 lg:h-96 rounded-sm overflow-hidden mb-6 relative shadow-md">
                    <img 
                      src={capabilities[activeTab].image} 
                      alt={capabilities[activeTab].title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-2 md:mb-3 tracking-tight">
                    {capabilities[activeTab].title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
                    {capabilities[activeTab].desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Projects (Optimized Overlayered Layout) */}
      <section id="featured-projects" className="py-16 md:py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-350 mx-auto px-6 xl:px-12">
          
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-gray-900 mb-4">
              Featured Highway Projects
            </h2>
            <div className="w-16 h-1.5 bg-[#f25810] mx-auto"></div>
          </div>

          <div className="flex flex-col gap-16 lg:gap-32">
            {projects.map((project, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center relative group`}
              >
                
                {/* Image Container (Reduced height on mobile) */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="w-full lg:w-[60%] h-65 sm:h-87.5 lg:h-120 shadow-lg md:shadow-xl overflow-hidden rounded-sm relative z-0"
                >
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </motion.div>

                {/* Overlapping Info Box (Reduced padding & adjusted layout on mobile) */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={`w-[92%] sm:w-[85%] lg:w-[45%] bg-white p-6 sm:p-8 md:p-12 shadow-xl relative z-10 -mt-12 sm:-mt-16 lg:mt-0 ${idx % 2 === 0 ? "lg:-ml-16" : "lg:-mr-16"} border-t-4 border-[#f25810]`}
                >
                  <div className="flex items-center gap-2 text-[#f25810] mb-3 md:mb-4">
                    <MapPin size={16} />
                    <span className="font-bold text-xs md:text-sm">{project.location}</span>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-gray-900 mb-4 md:mb-6">
                    {project.name}
                  </h3>
                  
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium mb-6 md:mb-8">
                    {project.desc}
                  </p>

                  {/* Stats Grid: Collapses nicely on mobile */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 border-t border-gray-100 pt-5 md:pt-6">
                    <div>
                      <span className="block text-[10px] md:text-xs font-bold text-gray-400 mb-1">Total Length</span>
                      <span className="block text-sm md:text-base font-black text-gray-900">{project.stats.length}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] md:text-xs font-bold text-gray-400 mb-1">Project Value</span>
                      <span className="block text-sm md:text-base font-black text-gray-900">{project.stats.value}</span>
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <span className="block text-[10px] md:text-xs font-bold text-gray-400 mb-1">Current Status</span>
                      <span className="block text-sm md:text-base font-bold text-[#f25810]">{project.stats.status}</span>
                    </div>
                  </div>
                </motion.div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Action CTA Section */}
      <section className="bg-gray-900 py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#f25810]/5 transform -skew-y-2 scale-110"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <TrendingUp size={40} className="text-[#f25810] mx-auto mb-6 md:mb-8" />
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-4 md:mb-6">
            Ready To Engineer The Next Mega-Corridor?
          </h2>
          <p className="text-gray-400 text-sm md:text-lg mb-8 md:mb-10 font-medium">
            Contact our project division to discuss tollways, structural paving, and heavy earthmoving contracts.
          </p>
          <Link 
            to="/contact" 
            className="bg-[#f25810] hover:bg-[#d44a0d] text-white px-8 md:px-10 py-3.5 md:py-4 font-bold text-sm transition-all shadow-lg rounded-sm inline-flex items-center"
          >
            Contact Infrastructure Team
          </Link>
        </div>
      </section>

    </div>
  );
}