import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { TopBar } from "@/components/TopBar";

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
      <body>
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
