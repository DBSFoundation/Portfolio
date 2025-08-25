"use client";
import { FaReact, FaNodeJs, FaBitcoin, FaChartLine } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiBinance } from "react-icons/si";

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-12 text-blue-400 text-center tracking-wide">🛠 Skills & Tools</h2>
      <div className="flex flex-wrap justify-center gap-10 text-6xl text-blue-400">
        <FaReact title="React"/>
        <SiNextdotjs title="Next.js"/>
        <SiTailwindcss title="TailwindCSS"/>
        <FaNodeJs title="Node.js"/>
        <SiTypescript title="TypeScript"/>
        <FaBitcoin title="Bitcoin"/>
        <SiBinance title="Binance API"/>
        <FaChartLine title="TradingView"/>
      </div>
    </section>
  );
}
