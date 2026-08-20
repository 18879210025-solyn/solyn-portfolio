import Image from "next/image";
import Link from "next/link";
import { works } from "@/data/works";

export function Works() {
  return (
    <section className="section" id="works">
      <div className="wrap">
        <div className="section-head">
          <h2>作品</h2>
          <p>先从飞鸽开始。案例按产品链路展开：机会、洞察、竞品、策略、验证、方案。</p>
        </div>
        <div className="work-grid">
          {works.map((work) => (
            <Link className="work-card" href={work.href} key={work.slug}>
              <div className="work-cover">
                <Image
                  src={work.cover}
                  alt={`${work.title} 封面`}
                  width={2304}
                  height={1296}
                />
              </div>
              <div className="work-body">
                <div className="work-top">
                  <h3>{work.title}</h3>
                  <span>{work.year}</span>
                </div>
                <p>{work.summary}</p>
                <div className="courses">
                  {work.tags.map((tag) => (
                    <span className="chip" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
