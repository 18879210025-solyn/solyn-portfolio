import Image from "@/components/Image";
import { profile } from "@/data/profile";

const chapters = [
  { id: "product", n: "01", label: "定义" },
  { id: "discovery", n: "02", label: "发现" },
  { id: "users", n: "03", label: "用户" },
  { id: "system", n: "04", label: "系统" },
  { id: "structure", n: "05", label: "结构" },
  { id: "form", n: "06", label: "形态" },
  { id: "prototype", n: "07", label: "样机" },
  { id: "platform", n: "08", label: "平台" },
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
      <Image src={src} alt={alt} width={1800} height={1013} />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

export function TentCase() {
  return (
    <article className="case-page">
      <div className="case-hero">
        <h1>帐篷背包</h1>
        <p className="en">Modular Foldable Tent Backpack</p>
        <p>
          把闲置的露营装备折进日常背包，再用同一件产品把飞鸽、用户和营地组织方接成一套骑行露营系统。
        </p>
        <dl className="case-meta-row">
          <div>
            <dt>年份</dt>
            <dd>2024</dd>
          </div>
          <div>
            <dt>类型</dt>
            <dd>产品设计 / 服务系统</dd>
          </div>
          <div>
            <dt>交付</dt>
            <dd>折叠结构、样机、系统、App</dd>
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
          <h2>定义：一件装备，两套形态，一套营地</h2>
          <p>
            不是再做一顶更好的帐篷，而是让帐篷在不出门的日子里仍然可以作为背包在生活中使用。
          </p>
        </div>
        <Slide
          src="/works/tent/renders.png?v=ppt"
          alt="帐篷形态与背包形态效果"
          caption="展开是带天幕的营地，收起是能背、能提的日常包。同一件东西服务出门和日常。"
        />
      </section>

      <section className="case-section" id="discovery">
        <div className="case-section-header">
          <p className="case-index">02 / 09</p>
          <h2>发现：不是缺帐篷，是买了用不上</h2>
          <p>
            装备把人挡在第一步：租的不放心，买的平时占地。城市骑游起来之后，产品按短途、集体、说走就走来做。
          </p>
        </div>
        <div className="case-grid-2">
          <Slide
            src="/works/tent/origin.png?v=ppt"
            alt="课题来源：社会现象、个人经历、周围观察"
            caption="社会、个人、周围观察，结论都是装备门槛，不是露营没人喜欢。"
          />
          <Slide
            src="/works/tent/cycling.png?v=ppt"
            alt="城市骑游成为短途出行新方式"
            caption="长途受限之后，城市骑游成了轻旅行。后面的折叠和模块都按这个节奏。"
          />
        </div>
      </section>

      <section className="case-section" id="users">
        <div className="case-section-header">
          <p className="case-index">03 / 09</p>
          <h2>用户：说走就走的人，和带孩子出门的人</h2>
          <p>
            多数人没有固定露营节奏，更倾向短途、和家人朋友一起。专业装备不是他们要的。
          </p>
        </div>
        <div className="case-grid-2">
          <Slide
            src="/works/tent/persona1.png?v=ppt"
            alt="用户画像：大学生小桃"
            caption="小桃要说走就走。机会点是装备能当日常包，不然买了进柜子。"
          />
          <Slide
            src="/works/tent/persona2.png?v=ppt"
            alt="用户画像：带孩子的上班族天明"
            caption="天明要短途家庭露营。机会点是单人帐能拼，不用另买一套更大的。"
          />
        </div>
        <Slide
          src="/works/tent/scenes.png?v=ppt"
          alt="单人、家庭、朋友与城市公园或郊区营地"
          caption="人数和场地会变，基本单元不能变。后面的模块化是从这里来的。"
        />
      </section>

      <section className="case-section" id="system">
        <div className="case-section-header">
          <p className="case-index">04 / 09</p>
          <h2>系统：产品是节点，用来接上三方</h2>
          <p>
            乱的不只是装备，还有组织和服务。产品把品牌、用户、组织方接到同一张网上。
          </p>
        </div>
        <div className="case-grid-2">
          <Slide
            src="/works/tent/stakeholders.png?v=ppt"
            alt="利益相关者：品牌、制造、用户、组织方与社会"
            caption="要看的是谁和谁交接：产品连品牌和组织方，系统连用户和组织方。"
          />
          <Slide
            src="/works/tent/ecosystem.png?v=ppt"
            alt="以飞鸽为例的骑行露营休闲生态服务系统"
            caption="飞鸽不只卖车。用这件产品进露营，同时把管理平台交给组织方。"
          />
        </div>
      </section>

      <section className="case-section" id="structure">
        <div className="case-section-header">
          <p className="case-index">05 / 09</p>
          <h2>结构：帐篷怎么折进一个背包</h2>
          <p>
            摊开面积远大于背包，还不能剪开再拼。下面三步是幻灯片里没写成决策的否决。
          </p>
        </div>
        <div className="case-shifts">
          <div className="case-shift">
            <span>01</span>
            <div>
              <p className="from">折纸和机械铰链</p>
              <p className="to">布料软、面积大，硬结构压不进去，也背着不舒服</p>
            </div>
          </div>
          <div className="case-shift">
            <span>02</span>
            <div>
              <p className="from">剪开帐篷再拉链拼回</p>
              <p className="to">转化必须可逆，剪开就不再是同一件产品</p>
            </div>
          </div>
          <div className="case-shift">
            <span>03</span>
            <div>
              <p className="from">普通双肩包轮廓</p>
              <p className="to">按 6:1 折完仍然过长，改成可控制装物长度的登山包</p>
            </div>
          </div>
        </div>
        <div className="case-grid-2">
          <Slide
            src="/works/tent/fold-choice.png?v=ppt"
            alt="折叠方式：从折纸转向衣物折叠"
            caption="折纸达不到预期，转向衣物的折叠、捆扎、卷曲。"
          />
          <Slide
            src="/works/tent/fishnet.png?v=ppt"
            alt="渔网模型：从背包帐篷结构到有形概念"
            caption="收到有形概念：带天幕的 1–2 人帐，可拼接，可折叠转化。"
          />
        </div>
        <Slide
          src="/works/tent/storyboard.png?v=ppt"
          alt="帐篷到背包的六步折叠"
          caption="底布始终在，六个棱始终露着，才能重新接入骨架。"
        />
        <Slide
          src="/works/tent/adjust.png?v=ppt"
          alt="实地展开后对折叠方案的调整"
          caption="实地展开不是整块平面。顶布大于底布，方案在实物上改。"
        />
      </section>

      <section className="case-section" id="form">
        <div className="case-section-header">
          <p className="case-index">06 / 09</p>
          <h2>形态：飞鸽蓝进露营，单帐能拼成营地</h2>
          <p>
            颜色从「有蓝天的地方就有飞鸽」扩出去。尺寸按人机定，不是按好看定。
          </p>
        </div>
        <div className="case-grid-2">
          <Slide
            src="/works/tent/cmf.png?v=ppt"
            alt="飞鸽蓝到露营色系的三代迭代"
            caption="一代飞鸽蓝，二代加活力橙，三代用绯色和青色给系统界面。"
          />
          <Slide
            src="/works/tent/ergo.png?v=ppt"
            alt="帐篷与背包人机尺寸"
            caption="帐按进出和仰卧净空；包按背负。数字在图里，这里只标原则。"
          />
        </div>
        <div className="case-grid-2">
          <Slide
            src="/works/tent/hand.png?v=ppt"
            alt="手绘：背包结构与单双三人天幕俯视"
            caption="单 / 双 / 三帐天幕是同一套单元的拼法，不是三件不同的产品。"
          />
          <Slide
            src="/works/tent/sketches.png?v=ppt"
            alt="帐篷与背包有形概念草图"
            caption="帐的展开和包的背负要能互逆，不能各画各的。"
          />
        </div>
      </section>

      <section className="case-section" id="prototype">
        <div className="case-section-header">
          <p className="case-index">07 / 09</p>
          <h2>样机：先用餐巾纸验证，再缝成能搭的帐</h2>
          <p>
            结构在软布上成立，才进三维和缝制。
          </p>
        </div>
        <div className="case-grid-2">
          <Slide
            src="/works/tent/model3d.png?v=ppt"
            alt="帐篷三维模型与控制尺寸"
            caption="缝制前先锁定尺度，避免布料实验和人机尺寸对不上。"
          />
          <Slide
            src="/works/tent/materials.png?v=ppt"
            alt="外帐、涂层、内帐、底布材料选择"
            caption="PVC 冬天发脆，排除。留下尼龙外帐、PU 涂层、牛津底、铝合金杆。"
          />
        </div>
        <Slide
          src="/works/tent/structure.png?v=ppt"
          alt="帐篷与背包结构分析"
          caption="帐的骨架和包的背负分开想，转化时再合回同一块布。"
        />
      </section>

      <section className="case-section" id="platform">
        <div className="case-section-header">
          <p className="case-index">08 / 09</p>
          <h2>平台：设备、出发、营地，走同一条逻辑</h2>
          <p>
            硬件若只负责变形，系统就断了。App 只接到「我的设备」和「去哪露营」，不另做一套造车社区。
          </p>
        </div>
        <div className="case-grid-2">
          <Slide
            src="/works/tent/lofi.png?v=ppt"
            alt="骑行露营系统低保真与跳转逻辑"
            caption="一次出行串起来：设备、出发、营地。"
          />
          <Slide
            src="/works/tent/hifi.png?v=ppt"
            alt="飞鸽骑行露营 App 高保真界面"
            caption="色系接 CMF 第三代。这是硬件被用起来的界面，不是另一套飞鸽 App。"
          />
        </div>
      </section>

      <section className="case-section" id="proof">
        <div className="case-section-header">
          <p className="case-index">09 / 09</p>
          <h2>验证：搭得开、折得回，漏了底部再改一版</h2>
          <p>
            发给同学实地搭。展开时底部拼接被忽略，帐撑不住。补上之后形态成立。
          </p>
        </div>
        <Slide
          src="/works/tent/validate.png?v=ppt"
          alt="同学实地折叠与搭建试验"
          caption="验证的价值是找到漏项：底部拼接从「以为有」改成「必须有」。"
        />
        <div className="case-quote">
          这件作品能证明的是：一个物理产品如何同时解决闲置和变形，并成为品牌、用户、组织方之间的接口。城市级调度、付费和复制，放在无人机那条救援网上会更完整。
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
