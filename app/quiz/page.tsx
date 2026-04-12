"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { quizQuestions } from "@/components/quiz/quizData";

type Phase = "intro" | "playing" | "result";

export default function QuizPage() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [currentQuestionId, setCurrentQuestionId] = useState("q1");
  const [selectedComment, setSelectedComment] = useState<string | null>(null);
  const [questionCount, setQuestionCount] = useState(0);

  const currentQuestion = quizQuestions.find((q) => q.id === currentQuestionId);

  const handleAnswer = (option: (typeof quizQuestions)[0]["options"][0]) => {
    setSelectedComment(option.comment);
    setQuestionCount((c) => c + 1);

    setTimeout(() => {
      setSelectedComment(null);
      if (option.nextId === "result") {
        setPhase("result");
      } else {
        setCurrentQuestionId(option.nextId);
      }
    }, 2200);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="font-dela text-3xl sm:text-4xl text-kyorindo-green mb-2">
          🔮 就職先診断
        </h1>
        <p className="font-rounded text-gray-500 text-sm">
          あなたに最適な就職先を診断します
        </p>
      </motion.div>

      <AnimatePresence mode="wait">
        {phase === "intro" && (
          <motion.div
            key="intro"
            className="text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-md mb-6">
              <div className="text-6xl mb-4">🔮</div>
              <h2 className="font-dela text-2xl text-kyorindo-green mb-3">
                あなたの「運命の就職先」を診断
              </h2>
              <p className="font-rounded text-gray-600 text-sm mb-2">
                いくつかの質問に答えるだけで、
                <br />
                あなたに最適な薬局をズバリ診断！
              </p>
              <p className="font-rounded text-xs text-gray-400">
                ※所要時間：約2分
              </p>
            </div>
            <motion.button
              onClick={() => setPhase("playing")}
              className="bg-gradient-to-r from-purple-500 to-violet-500 text-white font-dela text-xl px-10 py-4 rounded-full shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              診断スタート！ ✨
            </motion.button>
          </motion.div>
        )}

        {phase === "playing" && currentQuestion && (
          <motion.div
            key={currentQuestionId}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            {/* Progress */}
            <div className="flex items-center gap-2 mb-4">
              <div className="h-2 flex-1 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-500 to-violet-400"
                  animate={{ width: `${Math.min((questionCount / 5) * 100, 80)}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              <span className="font-rounded text-xs text-gray-400">
                Q{questionCount + 1}
              </span>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-md mb-4">
              <h2 className="font-dela text-lg text-gray-800 mb-6 leading-snug">
                {currentQuestion.question}
              </h2>

              <div className="space-y-3">
                {currentQuestion.options.map((option, i) => (
                  <motion.button
                    key={i}
                    onClick={() => handleAnswer(option)}
                    disabled={selectedComment !== null}
                    className="w-full text-left p-4 rounded-2xl border-2 border-gray-100 hover:border-purple-300 hover:bg-purple-50 transition-colors font-rounded text-sm disabled:opacity-50"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <span className="text-purple-500 font-bold mr-2">{["A", "B", "C", "D"][i]}.</span>
                    {option.label}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Comment popup */}
            <AnimatePresence>
              {selectedComment && (
                <motion.div
                  className="bg-gradient-to-r from-kyorindo-green to-emerald-500 text-white rounded-2xl p-4 shadow-lg"
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                >
                  <p className="font-rounded text-sm font-bold mb-1">💡 診断AI より</p>
                  <p className="font-rounded text-sm">{selectedComment}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}

        {phase === "result" && (
          <motion.div
            key="result"
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            {/* Confetti effect */}
            <div className="relative">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-2xl pointer-events-none"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: 0,
                  }}
                  initial={{ y: -50, opacity: 1, rotate: 0 }}
                  animate={{ y: 300, opacity: 0, rotate: 720 }}
                  transition={{
                    delay: i * 0.1,
                    duration: 2,
                    ease: "easeIn",
                  }}
                >
                  {["🎉", "✨", "🌿", "💚", "⭐", "🎊"][i % 6]}
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-kyorindo-green to-emerald-600 rounded-3xl p-8 shadow-2xl text-white mb-6">
              <motion.div
                className="text-7xl mb-4"
                animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                🌿
              </motion.div>
              <p className="font-rounded text-sm text-white/70 mb-1">診断結果</p>
              <motion.h2
                className="font-dela text-4xl text-kyorindo-gold mb-3"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
              >
                杏林堂！
              </motion.h2>
              <p className="font-rounded text-sm text-white/80">
                あなたの価値観から導き出した結果です。
              </p>
            </div>

            <Link
              href="/budget"
              className="inline-block bg-kyorindo-gold text-white font-dela text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              次：家計簿シミュへ →
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
