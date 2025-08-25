"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");

  return (
    <nav className="fixed top-0 w-full bg-gray-900 text-white flex justify-center py-4 z-50">
      <ul className="flex gap-8">
        {["home","projects","skills","trading","airdrop","contact"].map((item) => (
          <li key={item}>
            <Link
              href={`#${item}`}
              className={active===item?"text-blue-400 font-semibold":""}
              onClick={()=>setActive(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
