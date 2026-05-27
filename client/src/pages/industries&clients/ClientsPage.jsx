import React from "react";
import { motion } from "framer-motion";
import { Building2, Handshake, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import apexLogo from "../../assets/img/client/apex-tarmac.png";
import ashokaLogo from "../../assets/img/client/ashoka-buildcon-limited-logo.png";
import ecciLogo from "../../assets/img/client/east_coast_construction_industries_limited_logo.jpg";
import grilLogo from "../../assets/img/client/gril.png";
import hgLogo from "../../assets/img/client/hgiel-logo.png";
import pncLogo from "../../assets/img/client/pnc-infra.png";
import raviLogo from "../../assets/img/client/ravi-infra-blue-logo-LATEST-1.png";
import ClientsImage from "../../assets/img/hero/client.jpg"
// Client data extracted directly from the MBIPL C Profile 2025
const clientsData = [
  {
    id: "pnc",
    name: "PNC Infratech Ltd.",
    shortName: "PNC",
    role: "Primary EPC Partner",
    description: "Collaborated on massive structural packages including the Nagpur-Mumbai Super Communication Expressway and various NH-48 and NH-150A developments.",
    color: "bg-blue-600",
    logo: pncLogo,
  },
  {
    id: "ravi",
    name: "Ravi Infrabuild Projects Pvt. Ltd.",
    shortName: "RIPL",
    role: "Strategic Highway Partner",
    description: "Executed critical structural works, bypass developments, and four-laning expansion packages across Maharashtra and Rajasthan terrains.",
    color: "bg-indigo-600",
    logo: raviLogo,
  },
  {
    id: "hg",
    name: "H.G. Infra Engineering Ltd.",
    shortName: "HGIE",
    role: "Bharatmala Pariyojna Partner",
    description: "Partnered for heavy structural execution, including complex Railway Over Bridges (ROB) and flyovers on EPC mode under the Bharatmala Pariyojna.",
    color: "bg-amber-600",
    logo: hgLogo,
  },
  {
    id: "gr",
    name: "G.R. Infraprojects Limited",
    shortName: "GRIL",
    role: "National Highway Partner",
    description: "Engaged for foundational mobilization and major structural works on newly awarded national highway corridors.",
    color: "bg-cyan-600",
    logo: grilLogo,
  },
  {
    id: "ashoka",
    name: "Ashoka Buildcon Ltd.",
    shortName: "ABL",
    role: "Logistics Infrastructure Partner",
    description: "Delivered specialized port connectivity infrastructure and rigid concrete pavements designed for high-density transport traffic.",
    color: "bg-orange-600",
    logo: ashokaLogo,
  },
  {
    id: "ecci",
    name: "East Cost Construction & Industries Ltd.",
    shortName: "ECCI",
    role: "Bridge Engineering Partner",
    description: "Executed precision engineering for major river bridges, involving deep pile foundations and aquatic span structures.",
    color: "bg-teal-600",
    logo: ecciLogo,
  },
  {
    id: "apex",
    name: "Apex Tarmac Pvt. Ltd.",
    shortName: "ATPL",
    role: "Railway Corridor Partner",
    description: "Collaborated on Dedicated Freight Corridor (DFCCIL) detour construction, executing precision earthworks and track blanketing.",
    color: "bg-emerald-600",
    logo: apexLogo,
  },
];

export default function ClientsPage() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans antialiased text-gray-900">
      
      {/* 1. Hero Section */}
      <section className="relative h-[40vh] min-h-87.5 flex items-center bg-gray-950 overflow-hidden border-b-8 border-[#f25810]">
        <div className="absolute inset-0">
          <img
            src={ClientsImage}
            alt="Corporate Infrastructure Partnerships"
            className="w-full h-full object-cover  object-center grayscale"
          />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[30px_30px]" />
          <div className="absolute inset-0 bg-linear-to-t from-gray-950 via-gray-950/80 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full text-center md:text-left">
          <span className="inline-flex items-center gap-2 py-1 px-3 bg-[#f25810] text-white text-xs font-bold tracking-widest uppercase rounded-sm mb-4 shadow-sm">
            <Handshake className="w-3.5 h-3.5" />
            Trusted Partnerships
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Our Valued Clients
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl font-medium mx-auto md:mx-0">
            We work hand-in-hand with India's leading infrastructure companies, contributing our expertise as a reliable and efficient partner on critical projects.
          </p>
        </div>
      </section>

      {/* 2. Value Proposition Banner */}
      <section className="bg-white border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <ShieldCheck className="w-10 h-10 text-[#f25810]" />
            <div>
              <h3 className="text-gray-900 font-bold uppercase tracking-wide text-sm">Proven Reliability</h3>
              <p className="text-gray-500 text-sm">Consistently delivering structures that stand the test of time.</p>
            </div>
          </div>
          <div className="hidden md:block w-px h-12 bg-gray-200"></div>
          <div className="flex items-center gap-4">
            <Building2 className="w-10 h-10 text-[#f25810]" />
            <div>
              <h3 className="text-gray-900 font-bold uppercase tracking-wide text-sm">Pan-India Presence</h3>
              <p className="text-gray-500 text-sm">Executing complex civil works across challenging terrains.</p>
            </div>
          </div>
          <div className="hidden md:block w-px h-12 bg-gray-200"></div>
          <div className="flex items-center gap-4">
            <CheckCircle2 className="w-10 h-10 text-[#f25810]" />
            <div>
              <h3 className="text-gray-900 font-bold uppercase tracking-wide text-sm">Quality Assurance</h3>
              <p className="text-gray-500 text-sm">ISO 9001:2008 Certified standard of execution.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Clients Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Empowering the Industry Leaders</h2>
            <div className="w-16 h-1 bg-[#f25810] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clientsData.map((client, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={client.id}
                className="bg-white border border-gray-200 rounded-sm overflow-hidden hover:shadow-xl hover:border-gray-300 transition-all duration-300 group flex flex-col"
              >
                {/* Card Header / Client Logo */}
                <div className="h-32 bg-gray-100 flex items-center justify-center relative overflow-hidden group-hover:bg-gray-200 transition-colors">
                  <div className="absolute -right-4 -top-4 w-24 h-24 bg-gray-200 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="relative z-10 max-h-16 max-w-45 object-contain"
                    loading="lazy"
                  />
                </div>

                {/* Card Content */}
                <div className="p-8 flex flex-col grow">
                  <span className="text-[11px] text-[#f25810] font-bold tracking-widest uppercase mb-2 block">
                    {client.role}
                  </span>
                  
                  <h3 className="text-xl font-bold text-gray-900 leading-snug mb-4">
                    {client.name}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {client.description}
                  </p>
                  
                  <div className="mt-auto pt-6 border-t border-gray-100">
                    <Link
                      to="/projects"
                      className="inline-flex items-center gap-2 text-sm font-bold text-gray-800 hover:text-[#f25810] transition-colors group/link"
                    >
                      View Associated Projects
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Enterprise CTA Section */}
      <section className="bg-gray-900 text-white py-16 relative overflow-hidden border-t-8 border-[#f25810]">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(#f25810_1px,transparent_1px)] bg-size-[16px_16px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Become Our Next Strategic Partner
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed text-sm">
            Whether you are expanding national highways or developing complex structural frameworks, MB Infraprojects is equipped to deliver. Let's build together.
          </p>
          <div className="flex justify-center">
            <Link
              to="/contact"
              className="bg-[#f25810] hover:bg-[#d44a0d] text-white px-8 py-3.5 font-bold text-sm transition-all shadow-md shadow-orange-950/40 rounded-sm"
            >
              Contact Our Commercial Team
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}