"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "首页", icon: "/figma/icon-home.svg" },
  { href: "/works/usv", label: "无人艇", icon: "/figma/icon-ship.svg" },
  { href: "/works/feige", label: "飞鸽", icon: "/figma/icon-bike.svg" },
  { href: "/works/tent", label: "帐篷背包", icon: "/figma/icon-bag.svg" },
  { href: "/works/velocare", label: "无人机", icon: "/figma/icon-drone.svg" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="sidebar" aria-label="主导航">
      <div className="sidebar-inner">
        {navItems.map((item) => {
          const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
          return (
            <a
              key={item.label}
              href={item.href}
              className={`sidebar-item${active ? " active" : ""}${
                item.href === "#" ? " disabled" : ""
              }`}
            >
              <span className="sidebar-icon">
                <Image src={item.icon} alt="" width={19} height={19} />
              </span>
              <span className="sidebar-label">{item.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
