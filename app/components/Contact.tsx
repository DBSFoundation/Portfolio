"use client";

export default function Contact() {
  return (
    <section className="py-20 px-6 text-center bg-gray-900">
      <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
      <p className="text-gray-300 mb-4">
        Interested in working together? Reach out to me!
      </p>
      <a
        href="mailto:your@email.com"
        className="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition"
      >
        Say Hello 👋
      </a>
    </section>
  );
}
