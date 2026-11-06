// Single source for the 6 service detail pages (/services/{slug}), the overview grid and search quick links.
// `photo` is the brief for the placeholder slot until real photography is sourced.
export const SERVICE_SLUGS = ['advisory', 'gov-relations', 'business-matching', 'comms', 'media-relations', 'investment'];

export const services = {
  en: [
    {
      id: 'advisory',
      num: '01',
      title: 'Strategic Advisory & Market Entry',
      summary: 'Helping businesses evaluate cross-border opportunities, understand commercial dynamics, and formulate executable market entry roadmaps.',
      headline: 'Enter New Markets with Greater Clarity.',
      photo: 'Strategic Advisory Hub / Financial District',
      heroImage: '/images/china_tech_hub.webp',
      detailImage: '/images/advisory_skyline_architecture.webp',
      paragraphs: [
        'Expanding into a new market requires a clear understanding of its commercial environment, customer needs, competitive landscape, and operating conditions.',
        '8 Vice helps businesses evaluate cross-border opportunities and develop market entry strategies aligned with their objectives and resources.',
        'Our work may include market opportunity assessment, business landscape analysis, go-to-market planning, partner requirements, brand localization considerations, and the development of an actionable expansion roadmap.',
        'Whether you are exploring Indonesia for the first time or seeking to expand your presence in China, we help you structure the right questions, assess relevant opportunities, and determine practical next steps.'
      ],
      deliverables: [
        {
          icon: 'assessment',
          title: 'Preliminary Market Opportunity Assessment',
          desc: 'Evaluating market sizing, regulatory feasibility, competitor landscape, and consumer demand dynamics across target Indonesian and Chinese sectors.'
        },
        {
          icon: 'strategy',
          title: 'Market Entry & Expansion Strategy',
          desc: 'Formulating actionable entry pathways, risk-mitigation frameworks, corporate entity structuring (PT PMA / JV), and capital-efficient launch phases.'
        },
        {
          icon: 'model',
          title: 'Business Model & Go-To-Market Planning',
          desc: 'Designing localized value propositions, revenue structures, commercial pricing benchmarks, and scalable sales distribution channels.'
        },
        {
          icon: 'positioning',
          title: 'Market Positioning & Brand Localization',
          desc: 'Adapting brand narratives, marketing positioning, and corporate communications to ensure authentic resonance with local audiences.'
        },
        {
          icon: 'partner',
          title: 'Partner & Distribution Strategy',
          desc: 'Defining selection criteria, due diligence parameters, and commercial engagement frameworks for national distributors and strategic partners.'
        },
        {
          icon: 'roadmap',
          title: 'Strategic Expansion Roadmap',
          desc: 'Delivering a phased, multi-stage implementation blueprint with clear regulatory milestones, resource allocations, and operational KPIs.'
        }
      ],
      footnote: "The scope of research and assessment is tailored to the client's objectives and available information."
    },
    {
      id: 'gov-relations',
      num: '02',
      title: 'Government Relations & Stakeholder Engagement',
      summary: 'Supporting stakeholder mapping, institutional engagement, and public-private dialogue through appropriate and transparent channels.',
      headline: 'Navigate Stakeholder Landscapes with Confidence.',
      photo: 'State Ministry Palace / Bilateral Diplomatic Council',
      heroImage: '/images/china_city_network.webp',
      detailImage: '/images/gov_relations_institution.webp',
      paragraphs: [
        'In cross-border business, understanding the institutional environment and engaging the relevant stakeholders can be essential to developing a project or partnership.',
        '8 Vice supports organizations in understanding stakeholder landscapes, identifying relevant institutional engagement opportunities, and coordinating professional dialogue with appropriate parties.',
        'Our approach emphasizes preparation, clear objectives, transparent communication, and respect for applicable laws and institutional protocols.',
        'From introductory meetings and stakeholder mapping to structured dialogue and public-private collaboration initiatives, we help clients approach engagement with greater focus and professionalism.'
      ],
      deliverables: [
        {
          icon: 'mapping',
          title: 'Stakeholder Mapping & Engagement Planning',
          desc: 'Identifying key ministries, regional authorities, trade bodies, and industry stakeholders relevant to your business expansion.'
        },
        {
          icon: 'liaison',
          title: 'Institutional & Industry Association Liaison',
          desc: 'Establishing formal communication bridges with bilateral chambers, government bodies, and key sector associations.'
        },
        {
          icon: 'meeting',
          title: 'High-Level Meeting Preparation & Coordination',
          desc: 'Structuring executive meeting agendas, briefing notes, protocol adherence, and bilingual translation support.'
        },
        {
          icon: 'public_private',
          title: 'Public-Private Collaboration Development',
          desc: 'Facilitating strategic dialogue between enterprise leadership and state-owned or regulatory entities on national priority projects.'
        },
        {
          icon: 'dialogue',
          title: 'Strategic Dialogue & Partnership Coordination',
          desc: 'Coordinating formal roundtable discussions, policy review sessions, and institutional partnership agreements.'
        },
        {
          icon: 'comms',
          title: 'Stakeholder Communications & Policy Advocacy Support',
          desc: 'Drafting compliant whitepapers, policy briefing memorandums, and transparent communications aligned with regulatory frameworks.'
        }
      ],
      footnote:
        '8 Vice facilitates engagement and coordination. Government decisions, regulatory approvals, and institutional commitments remain the responsibility of the relevant authorities.'
    },
    {
      id: 'business-matching',
      num: '03',
      title: 'Business Matching & Strategic Partnerships',
      summary: 'Connecting businesses with relevant potential partners, distributors, investors, and industry stakeholders based on defined commercial goals.',
      headline: 'The Right Connections. The Right Opportunities.',
      photo: 'B2B Trade Forum / Commercial Partnership Hub',
      heroImage: '/images/hero_globe_china_indonesia.webp',
      detailImage: '/images/industry_trade.webp',
      paragraphs: [
        'The success of cross-border business often depends on finding partners whose capabilities, objectives, and expectations are aligned.',
        '8 Vice helps clients identify potential partnership opportunities and facilitate business connections based on defined commercial objectives.',
        'We support the process from understanding partner requirements and identifying relevant prospects to preparing business introductions, coordinating meetings, and supporting follow-up discussions.',
        'Our goal is to make business engagement more focused, relevant, and productive.'
      ],
      deliverables: [
        {
          icon: 'partner_id',
          title: 'Partner & Distributor Identification',
          desc: 'Sourcing and screening vetted local enterprises, tier-1 distribution houses, and strategic commercial operators.'
        },
        {
          icon: 'b2b',
          title: 'Curated B2B Matchmaking Sessions',
          desc: 'Organizing private one-on-one commercial sessions matching your capabilities with qualified local counterpart requirements.'
        },
        {
          icon: 'delegation',
          title: 'Trade Mission & Business Delegation Coordination',
          desc: 'Managing executive trade delegations, industrial site visits, and commercial roadshows across Indonesia and China.'
        },
        {
          icon: 'intro',
          title: 'Corporate Introductions & Executive Meetings',
          desc: 'Facilitating warm executive introductions and structuring productive commercial introductory sessions.'
        },
        {
          icon: 'alliance',
          title: 'Strategic Partnership & Joint Venture Development',
          desc: 'Advising on equity structures, joint venture terms, operational responsibilities, and mutual value creation.'
        },
        {
          icon: 'mou',
          title: 'MOU Coordination & Deal Follow-Through',
          desc: 'Supporting preliminary memorandum of understanding (MOU) drafting, negotiations, and post-meeting commercial execution.'
        }
      ],
      footnote:
        'All introductions are subject to partner availability, mutual interest, due diligence, and agreement between the parties. A business introduction does not guarantee a commercial agreement.'
    },
    {
      id: 'comms',
      num: '04',
      title: 'Strategic Communications & Market Positioning',
      summary: 'Developing corporate positioning, brand narratives, and communications strategies that build market relevance and stakeholder trust.',
      headline: 'Communicate with Purpose. Position for Growth.',
      photo: 'Strategic Narrative Hub / Digital Media Architecture',
      heroImage: '/images/city_orbiting_cards.webp',
      detailImage: '/images/comms_digital_architecture.webp',
      paragraphs: [
        'Entering a new market requires more than a strong product or service. Businesses must also communicate their value in ways that resonate with local audiences, partners, and stakeholders.',
        'Drawing on integrated marketing communications and branding expertise, 8 Vice helps organizations develop clear market positioning and relevant communication strategies for cross-border growth.',
        'We connect business objectives with brand narratives, corporate communications, public relations, and stakeholder engagement to support stronger market understanding and recognition.'
      ],
      deliverables: [
        {
          icon: 'positioning',
          title: 'Corporate & Brand Positioning',
          desc: 'Articulating distinct market positioning that differentiates your enterprise while fitting local market expectations.'
        },
        {
          icon: 'localization',
          title: 'Market Localization & Messaging Architecture',
          desc: 'Adapting brand voice, terminology, and campaign messaging to ensure cultural resonance across Indonesia and China.'
        },
        {
          icon: 'strategy',
          title: 'Strategic Communications Master Planning',
          desc: 'Developing comprehensive multi-channel communications roadmaps supporting expansion launches and market announcements.'
        },
        {
          icon: 'pr',
          title: 'Public Relations & Industry Engagement',
          desc: 'Crafting corporate announcements, executive thought leadership articles, and industry stakeholder engagement campaigns.'
        },
        {
          icon: 'imc',
          title: 'Integrated Marketing Communications (IMC)',
          desc: 'Aligning digital channels, trade marketing, event sponsorships, and executive visibility into a cohesive campaign.'
        },
        {
          icon: 'cross_cultural',
          title: 'Cross-Cultural Business Communications',
          desc: 'Bridging headquarters and local team dynamics through culturally nuanced corporate communications frameworks.'
        }
      ],
      footnote:
        "Our communications strategies are developed according to the client's target audience, market conditions, and commercial priorities."
    },
    {
      id: 'media-relations',
      num: '05',
      title: 'Media Relations & Crisis Communications',
      summary: 'Managing media partnerships, press conferences, executive interviews, and safeguarding cross-border corporate reputation through strategic communications.',
      headline: 'Safeguard Reputation. Build Media Credibility.',
      photo: 'Broadcast Newsroom Studio / Press Briefing Podium',
      heroImage: '/images/media_relations_press_hero.webp',
      detailImage: '/images/media_relations_broadcast.webp',
      paragraphs: [
        'Public trust and media credibility play a pivotal role for enterprises expanding between Indonesia and China. How a company is reported, and how it responds when issues arise, shapes how partners, regulators, and customers see it.',
        '8 Vice supports organizations in building constructive media relationships, preparing executives for press engagement, and coordinating press conferences, interviews, and media briefings across both markets.',
        'We also help clients prepare for the unexpected: identifying reputational risks early, establishing crisis communication protocols, and coordinating clear, timely, and culturally appropriate responses when sensitive issues emerge.'
      ],
      deliverables: [
        {
          icon: 'media_strategy',
          title: 'Bilateral Media Relations Strategy',
          desc: 'Connecting your organization with tier-1 financial, business, and tech publications in Indonesia and Greater China.'
        },
        {
          icon: 'press_conf',
          title: 'Press Conference & Media Briefing Coordination',
          desc: 'End-to-end management of press conferences, launch events, media roundtables, and press release distribution.'
        },
        {
          icon: 'interview',
          title: 'Executive Media Training & Interview Prep',
          desc: 'Preparing C-suite leadership with question-and-answer playbooks, media simulation sessions, and narrative delivery.'
        },
        {
          icon: 'crisis_plan',
          title: 'Crisis Communications Planning & Protocols',
          desc: 'Establishing risk response matrices, escalation hierarchies, and prepared holding statements for sensitive scenarios.'
        },
        {
          icon: 'monitoring',
          title: 'Media Monitoring & Sentiment Tracking',
          desc: 'Real-time tracking of brand perception, industry discussions, and regulatory discourse across national news media.'
        },
        {
          icon: 'reputation',
          title: 'Cross-Cultural Reputation Management',
          desc: 'Safeguarding enterprise credibility through culturally aligned, transparent communication across bilateral borders.'
        }
      ],
      footnote:
        'Media coverage depends on editorial independence. 8 Vice supports preparation and engagement but does not guarantee publication or specific media outcomes.'
    },
    {
      id: 'investment',
      num: '06',
      title: 'Investment & Business Development Facilitation',
      summary: 'Supporting the early stages of business development by helping clients articulate project objectives and structure commercial partnerships.',
      headline: 'Turn Strategic Interest into Structured Opportunities.',
      photo: 'Industrial Infrastructure / Commercial Project Site',
      heroImage: '/images/china_trade_port.webp',
      detailImage: '/images/investment_industry_infrastructure.webp',
      paragraphs: [
        'Developing an investment or commercial project across borders requires a clear value proposition, an understanding of the opportunity, and alignment among the parties involved.',
        '8 Vice supports the early stages of business development by helping clients articulate project objectives, assess potential collaboration pathways, and coordinate discussions with relevant business stakeholders.',
        'We work to structure opportunities in a way that supports informed conversations, practical planning, and further commercial evaluation.'
      ],
      deliverables: [
        {
          icon: 'assessment',
          title: 'Preliminary Investment Opportunity Assessment',
          desc: 'Screening project feasibility, market attractiveness, local incentives, and financial parameters for commercial investment.'
        },
        {
          icon: 'proposal',
          title: 'Commercial Proposal & Teaser Development',
          desc: 'Developing bilingual executive investment memos, project teasers, and structured commercial pitch decks.'
        },
        {
          icon: 'co_investor',
          title: 'Project Partner & Co-Investor Introductions',
          desc: 'Connecting project owners with strategic co-investors, industrial zone developers, and institutional capital providers.'
        },
        {
          icon: 'structure',
          title: 'Cross-Border Partnership Model Structuring',
          desc: 'Assessing joint venture frameworks, royalty models, build-operate-transfer (BOT) schemes, and licensing structures.'
        },
        {
          icon: 'site_visit',
          title: 'Industrial Site Visits & Project Coordination',
          desc: 'Organizing on-site inspections of industrial parks, special economic zones (SEZ), and manufacturing hubs.'
        },
        {
          icon: 'follow_up',
          title: 'Commercial Follow-Through & Deal Facilitation',
          desc: 'Maintaining structured momentum across negotiations, milestone tracking, and stakeholder coordination until signing.'
        }
      ],
      footnote:
        "Investment decisions, financial due diligence, legal opinions, and transaction execution remain subject to independent professional advice and the relevant parties' approval."
    }
  ],
  id: [
    {
      id: 'advisory',
      num: '01',
      title: 'Konsultasi Strategis & Ekspansi Pasar',
      summary: 'Membantu perusahaan mengevaluasi peluang lintas negara, memahami dinamika komersial, dan menyusun strategi penetrasi pasar yang terukur.',
      headline: 'Masuki Pasar Baru dengan Kejelasan yang Lebih Tinggi.',
      photo: 'Pusat Penasihat Strategis / Distrik Finansial',
      heroImage: '/images/china_tech_hub.webp',
      detailImage: '/images/advisory_skyline_architecture.webp',
      paragraphs: [
        'Memperluas bisnis ke pasar baru menuntut pemahaman yang jernih mengenai lingkungan komersial, kebutuhan pelanggan, lanskap persaingan, serta kondisi operasional setempat.',
        '8 Vice membantu pelaku usaha mengevaluasi peluang lintas negara dan menyusun strategi masuk pasar (market entry) yang selaras dengan sasaran serta sumber daya mereka.',
        'Pekerjaan kami mencakup kajian peluang pasar, analisis lanskap bisnis, perencanaan go-to-market, identifikasi kriteria mitra, pertimbangan lokalisasi merek, hingga penyusunan peta jalan ekspansi yang dapat ditindaklanjuti.',
        'Baik saat Anda menjajaki Indonesia untuk pertama kalinya maupun ingin memperluas kehadiran bisnis di Tiongkok, kami membantu Anda menyusun pertanyaan yang tepat, mengkaji peluang yang relevan, dan menentukan langkah praktis berikutnya.'
      ],
      deliverables: [
        {
          icon: 'assessment',
          title: 'Kajian Awal Peluang Pasar (Preliminary Assessment)',
          desc: 'Mengevaluasi potensi ukuran pasar, regulasi perizinan, lanskap kompetitor, serta dinamika permintaan konsumen di sektor target Indonesia dan Tiongkok.'
        },
        {
          icon: 'strategy',
          title: 'Strategi Masuk & Ekspansi Pasar (Market Entry Strategy)',
          desc: 'Merumuskan jalur penetrasi pasar yang terukur, kerangka mitigasi risiko bisnis, struktur entitas legal (PT PMA / JV), dan tahapan peluncuran bertahap.'
        },
        {
          icon: 'model',
          title: 'Perencanaan Model Bisnis & Go-To-Market (GTM)',
          desc: 'Merancang proposisi nilai lokal, struktur pendapatan, penyesuaian harga pasar, serta strategi peluncuran komersial yang teruji dan efisien.'
        },
        {
          icon: 'positioning',
          title: 'Penempatan Posisi Pasar (Positioning) & Lokalisasi Merek',
          desc: 'Menyelaraskan narasi merek, pesan korporat, dan strategi komunikasi agar memiliki resonansi budaya yang kuat bagi pemangku kepentingan setempat.'
        },
        {
          icon: 'partner',
          title: 'Strategi Kemitraan & Jalur Distribusi (Partner Strategy)',
          desc: 'Menentukan kriteria kualifikasi, parameter uji tuntas (due diligence), dan skema komersial bagi distributor nasional serta mitra aliansi strategis.'
        },
        {
          icon: 'roadmap',
          title: 'Peta Jalan Ekspansi Strategis (Strategic Roadmap)',
          desc: 'Menyusun panduan implementasi eksekutif langkah demi langkah dengan target regulasi yang jelas, alokasi sumber daya, dan indikator keberhasilan (KPI).'
        }
      ],
      footnote: 'Ruang lingkup riset dan kajian disesuaikan dengan sasaran klien serta ketersediaan informasi.'
    },
    {
      id: 'gov-relations',
      num: '02',
      title: 'Hubungan Pemerintah & Pemangku Kepentingan',
      summary: 'Mendukung pemetaan pemangku kepentingan, pelibatan kelembagaan, dan dialog publik-swasta melalui jalur yang tepat dan transparan.',
      headline: 'Menavigasi Lanskap Pemangku Kepentingan dengan Keyakinan.',
      photo: 'Gedung Kementerian Negara / Dewan Diplomatik Bilateral',
      heroImage: '/images/china_city_network.webp',
      detailImage: '/images/gov_relations_institution.webp',
      paragraphs: [
        'Dalam bisnis lintas batas, memahami lingkungan institusional dan menjalin keterlibatan dengan pemangku kepentingan yang tepat sering kali menjadi kunci utama dalam mengembangkan proyek atau kemitraan.',
        '8 Vice mendukung organisasi dalam memahami lanskap pemangku kepentingan, mengidentifikasi peluang keterlibatan institusional yang relevan, serta mengoordinasikan dialog profesional dengan pihak-pihak terkait.',
        'Pendekatan kami menekankan persiapan matang, sasaran yang jelas, komunikasi transparan, serta kepatuhan penuh terhadap hukum dan protokol institusional yang berlaku.',
        'Mulai dari pertemuan perkenalan dan pemetaan pemangku kepentingan hingga dialog terstruktur dan inisiatif kolaborasi publik-swasta, kami membantu klien membangun keterlibatan dengan fokus dan profesionalisme tinggi.'
      ],
      deliverables: [
        {
          icon: 'mapping',
          title: 'Pemetaan Pemangku Kepentingan (Stakeholder Mapping)',
          desc: 'Mengidentifikasi kementerian kunci, pemerintah daerah, badan pengatur, dan asosiasi industri yang relevan dengan ekspansi Anda.'
        },
        {
          icon: 'liaison',
          title: 'Penghubung Institusional & Asosiasi Industri',
          desc: 'Membangun jembatan komunikasi resmi dengan kamar dagang bilateral, instansi pemerintah, dan asosiasi sektor strategis.'
        },
        {
          icon: 'meeting',
          title: 'Persiapan & Koordinasi Pertemuan Eksekutif',
          desc: 'Menyusun agenda pertemuan tingkat tinggi, catatan pengarahan eksekutif, kepatuhan protokol resmi, serta pendampingan dwi-bahasa.'
        },
        {
          icon: 'public_private',
          title: 'Pengembangan Kolaborasi Publik-Swasta',
          desc: 'Memfasilitasi dialog strategis antara pimpinan perusahaan dan BUMN/regulator dalam proyek-proyek prioritas nasional.'
        },
        {
          icon: 'dialogue',
          title: 'Dialog Strategis & Koordinasi Kemitraan',
          desc: 'Mengoordinasikan sesi diskusi meja bundar (roundtable), peninjauan kebijakan, dan kesepakatan kemitraan kelembagaan.'
        },
        {
          icon: 'comms',
          title: 'Dukungan Komunikasi Pemangku Kepentingan & Advokasi Kebijakan',
          desc: 'Menyusun naskah briefing kebijakan, kertas kerja kepatuhan, serta komunikasi transparan yang selaras dengan koridor regulasi.'
        }
      ],
      footnote:
        '8 Vice memfasilitasi keterlibatan dan koordinasi. Keputusan pemerintah, persetujuan regulasi, dan komitmen institusional tetap menjadi kewenangan otoritas terkait.'
    },
    {
      id: 'business-matching',
      num: '03',
      title: 'Pencocokan Bisnis & Kemitraan Strategis',
      summary: 'Menghubungkan korporasi dengan calon mitra potensial, distributor, investor, dan pelaku industri berdasarkan target bisnis yang telah ditetapkan.',
      headline: 'Koneksi yang Tepat. Peluang yang Tepat.',
      photo: 'Forum Perdagangan B2B / Pusat Kemitraan Komersial',
      heroImage: '/images/hero_globe_china_indonesia.webp',
      detailImage: '/images/industry_trade.webp',
      paragraphs: [
        'Keberhasilan bisnis lintas negara sering kali bergantung pada kemampuan menemukan mitra yang memiliki keselarasan kapabilitas, sasaran, dan ekspektasi.',
        '8 Vice membantu klien mengidentifikasi potensi peluang kemitraan dan memfasilitasi koneksi bisnis berdasarkan tujuan komersial yang terukur.',
        'Kami mendampingi proses mulai dari memahami kebutuhan kriteria mitra, mengidentifikasi prospek yang relevan, menyiapkan perkenalan bisnis, mengoordinasikan pertemuan, hingga mendukung diskusi tindak lanjut.',
        'Tujuan kami adalah menjadikan keterlibatan bisnis lebih terfokus, relevan, dan produktif.'
      ],
      deliverables: [
        {
          icon: 'partner_id',
          title: 'Identifikasi Mitra Bisnis & Distributor Strategis',
          desc: 'Menjaring dan menyaring pelaku usaha lokal terverifikasi, distributor tier-1, serta operator komersial berkredibilitas tinggi.'
        },
        {
          icon: 'b2b',
          title: 'Sesi Pencocokan Bisnis B2B Terkurasi (B2B Matchmaking)',
          desc: 'Menyelenggarakan pertemuan tatap muka komersial privat yang mencocokkan kapabilitas Anda dengan kebutuhan mitra lokal.'
        },
        {
          icon: 'delegation',
          title: 'Koordinasi Delegasi Bisnis & Misi Dagang',
          desc: 'Mengelola delegasi bisnis korporat, kunjungan kawasan industri, serta roadshow komersial di Indonesia dan Tiongkok.'
        },
        {
          icon: 'intro',
          title: 'Perkenalan Korporat & Pengaturan Pertemuan Eksekutif',
          desc: 'Memfasilitasi perkenalan eksekutif langsung dan menyusun format pertemuan awal yang produktif dan terarah.'
        },
        {
          icon: 'alliance',
          title: 'Pengembangan Kemitraan Strategis & Usaha Patungan (JV)',
          desc: 'Memberikan arahan mengenai skema kepemilikan modal, pembagian peran operasional, dan penciptaan nilai bersama.'
        },
        {
          icon: 'mou',
          title: 'Dukungan Diskusi & Koordinasi Nota Kesepahaman (MoU)',
          desc: 'Mendampingi penyusunan MoU awal, negosiasi klausul pokok, serta eksekusi komersial pasca-pertemuan.'
        }
      ],
      footnote:
        'Seluruh perkenalan bergantung pada ketersediaan mitra, minat bersama, uji tuntas (due diligence), dan kesepakatan para pihak.'
    },
    {
      id: 'comms',
      num: '04',
      title: 'Komunikasi Strategis & Positioning Pasar',
      summary: 'Membangun positioning korporat, narasi merek, dan strategi komunikasi yang memperkuat relevansi pasar dan kepercayaan pemangku kepentingan.',
      headline: 'Berkomunikasi dengan Tujuan. Posisikan Bisnis untuk Bertumbuh.',
      photo: 'Pusat Narasi Strategis / Arsitektur Media Digital',
      heroImage: '/images/city_orbiting_cards.webp',
      detailImage: '/images/comms_digital_architecture.webp',
      paragraphs: [
        'Memasuki pasar baru membutuhkan lebih dari sekadar produk atau layanan unggulan. Perusahaan juga harus mengomunikasikan nilai mereka dengan cara yang beresonansi dengan audiens, mitra, dan pemangku kepentingan lokal.',
        'Berbekal keahlian komunikasi pemasaran terpadu dan branding, 8 Vice membantu organisasi membangun market positioning yang tegas serta strategi komunikasi yang relevan untuk pertumbuhan lintas negara.',
        'Kami menghubungkan sasaran bisnis dengan narasi merek, komunikasi korporat, hubungan masyarakat, dan keterlibatan pemangku kepentingan guna memperkuat pemahaman serta pengakuan pasar.'
      ],
      deliverables: [
        {
          icon: 'positioning',
          title: 'Positioning Korporat & Merek (Brand Positioning)',
          desc: 'Merumuskan diferensiasi posisi pasar yang kokoh agar merek Anda menonjol dan diterima positif di pasar baru.'
        },
        {
          icon: 'localization',
          title: 'Lokalisasi Pesan & Narasi Pasar (Localization)',
          desc: 'Menyesuaikan bahasa merek, istilah lokal, dan materi kampanye agar selaras dengan norma budaya Indonesia–Tiongkok.'
        },
        {
          icon: 'strategy',
          title: 'Perencanaan Komunikasi Strategis Terpadu',
          desc: 'Menyusun rencana induk komunikasi multi-kanal untuk mendukung momentum peluncuran ekspansi dan pengumuman pasar.'
        },
        {
          icon: 'pr',
          title: 'Hubungan Masyarakat (PR) & Keterlibatan Industri',
          desc: 'Merancang rilis korporat, artikel pemikiran kepemimpinan (thought leadership), serta pelibatan pemangku kepentingan industri.'
        },
        {
          icon: 'imc',
          title: 'Komunikasi Pemasaran Terpadu (IMC)',
          desc: 'Mengintegrasikan saluran digital, pemasaran perdagangan, sponsor acara, dan visibilitas eksekutif dalam satu payung kampanye.'
        },
        {
          icon: 'cross_cultural',
          title: 'Komunikasi Bisnis Lintas Budaya Indonesia–Tiongkok',
          desc: 'Menjembatani dinamika komunikasi antara kantor pusat global dengan tim operasional di pasar setempat.'
        }
      ],
      footnote: 'Strategi komunikasi kami disusun berdasarkan target audiens, kondisi pasar, dan prioritas komersial klien.'
    },
    {
      id: 'media-relations',
      num: '05',
      title: 'Hubungan Media & Komunikasi Krisis',
      summary: 'Mengelola kemitraan media, konferensi pers, wawancara eksekutif, serta melindungi reputasi korporat melalui strategi komunikasi lintas batas yang terpercaya.',
      headline: 'Melindungi Reputasi. Membangun Kredibilitas Media.',
      photo: 'Studio Penyiaran Berita / Podium Konferensi Pers',
      heroImage: '/images/media_relations_press_hero.webp',
      detailImage: '/images/media_relations_broadcast.webp',
      paragraphs: [
        'Kepercayaan publik dan kredibilitas media memainkan peran krusial bagi perusahaan yang berekspansi antara Indonesia dan Tiongkok. Cara perusahaan diberitakan, dan cara perusahaan merespons ketika isu muncul, membentuk persepsi mitra, regulator, dan pelanggan.',
        '8 Vice membantu organisasi membangun relasi media yang konstruktif, menyiapkan eksekutif untuk keterlibatan pers, serta mengoordinasikan konferensi pers, wawancara, dan media briefing di kedua pasar.',
        'Kami juga membantu klien bersiap menghadapi situasi tak terduga: mengidentifikasi risiko reputasi sejak dini, menyusun protokol komunikasi krisis, dan mengoordinasikan respons yang jelas, tepat waktu, dan sesuai budaya ketika isu sensitif muncul.'
      ],
      deliverables: [
        {
          icon: 'media_strategy',
          title: 'Strategi Hubungan Media Bilateral',
          desc: 'Menghubungkan organisasi Anda dengan media massa bisnis, keuangan, dan teknologi tier-1 di Indonesia dan Tiongkok.'
        },
        {
          icon: 'press_conf',
          title: 'Koordinasi Konferensi Pers & Media Briefing',
          desc: 'Pengelolaan menyeluruh konferensi pers, peluncuran produk, temu media eksklusif, dan distribusi siaran pers nasional.'
        },
        {
          icon: 'interview',
          title: 'Pelatihan Media & Persiapan Wawancara Eksekutif',
          desc: 'Membekali jajaran direksi dengan panduan tanya-jawab, simulasi wawancara wartawan, serta teknik penyampaian pesan kunci.'
        },
        {
          icon: 'crisis_plan',
          title: 'Perencanaan Komunikasi Krisis & Protokol Respons',
          desc: 'Menyusun matriks mitigasi risiko, alur eskalasi isu darurat, serta naskah pernyataan resmi menghadapi situasi sensitif.'
        },
        {
          icon: 'monitoring',
          title: 'Monitoring Media & Pelacakan Sentimen Berita',
          desc: 'Pemantauan berkala terhadap persepsi publik, pemberitaan media, dan isu kebijakan yang berdampak pada citra perusahaan.'
        },
        {
          icon: 'reputation',
          title: 'Manajemen Reputasi Korporat Lintas Batas',
          desc: 'Melindungi integritas dan nama baik perusahaan melalui komunikasi transparan yang sensitif terhadap norma kedua negara.'
        }
      ],
      footnote:
        'Pemberitaan media bergantung pada independensi redaksi. 8 Vice mendukung persiapan dan keterlibatan, namun tidak menjamin publikasi atau hasil pemberitaan tertentu.'
    },
    {
      id: 'investment',
      num: '06',
      title: 'Fasilitasi Investasi & Pengembangan Bisnis',
      summary: 'Mendukung tahap awal pengembangan bisnis dengan membantu klien merumuskan tujuan proyek dan menyusun struktur kemitraan komersial.',
      headline: 'Ubah Minat Strategis Menjadi Peluang yang Terstruktur.',
      photo: 'Infrastruktur Industri / Lokasi Proyek',
      heroImage: '/images/china_trade_port.webp',
      detailImage: '/images/investment_industry_infrastructure.webp',
      paragraphs: [
        'Mengembangkan proyek investasi atau komersial lintas negara menuntut proposisi nilai yang jelas, pemahaman mendalam atas peluang, serta keselarasan di antara pihak-pihak yang terlibat.',
        '8 Vice mendukung tahap awal pengembangan bisnis dengan membantu klien mengartikulasikan sasaran proyek, mengkaji jalur kolaborasi potensial, serta mengoordinasikan diskusi bersama pemangku kepentingan bisnis yang relevan.',
        'Kami bekerja menstrukturkan peluang sedemikian rupa sehingga mendukung percakapan yang terinformasi, perencanaan praktis, dan evaluasi komersial lebih lanjut.'
      ],
      deliverables: [
        {
          icon: 'assessment',
          title: 'Kajian Awal Peluang Proyek & Investasi',
          desc: 'Penyaringan kelayakan proyek komersial, daya tarik pasar, insentif pemerintah, serta parameter imbal hasil investasi.'
        },
        {
          icon: 'proposal',
          title: 'Penyusunan Proposal Komersial & Dokumen Teaser',
          desc: 'Penyusunan memorandum investasi eksekutif dwi-bahasa, ringkasan proyek (teaser), dan materi presentasi komersial.'
        },
        {
          icon: 'co_investor',
          title: 'Perkenalan Mitra Bisnis & Calon Co-Investor',
          desc: 'Menghubungkan pemilik proyek dengan mitra strategis lokal, pengembang kawasan industri, serta penyedia modal ventura.'
        },
        {
          icon: 'structure',
          title: 'Eksplorasi Model Kemitraan Komersial Lintas Batas',
          desc: 'Mengkaji model joint venture (JV), skema lisensi, royalti, bangun-guna-serah (BOT), dan pembagian kepemilikan saham.'
        },
        {
          icon: 'site_visit',
          title: 'Koordinasi Kunjungan Lapangan Kawasan Industri',
          desc: 'Mengatur inspeksi langsung ke kawasan industri strategis, kawasan ekonomi khusus (KEK), dan fasilitas operasional.'
        },
        {
          icon: 'follow_up',
          title: 'Dukungan Pengembangan Bisnis & Pendampingan Kesepakatan',
          desc: 'Menjaga momentum negosiasi komersial, pemantauan target capaian, hingga penandatanganan kesepakatan final.'
        }
      ],
      footnote:
        'Keputusan investasi, uji tuntas keuangan (financial due diligence), opini hukum, dan eksekusi transaksi tetap tunduk pada nasihat profesional independen dan persetujuan para pihak.'
    }
  ],
  cn: [
    {
      id: 'advisory',
      num: '01',
      title: '战略咨询与市场准入',
      summary: '协助企业评估跨境商业机遇、洞察市场动态，并制定可执行、合规的市场准入路线图。',
      headline: '以高度清晰的视野进入新市场。',
      photo: '战略咨询总部 / 金融核心区',
      heroImage: '/images/china_tech_hub.webp',
      detailImage: '/images/advisory_skyline_architecture.webp',
      paragraphs: [
        '进入新市场需要深刻理解当地的商业环境、客户需求、竞争格局以及运营条件。',
        '8 Vice 协助企业全面评估跨境商业机遇，并结合企业战略目标与资源禀赋制定切实可行的市场准入战略。',
        '我们的服务涵盖市场机会评估、商业生态分析、市场进入规划 (Go-To-Market)、合作伙伴筛选标准、品牌本土化考量以及可执行扩张路线图的制定。',
        '无论您是首次探索印尼市场，还是希望深化在中国市场的业务布局，我们都能协助您理清关键商业问题、评估潜在机遇并确定务实的下一步行动。'
      ],
      deliverables: [
        {
          icon: 'assessment',
          title: '初步市场机会评估 (Market Opportunity Assessment)',
          desc: '全面评估目标印尼与中国细分行业的市场规模、监管可行性、竞争格局及消费者需求动态。'
        },
        {
          icon: 'strategy',
          title: '市场准入与扩张战略 (Market Entry Strategy)',
          desc: '制定可落地的准入路径、风险缓释框架、外资实体架构设计 (PT PMA / 合资企业) 及高资本效率的启动阶段规划。'
        },
        {
          icon: 'model',
          title: '商业模式与市场进入规划 (Go-To-Market)',
          desc: '设计本土化价值主张、营收结构、商业定价基准以及可扩展的销售与分销渠道体系。'
        },
        {
          icon: 'positioning',
          title: '市场定位与品牌本土化 (Brand Localization)',
          desc: '调整品牌叙事、营销定位与企业传播策略，确保与当地受众及利益相关方产生深度共鸣。'
        },
        {
          icon: 'partner',
          title: '合作伙伴与分销策略 (Partner Strategy)',
          desc: '为国家级总代理、渠道商与战略合作伙伴制定筛选标准、尽职调查参数及商业合作框架。'
        },
        {
          icon: 'roadmap',
          title: '战略扩张执行路线图 (Strategic Roadmap)',
          desc: '交付分阶段、多维度的实施蓝图，明确监管审批里程碑、资源配置及核心运营绩效指标 (KPI)。'
        }
      ],
      footnote: '研究与评估的具体范围将根据客户的战略目标及可获取的信息量身定制。'
    },
    {
      id: 'gov-relations',
      num: '02',
      title: '政府关系与利益相关方事务',
      summary: '通过合规透明的渠道，支持利益相关方梳理、机构对接及政企沟通协调。',
      headline: '从容稳健地应对政企与利益相关方生态。',
      photo: '国家部委大厦 / 双边外交决策厅',
      heroImage: '/images/china_city_network.webp',
      detailImage: '/images/gov_relations_institution.webp',
      paragraphs: [
        '在跨境商业活动中，深入理解监管机构环境并与相关利益方建立良性互动，往往是推进项目落地与战略合作的关键。',
        '8 Vice 协助企业全面梳理利益相关方生态，识别合规的机构沟通机会，并协调与相关部门的专业对话。',
        '我们的方法强调充分准备、目标明确、透明沟通，并严格遵守当地法律法规与机构礼仪规范。',
        '从引荐会晤、利益相关方图谱绘制，到结构化政策对话与公私合作项目 (PPP)，我们协助客户以高度的专业性与专注度开展政企互动。'
      ],
      deliverables: [
        {
          icon: 'mapping',
          title: '利益相关方梳理与沟通规划 (Stakeholder Mapping)',
          desc: '识别与您业务扩张密切相关的核心部委、地方政府、贸易促进机构及行业关键利益相关方。'
        },
        {
          icon: 'liaison',
          title: '政府机构与行业协会联络 (Institutional Liaison)',
          desc: '与双边商会、政府主管机关及核心行业协会建立正式、顺畅的沟通桥梁。'
        },
        {
          icon: 'meeting',
          title: '高层会晤筹备与统筹协调',
          desc: '制定高管会晤议程、背景简报备忘录、官方礼仪合规指引，并提供中英印多语种传译支持。'
        },
        {
          icon: 'public_private',
          title: '公私合作伙伴关系 (PPP) 推进',
          desc: '围绕国家重点产业项目，促进企业高层与国有企业 (BUMN) 或监管机构之间的战略对话。'
        },
        {
          icon: 'dialogue',
          title: '战略政策对话与合作协调',
          desc: '统筹正式圆桌会议、政策研讨会以及机构间战略合作协议的推进。'
        },
        {
          icon: 'comms',
          title: '利益相关方传播与合规政策建言支持',
          desc: '撰写符合监管框架的行业白皮书、政策简报备忘录及透明规范的政企沟通文件。'
        }
      ],
      footnote: '8 Vice 提供沟通协助与统筹协调服务。政府决策、监管审批及机构承诺仍由相关主管机关依法独立决定。'
    },
    {
      id: 'business-matching',
      num: '03',
      title: '商业配对与战略合作伙伴关系',
      summary: '根据明确的商业目标，精准连接经过筛选的潜在合作伙伴、分销商、投资方及行业生态伙伴。',
      headline: '精准的资源连接，真实的商业机遇。',
      photo: 'B2B 经贸论坛 / 商业合作中心',
      heroImage: '/images/hero_globe_china_indonesia.webp',
      detailImage: '/images/industry_trade.webp',
      paragraphs: [
        '跨境业务的成功，很大程度上取决于能否找到能力互补、目标一致且期望契合的本土合作伙伴。',
        '8 Vice 协助客户围绕明确的商业目标，挖掘潜在合作机遇并促成高质量的商业对接。',
        '我们提供全流程支持：从厘清合作伙伴筛选标准、精准物色潜在对象，到准备商业引荐材料、安排高层会晤以及跟进后续商务洽谈。',
        '我们的目标是让每一次商务对接更加聚焦、高效且富有成果。'
      ],
      deliverables: [
        {
          icon: 'partner_id',
          title: '潜在合作伙伴与分销商寻源筛选',
          desc: '寻源并严格筛查经过验证的本土龙头企业、一级总经销商及高信誉商业运营商。'
        },
        {
          icon: 'b2b',
          title: '定制化 B2B 专场商业配对会',
          desc: '组织私密的一对一商务洽谈会，将您的核心能力与合格本土合作方的商业需求精准匹配。'
        },
        {
          icon: 'delegation',
          title: '贸易代表团与商务考察统筹',
          desc: '全流程管理跨国高管贸易代表团、工业园区实地考察及印尼与中国双边商业路演。'
        },
        {
          icon: 'intro',
          title: '企业高层引荐与商务会晤安排',
          desc: '促成高管层面的直接引荐，并构建目标明确、富有成效的初次商务会谈。'
        },
        {
          icon: 'alliance',
          title: '战略联盟与合资企业 (JV) 架构支持',
          desc: '就股权架构、合资条款、运营权责划分及双边共同价值创造提供专业顾问建议。'
        },
        {
          icon: 'mou',
          title: '合作备忘录 (MOU) 协调与商务跟进',
          desc: '支持初步谅解备忘录 (MOU) 的起草、核心条款磋商以及会后商业落地的持续跟进。'
        }
      ],
      footnote: '所有商业引荐均取决于合作方档期、双方意愿、尽职调查结果及最终协议。商业引荐本身不构成对达成商业交易的保证。'
    },
    {
      id: 'comms',
      num: '04',
      title: '战略传播与市场定位',
      summary: '打造企业定位、品牌叙事与整合传播策略，建立本土市场相关性与利益相关方信任。',
      headline: '以目标驱动传播，以定位引领增长。',
      photo: '品牌战略中心 / 数字化传播空间',
      heroImage: '/images/city_orbiting_cards.webp',
      detailImage: '/images/comms_digital_architecture.webp',
      paragraphs: [
        '进入新市场不仅需要卓越的产品或服务，企业还必须以能够引起当地受众、合作伙伴及利益相关方共鸣的方式传递自身价值。',
        '凭借整合营销传播 (IMC) 与品牌战略专长，8 Vice 协助企业构建清晰的市场定位与契合跨境增长需求的传播策略。',
        '我们将商业目标与品牌叙事、企业传播、公共关系及利益相关方沟通紧密结合，助力企业在目标市场建立深度的认知与信任。'
      ],
      deliverables: [
        {
          icon: 'positioning',
          title: '企业与品牌市场定位 (Brand Positioning)',
          desc: '提炼鲜明的差异化市场定位，在彰显企业核心竞争力的同时契合本土市场期望。'
        },
        {
          icon: 'localization',
          title: '市场本土化与核心信息架构 (Localization)',
          desc: '调校品牌语调、专业术语与传播主张，确保在印尼与中国双边文化语境中引发真实共鸣。'
        },
        {
          icon: 'strategy',
          title: '战略传播总体规划 (Communications Master Plan)',
          desc: '制定全方位、多渠道的整合传播路线图，全力支持市场准入发布与重大商业公告。'
        },
        {
          icon: 'pr',
          title: '公共关系 (PR) 与行业思想领导力构建',
          desc: '策划企业官方公告、高管思想领导力专栏文章以及行业利益相关方互动传播活动。'
        },
        {
          icon: 'imc',
          title: '整合营销传播 (IMC)',
          desc: '将数字社交媒体渠道、B2B 行业营销、峰会赞助与高管声誉打造融为一体。'
        },
        {
          icon: 'cross_cultural',
          title: '印中跨文化商业沟通体系',
          desc: '通过兼具文化敏感度的企业传播框架，弥合跨国总部与本土运营团队之间的沟通温差。'
        }
      ],
      footnote: '我们的传播策略均根据客户的目标受众、当地市场状况及商业优先级量身定制。'
    },
    {
      id: 'media-relations',
      num: '05',
      title: '媒体关系与危机公关',
      summary: '管理媒体合作、新闻发布会、高管专访，并通过审慎的跨境传播策略守护企业声誉。',
      headline: '守护企业声誉，建立权威媒体公信力。',
      photo: '新闻演播发布厅 / 媒体发布讲台',
      heroImage: '/images/media_relations_press_hero.webp',
      detailImage: '/images/media_relations_broadcast.webp',
      paragraphs: [
        '对于在印尼与中国之间拓展业务的企业而言，公众信任与主流媒体公信力至关重要。媒体如何报道一家企业，以及企业在面对突发议题时的回应方式，直接塑造了合作伙伴、监管机构与客户的认知。',
        '8 Vice 协助企业在两国市场建立建设性的媒体关系，为高管提供媒体沟通培训，并统筹新闻发布会、深度专访及媒体吹风会。',
        '我们还协助客户未雨绸缪：及早识别潜在声誉风险，建立危机公关响应机制，并在敏感问题出现时协调清晰、及时且符合当地文化规范的应对方案。'
      ],
      deliverables: [
        {
          icon: 'media_strategy',
          title: '双边主流媒体关系战略',
          desc: '为您连接印尼与大中华区的一线财经、商业及科技主流权威媒体。'
        },
        {
          icon: 'press_conf',
          title: '新闻发布会与媒体吹风会统筹',
          desc: '端到端管理新闻发布会、品牌发布盛典、媒体圆桌会及国家级新闻通稿分发。'
        },
        {
          icon: 'interview',
          title: '高管媒体应对培训与专访筹备',
          desc: '为决策层配备核心问答手册 (Q&A Playbook)、模拟记者专访演练及关键信息传递辅导。'
        },
        {
          icon: 'crisis_plan',
          title: '危机公关预案与响应机制 (Crisis Protocols)',
          desc: '建立风险应对矩阵、危机升级汇报流程，并针对敏感场景预先准备官方声明口径。'
        },
        {
          icon: 'monitoring',
          title: '媒体舆情监测与情感倾向追踪',
          desc: '实时追踪全国主流新闻媒体上的品牌认知、行业讨论及监管政策舆论动向。'
        },
        {
          icon: 'reputation',
          title: '跨文化企业声誉管理',
          desc: '通过契合双边文化规范、透明诚信的沟通策略，全方位守护跨国企业的公信力与品牌声誉。'
        }
      ],
      footnote: '媒体报道取决于新闻编辑独立性。8 Vice 提供专业筹备与沟通支持，但不对特定版面刊登或报道结果作出保证。'
    },
    {
      id: 'investment',
      num: '06',
      title: '投资促进与业务拓展支持',
      summary: '支持早期业务拓展，协助客户厘清项目目标并构建稳健的跨境商业合作架构。',
      headline: '将战略投资意向转化为结构化的商业机遇。',
      photo: '工业基础设施 / 商业项目现场',
      heroImage: '/images/china_trade_port.webp',
      detailImage: '/images/investment_industry_infrastructure.webp',
      paragraphs: [
        '在跨境环境下推进投资或商业项目，需要清晰的价值主张、对市场机遇的透彻理解以及相关各方利益的高度协同。',
        '8 Vice 支持早期业务拓展阶段，协助客户提炼项目核心目标、评估潜在合作路径，并协调与相关商业利益相关方的深入洽谈。',
        '我们致力于以结构化的方式梳理商业机遇，为知情决策、务实规划及后续商业评估奠定坚实基础。'
      ],
      deliverables: [
        {
          icon: 'assessment',
          title: '初步投资机会与项目可行性筛查',
          desc: '对商业投资项目的可行性、市场吸引力、当地政府税收与园区激励政策及财务参数进行初步筛查。'
        },
        {
          icon: 'proposal',
          title: '商业计划书与投资项目概要 (Teaser) 编制',
          desc: '撰写双语高管投资备忘录、项目投资亮点概要 (Teaser) 及结构化商业路演演示文稿 (Pitch Deck)。'
        },
        {
          icon: 'co_investor',
          title: '项目合作伙伴与联合投资方引荐',
          desc: '为项目方精准对接本土战略联合投资人、国家级工业园区开发商及机构资本合作方。'
        },
        {
          icon: 'structure',
          title: '跨境商业合作模式设计',
          desc: '评估合资经营 (JV) 框架、特许权使用费模式、建设-运营-移交 (BOT) 方案及技术授权结构。'
        },
        {
          icon: 'site_visit',
          title: '工业园区实地考察与项目协调',
          desc: '统筹安排对重点工业园区、经济特区 (SEZ/KEK)、港口枢纽及制造基地的实地调研考察。'
        },
        {
          icon: 'follow_up',
          title: '商业跟进与交易推进支持',
          desc: '在商务谈判、关键里程碑追踪及多方利益协调过程中保持高效推进势头，直至合作协议签署。'
        }
      ],
      footnote: '最终投资决策、财务尽职调查、法律意见书及交易执行仍需依赖独立的专业机构意见并经相关各方正式批准。'
    }
  ]
};

