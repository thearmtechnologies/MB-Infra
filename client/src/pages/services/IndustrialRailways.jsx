import React from "react";
import { motion } from "framer-motion";
import { Train, Ship, Truck, HardHat, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import RailwayHeroImage from "../../assets/img/railwayHero.png";
// Data extracted directly from MBIPL C Profile (Industrial & Railways capabilities)
const capabilities = [
  {
    title: "Railway Freight Corridors",
    description: "Executing critical grade separation detours and structural underpasses for high-speed Dedicated Freight Corridors (DFCCIL).",
    icon: Train,
  },
  {
    title: "Port Connectivity",
    description: "Specialized logistical road paving and sub-grade preparation designed for high-density terminal transport traffic at major ports like JNPT.",
    icon: Ship,
  },
  {
    title: "Industrial Logistics",
    description: "End-to-end industrial transport and material logistics managing multi-million-ton aggregate and coal transportation.",
    icon: Truck,
  },
  {
    title: "Heavy Civil Structures",
    description: "Engineering robust foundations and seamless crossing layouts capable of withstanding extreme freight and industrial axle loads.",
    icon: HardHat,
  },
];

export default function IndustrialRailways() {
  return (
    <div className="bg-white min-h-screen ">
      {/* 1. Hero Section - Industrial Corporate Style */}
      <section className="relative hero-section flex items-center bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={RailwayHeroImage}
            className="w-full h-full object-cover "
          />
          <div className="absolute inset-0 bg-linear-to-r from-gray-900 via-gray-900/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block py-1 px-3 bg-[#f25810] text-white text-xs font-bold tracking-widest uppercase mb-6">
              Core Competency
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6 TitleCase">
              Industrial & Railways
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-medium leading-relaxed">
              Delivering high-capacity rail detours, port logistics networks, and heavy-duty industrial pavements engineered for maximum durability and seamless cargo transit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Overview & Execution Methodology */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-black text-gray-900 mb-6 TitleCase">
                Powering Industrial Corridors & Port Connectivity
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                MB Infraprojects leverages deep civil engineering expertise to construct the critical infrastructure that drives India's logistics and industrial growth. From major port connectivity grids to expansive railway freight detours, we execute with precision.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our approach ensures that specialized sub-grades and rigid pavement networks are built specifically to handle massive, high-density transport axle loads, guaranteeing long-term structural integrity for uninterrupted supply chains.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop" alt="Port Logistics Infrastructure" className="w-full h-64 object-cover border-b-4 border-[#f25810]" />
              <img src="https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=800&auto=format&fit=crop" alt="Railway Corridors" className="w-full h-64 object-cover mt-8 border-b-4 border-gray-900" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Specific Capabilities Grid (Data from PDF) */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-black text-gray-900 mb-4 TitleCase">Civil & Structural Capabilities</h2>
            <p className="text-gray-600">Executing complex industrial and railway structures with specialized engineering divisions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((cap, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 border border-gray-100 hover:shadow-xl transition-shadow group"
              >
                <div className="w-14 h-14 bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-[#f25810] transition-colors">
                  <cap.icon className="w-7 h-7 text-gray-900 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 TitleCase">{cap.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Bridging Services to Portfolio (The Professional EPC Link) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-6 TitleCase">Proven Execution On Mega Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            Our industrial capabilities have been successfully deployed on landmark logistics corridors, including the RGS Detour for DFCCIL and Port Connectivity Grid at JNPT Panvel.
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 bg-[#f25810] hover:bg-[#d44a0d] text-white px-8 py-4 font-bold transition-all shadow-lg group"
          >
            View Industrial Portfolio
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}