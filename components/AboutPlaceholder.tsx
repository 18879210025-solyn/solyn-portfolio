import { profile } from "@/data/profile";

export function AboutPlaceholder() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <div className="about-card">
          <p className="label">个人评价</p>
          <h2>关于我</h2>
          {profile.about ? (
            <p>{profile.about}</p>
          ) : (
            <p className="placeholder">
              个人评价稍后补充。请把文案发来后，我会写进 data/profile.ts 并更新这一栏。
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
