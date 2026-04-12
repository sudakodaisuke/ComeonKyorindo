export interface CommuteEvent {
  emoji: string;
  title: string;
  description: string;
  hpChange: number; // negative = damage
  stressChange: number;
}

export const kantoEvents: CommuteEvent[] = [
  {
    emoji: "🚃",
    title: "乗車率180%！",
    description: "身動きが取れない…顔が知らない人の肩に埋まっている",
    hpChange: -15,
    stressChange: 20,
  },
  {
    emoji: "☂️",
    title: "傘が太ももに刺さった",
    description: "隣の人の傘が容赦なく…しかも相手は気づいてない",
    hpChange: -12,
    stressChange: 15,
  },
  {
    emoji: "⏰",
    title: "電車遅延15分",
    description: "「人身事故の影響で…」今日も朝から最悪のスタート",
    hpChange: -10,
    stressChange: 25,
  },
  {
    emoji: "💦",
    title: "隣の人の汗が…",
    description: "夏の満員電車。クーラーが効いていない車内で…",
    hpChange: -8,
    stressChange: 18,
  },
  {
    emoji: "📣",
    title: "大声通話おじさん",
    description: "「そうですよね〜！！」朝7時から電話で叫ぶ人が近くに",
    hpChange: -7,
    stressChange: 12,
  },
  {
    emoji: "🏋️",
    title: "ドア前に仁王立ち",
    description: "降りようとしたら前の人が一切動かない。脇をすり抜ける技",
    hpChange: -5,
    stressChange: 10,
  },
  {
    emoji: "😤",
    title: "やっと職場に到着",
    description: "ドア開いた瞬間に流れ込む外の空気…今日も消耗した",
    hpChange: 0,
    stressChange: 5,
  },
];

export const hamamatsuEvents: CommuteEvent[] = [
  {
    emoji: "🚗",
    title: "マイカーで出発！",
    description: "朝の空気の中、お気に入りの音楽をかけてドライブ",
    hpChange: 10,
    stressChange: -15,
  },
  {
    emoji: "🌤️",
    title: "今日も晴れ！",
    description: "浜松は年間晴れ日数が多い。気持ちのいい朝のスタート",
    hpChange: 12,
    stressChange: -18,
  },
  {
    emoji: "☕",
    title: "信号待ちでコーヒー",
    description: "コンビニコーヒーをひとくち。ちょっと幸せな朝のルーティン",
    hpChange: 10,
    stressChange: -10,
  },
  {
    emoji: "🎵",
    title: "好きな曲でノリノリ",
    description: "誰にも見られていないから、歌っても良い！最高の気分",
    hpChange: 12,
    stressChange: -15,
  },
  {
    emoji: "🌅",
    title: "朝日がきれい",
    description: "広い空に朝日。都市では見られない絶景の通勤路",
    hpChange: 8,
    stressChange: -12,
  },
  {
    emoji: "🏁",
    title: "スムーズに到着！",
    description: "渋滞もなく、定時通りに職場へ。今日も良い1日になりそう！",
    hpChange: 5,
    stressChange: -5,
  },
];
