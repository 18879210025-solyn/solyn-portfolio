import { TentCase } from "@/components/TentCase";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "帐篷背包 · 方宇凌 Solyn",
  description:
    "背包与帐篷融合设计：折叠转化、模块化营地、骑行露营服务系统与 App。",
};

export default function TentPage() {
  return <TentCase />;
}
