"use client";

export default function Projects() {
  const projects = [
    { title: "Portfolio Website", link: "https://dandyds-portfolio.vercel.app/" },
    { title: "Crypto Channel", link: "https://t.me/DDS_Inc" },
    { title: "Signal Forex", link: "https://t.me/DDS_Inc" },
  ];

  return (
    <section className="py-20 px-6 text-center bg-gray-950">
      <h2 className="text-3xl font-bold mb-8">My Projects</h2>
      <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-gray-800 p-6 rounded-xl shadow-md hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <a href={p.link} className="text-blue-400 hover:underline">
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
