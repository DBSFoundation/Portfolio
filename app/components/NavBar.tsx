"use client";
import { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menu = [
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Trading", href: "#trading" },
    { name: "Airdrop", href: "#airdrop" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full flex justify-between items-center px-6 py-4 bg-gray-900 text-white z-50 shadow">
      <div className="font-bold text-xl">Portfolio</div>
      <div className="hidden md:flex gap-6">
        {menu.map((m,i)=>(
          <a key={i} href={m.href} className="hover:text-blue-400 transition">{m.name}</a>
        ))}
      </div>
      <div className="md:hidden">
        <button onClick={()=>setOpen(!open)}>
          {open ? <HiX size={28}/> : <HiMenu size={28}/>}
        </button>
      </div>
      {open && (
        <div className="absolute top-16 left-0 w-full bg-gray-900 flex flex-col items-center py-4 gap-4 md:hidden">
          {menu.map((m,i)=>(
            <a key={i} href={m.href} className="hover:text-blue-400 transition">{m.name}</a>
          ))}
        </div>
      )}
    </nav>
  );
}
