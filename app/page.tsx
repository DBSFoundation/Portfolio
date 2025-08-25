"use client";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Trading from "./components/TradingJourney";
import ContactIcons from "./components/Contact";

export default function HomePage() {
  return (
    <main className="bg-gray-900 text-gray-100">
      <Hero />
      <Projects />
      <Skills />
      <Trading />
      <ContactIcons />
    </main>
  );
}
