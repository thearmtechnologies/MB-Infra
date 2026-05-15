import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bgImage from "../../assets/img/bg.png";
import bridge from "../../assets/img/bridge.jpg";
import industrial from "../../assets/img/industrial.jpg";
import pavingRoad from "../../assets/img/pavingRoad.jpg";
import dumpTruck from "../../assets/img/dumpTruck.jpg";
// Slide Data representing the 5 different infrastructure categories
const slidesData = [
  {
    id: 1,
    image: bgImage,
    subtitle: "Building India's Highway Future",
    title: "Engineering The",
    highlight: "Future Of Infrastructure",
    description:
      "MB Infraprojects Pvt. Ltd. specializes in executing massive-scale highways and critical infrastructure projects with uncompromising quality and speed.",
    stats: [
      { number: "500", label: "KMs of Highway Built" },
      { number: "150", label: "Heavy Machineries" },
      { number: "25", label: "Years of Excellence" },
    ],
  },
  {
    id: 2,
    image: bridge,
    subtitle: "Structural Engineering Excellence",
    title: "Connecting Nations With",
    highlight: "Iconic Bridges",
    description:
      "Delivering world-class bridge structures and flyovers utilizing state-of-the-art engineering practices to overcome the most complex geographic challenges.",
    stats: [
      { number: "45", label: "Major Bridges" },
      { number: "12", label: "States Covered" },
      { number: "100", label: "Expert Engineers" },
    ],
  },
  {
    id: 3,
    image: industrial,
    subtitle: "Trusted EPC Construction Experts",
    title: "Powering Growth Through",
    highlight: "Industrial Infra",
    description:
      "Executing large-scale industrial layouts, manufacturing facilities, and heavy civil foundations designed to fuel the nation's economic powerhouse.",
    stats: [
      { number: "30", label: "Industrial Plants" },
      { number: "2M", label: "Sq.Ft Constructed" },
      { number: "0", label: "Safety Incidents" },
    ],
  },
  {
    id: 4,
    image:dumpTruck,    subtitle: "Unmatched Execution Capacity",
    title: "Deploying World-Class",
    highlight: "Heavy Machinery",
    description:
      "Equipped with an advanced fleet of earthmovers, cranes, and specialized road construction equipment to ensure timely and flawless project delivery.",
    stats: [
      { number: "300", label: "Total Fleet Size" },
      { number: "50", label: "Cranes & Rigs" },
      { number: "24/7", label: "Operational Capacity" },
    ],
  },
  {
    id: 5,
    image:pavingRoad,
        subtitle: "Urban Development Partners",
    title: "Paving The Way For",
    highlight: "Modern Roads",
    description:
      "Developing robust state highways, expressways, and urban road networks using advanced pavement technologies for lasting durability.",
    stats: [
      { number: "10+", label: "Expressway Projects" },
      { number: "5M", label: "Tons of Asphalt" },
      { number: "100%", label: "On-Time Delivery" },
    ],
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play interval hook
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slidesData.length - 1 ? 0 : prev + 1,
      );
    }, 5000); // 5 seconds per slide
    return () => clearInterval(timer);
  }, []);

  const slide = slidesData[currentSlide];

  // Animation variants for text elements
  const textVariants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5, ease: "easeIn" } },
  };

  return (
    <section className="relative w-full min-h-[85vh] flex items-center overflow-hidden bg-black">
      {/* 1. Animated Background Images Container */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <motion.img
              src={slide.image}
              alt={slide.highlight}
              className="w-full h-full object-cover object-center"
              initial={{ scale: 1 }}
              animate={{ scale: 1.1 }}
              transition={{ duration: 6, ease: "linear" }} // Ken Burns zoom effect
            />
          </motion.div>
        </AnimatePresence>

        {/* Cinematic Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/60 to-black/20 min-[1200px]:to-transparent z-10"></div>
      </div>

      {/* 2. Main Content Container */}
      <div className="relative z-20 w-full px-6 xl:px-12 mx-auto mt-12 md:mt-0">
        <div className="max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={{
                animate: { transition: { staggerChildren: 0.15 } },
              }}
            >
              {/* Subheading / Badge */}
              <motion.div
                variants={textVariants}
                className="flex items-center gap-3 mb-6"
              >
                <div className="h-0.5 w-12 bg-[#f25810]"></div>
                <span className="text-[#f25810] font-bold tracking-[0.2em] uppercase text-xs md:text-sm shadow-black drop-shadow-md">
                  {slide.subtitle}
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                variants={textVariants}
                className="text-4xl md:text-6xl min-[1800px]:text-7xl font-black text-white leading-[1.1] tracking-tighter uppercase mb-6 drop-shadow-lg"
              >
                {slide.title} <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-[#f25810] to-[#ff8c54]">
                  {slide.highlight}
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={textVariants}
                className="text-base md:text-lg min-[1800px]:text-xl text-gray-300 font-medium mb-10 max-w-2xl leading-relaxed drop-shadow-md"
              >
                {slide.description}
              </motion.p>

              {/* Call to Action Buttons */}
              <motion.div
                variants={textVariants}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button className="bg-[#f25810] hover:bg-[#d44a0d] text-white px-8 py-4 font-bold uppercase tracking-widest text-sm transition-all shadow-lg shadow-[#f25810]/40 flex items-center justify-center gap-2 group">
                  Explore Projects
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
                <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 font-bold uppercase tracking-widest text-sm transition-all flex items-center justify-center">
                  Our Fleet & Machinery
                </button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* 3. Floating Info / Counter Bar */}
      <div className="hidden lg:flex absolute bottom-0 right-0 z-30 bg-[#111111] border-t-4 border-[#f25810] shadow-2xl translate-y-1/4 mr-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="flex items-center divide-x divide-gray-800"
          >
            {slide.stats.map((stat, idx) => (
              <div
                key={idx}
                className={`px-10 py-8 ${idx === 2 ? "bg-[#1a1a1a]" : ""}`}
              >
                <div className="text-4xl font-black text-white mb-1">
                  {stat.number}
                  <span className="text-[#f25810]">+</span>
                </div>
                <div className="text-xs text-gray-400 font-bold uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 4. Slide Indicators (Dots) */}
      <div className="absolute bottom-10 left-6 xl:left-12 z-30 flex gap-2">
        {slidesData.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`transition-all duration-500 rounded-full ${
              currentSlide === idx
                ? "w-8 h-2 bg-[#f25810]"
                : "w-2 h-2 bg-white/40 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
