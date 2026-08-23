import Image from "@/components/Image";
import { profile } from "@/data/profile";

const chapters = [
  { id: "opportunity", n: "01", label: "项目背景" },
  { id: "insight", n: "02", label: "用户研究" },
  { id: "compete", n: "03", label: "竞品分析" },
  { id: "strategy", n: "04", label: "产品策略" },
  { id: "validate", n: "05", label: "原型验证" },
  { id: "solution", n: "06", label: "最终方案" },
];

function Slide({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure className="case-slide">
      <Image src={src} alt={alt} width={1200} height={675} />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

export function FeigeCase() {
  return (
    <article className="case-page">
      <div className="case-hero">
        <h1>飞鸽</h1>
        <p className="en">Flying Pigeon</p>
        <p>
          飞鸽品牌年轻化项目围绕年轻用户的骑行兴趣与选车门槛，重新规划品牌的数字化服务。方案将个性化定制、骑行记录和社区内容整合进同一款 App，使购车前的选择、购车后的使用与骑友交流形成连续体验。
        </p>
        <dl className="case-meta-row">
          <div>
            <dt>年份</dt>
            <dd>2023</dd>
          </div>
          <div>
            <dt>类型</dt>
            <dd>品牌策略 / 交互设计</dd>
          </div>
          <div>
            <dt>交付</dt>
            <dd>用户研究、竞品分析、App 与服务蓝图</dd>
          </div>
        </dl>
        <nav className="case-chapters" aria-label="案例章节">
          {chapters.map((item) => (
            <a href={`#${item.id}`} key={item.id}>
              <span>{item.n}</span>
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <section className="case-section" id="opportunity">
        <div className="case-section-header">
          <p className="case-index">01 / 06</p>
          <h2>项目背景：老字号自行车品牌的年轻化转型</h2>
          <p>
            飞鸽是中华老字号，并生产了新中国第一辆自行车。品牌长期以经济、可靠和通勤属性为主要认知，但这套定位较难承接年轻用户对兴趣骑行、个性表达与数字化服务的需求。
          </p>
        </div>
        <div className="case-grid-2">
          <Slide
            src="/works/feige/audience.jpg"
            alt="飞鸽受众结构与品牌定位"
            caption="现有用户以通勤需求为主，品牌需要在保留可靠认知的同时拓展年轻用户与兴趣骑行场景。"
          />
          <Slide
            src="/works/feige/goals.jpg"
            alt="飞鸽四项设计目标"
            caption="项目目标包括延续品牌文化、吸引年轻用户、支持个性化定制，并探索新的产品销售与服务方式。"
          />
        </div>
      </section>

      <section className="case-section" id="insight">
        <div className="case-section-header">
          <p className="case-index">02 / 06</p>
          <h2>用户研究：兴趣消费与选车门槛并存</h2>
          <p>
            调研显示，健身、减压和亲近自然是年轻用户参与骑行的重要动机。入门用户希望得到清晰的选车指导，避免被复杂参数阻碍；有经验的骑行者则更关注性能定制、骑行数据和稳定的交流社区。
          </p>
        </div>
        <div className="case-grid-2">
          <Slide
            src="/works/feige/personas.jpg"
            alt="用户画像与 How Might We"
            caption="两类画像分别代表进阶骑行者与入门用户，对应性能定制、社区交流、选车指导和知识门槛等需求。"
          />
          <Slide
            src="/works/feige/reconstruct.jpg"
            alt="原 App 痛点与价值重构"
            caption="原有 App 存在功能单一、定制流程理解成本高和社区内容不足等问题，需要重新组织核心价值与使用路径。"
          />
        </div>
      </section>

      <section className="case-section" id="compete">
        <div className="case-section-header">
          <p className="case-index">03 / 06</p>
          <h2>竞品分析：品牌、定制工具与骑行 App 的功能断层</h2>
          <p>
            分析分为三个层级：国货与专业自行车品牌用于判断品牌定位，自行车定制工具用于比较选车与配置能力，骑行 App 用于研究运动记录、路线和社区功能。
          </p>
        </div>
        <div className="case-quote">
          对比结果显示，定制工具通常在完成配置后结束服务，而骑行 App 主要服务购车后的记录与社交。项目机会是在同一平台中连接选车定制、骑行使用与社区交流。
        </div>
        <div className="case-grid-1">
          <Slide
            src="/works/feige/matrix.jpg"
            alt="自行车品牌定位矩阵"
            caption="品牌定位矩阵用于比较飞鸽与国货、专业自行车品牌在服务、设计和市场认知上的差异。"
          />
        </div>
        <div className="case-grid-2">
          <Slide
            src="/works/feige/radar.jpg"
            alt="飞鸽与竞品八维雷达对比"
            caption="八维对比显示飞鸽具备服务基础，但在设计表现与年轻用户话题度方面仍有提升空间。"
          />
          <Slide
            src="/works/feige/custom-apps.jpg"
            alt="自行车定制类软件功能对比"
            caption="定制类工具侧重零部件配置，骑行类 App 侧重记录与社区，两类产品尚未形成连续的用户旅程。"
          />
        </div>
      </section>

      <section className="case-section" id="strategy">
        <div className="case-section-header">
          <p className="case-index">04 / 06</p>
          <h2>产品策略：从单一定制工具扩展为骑行服务平台</h2>
          <p>
            根据用户与竞品研究，产品定位从面向专业用户的专属定制工具，调整为同时服务入门与进阶骑行者的平台。定制负责降低选车门槛，运动记录和社区内容承接购车后的持续使用。
          </p>
        </div>
        <div className="case-shifts">
          <div className="case-shift">
            <span>01</span>
            <div>
              <p className="from">飞鸽自行车专属定制软件</p>
              <p className="to">整合定制、骑行与社区的服务平台</p>
            </div>
          </div>
          <div className="case-shift">
            <span>02</span>
            <div>
              <p className="from">对骑行有一定了解的爱好者</p>
              <p className="to">同时覆盖入门与进阶骑行者</p>
            </div>
          </div>
          <div className="case-shift">
            <span>03</span>
            <div>
              <p className="from">按零部件逐项选择并在最后评估</p>
              <p className="to">由 AI 根据需求提供整车建议，再进行个性化调整</p>
            </div>
          </div>
        </div>
        <div className="case-grid-2">
          <Slide
            src="/works/feige/features.jpg"
            alt="飞鸽 App 功能畅想"
            caption="功能规划以个性化定制形成差异，并通过骑行记录、路线与社区内容支持持续使用。"
          />
          <Slide
            src="/works/feige/ia.jpg"
            alt="飞鸽定制 App 信息架构"
            caption="信息架构包含首页、商城与定制、运动、社区和个人中心，并对定制流程进行重点展开。"
          />
        </div>
      </section>

      <section className="case-section" id="validate">
        <div className="case-section-header">
          <p className="case-index">05 / 06</p>
          <h2>原型验证：定制流程是主要阻塞点</h2>
          <p>
            低保真测试设置了参加骑行活动、加入社区和定制自行车三项任务。活动与社区路径可以较快完成，用户的主要困难集中在定制入口、车型判断和零部件选择。
          </p>
        </div>
        <Slide
          src="/works/feige/testing.jpg"
          alt="低保真用户测试任务与反馈"
          caption="测试反馈推动定制流程先确认用户需求与骑行场景，再提供可继续调整的整车方案。"
        />
        <div className="case-grid-2">
          <Slide
            src="/works/feige/lofi.jpg"
            alt="低保真主路径总览"
            caption="低保真原型覆盖首页、定制、设备连接、骑行记录与社区等主要路径。"
          />
          <Slide
            src="/works/feige/blueprint.jpg"
            alt="飞鸽服务蓝图"
            caption="服务蓝图连接品牌了解、App 定制、购买交付和购车后的骑行服务。"
          />
        </div>
      </section>

      <section className="case-section" id="solution">
        <div className="case-section-header">
          <p className="case-index">06 / 06</p>
          <h2>最终方案：连接选车、骑行与社区</h2>
          <p>
            高保真方案将内容发现、个性化定制、骑行记录和社区分享整合进统一界面。用户可以从了解车型和生成配置开始，在购车后继续使用设备连接、运动数据与社区功能。
          </p>
        </div>
        <Slide
          src="/works/feige/hifi-color.jpg?v=color"
          alt="飞鸽 App 高保真界面总览"
          caption="高保真界面覆盖首页、商城与定制、运动、社区和个人中心五个主要模块。"
        />
        <div className="case-grid-2">
          <Slide
            src="/works/feige/hifi-detail-color.jpg?v=color"
            alt="飞鸽 App 高保真关键流程"
            caption="关键流程包括需求定位、整车与部件调整、方案评估、骑行记录和社区互动。"
          />
          <Slide
            src="/works/feige/growth.jpg"
            alt="飞鸽 5A 推广企划"
            caption="推广方案围绕内容触达、兴趣建立、购买转化与用户留存展开。"
          />
        </div>
        <div className="case-quote">
          方案以选车定制降低入门门槛，并用骑行数据和社区服务延续购车后的用户关系，使品牌年轻化落实到持续可用的产品体验中。
        </div>
      </section>

      <div className="contact-footer">
        <div>
          <h2>欢迎联系</h2>
          <p>作品持续更新中。如需完整过程文件，可以直接来信。</p>
        </div>
        <a className="btn" href={`mailto:${profile.email}`}>
          发送邮件
        </a>
      </div>
    </article>
  );
}
