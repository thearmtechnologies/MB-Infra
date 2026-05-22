import React from "react";
import { motion } from "framer-motion";
import {
  Compass,
  Target,
  ShieldCheck,
  Award,
  Lightbulb,
  Users,
  HardHat,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function VisionMission() {
  const containerVariants = {
    animate: { transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Structured Corporate Values matching the MBIPL profile criteria
  const corporateValues = [
    {
      icon: HardHat,
      title: "Safety First",
      desc: "Enforcing zero-compromise site safety protocols across all ongoing highway, major bridge, and heavy earthworks operations to protect our workforce and communities.",
    },
    {
      icon: Award,
      title: "Quality Excellence",
      desc: "Delivering structural engineering work that matches national highway standards and precise client design specifications through rigorous material testing.",
    },
    {
      icon: ShieldCheck,
      title: "Absolute Integrity",
      desc: "Maintaining transparency, corporate governance, and ethical contract execution across all public-private partnerships and tender projects.",
    },
    {
      icon: Users,
      title: "Synergistic Teamwork",
      desc: "Combining the collaborative grit of our field engineers, surveyors, project planners, and heavy machinery operators to hit tight handover deadlines.",
    },
    {
      icon: Lightbulb,
      title: "Continuous Innovation",
      desc: "Deploying modern construction technologies, fleet tracking systems, and efficient project execution methodologies to optimize project delivery lifecycles.",
    },
  ];

  return (
    <div className="bg-[#fcfcfc] text-gray-900 font-sans selection:bg-[#f25810]/10 selection:text-[#f25810]">
      {/* HEADER SECTION - Minimal Industrial Style */}
      <section className="bg-gray-950 text-white pt-28 pb-20 relative overflow-hidden">
        {/* Subtle engineering grid background overlay */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#f25810 1px, transparent 1px), linear-gradient(to right, #f25810 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#f25810]" />
              <span className="text-[#f25810] text-xs font-bold uppercase tracking-widest">
                Corporate Foundations
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
              Our Vision, Mission & Core Values
            </h1>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl leading-relaxed">
              The fundamental engineering philosophies, execution disciplines,
              and organizational principles guiding MB Infraprojects toward
              sustainable infrastructure growth.
            </p>
          </div>
        </div>
      </section>

      {/* VISION & MISSION SECTION - Balanced Dual Card Layout */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {/* VISION PANEL */}
          <div className="bg-white border border-gray-200 p-8 md:p-12 rounded-lg shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-[#f25810]" />
            <div>
              <div className="w-12 h-12 bg-[#f25810]/10 rounded-md flex items-center justify-center text-[#f25810] mb-8">
                <Compass size={24} />
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">
                Our Vision
              </h2>
              <p className="text-gray-700 text-lg font-medium leading-relaxed mb-4">
                "To become a globally recognized benchmark in infrastructure,
                building smart, long-lasting structural solutions that
                accelerate regional connectivity and economic progress."
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                We strive to enhance standard engineering benchmarks across
                India by consistently taking on complex design challenges and
                developing robust regional lifelines.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-100 text-xs font-mono uppercase tracking-wider text-gray-400">
              [ Strategic Destination ]
            </div>
          </div>

          {/* MISSION PANEL */}
          <div className="bg-white border border-gray-200 p-8 md:p-12 rounded-lg shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gray-900" />
            <div>
              <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center text-gray-900 mb-8">
                <Target size={24} />
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-gray-700 text-lg font-medium leading-relaxed mb-4">
                "To deploy premium-grade civil infrastructure on schedule
                through highly calculated engineering models, systematic field
                quality management, and absolute safety criteria."
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                We deliver high-load major highways, multi-span structures, and
                large drainage networks utilizing optimal logistics management
                and modern asset fleets.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-100 text-xs font-mono uppercase tracking-wider text-gray-400">
              [ Core Operational Mandate ]
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES SECTION - 5 Pillar Clean Grid */}
      <section className="bg-gray-50 border-t border-b border-gray-200 py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-2xl mb-16">
            <span className="text-[#f25810] text-xs font-bold uppercase tracking-wider block mb-2">
              The MBIPL DNA
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Our Core Values
            </h2>
            <p className="text-gray-600 text-sm mt-3 leading-relaxed">
              Five unyielding operational pillars embedded deep into our project
              planning cycles, site field offices, and client stakeholder
              relationships.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {corporateValues.map((value, idx) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-white p-8 border border-gray-200 rounded-lg shadow-xs hover:border-gray-300 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 bg-gray-50 border border-gray-200 rounded-md flex items-center justify-center text-[#f25810] mb-6">
                      <IconComponent size={20} strokeWidth={2} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 tracking-tight mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {value.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-50 flex justify-end">
                    <span className="text-xs font-mono text-gray-300 font-bold">
                      0{idx + 1}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ACTION REDIRECT FOOTER */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-xl font-bold text-gray-900 tracking-tight">
            See these core corporate pillars in live operation.
          </h3>
          <p className="text-gray-500 text-sm mt-2 max-w-xl mx-auto leading-relaxed">
            Discover our extensive machinery fleet assets and complete portfolio
            track records built entirely upon these values.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 bg-gray-900 text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-md hover:bg-[#f25810] transition-colors shadow-sm"
            >
              Our Project Track Record
              <ArrowRight size={14} />
            </Link>
            <Link
              to="/machinery"
              className="inline-flex items-center bg-gray-100 text-gray-700 text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-md hover:bg-gray-200 transition-colors"
            >
              View Asset Fleet
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
