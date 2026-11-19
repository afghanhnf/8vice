import React, { createContext, useContext, useEffect, useState } from 'react';
import { router } from '@inertiajs/react';

const TranslationContext = createContext();
const loadedDictionaries = {};

const coreNavFallback = {
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Our Services',
      gateway: 'Indonesia–China Gateway',
      gateway_c2i: 'China to Indonesia',
      gateway_i2c: 'Indonesia to China',
      industries: 'Industries & Opportunities',
      insights_partnerships: 'Insights & Partnerships',
      clients: 'Clients',
      case: 'Case Study',
      article: 'Insights',
      career: 'Career',
      contact: 'Contact Us',
      market_intelligence: 'Market Intelligence',
      mi_desc: 'Data-driven market insights & analysis',
      consultancy: 'Consultancy',
      consultancy_desc: 'Strategic advisory for market entry',
      training: 'Training',
      training_desc: 'Capacity building & skill development',
      svc_strategic_advisory: 'Strategic Advisory & Market Entry',
      svc_strategic_advisory_desc: 'Market entry, research, and go-to-market roadmaps',
      svc_gov_relations: 'Government Relations & Stakeholder Engagement',
      svc_gov_relations_desc: 'Institutional liaison and public-private dialogue',
      svc_business_matching: 'Business Matching & Strategic Partnerships',
      svc_business_matching_desc: 'B2B matchmaking, trade delegations, and partner identification',
      svc_strategic_comms: 'Strategic Communications & Market Positioning',
      svc_strategic_comms_desc: 'Brand localization, corporate narrative, and PR',
      svc_media_relations: 'Media Relations & Crisis Communications',
      svc_media_relations_desc: 'Press strategy, media engagement, and reputation management',
      svc_investment_dev: 'Investment & Business Development Facilitation',
      svc_investment_dev_desc: 'Opportunity assessment, commercial proposals, and project coordination'
    }
  },
  id: {
    nav: {
      home: 'Beranda',
      about: 'Tentang Kami',
      services: 'Layanan Kami',
      gateway: 'Gerbang Indonesia–China',
      gateway_c2i: 'China ke Indonesia',
      gateway_i2c: 'Indonesia ke China',
      industries: 'Industri & Peluang',
      insights_partnerships: 'Wawasan & Kemitraan',
      clients: 'Klien',
      case: 'Studi Kasus',
      article: 'Wawasan',
      career: 'Karir',
      contact: 'Hubungi Kami',
      market_intelligence: 'Intelijen Pasar',
      mi_desc: 'Wawasan & analisis pasar berbasis data',
      consultancy: 'Konsultasi',
      consultancy_desc: 'Penasihat strategis untuk ekspansi pasar',
      training: 'Pelatihan',
      training_desc: 'Pengembangan kapasitas & keterampilan',
      svc_strategic_advisory: 'Penasihat Strategis & Penetrasi Pasar',
      svc_strategic_advisory_desc: 'Penetrasi pasar, riset kelayakan, dan rencana go-to-market',
      svc_gov_relations: 'Hubungan Pemerintah & Pemangku Kepentingan',
      svc_gov_relations_desc: 'Penghubung institusi dan dialog kolaborasi publik-swasta',
      svc_business_matching: 'Pencocokan Bisnis & Kemitraan Strategis',
      svc_business_matching_desc: 'Matchmaking B2B, delegasi bisnis, dan identifikasi mitra',
      svc_strategic_comms: 'Komunikasi Strategis & Positioning Pasar',
      svc_strategic_comms_desc: 'Lokalisasi merek, narasi korporat, dan media PR',
      svc_media_relations: 'Hubungan Media & Komunikasi Krisis',
      svc_media_relations_desc: 'Strategi pers, pelibatan media, dan manajemen reputasi',
      svc_investment_dev: 'Fasilitasi Investasi & Pengembangan Bisnis',
      svc_investment_dev_desc: 'Penilaian peluang komersial, penyusunan proposal, dan koordinasi proyek'
    }
  },
  cn: {
    nav: {
      home: '首页',
      about: '关于我们',
      services: '核心服务',
      gateway: '印中战略门户',
      gateway_c2i: '中国企业出海印尼',
      gateway_i2c: '印尼企业拓展中国',
      industries: '重点行业与机遇',
      insights_partnerships: '洞察与战略合作',
      clients: '客户与合作伙伴',
      case: '成功案例',
      article: '商业洞察',
      career: '招贤纳士',
      contact: '联系我们',
      market_intelligence: '市场情报与调研',
      mi_desc: '数据驱动的印尼市场洞察与深度分析',
      consultancy: '战略咨询',
      consultancy_desc: '市场准入与跨境扩张战略咨询',
      training: '企业培训',
      training_desc: '本土团队赋能与高管能力建设',
      svc_strategic_advisory: '战略咨询与市场准入',
      svc_strategic_advisory_desc: '市场准入规划、深度调研与商业化落地路线图',
      svc_gov_relations: '政府关系与利益相关方沟通',
      svc_gov_relations_desc: '政府机构对接、政策沟通与政企对话支持',
      svc_business_matching: '商业配对与战略合作伙伴对接',
      svc_business_matching_desc: 'B2B精准商务配对、商务考察团及本地伙伴甄选',
      svc_strategic_comms: '战略传播与市场品牌定位',
      svc_strategic_comms_desc: '品牌本土化重塑、企业叙事架构与公关传播',
      svc_media_relations: '媒体关系与危机公关管理',
      svc_media_relations_desc: '新闻传播策略、主流媒体对接与企业声誉管理',
      svc_investment_dev: '投资促进与业务拓展支持',
      svc_investment_dev_desc: '投资机会评估、商业合作提案与项目落地协调'
    }
  }
};

