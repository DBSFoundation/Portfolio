"use client";

export default function Contact() {
  return (
    <section className="py-20 px-6 text-center bg-gray-900" id="contact">
      <h2 className="text-3xl font-bold mb-10">📬 Contact</h2>
      <p className="text-gray-300 mb-4">
        Email: <a href="mailto:youremail@example.com" className="text-blue-400">youremail@example.com</a>
      </p>
      <p className="text-gray-300 mb-4">
        LinkedIn: <a href="#" className="text-blue-400">linkedin.com/in/yourname</a>
      </p>
      <p className="text-gray-300 mb-4">
        GitHub: <a href="#" className="text-blue-400">github.com/yourname</a>
      </p>
    </section>
  );
}
