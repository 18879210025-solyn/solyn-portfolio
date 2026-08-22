"use client";

import { useEffect } from "react";

export function HomeMotion() {
  useEffect(() => {
    let cancelled = false;
    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!cancelled) {
          document.documentElement.classList.add("motion-ready");
        }
      });
    });
    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  return null;
}
