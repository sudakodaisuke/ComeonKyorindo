"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

type Phase = "intro" | "playing" | "cleared" | "failed";

const appealMessages = [
  { text: "うなぎ！！", emoji: "🍣", power: 8 },
  { text: "富士山が見えるよ！", emoji: "🗻", power: 10 },
  { text: "さわやかのハンバーグ！", emoji: "🍔", power: 15 },
  { text: "年間休日120日！", emoji: "📅", power: 12 },
  { text: "有給消化率80%！", emoji: "🏖️", power: 14 },
  { text: "満員電車なし！", emoji: "🚗", power: 11 },
  { text: "広い家賃！2LDK！", emoji: "🏠", power: 13 },
  { text: "地域に愛される薬剤師に！", emoji: "👨‍⚕️", power: 16 },
  { text: "浜名湖の夕日！", emoji: "🌅", power: 9 },
  { text: "ヤマハとカワイの街！", emoji: "🎵", power: 8 },
  { text: "毎月貯金が増える！", emoji: "💰", power: 14 },
  { text: "親の近くに住める！", emoji: "👪", power: 18 },
];

const TIME_LIMIT = 30;
const INITIAL_POSITION = 50; // 0=left(Hamamatsu), 100=right(Kanto)
const MOVE_PER_SECOND = 2.2; // pixels per second toward Kanto
const REQUIRED_POSITION = 15; // need to push back to ≤15 to win

