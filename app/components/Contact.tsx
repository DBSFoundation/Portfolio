"use client";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 text-center bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-12">📬 Contact</h2>
      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
        <a href="mailto:dandyds26@gmail.com" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-800 hover:bg-gray-700">
          <FaEnvelope size={24} /> Email
        </a>
        <a href="https://linkedin.com/in/dandyds" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-700 hover:bg-blue-600">
          <FaLinkedin size={24} /> LinkedIn
        </a>
        <a href="https://github.com/DBSFoundation" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-800 hover:bg-gray-700">
          <FaGithub size={24} /> GitHub
        </a>
      </div>
    </section>
  );
}
