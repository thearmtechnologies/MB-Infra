import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Building2,
  IndianRupee,
  ArrowRight,
  Layers,
  LayoutGrid,
  HardHat,
  Train,
} from "lucide-react";
import { Link } from "react-router-dom";

// Exact 13 Audited Projects from MBIPL C Profile 2025
const allProjectsData = [
  // Roads & Highways
  {
    id: "northern-kota-bypass",
    title: "Construction of Northern Kota Bypass",
    highway: "SH-33",
    location: "Rajasthan, India",
    client: "Ravi Infrabuild Projects Pvt. Ltd.",
    value: "5.6 Cr",
    status: "Completed",
    category: "roads",
    image:
      "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "bhilwara-ladpura-nh758",
    title: "Bhilwara Ladpura Project",
    highway: "NH-758",
    location: "Rajasthan, India",
    client: "Ravi Infrabuild Projects Pvt. Ltd.",
    value: "3.10 Cr",
    status: "Completed",
    category: "roads",
    image:
      "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "ratnagiri-kolhapur-nh166",
    title: "Four Laning of Ratnagiri Kolhapur Section (Pkg-1)",
    highway: "NH-166 (Km 0.000 to Km 19.769 & Km 31.000 to 67.140)",
    location: "Maharashtra, India",
    client: "Ravi Infrabuild Projects Pvt. Ltd.",
    value: "20.20 Cr",
    status: "Ongoing (Structure Work Completed)",
    category: "roads",
    image:
      "https://images.unsplash.com/photo-1463177699119-9188fca4a96c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "raichur-nh748a",
    title: "Construction of Structures for HACH Road Project",
    highway: "NH-748A (Km. 245+000 to Km. 259+000)",
    location: "Karnataka, India",
    client: "G.R. Infraprojects Limited",
    value: "48.27 Cr",
    status: "Ongoing (2% Completed)",
    category: "roads",
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop",
  },

  // Bridges & Flyovers
  {
    id: "honnahalli-harihara-bridges",
    title: "Construction of Major Bridges in Honnahalli & Harihara Taluk",
    highway: "Davanagere District",
    location: "Karnataka, India",
    client: "East Cost Construction & Industries Ltd.",
    value: "37.81 Cr",
    status: "Completed",
    category: "bridges",
    image:
      "https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "chitradurga-nh48",
    title:
      "Construction of Flyovers, Minor Bridges, VUP, PUP, LVUP and Culverts",
    highway: "NH-48 (Chitradurga Section, Km. 9+725 to 20+400)",
    location: "Karnataka, India",
    client: "PNC Infratech Ltd.",
    value: "50.06 Cr",
    status: "Completed",
    category: "bridges",
    image:
      "https://images.unsplash.com/photo-1513828565645-cdb46ba559ac?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "nagpur-mumbai-expressway",
    title: "Construction of Major Bridges, CUP, VUP, POP, VOP & Box Culverts",
    highway: "Nagpur-Mumbai Super Communication Expressway",
    location: "Maharashtra, India",
    client: "PNC Infratech Ltd.",
    value: "64.56 Cr",
    status: "Completed",
    category: "bridges",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "delhi-vadodara-expressway-bridges",
    title: "Construction of Minor Bridges, VUP, PUP & LVUP",
    highway: "Delhi-Vadodara Expressway (Pkg-31)",
    location: "Gujarat/Rajasthan Border",
    client: "PNC Infratech Ltd.",
    value: "34.0 Cr",
    status: "Completed",
    category: "bridges",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "challakere-hariyur-nh150a",
    title: "Construction of Flyovers, Minor Bridges, VUP, PUP & Culverts",
    highway: "NH-150A (Challakere to Hariyur Section)",
    location: "Karnataka, India",
    client: "PNC Infratech Ltd.",
    value: "72.44 Cr",
    status: "Completed",
    category: "bridges",
    image:
      "https://images.unsplash.com/photo-1518241052219-5eb8cce55dc5?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "tumkur-bypass-nh48",
    title:
      "Construction of MJB, MUB, VUP, LVUP, VOP, Flyover, ROB in Tumkur Bypass",
    highway: "NH-48 (Bharatmala Pariyojna)",
    location: "Karnataka, India",
    client: "H.G. Infra Engineering Ltd.",
    value: "167.0 Cr",
    status: "Ongoing (40% Completed)",
    category: "bridges",
    image:
      "https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "badadat-maradgi-bridges",
    title: "Construction of Minor Bridges, Major Bridge, Flyovers, SVUP & VUP",
    highway: "MH/KN Border to Maradgi S Andola Project",
    location: "Maharashtra/Karnataka Border",
    client: "PNC Infratech Ltd.",
    value: "42.25 Cr",
    status: "Ongoing (50% Completed)",
    category: "bridges",
    image:
      "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?q=80&w=1200&auto=format&fit=crop",
  },

  // Industrial & Railways
  {
    id: "panvel-jnpt-project",
    title: "Panvel Project (JNPT Port Connectivity)",
    highway: "Port Logistics Infrastructure",
    location: "Maharashtra, India",
    client: "Ashoka Buildcon Ltd.",
    value: "3.0 Cr",
    status: "Completed",
    category: "other",
    image:
      "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "rgs-detour-dfccil",
    title: "RGS Detour Construction in Connection with DFCCIL",
    highway: "Ringus Jaipur Railway Corridor",
    location: "Rajasthan, India",
    client: "MHK AT PLT (JV)",
    value: "2.5 Cr",
    status: "Completed",
    category: "other",
    image:
      "https://images.unsplash.com/photo-1572025442646-866d16c84a54?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function AllProjects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [loadLimit, setLoadLimit] = useState(6);

  // Filter Logic
  const filteredProjects =
    activeFilter === "all"
      ? allProjectsData
      : allProjectsData.filter((project) => project.category === activeFilter);

  // Filter Tabs Configuration
  const filterTabs = [
    { id: "all", label: "All Projects", icon: LayoutGrid },
    { id: "roads", label: "Roads & Highways", icon: Layers },
    { id: "bridges", label: "Bridges & Flyovers", icon: HardHat },
    { id: "other", label: "Industrial & Railways", icon: Train },
  ];

  return (
    <div className="bg-white min-h-screen  font-sans antialiased text-gray-900">
      {/* 1. Hero Banner - Corporate Blueprint Aesthetic */}
      <section className="relative h-[40vh] min-h-87.5 flex items-center bg-gray-950 overflow-hidden border-b-8 border-gray-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356f58?q=80&w=2070&auto=format&fit=crop"
            alt="Infrastructure Portfolio"
            className="w-full h-full object-cover opacity-20 object-center"
          />
          {/* Engineering grid schematics mask */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[30px_30px]" />
          <div className="absolute inset-0 bg-linear-to-t from-gray-950 via-gray-950/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <span className="inline-block py-1 px-3 rounded-sm bg-[#f25810] text-white text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
            Project Portfolio
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Our Global Infrastructure Projects
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl font-medium">
            Explore our audited registry of mega-structures, critical highways,
            and industrial facilities delivered across India for top-tier EPC
            clients.
          </p>
        </div>
      </section>

      {/* 2. Sticky Filter Navigation */}
      <section className="bg-white border-b border-gray-200 sticky top-16 min-[1000px]:top-24 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-nowrap overflow-x-auto no-scrollbar justify-start md:justify-center">
            <div className="flex w-max min-w-full md:min-w-0 py-2 md:py-0">
              {filterTabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeFilter === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveFilter(tab.id);
                      setLoadLimit(6);
                    }}
                    className={`flex items-center gap-2.5 px-6 py-4 font-semibold text-sm transition-all whitespace-nowrap border-b-2 ${
                      isActive
                        ? "text-[#f25810] border-[#f25810] bg-gray-50/50"
                        : "text-gray-500 border-transparent hover:text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    <Icon
                      className={`w-4 h-4 ${isActive ? "text-[#f25810]" : "text-gray-400"}`}
                    />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Projects Grid - Compact Card Layout */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.slice(0, loadLimit).map((project) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{ duration: 0.4 }}
                  key={project.id}
                  className="bg-white border border-gray-200 rounded-sm overflow-hidden flex flex-col justify-between hover:border-gray-300 hover:shadow-xl transition-all duration-300 group"
                >
                  <Link
                    to={`/projects/${project.id}`}
                    className="flex flex-col h-full"
                  >
                    {/* Media Container */}
                    <div className="h-48 relative overflow-hidden bg-gray-900">
                      {/* Dynamic Status Badge */}
                      <div
                        className={`absolute top-3 left-3 z-10 text-white font-semibold text-[10px] px-2.5 py-1 tracking-widest uppercase shadow-sm rounded-sm ${
                          project.status.includes("Completed")
                            ? "bg-[#f25810]"
                            : "bg-blue-600"
                        }`}
                      >
                        {project.status.includes("Completed")
                          ? "Completed"
                          : "Ongoing"}
                      </div>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-95"
                      />
                    </div>

                    {/* Content Block */}
                    <div className="p-6 flex flex-col grow">
                      <h2 className="text-[17px] font-bold text-gray-900 leading-snug mb-3 line-clamp-2">
                        {project.title}
                      </h2>

                      <div className="flex items-center gap-2 text-sm font-medium text-gray-500 mb-5">
                        <MapPin className="w-4 h-4 text-[#f25810] shrink-0" />
                        <span className="truncate">{project.location}</span>
                      </div>

                      {/* Technical Details Grid */}
                      <div className="grid grid-cols-1 gap-3 pt-4 border-t border-gray-100 mb-6">
                        <div className="flex items-start gap-2.5">
                          <Building2 className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                          <div>
                            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block mb-0.5">
                              Client
                            </span>
                            <span className="text-sm font-semibold text-gray-800 line-clamp-1">
                              {project.client}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-start gap-2.5">
                          <IndianRupee className="w-4 h-4 text-[#f25810] mt-0.5 shrink-0" />
                          <div>
                            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block mb-0.5">
                              Project Value
                            </span>
                            <span className="text-sm font-bold text-[#f25810]">
                              {project.value}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Action Area */}
                      <div className="mt-auto">
                        <span className="text-[#f25810] font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                          View Project Details
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Empty State Fallback */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 font-medium">
                No projects found in this category.
              </p>
            </div>
          )}

          {/* Dynamic Loading Button */}
          {loadLimit < filteredProjects.length && (
            <div className="text-center mt-12">
              <button
                onClick={() => setLoadLimit((prev) => prev + 6)}
                className="bg-white border-2 border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 px-8 py-3.5 font-semibold text-sm transition-colors shadow-sm rounded-sm"
              >
                Load More Projects
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 4. Enterprise CTA Section */}
      <section className="bg-gray-900 text-white py-16 relative overflow-hidden border-t-8 border-[#f25810]">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(#f25810_1px,transparent_1px)] bg-size-[16px_16px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Discuss Your Next Infrastructure Requirement
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed text-sm">
            Reach out to our commercial estimation and procurement divisions to
            formalize contracts and explore our machinery leasing capabilities.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/contact"
              className="bg-[#f25810] hover:bg-[#d44a0d] text-white px-8 py-3.5 font-bold text-sm transition-all shadow-md shadow-orange-950/40 rounded-sm"
            >
              Contact Commercial Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
