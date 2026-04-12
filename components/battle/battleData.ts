export interface BattleStat {
  label: string;
  kyorindoScore: number; // 0-100
  createScore: number; // 0-100
  kyorindoLabel: string;
  createLabel: string;
  kyorindoNote?: string;
  createNote?: string;
  winner: "kyorindo";
}

export const battleStats: BattleStat[] = [
  {
    label: "年間休日",
    kyorindoScore: 92,
    createScore: 88,
    kyorindoLabel: "120日",
    createLabel: "117日",
    kyorindoNote: "有給消化率80%で実質136日",
    createNote: "有給平均消化11日で実質128日",
    winner: "kyorindo",
  },
  {
    label: "満員電車リスク",
    kyorindoScore: 100,
    createScore: 5,
    kyorindoLabel: "リスク0%（マイカー通勤）🚗",
    createLabel: "乗車率150〜180%",
    kyorindoNote: "好きな音楽を流しながら出勤できる",
    createNote: "雨の日はさらに混雑",
    winner: "kyorindo",
  },
  {
    label: "地域への貢献・やりがい",
    kyorindoScore: 96,
    createScore: 45,
    kyorindoLabel: "地元密着・顔の見える関係 👨‍⚕️",
    createLabel: "全国チェーン店舗",
    kyorindoNote: "患者さんに名前で呼ばれる関係が築ける",
    createNote: "1日1,000人規模で個別対応は難しい",
    winner: "kyorindo",
  },
  {
    label: "住居費（同スペック比較）",
    kyorindoScore: 95,
    createScore: 40,
    kyorindoLabel: "2LDK 約5万円台",
    createLabel: "1K 約10万円台",
    kyorindoNote: "駐車場込みでも浜松の方が圧倒的に安い",
    createNote: "東京23区の家賃水準",
    winner: "kyorindo",
  },
];
