import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  ArrowRight, 
  Truck, 
  Wrench, 
  ShieldCheck, 
  Clock, 
  Users, 
  Gauge, 
  AlertCircle,
  CheckCircle,
  Building,
  Factory,
  Waves,
  Trees,
  ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";

// Hero image
import CraneRentalHero from "../../assets/img/crane-rental/hero.png";
// Crane images
import Crane14T from "../../assets/img/crane-rental/14t-crane.png";
import Crane23T from "../../assets/img/crane-rental/23t-crane.png";
import Crane50T from "../../assets/img/crane-rental/50t-crane.png";
import Crane75T from "../../assets/img/crane-rental/hero.png";
import Crane100T from "../../assets/img/crane-rental/100t-crane.png";
import Crane150T from "../../assets/img/crane-rental/hero.png";
import Crane250T from "../../assets/img/crane-rental/250t-crane.png";
import Crane500T from "../../assets/img/crane-rental/500t-crane.png";
import Crane750T from "../../assets/img/crane-rental/750t-crane.png";

// Crane fleet data with specific images
const craneFleet = [
  { 
    capacity: "14 Ton", 
    model: "Mobile Crane", 
    image: Crane14T, 
    specs: "Ideal for small-scale construction, material handling & utility work.",
    category: "Light Duty",
    range: "14T-20T",
    categoryNumber: "01",
    detailedDesc: "Compact mobile cranes ideal for warehouses, fabrication yards, and confined construction sites. Designed for precision lifting and smooth maneuverability in tight spaces.",
    features: [
      "Quick mobilization & setup",
      "Low operational cost",
      "Ideal for tight locations",
      "Experienced operators"
    ]
  },
  { 
    capacity: "23 Ton", 
    model: "Mobile Crane", 
    image: Crane23T, 
    specs: "Perfect for mid-sized projects, structural steel erection & equipment installation.",
    category: "Light Duty",
    range: "14T-20T",
    categoryNumber: "01",
    detailedDesc: "Compact mobile cranes ideal for warehouses, fabrication yards, and confined construction sites. Designed for precision lifting and smooth maneuverability in tight spaces.",
    features: [
      "Quick mobilization & setup",
      "Low operational cost",
      "Ideal for tight locations",
      "Experienced operators"
    ]
  },
  { 
    capacity: "50 Ton", 
    model: "Mobile Crane", 
    image: Crane50T, 
    specs: "Heavy lifting for bridges, industrial plants, and multi-story buildings.",
    category: "Medium Duty",
    range: "14T-20T",
    categoryNumber: "01",
    detailedDesc: "Compact mobile cranes ideal for warehouses, fabrication yards, and confined construction sites. Designed for precision lifting and smooth maneuverability in tight spaces.",
    features: [
      "Quick mobilization & setup",
      "Low operational cost",
      "Ideal for tight locations",
      "Experienced operators"
    ]
  },
  { 
    capacity: "75 Ton", 
    model: "Mobile Crane", 
    image: Crane75T, 
    specs: "High-capacity lifting for precast concrete, heavy machinery & infrastructure.",
    category: "Medium Duty",
    range: "14T-20T",
    categoryNumber: "01",
    detailedDesc: "Compact mobile cranes ideal for warehouses, fabrication yards, and confined construction sites. Designed for precision lifting and smooth maneuverability in tight spaces.",
    features: [
      "Quick mobilization & setup",
      "Low operational cost",
      "Ideal for tight locations",
      "Experienced operators"
    ]
  },
  { 
    capacity: "100 Ton", 
    model: "Mobile Crane", 
    image: Crane100T, 
    specs: "Large-scale projects: power plants, refineries, and major bridge components.",
    category: "Heavy Duty",
    range: "14T-20T",
    categoryNumber: "01",
    detailedDesc: "Compact mobile cranes ideal for warehouses, fabrication yards, and confined construction sites. Designed for precision lifting and smooth maneuverability in tight spaces.",
    features: [
      "Quick mobilization & setup",
      "Low operational cost",
      "Ideal for tight locations",
      "Experienced operators"
    ]
  },
  { 
    capacity: "150 Ton", 
    model: "Mobile Crane", 
    image: Crane150T, 
    specs: "Extreme heavy lifting for wind turbines, shipyards, and mega-structures.",
    category: "Heavy Duty",
    range: "14T-20T",
    categoryNumber: "01",
    detailedDesc: "Compact mobile cranes ideal for warehouses, fabrication yards, and confined construction sites. Designed for precision lifting and smooth maneuverability in tight spaces.",
    features: [
      "Quick mobilization & setup",
      "Low operational cost",
      "Ideal for tight locations",
      "Experienced operators"
    ]
  },
  { 
    capacity: "250 Ton", 
    model: "Mobile Crane", 
    image: Crane250T, 
    specs: "Ultra-heavy lift capacity for high-rise construction and industrial complexes.",
    category: "Ultra Heavy",
    range: "14T-20T",
    categoryNumber: "01",
    detailedDesc: "Compact mobile cranes ideal for warehouses, fabrication yards, and confined construction sites. Designed for precision lifting and smooth maneuverability in tight spaces.",
    features: [
      "Quick mobilization & setup",
      "Low operational cost",
      "Ideal for tight locations",
      "Experienced operators"
    ]
  },
  { 
    capacity: "500 Ton", 
    model: "Mobile Crane", 
    image: Crane500T, 
    specs: "Flagship capacity for the most demanding infrastructure & engineering feats.",
    category: "Ultra Heavy",
    range: "14T-20T",
    categoryNumber: "01",
    detailedDesc: "Compact mobile cranes ideal for warehouses, fabrication yards, and confined construction sites. Designed for precision lifting and smooth maneuverability in tight spaces.",
    features: [
      "Quick mobilization & setup",
      "Low operational cost",
      "Ideal for tight locations",
      "Experienced operators"
    ]
  },
  { 
    capacity: "750 Ton", 
    model: "Mobile Crane", 
    image: Crane750T, 
    specs: "Perfect for mid-sized projects, structural steel erection & equipment installation.",
    category: "Ultra Heavy",
    range: "14T-20T",
    categoryNumber: "01",
    detailedDesc: "Compact mobile cranes ideal for warehouses, fabrication yards, and confined construction sites. Designed for precision lifting and smooth maneuverability in tight spaces.",
    features: [
      "Quick mobilization & setup",
      "Low operational cost",
      "Ideal for tight locations",
      "Experienced operators"
    ]
  },
];

