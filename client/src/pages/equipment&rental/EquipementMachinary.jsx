import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Filter,
  ArrowRight,
  Truck,
  PenTool,
  Settings,
  HardHat,
} from "lucide-react";
import { Link } from "react-router-dom";
import { equipmentData } from "../../data/EquipmentData";
// Authentic Fleet Data Extracted directly from MBIPL Profile


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
        <div className="bg-white shadow-xl border-t-4 border-[#f25810] p-6 flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search Input */}
          <div className="relative w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search equipment..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 text-sm px-4 py-3 pl-11 focus:outline-none focus:border-[#f25810] transition-colors"
            />
            <Search className="absolute left-4 top-3.5 w-4 h-4 text-gray-400" />
          </div>

          {/* Category Dropdown (Mobile) & Scrollable Tabs (Desktop) */}
          <div className="w-full md:w-auto flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
            <Filter className="w-4 h-4 text-gray-400 hidden md:block mr-2" />
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 text-xs font-bold transition-all border ${
                  activeCategory === cat
                    ? "bg-[#f25810] text-white border-[#f25810] shadow-md"
                    : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
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
          <div className="text-center py-20">
            <Settings className="w-12 h-12 text-gray-300 mx-auto mb-4 animate-spin-slow" />
            <h3 className="text-xl font-bold text-gray-900">
              No equipment found
            </h3>
            <p className="text-gray-500 text-sm mt-2">
              Adjust your filters or search terms.
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
                  className="bg-white border border-gray-200 group hover:shadow-2xl hover:border-gray-400 transition-all flex flex-col justify-between"
                >
                  {/* Image Container with Industrial overlay */}
                  <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover  opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 text-[10px] font-bold text-gray-900 border border-gray-200 shadow-sm">
                      {item.category}
                    </div>
                  </div>

                  {/* Asset Details */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {item.name}
                    </h3>

                    <div className="flex items-center justify-between border-t border-gray-100 pt-4 mb-4">
                      <div className="flex items-center gap-2">
                        <HardHat className="w-4 h-4 text-gray-400" />
                        <span className="text-xs text-gray-500 font-semibold">
                          Available Units
                        </span>
                      </div>
                      <span className="bg-gray-900 text-white font-mono text-xs px-2 py-0.5 rounded-sm">
                        {item.qty.toString().padStart(2, "0")}
                      </span>
                    </div>

                    {/* Routing to Contact Page with State */}
                    <Link
                      to="/contact"
                      state={{
                        inquiryType: "Equipment Rental",
                        equipmentName: item.name,
                        category: item.category,
                      }}
                      className="w-full py-2.5 border-2 border-gray-900 hover:bg-[#f25810] hover:border-[#f25810] hover:text-white text-gray-900 font-bold text-xs transition-all flex items-center justify-center gap-2 group-hover:shadow-md"
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
