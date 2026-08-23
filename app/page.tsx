import Image from "@/components/Image";
import Link from "next/link";
import { FlowBg } from "@/components/FlowBg";
import { HomeMotion } from "@/components/HomeMotion";
import { profile } from "@/data/profile";

function EduCard({
  school,
  meta,
  degree,
  chips,
}: {
  school: string;
  meta: string;
  degree: string;
  chips: string[];
}) {
  return (
    <div className="edu-card">
      <h3>{school}</h3>
      <p className="meta">{meta}</p>
      <p className="degree">{degree}</p>
      <div className="chip-row">
        {chips.map((c) => (
          <span className="chip" key={c}>
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}

function SkillCard({ title, items }: { title: string; items: string }) {
  return (
    <div className="skill-card">
      <h4>{title}</h4>
      <p>{items}</p>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="home-page">
      <FlowBg />
      <HomeMotion />
      <div className="hero-name">
        方宇凌 Solyn<span className="en">（英文名）</span>
      </div>

      <div className="cv-row">
        <div className="photo-card">
          <Image
            src="/figma/photo.jpg?v=opt"
            alt={`${profile.nameZh} 照片`}
            width={263}
            height={389}
            priority
          />
        </div>
        <div className="cv-main">
          <div className="section-title">教育经历</div>
          <div className="edu-cards">
            {profile.education.map((edu) => (
              <EduCard
                key={edu.school}
                school={edu.school}
                meta={`${edu.schoolNote} · ${edu.period}`}
                degree={`${edu.major} ${edu.degree}`}
                chips={edu.courses}
              />
            ))}
          </div>

          <div className="section-title" style={{ marginTop: 4 }}>
            个人技能
          </div>
          <div className="skill-rows">
            <div className="skill-row">
              <SkillCard
                title="AI辅助开发"
                items="能够借助 AI Coding 工具完成前端页面实现、基础功能验证、代码检查与交付。"
              />
              <SkillCard
                title="编程基础"
                items="修读 Python、C++及互联网编程课程，能够理解基础代码逻辑与常见数据结构。"
              />
            </div>
            <div className="skill-row">
              <SkillCard
                title="设计工具"
                items="Figma、Adobe Photoshop、Illustrator、SolidWorks、Rhino、KeyShot、AutoCAD"
              />
              <SkillCard
                title="产品与系统"
                items="用户体验设计、硬件原型开发、产品需求文档撰写、商业模式设计"
              />
            </div>
            <div className="skill-row">
              <SkillCard title="语言" items="英语（雅思 7.0）" />
            </div>
          </div>
        </div>
      </div>

      <div className="statement-section">
        <div className="section-title">个人陈述</div>
        <div className="statement-card">
          <p>{profile.about}</p>
        </div>
      </div>

      <div className="projects-section">
        <div className="section-title">项目</div>
        <div className="project-strip">
          <Link href="/fast" className="project-item project-item-fast" prefetch={false}>
            <Image src="/figma/fast-logo.png?v=sm" alt="FAST" width={70} height={67} />
          </Link>
          <div className="bottom-line">
            <Image src="/figma/bottom-line.svg" alt="" width={1228} height={146} />
          </div>
          <div className="project-items">
            <Link href="/works/usv" className="project-item project-item-usv" prefetch={false}>
              <Image
                src="/figma/project-usv.png?v=opt"
                alt="无人艇"
                width={140}
                height={85}
                unoptimized
              />
            </Link>
            <Link href="/works/feige" className="project-item project-item-phone" prefetch={false}>
              <Image
                src="/figma/project-uav-color.png?v=sm"
                alt="飞鸽"
                width={37}
                height={80}
              />
            </Link>
            <Link href="/works/feige" className="project-item project-item-fp" prefetch={false}>
              <Image
                src="/figma/project-fp-color.png?v=sm"
                alt="飞鸽"
                width={150}
                height={57}
              />
            </Link>
            <Link href="/works/velocare" className="project-item project-item-drone" prefetch={false}>
              <Image
                src="/figma/project-drone.png?v=opt"
                alt="无人机"
                width={108}
                height={62}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
