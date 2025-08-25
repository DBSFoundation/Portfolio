"use client";

import Navbar from "./components/NavBar";
import Hero from "./components/Skills";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import TradingJourney from "./components/TradingJourney";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <TradingJourney />
      <Blog />
      <Contact />
    </main>
  );
}
