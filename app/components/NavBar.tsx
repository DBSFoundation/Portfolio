"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const sections = ["hero", "projects", "skills", "trading", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll untuk sticky & active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop - 80; // offset navbar
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

  return (
    <nav className={`fixed w-full z-50 transition-colors duration-300 ${scrolled ? "bg-gray-900/90 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="#hero">
          <div className="w-10 h-10 rounded-full bg-yellow-400 cursor-pointer hover:scale-105 transition" />
        </Link>

        {/* Menu */}
        <div className="flex gap-6 text-gray-100 font-medium text-sm sm:text-base">
          {sections.map((section) => (
            <Link
              key={section}
              href={`#${section}`}
              className={`hover:text-yellow-400 transition ${
                active === section ? "text-yellow-400" : ""
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
