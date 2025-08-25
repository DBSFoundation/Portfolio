"use client";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Trading from "./components/TradingJourney";
import ContactIcons from "./components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Projects />
        <Skills />
        <Trading />
        <ContactIcons />
      </main>
    </>
  );
}
