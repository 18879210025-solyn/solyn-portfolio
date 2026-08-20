import Image from "next/image";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section className="hero wrap">
      <p className="kicker">Personal Portfolio</p>
      <h1>{profile.nameZh}</h1>
      <p className="en-name">{profile.nameEn}</p>
      <p className="headline">{profile.headline}</p>
      <div className="hero-actions">
        <a className="btn btn-solid" href="#works">
          查看作品
        </a>
        <a className="btn btn-ghost" href="#skills">
          专业技能
        </a>
      </div>
      <div className="hero-photo">
        <Image
          src={profile.avatarSrc}
          alt={`${profile.nameZh} 照片`}
          width={1600}
          height={900}
          priority
        />
      </div>
    </section>
  );
}
