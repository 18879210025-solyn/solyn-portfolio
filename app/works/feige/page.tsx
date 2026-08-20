import { FeigeCase } from "@/components/FeigeCase";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "飞鸽 · 方宇凌 Solyn",
  description:
    "飞鸽自行车品牌年轻化与骑行产品重构：竞品分析、用户洞察、App 与服务蓝图。",
};

export default function FeigePage() {
  return <FeigeCase />;
}
