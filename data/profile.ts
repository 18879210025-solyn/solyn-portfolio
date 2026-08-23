export type Education = {
  school: string;
  schoolNote?: string;
  degree: string;
  major: string;
  period: string;
  courses: string[];
};

export type Skill = {
  name: string;
  /** Display-only placeholder until the user sets real values. */
  level: number;
};

export type SkillGroup = {
  title: string;
  skills: Skill[];
};

export type Profile = {
  nameZh: string;
  nameEn: string;
  phone: string;
  email: string;
  birthDate: string;
  headline: string;
  avatarSrc: string;
  education: Education[];
  skillGroups: SkillGroup[];
  about: string | null;
};

export const profile: Profile = {
  nameZh: "方宇凌",
  nameEn: "Fang Yuling",
  phone: "188-7921-0025",
  email: "18879210025@163.com",
  birthDate: "2002.04.25",
  headline: "香港大学低空技术硕士 · 天津大学工业设计学士",
  avatarSrc: "/avatar.jpg",
  education: [
    {
      school: "香港大学",
      schoolNote: "QS 排名 11",
      degree: "硕士",
      major: "低空技术",
      period: "2025.09 — 2027.07",
      courses: [
        "航空实践与前景",
        "飞机与航空基础",
        "人工智能自主无人机",
        "航空器与航空技术",
        "推进技术",
      ],
    },
    {
      school: "天津大学",
      schoolNote: "双一流",
      degree: "学士",
      major: "工业设计",
      period: "2020.09 — 2024.07",
      courses: [
        "计算机软件基础（C++）",
        "Python与互联网编程",
        "工程图学",
        "工程热力学",
        "用户体验设计",
        "视觉传达设计",
      ],
    },
  ],
  skillGroups: [
    {
      title: "编程基础",
      skills: [
        { name: "Python", level: 70 },
        { name: "C++", level: 62 },
        { name: "MATLAB", level: 58 },
        { name: "R Studio", level: 50 },
        { name: "Arduino", level: 55 },
      ],
    },
    {
      title: "设计工具",
      skills: [
        { name: "Figma", level: 82 },
        { name: "Adobe Photoshop", level: 76 },
        { name: "Illustrator", level: 74 },
        { name: "Rhino", level: 80 },
        { name: "KeyShot", level: 78 },
        { name: "SolidWorks", level: 68 },
        { name: "AutoCAD", level: 64 },
      ],
    },
    {
      title: "产品与语言",
      skills: [
        { name: "用户体验设计", level: 80 },
        { name: "硬件原型开发", level: 74 },
        { name: "产品需求文档撰写", level: 78 },
        { name: "商业模式设计", level: 70 },
        { name: "英语（雅思 7.0）", level: 72 },
      ],
    },
  ],
  about: "本人具有丰富的跨学科经验——在本科期间先是工科大类学习，后分科至工业设计，能够同时具备结构认知和美观设计的知识，同时通过本科大量的设计作业和项目积累获得丰富的设计经验；研究生选择进入港大低空继续学习，在了解低空基本知识的同时与来自不同的专业的学生合作完成完整项目，并学习如何进行商业落地。本人性格外向，善于沟通，具备团队精神，对于团队事务有责任心，具备一定的领导组织能力。对新方向或者创新事物有兴趣、非常愿意上手；但是长期更适应稳定、可预期的节奏。希望如果做一件事就要做好、做完。",
};
