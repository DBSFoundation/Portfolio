"use client";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 text-center bg-gray-900">
      <h2 className="text-3xl font-bold mb-12 text-white">📬 Contact</h2>
      <div className="flex flex-col sm:flex-row justify-center gap-6 text-white">
        <a 
          href="mailto:dandyds26@gmail.com" 
          className="flex items-center gap-2 px-4 py-3 bg-gray-800 rounded-xl hover:bg-gray-700 transition"
        >
          <FaEnvelope size={24} /> Email
        </a>
        <a 
          href="https://linkedin.com/in/dandyds" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-3 bg-gray-800 rounded-xl hover:bg-gray-700 transition"
        >
          <FaLinkedin size={24} /> LinkedIn
        </a>
        <a 
          href="https://github.com/DBSFoundation" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-3 bg-gray-800 rounded-xl hover:bg-gray-700 transition"
        >
          <FaGithub size={24} /> GitHub
        </a>
      </div>
    </section>
  );
}
