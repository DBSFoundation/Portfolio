"use client";
import { motion } from "framer-motion";
import { FaRocket } from "react-icons/fa";
import SectionHeading from "./SectionHeading";

export default function ProjectsSection() {
  const projects = [
    { title: "Crypto Dashboard", desc: "Real-time price tracker using CoinGecko API with charts & search feature." },
    { title: "E-Commerce Mini App", desc: "Full-stack app with cart, checkout, and admin panel. Built with Next.js & PostgreSQL." },
    { title: "Real-Time Chat App", desc: "Messaging platform using Socket.io with user authentication & online status." },
    { title: "Library CRUD System", desc: "Users can add, edit, and delete books. Backend built with Node.js & Express." }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-800">
      <SectionHeading title="Projects" icon={<FaRocket />} />
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((proj, i) => (
          <motion.div key={i} whileHover={{ scale: 1.03 }} className="bg-gray-700 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
            <p className="mb-4">{proj.desc}</p>
            <div className="flex gap-4">
              <a href="#" className="text-yellow-400 hover:underline">Live Demo</a>
              <a href="#" className="text-yellow-400 hover:underline">GitHub</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
