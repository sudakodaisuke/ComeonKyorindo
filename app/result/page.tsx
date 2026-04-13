"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const confettiItems = ["🎉", "✨", "🌿", "💚", "⭐", "🎊", "🏆", "🌸"];

export default function ResultPage() {
  const [confetti, setConfetti] = useState<
    { id: number; emoji: string; x: number; delay: number; duration: number }[]
  >([]);

  useEffect(() => {
    const items = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      emoji: confettiItems[i % confettiItems.length],
      x: Math.random() * 100,
      delay: Math.random() * 1.5,
      duration: 2 + Math.random() * 2,
    }));
    setConfetti(items);
  }, []);

  const shareText = encodeURIComponent(
    "杏林堂に就職することが科学的に証明されました。浜松最高！ #来い杏林堂"
  );

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 relative overflow-hidden">
      {/* Confetti */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
        {confetti.map((c) => (
          <motion.div
            key={c.id}
            className="absolute text-3xl"
            style={{ left: `${c.x}%`, top: -50 }}
            initial={{ y: -50, opacity: 1, rotate: 0 }}
            animate={{ y: "110vh", opacity: 0, rotate: 720 }}
            transition={{
              delay: c.delay,
              duration: c.duration,
              ease: "easeIn",
            }}
          >
            {c.emoji}
          </motion.div>
        ))}
      </div>

      {/* Main verdict */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        <motion.div
          className="text-8xl mb-4"
          animate={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          🏆
        </motion.div>

        <motion.h1
          className="font-dela text-4xl sm:text-5xl text-kyorindo-green mb-2"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          最終判決
        </motion.h1>

        <motion.div
          className="bg-gradient-to-br from-kyorindo-green to-emerald-600 rounded-3xl p-8 shadow-2xl text-white mb-6"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
        >
          <motion.p
            className="font-dela text-5xl text-kyorindo-gold mb-3"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.9, type: "spring", stiffness: 300 }}
          >
            杏林堂！！！
          </motion.p>
          <p className="font-rounded text-base text-white/80">
            全コンテンツが示した揺るぎない真実
          </p>
          <div className="mt-4 grid grid-cols-4 gap-2 text-sm">
            {[
              { label: "バトル", result: "4/4勝" },
              { label: "診断", result: "杏林堂" },
              { label: "家計簿", result: "+8万/月" },
              { label: "通勤", result: "HP+57" },
              { label: "10年後", result: "満足95点" },
              { label: "休暇差", result: "+8日/年" },
              { label: "部屋", result: "3倍広い" },
              { label: "友達", result: "いる！" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white/20 rounded-xl p-2 text-center"
              >
                <p className="font-rounded text-[9px] text-white/60">{item.label}</p>
                <p className="font-dela text-xs text-kyorindo-gold">{item.result}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Personal message */}
        <motion.div
          className="bg-white rounded-3xl p-6 shadow-md text-left mb-6 border-l-4 border-kyorindo-green"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          <p className="font-dela text-sm text-kyorindo-green mb-3">
            💌 あなたへ
          </p>
          <p className="font-rounded text-sm text-gray-700 leading-relaxed">
            6年間、本当によく頑張ったよね。
            <br />
            <br />
            関東に出てみたい気持ち、すごくわかる。
            でも一つだけ聞かせて——杏林堂には、あなたの友達や先輩がいるんだよ。
            <br />
            <br />
            知らない場所で、知らない人たちの中でゼロからスタートするのと、
            知っている顔がいる職場に飛び込むのって、
            最初の半年の気持ちが全然違うと思う。
            困ったとき声をかけられる人が身近にいるって、それだけで全然違う。
            <br />
            <br />
            杏林堂で働くって、地域の誰かの「かかりつけ薬剤師」になること。
            名前を覚えてもらって、頼ってもらって——
            そういう仕事を、知ってる仲間たちと一緒にできる。
            <br />
            <br />
            <span className="text-kyorindo-green font-bold">
              杏林堂で待ってるよ。🌿
            </span>
          </p>
          <p className="font-rounded text-xs text-gray-400 mt-4 text-right">
            —— 偏ったアプリを作った誰かより
          </p>
        </motion.div>

        {/* Share button */}
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          <a
            href={`https://line.me/R/share?text=${shareText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-[#06C755] text-white font-dela text-lg py-4 rounded-2xl shadow-lg hover:scale-105 transition-all text-center"
          >
            📱 LINEでシェアする
          </a>

          <Link
            href="/"
            className="block w-full bg-gradient-to-r from-kyorindo-green to-emerald-500 text-white font-dela text-lg py-4 rounded-2xl shadow-lg hover:scale-105 transition-all text-center"
          >
            🌿 もう一度最初から
          </Link>
        </motion.div>

      </motion.div>
    </div>
  );
}
