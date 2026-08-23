import { UsvCase } from "@/components/UsvCase";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "无人艇 · 方宇凌 Solyn",
  description:
    "景区观光无人艇：从用户与竞品研究、方案迭代到造型、开合机构、样机验证与商业模式。",
};

export default function UsvPage() {
  return <UsvCase />;
}
