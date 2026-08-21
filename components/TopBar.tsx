"use client";

import Link from "next/link";

export function TopBar() {
  return (
    <header className="top-bar">
      <Link className="brand-mark" href="/">
        Solyn.
      </Link>
      <div className="top-line" aria-hidden="true" />
    </header>
  );
}
