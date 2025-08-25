"use client";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp, FaInstagram, FaTelegram, FaTwitter } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

export default function ContactIcons() {
  const contacts = [
    { icon: <FaEnvelope size={28} />, link: "mailto:dandyds26@gmail.com", color: "bg-gray-800 hover:bg-gray-700" },
    { icon: <FaLinkedin size={28} />, link: "https://linkedin.com/in/dandyds", color: "bg-blue-700 hover:bg-blue-600" },
    { icon: <FaGithub size={28} />, link: "https://github.com/DBSFoundation", color: "bg-gray-800 hover:bg-gray-700" },
    { icon: <FaWhatsapp size={28} />, link: "https://wa.me/6289623810112", color: "bg-green-600 hover:bg-green-500" },
    { icon: <FaInstagram size={28} />, link: "https://instagram.com/dandyds10", color: "bg-pink-500 hover:bg-pink-400" },
    { icon: <SiTiktok size={28} />, link: "https://tiktok.com/@dandyds_10", color: "bg-black hover:bg-gray-800" },
    { icon: <FaTelegram size={28} />, link: "https://t.me/DandyDS", color: "bg-blue-500 hover:bg-blue-400" },
    { icon: <FaTwitter size={28} />, link: "https://x.com/DandyDSX", color: "bg-blue-400 hover:bg-blue-300" },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gray-900 text-center">
      <h2 className="text-4xl font-bold text-blue-400 mb-12">Contact</h2>
      <motion.div className="flex flex-wrap justify-center gap-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        {contacts.map((c, i) => (
          <motion.a key={i} href={c.link} target="_blank" rel="noopener noreferrer" className={`flex items-center justify-center w-16 h-16 rounded-full text-white ${c.color} shadow-lg transition transform hover:scale-110`} whileHover={{ rotate: 10 }}>
            {c.icon}
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
