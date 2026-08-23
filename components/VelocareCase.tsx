import Image from "@/components/Image";
import { profile } from "@/data/profile";

const chapters = [
  { id: "overview", n: "01", label: "概述" },
  { id: "problem", n: "02", label: "问题背景" },
  { id: "trigger", n: "03", label: "救援触发" },
  { id: "journey", n: "04", label: "救援流程" },
  { id: "system", n: "05", label: "服务系统" },
  { id: "dispatch", n: "06", label: "调度平台" },
  { id: "market", n: "07", label: "市场定位" },
  { id: "feasibility", n: "08", label: "可行性" },
  { id: "business", n: "09", label: "商业模式" },
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
      <Image src={src} alt={alt} width={1600} height={900} />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

export function VelocareCase() {
  return (
    <article className="case-page">
      <div className="case-hero">
        <h1>无人机</h1>
        <p className="en">VeloCare · 城市低空急救</p>
        <p>
          把地面急救从「和交通赛跑」做成可触发、可调度、可交接的空中转运。本人作为项目负责人，负责全项目的任务分配、流程跟进、各组协调与对接、项目排期以及最后的汇报，此外，我同时负责产品的部分工作。
        </p>
        <dl className="case-meta-row">
          <div>
            <dt>年份</dt>
            <dd>2025</dd>
          </div>
          <div>
            <dt>类型</dt>
            <dd>服务产品 / 低空急救</dd>
          </div>
          <div>
            <dt>交付</dt>
            <dd>服务系统、调度平台、市场与商业模式</dd>
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

      <section className="case-section" id="overview">
        <div className="case-section-header">
          <p className="case-index">01 / 09</p>
          <h2>概述：城市空中急救中心的系统搭建</h2>
          <p>
            VeloCare是一个集成低空救护飞行器、健康监测设备与云端调度系统的城市低空医疗救援网络。
          </p>
        </div>
        <Slide
          src="/works/velocare/hero.jpg?v=ppt"
          alt="VeloCare LEMS 产品介绍：一键求助、智能调度、空中直达医院"
          caption="AeroGuard 1.0 承担空中转运，整体服务由求助入口、智能调度和院端交接组成。"
        />
      </section>

      <section className="case-section" id="problem">
        <div className="case-section-header">
          <p className="case-index">02 / 09</p>
          <h2>问题背景：三类地面转运缺口</h2>
          <p>
            调研将需求集中在三类场景：偏远地区受距离和地形限制；城市拥堵或灾害导致道路中断；患者需要跨院转往具备专科能力的医院。VeloCare
            主要补充这些地面急救难以及时覆盖的场景。
          </p>
        </div>
        <div className="case-grid-1">
          <Slide
            src="/works/velocare/pain.jpg?v=ppt"
            alt="三类痛点：距离与地形、拥堵与孤岛、就近与专科"
            caption="项目聚焦距离与地形、拥堵与孤岛效应，以及卒中等具有明确救治窗口的专科转运需求。"
          />
        </div>
      </section>

      <section className="case-section" id="trigger">
        <div className="case-section-header">
          <p className="case-index">03 / 09</p>
          <h2>救援触发：自动监测与主动求助</h2>
          <p>
            系统设置两种触发方式：健康监测设备在用户失去意识或行动能力时自动报警；用户保持清醒时，可通过
            App 主动发起求助。两种请求都会进入同一套调度系统。
          </p>
        </div>
        <div className="case-grid-1">
          <Slide
            src="/works/velocare/triggers.jpg?v=ppt"
            alt="静默告警与主动呼叫两套触发"
            caption="静默警报适用于无法主动求助的人；主动呼叫适用于保持清醒但受困或急需转运的人。"
          />
        </div>
      </section>

      <section className="case-section" id="journey">
        <div className="case-section-header">
          <p className="case-index">04 / 09</p>
          <h2>救援流程：从告警到院端交接</h2>
          <p>
            一次任务分为告警、调度、现场接驳、飞行监护和医院交接五个阶段。患者信息和目的医院在起飞前确认，飞行过程中持续监测生命体征，落地后直接交接给院方。
          </p>
        </div>
        <div className="case-grid-1">
          <Slide
            src="/works/velocare/journey.jpg?v=ppt"
            alt="救援流程：危机触发、智能调度、到达换乘、空中监护、院端交接"
            caption="完整流程包括危机触发、智能调度、现场接驳、飞行监护和院端交接。"
          />
        </div>
      </section>

      <section className="case-section" id="system">
        <div className="case-section-header">
          <p className="case-index">05 / 09</p>
          <h2>服务系统：连接现场、调度、机队与医院</h2>
          <p>
            围绕患者、急救中心、医院、政府与飞行器供应方，项目梳理了信息流、物资流和资金流。飞行器承担运输，调度平台负责资源匹配与任务状态，医院提前接收患者信息并准备接诊。
          </p>
        </div>
        <div className="case-grid-1">
          <Slide
            src="/works/velocare/system.jpg?v=ppt"
            alt="服务系统图：信息流、物资流与资金流"
            caption="利益相关者系统图：现场、机队、调度、医院之间的信息流、物资流和资金流。"
          />
        </div>
        <Slide
          src="/works/velocare/blueprint.jpg?v=ppt"
          alt="服务蓝图：救援前、中、后的前台与后台"
          caption="服务蓝图按救援前、救援中和救援后，梳理用户操作、前台响应、后台协作与支撑系统。"
        />
        <Slide
          src="/works/velocare/dispatch.jpg?v=ppt"
          alt="实时智能调度：空中 ETA 与地面 ETA 比较后派出"
          caption="调度系统分别估算 eVTOL 与地面救护车的到达时间，并结合天气、空域、地形和资源状态选择方案。"
        />
      </section>

      <section className="case-section" id="dispatch">
        <div className="case-section-header">
          <p className="case-index">06 / 09</p>
          <h2>调度平台：任务执行与记录</h2>
          <p>
            调度人员在主界面查看新任务、飞行器位置、预计航线和任务状态。任务结束后，系统保存飞行时间、距离、患者生命体征和交接信息，供后续查询与复盘。
          </p>
        </div>
        <div className="case-grid-1">
          <Slide
            src="/works/velocare/ui.jpg?v=ppt"
            alt="调度中心主界面与任务归档"
            caption="主界面用于查看任务列表、实时位置和预计航线；归档页记录任务数据与院端交接信息。"
          />
        </div>
        <div className="case-grid-1">
          <Slide
            src="/works/velocare/logic.jpg?v=ppt"
            alt="调度中心交互逻辑：告警、接受、确认、执行、归档"
            caption="操作流程覆盖新任务提醒、初步分析、任务确认、资源调整、执行监控和任务归档，并为误报与取消保留处理出口。"
          />
        </div>
      </section>

      <section className="case-section" id="market">
        <div className="case-section-header">
          <p className="case-index">07 / 09</p>
          <h2>市场定位：从大湾区城市急救切入</h2>
          <p>
            市场范围从中国低空经济进一步聚焦到城市急救与空中医疗救援，并以深圳的政府和医疗机构作为首批服务对象。大湾区具备政策试点、产业链、低空航线和通信基础设施，适合开展早期验证。
          </p>
        </div>
        <Slide
          src="/works/velocare/tam.jpg?v=ppt"
          alt="VeloCare 的 TAM、SAM 与 SOM 市场范围"
          caption="TAM 对应中国低空经济，SAM 聚焦城市急救与空中医疗救援，SOM 首先面向深圳的政府和医疗机构。"
        />
        <Slide
          src="/works/velocare/swot.jpg?v=ppt"
          alt="VeloCare SWOT 分析"
          caption="优势来自垂直起降与自研调度系统；机会来自低空政策与急救需求。主要限制是运营成本、适航认证、城市起降条件和数据安全。"
        />
        <div className="case-grid-1">
          <Slide
            src="/works/velocare/strategy.jpg?v=ppt"
            alt="VeloCare 技术、市场与商业发展策略"
            caption="发展策略包括楼宇悬停救援与视频评估、接入公共应急系统、与养老社区合作，以及以政府和医院为主的 B2B 模式。"
          />
        </div>
      </section>

      <section className="case-section" id="feasibility">
        <div className="case-section-header">
          <p className="case-index">08 / 09</p>
          <h2>可行性：与现有急救方式的对比</h2>
          <p>
            方案将 LEMS 与直升机急救、地面救护车进行对比。在项目测算中，LEMS
            的响应速度和可达性优于地面救护车，同时降低了对大型停机坪的依赖；其单次任务成本也低于直升机急救。
          </p>
        </div>
        <div className="case-grid-1">
          <Slide
            src="/works/velocare/compare.jpg?v=ppt"
            alt="三种医疗救援工具的成本对比：直升机、eVTOL、地面救护车"
            caption="项目测算的单次任务成本为 191 美元；直升机急救约为 10,375 美元，地面救护车约为 312.5 美元。"
          />
        </div>
      </section>

      <section className="case-section" id="business">
        <div className="case-section-header">
          <p className="case-index">09 / 09</p>
          <h2>商业模式：机构客户为主，个人服务为辅</h2>
          <p>
            主要客户包括医疗机构、产业园区和企业，个人与家庭服务通过会员订阅补充。收入来自长期服务合同、按次任务费和会员费；成本包括机队折旧、维护、人员、充电设施与云端平台。
          </p>
        </div>
        <Slide
          src="/works/velocare/canvas.jpg?v=ppt"
          alt="商业画布：问题、客户、方案与收支"
          caption="商业画布汇总了客户、价值主张、服务渠道、关键指标，以及机队与平台的成本和收入来源。"
        />
        <Slide
          src="/works/velocare/gtm.jpg?v=ppt"
          alt="GTM：深圳试点后逐城复制"
          caption="市场进入计划从深圳试点开始，再扩展到广州等城市，最终形成可复制的标准化运营方案。"
        />
        <div className="case-quote">
          本项目最终形成了从救援触发、任务调度、空中转运、院端交接到付费模式的完整方案，并以深圳作为首个试点城市，验证后再复制到其他城市。
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
