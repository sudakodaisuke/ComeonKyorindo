"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ModuleCardProps {
  href: string;
  emoji: string;
  title: string;
  tagline: string;
  color?: "green" | "gold" | "pink" | "blue" | "purple" | "orange";
}

const colorMap = {
  green: "from-kyorindo-green to-emerald-400",
  gold: "from-amber-400 to-kyorindo-gold",
  pink: "from-rose-400 to-pink-300",
  blue: "from-blue-500 to-cyan-400",
  purple: "from-purple-500 to-violet-400",
  orange: "from-orange-500 to-amber-400",
};

export default function ModuleCard({
  href,
  emoji,
  title,
  tagline,
  color = "green",
}: ModuleCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.04, rotate: 1 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      <Link href={href} className="block">
        <div
          className={`bg-gradient-to-br ${colorMap[color]} rounded-2xl p-4 text-white shadow-lg hover:shadow-xl transition-shadow`}
        >
          <div className="text-4xl mb-2">{emoji}</div>
          <h3 className="font-dela text-base leading-tight mb-1">{title}</h3>
          <p className="font-rounded text-xs opacity-90">{tagline}</p>
        </div>
      </Link>
    </motion.div>
  );
}
