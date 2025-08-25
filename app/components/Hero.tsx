"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl sm:text-6xl font-extrabold text-white"
      >
        Hi, I’m Dandy Dwi Septiadi
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 text-lg sm:text-xl text-gray-300 max-w-xl"
      >
        Trader Crypto & Forex | Full-Stack Developer | <span className="text-yellow-400 font-semibold">Airdrop Hunter since 2013</span>
      </motion.p>
    </section>
  );
}