const loaders = {
  en: () => import('../lang/en.json').then((m) => m.default || m),
  id: () => import('../lang/id.json').then((m) => m.default || m),
  cn: () => import('../lang/cn.json').then((m) => m.default || m),
};

export function detectPathnameLang() {
  if (typeof window !== 'undefined') {
    const p = window.location.pathname;
    if (p === '/id' || p.startsWith('/id/')) return 'id';
    if (p === '/cn' || p.startsWith('/cn/')) return 'cn';
  }
  return 'en';
}

export async function preloadTranslation(locale) {
  const code = ['en', 'id', 'cn'].includes(locale) ? locale : 'en';
  if (!loadedDictionaries[code]) {
    loadedDictionaries[code] = await loaders[code]();
  }
  return loadedDictionaries[code];
}

export function TranslationProvider({ children, initialLang, initialDict }) {
  const [lang, setLang] = useState(() => initialLang || detectPathnameLang());
  const [dictVersion, setDictVersion] = useState(0);

  if (initialLang && initialDict && !loadedDictionaries[initialLang]) {
    loadedDictionaries[initialLang] = initialDict;
  }

  useEffect(() => {
    const syncLang = async () => {
      const next = detectPathnameLang();
      if (!loadedDictionaries[next]) {
        await preloadTranslation(next);
        setDictVersion((v) => v + 1);
      }
      setLang(next);
    };

    if (!loadedDictionaries[lang]) {
      preloadTranslation(lang).then(() => setDictVersion((v) => v + 1));
    }

    const removeListener = router.on('navigate', syncLang);
    return removeListener;
  }, [lang]);

  const t = (key) => {
    const keys = key.split('.');
    let value = loadedDictionaries[lang] || coreNavFallback[lang] || coreNavFallback.en;
    for (const k of keys) {
      if (value && value[k] !== undefined) {
        value = value[k];
      } else {
        let fallbackValue = loadedDictionaries.en || coreNavFallback[lang] || coreNavFallback.en;
        for (const fk of keys) {
          if (fallbackValue && fallbackValue[fk] !== undefined) {
            fallbackValue = fallbackValue[fk];
          } else {
            return key;
          }
        }
        return fallbackValue;
      }
    }
    return value;
  };

  const tr = (enText, idText, cnText) => {
    if (lang === 'cn' && cnText !== undefined) return cnText;
    if (lang === 'id' && idText !== undefined) return idText;
    return enText;
  };

  return (
    <TranslationContext.Provider
      value={{
        lang,
        locale: lang,
        isEn: lang === 'en',
        isId: lang === 'id',
        isCn: lang === 'cn',
        dictVersion,
        t,
        tr
      }}
    >
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  return useContext(TranslationContext);
}
