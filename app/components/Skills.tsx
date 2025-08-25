"use client";
import { motion } from "framer-motion";

export default function Trading() {
  const journeys = [
    { year: "2013 – First Steps", desc: "Mulai Bitcoin mining & trading. Belajar market psychology." },
    { year: "2017 – Altcoin Wave", desc: "Ethereum & ICOs. Risk management & portfolio balancing." },
    { year: "2020 – DeFi & Forex", desc: "Integrasi Forex dengan DeFi, buat trading bots." },
    { year: "2023+ – Web3 Builder", desc: "Belajar Rust & Web3, gabungkan trading + coding fintech global." }
  ];
  return (
    <section id="trading" className="py-20 px-6 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-12 text-center text-blue-400 tracking-wide drop-shadow-lg">📈 Trading & Crypto Journey</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {journeys.map((j,i)=>(
          <motion.div key={i} initial={{opacity:0, x:-50}} animate={{opacity:1,x:0}} transition={{duration:0.6, delay:i*0.2}} className="p-6 bg-gray-800 rounded-2xl shadow">
            <h3 className="font-semibold">{j.year}</h3>
            <p>{j.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
