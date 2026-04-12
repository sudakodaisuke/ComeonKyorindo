"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import StatRow from "@/components/battle/StatRow";
import { battleStats } from "@/components/battle/battleData";

export default function BattlePage() {
  const [revealed, setRevealed] = useState(false);
  const [allDone, setAllDone] = useState(false);

  const handleReveal = () => {
    setRevealed(true);
    setTimeout(() => setAllDone(true), battleStats.length * 150 + 1800);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Header */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="inline-block bg-gray-100 text-gray-500 text-xs font-rounded px-3 py-1 rounded-full mb-3">
          ※このデータは完全に公平です。完全に。
        </div>
        <h1 className="font-dela text-3xl sm:text-4xl text-kyorindo-green mb-2">
          ⚔️ 究極バトル ⚔️
        </h1>
        <p className="font-rounded text-gray-600 text-sm">
          クリエイト <span className="text-gray-400">VS</span>{" "}
          <span className="text-kyorindo-green font-bold">杏林堂</span>
        </p>
        <p className="font-rounded text-xs text-gray-400 mt-1">
          全{battleStats.length}指標で徹底比較！
        </p>
      </motion.div>

      {/* VS Banner */}
      <motion.div
        className="flex items-center justify-center gap-6 mb-8 p-4 bg-white rounded-2xl shadow-sm"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="text-center opacity-50 grayscale">
          <div className="text-4xl mb-1">🏥</div>
          <span className="font-dela text-sm text-gray-400">クリエイト</span>
          {allDone && (
            <div className="text-2xl mt-1">😔</div>
          )}
        </div>

        <div className="flex flex-col items-center">
          <motion.div
            className="font-dela text-2xl text-gray-500"
            animate={revealed ? { scale: [1, 1.3, 1], color: ["#6B7280", "#EF4444", "#6B7280"] } : {}}
            transition={{ repeat: allDone ? 0 : Infinity, duration: 1.5 }}
          >
            VS
          </motion.div>
          {allDone && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="font-dela text-xs text-kyorindo-gold mt-1"
            >
              完敗…
            </motion.div>
          )}
        </div>

        <div className="text-center glow-kyorindo">
          <div className="text-4xl mb-1">🌿</div>
          <span className="font-dela text-sm text-kyorindo-green">杏林堂</span>
          {allDone && (
            <motion.div
              className="text-2xl mt-1"
              animate={{ rotate: [0, 20, -20, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
            >
              🏆
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Start Button */}
      {!revealed && (
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.button
            onClick={handleReveal}
            className="bg-gradient-to-r from-kyorindo-green to-emerald-500 text-white font-dela text-xl px-10 py-4 rounded-full shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ boxShadow: ["0 4px 20px rgba(45,140,78,0.3)", "0 4px 40px rgba(45,140,78,0.6)", "0 4px 20px rgba(45,140,78,0.3)"] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            バトル開始！ ⚡
          </motion.button>
          <p className="font-rounded text-xs text-gray-400 mt-2">
            ※結果は予め決まっています
          </p>
        </motion.div>
      )}

      {/* Stats */}
      <div className="space-y-3">
        {battleStats.map((stat, i) => (
          <StatRow key={stat.label} stat={stat} visible={revealed} index={i} />
        ))}
      </div>

      {/* Final Score */}
      {allDone && (
        <motion.div
          className="mt-8 bg-gradient-to-br from-kyorindo-green to-emerald-600 rounded-3xl p-6 text-white text-center shadow-2xl"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <div className="text-5xl mb-2">🏆</div>
          <p className="font-dela text-2xl mb-1">最終スコア</p>
          <p className="font-dela text-4xl mb-3">
            <span className="text-kyorindo-gold">{battleStats.length}</span>
            <span className="text-white/60 text-xl"> ：</span>
            <span className="text-white/50">0</span>
          </p>
          <p className="font-rounded text-sm text-white/80 mb-1">
            杏林堂の完全勝利！！！
          </p>
          <p className="font-rounded text-xs text-white/60">
            ※クリエイトへの敬意は忘れていません。少しだけ。
          </p>
        </motion.div>
      )}

      {/* Navigation */}
      {allDone && (
        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Link
            href="/quiz"
            className="inline-block bg-kyorindo-gold text-white font-dela text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            次：就職先診断へ →
          </Link>
          <p className="font-rounded text-xs text-gray-400 mt-2">
            ※診断結果はひとつだけです
          </p>
        </motion.div>
      )}
    </div>
  );
}
