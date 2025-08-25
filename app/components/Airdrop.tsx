"use client";
import { motion } from "framer-motion";

export default function Airdrop() {
  return (
    <section id="airdrop" className="py-20 px-6 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-12 text-center text-blue-400 tracking-wide drop-shadow-lg">💰 Airdrop Hunter</h2>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.8}} className="max-w-3xl mx-auto text-center">
        <p>Saya aktif mengikuti airdrop crypto sejak 2013. Memiliki pengalaman mendapatkan token gratis & memanfaatkan peluang early-stage proyek blockchain.</p>
      </motion.div>
    </section>
  );
}
