import Image from "@/components/Image";
import { profile } from "@/data/profile";

const chapters = [
  { id: "product", n: "01", label: "产品定义" },
  { id: "discovery", n: "02", label: "课题背景" },
  { id: "users", n: "03", label: "用户研究" },
  { id: "system", n: "04", label: "服务系统" },
  { id: "structure", n: "05", label: "折叠结构" },
  { id: "form", n: "06", label: "形态与 CMF" },
  { id: "prototype", n: "07", label: "样机制作" },
  { id: "platform", n: "08", label: "数字平台" },
  { id: "proof", n: "09", label: "设计验证" },
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
          本项目将日常背包与 1–2 人帐篷整合为一件可折叠转换的骑行露营装备。产品在日常状态下用于背负和收纳，到达营地后可展开为带天幕的帐篷，并通过模块化接口组合多人营地；配套平台用于连接设备、用户与活动组织方。
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
          <h2>产品定义：可在背包与帐篷之间转换的骑行露营装备</h2>
          <p>
            设计通过同一块主体布面完成背包与帐篷之间的转换，提高低频露营装备在日常生活中的使用率。单个产品满足个人出行，多个帐篷还可通过天幕和接口组合为家庭或多人营地。
          </p>
        </div>
        <Slide
          src="/works/tent/renders.jpg?v=ppt"
          alt="帐篷形态与背包形态效果"
          caption="产品展开后形成带天幕的露营空间，折叠后转化为可背负、可手提的日常背包。"
        />
      </section>

      <section className="case-section" id="discovery">
        <div className="case-section-header">
          <p className="case-index">02 / 09</p>
          <h2>课题背景：低频露营装备的收纳与使用问题</h2>
          <p>
            前期观察发现，一部分用户有短途骑行和露营意愿，但会因租赁卫生、装备购置成本、携带数量和日常收纳问题放弃出行。项目因此将重点放在便携转换、多场景使用和短途城市周边活动上。
          </p>
        </div>
        <div className="case-grid-2">
          <Slide
            src="/works/tent/origin.png?v=ppt"
            alt="课题来源：社会现象、个人经历、周围观察"
            caption="课题来源综合了市场现象、个人经历和同龄人观察，核心问题集中在装备购置、携带与低使用频率。"
          />
          <Slide
            src="/works/tent/cycling.jpg?v=ppt"
            alt="城市骑游成为短途出行新方式"
            caption="城市骑游与周边露营为短途休闲提供了新的组合场景，也对装备的轻便性和快速收纳提出要求。"
          />
        </div>
      </section>

      <section className="case-section" id="users">
        <div className="case-section-header">
          <p className="case-index">03 / 09</p>
          <h2>用户研究：短途、低频与多人结伴是主要特征</h2>
          <p>
            问卷与访谈显示，多数受访者没有固定的露营计划，装备使用频率较低，更倾向短途并与家人或朋友结伴出行。用户关注便捷、空间和日常利用率，对专业长途装备的需求相对有限。
          </p>
        </div>
        <div className="case-grid-2">
          <Slide
            src="/works/tent/persona1.jpg?v=ppt"
            alt="用户画像：大学生小桃"
            caption="大学生与职场新人关注临时出行、产品外观和日常使用，希望露营装备在非露营状态下仍具备实用价值。"
          />
          <Slide
            src="/works/tent/persona2.jpg?v=ppt"
            alt="用户画像：带孩子的上班族天明"
            caption="亲子家庭更关注搭建便利、内部空间和多人使用，模块化组合可以根据出行人数调整营地规模。"
          />
        </div>
        <Slide
          src="/works/tent/scenes.jpg?v=ppt"
          alt="单人、家庭、朋友与城市公园或郊区营地"
          caption="使用场景覆盖个人、家庭与朋友出行，以及城市公园和郊区营地；统一的基本单元通过组合适应人数变化。"
        />
      </section>

      <section className="case-section" id="system">
        <div className="case-section-header">
          <p className="case-index">04 / 09</p>
          <h2>服务系统：连接品牌、用户与活动组织方</h2>
          <p>
            在硬件产品之外，项目以飞鸽品牌为例搭建骑行露营服务系统。品牌提供产品与数字平台，用户获取设备、路线和营地服务，活动组织方通过平台发布信息并管理参与者。
          </p>
        </div>
        <div className="case-grid-2">
          <Slide
            src="/works/tent/stakeholders.jpg?v=ppt"
            alt="利益相关者：品牌、制造、用户、组织方与社会"
            caption="利益相关者地图梳理品牌、制造方、用户、活动组织方及相关社会主体之间的协作关系。"
          />
          <Slide
            src="/works/tent/ecosystem.jpg?v=ppt"
            alt="以飞鸽为例的骑行露营休闲生态服务系统"
            caption="服务系统将骑行产品延伸至露营场景，并为用户与活动组织方提供统一的信息和管理入口。"
          />
        </div>
      </section>

      <section className="case-section" id="structure">
        <div className="case-section-header">
          <p className="case-index">05 / 09</p>
          <h2>折叠结构：在完整布面上完成可逆转换</h2>
          <p>
            结构设计需要将大面积软质帐篷压缩到常规背包尺度，同时保留完整布面和清晰的骨架连接位置。方案从硬质折叠转向衣物式折叠、捆扎与卷曲，并根据实物展开结果持续调整。
          </p>
        </div>
        <div className="case-shifts">
          <div className="case-shift">
            <span>01</span>
            <div>
              <p className="from">折纸和机械铰链</p>
              <p className="to">软质大面积布料不适合依赖硬质铰链，改用衣物式折叠与捆扎</p>
            </div>
          </div>
          <div className="case-shift">
            <span>02</span>
            <div>
              <p className="from">剪开帐篷再拉链拼回</p>
              <p className="to">保留主体布面的完整性，减少转换过程中的额外拼装步骤</p>
            </div>
          </div>
          <div className="case-shift">
            <span>03</span>
            <div>
              <p className="from">普通双肩包轮廓</p>
              <p className="to">按 6:1 折叠后长度仍然较大，改为可调节装载长度的登山包形态</p>
            </div>
          </div>
        </div>
        <div className="case-grid-2">
          <Slide
            src="/works/tent/fold-choice.jpg?v=ppt"
            alt="折叠方式：从折纸转向衣物折叠"
            caption="软质布料实验表明，衣物常用的折叠、捆扎和卷曲方式更适合实现体积压缩。"
          />
          <Slide
            src="/works/tent/fishnet.jpg?v=ppt"
            alt="渔网模型：从背包帐篷结构到有形概念"
            caption="概念推导最终确定带天幕的 1–2 人帐篷、模块化拼接和背包转换三项核心特征。"
          />
        </div>
        <Slide
          src="/works/tent/storyboard.jpg?v=ppt"
          alt="帐篷到背包的六步折叠"
          caption="六步转换以底布为折叠基准，并保留六处骨架连接位置，便于再次展开和安装。"
        />
        <Slide
          src="/works/tent/adjust.jpg?v=ppt"
          alt="实地展开后对折叠方案的调整"
          caption="实物展开后发现顶布、底布和棱线无法完全压平，折叠路径据此从理想平面转向立体调整。"
        />
      </section>

      <section className="case-section" id="form">
        <div className="case-section-header">
          <p className="case-index">06 / 09</p>
          <h2>形态与 CMF：统一帐篷、背包和模块化营地</h2>
          <p>
            产品形态同时满足帐篷展开、背包背负和多人拼接。CMF 从飞鸽品牌蓝出发，加入橙色、绯色与青色以适应户外场景；帐篷与背包尺寸则依据进出、仰卧净空和背负需求确定。
          </p>
        </div>
        <div className="case-grid-2">
          <Slide
            src="/works/tent/cmf.jpg?v=ppt"
            alt="飞鸽蓝到露营色系的三代迭代"
            caption="色彩方案由飞鸽品牌蓝逐步扩展至蓝橙组合，并加入绯色和青色用于产品及数字界面。"
          />
          <Slide
            src="/works/tent/ergo.jpg?v=ppt"
            alt="帐篷与背包人机尺寸"
            caption="帐篷尺寸依据跪姿进出、仰卧空间与天幕需求确定，背包尺寸依据日常背负尺度进行控制。"
          />
        </div>
        <div className="case-grid-2">
          <Slide
            src="/works/tent/hand.jpg?v=ppt"
            alt="手绘：背包结构与单双三人天幕俯视"
            caption="同一帐篷单元可通过天幕组合为单人、双人或多人营地，无需分别设计不同规格的产品。"
          />
          <Slide
            src="/works/tent/sketches.jpg?v=ppt"
            alt="帐篷与背包有形概念草图"
            caption="草图同步推演帐篷展开状态与背包背负状态，确保两种形态能够沿同一路径相互转换。"
          />
        </div>
      </section>

      <section className="case-section" id="prototype">
        <div className="case-section-header">
          <p className="case-index">07 / 09</p>
          <h2>样机制作：从软质草模到实物缝制</h2>
          <p>
            制作先以餐巾纸草模快速检验软质材料的折叠逻辑，再通过三维模型锁定帐篷尺寸，最后进入材料选择、裁剪、缝制和骨架装配。
          </p>
        </div>
        <div className="case-grid-2">
          <Slide
            src="/works/tent/model3d.jpg?v=ppt"
            alt="帐篷三维模型与控制尺寸"
            caption="三维模型在实物制作前校核长、宽、高及天幕比例，使布料实验与人机尺寸保持一致。"
          />
          <Slide
            src="/works/tent/materials.jpg?v=ppt"
            alt="外帐、涂层、内帐、底布材料选择"
            caption="材料方案采用尼龙外帐、PU 防水涂层、PU 涂层牛津底布和铝合金撑杆，兼顾轻量、防水与结构强度。"
          />
        </div>
        <Slide
          src="/works/tent/structure.jpg?v=ppt"
          alt="帐篷与背包结构分析"
          caption="结构分析分别梳理帐篷骨架与背包背负系统，再通过主体布面和连接件完成两种形态的整合。"
        />
      </section>

      <section className="case-section" id="platform">
        <div className="case-section-header">
          <p className="case-index">08 / 09</p>
          <h2>数字平台：管理设备、路线、营地与活动</h2>
          <p>
            配套 App 将帐篷背包作为“我的设备”接入骑行露营服务，集中提供设备状态、活动记录、骑行路线、营地信息、预约和社区交流等功能。
          </p>
        </div>
        <div className="case-grid-2">
          <Slide
            src="/works/tent/lofi.jpg?v=ppt"
            alt="骑行露营系统低保真与跳转逻辑"
            caption="低保真原型梳理从设备管理、路线规划到营地选择与活动参与的主要跳转关系。"
          />
          <Slide
            src="/works/tent/hifi.jpg?v=ppt"
            alt="飞鸽骑行露营 App 高保真界面"
            caption="高保真界面沿用产品 CMF，并展示设备、活动记录、营地、商城、社区与个人中心等模块。"
          />
        </div>
      </section>

      <section className="case-section" id="proof">
        <div className="case-section-header">
          <p className="case-index">09 / 09</p>
          <h2>设计验证：补充底部连接并完成搭建</h2>
          <p>
            实地测试邀请其他使用者根据说明完成折叠与搭建。测试发现底部连接缺失会导致布面无法得到稳定支撑，方案补充相应拼接结构后完成再次搭建。
          </p>
        </div>
        <Slide
          src="/works/tent/validate.jpg?v=ppt"
          alt="同学实地折叠与搭建试验"
          caption="测试记录覆盖折叠、展开和搭建过程，并据此补充底部拼接结构。"
        />
        <div className="case-quote">
          最终方案验证了背包与帐篷之间的基本转换路径，并形成模块化营地和配套数字服务的完整概念。后续仍需进一步测试轻量化、耐久性、防水性能及多人模块接口。
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
