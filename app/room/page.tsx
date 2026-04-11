"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

type City = "kanto" | "hamamatsu";

interface Furniture {
  id: string;
  emoji: string;
  name: string;
  size: "small" | "medium" | "large";
  fitsKanto: boolean;
}

const furnitureList: Furniture[] = [
  { id: "bed", emoji: "🛏️", name: "ベッド", size: "large", fitsKanto: true },
  { id: "sofa", emoji: "🛋️", name: "ソファ", size: "large", fitsKanto: false },
  { id: "desk", emoji: "🖥️", name: "デスク", size: "medium", fitsKanto: true },
  { id: "tv", emoji: "📺", name: "テレビ台", size: "medium", fitsKanto: false },
  { id: "dining", emoji: "🪑", name: "ダイニング", size: "large", fitsKanto: false },
  { id: "bookshelf", emoji: "📚", name: "本棚", size: "medium", fitsKanto: false },
  { id: "plant", emoji: "🪴", name: "観葉植物", size: "small", fitsKanto: true },
  { id: "cat", emoji: "🐱", name: "猫", size: "small", fitsKanto: false },
  { id: "bike", emoji: "🚲", name: "自転車置き場", size: "large", fitsKanto: false },
  { id: "washing", emoji: "🫧", name: "洗濯機（独立）", size: "medium", fitsKanto: false },
];

const cityData = {
  kanto: {
    label: "東京23区",
    rent: 100000,
    size: "1K / 約20㎡",
    emoji: "🏙️",
    color: "from-gray-600 to-slate-700",
    note: "ユニットバス・収納なし",
    gridCols: 3,
    gridRows: 2,
  },
  hamamatsu: {
    label: "浜松市",
    rent: 48000,
    size: "2LDK / 約60㎡",
    emoji: "🌿",
    color: "from-kyorindo-green to-emerald-500",
    note: "独立洗面台・駐車場付き",
    gridCols: 5,
    gridRows: 4,
  },
};

