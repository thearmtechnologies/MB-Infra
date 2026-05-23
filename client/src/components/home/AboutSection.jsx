import React from "react";
import { Link } from "react-router-dom";
import BridgeImage from "../../assets/img/project/img7.png";
import BridgeImage2 from "../../assets/img/project/img8.png"
export default function AboutSection() {
  return (
    <section className="py-20 md:py-32 bg-white w-full overflow-hidden">
      <div className="w-full px-6 xl:px-12 mx-auto max-w-350">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src={BridgeImage}
                alt="Bridge Construction"
                className="w-full h-72 md:h-112.5 object-cover rounded-sm shadow-sm"
              />
              <img
                src={BridgeImage2}
                alt="Industrial Engineering"
                className="w-full h-72 md:h-112.5 object-cover mt-8 md:mt-12 rounded-sm shadow-sm"
              />
            </div>
            {/* Overlay Badge - Updated to real founded date (2013) */}
            <div className="absolute bottom-10 -left-5 md:-left-10 bg-[#f25810] text-white p-6 md:p-8 shadow-2xl rounded-sm">
              <div className="text-4xl md:text-6xl font-black mb-1">13+</div>
              <div className="text-xs md:text-sm font-bold tracking-wider">
                Years of <br /> Excellence
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1.5 w-10 md:w-12 bg-[#f25810]"></div>
              <span className="text-[#f25810] font-bold tracking-wide text-xs md:text-sm">
                About The Company
              </span>
            </div>

            {/* Authentic Tagline from Profile */}
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] tracking-tighter mb-6">
              Shaping A Stronger,{" "}
              <span className="text-[#f25810]">Better-Connected India</span>
            </h2>

            {/* Authentic Company Overview */}
            <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed font-medium">
              Founded in 2013, MB Infraprojects Pvt. Ltd. has evolved into a
              trusted name in India's infrastructure sector. With over a decade
              of engineering expertise, we specialize in the construction of
              major and minor bridges, VUPs, MUBs, LVUPs, and critical road
              structures across challenging terrains.
            </p>

            {/* Authentic Bullet Points */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {[
                "ISO-9001:2008 Certified Company",
                "Extensive Advanced Machinery Fleet",
                "Skilled & Dedicated Engineering Team",
                "Zero-Accident Workplace Focus",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 group">
                  <div className="w-6 h-6 bg-gray-100 border border-gray-200 group-hover:bg-[#f25810] group-hover:border-[#f25810] flex items-center justify-center shrink-0 transition-colors rounded-sm shadow-sm">
                    <svg
                      className="w-3.5 h-3.5 text-gray-900 group-hover:text-white transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-gray-800 tracking-wide">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <Link
              to="/about/company-profile"
              className="inline-flex bg-transparent border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-3.5 font-bold tracking-wider text-sm transition-all rounded-sm shadow-sm"
            >
              Read Full Profile
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
