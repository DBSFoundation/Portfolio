"use client";
import { motion } from "framer-motion";

export default function Airdrop() {
  return (
    <section id="airdrop" className="py-20 px-6 bg-gray-800 text-white">
      <h2 className="text-3xl font-bold mb-12 text-center text-blue-400 tracking-wide drop-shadow-lg">🎁 Airdrop Hunter</h2>
      <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.8}} className="max-w-4xl mx-auto text-center">
        <p>Aktif mencari dan mengikuti airdrop crypto sejak 2013. Pengalaman: claim berbagai token, ikut testnet, dan membangun portofolio crypto yang beragam.</p>
      </motion.div>
    </section>
  );
}
