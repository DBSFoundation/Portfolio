"use client";
import { motion } from "framer-motion";

export default function Trading() {
  const journey = [
    { year: "2013 – First Steps", desc:"Explored Bitcoin mining & trading. Learned market psychology & volatility." },
    { year: "2017 – Altcoin Wave", desc:"Dived into Ethereum & ICOs. Learned risk management & portfolio balancing." },
    { year: "2020 – DeFi & Forex", desc:"Integrated Forex strategies with DeFi yield farming. Built trading bots." },
    { year: "2023+ – Web3 Builder", desc:"Learning Rust & Web3. Goal: combine trading + coding to build global fintech apps." },
  ];

  return (
    <section id="trading" className="py-20 px-6 bg-gray-800 text-white">
      <h2 className="text-3xl font-bold mb-12 text-blue-400 text-center tracking-wide">📈 Trading & Crypto Journey</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {journey.map((j,i)=>(
          <motion.div key={i} initial={{opacity:0, x: i%2===0?-50:50}} animate={{opacity:1, x:0}} transition={{duration:0.6, delay:i*0.2}} className="p-6 bg-gray-900 rounded-2xl shadow">
            <h3 className="font-semibold">{j.year}</h3>
            <p>{j.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
