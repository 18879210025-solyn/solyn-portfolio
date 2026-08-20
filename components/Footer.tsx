import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="wrap">
        <div className="footer-cta">
          <div>
            <h2>欢迎联系</h2>
            <p>作品持续更新中。如需完整过程文件，可以直接来信。</p>
          </div>
          <a className="btn btn-solid" href={`mailto:${profile.email}`}>
            发送邮件
          </a>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {profile.nameZh} / {profile.nameEn}
          </p>
          <div className="contact-list">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <span>{profile.phone}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