// Shared 5-step cross-border process (same copy as Home / Gateway).
export const processSteps = {
  en: [
    { num: '01', name: 'Discovery', desc: 'Understanding objectives, capabilities & target market priorities.' },
    { num: '02', name: 'Assessment', desc: 'Evaluating market conditions, regulatory dynamics & feasibility.' },
    { num: '03', name: 'Strategize', desc: 'Formulating market positioning, partner criteria & engagement roadmap.' },
    { num: '04', name: 'Connect', desc: 'Facilitating targeted introductions and curated B2B/institutional dialogues.' },
    { num: '05', name: 'Follow-Through', desc: 'Supporting partnership discussions, proposals & implementation coordination.' }
  ],
  id: [
    { num: '01', name: 'Penjajakan (Discovery)', desc: 'Memahami sasaran ekspansi, kapabilitas & ekspektasi pasar target.' },
    { num: '02', name: 'Penilaian (Assessment)', desc: 'Mengevaluasi kondisi pasar, regulasi terkait & kelayakan komersial.' },
    { num: '03', name: 'Strategi (Strategize)', desc: 'Merumuskan positioning, kriteria mitra & peta jalan pelibatan.' },
    { num: '04', name: 'Koneksi (Connect)', desc: 'Memfasilitasi pengenalan terarah dan dialog B2B/institusional.' },
    { num: '05', name: 'Eksekusi (Follow-Through)', desc: 'Mendampingi negosiasi kemitraan, proposal & implementasi nyata.' }
  ],
  cn: [
    { num: '01', name: '需求洞察 (Discovery)', desc: '深入了解客户战略目标、核心能力与目标市场优先级。' },
    { num: '02', name: '市场评估 (Assessment)', desc: '全面评估目标市场环境、监管政策动态与商业可行性。' },
    { num: '03', name: '战略制定 (Strategize)', desc: '制定市场定位、合作伙伴筛选标准与沟通执行路线图。' },
    { num: '04', name: '资源对接 (Connect)', desc: '促成精准商业引荐与高规格 B2B 及政府机构对话。' },
    { num: '05', name: '落地跟进 (Follow-Through)', desc: '全程支持合作洽谈、方案推进与项目落地协调。' }
  ]
};

const pick = (obj, lang) => obj[lang === 'cn' ? 'cn' : lang === 'id' ? 'id' : 'en'];
export const getServices = (lang) => pick(services, lang);
export const getService = (lang, slug) => getServices(lang).find((s) => s.id === slug);
export const getProcessSteps = (lang) => pick(processSteps, lang);
