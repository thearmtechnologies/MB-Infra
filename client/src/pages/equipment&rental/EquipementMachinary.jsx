import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Filter,
  ArrowRight,
  HardHat,
  Settings,
} from "lucide-react";
import { Link } from "react-router-dom";
import { equipmentData } from "../../data/EquipmentData";

const categories = [
  "All Equipment",
  "Earthmoving",
  "Cranes & Lifting",
  "Concrete & Batching",
  "Transport & Logistics",
  "Plant Equipment",
  "Support Fleet",
  "Light Vehicles",
];

export default function EquipementMachinary() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Equipment");

  // Filter Logic
  const filteredEquipment = equipmentData.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === "All Equipment" || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      
      {/* 1. Industrial Hero Banner */}
      <div className="relative h-[40vh] md:h-[50vh] bg-gray-900 overflow-hidden flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop"
          alt="Heavy Machinery Fleet"
          className="absolute inset-0 w-full h-full object-cover opacity-25 object-center mix-blend-overlay"
        />
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-[#f25810] text-white px-3 py-1 text-xs font-bold tracking-widest mb-4">
              COMMERCIAL LEASING
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white capitalize tracking-tight mb-4 drop-shadow-lg">
              Machinery & Fleet Rental
            </h1>
            <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto font-medium">
              Deploy our fully maintained, high-capacity EPC execution fleet for
              your critical infrastructure requirements.
            </p>
          </motion.div>
        </div>
      </div>

      {/* 2. Operations Control Bar (Search & Filter) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white shadow-xl border-t-4 border-[#f25810] p-6 md:p-8 rounded-b-sm">
          
          {/* Top Section: Title & Search */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-6">
            <div className="flex items-center gap-3">
              <div className="bg-gray-100 p-2.5 rounded-sm">
                <Filter className="w-5 h-5 text-gray-700" />
              </div>
              <h2 className="text-xl font-black text-gray-900 uppercase tracking-tight">
                Filter Fleet
              </h2>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <input
                type="text"
                placeholder="Search heavy machinery by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 text-sm px-4 py-3 pl-11 focus:outline-none focus:border-[#f25810] focus:ring-1 focus:ring-[#f25810] focus:bg-white transition-all rounded-sm"
              />
              <Search className="absolute left-4 top-3.5 w-4 h-4 text-gray-400" />
            </div>
          </div>

          <div className="h-px w-full bg-gray-100 mb-6"></div>

          {/* Bottom Section: Wrapping Pill Filter (No Scrollbar) */}
          <div className="flex flex-wrap gap-2.5 md:gap-3">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs md:text-sm font-bold transition-all rounded-sm border ${
                  activeCategory === cat
                    ? "bg-[#f25810] text-white border-[#f25810] shadow-md shadow-orange-500/20"
                    : "bg-gray-50 text-gray-600 border-gray-200 hover:border-gray-400 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
        </div>
      </div>

      {/* 3. Machinery Fleet Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {filteredEquipment.length === 0 ? (
          <div className="text-center py-20 bg-white border border-gray-200 shadow-sm rounded-sm">
            <Settings className="w-12 h-12 text-gray-300 mx-auto mb-4 animate-spin-slow" />
            <h3 className="text-xl font-bold text-gray-900">
              No equipment found
            </h3>
            <p className="text-gray-500 text-sm mt-2">
              Adjust your filters or search terms to find available machinery.
            </p>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filteredEquipment.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={item.id}
                  className="bg-white border border-gray-200 group hover:shadow-xl hover:border-gray-400 transition-all flex flex-col justify-between"
                >
                  {/* Image Container with Industrial overlay */}
                  <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 text-[10px] font-bold text-gray-900 border border-gray-200 shadow-sm uppercase tracking-wider">
                      {item.category}
                    </div>
                  </div>

                  {/* Asset Details */}
                  <div className="p-5 flex flex-col grow justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-4 leading-tight">
                        {item.name}
                      </h3>
                      
                      <div className="flex items-center justify-between border-t border-gray-100 pt-4 mb-5">
                        <div className="flex items-center gap-2">
                          <HardHat className="w-4 h-4 text-gray-400" />
                          <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                            Available Units
                          </span>
                        </div>
                        <span className="bg-gray-100 text-gray-900 font-black text-xs px-2.5 py-1 rounded-sm border border-gray-200">
                          {item.qty.toString().padStart(2, "0")}
                        </span>
                      </div>
                    </div>

                    {/* Routing to Contact Page with State */}
                    <Link
                      to="/contact"
                      state={{
                        inquiryType: "Equipment Rental",
                        equipmentName: item.name,
                        category: item.category,
                      }}
                      className="w-full py-3 border-2 border-gray-900 hover:bg-[#f25810] hover:border-[#f25810] hover:text-white text-gray-900 font-bold text-xs transition-all flex items-center justify-center gap-2 group-hover:shadow-md uppercase tracking-wider"
                    >
                      Inquire For Rental
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </div>
  );
}