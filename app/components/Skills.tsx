"use client";
import { FaReact, FaNodeJs, FaBitcoin, FaChartLine } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiBinance, SiSpaceship } from "react-icons/si";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { icon: <FaReact title="React" /> },
    { icon: <SiNextdotjs title="Next.js" /> },
    { icon: <SiTailwindcss title="TailwindCSS" /> },
    { icon: <FaNodeJs title="Node.js" /> },
    { icon: <SiTypescript title="TypeScript" /> },
    { icon: <FaBitcoin title="Bitcoin" /> },
    { icon: <SiSpaceship title="Airdrop Hunter" /> },
    { icon: <FaChartLine title="TradingView" /> },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-12 text-center text-blue-400 tracking-wide drop-shadow-lg">🛠 Skills & Tools</h2>
      <div className="flex flex-wrap justify-center gap-10 text-6xl text-blue-400">
        {skills.map((s,i)=>(
          <motion.div key={i} initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:i*0.1}}>
            {s.icon}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
