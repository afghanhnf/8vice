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
      photo: 'Strategy session / market analysis workshop',
      heroImage: '/images/china_tech_hub.jpg',
      detailImage: '/images/consultation_advisory_bw.jpg',
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
      photo: 'Formal institutional meeting / delegation dialogue',
      heroImage: '/images/china_city_network.jpg',
      detailImage: '/images/executive_profile_bw.jpg',
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
      photo: 'B2B matchmaking / handshake at business forum',
      heroImage: '/images/hero_globe_china_indonesia.jpg',
      detailImage: '/images/executive_red_cards.jpg',
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
      photo: 'Brand strategy board / creative team review',
      heroImage: '/images/city_orbiting_cards.jpg',
      detailImage: '/images/leader_speech_abstract.webp',
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
      photo: 'Press conference / executive media interview',
      heroImage: '/images/market_intelligence_hero.webp',
      heroImage: '/images/media_relations_press_hero.jpg',
      detailImage: '/images/video_manifesto_cover.webp',
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
      photo: 'Project site visit / investment discussion',
      heroImage: '/images/china_trade_port.jpg',
      detailImage: '/images/industry_infrastructure.jpg',
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
      photo: 'Sesi strategi / lokakarya analisis pasar',
      heroImage: '/images/china_tech_hub.jpg',
      detailImage: '/images/consultation_advisory_bw.jpg',
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
      photo: 'Pertemuan kelembagaan resmi / dialog delegasi',
      heroImage: '/images/china_city_network.jpg',
      detailImage: '/images/executive_profile_bw.jpg',
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
      photo: 'Pencocokan B2B / jabat tangan di forum bisnis',
      heroImage: '/images/hero_globe_china_indonesia.jpg',
      detailImage: '/images/executive_red_cards.jpg',
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
      photo: 'Papan strategi merek / tinjauan tim kreatif',
      heroImage: '/images/city_orbiting_cards.jpg',
      detailImage: '/images/leader_speech_abstract.webp',
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
      photo: 'Konferensi pers / wawancara media eksekutif',
      heroImage: '/images/market_intelligence_hero.webp',
      heroImage: '/images/media_relations_press_hero.jpg',
      detailImage: '/images/video_manifesto_cover.webp',
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
      photo: 'Kunjungan lokasi proyek / diskusi investasi',
      heroImage: '/images/china_trade_port.jpg',
      detailImage: '/images/industry_infrastructure.jpg',
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
  ]
};

const pick = (obj, lang) => obj[lang === 'id' ? 'id' : 'en'];
export const getServices = (lang) => pick(services, lang);
export const getService = (lang, slug) => getServices(lang).find((s) => s.id === slug);
export const getProcessSteps = (lang) => pick(processSteps, lang);
