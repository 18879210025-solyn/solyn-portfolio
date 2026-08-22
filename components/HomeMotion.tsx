"use client";

import { useEffect } from "react";

const RISE_TARGETS =
  ".home-page .hero-name, .home-page .cv-row, .home-page .statement-section, .home-page .projects-section";

export function HomeMotion() {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>(RISE_TARGETS);
    nodes.forEach((el) => {
      el.style.animation = "none";
    });
    const frame = requestAnimationFrame(() => {
      nodes.forEach((el) => {
        el.style.animation = "";
      });
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  return null;
}
