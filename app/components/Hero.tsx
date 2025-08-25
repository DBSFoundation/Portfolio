"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="bg-gray-900 min-h-screen flex flex-col items-center justify-center text-center text-white">
      <motion.h1 initial={{opacity:0, y:-20}} animate={{opacity:1, y:0}} transition={{duration:0.8}} className="text-4xl font-bold mb-4 text-blue-400 drop-shadow-lg">
        Hi, I’m 
        <br />Dandy Dwi Septiadi
      </motion.h1>
      <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3}} className="max-w-xl text-lg">
        Trader Crypto & Forex | Full-Stack Developer | Airdrop Hunter sejak 2013  
      </motion.p>
      <motion.div initial={{opacity:0, scale:0.8}} animate={{opacity:1, scale:1}} transition={{duration:0.8, delay:0.5}}>
        <Image src="/images/my-photo.jpg" alt="Premilyader" width={160} height={160} className="rounded-full border-4 border-blue-400 mt-6" />
      </motion.div>
    </section>
  );
}
