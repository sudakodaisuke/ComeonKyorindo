import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "杏林堂 vs クリエイト — あなたに合う薬局はどっち？",
  description:
    "薬剤師就職先として杏林堂とクリエイト、浜松と関東を様々な角度から比較。あなたにとってベストな選択肢を一緒に考えます。",
  openGraph: {
    title: "杏林堂 vs クリエイト — あなたに合う薬局はどっち？",
    description: "薬剤師就職先として杏林堂とクリエイト、浜松と関東を様々な角度から比較。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=M+PLUS+Rounded+1c:wght@400;700;900&family=Noto+Sans+JP:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-kyorindo-cream">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
