"use client";

import { useState } from "react";
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
      <section id="hero"><Hero /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="trading"><TradingJourney /></section>
      <section id="blog"><Blog /></section>
      <section id="contact"><Contact /></section>
    </main>
  );
}
