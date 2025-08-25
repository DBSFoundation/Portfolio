"use client";
import { FaReact, FaNodeJs, FaBitcoin, FaChartLine } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiBinance } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact size={50} /> },
  { name: "Next.js", icon: <SiNextdotjs size={50} /> },
  { name: "TailwindCSS", icon: <SiTailwindcss size={50} /> },
  { name: "TypeScript", icon: <SiTypescript size={50} /> },
  { name: "Node.js", icon: <FaNodeJs size={50} /> },
  { name: "Crypto", icon: <FaBitcoin size={50} /> },
  { name: "Trading", icon: <FaChartLine size={50} /> },
  { name: "Airdrop Hunter", icon: <FaBitcoin size={50} className="text-yellow-300" /> },
];

export default function Skills() {
  return (
    <section className="py-20 text-center bg-gray-900" id="skills">
      <h2 className="text-3xl font-bold mb-12">🛠 Skills & Tools</h2>
      <div className="flex flex-wrap justify-center gap-12">
        {skills.map((s, i) => (
          <div key={i} className="flex flex-col items-center gap-2 text-gray-200 hover:text-blue-400 transition">
            {s.icon}
            <span className="mt-2">{s.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
