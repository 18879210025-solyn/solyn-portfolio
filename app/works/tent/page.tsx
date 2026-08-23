import { TentCase } from "@/components/TentCase";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "帐篷背包 · 方宇凌 Solyn",
  description:
    "模块化帐篷背包设计：从用户研究、折叠结构和样机验证到骑行露营服务系统与 App。",
};

export default function TentPage() {
  return <TentCase />;
}
