"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl sm:text-6xl font-extrabold text-white drop-shadow-lg"
      >
        Hi, I’m Dandy Dwi Septiadi
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl"
      >
        Trader Crypto & Forex | Full-Stack Developer (React, Next.js, Node, TypeScript)  
        <br />
        <span className="text-yellow-400 font-semibold">Airdrop Hunter since 2013</span>  
        <br />
        Passionate about building fintech & crypto apps for global market.
      </motion.p>
      <div className="mt-8 flex gap-6">
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-gray-500 rounded-xl hover:bg-gray-700 transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
