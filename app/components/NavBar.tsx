"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

const sections = ["hero", "projects", "skills", "trading", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Sticky navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver untuk highlight section aktif
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
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
        {/* Logo text */}
        <div 
          onClick={() => scrollToSection("hero")} 
          className="text-white font-bold text-xl cursor-pointer hover:text-yellow-400 transition"
        >
          Portfolio
        </div>

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
