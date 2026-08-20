import Image from "@/components/Image";
import { profile } from "@/data/profile";

const chapters = [
  { id: "product", n: "01", label: "定义" },
  { id: "discovery", n: "02", label: "发现" },
  { id: "decision", n: "03", label: "决策" },
  { id: "features", n: "04", label: "功能" },
  { id: "form", n: "05", label: "造型" },
  { id: "model", n: "06", label: "模型" },
  { id: "mechanism", n: "07", label: "机构" },
  { id: "interior", n: "08", label: "人机" },
  { id: "proof", n: "09", label: "验证" },
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

export function UsvCase() {
  return (
    <article className="case-page">
      <div className="case-hero">
        <h1>无人艇</h1>
        <p className="en">Unmanned Surface Vehicle</p>
        <p>
          景区观光无人艇：从景区场景缺口、竞品缺口出发，用三版迭代把产品从「游艇」改成「可变空间观光载具」，并落到新的船体、开合机构、内舱人机和商业模型。
        </p>
        <dl className="case-meta-row">
          <div>
            <dt>年份</dt>
            <dd>2023</dd>
          </div>
          <div>
            <dt>类型</dt>
            <dd>产品设计 / 工业设计</dd>
          </div>
          <div>
            <dt>交付</dt>
            <dd>产品定义、模型、机构、样机、商业</dd>
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

      <section className="case-section" id="product">
        <div className="case-section-header">
          <p className="case-index">01 / 09</p>
          <h2>定义：一艘船，两套空间，两套场次</h2>
          <p>
            不是做无人船技术科普，而是给景区做观光产品：白天能看水、晚上能看灯、雨天能封闭。
          </p>
        </div>
        <Slide
          src="/works/usv/ink-wash.png"
          alt="景区观光无人艇水墨风效果"
          caption="水墨风效果：景区夜间观光的氛围表达。"
        />
        <Slide
          src="/works/usv/prototype.png"
          alt="1:20 样机"
          caption="1:20 样机验证尺度和开合。最终外观以重建模型为准。"
        />
      </section>

      <section className="case-section" id="discovery">
        <div className="case-section-header">
          <p className="case-index">02 / 09</p>
          <h2>发现：景区要的不是把人送一圈，而是留下来</h2>
          <p>
            后疫情水域景区成为文旅爆发点。年轻人要的是沉浸、可拍照、私密，不是坐在封闭舱里从 A 到 B。家庭要能看水，情侣要半私密，商务要不被围观。
          </p>
        </div>
        <div className="case-quote">
          竞品已经在做 L4 和大屏语音。缺口是空间可变、亲水看水下、夜间有氛围。不做更好的自动驾驶船，做不同的空间体验。
        </div>
        <div className="case-grid-2">
          <Slide
            src="/works/usv/scene.png"
            alt="景区无人船发展背景"
            caption="背景：年轻客群、水域景区、环保电推，是产品存在的前提。"
          />
          <Slide
            src="/works/usv/competitors.png"
            alt="南京玄武湖与扬州欧卡竞品"
            caption="竞品：玄武湖有 L4、全景天窗、大屏；欧卡有预约制。我们补的是空间与水。"
          />
        </div>
        <Slide
          src="/works/usv/service.png"
          alt="改进后的服务蓝图"
          caption="服务蓝图：预约 → 登船 → 航行中可开可闭 → 灯光互动 → 离船。"
        />
      </section>

      <section className="case-section" id="decision">
        <div className="case-section-header">
          <p className="case-index">03 / 09</p>
          <h2>决策：三版不是改造型，是推翻产品假设</h2>
          <p>
            从全封闭游艇到半开放观光艇，每一步失败都指向同一个产品结论：船舱是体验容器，不是造型目标。
          </p>
        </div>
        <div className="case-shifts">
          <div className="case-shift">
            <span>01</span>
            <div>
              <p className="from">豪华封闭舱，像游艇</p>
              <p className="to">梯形压空间，主任务是看和走，不能这么挤</p>
            </div>
          </div>
          <div className="case-shift">
            <span>02</span>
            <div>
              <p className="from">常规全封闭游艇</p>
              <p className="to">没记忆点，全封闭景区不好运营、造价也高</p>
            </div>
          </div>
          <div className="case-shift">
            <span>03</span>
            <div>
              <p className="from">全封闭 / 全开放二选一</p>
              <p className="to">半开放 + 可折叠顶棚 + 玻璃船头，空间可变</p>
            </div>
          </div>
        </div>
        <div className="case-grid-2">
          <Slide
            src="/works/usv/v1-sketch.png"
            alt="第一版全封闭草图"
            caption="V1：全封闭、梯形、前后甲板。"
          />
          <div className="case-card">
            <h3>V1 为什么被否</h3>
            <p>梯形舱体压缩了内部空间，乘客坐下后视野受限，走动也不方便。核心任务是看水和走动，这个布局让主任务变难。</p>
          </div>
        </div>
        <div className="case-grid-2">
          <Slide
            src="/works/usv/v2-sketch.png"
            alt="第二版常规游艇草图"
            caption="V2：更常规的全封闭游艇。"
          />
          <div className="case-card">
            <h3>V2 为什么被否</h3>
            <p>外形过于常规，缺少新意和特点；全封闭在景区运营里可行性低，通风、登离、造价都是问题。</p>
          </div>
        </div>
        <Slide
          src="/works/usv/v3-sketch.png"
          alt="第三版半开放可变方案"
          caption="V3 定稿：半开放降低成本和压抑感，可折叠顶棚覆盖天气和场次，玻璃船头是竞品没有的锚点。"
        />
      </section>

      <section className="case-section" id="features">
        <div className="case-section-header">
          <p className="case-index">04 / 09</p>
          <h2>功能：每一项都接到用户和场景</h2>
          <p>
            功能服务于三种人和两套场次：观光 / 商务，日间 / 夜间。驾驶保留自动、遥控、手动三模。
          </p>
        </div>
        <div className="case-grid-2">
          <Slide
            src="/works/usv/interaction.png"
            alt="交互界面与船只相遇灯光"
            caption="相遇有灯光反馈。把无人船从载具变成可感知、可分享的对象。"
          />
          <Slide
            src="/works/usv/lighting.png"
            alt="灯光与音乐交互"
            caption="夜间场独立卖。灯光和音乐由游客控制，构成另一套产品。"
          />
        </div>
      </section>

      <section className="case-section" id="form">
        <div className="case-section-header">
          <p className="case-index">05 / 09</p>
          <h2>造型：按产品原则重新设计船体</h2>
          <p>
            课上 V3 定了方向。重建时从比例、登离、视线和开合出发：更低更长，开合是整侧舱壁，下半部仍是船体。
          </p>
        </div>
        <div className="case-grid-2">
          <Slide
            src="/works/usv/v3-sketch.png"
            alt="新造型方向：半开放、可折叠、玻璃船头"
            caption="造型方向：从半封闭游艇转向可变空间观光载具。"
          />
          <Slide
            src="/works/usv/line-drawing.png?v=4"
            alt="新模型线稿图"
            caption="新模型线稿：船体比例、红色框架与传统花格细节。"
          />
        </div>
      </section>

      <section className="case-section" id="model">
        <div className="case-section-header">
          <p className="case-index">06 / 09</p>
          <h2>模型：最终外观以新建模为准</h2>
          <p>
            这一帧是工业设计的视觉核心。整页应放你后来重建的艇：白天、夜间、三视图、开放/闭合对比。
          </p>
        </div>
        <div className="case-grid-2">
          <Slide
            src="/works/usv/model-no-bg.png"
            alt="景区观光无人艇白底渲染"
            caption="白底产品渲染：新模型比例、玻璃舱体与红色框架。"
          />
          <Slide
            src="/works/usv/render-bg-1.png"
            alt="景区观光无人艇场景渲染 1"
            caption="场景渲染：桂林山水与晨雾。"
          />
        </div>
        <div className="case-grid-2">
          <Slide
            src="/works/usv/render-bg-2.png"
            alt="景区观光无人艇场景渲染 2"
            caption="场景渲染：湖面黄昏与 A-frame 建筑。"
          />
          <Slide
            src="/works/usv/render-bg-3.png"
            alt="景区观光无人艇场景渲染 3"
            caption="场景渲染：夜间森林与 glowing 帐篷。"
          />
        </div>
      </section>

      <section className="case-section" id="mechanism">
        <div className="case-section-header">
          <p className="case-index">07 / 09</p>
          <h2>机构：开合是这艘船的核心产品开关</h2>
          <p>
            可变空间不是渲染里顶棚消失，而是有轨道、扇、框、排水。ADS 7650 滑轨导向，活动扇闭合成面，挡水檐处理进水。
          </p>
        </div>
        <div className="case-grid-2">
          <Slide
            src="/works/usv/structure-design.png"
            alt="结构设计图"
            caption="结构设计：船体零件图与尺寸标注。"
          />
          <div className="case-card">
            <h3>开合机构的实现</h3>
            <p>ADS 7650 滑轨导向，活动扇沿轨道开合，闭合时形成连续舱壁；挡水檐与排水槽处理雨天进水，保证开合不是渲染效果而是可工程化结构。</p>
          </div>
        </div>
      </section>

      <section className="case-section" id="interior">
        <div className="case-section-header">
          <p className="case-index">08 / 09</p>
          <h2>人机与 CMF：工业设计不只外壳</h2>
          <p>
            分区是驾驶、坐、看水下、开合边界。人机看登离和防夹手。灯带算船体 CMF，不是 App。
          </p>
        </div>
        <div className="case-grid-2">
          <Slide
            src="/works/usv/interior.png"
            alt="船内陈设图"
            caption="内舱陈设：L 型沙发、茶几、驾驶区与中式花格。"
          />
          <div className="case-card">
            <h3>人机与 CMF</h3>
            <p>驾驶区在前、 Lounge 在中、看水下玻璃在船头。CMF 以深木色船体、红色框架、青绿色花格和暖光为主，形成「现代中式」的景区识别。</p>
          </div>
        </div>
      </section>

      <section className="case-section" id="proof">
        <div className="case-section-header">
          <p className="case-index">09 / 09</p>
          <h2>验证与商业：能造、能开、能卖</h2>
          <p>
            样机验证开合和尺度；静水力看排水；景区缓流用 PE/复合材料。小批量近 4 万，量产可到 3 万。
          </p>
        </div>
        <div className="case-grid-2">
          <Slide
            src="/works/usv/prototype.png"
            alt="1:20 样机展示"
            caption="1:20 样机是新模型前的实物尺度参考。"
          />
          <Slide
            src="/works/usv/running.png"
            alt="样机运行"
            caption="运行：验证能开。"
          />
        </div>
        <div className="case-quote">
          商业上走 B2B2C：景区采购、游客预约。三套收入：日间观光票、夜间灯光音乐场、包艇商务。VR 不做，先打开合、水下观景、灯光音乐这三件事。
        </div>
        <Slide
          src="/works/usv/cost.png"
          alt="成本核算"
          caption="成本：小批量近 4 万，批量生产可压到 3 万左右。"
        />
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
