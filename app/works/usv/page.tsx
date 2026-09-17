import { UsvCase } from "@/components/UsvCase";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "无人艇 · 方宇凌 Solyn",
  description:
    "景区观光无人艇：项目背景、用户洞察、概念迭代、最终体验、工程验证与商业落地。",
};

export default function UsvPage() {
  return <UsvCase />;
}
