"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col md:flex-row items-center justify-center text-center md:text-left py-32 sm:py-40 lg:py-48 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700"
    >
      {/* Overlay untuk kontras teks */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start md:gap-12 max-w-6xl mx-auto px-6">
        {/* Teks */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex-1"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white">
            Hi, I’m Dandy Dwi Septiadi 👋
          </h1>
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-gray-300 max-w-lg">
            Trader Crypto & Forex | Full-Stack Developer |{" "}
            <span className="text-yellow-400 font-semibold">Airdrop Hunter since 2013</span>
          </p>
        </motion.div>

        {/* Foto profil interaktif */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.7, type: "spring", stiffness: 100 }}
          whileHover={{ scale: 1.05, rotate: 2 }}
          className="mt-8 md:mt-0 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-lg cursor-pointer"
        >
          <img
            src="/images/my-photo.jpg" // ganti dengan foto Anda
            alt="Premilyader"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
