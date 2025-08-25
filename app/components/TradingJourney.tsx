"use client";
import { motion } from "framer-motion";

const journey = [
  { year: "2013", desc: "Started as Airdrop Hunter & Bitcoin explorer." },
  { year: "2017", desc: "Dived into Ethereum & ICOs, learned risk management." },
  { year: "2020", desc: "Integrated Forex strategies with DeFi yield farming." },
  { year: "2023+", desc: "Learning Rust & Web3 to build global fintech solutions." },
];

export default function TradingJourney() {
  return (
    <section id="trading" className="py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-10">📈 Trading & Crypto Journey</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {journey.map((j, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i*0.2 }} className="bg-gray-800 p-6 rounded-2xl shadow">
            <h3 className="font-semibold">{j.year}</h3>
            <p className="text-gray-300">{j.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
