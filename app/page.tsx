"use client";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import TradingJourney from "./components/TradingJourney";
import Skills from "./components/Skills";
import ContactIcons from "./components/Contact";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main className={darkMode ? "dark bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"}>
      <Navbar />
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed bottom-6 right-6 px-4 py-2 bg-blue-600 text-white rounded-full z-50 shadow-lg hover:bg-blue-700"
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>

      <Hero />
      <Projects />
      <Skills />
      <TradingJourney />
      <ContactIcons />
    </main>
  );
}
