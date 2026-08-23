import { FeigeCase } from "@/components/FeigeCase";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "飞鸽 · 方宇凌 Solyn",
  description:
    "飞鸽自行车品牌年轻化项目：从用户研究、竞品分析与产品策略到 App 原型验证和最终方案。",
};

export default function FeigePage() {
  return <FeigeCase />;
}