export default function RoomPage() {
  const [city, setCity] = useState<City>("kanto");
  const [placedItems, setPlacedItems] = useState<string[]>([]);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [showComparison, setShowComparison] = useState(false);

  const data = cityData[city];

  const handlePlace = (item: Furniture) => {
    if (city === "kanto" && !item.fitsKanto) {
      setErrorMsg(`「${item.name}」は入りません！😱`);
      setTimeout(() => setErrorMsg(null), 2000);
      return;
    }
    if (placedItems.includes(item.id)) {
      setPlacedItems((prev) => prev.filter((id) => id !== item.id));
    } else {
      setPlacedItems((prev) => [...prev, item.id]);
    }
  };

  const kantoPlaceable = furnitureList.filter((f) => f.fitsKanto).length;
  const hamamatsuPlaceable = furnitureList.length;

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <motion.div
        className="text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="font-dela text-3xl sm:text-4xl text-kyorindo-green mb-2">
          🏠 お部屋シミュレーター
        </h1>
        <p className="font-rounded text-sm text-gray-500">
          同じ家賃でどんな暮らしができるか比較
        </p>
        <p className="font-rounded text-xs text-gray-400 mt-1">
          設定家賃：約65,000円 / 月
        </p>
      </motion.div>

      {/* City selector */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        {(["kanto", "hamamatsu"] as City[]).map((c) => (
          <motion.button
            key={c}
            onClick={() => { setCity(c); setPlacedItems([]); setErrorMsg(null); }}
            className={`rounded-2xl p-4 text-white font-dela text-sm transition-all ${
              city === c
                ? `bg-gradient-to-br ${cityData[c].color} shadow-lg scale-105`
                : "bg-gray-200 text-gray-500"
            }`}
            whileHover={{ scale: city === c ? 1.05 : 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="text-3xl mb-1">{cityData[c].emoji}</div>
            <div>{cityData[c].label}</div>
            <div className="font-rounded text-xs mt-1 opacity-80">{cityData[c].size}</div>
            <div className="font-rounded text-xs opacity-70">
              ¥{cityData[c].rent.toLocaleString()}/月
            </div>
          </motion.button>
        ))}
      </div>

      {/* Room visual */}
      <motion.div
        key={city}
        className="bg-white rounded-3xl shadow-md overflow-hidden mb-4"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className={`bg-gradient-to-r ${data.color} p-3 text-white`}>
          <div className="flex justify-between items-center">
            <span className="font-dela text-sm">{data.label} の部屋</span>
            <span className="font-rounded text-xs bg-white/20 px-2 py-0.5 rounded-full">
              {data.size}
            </span>
          </div>
          <p className="font-rounded text-xs text-white/70 mt-0.5">{data.note}</p>
        </div>

        {/* Room grid */}
        <div className="p-4">
          <div
            className="border-4 border-dashed border-gray-200 rounded-xl p-2 mb-2"
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${data.gridCols}, 1fr)`,
              gridTemplateRows: `repeat(${data.gridRows}, 1fr)`,
              gap: "4px",
              minHeight: city === "hamamatsu" ? "180px" : "80px",
            }}
          >
            {placedItems.slice(0, data.gridCols * data.gridRows).map((id) => {
              const item = furnitureList.find((f) => f.id === id);
              return (
                <motion.div
                  key={id}
                  className="flex items-center justify-center text-2xl bg-gray-50 rounded-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {item?.emoji}
                </motion.div>
              );
            })}
            {/* Empty cells */}
            {Array.from({
              length: Math.max(0, data.gridCols * data.gridRows - placedItems.length),
            }).map((_, i) => (
              <div
                key={`empty-${i}`}
                className="border border-dashed border-gray-100 rounded-lg"
              />
            ))}
          </div>

          {city === "kanto" && placedItems.length === 0 && (
            <p className="text-center font-rounded text-xs text-gray-400">
              家具を置いてみよう（でも狭いよ？）
            </p>
          )}
          {city === "hamamatsu" && placedItems.length === 0 && (
            <p className="text-center font-rounded text-xs text-kyorindo-green">
              広々♪ 好きなだけ家具を置いてね
            </p>
          )}
        </div>
      </motion.div>

      {/* Error message */}
      <AnimatePresence>
        {errorMsg && (
          <motion.div
            className="bg-red-500 text-white rounded-2xl p-3 text-center font-dela mb-3 shadow-lg"
            initial={{ opacity: 0, y: -10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            😱 {errorMsg}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Furniture picker */}
      <div className="bg-white rounded-2xl p-4 shadow-sm mb-4">
        <p className="font-dela text-sm text-gray-700 mb-3">
          置きたい家具を選ぼう
          {city === "kanto" && (
            <span className="font-rounded text-xs text-gray-400 ml-2">
              ※一部は「入りません！」になります
            </span>
          )}
        </p>
        <div className="grid grid-cols-5 gap-2">
          {furnitureList.map((item) => {
            const placed = placedItems.includes(item.id);
            const cantFit = city === "kanto" && !item.fitsKanto;
            return (
              <motion.button
                key={item.id}
                onClick={() => handlePlace(item)}
                className={`p-2 rounded-xl text-center transition-colors ${
                  placed
                    ? "bg-kyorindo-green/20 border-2 border-kyorindo-green"
                    : cantFit
                    ? "bg-gray-50 border border-dashed border-gray-200 opacity-60"
                    : "bg-gray-50 border border-gray-200 hover:bg-kyorindo-green/10"
                }`}
                whileHover={{ scale: cantFit ? 1 : 1.05 }}
                whileTap={{ scale: 0.95 }}
                title={item.name}
              >
                <div className="text-2xl">{item.emoji}</div>
                <div className="font-rounded text-[9px] text-gray-500 mt-0.5 truncate">
                  {item.name}
                </div>
                {cantFit && <div className="text-[8px] text-red-400">✗ 入らない</div>}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Quick compare button */}
      {!showComparison && (
        <motion.button
          onClick={() => setShowComparison(true)}
          className="w-full bg-gradient-to-r from-kyorindo-green to-emerald-500 text-white font-dela text-lg py-4 rounded-2xl shadow-lg mb-4"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          2都市を一気に比較 👀
        </motion.button>
      )}

      {showComparison && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-5 shadow-md mb-4"
        >
          <h3 className="font-dela text-lg text-center text-gray-800 mb-4">
            置ける家具の数
          </h3>
          <div className="grid grid-cols-2 gap-4 mb-3">
            <div className="text-center bg-gray-800 rounded-xl p-4 text-white">
              <p className="font-rounded text-xs text-white/60">東京23区</p>
              <p className="font-dela text-4xl text-red-300">{kantoPlaceable}個</p>
              <p className="font-rounded text-xs text-white/50 mt-1">ソファも猫も無理</p>
            </div>
            <div className="text-center bg-gradient-to-br from-kyorindo-green to-emerald-600 rounded-xl p-4 text-white">
              <p className="font-rounded text-xs text-white/60">浜松</p>
              <p className="font-dela text-4xl text-kyorindo-gold">{hamamatsuPlaceable}個</p>
              <p className="font-rounded text-xs text-white/50 mt-1">全部置けます！</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-center text-sm">
            {[
              { label: "ソファ", kanto: "❌", hamamatsu: "✅" },
              { label: "ダイニング", kanto: "❌", hamamatsu: "✅" },
              { label: "猫", kanto: "❌", hamamatsu: "✅" },
              { label: "駐車場", kanto: "❌ +月3万", hamamatsu: "✅ 無料" },
            ].map((row) => (
              <div key={row.label} className="bg-kyorindo-cream rounded-xl p-2">
                <p className="font-rounded text-xs text-gray-600 mb-1">{row.label}</p>
                <div className="flex justify-around">
                  <span className="font-rounded text-xs">{row.kanto}</span>
                  <span className="text-gray-300">|</span>
                  <span className="font-rounded text-xs">{row.hamamatsu}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {showComparison && (
        <div className="text-center">
          <Link
            href="/game"
            className="inline-block bg-kyorindo-gold text-white font-dela text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            次：ミニゲームへ →
          </Link>
        </div>
      )}
    </div>
  );
}
