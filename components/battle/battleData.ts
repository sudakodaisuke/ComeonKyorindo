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
    kyorindoNote: "有給消化率80%で実質140日！",
    createNote: "有給平均11日…😶",
    winner: "kyorindo",
  },
  {
    label: "富士山が見える日数",
    kyorindoScore: 100,
    createScore: 3,
    kyorindoLabel: "年200日以上 🗻",
    createLabel: "たまに…（遠い）",
    kyorindoNote: "通勤中に毎日眺められる",
    createNote: "※新幹線の窓から見える程度",
    winner: "kyorindo",
  },
  {
    label: "満員電車リスク",
    kyorindoScore: 100,
    createScore: 2,
    kyorindoLabel: "リスク0%（マイカー通勤）🚗",
    createLabel: "乗車率180%",
    kyorindoNote: "好きな音楽を流しながら出勤",
    createNote: "※雨の日は乗車率220%",
    winner: "kyorindo",
  },
  {
    label: "うなぎへのアクセス",
    kyorindoScore: 98,
    createScore: 15,
    kyorindoLabel: "5分圏内に名店多数 🍣",
    createLabel: "電車で2時間＋予算5,000円",
    kyorindoNote: "昼休みに気軽に行ける",
    createNote: "※東京でうなぎを食べると5,000円〜",
    winner: "kyorindo",
  },
  {
    label: "さわやかへのアクセス",
    kyorindoScore: 99,
    createScore: 0,
    kyorindoLabel: "浜松市内に複数店舗 🍔",
    createLabel: "0店舗（静岡県外は未出店）",
    kyorindoNote: "げんこつハンバーグ食べ放題…は嘘",
    createNote: "※関東にさわやかはありません。永久に。",
    winner: "kyorindo",
  },
  {
    label: "地域への貢献度",
    kyorindoScore: 96,
    createScore: 45,
    kyorindoLabel: "地元密着型 地域の顔役 👨‍⚕️",
    createLabel: "全国チェーン（顔なし）",
    kyorindoNote: "患者さんに名前で呼ばれる幸せ",
    createNote: "※1日1,000人対応で顔を覚える余裕なし",
    winner: "kyorindo",
  },
  {
    label: "社長の顔の良さ",
    kyorindoScore: 100,
    createScore: 70,
    kyorindoLabel: "イケメン（当社比）😎",
    createLabel: "普通",
    kyorindoNote: "※当社比・個人の感想です",
    createNote: "※比較対象は杏林堂社長",
    winner: "kyorindo",
  },
];
