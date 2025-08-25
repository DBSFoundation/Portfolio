"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import myPhoto from "./public/images/my-photo.png";

export default function Hero() {
  return (
    <section id="home" className="flex flex-col items-center justify-center text-center min-h-screen py-20 bg-gray-900">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="mb-6"
      >
        <Image
          src={myPhoto}
          alt="Premilyader"
          width={160}
          height={160}
          className="rounded-full border-4 border-blue-400"
        />
      </motion.div>
      <motion.h1 initial={{ opacity:0, y:-20 }} animate={{opacity:1,y:0}} transition={{duration:0.8}} className="text-5xl font-bold mb-4 text-blue-400">
        Hi, I’m Dandy Dwi Septiadi
      </motion.h1>
      <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3}} className="text-lg max-w-2xl text-gray-200">
        Trader Crypto & Forex | Full-Stack Developer (React, Next.js, Node, TypeScript)<br/>
        Passionate about building fintech & crypto apps for the global market.
      </motion.p>
    </section>
  );
}
