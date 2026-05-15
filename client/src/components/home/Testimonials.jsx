import React from "react";

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-32 bg-gray-50 w-full">
      <div className="w-full px-6 xl:px-12 mx-auto max-w-450">
        
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-0.5 w-12 bg-[#f25810]"></div>
            <span className="text-[#f25810] font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
              Client Trust
            </span>
            <div className="h-0.5 w-12 bg-[#f25810]"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tighter uppercase max-w-3xl">
            Words From Our <span className="text-[#f25810]">Partners</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((_, idx) => (
            <div key={idx} className="bg-white p-10 border-t-4 border-gray-900 hover:border-[#f25810] transition-colors shadow-sm">
              <svg className="w-10 h-10 text-gray-200 mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-gray-600 font-medium leading-relaxed mb-8 italic">
                "MB Infraprojects demonstrated unparalleled engineering capability during the expressway expansion. Their deployment of heavy machinery and strict adherence to timelines set a new benchmark."
              </p>
              <div>
                <h4 className="text-lg font-black text-gray-900 uppercase tracking-tight">Chief Engineer</h4>
                <span className="text-xs font-bold text-[#f25810] uppercase tracking-widest">National Highway Authority</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}