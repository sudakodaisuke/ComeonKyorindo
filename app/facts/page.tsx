"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const factsData = [
  {
    label: "年間休日",
    kyorindo: { value: "120日", score: 90 },
    create: { value: "117日", score: 86 },
    note: "3日の差。毎年積み重なると大きい",
  },
  {
    label: "有給消化率",
    kyorindo: { value: "約80%（推定16日）", score: 80 },
    create: { value: "約50%（平均11日）", score: 46 },
    note: "有給は「取れる日数」より「実際に取れる日数」が大事",
  },
  {
    label: "実質年間休暇（年間休日＋有給取得）",
    kyorindo: { value: "136日", score: 100 },
    create: { value: "128日", score: 85 },
    note: "年間休日＋有給取得日数の合計",
  },
];

const funFacts = [
  { number: "8日/年", label: "実質休暇の差", detail: "毎年8日多く休める" },
  { number: "64時間/年", label: "増える自由時間", detail: "8日×8時間" },
  { number: "10年で80日", label: "累計の差", detail: "丸2.5ヶ月分の自由時間" },
  { number: "480時間", label: "10年間の累計", detail: "趣味・家族・自分への時間" },
];

export default function FactsPage() {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="font-dela text-3xl sm:text-4xl text-kyorindo-green mb-2">
          📊 データで比較
        </h1>
        <p className="font-rounded text-sm text-gray-500">
          実際の数字で見る、休日・有給の差
        </p>
      </motion.div>

      {/* Data Table */}
      <div className="space-y-4 mb-6">
        {factsData.map((fact, i) => (
          <motion.div
            key={fact.label}
            className="bg-white rounded-2xl p-5 shadow-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15 }}
          >
            <h3 className="font-dela text-sm text-gray-700 mb-3">{fact.label}</h3>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="font-rounded text-xs text-kyorindo-green font-bold">
                    🌿 杏林堂
                  </span>
                  <span className="font-dela text-kyorindo-green">{fact.kyorindo.value}</span>
                </div>
                <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-kyorindo-green to-emerald-400 rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: `${fact.kyorindo.score}%` }}
                    transition={{ delay: i * 0.15 + 0.3, duration: 1.0 }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="font-rounded text-xs text-gray-400">🏥 クリエイト</span>
                  <span className="font-dela text-gray-400">{fact.create.value}</span>
                </div>
                <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-gray-300 to-gray-400 rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: `${fact.create.score}%` }}
                    transition={{ delay: i * 0.15 + 0.3, duration: 0.8 }}
                  />
                </div>
              </div>
            </div>

            <p className="font-rounded text-xs text-gray-400 mt-2">{fact.note}</p>
          </motion.div>
        ))}
      </div>

      {/* Detail breakdown */}
      <motion.div
        className="bg-kyorindo-cream rounded-2xl p-4 border border-kyorindo-light mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <p className="font-dela text-sm text-kyorindo-green mb-2">計算の根拠</p>
        <ul className="font-rounded text-xs text-gray-600 space-y-1">
          <li>・杏林堂：年間休日120日 ＋ 有給付与20日×消化率80% ＝ 136日</li>
          <li>・クリエイト：年間休日117日 ＋ 有給平均取得11日 ＝ 128日</li>
          <li>・差：8日/年（出典：各社採用情報・厚生労働省調査）</li>
        </ul>
      </motion.div>

      {/* Fun Conversions */}
      {!revealed ? (
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            onClick={() => setRevealed(true)}
            className="bg-gradient-to-r from-kyorindo-green to-emerald-500 text-white font-dela text-lg px-8 py-4 rounded-full shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            年8日の差を体感する 👀
          </motion.button>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <h2 className="font-dela text-xl text-kyorindo-green text-center mb-4">
            年8日の差って、実は…
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {funFacts.map((f, i) => (
              <motion.div
                key={f.label}
                className="bg-gradient-to-br from-kyorindo-green to-emerald-600 rounded-2xl p-4 text-white"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 300 }}
              >
                <p className="font-dela text-2xl text-kyorindo-gold mb-1">{f.number}</p>
                <p className="font-rounded text-xs text-white/80 font-bold">{f.label}</p>
                <p className="font-rounded text-[10px] text-white/60 mt-1">{f.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {revealed && (
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link
            href="/room"
            className="inline-block bg-kyorindo-gold text-white font-dela text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            次：お部屋シミュへ →
          </Link>
        </motion.div>
      )}
    </div>
  );
}
