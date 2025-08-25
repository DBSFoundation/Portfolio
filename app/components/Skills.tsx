"use client";
import { FaReact, FaNodeJs, FaBitcoin, FaChartLine } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiBinance, SiSpaceship } from "react-icons/si";

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-6 bg-gray-900 text-white text-center">
      <h2 className="text-3xl font-bold mb-12">🛠 Skills & Tools</h2>
      <div className="flex flex-wrap justify-center gap-10 text-6xl text-blue-500">
        <FaReact title="React" />
        <SiNextdotjs title="Next.js" />
        <SiTailwindcss title="TailwindCSS" />
        <FaNodeJs title="Node.js" />
        <SiTypescript title="TypeScript" />
        <FaBitcoin title="Bitcoin" />
        <SiSpaceship title="Airdrop Hunter" />
        <FaChartLine title="TradingView" />
      </div>
    </section>
  );
}
