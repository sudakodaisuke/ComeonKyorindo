"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { kantoEvents, hamamatsuEvents } from "@/components/commute/commuteData";

type Phase = "intro" | "kanto" | "kanto-result" | "hamamatsu" | "comparison";

export default function CommutePage() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [eventIndex, setEventIndex] = useState(0);
  const [kantoHP, setKantoHP] = useState(100);
  const [hamamatsuHP, setHamamatsuHP] = useState(100);
  const [shaking, setShaking] = useState(false);
  const [showEvent, setShowEvent] = useState(true);

  const currentKantoEvent = kantoEvents[Math.min(eventIndex, kantoEvents.length - 1)];
  const currentHamamatsuEvent = hamamatsuEvents[Math.min(eventIndex, hamamatsuEvents.length - 1)];

  const handleKantoNext = () => {
    const event = kantoEvents[eventIndex];
    if (event.hpChange < 0) {
      setShaking(true);
      setTimeout(() => setShaking(false), 500);
    }
    setKantoHP((hp) => Math.max(0, Math.min(100, hp + event.hpChange)));
    setShowEvent(false);
    setTimeout(() => {
      if (eventIndex >= kantoEvents.length - 1) {
        setPhase("kanto-result");
      } else {
        setEventIndex((i) => i + 1);
        setShowEvent(true);
      }
    }, 300);
  };

  const handleHamamatsuNext = () => {
    const event = hamamatsuEvents[eventIndex];
    setHamamatsuHP((hp) => Math.max(0, Math.min(100, hp + event.hpChange)));
    setShowEvent(false);
    setTimeout(() => {
      if (eventIndex >= hamamatsuEvents.length - 1) {
        setPhase("comparison");
      } else {
        setEventIndex((i) => i + 1);
        setShowEvent(true);
      }
    }, 300);
  };

  const startHamamatsu = () => {
    setEventIndex(0);
    setShowEvent(true);
    setPhase("hamamatsu");
  };

  const HPBar = ({
    current,
    max = 100,
    color,
  }: {
    current: number;
    max?: number;
    color: "red" | "green";
  }) => (
    <div className="w-full h-5 bg-gray-200 rounded-full overflow-hidden border border-gray-300">
      <motion.div
        className={`h-full rounded-full ${
          color === "red"
            ? "bg-gradient-to-r from-red-500 to-orange-400"
            : "bg-gradient-to-r from-kyorindo-green to-emerald-400"
        }`}
        animate={{ width: `${(current / max) * 100}%` }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="font-dela text-3xl sm:text-4xl text-kyorindo-green mb-2">
          🚃 満員電車RPG
        </h1>
        <p className="font-rounded text-sm text-gray-500">
          通勤でどれだけHPが削られるかを体験しよう
        </p>
      </motion.div>

      <AnimatePresence mode="wait">
        {phase === "intro" && (
          <motion.div
            key="intro"
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="bg-white rounded-3xl p-6 shadow-md mb-6">
              <div className="text-6xl mb-4">⚔️</div>
              <h2 className="font-dela text-2xl text-gray-800 mb-3">
                通勤バトル開始
              </h2>
              <p className="font-rounded text-sm text-gray-600">
                まず<span className="text-red-500 font-bold">関東（電車通勤）</span>を体験。
                <br />
                その後<span className="text-kyorindo-green font-bold">浜松（マイカー通勤）</span>と比較！
              </p>
            </div>
            <motion.button
              onClick={() => setPhase("kanto")}
              className="bg-gradient-to-r from-gray-600 to-slate-700 text-white font-dela text-xl px-10 py-4 rounded-full shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              関東通勤を体験する →
            </motion.button>
          </motion.div>
        )}

        {phase === "kanto" && (
          <motion.div
            key="kanto"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
          >
            {/* Header */}
            <div className="bg-kanto-dark rounded-2xl p-4 mb-4 text-white">
              <p className="font-dela text-lg mb-2">🏙️ 関東 電車通勤</p>
              <div className="flex items-center gap-3">
                <span className="font-rounded text-sm text-white/70">HP</span>
                <HPBar current={kantoHP} color="red" />
                <span className="font-dela text-lg text-red-300">{kantoHP}</span>
              </div>
            </div>

            {/* Event Card */}
            <AnimatePresence mode="wait">
              {showEvent && (
                <motion.div
                  key={eventIndex}
                  className={`bg-white rounded-3xl p-6 shadow-lg mb-4 ${shaking ? "shake" : ""}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <p className="font-rounded text-xs text-gray-400 mb-2">
                    イベント {eventIndex + 1} / {kantoEvents.length}
                  </p>
                  <div className="text-6xl text-center mb-4">
                    {currentKantoEvent.emoji}
                  </div>
                  <h3 className="font-dela text-xl text-gray-800 text-center mb-3">
                    {currentKantoEvent.title}
                  </h3>
                  <p className="font-rounded text-sm text-gray-600 text-center mb-4">
                    {currentKantoEvent.description}
                  </p>
                  <div className="text-center">
                    <span
                      className={`font-dela text-2xl ${
                        currentKantoEvent.hpChange < 0 ? "text-red-500" : "text-kyorindo-green"
                      }`}
                    >
                      HP {currentKantoEvent.hpChange > 0 ? "+" : ""}{currentKantoEvent.hpChange}
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              onClick={handleKantoNext}
              className="w-full bg-gradient-to-r from-gray-600 to-slate-700 text-white font-dela text-lg py-4 rounded-2xl shadow-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              次へ →
            </motion.button>
          </motion.div>
        )}

        {phase === "kanto-result" && (
          <motion.div
            key="kanto-result"
            className="text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="bg-kanto-dark rounded-3xl p-8 shadow-xl text-white mb-6">
              <p className="font-rounded text-sm text-white/60 mb-2">関東通勤終了</p>
              <div className="text-6xl mb-4">😵</div>
              <p className="font-dela text-2xl mb-3">HP残量</p>
              <motion.div
                className="text-7xl font-dela text-red-300"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {kantoHP}
                <span className="text-3xl text-white/50">/100</span>
              </motion.div>
              <div className="mt-3">
                <HPBar current={kantoHP} color="red" />
              </div>
              <p className="font-rounded text-sm text-white/60 mt-3">
                ※まだ仕事が始まっていません
              </p>
            </div>

            <motion.button
              onClick={startHamamatsu}
              className="bg-gradient-to-r from-kyorindo-green to-emerald-500 text-white font-dela text-xl px-10 py-4 rounded-full shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              浜松通勤を体験する 🚗
            </motion.button>
          </motion.div>
        )}

        {phase === "hamamatsu" && (
          <motion.div
            key="hamamatsu"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
          >
            <div className="bg-gradient-to-r from-kyorindo-green to-emerald-600 rounded-2xl p-4 mb-4 text-white">
              <p className="font-dela text-lg mb-2">🌿 浜松 マイカー通勤</p>
              <div className="flex items-center gap-3">
                <span className="font-rounded text-sm text-white/70">HP</span>
                <HPBar current={hamamatsuHP} color="green" />
                <span className="font-dela text-lg text-white">{hamamatsuHP}</span>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {showEvent && (
                <motion.div
                  key={eventIndex}
                  className="bg-white rounded-3xl p-6 shadow-lg mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <p className="font-rounded text-xs text-gray-400 mb-2">
                    イベント {eventIndex + 1} / {hamamatsuEvents.length}
                  </p>
                  <div className="text-6xl text-center mb-4">
                    {currentHamamatsuEvent.emoji}
                  </div>
                  <h3 className="font-dela text-xl text-gray-800 text-center mb-3">
                    {currentHamamatsuEvent.title}
                  </h3>
                  <p className="font-rounded text-sm text-gray-600 text-center mb-4">
                    {currentHamamatsuEvent.description}
                  </p>
                  <div className="text-center">
                    <span className="font-dela text-2xl text-kyorindo-green">
                      HP +{currentHamamatsuEvent.hpChange}
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              onClick={handleHamamatsuNext}
              className="w-full bg-gradient-to-r from-kyorindo-green to-emerald-500 text-white font-dela text-lg py-4 rounded-2xl shadow-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              次へ →
            </motion.button>
          </motion.div>
        )}

        {phase === "comparison" && (
          <motion.div
            key="comparison"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="bg-white rounded-3xl p-6 shadow-md mb-6 text-center">
              <h2 className="font-dela text-2xl text-gray-800 mb-6">最終HP比較</h2>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-800 rounded-2xl p-4 text-white">
                  <p className="font-rounded text-xs text-white/60 mb-1">🏙️ 関東電車</p>
                  <motion.p
                    className="font-dela text-5xl text-red-300"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                  >
                    {kantoHP}
                  </motion.p>
                  <p className="font-rounded text-xs text-white/40">/100</p>
                  <div className="mt-2">
                    <HPBar current={kantoHP} color="red" />
                  </div>
                  <p className="text-2xl mt-2">😵</p>
                </div>

                <div className="bg-gradient-to-br from-kyorindo-green to-emerald-600 rounded-2xl p-4 text-white">
                  <p className="font-rounded text-xs text-white/60 mb-1">🌿 浜松マイカー</p>
                  <motion.p
                    className="font-dela text-5xl text-kyorindo-gold"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4, type: "spring" }}
                  >
                    {hamamatsuHP}
                  </motion.p>
                  <p className="font-rounded text-xs text-white/40">/100</p>
                  <div className="mt-2">
                    <HPBar current={hamamatsuHP} color="green" />
                  </div>
                  <p className="text-2xl mt-2">😊</p>
                </div>
              </div>

              <motion.div
                className="bg-kyorindo-cream rounded-2xl p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <p className="font-dela text-lg text-kyorindo-green mb-1">
                  浜松通勤が{hamamatsuHP - kantoHP}HP上！
                </p>
                <p className="font-rounded text-sm text-gray-600">
                  毎朝この差がついたまま仕事が始まります。
                  <br />1年で考えると…あなたはどちらの自分を生きたいですか？
                </p>
              </motion.div>
            </div>

            <div className="text-center">
              <Link
                href="/future"
                className="inline-block bg-kyorindo-gold text-white font-dela text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                次：10年後の未来へ →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
