import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { HardHat, Globe2, TrendingUp, CheckCircle2, ArrowRight, ArrowLeftRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
// Importing your local data structure
import { leadershipTeam } from "../../data/leadershipData";
import { coreValues, companyStats, corporateJourney } from "../../data/companyData";
export default function CompanyProfile() {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  

  // Drag-to-Scroll Handlers
  const startDragging = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  const onDrag = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  // Button Scroll Handlers
  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full bg-white min-h-screen flex flex-col font-sans text-gray-900">
      
      {/* 1. Hero Section */}
      <section className="relative w-full h-[55vh] flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541888086925-920eb71e0e55?q=80&w=2070&auto=format&fit=crop"
            alt="Corporate Industrial Engineering"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[40px_40px]"></div>
          <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-black/40 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="h-0.5 w-12 bg-[#f25810]"></div>
              <span className="text-[#f25810] font-bold tracking-wider text-xs md:text-sm">
                About The Company
              </span>
              <div className="h-0.5 w-12 bg-[#f25810]"></div>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-5">
              Pioneering India's <span className="text-transparent bg-clip-text bg-linear-to-r from-[#f25810] to-[#ff8c54]">Infrastructure</span>
            </h1>
            <p className="text-gray-300 text-sm md:text-base font-medium max-w-2xl mx-auto leading-relaxed">
              We are a premier EPC contractor dedicated to large-scale highway construction, industrial civil engineering, and structural excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Company Overview Section */}
      <section className="py-24 bg-white relative z-20">
        <div className="max-w-350 mx-auto px-6 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6"
            >
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-gray-900 mb-6">
                Building The Framework Of Tomorrow
              </h2>
              <div className="w-20 h-1.5 bg-[#f25810] mb-8"></div>
              
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                MB Infraprojects Pvt. Ltd. is a leading infrastructure development and heavy civil construction company in India. With decades of cross-functional experience, we specialize in the execution of complex Engineering, Procurement, and Construction (EPC) projects across the nation.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                From mega-scale highway layouts and commercial infrastructure to heavy earthmoving and bridge girder launching, our operational capabilities are backed by a massive, state-of-the-art machinery fleet. We partner with government entities and private stakeholders to deliver sustainable, zero-harm environments that drive economic growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/projects" className="bg-[#f25810] hover:bg-[#d44a0d] text-white px-8 py-3.5 font-bold tracking-wider text-sm transition-all shadow-md text-center rounded-sm flex items-center justify-center group">
                  View Our Projects
                  <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 grid grid-cols-2 gap-4 relative"
            >
              <div className="absolute -inset-4 bg-gray-50 -z-10 rounded-sm"></div>
              <div className="h-64 sm:h-80 bg-gray-200 rounded-sm overflow-hidden shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop" 
                  alt="Bridge Construction" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="h-64 sm:h-80 bg-gray-200 rounded-sm overflow-hidden shadow-sm mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=1000&auto=format&fit=crop" 
                  alt="Industrial Machinery" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Operational Statistics Strip */}
      <section className="bg-gray-900 border-t-4 border-[#f25810] py-16">
        <div className="max-w-350 mx-auto px-6 xl:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-gray-700">
            {companyStats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center pt-8 sm:pt-0 first:pt-0"
              >
                <span className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-2">
                  {stat.value}
                </span>
                <span className="text-[#f25810] font-bold text-sm tracking-wide">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Core Values & Strengths */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-350 mx-auto px-6 xl:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-gray-900 mb-4">
              Our Operational Pillars
            </h2>
            <p className="text-gray-600 font-medium text-base">
              The foundational principles that guide our mega-projects, ensure structural integrity, and drive sustainable industrial growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 border-t-4 border-t-gray-900 hover:border-t-[#f25810] group"
              >
                <div className="w-14 h-14 bg-gray-50 flex items-center justify-center mb-6 text-gray-900 group-hover:bg-[#f25810] group-hover:text-white transition-all duration-300 rounded-sm shadow-sm">
                  <item.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-black tracking-tight text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed font-medium">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Executive Leadership */}
      <section className="py-24 bg-white">
        <div className="max-w-350 mx-auto px-6 xl:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 border-b-2 border-gray-900 pb-4">
            <h2 className="text-2xl md:text-4xl font-black tracking-tighter text-gray-900">
              Guided By <span className="text-[#f25810]">Experience</span>
            </h2>
            <Link 
              to="/leadership" 
              className="mt-4 md:mt-0 bg-gray-900 hover:bg-[#f25810] text-white px-6 py-2.5 text-sm font-bold tracking-wider transition-colors rounded-sm shadow-sm"
            >
              Meet Everyone
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[...leadershipTeam.executives, ...leadershipTeam.management].slice(0, 4).map((leader, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-40 h-40 mb-6 overflow-hidden rounded-full border-4 border-gray-100 group-hover:border-[#f25810] transition-colors duration-300 shadow-md">
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="w-full h-full object-cover object-top group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h3 className="text-lg font-black tracking-tight text-gray-900">
                  {leader.name}
                </h3>
                <p className="text-[#f25810] font-bold text-sm mt-1">
                  {leader.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Corporate Journey - Fully Interactive Horizontal Scroll Timeline */}
      <section className="py-24 bg-gray-900 overflow-hidden relative">
        <div className="max-w-350 mx-auto px-6 xl:px-12 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-4xl font-black tracking-tighter text-white">
              Our Industrial <span className="text-[#f25810]">Journey</span>
            </h2>
            <p className="text-gray-400 mt-2 font-medium flex items-center gap-2">
              Drag or use arrows to navigate <ArrowLeftRight size={16} />
            </p>
          </div>
          
          {/* Timeline Navigation Controls */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => scroll("left")}
              className="w-12 h-12 bg-gray-800 hover:bg-[#f25810] text-white flex items-center justify-center rounded-sm transition-colors duration-300"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll("right")}
              className="w-12 h-12 bg-gray-800 hover:bg-[#f25810] text-white flex items-center justify-center rounded-sm transition-colors duration-300"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Container - Upgraded for Mouse Dragging */}
        <div className="w-full pl-6 xl:pl-12">
          <div 
            ref={sliderRef}
            onMouseDown={startDragging}
            onMouseLeave={stopDragging}
            onMouseUp={stopDragging}
            onMouseMove={onDrag}
            className={`flex gap-8 overflow-x-auto pb-12 pt-4 select-none ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <style>{`
              ::-webkit-scrollbar { display: none; }
            `}</style>

            {corporateJourney.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="min-w-[320px] md:min-w-100 shrink-0 border-t-2 border-gray-700 relative pt-8 group"
              >
                {/* Timeline Dot */}
                <div className="absolute -top-2.25 left-0 w-4 h-4 bg-gray-900 border-2 border-gray-600 rounded-full group-hover:border-[#f25810] group-hover:bg-[#f25810] transition-colors duration-300 shadow-[0_0_10px_rgba(242,88,16,0.5)] pointer-events-none"></div>
                
                {/* Timeline Content */}
                <span className="text-5xl font-black text-transparent bg-clip-text bg-linear-to-b from-gray-700 to-gray-900 tracking-tighter absolute -top-4 right-4 -z-10 group-hover:from-gray-600 transition-colors pointer-events-none">
                  {step.year}
                </span>
                
                <h3 className="text-[#f25810] font-black text-2xl tracking-tighter mb-2 pointer-events-none">
                  {step.year}
                </h3>
                <h4 className="text-white font-bold text-lg mb-3 tracking-wide pointer-events-none">
                  {step.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed pr-6 pointer-events-none">
                  {step.desc}
                </p>
              </motion.div>
            ))}
            
            {/* Ending Spacer */}
            <div className="min-w-[6vw] shrink-0 pointer-events-none"></div>
          </div>
        </div>
      </section>

    </div>
  );
}