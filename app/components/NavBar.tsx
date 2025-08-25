"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [active, setActive] = useState("projects");
  const [scrollY, setScrollY] = useState(0);
  const sections = ["projects","skills","trading","airdrop","contact"];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    for (let s of sections) {
      const el = document.getElementById(s);
      if (el && scrollY >= el.offsetTop - 100) setActive(s);
    }
  }, [scrollY]);

  return (
    <nav className="fixed top-0 w-full bg-gray-900 text-white flex justify-between items-center py-4 px-6 z-50 shadow-md">
      <div className="font-bold text-xl text-blue-400">Portfolio</div>
      <ul className="flex gap-8">
        {sections.map((item) => (
          <li key={item}>
            <Link
              href={`#${item}`}
              className={active===item ? "text-blue-400 font-semibold" : "hover:text-blue-300 transition"}
              onClick={() => setActive(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
