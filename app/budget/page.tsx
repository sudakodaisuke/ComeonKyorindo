"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { expenseItems, monthlySalary } from "@/components/budget/budgetData";
import { formatCurrency } from "@/lib/utils";

export default function BudgetPage() {
  const [started, setStarted] = useState(false);
  const [revealIndex, setRevealIndex] = useState(-1);
  const [showTenYear, setShowTenYear] = useState(false);

  const kantoTotal = expenseItems.reduce((s, e) => s + e.kantoCost, 0);
  const hamamatsuTotal = expenseItems.reduce((s, e) => s + e.hamamatsuCost, 0);
  const kantoRemaining = monthlySalary - kantoTotal;
  const hamamatsuRemaining = monthlySalary - hamamatsuTotal;

  const visibleKantoTotal = expenseItems
    .slice(0, revealIndex + 1)
    .reduce((s, e) => s + e.kantoCost, 0);
  const visibleHamamatsuTotal = expenseItems
    .slice(0, revealIndex + 1)
    .reduce((s, e) => s + e.hamamatsuCost, 0);
  const visibleKantoRemaining = monthlySalary - visibleKantoTotal;
  const visibleHamamatsuRemaining = monthlySalary - visibleHamamatsuTotal;

  useEffect(() => {
    if (!started) return;
    if (revealIndex < expenseItems.length - 1) {
      const timer = setTimeout(() => {
        setRevealIndex((i) => i + 1);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [started, revealIndex]);

  const allRevealed = revealIndex >= expenseItems.length - 1;
  const tenYearDiff = (hamamatsuRemaining - kantoRemaining) * 12 * 10;

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="font-dela text-3xl sm:text-4xl text-kyorindo-green mb-2">
          💸 家計簿シミュレーター
        </h1>
        <p className="font-rounded text-sm text-gray-500">
          薬剤師手取り {formatCurrency(monthlySalary)} / 月
        </p>
        <p className="font-rounded text-xs text-gray-400 mt-1">
          ここから生活費を引いていきます。心して見てください。
        </p>
      </motion.div>

      {/* Salary display */}
      <motion.div
        className="bg-white rounded-2xl p-4 shadow-sm mb-4 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <p className="font-rounded text-xs text-gray-500 mb-1">月収（手取り）</p>
        <p className="font-dela text-3xl text-kyorindo-green">
          {formatCurrency(monthlySalary)}
        </p>
      </motion.div>

      {!started ? (
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p className="font-rounded text-sm text-gray-600 mb-4">
            ここから生活費を次々と引いていきます。
            <br />
            <span className="text-orange-500 font-bold">関東</span>と
            <span className="text-kyorindo-green font-bold">浜松</span>を同時に比較！
          </p>
          <motion.button
            onClick={() => { setStarted(true); setRevealIndex(0); }}
            className="bg-gradient-to-r from-orange-500 to-amber-500 text-white font-dela text-xl px-10 py-4 rounded-full shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            シミュレーション開始！ 💰
          </motion.button>
        </motion.div>
      ) : (
        <>
          {/* Comparison table */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="text-center">
              <p className="font-dela text-sm text-gray-400 mb-1">🏙️ 関東</p>
            </div>
            <div className="text-center">
              <p className="font-dela text-sm text-kyorindo-green mb-1">🌿 浜松</p>
            </div>
          </div>

          <div className="space-y-2 mb-4">
            {expenseItems.map((item, i) => (
              <AnimatePresence key={item.id}>
                {i <= revealIndex && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-white rounded-xl p-3 shadow-sm"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-rounded text-sm text-gray-700">
                        {item.emoji} {item.label}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="text-center bg-red-50 rounded-lg p-2">
                        <p className="font-dela text-red-500 text-lg">
                          -{formatCurrency(item.kantoCost)}
                        </p>
                      </div>
                      <div className="text-center bg-green-50 rounded-lg p-2">
                        <p className="font-dela text-kyorindo-green text-lg">
                          -{formatCurrency(item.hamamatsuCost)}
                        </p>
                      </div>
                    </div>
                    {item.note && (
                      <p className="text-[10px] text-gray-400 font-rounded mt-1">{item.note}</p>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            ))}
          </div>

          {/* Running totals */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <motion.div
              className={`rounded-2xl p-4 text-center shadow-md ${
                visibleKantoRemaining < 100000
                  ? "bg-gradient-to-br from-red-500 to-orange-500"
                  : "bg-gradient-to-br from-gray-400 to-gray-500"
              }`}
              animate={
                visibleKantoRemaining < 100000
                  ? { scale: [1, 1.03, 1] }
                  : {}
              }
              transition={{ repeat: Infinity, duration: 1 }}
            >
              <p className="font-rounded text-xs text-white/70 mb-1">🏙️ 関東 残金</p>
              <p className="font-dela text-2xl text-white">
                {formatCurrency(visibleKantoRemaining)}
              </p>
              {visibleKantoRemaining < 120000 && revealIndex >= 0 && (
                <p className="text-xl mt-1">🔥</p>
              )}
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-kyorindo-green to-emerald-500 rounded-2xl p-4 text-center shadow-md"
            >
              <p className="font-rounded text-xs text-white/70 mb-1">🌿 浜松 残金</p>
              <p className="font-dela text-2xl text-white">
                {formatCurrency(visibleHamamatsuRemaining)}
              </p>
              {visibleHamamatsuRemaining > 150000 && revealIndex >= 0 && (
                <p className="text-xl mt-1">😊</p>
              )}
            </motion.div>
          </div>

          {/* Final verdict */}
          {allRevealed && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <div className="bg-white rounded-2xl p-5 shadow-md text-center">
                <p className="font-dela text-xl text-gray-700 mb-3">毎月の差額</p>
                <motion.p
                  className="font-dela text-4xl text-kyorindo-green"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {formatCurrency(hamamatsuRemaining - kantoRemaining)}
                </motion.p>
                <p className="font-rounded text-xs text-gray-500 mt-1">
                  浜松の方が毎月これだけ多く残ります
                </p>
              </div>

              {!showTenYear ? (
                <motion.button
                  onClick={() => setShowTenYear(true)}
                  className="w-full bg-gradient-to-r from-kyorindo-green to-emerald-500 text-white font-dela text-lg py-4 rounded-2xl shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  10年後の差額を見る 😱
                </motion.button>
              ) : (
                <motion.div
                  className="bg-gradient-to-br from-kyorindo-green to-emerald-600 rounded-2xl p-6 text-white text-center shadow-xl"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <p className="font-dela text-lg mb-2">10年間の差額</p>
                  <motion.p
                    className="font-dela text-5xl text-kyorindo-gold"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
                  >
                    {formatCurrency(tenYearDiff)}
                  </motion.p>
                  <p className="font-rounded text-sm text-white/70 mt-2">
                    浜松×杏林堂で10年間働くと
                    <br />
                    これだけ多く貯蓄できます
                  </p>
                </motion.div>
              )}

              <div className="text-center pt-2">
                <Link
                  href="/commute"
                  className="inline-block bg-kyorindo-gold text-white font-dela text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                >
                  次：満員電車RPGへ →
                </Link>
              </div>
            </motion.div>
          )}
        </>
      )}
    </div>
  );
}
