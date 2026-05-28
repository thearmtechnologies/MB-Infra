import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

// IMPORT YOUR LOGO HERE
import Logo from "../../assets/img/logo2.png";

const quickLinks = [
  { name: "About Company", path: "/about/company-profile" },
  { name: "Leadership Team", path: "/about/leadership" },
  { name: "Quality Policy", path: "/about/quality-policy" },
  { name: "Investors Relation", path: "/investors/financial-overview" },
  { name: "Career", path: "/careers" },
];

const serviceLinks = [
  { name: "Highway Expansion", path: "/services/roads-highways" },
  { name: "Bridge Construction", path: "/services/bridges-flyovers" },
  { name: "Industrial Civil Works", path: "/services/industrial-railways" },
  { name: "Earthmoving & Excavation", path: "/fleet" },
  { name: "Heavy Machinery Leasing", path: "/fleet" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t-4 border-[#f25810] pt-12 pb-6 w-full text-gray-400">
      <div className="w-full px-6 xl:px-12 mx-auto max-w-450">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand Col & Contact Details */}
          <div>
            <div className="flex flex-col mb-5">
              {/* --- INCREASED LOGO SIZE HERE --- */}
              <img
                src={Logo}
                alt="MB Infra Logo"
                className="w-36 md:w-48 h-auto mb-3 object-contain"
              />
              <div className="flex items-center">
                <span className="text-2xl font-black tracking-tighter text-white">
                  MB
                </span>
                <span className="text-2xl font-black tracking-tighter text-[#f25810] ml-1">
                  INFRA
                </span>
              </div>
            </div>
            <p className="text-[13px] font-medium leading-relaxed mb-5">
              A premier EPC organization focused on constructing India's
              critical infrastructure. Delivering mega-projects in highways,
              bridges, and industrial sectors with unwavering engineering
              excellence.
            </p>

            <div className="space-y-3 mb-6 text-[13px] font-medium">
              <div className="flex items-start gap-3">
                <MapPin className="text-[#f25810] shrink-0 mt-0.5" size={18} />
                <span>
                  G-6, RS Platinum Building, Bhalej Road, Ganesh Colony, Anand,
                  Gujarat, 388001
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-[#f25810] shrink-0" size={18} />
                <span>
                  +91 99094 14001 <span className="text-gray-600 mx-1">|</span>{" "}
                  02692 269001
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-[#f25810] shrink-0" size={18} />
                <a
                  href="mailto:mayurprajapati@mbipl.in"
                  className="hover:text-white transition-colors"
                >
                  mayurprajapati@mbipl.in
                </a>
              </div>
            </div>

            <div className="flex gap-3">
              {["Facebook", "Twitter", "LinkedIn"].map((social, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-9 h-9 bg-gray-900 hover:bg-[#f25810] hover:text-white transition-colors flex items-center justify-center rounded-sm"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-current"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-6">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-[13px] font-bold tracking-wider">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="hover:text-[#f25810] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-6">
              Our Expertise
            </h4>
            <ul className="space-y-2.5 text-[13px] font-bold tracking-wider">
              {serviceLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="hover:text-[#f25810] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-6">
              Company Updates
            </h4>
            <p className="text-sm mb-4">
              Subscribe to our tender alerts and corporate news.
            </p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-gray-900 border border-gray-800 text-white px-4 py-2.5 text-sm focus:outline-none focus:border-[#f25810]"
              />
              <button className="bg-[#f25810] hover:bg-[#d44a0d] text-white px-4 py-2.5 font-bold uppercase tracking-widest text-xs transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-bold uppercase tracking-widest">
          <p>
            © {new Date().getFullYear()} MB Infraprojects Pvt. Ltd. All Rights
            Reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="/about/quality-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/about/company-profile"
              className="hover:text-white transition-colors"
            >
              Terms of Use
            </Link>
          </div>
        </div>
        <div className="mt-4 flex flex-col items-center gap-1 text-[11px] font-semibold tracking-[0.2em] text-gray-500">
          <span className="italic tracking-[0.25em] text-gray-400">
            Designed & Developed by ARM TECHNOLOGIES
          </span>
          <a
            href="https://www.thearmtechnologies.com"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-[#f25810] transition-colors tracking-[0.2em]"
          >
            www.thearmtechnologies.com
          </a>
        </div>
      </div>
    </footer>
  );
}
