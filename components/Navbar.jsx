import React, { useState } from "react";
import logo from "/assets/logo.png";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-10 py-3 bg-white shadow-md relative">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="BGICC logo" className="h-14 w-auto" />
      </div>

      {/* Links */}
      <div className="flex items-center gap-10 text-gray-800 font-medium">
        <a href="/home" className="hover:text-[#003479] border-b-2 border-[#003479] pb-1">
          Home
        </a>

        {/* Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="hover:text-[#003479] flex items-center gap-1"
          >
            About Us{" "}
            <span
              className={`transition-transform duration-200 ${
                isDropdownOpen ? "rotate-180" : "rotate-0"
              }`}
            >
              ⌄
            </span>
          </button>

          {isDropdownOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-[#003479] rounded-md shadow-lg z-50">
              <a href="/Who_we_are" className="block px-4 py-2 text-white hover:bg-[#002d64]">
                Who We Are
              </a>
              <a href="/Our_Mandate" className="block px-4 py-2 text-white hover:bg-[#002d64]">
                Our Mandate
              </a>
              <a href="/Our_Vision" className="block px-4 py-2 text-white hover:bg-[#002d64]">
                Our Vision
              </a>
              <a href="/Our_Mission" className="block px-4 py-2 text-white hover:bg-[#002d64]">
                Our Mission
              </a>
              <a href="/Our_Goal" className="block px-4 py-2 text-white hover:bg-[#002d64]">
                Our Goal
              </a>
            </div>
          )}
        </div>

        <a href="/media" className="hover:text-[#003479]">
          Media
        </a>
        <a href="/programmes" className="hover:text-[#003479]">
          Programmes
        </a>
        <a href="/contact" className="hover:text-[#003479]">
          Contact Us
        </a>
        <a href="/offering" className="hover:text-[#003479]">
          Offering
        </a>
      </div>
      <a
        href="/partnerUs"
        className="bg-[#003479] text-white px-3 py-3 font-medium rounded-full hover:bg-[#002d64] transition"
      >
        Partner with us
      </a>
    </nav>
  );
}
