import React, { useMemo, useState } from "react";
import { Link, NavLink, matchPath, useLocation, useNavigate } from "react-router-dom";
import { navigationLinks } from "../../constants/navigation";
import { allProjectsData } from "../../data/allProjects";
// Desktop Dropdown Navigation Item
const NavItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isDropdownActive = item.dropdown
    ? item.dropdown.some((subItem) =>
        matchPath({ path: subItem.path, end: true }, location.pathname)
      )
    : false;

  return (
    <div
      className="relative group h-full flex items-center"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* NORMAL LINK */}
      {!item.dropdown ? (
        <NavLink
          to={item.path}
          className={({ isActive }) =>
            `font-semibold text-[13px] min-[1200px]:text-[15px] min-[1800px]:text-[17px] transition-colors whitespace-nowrap ${
              isActive ? "text-[#f25810]" : "text-[#333] hover:text-[#f25810]"
            }`
          }
        >
          {item.title}
        </NavLink>
      ) : (
        <>
          {/* DROPDOWN BUTTON */}
          <button
            className={`flex items-center gap-1 font-semibold text-[13px] min-[1200px]:text-[15px] min-[1800px]:text-[17px] transition-colors py-8 whitespace-nowrap ${
              isDropdownActive ? "text-[#f25810]" : "text-[#333] hover:text-[#f25810]"
            }`}
          >
            {item.title}

            <svg
              className={`w-3 h-3 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
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

          {/* DROPDOWN MENU */}
          <div
            className={`absolute top-[85%] left-0 w-64 bg-white shadow-xl border-t-2 border-[#f25810] transition-all duration-300 z-50 ${
              isOpen
                ? "opacity-100 visible translate-y-0"
                : "opacity-0 invisible -translate-y-2"
            }`}
          >
            <div className="py-1">
              {item.dropdown.map((subItem, idx) => (
                <NavLink
                  key={idx}
                  to={subItem.path}
                  className={({ isActive }) =>
                    `block px-5 py-3 text-[13px] font-bold border-b border-gray-100 last:border-0 transition-all ${
                      isActive
                        ? "text-[#f25810] bg-gray-50"
                        : "text-gray-700 hover:bg-gray-50 hover:text-[#f25810]"
                    }`
                  }
                >
                  {subItem.name}
                </NavLink>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

// Mobile Dropdown Navigation Item
const MobileNavItem = ({ item, closeDrawer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isDropdownActive = item.dropdown
    ? item.dropdown.some((subItem) =>
        matchPath({ path: subItem.path, end: true }, location.pathname)
      )
    : false;

  // NORMAL LINK
  if (!item.dropdown) {
    return (
      <NavLink
        to={item.path}
        onClick={closeDrawer}
        className={({ isActive }) =>
          `block py-3 border-b border-gray-100 font-bold text-[13px] transition-colors ${
            isActive ? "text-[#f25810]" : "text-[#333] hover:text-[#f25810]"
          }`
        }
      >
        {item.title}
      </NavLink>
    );
  }

  // DROPDOWN
  return (
    <div className="border-b border-gray-100 py-1">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex justify-between items-center w-full py-3 font-bold text-[13px] transition-colors ${
          isDropdownActive ? "text-[#f25810]" : "text-[#333] hover:text-[#f25810]"
        }`}
      >
        <span>{item.title}</span>

        <svg
          className={`w-4 h-4 transition-transform duration-200 text-gray-500 ${
            isOpen ? "rotate-180" : ""
          }`}
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
          {item.dropdown.map((subItem, idx) => (
            <NavLink
              key={idx}
              to={subItem.path}
              onClick={closeDrawer}
              className={({ isActive }) =>
                `block py-2.5 text-[13px] font-semibold ${
                  isActive ? "text-[#f25810]" : "text-gray-600 hover:text-[#f25810]"
                }`
              }
            >
              {subItem.name}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};
export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();

  const searchIndex = useMemo(() => {
    const navItems = [
      { label: "Home", path: "/", category: "Page" },
      ...navigationLinks.flatMap((item) => {
        if (item.dropdown) {
          return item.dropdown.map((subItem) => ({
            label: subItem.name,
            path: subItem.path,
            category: item.title,
          }));
        }

        if (item.path) {
          return [{ label: item.title, path: item.path, category: "Page" }];
        }

        return [];
      }),
    ];

    const projectItems = allProjectsData.map((project) => ({
      label: project.title,
      path: `/projects/${project.id}`,
      category: "Project",
      searchText: `${project.title} ${project.location} ${project.highway} ${project.client} ${project.category}`.toLowerCase(),
    }));

    return [
      ...navItems.map((item) => ({
        ...item,
        searchText: `${item.label} ${item.category}`.toLowerCase(),
      })),
      ...projectItems,
    ];
  }, []);

  const searchResults = useMemo(() => {
    const trimmed = searchQuery.trim().toLowerCase();
    if (!trimmed) {
      return [];
    }

    const terms = trimmed.split(/\s+/);
    return searchIndex
      .filter((item) => terms.every((term) => item.searchText.includes(term)))
      .slice(0, 8);
  }, [searchIndex, searchQuery]);

  const handleSearchSelect = (path) => {
    navigate(path);
    setSearchQuery("");
    setIsSearchOpen(false);
    setIsMobileOpen(false);
  };

  const handleSearchKeyDown = (event) => {
    if (event.key === "Enter" && searchResults.length > 0) {
      event.preventDefault();
      handleSearchSelect(searchResults[0].path);
    }
  };

  return (
    <nav className="bg-white w-full border-b border-gray-200 sticky top-0 z-100 shadow-sm">
    <div className="w-full px-4 xl:px-5">
        <div className="flex justify-between items-center h-16 min-[1000px]:h-24 gap-4 md:gap-8">
          
          {/* 1. Logo Section */}
          <Link to="/" className="flex flex-col cursor-pointer shrink-0">
            <div className="flex items-center">
              {/* UPDATED: Increased text sizes (text-3xl up to text-6xl) */}
              <span className="text-3xl min-[1000px]:text-4xl min-[1200px]:text-5xl min-[1800px]:text-6xl font-black tracking-tighter text-black">
                MB
              </span>
              <span className="text-3xl min-[1000px]:text-4xl min-[1200px]:text-5xl min-[1800px]:text-6xl font-black tracking-tighter text-[#f25810]">
                INFRA
              </span>
            </div>
            {/* UPDATED: Increased subtitle sizes slightly to maintain balance and adjusted negative top margin */}
            <span className="text-[9px] min-[1000px]:text-[11px] min-[1200px]:text-[13px] min-[1800px]:text-[15px] tracking-[0.3em] font-bold text-gray-500 uppercase -mt-1 min-[1200px]:-mt-2">
              Projects Pvt. Ltd.
            </span>
          </Link>

          {/* 2. Middle Search Bar Section */}
          <div className="flex-1 hidden min-[700px]:flex justify-center px-2 xl:px-3 min-w-0">
            <div className="relative group w-full max-w-70 min-[1200px]:max-w-85 min-[1600px]:max-w-105">
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
                value={searchQuery}
                onChange={(event) => {
                  setSearchQuery(event.target.value);
                  setIsSearchOpen(true);
                }}
                onFocus={() => setIsSearchOpen(true)}
                onBlur={() => setTimeout(() => setIsSearchOpen(false), 150)}
                onKeyDown={handleSearchKeyDown}
                className="
        w-full
              h-10
        bg-gray-50
        border
        border-gray-200
              rounded-lg
        pl-10
        pr-4
        text-sm
        text-gray-900
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

              {isSearchOpen && searchQuery.trim().length > 0 && (
                <div className="absolute left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-50">
                  {searchResults.length === 0 ? (
                    <div className="px-4 py-3 text-xs text-gray-500">
                      No matches found.
                    </div>
                  ) : (
                    searchResults.map((result) => (
                      <button
                        key={`${result.category}-${result.path}`}
                        type="button"
                        onClick={() => handleSearchSelect(result.path)}
                        className="w-full text-left px-4 py-3 text-sm hover:bg-gray-50 transition-colors"
                      >
                        <div className="font-semibold text-gray-800">
                          {result.label}
                        </div>
                        <div className="text-xs text-gray-500">{result.category}</div>
                      </button>
                    ))
                  )}
                </div>
              )}
            </div>
          </div>

          {/* 3. Desktop Navigation */}
          <div className="hidden min-[1000px]:flex items-center space-x-4 min-[1200px]:space-x-5 min-[1600px]:space-x-8 h-full ml-auto">
            {navigationLinks.map((item, idx) => (
              <NavItem key={idx} item={item} />
            ))}
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
                value={searchQuery}
                onChange={(event) => {
                  setSearchQuery(event.target.value);
                  setIsSearchOpen(true);
                }}
                onFocus={() => setIsSearchOpen(true)}
                onBlur={() => setTimeout(() => setIsSearchOpen(false), 150)}
                onKeyDown={handleSearchKeyDown}
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

              {isSearchOpen && searchQuery.trim().length > 0 && (
                <div className="absolute left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-50">
                  {searchResults.length === 0 ? (
                    <div className="px-4 py-3 text-xs text-gray-500">
                      No matches found.
                    </div>
                  ) : (
                    searchResults.map((result) => (
                      <button
                        key={`mobile-${result.category}-${result.path}`}
                        type="button"
                        onClick={() => handleSearchSelect(result.path)}
                        className="w-full text-left px-4 py-3 text-sm hover:bg-gray-50 transition-colors"
                      >
                        <div className="font-semibold text-gray-800">
                          {result.label}
                        </div>
                        <div className="text-xs text-gray-500">{result.category}</div>
                      </button>
                    ))
                  )}
                </div>
              )}
            </div>
          </div>

         {/* Mobile Drawer Navigation Content Links */}
<div className="flex-1 overflow-y-auto px-6 py-2">

  {navigationLinks.map((item, idx) => (
    <MobileNavItem
      key={idx}
      item={item}
      closeDrawer={() => setIsMobileOpen(false)}
    />
  ))}

</div>
        </div>
      </div>
    </nav>
  );
}
