"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type Blob = {
  x: number;
  y: number;
  r: number;
  color: [number, number, number];
  ax: number;
  ay: number;
  sx: number;
  sy: number;
};

const BLOBS: Blob[] = [
  { x: 0.18, y: 0.22, r: 0.42, color: [180, 210, 255], ax: 0.16, ay: 0.12, sx: 0.55, sy: 0.7 },
  { x: 0.82, y: 0.18, r: 0.38, color: [160, 198, 255], ax: 0.14, ay: 0.14, sx: 0.4, sy: 0.55 },
  { x: 0.45, y: 0.85, r: 0.48, color: [200, 222, 255], ax: 0.18, ay: 0.1, sx: 0.7, sy: 0.45 },
  { x: 0.62, y: 0.42, r: 0.3, color: [230, 238, 250], ax: 0.12, ay: 0.16, sx: 0.9, sy: 0.6 },
];

export function FlowBg() {
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  useEffect(() => {
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let frame = 0;
    let running = true;
    const start = performance.now();
    const dpr = () => Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const scale = dpr();
      canvas.width = Math.max(1, Math.floor(w * scale));
      canvas.height = Math.max(1, Math.floor(h * scale));
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(scale, 0, 0, scale, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = (now: number) => {
      if (!running) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      const t = (now - start) / 1000;
      ctx.fillStyle = "#f1f5f8";
      ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = "multiply";
      for (const blob of BLOBS) {
        const x = (blob.x + Math.sin(t * blob.sx) * blob.ax) * w;
        const y = (blob.y + Math.cos(t * blob.sy) * blob.ay) * h;
        const radius = blob.r * Math.max(w, h);
        const [r, g, b] = blob.color;
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, `rgba(${r},${g},${b},0.81)`);
        gradient.addColorStop(0.45, `rgba(${r},${g},${b},0.47)`);
        gradient.addColorStop(1, `rgba(${r},${g},${b},0)`);
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalCompositeOperation = "source-over";
      frame = requestAnimationFrame(draw);
    };

    frame = requestAnimationFrame(draw);
    return () => {
      running = false;
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, [canvas]);

  if (!ready) return null;

  return createPortal(
    <canvas ref={setCanvas} className="flow-bg" aria-hidden="true" />,
    document.body
  );
}
