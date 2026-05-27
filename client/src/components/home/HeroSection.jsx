import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bgImage from "../../assets/img/bg.png";
import bridge from "../../assets/img/bridge.jpg";
import industrial from "../../assets/img/industrial.jpg";
import pavingRoad from "../../assets/img/pavingRoad.jpg";
import dumpTruck from "../../assets/img/dumpTruck.jpg";
import { Link } from "react-router-dom";

// STRICTLY REAL DATA EXTRACTED FROM MBIPL C PROFILE 2025 PDF
const slidesData = [
  {
    id: 1,
    image: bgImage,
    subtitle: "Building India's Infrastructure",
    title: "Leading Towards",
    highlight: "Expansion",
    description:
      "Founded in 2013, MB Infraprojects Pvt. Ltd. has evolved into a trusted name in India's infrastructure sector, specializing in critical road structures and major expressways.",
    stats: [
      { number: "13", label: "Years of Excellence" },
      { number: "13", label: "Mega Projects Executed" },
      { number: "75", label: "Cr+ Turnover (FY24)" },
    ],
  },
  {
    id: 2,
    image: bridge,
    subtitle: "Structural Engineering Excellence",
    title: "Mastering Complex",
    highlight: "Structural Works",
    description:
      "Specializing in the construction of Major and Minor Bridges, VUPs, MUBs, LVUPs, and flyovers across challenging terrains in India.",
    stats: [
      { number: "6", label: "National Highways" },
      { number: "3", label: "States Covered" },
      { number: "ISO", label: "9001:2008 Certified" },
    ],
  },
  {
    id: 3,
    image: industrial,
    subtitle: "End-To-End EPC Solutions",
    title: "Executing Massive",
    highlight: "Civil Contracts",
    description:
      "From continuous rigid concrete paving (PQC) to retaining walls and crash barriers, we deliver holistic, end-to-end civil engineering solutions.",
    stats: [
      { number: "9", label: "Completed Mega Projects" },
      { number: "4", label: "Ongoing Mega Projects" },
      { number: "EPC", label: "Turnkey Execution" },
    ],
  },
  {
    id: 4,
    image: dumpTruck,
    subtitle: "Logistics & Heavy Equipment",
    title: "Unmatched Execution",
    highlight: "Capabilities",
    description:
      "We eliminate third-party delays by operating our own massive fleet including dumpers, transit mixers, RMC plants, and heavy-duty crawler cranes.",
    stats: [
      { number: "100", label: "Heavy Machines" },
      { number: "3", label: "In-House RMC Plants" },
      { number: "25", label: "Earthmovers & Cranes" },
    ],
  },
  {
    id: 5,
    image: pavingRoad,
    subtitle: "Trusted By Industry Giants",
    title: "Partnering For",
    highlight: "National Growth",
    description:
      "Collaborating seamlessly with India's largest infrastructure developers like PNC Infratech and H.G. Infra to build the Bharatmala Pariyojana corridors.",
    stats: [
      { number: "7", label: "Top-Tier Clients" },
      { number: "2", label: "Mega Expressways" },
      { number: "550", label: "Crores+ Order Book" },
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
      <div className="relative z-20 w-full px-6 xl:px-12 mx-auto mt-12 md:mt-0 max-w-350">
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
                <Link to="/projects" className="bg-[#f25810] hover:bg-[#d44a0d] text-white px-8 py-4 font-bold uppercase tracking-widest text-sm transition-all shadow-lg shadow-[#f25810]/40 flex items-center justify-center gap-2 group">
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
                </Link>
                <Link to="/fleet" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 font-bold uppercase tracking-widest text-sm transition-all flex items-center justify-center">
                  Our Fleet & Machinery
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

 {/* 3. Floating Info / Counter Bar */}
<div className="hidden lg:flex absolute bottom-4 right-6 z-30">
  <AnimatePresence mode="wait">
    <motion.div
      key={currentSlide}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      className="flex items-center overflow-hidden rounded-sm bg-[#111111]/95 border-t-2 border-[#f25810] shadow-xl backdrop-blur-sm"
    >
      {slide.stats.map((stat, idx) => (
        <div
          key={idx}
          className={`
            min-w-32.5
            px-6
            py-4
            flex
            flex-col
            justify-center
            border-r
            border-gray-800
            last:border-r-0
            ${idx === 2 ? "bg-[#171717]" : ""}
          `}
        >
          {/* Number */}
          <div className="flex items-start leading-none">
            <span className="text-2xl xl:text-3xl font-black text-white tracking-tight">
              {stat.number}
            </span>

            {!isNaN(stat.number) && stat.number !== "0" && (
              <span className="text-[#f25810] text-xl xl:text-2xl font-black ml-0.5 leading-none">
                +
              </span>
            )}
          </div>

          {/* Label */}
          <div className="mt-2 text-[10px] text-gray-400 font-bold uppercase tracking-[0.18em] leading-tight">
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