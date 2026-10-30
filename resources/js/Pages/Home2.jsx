import React, { useState, useEffect } from 'react';
import { useForm, usePage } from '@inertiajs/react';
import Link from '@/Components/LocalizedLink';
import MainLayout from '@/Layouts/MainLayout';
import { useTranslation } from '@/Contexts/TranslationContext';
import SeoHead from '@/Components/SeoHead';
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

export default function Home2({
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
    website_url: ''
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
        setSubmitted(true);
      }
    });
  };

  // Canonical Content Dictionary — Exactly identical to Home.jsx
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
          { num: "100+", label: "Engagements Facilitated", desc: "Across China & Indonesia" },
          { num: "5", label: "Priority Sectors", desc: "Strategic industry coverage" },
          { num: "2", label: "Dynamic Markets", desc: "One unified strategic gateway" }
        ]
      },
      overview: {
        eyebrow: "STRATEGIC ADVISORY STATEMENT",
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
            title: "Digital Business & Ecosystem Development",
            desc: "Facilitating collaboration around digital platforms, consumer technology, tourism promotion, and connected commercial ecosystems.",
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
            title: "Infrastructure & Urban Development",
            tag: "High-Growth Infrastructure",
            desc: "Transport systems, urban mobility, smart city solutions, and institutional collaboration for future-ready urban environments."
          },
          {
            title: "Technology & Digital Ecosystems",
            tag: "Digital Economy",
            desc: "Digital platforms, consumer technology, payment systems, fintech integration, and technology provider collaborations."
          },
          {
            title: "Tourism, Travel & Hospitality",
            tag: "Bilateral Tourism",
            desc: "Destination promotion, travel industry alliances, MICE development, and connecting Indonesian destinations with Chinese traveler demand."
          },
          {
            title: "Creative Economy & Lifestyle",
            tag: "Culture & Lifestyle",
            desc: "Fashion, crafts, culinary concepts, film, music, gaming, and lifestyle brand collaborations bridging culture and commerce."
          },
          {
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
          { num: "100+", label: "Kemitraan Difasilitasi", desc: "Antara China & Indonesia" },
          { num: "5", label: "Sektor Prioritas", desc: "Cakupan industri strategis" },
          { num: "2", label: "Pasar Dinamis", desc: "Satu gerbang strategis terpadu" }
        ]
      },
      overview: {
        eyebrow: "PERNYATAAN PENASIHAT STRATEGIS",
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
            title: "Pengembangan Bisnis Digital & Ekosistem",
            desc: "Memfasilitasi kerja sama seputar platform digital, teknologi konsumen, promosi pariwisata, dan ekosistem bisnis yang saling terintegrasi.",
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
            title: "Infrastruktur & Pengembangan Perkotaan",
            tag: "Infrastruktur Modern",
            desc: "Transportasi perkotaan, sistem mobilitas cerdas, dan kolaborasi kelembagaan untuk pembangunan kota masa depan."
          },
          {
            title: "Teknologi & Ekosistem Digital",
            tag: "Ekonomi Digital",
            desc: "Platform digital, teknologi konsumen, ekosistem pembayaran, fintech, dan kemitraan penyedia teknologi canggih."
          },
          {
            title: "Pariwisata, Perjalanan & Perhotelan",
            tag: "Pariwisata Bilateral",
            desc: "Promosi destinasi, kemitraan hospitality, MICE, dan pembukaan akses pasar wisatawan China ke Indonesia."
          },
          {
            title: "Ekonomi Kreatif & Gaya Hidup",
            tag: "Budaya & Kreatif",
            desc: "Fesyen, kriya tekstil, kuliner, film, musik, game, dan kolaborasi merek gaya hidup yang memadukan budaya dan bisnis."
          },
          {
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

      {/* Embedded CSS for Option 2 Creative Homepage with White Backgrounds */}
      <style dangerouslySetInnerHTML={{ __html: `
        :root {
          --h2-red: #E62429;
          --h2-red-dark: #cc1f24;
          --h2-red-light: #ff454a;
          --h2-red-glow: rgba(230, 36, 41, 0.28);
          --h2-white: #FFFFFF;
          --h2-offwhite: #F8F9FB;
          --h2-dark: #090A0F;
          --h2-card-dark: #12141C;
        }

        .h2-red-text {
          color: var(--h2-red) !important;
        }

        /* ------------------------------------------------------------- */
        /* 1. HERO BANNER (Dark Split Layout with Right Image & Raised Stats) */
        /* ------------------------------------------------------------- */
        .h2-hero {
          position: relative;
          background: #090A0F;
          color: #ffffff;
          padding-top: clamp(100px, 12vw, 150px);
          padding-bottom: clamp(60px, 8vw, 90px);
          overflow: hidden;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .h2-hero__glow {
          position: absolute;
          top: -20%;
          right: -10%;
          width: 750px;
          height: 750px;
          background: radial-gradient(circle, rgba(230, 36, 41, 0.22) 0%, rgba(230, 36, 41, 0.04) 55%, transparent 70%);
          filter: blur(80px);
          pointer-events: none;
        }

        .h2-hero__grid {
          display: grid;
          grid-template-columns: 1.15fr 0.95fr;
          gap: clamp(32px, 5vw, 64px);
          align-items: center;
          position: relative;
          z-index: 2;
        }

        @media (max-width: 992px) {
          .h2-hero__grid {
            grid-template-columns: 1fr;
          }
        }

        .h2-pill-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          border-radius: 999px;
          background: rgba(230, 36, 41, 0.12);
          border: 1px solid rgba(230, 36, 41, 0.35);
          color: #FF5A5F;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 22px;
        }

        .h2-dot-pulse {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--h2-red);
          box-shadow: 0 0 10px var(--h2-red);
          animation: h2Pulse 2s infinite;
        }

        @keyframes h2Pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.85); }
        }

        .h2-hero__title {
          font-size: clamp(36px, 4.8vw, 66px);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -0.03em;
          margin-bottom: 20px;
          color: #ffffff;
        }

        .h2-hero__desc {
          font-size: clamp(15px, 1.2vw, 17px);
          line-height: 1.65;
          color: rgba(255, 255, 255, 0.72);
          max-width: 56ch;
          margin-bottom: 32px;
        }

        .h2-hero__actions {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 40px;
        }

        .h2-btn-red {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          border-radius: 999px;
          background: var(--h2-red);
          color: #ffffff !important;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.02em;
          text-decoration: none;
          box-shadow: 0 4px 24px rgba(230, 36, 41, 0.4);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          border: 1px solid var(--h2-red);
          cursor: pointer;
        }

        .h2-btn-red:hover {
          background: var(--h2-red-light);
          border-color: var(--h2-red-light);
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(230, 36, 41, 0.6);
        }

        .h2-btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 26px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.04);
          color: #ffffff !important;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.02em;
          text-decoration: none;
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
        }

        .h2-btn-outline:hover {
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(255, 255, 255, 0.4);
          transform: translateY(-2px);
        }

        /* Hero Raised Stats */
        .h2-hero__stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        @media (max-width: 768px) {
          .h2-hero__stats {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .h2-hero-stat-box {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 14px 14px;
          transition: border-color 0.2s ease;
        }

        .h2-hero-stat-box:hover {
          border-color: rgba(230, 36, 41, 0.4);
        }

        .h2-hero-stat-num {
          font-size: 20px;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.1;
          margin-bottom: 4px;
        }

        .h2-hero-stat-lbl {
          font-size: 11.5px;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.35;
        }

        /* Hero Right Visual */
        .h2-hero-visual-frame {
          position: relative;
          background: radial-gradient(circle at center, #161822 0%, #0c0d13 100%);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 24px;
          padding: 16px;
          overflow: hidden;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.7), 0 0 60px rgba(230, 36, 41, 0.15);
        }

        .h2-hero-img {
          width: 100%;
          height: 420px;
          object-fit: cover;
          border-radius: 16px;
          filter: brightness(0.9) contrast(1.1);
          display: block;
        }

        .h2-hero-overlay-tag {
          position: absolute;
          bottom: 28px;
          left: 28px;
          right: 28px;
          background: rgba(9, 10, 15, 0.85);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 16px;
          padding: 18px 22px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
        }

        /* ------------------------------------------------------------- */
        /* WHITE / LIGHT SECTION STYLING                                */
        /* ------------------------------------------------------------- */
        .h2-white-section {
          background: #FFFFFF;
          color: #111827;
          padding: clamp(64px, 8vw, 100px) 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
        }

        .h2-offwhite-section {
          background: #F8F9FB;
          color: #111827;
          padding: clamp(64px, 8vw, 100px) 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
        }

        .h2-dark-section {
          background: #090A0F;
          color: #ffffff;
          padding: clamp(64px, 8vw, 100px) 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .h2-sec-eyebrow {
          display: inline-block;
          font-size: 11.5px;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--h2-red);
          margin-bottom: 12px;
        }

        .h2-sec-title-light {
          font-size: clamp(30px, 4vw, 52px);
          font-weight: 800;
          line-height: 1.12;
          letter-spacing: -0.03em;
          color: #111827;
          margin-bottom: 16px;
        }

        .h2-sec-title-dark {
          font-size: clamp(30px, 4vw, 52px);
          font-weight: 800;
          line-height: 1.12;
          letter-spacing: -0.03em;
          color: #ffffff;
          margin-bottom: 16px;
        }

        .h2-sec-desc-light {
          font-size: 16px;
          line-height: 1.65;
          color: #4B5563;
          max-width: 64ch;
        }

        .h2-sec-desc-dark {
          font-size: 16px;
          line-height: 1.65;
          color: rgba(255, 255, 255, 0.7);
          max-width: 64ch;
        }

        /* ------------------------------------------------------------- */
        /* CARDS & GRIDS                                                 */
        /* ------------------------------------------------------------- */
        .h2-light-card {
          background: #FFFFFF;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 18px;
          padding: 30px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .h2-light-card:hover {
          transform: translateY(-4px);
          border-color: rgba(230, 36, 41, 0.3);
          box-shadow: 0 16px 36px rgba(230, 36, 41, 0.08);
        }

        .h2-dark-card {
          background: #111319;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 18px;
          padding: 30px;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .h2-dark-card:hover {
          transform: translateY(-4px);
          border-color: rgba(230, 36, 41, 0.4);
          box-shadow: 0 16px 40px rgba(230, 36, 41, 0.15);
        }

        .h2-bullet-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .h2-bullet-list li {
          position: relative;
          padding-left: 20px;
          margin-bottom: 8px;
          font-size: 13.5px;
          line-height: 1.5;
        }

        .h2-bullet-list li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--h2-red);
          font-weight: 800;
          font-size: 18px;
          line-height: 1;
        }
      `}} />

      {/* ============================================================= */}
      {/* 1. HERO SECTION: SPLIT LAYOUT (DARK WITH RAISED STATS)        */}
      {/* ============================================================= */}
      <section className="h2-hero">
        <div className="h2-hero__glow"></div>
        <div className="container">
          <div className="h2-hero__grid">
            
            {/* Left: Headline & Raised Overview */}
            <div>
              <div className="h2-pill-tag">
                <span className="h2-dot-pulse"></span>
                <span>{c.hero.eyebrow}</span>
              </div>

              <h1 className="h2-hero__title">
                {c.hero.title_start}
                <span className="h2-red-text">{c.hero.title_accent}</span>
                {c.hero.title_end}
              </h1>

              <div style={{ fontSize: '18px', fontWeight: 700, color: '#FF5A5F', marginBottom: '14px', letterSpacing: '-0.01em' }}>
                {c.hero.subtitle}
              </div>

              <p className="h2-hero__desc">
                {c.hero.desc}
              </p>

              <div className="h2-hero__actions">
                <a href="#services" className="h2-btn-red">
                  <span>{c.hero.cta_primary}</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </a>
                <a href="#contact" className="h2-btn-outline">
                  <span>{isId ? 'Diskusikan Bisnis Anda' : 'Discuss Your Business'}</span>
                </a>
              </div>

              {/* Raised Stats from below Hero in UI 1 */}
              <div className="h2-hero__stats">
                {c.hero.stats.map((st, sIdx) => (
                  <div key={sIdx} className="h2-hero-stat-box">
                    <div className="h2-hero-stat-num">{st.num}</div>
                    <div className="h2-hero-stat-lbl">{st.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Visual Imagery */}
            <div>
              <div className="h2-hero-visual-frame">
                <img 
                  src="/images/china_city_network.webp" 
                  alt="Indonesia China Strategic Bilateral Gateway" 
                  className="h2-hero-img"
                  loading="lazy"
                  decoding="async"
                />
                <div className="h2-hero-overlay-tag">
                  <div>
                    <div style={{ fontSize: '11px', fontWeight: 800, color: 'var(--h2-red)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                      {c.hero.tag_corridor}
                    </div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#ffffff', marginTop: '2px' }}>
                      {c.overview.tagline}
                    </div>
                  </div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.7)', background: 'rgba(255,255,255,0.08)', padding: '6px 12px', borderRadius: '999px' }}>
                    <span className="h2-dot-pulse"></span>
                    <span>{c.hero.tag_status}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* 2. STRATEGIC ADVISORY STATEMENT (WHITE BACKGROUND)            */}
      {/* ============================================================= */}
      <section className="h2-white-section" id="overview">
        <div className="container">
          <div style={{ maxWidth: '940px', margin: '0 auto 48px auto', textAlign: 'center' }}>
            <span className="h2-sec-eyebrow">{c.overview.eyebrow}</span>
            <h2 className="h2-sec-title-light" style={{ margin: '0 auto', textAlign: 'center', lineHeight: 1.18 }}>
              {c.overview.lead}
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px', marginBottom: '48px' }}>
            <div className="h2-light-card">
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(230,36,41,0.08)', color: 'var(--h2-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '13px', marginBottom: '16px' }}>
                01
              </div>
              <p style={{ fontSize: '14.5px', lineHeight: 1.65, color: '#4B5563', margin: 0 }}>
                {c.overview.p1}
              </p>
            </div>

            <div className="h2-light-card">
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(230,36,41,0.08)', color: 'var(--h2-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '13px', marginBottom: '16px' }}>
                02
              </div>
              <p style={{ fontSize: '14.5px', lineHeight: 1.65, color: '#4B5563', margin: 0 }}>
                {c.overview.p2}
              </p>
            </div>

            <div className="h2-light-card">
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(230,36,41,0.08)', color: 'var(--h2-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '13px', marginBottom: '16px' }}>
                03
              </div>
              <p style={{ fontSize: '14.5px', lineHeight: 1.65, color: '#4B5563', margin: 0 }}>
                {c.overview.p3}
              </p>
            </div>
          </div>

          {/* Action Callout */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', padding: '28px 36px', background: '#F8F9FB', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '18px' }}>
            <div>
              <div style={{ fontSize: '18px', fontWeight: 800, color: '#111827', marginBottom: '4px' }}>
                {c.overview.tagline}
              </div>
              <div style={{ fontSize: '14px', color: '#6B7280' }}>
                {c.overview.subtext}
              </div>
            </div>
            <Link href="/about" className="h2-btn-red" style={{ padding: '12px 24px' }}>
              <span>{c.overview.btn_profile}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* 3. WHO WE ARE · POSITIONING & 4 PILLARS (OFF-WHITE #F8F9FB)  */}
      {/* ============================================================= */}
      <section className="h2-offwhite-section" id="who-we-are">
        <div className="container">
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))', 
              gap: '48px 64px', 
              alignItems: 'center' 
            }}
          >
            {/* Left Column: Heading & Narrative */}
            <div>
              <span className="h2-sec-eyebrow">{c.who.eyebrow}</span>
              <h2 className="h2-sec-title-light" style={{ marginBottom: '24px', lineHeight: 1.15 }}>
                {Array.isArray(c.who.title) ? c.who.title.map((line, i) => (
                  <span key={i} style={{ display: 'block' }}>{line}</span>
                )) : c.who.title}
              </h2>
              <p className="h2-sec-desc-light" style={{ marginBottom: '16px', fontWeight: 600, color: '#1F2937', fontSize: '15.5px', lineHeight: 1.65 }}>
                {c.who.lead}
              </p>
              <p className="h2-sec-desc-light" style={{ margin: 0, fontSize: '15px', lineHeight: 1.7 }}>
                {c.who.desc}
              </p>
            </div>

            {/* Right Column: 4 Pillar Cards in 2x2 Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
              {c.who.pillars.map((pil, pIdx) => {
                const icons = [
                  <PillarInsightIcon key={0} size={28} color="#E62429" />,
                  <PillarCultureIcon key={1} size={28} color="#E62429" />,
                  <PillarNetworkIcon key={2} size={28} color="#E62429" />,
                  <PillarStrategyIcon key={3} size={28} color="#E62429" />
                ];
                return (
                  <div 
                    key={pIdx} 
                    className="h2-light-card" 
                    style={{ 
                      padding: '26px 22px', 
                      display: 'flex', 
                      flexDirection: 'column', 
                      justifyContent: 'space-between' 
                    }}
                  >
                    <div>
                      <div style={{ marginBottom: '18px' }}>
                        {icons[pIdx]}
                      </div>
                      <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#111827', marginBottom: '10px', lineHeight: 1.3 }}>
                        {pil.title}
                      </h3>
                      <p style={{ fontSize: '13px', lineHeight: 1.55, color: '#6B7280', margin: 0 }}>
                        {pil.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* 4. 6 SERVICE PILLARS (DARK SECTION WITH ACCENTS)              */}
      {/* ============================================================= */}
      <section className="h2-dark-section" id="services">
        <div className="container">
          <div style={{ maxWidth: '1040px', marginBottom: '48px' }}>
            <span className="h2-sec-eyebrow">{c.services.eyebrow}</span>
            <h2 className="h2-sec-title-dark">
              {Array.isArray(c.services.title) ? c.services.title.map((line, i) => (
                <span key={i} style={{ display: 'block' }}>{line}</span>
              )) : c.services.title}
            </h2>
            <p className="h2-sec-desc-dark">
              {c.services.subtitle}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {c.services.items.map((svc, sIdx) => {
              const icons = [
                <ServiceAdvisoryIcon key={0} size={24} color="#E62429" />,
                <ServiceGovIcon key={1} size={24} color="#E62429" />,
                <ServiceMatchingIcon key={2} size={24} color="#E62429" />,
                <ServiceCommsIcon key={3} size={24} color="#E62429" />,
                <ServiceDigitalIcon key={4} size={24} color="#E62429" />,
                <ServiceInvestmentIcon key={5} size={24} color="#E62429" />
              ];
              return (
                <div key={sIdx} id={svc.id} className="h2-dark-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                      <div style={{ padding: '8px', borderRadius: '10px', background: 'rgba(230,36,41,0.1)' }}>
                        {icons[sIdx]}
                      </div>
                      <span style={{ fontSize: '12px', fontWeight: 800, color: 'var(--h2-red)', letterSpacing: '0.1em' }}>
                        {svc.num}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#ffffff', marginBottom: '10px', lineHeight: 1.3 }}>
                      {svc.title}
                    </h3>
                    <p style={{ fontSize: '13.5px', lineHeight: 1.6, color: 'rgba(255,255,255,0.65)', marginBottom: '18px' }}>
                      {svc.desc}
                    </p>

                    <ul className="h2-bullet-list" style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '24px' }}>
                      {svc.points.map((pt, pIdx) => (
                        <li key={pIdx}>{pt}</li>
                      ))}
                    </ul>
                  </div>

                  <Link href={`/services#${svc.id}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 700, color: '#FF5A5F', textDecoration: 'none' }}>
                    <span>{isId ? 'Rincian Layanan' : 'Service Details'}</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* 5. WHY 8 VICE · 5 KEY STRENGTHS (WHITE BACKGROUND)            */}
      {/* ============================================================= */}
      <section className="h2-white-section" id="why-8vice">
        <div className="container">
          {/* Section Header: Left (Title in 2 lines) & Right (Lead & Intro) */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', 
              gap: '36px 64px', 
              alignItems: 'flex-start', 
              marginBottom: '52px' 
            }}
          >
            {/* Left: Local Understanding. / Cross-Border Perspective. */}
            <div>
              <h2 className="h2-sec-title-light" style={{ margin: 0, lineHeight: 1.15, letterSpacing: '-0.03em' }}>
                <span style={{ display: 'block' }}>
                  {isId ? 'Pemahaman Lokal.' : 'Local Understanding.'}
                </span>
                <span style={{ display: 'block', marginTop: '6px' }}>
                  {isId ? 'Perspektif Lintas Batas.' : 'Cross-Border Perspective.'}
                </span>
              </h2>
            </div>

            {/* Right: Lead & Intro */}
            <div style={{ maxWidth: '640px' }}>
              <p 
                className="h2-sec-desc-light" 
                style={{ 
                  margin: '0 0 14px 0', 
                  fontSize: '15.5px', 
                  lineHeight: 1.7 
                }}
              >
                {c.why.lead}
              </p>
              <div style={{ fontSize: '15.5px', fontWeight: 700, color: '#111827' }}>
                {c.why.intro}
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: '48px', alignItems: 'center' }}>
            {/* Left: Photo Frame & Quote */}
            <div>
              <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.1)', boxShadow: '0 20px 50px rgba(0,0,0,0.08)', marginBottom: '24px' }}>
                <img 
                  src="/images/consultation_advisory_bw.webp" 
                  alt="8 Vice Bilateral Bridge" 
                  loading="lazy"
                  decoding="async"
                  style={{ width: '100%', height: '340px', objectFit: 'cover', display: 'block' }} 
                />
              </div>

              <div style={{ padding: '22px 26px', background: '#F8F9FB', borderLeft: '4px solid var(--h2-red)', borderRadius: '0 14px 14px 0' }}>
                <p style={{ fontSize: '14.5px', fontStyle: 'italic', lineHeight: 1.6, color: '#374151', margin: 0 }}>
                  "{c.why.quote}"
                </p>
              </div>
            </div>

            {/* Right: 5 Strengths List */}
            <div>
              {c.why.points.map((pt, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '18px', padding: '16px 0', borderBottom: idx === c.why.points.length - 1 ? 'none' : '1px solid rgba(0,0,0,0.08)' }}>
                  <div style={{ minWidth: '34px', height: '34px', borderRadius: '8px', background: 'rgba(230,36,41,0.08)', color: 'var(--h2-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '13px' }}>
                    {pt.num}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '16.5px', fontWeight: 800, color: '#111827', marginBottom: '4px', lineHeight: 1.3 }}>
                      {pt.title}
                    </h3>
                    <p style={{ fontSize: '13.5px', lineHeight: 1.55, color: '#6B7280', margin: 0 }}>
                      {pt.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* 6. VIDEO MANIFESTO BANNER (DARK THEATER FULL-WIDTH)            */}
      {/* ============================================================= */}
      <VideoManifesto isId={isId} fullSection={true} />

      {/* ============================================================= */}
      {/* 7. TWO MARKETS · ONE STRATEGIC GATEWAY (OFF-WHITE #F8F9FB)   */}
      {/* ============================================================= */}
      <section className="h2-offwhite-section" id="gateway">
        <div className="container">
          {/* Section Header: Left (Two Markets / One Strategic Gateway) & Right (Platform Subtitle & Description) */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', 
              gap: '36px 64px', 
              alignItems: 'flex-start', 
              marginBottom: '52px' 
            }}
          >
            {/* Left: Two Markets. / One Strategic Gateway. */}
            <div>
              <h2 className="h2-sec-title-light" style={{ margin: 0, lineHeight: 1.15, letterSpacing: '-0.03em' }}>
                <span style={{ display: 'block' }}>
                  {isId ? 'Dua Pasar.' : 'Two Markets.'}
                </span>
                <span style={{ display: 'block', marginTop: '6px' }}>
                  {isId ? 'Satu Gerbang Strategis.' : 'One Strategic Gateway.'}
                </span>
              </h2>
            </div>

            {/* Right: Red Subtitle & Description */}
            <div style={{ maxWidth: '640px' }}>
              <div 
                style={{ 
                  fontSize: '18px', 
                  fontWeight: 700, 
                  color: 'var(--h2-red)', 
                  marginBottom: '14px', 
                  lineHeight: 1.45 
                }}
              >
                {c.gateway.subtitle}
              </div>
              <p 
                className="h2-sec-desc-light" 
                style={{ 
                  margin: 0, 
                  fontSize: '15.5px', 
                  lineHeight: 1.7 
                }}
              >
                {c.gateway.desc}
              </p>
            </div>
          </div>

          {/* Dual Deck */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '28px', marginBottom: '56px' }}>
            
            {/* Deck 1: China to Indonesia */}
            <div className="h2-light-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderTop: '4px solid var(--h2-red)' }}>
              <div>
                <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#111827', marginBottom: '8px' }}>
                  {c.gateway.c2i_title}
                </h3>
                <p style={{ fontSize: '14px', color: '#6B7280', marginBottom: '20px', lineHeight: 1.5 }}>
                  {c.gateway.c2i_sub}
                </p>
                <ul className="h2-bullet-list" style={{ color: '#374151', marginBottom: '28px' }}>
                  {c.gateway.c2i_points.map((pt, pIdx) => (
                    <li key={pIdx}>{pt}</li>
                  ))}
                </ul>
              </div>
              <button 
                type="button" 
                onClick={() => handleSelectGatewayCorridor('China to Indonesia')}
                className="h2-btn-red"
                style={{ width: 'fit-content' }}
              >
                <span>{c.gateway.c2i_btn}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
            </div>

            {/* Deck 2: Indonesia to China */}
            <div className="h2-light-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderTop: '4px solid #111827' }}>
              <div>
                <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#111827', marginBottom: '8px' }}>
                  {c.gateway.i2c_title}
                </h3>
                <p style={{ fontSize: '14px', color: '#6B7280', marginBottom: '20px', lineHeight: 1.5 }}>
                  {c.gateway.i2c_sub}
                </p>
                <ul className="h2-bullet-list" style={{ color: '#374151', marginBottom: '28px' }}>
                  {c.gateway.i2c_points.map((pt, pIdx) => (
                    <li key={pIdx}>{pt}</li>
                  ))}
                </ul>
              </div>
              <button 
                type="button" 
                onClick={() => handleSelectGatewayCorridor('Indonesia to China')}
                className="h2-btn-red"
                style={{ width: 'fit-content', background: '#111827', borderColor: '#111827' }}
              >
                <span>{c.gateway.i2c_btn}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
            </div>

          </div>

          {/* Methodology Steps */}
          <div>
            <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#111827', marginBottom: '20px', textAlign: 'center' }}>
              {c.gateway.methodology_title}
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px' }}>
              {c.gateway.steps.map((st, idx) => (
                <div key={idx} className="h2-light-card" style={{ padding: '20px' }}>
                  <div style={{ fontSize: '12px', fontWeight: 800, color: 'var(--h2-red)', marginBottom: '8px' }}>
                    STEP {st.num}
                  </div>
                  <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#111827', marginBottom: '6px' }}>
                    {st.name}
                  </h4>
                  <p style={{ fontSize: '12px', color: '#6B7280', lineHeight: 1.45, margin: 0 }}>
                    {st.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================= */}
      {/* 8. INDUSTRIES & OPPORTUNITIES (DARK SECTION)                  */}
      {/* ============================================================= */}
      <section className="h2-dark-section" id="industries">
        <div className="container">
          <div style={{ maxWidth: '1040px', marginBottom: '48px' }}>
            <span className="h2-sec-eyebrow">{c.industries.eyebrow}</span>
            <h2 className="h2-sec-title-dark">
              {c.industries.title}
            </h2>
            <p className="h2-sec-desc-dark">
              {c.industries.subtitle}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '18px' }}>
            {c.industries.items.map((ind, idx) => {
              const icons = [
                <IndustryInfraIcon key={0} size={26} color="#E62429" />,
                <IndustryTechIcon key={1} size={26} color="#E62429" />,
                <IndustryTourismIcon key={2} size={26} color="#E62429" />,
                <IndustryCreativeIcon key={3} size={26} color="#E62429" />,
                <IndustryTradeIcon key={4} size={26} color="#E62429" />
              ];
              return (
                <div 
                  key={idx} 
                  className="h2-dark-card" 
                  style={{ cursor: 'pointer' }}
                  onClick={() => setSelectedIndustry(ind.title)}
                >
                  <div style={{ marginBottom: '16px' }}>
                    {icons[idx]}
                  </div>
                  <div style={{ fontSize: '10.5px', fontWeight: 800, color: 'var(--h2-red)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px' }}>
                    {ind.tag}
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff', marginBottom: '8px', lineHeight: 1.3 }}>
                    {ind.title}
                  </h3>
                  <p style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.45, margin: 0 }}>
                    {ind.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* 9. CREDIBILITY & TRACK RECORD (WHITE BACKGROUND)              */}
      {/* ============================================================= */}
      <section className="h2-white-section" id="credibility">
        <div className="container">
          <div style={{ maxWidth: '840px', marginBottom: '44px' }}>
            <span className="h2-sec-eyebrow">{c.credibility.eyebrow}</span>
            <h2 className="h2-sec-title-light">
              {c.credibility.title}
            </h2>
            <p className="h2-sec-desc-light" style={{ marginBottom: '10px' }}>
              {c.credibility.desc}
            </p>
            <p className="h2-sec-desc-light">
              {c.credibility.subdesc}
            </p>
          </div>

          {/* Client Logos Grid */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', 
              gap: '16px', 
              marginBottom: '32px' 
            }}
          >
            {(clients && clients.length > 0 ? clients : [
              { name: 'Alipay+', image: '/images/logos-client/alipay-plus.webp' },
              { name: 'DiDi', image: '/images/logos-client/didi.webp' },
              { name: 'DingTalk', image: '/images/logos-client/dingtalk.webp' },
              { name: 'Coolita', image: '/images/logos-client/coolita.webp' },
              { name: 'Skyworth', image: '/images/logos-client/skyworth.webp' },
              { name: 'MangoTV', image: '/images/logos-client/mangotv.webp' },
              { name: 'Grand Melia', image: '/images/logos-client/grandmelia.webp' },
              { name: 'Zhongnan Animation', image: '/images/logos-client/zhongnan-animation.webp' }
            ]).map((cl, cIdx) => {
              const imgSrc = cl.image || cl.logo;
              return (
                <div 
                  key={cIdx} 
                  title={cl.name}
                  style={{ 
                    background: '#FFFFFF', 
                    border: '1px solid rgba(0, 0, 0, 0.08)', 
                    borderRadius: '12px', 
                    padding: '16px 20px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    minHeight: '74px',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(214, 40, 40, 0.35)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.06)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.08)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.02)';
                  }}
                >
                  {imgSrc ? (
                    <img 
                      src={imgSrc.startsWith('/') ? imgSrc : `/${imgSrc}`} 
                      alt={cl.name || 'Client Logo'} 
                      loading="lazy"
                      decoding="async" 
                      style={{
                        maxHeight: '34px',
                        maxWidth: '120px',
                        width: 'auto',
                        height: 'auto',
                        objectFit: 'contain',
                        display: 'block'
                      }}
                    />
                  ) : (
                    <span style={{ fontSize: '13px', fontWeight: 700, color: '#4B5563' }}>{cl.name}</span>
                  )}
                </div>
              );
            })}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', color: '#9CA3AF', fontStyle: 'italic' }}>
            <ShieldNdaIcon size={16} color="#9CA3AF" />
            <span>{c.credibility.notice}</span>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* 10. FAQ ACCORDION (FULL-WIDTH DARK BACKGROUND)               */}
      {/* ============================================================= */}
      <HomeFaq isId={isId} />

      {/* ============================================================= */}
      {/* 11. INSIGHTS & ARTICLES (FULL-WIDTH DARK BACKGROUND)          */}
      {/* ============================================================= */}
      <HomeArticles isId={isId} insights={insights} />

      {/* ============================================================= */}
      {/* 12. "DISCUSS YOUR BUSINESS" CONSULTATION FORM (DARK STUDIO)   */}
      {/* ============================================================= */}
      <section className="h2-dark-section" id="contact">
        <div className="container" style={{ maxWidth: '960px' }}>
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <span className="h2-sec-eyebrow">{c.inquiry.eyebrow}</span>
            <h2 className="h2-sec-title-dark">
              {c.inquiry.title}
            </h2>
            <p className="h2-sec-desc-dark" style={{ margin: '0 auto' }}>
              {c.inquiry.subtitle}
            </p>
          </div>

          <div style={{ background: '#12141C', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '24px', padding: 'clamp(28px, 4vw, 44px)', boxShadow: '0 24px 60px rgba(0,0,0,0.6)' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(230,36,41,0.15)', color: 'var(--h2-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto', fontSize: '28px' }}>
                  ✓
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>
                  {isId ? 'Permintaan Konsultasi Diterima' : 'Inquiry Successfully Received'}
                </h3>
                <p style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.7)', maxWidth: '44ch', margin: '0 auto' }}>
                  {c.inquiry.success_msg}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitInquiry}>
                {/* Direction Picker */}
                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '10px' }}>
                    {c.inquiry.dir_lbl}
                  </label>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    {c.inquiry.dir_opts.map((dir, dIdx) => (
                      <button
                        key={dIdx}
                        type="button"
                        onClick={() => setBusinessDirection(dir)}
                        style={{
                          padding: '10px 18px',
                          borderRadius: '999px',
                          fontSize: '13px',
                          fontWeight: 700,
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          background: businessDirection === dir ? 'var(--h2-red)' : 'rgba(255,255,255,0.05)',
                          color: businessDirection === dir ? '#ffffff' : 'rgba(255,255,255,0.7)',
                          border: businessDirection === dir ? '1px solid var(--h2-red)' : '1px solid rgba(255,255,255,0.12)'
                        }}
                      >
                        {dir}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Service and Industry Selection */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '8px' }}>
                      {c.inquiry.svc_lbl}
                    </label>
                    <select
                      value={selectedService}
                      onChange={e => setSelectedService(e.target.value)}
                      style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', fontSize: '14px' }}
                    >
                      {c.services.items.map((svc, sIdx) => (
                        <option key={sIdx} value={svc.title} style={{ background: '#111319' }}>{svc.title}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '8px' }}>
                      {c.inquiry.ind_lbl}
                    </label>
                    <select
                      value={selectedIndustry}
                      onChange={e => setSelectedIndustry(e.target.value)}
                      style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', fontSize: '14px' }}
                    >
                      {c.industries.items.map((ind, iIdx) => (
                        <option key={iIdx} value={ind.title} style={{ background: '#111319' }}>{ind.title}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Company & Email */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '8px' }}>
                      {c.inquiry.company_lbl}
                    </label>
                    <input
                      type="text"
                      value={companyName}
                      onChange={e => setCompanyName(e.target.value)}
                      placeholder={isId ? 'PT / Korporasi...' : 'e.g. Acme Corp'}
                      style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', fontSize: '14px' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '8px' }}>
                      {c.inquiry.email_lbl}
                    </label>
                    <input
                      type="email"
                      value={emailInput}
                      onChange={e => setEmailInput(e.target.value)}
                      placeholder="executive@company.com"
                      required
                      style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', fontSize: '14px' }}
                    />
                  </div>
                </div>

                {/* Notes */}
                <div style={{ marginBottom: '28px' }}>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '8px' }}>
                    {c.inquiry.notes_lbl}
                  </label>
                  <textarea
                    rows={3}
                    value={inquiryNotes}
                    onChange={e => setInquiryNotes(e.target.value)}
                    placeholder={c.inquiry.notes_ph}
                    style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', fontSize: '14px', resize: 'vertical' }}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="h2-btn-red"
                  style={{ width: '100%', justifyContent: 'center', padding: '16px' }}
                >
                  <span>{isSubmitting ? (isId ? 'Mengirimkan...' : 'Submitting...') : c.inquiry.submit_btn}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </button>
              </form>
            )}

            {/* Direct Contact Links */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginTop: '36px', paddingTop: '28px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <div>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>
                  {c.inquiry.office_title}
                </div>
                <div style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.4 }}>
                  {siteSettings?.address || c.inquiry.office_addr}
                </div>
              </div>

              <div>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>
                  {c.inquiry.email_title}
                </div>
                <a href={`mailto:${siteSettings?.email || 'hello@8vice.com'}`} style={{ fontSize: '13px', color: 'var(--h2-red)', textDecoration: 'none', fontWeight: 600 }}>
                  {siteSettings?.email || 'hello@8vice.com'}
                </a>
              </div>

              <div>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>
                  {c.inquiry.whatsapp_title}
                </div>
                <a href={siteSettings?.whatsapp_url || 'https://wa.me/628118005110'} target="_blank" rel="noopener noreferrer" style={{ fontSize: '13px', color: '#ffffff', textDecoration: 'none', fontWeight: 600 }}>
                  +62 811-8005-110
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

    </MainLayout>
  );
}
