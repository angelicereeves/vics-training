import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from  "../assets/BGimages/logo.jpg"

const navItems = [
  { name: "Home", path: "/" },
  { name: "Food", path: "/food" },
  { name: "Wine", path: "/wine" },
  { name: "Liquor", path: "/liquor" },
  { name: "Cocktails", path: "/cocktails" },
  { name: "Service", path: "/service" },
  { name: "Music", path: "/music" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo and Brand Name */}
        <div className="flex items-center space-x-3">
          <img
            src={logo}
            alt="Vic's Logo"
            className="w-15 h-12 object-contain"
          />
          <div className="text-2xl font-serif text-emerald-400 tracking-wider">
            Vic’s Italian Jazz Bistro
          </div>
        </div>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-emerald-400 text-3xl focus:outline-none"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `uppercase tracking-wide text-sm font-semibold transition duration-200 ${
                  isActive
                    ? "text-emerald-400 border-b-2 border-emerald-400"
                    : "text-white hover:text-emerald-300"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Mobile Dropdown (Right-Aligned) */}
      {isOpen && (
        <div className="md:hidden bg-black text-white border-t border-emerald-500 px-6 pb-4 text-right space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block uppercase font-semibold text-sm transition duration-200 ${
                  isActive
                    ? "text-emerald-400"
                    : "text-white hover:text-emerald-300"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}