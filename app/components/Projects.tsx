"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Projects() {
  const projects = [
    { title:"Crypto Dashboard", desc:"Real-time price tracker using CoinGecko API.", link:"#"},
    { title:"E-Commerce Mini App", desc:"Full-stack app with cart & checkout.", link:"#"},
    { title:"Real-Time Chat App", desc:"Messaging platform using Socket.io.", link:"#"},
    { title:"Library CRUD System", desc:"Node.js & Express backend CRUD.", link:"#"}
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-800 text-white">
      <h2 className="text-3xl font-bold mb-12 text-center">🚀 Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((p,i)=>(
          <motion.div key={i} whileHover={{scale:1.03}} className="bg-gray-900 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="mb-4">{p.desc}</p>
            <Link href={p.link} className="text-blue-400 hover:underline">View</Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
