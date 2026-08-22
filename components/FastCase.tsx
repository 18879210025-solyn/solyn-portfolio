import Image from "@/components/Image";
import { profile } from "@/data/profile";

const chapters = [
  { id: "background", n: "01", label: "背景" },
  { id: "workbench", n: "02", label: "工作台" },
  { id: "schedule", n: "03", label: "排期" },
  { id: "activity", n: "04", label: "活动" },
];

function Slide({
  src,
  alt,
  caption,
  badge,
}: {
  src: string;
  alt: string;
  caption?: string;
  badge?: string;
}) {
  return (
    <figure className="case-slide">
      {badge ? <span className="case-slide-badge">{badge}</span> : null}
      <Image src={src} alt={alt} width={1600} height={900} />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

export function FastCase() {
  return (
    <article className="case-page">
      <div className="case-hero">
        <h1>FAST</h1>
        <p className="en">智能投放引擎 · AI Workbench</p>
        <dl className="case-meta-row">
          <div>
            <dt>年份</dt>
            <dd>2026</dd>
          </div>
          <div>
            <dt>类型</dt>
            <dd>AI 工作台 / 体验设计</dd>
          </div>
          <div>
            <dt>角色</dt>
            <dd>设计全栈</dd>
          </div>
        </dl>
        <nav className="case-chapters" aria-label="案例章节">
          {chapters.map((chapter) => (
            <a href={`#${chapter.id}`} key={chapter.id}>
              <span>{chapter.n}</span>
              {chapter.label}
            </a>
          ))}
        </nav>
      </div>

      <section className="case-section" id="background">
        <div className="case-section-header">
          <p className="case-index">01 / 04</p>
          <h2>项目背景</h2>
        </div>

        <p className="case-viz-label">现在要付的成本</p>
        <div className="case-stats">
          <div className="case-stat">
            <strong>3–7</strong>
            <span>个系统进出一次投放</span>
          </div>
          <div className="case-stat">
            <strong>&gt;2h</strong>
            <span>配完一轮的人工时间</span>
          </div>
          <div className="case-stat">
            <strong>100+</strong>
            <span>个触点，各自记各自的优先级</span>
          </div>
        </div>

        <p className="case-viz-label">产品要走到哪</p>
        <dl className="case-horizon">
          <div>
            <dt>短期</dt>
            <dd>有经验的运营助手：开口就能接着配，不用在系统间搬运。</dd>
          </div>
          <div>
            <dt>长期</dt>
            <dd>把结构化工作自动化：规则内的排期、冲突、审批，Agent 自己走完。</dd>
          </div>
        </dl>

        <p className="case-viz-label">Agent 坐在哪</p>
        <div className="case-flow" aria-label="FAST Agent 工作流">
          <div className="case-flow-stage">
            <p className="case-flow-label">入口</p>
            <ul>
              <li>投放平台</li>
              <li>个人助理</li>
              <li>外部引擎</li>
            </ul>
          </div>
          <div className="case-flow-arrow" aria-hidden="true">
            →
          </div>
          <div className="case-flow-stage case-flow-core">
            <p className="case-flow-label">FAST Agent</p>
            <p>澄清槽位 → 按规则规划 → 查冲突</p>
          </div>
          <div className="case-flow-arrow" aria-hidden="true">
            →
          </div>
          <div className="case-flow-stage">
            <p className="case-flow-label">回写</p>
            <ul>
              <li>排期日历</li>
              <li>投放决策</li>
              <li>机会反馈</li>
            </ul>
          </div>
        </div>

        <p className="case-viz-label">三层能力要换掉什么</p>
        <div className="case-shifts case-shifts-row">
          <div className="case-shift">
            <span>01</span>
            <div>
              <p className="from">营销系统各自为政</p>
              <p className="to">一次开口覆盖全触点</p>
            </div>
          </div>
          <div className="case-shift">
            <span>02</span>
            <div>
              <p className="from">人在后台里串联每一步</p>
              <p className="to">规则内的结构化工作，Agent 自己走完</p>
            </div>
          </div>
          <div className="case-shift">
            <span>03</span>
            <div>
              <p className="from">做完才知道撞了节、占错位</p>
              <p className="to">排期和名单上先看见优先级与节日</p>
            </div>
          </div>
        </div>
      </section>

      <section className="case-section" id="workbench">
        <div className="case-section-header">
          <p className="case-index">02 / 04</p>
          <h2>首页</h2>
          <p>
            为了符合用户习惯，我们首先对标市场上认可度最高的三大平台。三家首页都把输入放在正中，进门就能写。FAST
            用同一结构：运营进来直接描述活动，不必先熟悉一套新后台。
          </p>
        </div>
        <p className="case-viz-label">竞品首页</p>
        <div className="case-grid-3 case-compete-row">
          <Slide
            badge="ChatGPT"
            src="/works/fast/compete-chatgpt-ui.png"
            alt="ChatGPT 首页：极简沉浸式起始页，输入居中"
            caption="起始页极简、沉浸，白底黑字，注意力集中在输入。不必先理解导航，直接表达需求。"
          />
          <Slide
            badge="Gemini"
            src="/works/fast/compete-gemini-ui.jpg"
            alt="Gemini 首页：弥散极简，输入居中"
            caption="弥散风格加极简，视觉更舒适。除进入页的色块外，结构和 GPT 接近：进门就能写。"
          />
          <Slide
            badge="Claude"
            src="/works/fast/compete-claude-ui.png"
            alt="Claude 首页：扁平工业风，输入下带快捷入口"
            caption="更理性、工业，扁平化，面向高阶生产力用户。问候语加居中输入，下方放任务快捷入口。"
          />
        </div>
        <p className="case-viz-label">工作台结构</p>
        <Slide src="/works/fast/workbench.png" alt="FAST 工作台首页：对话框、猫猫与场景方案" />
        <p className="case-viz-label">首页排布原因与优势</p>
        <div className="case-grid-3">
          <div className="case-card">
            <h3>对话</h3>
            <p>输入框放在页面中心。进来写主题、人群、时间和目标即可，不用先理解后台层级。</p>
          </div>
          <div className="case-card">
            <h3>猫猫</h3>
            <p>配投放要长时间对着屏幕。猫放在输入框上，给视线一个落点，也让连续工作有一点停顿。</p>
          </div>
          <div className="case-card">
            <h3>场景方案</h3>
            <p>
              下方卡片按近期使用归纳高频活动，没想好主题时可以先点一张。点开后带出提示词示例，方便还不会写的人上手。
            </p>
          </div>
        </div>
      </section>

      <section className="case-section" id="schedule">
        <div className="case-section-header">
          <p className="case-index">03 / 04</p>
          <h2>排期：AI coding 设计项目的全流程体验</h2>
          <p>先跑通线上业务，再从设计标准与视觉感受来进行迭代。</p>
        </div>

        <p className="case-viz-label">改之前</p>
        <div className="case-pair-media">
          <Slide
            badge="现网"
            src="/works/fast/schedule-before.png"
            alt="资源位排期改版前：审核色块占中心，表格挤、颜色不统一"
          />
          <div className="case-pair-notes">
            <div className="case-card">
              <h3>两大色块</h3>
              <p>审核通过、审核中占住视觉中心，几乎不帮人做排期判断。</p>
            </div>
            <div className="case-card">
              <h3>表格乱</h3>
              <p>行距、对齐和条带长度都不稳，扫一个月要对很久。</p>
            </div>
            <div className="case-card">
              <h3>颜色不统一</h3>
              <p>审核绿、橙和条带抢视线，等级看不出来。</p>
            </div>
          </div>
        </div>

        <p className="case-viz-label is-lg">竞品分析</p>
        <figure className="case-collage">
          <Image
            src="/works/fast/compete-schedule-collage.jpg"
            alt="资源位排期竞品分析：从产品分析到 Planner、Asana、Monday、板栗看板、Float 与总结"
            width={2590}
            height={5045}
          />
        </figure>

        <p className="case-viz-label is-lg">规范整理</p>
        <Slide
          src="/works/fast/spec-126.png"
          alt="亮蓝品牌版设计规范：颜色、字号、圆角与 S/A/B/C 等级标签"
          caption="先按照和项目组商量的结果给视觉设定规范，方便后续统一。在这个基础上，我们再进行迭代和尝试，不完全拘泥于规范，但又和规范统一、融合。"
        />

        <p className="case-viz-label">改之后</p>
        <Slide
          badge="改后"
          src="/works/fast/schedule-after.png"
          alt="资源位排期改版后：等级进左栏，节日进表头"
          caption="色块让出中心。调整色块的作用和形成的视觉效果，反复尝试得到最终活动的配色；由设计提出添加对于节日的突出和便捷跳转方式，便于运营查看。"
        />

        <p className="case-viz-label">测试：标签颜色区分度不够</p>
        <div className="case-grid-2">
          <div className="case-card">
            <p>
              上线后根据产品测试反馈，标签的颜色对比度不明显，需要进行迭代，借助 AI
              出具方案，并在方案基础上进行调整，得到新一版标签配色方案。
            </p>
          </div>
          <div className="case-card">
            <p>此外，统一了全局标签规范，并将活动等级名称与资源位区分开。</p>
          </div>
        </div>
        <div className="case-tags-board">
          <Image
            src="/works/fast/level-tags.png"
            alt="测试后调整的 S、A、B、C 四级等级标签"
            width={776}
            height={236}
          />
        </div>
        <div className="case-path" aria-label="从代码到最终稿">
          <div className="case-path-node">代码</div>
          <div className="case-path-edge">
            <span>AI</span>
            <span aria-hidden="true">→</span>
          </div>
          <div className="case-path-node">设计稿</div>
          <div className="case-path-edge">
            <span>设计师</span>
            <span aria-hidden="true">→</span>
          </div>
          <div className="case-path-node">迭代设计方案</div>
          <div className="case-path-edge">
            <span>AI</span>
            <span aria-hidden="true">→</span>
          </div>
          <div className="case-path-node">线上代码</div>
          <div className="case-path-edge">
            <span>设计师 + AI</span>
            <span aria-hidden="true">→</span>
          </div>
          <div className="case-path-node">最终稿</div>
        </div>

        <div className="case-card">
          <h3>总结</h3>
          <p>
            通过实际项目进行 AI coding 能力的锻炼，同时体验 AI
            实际项目的全流程，过程中不断与产品和研发进行沟通，最后得到高质量的 AI 作品。
          </p>
        </div>
      </section>

      <section className="case-section" id="activity">
        <div className="case-section-header">
          <p className="case-index">04 / 04</p>
          <h2>活动：本身改动空间不大，但是依然存在细节问题</h2>
          <p>不能也不用做过多的改动，但是如何满足最便于运营查看的要求是关键。</p>
        </div>

        <p className="case-viz-label">改之前</p>
        <div className="case-pair-media">
          <Slide
            badge="现网"
            src="/works/fast/activity-before.png"
            alt="活动管理改版前：等级作为独立列"
          />
          <div className="case-pair-notes">
            <div className="case-card">
              <h3>登记混乱</h3>
              <p>不同的等级混在一起，难以辨别背后含义。</p>
            </div>
            <div className="case-card">
              <h3>视觉中心混乱</h3>
              <p>不同的颜色、不同长度的内容，意义不明的等级让人无法一眼发现重点是哪些列。</p>
            </div>
            <div className="case-card">
              <h3>间隔混乱</h3>
              <p>内容间隔导致画面有些地方过于拥挤，有些又很奇怪的稀疏。</p>
            </div>
          </div>
        </div>

        <p className="case-viz-label is-lg">竞品分析</p>
        <div className="case-section-header">
          <p>
            参考市面上使用表格页面以及专注于运营的页面，进行视觉上的再调整，以期符合运营同学的习惯和工作流程。
          </p>
        </div>
        <figure className="case-collage">
          <Image
            src="/works/fast/compete-activity-collage.jpg"
            alt="活动管理竞品分析：从产品分析到 Cvent、Asana、钉钉与视觉化投放表"
            width={2590}
            height={3838}
          />
        </figure>

        <p className="case-viz-label">改之后</p>
        <Slide
          badge="改后"
          src="/works/fast/activity-after.png"
          alt="活动管理改版后：等级贴在活动名称左侧"
          caption="整体更加整齐有序；颜色突出符合运营同学的使用习惯；删除冗余的列，内容更加精简。"
        />

        <div className="case-card">
          <h3>总结</h3>
          <p>
            这是一次设计全栈的体验，从先行只跑通功能进行初步测试，到最后的视觉呈现效果。本人作为设计师不光进行
            AI coding 的能力学习，同时也更加认识到 AI
            对于设计真正起到的作用。提效是一方面，身为设计师更能明显感知到我们的页面具体需要什么，生成的设计稿哪里不对、不符合我们的系统框架和项目逻辑。我会以这个项目为蓝本继续探索
            AI 下的产品和设计。当设计不单单是设计，也许我们做到的更多、更好。
          </p>
        </div>
      </section>

      <div className="contact-footer">
        <div>
          <h2>欢迎联系</h2>
          <p>作品持续更新中。如需完整过程文件，可以直接来信。</p>
        </div>
        <a className="btn btn-solid" href={`mailto:${profile.email}`}>
          发送邮件
        </a>
      </div>
    </article>
  );
}
