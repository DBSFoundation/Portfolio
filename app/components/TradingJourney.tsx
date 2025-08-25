"use client";
import { motion } from "framer-motion";

export default function Trading() {
  const journey = [
    { year:"2013", desc:"Mulai mining Bitcoin & trading awal" },
    { year:"2017", desc:"Altcoin wave, ICO & risk management" },
    { year:"2020", desc:"DeFi & Forex integration, trading bot" },
    { year:"2023+", desc:"Web3 Builder & Rust development" }
  ];

  return (
    <section id="trading" className="py-20 px-6 bg-gray-800 text-white">
      <h2 className="text-3xl font-bold mb-12 text-center">📈 Trading & Crypto Journey</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {journey.map((j,i)=>(
          <motion.div key={i} initial={{opacity:0, x:i%2===0?-50:50}} animate={{opacity:1, x:0}} transition={{duration:0.6, delay:i*0.2}} className="p-6 bg-gray-900 rounded-2xl shadow">
            <h3 className="font-semibold">{j.year}</h3>
            <p>{j.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
