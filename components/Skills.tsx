import { profile } from "@/data/profile";

export function Skills() {
  return (
    <section className="section" id="skills">
      <div className="wrap">
        <div className="section-head">
          <h2>专业技能</h2>
          <p>技能名称来自简历。进度条为展示占位，之后可按 0–100% 调整。</p>
        </div>
        <div className="skills-grid">
          {profile.skillGroups.map((group, index) => (
            <article
              className={`skill-card${index === 1 ? " featured" : ""}`}
              key={group.title}
            >
              <h3>{group.title}</h3>
              {group.skills.map((skill) => (
                <div className="skill-row" key={skill.name}>
                  <div className="skill-top">
                    <span className="skill-name">{skill.name}</span>
                    <span className="level">{skill.level}%</span>
                  </div>
                  <div className="bar-track" aria-hidden="true">
                    <div
                      className="bar-fill"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
