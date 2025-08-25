"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

const sections = ["hero", "projects", "skills", "trading", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop - 80;
          const bottom = top + el.offsetHeight;
          if (window.scrollY >= top && window.scrollY < bottom) {
            setActive(section);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-colors duration-300 ${scrolled ? "bg-gray-900/90 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div onClick={() => scrollToSection("hero")} className="w-10 h-10 rounded-full bg-yellow-400 cursor-pointer hover:scale-105 transition" />

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-gray-100 font-medium text-sm sm:text-base">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`hover:text-yellow-400 transition ${active === section ? "text-yellow-400" : ""}`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden text-gray-100 text-2xl cursor-pointer" onClick={() => setOpen(!open)}>
          {open ? <HiX /> : <HiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-md shadow-lg absolute w-full left-0 top-full flex flex-col items-center py-6 gap-6">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`text-gray-100 text-lg font-medium hover:text-yellow-400 transition ${active === section ? "text-yellow-400" : ""}`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
