"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const modules = [
  { path: "/battle", label: "⚔️" },
  { path: "/quiz", label: "🔮" },
  { path: "/budget", label: "💰" },
  { path: "/commute", label: "🚃" },
  { path: "/future", label: "🔭" },
  { path: "/facts", label: "📊" },
  { path: "/room", label: "🏠" },
  { path: "/game", label: "🎮" },
];

export default function Header() {
  const pathname = usePathname();

  const completedIndex = modules.findIndex((m) => m.path === pathname);
  const completedCount =
    pathname === "/result"
      ? modules.length
      : completedIndex >= 0
      ? completedIndex
      : 0;
  const persuasionPercent = Math.round((completedCount / modules.length) * 100);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b-2 border-kyorindo-green shadow-sm">
      <div className="max-w-2xl mx-auto px-4 py-2 flex items-center justify-between gap-2">
        <Link href="/" className="font-dela text-kyorindo-green text-sm sm:text-base whitespace-nowrap">
          来い！杏林堂
        </Link>

        <div className="flex-1 max-w-xs">
          <div className="flex items-center gap-1 mb-0.5">
            <span className="text-[10px] text-gray-500 font-rounded">説得度</span>
            <span className="text-[10px] font-bold text-kyorindo-green font-rounded">
              {persuasionPercent}%
            </span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-kyorindo-green to-kyorindo-gold rounded-full transition-all duration-700"
              style={{ width: `${persuasionPercent}%` }}
            />
          </div>
        </div>

        <div className="flex gap-0.5">
          {modules.map((m, i) => (
            <div
              key={m.path}
              className={`w-4 h-4 rounded-full text-[8px] flex items-center justify-center transition-all ${
                i < completedCount
                  ? "bg-kyorindo-green text-white"
                  : pathname === m.path
                  ? "bg-kyorindo-gold text-white scale-125"
                  : "bg-gray-200"
              }`}
              title={m.label}
            >
              {i < completedCount ? "✓" : i === completedCount ? "●" : ""}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
