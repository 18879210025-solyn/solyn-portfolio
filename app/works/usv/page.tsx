import { UsvCase } from "@/components/UsvCase";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "无人艇 · 方宇凌 Solyn",
  description:
    "景区观光无人艇：产品定义、三版迭代、工业设计、开合机构、样机与商业模型。",
};

export default function UsvPage() {
  return <UsvCase />;
}
