import Image from "@/components/Image";
import { profile } from "@/data/profile";

const chapters = [
  { id: "product", n: "01", label: "产品定义" },
  { id: "discovery", n: "02", label: "用户与竞品" },
  { id: "decision", n: "03", label: "方案迭代" },
  { id: "features", n: "04", label: "功能方案" },
  { id: "form", n: "05", label: "造型设计" },
  { id: "model", n: "06", label: "最终模型" },
  { id: "mechanism", n: "07", label: "开合机构" },
  { id: "interior", n: "08", label: "内舱与 CMF" },
  { id: "proof", n: "09", label: "验证与商业" },
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
          面向水域景区的观光无人艇，可在开放观景与封闭私密空间之间切换，覆盖日间观光、夜间娱乐和商务包艇。项目从场景调研与竞品分析出发，经过三轮方案迭代，并继续完成船体重建、开合机构、内舱和样机验证。
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
            <dd>产品定义、造型、机构、样机与商业模型</dd>
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
          <h2>产品定义：可在开放与封闭之间切换的景区观光艇</h2>
          <p>
            产品面向水域景区，采用电力推进与无人驾驶系统。顶棚和舱壁可根据天气及使用场景开合：开放状态用于亲水观景，闭合状态提供相对私密的观光或商务空间。
          </p>
        </div>
        <Slide
          src="/works/usv/ink-wash.png"
          alt="景区观光无人艇水墨风效果"
          caption="夜间场景用于展示灯光氛围，以及舱体闭合后的空间状态。"
        />
        <Slide
          src="/works/usv/prototype.jpg?v=full"
          alt="1:20 样机"
          caption="1:20 样机用于验证产品体量、乘坐空间与开合概念；最终外观以后续重建模型为准。"
        />
      </section>

      <section className="case-section" id="discovery">
        <div className="case-section-header">
          <p className="case-index">02 / 09</p>
          <h2>需求分析：景区游客需要的不只是水上交通</h2>
          <p>
            调研将需求归纳为三类：年轻游客关注沉浸感与拍照体验，家庭游客重视安全、舒适和亲水观景，情侣及商务用户需要相对独立的乘坐空间。因此，产品重点从单纯完成航行转向改善整个乘船体验。
          </p>
        </div>
        <div className="case-quote">
          玄武湖和欧卡方案已覆盖 L4 自动驾驶、三模操控、全景天窗、数字屏和预约制。本项目选择在可变空间、水下观景和夜间互动上形成差异。
        </div>
        <Slide
          src="/works/usv/scene.jpg?v=full"
          alt="景区无人船发展背景"
          caption="水域景区需要新的观光体验；电力推进与无人驾驶技术为产品提供了应用基础。"
        />
        <Slide
          src="/works/usv/competitors.jpg?v=full"
          alt="南京玄武湖与扬州欧卡竞品"
          caption="竞品已具备自动驾驶、远程操控、数字屏和预约服务，但在空间变化与亲水体验上仍有延展空间。"
        />
        <Slide
          src="/works/usv/service.jpg?v=full"
          alt="改进后的服务蓝图"
          caption="服务流程涵盖预约、登船、航行中的舱体开合与灯光互动，以及行程结束后的离船环节。"
        />
      </section>

      <section className="case-section" id="decision">
        <div className="case-section-header">
          <p className="case-index">03 / 09</p>
          <h2>方案迭代：从全封闭游艇到半开放观光艇</h2>
          <p>
            三轮方案分别检验了豪华封闭舱、常规游艇和可变观光空间。每次调整都围绕观景视野、舱内通行、景区运营和产品辨识度展开，最终确定半开放、可折叠的产品方向。
          </p>
        </div>
        <div className="case-shifts">
          <div className="case-shift">
            <span>01</span>
            <div>
              <p className="from">全封闭梯形舱</p>
              <p className="to">内部空间受压，影响乘客走动与观景</p>
            </div>
          </div>
          <div className="case-shift">
            <span>02</span>
            <div>
              <p className="from">常规全封闭游艇</p>
              <p className="to">辨识度不足，通风、登离和造价不利于景区运营</p>
            </div>
          </div>
          <div className="case-shift">
            <span>03</span>
            <div>
              <p className="from">固定形态的观光空间</p>
              <p className="to">半开放舱体配合可折叠顶棚，兼顾观景、天气与私密场景</p>
            </div>
          </div>
        </div>
        <Slide
          src="/works/usv/v1-sketch.jpg?v=full"
          alt="第一版全封闭草图"
          caption="V1 采用全封闭梯形舱体，并在前后设置外露甲板。"
        />
        <div className="case-card">
          <h3>V1 方案评估</h3>
          <p>梯形舱体压缩了有效乘坐空间，也限制了坐姿视野和舱内通行，不符合景区观光对开阔视线与自由走动的要求。</p>
        </div>
        <Slide
          src="/works/usv/v2-sketch.jpg?v=full"
          alt="第二版常规游艇草图"
          caption="V2 调整为更接近现有游艇的全封闭形态。"
        />
        <div className="case-card">
          <h3>V2 方案评估</h3>
          <p>常规游艇形态与已有产品相近，难以建立清晰识别；全封闭结构还会增加通风、登离、维护与制造成本。</p>
        </div>
        <Slide
          src="/works/usv/v3-sketch.jpg?v=full"
          alt="第三版半开放可变方案"
          caption="V3 确定半开放舱体、可折叠顶棚和玻璃船头，使观景、遮蔽与水下观察能够在同一产品中实现。"
        />
      </section>

      <section className="case-section" id="features">
        <div className="case-section-header">
          <p className="case-index">04 / 09</p>
          <h2>功能方案：对应观光、夜间与商务场景</h2>
          <p>
            功能围绕开放观景、封闭私密、夜间互动和安全运营展开。驾驶系统保留自动驾驶、远程遥控与手动驾驶三种模式，便于景区根据航线和运营要求切换。
          </p>
        </div>
        <Slide
          src="/works/usv/interaction.jpg?v=full"
          alt="交互界面与船只相遇灯光"
          caption="两艘船相遇时通过灯光反馈建立互动，让航行过程产生可感知的交流。"
        />
        <Slide
          src="/works/usv/lighting.jpg?v=full"
          alt="灯光与音乐交互"
          caption="游客可控制灯光与音乐，景区可据此组织区别于日间观光的夜间体验。"
        />
      </section>

      <section className="case-section" id="form">
        <div className="case-section-header">
          <p className="case-index">05 / 09</p>
          <h2>造型设计：将产品原则落实到船体</h2>
          <p>
            课程方案确定半开放方向后，后续重建模型重新处理了船体比例、乘客视线、登离方式及舱壁开合关系。开合部分由顶棚概念发展为完整侧舱壁，闭合后仍保持连续的船体轮廓。
          </p>
        </div>
        <Slide
          src="/works/usv/v3-sketch.jpg?v=full"
          alt="新造型方向：半开放、可折叠、玻璃船头"
          caption="课程阶段确立半开放、可折叠和玻璃船头三项造型原则。"
        />
        <Slide
          src="/works/usv/line-drawing.png?v=4"
          alt="新模型线稿图"
          caption="新模型线稿进一步明确船体比例、舱体框架、玻璃分区和传统花格细节。"
        />
      </section>

      <section className="case-section" id="model">
        <div className="case-section-header">
          <p className="case-index">06 / 09</p>
          <h2>最终模型：开放与闭合状态的统一</h2>
          <p>
            新模型重新整合船体、玻璃舱面与红色框架，使开放和闭合状态具有一致的视觉语言。白底与场景渲染分别用于呈现产品细节，以及不同水域环境中的整体效果。
          </p>
        </div>
        <div className="case-grid-2">
          <Slide
            src="/works/usv/model-no-bg.png"
            alt="景区观光无人艇白底渲染"
            caption="白底渲染展示新模型的船体比例、玻璃舱面与红色结构框架。"
          />
          <Slide
            src="/works/usv/render-bg-1.png"
            alt="景区观光无人艇场景渲染 1"
            caption="场景渲染：晨雾山水环境中的日间观光状态。"
          />
        </div>
        <div className="case-grid-2">
          <Slide
            src="/works/usv/render-bg-2.png"
            alt="景区观光无人艇场景渲染 2"
            caption="场景渲染：湖面黄昏与临水建筑环境。"
          />
          <Slide
            src="/works/usv/render-bg-3.png"
            alt="景区观光无人艇场景渲染 3"
            caption="场景渲染：夜间森林与帐篷灯光环境。"
          />
        </div>
      </section>

      <section className="case-section" id="mechanism">
        <div className="case-section-header">
          <p className="case-index">07 / 09</p>
          <h2>开合机构：可变空间的结构实现</h2>
          <p>
            开合结构采用 ADS 7650 滑轨导向，活动扇沿轨道移动并在闭合后形成连续舱壁。框架、挡水檐、集水槽与排水结构共同处理导向、收口和雨水排放。
          </p>
        </div>
        <Slide
          src="/works/usv/structure-design.jpg?v=full"
          alt="结构设计图"
          caption="结构图展示船体主要零件、安装关系与尺寸标注。"
        />
        <div className="case-card">
          <h3>机构组成</h3>
          <p>滑轨和支撑件负责运动路径，活动扇与固定框构成开合面；挡水檐、集水槽和排水槽用于处理水上环境中的密封与排水问题。</p>
        </div>
      </section>

      <section className="case-section" id="interior">
        <div className="case-section-header">
          <p className="case-index">08 / 09</p>
          <h2>内舱与 CMF：乘坐、观景与操作分区</h2>
          <p>
            内舱划分为驾驶区、乘坐区、玻璃观景区和开合机构边界。设计同时考虑登离通道、坐姿视线与活动舱壁的安全距离，并通过材料与灯光建立整体空间氛围。
          </p>
        </div>
        <Slide
          src="/works/usv/interior.png"
          alt="船内陈设图"
          caption="内舱配置包括 L 型沙发、茶几、前部驾驶区和中式花格隔断。"
        />
        <div className="case-card">
          <h3>人机与 CMF</h3>
          <p>驾驶区位于前部，乘坐区布置在舱体中段，船头玻璃用于观察水下环境。CMF 采用深木色船体、红色框架、青绿色花格与暖色灯光，形成现代中式的景区识别。</p>
        </div>
      </section>

      <section className="case-section" id="proof">
        <div className="case-section-header">
          <p className="case-index">09 / 09</p>
          <h2>验证与商业：样机、成本与运营方式</h2>
          <p>
            1:20 样机用于验证产品体量和基本航行能力。材料方案依据景区缓流水域对轻量、抗碰撞和批量制造的要求进行选择；成本核算显示，小批量单艇接近 4 万元，批量生产后约为 3 万元。
          </p>
        </div>
        <Slide
          src="/works/usv/prototype.jpg?v=full"
          alt="1:20 样机展示"
          caption="1:20 样机完成于最终模型重建之前，主要作为产品尺度与开合概念的实物参考。"
        />
        <Slide
          src="/works/usv/running.png"
          alt="样机运行"
          caption="水面运行测试用于确认样机具备基本航行能力。"
        />
        <div className="case-quote">
          运营采用 B2B2C 模式：景区采购和维护船艇，游客通过景区预约日间观光、夜间灯光音乐或商务包艇。产品优先落实开合空间、水下观景和灯光音乐，暂不将 VR 纳入首期范围。
        </div>
        <Slide
          src="/works/usv/cost.jpg?v=full"
          alt="成本核算"
          caption="成本核算：小批量单艇接近 4 万元，采用批量成型工艺后预计约为 3 万元。"
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
