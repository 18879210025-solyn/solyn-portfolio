import { VelocareCase } from "@/components/VelocareCase";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "无人机 · 方宇凌 Solyn",
  description:
    "VeloCare 城市低空急救服务：从救援缺口、全流程到市场与商业化。",
};

export default function VelocarePage() {
  return <VelocareCase />;
}
