import React from "react";
import { createGeneratorEasing, motion } from "framer-motion";
import { MoveUp, Layers, TrainTrack, HardHat, ArrowRight, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import CraneImage from "../../assets/img/vehicles/crane.png";
import BridgeImage from "../../assets/img/vehicles/bridge.png";
// Data extracted directly from MBIPL C Profile (Page 4)
const capabilities = [
  {
    title: "Major & Minor Bridges",
    description: "Expert execution of long-span major bridges and critical minor bridges across challenging terrains, ensuring high load-bearing capacity and longevity.",
    icon: Layers,
  },
  {
    title: "Grade Separators (ROB & RUB)",
    description: "Construction of Road Over Bridges (ROB) and Road Under Bridges (RUB) to eliminate railway and highway crossing bottlenecks.",
    icon: TrainTrack,
  },
  {
    title: "Vehicular Underpasses (VUP & MUB)",
    description: "Precision engineering of VUPs, MUBs, and Light Vehicular Underpasses (LVUP) integrated seamlessly with existing traffic corridors.",
    icon: HardHat,
  },
  {
    title: "Precast & Girder Erection",
    description: "Specialized operations in Precast Girder Casting and heavy-lift erection, supported by advanced pile and open foundation engineering.",
    icon: MoveUp,
  },
];

// Machinery extracted directly from MBIPL C Profile (Page 11)
const machinery = [
  "Heavy Duty Cranes",
  "Hydra Lifting Equipment",
  "Boom Placers",
  "RMC Plant CP-30",
  "Transit Mixers",
  "Concrete Mixers"
];

export default function BridgesFlyovers() {
  return (
    <div className="bg-white min-h-screen ">
      {/* 1. Hero Section - Industrial Corporate Style */}
      <section className="relative h-[60vh] min-h-125 flex items-center bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=2070&auto=format&fit=crop"
            alt="Bridge Construction"
            className="w-full h-full object-cover opacity-30"
          />
          {/* Engineering Blueprint Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[40px_40px]" />
          <div className="absolute inset-0 bg-linear-to-r from-gray-900 via-gray-900/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block py-1.5 px-4 bg-[#f25810] text-white text-sm font-bold mb-6 shadow-md">
              Core Competency
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              Bridges & Flyovers
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-medium leading-relaxed">
              Connecting the nation through structural engineering excellence. We specialize in complex foundations, precast girder launching, and heavy civil structures for India's growing infrastructure network.
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
              <h2 className="text-3xl font-black text-gray-900 mb-6">
                Structural Integrity At Scale
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Constructing bridges and flyovers requires absolute precision, advanced material science, and rigorous safety protocols. MB Infraprojects executes critical elevated corridors that bypass urban congestion and overcome challenging geological obstacles.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From deep pile foundation boring to the final casting of crash barriers and expansion joints, our structural division handles the entire engineering lifecycle. We leverage in-house heavy machinery to ensure girders are erected safely and precisely on schedule.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 border-4 border-gray-100 translate-x-6 translate-y-6 -z-10" />
              <img 
                src={BridgeImage}
                alt="Bridge Pillars" 
                className="w-full h-100 object-cover shadow-xl border-b-4 border-[#f25810]" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Specific Capabilities Grid (Data from PDF) */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-black text-gray-900 mb-4">Bridge Engineering Capabilities</h2>
            <p className="text-gray-600">Executing diverse structural elements for comprehensive highway integration.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((cap, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 md:p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-[#f25810] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-gray-50 shrink-0 flex items-center justify-center group-hover:bg-[#f25810] transition-colors">
                    <cap.icon className="w-7 h-7 text-gray-900 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{cap.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{cap.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Machinery & Fleet Focus (Data from PDF) */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-black mb-6">Heavy Lifting & Concrete Fleet</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Bridge construction demands uninterrupted concrete pouring and the capacity to lift massive precast elements. We utilize our own dedicated fleet of batching plants and cranes to guarantee structural integrity without reliance on third-party rentals.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                {machinery.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-gray-800/50 p-4 border border-gray-700/50">
                    <Truck className="w-5 h-5 text-[#f25810]" />
                    <span className="font-medium text-gray-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-5/12 w-full">
               <img 
                 src={CraneImage}
                 alt="Cranes and Heavy Machinery" 
                 className="w-full h-125 object-cover rounded-sm shadow-2xl border-l-4 border-[#f25810]" 
               />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bridging Services to Portfolio */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center border border-gray-200 p-12 shadow-sm bg-gray-50">
          <h2 className="text-3xl font-black text-gray-900 mb-6">Explore Our Structural Portfolio</h2>
          <p className="text-gray-600 mb-10 leading-relaxed">
            Our bridge engineering capabilities have been successfully proven on major corridors, including the construction of critical structures for the Nagpur-Mumbai Super Communication Expressway and the NH-48 Tumkur bypass.
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-3 bg-[#f25810] hover:bg-[#d44a0d] text-white px-8 py-4 font-bold transition-all shadow-lg shadow-orange-200 group"
          >
            View Bridge Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}