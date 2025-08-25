"use client";

import { FaReact, FaNodeJs, FaBitcoin, FaChartLine } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiBinance } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-blue-400" size={50} /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" size={50} /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-400" size={50} /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" size={50} /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" size={50} /> },
  { name: "Crypto", icon: <FaBitcoin className="text-yellow-400" size={50} /> },
  { name: "Trading", icon: <FaChartLine className="text-green-400" size={50} /> },
  { name: "Binance", icon: <SiBinance className="text-yellow-500" size={50} /> },
];

export default function Skills() {
  return (
    <section className="py-20 bg-gray-900 text-center">
      <h2 className="text-3xl font-bold mb-8">Skills & Tools</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-10 max-w-4xl mx-auto">
        {skills.map((skill, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            {skill.icon}
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
