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
    label: "入社時から知っている人がいる",
    kyorindoScore: 100,
    createScore: 0,
    kyorindoLabel: "友達・先輩がいる 👫",
    createLabel: "完全アウェー",
    kyorindoNote: "知っている顔がいるだけで、最初の不安が全然違う",
    createNote: "誰も知らない環境で1からスタート",
    winner: "kyorindo",
  },
  {
    label: "残業の文化",
    kyorindoScore: 95,
    createScore: 30,
    kyorindoLabel: "残業しない風潮 🕔",
    createLabel: "店舗によって残業常態化",
    kyorindoNote: "定時で帰ることが当たり前の職場環境",
    createNote: "早番出勤なのに閉局まで残ることも。人員不足の店舗あり",
    winner: "kyorindo",
  },
  {
    label: "社内割引",
    kyorindoScore: 92,
    createScore: 20,
    kyorindoLabel: "化粧品など20〜30%引き 💄",
    createLabel: "不明…あるといいね？",
    kyorindoNote: "薬剤師が薬局で買い物するのに割引があるのは嬉しい",
    createNote: "社割の有無は不明。ないかもしれないし、あるかも。でも杏林堂は確実にある",
    winner: "kyorindo",
  },
  {
    label: "試用期間",
    kyorindoScore: 88,
    createScore: 50,
    kyorindoLabel: "3ヶ月",
    createLabel: "6ヶ月",
    kyorindoNote: "早く正社員として安心して働ける",
    createNote: "試用期間が倍の長さ",
    winner: "kyorindo",
  },
];
