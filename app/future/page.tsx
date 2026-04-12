"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { futureEvents } from "@/components/future/futureData";

export default function FuturePage() {
  const [started, setStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [done, setDone] = useState(false);

  const currentEvent = futureEvents[currentIndex];

  const handleNext = () => {
    if (currentIndex < futureEvents.length - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      setDone(true);
    }
  };

  const progress = ((currentIndex + 1) / futureEvents.length) * 100;

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="font-dela text-3xl sm:text-4xl text-kyorindo-green mb-2">
          🔭 2つの未来
        </h1>
        <p className="font-rounded text-sm text-gray-500">
          就職選択から10年間、2つの人生を追う
        </p>
      </motion.div>

      {!started ? (
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="bg-white rounded-3xl p-8 shadow-md mb-6">
            <div className="flex justify-center gap-6 mb-5">
              <div className="text-center">
                <div className="text-4xl mb-1">🌿</div>
                <p className="font-dela text-xs text-kyorindo-green">杏林堂×浜松</p>
              </div>
              <div className="font-dela text-gray-300 text-2xl flex items-center">vs</div>
              <div className="text-center opacity-60">
                <div className="text-4xl mb-1 grayscale">🏙️</div>
                <p className="font-dela text-xs text-gray-400">クリエイト×関東</p>
              </div>
            </div>
            <p className="font-rounded text-sm text-gray-600">
              同じ薬剤師、でも就職先と住む場所が違う。
              <br />
              10年後、2人の人生はどう変わっているか？
            </p>
          </div>
          <motion.button
            onClick={() => setStarted(true)}
            className="bg-gradient-to-r from-kyorindo-green to-emerald-500 text-white font-dela text-xl px-10 py-4 rounded-full shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            10年間を見る →
          </motion.button>
        </motion.div>
      ) : done ? (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-kyorindo-green to-emerald-600 rounded-3xl p-8 shadow-2xl text-white mb-4">
            <div className="text-6xl mb-3">🏆</div>
            <h2 className="font-dela text-2xl mb-3">10年後の結論</h2>
            <div className="flex justify-center gap-8 mb-4">
              <div>
                <p className="font-rounded text-xs text-white/60">杏林堂×浜松</p>
                <p className="font-dela text-4xl text-kyorindo-gold">95点</p>
                <p className="text-2xl">😄</p>
              </div>
              <div className="font-dela text-white/30 text-2xl flex items-center">vs</div>
              <div className="opacity-60">
                <p className="font-rounded text-xs text-white/60">クリエイト×関東</p>
                <p className="font-dela text-4xl text-red-300">燃尽</p>
                <p className="text-2xl">😮‍💨</p>
              </div>
            </div>
            <p className="font-rounded text-sm text-white/80">
              どちらの10年を生きたいですか？
            </p>
          </div>

          <Link
            href="/facts"
            className="inline-block bg-kyorindo-gold text-white font-dela text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            次：事実データで確認 →
          </Link>
        </motion.div>
      ) : (
        <div>
          {/* Year progress */}
          <div className="flex items-center gap-3 mb-4">
            <span className="font-dela text-kyorindo-green text-sm whitespace-nowrap">
              {currentEvent.year}年目
            </span>
            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-kyorindo-green to-kyorindo-gold"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
            <span className="font-rounded text-xs text-gray-400">
              {currentIndex + 1}/{futureEvents.length}
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
            >
              {/* Year badge */}
              <motion.div
                className="text-center mb-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 400, delay: 0.1 }}
              >
                <span className="bg-kyorindo-gold text-white font-dela text-2xl px-6 py-2 rounded-full shadow-lg">
                  {currentEvent.year}年後
                </span>
              </motion.div>

              <div className="grid grid-cols-1 gap-3 mb-5">
                {/* Kyorindo path */}
                <motion.div
                  className="bg-gradient-to-r from-kyorindo-green/10 to-emerald-50 rounded-2xl p-5 border-2 border-kyorindo-light"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="font-dela text-sm text-kyorindo-green mb-2">
                    🌿 杏林堂 × 浜松ルート
                  </p>
                  <div className="flex items-start gap-3">
                    <span className="text-3xl">{currentEvent.kyorindo.emoji}</span>
                    <p className="font-rounded text-sm text-gray-700 leading-relaxed">
                      {currentEvent.kyorindo.text}
                    </p>
                  </div>
                </motion.div>

                {/* Create path */}
                <motion.div
                  className={`rounded-2xl p-5 border-2 border-gray-200 ${
                    currentIndex >= 3
                      ? "bg-gradient-to-r from-gray-100 to-gray-50"
                      : "bg-white"
                  }`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  style={{
                    filter: currentIndex >= 4 ? "grayscale(50%)" : "none",
                  }}
                >
                  <p className="font-dela text-sm text-gray-400 mb-2">
                    🏙️ クリエイト × 関東ルート
                  </p>
                  <div className="flex items-start gap-3">
                    <span className="text-3xl">{currentEvent.create.emoji}</span>
                    <p className="font-rounded text-sm text-gray-500 leading-relaxed">
                      {currentEvent.create.text}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          <motion.button
            onClick={handleNext}
            className="w-full bg-gradient-to-r from-kyorindo-green to-emerald-500 text-white font-dela text-lg py-4 rounded-2xl shadow-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {currentIndex < futureEvents.length - 1 ? "次の年へ →" : "10年後を見る 🔭"}
          </motion.button>
        </div>
      )}
    </div>
  );
}
