import Image from "@/components/Image";
import { profile } from "@/data/profile";

const chapters = [
  { id: "background", n: "01", label: "项目背景与设计挑战" },
  { id: "discovery", n: "02", label: "用户洞察与机会定义" },
  { id: "decision", n: "03", label: "概念生成与方案迭代" },
  { id: "experience", n: "04", label: "最终设计与核心体验" },
  { id: "engineering", n: "05", label: "工程深化与样机验证" },
  { id: "business", n: "06", label: "商业落地与项目总结" },
];

function ChapterHeader({ index, children }: { index: number; children: React.ReactNode }) {
  const chapter = chapters[index];
  return (
    <div className="case-section-header">
      <p className="case-index">{chapter.n} / 06</p>
      <h2>{chapter.label}</h2>
      <p>{children}</p>
    </div>
  );
}

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
    <article className="case-page usv-case">
      <div className="case-hero">
        <h1>无人艇</h1>
        <p className="en">景区观光无人艇设计</p>
        <p>
          面向水域景区的观光无人艇设计。项目从游客与运营场景出发，探索无人驾驶技术进入水上游览后，如何回应不同游客的体验需求。
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

      <section className="case-section" id="background">
        <ChapterHeader index={0}>
          景区无人艇正在解决水上无人移动的问题。电力推进与无人驾驶为游览提供了新的基础，但不同游客、天气与游览场景，对乘坐空间和观景方式提出了不同要求。
        </ChapterHeader>
        <Slide src="/works/usv/ink-wash.png" alt="景区观光无人艇项目主视觉" caption="以水域景区为场景，探索船艇与游览环境的关系。" />
        <Slide src="/works/usv/scene.jpg?v=full" alt="景区无人船发展背景研究" caption="景区观光、技术进步与环保需求共同推动水上无人游览的发展。" />
        <div className="case-card usv-module">
          <h3>核心设计挑战</h3>
          <p>如何让无人观光艇从固定的水上交通工具，转变为能够适应不同场景与游览需求的水上体验空间？</p>
        </div>
      </section>

      <section className="case-section" id="discovery">
        <ChapterHeader index={1}>
          从游客需求、完整服务流程与现有产品出发，明确无人观光体验中尚未被充分回应的问题。
        </ChapterHeader>
        <div className="case-card usv-module">
          <h3>用户研究</h3>
          <p>年轻游客关注沉浸感与拍照体验；家庭游客重视安全、舒适和亲水观景；情侣及商务用户需要相对独立的乘坐空间。</p>
        </div>
        <div className="usv-module">
          <h3>服务蓝图</h3>
          <Slide src="/works/usv/service.jpg?v=full" alt="原有服务蓝图：预约、登船、游览与离船" caption="沿预约、登船、航行与离船梳理体验触点；原图保留了服务改进设想，用于定位游览过程中的机会。" />
        </div>
        <div className="usv-module">
          <h3>竞品研究</h3>
          <Slide src="/works/usv/competitors.jpg?v=full" alt="南京玄武湖与扬州欧卡竞品研究" caption="现有方案已覆盖自动驾驶、远程操控、数字屏和预约服务，空间适应与亲水体验仍有延展空间。" />
        </div>
        <div className="case-card usv-module">
          <h3>关键洞察</h3>
          <p>能够完成航行，并不等于能够满足完整的游览体验。固定的空间边界难以兼顾多类游客，观景方式集中在水面，服务内容也有从日间延伸至夜间的空间。</p>
        </div>
        <div className="usv-module">
          <h3>设计机会</h3>
          <div className="case-grid-3">
            <div className="case-card"><h3>可变空间</h3><p>不同用户、天气和场景需要不同程度的开放与封闭空间。</p></div>
            <div className="case-card"><h3>沉浸体验</h3><p>从水面观景进一步强化游客与水域环境之间的联系。</p></div>
            <div className="case-card"><h3>昼夜互动</h3><p>从单一日间观光拓展夜间灯光、音乐及互动体验。</p></div>
          </div>
        </div>
        <div className="case-card usv-module">
          <h3>产品定义</h3>
          <p>面向水域景区，以电力推进与无人驾驶为基础，设计兼顾空间适应、亲水观景与昼夜游览的无人观光艇，让水上交通承载更完整的游览体验。</p>
        </div>
      </section>

      <section className="case-section" id="decision">
        <ChapterHeader index={2}>
          将设计机会转化为概念判断：空间能否回应场景变化，视线能否贴近水域，形态能否承载不同游览活动。三轮方案围绕这些问题逐步推进。
        </ChapterHeader>
        <div className="usv-module">
          <h3>第一版：全封闭</h3>
          <Slide src="/works/usv/v1-sketch.jpg?v=full" alt="第一版全封闭梯形舱草图" caption="以完整舱体建立遮蔽空间，前后保留外露甲板。" />
          <div className="case-card"><p>空间边界较强，梯形舱体压缩内部空间，削弱开放观景与亲水体验。下一轮转向更开放的观景空间。</p></div>
        </div>
        <div className="usv-module">
          <h3>第二版：开放式探索</h3>
          <Slide src="/works/usv/v2-sketch.jpg?v=full" alt="第二版空间与船体形态探索草图" caption="保留第二版原始草图，呈现从封闭舱体向开放观景方向调整的过程。" />
          <div className="case-card"><p>改善开放体验，但空间仍然固定，对天气、隐私等不同场景的适应性有限。仅改变开放程度，还不足以兼顾多种需求。</p></div>
        </div>
        <div className="usv-module">
          <h3>第三版：可变半开放</h3>
          <Slide src="/works/usv/v3-sketch.jpg?v=full" alt="第三版半开放舱体、可折叠顶棚与玻璃船头草图" caption="通过半开放舱体、可折叠顶棚与玻璃船头，探索空间适应与亲水观景的结合。" />
          <div className="case-card"><h3>选择第三版</h3><p>设计重点从“选择开放还是封闭”转向“让空间本身能够适应不同场景”。这一方向将观景、遮蔽与独立空间纳入同一方案，成为后续深化的基础。</p></div>
        </div>
        <div className="usv-module">
          <h3>造型深化</h3>
          <p>课程阶段确立方向后，结合阶段样机与项目复盘继续重建模型，调整船体比例、乘客视线、登离方式及舱壁关系；顶棚概念进一步发展为完整侧舱壁。</p>
          <Slide src="/works/usv/line-drawing.png?v=4" alt="第三版方向深化后的船体线稿" caption="线稿明确船体比例、舱体框架、玻璃分区与传统花格细节。" />
        </div>
        <div className="usv-module">
          <h3>设计原则</h3>
          <div className="case-grid-3">
            <div className="case-card"><h3>开放</h3><p>减少空间对视线与亲水体验的阻隔。</p></div>
            <div className="case-card"><h3>可变</h3><p>让同一空间回应不同场景与需求。</p></div>
            <div className="case-card"><h3>沉浸</h3><p>让游客更直接地感知水域与环境。</p></div>
          </div>
        </div>
      </section>

      <section className="case-section" id="experience">
        <ChapterHeader index={3}>
          当前最终方案以连续的船体轮廓、玻璃舱面与红色框架形成统一形象。以下从游客的视角呈现空间、观景与昼夜体验。
        </ChapterHeader>
        <Slide src="/works/usv/render-bg-2.png" alt="当前最终方案的临水场景效果图" caption="最终方案展示：船艇融入临水建筑与自然景观。" />
        <div className="usv-module">
          <h3>可变空间：开放状态 ↔ 封闭状态</h3>
          <div className="case-grid-2">
            <Slide src="/works/usv/model-no-bg.png" alt="开放状态的最终模型" caption="开放状态：拓宽观景视线，感受水面空气与周围环境。" />
            <Slide src="/works/usv/render-bg-3.png" alt="封闭状态的景区观光艇" caption="封闭状态：提供遮蔽与相对独立的空间，回应天气变化及私密游览需求。" />
          </div>
        </div>
        <div className="usv-module">
          <h3>沉浸观景</h3>
          <p>船头玻璃观景区将视线延伸至近水与水下环境；通透的舱面保持与沿岸景观的联系，让乘船过程成为观看水域的体验。</p>
          <Slide src="/works/usv/render-bg-1.png" alt="玻璃船头与山水环境中的观光场景" caption="日间观景：在行进中感知水面、山林与沿岸景色；玻璃船头承载近水观察的设计意图。" />
        </div>
        <div className="usv-module">
          <h3>昼夜体验</h3>
          <div className="case-grid-2">
            <Slide src="/works/usv/lighting.jpg?v=full" alt="灯光与音乐体验的阶段展示" caption="夜间通过灯光与音乐营造游览氛围，原有阶段展示保留体验探索过程。" />
            <Slide src="/works/usv/interaction.jpg?v=full" alt="游客操作界面与艇间灯光互动" caption="游客可调节灯光与音乐；两艇相遇时以灯光反馈形成互动。" />
          </div>
        </div>
        <div className="usv-module">
          <h3>内舱与色彩材质</h3>
          <Slide src="/works/usv/interior.png" alt="最终方案内舱效果：沙发、茶几与花格隔断" caption="转角沙发、茶几与中式花格构成休憩空间；深木色船体、红色框架、青绿色花格与暖色灯光延续整体视觉语言。" />
        </div>
      </section>

      <section className="case-section" id="engineering">
        <ChapterHeader index={4}>
          从机构、防水与排水、人机空间到阶段样机，说明方案如何实现，以及已有验证的范围。
        </ChapterHeader>
        <div className="usv-module">
          <h3>开合机构</h3>
          <p>开合方案采用滑轨导向，活动扇沿轨道移动，与固定框共同构成舱壁。滑轨与支撑件限定运动路径，闭合时保持舱面连续。</p>
          <Slide src="/works/usv/structure-design.jpg?v=full" alt="船体零件、结构安装关系与尺寸图" caption="保留原有结构图，展示主要零件、安装关系与尺寸标注，作为工程深化的基础。" />
        </div>
        <div className="usv-module usv-movable-structures">
          <h3>可动结构深化</h3>
          <p>在整体开合原理的基础上，进一步梳理侧边舱壁与正面出入口的装配关系。以下展示设计阶段的机构方案。</p>
          <div className="usv-structure-group">
            <h4>01｜侧边推拉结构</h4>
            <div className="case-grid-2 usv-structure-pair">
              <figure className="case-slide">
                <Image src="/works/usv/side-sliding-assembly.png" alt="侧边推拉结构整体装配：多个活动框体与底部轨道的关系" width={1381} height={773} />
                <figcaption>
                  <strong>侧边推拉结构｜整体装配</strong>
                  <p>侧边舱壁采用推拉式活动结构，通过底部轨道约束活动框体的运动路径，使舱体能够在开放与相对封闭状态之间进行空间转换。</p>
                </figcaption>
              </figure>
              <figure className="case-slide">
                <Image src="/works/usv/side-track-section.jpg" alt="侧边推拉结构局部剖面：底部型材、轨道与多层活动框体的装配关系" width={1920} height={1080} />
                <figcaption>
                  <strong>底部轨道｜局部装配关系</strong>
                  <p>对侧边活动结构的底部连接关系进一步深化，通过轨道、导向结构与活动框体之间的配合约束运动路径，并在有限的船体边界内组织多层结构的收纳与展开。</p>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="usv-structure-group">
            <h4>02｜正面进出门结构</h4>
            <figure className="case-slide usv-entrance-structure">
              <Image src="/works/usv/front-entrance-door.png" alt="正面乘客进出门的独立开合结构，与侧边推拉舱壁相区分" width={393} height={313} />
              <figcaption>
                <strong>正面进出门｜开合结构</strong>
                <p>除侧边可变舱壁外，正面乘客出入口采用独立的开合结构，在保持整体框架连续性的同时形成明确的上下船通道，并与侧边可动结构共同构成船体的多状态开启方式。</p>
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="case-card usv-module">
          <h3>防水与排水</h3>
          <p>挡水檐用于减少雨水进入接缝，集水槽与排水槽组织雨水排放；框架收口与活动面密封需结合实际水上使用条件进一步验证。</p>
        </div>
        <div className="case-card usv-module">
          <h3>人机与空间验证</h3>
          <p>结合本章结构尺寸图检查前部驾驶区、中段座椅与乘坐空间、登离通道及坐姿视野，同时留出活动舱壁的安全距离。阶段模型用于观察体量与布置关系，实际乘坐舒适性仍需足尺验证。</p>
        </div>
        <div className="usv-module">
          <h3>1:20 阶段性样机验证</h3>
          <div className="case-quote">课程阶段方案 → 1:20 样机 → 水面测试 → 项目复盘 → 后续深化 → 当前最终方案</div>
          <div className="case-grid-2">
            <Slide src="/works/usv/prototype.jpg?v=full" alt="课程阶段的1:20实体样机" caption="样机制作于最终模型重建之前，用于观察产品体量、空间布置与开合概念。" />
            <Slide src="/works/usv/running.png" alt="阶段样机水面运行测试照片" caption="水面测试确认阶段样机具备基本航行能力，不代表当前最终方案已完成整艇验证。" />
          </div>
          <div className="case-card"><h3>项目复盘与后续深化</h3><p>阶段实践为后续船体重建、舱壁开合与内舱布置提供参考。当前最终方案仍需继续验证完整机构、防水性能与足尺人机关系。</p></div>
        </div>
      </section>

      <section className="case-section" id="business">
        <ChapterHeader index={5}>
          以景区采购、维护与游客预约为基础，将产品放回实际运营场景，评估应用价值与初步成本。
        </ChapterHeader>
        <div className="case-card usv-module">
          <h3>景区运营模式</h3>
          <p>由景区采购和维护船艇，游客通过景区预约游览。驾驶系统保留自动驾驶、远程遥控与手动驾驶三种模式，供景区按航线与管理需求组织运营。</p>
        </div>
        <div className="case-card usv-module">
          <h3>场景价值</h3>
          <p>日间承接自然观光，夜间延伸灯光音乐活动，并为需要独立空间的游客提供包艇选择，使同一船艇能够服务不同游览时段和客群。</p>
        </div>
        <div className="case-card usv-module">
          <h3>初步成本评估</h3>
          <p>原有估算中，小批量单艇接近 4 万元，批量生产后约为 3 万元。材料选择考虑景区缓流水域中的轻量、抗碰撞与批量制造需求；该估算作为方案阶段参考，后续需随工程深化更新。</p>
          <details className="usv-cost">
            <summary>查看原始成本分析图</summary>
            <Slide src="/works/usv/cost.jpg?v=full" alt="方案阶段的原始成本核算图" caption="保留原始核算依据，供展开查阅。" />
          </details>
        </div>
        <div className="case-card usv-module">
          <h3>项目总结</h3>
          <p>项目从景区游客需求出发，经过概念迭代、阶段样机与复盘，逐步形成当前方案。核心收获是将无人航行能力与具体游览需求联系起来，并在体验设想、形态表达和工程验证之间持续推进。</p>
        </div>
        <Slide src="/works/usv/render-3.png" alt="当前最终方案在开阔水面的效果图" caption="让无人观光艇成为适应水域游览的体验空间。" />
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
