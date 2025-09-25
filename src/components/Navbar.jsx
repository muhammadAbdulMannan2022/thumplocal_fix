import React, { useState } from "react";
import logo from "../assets/images/logo.png";

import { Link } from "react-router";
const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/", text: "Terms and Condition" },
    { to: "/privacy", text: "Privacy" },
    { to: "/", text: "Access Portal" },
    { to: "/", text: "FAQ" },
  ];

  return (
    <nav className="w-full bg-white py-2  z-50 sticky top-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <img src={logo} className="h-14 w-auto object-contain" alt="Logo" />

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.text}
                to={link.to}
                className={`text-gray-700  text-lg md:text-xl font-medium hover:text-[#8BB353] ${
                  link.text === "FAQ"
                    ? "border-2 border-[#8BB353] px-2 py-1 rounded text-[#8BB353]"
                    : ""
                }`}
              >
                {link.text}
              </Link>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link to="/register" className="px-4 py-2 bg-[#8BB353] text-white rounded font-medium hover:bg-[#659621] transition">
              Sign Up
            </Link>
            <Link to="/login" className="px-4 py-2 border border-[#8BB353] rounded font-medium text-[#8BB353] hover:bg-gray-100 transition">
              Login
            </Link>
          </div>

          {/* Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="text-gray-600 text-2xl"
            >
              &#9776;
            </button>
          </div>
        </div>
      </div>

      {/* ----- Sidebar Overlay ----- */}
      <div
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300
        ${
          isSidebarOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      />

      {/* ----- Sidebar Panel ----- */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b border-gray-200">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="text-gray-600 text-2xl"
          >
            &times;
          </button>
        </div>

        <div className="px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.text}
              to={link.to}
              onClick={() => setIsSidebarOpen(false)}
              className="block text-gray-700 hover:text-[#8BB353] text-lg font-medium"
            >
              {link.text}
            </Link>
          ))}

          {/* Mobile Buttons */}
          <div className="pt-4 flex flex-col space-y-3">
            <Link to="/register" onClick={() => setIsSidebarOpen(false)} className="w-full px-4 py-2 bg-[#8BB353] text-white rounded-lg font-medium hover:bg-[#659621] transition text-center">
              Sign Up
            </Link>
            <Link to="/login" onClick={() => setIsSidebarOpen(false)} className="w-full px-4 py-2 border border-[#8BB353] rounded-lg font-medium text-[#8BB353] hover:bg-gray-100 transition text-center">
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
