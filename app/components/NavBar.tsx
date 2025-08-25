"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  const sections = ["home", "projects", "skills", "trading", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let section of sections) {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollPos && scrollPos < el.offsetTop + el.offsetHeight) {
          setActive(section);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed w-full bg-gray-900 text-gray-200 flex justify-between items-center px-6 py-4 z-50 shadow">
      <div className="font-bold text-xl text-blue-400">Portfolio</div>
      <div className="hidden md:flex gap-6">
        {sections.map((sec) => (
          <Link key={sec} href={`#${sec}`} className={active===sec?"text-blue-400":"hover:text-blue-300"}>
            {sec.charAt(0).toUpperCase()+sec.slice(1)}
          </Link>
        ))}
      </div>
      <div className="md:hidden">
        <button onClick={()=>setMenuOpen(!menuOpen)} className="text-blue-400">
          {menuOpen?"✖":"☰"}
        </button>
      </div>
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-900 flex flex-col items-center md:hidden">
          {sections.map((sec) => (
            <Link key={sec} href={`#${sec}`} onClick={()=>setMenuOpen(false)} className={active===sec?"text-blue-400 py-2":"hover:text-blue-300 py-2"}>
              {sec.charAt(0).toUpperCase()+sec.slice(1)}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