// Service highlights
const serviceHighlights = [
  { icon: Clock, title: "24/7 Availability", description: "Round-the-clock crane rental services to meet your project deadlines without delays." },
  { icon: Users, title: "Expert Operators", description: "Certified and experienced crane operators ensuring safe and efficient lifting operations." },
  { icon: ShieldCheck, title: "Safety Certified", description: "All equipment rigorously inspected and certified to meet the highest safety standards." },
  { icon: Wrench, title: "On-Site Maintenance", description: "Dedicated mechanical support team to ensure zero downtime and maximum productivity." },
];

// Industries served
const industries = [
  { icon: Building, name: "Construction", description: "High-rise buildings, commercial complexes, and residential projects." },
  { icon: Factory, name: "Industrial", description: "Plant setups, equipment installation, and heavy machinery relocation." },
  { icon: Waves, name: "Infrastructure", description: "Bridges, flyovers, ports, and large-scale civil engineering works." },
  { icon: Trees, name: "Renewable Energy", description: "Wind turbine installation, solar farm construction, and green energy projects." },
];

export default function CraneRentals() {
  const heroRef = useRef(null);
  const fleetRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const scrollToFleet = () => {
    fleetRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Group cranes by category
  const groupedCranes = craneFleet.reduce((acc, crane) => {
    if (!acc[crane.category]) {
      acc[crane.category] = [];
    }
    acc[crane.category].push(crane);
    return acc;
  }, {});

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Hero Section with Parallax Scrolling Effect */}
      <section ref={heroRef} className="relative hero-section flex items-center bg-gray-900 overflow-hidden min-h-[90vh]">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            style={{
              y: heroY,
              scale: heroScale,
            }}
            className="w-full h-full"
          >
            <img
              src={CraneRentalHero}
              alt="Crane Rental Services"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block py-1.5 px-4 bg-[#f25810] text-white text-sm font-bold mb-6 shadow-md">
              Heavy Equipment Rentals
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
              Crane Rentals <br />
              <span className="text-[#f25810]">14 Ton to 1100 Ton</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-medium leading-relaxed max-w-2xl">
              India's most reliable crane rental service. From compact 14-ton hydra cranes to massive 500-ton heavy lifters, we provide the perfect lifting solution for every project scale.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#f25810] hover:bg-[#d44a0d] text-white px-8 py-4 font-bold transition-all shadow-lg shadow-orange-500/20 group"
              >
                Get a Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button
                onClick={scrollToFleet}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 font-bold border border-white/30 transition-all"
              >
                Explore Fleet
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Fleet Overview - Row-based Layout with Larger Images */}
      <div ref={fleetRef} id="fleet" className="py-20 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Our Crane Fleet</h2>
            <p className="text-gray-600">
              Comprehensive range of hydraulic cranes and heavy lifters, available for short-term and long-term rentals across India.
            </p>
          </motion.div>

          {/* Capacity Range Banner */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900 text-white p-6 md:p-10 mb-12 flex flex-col md:flex-row items-center justify-between gap-4 rounded-lg"
          >
            <div className="flex items-center gap-4">
              <Gauge className="w-10 h-10 text-[#f25810]" />
              <div>
                <p className="text-sm text-gray-400">Lifting Capacity Range</p>
                <p className="text-3xl font-black">14T – 1100T</p>
              </div>
            </div>
            <div className="flex items-center gap-6 flex-wrap">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm">All Types of Cranes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm">Experienced Operators</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm">Pan-India Service</span>
              </div>
            </div>
          </motion.div>

          {/* Row-based Crane Display with Larger Images */}
          <div className="space-y-12">
            {Object.entries(groupedCranes).map(([category, cranes], categoryIdx) => (
              <motion.div
                key={categoryIdx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIdx * 0.1 }}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                {/* Category Header */}
                <div className="bg-gray-900 px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-[#f25810] font-bold text-sm">#{String(categoryIdx + 1).padStart(2, '0')}</span>
                    <h3 className="text-white font-bold text-xl">{category}</h3>
                  </div>
          
                </div>

                {/* Crane Cards in Row - LARGER IMAGES */}
                <div className="divide-y divide-gray-100">
                  {cranes.map((crane, idx) => (
                    <div key={idx} className="p-6 hover:bg-gray-50 transition-colors duration-200">
                      <div className="flex flex-col lg:flex-row gap-8">
                        {/* Image - LARGER SIZE */}
                        <div className="lg:w-72 h-56 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={crane.image}
                            alt={`${crane.capacity} Crane`}
                            className="w-full h-full object-contain"
                          />
                        </div>

                        {/* Content */}
                        <div className="flex-1 flex flex-col md:flex-row gap-6">
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <h4 className="text-3xl font-black text-gray-900">{crane.capacity}</h4>
                                <p className="text-sm text-gray-500 font-medium">{crane.model}</p>
                              </div>
                              <span className="inline-block px-3 py-1 bg-[#f25810]/10 text-[#f25810] text-xs font-bold rounded-full">
                                {crane.category}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 leading-relaxed">{crane.specs}</p>
                            
                            {/* Features */}
                            <div className="mt-4 flex flex-wrap gap-2">
                              {crane.features && crane.features.map((feature, fi) => (
                                <span key={fi} className="inline-flex items-center gap-1.5 text-xs text-gray-700 bg-gray-100 px-3 py-1.5 rounded-full">
                                  <CheckCircle className="w-3.5 h-3.5 text-[#f25810]" />
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Action Button */}
                          <div className="md:w-48 flex items-start md:items-center">
                            <Link
                              to="/contact"
                              className="w-full inline-flex items-center justify-center gap-2 bg-[#f25810] hover:bg-[#d44a0d] text-white px-6 py-3 font-semibold text-sm transition-all group rounded-lg"
                            >
                              Get Quote
                              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Service Highlights */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Why Choose MB Infraprojects?</h2>
            <p className="text-gray-600">
              Beyond equipment, we provide end-to-end lifting solutions with unmatched reliability and safety.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceHighlights.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center p-6 bg-gray-50 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 rounded-lg group"
              >
                <div className="w-16 h-16 bg-gray-900 text-white mx-auto flex items-center justify-center mb-4 rounded-lg group-hover:bg-[#f25810] transition-colors">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Industries We Serve */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-gray-600">
              Our crane rental solutions are trusted across diverse sectors for critical lifting operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 border-2 border-gray-200 bg-white hover:border-[#f25810] hover:shadow-xl transition-all duration-300 rounded-lg group"
              >
                <industry.icon className="w-10 h-10 text-[#f25810] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{industry.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Call to Action - Safety & Expertise */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-8 h-8 text-[#f25810]" />
                <span className="text-sm font-bold tracking-widest uppercase text-[#f25810]">Safety First</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                Rigorous Safety Standards & Compliance
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Every crane in our fleet undergoes mandatory safety inspections and load testing. Our operators are trained in advanced lifting techniques and emergency protocols, ensuring every lift is executed with zero compromise on safety.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                  <span>ISO 9001:2008 (QMS-99887766)</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                  <span>Daily pre-operational equipment checks</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                  <span>Experienced team</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 w-full bg-gray-800 p-8 border border-gray-700 rounded-lg"
            >
              <h3 className="text-2xl font-bold mb-4">Need a Crane for Your Project?</h3>
              <p className="text-gray-400 mb-6 text-sm">
                Get a customized rental plan tailored to your project requirements and budget.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#f25810] hover:bg-[#d44a0d] text-white px-8 py-4 font-bold transition-all group w-full justify-center rounded-lg"
              >
                Request a Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Footer CTA - Portfolio Link */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
              See Our Cranes in Action
            </h2>
            <p className="text-gray-600 mb-8">
              Explore our project portfolio to see how our crane rental solutions have powered some of India's most challenging infrastructure projects.
            </p>
            <Link
              to="/projects"
              className="inline-flex items-center gap-3 border-2 border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 px-8 py-4 font-bold transition-all group rounded-lg"
            >
              View Project Portfolio
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}