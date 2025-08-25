"use client";
import { motion } from "framer-motion";

export default function Trading() {
  const milestones = [
    { year: "2013", desc: "Mulai trading Bitcoin & mining." },
    { year: "2017", desc: "Altcoin & ICOs, belajar manajemen risiko." },
    { year: "2020", desc: "DeFi & Forex, buat trading bot otomatis." },
    { year: "2013+", desc: "Airdrop hunter & Web3 builder." },
  ];

  return (
    <section id="trading" className="py-20 px-6 bg-gray-800">
      <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">Trading & Crypto Journey</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {milestones.map((m, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: i*0.2 }} className="p-6 bg-gray-900 rounded-2xl shadow hover:shadow-lg">
            <h3 className="font-semibold text-blue-400">{m.year}</h3>
            <p className="text-gray-200">{m.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
