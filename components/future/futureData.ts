export interface FutureEvent {
  year: number;
  kyorindo: {
    emoji: string;
    text: string;
    mood: "great" | "good";
  };
  create: {
    emoji: string;
    text: string;
    mood: "bad" | "terrible";
  };
}

export const futureEvents: FutureEvent[] = [
  {
    year: 1,
    kyorindo: {
      emoji: "🌱",
      text: "「田中さん！いつもありがとう！」患者さんに名前を覚えてもらった。嬉しい",
      mood: "good",
    },
    create: {
      emoji: "🏃",
      text: "1日で1,000人以上の患者対応。顔も覚えられない。ただのレジ係みたい",
      mood: "bad",
    },
  },
  {
    year: 2,
    kyorindo: {
      emoji: "🎓",
      text: "後輩薬剤師が入社。指導する立場に。責任は増えたけど、やりがいが全然違う",
      mood: "great",
    },
    create: {
      emoji: "😮‍💨",
      text: "残業月60時間。有給は3日しか使えなかった。体が心配になってきた",
      mood: "terrible",
    },
  },
  {
    year: 3,
    kyorindo: {
      emoji: "🍣",
      text: "昼休みに近くのうなぎ屋でランチ。同僚とワイワイ。これが当たり前の幸せ",
      mood: "good",
    },
    create: {
      emoji: "🏠💸",
      text: "家賃が値上がりした。さらに郊外へ引越し。通勤が片道1時間30分に",
      mood: "terrible",
    },
  },
  {
    year: 5,
    kyorindo: {
      emoji: "💒",
      text: "結婚！浜松に家を買う計画を立て始めた。実家も近くて子育ても安心",
      mood: "great",
    },
    create: {
      emoji: "😴",
      text: "婚活する時間も体力もない。休日は疲れて寝てるだけ。このままでいいのかな",
      mood: "bad",
    },
  },
  {
    year: 7,
    kyorindo: {
      emoji: "👶",
      text: "子どもが生まれた！実家が近くて保育サポートも万全。近所の人たちも温かい",
      mood: "great",
    },
    create: {
      emoji: "😢",
      text: "保育園の申込み落選。育休明けで職場復帰できるか不安。都会は子育てが辛い",
      mood: "terrible",
    },
  },
  {
    year: 10,
    kyorindo: {
      emoji: "🏆",
      text: "地域の顔役薬剤師に。患者さんのかかりつけとして頼られる存在。生活満足度95点！",
      mood: "great",
    },
    create: {
      emoji: "🔥",
      text: "燃え尽き症候群。転職サイトを見ながら「もっと違う選択肢があったのでは」と思う夜",
      mood: "terrible",
    },
  },
];
