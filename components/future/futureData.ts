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
      emoji: "🤝",
      text: "友達や先輩が同じ職場にいる。わからないことをすぐ聞けるし、仕事終わりに一緒にご飯にも行ける。最初の不安がぜんぜん違う",
      mood: "great",
    },
    create: {
      emoji: "😶",
      text: "誰も知らない職場でゼロからスタート。同期もバラバラ。帰宅後は狭い部屋でひとり",
      mood: "bad",
    },
  },
  {
    year: 2,
    kyorindo: {
      emoji: "🌱",
      text: "「田中さん！いつもありがとう！」患者さんに名前を覚えてもらった。先輩に報告したら一緒に喜んでくれた",
      mood: "good",
    },
    create: {
      emoji: "🏃",
      text: "1日で1,000人以上の患者対応。顔も覚えられない。相談できる人も近くにいない",
      mood: "bad",
    },
  },
  {
    year: 3,
    kyorindo: {
      emoji: "🎓",
      text: "後輩薬剤師が入社。自分が先輩になった。友達と「成長したね」と笑い合える関係が続いている",
      mood: "great",
    },
    create: {
      emoji: "😮‍💨",
      text: "残業月60時間。有給は3日しか使えなかった。体が心配になってきた",
      mood: "terrible",
    },
  },
  {
    year: 5,
    kyorindo: {
      emoji: "💒",
      text: "結婚！同じ職場の先輩が式に来てくれた。浜松に家を買う計画も着々と進む",
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
      text: "子どもが生まれた！実家が近くて保育サポートも万全。友達も近くにいて心強い",
      mood: "great",
    },
    create: {
      emoji: "😢",
      text: "保育園の申込み落選。育休明けで職場復帰できるか不安。相談できる友達も遠くにいる",
      mood: "terrible",
    },
  },
  {
    year: 10,
    kyorindo: {
      emoji: "🏆",
      text: "地域の顔役薬剤師に。患者さんに頼られる存在になった。一緒に入社した友達と10年目の祝杯を上げた",
      mood: "great",
    },
    create: {
      emoji: "🔥",
      text: "燃え尽き症候群。転職サイトを見ながら「もっと違う選択肢があったのでは」と思う夜",
      mood: "terrible",
    },
  },
];