export default function GamePage() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [position, setPosition] = useState(INITIAL_POSITION);
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);
  const [taps, setTaps] = useState(0);
  const [appeals, setAppeals] = useState<
    { id: number; text: string; emoji: string; x: number; y: number }[]
  >([]);
  const [nextAppealId, setNextAppealId] = useState(0);
  const positionRef = useRef(position);
  positionRef.current = position;

  // Game timer
  useEffect(() => {
    if (phase !== "playing") return;

    const interval = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(interval);
          // Check win/lose
          if (positionRef.current <= REQUIRED_POSITION) {
            setPhase("cleared");
          } else {
            setPhase("failed");
          }
          return 0;
        }
        return t - 1;
      });

      // Character drifts toward Kanto
      setPosition((p) => {
        const newPos = Math.min(100, p + MOVE_PER_SECOND);
        if (newPos >= 100) {
          setPhase("failed");
        }
        return newPos;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [phase]);

  const handleTap = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      if (phase !== "playing") return;

      const msgData = appealMessages[taps % appealMessages.length];
      setTaps((t) => t + 1);

      // Push character back
      setPosition((p) => {
        const newPos = Math.max(0, p - msgData.power);
        if (newPos <= REQUIRED_POSITION) {
          setPhase("cleared");
        }
        return newPos;
      });

      // Spawn appeal message
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
      let clientX: number, clientY: number;
      if ("touches" in e && e.touches[0]) {
        clientX = e.touches[0].clientX - rect.left;
        clientY = e.touches[0].clientY - rect.top;
      } else {
        clientX = (e as React.MouseEvent).clientX - rect.left;
        clientY = (e as React.MouseEvent).clientY - rect.top;
      }

      const newAppeal = {
        id: nextAppealId,
        text: msgData.text,
        emoji: msgData.emoji,
        x: Math.max(20, Math.min(rect.width - 100, clientX - 50)),
        y: Math.max(20, clientY - 40),
      };
      setNextAppealId((n) => n + 1);
      setAppeals((prev) => [...prev, newAppeal]);
      setTimeout(() => {
        setAppeals((prev) => prev.filter((a) => a.id !== newAppeal.id));
      }, 1500);
    },
    [phase, taps, nextAppealId]
  );

  const restart = () => {
    setPhase("playing");
    setPosition(INITIAL_POSITION);
    setTimeLeft(TIME_LIMIT);
    setTaps(0);
    setAppeals([]);
  };

  const progressPercent = (timeLeft / TIME_LIMIT) * 100;
  const characterDanger = position > 70;

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <motion.div
        className="text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="font-dela text-3xl sm:text-4xl text-kyorindo-green mb-2">
          🎮 関東移住阻止ゲーム
        </h1>
        <p className="font-rounded text-sm text-gray-500">
          友人が関東に向かって歩いていく！タップして引き止めろ！
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
            <div className="bg-white rounded-3xl p-8 shadow-md mb-6">
              <div className="text-6xl mb-4">🚶‍♀️💨</div>
              <h2 className="font-dela text-2xl text-gray-800 mb-3">ルール</h2>
              <ul className="font-rounded text-sm text-gray-600 text-left space-y-2 mb-4">
                <li>🏃 友人が右（関東方向）に歩いていく</li>
                <li>👆 画面をタップして引き止めよう！</li>
                <li>📣 タップするたびに杏林堂の魅力が飛び出す</li>
                <li>⏰ 30秒以内に左まで引き戻せばクリア！</li>
                <li>💀 100%まで行ったら…関東行き確定😢</li>
              </ul>
              <p className="font-rounded text-xs text-gray-400">
                ※スマホで遊ぶのがオススメ
              </p>
            </div>
            <motion.button
              onClick={() => setPhase("playing")}
              className="bg-gradient-to-r from-purple-500 to-violet-500 text-white font-dela text-xl px-10 py-4 rounded-full shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ゲームスタート！ 🎮
            </motion.button>
          </motion.div>
        )}

        {phase === "playing" && (
          <motion.div
            key="playing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Timer & Stats */}
            <div className="flex items-center gap-3 mb-3">
              <div className="flex items-center gap-1">
                <span className="text-lg">⏰</span>
                <span
                  className={`font-dela text-2xl ${timeLeft <= 10 ? "text-red-500" : "text-gray-700"}`}
                >
                  {timeLeft}
                </span>
              </div>
              <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-kyorindo-green to-kyorindo-gold rounded-full"
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <span className="font-rounded text-sm text-gray-500">{taps}タップ</span>
            </div>

            {/* Game Area */}
            <div
              className="relative bg-gradient-to-r from-kyorindo-cream via-white to-gray-200 rounded-3xl shadow-lg overflow-hidden cursor-pointer select-none"
              style={{ height: "260px" }}
              onClick={handleTap}
              onTouchStart={handleTap}
            >
              {/* Labels */}
              <div className="absolute top-2 left-3 font-dela text-xs text-kyorindo-green">
                🌿 浜松
              </div>
              <div className="absolute top-2 right-3 font-dela text-xs text-gray-400">
                🏙️ 関東
              </div>

              {/* Progress track */}
              <div className="absolute top-1/2 left-4 right-4 h-2 bg-gray-200 rounded-full overflow-hidden -translate-y-1/2">
                <motion.div
                  className={`h-full rounded-full ${
                    characterDanger
                      ? "bg-gradient-to-r from-orange-400 to-red-500"
                      : "bg-gradient-to-r from-kyorindo-green to-emerald-400"
                  }`}
                  animate={{ width: `${position}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Character */}
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 text-4xl"
                animate={{ left: `${Math.max(8, Math.min(92, position))}%` }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  animate={
                    characterDanger
                      ? { rotate: [0, 5, -5, 5, 0] }
                      : {}
                  }
                  transition={{ repeat: Infinity, duration: 0.5 }}
                >
                  🚶‍♀️
                </motion.div>
              </motion.div>

              {/* Appeal messages */}
              <AnimatePresence>
                {appeals.map((a) => (
                  <motion.div
                    key={a.id}
                    className="absolute pointer-events-none"
                    style={{ left: a.x, top: a.y }}
                    initial={{ opacity: 1, y: 0, scale: 0.5 }}
                    animate={{ opacity: 0, y: -60, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                  >
                    <div className="bg-kyorindo-green text-white font-dela text-xs px-3 py-1 rounded-full shadow-lg whitespace-nowrap">
                      {a.emoji} {a.text}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Tap hint */}
              {taps === 0 && (
                <motion.div
                  className="absolute inset-0 flex items-end justify-center pb-4 pointer-events-none"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                >
                  <p className="font-dela text-kyorindo-green text-sm">
                    👆 タップ！
                  </p>
                </motion.div>
              )}
            </div>

            <p className="font-rounded text-xs text-gray-400 text-center mt-2">
              位置: {Math.round(position)}% → 15%以下まで引き戻せ！
            </p>
          </motion.div>
        )}

        {phase === "cleared" && (
          <motion.div
            key="cleared"
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            {[...Array(16)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-2xl pointer-events-none"
                style={{ left: `${Math.random() * 100}%`, top: 0 }}
                initial={{ y: -50, opacity: 1, rotate: 0 }}
                animate={{ y: 400, opacity: 0, rotate: 720 }}
                transition={{ delay: i * 0.08, duration: 2 }}
              >
                {["🎉", "✨", "🌿", "💚", "🗻", "🎊"][i % 6]}
              </motion.div>
            ))}

            <div className="bg-gradient-to-br from-kyorindo-green to-emerald-600 rounded-3xl p-8 shadow-2xl text-white mb-6">
              <div className="text-7xl mb-4">🎉</div>
              <h2 className="font-dela text-3xl text-kyorindo-gold mb-3">クリア！！</h2>
              <p className="font-rounded text-sm text-white/80">
                友人が引き止められた！
                <br />
                「ありがとう！やっぱり杏林堂にする！」
              </p>
              <p className="font-dela text-2xl mt-4 text-white">
                {taps}タップで説得！
              </p>
              <p className="font-rounded text-xs text-white/60 mt-2">
                あなたは最高の友達です
              </p>
            </div>

            <Link
              href="/result"
              className="inline-block bg-kyorindo-gold text-white font-dela text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              最終結果へ →
            </Link>
          </motion.div>
        )}

        {phase === "failed" && (
          <motion.div
            key="failed"
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="bg-gray-800 rounded-3xl p-8 shadow-xl text-white mb-6">
              <div className="text-7xl mb-4">😢</div>
              <h2 className="font-dela text-2xl mb-3 text-red-300">
                関東に行ってしまった…
              </h2>
              <p className="font-rounded text-sm text-white/70">
                「…行ってきます。でも浜松のことは忘れないよ」
              </p>
              <p className="font-rounded text-xs text-white/40 mt-3">
                ※{taps}回説得しようとしましたが間に合いませんでした
              </p>
            </div>

            <div className="space-y-3">
              <motion.button
                onClick={restart}
                className="w-full bg-gradient-to-r from-purple-500 to-violet-500 text-white font-dela text-lg py-4 rounded-2xl shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                もう一度！ 🔄
              </motion.button>
              <Link
                href="/result"
                className="block w-full bg-gray-600 text-white font-dela text-lg py-4 rounded-2xl shadow-lg text-center"
              >
                結果を見る（負け）→
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
