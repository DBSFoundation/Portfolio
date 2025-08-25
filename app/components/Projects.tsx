"use client";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    { title:"Crypto Dashboard", desc:"Real-time price tracker CoinGecko API." },
    { title:"E-Commerce Mini App", desc:"Full-stack cart & checkout Next.js + PostgreSQL." },
    { title:"Real-Time Chat App", desc:"Messaging dengan Socket.io & auth." },
    { title:"Library CRUD System", desc:"Node.js + Express CRUD." }
  ];
  return (
    <section id="projects" className="py-20 px-6 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-12 text-center text-blue-400 tracking-wide drop-shadow-lg">🚀 Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((p,i)=>(
          <motion.div key={i} whileHover={{scale:1.03}} className="bg-gray-800 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="mb-4">{p.desc}</p>
            <div className="flex gap-4">
              <a href="#" className="text-blue-400 hover:underline">Live Demo</a>
              <a href="#" className="text-blue-400 hover:underline">GitHub</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
