export type Work = {
  slug: string;
  title: string;
  titleEn: string;
  summary: string;
  year: string;
  tags: string[];
  cover: string;
  href: string;
};

export const works: Work[] = [
  {
    slug: "usv",
    title: "无人艇",
    titleEn: "Unmanned Surface Vehicle",
    summary: "景区观光无人艇：产品定义、三版迭代、新模型、开合机构、样机与商业模型。",
    year: "2023",
    tags: ["产品设计", "工业设计", "产品定义"],
    cover: "/works/usv/ink-wash.png",
    href: "/works/usv",
  },
  {
    slug: "feige",
    title: "飞鸽",
    titleEn: "Flying Pigeon",
    summary: "老字号自行车品牌年轻化，以及从买车到骑行生活方式的产品重构。",
    year: "2023",
    tags: ["产品策略", "竞品分析", "App 设计"],
    cover: "/works/feige/goals.jpg",
    href: "/works/feige",
  },
  {
    slug: "tent",
    title: "帐篷背包",
    titleEn: "Modular Foldable Tent Backpack",
    summary: "背包与帐篷融合：折叠转化、模块化营地，以及飞鸽骑行露营服务系统。",
    year: "2024",
    tags: ["产品设计", "折叠结构", "服务系统"],
    cover: "/works/tent/renders.jpg",
    href: "/works/tent",
  },
];
