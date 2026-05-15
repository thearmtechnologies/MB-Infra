import React from "react";

export default function AboutSection() {
  return (
    <section className="py-20 md:py-32 bg-white w-full overflow-hidden">
      <div className="w-full px-6 xl:px-12 mx-auto max-w-450">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop" 
                alt="Bridge Construction" 
                className="w-full h-75 md:h-112.5 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=1000&auto=format&fit=crop" 
                alt="Industrial Engineering" 
                className="w-full h-75 md:h-112.5 object-cover mt-8 md:mt-12"
              />
            </div>
            {/* Overlay Badge */}
            <div className="absolute bottom-10 -left-5 md:-left-10 bg-[#f25810] text-white p-6 md:p-8 shadow-2xl">
              <div className="text-4xl md:text-6xl font-black mb-1">25+</div>
              <div className="text-xs md:text-sm font-bold uppercase tracking-widest">Years of <br/> Engineering</div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-0.5 w-12 bg-[#f25810]"></div>
              <span className="text-[#f25810] font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
                About The Company
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] tracking-tighter uppercase mb-6">
              Building The Backbone Of <span className="text-[#f25810]">The Nation</span>
            </h2>
            
            <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed font-medium">
              MB Infraprojects Pvt. Ltd. is a premier EPC (Engineering, Procurement, and Construction) organization in India. We deliver massive-scale highways, intricate bridge structures, and heavy industrial facilities with a steadfast commitment to quality, safety, and timely execution.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {[
                "Government Approved Contractor",
                "ISO 9001:2015 Certified",
                "Massive In-house Machinery Fleet",
                "Strict Safety Protocols (Zero Harm)"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-gray-900 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-gray-800 uppercase tracking-wide">{item}</span>
                </div>
              ))}
            </div>

            <button className="bg-transparent border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-4 font-bold uppercase tracking-widest text-sm transition-all">
              Read Full Profile
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}