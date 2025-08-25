"use client";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
}

export default function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <motion.h2
      initial={{ opacity:0, y:20 }}
      whileInView={{opacity:1, y:0}}
      viewport={{once:true}}
      transition={{duration:0.8}}
      className="text-4xl font-bold text-center text-blue-400 mb-12"
    >
      {title}
    </motion.h2>
  );
}
