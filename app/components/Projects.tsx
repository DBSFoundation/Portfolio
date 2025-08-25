"use client";
import { motion } from "framer-motion";

const projects = [
  { title: "Crypto Dashboard", desc: "Real-time price tracker using CoinGecko API.", live: "#", github: "#" },
  { title: "E-Commerce Mini App", desc: "Full-stack cart & checkout app.", live: "#", github: "#" },
  { title: "Real-Time Chat App", desc: "Messaging platform with Socket.io.", live: "#", github: "#" },
  { title: "Library CRUD System", desc: "Add, edit, delete books with Node.js backend.", live: "#", github: "#" },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">🚀 Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
        {projects.map((proj, i) => (
          <motion.div key={i} whileHover={{ scale: 1.05 }} className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
            <p className="text-gray-300 mb-4">{proj.desc}</p>
            <div className="flex gap-4 flex-wrap">
              <a href={proj.live} className="text-blue-400 hover:underline">Live Demo</a>
              <a href={proj.github} className="text-blue-400 hover:underline">GitHub</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
