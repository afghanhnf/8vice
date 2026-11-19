import React, { useState, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import SeoHead from '@/Components/SeoHead';
import Link from '@/Components/LocalizedLink';
import MainLayout from '@/Layouts/MainLayout';
import { useTranslation } from '@/Contexts/TranslationContext';
import {
  PillarInsightIcon,
  PillarCultureIcon,
  PillarNetworkIcon,
  PillarStrategyIcon
} from '@/Components/HomeIcons';

/* -------------------------------------------------------------------------- */
/*  Animated Modern City Skyline & Architectural Grid Background SVG          */
/* -------------------------------------------------------------------------- */
function ModernCityBg({ opacity = 0.28, flip = false }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      {/* Architectural Grid Lines */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundSize: '56px 56px',
          backgroundImage:
            'linear-gradient(to right, rgba(255, 255, 255, 0.038) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.038) 1px, transparent 1px)',
          maskImage: 'radial-gradient(ellipse 85% 70% at 50% 45%, #000 35%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 85% 70% at 50% 45%, #000 35%, transparent 100%)',
        }}
      />

      {/* Glowing Red Intersection Dots */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(230, 57, 70, 0.38) 1.25px, transparent 1.25px)',
          backgroundSize: '56px 56px',
          backgroundPosition: '-0.6px -0.6px',
          maskImage: 'radial-gradient(ellipse 70% 55% at 50% 50%, #000 25%, transparent 90%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 55% at 50% 50%, #000 25%, transparent 90%)',
          opacity: 0.65,
        }}
      />

      {/* Animated Modern City Skyline Vector at Bottom */}
      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '290px',
          opacity,
          transform: flip ? 'scaleX(-1)' : 'none',
        }}
      >
        <defs>
          <linearGradient id="cityFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(230, 57, 70, 0.32)" />
            <stop offset="50%" stopColor="rgba(255, 255, 255, 0.08)" />
            <stop offset="100%" stopColor="rgba(8, 9, 12, 0.0)" />
          </linearGradient>
          <linearGradient id="cityStroke" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(255,255,255,0.04)" />
            <stop offset="30%" stopColor="rgba(230,57,70,0.45)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.22)" />
            <stop offset="70%" stopColor="rgba(230,57,70,0.45)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.04)" />
          </linearGradient>
        </defs>

        {/* Skyline Silhouette Path (Jakarta & Shanghai Modern Towers) */}
        <path
          d="M0,320 L0,250 L45,250 L45,195 L85,195 L85,235 L115,235 L115,140 L140,105 L165,140 L165,240 L205,240 L205,170 L255,170 L255,220 L290,220 L290,120 L310,120 L310,75 L314,75 L314,120 L335,120 L335,230 L380,230 L380,180 L430,180 L430,245 L480,245 L480,150 L530,130 L530,235 L580,235 L580,190 L635,190 L635,250 L690,250 L690,165 L715,115 L740,165 L740,245 L790,245 L790,145 L840,145 L840,225 L885,225 L885,95 L910,60 L935,95 L935,230 L980,230 L980,160 L1035,160 L1035,215 L1085,215 L1085,125 L1140,125 L1140,235 L1190,235 L1190,175 L1245,175 L1245,220 L1295,220 L1295,150 L1350,150 L1350,240 L1400,240 L1400,200 L1440,200 L1440,320 Z"
          fill="url(#cityFade)"
          stroke="url(#cityStroke)"
          strokeWidth="1.2"
        />

        {/* Animated Horizon Data Stream Lines */}
        <line
          x1="0"
          y1="265"
          x2="1440"
          y2="265"
          stroke="rgba(230, 57, 70, 0.28)"
          strokeWidth="1"
          strokeDasharray="8 12"
          className="about-city-stream"
        />
        <line
          x1="0"
          y1="290"
          x2="1440"
          y2="290"
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth="1"
          strokeDasharray="4 18"
          className="about-city-stream-reverse"
        />

        {/* Glowing Beacon Dots on Tower Tops */}
        <circle cx="140" cy="105" r="3" fill="#E63946" className="about-city-beacon" />
        <circle cx="312" cy="75" r="3.5" fill="#FF6B76" className="about-city-beacon" />
        <circle cx="530" cy="130" r="2.5" fill="#E63946" className="about-city-beacon" />
        <circle cx="715" cy="115" r="3" fill="#FF6B76" className="about-city-beacon" />
        <circle cx="910" cy="60" r="3.5" fill="#E63946" className="about-city-beacon" />
        <circle cx="1112" cy="125" r="2.5" fill="#FF6B76" className="about-city-beacon" />
      </svg>
    </div>
  );
}

