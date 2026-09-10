import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Eye, Images } from "lucide-react";
import Image1 from "../../assets/img/project/img1.jpeg";
import Image2 from "../../assets/img/project/img2.png";
import Image3 from "../../assets/img/project/img3.png";
import Image4 from "../../assets/img/project/img4.png";
import Image5 from "../../assets/img/project/img5.png";
import Image6 from "../../assets/img/project/img6.png";

const galleryHighlights = [
  {
    id: 1,
    image: Image1,
    title: "Structural Bridge Pier Execution",
    category: "Heavy Civil Works",
    span: "col-span-1 md:col-span-2 row-span-2",
    height: "h-72 sm:h-96 md:h-full min-h-[300px] md:min-h-[420px]",
  },
  {
    id: 2,
    image: Image2,
    title: "Expressway Earthmoving Operations",
    category: "Highways & Grading",
    span: "col-span-1 md:col-span-1 row-span-1",
    height: "h-64 md:h-[200px]",
  },
  {
    id: 3,
    image: Image3,
    title: "Bridge Girder Launching & Alignment",
    category: "Flyovers & Bridges",
    span: "col-span-1 md:col-span-1 row-span-1",
    height: "h-64 md:h-[200px]",
  },
  {
    id: 4,
    image: Image4,
    title: "Advanced Concrete Paving Workflow",
    category: "Road Infrastructure",
    span: "col-span-1 md:col-span-1 row-span-1",
    height: "h-64 md:h-[200px]",
  },
  {
    id: 5,
    image: Image5,
    title: "Heavy Equipment In-Field Operations",
    category: "Machinery Deployment",
    span: "col-span-1 md:col-span-1 row-span-1",
    height: "h-64 md:h-[200px]",
  },
];

export default function GallerySection() {
  return (
    <section className="py-20 md:py-32 bg-gray-50 w-full overflow-hidden">
      <div className="w-full px-6 xl:px-12 mx-auto max-w-350">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="h-1.5 w-10 md:w-12 bg-[#f25810]"></div>
              <span className="text-[#f25810] font-bold tracking-[0.2em] uppercase text-xs md:text-sm flex items-center gap-2">
                <Images className="w-4 h-4" />
                On-Site Execution
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tighter uppercase">
              Project <span className="text-[#f25810]">Visual Gallery</span>
            </h2>
            <p className="text-gray-600 text-sm md:text-base font-medium mt-3 max-w-xl">
              Glimpse into our field operations, heavy structural setups, and mega infrastructure sites across India.
            </p>
          </div>

          <Link
            to="/projects/gallery"
            className="group inline-flex items-center gap-3 bg-gray-900 hover:bg-[#f25810] text-white px-7 py-4 font-bold uppercase tracking-widest text-xs md:text-sm transition-all duration-300 rounded-sm shadow-md shrink-0"
          >
            <span>View All Media</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {galleryHighlights.map((item) => (
            <Link
              key={item.id}
              to="/projects/gallery"
              className={`group relative overflow-hidden rounded-sm bg-gray-950 block shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer ${item.span} ${item.height}`}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-108 transition-all duration-700 ease-out"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-300"></div>

              {/* Top Action Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 group-hover:bg-[#f25810] transition-all duration-300 shadow-lg">
                <ArrowUpRight className="w-4 h-4" />
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[#f25810] font-bold tracking-widest uppercase text-[11px] block mb-1">
                  {item.category}
                </span>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white tracking-tight leading-snug">
                  {item.title}
                </h3>
                <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Eye className="w-3.5 h-3.5 text-[#f25810]" />
                  <span>View in Gallery</span>
                </div>
              </div>

              {/* Bottom Border Glow Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#f25810] group-hover:w-full transition-all duration-500"></div>
            </Link>
          ))}
        </div>

        {/* Bottom Banner Bar */}
        <div className="mt-8 bg-white border border-gray-200 rounded-sm p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 bg-orange-50 border border-orange-200 text-[#f25810] flex items-center justify-center shrink-0 rounded-sm font-black text-lg">
              20+
            </div>
            <div>
              <h4 className="text-sm font-black text-gray-900 uppercase tracking-wide">
                Comprehensive Photo & Video Archive
              </h4>
              <p className="text-xs text-gray-500 font-medium">
                Explore drone footage, earthwork clips, and execution progress in our dedicated visual gallery.
              </p>
            </div>
          </div>
          <Link
            to="/projects/gallery"
            className="text-xs font-bold text-[#f25810] hover:text-gray-900 uppercase tracking-widest flex items-center gap-1.5 transition-colors shrink-0"
          >
            <span>Open Gallery Archive</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
