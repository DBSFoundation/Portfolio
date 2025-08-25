"use client";
import { FaReact, FaNodeJs, FaBitcoin, FaChartLine, FaTools } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiBinance, SiSpaceship } from "react-icons/si";
import SectionHeading from "./SectionHeading";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-900">
      <SectionHeading title="Skills & Tools" icon={<FaTools />} />
      <div className="flex flex-wrap justify-center gap-10 text-6xl text-yellow-400">
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
