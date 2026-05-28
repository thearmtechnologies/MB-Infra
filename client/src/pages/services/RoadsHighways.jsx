import React from "react";
import { motion } from "framer-motion";
import { Truck, Shield, Map, Settings, ArrowRight, HardHat } from "lucide-react";
import { Link } from "react-router-dom";
import ServiceHeroImage from "../../assets/img/roadsHighwaysHero.png";
import HeavyMachineryImage from "../../assets/img/heavyMachinery.png";
import AsphaltPavingImage from "../../assets/img/asphaltPaving.png";
import EarthworksImage from "../../assets/img/earthworks.png";
// Data extracted directly from MBIPL C Profile
const capabilities = [
  {
    title: "Concrete & PQC Works",
    description: "Expert execution of Pavement Quality Concrete (PQC) and heavy RCC structures for long-lasting expressway durability.",
    icon: Settings,
  },
  {
    title: "Retaining & RE Walls",
    description: "Specialized construction of Retaining Walls, RE Walls, and RE Panels to support complex highway elevations and terrain modifications.",
    icon: Map,
  },
  {
    title: "Drainage & Culvert Systems",
    description: "Comprehensive installation of Pipe Culverts, Box Culverts, Slab Culverts, and advanced road drainage networks.",
    icon: HardHat,
  },
  {
    title: "Safety Infrastructure",
    description: "Implementation of critical highway safety measures including Crash Barriers, Pedestrian Guardrails, and Fencing.",
    icon: Shield,
  },
];

const machinery = [
  "Excavator WWM Plant 200 TPH",
  "RMC Plant CP-30",
  "Wheel Loaders & Motor Graders",
  "Heavy Bulldozers",
  "Extensive Tipper & Dumper Fleet",
  "Concrete Mixers & Boom Placers"
];

export default function RoadsHighways() {
  return (
    <div className="bg-white min-h-screen ">
      {/* 1. Hero Section - Industrial Corporate Style */}
      <section className="relative hero-section flex items-center bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={ServiceHeroImage}
            alt="Highway Construction"
            className="w-full h-full object-cover"
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
              Roads & Highways
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-medium leading-relaxed">
              Delivering high-speed, heavy-load road networks. We specialize in the structural engineering and civil execution required for India's most critical expressways and state highways.
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
                Engineering The Backbone Of The Nation
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                MB Infraprojects brings over a decade of hands-on expertise to highway construction. Rather than just surface paving, our true strength lies in the deep civil engineering that supports these mega-structures. 
              </p>
              <p className="text-gray-600 leading-relaxed">
                From mass earthworks to the precise casting of toll plazas and curbing, we manage the entire execution lifecycle. Our focus on engineering accuracy ensures that strict project deadlines are met without ever compromising on safety or structural integrity.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <img src={AsphaltPavingImage} alt="Asphalt Paving" className="w-full h-64 object-cover border-b-4 border-[#f25810]" />
              <img src={EarthworksImage} alt="Earthworks" className="w-full h-64 object-cover mt-8 border-b-4 border-gray-900" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Specific Capabilities Grid (Data from PDF) */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-black text-gray-900 mb-4 TitleCase">Civil & Structural Capabilities</h2>
            <p className="text-gray-600">Executing complex road structures with specialized engineering divisions.</p>
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

      {/* 4. Machinery & Fleet (Data from PDF) */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-black mb-6 TitleCase">Heavy Machinery & Execution Fleet</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Owning and operating our own heavy equipment guarantees full control over project timelines. For our highway division, we deploy high-capacity batching plants and earthmovers to ensure continuous material flow.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {machinery.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-300">
                    <Truck className="w-5 h-5 text-[#f25810]" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-5/12 relative">
               <div className="absolute inset-0 border-2 border-[#f25810] translate-x-4 translate-y-4" />
               <img src={HeavyMachineryImage} alt="Heavy Machinery" className="relative z-10 w-full h-auto object-cover  hover:grayscale-0 transition-all duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bridging Services to Portfolio (The Professional EPC Link) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-6 TitleCase">Proven Execution On Mega Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            Our highway capabilities have been successfully deployed on landmark corridors, including the Nagpur-Mumbai Super Communication Expressway and the Delhi-Vadodara Expressway.
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 bg-[#f25810] hover:bg-[#d44a0d] text-white px-8 py-4 font-bold transition-all shadow-lg group"
          >
            View Highway Portfolio
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}