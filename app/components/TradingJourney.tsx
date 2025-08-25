"use client";
import { motion } from "framer-motion";
import { FaChartLine } from "react-icons/fa";
import SectionHeading from "./SectionHeading";

export default function TradingSection() {
  const journey = [
    { year: "2013", desc: "Began exploring Bitcoin mining & trading. Learned market psychology & volatility first-hand." },
    { year: "2017", desc: "Dived deep into Ethereum & ICOs. Gained experience in risk management & portfolio balancing." },
    { year: "2020", desc: "Integrated Forex strategies with DeFi yield farming. Built custom trading bots for automation." },
    { year: "2023+", desc: "Learning Rust & Web3 development. Goal: combine trading + coding to build global fintech solutions." }
  ];

  return (
    <section id="trading" className="py-20 px-6 bg-gray-800">
      <SectionHeading title="Trading & Crypto Journey" icon={<FaChartLine />} />
      <div className="max-w-4xl mx-auto space-y-6">
        {journey.map((step, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: i * 0.2 }} className="p-6 bg-gray-700 rounded-2xl shadow">
            <h3 className="font-semibold">{step.year}</h3>
            <p>{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
