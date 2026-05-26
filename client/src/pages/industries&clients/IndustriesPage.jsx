import React from "react";
import { motion } from "framer-motion";
import { 
  Map, 
  Train, 
  Ship, 
  Building2, 
  Route, 
  ArrowRight 
} from "lucide-react";
import { Link } from "react-router-dom";

// Data strictly extracted from MBIPL C Profile 2025
const industriesData = [
  {
    id: "national-highways",
    title: "National Highways & Expressways",
    description: "Delivering critical road structures, major and minor bridges, and VUPs for India's premier high-speed corridors, including the Nagpur–Mumbai Super Communication Expressway and Delhi-Vadodara Expressway.",
    icon: Route,
    highlight: "Bharatmala Pariyojna Integration"
  },
  {
    id: "state-highways",
    title: "State Highways & PWD Corridors",
    description: "Executing complex structural civil contracts and bypass developments across challenging state-level terrains, ensuring seamless regional connectivity on routes like SH-33 and NH-150A.",
    icon: Map,
    highlight: "Regional Infrastructure Development"
  },
  {
    id: "railways-freight",
    title: "Indian Railways & Freight Corridors",
    description: "Precision engineering for grade separation, including ROBs, RUBs, and detour constructions facilitating uninterrupted high-speed cargo movement for the DFCCIL grid.",
    icon: Train,
    highlight: "Heavy Cargo Line Structures"
  },
  {
    id: "port-logistics",
    title: "Port Connectivity & Logistics",
    description: "Constructing specialized, high-durability road networks and sub-grade preparations designed to withstand continuous high-density transport traffic at major hubs like the JNPT.",
    icon: Ship,
    highlight: "Terminal Transport Corridors"
  },
  {
    id: "epc-partnerships",
    title: "Turnkey EPC Partnerships",
    description: "Acting as the trusted structural execution backbone for India's top-tier EPC giants, including PNC Infratech, H.G. Infra, and Ashoka Buildcon, to deliver mega-projects on strict timelines.",
    icon: Building2,
    highlight: "B2B Infrastructure Contracting"
  }
];

export default function IndustriesPage() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans antialiased text-gray-900">
      
      {/* 1. Hero Banner */}
      <section className="relative h-[45vh] min-h-87.5 flex items-center justify-center overflow-hidden bg-black border-b-8 border-[#f25810]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
            alt="Infrastructure Sectors"
            className="w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/50 to-transparent z-10"></div>
        </div>
        
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#f25810] font-bold tracking-[0.2em] uppercase text-sm md:text-base mb-4 block">
              Core Execution Sectors
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase leading-tight mb-6">
              Industries We Serve
            </h1>
            <p className="text-gray-300 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
              Delivering structural excellence and robust civil engineering solutions across India's most critical infrastructure sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Industries Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industriesData.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={industry.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white border border-gray-200 p-8 rounded-sm shadow-sm hover:shadow-xl hover:border-[#f25810]/50 transition-all duration-300 group flex flex-col"
                >
                  <div className="w-14 h-14 bg-gray-100 flex items-center justify-center rounded-sm mb-6 group-hover:bg-[#f25810] transition-colors duration-300">
                    <Icon className="w-7 h-7 text-gray-900 group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 uppercase tracking-wide">
                    {industry.title}
                  </h3>
                  
                  <span className="text-xs font-bold tracking-widest text-[#f25810] uppercase mb-4 block">
                    {industry.highlight}
                  </span>
                  
                  <p className="text-gray-600 leading-relaxed text-sm grow">
                    {industry.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Streamlined CTA Section */}
      <section className="bg-gray-200 py-16 border-t border-gray-300">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 uppercase tracking-wide">
            Discuss Your Sector-Specific Requirements
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect with our engineering and estimation teams to review structural plans and secure robust execution for your upcoming tender.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-[#f25810] hover:bg-[#d44a0d] text-white px-8 py-4 font-bold text-sm tracking-wider uppercase transition-all shadow-md rounded-sm"
          >
            Contact Commercial Team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}