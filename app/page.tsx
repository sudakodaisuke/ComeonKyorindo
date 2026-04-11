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
          {/* Create (sad) */}
          <div className="flex flex-col items-center gap-1 opacity-50 grayscale">
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

          {/* Kyorindo (glowing) */}
          <div className="flex flex-col items-center gap-1 glow-kyorindo">
            <div className="w-20 h-20 bg-gradient-to-br from-kyorindo-green to-emerald-400 rounded-2xl flex items-center justify-center text-4xl shadow-lg">
              🌿
            </div>
            <span className="font-dela text-sm text-kyorindo-green">杏林堂</span>
            <motion.span
              className="text-kyorindo-gold text-lg"
              animate={{ scale: [1, 1.3, 1], rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              ✨
            </motion.span>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          className="font-dela text-5xl sm:text-6xl text-kyorindo-green leading-tight mb-3"
          variants={staggerItem}
          animate={{
            textShadow: [
              "0 0 0px transparent",
              "0 0 20px rgba(45,140,78,0.4)",
              "0 0 0px transparent",
            ],
          }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          来い！
          <br />
          <span className="text-kyorindo-gold">杏林堂</span>
        </motion.h1>

        <motion.p
          className="font-rounded text-gray-600 text-sm mb-1"
          variants={staggerItem}
        >
          薬学部6年生へ贈る、人生最良の選択のための
        </motion.p>
        <motion.p
          className="font-rounded text-xs text-gray-400 mb-6"
          variants={staggerItem}
        >
          完全に公平で客観的な情報ガイド
          <span className="ml-1 text-[10px] text-rose-400">※公平ではありません</span>
        </motion.p>

        <motion.div variants={staggerItem}>
          <Link
            href="/battle"
            className="inline-block bg-gradient-to-r from-kyorindo-green to-emerald-500 text-white font-dela text-xl px-10 py-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
          >
            診断スタート →
          </Link>
        </motion.div>

        <motion.p
          className="font-rounded text-xs text-gray-400 mt-3"
          variants={staggerItem}
        >
          ⚠️ 警告：このアプリを見た後に関東移住を選んだ人類は過去にいません
        </motion.p>
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
              title="バトル！"
              tagline="全指標で杏林堂が完全勝利 ※公平"
              color="green"
            />
          </motion.div>
          <motion.div variants={staggerItem}>
            <ModuleCard
              href="/quiz"
              emoji="🔮"
              title="就職先診断"
              tagline="どう答えても…わかってるよね？"
              color="purple"
            />
          </motion.div>
          <motion.div variants={staggerItem}>
            <ModuleCard
              href="/budget"
              emoji="💸"
              title="家計簿シミュ"
              tagline="関東の手取りが火を吹くぞ"
              color="orange"
            />
          </motion.div>
          <motion.div variants={staggerItem}>
            <ModuleCard
              href="/commute"
              emoji="🚃"
              title="満員電車RPG"
              tagline="HP削られゲー vs HP回復ゲー"
              color="blue"
            />
          </motion.div>
          <motion.div variants={staggerItem}>
            <ModuleCard
              href="/future"
              emoji="🔭"
              title="10年後の未来"
              tagline="2つの人生をリアルに見よ"
              color="pink"
            />
          </motion.div>
          <motion.div variants={staggerItem}>
            <ModuleCard
              href="/facts"
              emoji="📊"
              title="事実比較"
              tagline="年間休日・有給…数字は嘘をつかない"
              color="green"
            />
          </motion.div>
          <motion.div variants={staggerItem}>
            <ModuleCard
              href="/room"
              emoji="🏠"
              title="お部屋シミュ"
              tagline="同じ家賃で天と地の差！"
              color="gold"
            />
          </motion.div>
          <motion.div variants={staggerItem}>
            <ModuleCard
              href="/game"
              emoji="🎮"
              title="関東移住阻止！"
              tagline="友人を引き止めろ！タップゲーム"
              color="purple"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Disclaimer */}
      <motion.div
        className="mt-8 bg-white/60 rounded-2xl p-4 text-center border border-kyorindo-light"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <p className="font-rounded text-xs text-gray-500">
          📋 免責事項：本アプリは「杏林堂に就職してほしい友達のために作られた完全に偏ったWebサービス」です。
          <br />
          掲載データは独自調査に基づきます。※独自調査とは「私の気持ち」です。
        </p>
      </motion.div>
    </div>
  );
}
