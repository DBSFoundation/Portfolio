"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-800 px-6 py-4 shadow sticky top-0 z-50">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl">Portfolio</h1>
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <ul className={`md:flex md:gap-4 absolute md:static top-16 left-0 w-full md:w-auto bg-white dark:bg-gray-800 md:bg-transparent transition-all duration-300 ${open ? "block" : "hidden"}`}>
          <li className="px-4 py-2 md:p-0"><a href="#hero" className="hover:text-blue-500">Home</a></li>
          <li className="px-4 py-2 md:p-0"><a href="#projects" className="hover:text-blue-500">Projects</a></li>
          <li className="px-4 py-2 md:p-0"><a href="#trading" className="hover:text-blue-500">Trading</a></li>
          <li className="px-4 py-2 md:p-0"><a href="#skills" className="hover:text-blue-500">Skills</a></li>
          <li className="px-4 py-2 md:p-0"><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
