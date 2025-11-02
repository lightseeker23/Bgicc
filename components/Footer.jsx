import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";
import logo from "/assets/logo.png";

export default function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#2e2e2e] text-gray-200 px-8 py-12 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Left Section */}
        <div>
          <img src={logo} alt="BGICC Logo" className="h-20 mb-4" />
          <p className="mb-4 text-lg">
            Come and enjoy the fullness of joy in His presence...
          </p>
          <div className="flex space-x-4 text-2xl">
            <a href="https://www.facebook.com/beautifulgateicc/"><FaFacebookF className="hover:text-[#003479] cursor-pointer" /></a>
            <a href="https://x.com/beautifulgateic?lang=en"><FaTwitter className="hover:text-[#003479] cursor-pointer" /></a>
            <a href="https://www.instagram.com/beautifulgateicc/"><FaInstagram className="hover:text-[#003479] cursor-pointer" /></a>
            <a href="https://www.youtube.com/channel/UCBpWDMBrNXLEYEgF6Vr5Vow"><FaYoutube className="hover:text-[#003479] cursor-pointer" /></a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold text-white mb-3 text-lg">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/home" className="hover:text-[#003479]">Home</a></li>
            <li><a href="/about" className="hover:text-[#003479]">About Us</a></li>
            <li><a href="/programmes" className="hover:text-[#003479]">Programmes</a></li>
            <li><a href="/media" className="hover:text-[#003479]">Media</a></li>
            <li><a href="/offering" className="hover:text-[#003479]">Offering</a></li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold text-white mb-3 text-lg">Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/sermon" className="hover:text-[#003479] underline">Sermon</a></li>
            <li><a href="/album" className="hover:text-[#003479] underline">Album</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-white mb-3">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3"><FaEnvelope size={16}/> bgicc.kuje@gmail.com</li>
            <li className="flex items-center gap-3"><FaPhone size={16}/> 0706 627 7433</li>
            <li className="flex items-center gap-3"><FaWhatsapp size={16}/> 0706 627 7433</li>
            <li className="flex items-start gap-3"><FaMapMarkerAlt size={16}/> Plot 410, General Hospital Road, Kuje, Abuja, Nigeria</li>
          </ul>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-xs text-gray-400">
        Copyright © {date} Beautiful Gate International Christian Centre. All Rights Reserved
      </div>
    </footer>
  );
}
