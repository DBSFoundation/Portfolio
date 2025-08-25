"use client";

export default function Projects() {
  const projects = [
    {
      title: "Crypto Dashboard",
      desc: "Real-time price tracker using CoinGecko API with charts & search feature.",
      link: "https://t.me/DDS_Inc",
    },
    {
      title: "E-Commerce Mini App",
      desc: "Full-stack app with cart, checkout, and admin panel. Built with Next.js & PostgreSQL.",
      link: "https://t.me/DDS_Inc",
    },
    {
      title: "Trading Bot",
      desc: "Automated trading bot with custom strategies for crypto & forex.",
      link: "https://t.me/DDS_Inc",
    },
  ];

  return (
    <section className="py-20 bg-gray-900 text-center" id="projects">
      <h2 className="text-3xl font-bold mb-10">🚀 Projects</h2>
      <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <div key={i} className="bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-300 mb-4">{p.desc}</p>
            <a href={p.link} className="text-blue-400 hover:underline">
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
