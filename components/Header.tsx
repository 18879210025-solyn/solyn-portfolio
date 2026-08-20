import { profile } from "@/data/profile";

type HeaderProps = {
  active?: "home" | "works" | "contact";
};

export function Header({ active = "home" }: HeaderProps) {
  const links = [
    { href: "/", label: "首页", key: "home" as const },
    { href: "/#resume", label: "简历", key: "resume" as const, shell: true },
    { href: "/#works", label: "作品", key: "works" as const },
    { href: "/#contact", label: "联系", key: "contact" as const },
  ];

  return (
    <header className="site-header">
      <div className="wrap nav">
        <a className="brand" href="/">
          {profile.nameZh}
          <span>{profile.nameEn}</span>
        </a>
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`${active === link.key ? "is-active" : ""}${
                  "shell" in link && link.shell ? " is-shell" : ""
                }`.trim()}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
