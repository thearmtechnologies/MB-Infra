// src/components/PanIndia/MapView.jsx
import React from "react";
import { motion } from "framer-motion";
import indiaMapSvg from "../../assets/img/india-map.svg"; // Your dark map SVG

const LocationPin = ({ type, status, isActive }) => {
  // Determine Map Pin Color Strategy
  let pinColor = "#f25810"; // Default Orange (Ongoing)
  if (type === "HQ") {
    pinColor = "#3b82f6"; // BLUE for Head Office
  } else if (status === "Completed") {
    pinColor = "#22c55e"; // GREEN for Completed Works
  }
  
  return (
    <div className="relative flex items-center justify-center">
      {/* Outer Radar Pulse */}
      <div 
        className={`absolute w-7 h-7 rounded-full animate-ping opacity-60`} 
        style={{ backgroundColor: pinColor }}
      />
      {/* Solid Core Pin */}
      <svg 
        width="24" height="24" viewBox="0 0 24 24" 
        fill={pinColor} stroke="#ffffff" strokeWidth="1.5"
        className={`relative z-10 transition-transform duration-300 drop-shadow-lg ${isActive ? 'scale-150' : 'scale-100 hover:scale-125'}`}
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        {type === "HQ" ? (
          <circle cx="12" cy="10" r="4" fill="#ffffff"></circle>
        ) : (
           <circle cx="12" cy="10" r="2.5" fill="#ffffff"></circle>
        )}
      </svg>
    </div>
  );
};

export default function MapView({ data, activeLocation, onLocationSelect }) {
  return (
    <div className="relative w-full h-150 lg:h-187.5 bg-linear-to-b from-[#fef8f2] to-[#f6efe7] rounded-2xl overflow-hidden border border-black/10 shadow-xl flex items-center justify-center">
      
      <img 
        src={indiaMapSvg} 
        alt="Map of India" 
        className="absolute w-full h-full object-contain opacity-35 p-4 pointer-events-none"
        onError={(e) => { e.target.style.display = 'none'; }}
      />

      {data.map((loc) => (
        <motion.div
          key={loc.id}
          className="absolute cursor-pointer group z-20"
          style={{ top: loc.coordinates.top, left: loc.coordinates.left }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          onClick={() => onLocationSelect(loc.id)}
        >
          <LocationPin 
            type={loc.type}
            status={loc.status} 
            isActive={activeLocation === loc.id} 
          />
          
          {/* Map Tooltip on Hover */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 hidden group-hover:block w-max bg-white text-gray-900 text-xs px-4 py-3 rounded-lg border border-gray-200 shadow-2xl z-50 pointer-events-none">
            <span className={`block font-bold text-sm mb-1 ${loc.type === 'HQ' ? 'text-blue-600' : 'text-gray-900'}`}>
              {loc.title}
            </span>
            <div className="flex justify-between items-center gap-6">
               <span className="text-gray-500">{loc.state}</span>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent border-t-white" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}