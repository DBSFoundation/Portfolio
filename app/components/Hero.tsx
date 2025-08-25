"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="bg-gray-900 min-h-screen flex flex-col items-center justify-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-4 text-white"
      >
        Hi, I’m Premilyader 👋
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-lg max-w-2xl text-gray-300 text-center"
      >
        Trader Crypto & Forex | Full-Stack Developer (React, Next.js, Node, TypeScript)
      </motion.p>

      <Image
        src="/images/my-photo.jpg"  // ✅ path dari root /public
        alt="Premilyader"
        width={160}
        height={160}
        className="rounded-full border-4 border-blue-400 mt-6"
      />
    </section>
  );
}
