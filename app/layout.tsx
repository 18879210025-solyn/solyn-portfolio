import type { Metadata } from "next";
import { Noto_Sans_SC } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { TopBar } from "@/components/TopBar";

const notoSansSC = Noto_Sans_SC({
  weight: ["400", "500", "700", "900"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "方宇凌 Solyn",
  description: "方宇凌的个人作品集",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={notoSansSC.className}>
        <div className="flow-bg" aria-hidden="true">
          <span className="flow-blob flow-blob-a" />
          <span className="flow-blob flow-blob-b" />
          <span className="flow-blob flow-blob-c" />
          <span className="flow-blob flow-blob-d" />
        </div>
        <div className="app-shell">
          <Sidebar />
          <div className="main">
            <TopBar />
            <div className="content">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
