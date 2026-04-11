export interface ExpenseItem {
  id: string;
  label: string;
  emoji: string;
  kantoCost: number;
  hamamatsuCost: number;
  note?: string;
}

export const monthlySalary = 280000; // 手取り月収（薬剤師平均）

export const expenseItems: ExpenseItem[] = [
  {
    id: "rent",
    label: "家賃（1K or 2LDK）",
    emoji: "🏠",
    kantoCost: 100000,
    hamamatsuCost: 48000,
    note: "関東：1K 20㎡ / 浜松：2LDK 60㎡",
  },
  {
    id: "food",
    label: "食費",
    emoji: "🍱",
    kantoCost: 55000,
    hamamatsuCost: 35000,
    note: "関東：コンビニ・外食多め / 浜松：スーパー＋家庭料理",
  },
  {
    id: "transport",
    label: "交通費",
    emoji: "🚃",
    kantoCost: 15000,
    hamamatsuCost: 8000,
    note: "関東：定期代 / 浜松：ガソリン代",
  },
  {
    id: "utilities",
    label: "光熱費",
    emoji: "💡",
    kantoCost: 16000,
    hamamatsuCost: 12000,
    note: "関東：狭い部屋でも都市ガス高い",
  },
  {
    id: "entertainment",
    label: "娯楽費",
    emoji: "🎉",
    kantoCost: 30000,
    hamamatsuCost: 20000,
    note: "関東：映画・イベント・街遊び / 浜松：自然＋コスパ高グルメ",
  },
  {
    id: "communication",
    label: "通信費",
    emoji: "📱",
    kantoCost: 5000,
    hamamatsuCost: 4000,
    note: "ほぼ同じ",
  },
];
