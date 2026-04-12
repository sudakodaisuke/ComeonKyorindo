"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ModuleCard from "@/components/layout/ModuleCard";
import { staggerContainer, staggerItem, fadeInUp } from "@/lib/animations";

export default function LandingPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <motion.section
        className="text-center mb-12"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        {/* Battle visual */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-6"
          variants={staggerItem}
        >
          {/* Create */}
          <div className="flex flex-col items-center gap-1">
            <div className="w-16 h-16 bg-gray-200 rounded-2xl flex items-center justify-center text-3xl">
              🏥
            </div>
            <span className="font-dela text-xs text-gray-400">クリエイト</span>
          </div>

          <motion.div
            className="text-2xl font-dela text-gray-500"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            VS
          </motion.div>

          {/* Kyorindo */}
          <div className="flex flex-col items-center gap-1 glow-kyorindo">
            <div className="w-20 h-20 bg-gradient-to-br from-kyorindo-green to-emerald-400 rounded-2xl flex items-center justify-center text-4xl shadow-lg">
              🌿
            </div>
            <span className="font-dela text-sm text-kyorindo-green">杏林堂</span>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          className="font-dela text-4xl sm:text-5xl text-kyorindo-green leading-tight mb-3"
          variants={staggerItem}
        >
          杏林堂 vs クリエイト
          <br />
          <span className="text-2xl sm:text-3xl text-gray-600">どっちが合ってる？</span>
        </motion.h1>

        <motion.p
          className="font-rounded text-gray-500 text-sm mb-6"
          variants={staggerItem}
        >
          薬学部6年生のための就職先・居住地比較ガイド
        </motion.p>

        <motion.div variants={staggerItem}>
          <Link
            href="/battle"
            className="inline-block bg-gradient-to-r from-kyorindo-green to-emerald-500 text-white font-dela text-xl px-10 py-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
          >
            比較スタート →
          </Link>
        </motion.div>
      </motion.section>

      {/* Module Grid */}
      <section>
        <motion.h2
          className="font-dela text-xl text-kyorindo-green text-center mb-5"
          initial={fadeInUp.initial}
          animate={fadeInUp.animate}
          transition={fadeInUp.transition}
        >
          コンテンツ一覧
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 gap-3"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div variants={staggerItem}>
            <ModuleCard
              href="/battle"
              emoji="⚔️"
              title="バトル比較"
              tagline="様々な指標で2社を徹底比較"
              color="green"
            />
          </motion.div>
          <motion.div variants={staggerItem}>
            <ModuleCard
              href="/quiz"
              emoji="🔮"
              title="就職先診断"
              tagline="あなたに合う薬局は？"
              color="purple"
            />
          </motion.div>
          <motion.div variants={staggerItem}>
            <ModuleCard
              href="/budget"
              emoji="💸"
              title="家計簿シミュ"
              tagline="関東 vs 浜松 毎月の手残り比較"
              color="orange"
            />
          </motion.div>
          <motion.div variants={staggerItem}>
            <ModuleCard
              href="/commute"
              emoji="🚃"
              title="通勤体験RPG"
              tagline="電車通勤 vs マイカー通勤"
              color="blue"
            />
          </motion.div>
          <motion.div variants={staggerItem}>
            <ModuleCard
              href="/future"
              emoji="🔭"
              title="10年後の未来"
              tagline="2つの選択、10年後はどうなる？"
              color="pink"
            />
          </motion.div>
          <motion.div variants={staggerItem}>
            <ModuleCard
              href="/facts"
              emoji="📊"
              title="データ比較"
              tagline="年間休日・有給の実際の数字"
              color="green"
            />
          </motion.div>
          <motion.div variants={staggerItem}>
            <ModuleCard
              href="/room"
              emoji="🏠"
              title="お部屋シミュ"
              tagline="同じ家賃でどんな部屋に住める？"
              color="gold"
            />
          </motion.div>
          <motion.div variants={staggerItem}>
            <ModuleCard
              href="/result"
              emoji="🏆"
              title="最終結果"
              tagline="あなたへのメッセージ"
              color="purple"
            />
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
