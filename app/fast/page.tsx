import { FastCase } from "@/components/FastCase";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAST · 方宇凌 Solyn",
  description:
    "FAST 智能投放引擎：把跨系统、靠经验的投放做成可对话、可排期、可一键配置的 Agent 工作台。",
};

export default function FastPage() {
  return <FastCase />;
}
