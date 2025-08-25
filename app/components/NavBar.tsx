"use client";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menu = ["Projects", "Skills", "Trading", "Airdrop", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 bg-gray-900 text-white z-50 shadow">
      <div className="font-bold text-xl">Portfolio</div>
      <div className="hidden md:flex gap-6">
        {menu.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-400 transition">{item}</a>
        ))}
      </div>
      <div className="md:hidden cursor-pointer" onClick={()=>setOpen(!open)}>
        {open ? <HiX size={28}/> : <HiMenu size={28}/>}
      </div>
      {open && (
        <div className="absolute top-full left-0 w-full bg-gray-900 flex flex-col items-center py-4 gap-4 md:hidden">
          {menu.map((item)=>(
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-400 transition">{item}</a>
          ))}
        </div>
      )}
    </nav>
  );
}
