"use client";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const contacts = [
    { name: "Email", icon: <FaEnvelope size={30} />, link: "mailto:dandyds26@gmail.com" },
    { name: "GitHub", icon: <FaGithub size={30} />, link: "https://github.com/DBSFoundation" },
    { name: "LinkedIn", icon: <FaLinkedin size={30} />, link: "https://linkedin.com/in/dandyds" },
  ];

  return (
    <section className="py-20 px-6 text-center bg-gray-900" id="contact">
      <h2 className="text-3xl font-bold mb-10 text-white">📬 Contact Me</h2>
      <div className="flex justify-center gap-12">
        {contacts.map((c, i) => (
          <a
            key={i}
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 text-gray-300 hover:text-blue-400 transition"
          >
            {c.icon}
            <span className="mt-1">{c.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
