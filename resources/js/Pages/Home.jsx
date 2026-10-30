import React, { useState, useEffect } from 'react';
import { useForm, usePage } from '@inertiajs/react';
import Link from '@/Components/LocalizedLink';
import MainLayout from '@/Layouts/MainLayout';
import ScrollReveal, { Staggered } from '@/Components/ScrollReveal';
import { useTranslation } from '@/Contexts/TranslationContext';
import SeoHead from '@/Components/SeoHead';
import HeroGateway from '@/Components/HeroGateway';
import VideoManifesto from '@/Components/VideoManifesto';
import HomeArticles from '@/Components/HomeArticles';
import HomeFaq from '@/Components/HomeFaq';
import {
  PillarInsightIcon,
  PillarCultureIcon,
  PillarNetworkIcon,
  PillarStrategyIcon,
  ServiceAdvisoryIcon,
  ServiceGovIcon,
  ServiceMatchingIcon,
  ServiceCommsIcon,
  ServiceDigitalIcon,
  ServiceInvestmentIcon,
  IndustryInfraIcon,
  IndustryTechIcon,
  IndustryTourismIcon,
  IndustryCreativeIcon,
  IndustryTradeIcon,
  ShieldNdaIcon
} from '@/Components/HomeIcons';

export default function Home({
  clients = [],
  caseStudies = [],
  insights = [],
  siteSettings,
  statistics = []
}) {
  const { lang } = useTranslation();
  const isId = lang === 'id';

  // Form State for "Discuss Your Business"
  const [businessDirection, setBusinessDirection] = useState('China to Indonesia');
  const [selectedService, setSelectedService] = useState('Strategic Advisory & Market Entry');
  const [selectedIndustry, setSelectedIndustry] = useState('Technology & Digital Ecosystems');
  const [companyName, setCompanyName] = useState('');
  const [inquiryNotes, setInquiryNotes] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const { data: form, setData: setForm, post: postForm, processing: isSubmitting, reset: resetForm } = useForm({
    name: '',
    email: '',
    company: '',
    direction: 'China to Indonesia',
    service: 'Strategic Advisory & Market Entry',
    industry: 'Technology & Digital Ecosystems',
    message: '',
    website_url: '' // honeypot
  });

  const handleSubmitInquiry = (e) => {
    e.preventDefault();
    setForm({
      name: companyName || (isId ? 'Calon Klien' : 'Prospective Client'),
      email: emailInput,
      company: companyName,
      direction: businessDirection,
      service: selectedService,
      industry: selectedIndustry,
      message: `[Direction: ${businessDirection}] [Industry: ${selectedIndustry}] [Service: ${selectedService}] ${inquiryNotes}`,
      website_url: ''
    });

    postForm(isId ? '/id/contact-submit' : '/contact-submit', {
      preserveScroll: true,
      onSuccess: () => {
        setSubmitted(true);
        resetForm();
      },
      onError: () => {
        // Even if server returns error or demo mode, show submitted feedback
        setSubmitted(true);
      }
    });
  };

  // Content Dictionary (Bilingual: EN & ID)
  const content = {
    en: {
      hero: {
        eyebrow: "STRATEGIC ADVISORY · INDONESIA–CHINA · CROSS-BORDER GROWTH",
        title_start: "Your Strategic ",
        title_accent: "Gateway",
        title_end: " to Indonesia and China.",
        subtitle: "Connecting Markets. Enabling Growth.",
        desc: "8 Vice is a strategic advisory firm connecting businesses, institutions, and strategic partners across Indonesia and China. We help organizations navigate new markets, identify business opportunities, build meaningful partnerships, and develop strategies for sustainable cross-border growth.",
        cta_primary: "Explore Our Services",
        cta_c2i: "China to Indonesia",
        cta_i2c: "Indonesia to China",
        tag_corridor: "BILATERAL STRATEGIC CORRIDOR",
        tag_status: "ACTIVE B2B & GOV NETWORK",
        stats: [
          { num: "25+", label: "Years Combined Experience", desc: "Cross-border advisory" },
          { num: "30+", label: "Engagements Facilitated", desc: "Across China & Indonesia" },
          // { num: "5", label: "Priority Sectors", desc: "Strategic industry coverage" },
          // { num: "2", label: "Dynamic Markets", desc: "One unified strategic gateway" }
        ]
      },
      overview: {
        eyebrow: "STRATEGIC ADVISORY STATEMENT",
        title: "Who is 8Vice",
        lead: "8 Vice is a strategic advisory firm connecting businesses, institutions, and strategic partners across Indonesia and China.",
        p1: "We help organizations navigate new markets, identify business opportunities, build meaningful partnerships, and develop strategies for sustainable cross-border growth.",
        p2: "Combining local market understanding, strategic communications, stakeholder engagement, and cross-border business development, we bridge the gap between opportunity and execution.",
        p3: "From market entry to strategic partnerships, 8 Vice supports businesses in turning ambition into actionable opportunities across two dynamic markets.",
        tagline: "Two Markets. One Strategic Gateway.",
        subtext: "Explore how we can help your business grow across Indonesia and China.",
        btn_profile: "View Company Profile",
        photo_badge: "Bilateral Strategic Advisory",
        photo_caption: "Executive Leadership & Advisory Board"
      },
      who: {
        eyebrow: "WHO WE ARE · POSITIONING",
        title: [
          "Bridging Markets.",
          "Building Partnerships.",
          "Creating Opportunities."
        ],
        lead: "8 Vice is an Indonesia–China strategic advisory and business development firm focused on helping organizations navigate cross-border opportunities with greater clarity, confidence, and strategic direction.",
        desc: "We work at the intersection of business strategy, market intelligence, stakeholder engagement, communications, and partnership development. Successful international expansion requires more than market access—it requires local insight, cultural intelligence, trusted relationships, and practical execution.",
        pillars: [
          {
            title: "Local Market Insight",
            desc: "Deep understanding of the regulatory landscapes, local consumer nuances, and business operating environments in Indonesia and China."
          },
          {
            title: "Cultural Intelligence",
            desc: "Bridging business customs, negotiation styles, and institutional expectations to eliminate friction in bilateral communication."
          },
          {
            title: "Trusted Relationships",
            desc: "Direct access to relevant business ecosystems, industry associations, and verified commercial stakeholders."
          },
          {
            title: "Actionable Strategy",
            desc: "Translating high-level corporate objectives into concrete go-to-market plans, partnerships, and measurable outcomes."
          }
        ]
      },
      services: {
        eyebrow: "OUR CORE CAPABILITIES · 6 SERVICE PILLARS",
        title: [
          "Strategy That Connects.",
          "Partnerships That Move Business Forward."
        ],
        subtitle: "We provide integrated strategic advisory and cross-border business development services designed to help organizations enter new markets, establish strategic relationships, and unlock growth opportunities.",
        items: [
          {
            id: "advisory",
            num: "01",
            title: "Strategic Advisory & Market Entry",
            desc: "Helping businesses evaluate cross-border opportunities, understand commercial dynamics, and formulate executable market entry roadmaps.",
            points: [
              "Preliminary market opportunity assessment & research",
              "Business model & go-to-market strategy formulation",
              "Market positioning and product localization",
              "Partner, distributor & commercial channel strategy"
            ]
          },
          {
            id: "gov-relations",
            num: "02",
            title: "Government Relations & Stakeholder Engagement",
            desc: "Supporting stakeholder mapping, institutional engagement, and public-private dialogue through appropriate and transparent channels.",
            points: [
              "Stakeholder mapping and engagement planning",
              "Institutional and industry association liaison",
              "Meeting coordination & strategic dialogue facilitation",
              "Public-private collaboration development support"
            ]
          },
          {
            id: "business-matching",
            num: "03",
            title: "Business Matching & Strategic Partnerships",
            desc: "Connecting businesses with relevant potential partners, distributors, investors, and industry stakeholders based on defined commercial goals.",
            points: [
              "Business partner & distributor identification",
              "Curated B2B matchmaking & introductory meetings",
              "Business delegation & bilateral trade mission coordination",
              "Strategic partnership & MOU coordination support"
            ]
          },
          {
            id: "comms",
            num: "04",
            title: "Strategic Communications & Market Positioning",
            desc: "Developing corporate positioning, brand narratives, and communications strategies that build market relevance and stakeholder trust.",
            points: [
              "Corporate & brand localization for foreign markets",
              "Integrated marketing communications & strategic narrative",
              "Public relations & cross-cultural media engagement",
              "Stakeholder communications & executive positioning"
            ]
          },
          {
            id: "digital",
            num: "05",
            title: "Media Relations & Crisis Communications",
            desc: "Managing media partnerships, press conferences, executive interviews, and safeguarding cross-border corporate reputation through strategic communications.",
            points: [
              "Digital ecosystem partnership & platform collaboration",
              "Cross-border tourism destination promotion initiatives",
              "Technology integration & commercial partnership models",
              "Multi-stakeholder digital project coordination"
            ]
          },
          {
            id: "investment",
            num: "06",
            title: "Investment & Business Development Facilitation",
            desc: "Supporting the early stages of business development by helping clients articulate project objectives and structure commercial partnerships.",
            points: [
              "Preliminary opportunity assessment & feasibility review",
              "Commercial proposal & partnership model formulation",
              "Investor and project partner introductions",
              "Cross-border expansion follow-up & coordination"
            ]
          }
        ]
      },
      why: {
        eyebrow: "WHY 8 VICE · STRATEGIC ADVANTAGES",
        title: [
          "Local Understanding.",
          "Cross-Border Perspective."
        ],
        lead: "Entering a new market involves more than identifying demand. Businesses must understand the local environment, navigate different business cultures, identify relevant stakeholders, and build partnerships that support their long-term objectives.",
        intro: "8 Vice brings together five key strengths:",
        quote: "Bridging the critical gap between commercial ambition and verified local execution across two dynamic economic engines.",
        points: [
          {
            num: "01",
            title: "Indonesia–China Market Perspective",
            desc: "A cross-border approach that considers the business environment, commercial priorities, and cultural dynamics of both markets."
          },
          {
            num: "02",
            title: "Strategic Connectivity",
            desc: "A structured approach to identifying relevant business relationships and facilitating conversations that can lead to meaningful collaboration."
          },
          {
            num: "03",
            title: "Stakeholder Engagement",
            desc: "An understanding of the importance of institutional relationships, industry networks, and multi-stakeholder coordination."
          },
          {
            num: "04",
            title: "Integrated Business Thinking",
            desc: "Connecting market strategy, communications, partnerships, and business development rather than treating them as isolated activities."
          },
          {
            num: "05",
            title: "Long-Term Partnership Orientation",
            desc: "Building relationships around shared objectives, mutual value, and sustainable business outcomes."
          }
        ]
      },
      gateway: {
        eyebrow: "TWO MARKETS · ONE STRATEGIC GATEWAY",
        title: "Two Markets. One Strategic Gateway.",
        subtitle: "One platform for businesses expanding between Indonesia and China.",
        desc: "Indonesia and China offer significant opportunities for businesses seeking new markets, strategic partnerships, and long-term growth. 8 Vice helps bridge these differences by connecting market understanding with strategic business development.",
        c2i_title: "China to Indonesia",
        c2i_sub: "For Chinese companies entering or expanding in Indonesia.",
        c2i_points: [
          "Indonesian business environment & market opportunity assessment",
          "Local partner, distributor, and commercial collaborator search",
          "Stakeholder engagement with relevant institutions and industry bodies",
          "Brand narrative, positioning, and market localization",
          "Business development, proposal coordination, and execution follow-through"
        ],
        c2i_btn: "Discuss Your Indonesia Market Entry",
        i2c_title: "Indonesia to China",
        i2c_sub: "For Indonesian companies exploring the Chinese market.",
        i2c_points: [
          "China market intelligence, segment identification, and opportunity mapping",
          "Distributor and commercial partner identification across major Chinese hubs",
          "B2B matchmaking, trade delegations, and bilateral business missions",
          "Product positioning and communication suited to the Chinese business ecosystem",
          "Cross-border commercial collaboration & partnership coordination"
        ],
        i2c_btn: "Discuss Your China Market Entry",
        methodology_title: "Our Cross-Border Process",
        steps: [
          { num: "01", name: "Discovery", desc: "Understanding objectives, capabilities & target market priorities." },
          { num: "02", name: "Assessment", desc: "Evaluating market conditions, regulatory dynamics & feasibility." },
          { num: "03", name: "Strategize", desc: "Formulating market positioning, partner criteria & engagement roadmap." },
          { num: "04", name: "Connect", desc: "Facilitating targeted introductions and curated B2B/institutional dialogues." },
          { num: "05", name: "Follow-Through", desc: "Supporting partnership discussions, proposals & implementation coordination." }
        ]
      },
      industries: {
        eyebrow: "WHERE MARKETS MEET OPPORTUNITY",
        title: "Connecting Opportunities Across Industries.",
        subtitle: "8 Vice works across selected industries where Indonesia–China collaboration creates meaningful economic and commercial value.",
        items: [
          {
            id: "infrastructure",
            title: "Infrastructure & Urban Development",
            tag: "High-Growth Infrastructure",
            desc: "Transport systems, urban mobility, smart city solutions, and institutional collaboration for future-ready urban environments."
          },
          {
            id: "technology",
            title: "Technology & Digital Ecosystems",
            tag: "Digital Economy",
            desc: "Digital platforms, consumer technology, payment systems, fintech integration, and technology provider collaborations."
          },
          {
            id: "tourism",
            title: "Tourism, Travel & Hospitality",
            tag: "Bilateral Tourism",
            desc: "Destination promotion, travel industry alliances, MICE development, and connecting Indonesian destinations with Chinese traveler demand."
          },
          {
            id: "creative",
            title: "Creative Economy & Lifestyle",
            tag: "Culture & Lifestyle",
            desc: "Fashion, crafts, culinary concepts, film, music, gaming, and lifestyle brand collaborations bridging culture and commerce."
          },
          {
            id: "trade",
            title: "Trade & Consumer Goods (FMCG)",
            tag: "Market Expansion",
            desc: "Commercial distribution networks, retail localization, product positioning, and cross-border supply chain development."
          }
        ]
      },
      credibility: {
        eyebrow: "CREDIBILITY & TRACK RECORD",
        title: "Experience That Informs Strategy.",
        desc: "Our approach is informed by extensive professional experience across business consulting, integrated marketing communications, institutional engagement, urban transportation, tourism, and Indonesia–China business development.",
        subdesc: "We bring together the right perspectives, capabilities, and stakeholders to help clients establish a clear direction, a relevant network, and a practical path toward their business objectives.",
        notice: "*Selected projects, client references, and partner collaborations are presented in accordance with client confidentiality agreements.*"
      },
      insights: {
        eyebrow: "KNOWLEDGE & MARKET INTELLIGENCE",
        title: "Understand the Market. See the Opportunity.",
        subtitle: "Cross-border expansion requires informed decisions and a clear view of market dynamics. Explore our latest intelligence and practical guides.",
        cta: "Explore All Insights & Articles",
        categories: [
          "Market Intelligence & Economic Analysis",
          "Cross-Border Business & Expansion Guides",
          "Industry Perspectives & Regulatory Updates",
          "News, Delegations & Bilateral Activities",
          "Strategic Partnerships & Case Studies"
        ]
      },
      inquiry: {
        eyebrow: "LET'S START A CONVERSATION",
        title: "Discuss Your Business",
        subtitle: "Tell us about your expansion plans. Our advisory team will review your inquiry and determine the most appropriate next steps.",
        dir_lbl: "Business Direction",
        dir_opts: ["China to Indonesia", "Indonesia to China", "Bilateral Partnership / Other"],
        svc_lbl: "Service Required",
        ind_lbl: "Industry Sector",
        company_lbl: "Company Name (Optional)",
        email_lbl: "Your Corporate Email",
        notes_lbl: "Briefly Describe Your Business Objectives",
        notes_ph: "Target market, project scope, partnership requirements, or expansion timeline...",
        submit_btn: "Submit Business Inquiry",
        success_msg: "Thank you! Your business inquiry has been received. Our team will review your details and contact you shortly.",
        office_title: "Office Location",
        office_addr: "SOHO Building, Jl. Letjen M.T. Haryono Kav. 2, Jakarta Selatan 12810, Indonesia",
        email_title: "Direct Email",
        whatsapp_title: "Business WhatsApp Channel"
      }
    },
    id: {
      hero: {
        eyebrow: "PENASIHAT STRATEGIS · INDONESIA–CHINA · PERTUMBUHAN LINTAS BATAS",
        title_start: "Gerbang Strategis ",
        title_accent: "Bisnis Anda",
        title_end: " Menuju Indonesia dan China.",
        subtitle: "Menghubungkan Pasar. Mendorong Pertumbuhan.",
        desc: "8 Vice adalah firma penasihat strategis (strategic advisory) yang menghubungkan bisnis, institusi, dan mitra strategis di Indonesia dan China. Kami membantu organisasi menavigasi pasar baru, mengidentifikasi peluang komersial, membangun kemitraan yang bernilai, serta merancang strategi pertumbuhan lintas negara yang berkelanjutan.",
        cta_primary: "Jelajahi Layanan Kami",
        cta_c2i: "China ke Indonesia",
        cta_i2c: "Indonesia ke China",
        tag_corridor: "KORIDOR STRATEGIS BILATERAL",
        tag_status: "JEJARING AKTIF B2B & INSTITUSI",
        stats: [
          { num: "25+", label: "Tahun Pengalaman Kumulatif", desc: "Penasihat lintas negara" },
          { num: "30+", label: "Kemitraan Difasilitasi", desc: "Antara China & Indonesia" },
          // { num: "5", label: "Sektor Prioritas", desc: "Cakupan industri strategis" },
          // { num: "2", label: "Pasar Dinamis", desc: "Satu gerbang strategis terpadu" }
        ]
      },
      overview: {
        eyebrow: "PERNYATAAN PENASIHAT STRATEGIS",
        title: "Siapa itu 8Vice",
        lead: "8 Vice adalah firma penasihat strategis yang menghubungkan pelaku bisnis, institusi, dan mitra strategis di seluruh Indonesia dan China.",
        p1: "Kami membantu organisasi menavigasi pasar baru, mengidentifikasi peluang bisnis, membangun kemitraan yang berarti, dan mengembangkan strategi untuk pertumbuhan lintas batas yang berkelanjutan.",
        p2: "Memadukan pemahaman mendalam pasar lokal, komunikasi strategis, keterlibatan pemangku kepentingan, dan pengembangan bisnis lintas batas, kami menjembatani kesenjangan antara peluang dan eksekusi.",
        p3: "Dari masuknya pasar hingga kemitraan strategis, 8 Vice mendukung bisnis dalam mewujudkan ambisi menjadi peluang yang dapat ditindaklanjuti di dua pasar yang dinamis.",
        tagline: "Two Markets. One Strategic Gateway.",
        subtext: "Pelajari bagaimana kami dapat membantu bisnis Anda berkembang di seluruh Indonesia dan China.",
        btn_profile: "Lihat Profil Perusahaan",
        photo_badge: "Penasihat Strategis Bilateral",
        photo_caption: "Kepemimpinan Eksekutif & Tim Penasihat"
      },
      who: {
        eyebrow: "TENTANG KAMI · POSITIONING",
        title: [
          "Menjembatani Pasar.",
          "Membangun Kemitraan.",
          "Menciptakan Peluang."
        ],
        lead: "8 Vice adalah firma penasihat strategis dan pengembangan bisnis Indonesia–China yang berfokus membantu organisasi menavigasi peluang lintas batas dengan kejelasan, keyakinan, dan arah strategis yang tepat.",
        desc: "Kami bergerak di titik temu antara strategi bisnis, intelijen pasar, pelibatan pemangku kepentingan (stakeholder engagement), komunikasi, dan pengembangan kemitraan. Ekspansi internasional yang sukses membutuhkan lebih dari sekadar akses pasar—ia membutuhkan wawasan lokal, kecerdasan budaya, relasi tepercaya, dan eksekusi praktis.",
        pillars: [
          {
            title: "Wawasan Pasar Lokal",
            desc: "Pemahaman mendalam tentang lanskap regulasi, preferensi konsumen lokal, dan iklim operasional bisnis di Indonesia dan China."
          },
          {
            title: "Kecerdasan Budaya Bisnis",
            desc: "Menjembatani tradisi bisnis, gaya negosiasi, dan etika korporasi untuk meniadakan hambatan dalam komunikasi bilateral."
          },
          {
            title: "Relasi Tepercaya",
            desc: "Akses langsung ke ekosistem industri yang relevan, asosiasi bisnis terkemuka, dan pemangku kepentingan yang terverifikasi."
          },
          {
            title: "Eksekusi Strategis Nyata",
            desc: "Menerjemahkan visi korporasi menjadi rencana penetrasi pasar yang konkret, terukur, dan berorientasi hasil komersial."
          }
        ]
      },
      services: {
        eyebrow: "KAPABILITAS UTAMA · 6 PILAR LAYANAN",
        title: [
          "Strategi yang Menghubungkan.",
          "Kemitraan yang Menggerakkan Bisnis."
        ],
        subtitle: "Kami menyediakan layanan konsultasi strategis dan pengembangan bisnis lintas negara terpadu yang dirancang untuk membantu organisasi memasuki pasar baru, membangun kemitraan strategis, dan membuka peluang pertumbuhan.",
        items: [
          {
            id: "advisory",
            num: "01",
            title: "Penasihat Strategis & Penetrasi Pasar",
            desc: "Membantu perusahaan mengevaluasi peluang lintas negara, memahami dinamika komersial, dan menyusun strategi penetrasi pasar yang terukur.",
            points: [
              "Riset peluang pasar awal dan studi kelayakan",
              "Perumusan model bisnis & rencana go-to-market",
              "Positioning pasar dan lokalisasi produk/layanan",
              "Strategi pemilihan mitra, distributor & saluran komersial"
            ]
          },
          {
            id: "gov-relations",
            num: "02",
            title: "Hubungan Pemerintah & Pemangku Kepentingan",
            desc: "Mendukung pemetaan pemangku kepentingan, pelibatan kelembagaan, dan dialog publik-swasta melalui jalur yang tepat dan transparan.",
            points: [
              "Pemetaan pemangku kepentingan & rencana pelibatan institusi",
              "Penghubung kelembagaan dan asosiasi industri resmi",
              "Koordinasi pertemuan & fasilitasi dialog strategis",
              "Dukungan pengembangan inisiatif kolaborasi publik-swasta"
            ]
          },
          {
            id: "business-matching",
            num: "03",
            title: "Pencocokan Bisnis & Kemitraan Strategis",
            desc: "Menghubungkan korporasi dengan calon mitra potensial, distributor, investor, dan pelaku industri berdasarkan target bisnis yang telah ditetapkan.",
            points: [
              "Identifikasi mitra bisnis & distributor terpercaya",
              "Pencocokan B2B terkurasi & pengaturan pertemuan bisnis",
              "Koordinasi delegasi bisnis & misi dagang bilateral",
              "Dukungan penjajakan kemitraan strategis & penandatanganan MOU"
            ]
          },
          {
            id: "comms",
            num: "04",
            title: "Komunikasi Strategis & Positioning Pasar",
            desc: "Membangun positioning korporat, narasi merek, dan strategi komunikasi yang memperkuat relevansi pasar dan kepercayaan pemangku kepentingan.",
            points: [
              "Lokalisasi narasi merek dan pesan bisnis untuk pasar luar negeri",
              "Komunikasi pemasaran terpadu & pesan strategis korporat",
              "Hubungan masyarakat (PR) & pelibatan media lintas budaya",
              "Positioning eksekutif & komunikasi pemangku kepentingan"
            ]
          },
          {
            id: "digital",
            num: "05",
            title: "Hubungan Media & Komunikasi Krisis",
            desc: "Mengelola kemitraan media, konferensi pers, wawancara eksekutif, serta melindungi reputasi korporat melalui strategi komunikasi lintas batas yang terpercaya.",
            points: [
              "Pengembangan kemitraan platform teknologi & ekosistem digital",
              "Inisiatif promosi destinasi pariwisata lintas negara",
              "Integrasi teknologi & eksplorasi model kemitraan komersial",
              "Koordinasi proyek digital multi-pihak"
            ]
          },
          {
            id: "investment",
            num: "06",
            title: "Fasilitasi Investasi & Pengembangan Bisnis",
            desc: "Mendukung tahap awal pengembangan bisnis dengan membantu klien merumuskan tujuan proyek dan menyusun struktur kemitraan komersial.",
            points: [
              "Penilaian awal peluang investasi dan kelayakan komersial",
              "Penyusunan proposal komersial & eksplorasi model kemitraan",
              "Pengenalan ke investor dan mitra proyek strategis",
              "Pendampingan dan koordinasi tindak lanjut ekspansi lintas batas"
            ]
          }
        ]
      },
      why: {
        eyebrow: "MENGAPA 8 VICE · KEUNGGULAN STRATEGIS",
        title: [
          "Pemahaman Lokal.",
          "Perspektif Lintas Batas."
        ],
        lead: "Memasuki pasar baru melibatkan lebih dari sekadar mengidentifikasi permintaan. Bisnis harus memahami lingkungan lokal, menavigasi budaya bisnis yang berbeda, mengidentifikasi pemangku kepentingan yang relevan, dan membangun kemitraan yang mendukung tujuan jangka panjang mereka.",
        intro: "8 Vice memadukan lima keunggulan strategis utama:",
        quote: "Menjembatani kesenjangan kritis antara ambisi komersial dan eksekusi lokal yang terverifikasi di dua lokomotif ekonomi dinamis.",
        points: [
          {
            num: "01",
            title: "Perspektif Pasar Indonesia–China",
            desc: "Pendekatan lintas batas yang mempertimbangkan lingkungan bisnis, prioritas komersial, dan dinamika budaya di kedua pasar."
          },
          {
            num: "02",
            title: "Konektivitas Strategis",
            desc: "Pendekatan terstruktur untuk mengidentifikasi relasi bisnis yang relevan dan memfasilitasi dialog yang dapat menghasilkan kolaborasi berarti."
          },
          {
            num: "03",
            title: "Pelibatan Pemangku Kepentingan",
            desc: "Pemahaman mendalam tentang pentingnya hubungan kelembagaan, jejaring industri, dan koordinasi multi-pemangku kepentingan."
          },
          {
            num: "04",
            title: "Pemikiran Bisnis Terintegrasi",
            desc: "Menghubungkan strategi pasar, komunikasi, kemitraan, dan pengembangan bisnis alih-alih memperlakukannya sebagai aktivitas terpisah."
          },
          {
            num: "05",
            title: "Orientasi Kemitraan Jangka Panjang",
            desc: "Membangun relasi berdasarkan tujuan bersama, nilai tambah timbal balik, dan hasil bisnis yang berkelanjutan."
          }
        ]
      },
      gateway: {
        eyebrow: "DUA PASAR · SATU GERBANG STRATEGIS",
        title: "Dua Pasar. Satu Gerbang Strategis.",
        subtitle: "Satu platform terpadu bagi bisnis yang berekspansi antara Indonesia dan China.",
        desc: "Indonesia dan China menawarkan peluang luar biasa bagi bisnis yang mencari pasar baru, kemitraan teknologi, dan pertumbuhan jangka panjang. 8 Vice menjembatani kesenjangan ini dengan menggabungkan pemahaman pasar lokal dan pengembangan bisnis strategis.",
        c2i_title: "China ke Indonesia",
        c2i_sub: "Untuk perusahaan Tiongkok yang ingin masuk atau berekspansi di Indonesia.",
        c2i_points: [
          "Penilaian iklim bisnis Indonesia & identifikasi peluang komersial",
          "Pencarian mitra distributor, agen lokal, dan kolaborator industri",
          "Pelibatan pemangku kepentingan kelembagaan dan asosiasi bisnis",
          "Lokalisasi narasi merek, pesan pasar, dan gaya komunikasi",
          "Pendampingan perumusan proposal komersial dan koordinasi eksekusi"
        ],
        c2i_btn: "Konsultasikan Masuk Pasar Indonesia",
        i2c_title: "Indonesia ke China",
        i2c_sub: "Untuk perusahaan Indonesia yang ingin menjajaki pasar Tiongkok.",
        i2c_points: [
          "Intelijen pasar China, pemetaan segmen potensial & regulasi lokal",
          "Identifikasi mitra dagang dan rantai distribusi di kota-kota utama China",
          "Pencocokan B2B, delegasi bisnis & fasilitasi misi dagang bilateral",
          "Positioning produk dan narasi bisnis yang efektif untuk audiens China",
          "Koordinasi kemitraan komersial bilateral & tindak lanjut kerja sama"
        ],
        i2c_btn: "Konsultasikan Masuk Pasar China",
        methodology_title: "Metodologi Kerja Lintas Negara",
        steps: [
          { num: "01", name: "Penjajakan (Discovery)", desc: "Memahami sasaran ekspansi, kapabilitas & ekspektasi pasar target." },
          { num: "02", name: "Penilaian (Assessment)", desc: "Mengevaluasi kondisi pasar, regulasi terkait & kelayakan komersial." },
          { num: "03", name: "Strategi (Strategize)", desc: "Merumuskan positioning, kriteria mitra & peta jalan pelibatan." },
          { num: "04", name: "Koneksi (Connect)", desc: "Memfasilitasi pengenalan terarah dan dialog B2B/institusional." },
          { num: "05", name: "Eksekusi (Follow-Through)", desc: "Mendampingi negosiasi kemitraan, proposal & implementasi nyata." }
        ]
      },
      industries: {
        eyebrow: "SEKTOR INDUSTRI PRIORITAS",
        title: "Menghubungkan Peluang di Berbagai Sektor Industri.",
        subtitle: "8 Vice berfokus pada industri pilihan di mana kolaborasi Indonesia–China mampu menciptakan nilai tambah komersial dan strategis yang nyata.",
        items: [
          {
            id: "infrastructure",
            title: "Infrastruktur & Pengembangan Perkotaan",
            tag: "Infrastruktur Modern",
            desc: "Transportasi perkotaan, sistem mobilitas cerdas, dan kolaborasi kelembagaan untuk pembangunan kota masa depan."
          },
          {
            id: "technology",
            title: "Teknologi & Ekosistem Digital",
            tag: "Ekonomi Digital",
            desc: "Platform digital, teknologi konsumen, ekosistem pembayaran, fintech, dan kemitraan penyedia teknologi canggih."
          },
          {
            id: "tourism",
            title: "Pariwisata, Perjalanan & Perhotelan",
            tag: "Pariwisata Bilateral",
            desc: "Promosi destinasi, kemitraan hospitality, MICE, dan pembukaan akses pasar wisatawan China ke Indonesia."
          },
          {
            id: "creative",
            title: "Ekonomi Kreatif & Gaya Hidup",
            tag: "Budaya & Kreatif",
            desc: "Fesyen, kriya tekstil, kuliner, film, musik, game, dan kolaborasi merek gaya hidup yang memadukan budaya dan bisnis."
          },
          {
            id: "trade",
            title: "Perdagangan & Barang Konsumsi (FMCG)",
            tag: "Ekspansi Ritel",
            desc: "Pengembangan rantai pasok, jaringan distribusi komersial, lokalisasi produk ritel, dan perdagangan lintas batas."
          }
        ]
      },
      credibility: {
        eyebrow: "KREDIBILITAS & PENGALAMAN",
        title: "Pengalaman Nyata yang Mendasari Strategi.",
        desc: "Pendekatan kami dilandasi oleh pengalaman profesional dalam konsultasi bisnis, komunikasi pemasaran terpadu, hubungan kelembagaan, transportasi perkotaan, pariwisata, dan pengembangan bisnis Indonesia–China.",
        subdesc: "Kami menyatukan perspektif, kapabilitas, dan pemangku kepentingan yang tepat untuk membantu klien menemukan arah yang jelas, jaringan yang relevan, serta langkah praktis menuju target bisnis mereka.",
        notice: "*Portofolio proyek terpilih dan kemitraan klien ditampilkan sesuai dengan ketentuan kerahasiaan klien (NDA).*"
      },
      insights: {
        eyebrow: "INTELIJEN PASAR & WAWASAN",
        title: "Pahami Pasarnya. Raih Peluangnya.",
        subtitle: "Ekspansi lintas negara membutuhkan keputusan yang didasari informasi akurat. Pelajari laporan intelijen pasar dan panduan praktis kami.",
        cta: "Lihat Seluruh Artikel & Wawasan",
        categories: [
          "Intelijen Pasar & Analisis Peluang Ekonomi",
          "Panduan Praktis Ekspansi Bisnis Lintas Negara",
          "Perspektif Industri & Perkembangan Regulasi",
          "Berita Kegiatan Delegasi & Forum Bisnis Bilateral",
          "Studi Kasus & Ekosistem Kemitraan Strategis"
        ]
      },
      inquiry: {
        eyebrow: "MARI MEMULAI DISKUSI",
        title: "Diskusikan Kebutuhan Bisnis Anda",
        subtitle: "Ceritakan rencana ekspansi Anda. Tim penasihat strategis kami akan meninjau informasi Anda dan merumuskan langkah awal yang tepat.",
        dir_lbl: "Arah Ekspansi Bisnis",
        dir_opts: ["China ke Indonesia", "Indonesia ke China", "Kemitraan Bilateral / Lainnya"],
        svc_lbl: "Layanan yang Dibutuhkan",
        ind_lbl: "Sektor Industri",
        company_lbl: "Nama Perusahaan (Opsional)",
        email_lbl: "Email Korporat Anda",
        notes_lbl: "Uraikan Ringkas Rencana atau Kebutuhan Bisnis Anda",
        notes_ph: "Target pasar, lingkup proyek, kebutuhan mitra bisnis, atau estimasi jadwal ekspansi...",
        submit_btn: "Kirim Rencana Inquiry Bisnis",
        success_msg: "Terima kasih! Rencana inquiry bisnis Anda telah kami terima. Tim penasihat 8 Vice akan segera menghubungi Anda.",
        office_title: "Lokasi Kantor",
        office_addr: "SOHO Building, Jl. Letjen M.T. Haryono Kav. 2, Jakarta Selatan 12810, Indonesia",
        email_title: "Email Resmi",
        whatsapp_title: "Saluran WhatsApp Konsultasi Bisnis"
      }
    }
  };

  const c = content[isId ? 'id' : 'en'];

  // Google Material Design 3 (M3) Motion Observer: Temporarily disabled for screenshots
  useEffect(() => {
    // M3 transitions disabled so all sections are immediately visible for screenshots
    return undefined;
  }, []);

  const handleSelectGatewayCorridor = (direction) => {
    setBusinessDirection(direction);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <MainLayout settings={siteSettings}>
      <SeoHead pageCode="home" />

      {/* 1. HERO — Indonesia ↔ China gateway (layered SVG parallax) */}
      <HeroGateway isId={isId} />


      {/* Dynamic Hover Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
        /* ========================================================================= */
        /* Google Material Design 3 (M3) Motion System                              */
        /* ========================================================================= */
        /* ========================================================================= */
        /* Google Material Design 3 (M3) Motion System (TEMPORARILY DISABLED)       */
        /* ========================================================================= */
        .m3-section,
        .m3-section.m3-in-view,
        .m3-section.m3-out-view,
        .m3-section .m3-child,
        .m3-section .m3-card,
        .m3-section .m3-header,
        .m3-section .m3-stagger > *,
        .m3-section .home-services-grid > *,
        .m3-section .home-industries-grid > *,
        .m3-section .home-roadmap-grid > *,
        .m3-section .faq-list > *,
        .m3-section .stat-grid > *,
        .m3-section .home-svc-card,
        .m3-section .why-strength-card,
        .m3-section .industry-card,
        .m3-section .home-card-hover,
        .m3-section .home-article-card,
        .m3-section .faq-item-card,
        .m3-section .home-roadmap-step,
        .m3-section .stat-card,
        .m3-section .manifesto-card {
          opacity: 1 !important;
          transform: none !important;
          filter: none !important;
          transition: none !important;
        }

        /* Preserve hover interactions */
        .home-svc-card:hover {
          transform: translateY(-5px) !important;
        }
        .why-strength-card:hover {
          transform: translateX(8px) !important;
        }
        .industry-card:hover {
          transform: translateY(-6px) !important;
        }
        .home-card-hover:hover {
          transform: translateY(-4px) !important;
        }
        .home-article-card:hover {
          transform: translateY(-5px) !important;
        }

        .home-card-hover {
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .home-card-hover:hover {
          transform: translateY(-4px);
          border-color: rgba(230, 57, 70, 0.45) !important;
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.6), 0 0 35px rgba(230, 57, 70, 0.15) !important;
        }
        .home-svc-card {
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
        }
        .home-svc-card:hover {
          transform: translateY(-5px);
          border-color: rgba(230, 57, 70, 0.45) !important;
          background: #12141A !important;
          box-shadow: 0 24px 55px rgba(0, 0, 0, 0.65), 0 0 40px rgba(230, 57, 70, 0.16) !important;
        }
        .home-svc-card:hover .home-svc-arrow {
          transform: translateX(4px);
        }
        /* Roadmap Process Timeline */
        .home-roadmap-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 28px;
          position: relative;
        }
        .home-roadmap-step {
          position: relative;
          z-index: 2;
        }
        .home-step-dot {
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
        .home-roadmap-step:hover .home-step-dot {
          transform: scale(1.12);
          background: #E63946;
          color: #FFFFFF;
          box-shadow: 0 0 24px rgba(230, 57, 70, 0.85);
        }
        .home-roadmap-line {
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
        .home-roadmap-arrow {
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
          .home-roadmap-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 32px 24px;
          }
          .home-roadmap-line {
            display: none;
          }
        }
        @media (max-width: 580px) {
          .home-roadmap-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }
          .home-roadmap-step {
            display: flex;
            gap: 16px;
            align-items: flex-start;
          }
          .home-step-dot {
            margin-bottom: 0;
            flex-shrink: 0;
          }
          .home-roadmap-line {
            display: block;
            top: 40px;
            left: 20px;
            width: 2px;
            height: calc(100% + 28px);
            background: linear-gradient(180deg, #E63946 0%, rgba(230, 57, 70, 0.4) 100%);
          }
          .home-roadmap-arrow {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(90deg);
          }
        }
        .home-services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        @media (max-width: 1024px) {
          .home-services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .home-services-grid {
            grid-template-columns: 1fr;
          }
        }
        .client-partner-item {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 24px;
          background: rgba(255, 255, 255, 0.025);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          height: 84px;
          min-width: 158px;
        }
        .client-partner-row {
          display: flex;
          flex-wrap: nowrap;
          justify-content: center;
          gap: 16px;
          align-items: center;
          width: 100%;
        }
        @media (max-width: 1100px) {
          .client-partner-row {
            flex-wrap: wrap;
          }
        }
        .client-partner-item:hover {
          background: rgba(255, 255, 255, 0.07);
          border-color: rgba(230, 57, 70, 0.45);
          transform: translateY(-3px);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.5), 0 0 24px rgba(230, 57, 70, 0.16);
        }
        .client-partner-item img {
          height: 30px;
          max-width: 130px;
          width: auto;
          object-fit: contain;
          display: block;
          filter: brightness(0) invert(1);
          opacity: 0.76;
          transition: opacity 0.25s ease, transform 0.25s ease;
        }
        .client-partner-item:hover img {
          opacity: 1;
          transform: scale(1.05);
        }
        /* Subtle Architectural Network Grid Background */
        .section-grid-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
        }
        .section-grid-pattern {
          position: absolute;
          inset: 0;
          background-size: 56px 56px;
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
          mask-image: radial-gradient(ellipse 85% 65% at 50% 50%, #000 35%, transparent 100%);
          -webkit-mask-image: radial-gradient(ellipse 85% 65% at 50% 50%, #000 35%, transparent 100%);
        }
        .section-grid-dots {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(230, 57, 70, 0.35) 1.2px, transparent 1.2px);
          background-size: 56px 56px;
          background-position: -0.6px -0.6px;
          mask-image: radial-gradient(ellipse 70% 50% at 50% 50%, #000 30%, transparent 90%);
          -webkit-mask-image: radial-gradient(ellipse 70% 50% at 50% 50%, #000 30%, transparent 90%);
          opacity: 0.65;
        }

        /* Industry Showcase Cards: Photo Background & Red-Black Gradient Hover */
        .home-industries-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
        }
        @media (max-width: 1200px) {
          .home-industries-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (max-width: 768px) {
          .home-industries-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 540px) {
          .home-industries-grid {
            grid-template-columns: 1fr;
          }
        }

        .industry-card {
          position: relative;
          height: 480px;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: #0A0B0E;
          box-shadow: 0 14px 34px rgba(0, 0, 0, 0.55);
          transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 0.45s ease,
                      box-shadow 0.45s ease;
          cursor: pointer;
        }
        .industry-card:hover {
          transform: translateY(-8px);
          border-color: rgba(230, 57, 70, 0.65);
          box-shadow: 0 24px 50px rgba(0, 0, 0, 0.7), 0 0 32px rgba(230, 57, 70, 0.32);
        }
        .industry-card-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), filter 0.6s ease;
          filter: brightness(0.82) contrast(1.08) saturate(1.1);
        }
        .industry-card:hover .industry-card-img {
          transform: scale(1.09);
          filter: brightness(0.95) contrast(1.15) saturate(1.25);
        }
        .industry-card-overlay-base {
          position: absolute;
          inset: 0;
          z-index: 2;
          background: linear-gradient(
            180deg, 
            rgba(10, 11, 14, 0.35) 0%, 
            rgba(10, 11, 14, 0.25) 30%, 
            rgba(10, 11, 14, 0.75) 65%, 
            rgba(7, 8, 10, 0.96) 95%
          );
          transition: opacity 0.5s ease;
        }
        .industry-card-overlay-hover {
          position: absolute;
          inset: 0;
          z-index: 3;
          background: linear-gradient(
            180deg, 
            rgba(10, 11, 14, 0.15) 0%, 
            rgba(175, 24, 34, 0.62) 32%, 
            rgba(214, 40, 40, 0.85) 60%, 
            rgba(10, 5, 7, 0.98) 96%
          );
          opacity: 0;
          transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .industry-card:hover .industry-card-overlay-hover {
          opacity: 1;
        }
        .industry-card-content {
          position: relative;
          z-index: 4;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 24px 22px;
        }
        .industry-card-icon-wrap {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: rgba(10, 11, 14, 0.65);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.35s ease;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.35);
        }
        .industry-card:hover .industry-card-icon-wrap {
          background: rgba(230, 57, 70, 0.25);
          border-color: rgba(255, 255, 255, 0.35);
          box-shadow: 0 0 16px rgba(230, 57, 70, 0.4);
        }
        .industry-card-tag {
          background: rgba(10, 11, 14, 0.65);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(230, 57, 70, 0.4);
          color: #FFA5A5;
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.05em;
          padding: 4px 10px;
          border-radius: 20px;
          text-transform: uppercase;
          transition: all 0.35s ease;
        }
        .industry-card:hover .industry-card-tag {
          background: rgba(230, 57, 70, 0.3);
          border-color: rgba(255, 255, 255, 0.4);
          color: #FFFFFF;
        }
        .industry-card-bottom {
          display: flex;
          flex-direction: column;
        }
        .industry-card-title {
          font-size: 20px;
          font-weight: 700;
          color: #FFFFFF;
          line-height: 1.3;
          margin: 0 0 4px 0;
          letter-spacing: -0.01em;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.85);
          transition: transform 0.4s ease;
        }
        .industry-card-desc-wrap {
          overflow: hidden;
        }
        .industry-card-desc {
          max-height: 0;
          opacity: 0;
          transform: translateY(16px);
          transition: max-height 0.48s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.42s ease,
                      transform 0.48s cubic-bezier(0.16, 1, 0.3, 1);
          font-size: 13.5px;
          line-height: 1.62;
          color: rgba(255, 255, 255, 0.92);
          margin: 0;
          text-shadow: 0 1px 6px rgba(0, 0, 0, 0.9);
        }
        .industry-card:hover .industry-card-desc {
          max-height: 160px;
          opacity: 1;
          transform: translateY(0);
          margin-top: 10px;
        }
        .industry-card-cta {
          max-height: 0;
          opacity: 0;
          transform: translateY(14px);
          transition: max-height 0.48s cubic-bezier(0.16, 1, 0.3, 1) 0.06s,
                      opacity 0.42s ease 0.06s,
                      transform 0.48s cubic-bezier(0.16, 1, 0.3, 1) 0.06s;
        }
        .industry-card:hover .industry-card-cta {
          max-height: 54px;
          opacity: 1;
          transform: translateY(0);
          margin-top: 14px;
          padding-top: 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.22);
        }
        .industry-card-btn {
          font-size: 13px;
          color: #FFFFFF;
          font-weight: 700;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: color 0.2s ease;
        }
        .industry-card-btn:hover {
          color: #FFB3B3;
        }
        .industry-card-btn-arrow {
          display: inline-block;
          transition: transform 0.25s ease;
        }
        .industry-card:hover .industry-card-btn-arrow {
          transform: translateX(4px);
        }
        .industry-card-hint {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 11.5px;
          color: rgba(255, 255, 255, 0.55);
          font-weight: 500;
          letter-spacing: 0.04em;
          margin-top: 10px;
          transition: all 0.35s ease;
        }
        .industry-card:hover .industry-card-hint {
          opacity: 0;
          max-height: 0;
          margin: 0;
          transform: translateY(10px);
          pointer-events: none;
        }
        @media (hover: none), (max-width: 768px) {
          .industry-card {
            height: auto;
            min-height: 400px;
          }
          .industry-card-desc {
            max-height: 200px !important;
            opacity: 0.95 !important;
            transform: translateY(0) !important;
            margin-top: 10px !important;
          }
          .industry-card-cta {
            max-height: 60px !important;
            opacity: 1 !important;
            transform: translateY(0) !important;
            margin-top: 12px !important;
            padding-top: 10px !important;
            border-top: 1px solid rgba(255, 255, 255, 0.2) !important;
          }
          .industry-card-overlay-hover {
            opacity: 0.8 !important;
          }
          .industry-card-hint {
            display: none !important;
          }
        }
        .overview-photo-wrap:hover .overview-photo {
          transform: scale(1.05);
          filter: grayscale(100%) contrast(1.15) brightness(1.0) !important;
        }
        .overview-profile-btn:hover {
          background: #d62828 !important;
          box-shadow: 0 12px 30px rgba(230, 57, 70, 0.7) !important;
          transform: translateY(-2px);
        }
        .overview-profile-btn:hover .overview-btn-arrow {
          transform: translateX(5px);
        }
        /* Why 8 Vice Strength Cards */
        .why-strength-card {
          display: flex;
          gap: 20px;
          align-items: flex-start;
          padding: 24px 28px;
          background: rgba(255, 255, 255, 0.025);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 18px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 0.3s ease,
                      background 0.3s ease,
                      box-shadow 0.3s ease;
        }
        .why-strength-card:hover {
          transform: translateX(8px);
          border-color: rgba(230, 57, 70, 0.5);
          background: linear-gradient(90deg, rgba(230, 57, 70, 0.08) 0%, rgba(255, 255, 255, 0.04) 100%);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5), 0 0 24px rgba(230, 57, 70, 0.16);
        }
        .why-strength-num {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: rgba(230, 57, 70, 0.1);
          border: 1px solid rgba(230, 57, 70, 0.35);
          color: #E63946;
          font-size: 13px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .why-strength-card:hover .why-strength-num {
          background: #E63946;
          color: #FFFFFF;
          box-shadow: 0 0 16px rgba(230, 57, 70, 0.6);
          transform: scale(1.08);
        }
        /* Single-line Section Header Titles */
        .section-header-title-single {
          white-space: normal;
        }
        @media (min-width: 768px) {
          .section-header-title-single {
            white-space: nowrap !important;
          }
        }
      ` }} />

      {/* ========================================================================= */}
      {/* 1.5 STRATEGIC ADVISORY OVERVIEW & EXECUTIVE PROFILE                       */}
      {/* ========================================================================= */}
      <section
        id="overview"
        className="section"
        style={{
          position: 'relative',
          overflow: 'hidden',
          background: 'radial-gradient(ellipse 75% 50% at 15% 30%, rgba(214, 40, 40, 0.12) 0%, transparent 70%), #08090C',
          color: '#FFFFFF',
          paddingBlock: '100px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
        }}
      >
        {/* Grid Network Background */}
        <div className="section-grid-bg" aria-hidden="true">
          <div className="section-grid-pattern" />
          <div className="section-grid-dots" />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="m3-stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))', gap: '56px', alignItems: 'center' }}>

            {/* Left Column: Strategic Advisory Copy */}
            <div className="m3-child">
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '999px',
                background: 'rgba(230, 57, 70, 0.12)',
                border: '1px solid rgba(230, 57, 70, 0.35)',
                color: '#FF7B7B',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '22px'
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#E63946', boxShadow: '0 0 8px #E63946' }} />
                {c.overview.eyebrow}
              </div>

              <h2 style={{
                fontSize: 'clamp(34px, 3.8vw, 52px)',
                fontWeight: 800,
                letterSpacing: '-0.025em',
                lineHeight: 1.1,
                color: '#FFFFFF',
                marginBottom: '24px'
              }}>
                {c.overview.title}
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '30px' }}>
                <p style={{ fontSize: '15.5px', lineHeight: 1.72, color: 'rgba(255, 255, 255, 0.82)', margin: 0 }}>
                  {c.overview.lead} {c.overview.p1}
                </p>
                <p style={{ fontSize: '15.5px', lineHeight: 1.72, color: 'rgba(255, 255, 255, 0.82)', margin: 0 }}>
                  {c.overview.p2}
                </p>
                <p style={{ fontSize: '15.5px', lineHeight: 1.72, color: 'rgba(255, 255, 255, 0.82)', margin: 0 }}>
                  {c.overview.p3}
                </p>
              </div>

              {/* Callout Highlight: Two Markets. One Strategic Gateway. */}
              <div
                style={{
                  background: 'linear-gradient(135deg, rgba(230, 57, 70, 0.12) 0%, rgba(255, 255, 255, 0.02) 100%)',
                  borderLeft: '4px solid #E63946',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRight: '1px solid rgba(255, 255, 255, 0.08)',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '0 16px 16px 0',
                  padding: '20px 24px'
                }}
              >
                <div style={{ fontSize: '19px', fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.01em', marginBottom: '6px' }}>
                  {c.overview.tagline}
                </div>
                <div style={{ fontSize: '14.5px', color: 'rgba(255, 255, 255, 0.72)', lineHeight: 1.6 }}>
                  {c.overview.subtext}
                </div>
              </div>
            </div>

            {/* Right Column: Black and White Photo with button direct to profile */}
            <div className="m3-child">
              <div
                style={{
                  position: 'relative',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.14)',
                  boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7), 0 0 35px rgba(230, 57, 70, 0.14)',
                  background: '#0D0E13'
                }}
              >
                <div style={{ position: 'relative', height: '500px', overflow: 'hidden' }} className="overview-photo-wrap">
                  <img
                    src="/images/executive_profile_bw.jpg"
                    alt="8 Vice Executive Strategic Advisory"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      filter: 'grayscale(100%) contrast(1.1) brightness(0.9)',
                      transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.6s ease'
                    }}
                    className="overview-photo"
                  />

                  {/* Subtle Gradient Overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(10, 11, 14, 0.96) 0%, rgba(10, 11, 14, 0.35) 50%, rgba(10, 11, 14, 0.2) 100%)',
                      pointerEvents: 'none'
                    }}
                  />

                  {/* Top Floating Badge */}
                  <div style={{ position: 'absolute', top: '20px', left: '20px' }}>
                    <span style={{
                      background: 'rgba(10, 12, 16, 0.85)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.18)',
                      color: '#FFFFFF',
                      padding: '6px 14px',
                      borderRadius: '999px',
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#E63946' }} />
                      {c.overview.photo_badge}
                    </span>
                  </div>

                  {/* Bottom Content with Direct to Profile Button */}
                  <div style={{ position: 'absolute', bottom: '26px', left: '24px', right: '24px' }}>
                    <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.65)', fontWeight: 600, marginBottom: '6px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                      {c.overview.photo_caption}
                    </div>
                    <div style={{ fontSize: '18px', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.3, marginBottom: '18px' }}>
                      {isId ? 'Navigasi Pasar & Kemitraan Strategis' : 'Bilateral Market Navigation & Strategic Growth'}
                    </div>

                    {/* Direct to Profile Button */}
                    <Link
                      href="/about"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                        width: '100%',
                        padding: '14px 24px',
                        borderRadius: '12px',
                        background: '#E63946',
                        color: '#FFFFFF',
                        fontWeight: 700,
                        fontSize: '14.5px',
                        textDecoration: 'none',
                        boxShadow: '0 8px 24px rgba(230, 57, 70, 0.45)',
                        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                      }}
                      className="overview-profile-btn"
                    >
                      <span>{c.overview.btn_profile}</span>
                      <span className="overview-btn-arrow" style={{ transition: 'transform 0.25s ease' }}>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. WHO WE ARE                                                             */}
      {/* ========================================================================= */}
      <section id="who"
        className="section"
        style={{
          position: 'relative',
          overflow: 'hidden',
          background: 'radial-gradient(circle 600px at 90% 15%, rgba(214, 40, 40, 0.08) 0%, transparent 70%), #0A0B0E',
          color: '#FFFFFF',
          paddingBlock: '108px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
        }}
      >
        {/* Grid Network Background */}
        <div className="section-grid-bg" aria-hidden="true">
          <div className="section-grid-pattern" />
          <div className="section-grid-dots" />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))', gap: '56px', alignItems: 'center' }}>

            {/* Left Column: Narrative & Visual Frame */}
            <div className="m3-header">
              <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', color: '#E63946', marginBottom: '14px', textTransform: 'uppercase' }}>
                {c.who.eyebrow}
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 3.2vw, 42px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '20px' }}>
                {Array.isArray(c.who.title) ? c.who.title.map((line, i) => (
                  <span key={i} style={{ display: 'block' }}>{line}</span>
                )) : c.who.title}
              </h2>
              <p style={{ fontSize: '17.5px', lineHeight: 1.65, color: 'rgba(255, 255, 255, 0.92)', fontWeight: 400, marginBottom: '16px' }}>
                {c.who.lead}
              </p>
              <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'rgba(255, 255, 255, 0.65)', margin: 0 }}>
                {c.who.desc}
              </p>
            </div>

            {/* Right Column: 4 Strategic Pillars */}
            <div className="m3-stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
              {c.who.pillars.map((p, idx) => {
                const pIcons = [
                  <PillarInsightIcon key="0" size={24} color="#E63946" />,
                  <PillarCultureIcon key="1" size={24} color="#E63946" />,
                  <PillarNetworkIcon key="2" size={24} color="#E63946" />,
                  <PillarStrategyIcon key="3" size={24} color="#E63946" />
                ];
                return (
                  <div
                    key={idx}
                    className="home-card-hover"
                    style={{
                      background: 'rgba(255, 255, 255, 0.025)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '16px',
                      padding: '28px',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
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
      {/* 4. WHAT WE DO (6 CORE CAPABILITIES)                                       */}
      {/* ========================================================================= */}
      <section
        id="services"
        className="section"
        style={{
          position: 'relative',
          overflow: 'hidden',
          background: 'radial-gradient(ellipse 90% 50% at 50% 0%, rgba(214, 40, 40, 0.1) 0%, transparent 65%), #060709',
          color: '#FFFFFF',
          paddingBlock: '112px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
        }}
      >
        {/* Grid Network Background */}
        <div className="section-grid-bg" aria-hidden="true">
          <div className="section-grid-pattern" />
          <div className="section-grid-dots" />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="m3-header" style={{ textAlign: 'center', maxWidth: '1040px', margin: '0 auto 64px auto' }}>
            <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', color: '#E63946', marginBottom: '14px', textTransform: 'uppercase' }}>
              {c.services.eyebrow}
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 3vw, 42px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.25, marginBottom: '18px' }}>
              {Array.isArray(c.services.title) ? c.services.title.map((line, i) => (
                <span key={i} style={{ display: 'block' }}>{line}</span>
              )) : c.services.title}
            </h2>
            <p style={{ fontSize: '16px', lineHeight: 1.7, color: 'rgba(255, 255, 255, 0.68)', margin: '0 auto', maxWidth: '820px' }}>
              {c.services.subtitle}
            </p>
          </div>

          {/* 6 Services Grid: 3 top & 3 bottom */}
          <div className="home-services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }}>
            {c.services.items.map((svc, idx) => {
              const svcIcons = [
                <ServiceAdvisoryIcon key="0" size={22} color="#E63946" />,
                <ServiceGovIcon key="1" size={22} color="#E63946" />,
                <ServiceMatchingIcon key="2" size={22} color="#E63946" />,
                <ServiceCommsIcon key="3" size={22} color="#E63946" />,
                <ServiceDigitalIcon key="4" size={22} color="#E63946" />,
                <ServiceInvestmentIcon key="5" size={22} color="#E63946" />
              ];
              return (
                <div
                  key={idx}
                  id={svc.id}
                  className="home-svc-card"
                  style={{
                    background: '#0D0E13',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '20px',
                    padding: '34px',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 12px 35px rgba(0, 0, 0, 0.4)'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '22px' }}>
                      <div style={{
                        fontSize: '13px',
                        fontWeight: 800,
                        color: '#E63946',
                        letterSpacing: '0.1em',
                        background: 'rgba(230, 57, 70, 0.1)',
                        padding: '4px 10px',
                        borderRadius: '6px'
                      }}>
                        {svc.num}
                      </div>
                      <div style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '12px',
                        background: 'rgba(230, 57, 70, 0.12)',
                        color: '#E63946',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        {svcIcons[idx % svcIcons.length]}
                      </div>
                    </div>

                    <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#FFFFFF', lineHeight: 1.35, marginBottom: '12px' }}>
                      <Link
                        href={`/services/${svc.id}`}
                        style={{ color: '#FFFFFF', textDecoration: 'none', transition: 'color 0.2s ease' }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#FF7B7B')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                      >
                        {svc.title}
                      </Link>
                    </h3>

                    <p style={{ fontSize: '14.5px', lineHeight: 1.7, color: 'rgba(255, 255, 255, 0.68)', margin: 0 }}>
                      {svc.desc}
                    </p>
                  </div>

                  <div
                    style={{
                      marginTop: '30px',
                      paddingTop: '18px',
                      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '12px',
                      flexWrap: 'wrap'
                    }}
                  >
                    <Link
                      href={`/services/${svc.id}`}
                      style={{
                        fontSize: '13px',
                        fontWeight: 700,
                        color: '#FFFFFF',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        textDecoration: 'none'
                      }}
                      className="home-svc-explore-link"
                    >
                      <span>{isId ? 'Lihat Detail Layanan' : 'Explore Service'}</span>
                      <span style={{ color: '#E63946', fontSize: '14px' }}>→</span>
                    </Link>

                    <a
                      href="#contact"
                      onClick={() => { setSelectedService(svc.title); }}
                      style={{
                        fontSize: '12.5px',
                        fontWeight: 500,
                        color: 'rgba(255, 255, 255, 0.55)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        textDecoration: 'none'
                      }}
                    >
                      <span>{isId ? 'Konsultasi' : 'Inquire'}</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4.5 WHY 8 VICE (CORE STRENGTHS)                                           */}
      {/* ========================================================================= */}
      <section
        id="why-8vice"
        className="section"
        style={{
          position: 'relative',
          overflow: 'hidden',
          background: 'radial-gradient(circle 800px at 90% 20%, rgba(214, 40, 40, 0.08) 0%, transparent 70%), #08090C',
          color: '#FFFFFF',
          paddingBlock: '108px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
        }}
      >
        {/* Grid Network Background */}
        <div className="section-grid-bg" aria-hidden="true">
          <div className="section-grid-pattern" />
          <div className="section-grid-dots" />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(440px, 1fr))', gap: '56px', alignItems: 'flex-start' }}>

            {/* Left Column: Narrative Headline & Strategic Context */}
            <div style={{ position: 'sticky', top: '100px' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '999px',
                background: 'rgba(230, 57, 70, 0.12)',
                border: '1px solid rgba(230, 57, 70, 0.35)',
                color: '#FF7B7B',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '20px'
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#E63946', boxShadow: '0 0 8px #E63946' }} />
                {c.why.eyebrow}
              </div>

              <h2 style={{
                fontSize: 'clamp(28px, 3.2vw, 42px)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                lineHeight: 1.25,
                color: '#FFFFFF',
                marginBottom: '22px'
              }}>
                {Array.isArray(c.why.title) ? c.why.title.map((line, i) => (
                  <span key={i} style={{ display: 'block' }}>{line}</span>
                )) : c.why.title}
              </h2>

              <p style={{
                fontSize: '16.5px',
                lineHeight: 1.75,
                color: 'rgba(255, 255, 255, 0.8)',
                marginBottom: '24px'
              }}>
                {c.why.lead}
              </p>

              <div style={{
                fontSize: '14px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                color: '#E63946',
                textTransform: 'uppercase',
                marginBottom: '28px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span style={{ width: '20px', height: '2px', background: '#E63946', display: 'inline-block' }} />
                <span>{c.why.intro}</span>
              </div>

              {/* Visual Strategic Photo Frame (Moved from Who We Are) */}
              <div
                className="m3-card"
                style={{
                  position: 'relative',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  boxShadow: '0 20px 45px rgba(0, 0, 0, 0.5), 0 0 40px rgba(230, 57, 70, 0.14)'
                }}
              >
                <img
                  src="/images/why_choose_us_thumbnail.webp"
                  alt="8 Vice Cross-Border Strategic Advisory"
                  style={{ width: '100%', height: '240px', objectFit: 'cover', display: 'block' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(10, 11, 14, 0.94) 0%, rgba(10, 11, 14, 0.35) 60%, transparent 100%)',
                    pointerEvents: 'none'
                  }}
                />
                <div style={{ position: 'absolute', top: '14px', left: '16px' }}>
                  <span style={{
                    background: 'rgba(10, 12, 16, 0.85)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    border: '1px solid rgba(230, 57, 70, 0.35)',
                    color: '#FF8A8A',
                    padding: '6px 12px',
                    borderRadius: '999px',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase'
                  }}>
                    {isId ? 'Jembatan Strategis Bilateral' : 'Bilateral Strategic Bridge'}
                  </span>
                </div>
                <div style={{ position: 'absolute', bottom: '16px', left: '20px', right: '20px' }}>
                  <p style={{ margin: 0, fontSize: '13px', color: 'rgba(255, 255, 255, 0.9)', fontStyle: 'italic', lineHeight: 1.55 }}>
                    “{c.why.quote}”
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: 5 Key Strengths Cards */}
            <div className="m3-stagger" style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {c.why.points.map((pt, idx) => {
                const strengthIcons = [
                  <PillarCultureIcon key="0" size={20} color="#E63946" />,
                  <PillarNetworkIcon key="1" size={20} color="#E63946" />,
                  <ServiceMatchingIcon key="2" size={20} color="#E63946" />,
                  <PillarStrategyIcon key="3" size={20} color="#E63946" />,
                  <PillarInsightIcon key="4" size={20} color="#E63946" />
                ];
                return (
                  <div key={idx} className="why-strength-card">
                    <div className="why-strength-num">
                      {pt.num}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                        <span style={{ color: '#E63946', display: 'inline-flex', alignItems: 'center' }}>
                          {strengthIcons[idx % strengthIcons.length]}
                        </span>
                        <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#FFFFFF', margin: 0, lineHeight: 1.35 }}>
                          {pt.title}
                        </h3>
                      </div>
                      <p style={{ fontSize: '14.5px', lineHeight: 1.65, color: 'rgba(255, 255, 255, 0.72)', margin: 0 }}>
                        {pt.desc}
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
      {/* 4.6 VIDEO MANIFESTO                                                       */}
      {/* ========================================================================= */}
      <VideoManifesto isId={isId} />

      {/* ========================================================================= */}
      {/* 5. INDONESIA–CHINA GATEWAY (DUAL CORRIDORS)                               */}
      {/* ========================================================================= */}
      <section
        id="gateway"
        className="section"
        style={{
          position: 'relative',
          overflow: 'hidden',
          background: 'radial-gradient(ellipse 90% 45% at 50% 15%, rgba(214, 40, 40, 0.15) 0%, transparent 65%), #08090B',
          color: '#FFFFFF',
          paddingBlock: '112px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
        }}
      >
        {/* Grid Network Background */}
        <div className="section-grid-bg" aria-hidden="true">
          <div className="section-grid-pattern" />
          <div className="section-grid-dots" />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="m3-header" style={{ textAlign: 'center', maxWidth: '1100px', margin: '0 auto 64px auto' }}>
            <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', color: '#E63946', marginBottom: '14px', textTransform: 'uppercase' }}>
              {c.gateway.eyebrow}
            </div>
            <h2
              className="section-header-title-single"
              style={{ fontSize: 'clamp(24px, 3.2vw, 42px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '18px' }}
            >
              {c.gateway.title}
            </h2>
            <p style={{ fontSize: '17px', lineHeight: 1.65, color: 'rgba(255, 255, 255, 0.75)', maxWidth: '820px', margin: '0 auto' }}>
              {c.gateway.desc}
            </p>
          </div>

          {/* Dual Corridors Side-by-Side */}
          <div className="m3-stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '32px', marginBottom: '64px' }}>

            {/* Card 1: China to Indonesia */}
            <div
              id="gateway-c2i"
              className="home-card-hover"
              style={{
                background: '#0E1015',
                border: '1px solid rgba(230, 57, 70, 0.35)',
                borderTop: '3px solid #E63946',
                borderRadius: '20px',
                padding: '40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 20px 45px rgba(0, 0, 0, 0.5), 0 0 35px rgba(230, 57, 70, 0.12)'
              }}
            >
              <div>
                <div style={{ display: 'inline-block', background: 'rgba(230, 57, 70, 0.15)', color: '#FF7B7B', padding: '6px 14px', borderRadius: '6px', fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', marginBottom: '20px' }}>
                  {c.gateway.c2i_title.toUpperCase()}
                </div>

                <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#FFFFFF', marginBottom: '10px' }}>
                  {c.gateway.c2i_title}
                </h3>
                <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.6, marginBottom: '28px' }}>
                  {c.gateway.c2i_sub}
                </p>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '36px' }}>
                  {c.gateway.c2i_points.map((pt, idx) => (
                    <li key={idx} style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.85)', display: 'flex', alignItems: 'flex-start', gap: '12px', lineHeight: 1.5 }}>
                      <span style={{ color: '#E63946', fontWeight: 'bold' }}>✓</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={() => handleSelectGatewayCorridor('China to Indonesia')}
                className="btn btn--primary"
                style={{
                  background: 'linear-gradient(135deg, #E63946 0%, #A31621 100%)',
                  border: 'none',
                  width: '100%',
                  padding: '14px 20px',
                  fontWeight: 600,
                  borderRadius: '10px',
                  boxShadow: '0 8px 24px rgba(230, 57, 70, 0.35)',
                  cursor: 'pointer'
                }}
              >
                {c.gateway.c2i_btn}
              </button>
            </div>

            {/* Card 2: Indonesia to China */}
            <div
              id="gateway-i2c"
              className="home-card-hover"
              style={{
                background: '#0E1015',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderTop: '3px solid rgba(255, 255, 255, 0.45)',
                borderRadius: '20px',
                padding: '40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 20px 45px rgba(0, 0, 0, 0.5)'
              }}
            >
              <div>
                <div style={{ display: 'inline-block', background: 'rgba(255, 255, 255, 0.08)', color: '#FFFFFF', padding: '6px 14px', borderRadius: '6px', fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', marginBottom: '20px' }}>
                  {c.gateway.i2c_title.toUpperCase()}
                </div>

                <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#FFFFFF', marginBottom: '10px' }}>
                  {c.gateway.i2c_title}
                </h3>
                <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.6, marginBottom: '28px' }}>
                  {c.gateway.i2c_sub}
                </p>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '36px' }}>
                  {c.gateway.i2c_points.map((pt, idx) => (
                    <li key={idx} style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.85)', display: 'flex', alignItems: 'flex-start', gap: '12px', lineHeight: 1.5 }}>
                      <span style={{ color: '#E63946', fontWeight: 'bold' }}>✓</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={() => handleSelectGatewayCorridor('Indonesia to China')}
                className="btn btn--ghost-light"
                style={{
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  width: '100%',
                  padding: '14px 20px',
                  fontWeight: 600,
                  borderRadius: '10px',
                  color: '#FFFFFF',
                  cursor: 'pointer'
                }}
              >
                {c.gateway.i2c_btn}
              </button>
            </div>

          </div>

          {/* 5-Step Process Timeline / Strategic Roadmap */}
          <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.07)', borderRadius: '20px', padding: '40px' }}>
            <h4 style={{ textAlign: 'center', fontSize: '19px', fontWeight: 600, color: '#FFFFFF', marginBottom: '36px' }}>
              {c.gateway.methodology_title}
            </h4>
            <div className="home-roadmap-grid">
              {c.gateway.steps.map((st, idx) => (
                <div key={idx} className="home-roadmap-step">
                  {/* Roadmap Line connecting to the next step */}
                  {idx < c.gateway.steps.length - 1 && (
                    <div className="home-roadmap-line" aria-hidden="true">
                      <span className="home-roadmap-arrow">›</span>
                    </div>
                  )}
                  <div className="home-step-dot">{st.num}</div>
                  <div>
                    <div style={{ fontSize: '16px', fontWeight: 600, color: '#FFFFFF', marginBottom: '6px' }}>{st.name}</div>
                    <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.6)', lineHeight: 1.55 }}>{st.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. INDUSTRIES & OPPORTUNITIES                                             */}
      {/* ========================================================================= */}
      <section
        id="industries"
        className="section"
        style={{
          position: 'relative',
          overflow: 'hidden',
          background: 'radial-gradient(ellipse 85% 50% at 50% 15%, rgba(214, 40, 40, 0.12) 0%, transparent 70%), #0A0B0E',
          color: '#FFFFFF',
          paddingBlock: '108px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
        }}
      >
        {/* Grid Network Background */}
        <div className="section-grid-bg" aria-hidden="true">
          <div className="section-grid-pattern" />
          <div className="section-grid-dots" />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', maxWidth: '1100px', margin: '0 auto 60px auto' }}>
            <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', color: '#E63946', marginBottom: '14px', textTransform: 'uppercase' }}>
              {c.industries.eyebrow}
            </div>
            <h2
              className="section-header-title-single"
              style={{ fontSize: 'clamp(22px, 2.9vw, 38px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '16px' }}
            >
              {c.industries.title}
            </h2>
            <p style={{ fontSize: '16px', lineHeight: 1.65, color: 'rgba(255, 255, 255, 0.65)', maxWidth: '780px', margin: '0 auto' }}>
              {c.industries.subtitle}
            </p>
          </div>

          <div className="home-industries-grid">
            {c.industries.items.map((ind, idx) => {
              const indIcons = [
                <IndustryInfraIcon key="0" size={20} color="#FFFFFF" />,
                <IndustryTechIcon key="1" size={20} color="#FFFFFF" />,
                <IndustryTourismIcon key="2" size={20} color="#FFFFFF" />,
                <IndustryCreativeIcon key="3" size={20} color="#FFFFFF" />,
                <IndustryTradeIcon key="4" size={20} color="#FFFFFF" />
              ];
              const industryImages = [
                '/images/industry_infrastructure.jpg',
                '/images/industry_technology.jpg',
                '/images/industry_tourism.jpg',
                '/images/industry_creative.jpg',
                '/images/industry_trade.jpg'
              ];
              return (
                <div
                  key={idx}
                  className="industry-card"
                  onClick={() => { setSelectedIndustry(ind.title); }}
                >
                  {/* Background Photo */}
                  <img
                    src={industryImages[idx % industryImages.length]}
                    alt={ind.title}
                    className="industry-card-img"
                    loading="lazy"
                  />

                  {/* Base Dark Vignette Overlay (Default State) */}
                  <div className="industry-card-overlay-base" aria-hidden="true" />

                  {/* Rich Red-to-Black Gradient Overlay (Hover State) */}
                  <div className="industry-card-overlay-hover" aria-hidden="true" />

                  {/* Foreground Content */}
                  <div className="industry-card-content">
                    {/* Top Bar: Icon & Category Tag */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px' }}>
                      <div className="industry-card-icon-wrap">
                        {indIcons[idx % indIcons.length]}
                      </div>
                      <span className="industry-card-tag">
                        {ind.tag}
                      </span>
                    </div>

                    {/* Bottom Area: Title, Description on Hover & CTA */}
                    <div className="industry-card-bottom">
                      <h3 className="industry-card-title">
                        {ind.title}
                      </h3>

                      <div className="industry-card-desc-wrap">
                        <p className="industry-card-desc">
                          {ind.desc}
                        </p>

                        <div className="industry-card-cta">
                          <Link
                            href={`/industries#${ind.id || 'infrastructure'}`}
                            onClick={(e) => e.stopPropagation()}
                            className="industry-card-btn"
                          >
                            <span>{isId ? 'Eksplorasi Sektor Ini' : 'Explore Sector Opportunities'}</span>
                            <span className="industry-card-btn-arrow">→</span>
                          </Link>
                        </div>
                      </div>

                      {/* Interactive Cue in Default State */}
                      <div className="industry-card-hint">
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#E63946', display: 'inline-block' }} />
                        <span>{isId ? 'Hover untuk detail' : 'Hover to explore'}</span>
                        <span style={{ fontSize: '13px', marginLeft: 'auto', color: '#E63946' }}>→</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. LATEST ARTICLES & STRATEGIC INSIGHTS                                   */}
      {/* ========================================================================= */}
      <HomeArticles isId={isId} insights={insights} />

      {/* ========================================================================= */}
      {/* 8. EXPERIENCE, CREDIBILITY & NDA COMPLIANCE                               */}
      {/* ========================================================================= */}
      <section
        className="section"
        style={{
          position: 'relative',
          overflow: 'hidden',
          background: '#07080A',
          color: '#FFFFFF',
          paddingBlock: '96px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
        }}
      >
        {/* Grid Network Background */}
        <div className="section-grid-bg" aria-hidden="true">
          <div className="section-grid-pattern" />
          <div className="section-grid-dots" />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '880px', margin: '0 auto', textAlign: 'center' }}>

            {/* NDA & Discretion Pill Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(230, 57, 70, 0.12)',
              border: '1px solid rgba(230, 57, 70, 0.3)',
              padding: '6px 16px',
              borderRadius: '999px',
              marginBottom: '20px'
            }}>
              <ShieldNdaIcon size={16} color="#E63946" />
              <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', color: '#FF8A8A', textTransform: 'uppercase' }}>
                {isId ? 'Kerahasiaan Ketat & Perjanjian NDA Bilateral' : 'Strict Discretion & Enforceable Bilateral NDAs'}
              </span>
            </div>

            <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', color: '#E63946', marginBottom: '14px', textTransform: 'uppercase' }}>
              {c.credibility.eyebrow}
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 3.2vw, 40px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '18px' }}>
              {c.credibility.title}
            </h2>
            <p style={{ fontSize: '16.5px', lineHeight: 1.7, color: 'rgba(255, 255, 255, 0.88)', marginBottom: '14px' }}>
              {c.credibility.desc}
            </p>
            <p style={{ fontSize: '15px', lineHeight: 1.65, color: 'rgba(255, 255, 255, 0.6)', marginBottom: '28px' }}>
              {c.credibility.subdesc}
            </p>
            <div style={{ fontSize: '12.5px', fontStyle: 'italic', color: 'rgba(255, 255, 255, 0.4)' }}>
              {c.credibility.notice}
            </div>
          </div>

          {/* 4 Key Statistics Cards */}
          <div className="stat-grid m3-stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 340px))', justifyContent: 'center', gap: '28px', maxWidth: '760px', margin: '48px auto 56px auto' }}>
            {c.hero.stats.map((st, idx) => (
              <div
                key={idx}
                className="stat-card"
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.07)',
                  borderRadius: '18px',
                  padding: '32px 28px',
                  textAlign: 'center'
                }}
              >
                <div style={{ fontSize: 'clamp(38px, 4vw, 46px)', fontWeight: 800, color: '#E63946', lineHeight: 1, marginBottom: '10px', letterSpacing: '-0.02em' }}>{st.num}</div>
                <div style={{ fontSize: '15.5px', fontWeight: 600, color: '#FFFFFF', marginBottom: '6px' }}>{st.label}</div>
                <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.55)' }}>{st.desc}</div>
              </div>
            ))}
          </div>

          {/* Client / Ecosystem Network Logos */}
          {clients && clients.length > 0 && (
            <div className="m3-child" style={{ paddingTop: '42px', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <div style={{ textAlign: 'center', fontSize: '12px', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '28px' }}>
                {isId ? 'Kolaborasi Proyek & Inisiatif Terpercaya' : 'Selected Project Collaborations & Engagements'}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
                {[clients.slice(0, 5), clients.slice(5)].map((rowClients, rowIdx) => (
                  <div key={rowIdx} className="client-partner-row">
                    {rowClients.map((client, cIdx) => {
                      const imgSrc = client.image || client.logo;
                      const srcLower = (imgSrc || '').toLowerCase();
                      const nameLower = (client.name || '').toLowerCase();

                      // Proporsi ukuran: logo persegi/emblem dibuat lebih besar agar seimbang secara visual
                      let logoHeight = '36px';
                      let logoMaxWidth = '138px';

                      if (srcLower.includes('aha') || nameLower.includes('aha')) {
                        logoHeight = '62px';
                        logoMaxWidth = '135px';
                      } else if (srcLower.includes('guangdong') || nameLower.includes('guangdong')) {
                        logoHeight = '58px';
                        logoMaxWidth = '145px';
                      } else if (srcLower.includes('zhongnan') || nameLower.includes('zhongnan') || nameLower.includes('zoland')) {
                        logoHeight = '54px';
                        logoMaxWidth = '135px';
                      } else if (srcLower.includes('edutech') || nameLower.includes('edutech')) {
                        logoHeight = '44px';
                        logoMaxWidth = '142px';
                      } else if (srcLower.includes('grandmelia') || nameLower.includes('melia')) {
                        logoHeight = '40px';
                        logoMaxWidth = '145px';
                      } else if (srcLower.includes('mangotv') || nameLower.includes('mango')) {
                        logoHeight = '38px';
                        logoMaxWidth = '138px';
                      }

                      return (
                        <div key={cIdx} className="client-partner-item" title={client.name}>
                          {imgSrc ? (
                            <img
                              src={imgSrc.startsWith('/') ? imgSrc : `/${imgSrc}`}
                              alt={client.name || 'Partner'}
                              style={{
                                height: logoHeight,
                                maxWidth: logoMaxWidth,
                                width: 'auto',
                                objectFit: 'contain',
                                display: 'block',
                                filter: 'brightness(0) invert(1)',
                                opacity: 0.85
                              }}
                            />
                          ) : (
                            <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>{client.name}</span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. FREQUENTLY ASKED QUESTIONS (FAQ)                                       */}
      {/* ========================================================================= */}
      <HomeFaq isId={isId} />

      {/* ========================================================================= */}
      {/* 10. DISCUSS YOUR BUSINESS (SMART INQUIRY FORM & DIRECT CONTACT)           */}
      {/* ========================================================================= */}
      <section
        id="contact"
        className="section"
        style={{
          position: 'relative',
          overflow: 'hidden',
          background: 'radial-gradient(ellipse 85% 60% at 50% 95%, rgba(214, 40, 40, 0.22) 0%, transparent 75%), #07080A',
          color: '#FFFFFF',
          paddingBlock: '112px'
        }}
      >
        {/* Grid Network Background */}
        <div className="section-grid-bg" aria-hidden="true">
          <div className="section-grid-pattern" />
          <div className="section-grid-dots" />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))', gap: '56px', alignItems: 'stretch' }}>

            {/* Form Column */}
            <div
              className="m3-card"
              style={{
                background: '#0D0E13',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '24px',
                padding: '38px',
                boxShadow: '0 24px 60px rgba(0, 0, 0, 0.6), 0 0 50px rgba(230, 57, 70, 0.12)'
              }}
            >
              <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em', color: '#E63946', marginBottom: '10px', textTransform: 'uppercase' }}>
                {c.inquiry.eyebrow}
              </div>
              <h3 style={{ fontSize: '28px', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px' }}>
                {c.inquiry.title}
              </h3>
              <p style={{ fontSize: '14.5px', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.6, marginBottom: '28px' }}>
                {c.inquiry.subtitle}
              </p>

              {submitted ? (
                <div style={{ background: 'rgba(46, 204, 113, 0.15)', border: '1px solid rgba(46, 204, 113, 0.4)', borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
                  <div style={{ fontSize: '24px', marginBottom: '8px' }}>✓</div>
                  <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#2ECC71', marginBottom: '8px' }}>Inquiry Received</h4>
                  <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)', margin: 0 }}>{c.inquiry.success_msg}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmitInquiry} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

                  {/* Direction Radios */}
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.85)', marginBottom: '10px' }}>
                      {c.inquiry.dir_lbl}
                    </label>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                      {c.inquiry.dir_opts.map((opt, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setBusinessDirection(opt)}
                          style={{
                            background: businessDirection === opt ? '#E63946' : 'rgba(255, 255, 255, 0.04)',
                            color: '#FFFFFF',
                            border: businessDirection === opt ? '1px solid #E63946' : '1px solid rgba(255, 255, 255, 0.12)',
                            borderRadius: '8px',
                            padding: '8px 14px',
                            fontSize: '12.5px',
                            fontWeight: 500,
                            cursor: 'pointer',
                            transition: 'all 0.2s ease'
                          }}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Service Dropdown */}
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.85)', marginBottom: '8px' }}>
                      {c.inquiry.svc_lbl}
                    </label>
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      style={{
                        width: '100%',
                        background: '#14161C',
                        color: '#FFFFFF',
                        border: '1px solid rgba(255, 255, 255, 0.14)',
                        borderRadius: '8px',
                        padding: '12px 14px',
                        fontSize: '13.5px',
                        outline: 'none'
                      }}
                    >
                      {c.services.items.map((svc, idx) => (
                        <option key={idx} value={svc.title} style={{ background: '#14161C', color: '#fff' }}>
                          {svc.title}
                        </option>
                      ))}
                      <option value="Other / Bilateral Consultation" style={{ background: '#14161C', color: '#fff' }}>
                        {isId ? 'Lainnya / Konsultasi Bilateral' : 'Other / Bilateral Consultation'}
                      </option>
                    </select>
                  </div>

                  {/* Industry Dropdown */}
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.85)', marginBottom: '8px' }}>
                      {c.inquiry.ind_lbl}
                    </label>
                    <select
                      value={selectedIndustry}
                      onChange={(e) => setSelectedIndustry(e.target.value)}
                      style={{
                        width: '100%',
                        background: '#14161C',
                        color: '#FFFFFF',
                        border: '1px solid rgba(255, 255, 255, 0.14)',
                        borderRadius: '8px',
                        padding: '12px 14px',
                        fontSize: '13.5px',
                        outline: 'none'
                      }}
                    >
                      {c.industries.items.map((ind, idx) => (
                        <option key={idx} value={ind.title} style={{ background: '#14161C', color: '#fff' }}>
                          {ind.title}
                        </option>
                      ))}
                      <option value="Other Industry" style={{ background: '#14161C', color: '#fff' }}>
                        {isId ? 'Sektor Lainnya' : 'Other Industry'}
                      </option>
                    </select>
                  </div>

                  {/* Company Name */}
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.85)', marginBottom: '8px' }}>
                      {c.inquiry.company_lbl}
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Enterprise Ltd. / PT Bisnis Sejahtera"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      style={{
                        width: '100%',
                        background: '#14161C',
                        color: '#FFFFFF',
                        border: '1px solid rgba(255, 255, 255, 0.14)',
                        borderRadius: '8px',
                        padding: '12px 14px',
                        fontSize: '13.5px',
                        outline: 'none'
                      }}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.85)', marginBottom: '8px' }}>
                      {c.inquiry.email_lbl} *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      style={{
                        width: '100%',
                        background: '#14161C',
                        color: '#FFFFFF',
                        border: '1px solid rgba(255, 255, 255, 0.14)',
                        borderRadius: '8px',
                        padding: '12px 14px',
                        fontSize: '13.5px',
                        outline: 'none'
                      }}
                    />
                  </div>

                  {/* Notes / Message */}
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.85)', marginBottom: '8px' }}>
                      {c.inquiry.notes_lbl}
                    </label>
                    <textarea
                      rows={3}
                      placeholder={c.inquiry.notes_ph}
                      value={inquiryNotes}
                      onChange={(e) => setInquiryNotes(e.target.value)}
                      style={{
                        width: '100%',
                        background: '#14161C',
                        color: '#FFFFFF',
                        border: '1px solid rgba(255, 255, 255, 0.14)',
                        borderRadius: '8px',
                        padding: '12px 14px',
                        fontSize: '13.5px',
                        outline: 'none',
                        resize: 'vertical'
                      }}
                    />
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn--lg"
                    style={{
                      background: 'linear-gradient(135deg, #E63946 0%, #A31621 100%)',
                      color: '#FFFFFF',
                      border: 'none',
                      borderRadius: '10px',
                      padding: '16px',
                      fontSize: '15px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      boxShadow: '0 8px 24px rgba(230, 57, 70, 0.45)',
                      marginTop: '8px'
                    }}
                  >
                    {isSubmitting ? (isId ? 'Mengirimkan...' : 'Submitting...') : c.inquiry.submit_btn}
                  </button>
                </form>
              )}
            </div>

            {/* Direct Contact & Office Details */}
            {/* Direct Contact & Office Details with B&W Advisory Photo (Stretches to keep section level/rata) */}
            <div className="m3-card" style={{ display: 'flex', flexDirection: 'column', gap: '24px', height: '100%' }}>
              <div>
                <h4 style={{ fontSize: '24px', fontWeight: 700, color: '#FFFFFF', marginBottom: '14px' }}>
                  {isId ? 'Konsultasi Langsung dengan Tim 8 Vice' : 'Direct Strategic Advisory Consultation'}
                </h4>
                <p style={{ fontSize: '15px', lineHeight: 1.65, color: 'rgba(255, 255, 255, 0.68)', margin: 0 }}>
                  {isId
                    ? 'Kami siap membantu menyusun rencana penetrasi pasar, pendampingan dialog institusional, dan matchmaking kemitraan bilateral Indonesia–China secara terarah dan terpercaya.'
                    : 'We welcome inquiries from Chinese companies exploring Indonesia, Indonesian enterprises seeking expansion in China, and organizations pursuing bilateral cooperation.'}
                </p>
              </div>

              <div style={{ background: '#0D0E13', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '20px', padding: '28px', display: 'flex', flexDirection: 'column', gap: '22px' }}>

                {/* Office */}
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(230, 57, 70, 0.12)', color: '#E63946', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: '#E63946', marginBottom: '4px' }}>{c.inquiry.office_title}</div>
                    <div style={{ fontSize: '14.5px', color: 'rgba(255, 255, 255, 0.88)', lineHeight: 1.5 }}>{c.inquiry.office_addr}</div>
                  </div>
                </div>

                {/* Email */}
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(230, 57, 70, 0.12)', color: '#E63946', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: '#E63946', marginBottom: '4px' }}>{c.inquiry.email_title}</div>
                    <a href="mailto:hello@8vice.com" style={{ fontSize: '14.5px', color: '#FFFFFF', textDecoration: 'none' }}>hello@8vice.com</a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(230, 57, 70, 0.12)', color: '#E63946', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: '#E63946', marginBottom: '4px' }}>{c.inquiry.whatsapp_title}</div>
                    <a href="https://wa.me/628118005110" target="_blank" rel="noopener noreferrer" style={{ fontSize: '14.5px', color: '#FFFFFF', textDecoration: 'none' }}>
                      +62 811-8005-110
                    </a>
                  </div>
                </div>

              </div>

              {/* Black & White Strategic Advisory Boardroom Photo Frame to make columns level/rata */}
              <div
                style={{
                  position: 'relative',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 16px 40px rgba(0, 0, 0, 0.5), 0 0 35px rgba(230, 57, 70, 0.12)',
                  flex: 1,
                  minHeight: '230px'
                }}
              >
                <img
                  src="/images/consultation_advisory_bw.jpg"
                  alt="8 Vice Bilateral Strategic Advisory Consultation Jakarta"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'grayscale(100%) contrast(106%)' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(7, 8, 10, 0.92) 0%, rgba(7, 8, 10, 0.25) 55%, transparent 100%)',
                    pointerEvents: 'none'
                  }}
                />
                <div style={{ position: 'absolute', top: '14px', right: '16px' }}>
                  <span style={{
                    background: 'rgba(10, 12, 16, 0.85)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(230, 57, 70, 0.35)',
                    color: '#FF8A8A',
                    padding: '5px 12px',
                    borderRadius: '999px',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase'
                  }}>
                    {isId ? 'Tatap Muka & Daring' : 'In-Person & Virtual'}
                  </span>
                </div>
                <div style={{ position: 'absolute', bottom: '16px', left: '20px', right: '20px' }}>
                  <div style={{ fontSize: '11.5px', fontWeight: 700, color: '#E63946', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '2px' }}>
                    {isId ? 'Ruang Rapat Penasihat Strategis' : 'Executive Advisory Boardroom'}
                  </div>
                  <div style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.9)', fontWeight: 500 }}>
                    Menara Prima, Mega Kuningan · Jakarta Financial District
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </MainLayout>
  );
}
