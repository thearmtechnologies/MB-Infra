import React from "react";
import { Link } from "react-router-dom";
import TumkurBypassImage from "../../assets/img/allproject/tumkurBypass.png";
import ChallakereImage from "../../assets/img/allproject/challakereHariyur.png";
import NagpurMumbaiImage from "../../assets/img/allproject/nagpurMumbai.png";
import ChitradurgaImage from "../../assets/img/allproject/chitradurga.png";
// Featuring the Top 4 Highest-Value Projects extracted from the company profile
// IMPORTANT: Ensure the 'id' fields here perfectly match the 'id' fields in your allProjectsData.js
const projects = [
  { 
    id: "tumkur-bypass-nh48", // <-- Add the matching project ID here
    title: "Tumkur Bypass Section (NH-48)", 
    category: "Bridges & Underpasses (167 Cr)", 
    img: TumkurBypassImage
  },
  { 
    id: "challakere-hariyur-nh150a", // <-- Add the matching project ID here
    title: "NH-150A Challakere to Hariyur", 
    category: "Flyovers & Bridges (72.44 Cr)", 
    img: ChallakereImage
  },
  { 
    id: "nagpur-mumbai-expressway", // <-- Add the matching project ID here
    title: "Nagpur-Mumbai Expressway", 
    category: "Major Bridges & VUP (64.56 Cr)", 
    img: NagpurMumbaiImage
  },
  { 
    id: "chitradurga-nh48", // <-- Add the matching project ID here
    title: "NH-48 Chitradurga Section", 
    category: "Flyovers & Culverts (50.06 Cr)", 
    img: ChitradurgaImage
  }
];

export default function ProjectsSection() {
  return (
    <section className="py-20 md:py-32 bg-white w-full">
      <div className="w-full px-6 xl:px-12 mx-auto max-w-350">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-0.5 w-12 bg-[#f25810]"></div>
              <span className="text-[#f25810] font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
                Featured Work
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tighter uppercase">
              Signature <span className="text-[#f25810]">Projects</span>
            </h2>
          </div>
          <Link to='/projects' className="bg-gray-900 hover:bg-[#f25810] text-white px-8 py-4 font-bold uppercase tracking-widest text-sm transition-all shrink-0">
            View All Projects
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {projects.map((project, idx) => (
            // Changed from <div> to <Link> and added to={`/project/${project.id}`}
            <Link 
              key={idx} 
              to={`/projects/${project.id}`} 
              className="block group relative h-87.5 md:h-125 overflow-hidden cursor-pointer"
            >
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[#f25810] font-bold tracking-widest uppercase text-xs block mb-3">
                  {project.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-4">
                  {project.title}
                </h3>
                <div className="h-0.5 w-0 bg-[#f25810] group-hover:w-16 transition-all duration-500"></div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}