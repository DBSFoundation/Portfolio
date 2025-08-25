"use client";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    { title: "Crypto Dashboard", desc: "Real-time price tracker using CoinGecko API with charts & search feature." },
    { title: "E-Commerce Mini App", desc: "Full-stack app with cart, checkout, and admin panel. Built with Next.js & PostgreSQL." },
    { title: "Real-Time Chat App", desc: "Messaging platform using Socket.io with user authentication & online status." },
    { title: "Library CRUD System", desc: "Users can add, edit, and delete books. Backend built with Node.js & Express." }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-800">
      <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((p, i) => (
          <motion.div key={i} whileHover={{ scale: 1.03 }} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i*0.2 }} className="bg-gray-900 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-400">{p.title}</h3>
            <p className="mb-4 text-gray-200">{p.desc}</p>
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
