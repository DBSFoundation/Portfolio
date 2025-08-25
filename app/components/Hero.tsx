"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <motion.h1
        initial={{ opacity: 0, y: -50, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
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
        Trader Crypto & Forex | Full-Stack Developer | <span className="text-yellow-400 font-semibold">Airdrop Hunter since 2013</span>  
        <br />
        Passionate about building fintech & crypto apps for the global market.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-8 flex gap-6"
      >
        <a href="#projects" className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition transform hover:scale-105">
          View Projects
        </a>
        <a href="#contact" className="px-6 py-3 border border-gray-500 rounded-xl hover:bg-gray-700 transition transform hover:scale-105">
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}
