// Navbar.jsx
import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "/assets/logo.png";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  // Close dropdown when route changes
  useEffect(() => {
    setIsDropdownOpen(false);
  }, [location.pathname]);

  // helper to see if current location is any of the About Us child routes
  const isAboutActive = () =>
    location.pathname.startsWith("/Who_we_are") ||
    location.pathname.startsWith("/Our_Mandate") ||
    location.pathname.startsWith("/Our_Vision");

  // Reusable link component (animated underline implemented with an actual span)
  const AnimatedLink = ({ to, children }) => (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        `relative pb-1 px-0 transition-colors duration-150 ${
          isActive ? "text-[#003479]" : "text-gray-800 hover:text-[#003479]"
        }`
      }
    >
      <span>{children}</span>

      {/* underline element */}
      <span
        className={`block absolute left-0 -bottom-0.5 h-[3px] bg-[#f5de12] transition-all duration-300 ${
          location.pathname === to ? "w-full" : "w-0"
        }`}
        aria-hidden
      />
    </NavLink>
  );

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-10 py-3 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img src={logo} alt="BGICC logo" className="h-14 w-auto" />
      </div>

      {/* Links */}
      <div className="flex items-center gap-8 md:gap-10">
        {/* Home -> using "/" */}
        <div className="relative">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `relative pb-1 transition-colors duration-150 ${
                isActive ? "text-[#003479]" : "text-gray-800 hover:text-[#003479]"
              }`
            }
          >
            <span>Home</span>
            <span
              className={`block absolute left-0 -bottom-0.5 h-[3px] bg-[#f5de12] transition-all duration-300 ${
                location.pathname === "/" ? "w-full" : "w-0"
              }`}
              aria-hidden
            />
          </NavLink>
        </div>

        {/* Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen((s) => !s)}
            className={`flex items-center gap-2 px-1 py-1 transition-colors duration-150 ${
              isAboutActive()
                ? "text-[#003479]"
                : "text-gray-800 hover:text-[#003479]"
            }`}
          >
            <span>About Us</span>
            <svg
              className={`w-4 h-4 transform transition-transform duration-200 ${
                isDropdownOpen ? "rotate-180" : "rotate-0"
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden
            >
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
            </svg>

            {/* underline for parent when any child active */}
            <span
              className={`block absolute left-0 -bottom-0.5 h-[3px] bg-[#f5de12] transition-all duration-300 ${
                isAboutActive() ? "w-full" : "w-0"
              }`}
              aria-hidden
            />
          </button>

          {/* Dropdown menu */}
          {isDropdownOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-[#003479] rounded-md shadow-lg z-50">
              <NavLink
                to="/Who_we_are"
                className={({ isActive }) =>
                  `block px-4 py-2 text-white ${isActive ? "bg-[#002d64]" : "hover:bg-[#002d64]"}`
                }
              >
                Who We Are
              </NavLink>

              <NavLink
                to="/Our_Mandate"
                className={({ isActive }) =>
                  `block px-4 py-2 text-white ${isActive ? "bg-[#002d64]" : "hover:bg-[#002d64]"}`
                }
              >
                Our Mandate
              </NavLink>

              <NavLink
                to="/Our_Vision"
                className={({ isActive }) =>
                  `block px-4 py-2 text-white ${isActive ? "bg-[#002d64]" : "hover:bg-[#002d64]"}`
                }
              >
                Our Vision
              </NavLink>
            </div>
          )}
        </div>

        {/* Other links */}
        <AnimatedLink to="/media">Media</AnimatedLink>
        <AnimatedLink to="/Programmes">Programmes</AnimatedLink>
        <AnimatedLink to="/contact">Contact Us</AnimatedLink>
        <AnimatedLink to="/offering">Offering</AnimatedLink>
      </div>

      {/* Partner button */}
      <a
        href="/partnerUs"
        className="bg-[#003479] text-white px-3 py-2 font-medium rounded-xl hover:bg-[#002d64] transition"
      >
        Partner with us
      </a>
    </nav>
  );
}
