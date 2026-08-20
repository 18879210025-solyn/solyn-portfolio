"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function TopBar() {
  const pathname = usePathname();
  const homeHref = pathname === "/fast" || pathname.startsWith("/fast/") ? "/fast" : "/";

  return (
    <header className="top-bar">
      <Link className="brand-mark" href={homeHref}>
        Solyn.
      </Link>
      <div className="top-line" aria-hidden="true" />
    </header>
  );
}