export default function About({ profiles = [] }) {
  const { lang } = useTranslation();
  const isId = lang === 'id';
  const isCn = lang === 'cn';
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock background scroll when modal is active
  useEffect(() => {
    if (selectedPerson) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedPerson]);

  // Smooth scroll-triggered transition observer + Escape key for modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedPerson(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    const elements = document.querySelectorAll('.about-anim');
    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return () => window.removeEventListener('keydown', handleKeyDown);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      observer.disconnect();
    };
  }, [lang]);

  const copy = isCn
    ? {
      breadcrumbHome: '首页',
      breadcrumbCurrent: '关于我们',
      eyebrow: '关于 8 VICE · 双边高管级战略咨询',
      heroTitleLine1: '始于深度洞察。',
      heroTitleLine2: '成于战略连接。',
      heroSubtitle:
        '横跨印尼与中国的战略咨询、跨境合作伙伴构建与本土市场深耕。',
      heroBannerBadge: '我们的创立使命 · 印尼—中国战略商业走廊',
      heroBannerQuote:
        '8 Vice 的创立旨在协助企业从容应对跨境扩张中的商业机遇与复杂挑战，重点深耕印尼与中国两大核心市场。',
      heroBannerSub:
        '在亚洲最具活力的两大经济体之间，融汇深刻的本土市场理解、可信赖的政商利益相关方网络与务实的落地执行。',

      overviewEyebrow: '8 VICE 品牌溯源与概况',
      overviewTitle: '植根印中双边实战积淀，铸就跨境确定性增长。',
      overviewLead:
        '8 Vice 是寻求在印尼与中国之间建立市场存在、强化战略网络并开拓新增长路径的企业与机构的长期战略顾问伙伴。',
      overviewP1:
        '我们的工作将战略咨询、业务拓展、利益相关方沟通与品牌传播紧密结合，协助组织跨越初步市场探索阶段，迈向结构化的真实商业机遇。',
      overviewP2:
        '凭借对企业商业目标与本土市场语境的双重深刻理解，我们协助客户清晰应对监管合规细节、商业文化差异与本土产业生态。',
      overviewQuote:
        '当双边市场实现更深度的连接，商业机遇便触手可及，合作伙伴关系也将更具长期价值。',
      overviewPhotoBadge: '高管战略咨询走廊',
      overviewPhotoTitle: '连接商业战略、关键利益相关方与本土市场执行',
      foundationsHeader: '跨境商业成功的三大核心基石',
      foundationsSub:
        '我们深信，成功的国际与跨境市场扩张建立在以下三大相辅相成的核心基石之上：',
      foundations: [
        {
          num: '01',
          tag: '第一大基石',
          title: '清晰透彻的市场洞察',
          desc: '客观解构印尼与中国的市场动态、真实商业环境与监管合规要求，为科学决策提供坚实依据。'
        },
        {
          num: '02',
          tag: '第二大基石',
          title: '高价值的利益相关方关系',
          desc: '与本土龙头企业、政府主管部门、核心行业协会及关键决策者建立高公信力的良性互动。'
        },
        {
          num: '03',
          tag: '第三大基石',
          title: '将战略转化为落地行动',
          desc: '将市场增长愿景转化为结构化的商业合作机会、高度协同的合资伙伴关系与务实的本土执行。'
        }
      ],

      who: {
        eyebrow: '关于我们',
        title: ['连接双边市场。', '构建战略合作。', '创造商业机遇。'],
        lead:
          '8 Vice 是一家专注于印尼—中国走廊的战略咨询与业务拓展机构，致力于协助企业以更清晰的视野、更笃定的信心与更精准的战略方向把握跨境商业机遇。',
        desc:
          '我们深耕于商业战略、市场情报、利益相关方事务、品牌传播与合作伙伴开发的交汇点。成功的国际化扩张不仅在于获得市场准入，更依赖于深度的本土洞察、跨文化商业智慧、可信赖的本土网络与务实的落地执行。',
        pillars: [
          {
            title: '本土市场深度洞察',
            desc: '深刻理解印尼与中国的监管政策框架、本土消费者偏好及真实商业运营环境。'
          },
          {
            title: '跨文化商业智慧',
            desc: '弥合双边商业惯例、谈判风格与机构期望差异，消除跨境沟通与合作中的摩擦。'
          },
          {
            title: '可信赖的政商网络',
            desc: '直达相关产业生态圈、核心行业协会及经过严格筛查的本土商业利益相关方。'
          },
          {
            title: '可落地的执行战略',
            desc: '将高管层的战略目标转化为具体的市场进入计划、合作伙伴架构与可衡量的商业成果。'
          }
        ]
      },

      vmEyebrow: '愿景与使命',
      vmHeading: '我们的战略方向与长期承诺。',
      vmSubheading:
        '为印尼与中国之间的企业及机构搭建值得信赖、可持续发展的跨境商业与制度合作桥梁。',
      visionBadge: '我们的愿景',
      visionTitle: '连接印尼与中国的首选可信赖战略商业门户',
      visionText:
        '成为连接印尼与中国的首选可信赖战略门户，赋能两国企业与机构通过深度跨境协作创造可持续的长期价值。',
      missionBadge: '我们的使命 · 五大战略支柱',
      missions: [
        {
          code: '01',
          title: '连接双边市场',
          enTitle: 'Connect Markets',
          desc: '通过深度市场洞察与高管战略指引，协助企业理解并把握横跨印尼与中国的商业机遇。'
        },
        {
          code: '02',
          title: '构建战略伙伴',
          enTitle: 'Build Partnerships',
          desc: '促成企业、政府机构与行业利益相关方之间富有成效的商业关系与深度协作。'
        },
        {
          code: '03',
          title: '赋能市场扩张',
          enTitle: 'Enable Market Expansion',
          desc: '支持组织制定务实可行的市场进入策略，稳步扩大其本土商业版图与影响力。'
        },
        {
          code: '04',
          title: '弥合商业文化',
          enTitle: 'Bridge Business Cultures',
          desc: '通过跨文化沟通与高层互动，增进印尼与中国商界之间的深度互信与协同。'
        },
        {
          code: '05',
          title: '创造可持续价值',
          enTitle: 'Create Sustainable Value',
          desc: '倡导互利共赢的合作伙伴关系，为双边经济与企业的长远发展贡献持久动力。'
        }
      ],

      crossBorderProcess: {
        title: '我们的跨境服务五步流程',
        steps: [
          { num: '01', name: '需求洞察 (Discovery)', desc: '深入了解客户战略目标、核心能力与目标市场优先级。' },
          { num: '02', name: '市场评估 (Assessment)', desc: '全面评估目标市场环境、监管政策动态与商业可行性。' },
          { num: '03', name: '战略制定 (Strategize)', desc: '制定市场定位、合作伙伴筛选标准与沟通执行路线图。' },
          { num: '04', name: '资源对接 (Connect)', desc: '促成精准商业引荐与高规格 B2B 及政府机构对话。' },
          { num: '05', name: '落地跟进 (Follow-Through)', desc: '全程支持合作洽谈、方案推进与项目落地协调。' }
        ]
      },

      leadEyebrow: '领导团队与跨学科专业背景',
      leadTitle: '兼具跨境视野的高管领导力。',
      leadSubtitle:
        '融汇商业敏锐度、制度洞察力与跨文化智慧，全方位释放印中双边增长潜力。',
      leadP1:
        '8 Vice 由经验丰富的资深专业人士领衔，团队背景横跨商业战略、品牌塑造、整合营销传播、政企利益相关方事务及印中双边业务拓展。',
      leadP2:
        '我们的领导层视角将严谨的商业逻辑与对制度环境、市场定位以及战略人脉网络在业务增长中核心作用的理解深度融合。',
      leadP3:
        '依托在私营跨国企业、国有企业、专业智库网络及政府机构项目中的丰富履历，我们的领导团队以跨学科方法论识别机遇并构建高价值伙伴关系。',
      leadQuote:
        '我们坚信，卓越的跨境商业领导力需要清晰的战略定力、跨文化商业智慧、职业诚信，以及为所有参与方创造真实价值的坚定承诺。',
      leadDomainsTitle: '六大核心领导力与咨询领域',
      leadDomains: [
        {
          code: '01',
          title: '商业战略与企业高管咨询',
          desc: '制定市场扩张路线图、评估商业模式可行性，并提供董事会与高管级战略顾问支持。'
        },
        {
          code: '02',
          title: '品牌塑造与整合营销传播',
          desc: '构建契合跨境受众认知的企业叙事、差异化品牌定位与本土化传播架构。'
        },
        {
          code: '03',
          title: '政府机构与利益相关方事务',
          desc: '促进企业与政府部委、公共机构及核心行业协会之间的建设性对话与合作。'
        },
        {
          code: '04',
          title: '印尼—中国双边业务拓展',
          desc: '策划高规格 B2B 商业配对、寻源本土战略合作伙伴并推进双边商业合作落地。'
        },
        {
          code: '05',
          title: '城市交通、基础设施与文旅产业',
          desc: '在城市公共出行、现代基础设施开发及双边旅游目的地推广领域拥有深厚实战经验。'
        },
        {
          code: '06',
          title: '媒体关系与声誉管理',
          desc: '建立公众公信力、拓展权威媒体合作伙伴关系、筹备新闻发布及危机公关预案。'
        }
      ],

      peopleEyebrow: '8 VICE 核心领导团队',
      peopleTitle: '8 Vice 背后的领军人物。',
      peopleLead:
        '认识推动我们在印尼与中国开展战略咨询、政商网络对接与跨境落地执行的跨学科领导团队。',
      experiencesHeading: '专业履历与经验',
      peopleClickHint: '查看完整履历',
      peopleModalClose: '关闭简介',
      peopleModalLabel: '来自 8 VICE 领导团队的战略寄语',
      people: [
        {
          id: 'helda',
          callName: 'Helda Chandra',
          fullName: 'Helda Chandra',
          chineseName: '曾宪茹',
          jobTitle: 'Chief Executive Officer',
          nameNote: 'Chief Executive Officer',
          subtitle: 'Corporate Strategy, Leadership & Overall Growth',
          bioParagraphs: [
            '曾宪茹（Helda Chandra）是一位资深商业战略顾问与企业家，拥有20余年为印度尼西亚政府机构、国有企业及私营企业提供战略咨询的丰富经验，并依托印尼与中国政商界的深厚网络，助力企业高效实现市场准入、战略合作与跨境业务增长。'
          ],
          photo: '/images/profiles/helda_chandra.webp',
          socials: {
            linkedin: 'https://www.linkedin.com/in/helda-chandra-a0b27b1b/',
            instagram: 'https://www.instagram.com/heldachandra',
            email: 'mailto:Heldachandra@gmail.com'
          },
          experiences: [
            '印度尼西亚共和国创意经济部专家顾问 (2025 – 至今)',
            '雅加达地铁公司 (PT. MRT Jakarta) 监事会委员会成员 (2019 – 2025)',
            '印度尼西亚第二机场公司 (PT. Angkasa Pura II Tbk.，国有企业) 非航空商业顾问 (2020 – 2021)',
            'Communic 8 创始人兼首席执行官 (2014 – 至今)',
            '根塔拉研究所 (Gentala Institute) 执行合伙人 (2025 – 至今)',
            '20余年私营部门实战经验，深耕战略商业咨询、市场营销及整合营销传播领域',
            '受邀担任印尼多所高校客座讲师，讲授商业战略、市场营销与品牌传播课程',
            '中国企业印尼市场准入顾问，长期为中国企业赴印尼投资布局、业务拓展及战略合作提供专业指引'
          ]
        },
        {
          id: 'gandhi',
          callName: 'Gandhi Priambodho',
          fullName: 'Gandhi Priambodho',
          chineseName: '',
          jobTitle: 'Chief Business Development Officer',
          nameNote: 'Chief Business Development Officer',
          subtitle: 'Business, Trade & Investment',
          bioParagraphs: [
            'Gandhi Priambodho 是一位拥有丰富国际视野的业务拓展专家，专注于扩大印度尼西亚与中国之间的双边贸易、投资及战略合作伙伴关系。',
            '自2002年起常驻北京以来，他在工业合作、能源与矿产、传媒与文化创意产业、旅游、教育、房地产及医疗健康等多个关键领域建立了广泛而扎实的跨境商业网络。'
          ],
          photo: '/images/profiles/gandhi_priambodho.webp',
          socials: {
            linkedin: 'https://www.linkedin.com/company/8-vice/',
            instagram: 'https://www.instagram.com/8viceofficial',
            email: 'mailto:hello@8vice.com'
          },
          experiences: [
            '南洋桥传媒有限公司 (Nanyang Bridge Media, co. Ltd)',
            'Red&White China',
            '北京安华房地产顾问有限公司 (Beijing An Hua Property Consultant, China)',
            '21世纪不动产 (CENTURY 21 Troop Real Estate, China)',
            '《印尼商报》(Indonesia Shangbao)',
            'PT Falah Jaya Agung, Indonesia',
            '力宝集团 (Lippo Group, Indonesia)',
            '印尼航展基金会 (Indonesia Air Show Foundation)'
          ]
        },
        {
          id: 'christine',
          callName: 'Christine Susanna Tjhin',
          fullName: 'Christine Susanna Tjhin',
          chineseName: '',
          jobTitle: 'Chief Strategy Officer',
          nameNote: 'Chief Strategy Officer',
          subtitle: 'Strategy, Policy & Institutional Relations',
          bioParagraphs: [
            'Christine Susanna Tjhin 是著名的印中关系专家，在政策研究、战略传播与国际事务领域拥有20余年深厚积淀，长期致力于推动印度尼西亚与中国之间可持续的战略伙伴关系。她同时担任印度尼西亚国家国防委员会 (DPN) 中国事务顾问、印尼外交政策共同体 (FPCI) 资深专家，并在多家聚焦中国事务的政策研究网络担任咨询职务。'
          ],
          photo: '/images/profiles/christine_tjhin.webp',
          socials: {
            linkedin: 'https://www.linkedin.com/in/christine-susanna-tjhin-0a9557b/',
            instagram: 'https://www.instagram.com/8viceofficial',
            email: 'mailto:hello@8vice.com'
          },
          experiences: [
            '印度尼西亚汉学家理事会监事会成员 (2023 – 至今)',
            '中国福建省“中国—印尼工业合作研究中心”印尼籍资深专家 (2023 – 至今)',
            '山西碳达峰碳中和能源革命研究院 (CCERR) 东南亚专家组成员 (2024 – 至今)',
            '印尼外交政策共同体 (FPCI) 中国政策组资深专家成员，雅加达 (2017 – 至今)',
            '印度尼西亚华裔总会 (INTI) 智库理事会成员，雅加达 (2005 – 2012)',
            '印度尼西亚战略与国际问题研究中心 (CSIS Indonesia) 研究员 (2003 – 2019)',
            '印度尼西亚多元主义研究所 (IPI) 研究员 (2002 – 2003)'
          ]
        },
        {
          id: 'james',
          callName: 'James He',
          fullName: 'James He (Wei He)',
          chineseName: '何炜',
          jobTitle: 'Chief China Affairs Officer',
          nameNote: 'Chief China Affairs Officer',
          subtitle: 'China Affairs & Industrial Collaboration',
          bioParagraphs: [
            '何炜（James He / Wei He）是一位拥有跨国多元经验的资深顾问，业务涵盖印度尼西亚、中国及国际市场的政府事务咨询、基础设施投融资、关键矿产资源以及文化娱乐科技产业。',
            '毕业于加拿大多伦多大学商学院，他兼具十余年中国电影集团国际业务拓展领导经验以及网络安全、电力能源国际合作、防空装备 MRO 与大型基建本地化咨询实绩。'
          ],
          photo: '/images/profiles/james_he.webp',
          socials: {
            linkedin: 'https://www.linkedin.com/company/8-vice/',
            instagram: 'https://www.instagram.com/8viceofficial',
            email: 'mailto:hello@8vice.com'
          },
          experiences: [
            '印度尼西亚网络安全论坛 (ICSF) 顾问及参与专家',
            '根塔拉研究所 (Gentala Institute) 中国部资深中国事务专家',
            '印度尼西亚空军力量研究中心 (PSAPI) 防空战略与装备 MRO 顾问',
            '印尼国家电力理工学院 (IT PLN) 与华北电力大学 (NCEPU) 核电技术与国际合作促进顾问',
            '北京理工大学 (BIT) 外骨骼技术研发国际战略规划顾问',
            '加里曼丹 Calbar-1 2x100MW 燃煤电厂 (Pegasus Capital International, 2019–2025)、蒙古国乌兰巴托隧道 (China Design Group, 2024–2025) 及 Nalgar Khundii 铜金矿 (2023–2025) 项目融资与本地化顾问',
            '中影巨幕有限公司（中国电影集团）国际业务发展总监 (2010–2023) 暨中国电影电视技术学会 (CSMPTE) 先进影像专委会委员',
            '印尼 Cinemaxx (Karawaci/Medan, 2013–2023)、美国 Barco America (2015–2023)、Deluxe Technicolor Burbank (2015–2023)、Pixelogic Media (2019–2023) 及 Brenden Theater Group (2015–2021) 技术与营销顾问'
          ]
        }
      ],

      valuesEyebrow: '核心价值观',
      valuesTitle: '指引每一次合作的核心准则。',
      valuesLead:
        '定义 8 Vice 如何为客户提供咨询、构建信任关系并创造持久跨境价值的六大基本原则。',
      values: [
        {
          num: '01',
          title: 'Trust & Integrity',
          sub: '信任与诚信',
          desc: '我们在每一次合作中坚守透明原则、职业操守与负责任的商业行为准则。'
        },
        {
          num: '02',
          title: 'Cultural Intelligence',
          sub: '跨文化智慧',
          desc: '我们深刻理解并尊重不同市场在商业惯例、沟通方式与制度期望上的细微差异。'
        },
        {
          num: '03',
          title: 'Strategic Thinking',
          sub: '战略全局思维',
          desc: '我们超越短期交易视角，从宏观脉络、长期战略目标与深远影响出发审视每一个商业机遇。'
        },
        {
          num: '04',
          title: 'Collaboration',
          sub: '协同共创',
          desc: '我们深信，有意义的商业进展源于将最契合的人才、专业能力与多元视角汇聚一堂。'
        },
        {
          num: '05',
          title: 'Mutual Value',
          sub: '互利共赢价值',
          desc: '我们致力于构建能够为客户及其本土合作伙伴同时创造真实商业回报的合作关系。'
        },
        {
          num: '06',
          title: 'Long-Term Perspective',
          sub: '长期主义视角',
          desc: '我们优先构建能够支撑企业跨越周期、实现可持续商业发展的战略与伙伴关系。'
        }
      ],

      ctaEyebrow: '开启您的跨境增长之旅',
      ctaTitle: '准备好与 8 Vice 一起探索印中跨境商业机遇了吗？',
      ctaDesc:
        '立即联系我们的高管顾问团队，洽谈您的市场准入优先级、战略合作伙伴寻源或双边商业合作计划。',
      ctaPrimary: '开启战略咨询对话',
      ctaSecondary: '探索我们的核心服务'
    }
    : isId
      ? {
        breadcrumbHome: 'Beranda',
        breadcrumbCurrent: 'Tentang Kami',
        eyebrow: 'TENTANG 8 VICE · PENASIHAT STRATEGIS BILATERAL',
        heroTitleLine1: 'Dibangun atas Wawasan.',
        heroTitleLine2: 'Digerakkan oleh Konektivitas.',
        heroSubtitle:
          'Penasihat Strategis, Kemitraan Lintas Batas, dan Keterlibatan Pasar di Seluruh Indonesia dan Tiongkok.',
        heroBannerBadge: 'MANDAT PENDIRIAN KAMI · KORIDOR INDONESIA–TIONGKOK',
        heroBannerQuote:
          '8 Vice didirikan untuk membantu bisnis menavigasi peluang dan kompleksitas ekspansi lintas batas negara, dengan fokus khusus pada pasar Indonesia dan Tiongkok.',
        heroBannerSub:
          'Menyatukan pemahaman pasar lokal, hubungan pemangku kepentingan yang terpercaya, serta eksekusi strategis di dua kekuatan ekonomi paling dinamis di Asia.',

        overviewEyebrow: 'LATAR BELAKANG PERUSAHAAN',
        overviewTitle: 'Berakar pada Pengalaman Lintas Batas. Hadir untuk Pertumbuhan Nyata.',
        overviewLead:
          '8 Vice hadir sebagai mitra penasihat strategis bagi perusahaan dan institusi yang ingin membangun kehadiran, memperkuat jaringan, dan membuka jalur pertumbuhan baru di antara Indonesia dan Tiongkok.',
        overviewP1:
          'Pekerjaan kami menyatukan konsultasi strategis, pengembangan bisnis, keterlibatan pemangku kepentingan, dan komunikasi strategis untuk membantu organisasi melangkah lebih jauh dari sekadar eksplorasi pasar menuju peluang bisnis yang terstruktur.',
        overviewP2:
          'Dengan pemahaman mendalam terhadap tujuan komersial sekaligus pentingnya konteks lokal, kami membantu organisasi menavigasi perbedaan regulasi, budaya bisnis, dan lanskap industri secara terarah.',
        overviewQuote:
          'Ketika pasar terhubung dengan lebih baik, peluang menjadi lebih mudah diakses dan kemitraan menjadi jauh lebih bermakna.',
        overviewPhotoBadge: 'KORIDOR PENASIHAT EKSEKUTIF',
        overviewPhotoTitle: 'Menghubungkan Strategi, Pemangku Kepentingan & Eksekusi Pasar',
        foundationsHeader: 'TIGA FONDASI UTAMA KEBERHASILAN BISNIS LINTAS BATAS',
        foundationsSub:
          'Kami meyakini bahwa keberhasilan ekspansi internasional dibangun secara terintegrasi di atas tiga fondasi utama berikut:',
        foundations: [
          {
            num: '01',
            tag: 'FONDASI PERTAMA',
            title: 'Pemahaman Pasar yang Jernih',
            desc: 'Membaca dinamika pasar, realitas komersial, serta lanskap regulasi di Indonesia dan Tiongkok secara objektif sebagai dasar pengambilan keputusan.'
          },
          {
            num: '02',
            tag: 'FONDASI KEDUA',
            title: 'Hubungan Pemangku Kepentingan yang Bermakna',
            desc: 'Membangun keterlibatan yang kredibel dengan pelaku usaha, institusi pemerintah, asosiasi industri, dan pengambil keputusan utama.'
          },
          {
            num: '03',
            tag: 'FONDASI KETIGA',
            title: 'Kemampuan Menerjemahkan Strategi Menjadi Tindakan',
            desc: 'Mengubah rencana ekspansi menjadi langkah nyata, kemitraan komersial yang terstruktur, serta tindak lanjut yang terukur di lapangan.'
          }
        ],

        who: {
          eyebrow: 'TENTANG KAMI',
          title: ['Menjembatani Pasar.', 'Membangun Kemitraan.', 'Menciptakan Peluang.'],
          lead:
            '8 Vice adalah firma penasihat strategis dan pengembangan bisnis Indonesia–China yang berfokus membantu organisasi menavigasi peluang lintas batas dengan kejelasan, keyakinan, dan arah strategis yang tepat.',
          desc:
            'Kami bergerak di titik temu antara strategi bisnis, intelijen pasar, pelibatan pemangku kepentingan (stakeholder engagement), komunikasi, dan pengembangan kemitraan. Ekspansi internasional yang sukses membutuhkan lebih dari sekadar akses pasar—ia membutuhkan wawasan lokal, kecerdasan budaya, relasi tepercaya, dan eksekusi praktis.',
          pillars: [
            {
              title: 'Wawasan Pasar Lokal',
              desc: 'Pemahaman mendalam tentang lanskap regulasi, preferensi konsumen lokal, dan iklim operasional bisnis di Indonesia dan China.'
            },
            {
              title: 'Kecerdasan Budaya Bisnis',
              desc: 'Menjembatani tradisi bisnis, gaya negosiasi, dan etika korporasi untuk meniadakan hambatan dalam komunikasi bilateral.'
            },
            {
              title: 'Relasi Tepercaya',
              desc: 'Akses langsung ke ekosistem industri yang relevan, asosiasi bisnis terkemuka, dan pemangku kepentingan yang terverifikasi.'
            },
            {
              title: 'Eksekusi Strategis Nyata',
              desc: 'Menerjemahkan visi korporasi menjadi rencana penetrasi pasar yang konkret, terukur, dan berorientasi hasil komersial.'
            }
          ]
        },

        vmEyebrow: 'VISI & MISI KAMI',
        vmHeading: 'Arah Strategis & Komitmen Jangka Panjang Kami.',
        vmSubheading:
          'Membangun jembatan kolaborasi yang terpercaya dan berkelanjutan bagi dunia usaha serta institusi di Indonesia dan Tiongkok.',
        visionBadge: 'VISI UTAMA 8 VICE',
        visionTitle: 'Gerbang Strategis Terpercaya yang Menghubungkan Indonesia & Tiongkok',
        visionText:
          'Menjadi gerbang strategis terpercaya yang menghubungkan Indonesia dan Tiongkok, memungkinkan pelaku bisnis dan institusi menciptakan nilai berkelanjutan melalui kolaborasi lintas batas.',
        missionBadge: 'MISI KAMI · 5 PILAR STRATEGIS',
        missions: [
          {
            code: '01',
            title: 'Menghubungkan Pasar',
            enTitle: 'Connect Markets',
            desc: 'Membantu perusahaan memahami dan mengakses peluang di seluruh Indonesia dan Tiongkok melalui wawasan pasar dan panduan strategis.'
          },
          {
            code: '02',
            title: 'Membangun Kemitraan',
            enTitle: 'Build Partnerships',
            desc: 'Memfasilitasi hubungan bisnis dan kolaborasi bermakna di antara perusahaan, institusi, dan pemangku kepentingan industri.'
          },
          {
            code: '03',
            title: 'Mendorong Ekspansi Pasar',
            enTitle: 'Enable Market Expansion',
            desc: 'Mendukung organisasi dalam merumuskan strategi praktis untuk memasuki pasar baru dan memperluas kehadiran komersial mereka.'
          },
          {
            code: '04',
            title: 'Menjembatani Budaya Bisnis',
            enTitle: 'Bridge Business Cultures',
            desc: 'Mendorong pemahaman yang lebih baik antara komunitas bisnis Indonesia dan Tiongkok melalui komunikasi serta keterlibatan lintas budaya.'
          },
          {
            code: '05',
            title: 'Menciptakan Nilai Berkelanjutan',
            enTitle: 'Create Sustainable Value',
            desc: 'Mendorong kemitraan yang memberikan manfaat timbal balik dan berkontribusi pada pembangunan ekonomi serta bisnis jangka panjang.'
          }
        ],

        crossBorderProcess: {
          title: 'Metodologi Kerja Lintas Negara',
          steps: [
            { num: '01', name: 'Penjajakan (Discovery)', desc: 'Memahami sasaran ekspansi, kapabilitas & ekspektasi pasar target.' },
            { num: '02', name: 'Penilaian (Assessment)', desc: 'Mengevaluasi kondisi pasar, regulasi terkait & kelayakan komersial.' },
            { num: '03', name: 'Strategi (Strategize)', desc: 'Merumuskan positioning, kriteria mitra & peta jalan pelibatan.' },
            { num: '04', name: 'Koneksi (Connect)', desc: 'Memfasilitasi pengenalan terarah dan dialog B2B/institusional.' },
            { num: '05', name: 'Eksekusi (Follow-Through)', desc: 'Mendampingi negosiasi kemitraan, proposal & implementasi nyata.' }
          ]
        },

        leadEyebrow: 'KEPEMIMPINAN & KAPABILITAS MULTIDISIPLIN',
        leadTitle: 'Kepemimpinan dengan Perspektif Lintas Batas.',
        leadSubtitle:
          'Memadukan ketajaman komersial, pemahaman institusional, dan kecerdasan budaya untuk membuka peluang bilateral.',
        leadP1:
          '8 Vice dipimpin oleh para profesional dengan pengalaman luas yang mencakup strategi bisnis, branding, komunikasi pemasaran terpadu, hubungan pemangku kepentingan, serta pengembangan bisnis Indonesia–Tiongkok.',
        leadP2:
          'Perspektif kepemimpinan kami memadukan ketajaman komersial dengan pemahaman terhadap lingkungan institusional, penempatan posisi pasar (market positioning), serta peran strategis relasi dalam pertumbuhan bisnis.',
        leadP3:
          'Melalui rekam jejak di sektor swasta, jaringan profesional, dan inisiatif institusional, kepemimpinan kami menghadirkan pendekatan multidisiplin dalam mengidentifikasi peluang dan membangun kemitraan.',
        leadQuote:
          'Kepemimpinan efektif dalam bisnis lintas negara menuntut kejelasan strategis, kecerdasan budaya, integritas profesional, dan komitmen untuk menciptakan nilai bagi seluruh pihak yang terlibat.',
        leadDomainsTitle: '6 Spektrum Kapabilitas Kepemimpinan',
        leadDomains: [
          {
            code: '01',
            title: 'Strategi Bisnis & Konsultasi Korporat',
            desc: 'Perumusan arah ekspansi, evaluasi model komersial, dan pendampingan tingkat eksekutif.'
          },
          {
            code: '02',
            title: 'Branding & Komunikasi Pemasaran Terpadu',
            desc: 'Penempatan posisi merek (brand positioning) dan lokalisasi narasi korporat di pasar baru.'
          },
          {
            code: '03',
            title: 'Keterlibatan Pemangku Kepentingan & Institusi',
            desc: 'Jembatan dialog yang konstruktif dengan lembaga pemerintah, asosiasi, dan regulator.'
          },
          {
            code: '04',
            title: 'Pengembangan Bisnis Indonesia–Tiongkok',
            desc: 'Fasilitasi kemitraan B2B, pencocokan mitra lokal, dan negosiasi kolaborasi lintas negara.'
          },
          {
            code: '05',
            title: 'Transportasi Perkotaan, Infrastruktur & Pariwisata',
            desc: 'Pengalaman sektoral pada proyek mobilitas publik, ekosistem kota modern, dan promosi destinasi.'
          },
          {
            code: '06',
            title: 'Hubungan Media & Manajemen Reputasi',
            desc: 'Pengelolaan kredibilitas publik, konferensi pers strategis, serta mitigasi komunikasi krisis.'
          }
        ],

        peopleEyebrow: 'THE PEOPLE BEHIND 8 VICE',
        peopleTitle: 'Sosok di Balik 8 Vice.',
        peopleLead:
          'Sinergi para pemimpin strategis yang menggabungkan pengalaman lintas industri, jaringan kelembagaan, dan pemahaman budaya bisnis Indonesia–Tiongkok.',
        experiencesHeading: 'Pengalaman',
        peopleClickHint: 'Lihat profil lengkap',
        peopleModalClose: 'Tutup Profil',
        peopleModalLabel: 'PESAN DARI TIM KEPEMIMPINAN 8 VICE',
        people: [
          {
            id: 'helda',
            callName: 'Helda Chandra',
            fullName: 'Helda Chandra',
            chineseName: '曾宪茹',
            jobTitle: 'Chief Executive Officer',
            nameNote: 'Chief Executive Officer',
            subtitle: 'Corporate Strategy, Leadership & Overall Growth',
            bioParagraphs: [
              'Helda Chandra adalah seorang ahli strategi bisnis dan wirausaha dengan lebih dari 20 tahun pengalaman mendampingi lembaga pemerintah Indonesia, badan usaha milik negara (BUMN), serta perusahaan swasta, didukung jaringan kuat di komunitas pemerintahan dan bisnis di Indonesia maupun Tiongkok untuk memfasilitasi masuk pasar, kemitraan strategis, dan pertumbuhan bisnis lintas batas.'
            ],
            photo: '/images/profiles/helda_chandra.webp',
            socials: {
              linkedin: 'https://www.linkedin.com/in/helda-chandra-a0b27b1b/',
              instagram: 'https://www.instagram.com/heldachandra',
              email: 'mailto:Heldachandra@gmail.com'
            },
            experiences: [
              'Expert Advisor, Kementerian Ekonomi Kreatif Republik Indonesia (2025 – Sekarang)',
              'Komite Dewan Komisaris, PT. MRT Jakarta (2019 – 2025)',
              'Konsultan Bisnis Non-Aeronautika, PT. Angkasa Pura II Tbk. (BUMN) (2020 – 2021)',
              'Founder & CEO, Communic 8 (2014 – Sekarang)',
              'Managing Partner, Gentala Institute (2025 – Sekarang)',
              'Pengalaman 20+ Tahun di Sektor Swasta dalam advisori bisnis strategis, pemasaran, dan komunikasi pemasaran terpadu',
              'Dosen Tamu di berbagai universitas di Indonesia dalam bidang strategi bisnis, pemasaran, dan komunikasi',
              'Konsultan Masuk Pasar Tiongkok, mendampingi perusahaan Tiongkok dalam masuk pasar, pengembangan bisnis, dan kemitraan strategis di Indonesia'
            ]
          },
          {
            id: 'gandhi',
            callName: 'Gandhi Priambodho',
            fullName: 'Gandhi Priambodho',
            chineseName: '',
            jobTitle: 'Chief Business Development Officer',
            nameNote: 'Chief Business Development Officer',
            subtitle: 'Business, Trade & Investment',
            bioParagraphs: [
              'Gandhi Priambodho adalah profesional pengembangan bisnis internasional dengan pengalaman memperluas perdagangan, investasi, dan kemitraan strategis antara Indonesia dan Tiongkok.',
              'Berdomisili di Beijing sejak 2002, beliau telah membangun jejaring bisnis lintas batas yang luas di berbagai sektor, mencakup kerja sama industri, energi dan mineral, media dan industri kreatif, pariwisata, pendidikan, properti, serta layanan kesehatan.'
            ],
            photo: '/images/profiles/gandhi_priambodho.webp',
            socials: {
              linkedin: 'https://www.linkedin.com/company/8-vice/',
              instagram: 'https://www.instagram.com/8viceofficial',
              email: 'mailto:hello@8vice.com'
            },
            experiences: [
              'Nanyang Bridge Media, co. Ltd',
              'Red&White China',
              'Beijing An Hua Property Consultant, China',
              'CENTURY 21 Troop Real Estate, China',
              'Indonesia Shangbao',
              'PT Falah Jaya Agung, Indonesia',
              'Lippo Group, Indonesia',
              'Indonesia Air Show Foundation'
            ]
          },
          {
            id: 'christine',
            callName: 'Christine Susanna Tjhin',
            fullName: 'Christine Susanna Tjhin',
            chineseName: '',
            jobTitle: 'Chief Strategy Officer',
            nameNote: 'Chief Strategy Officer',
            subtitle: 'Strategy, Policy & Institutional Relations',
            bioParagraphs: [
              'Christine Susanna Tjhin adalah pakar hubungan Indonesia–Tiongkok terkemuka dengan pengalaman lebih dari 20 tahun di bidang riset kebijakan, komunikasi strategis, dan urusan internasional yang mendorong kemitraan strategis dan berkelanjutan antara Indonesia dan Tiongkok. Beliau juga menjabat sebagai penasihat urusan Tiongkok di Dewan Pertahanan Nasional (DPN) RI, Senior Expert di Foreign Policy Community Indonesia (FPCI), serta memegang peran penasihat di berbagai jejaring kebijakan terkait Tiongkok.'
            ],
            photo: '/images/profiles/christine_tjhin.webp',
            socials: {
              linkedin: 'https://www.linkedin.com/in/christine-susanna-tjhin-0a9557b/',
              instagram: 'https://www.instagram.com/8viceofficial',
              email: 'mailto:hello@8vice.com'
            },
            experiences: [
              'Anggota Badan Pengawas – Dewan Sinolog Indonesia / Indonesia Council of Sinologists (2023 – Sekarang)',
              'Senior Indonesian Expert, China-Indonesia Industrial Cooperation Research Center – Fujian, Tiongkok (2023 – Sekarang)',
              'Southeast Asian Experts Group – Shanxi Carbon-Peak Carbon-Neutral Energy Revolution Research Institute (CCERR) (2024 – Sekarang)',
              'Senior Expert Member, Foreign Policy Community Indonesia (FPCI), China Policy Group – Jakarta, Indonesia (2017 – Sekarang)',
              'Anggota Dewan Pakar (Intellectual Council), Perhimpunan Indonesia Tionghoa (INTI) – Jakarta, Indonesia (2005 – 2012)',
              'Peneliti di Centre for Strategic and International Studies (CSIS), Indonesia (2003 – 2019)',
              'Indonesian Pluralism Institute (IPI) (2002 – 2003)'
            ]
          },
          {
            id: 'james',
            callName: 'James He',
            fullName: 'James He (Wei He)',
            chineseName: '何炜',
            jobTitle: 'Chief China Affairs Officer',
            nameNote: 'Chief China Affairs Officer',
            subtitle: 'China Affairs & Industrial Collaboration',
            bioParagraphs: [
              'James He (Wei He) adalah spesialis lintas batas dengan pengalaman luas di bidang advisori pemerintahan, pembiayaan infrastruktur, sumber daya kritis, dan teknologi hiburan di Indonesia, Tiongkok, maupun pasar internasional.',
              'Lulusan B.Com dari University of Toronto, ia memadukan lebih dari satu dekade kepemimpinan pengembangan bisnis internasional di China Film Group dengan peran advisori strategis di bidang keamanan siber, kolaborasi energi, MRO pertahanan udara, serta proyek industri skala besar.'
            ],
            photo: '/images/profiles/james_he.webp',
            socials: {
              linkedin: 'https://www.linkedin.com/company/8-vice/',
              instagram: 'https://www.instagram.com/8viceofficial',
              email: 'mailto:hello@8vice.com'
            },
            experiences: [
              'Penasihat & partisipan, Indonesia Cyber Security Forum (ICSF)',
              'Senior China Affair Specialist, Gentala Institute China Desk',
              'Penasihat strategi pertahanan udara & peralatan MRO, Indonesian Air Power Study Center (PSAPI)',
              'Penasihat teknologi nuklir dan kolaborasi internasional antara Institut Teknologi PLN (IT PLN) dan North China Electric Power University (NCEPU)',
              'Konsultan perencanaan strategis internasional untuk pengembangan teknologi eksoskeleton, Beijing Institute of Technology (BIT)',
              'Konsultan keuangan & lokalisasi untuk Pegasus Capital International (PLTU Calbar-1 2x100MW Kalimantan Timur, 2019–2025), proyek terowongan Ulaanbaatar (China Design Group, 2024–2025), serta tambang tembaga/emas Nalgar Khundii di Mongolia (2023–2025)',
              'Head of International Business Development, China Film Giant Screen Co., Ltd., China Film Group (2010–2023) & Anggota Dewan Advanced Imaging Committee, CSMPTE',
              'Penasihat teknologi & pemasaran untuk Cinemaxx Indonesia (Karawaci & Medan, 2013–2023), Barco America (2015–2023), Deluxe Technicolor Burbank (2015–2023), Pixelogic Media Burbank (2019–2023), dan Brenden Theater Group Las Vegas (2015–2021)'
            ]
          }
        ],

        valuesEyebrow: 'NILAI-NILAI INTI KAMI',
        valuesTitle: 'Prinsip yang Memandu Setiap Kemitraan.',
        valuesLead:
          'Enam nilai fundamental yang menjadi standar etika, kualitas pemikiran, dan komitmen jangka panjang 8 Vice dalam mendampingi setiap klien.',
        values: [
          {
            num: '01',
            title: 'Trust & Integrity',
            sub: 'Kepercayaan & Integritas',
            desc: 'Kami menjunjung tinggi transparansi, etika profesional, dan hubungan bisnis yang bertanggung jawab di setiap penugasan.'
          },
          {
            num: '02',
            title: 'Cultural Intelligence',
            sub: 'Kecerdasan Budaya',
            desc: 'Kami memahami bahwa setiap pasar memiliki praktik bisnis, gaya komunikasi, dan ekspektasi institusional yang berbeda.'
          },
          {
            num: '03',
            title: 'Strategic Thinking',
            sub: 'Pemikiran Strategis',
            desc: 'Kami melihat lebih jauh dari transaksi jangka pendek untuk memahami konteks luas, sasaran jangka panjang, dan implikasi strategis.'
          },
          {
            num: '04',
            title: 'Collaboration',
            sub: 'Kolaborasi Terarah',
            desc: 'Kami meyakini bahwa kemajuan bermakna lahir dari penyatuan orang, kapabilitas, dan perspektif yang tepat.'
          },
          {
            num: '05',
            title: 'Mutual Value',
            sub: 'Nilai Timbal Balik',
            desc: 'Kami berfokus membangun kemitraan yang menciptakan manfaat nyata bagi klien beserta para mitra kolaboratornya.'
          },
          {
            num: '06',
            title: 'Long-Term Perspective',
            sub: 'Perspektif Jangka Panjang',
            desc: 'Kami memprioritaskan relasi dan strategi yang mampu menopang pengembangan bisnis berkelanjutan dari waktu ke waktu.'
          }
        ],

        ctaEyebrow: 'MULAI KOLABORASI LINTAS BATAS',
        ctaTitle: 'Siap Menjajaki Peluang Lintas Batas Bersama 8 Vice?',
        ctaDesc:
          'Diskusikan rencana ekspansi pasar, pencarian mitra strategis, atau inisiatif kolaborasi bilateral Anda bersama tim penasihat kami.',
        ctaPrimary: 'Mulai Percakapan Strategis',
        ctaSecondary: 'Jelajahi Layanan Kami'
      }
      : {
        breadcrumbHome: 'Home',
        breadcrumbCurrent: 'About Us',
        eyebrow: 'BILATERAL STRATEGIC ADVISORY',
        heroTitleLine1: 'Built on Insight.',
        heroTitleLine2: 'Driven by Connectivity.',
        heroSubtitle:
          'Strategic Advisory, Cross-Border Partnerships, and Market Engagement Across Indonesia and China.',
        heroBannerBadge: 'OUR FOUNDING MANDATE · INDONESIA–CHINA CORRIDOR',
        heroBannerQuote:
          '8 Vice was established to help businesses navigate the opportunities and complexities of cross-border expansion, with a particular focus on Indonesia and China.',
        heroBannerSub:
          'Bridging local market understanding, trusted stakeholder relationships, and practical execution across two of Asia’s most dynamic economies.',

        overviewEyebrow: 'OUR BACKGROUND',
        overviewTitle: 'Shaped by Two Markets. Built for Cross-Border Certainty.',
        overviewLead:
          '8 Vice serves as a strategic partner for businesses and institutions seeking to establish their presence, strengthen their networks, and explore new avenues for growth across Indonesia and China.',
        overviewP1:
          'Our work brings together strategic advisory, business development, stakeholder engagement, and communications to help organizations move beyond market exploration toward structured business opportunities.',
        overviewP2:
          'With an understanding of both commercial objectives and the importance of local context, we help organizations navigate regulatory nuances, business cultures, and industry landscapes with clarity.',
        overviewQuote:
          'When markets are better connected, opportunities become more accessible and partnerships become more meaningful.',
        overviewPhotoBadge: 'EXECUTIVE ADVISORY CORRIDOR',
        overviewPhotoTitle: 'Connecting Strategy, Stakeholders & Market Execution',
        foundationsHeader: 'THREE ESSENTIAL FOUNDATIONS OF INTERNATIONAL BUSINESS',
        foundationsSub:
          'We believe that successful cross-border expansion is built on three interconnected foundations:',
        foundations: [
          {
            num: '01',
            tag: 'FOUNDATION ONE',
            title: 'A Clear Understanding of the Market',
            desc: 'Decoding market dynamics, commercial realities, and regulatory considerations across Indonesia and China to inform sound decisions.'
          },
          {
            num: '02',
            tag: 'FOUNDATION TWO',
            title: 'Meaningful Stakeholder Relationships',
            desc: 'Building credible engagement with businesses, government institutions, industry associations, and key decision-makers.'
          },
          {
            num: '03',
            tag: 'FOUNDATION THREE',
            title: 'Turning Strategy into Action',
            desc: 'Translating market ambition into structured commercial opportunities, aligned partnerships, and practical execution on the ground.'
          }
        ],

        who: {
          eyebrow: 'WHO WE ARE',
          title: ['Bridging Markets.', 'Building Partnerships.', 'Creating Opportunities.'],
          lead:
            '8 Vice is an Indonesia–China strategic advisory and business development firm focused on helping organizations navigate cross-border opportunities with greater clarity, confidence, and strategic direction.',
          desc:
            'We work at the intersection of business strategy, market intelligence, stakeholder engagement, communications, and partnership development. Successful international expansion requires more than market access—it requires local insight, cultural intelligence, trusted relationships, and practical execution.',
          pillars: [
            {
              title: 'Local Market Insight',
              desc: 'Deep understanding of the regulatory landscapes, local consumer nuances, and business operating environments in Indonesia and China.'
            },
            {
              title: 'Cultural Intelligence',
              desc: 'Bridging business customs, negotiation styles, and institutional expectations to eliminate friction in bilateral communication.'
            },
            {
              title: 'Trusted Relationships',
              desc: 'Direct access to relevant business ecosystems, industry associations, and verified commercial stakeholders.'
            },
            {
              title: 'Actionable Strategy',
              desc: 'Translating high-level corporate objectives into concrete go-to-market plans, partnerships, and measurable outcomes.'
            }
          ]
        },

        vmEyebrow: 'VISION & MISSION',
        vmHeading: 'Our Strategic Direction & Long-Term Purpose.',
        vmSubheading:
          'Building a trusted bridge for sustainable commercial and institutional collaboration between Indonesia and China.',
        visionBadge: 'OUR VISION',
        visionTitle: 'A Trusted Strategic Gateway Connecting Indonesia & China',
        visionText:
          'To become a trusted strategic gateway connecting Indonesia and China, enabling businesses and institutions to create sustainable value through cross-border collaboration.',
        missionBadge: 'OUR MISSION · 5 STRATEGIC PILLARS',
        missions: [
          {
            code: '01',
            title: 'Connect Markets',
            enTitle: 'Market Intelligence & Access',
            desc: 'Help businesses understand and access opportunities across Indonesia and China through market insight and strategic guidance.'
          },
          {
            code: '02',
            title: 'Build Partnerships',
            enTitle: 'Bilateral Relationship Facilitation',
            desc: 'Facilitate meaningful business relationships and collaboration among companies, institutions, and industry stakeholders.'
          },
          {
            code: '03',
            title: 'Enable Market Expansion',
            enTitle: 'Go-To-Market & Commercial Growth',
            desc: 'Support organizations in developing practical strategies for entering new markets and expanding their commercial presence.'
          },
          {
            code: '04',
            title: 'Bridge Business Cultures',
            enTitle: 'Cross-Cultural Alignment',
            desc: 'Promote better understanding between Indonesian and Chinese business communities through cross-cultural communication and engagement.'
          },
          {
            code: '05',
            title: 'Create Sustainable Value',
            enTitle: 'Long-Term Mutual Benefit',
            desc: 'Encourage partnerships that deliver mutual benefits and contribute to long-term economic and business development.'
          }
        ],

        crossBorderProcess: {
          title: 'Our Cross-Border Process',
          steps: [
            { num: '01', name: 'Discovery', desc: 'Understanding objectives, capabilities & target market priorities.' },
            { num: '02', name: 'Assessment', desc: 'Evaluating market conditions, regulatory dynamics & feasibility.' },
            { num: '03', name: 'Strategize', desc: 'Formulating market positioning, partner criteria & engagement roadmap.' },
            { num: '04', name: 'Connect', desc: 'Facilitating targeted introductions and curated B2B/institutional dialogues.' },
            { num: '05', name: 'Follow-Through', desc: 'Supporting partnership discussions, proposals & implementation coordination.' }
          ]
        },

        leadEyebrow: 'FOUNDER & LEADERSHIP PERSPECTIVE',
        leadTitle: 'Leadership with a Cross-Border Perspective.',
        leadSubtitle:
          'Combining commercial thinking, institutional understanding, and cultural intelligence to unlock bilateral growth.',
        leadP1:
          '8 Vice is led by professionals with experience spanning business strategy, branding, integrated marketing communications, stakeholder engagement, and Indonesia–China business development.',
        leadP2:
          'The leadership perspective combines commercial thinking with an understanding of institutional environments, market positioning, and the role of strategic relationships in business growth.',
        leadP3:
          'Through experience across the private sector, professional networks, and institutional initiatives, our leadership brings a multidisciplinary approach to identifying opportunities and developing partnerships.',
        leadQuote:
          'We believe effective leadership in cross-border business requires strategic clarity, cultural intelligence, professional integrity, and a commitment to creating value for all parties involved.',
        leadDomainsTitle: '6 Core Leadership & Advisory Domains',
        leadDomains: [
          {
            code: '01',
            title: 'Business Strategy & Corporate Advisory',
            desc: 'Formulating market expansion roadmaps, commercial business models, and executive-level advisory.'
          },
          {
            code: '02',
            title: 'Branding & Integrated Marketing Communications',
            desc: 'Crafting corporate narratives, brand positioning, and localized messaging for cross-border audiences.'
          },
          {
            code: '03',
            title: 'Institutional & Stakeholder Engagement',
            desc: 'Facilitating constructive dialogue with government bodies, public agencies, and industry associations.'
          },
          {
            code: '04',
            title: 'Indonesia–China Business Development',
            desc: 'Curating B2B partnerships, local partner identification, and bilateral commercial initiatives.'
          },
          {
            code: '05',
            title: 'Urban Transportation, Infrastructure & Tourism',
            desc: 'Hands-on sector experience across public mobility, urban development, and bilateral destination promotion.'
          },
          {
            code: '06',
            title: 'Media Relations & Reputation Management',
            desc: 'Building public credibility, strategic media partnerships, press engagement, and crisis readiness.'
          }
        ],

        peopleEyebrow: 'THE PEOPLE BEHIND 8 VICE',
        peopleTitle: 'The People Behind 8 Vice.',
        peopleLead:
          'Meet the multidisciplinary leaders driving our strategic advisory, stakeholder connectivity, and cross-border execution across Indonesia and China.',
        experiencesHeading: 'Experiences',
        peopleClickHint: 'View full profile',
        peopleModalClose: 'Close Profile',
        peopleModalLabel: 'A MESSAGE FROM THE 8 VICE LEADERSHIP TEAM',
        people: [
          {
            id: 'helda',
            callName: 'Helda Chandra',
            fullName: 'Helda Chandra',
            chineseName: '曾宪茹',
            jobTitle: 'Chief Executive Officer',
            nameNote: 'Chief Executive Officer',
            subtitle: 'Corporate Strategy, Leadership & Overall Growth',
            bioParagraphs: [
              'Helda Chandra is a business strategist and entrepreneur with over 20 years of experience advising Indonesian government institutions, state-owned enterprises, and private-sector companies, backed by strong networks across government and business communities in Indonesia and China to facilitate market entry, strategic partnerships, and cross-border business growth.'
            ],
            photo: '/images/profiles/helda_chandra.webp',
            socials: {
              linkedin: 'https://www.linkedin.com/in/helda-chandra-a0b27b1b/',
              instagram: 'https://www.instagram.com/heldachandra',
              email: 'mailto:Heldachandra@gmail.com'
            },
            experiences: [
              'Expert Advisor, Ministry of Economic Creative Republic of Indonesia (2025 – Now)',
              'Board of Commissioners Committee, PT. MRT Jakarta (2019 – 2025)',
              "Non Aeronautical Business Consultant, PT. Angkasa Pura II Tbk. (Indonesia’s State Owned Company) (2020–2021)",
              'Founder & CEO, Communic 8 (2014 – Now)',
              'Managing Partner, Gentala Institute (2025 – Now)',
              '20+ Years of Private-Sector Experience in strategic business advisory, marketing, and integrated marketing communications.',
              'Guest Lecturer at various universities across Indonesia, sharing expertise in business strategy, marketing, and communications.',
              'China Market Entry Consultant, advising Chinese companies on market entry, business development, and strategic partnerships in Indonesia.'
            ]
          },
          {
            id: 'gandhi',
            callName: 'Gandhi Priambodho',
            fullName: 'Gandhi Priambodho',
            chineseName: '',
            jobTitle: 'Chief Business Development Officer',
            nameNote: 'Chief Business Development Officer',
            subtitle: 'Business, Trade & Investment',
            bioParagraphs: [
              'Gandhi Priambodho is an international business development professional with experience expanding trade, investment, and strategic partnerships between Indonesia and China.',
              'Based in Beijing since 2002, he has established extensive cross-border business networks across multiple sectors, including industrial cooperation, energy and minerals, media and creative industries, tourism, education, real estate, and healthcare.'
            ],
            photo: '/images/profiles/gandhi_priambodho.webp',
            socials: {
              linkedin: 'https://www.linkedin.com/company/8-vice/',
              instagram: 'https://www.instagram.com/8viceofficial',
              email: 'mailto:hello@8vice.com'
            },
            experiences: [
              'Nanyang Bridge Media, co. Ltd',
              'Red&White China',
              'Beijing An Hua Property Consultant, China',
              'CENTURY 21 Troop Real Estate, China',
              'Indonesia Shangbao',
              'PT Falah Jaya Agung, Indonesia',
              'Lippo Group, Indonesia',
              'Indonesia Air Show Foundation'
            ]
          },
          {
            id: 'christine',
            callName: 'Christine Susanna Tjhin',
            fullName: 'Christine Susanna Tjhin',
            chineseName: '',
            jobTitle: 'Chief Strategy Officer',
            nameNote: 'Chief Strategy Officer',
            subtitle: 'Strategy, Policy & Institutional Relations',
            bioParagraphs: [
              'Christine Susanna Tjhin is a prominent Indonesia–China relations expert with over 20 years of experience in policy research, strategic communication, and international affairs, promotes sustainable and strategic partnerships between Indonesia and China. She also serves as an advisor on China affairs to Indonesia’s National Defense Council (DPN), a Senior Expert at the Foreign Policy Community Indonesia (FPCI), and holds advisory roles in several China-focused policy networks.'
            ],
            photo: '/images/profiles/christine_tjhin.webp',
            socials: {
              linkedin: 'https://www.linkedin.com/in/christine-susanna-tjhin-0a9557b/',
              instagram: 'https://www.instagram.com/8viceofficial',
              email: 'mailto:hello@8vice.com'
            },
            experiences: [
              'Supervisory Board Member - Indonesia Council of Sinologists (2023 – now)',
              'Senior Indonesian Expert at the China-Indonesia Industrial Cooperation Research Center - Fujian, China (2023 – now)',
              '2024 - to date: Southeast Asian Experts Group - Shanxi Carbon-Peak Carbon-Neutral Energy Revolution Research Institute (CCERR) (2024 – now)',
              'Senior Expert Member at the Foreign Policy Community Indonesia (FPCI), China Policy Group - Jakarta, Indonesia (2017 – now)',
              'Intellectual Council Member at the Chinese Indonesian Association (INTI) - Jakarta, Indonesia (2005–2012)',
              'Centre for Strategic and International Studies (CSIS), Indonesia (2003–2019)',
              'Indonesian Pluralism Institute (IPI) (2002 – 2003)'
            ]
          },
          {
            id: 'james',
            callName: 'James He',
            fullName: 'James He (Wei He)',
            chineseName: '何炜',
            jobTitle: 'Chief China Affairs Officer',
            nameNote: 'Chief China Affairs Officer',
            subtitle: 'China Affairs & Industrial Collaboration',
            bioParagraphs: [
              'James He (Wei He) is a cross-border specialist with extensive experience across government advisory, infrastructure finance, critical resources, and entertainment technology in Indonesia, China, and international markets.',
              'Educated in Commerce at the University of Toronto, he pairs over a decade of international business development leadership at China Film Group with strategic advisory roles spanning cybersecurity, energy collaboration, air defense MRO, and large-scale industrial localization.'
            ],
            photo: '/images/profiles/james_he.webp',
            socials: {
              linkedin: 'https://www.linkedin.com/company/8-vice/',
              instagram: 'https://www.instagram.com/8viceofficial',
              email: 'mailto:hello@8vice.com'
            },
            experiences: [
              'Advisor and participant, Indonesia Cyber Security Forum (ICSF)',
              'Senior China Affair Specialist, Gentala Institute China Desk',
              'Air defence strategy and equipment MRO advisor, Indonesian Air Power Study Center (PSAPI)',
              'Nuclear technology and international collaboration advisor, facilitator between Institut Teknologi PLN (IT PLN) and North China Electric Power University (NCEPU)',
              'International strategic planning consultant for exoskeleton technology development, Beijing Institute of Technology (BIT)',
              'Finance and localization consultant for Pegasus Capital International (Calbar-1 2x100MW Coal Power Plant East Kalimantan, 2019–2025), Ulaanbaatar tunnel project (China Design Group, 2024–2025), and Nalgar Khundii Copper/Gold Mine project (Mongolia, 2023–2025)',
              'Head of International Business Development, China Film Giant Screen Co., Ltd., China Film Group (2010–2023) & Board Member, Advanced Imaging Committee, China Society of Motion Picture and Television Engineers (CSMPTE)',
              'Technology & marketing advisor for Cinemaxx entertainment project (Karawaci & Medan, Indonesia, 2013–2023), Barco America (2015–2023), Deluxe Technicolor Burbank (2015–2023), Pixelogic Media Burbank (2019–2023), and Brenden Theater Group Las Vegas (2015–2021)'
            ]
          }
        ],

        valuesEyebrow: 'OUR CORE VALUES',
        valuesTitle: 'Principles That Guide Every Partnership.',
        valuesLead:
          'Six foundational principles that define how 8 Vice advises clients, builds relationships, and creates lasting cross-border value.',
        values: [
          {
            num: '01',
            title: 'Trust & Integrity',
            sub: 'Responsible Conduct',
            desc: 'We value transparency, professional conduct, and responsible business relationships in every engagement.'
          },
          {
            num: '02',
            title: 'Cultural Intelligence',
            sub: 'Cross-Border Nuance',
            desc: 'We recognize that different markets have different business practices, communication styles, and expectations.'
          },
          {
            num: '03',
            title: 'Strategic Thinking',
            sub: 'Beyond Immediate Transactions',
            desc: 'We look beyond immediate transactions to understand the broader context, long-term objectives, and potential implications of each opportunity.'
          },
          {
            num: '04',
            title: 'Collaboration',
            sub: 'Aligned Capabilities',
            desc: 'We believe meaningful progress comes from bringing together the right people, capabilities, and perspectives.'
          },
          {
            num: '05',
            title: 'Mutual Value',
            sub: 'Shared Commercial Benefit',
            desc: 'We seek to develop partnerships that create meaningful benefits for clients and their collaborators.'
          },
          {
            num: '06',
            title: 'Long-Term Perspective',
            sub: 'Sustainable Growth',
            desc: 'We prioritize relationships and strategies that can support sustainable business development over time.'
          }
        ],

        ctaEyebrow: 'START YOUR CROSS-BORDER JOURNEY',
        ctaTitle: 'Ready to Explore Cross-Border Opportunities with 8 Vice?',
        ctaDesc:
          'Connect with our advisory team to discuss your market entry priorities, strategic partnership search, or bilateral business initiatives.',
        ctaPrimary: 'Start a Conversation',
        ctaSecondary: 'Explore Our Services'
      };

  // Combine CMS profiles from backend props cleanly (respecting DB sort_order, photos, socials, and dynamically added rows)
  const peopleList = useMemo(() => {
    const pickLoc = (val, fallback = '') => {
      if (!val) return fallback;
      if (typeof val === 'string') {
        const trimmed = val.trim();
        if (trimmed.startsWith('{') && trimmed.endsWith('}')) {
          try {
            const parsed = JSON.parse(trimmed);
            if (parsed && typeof parsed === 'object') {
              return String(parsed[lang] || parsed.en || parsed.id || parsed.cn || fallback).trim();
            }
          } catch (e) {}
        }
        return trimmed;
      }
      if (typeof val === 'object') {
        return String(val[lang] || val.en || val.id || val.cn || Object.values(val)[0] || fallback).trim();
      }
      return fallback;
    };

    const resolvePhotoUrl = (raw, fallback) => {
      if (!raw || typeof raw !== 'string') return fallback;
      const trimmed = raw.trim();
      if (!trimmed) return fallback;
      if (trimmed.startsWith('http://') || trimmed.startsWith('https://') || trimmed.startsWith('/')) return trimmed;
      if (trimmed.startsWith('images/')) return `/${trimmed}`;
      return `/storage/${trimmed}`;
    };

    const findBasePerson = (dbProfile) => {
      const key = `${dbProfile.call_name || ''} ${dbProfile.full_title || ''} ${dbProfile.title || ''}`.toLowerCase();
      return copy.people.find((bp) => {
        if (bp.id === 'helda' && key.includes('helda')) return true;
        if (bp.id === 'gandhi' && key.includes('gandhi')) return true;
        if (bp.id === 'christine' && key.includes('christine')) return true;
        if (bp.id === 'james' && key.includes('james')) return true;
        return false;
      });
    };

    if (Array.isArray(profiles) && profiles.length > 0) {
      return profiles.map((p, idx) => {
        const base = findBasePerson(p);
        const dbBioText = pickLoc(p.short_bio_i18n || p.short_bio || p.description_i18n || p.description, '');
        const dbSocials = p.socials && typeof p.socials === 'object' ? p.socials : null;

        if (base) {
          const dbRole = pickLoc(p.role_i18n || p.role, '');
          const isLegacySeedRole =
            dbRole.includes('Co-Founder') ||
            dbRole.includes('Director of International Business') ||
            dbRole.includes('Senior China Affairs Specialist') ||
            dbRole.includes('首席执行官兼联合创始人') ||
            dbRole.includes('国际业务总监') ||
            dbRole.includes('联合创始人兼战略传播') ||
            dbRole.includes('中国部资深专家');
          return {
            ...base,
            jobTitle: (!isLegacySeedRole && dbRole) ? dbRole : base.jobTitle,
            photo: resolvePhotoUrl(p.image, base.photo),
            socials: dbSocials || base.socials,
          };
        }

        return {
          id: `profile-${p.id || idx}`,
          callName: p.call_name || pickLoc(p.title_i18n || p.title, 'Advisor'),
          fullName: pickLoc(p.full_title_i18n || p.full_title || p.title_i18n || p.title, p.call_name || 'Advisor'),
          chineseName: '',
          jobTitle: pickLoc(p.role_i18n || p.role, ''),
          nameNote: pickLoc(p.role_i18n || p.role, ''),
          subtitle: Array.isArray(p.focus_tags) && p.focus_tags.length > 0 ? p.focus_tags.join(', ') : '',
          bioParagraphs: dbBioText ? dbBioText.split(/\n+/).filter(Boolean) : [],
          photo: resolvePhotoUrl(p.image, '/images/executive_profile_bw.webp'),
          socials: dbSocials || {},
          experiences: Array.isArray(p.focus_tags) ? p.focus_tags : [],
        };
      });
    }

    return copy.people;
  }, [profiles, copy.people, lang]);

  return (
    <MainLayout>
      <SeoHead pageCode="about" />

      <div className="about-redesign-root">
        <style
          dangerouslySetInnerHTML={{
            __html: `
            .about-redesign-root {
              background: #08090C;
              color: #FFFFFF;
              position: relative;
              overflow: hidden;
            }
            @keyframes aboutStreamMove {
              0% { stroke-dashoffset: 0; }
              100% { stroke-dashoffset: -200; }
            }
            @keyframes aboutBeaconPulse {
              0%, 100% { opacity: 0.35; transform: scale(0.9); }
              50% { opacity: 1; transform: scale(1.35); }
            }
            @keyframes aboutModalIn {
              0% { opacity: 0; transform: translateY(24px) scale(0.96); }
              100% { opacity: 1; transform: translateY(0) scale(1); }
            }
            @keyframes aboutBackdropIn {
              0% { opacity: 0; }
              100% { opacity: 1; }
            }

            /* Scroll-Triggered Content Transition Animations */
            .about-anim {
              opacity: 0;
              transform: translateY(32px);
              transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                          transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
              will-change: opacity, transform;
            }
            .about-anim.about-anim--left {
              transform: translateX(-36px);
            }
            .about-anim.about-anim--right {
              transform: translateX(36px);
            }
            .about-anim.about-anim--scale {
              transform: translateY(24px) scale(0.96);
            }
            .about-anim.is-visible {
              opacity: 1;
              transform: translate(0, 0) scale(1);
            }
            .about-delay-1 { transition-delay: 0.1s; }
            .about-delay-2 { transition-delay: 0.2s; }
            .about-delay-3 { transition-delay: 0.3s; }
            .about-delay-4 { transition-delay: 0.4s; }
            .about-delay-5 { transition-delay: 0.5s; }

            .about-city-stream {
              animation: aboutStreamMove 14s linear infinite;
            }
            .about-city-stream-reverse {
              animation: aboutStreamMove 18s linear infinite reverse;
            }
            .about-city-beacon {
              transform-origin: center;
              animation: aboutBeaconPulse 3.2s ease-in-out infinite;
            }
            .about-eyebrow-pill {
              display: inline-flex;
              align-items: center;
              gap: 10px;
              padding: 7px 16px;
              border-radius: 999px;
              background: rgba(230, 57, 70, 0.12);
              border: 1px solid rgba(230, 57, 70, 0.35);
              color: #FF7B7B;
              font-size: 11.5px;
              font-weight: 700;
              letter-spacing: 0.12em;
              text-transform: uppercase;
              margin-bottom: 20px;
            }
            .about-eyebrow-dot {
              width: 7px;
              height: 7px;
              border-radius: 50%;
              background: #E63946;
              box-shadow: 0 0 10px #E63946;
            }
            .about-glass-card {
              background: linear-gradient(180deg, rgba(20, 23, 32, 0.88) 0%, rgba(12, 14, 20, 0.94) 100%);
              border: 1px solid rgba(255, 255, 255, 0.09);
              border-radius: 22px;
              box-shadow: 0 20px 50px rgba(0, 0, 0, 0.45);
              backdrop-filter: blur(14px);
              -webkit-backdrop-filter: blur(14px);
              transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                          border-color 0.35s ease,
                          box-shadow 0.35s ease;
            }
            .about-glass-card:hover {
              transform: translateY(-6px);
              border-color: rgba(230, 57, 70, 0.5);
              box-shadow: 0 26px 60px rgba(0, 0, 0, 0.65), 0 0 36px rgba(230, 57, 70, 0.16);
            }
            .about-person-card {
              cursor: pointer;
              position: relative;
              overflow: hidden;
              display: flex;
              flex-direction: column;
            }
            .about-person-card:hover .about-person-img {
              transform: scale(1.06);
              filter: grayscale(15%) contrast(1.08) brightness(0.98);
            }
            .about-person-card:hover .about-person-cta {
              background: #E63946;
              border-color: #E63946;
              color: #FFFFFF;
              box-shadow: 0 8px 24px rgba(230, 57, 70, 0.45);
            }
            .about-person-img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              object-position: top center;
              display: block;
              filter: grayscale(85%) contrast(1.1) brightness(0.92);
              transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1),
                          filter 0.5s ease;
            }
            /* Cross-Border Process Horizontal Timeline */
            .about-process-grid {
              display: grid;
              grid-template-columns: repeat(5, 1fr);
              gap: 28px;
              position: relative;
            }
            .about-process-step {
              position: relative;
              z-index: 2;
            }
            .about-step-dot {
              width: 40px;
              height: 40px;
              border-radius: 50%;
              background: #0E1015;
              border: 2px solid #E63946;
              color: #FFFFFF;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 13px;
              font-weight: 700;
              margin-bottom: 18px;
              box-shadow: 0 0 16px rgba(230, 57, 70, 0.45), inset 0 0 8px rgba(230, 57, 70, 0.25);
              position: relative;
              z-index: 3;
              transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, background 0.3s ease;
            }
            .about-process-step:hover .about-step-dot {
              transform: scale(1.12);
              background: #E63946;
              color: #FFFFFF;
              box-shadow: 0 0 24px rgba(230, 57, 70, 0.85);
            }
            .about-process-line {
              position: absolute;
              top: 19px;
              left: 20px;
              width: calc(100% + 28px);
              height: 2px;
              background: linear-gradient(90deg, #E63946 0%, rgba(230, 57, 70, 0.7) 60%, rgba(230, 57, 70, 0.3) 100%);
              box-shadow: 0 0 8px rgba(230, 57, 70, 0.4);
              z-index: 1;
              pointer-events: none;
            }
            .about-process-arrow {
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
              width: 16px;
              height: 16px;
              border-radius: 50%;
              background: #0E1015;
              border: 1px solid #E63946;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 11px;
              color: #E63946;
              font-weight: 700;
              box-shadow: 0 0 8px rgba(230, 57, 70, 0.5);
              line-height: 1;
            }
            @media (max-width: 992px) {
              .about-process-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 32px 24px;
              }
              .about-process-line {
                display: none;
              }
            }
            @media (max-width: 580px) {
              .about-process-grid {
                grid-template-columns: 1fr;
                gap: 28px;
              }
              .about-process-step {
                display: flex;
                gap: 16px;
                align-items: flex-start;
              }
              .about-step-dot {
                margin-bottom: 0;
                flex-shrink: 0;
              }
              .about-process-line {
                display: block;
                top: 40px;
                left: 20px;
                width: 2px;
                height: calc(100% + 28px);
                background: linear-gradient(180deg, #E63946 0%, rgba(230, 57, 70, 0.4) 100%);
              }
              .about-process-arrow {
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%) rotate(90deg);
              }
            }
            .about-social-btn {
              width: 34px;
              height: 34px;
              border-radius: 10px;
              background: rgba(10, 12, 18, 0.58);
              backdrop-filter: blur(8px);
              border: 1px solid rgba(255, 255, 255, 0.18);
              color: rgba(255, 255, 255, 0.88);
              display: inline-flex;
              align-items: center;
              justify-content: center;
              text-decoration: none;
              transition: all 0.25s ease;
            }
            .about-social-btn:hover {
              background: #E63946;
              border-color: #E63946;
              color: #FFFFFF;
              transform: translateY(-2px);
              box-shadow: 0 6px 16px rgba(230, 57, 70, 0.4);
            }
            .about-hero-frame {
              position: relative;
              border-radius: 28px;
              overflow: hidden;
              border: 1px solid rgba(255, 255, 255, 0.14);
              box-shadow: 0 32px 80px rgba(0, 0, 0, 0.75), 0 0 60px rgba(230, 57, 70, 0.16);
              background: #0D0F15;
            }
            .about-hero-frame img {
              width: 100%;
              height: 520px;
              object-fit: cover;
              display: block;
              filter: brightness(0.75) contrast(1.1);
              transition: transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
            }
            .about-hero-frame:hover img {
              transform: scale(1.04);
            }
            .about-split-2 {
              display: grid;
              grid-template-columns: 1.08fr 0.92fr;
              gap: 56px;
              align-items: stretch;
            }
            .about-foundations-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 28px;
              position: relative;
            }
            .about-people-grid {
              display: grid;
              grid-template-columns: repeat(4, minmax(0, 1fr));
              gap: 22px;
            }
            .about-mission-grid {
              display: grid;
              grid-template-columns: repeat(6, 1fr);
              gap: 24px;
            }
            .about-mission-card {
              grid-column: span 2;
            }
            .about-mission-card--wide {
              grid-column: span 3;
            }
            .about-domains-grid {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 20px;
            }
            .about-values-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 26px;
            }
            .about-people-list {
              display: flex;
              flex-direction: column;
              gap: 28px;
            }
            .about-person-row {
              display: grid;
              grid-template-columns: 220px 1fr 1.12fr;
              gap: 38px;
              align-items: start;
              padding: 36px;
            }
            .about-person-photo-wrap {
              width: 100%;
              aspect-ratio: 1 / 1;
              border-radius: 18px;
              overflow: hidden;
              background: #10131C;
              border: 1px solid rgba(255, 255, 255, 0.14);
              box-shadow: 0 18px 40px rgba(0, 0, 0, 0.5);
            }
            .about-person-exp-list {
              list-style: none;
              padding: 0;
              margin: 0;
              display: flex;
              flex-direction: column;
              gap: 10px;
            }
            .about-person-exp-list li {
              position: relative;
              padding-left: 18px;
              font-size: 14px;
              line-height: 1.58;
              color: rgba(255, 255, 255, 0.78);
            }
            .about-person-exp-list li::before {
              content: '';
              position: absolute;
              left: 0;
              top: 8px;
              width: 6px;
              height: 6px;
              border-radius: 50%;
              background: #E63946;
              box-shadow: 0 0 8px rgba(230, 57, 70, 0.65);
            }
            @media (max-width: 1080px) {
              .about-person-row {
                grid-template-columns: 190px 1fr;
                gap: 28px;
              }
              .about-person-exp {
                grid-column: 1 / -1;
                padding-top: 20px;
                border-top: 1px solid rgba(255, 255, 255, 0.08);
              }
            }
            @media (max-width: 1024px) {
              .about-split-2 {
                grid-template-columns: 1fr;
                gap: 40px;
              }
              .about-foundations-grid {
                grid-template-columns: 1fr;
              }
              .about-mission-card,
              .about-mission-card--wide {
                grid-column: span 6;
              }
              .about-values-grid {
                grid-template-columns: repeat(2, 1fr);
              }
            }
            @media (max-width: 640px) {
              .about-hero-frame img {
                height: 440px;
              }
              .about-person-row {
                grid-template-columns: 1fr;
                padding: 24px;
                gap: 22px;
              }
              .about-person-photo-wrap {
                max-width: 220px;
              }
              .about-domains-grid,
              .about-values-grid {
                grid-template-columns: 1fr;
              }
            }
          `
          }}
        />

        {/* ========================================================================= */}
        {/* 00 · HERO BANNER: CENTERED TITLE & BREADCRUMB + LARGE STATEMENT IMAGE     */}
        {/* ========================================================================= */}
        <section
          style={{
            position: 'relative',
            padding: '68px 0 96px',
            background:
              'radial-gradient(ellipse 75% 55% at 50% 0%, rgba(230, 57, 70, 0.20) 0%, rgba(230, 57, 70, 0.05) 48%, transparent 75%), #08090C',
            borderBottom: '1px solid rgba(255, 255, 255, 0.07)'
          }}
        >
          <ModernCityBg opacity={0.34} />

          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            {/* Centered Breadcrumb & Title Block */}
            <div className="about-anim is-visible" style={{ textAlign: 'center', maxWidth: '920px', margin: '0 auto 52px' }}>
              {/* Centered Breadcrumb */}
              <nav
                aria-label="Breadcrumb"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '6px 16px',
                  borderRadius: '999px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  fontSize: '12.5px',
                  fontWeight: 500,
                  color: 'rgba(255, 255, 255, 0.6)',
                  marginBottom: '24px'
                }}
              >
                <Link href="/" style={{ color: 'rgba(255, 255, 255, 0.75)', textDecoration: 'none' }}>
                  {copy.breadcrumbHome}
                </Link>
                <span style={{ opacity: 0.35 }}>/</span>
                <span style={{ color: '#FF6B76', fontWeight: 600 }}>{copy.breadcrumbCurrent}</span>
              </nav>

              <div>
                <div className="about-eyebrow-pill">
                  <span className="about-eyebrow-dot" />
                  <span>{copy.eyebrow}</span>
                </div>
              </div>

              <h1
                style={{
                  fontSize: 'clamp(38px, 5vw, 66px)',
                  fontWeight: 800,
                  lineHeight: 1.08,
                  letterSpacing: '-0.03em',
                  color: '#FFFFFF',
                  margin: '0 0 20px'
                }}
              >
                <span style={{ display: 'block' }}>{copy.heroTitleLine1}</span>
                <span
                  style={{
                    display: 'block',
                    background: 'linear-gradient(90deg, #FFFFFF 0%, #FF7B7B 55%, #E63946 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  {copy.heroTitleLine2}
                </span>
              </h1>

              <p
                style={{
                  fontSize: 'clamp(16px, 1.8vw, 20px)',
                  lineHeight: 1.6,
                  color: 'rgba(255, 255, 255, 0.72)',
                  maxWidth: '760px',
                  margin: '0 auto'
                }}
              >
                {copy.heroSubtitle}
              </p>
            </div>

            {/* Large Panoramic Image with Embedded Statement Inside */}
            <div className="about-hero-frame about-anim about-anim--scale is-visible about-delay-1">
              <img
                src="/images/china_city_network.webp"
                alt="8 Vice Indonesia-China Cross-Border Gateway"
                loading="lazy"
                decoding="async"
              />

              {/* Multi-layered Dark & Red Cinematic Overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(180deg, rgba(8, 9, 12, 0.25) 0%, rgba(8, 9, 12, 0.55) 45%, rgba(8, 9, 12, 0.95) 100%), radial-gradient(circle at 20% 85%, rgba(230, 57, 70, 0.32) 0%, transparent 55%)'
                }}
              />

              {/* Top Corner Status Pills */}
              <div
                style={{
                  position: 'absolute',
                  top: '26px',
                  left: '28px',
                  right: '28px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '12px',
                  zIndex: 2
                }}
              >
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '7px 15px',
                    borderRadius: '999px',
                    background: 'rgba(10, 12, 18, 0.82)',
                    border: '1px solid rgba(255, 255, 255, 0.16)',
                    backdropFilter: 'blur(10px)',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#FFFFFF'
                  }}
                >
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#E63946' }} />
                  {copy.heroBannerBadge}
                </span>

                <span
                  style={{
                    padding: '6px 14px',
                    borderRadius: '999px',
                    background: 'rgba(230, 57, 70, 0.2)',
                    border: '1px solid rgba(230, 57, 70, 0.45)',
                    backdropFilter: 'blur(10px)',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    color: '#FFB3B8'
                  }}
                >
                  JAKARTA &harr; BEIJING &middot; SHANGHAI &middot; SHENZHEN
                </span>
              </div>

              {/* Embedded Statement Inside the Large Image */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '32px',
                  left: '32px',
                  right: '32px',
                  zIndex: 2
                }}
              >
                <div
                  style={{
                    maxWidth: '980px',
                    margin: '0 auto',
                    padding: '32px 38px',
                    borderRadius: '22px',
                    background: 'linear-gradient(135deg, rgba(14, 17, 24, 0.90) 0%, rgba(10, 12, 18, 0.95) 100%)',
                    border: '1px solid rgba(255, 255, 255, 0.14)',
                    borderLeft: '5px solid #E63946',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.65)'
                  }}
                >
                  <p
                    style={{
                      fontSize: 'clamp(18px, 2.2vw, 26px)',
                      fontWeight: 700,
                      lineHeight: 1.42,
                      color: '#FFFFFF',
                      margin: '0 0 12px',
                      letterSpacing: '-0.015em'
                    }}
                  >
                    &ldquo;{copy.heroBannerQuote}&rdquo;
                  </p>
                  <p
                    style={{
                      fontSize: '14.5px',
                      lineHeight: 1.6,
                      color: 'rgba(255, 255, 255, 0.68)',
                      margin: 0
                    }}
                  >
                    {copy.heroBannerSub}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 01 · COMPANY OVERVIEW & 3 CONNECTED FOUNDATIONS                           */}
        {/* ========================================================================= */}
        <section
          style={{
            position: 'relative',
            padding: '108px 0',
            background:
              'radial-gradient(ellipse 70% 50% at 10% 35%, rgba(230, 57, 70, 0.11) 0%, transparent 70%), #0A0B0F',
            borderBottom: '1px solid rgba(255, 255, 255, 0.07)'
          }}
        >
          <ModernCityBg opacity={0.18} flip />

          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            {/* Balanced 2-Column Split: Narrative Left, Executive Framed Image Right */}
            <div className="about-split-2">
              {/* Left Column */}
              <div className="about-anim about-anim--left" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div>
                  <div className="about-eyebrow-pill">
                    <span className="about-eyebrow-dot" />
                    <span>{copy.overviewEyebrow}</span>
                  </div>
                </div>

                <h2
                  style={{
                    fontSize: 'clamp(30px, 3.4vw, 46px)',
                    fontWeight: 800,
                    lineHeight: 1.15,
                    letterSpacing: '-0.025em',
                    color: '#FFFFFF',
                    margin: '0 0 22px'
                  }}
                >
                  {copy.overviewTitle}
                </h2>

                <p
                  style={{
                    fontSize: '17px',
                    lineHeight: 1.72,
                    color: 'rgba(255, 255, 255, 0.92)',
                    fontWeight: 500,
                    margin: '0 0 18px'
                  }}
                >
                  {copy.overviewLead}
                </p>

                <p
                  style={{
                    fontSize: '15.5px',
                    lineHeight: 1.75,
                    color: 'rgba(255, 255, 255, 0.72)',
                    margin: '0 0 16px'
                  }}
                >
                  {copy.overviewP1}
                </p>

                <p
                  style={{
                    fontSize: '15.5px',
                    lineHeight: 1.75,
                    color: 'rgba(255, 255, 255, 0.72)',
                    margin: '0 0 28px'
                  }}
                >
                  {copy.overviewP2}
                </p>

                {/* Integrated Quote Callout Box */}
                <div
                  style={{
                    background: 'linear-gradient(135deg, rgba(230, 57, 70, 0.14) 0%, rgba(255, 255, 255, 0.02) 100%)',
                    borderLeft: '4px solid #E63946',
                    borderTop: '1px solid rgba(255, 255, 255, 0.09)',
                    borderRight: '1px solid rgba(255, 255, 255, 0.09)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.09)',
                    borderRadius: '0 16px 16px 0',
                    padding: '20px 24px'
                  }}
                >
                  <div
                    style={{
                      fontSize: '16px',
                      fontWeight: 600,
                      fontStyle: 'italic',
                      color: '#FFFFFF',
                      lineHeight: 1.6
                    }}
                  >
                    &ldquo;{copy.overviewQuote}&rdquo;
                  </div>
                </div>
              </div>

              {/* Right Column: Clean Executive Framed Image */}
              <div className="about-anim about-anim--right about-delay-1">
                <div
                  style={{
                    position: 'relative',
                    height: '100%',
                    minHeight: '480px',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    border: '1px solid rgba(255, 255, 255, 0.14)',
                    boxShadow: '0 25px 60px rgba(0, 0, 0, 0.65), 0 0 35px rgba(230, 57, 70, 0.14)',
                    background: '#0D0E13'
                  }}
                >
                  <img
                    src="/images/executive_profile_bw.webp"
                    alt="8 Vice Executive Advisory"
                    loading="lazy"
                    decoding="async"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      filter: 'grayscale(25%) contrast(1.08) brightness(0.92)'
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(to top, rgba(8, 9, 12, 0.96) 0%, rgba(8, 9, 12, 0.35) 50%, rgba(8, 9, 12, 0.15) 100%)'
                    }}
                  />

                  {/* Top Badge */}
                  <div style={{ position: 'absolute', top: '22px', left: '22px' }}>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '7px 14px',
                        borderRadius: '999px',
                        background: 'rgba(10, 12, 16, 0.85)',
                        border: '1px solid rgba(255, 255, 255, 0.18)',
                        backdropFilter: 'blur(10px)',
                        fontSize: '11px',
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                        color: '#FFFFFF',
                        textTransform: 'uppercase'
                      }}
                    >
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#E63946' }} />
                      {copy.overviewPhotoBadge}
                    </span>
                  </div>

                  {/* Bottom Caption & Pillar Summary inside Image */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '24px',
                      left: '24px',
                      right: '24px',
                      padding: '22px 24px',
                      borderRadius: '18px',
                      background: 'rgba(12, 14, 20, 0.88)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      backdropFilter: 'blur(12px)'
                    }}
                  >
                    <div
                      style={{
                        fontSize: '11.5px',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        color: '#FF7B7B',
                        textTransform: 'uppercase',
                        marginBottom: '6px'
                      }}
                    >
                      INDONESIA &harr; CHINA ADVISORY
                    </div>
                    <div style={{ fontSize: '18px', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.35 }}>
                      {copy.overviewPhotoTitle}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Bridge Connecting Overview to the 3 Essential Foundations (temporarily hidden) */}
            {false && (
            <div style={{ marginTop: '64px', position: 'relative' }}>
              <div
                style={{
                  width: '2px',
                  height: '44px',
                  background: 'linear-gradient(180deg, rgba(230, 57, 70, 0.0) 0%, #E63946 100%)',
                  margin: '0 auto 20px'
                }}
              />

              <div className="about-anim" style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
                <div
                  style={{
                    fontSize: '12px',
                    fontWeight: 800,
                    letterSpacing: '0.14em',
                    color: '#E63946',
                    textTransform: 'uppercase',
                    marginBottom: '10px'
                  }}
                >
                  {copy.foundationsHeader}
                </div>
                <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.76)', margin: 0, lineHeight: 1.6 }}>
                  {copy.foundationsSub}
                </p>
              </div>

              {/* 3 Connected Foundation Cards */}
              <div className="about-foundations-grid">
                {copy.foundations.map((f, idx) => {
                  const icons = [
                    <svg key="0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E63946" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                    </svg>,
                    <svg key="1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E63946" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>,
                    <svg key="2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E63946" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                    </svg>
                  ];

                  return (
                    <div
                      key={f.num}
                      className={`about-glass-card about-anim about-delay-${idx + 1}`}
                      style={{
                        padding: '34px 30px',
                        position: 'relative',
                        overflow: 'hidden',
                        borderTop: '3px solid #E63946'
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginBottom: '22px'
                        }}
                      >
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                          <span
                            style={{
                              width: '38px',
                              height: '38px',
                              borderRadius: '10px',
                              background: 'rgba(230, 57, 70, 0.14)',
                              border: '1px solid rgba(230, 57, 70, 0.4)',
                              color: '#FF7B7B',
                              fontWeight: 800,
                              fontSize: '13px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}
                          >
                            {f.num}
                          </span>
                          <span
                            style={{
                              fontSize: '11px',
                              fontWeight: 700,
                              letterSpacing: '0.1em',
                              color: 'rgba(255, 255, 255, 0.48)',
                              textTransform: 'uppercase'
                            }}
                          >
                            {f.tag}
                          </span>
                        </div>

                        <div
                          style={{
                            width: '44px',
                            height: '44px',
                            borderRadius: '12px',
                            background: 'rgba(255, 255, 255, 0.03)',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          {icons[idx]}
                        </div>
                      </div>

                      <h3
                        style={{
                          fontSize: '20px',
                          fontWeight: 700,
                          color: '#FFFFFF',
                          lineHeight: 1.35,
                          margin: '0 0 12px'
                        }}
                      >
                        {f.title}
                      </h3>

                      <p
                        style={{
                          fontSize: '14.5px',
                          lineHeight: 1.7,
                          color: 'rgba(255, 255, 255, 0.68)',
                          margin: 0
                        }}
                      >
                        {f.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            )}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* WHO WE ARE (MOVED FROM HOMEPAGE, AFTER COMPANY OVERVIEW)                 */}
        {/* ========================================================================= */}
        <section
          id="who"
          style={{
            position: 'relative',
            overflow: 'hidden',
            background: 'radial-gradient(circle 600px at 90% 15%, rgba(214, 40, 40, 0.08) 0%, transparent 70%), #0A0B0E',
            color: '#FFFFFF',
            padding: '108px 0',
            borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
          }}
        >
          <ModernCityBg opacity={0.22} flip />

          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: '56px', alignItems: 'center' }}>
              {/* Left Column: Narrative */}
              <div className="about-anim about-anim--left">
                <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', color: '#E63946', marginBottom: '14px', textTransform: 'uppercase' }}>
                  {copy.who.eyebrow}
                </div>
                <h2 style={{ fontSize: 'clamp(28px, 3.2vw, 42px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '20px', color: '#FFFFFF' }}>
                  {Array.isArray(copy.who.title) ? copy.who.title.map((line, i) => (
                    <span key={i} style={{ display: 'block' }}>{line}</span>
                  )) : copy.who.title}
                </h2>
                <p style={{ fontSize: '17.5px', lineHeight: 1.65, color: 'rgba(255, 255, 255, 0.92)', fontWeight: 400, marginBottom: '16px' }}>
                  {copy.who.lead}
                </p>
                <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'rgba(255, 255, 255, 0.65)', margin: 0 }}>
                  {copy.who.desc}
                </p>
              </div>

              {/* Right Column: 4 Strategic Pillars */}
              <div className="about-anim about-anim--right about-delay-1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '20px' }}>
                {copy.who.pillars.map((p, idx) => {
                  const pIcons = [
                    <PillarInsightIcon key="0" size={24} color="#E63946" />,
                    <PillarCultureIcon key="1" size={24} color="#E63946" />,
                    <PillarNetworkIcon key="2" size={24} color="#E63946" />,
                    <PillarStrategyIcon key="3" size={24} color="#E63946" />
                  ];
                  return (
                    <div
                      key={idx}
                      className="about-glass-card"
                      style={{
                        padding: '28px',
                        borderRadius: '16px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                      }}
                    >
                      <div>
                        <div style={{
                          width: '46px',
                          height: '46px',
                          borderRadius: '12px',
                          background: 'rgba(230, 57, 70, 0.12)',
                          color: '#E63946',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: '20px'
                        }}>
                          {pIcons[idx % pIcons.length]}
                        </div>
                        <h3 style={{ fontSize: '17px', fontWeight: 600, color: '#FFFFFF', marginBottom: '10px', lineHeight: 1.35 }}>
                          {p.title}
                        </h3>
                        <p style={{ fontSize: '13.5px', lineHeight: 1.65, color: 'rgba(255, 255, 255, 0.65)', margin: 0 }}>
                          {p.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 02 · VISION & MISSION (CLEAN ARCHITECTURAL CENTERPIECE)                   */}
        {/* ========================================================================= */}
        <section
          style={{
            position: 'relative',
            padding: '112px 0',
            background:
              'radial-gradient(ellipse 85% 55% at 50% 15%, rgba(230, 57, 70, 0.14) 0%, transparent 70%), #07080B',
            borderBottom: '1px solid rgba(255, 255, 255, 0.07)'
          }}
        >
          <ModernCityBg opacity={0.26} />

          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            {/* Section Header */}
            <div className="about-anim" style={{ textAlign: 'center', maxWidth: '100%', margin: '0 auto 56px' }}>
              <div className="about-eyebrow-pill">
                <span className="about-eyebrow-dot" />
                <span>{copy.vmEyebrow}</span>
              </div>
              <h2
                style={{
                  fontSize: 'clamp(26px, 2.85vw, 42px)',
                  fontWeight: 800,
                  lineHeight: 1.18,
                  letterSpacing: '-0.025em',
                  color: '#FFFFFF',
                  margin: '0 0 16px'
                }}
              >
                {copy.vmHeading}
              </h2>
              <p style={{ fontSize: '16.5px', lineHeight: 1.65, color: 'rgba(255, 255, 255, 0.7)', maxWidth: '780px', margin: '0 auto' }}>
                {copy.vmSubheading}
              </p>
            </div>

            {/* Top Centerpiece: Full-Width Vision Banner Card */}
            <div
              className="about-glass-card about-anim about-anim--scale about-delay-1"
              style={{
                padding: '44px 48px',
                marginBottom: '40px',
                background:
                  'radial-gradient(ellipse 80% 90% at 0% 50%, rgba(230, 57, 70, 0.24) 0%, rgba(16, 19, 27, 0.95) 65%)',
                border: '1px solid rgba(230, 57, 70, 0.42)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '36px',
                  alignItems: 'center'
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '6px 14px',
                      borderRadius: '999px',
                      background: '#E63946',
                      color: '#FFFFFF',
                      fontSize: '11px',
                      fontWeight: 800,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      marginBottom: '18px',
                      boxShadow: '0 6px 20px rgba(230, 57, 70, 0.45)'
                    }}
                  >
                    <span>&#9733;</span>
                    <span>{copy.visionBadge}</span>
                  </div>
                  <h3
                    style={{
                      fontSize: 'clamp(24px, 2.6vw, 34px)',
                      fontWeight: 800,
                      lineHeight: 1.22,
                      color: '#FFFFFF',
                      margin: 0,
                      letterSpacing: '-0.02em'
                    }}
                  >
                    {copy.visionTitle}
                  </h3>
                </div>

                <div
                  style={{
                    paddingLeft: '28px',
                    borderLeft: '2px solid rgba(230, 57, 70, 0.45)'
                  }}
                >
                  <p
                    style={{
                      fontSize: 'clamp(17px, 1.8vw, 21px)',
                      lineHeight: 1.65,
                      color: 'rgba(255, 255, 255, 0.92)',
                      fontWeight: 500,
                      margin: 0
                    }}
                  >
                    &ldquo;{copy.visionText}&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Header Bar */}
            <div
              className="about-anim"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '28px'
              }}
            >
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 800,
                  letterSpacing: '0.14em',
                  color: '#FF7B7B',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap'
                }}
              >
                {copy.missionBadge}
              </span>
              <div
                style={{
                  flex: 1,
                  height: '1px',
                  background: 'linear-gradient(90deg, rgba(230, 57, 70, 0.5) 0%, rgba(255, 255, 255, 0.06) 100%)'
                }}
              />
            </div>

            {/* Symmetrical 5-Pillar Mission Grid (3 Top + 2 Wide Bottom) */}
            <div className="about-mission-grid">
              {copy.missions.map((m, idx) => {
                const isWide = idx >= 3;
                return (
                  <div
                    key={m.code}
                    className={`about-glass-card about-anim about-delay-${(idx % 3) + 1} ${isWide ? 'about-mission-card--wide' : 'about-mission-card'}`}
                    style={{
                      padding: '32px 30px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginBottom: '20px'
                        }}
                      >
                        <span
                          style={{
                            padding: '5px 12px',
                            borderRadius: '8px',
                            background: 'rgba(230, 57, 70, 0.14)',
                            border: '1px solid rgba(230, 57, 70, 0.35)',
                            color: '#E63946',
                            fontSize: '13px',
                            fontWeight: 800,
                            letterSpacing: '0.08em'
                          }}
                        >
                          MISSION {m.code}
                        </span>
                        <span
                          style={{
                            fontSize: '11.5px',
                            fontWeight: 600,
                            color: 'rgba(255, 255, 255, 0.42)',
                            letterSpacing: '0.04em'
                          }}
                        >
                          {m.enTitle}
                        </span>
                      </div>

                      <h4
                        style={{
                          fontSize: '20px',
                          fontWeight: 700,
                          color: '#FFFFFF',
                          margin: '0 0 10px',
                          lineHeight: 1.3
                        }}
                      >
                        {m.title}
                      </h4>

                      <p
                        style={{
                          fontSize: '14.5px',
                          lineHeight: 1.68,
                          color: 'rgba(255, 255, 255, 0.68)',
                          margin: 0
                        }}
                      >
                        {m.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* OUR CROSS-BORDER PROCESS (MOVED FROM HOMEPAGE, AFTER VISION & MISSION)    */}
        {/* ========================================================================= */}
        <section
          id="cross-border-process"
          style={{
            position: 'relative',
            overflow: 'hidden',
            padding: '84px 0',
            background: '#08090C',
            borderBottom: '1px solid rgba(255, 255, 255, 0.07)'
          }}
        >
          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div
              className="about-anim"
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.07)',
                borderRadius: '20px',
                padding: '44px 40px'
              }}
            >
              <h3 style={{ textAlign: 'center', fontSize: '21px', fontWeight: 700, color: '#FFFFFF', marginBottom: '38px', letterSpacing: '-0.01em' }}>
                {copy.crossBorderProcess.title}
              </h3>
              <div className="about-process-grid">
                {copy.crossBorderProcess.steps.map((st, idx) => (
                  <div key={idx} className="about-process-step">
                    {idx < copy.crossBorderProcess.steps.length - 1 && (
                      <div className="about-process-line" aria-hidden="true">
                        <span className="about-process-arrow">›</span>
                      </div>
                    )}
                    <div className="about-step-dot">{st.num}</div>
                    <div>
                      <div style={{ fontSize: '16px', fontWeight: 600, color: '#FFFFFF', marginBottom: '6px' }}>{st.name}</div>
                      <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.62)', lineHeight: 1.55 }}>{st.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 03 · FOUNDER & MULTIDISCIPLINARY LEADERSHIP PERSPECTIVE                   */}
        {/* ========================================================================= */}
        <section
          style={{
            position: 'relative',
            padding: '112px 0',
            background:
              'radial-gradient(ellipse 75% 55% at 88% 30%, rgba(230, 57, 70, 0.12) 0%, transparent 70%), #0A0B0F',
            borderBottom: '1px solid rgba(255, 255, 255, 0.07)'
          }}
        >
          <ModernCityBg opacity={0.2} flip />

          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div className="about-split-2" style={{ alignItems: 'center', marginBottom: '64px' }}>
              {/* Left Column: Visual Executive Showcase */}
              <div className="about-anim about-anim--left">
                <div
                  style={{
                    position: 'relative',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    border: '1px solid rgba(255, 255, 255, 0.14)',
                    boxShadow: '0 28px 65px rgba(0, 0, 0, 0.7), 0 0 40px rgba(230, 57, 70, 0.16)',
                    background: '#0E1017'
                  }}
                >
                  <img
                    src="/images/consultation_advisory_bw.webp"
                    alt="8 Vice Leadership & Strategic Advisory"
                    loading="lazy"
                    decoding="async"
                    style={{
                      width: '100%',
                      height: '500px',
                      objectFit: 'cover',
                      display: 'block',
                      filter: 'grayscale(20%) contrast(1.08) brightness(0.92)'
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(180deg, rgba(8, 9, 12, 0.2) 0%, rgba(8, 9, 12, 0.55) 55%, rgba(8, 9, 12, 0.96) 100%)'
                    }}
                  />

                  <div style={{ position: 'absolute', top: '22px', left: '22px' }}>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '7px 14px',
                        borderRadius: '999px',
                        background: 'rgba(10, 12, 18, 0.85)',
                        border: '1px solid rgba(230, 57, 70, 0.45)',
                        color: '#FF7B7B',
                        fontSize: '11px',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase'
                      }}
                    >
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#E63946' }} />
                      {isId ? 'KEPEMIMPINAN MULTIDISIPLIN' : 'MULTIDISCIPLINARY LEADERSHIP'}
                    </span>
                  </div>

                  <div
                    style={{
                      position: 'absolute',
                      bottom: '24px',
                      left: '24px',
                      right: '24px',
                      padding: '24px 26px',
                      borderRadius: '18px',
                      background: 'linear-gradient(135deg, rgba(230, 57, 70, 0.20) 0%, rgba(12, 14, 20, 0.94) 100%)',
                      border: '1px solid rgba(230, 57, 70, 0.4)',
                      backdropFilter: 'blur(14px)'
                    }}
                  >
                    <p
                      style={{
                        fontSize: '15px',
                        fontWeight: 600,
                        lineHeight: 1.6,
                        color: '#FFFFFF',
                        margin: 0
                      }}
                    >
                      &ldquo;{copy.leadQuote}&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Leadership Perspective Narrative */}
              <div className="about-anim about-anim--right about-delay-1">
                <div className="about-eyebrow-pill">
                  <span className="about-eyebrow-dot" />
                  <span>{copy.leadEyebrow}</span>
                </div>

                <h2
                  style={{
                    fontSize: 'clamp(30px, 3.4vw, 44px)',
                    fontWeight: 800,
                    lineHeight: 1.15,
                    letterSpacing: '-0.025em',
                    color: '#FFFFFF',
                    margin: '0 0 16px'
                  }}
                >
                  {copy.leadTitle}
                </h2>

                <p
                  style={{
                    fontSize: '17px',
                    fontWeight: 600,
                    lineHeight: 1.6,
                    color: '#FF7B7B',
                    margin: '0 0 22px'
                  }}
                >
                  {copy.leadSubtitle}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <p style={{ fontSize: '15.5px', lineHeight: 1.75, color: 'rgba(255, 255, 255, 0.82)', margin: 0 }}>
                    {copy.leadP1}
                  </p>
                  <p style={{ fontSize: '15.5px', lineHeight: 1.75, color: 'rgba(255, 255, 255, 0.72)', margin: 0 }}>
                    {copy.leadP2}
                  </p>
                  <p style={{ fontSize: '15.5px', lineHeight: 1.75, color: 'rgba(255, 255, 255, 0.72)', margin: 0 }}>
                    {copy.leadP3}
                  </p>
                </div>
              </div>
            </div>

            {/* 6-Domain Leadership Matrix */}
            <div>
              <div
                className="about-anim"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  marginBottom: '28px'
                }}
              >
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: 800,
                    letterSpacing: '0.14em',
                    color: '#E63946',
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {copy.leadDomainsTitle}
                </span>
                <div
                  style={{
                    flex: 1,
                    height: '1px',
                    background: 'linear-gradient(90deg, rgba(230, 57, 70, 0.5) 0%, rgba(255, 255, 255, 0.06) 100%)'
                  }}
                />
              </div>

              <div className="about-domains-grid">
                {copy.leadDomains.map((dom, idx) => (
                  <div
                    key={dom.code}
                    className={`about-glass-card about-anim about-delay-${(idx % 3) + 1}`}
                    style={{
                      padding: '26px 28px',
                      display: 'flex',
                      gap: '18px',
                      alignItems: 'flex-start'
                    }}
                  >
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '12px',
                        background: 'rgba(230, 57, 70, 0.12)',
                        border: '1px solid rgba(230, 57, 70, 0.35)',
                        color: '#E63946',
                        fontWeight: 800,
                        fontSize: '13px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      {dom.code}
                    </div>
                    <div>
                      <h3
                        style={{
                          fontSize: '17.5px',
                          fontWeight: 700,
                          color: '#FFFFFF',
                          margin: '0 0 6px',
                          lineHeight: 1.35
                        }}
                      >
                        {dom.title}
                      </h3>
                      <p
                        style={{
                          fontSize: '14px',
                          lineHeight: 1.65,
                          color: 'rgba(255, 255, 255, 0.65)',
                          margin: 0
                        }}
                      >
                        {dom.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 04 · THE PEOPLE BEHIND 8 VICE (IBU HELDA, PAK GANDHI, CI CHRISTINE)       */}
        {/* ========================================================================= */}
        <section
          id="people-behind-8vice"
          style={{
            position: 'relative',
            padding: '112px 0',
            background:
              'radial-gradient(ellipse 80% 55% at 50% 25%, rgba(230, 57, 70, 0.16) 0%, transparent 70%), #07080B',
            borderBottom: '1px solid rgba(255, 255, 255, 0.07)'
          }}
        >
          <ModernCityBg opacity={0.3} />

          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            {/* Section Header */}
            <div className="about-anim" style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 60px' }}>
              <div className="about-eyebrow-pill">
                <span className="about-eyebrow-dot" />
                <span>{copy.peopleEyebrow}</span>
              </div>
              <h2
                style={{
                  fontSize: 'clamp(30px, 3.5vw, 46px)',
                  fontWeight: 800,
                  lineHeight: 1.15,
                  letterSpacing: '-0.025em',
                  color: '#FFFFFF',
                  margin: '0 0 16px'
                }}
              >
                {copy.peopleTitle}
              </h2>
              <p
                style={{
                  fontSize: '16.5px',
                  lineHeight: 1.7,
                  color: 'rgba(255, 255, 255, 0.72)',
                  margin: 0
                }}
              >
                {copy.peopleLead}
              </p>
            </div>

            {/* 4 Executive Horizontal Profile Rows: Portrait (1:1) | Bio | Experiences */}
            <div className="about-people-list">
              {peopleList.map((person, idx) => (
                <div
                  key={person.id}
                  className={`about-glass-card about-person-row about-anim about-delay-${(idx % 3) + 1}`}
                >
                  {/* Column 1: 1:1 B&W Portrait + Social Icons */}
                  <div>
                    <div className="about-person-photo-wrap">
                      <img
                        src={person.photo && person.photo.includes('?') ? person.photo : `${person.photo}?v=20261119`}
                        alt={person.fullName}
                        className="about-person-img is-loaded"
                        loading="eager"
                        decoding="async"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: 'center top',
                          opacity: 1,
                          filter: 'grayscale(100%) contrast(1.06)',
                          display: 'block'
                        }}
                        onLoad={(e) => {
                          e.currentTarget.classList.add('is-loaded');
                          e.currentTarget.style.opacity = '1';
                          e.currentTarget.style.filter = 'grayscale(100%) contrast(1.06)';
                        }}
                      />
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        gap: '8px',
                        marginTop: '14px'
                      }}
                    >
                      {person.socials?.linkedin && (
                        <a
                          href={person.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="about-social-btn"
                          aria-label={`${person.fullName} LinkedIn`}
                          title="LinkedIn"
                        >
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect x="2" y="9" width="4" height="12" />
                            <circle cx="4" cy="4" r="2" />
                          </svg>
                        </a>
                      )}
                      {person.socials?.instagram && (
                        <a
                          href={person.socials.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="about-social-btn"
                          aria-label={`${person.fullName} Instagram`}
                          title="Instagram"
                        >
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                          </svg>
                        </a>
                      )}
                      {person.socials?.email && (
                        <a
                          href={person.socials.email.startsWith('mailto:') ? person.socials.email : `mailto:${person.socials.email}`}
                          className="about-social-btn"
                          aria-label={`Email ${person.fullName}`}
                          title="Email"
                        >
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Column 2: Name, Chinese Name, Italic Subtitle & Detailed Bio */}
                  <div>
                    <h3
                      style={{
                        fontSize: '24px',
                        fontWeight: 800,
                        color: '#FFFFFF',
                        margin: '0 0 4px',
                        letterSpacing: '-0.02em',
                        lineHeight: 1.25
                      }}
                    >
                      {person.fullName}
                      {person.chineseName && (
                        <span
                          style={{
                            display: 'block',
                            fontSize: '20px',
                            fontWeight: 700,
                            color: 'rgba(255, 255, 255, 0.9)',
                            marginTop: '2px'
                          }}
                        >
                          {person.chineseName}
                        </span>
                      )}
                    </h3>

                    {person.jobTitle && (
                      <div
                        style={{
                          fontSize: '15px',
                          fontWeight: 600,
                          color: 'rgba(255, 255, 255, 0.9)',
                          lineHeight: 1.4,
                          marginTop: '8px'
                        }}
                      >
                        {person.jobTitle}
                      </div>
                    )}

                    {person.subtitle && (
                      <div
                        style={{
                          fontSize: '14px',
                          fontStyle: 'italic',
                          fontWeight: 500,
                          color: '#FF7B7B',
                          lineHeight: 1.5,
                          marginTop: '6px',
                          marginBottom: '18px'
                        }}
                      >
                        {person.subtitle.toLowerCase().startsWith('expertise in')
                          ? person.subtitle.replace(/^expertise in\s*:\s*/i, 'Expertise in ')
                          : `Expertise in ${person.subtitle}`}
                      </div>
                    )}

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                      {(Array.isArray(person.bioParagraphs) ? person.bioParagraphs : []).map((para, pIdx) => (
                        <p
                          key={pIdx}
                          style={{
                            fontSize: '14.5px',
                            lineHeight: 1.72,
                            color: 'rgba(255, 255, 255, 0.74)',
                            margin: 0
                          }}
                        >
                          {para}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Column 3: Expanded Experiences List */}
                  <div className="about-person-exp">
                    <h4
                      style={{
                        fontSize: '15px',
                        fontWeight: 800,
                        letterSpacing: '0.02em',
                        color: '#FFFFFF',
                        margin: '0 0 16px',
                        paddingBottom: '12px',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
                      }}
                    >
                      {copy.experiencesHeading}
                    </h4>

                    <ul className="about-person-exp-list">
                      {(Array.isArray(person.experiences) ? person.experiences : []).map((exp, eIdx) => (
                        <li key={eIdx}>{exp}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 06 · OUR VALUES (6 CORE PRINCIPLES GRID)                                  */}
        {/* ========================================================================= */}
        <section
          style={{
            position: 'relative',
            padding: '112px 0',
            background:
              'radial-gradient(ellipse 75% 55% at 15% 80%, rgba(230, 57, 70, 0.12) 0%, transparent 70%), #07080B',
            borderBottom: '1px solid rgba(255, 255, 255, 0.07)'
          }}
        >
          <ModernCityBg opacity={0.22} />

          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div className="about-anim" style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 60px' }}>
              <div className="about-eyebrow-pill">
                <span className="about-eyebrow-dot" />
                <span>{copy.valuesEyebrow}</span>
              </div>
              <h2
                style={{
                  fontSize: 'clamp(30px, 3.5vw, 46px)',
                  fontWeight: 800,
                  lineHeight: 1.15,
                  letterSpacing: '-0.025em',
                  color: '#FFFFFF',
                  margin: '0 0 16px'
                }}
              >
                {copy.valuesTitle}
              </h2>
              <p
                style={{
                  fontSize: '16.5px',
                  lineHeight: 1.68,
                  color: 'rgba(255, 255, 255, 0.7)',
                  margin: 0
                }}
              >
                {copy.valuesLead}
              </p>
            </div>

            <div className="about-values-grid">
              {copy.values.map((v, idx) => (
                <div
                  key={v.num}
                  className={`about-glass-card about-anim about-delay-${(idx % 3) + 1}`}
                  style={{
                    padding: '34px 30px',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  {/* Subtle Top Red Accent Line */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: '30px',
                      right: '30px',
                      height: '2px',
                      background: 'linear-gradient(90deg, #E63946 0%, transparent 100%)'
                    }}
                  />

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '20px'
                    }}
                  >
                    <span
                      style={{
                        fontSize: '28px',
                        fontWeight: 800,
                        color: '#E63946',
                        letterSpacing: '-0.03em',
                        lineHeight: 1
                      }}
                    >
                      {v.num}
                    </span>
                    <span
                      style={{
                        padding: '4px 12px',
                        borderRadius: '999px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        fontSize: '11px',
                        fontWeight: 600,
                        color: 'rgba(255, 255, 255, 0.55)'
                      }}
                    >
                      {v.sub}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: '21px',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      margin: '0 0 12px',
                      lineHeight: 1.3
                    }}
                  >
                    {v.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '14.5px',
                      lineHeight: 1.7,
                      color: 'rgba(255, 255, 255, 0.68)',
                      margin: 0
                    }}
                  >
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 07 · EXECUTIVE CTA BAND                                                   */}
        {/* ========================================================================= */}
        <section
          style={{
            position: 'relative',
            padding: '96px 0 112px',
            background: '#08090C'
          }}
        >
          <ModernCityBg opacity={0.35} />

          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div
              className="about-anim about-anim--scale"
              style={{
                padding: '56px 48px',
                borderRadius: '28px',
                background:
                  'radial-gradient(ellipse 85% 90% at 100% 100%, rgba(230, 57, 70, 0.28) 0%, rgba(16, 18, 26, 0.96) 65%)',
                border: '1px solid rgba(230, 57, 70, 0.4)',
                boxShadow: '0 30px 70px rgba(0, 0, 0, 0.65)',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '32px'
              }}
            >
              <div style={{ maxWidth: '680px' }}>
                <div className="about-eyebrow-pill" style={{ marginBottom: '14px' }}>
                  <span className="about-eyebrow-dot" />
                  <span>{copy.ctaEyebrow}</span>
                </div>
                <h2
                  style={{
                    fontSize: 'clamp(26px, 3vw, 38px)',
                    fontWeight: 800,
                    lineHeight: 1.2,
                    letterSpacing: '-0.02em',
                    color: '#FFFFFF',
                    margin: '0 0 14px'
                  }}
                >
                  {copy.ctaTitle}
                </h2>
                <p
                  style={{
                    fontSize: '16px',
                    lineHeight: 1.68,
                    color: 'rgba(255, 255, 255, 0.76)',
                    margin: 0
                  }}
                >
                  {copy.ctaDesc}
                </p>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
                <Link
                  href="/contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '15px 28px',
                    borderRadius: '999px',
                    background: 'linear-gradient(135deg, #E63946 0%, #B81D2A 100%)',
                    color: '#FFFFFF',
                    fontSize: '14.5px',
                    fontWeight: 700,
                    textDecoration: 'none',
                    boxShadow: '0 12px 28px rgba(230, 57, 70, 0.4)'
                  }}
                >
                  <span>{copy.ctaPrimary}</span>
                  <span>&rarr;</span>
                </Link>

                <Link
                  href="/services"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '15px 26px',
                    borderRadius: '999px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.16)',
                    color: '#FFFFFF',
                    fontSize: '14.5px',
                    fontWeight: 600,
                    textDecoration: 'none'
                  }}
                >
                  <span>{copy.ctaSecondary}</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* MODAL: EXECUTIVE MESSAGE & PROFILE (IBU HELDA, PAK GANDHI, CI CHRISTINE)  */}
        {/* ========================================================================= */}
        {mounted && selectedPerson && typeof document !== 'undefined' && createPortal(
          <div
            onClick={() => setSelectedPerson(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: '100vw',
              height: '100vh',
              zIndex: 99999999,
              background: 'rgba(5, 7, 11, 0.88)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px',
              boxSizing: 'border-box',
              animation: 'aboutBackdropIn 0.25s ease forwards'
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: '760px',
                width: '100%',
                maxHeight: 'calc(100vh - 48px)',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '26px',
                background: 'linear-gradient(165deg, #141824 0%, #0B0D14 100%)',
                border: '1px solid rgba(230, 57, 70, 0.45)',
                boxShadow: '0 32px 90px rgba(0, 0, 0, 0.85), 0 0 50px rgba(230, 57, 70, 0.22)',
                overflow: 'hidden',
                position: 'relative',
                animation: 'aboutModalIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards'
              }}
            >
              {/* Top Close Button */}
              <button
                type="button"
                onClick={() => setSelectedPerson(null)}
                aria-label="Close modal"
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.16)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 10,
                  fontSize: '15px',
                  transition: 'background 0.2s, transform 0.2s'
                }}
              >
                &#10005;
              </button>

              {/* Modal Header with Portrait & Credentials */}
              <div
                style={{
                  padding: '32px 36px 24px',
                  background:
                    'radial-gradient(ellipse 80% 90% at 0% 0%, rgba(230, 57, 70, 0.22) 0%, transparent 70%)',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  gap: '24px',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  flexShrink: 0
                }}
              >
                <div
                  style={{
                    width: '104px',
                    height: '104px',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    border: '2px solid #E63946',
                    boxShadow: '0 10px 28px rgba(230, 57, 70, 0.35)',
                    flexShrink: 0,
                    background: '#10131C'
                  }}
                >
                  <img
                    src={selectedPerson.photo}
                    alt={selectedPerson.fullName}
                    loading="eager"
                    decoding="sync"
                    className="is-loaded"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center 20%',
                      display: 'block',
                      opacity: 1,
                      filter: 'none',
                      transform: 'none'
                    }}
                    onLoad={(e) => {
                      e.currentTarget.classList.add('is-loaded');
                      e.currentTarget.style.opacity = '1';
                      e.currentTarget.style.filter = 'none';
                    }}
                  />
                </div>

                <div style={{ flex: 1, minWidth: '240px' }}>
                  <h3
                    style={{
                      fontSize: '26px',
                      fontWeight: 800,
                      color: '#FFFFFF',
                      margin: '0 0 8px',
                      letterSpacing: '-0.02em'
                    }}
                  >
                    {selectedPerson.fullName}
                  </h3>

                  <div style={{ fontSize: '13.5px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.78)', marginBottom: '14px', lineHeight: 1.45 }}>
                    {selectedPerson.subtitle}
                  </div>

                  {/* Social Links inside Modal */}
                  <div style={{ display: 'flex', gap: '8px' }}>
                    {selectedPerson.socials?.linkedin && (
                      <a
                        href={selectedPerson.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="about-social-btn"
                        aria-label="LinkedIn"
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect x="2" y="9" width="4" height="12" />
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                      </a>
                    )}
                    {selectedPerson.socials?.instagram && (
                      <a
                        href={selectedPerson.socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="about-social-btn"
                        aria-label="Instagram"
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                      </a>
                    )}
                    {selectedPerson.socials?.email && (
                      <a
                        href={selectedPerson.socials.email.startsWith('mailto:') ? selectedPerson.socials.email : `mailto:${selectedPerson.socials.email}`}
                        className="about-social-btn"
                        aria-label="Email"
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Modal Body: Words / Message from 8 Vice Team */}
              <div
                style={{
                  padding: '28px 36px 36px',
                  overflowY: 'auto',
                  WebkitOverflowScrolling: 'touch',
                  flex: 1
                }}
              >
                <div
                  style={{
                    fontSize: '11.5px',
                    fontWeight: 800,
                    letterSpacing: '0.12em',
                    color: '#E63946',
                    textTransform: 'uppercase',
                    marginBottom: '8px'
                  }}
                >
                  {copy.peopleModalLabel}
                </div>

                <h4
                  style={{
                    fontSize: '20px',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    margin: '0 0 20px',
                    lineHeight: 1.35
                  }}
                >
                  {selectedPerson.quoteTitle}
                </h4>

                <div
                  style={{
                    padding: '24px 26px',
                    borderRadius: '18px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    borderLeft: '4px solid #E63946',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRight: '1px solid rgba(255, 255, 255, 0.08)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px',
                    marginBottom: '26px'
                  }}
                >
                  {(Array.isArray(selectedPerson.message) ? selectedPerson.message : [selectedPerson.message]).map((para, i) => (
                    <p
                      key={i}
                      style={{
                        fontSize: '15px',
                        lineHeight: 1.75,
                        color: 'rgba(255, 255, 255, 0.88)',
                        margin: 0,
                        whiteSpace: 'pre-line'
                      }}
                    >
                      {para}
                    </p>
                  ))}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {(Array.isArray(selectedPerson.focusTags) ? selectedPerson.focusTags : []).map((tag) => (
                      <span
                        key={tag}
                        style={{
                          padding: '5px 12px',
                          borderRadius: '999px',
                          background: 'rgba(230, 57, 70, 0.12)',
                          border: '1px solid rgba(230, 57, 70, 0.3)',
                          fontSize: '11.5px',
                          fontWeight: 600,
                          color: '#FF7B7B'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedPerson(null)}
                    style={{
                      padding: '11px 24px',
                      borderRadius: '999px',
                      background: '#E63946',
                      border: 'none',
                      color: '#FFFFFF',
                      fontSize: '13.5px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      boxShadow: '0 8px 20px rgba(230, 57, 70, 0.4)'
                    }}
                  >
                    {copy.peopleModalClose}
                  </button>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
      </div>
    </MainLayout>
  );
}
