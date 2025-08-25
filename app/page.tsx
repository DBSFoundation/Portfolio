"use client";

import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import TradingJourney from "./components/TradingJourney";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="bg-gray-950 text-white">
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
