import Image from "@/components/Image";
import { profile } from "@/data/profile";

const chapters = [
  { id: "opportunity", n: "01", label: "机会" },
  { id: "insight", n: "02", label: "洞察" },
  { id: "compete", n: "03", label: "竞品" },
  { id: "strategy", n: "04", label: "策略" },
  { id: "validate", n: "05", label: "验证" },
  { id: "solution", n: "06", label: "方案" },
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
          老字号自行车要年轻化，缺口不在再画一套视觉，而在把「买一辆车」变成「进入一种骑行生活方式」。
        </p>
        <dl className="case-meta-row">
          <div>
            <dt>年份</dt>
            <dd>2023</dd>
          </div>
          <div>
            <dt>类型</dt>
            <dd>品牌策略 / 产品设计</dd>
          </div>
          <div>
            <dt>交付</dt>
            <dd>竞品分析、App、服务蓝图</dd>
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
          <h2>机会：老品牌停在「可靠」，年轻人要的是兴趣</h2>
          <p>
            飞鸽是中国第一辆国产自行车、中华老字号。1989 年年产 368
            万辆，一度是全球最大自行车厂。问题是：品牌仍停在传统、经济、通勤，和年轻人的兴趣消费对不上。
          </p>
        </div>
        <div className="case-grid-2">
          <Slide
            src="/works/feige/audience.jpg"
            alt="飞鸽受众结构与品牌定位"
            caption="通勤是基本盘。年轻化和生活方式才是增长口，心智还停在代步工具。"
          />
          <Slide
            src="/works/feige/goals.jpg"
            alt="飞鸽四项设计目标"
            caption="文化、年轻化、定制、销售模式要落到同一套产品，不是四套物料。"
          />
        </div>
      </section>

      <section className="case-section" id="insight">
        <div className="case-section-header">
          <p className="case-index">02 / 06</p>
          <h2>洞察：愿意为兴趣花钱，却过不了选车门槛</h2>
          <p>
            骑行动机首先是健身、解压和亲近自然，代步只是其中一层。年轻人整体抠门、局部挥霍——愿意为让自己开心的东西付溢价，但讨厌高知识门槛和无意义的仪式感。
          </p>
        </div>
        <div className="case-grid-2">
          <Slide
            src="/works/feige/personas.jpg"
            alt="用户画像与 How Might We"
            caption="王刚要社区和性能定制；刘惜冉要人话，不要零件清单。痛点翻成 How Might We。"
          />
          <Slide
            src="/works/feige/reconstruct.jpg"
            alt="原 App 痛点与价值重构"
            caption="原 App：功能单一、定制门槛高、社区留不住。直接导向后面三次转向。"
          />
        </div>
      </section>

      <section className="case-section" id="compete">
        <div className="case-section-header">
          <p className="case-index">03 / 06</p>
          <h2>竞品：三层市场里，没有人把造车和骑行做成一件事</h2>
          <p>
            竞品不看主色和 slogan，而看用户完成任务时会拿谁比较。飞鸽同时面对国货品牌、海外专业车，以及定制工具和骑行 App。
          </p>
        </div>
        <div className="case-quote">
          机会一句话：市场上没有人把「AI 辅助造车 + 骑行记录 + 年轻人社区」做成同一件事。飞鸽不在再做一个更好的网店，而在补上这截断层。
        </div>
        <div className="case-grid-1">
          <Slide
            src="/works/feige/matrix.jpg"
            alt="自行车品牌定位矩阵"
            caption="品牌层：飞鸽服务好于永久、凤凰，设计和话题度落后捷安特、Trek。"
          />
        </div>
        <div className="case-grid-2">
          <Slide
            src="/works/feige/radar.jpg"
            alt="飞鸽与竞品八维雷达对比"
            caption="八维雷达：飞鸽在服务上有优势，设计和话题度是短板。"
          />
          <Slide
            src="/works/feige/custom-apps.jpg"
            alt="自行车定制类软件功能对比"
            caption="定制工具几乎没有社交，配完即走。骑行 App 很强，但不帮人选车。"
          />
        </div>
      </section>

      <section className="case-section" id="strategy">
        <div className="case-section-header">
          <p className="case-index">04 / 06</p>
          <h2>策略：三次转向，把定制软件做成骑行产品</h2>
          <p>
            调研之后没有直接画界面，先改产品定义。飞鸽要接触的不是「已经懂车的人」，而是任何对自行车产生兴趣的人。
          </p>
        </div>
        <div className="case-shifts">
          <div className="case-shift">
            <span>01</span>
            <div>
              <p className="from">飞鸽自行车专属定制软件</p>
              <p className="to">骑行风尚交流社区</p>
            </div>
          </div>
          <div className="case-shift">
            <span>02</span>
            <div>
              <p className="from">对骑行有一定了解的爱好者</p>
              <p className="to">任何对自行车感兴趣的人</p>
            </div>
          </div>
          <div className="case-shift">
            <span>03</span>
            <div>
              <p className="from">机械选择部件，最后再评估</p>
              <p className="to">在 AI 帮助下自主设计专属车</p>
            </div>
          </div>
        </div>
        <div className="case-grid-2">
          <Slide
            src="/works/feige/features.jpg"
            alt="飞鸽 App 功能畅想"
            caption="对照 Strava / Komoot 之后的功能取舍：定制是差异点，记录和社区是留存。"
          />
          <Slide
            src="/works/feige/ia.jpg"
            alt="飞鸽定制 App 信息架构"
            caption="信息架构：首页、购物/定制、运动、社区、我的。定制路径被单独加深。"
          />
        </div>
      </section>

      <section className="case-section" id="validate">
        <div className="case-section-header">
          <p className="case-index">05 / 06</p>
          <h2>验证：活动找得到，定制会迷路</h2>
          <p>
            用低保真原型跑了三条任务：参加骑行活动、加入社区、定制一辆车。前两件两步内能完成；真正卡住的是造车。
          </p>
        </div>
        <Slide
          src="/works/feige/testing.jpg"
          alt="低保真用户测试任务与反馈"
          caption="三条任务：活动和社区两步内能完成；卡住的始终是造车。因此先定位再给整车方案。"
        />
        <div className="case-grid-2">
          <Slide
            src="/works/feige/lofi.jpg"
            alt="低保真主路径总览"
            caption="低保真总流程：从首页到定制、设备、骑行、社区。"
          />
          <Slide
            src="/works/feige/blueprint.jpg"
            alt="飞鸽服务蓝图"
            caption="服务蓝图：了解 App → 使用定制 → 拿到车后继续用。"
          />
        </div>
      </section>

      <section className="case-section" id="solution">
        <div className="case-section-header">
          <p className="case-index">06 / 06</p>
          <h2>方案：定制成交，骑行和社区负责留下</h2>
          <p>
            高保真把四条主线收在同一套界面里：发现、造车、开骑、分享。App 是从问询到拥护的承接面。
          </p>
        </div>
        <Slide
          src="/works/feige/hifi.jpg?v=color"
          alt="飞鸽 App 高保真界面总览"
          caption="首页、商城/定制、运动、社区、我的。造车和开骑是核心屏。"
        />
        <div className="case-grid-2">
          <Slide
            src="/works/feige/hifi-detail.jpg?v=color"
            alt="飞鸽 App 高保真关键流程"
            caption="社区留存、骑行记录、部件级定制、方案评估。"
          />
          <Slide
            src="/works/feige/growth.jpg"
            alt="飞鸽 5A 推广企划"
            caption="5A：内容投放 → 积累 → 种草 → 收割 → 留存。漏斗在图里，不再另画一遍。"
          />
        </div>
        <div className="case-quote">
          飞鸽要年轻化，不是再画一套国潮视觉，而是补上竞品都没打通的产品缺口：降低造车门槛，再用骑行数据和社区，把一次性购车变成持续关系。
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
