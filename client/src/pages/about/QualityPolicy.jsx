import React from "react";
import { motion } from "framer-motion";
import { 
  Target, 
  Clock, 
  TrendingUp, 
  Users, 
  ShieldCheck, 
  HardHat, 
  HeartPulse, 
  Leaf, 
  BookOpen,
  CheckCircle2
} from "lucide-react";
import QualityControlImage from "../../assets/img/quality.jpg";
export default function QualityPolicy() {
  // Quality Pillars extracted from official MBIPL Brochure
  const qualityPillars = [
    {
      title: "Engineering Accuracy",
      icon: Target,
      desc: "Every project is executed with attention to the finest technical details, ensuring structural integrity from foundation to finish."
    },
    {
      title: "Timely Delivery",
      icon: Clock,
      desc: "We meet project deadlines without compromising on quality or safety, optimizing execution through advanced machinery."
    },
    {
      title: "Continuous Improvement",
      icon: TrendingUp,
      desc: "We embrace new technologies, materials, and best practices to stay ahead of industry standards and deliver modern solutions."
    },
    {
      title: "Client Satisfaction",
      icon: Users,
      desc: "We collaborate closely with clients to understand and fulfill their unique requirements across government and private sectors."
    },
    {
      title: "Accountability",
      icon: ShieldCheck,
      desc: "Every team member takes personal ownership for maintaining high standards throughout the project lifecycle."
    }
  ];

  // Health & Safety Pillars extracted from official MBIPL Brochure
  const safetyPillars = [
    {
      title: "Zero-Accident Workplace",
      icon: HardHat,
      desc: "Safety practices are embedded into every stage of our project execution to ensure risk-free construction zones."
    },
    {
      title: "Promoting Health & Well-being",
      icon: HeartPulse,
      desc: "We provide a safe, supportive, and healthy environment for all employees, laborers, and stakeholders on site."
    },
    {
      title: "Protecting the Environment",
      icon: Leaf,
      desc: "We actively seek sustainable execution methods that minimize our environmental footprint during heavy civil works."
    },
    {
      title: "Training & Awareness",
      icon: BookOpen,
      desc: "Regular safety training sessions ensure that all team members are equipped to work safely under challenging conditions."
    }
  ];

  return (
    <div className="w-full bg-white min-h-screen flex flex-col font-sans text-gray-900">
      
      {/* 1. Hero Section - Technical Blueprint Pattern */}
      <section className="relative w-full hero-section flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 z-0">
          <img
            src={QualityControlImage}
            alt="Quality Control Engineering"
            className="w-full h-full object-cover opacity-25"
          />
       
         
          <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-black/50 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="h-0.5 w-12 bg-[#f25810]"></div>
              <span className="text-[#f25810] font-bold tracking-wider text-xs md:text-sm uppercase">
                Corporate Standards
              </span>
              <div className="h-0.5 w-12 bg-[#f25810]"></div>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-5">
              Quality & <span className="text-transparent pr-2 bg-clip-text bg-linear-to-r from-[#f25810] to-[#ff8c54]">Safety Policy</span>
            </h1>
            <p className="text-gray-300 text-sm md:text-base font-medium max-w-2xl mx-auto leading-relaxed">
              We believe that quality is not a one-time act but a continuous journey towards excellence, building lasting structures and trusted partnerships.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Quality Policy Section */}
      <section className="py-20 md:py-24 bg-white relative z-20">
        <div className="max-w-350 mx-auto px-6 xl:px-12">
          
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* Left Content: Quality Statement */}
            <div className="w-full lg:w-[40%]">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="sticky top-32"
              >
                <div className="w-16 h-1.5 bg-[#f25810] mb-6"></div>
                <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-gray-900 mb-6">
                  Uncompromising Quality In Every Milestone
                </h2>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed font-medium mb-6">
                  At MB Infraprojects Pvt. Ltd., we are committed to delivering infrastructure solutions that exceed client expectations through engineering excellence, innovation, and precision.
                </p>
                <div className="bg-gray-50 border-l-4 border-[#f25810] p-6 mt-8">
                  <div className="flex gap-4">
                    <CheckCircle2 size={24} className="text-[#f25810] shrink-0" />
                    <p className="text-gray-800 font-bold text-sm leading-relaxed">
                      "Quality is not a one-time act but a continuous journey towards excellence, building lasting structures and trusted partnerships."
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Content: Quality Pillars Grid */}
            <div className="w-full lg:w-[60%]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                {qualityPillars.map((pillar, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className={`bg-white border border-gray-200 p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 ${idx === qualityPillars.length - 1 && qualityPillars.length % 2 !== 0 ? 'sm:col-span-2' : ''}`}
                  >
                    <div className="w-12 h-12 bg-gray-50 border border-gray-100 flex items-center justify-center text-[#f25810] mb-6 rounded-sm">
                      <pillar.icon size={24} strokeWidth={2} />
                    </div>
                    <h3 className="text-xl font-black tracking-tight text-gray-900 mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed font-medium">
                      {pillar.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 3. Health & Safety Policy Section */}
      <section className="py-20 md:py-24 bg-gray-900 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-size-[40px_40px]"></div>
        </div>

        <div className="max-w-350 mx-auto px-6 xl:px-12 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-6">
              Health, Safety & <span className="text-[#f25810]">Environment</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg font-medium">
              The health, safety, and well-being of our employees, partners, and communities are paramount. We execute heavy civil projects with a strict zero-harm approach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {safetyPillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-gray-800 border-t-4 border-t-[#f25810] p-8 hover:bg-gray-800/80 transition-colors duration-300"
              >
                <div className="w-14 h-14 bg-gray-900 flex items-center justify-center text-white mb-6 rounded-sm shadow-md">
                  <pillar.icon size={26} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-black tracking-tight text-white mb-3">
                  {pillar.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed font-medium">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-800 border border-gray-700 rounded-sm">
              <ShieldCheck size={20} className="text-green-500" />
              <p className="text-gray-300 text-sm font-bold tracking-wide">
                Our Goal: Everyone goes home safe, every day.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}