import React from "react";
import { Link } from "react-router-dom";
import {
  Road,
  Building2,
  Factory,
  Shovel,
  Truck,
  Landmark,
} from "lucide-react";

const services = [
  {
    title: "Highways & Expressways",
    desc: "Development of state and national highways with advanced asphalt and concrete paving.",
    path: "/services/roads-highways",
    Icon: Road,
  },
  {
    title: "Bridges & Flyovers",
    desc: "Complex structural engineering for long-span bridges, grade separators, and viaducts.",
    path: "/services/bridges-flyovers",
    Icon: Building2,
  },
  {
    title: "Industrial Construction",
    desc: "Heavy civil foundations and structural framework for manufacturing facilities and power plants.",
    path: "/services/industrial-railways",
    Icon: Factory,
  },
  {
    title: "Earthmoving & Excavation",
    desc: "Massive scale land clearing, grading, and earthworks using advanced fleet operations.",
    path: "/fleet",
    Icon: Shovel,
  },
  {
    title: "Heavy Machinery Fleet",
    desc: "Deployment and leasing of cranes, excavators, and specialized EPC equipment.",
    path: "/fleet",
    Icon: Truck,
  },
  {
    title: "Civil Infrastructure",
    desc: "Urban infrastructure development including drainage systems, retaining walls, and utilities.",
    path: "/projects",
    Icon: Landmark,
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 md:py-32 bg-gray-50 w-full">
      <div className="w-full px-6 xl:px-12 mx-auto max-w-450">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-0.5 w-12 bg-[#f25810]"></div>
            <span className="text-[#f25810] font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
              Core Capabilities
            </span>
            <div className="h-0.5 w-12 bg-[#f25810]"></div>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tighter uppercase max-w-3xl">
            Engineering <span className="text-[#f25810]">Expertise</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="group bg-white p-10 border border-gray-200 hover:border-[#f25810] transition-colors duration-300 relative overflow-hidden">
              <div className="w-14 h-14 bg-gray-100 group-hover:bg-[#f25810] transition-colors duration-300 flex items-center justify-center mb-8">
                <service.Icon className="w-7 h-7 text-gray-900 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-4 group-hover:text-[#f25810] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 font-medium leading-relaxed mb-8">
                {service.desc}
              </p>
              <Link
                to={service.path}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-900 group-hover:text-[#f25810] transition-colors"
              >
                Learn More 
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              {/* Bottom Orange Line Indicator */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#f25810] group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}