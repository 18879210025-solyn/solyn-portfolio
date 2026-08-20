import Image from "@/components/Image";
import { profile } from "@/data/profile";

const chapters = [
  { id: "judgment", n: "01", label: "判断" },
  { id: "entry", n: "02", label: "入口" },
  { id: "language", n: "03", label: "语言" },
  { id: "schedule", n: "04", label: "排期" },
  { id: "activity", n: "05", label: "活动" },
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

export function FastCase() {
  return (
    <article className="case-page">
      <div className="case-hero">
        <h1>FAST</h1>
        <p className="en">智能投放引擎 · AI Workbench</p>
        <p>
          给已经带着活动进来的人做工作台，不是给闲聊做一个沉浸页。对话只负责开口；优先级、档期和活动名单必须说同一种话。
        </p>
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
            <dd>工作台结构、排期与活动改版</dd>
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

      <section className="case-section" id="judgment">
        <div className="case-section-header">
          <p className="case-index">01 / 05</p>
          <h2>一次投放要跨系统，不是因为少了一个对话框</h2>
          <p>
            运营配一次投放要进出 3–7 个系统、耗掉两小时以上。缺口不在「不会聊天」，而在排期、活动、触点各说各的：有人记得这条是
            S 级，有人只看见它还在审核，日历上撞了节也要事后才发现。
          </p>
          <p>
            ChatGPT、Gemini、Claude 都把人留在一个空白输入框里，因为它们的用户是空手进来的。FAST
            的用户进门时已经有主题、人群、时间和目标。再做一个沉浸对话，只是把旧后台和新聊天窗拼在一起。
          </p>
        </div>
        <div className="case-quote">
          我要问的不是「Agent 界面怎么更像 ChatGPT」，而是：一个已经拿着活动的人，怎样开口、怎样看日历、怎样扫名单，才不用再靠自己脑内对齐。
        </div>
      </section>

      <section className="case-section" id="entry">
        <div className="case-pair">
          <div className="case-pair-copy">
            <p className="case-index">02 / 05</p>
            <h2>所以首页要接住「我已经有一个活动」</h2>
            <p>
              输入框仍然在正中——开口必须便宜。但它下面不是气氛装饰。四条快捷意图是运营每天都会问的句子，写成可点的，就不必每次重新组织语言。
            </p>
            <p>
              再往下的场景不是运营位海报。异地出行、红包提醒、秋奶是已经跑通过的配法，放在首页是为了让人从「有过的解」接着配，而不是从零描述。
            </p>
            <p>
              历史对话留在左侧，是因为投放是连续工作，不是单次提问。整屏的结构是：开口、接住高频、接住现成场景、接住上次没做完的。
            </p>
          </div>
          <Slide
            src="/works/fast/workbench.png"
            alt="FAST Agent 工作台：输入、快捷意图与场景方案收在同一屏"
          />
        </div>
      </section>

      <section className="case-section" id="language">
        <div className="case-section-header">
          <p className="case-index">03 / 05</p>
          <h2>先做一套优先级，再让两张表说同一种话</h2>
          <p>
            如果排期用审核色、活动表用另一套列，Agent 和人对的仍是两套世界。人在对话里说「这是
            S 级」，转到排期却先看见绿和橙，转到名单又要在名称和等级列之间跳视。
          </p>
          <p>
            所以先收成四个标签。S / A / B / C
            不是装饰，是后面两页共用的语言：占位多重、扫表先看谁，都读这一套。
          </p>
          <div className="case-inline-fig">
            <Image
              src="/works/fast/level-tags.png"
              alt="S、A、B、C 四级等级标签"
              width={220}
              height={48}
            />
            <p>同一组件进排期左栏，也贴在活动名称左侧。下面两页是这套语言的落地，不是两张互不相干的改版。</p>
          </div>
        </div>
      </section>

      <section className="case-section" id="schedule">
        <div className="case-pair">
          <div className="case-pair-copy">
            <p className="case-index">04 / 05</p>
            <h2>排期要回答的是谁占着、会不会撞节</h2>
            <p>
              旧版用绿和橙报审核状态。流程看得见，决策看不见：这段资源该不该给它、它和节日叠不叠，仍然要进详情。
            </p>
            <p>
              改的时候把「过了没有」让到后面。左栏改读等级，表头加上下一个节日。运营在轴上先完成的判断，是占位和节奏，不是审批进度。
            </p>
          </div>
          <div className="case-compare">
            <Slide
              src="/works/fast/schedule-before.png"
              alt="资源位排期改版前，条带按审核状态上色"
              caption="当时：状态色主导。周末和今日被标出来，级别仍藏在详情里。"
            />
            <Slide
              src="/works/fast/schedule-after.png"
              alt="资源位排期改版后，等级与节日进入时间轴"
              caption="现在：等级进左栏，节日进表头。轴上先看见这是什么级别、会不会撞节。"
            />
          </div>
        </div>
      </section>

      <section className="case-section" id="activity">
        <div className="case-pair">
          <div className="case-pair-copy">
            <p className="case-index">05 / 05</p>
            <h2>扫名单时，名字就应该带着优先级</h2>
            <p>
              活动表是另一处要对齐的地方。旧表把预算等级、节日等级拆成两列，信息一点没少，视线却在名称和标签之间来回跳——这和排期旧版是同一个错：优先级没有长在主对象上。
            </p>
            <p>
              标签贴到名称左侧之后，一行的第一眼就是「这是谁、多重」。状态仍用图标色，因为它回答的是流程，不是占位。
            </p>
          </div>
          <div className="case-compare">
            <Slide
              src="/works/fast/activity-before.png"
              alt="活动管理改版前，等级作为独立列"
              caption="当时：等级是列。扫一行要拼三块——名称、等级、状态。"
            />
            <Slide
              src="/works/fast/activity-after.png"
              alt="活动管理改版后，等级贴在活动名称左侧"
              caption="现在：名称即优先级。和排期读同一套标签，状态继续当第二眼。"
            />
          </div>
        </div>
        <div className="case-quote">
          三张界面要一起成立：开口时不用从零组织语言，看日历时先看见级别和节日，扫名单时名字自己带着优先级。少的不是功能，是同一种结构。
        </div>
      </section>

      <div className="contact-footer">
        <div>
          <h2>欢迎联系</h2>
          <p>FAST 案例单独预览中。如需完整过程文件，可以直接来信。</p>
        </div>
        <a className="btn" href={`mailto:${profile.email}`}>
          发送邮件
        </a>
      </div>
    </article>
  );
}
