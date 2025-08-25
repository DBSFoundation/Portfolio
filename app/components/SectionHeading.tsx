import { JSX } from "react";

export default function SectionHeading({ title, icon }: { title: string; icon?: JSX.Element }) {
  return (
    <div className="flex items-center justify-center md:justify-start gap-3 mb-12">
      {icon && <span className="text-yellow-400 text-2xl">{icon}</span>}
      <h2 className="text-3xl sm:text-4xl font-semibold text-gray-100 relative">
        {title}
        <span className="block h-1 w-16 bg-yellow-400 rounded mt-2"></span>
      </h2>
    </div>
  );
}
