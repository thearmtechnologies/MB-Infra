import React, { useState } from "react";
import { Link } from "react-router-dom";

// Desktop Dropdown Navigation Item
const NavItem = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative group h-full flex items-center"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-1 text-[#333] hover:text-[#f25810] font-semibold text-[11px] min-[1200px]:text-[13px] min-[1800px]:text-[15px] transition-colors py-8">
        {title}
        {items && (
          <svg
            className={`w-3 h-3 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
      </button>

      {items && (
        <div
          className={`absolute top-[85%] left-0 w-56 bg-white shadow-xl border-t-2 border-[#f25810] transition-all duration-300 z-50 ${isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}
        >
          <div className="py-1">
            {items.map((item, idx) => {
              // Direct routing fallback rule for the leadership template item
              if (item.name === "Leadership") {
                return (
                  <Link
                    key={idx}
                    to="/leadership"
                    className="block px-5 py-3 text-[13px] text-gray-700 font-bold hover:bg-gray-50 hover:text-[#f25810] border-b border-gray-100 last:border-0 transition-all"
                  >
                    {item.name}
                  </Link>
                );
              }
              return (
                <a
                  key={idx}
                  href="#"
                  className="block px-5 py-3 text-[13px] text-gray-700 font-bold hover:bg-gray-50 hover:text-[#f25810] border-b border-gray-100 last:border-0 transition-all"
                >
                  {item.name}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

// Mobile Dropdown Navigation Item
const MobileNavItem = ({ title, items, closeDrawer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 py-1">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-3 text-[#333] hover:text-[#f25810] font-bold text-[13px] transition-colors"
      >
        <span>{title}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 text-gray-500 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="bg-gray-50 pl-4 transition-all duration-200">
          {items.map((item, idx) => {
            if (item.name === "Leadership") {
              return (
                <Link
                  key={idx}
                  to="/leadership"
                  onClick={closeDrawer}
                  className="block py-2.5 text-[13px] text-gray-600 font-semibold hover:text-[#f25810]"
                >
                  {item.name}
                </Link>
              );
            }
            return (
              <a
                key={idx}
                href="#"
                onClick={closeDrawer}
                className="block py-2.5 text-[13px] text-gray-600 font-semibold hover:text-[#f25810]"
              >
                {item.name}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Modular Title Case Datasets
  const aboutItems = [
    { name: "Company Profile" },
    { name: "Vision & Mission" },
    { name: "Leadership" },
    { name: "Quality Policy" },
  ];

  const projectItems = [
    { name: "Highways & Roads" },
    { name: "Bridges & Flyovers" },
    { name: "Industrial Infra" },
    { name: "Machinery Fleet" },
  ];

  const mediaItems = [
    { name: "Press Releases" },
    { name: "Image Gallery" },
    { name: "Video Gallery" },
  ];

  const investorItems = [
    { name: "Annual Reports" },
    { name: "Financial Results" },
    { name: "Shareholding Pattern" },
  ];

  return (
    <nav className="bg-white w-full border-b border-gray-200 sticky top-0 z-100 shadow-sm">
      <div className="w-full px-6 xl:px-12">
        <div className="flex justify-between items-center h-16 min-[1000px]:h-24 gap-4 md:gap-8">
          {/* 1. Logo Section */}
          <Link to="/" className="flex flex-col cursor-pointer shrink-0">
            <div className="flex items-center">
              <span className="text-xl min-[1000px]:text-2xl min-[1200px]:text-3xl min-[1800px]:text-4xl font-black tracking-tighter text-black">
                MB
              </span>
              <span className="text-xl min-[1000px]:text-2xl min-[1200px]:text-3xl min-[1800px]:text-4xl font-black tracking-tighter text-[#f25810]">
                Infra
              </span>
            </div>
            <span className="text-[7px] min-[1000px]:text-[9px] min-[1200px]:text-[10px] min-[1800px]:text-[12px] tracking-[0.3em] font-bold text-gray-500 uppercase -mt-1">
              Projects Pvt. Ltd.
            </span>
          </Link>
          {/* 2. Middle Search Bar Section */}
         <div className="flex-1 hidden min-[700px]:flex justify-center px-2 xl:px-4 min-w-65">
     <div className="relative group w-full min-w-65 max-w-[320px] min-[1350px]:max-w-95min-[1600px]:max-w-xl">
              {/* Search Icon */}
              <svg
                className="
        absolute
        left-3
        top-1/2
        -translate-y-1/2
        w-4
        h-4
        text-gray-400
        group-focus-within:text-[#f25810]
        transition-colors
        pointer-events-none
      "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>

              {/* Input */}
              <input
                type="text"
                placeholder="Search..."
                className="
        w-full
        h-11
        bg-gray-50
        border
        border-gray-200
        rounded-xl
        pl-10
        pr-4
        text-sm
        text-gray-700
        placeholder:text-gray-400
        focus:outline-none
        focus:border-[#f25810]
        focus:ring-4
        focus:ring-[#f25810]/10
        focus:bg-white
        transition-all
        duration-300
      "
              />
            </div>
          </div>
          {/* 3. Desktop Title Case Navigation Links */}
          <div className="hidden min-[1000px]:flex items-center space-x-4 min-[1200px]:space-x-5 min-[1600px]:space-x-8 h-full ml-auto">
            <NavItem title="About Us" items={aboutItems} />
            <NavItem title="Projects & Services" items={projectItems} />

            <a
              href="#"
              className="text-[#333] hover:text-[#f25810] font-semibold text-[11px] min-[1200px]:text-[13px] min-[1800px]:text-[15px] transition-colors"
            >
              Events
            </a>
            <a
              href="#"
              className="text-[#333] hover:text-[#f25810] font-semibold text-[11px] min-[1200px]:text-[13px] min-[1800px]:text-[15px] transition-colors"
            >
              World Record
            </a>

            <NavItem title="News & Media" items={mediaItems} />
            <NavItem title="Investors Relation" items={investorItems} />

            <Link
              to="/careers"
              className="text-[#333] hover:text-[#f25810] font-semibold text-[11px] min-[1200px]:text-[13px] min-[1800px]:text-[15px] transition-colors"
            >
              Careers
            </Link>

            <Link
              to="/contact"
              className="bg-[#f25810] hover:bg-[#d44a0d] text-white px-4 min-[1200px]:px-6 min-[1800px]:px-8 py-2.5 min-[1800px]:py-3.5 font-bold text-[11px] min-[1200px]:text-[13px] min-[1800px]:text-[15px] transition-all shadow-lg shadow-orange-200 whitespace-nowrap rounded-sm"
            >
              Contact Us
            </Link>
          </div>

          {/* Hamburger Menu Trigger */}
          <div className="min-[1000px]:hidden flex items-center">
            <button
              onClick={() => setIsMobileOpen(true)}
              className="text-black focus:outline-none p-2 -mr-2"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* --- Mobile View Slide-in Overlay --- */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-150 ${isMobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsMobileOpen(false)}
      />

      <div
        className={`fixed top-0 left-0 h-full w-70 sm:w-87.5 bg-white z-200 shadow-2xl transition-transform duration-300 ease-in-out transform ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-gray-100 flex justify-between items-center">
            <div className="flex flex-col">
              <div className="flex items-center">
                <span className="text-xl font-black tracking-tighter text-black">
                  MB
                </span>
                <span className="text-xl font-black tracking-tighter text-[#f25810]">
                  Infra
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsMobileOpen(false)}
              className="text-gray-500 hover:text-black focus:outline-none p-1"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Search Bar Mobile Layout */}
          <div className="p-4 border-b border-gray-50 min-[600px]:hidden">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-gray-50 text-sm border border-gray-200 rounded-lg px-4 py-2 pl-9 focus:outline-none focus:border-[#f25810]"
              />
              <svg
                className="w-4 h-4 text-gray-400 absolute left-3 top-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Mobile Drawer Navigation Content Links */}
          <div className="flex-1 overflow-y-auto px-6 py-2">
            <MobileNavItem
              title="About Us"
              items={aboutItems}
              closeDrawer={() => setIsMobileOpen(false)}
            />
            <MobileNavItem
              title="Projects & Services"
              items={projectItems}
              closeDrawer={() => setIsMobileOpen(false)}
            />

            <a
              href="#"
              onClick={() => setIsMobileOpen(false)}
              className="block py-3 border-b border-gray-100 text-[#333] hover:text-[#f25810] font-bold text-[13px] transition-colors"
            >
              Events
            </a>
            <a
              href="#"
              onClick={() => setIsMobileOpen(false)}
              className="block py-3 border-b border-gray-100 text-[#333] hover:text-[#f25810] font-bold text-[13px] transition-colors"
            >
              World Record
            </a>

            <MobileNavItem
              title="News & Media"
              items={mediaItems}
              closeDrawer={() => setIsMobileOpen(false)}
            />
            <MobileNavItem
              title="Investors Relation"
              items={investorItems}
              closeDrawer={() => setIsMobileOpen(false)}
            />

            <Link
              to="/careers"
              onClick={() => setIsMobileOpen(false)}
              className="block py-3 border-b border-gray-100 text-[#333] hover:text-[#f25810] font-bold text-[13px] transition-colors"
            >
              Careers
            </Link>

            {/* Mobile Contact Framework Action Trigger */}
            <div className="pt-6 pb-8">
              <Link
                to="/contact"
                onClick={() => setIsMobileOpen(false)}
                className="w-full bg-[#f25810] hover:bg-[#d44a0d] text-white py-3 font-bold text-[13px] transition-all shadow-lg shadow-orange-200 block text-center rounded-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
