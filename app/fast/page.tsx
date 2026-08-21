import { FastCase } from "@/components/FastCase";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAST · 方宇凌 Solyn",
  description:
    "FAST 智能投放引擎：AI 工作台与体验设计，从首页对话到排期、活动管理的全流程改版。",
};

export default function FastPage() {
  return <FastCase />;
}
