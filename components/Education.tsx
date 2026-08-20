import { profile } from "@/data/profile";

export function Education() {
  return (
    <section className="section" id="education">
      <div className="wrap">
        <div className="muted-band">
          <div className="section-head">
            <h2>教育经历</h2>
            <p>来自简历中的教育背景，按时间倒序展示。</p>
          </div>
          <div className="cards-2">
            {profile.education.map((item) => (
              <article className="card" key={`${item.school}-${item.degree}`}>
                <h3>{item.school}</h3>
                <p className="meta">
                  {item.schoolNote ? `${item.schoolNote} · ` : ""}
                  {item.period}
                </p>
                <p className="degree">
                  {item.major} {item.degree}
                </p>
                <div className="courses">
                  {item.courses.map((course) => (
                    <span className="chip" key={course}>
                      {course}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
