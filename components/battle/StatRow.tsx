"use client";

import { motion } from "framer-motion";
import { BattleStat } from "./battleData";

interface StatRowProps {
  stat: BattleStat;
  visible: boolean;
  index: number;
}

export default function StatRow({ stat, visible, index }: StatRowProps) {
  return (
    <motion.div
      className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: index * 0.15, duration: 0.4 }}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="font-dela text-sm text-gray-700">{stat.label}</span>
        <motion.span
          className="text-xs font-bold bg-kyorindo-gold text-white px-2 py-0.5 rounded-full"
          initial={{ scale: 0 }}
          animate={visible ? { scale: 1 } : { scale: 0 }}
          transition={{ delay: index * 0.15 + 0.8, type: "spring", stiffness: 400 }}
        >
          杏林堂の勝ち！
        </motion.span>
      </div>

      {/* Kyorindo Bar */}
      <div className="mb-2">
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs font-rounded text-kyorindo-green font-bold">🌿 杏林堂</span>
          <span className="text-xs font-rounded text-kyorindo-green">{stat.kyorindoLabel}</span>
        </div>
        <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-kyorindo-green to-emerald-400 rounded-full relative"
            initial={{ width: "0%" }}
            animate={visible ? { width: `${stat.kyorindoScore}%` } : { width: "0%" }}
            transition={{ delay: index * 0.15 + 0.3, duration: 1.0, ease: "easeOut" }}
          >
            {stat.kyorindoScore === 100 && (
              <motion.span
                className="absolute right-1 top-0 text-[10px] leading-4"
                initial={{ opacity: 0 }}
                animate={visible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: index * 0.15 + 1.4 }}
              >
                ✨
              </motion.span>
            )}
          </motion.div>
        </div>
        {stat.kyorindoNote && (
          <p className="text-[10px] text-gray-400 font-rounded mt-0.5">{stat.kyorindoNote}</p>
        )}
      </div>

      {/* Create Bar */}
      <div>
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs font-rounded text-gray-400">🏥 クリエイト</span>
          <span className="text-xs font-rounded text-gray-400">{stat.createLabel}</span>
        </div>
        <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-gray-300 to-gray-400 rounded-full"
            initial={{ width: "0%" }}
            animate={visible ? { width: `${stat.createScore}%` } : { width: "0%" }}
            transition={{ delay: index * 0.15 + 0.3, duration: 0.8, ease: "easeOut" }}
          />
        </div>
        {stat.createNote && (
          <p className="text-[10px] text-gray-400 font-rounded mt-0.5 italic">{stat.createNote}</p>
        )}
      </div>
    </motion.div>
  );
}
