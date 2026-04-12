export interface QuizOption {
  label: string;
  comment: string; // "なるほど！それは杏林堂ですね！"
  nextId: string | "result";
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    question: "薬剤師として、仕事で一番大切にしたいことは？",
    options: [
      {
        label: "患者さんとの絆・信頼関係",
        comment: "なるほど！地域密着の杏林堂なら、患者さんに名前で呼ばれる関係が築けます！",
        nextId: "q2a",
      },
      {
        label: "給与・待遇の良さ",
        comment: "さすが現実的！実は杏林堂の方が休暇が多く、実質的な時給換算でも有利なんです！",
        nextId: "q2b",
      },
      {
        label: "キャリアアップ・成長",
        comment: "向上心があるんですね！杏林堂では若いうちから責任ある仕事を任せてもらえますよ！",
        nextId: "q2c",
      },
      {
        label: "ワークライフバランス",
        comment: "大事！年間休日120日・有給消化率80%の杏林堂は業界トップクラスです！",
        nextId: "q2a",
      },
    ],
  },
  {
    id: "q2a",
    question: "理想の通勤スタイルは？",
    options: [
      {
        label: "愛車でドライブ気分",
        comment: "最高の選択！富士山を眺めながら快適マイカー通勤が待ってます！",
        nextId: "q3",
      },
      {
        label: "電車でのんびり読書",
        comment: "乗車率180%の満員電車では読書は無理ですが…浜松なら問題なし！",
        nextId: "q3",
      },
    ],
  },
  {
    id: "q2b",
    question: "将来、家を持ちたい？",
    options: [
      {
        label: "広くて安い家が欲しい",
        comment: "浜松なら同じ家賃で2LDKが借りられます。駐車場付き！",
        nextId: "q3",
      },
      {
        label: "都心の便利な場所に住みたい",
        comment: "東京23区1K・20㎡・家賃12万円…覚悟はいいですか？浜松の方がよくないですか？",
        nextId: "q3",
      },
    ],
  },
  {
    id: "q2c",
    question: "どんな職場の雰囲気が好き？",
    options: [
      {
        label: "アットホームで温かい",
        comment: "それは完全に杏林堂です！地域の家族的なつながりが魅力！",
        nextId: "q3",
      },
      {
        label: "スタイリッシュで洗練された",
        comment: "都会的な雰囲気も素敵ですが…帰宅後にさわやかのハンバーグを食べられる方が幸せでは？",
        nextId: "q3",
      },
    ],
  },
  {
    id: "q3",
    question: "休日の過ごし方は？",
    options: [
      {
        label: "美食グルメ巡り",
        comment: "うなぎ！さわやか！浜松B級グルメ最強！これ全部杏林堂帰りに寄れます！",
        nextId: "q4",
      },
      {
        label: "自然の中でリフレッシュ",
        comment: "浜名湖・天竜川・富士山の裾野…浜松は自然の宝庫です！",
        nextId: "q4",
      },
      {
        label: "都市の文化・エンタメ",
        comment: "浜松には音楽の街（ヤマハ・カワイ本社）という文化があります！東京とは別の豊かさが！",
        nextId: "q4",
      },
      {
        label: "家でゆっくりする",
        comment: "それ関東の狭い1Kでやりますか？浜松の広い2LDKでやりますか？答えは一つ！",
        nextId: "q4",
      },
    ],
  },
  {
    id: "q4",
    question: "10年後の自分の姿は？",
    options: [
      {
        label: "地域から頼られる薬剤師",
        comment: "完璧です！まさに杏林堂が求める人材！あなたのための職場です！",
        nextId: "result",
      },
      {
        label: "管理職・マネジメント",
        comment: "向上心素晴らしい！杏林堂は若手の成長機会が豊富で、早期にキャリアアップできます！",
        nextId: "result",
      },
      {
        label: "家族と充実した生活",
        comment: "年間休日140日＋家族と過ごせる時間。これは杏林堂×浜松でしか実現できません！",
        nextId: "result",
      },
      {
        label: "まだわからない",
        comment: "わからなくていいんです！でも一つだけ言えること…それは杏林堂です！",
        nextId: "result",
      },
    ],
  },
];
