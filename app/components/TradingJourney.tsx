"use client";
import { motion } from "framer-motion";

export default function TradingJourney() {
  const journey = [
    { year: "2013", desc: "Started as Airdrop Hunter & Bitcoin explorer. Learned market psychology & volatility." },
    { year: "2017", desc: "Dived into Ethereum & ICOs. Gained experience in risk management & portfolio balancing." },
    { year: "2020", desc: "Integrated Forex strategies with DeFi yield farming. Built trading bots." },
    { year: "2023+", desc: "Learning Rust & Web3 development. Goal: combine trading + coding to build global fintech solutions." },
  ];

  return (
    <section className="py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-10">📈 Trading & Crypto Journey</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {journey.map((j, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="bg-gray-800 p-6 rounded-2xl shadow"
          >
            <h3 className="font-semibold">{j.year}</h3>
            <p className="text-gray-300">{j.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
