"use client";
import { FaReact, FaNodeJs, FaBitcoin, FaChartLine } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiBinance, SiBitcoin, SiSpaceship } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { name: "React", icon: <FaReact size={50} /> },
  { name: "Next.js", icon: <SiNextdotjs size={50} /> },
  { name: "TailwindCSS", icon: <SiTailwindcss size={50} /> },
  { name: "TypeScript", icon: <SiTypescript size={50} /> },
  { name: "Node.js", icon: <FaNodeJs size={50} /> },
  { name: "Bitcoin", icon: <FaBitcoin size={50} /> },
  { name: "Trading", icon: <FaChartLine size={50} /> },
  { name: "Airdrop Hunter", icon: <SiSpaceship size={50} /> },
];

export default function Skills() {
  return (
    <section className="py-20 text-center" id="skills">
      <h2 className="text-3xl font-bold mb-12">🛠 Skills & Tools</h2>
      <div className="flex flex-wrap justify-center gap-12">
        {skills.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, type: "spring", stiffness: 100 }}
            className="flex flex-col items-center text-gray-300 cursor-pointer"
          >
            {s.icon}
            <span className="mt-2">{s.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
