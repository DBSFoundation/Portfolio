"use client";

import { FaReact, FaNodeJs, FaBitcoin, FaChartLine } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiBinance } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact size={50} className="text-blue-400" /> },
  { name: "Next.js", icon: <SiNextdotjs size={50} className="text-white" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss size={50} className="text-teal-400" /> },
  { name: "TypeScript", icon: <SiTypescript size={50} className="text-blue-600" /> },
  { name: "Node.js", icon: <FaNodeJs size={50} className="text-green-500" /> },
  { name: "Crypto", icon: <FaBitcoin size={50} className="text-yellow-400" /> },
  { name: "Trading", icon: <FaChartLine size={50} className="text-green-400" /> },
  { name: "Binance API", icon: <SiBinance size={50} className="text-yellow-500" /> },
];

export default function Skills() {
  return (
    <section className="py-20 text-center" id="skills">
      <h2 className="text-3xl font-bold mb-10">🛠 Skills & Tools</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-10 max-w-4xl mx-auto">
        {skills.map((s, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            {s.icon}
            <span>{s.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
