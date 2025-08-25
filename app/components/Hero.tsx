"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6" id="hero">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-blue-400"
      >
        Hi, I’m Premilyader 👋
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-4 text-lg text-gray-300 max-w-xl"
      >
        Trader Crypto & Forex | Full-Stack Developer (React, Next.js, Node, TypeScript)  
        Passionate about building fintech & crypto apps for the global market.
      </motion.p>
    </section>
  );
}
