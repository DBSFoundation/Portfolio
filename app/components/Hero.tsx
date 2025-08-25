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
        Hi, I’m 
        <br />Dandy Dwi Septiadi
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl"
      >
        Trader Crypto & Forex | Full-Stack Developer  
        <br />
        <span className="text-yellow-400 font-semibold">Airdrop Hunter since 2013</span>  
        <br />
        Passionate about building fintech & crypto apps for global market.
      </motion.p>
    </section>
  );
}
