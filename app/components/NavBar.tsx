"use client";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow bg-white dark:bg-gray-800 sticky top-0 z-50">
      <h1 className="font-bold text-xl">Premilyader</h1>
      <div className="flex gap-4 items-center">
        <a href="#hero" className="hover:text-blue-500">Home</a>
        <a href="#projects" className="hover:text-blue-500">Projects</a>
        <a href="#trading" className="hover:text-blue-500">Trading</a>
        <a href="#blog" className="hover:text-blue-500">Blog</a>
        <a href="#contact" className="hover:text-blue-500">Contact</a>
      </div>
    </nav>
  );
}
