"use client";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const journey = [
  { year: "2013 – First Steps", desc: "Began exploring Bitcoin mining & trading. Learned market psychology & volatility." },
  { year: "2017 – Altcoin Wave", desc: "Dived deep into Ethereum & ICOs. Gained experience in risk management." },
  { year: "2020 – DeFi & Forex", desc: "Integrated Forex strategies with DeFi yield farming. Built trading bots." },
  { year: "2023+ – Web3 Builder", desc: "Learning Rust & Web3. Goal: combine trading + coding to build fintech solutions." }
];

export default function Trading() {
  return (
    <section id="trading" className="py-20 px-6 bg-gray-800">
      <SectionHeading title="Trading & Crypto Journey" />
      <div className="max-w-4xl mx-auto space-y-6">
        {journey.map((j,i)=>(
          <motion.div key={i} initial={{opacity:0, x: i%2===0?-50:50}} animate={{opacity:1,x:0}} transition={{duration:0.6, delay:i*0.2}} className="p-6 bg-gray-900 rounded-2xl shadow text-gray-200">
            <h3 className="font-semibold text-blue-400">{j.year}</h3>
            <p>{j.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
