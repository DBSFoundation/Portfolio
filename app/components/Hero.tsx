"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="flex flex-col items-center justify-center text-center py-32 bg-gradient-to-br from-gray-900 to-gray-800">
      <motion.h1 initial={{ opacity:0, y:-20 }} animate={{ opacity:1, y:0 }} transition={{duration:0.8}} className="text-5xl font-bold mb-6 text-blue-400">
        Hi, I’m Premilyader 👋
      </motion.h1>
      <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.3 }} className="text-lg max-w-2xl text-gray-200 mb-8">
        Trader Crypto & Forex | Full-Stack Developer (React, Next.js, Node, TypeScript)<br/>
        Passionate about building fintech & crypto apps for the global market.
      </motion.p>
      <motion.div initial={{ opacity:0, scale:0.8 }} animate={{ opacity:1, scale:1 }} transition={{ delay:0.5 }} className="mb-8">
        <Image src="public/images/my-photo.jpg" width={180} height={180} alt="Premilyader" className="rounded-full shadow-xl"/>
      </motion.div>
      <div className="flex gap-4 flex-wrap justify-center">
        <a href="#projects" className="px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white rounded-xl shadow-lg transition">View Projects</a>
        <a href="#contact" className="px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-700 text-gray-200 transition">Contact Me</a>
      </div>
    </section>
  );
}
