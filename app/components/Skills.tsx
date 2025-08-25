"use client";
import { FaReact, FaNodeJs, FaBitcoin, FaChartLine } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiBinance } from "react-icons/si";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [FaReact, SiNextdotjs, SiTailwindcss, FaNodeJs, SiTypescript, FaBitcoin, SiBinance, FaChartLine];

  return (
    <section id="skills" className="py-20 px-6 bg-gray-900">
      <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">Skills & Tools</h2>
      <div className="flex flex-wrap justify-center gap-10 text-6xl text-blue-300">
        {skills.map((SkillIcon, i) => (
          <motion.div key={i} whileHover={{ scale: 1.2 }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i*0.1 }}>
            <SkillIcon />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
