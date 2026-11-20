<?php

namespace App\Helpers;

class SeedData
{
    /**
     * 1. Clients & Partner Brands (11 Active Logos)
     */
    public static function getClients(): array
    {
        return [
            (object)['name' => 'Alipay+', 'glyph' => '支', 'image' => '/images/logos-client/alipay-plus.webp', 'category' => 'Fintech & Payments'],
            (object)['name' => 'DiDi', 'glyph' => 'D', 'image' => '/images/logos-client/didi.webp', 'category' => 'Mobility & Technology'],
            (object)['name' => 'DingTalk', 'glyph' => '钉', 'image' => '/images/logos-client/dingtalk.webp', 'category' => 'Enterprise SaaS'],
            (object)['name' => 'Coolita', 'glyph' => 'C', 'image' => '/images/logos-client/coolita.webp', 'category' => 'Consumer Tech'],
            (object)['name' => 'Skyworth', 'glyph' => 'S', 'image' => '/images/logos-client/skyworth.webp', 'category' => 'Consumer Electronics'],
            (object)['name' => 'MangoTV', 'glyph' => '芒', 'image' => '/images/logos-client/mangotv.webp', 'category' => 'Digital Entertainment & Media'],
            (object)['name' => 'Grand Melia', 'glyph' => 'M', 'image' => '/images/logos-client/grandmelia.webp', 'category' => 'Hospitality & Luxury Travel'],
            (object)['name' => 'Zhongnan Animation', 'glyph' => '中', 'image' => '/images/logos-client/zhongnan-animation.webp', 'category' => 'Creative Economy & IP'],
            (object)['name' => 'Edutech', 'glyph' => 'E', 'image' => '/images/logos-client/edutech.webp', 'category' => 'Education & Digital Skills'],
            (object)['name' => 'AHA 2026', 'glyph' => 'A', 'image' => '/images/logos-client/aha.webp', 'category' => 'International Summit & Trade Mission'],
            (object)['name' => 'Guangdong Province Inbound Tourism Conference', 'glyph' => 'G', 'image' => '/images/logos-client/guangdong.webp', 'category' => 'Government & Institutional Liaison'],
        ];
    }

    /**
     * 2. The 6 Core Service Pillars (Mirrors data/services.js)
     */
    public static function getServices(): array
    {
        return [
            (object)[
                'id' => 'advisory',
                'slug' => 'advisory',
                'num' => '01',
                'title' => [
                    'en' => 'Strategic Advisory & Market Entry',
                    'id' => 'Konsultasi Strategis & Ekspansi Pasar',
                    'cn' => '战略咨询与市场准入'
                ],
                'summary' => [
                    'en' => 'Helping businesses evaluate cross-border opportunities, understand commercial dynamics, and formulate executable market entry roadmaps.',
                    'id' => 'Membantu organisasi mengevaluasi peluang lintas negara, memahami dinamika komersial, dan menyusun peta jalan ekspansi yang terukur.',
                    'cn' => '协助企业评估跨境商业机遇、洞察市场动态，并制定可执行、合规的市场准入路线图。'
                ],
                'headline' => [
                    'en' => 'Enter New Markets with Greater Clarity.',
                    'id' => 'Masuki Pasar Baru dengan Kejelasan Strategis.',
                    'cn' => '以高度清晰的视野进入新市场。'
                ],
                'hero_image' => '/images/china_tech_hub.webp',
                'detail_image' => '/images/advisory_skyline_architecture.webp',
                'link_url' => '/services/advisory',
                'sort_order' => 1,
                'deliverables' => [
                    ['icon' => 'assessment', 'title' => 'Preliminary Market Opportunity Assessment', 'desc' => 'Market sizing, regulatory feasibility, competitor landscape, and consumer demand dynamics.'],
                    ['icon' => 'strategy', 'title' => 'Market Entry & Expansion Strategy', 'desc' => 'Actionable entry pathways, risk-mitigation frameworks, corporate entity structuring (PT PMA / JV).'],
                    ['icon' => 'model', 'title' => 'Business Model & Go-To-Market Planning', 'desc' => 'Localized value propositions, revenue structures, commercial pricing benchmarks, and sales channels.'],
                    ['icon' => 'positioning', 'title' => 'Market Positioning & Brand Localization', 'desc' => 'Adapting brand narratives and corporate communications to ensure authentic resonance with local audiences.'],
                    ['icon' => 'partner', 'title' => 'Partner & Distribution Strategy', 'desc' => 'Selection criteria, due diligence parameters, and engagement frameworks for national distributors.'],
                    ['icon' => 'roadmap', 'title' => 'Strategic Expansion Roadmap', 'desc' => 'Milestone planning, operational sequencing, regulatory checkpoints, and resource allocation models.']
                ]
            ],
            (object)[
                'id' => 'gov-relations',
                'slug' => 'gov-relations',
                'num' => '02',
                'title' => [
                    'en' => 'Government Relations & Stakeholder Engagement',
                    'id' => 'Hubungan Pemerintah & Pemangku Kepentingan',
                    'cn' => '政府关系与利益相关方事务'
                ],
                'summary' => [
                    'en' => 'Supporting stakeholder mapping, institutional engagement, and public-private dialogue through appropriate and transparent channels.',
                    'id' => 'Pemetaan pemangku kepentingan, pelibatan kelembagaan, dan dialog publik-swasta melalui jalur resmi dan transparan.',
                    'cn' => '通过合规透明的渠道，支持利益相关方梳理、机构对接及政企沟通协调。'
                ],
                'headline' => [
                    'en' => 'Building Trust with Institutions and Regulators.',
                    'id' => 'Membangun Kepercayaan dengan Institusi dan Regulator.',
                    'cn' => '从容稳健地应对政企与利益相关方生态。'
                ],
                'hero_image' => '/images/city_orbiting_cards.webp',
                'detail_image' => '/images/gov_relations_institution.webp',
                'link_url' => '/services/gov-relations',
                'sort_order' => 2,
                'deliverables' => [
                    ['icon' => 'mapping', 'title' => 'Stakeholder & Regulatory Mapping', 'desc' => 'Identifying key ministries, industry associations, regional authorities, and oversight bodies.'],
                    ['icon' => 'liaison', 'title' => 'Institutional Liaison & Protocol', 'desc' => 'Facilitating appropriate introductions and engagement aligned with official Indonesian protocols.'],
                    ['icon' => 'dialogue', 'title' => 'Public-Private Dialogue Facilitation', 'desc' => 'Structuring bilateral roundtables, policy consultations, and collaborative taskforces.'],
                    ['icon' => 'monitoring', 'title' => 'Policy & Regulatory Radar', 'desc' => 'Tracking regulatory shifts in investment caps, local content mandates (TKDN), and compliance.'],
                    ['icon' => 'delegation', 'title' => 'Trade Delegation & Bilateral Missions', 'desc' => 'Organizing high-level executive visits, government-hosted symposiums, and institutional MOUs.'],
                    ['icon' => 'advisory', 'title' => 'Strategic Institutional Counsel', 'desc' => 'Advising executive leadership on maintaining long-term credibility and reputational standing.']
                ]
            ],
            (object)[
                'id' => 'business-matching',
                'slug' => 'business-matching',
                'num' => '03',
                'title' => [
                    'en' => 'Business Matching & Strategic Partnerships',
                    'id' => 'Pencocokan Bisnis & Kemitraan Strategis',
                    'cn' => '商业配对与战略合作伙伴关系'
                ],
                'summary' => [
                    'en' => 'Connecting businesses with relevant commercial partners, distributors, investors, and industry stakeholders across Indonesia and China.',
                    'id' => 'Menghubungkan korporasi dengan mitra komersial, distributor, investor, dan pelaku industri yang relevan.',
                    'cn' => '根据明确的商业目标，精准连接经过筛选的潜在合作伙伴、分销商、投资方及行业生态伙伴。'
                ],
                'headline' => [
                    'en' => 'Connect with the Right Partners at the Right Level.',
                    'id' => 'Terhubung dengan Mitra yang Tepat pada Tingkat yang Tepat.',
                    'cn' => '精准的资源连接，真实的商业机遇。'
                ],
                'hero_image' => '/images/china_trade_port.webp',
                'detail_image' => '/images/industry_trade.webp',
                'link_url' => '/services/business-matching',
                'sort_order' => 3,
                'deliverables' => [
                    ['icon' => 'screening', 'title' => 'Curated Partner Identification & Screening', 'desc' => 'Rigorous vetting of commercial partners, distribution networks, and strategic collaborators.'],
                    ['icon' => 'matchmaking', 'title' => 'B2B Matchmaking & Structured Meetings', 'desc' => 'Arranging pre-qualified, bilingual business discussions with senior decision-makers.'],
                    ['icon' => 'evaluation', 'title' => 'Commercial Proposal & Deal Structuring', 'desc' => 'Supporting term sheet formulation, joint-venture frameworks, and revenue-sharing alignments.'],
                    ['icon' => 'delegations', 'title' => 'Industry Showcases & Trade Roadshows', 'desc' => 'Coordinating private bilateral deal-making forums, sector exhibitions, and investor pitch sessions.'],
                    ['icon' => 'followthrough', 'title' => 'Negotiation Facilitation & Follow-Through', 'desc' => 'Navigating cultural and commercial friction during partnership finalization to secure execution.'],
                    ['icon' => 'ecosystem', 'title' => 'Long-Term Partnership Governance', 'desc' => 'Ongoing strategic alignment and conflict-resolution mechanisms for cross-border joint ventures.']
                ]
            ],
            (object)[
                'id' => 'comms',
                'slug' => 'comms',
                'num' => '04',
                'title' => [
                    'en' => 'Strategic Communications & Market Positioning',
                    'id' => 'Komunikasi Strategis & Positioning Pasar',
                    'cn' => '战略传播与市场定位'
                ],
                'summary' => [
                    'en' => 'Positioning corporate brands, shaping narrative resonance, and delivering impactful communications strategies in local contexts.',
                    'id' => 'Positioning korporat, narasi merek bernilai tinggi, dan strategi komunikasi yang mengakar pada konteks lokal.',
                    'cn' => '打造企业定位、品牌叙事与整合传播策略，建立本土市场相关性与利益相关方信任。'
                ],
                'headline' => [
                    'en' => 'Communicate with Purpose, Cultural Context, and Impact.',
                    'id' => 'Berkomunikasi dengan Tujuan, Konteks Budaya, dan Dampak.',
                    'cn' => '以目标驱动传播，以定位引领增长。'
                ],
                'hero_image' => '/images/industry_creative.webp',
                'detail_image' => '/images/comms_digital_architecture.webp',
                'link_url' => '/services/comms',
                'sort_order' => 4,
                'deliverables' => [
                    ['icon' => 'narrative', 'title' => 'Corporate Narrative & Messaging Architecture', 'desc' => 'Crafting authentic, culturally tuned brand storylines for multinational organizations.'],
                    ['icon' => 'localization', 'title' => 'Cross-Cultural Brand Localization', 'desc' => 'Adapting marketing language, tone-of-voice, and creative assets to eliminate cultural dissonance.'],
                    ['icon' => 'thought_leadership', 'title' => 'Executive Thought Leadership Strategy', 'desc' => 'Positioning leadership teams through authored articles, keynote presentations, and industry forums.'],
                    ['icon' => 'digital_comms', 'title' => 'Integrated Digital & Social Communications', 'desc' => 'Managing digital narratives, multichannel touchpoints, and localized social media ecosystems.'],
                    ['icon' => 'stakeholder_comms', 'title' => 'Institutional & ESG Communications', 'desc' => 'Communicating sustainable contributions, community impact, and regulatory alignment.'],
                    ['icon' => 'reputation_counsel', 'title' => 'Perception Audits & Reputation Strategy', 'desc' => 'Measuring sentiment among local stakeholders and refining market communication positioning.']
                ]
            ],
            (object)[
                'id' => 'media-relations',
                'slug' => 'media-relations',
                'num' => '05',
                'title' => [
                    'en' => 'Media Relations & Crisis Communications',
                    'id' => 'Hubungan Media & Komunikasi Krisis',
                    'cn' => '媒体关系与危机公关'
                ],
                'summary' => [
                    'en' => 'Building credible media relationships, managing press strategy, and safeguarding corporate reputation in critical moments.',
                    'id' => 'Membangun relasi media kredibel, mengelola strategi pers, dan melindungi reputasi korporat di situasi krusial.',
                    'cn' => '管理媒体合作、新闻发布会、高管专访，并通过审慎的跨境传播策略守护企业声誉。'
                ],
                'headline' => [
                    'en' => 'Earned Media Credibility and Resilient Reputation Protection.',
                    'id' => 'Kredibilitas Media dan Perlindungan Reputasi yang Tangguh.',
                    'cn' => '守护企业声誉，建立权威媒体公信力。'
                ],
                'hero_image' => '/images/media_relations_press_hero.webp',
                'detail_image' => '/images/media_relations_broadcast.webp',
                'link_url' => '/services/media-relations',
                'sort_order' => 5,
                'deliverables' => [
                    ['icon' => 'press_strategy', 'title' => 'Press Strategy & Media Engagement Planning', 'desc' => 'Developing press release campaigns, exclusive briefings, and media partnerships.'],
                    ['icon' => 'conferences', 'title' => 'Press Conferences & Media Roundtable Coordination', 'desc' => 'Arranging bilingual press conferences, journalist Q&A sessions, and executive interviews.'],
                    ['icon' => 'monitoring', 'title' => 'Real-Time Media Monitoring & Sentiment Analysis', 'desc' => '24/7 tracking across tier-1 Indonesian and Chinese press, digital publications, and social media.'],
                    ['icon' => 'crisis_readiness', 'title' => 'Crisis Communication Protocols & Manuals', 'desc' => 'Establishing rapid-response frameworks, designated spokespersons, and holding statements.'],
                    ['icon' => 'issue_mitigation', 'title' => 'Active Issue Management & Response', 'desc' => 'Mitigating reputational flare-ups, factual inaccuracies, and cross-border PR misunderstandings.'],
                    ['icon' => 'media_training', 'title' => 'Executive Media Coaching & Interview Prep', 'desc' => 'Preparing C-level leaders for tough media inquiries and televised interviews.']
                ]
            ],
            (object)[
                'id' => 'investment',
                'slug' => 'investment',
                'num' => '06',
                'title' => [
                    'en' => 'Investment & Business Development Facilitation',
                    'id' => 'Fasilitasi Investasi & Pengembangan Bisnis',
                    'cn' => '投资促进与业务拓展支持'
                ],
                'summary' => [
                    'en' => 'Supporting investment opportunity assessment, commercial proposal development, and project coordination from conception to execution.',
                    'id' => 'Mendukung evaluasi peluang investasi, perumusan proposal komersial, dan koordinasi proyek dari inisiasi hingga eksekusi.',
                    'cn' => '支持早期业务拓展，协助客户厘清项目目标并构建稳健的跨境商业合作架构。'
                ],
                'headline' => [
                    'en' => 'Navigating Capital Deployment and Strategic Commercial Projects.',
                    'id' => 'Memandu Penyaluran Modal dan Proyek Komersial Strategis.',
                    'cn' => '将战略投资意向转化为结构化的商业机遇。'
                ],
                'hero_image' => '/images/hero_globe_china_indonesia.webp',
                'detail_image' => '/images/investment_industry_infrastructure.webp',
                'link_url' => '/services/investment',
                'sort_order' => 6,
                'deliverables' => [
                    ['icon' => 'opportunity_assessment', 'title' => 'Investment Opportunity & Feasibility Review', 'desc' => 'Screening project viability, macroeconomic variables, fiscal incentives, and capital risks.'],
                    ['icon' => 'structuring', 'title' => 'Commercial Proposal & Investment Structuring', 'desc' => 'Designing joint venture terms, equity participations, debt financing coordination, and SPVs.'],
                    ['icon' => 'coordination', 'title' => 'Multi-Stakeholder Project Facilitation', 'desc' => 'Acting as the central coordinator between engineering, legal, institutional, and commercial teams.'],
                    ['icon' => 'due_diligence', 'title' => 'Commercial & Local Partner Due Diligence', 'desc' => 'Investigating local partner track records, operational capabilities, and governance ethics.'],
                    ['icon' => 'incentives', 'title' => 'Tax Incentive & Special Economic Zone Advisory', 'desc' => 'Navigating tax holidays, Kawasan Ekonomi Khusus (KEK) benefits, and customs exemptions.'],
                    ['icon' => 'operational_readiness', 'title' => 'Post-Investment Integration & Launch Support', 'desc' => 'Ensuring seamless transition from initial capital deployment into stable operational delivery.']
                ]
            ]
        ];
    }

    /**
     * 3. Leadership Team / People Behind 8Vice (Helda Chandra, Gandhi Priambodho, Christine Susanna Tjhin, James He)
     */
    public static function getProfiles(): array
    {
        return [
            (object)[
                'call_name' => 'Helda Chandra',
                'title' => 'Helda Chandra',
                'full_title' => 'Helda Chandra',
                'chinese_name' => '曾宪茹',
                'role' => [
                    'en' => 'Chief Executive Officer',
                    'id' => 'Chief Executive Officer',
                    'cn' => 'Chief Executive Officer',
                ],
                'expertise' => [
                    'en' => 'Corporate Strategy, Business Development & Overall Growth',
                    'id' => 'Corporate Strategy, Business Development & Overall Growth',
                    'cn' => 'Corporate Strategy, Business Development & Overall Growth',
                ],
                'short_bio' => [
                    'en' => 'Helda Chandra is a business strategist and entrepreneur with over 20 years of experience advising Indonesian government institutions, state-owned enterprises, and private-sector companies, backed by strong networks across government and business communities in Indonesia and China to facilitate market entry, strategic partnerships, and cross-border business growth.',
                    'id' => 'Helda Chandra adalah seorang ahli strategi bisnis dan wirausaha dengan lebih dari 20 tahun pengalaman mendampingi lembaga pemerintah Indonesia, badan usaha milik negara (BUMN), serta perusahaan swasta, didukung jaringan kuat di komunitas pemerintahan dan bisnis di Indonesia maupun Tiongkok untuk memfasilitasi masuk pasar, kemitraan strategis, dan pertumbuhan bisnis lintas batas.',
                    'cn' => '曾宪茹（Helda Chandra）是一位资深商业战略顾问与企业家，拥有20余年为印度尼西亚政府机构、国有企业及私营企业提供战略咨询的丰富经验，并依托印尼与中国政商界的深厚网络，助力企业高效实现市场准入、战略合作与跨境业务增长。',
                ],
                'experiences' => [
                    'en' => [
                        'Expert Advisor, Ministry of Economic Creative Republic of Indonesia',
                        'Former Board of Commissioners Committee, PT. MRT Jakarta',
                        "Former Non Aeronautical Business Consultant, PT. Angkasa Pura II Tbk. (Indonesia’s State Owned Company)",
                        'Founder & CEO, Communic 8',
                        'Managing Partner, Gentala Institute',
                        '20+ Years of Private-Sector Experience in strategic business advisory, marketing, and integrated marketing communications.',
                        'Guest Lecturer at various universities across Indonesia, sharing expertise in business strategy, marketing, and communications.',
                        'China Market Entry Consultant, advising Chinese companies on market entry, business development, and strategic partnerships in Indonesia.',
                    ],
                    'id' => [
                        'Expert Advisor, Kementerian Ekonomi Kreatif Republik Indonesia',
                        'Mantan Komite Dewan Komisaris, PT. MRT Jakarta',
                        'Mantan Konsultan Bisnis Non-Aeronautika, PT. Angkasa Pura II Tbk. (BUMN Indonesia)',
                        'Founder & CEO, Communic 8',
                        'Managing Partner, Gentala Institute',
                        'Pengalaman 20+ Tahun di Sektor Swasta dalam konsultasi bisnis strategis, pemasaran, dan komunikasi pemasaran terpadu.',
                        'Dosen Tamu di berbagai universitas di seluruh Indonesia, membagikan keahlian di bidang strategi bisnis, pemasaran, dan komunikasi.',
                        'Konsultan Masuk Pasar Tiongkok, mendampingi perusahaan Tiongkok dalam ekspansi pasar, pengembangan bisnis, dan kemitraan strategis di Indonesia.',
                    ],
                    'cn' => [
                        '印度尼西亚共和国创意经济部专家顾问',
                        '前雅加达地铁公司 (PT. MRT Jakarta) 监事会委员会成员',
                        '前印度尼西亚第二机场公司 (PT. Angkasa Pura II Tbk.，国有企业) 非航空商业顾问',
                        'Communic 8 创始人兼首席执行官',
                        '根塔拉研究所 (Gentala Institute) 执行合伙人',
                        '20余年私营部门实战经验，深耕战略商业咨询、市场营销及整合营销传播领域。',
                        '受邀担任印尼多所高校客座讲师，分享商业战略、市场营销与品牌传播专业见解。',
                        '中国市场准入顾问，为中国企业在印度尼西亚的市场准入、业务拓展及战略合作提供咨询支持。',
                    ],
                ],
                'image' => '/images/profiles/helda_chandra.webp',
                'focus_tags' => ['Corporate Strategy', 'Business Development', 'Overall Growth', 'Government Relations'],
                'socials' => [
                    'linkedin' => 'https://www.linkedin.com/in/helda-chandra-a0b27b1b/',
                    'instagram' => 'https://www.instagram.com/heldachandra',
                    'email' => 'mailto:Heldachandra@gmail.com',
                ],
                'quote_title' => [
                    'en' => 'Bridging Governance, Enterprise Innovation, and Bilateral Growth',
                    'id' => 'Menjembatani Tata Kelola, Inovasi Korporasi, dan Pertumbuhan Bilateral',
                    'cn' => '架设企业治理、前沿创新与双边增长的桥梁',
                ],
                'quote_message' => [
                    'en' => [
                        '“In every cross-border initiative between Indonesia and China, sustainable success is never defined by transaction speed alone, but by the depth of institutional trust, regulatory compliance, and nuanced cultural understanding.”',
                        '“With over two decades of advisory experience—from public infrastructure at PT MRT Jakarta and creative economy strategy for the Indonesian Government, to market entry for Alibaba Group, DingTalk, and DiDi—our focus at 8 Vice is building high-trust partnerships that create long-term commercial and sovereign value.”',
                    ],
                    'id' => [
                        '“Dalam setiap inisiatif lintas negara antara Indonesia dan Tiongkok, keberhasilan jangka panjang tidak pernah ditentukan oleh kecepatan transaksi semata, melainkan oleh kedalaman kepercayaan institusional, kepatuhan regulasi, dan pemahaman budaya lokal yang matang.”',
                        '“Dengan lebih dari dua dekade pengalaman mendampingi BUMN, pemerintah, dan korporasi global—fokus kami di 8 Vice adalah membangun kemitraan terpercaya yang menciptakan nilai komersial jangka panjang.”',
                    ],
                    'cn' => [
                        '“在印尼与中国之间的所有跨境商业合作中，长远的成功从来不取决于单次交易的完成速度，而在于机构信任的深度、监管政策的合规把控以及对当地商业文化的深刻理解。”',
                        '“凭借二十余年服务政府机构、国有企业及跨国企业的经验，我们在 8 Vice 致力于构建高信任度的双边伙伴关系，创造持久商业价值。”',
                    ],
                ],
            ],
            (object)[
                'call_name' => 'Gandhi Priambodho',
                'title' => 'Gandhi Priambodho',
                'full_title' => 'Gandhi Priambodho',
                'chinese_name' => '甘地',
                'role' => [
                    'en' => 'Chief Business Growth Officer',
                    'id' => 'Chief Business Growth Officer',
                    'cn' => 'Chief Business Growth Officer',
                ],
                'expertise' => [
                    'en' => 'Business, Trade & Investment',
                    'id' => 'Business, Trade & Investment',
                    'cn' => 'Business, Trade & Investment',
                ],
                'short_bio' => [
                    'en' => "Gandhi Priambodho is an international business development professional with experience expanding trade, investment, and strategic partnerships between Indonesia and China.\n\nBased in Beijing since 2002, he has established extensive cross-border business networks across multiple sectors, including industrial cooperation, energy and minerals, media and creative industries, tourism, education, real estate, and healthcare.",
                    'id' => "Gandhi Priambodho adalah profesional pengembangan bisnis internasional dengan pengalaman memperluas perdagangan, investasi, dan kemitraan strategis antara Indonesia dan Tiongkok.\n\nBerdomisili di Beijing sejak 2002, beliau telah membangun jejaring bisnis lintas batas yang luas di berbagai sektor, mencakup kerja sama industri, energi dan mineral, media dan industri kreatif, pariwisata, pendidikan, properti, serta layanan kesehatan.",
                    'cn' => "Gandhi Priambodho（甘地）是一位拥有丰富国际视野的业务拓展专家，专注于扩大印度尼西亚与中国之间的双边贸易、投资及战略合作伙伴关系。\n\n自2002年起常驻北京以来，他在工业合作、能源与矿产、传媒与文化创意产业、旅游、教育、房地产及医疗健康等多个关键领域建立了广泛而扎实的跨境商业网络。",
                ],
                'experiences' => [
                    'en' => [
                        'CEO Nanyang Bridge Media, co. Ltd',
                        'CEO Red&White China',
                        "Professional experience in real estate consultancy, property investment with exposure to China's property market and international investment opportunities.",
                        'Professional exposure to media relations, corporate communications, business networking, and Indonesia–China engagement when in Indonesia Shangbao',
                        'Exposure to corporate business development, strategic partnerships, and diversified business operations across multiple industries in Lippo Group Indonesia',
                        'Involvement in Air Show Foundation – Indonesia, aviation industry initiatives, institutional relations, strategic partnerships, and aviation sector development Indonesia.',
                    ],
                    'id' => [
                        'CEO Nanyang Bridge Media, co. Ltd',
                        'CEO Red&White China',
                        'Pengalaman profesional dalam konsultansi real estat dan investasi properti dengan eksposur pada pasar properti Tiongkok serta peluang investasi internasional.',
                        'Eksposur profesional pada hubungan media, komunikasi korporat, jejaring bisnis, dan keterlibatan Indonesia–Tiongkok saat di Indonesia Shangbao',
                        'Eksposur pada pengembangan bisnis korporat, kemitraan strategis, dan operasional bisnis terdiversifikasi lintas industri di Lippo Group Indonesia',
                        'Keterlibatan di Air Show Foundation – Indonesia, inisiatif industri penerbangan, hubungan kelembagaan, kemitraan strategis, dan pengembangan sektor aviasi Indonesia.',
                    ],
                    'cn' => [
                        '南洋桥传媒有限公司 (Nanyang Bridge Media, co. Ltd) 首席执行官',
                        '红白中国 (Red&White China) 首席执行官',
                        '具备房地产咨询与物业投资实战经验，深度参与中国房地产市场及国际投资机遇。',
                        '在《印尼商报》任职期间积累了丰富的媒体关系、企业传播、商务拓展及印中双边交流经验。',
                        '在印尼力宝集团 (Lippo Group Indonesia) 积累了多元产业企业业务拓展、战略合作及多元化商业运营经验。',
                        '参与印尼航展基金会 (Air Show Foundation – Indonesia)，推动航空产业倡议、机构关系对接、战略合作及印尼航空业发展。',
                    ],
                ],
                'image' => '/images/profiles/gandhi_priambodho.webp',
                'focus_tags' => ['International Business', 'Trade & Investment', 'Energy & Minerals', 'Beijing Network'],
                'socials' => [
                    'linkedin' => 'https://www.linkedin.com/company/8-vice/',
                    'instagram' => 'https://www.instagram.com/8viceofficial',
                    'email' => 'mailto:hello@8vice.com',
                ],
                'quote_title' => [
                    'en' => 'Two Decades of Grounded Cross-Border Networks in Beijing & Jakarta',
                    'id' => 'Dua Dekade Membangun Jejaring Lintas Batas di Beijing & Jakarta',
                    'cn' => '深耕北京与雅加达二十载的双边商业网络',
                ],
                'quote_message' => [
                    'en' => [
                        '“Based in Beijing since 2002, expanding trade, investment, and strategic partnerships across industrial cooperation, energy & minerals, media, tourism, education, real estate, and healthcare.”',
                    ],
                    'id' => [
                        '“Berdomisili di Beijing sejak tahun 2002, memperluas perdagangan, investasi, dan kemitraan strategis lintas sektor antara Indonesia dan Tiongkok.”',
                    ],
                    'cn' => [
                        '“自2002年起常驻北京，在工业合作、能源矿产、传媒、文旅、教育、不动产及医疗健康领域持续拓展印尼与中国双边经贸合作。”',
                    ],
                ],
            ],
            (object)[
                'call_name' => 'Christine Susanna Tjhin',
                'title' => 'Christine Susanna Tjhin',
                'full_title' => 'Christine Susanna Tjhin',
                'chinese_name' => '陈妹伶',
                'role' => [
                    'en' => 'Chief Strategy Officer',
                    'id' => 'Chief Strategy Officer',
                    'cn' => 'Chief Strategy Officer',
                ],
                'expertise' => [
                    'en' => 'Strategy, Policy & Institutional Relations',
                    'id' => 'Strategy, Policy & Institutional Relations',
                    'cn' => 'Strategy, Policy & Institutional Relations',
                ],
                'short_bio' => [
                    'en' => 'Christine Susanna Tjhin is a prominent Indonesia–China relations expert with over 20 years of experience in policy research, strategic communication, and international affairs, promotes sustainable and strategic partnerships between Indonesia and China. She also serves as an advisor on China affairs to Indonesia’s National Defense Council (DPN), a Senior Expert at the Foreign Policy Community Indonesia (FPCI), and holds advisory roles in several China-focused policy networks.',
                    'id' => 'Christine Susanna Tjhin adalah pakar hubungan Indonesia–Tiongkok terkemuka dengan pengalaman lebih dari 20 tahun di bidang riset kebijakan, komunikasi strategis, dan urusan internasional yang mendorong kemitraan strategis dan berkelanjutan antara Indonesia dan Tiongkok. Beliau juga menjabat sebagai penasihat urusan Tiongkok di Dewan Pertahanan Nasional (DPN) RI, Senior Expert di Foreign Policy Community Indonesia (FPCI), serta memegang peran penasihat di berbagai jejaring kebijakan terkait Tiongkok.',
                    'cn' => 'Christine Susanna Tjhin（陈妹伶）是著名的印中关系专家，在政策研究、战略传播与国际事务领域拥有20余年深厚积淀，长期致力于推动印度尼西亚与中国之间可持续的战略伙伴关系。她同时担任印度尼西亚国家国防委员会 (DPN) 中国事务顾问、印尼外交政策共同体 (FPCI) 资深专家，并在多家聚焦中国事务的政策研究网络担任咨询职务。',
                ],
                'experiences' => [
                    'en' => [
                        'Supervisory Board Member, Indonesia Council of Sinologists',
                        'Senior Indonesian Expert at the China-Indonesia Industrial Cooperation Research Center, Fujian, China',
                        'Southeast Asian Experts Group, Shanxi Carbon-Peak, Carbon-Neutral Energy Revolution Research Institute (CCERR)',
                        'Senior Expert Member at the Foreign Policy Community Indonesia (FPCI), China Policy Group, Jakarta, Indonesia',
                        'Intellectual Council Member at the Chinese Indonesian Association (INTI) - Jakarta, Indonesia',
                        'Formerly Associated with Centre for Strategic and International Studies (CSIS), Indonesia',
                        'Formerly Associated with Indonesian Pluralism Institute (IPI), Indonesia',
                    ],
                    'id' => [
                        'Anggota Badan Pengawas, Indonesia Council of Sinologists',
                        'Senior Indonesian Expert di China-Indonesia Industrial Cooperation Research Center, Fujian, Tiongkok',
                        'Southeast Asian Experts Group, Shanxi Carbon-Peak, Carbon-Neutral Energy Revolution Research Institute (CCERR)',
                        'Senior Expert Member di Foreign Policy Community Indonesia (FPCI), China Policy Group, Jakarta, Indonesia',
                        'Anggota Dewan Pakar (Intellectual Council) di Perhimpunan Indonesia Tionghoa (INTI) - Jakarta, Indonesia',
                        'Sebelumnya terafiliasi dengan Centre for Strategic and International Studies (CSIS), Indonesia',
                        'Sebelumnya terafiliasi dengan Indonesian Pluralism Institute (IPI), Indonesia',
                    ],
                    'cn' => [
                        '印度尼西亚汉学家理事会监事会成员',
                        '中国福建省“中国—印尼工业合作研究中心”印尼籍资深专家',
                        '山西碳达峰碳中和能源革命研究院 (CCERR) 东南亚专家组成员',
                        '印尼外交政策共同体 (FPCI) 中国政策组资深专家成员，雅加达',
                        '印度尼西亚华裔总会 (INTI) 智库理事会成员，雅加达',
                        '曾就职于印度尼西亚战略与国际问题研究中心 (CSIS Indonesia)',
                        '曾就职于印度尼西亚多元主义研究所 (IPI)',
                    ],
                ],
                'image' => '/images/profiles/christine_tjhin.webp',
                'focus_tags' => ['Strategy & Policy', 'Institutional Relations', 'Sinology & China Affairs', 'FPCI'],
                'socials' => [
                    'linkedin' => 'https://www.linkedin.com/in/christine-susanna-tjhin-0a9557b/',
                    'instagram' => 'https://www.instagram.com/8viceofficial',
                    'email' => 'mailto:hello@8vice.com',
                ],
                'quote_title' => [
                    'en' => 'Rigorous Geopolitical Insight as the Bedrock of Resilient Bilateral Partnerships',
                    'id' => 'Wawasan Geopolitik Teruji sebagai Landasan Kemitraan Bilateral yang Tangguh',
                    'cn' => '严谨的地缘政治洞察是构建稳健双边伙伴关系的基石',
                ],
                'quote_message' => [
                    'en' => [
                        '“Promoting sustainable, strategically grounded partnerships between Indonesia and China through rigorous policy research, strategic communications, and institutional dialogue.”',
                    ],
                    'id' => [
                        '“Mendorong kemitraan strategis dan berkelanjutan antara Indonesia dan Tiongkok melalui riset kebijakan mendalam, komunikasi strategis, dan dialog institusional.”',
                    ],
                    'cn' => [
                        '“通过深入的政策研究、战略传播与高层机构对话，持续推动印中之间稳健可持续的战略伙伴关系。”',
                    ],
                ],
            ],
            (object)[
                'call_name' => 'James He',
                'title' => 'James He',
                'full_title' => 'James He',
                'chinese_name' => '何炜',
                'role' => [
                    'en' => 'Chief International Affairs Officer',
                    'id' => 'Chief International Affairs Officer',
                    'cn' => 'Chief International Affairs Officer',
                ],
                'expertise' => [
                    'en' => 'China Affairs & Industrial Collaboration',
                    'id' => 'China Affairs & Industrial Collaboration',
                    'cn' => 'China Affairs & Industrial Collaboration',
                ],
                'short_bio' => [
                    'en' => "James He (Wei He) is a cross-border specialist with extensive experience across government advisory, infrastructure finance, critical resources, and entertainment technology in Indonesia, China, and international markets.\n\nEducated in Commerce at the University of Toronto, he pairs over a decade of international business development leadership at China Film Group with strategic advisory roles spanning cybersecurity, energy collaboration, air defense MRO, and large-scale industrial localization.",
                    'id' => "James He (Wei He) adalah spesialis lintas batas dengan pengalaman luas di bidang advisori pemerintahan, pembiayaan infrastruktur, sumber daya kritis, dan teknologi hiburan di Indonesia, Tiongkok, maupun pasar internasional.\n\nBerpendidikan Commerce di University of Toronto, ia memadukan lebih dari satu dekade kepemimpinan pengembangan bisnis internasional di China Film Group dengan peran advisori strategis di bidang keamanan siber, kolaborasi energi, MRO pertahanan udara, serta lokalisasi industri berskala besar.",
                    'cn' => "何炜（James He / Wei He）是一位拥有跨国多元经验的资深顾问，业务涵盖印度尼西亚、中国及国际市场的政府事务咨询、基础设施投融资、关键矿产资源以及文化娱乐科技产业。\n\n毕业于加拿大多伦多大学商学院，他兼具十余年中国电影集团国际业务拓展领导经验以及网络安全、能源合作、防空装备 MRO 与大型产业本地化咨询实绩。",
                ],
                'experiences' => [
                    'en' => [
                        'Advisor and participant, Indonesia Cyber Security Forum (ICSF)',
                        'Senior China Affair Specialist, Gentala Institute China Desk',
                        'Air Defence Strategy and Equipment MRO Advisor, Indonesian Air Power Study Center (PSAPI)',
                        'Nuclear Technology and International Collaboration Advisor',
                        'Facilitator between Institut Teknologi PLN (IT PLN) and North China Electric Power University (NCEPU)',
                        'International Strategic Planning Consultant for Exoskeleton Technology Development, Beijing Institute of Technology (BIT)',
                        'Former Finance and Localization Consultant for Pegasus Capital International (Coal Power Plant East Kalimantan, Ulaanbaatar Tunnel Project and Nalgar Khundii Copper/Gold Mine Project.',
                        'Former Head of International Business Development, China Film Giant Screen Co., Ltd.',
                        'Former Board Member, Advanced Imaging Committee, China Society of Motion Picture and Television Engineers (CSMPTE)',
                        'Former Technology & Marketing Advisor for Cinemaxx Entertainment Project, (in Indonesia, Barco America, and Las Vegas)',
                    ],
                    'id' => [
                        'Penasihat dan partisipan, Indonesia Cyber Security Forum (ICSF)',
                        'Senior China Affair Specialist, Gentala Institute China Desk',
                        'Penasihat Strategi Pertahanan Udara dan Peralatan MRO, Indonesian Air Power Study Center (PSAPI)',
                        'Penasihat Teknologi Nuklir dan Kolaborasi Internasional',
                        'Fasilitator antara Institut Teknologi PLN (IT PLN) dan North China Electric Power University (NCEPU)',
                        'Konsultan Perencanaan Strategis Internasional untuk Pengembangan Teknologi Eksoskeleton, Beijing Institute of Technology (BIT)',
                        'Mantan Konsultan Keuangan dan Lokalisasi untuk Pegasus Capital International (PLTU Kalimantan Timur, Proyek Terowongan Ulaanbaatar, dan Proyek Tambang Tembaga/Emas Nalgar Khundii).',
                        'Mantan Head of International Business Development, China Film Giant Screen Co., Ltd.',
                        'Mantan Anggota Dewan, Advanced Imaging Committee, China Society of Motion Picture and Television Engineers (CSMPTE)',
                        'Mantan Penasihat Teknologi & Pemasaran untuk Proyek Hiburan Cinemaxx di Indonesia, Barco America, dan Las Vegas',
                    ],
                    'cn' => [
                        '印度尼西亚网络安全论坛 (ICSF) 顾问及参与专家',
                        '根塔拉研究所 (Gentala Institute) 中国部资深中国事务专家',
                        '印度尼西亚空军力量研究中心 (PSAPI) 防空战略与装备 MRO 顾问',
                        '核电技术与国际合作顾问',
                        '印尼国家电力理工学院 (IT PLN) 与华北电力大学 (NCEPU) 校际合作促进人',
                        '北京理工大学 (BIT) 外骨骼技术研发国际战略规划顾问',
                        '曾任 Pegasus Capital International 融资与本地化顾问（涵盖东加里曼丹燃煤电厂、乌兰巴托隧道工程及 Nalgar Khundii 铜金矿项目）',
                        '曾任中影巨幕有限公司 (China Film Giant Screen Co., Ltd.) 国际业务发展总监',
                        '曾任中国电影电视技术学会 (CSMPTE) 先进影像专业委员会委员',
                        '曾任印尼 Cinemaxx 娱乐项目、美国 Barco America 及拉斯维加斯院线技术与营销顾问',
                    ],
                ],
                'image' => '/images/profiles/james_he.webp',
                'focus_tags' => ['China Affairs', 'Industrial Collaboration', 'Energy & Infrastructure', 'Cyber & Defense'],
                'socials' => [
                    'linkedin' => 'https://www.linkedin.com/company/8-vice/',
                    'instagram' => 'https://www.instagram.com/8viceofficial',
                    'email' => 'mailto:hello@8vice.com',
                ],
                'quote_title' => [
                    'en' => 'Connecting Industrial Capabilities, Infrastructure Finance & Strategic Technology',
                    'id' => 'Menghubungkan Kapabilitas Industri, Pembiayaan Infrastruktur & Teknologi Strategis',
                    'cn' => '连接产业实力、基础设施融资与前沿战略科技合作',
                ],
                'quote_message' => [
                    'en' => [
                        '“Bridging international industrial capabilities, project financing, and strategic technology collaboration across Indonesia, China, and global markets.”',
                    ],
                    'id' => [
                        '“Menjembatani kapabilitas industri internasional, pembiayaan proyek infrastruktur, dan kolaborasi teknologi strategis di Indonesia, Tiongkok, dan pasar global.”',
                    ],
                    'cn' => [
                        '“横跨印尼、中国与国际市场，连接产业实操能力、基础设施投融资与战略科技合作。”',
                    ],
                ],
            ],
        ];
    }

    /**
     * 4. Five Priority Sectors & Industries (Mirrors Industries.jsx)
     */
    public static function getIndustryCoverages(): array
    {
        return [
            (object)[
                'id' => 'infrastructure',
                'num' => '01',
                'title' => [
                    'en' => 'Infrastructure & Urban Development',
                    'id' => 'Infrastruktur & Pengembangan Perkotaan',
                    'cn' => '基础设施与城市发展'
                ],
                'tagline' => [
                    'en' => 'Building connectivity for sustainable growth.',
                    'id' => 'Membangun konektivitas untuk pertumbuhan berkelanjutan.',
                    'cn' => '构建促进可持续增长的高效互联互通网络。'
                ],
                'tag' => 'High-Growth Infrastructure',
                'image' => '/images/industry_infrastructure.webp',
                'description' => [
                    'en' => 'We explore opportunities for collaboration across urban infrastructure, transportation, mobility, and city development, connecting relevant stakeholders to support project evaluation.',
                    'id' => 'Mengevaluasi peluang kolaborasi infrastruktur perkotaan, sistem transportasi publik, utilitas terbarukan, dan pengembangan kawasan industri terintegrasi.',
                    'cn' => '我们探索城市交通、公共出行、智慧城市与综合园区开发等领域的跨境合作机遇，连接政企核心资源以支持重大基础设施项目评估。'
                ],
                'highlights' => [
                    'Urban Transit, Rail & Smart Mobility Systems',
                    'Future-Ready City & Infrastructure Collaboration',
                    'Public-Private Dialogue & Stakeholder Alignment',
                    'Commercial & Industrial Zone Development'
                ]
            ],
            (object)[
                'id' => 'technology',
                'num' => '02',
                'title' => [
                    'en' => 'Technology & Digital Ecosystems',
                    'id' => 'Teknologi & Ekosistem Digital',
                    'cn' => '科技与数字化生态'
                ],
                'tagline' => [
                    'en' => 'Bringing technology and markets closer together.',
                    'id' => 'Mendekatkan teknologi mutakhir dengan kebutuhan pasar nyata.',
                    'cn' => '让前沿技术与真实市场需求紧密相连。'
                ],
                'tag' => 'Digital Economy',
                'image' => '/images/industry_technology.webp',
                'description' => [
                    'en' => 'We help explore partnerships involving digital platforms, consumer technology, payment ecosystems, and technology-enabled services, focusing on localized commercial applications.',
                    'id' => 'Mendukung kemitraan platform digital, teknologi konsumen, infrastruktur pembayaran lintas negara, serta integrasi AI dan SaaS korporasi.',
                    'cn' => '协助探索涵盖数字平台、消费电子、跨境支付生态及技术驱动型服务的战略合作，重点推进本土商业化应用与生态共建。'
                ],
                'highlights' => [
                    'Digital Platforms & Cross-Border Payment Ecosystems',
                    'Consumer Electronics & Smart Connected Devices',
                    'Enterprise Software, AI & Educational Technology',
                    'Technology Commercialization & Local Partnering'
                ]
            ],
            (object)[
                'id' => 'tourism',
                'num' => '03',
                'title' => [
                    'en' => 'Tourism, Travel & Hospitality',
                    'id' => 'Pariwisata, Perjalanan & Perhotelan',
                    'cn' => '文旅、出行与高端酒店业'
                ],
                'tagline' => [
                    'en' => 'Creating connections through travel and destination experiences.',
                    'id' => 'Menciptakan jembatan pertukaran budaya dan pengalaman destinasi bernilai tinggi.',
                    'cn' => '以卓越的旅行体验与目的地交流搭建双边桥梁。'
                ],
                'tag' => 'Bilateral Tourism',
                'image' => '/images/industry_tourism.webp',
                'description' => [
                    'en' => 'We support tourism-related collaboration through destination promotion, travel industry partnerships, visitor engagement initiatives, and MICE development connecting Indonesia with Chinese markets.',
                    'id' => 'Memfasilitasi promosi destinasi terpadu, kemitraan rantai perhotelan internasional, pengembangan MICE, dan pembukaan akses wisatawan Tiongkok ke destinasi Indonesia.',
                    'cn' => '通过目的地推广、国际酒店集团合作、定制旅行体验及大型会奖旅游 (MICE) 促进印尼与中国文旅产业的深度对接。'
                ],
                'highlights' => [
                    'Bilateral Destination Promotion & Marketing',
                    'Luxury Hospitality, Resort & Travel Partnerships',
                    'MICE, Inbound Tourism Conferences & Delegations',
                    'Visitor Experience & Digital Tourism Ecosystems'
                ]
            ],
            (object)[
                'id' => 'creative',
                'num' => '04',
                'title' => [
                    'en' => 'Creative Economy & Lifestyle',
                    'id' => 'Ekonomi Kreatif & Gaya Hidup',
                    'cn' => '创意经济与现代生活方式'
                ],
                'tagline' => [
                    'en' => 'Connecting culture, creativity, and commercial opportunity.',
                    'id' => 'Memadukan ekspresi budaya, kekayaan intelektual, dan peluang komersial.',
                    'cn' => '融汇文化表达、创意IP与多元商业价值。'
                ],
                'tag' => 'Culture & Lifestyle',
                'image' => '/images/industry_creative.webp',
                'description' => [
                    'en' => 'We explore collaboration across fashion, crafts, culinary, film, music, games, applications, and creative IP, supporting market positioning and brand partnerships.',
                    'id' => 'Mendorong kolaborasi lintas batas industri fesyen, kriya, kuliner, lisensi film & animasi, gaming, dan sindikasi kekayaan intelektual (IP).',
                    'cn' => '推动时尚设计、现代手工艺、特色餐饮、影视动漫、游戏娱乐及数字IP版权授权的跨国合作，赋能品牌市场定位。'
                ],
                'highlights' => [
                    'Film, Animation, Digital Media & IP Collaboration',
                    'Fashion, Crafts, Culinary & Contemporary Lifestyle',
                    'Interactive Entertainment, Gaming & Mobile Apps',
                    'Cross-Border Brand Partnerships & Cultural Showcases'
                ]
            ],
            (object)[
                'id' => 'trade',
                'num' => '05',
                'title' => [
                    'en' => 'Trade & Consumer Goods',
                    'id' => 'Perdagangan & Barang Konsumsi',
                    'cn' => '双边贸易与消费品供应链'
                ],
                'tagline' => [
                    'en' => 'Helping businesses find new commercial pathways.',
                    'id' => 'Membuka jalur komersial dan rantai distribusi ritel yang berdaya saing.',
                    'cn' => '为企业开拓高效、具竞争力的跨境商业渠道。'
                ],
                'tag' => 'Market Expansion',
                'image' => '/images/industry_trade.webp',
                'description' => [
                    'en' => 'We help businesses explore distribution partnerships, product localization, market positioning, and commercial channels for cross-border trade relationships.',
                    'id' => 'Mendukung penetrasi produk konsumen, pemilihan distributor nasional, lokalisasi sertifikasi (BPOM/Halal), dan efisiensi logistik perdagangan bilateral.',
                    'cn' => '协助企业拓展全国性分销网络、产品本土化准入（BPOM/清真认证）、品牌定位以及端到端双边供应链贸易支持。'
                ],
                'highlights' => [
                    'Strategic Distribution & Retail Channel Partnerships',
                    'Brand Localization & Consumer Market Positioning',
                    'Cross-Border Supply Chain & Trade Facilitation',
                    'B2B Matchmaking for Consumer & Commercial Brands'
                ]
            ]
        ];
    }

    /**
     * 5. Insights & Articles (Including the Flagship China Research Paper)
     */
    public static function getInsights(): array
    {
        return [
            (object)[
                'cat' => 'China Research & Industrial Strategy',
                'rt' => '15 min read · 58-Page Paper',
                't' => 'China–Indonesia Industrial Relocation & Cross-Border Supply Chain Blueprint (2026–2030)',
                'slug' => 'china-cross-border-industrial-blueprint-2026',
                'cover' => '/images/china_city_network.webp',
                'date' => 'October 2026',
                'author_name' => '8 Vice Strategic Research Desk',
                'author_role' => 'Industrial Practice & Macro Corridor Intelligence',
                'excerpt' => 'An empirical research paper benchmarking 120+ Chinese enterprises establishing manufacturing hubs in Kendal, Batang, Cikarang, and Morowali: TKDN regulatory compliance formulas, industrial estate siting costs, logistics tariffs, and joint-venture governance.',
                'body' => null,
                'is_research_paper' => true,
                'research_paper_link' => 'https://8vice.id/checkout/china-cross-border-blueprint',
                'paper_meta' => [
                    'pages' => 58,
                    'format' => 'PDF (Print-Ready A4, 300 DPI) + Raw Model (.XLSX)',
                    'price_idr' => 1490000,
                    'price_idr_corp' => 7490000,
                    'price_usd' => 99,
                    'price_usd_corp' => 499,
                    'is_locked' => true
                ]
            ],
            (object)[
                'cat' => 'Automotive & Energy',
                'rt' => '8 min read',
                't' => "Indonesia's 40% TKDN Mandate: The Strategic Supply Chain Playbook for Chinese EV & Battery Manufacturers",
                'slug' => 'indonesia-ev-battery-supply-chain-tkdn-mandate',
                'cover' => '/images/cases/manufacturing.webp',
                'date' => 'October 2026',
                'author_name' => 'Helda Chandra',
                'author_role' => 'Managing Partner & Industrial Practice Lead',
                'excerpt' => 'How Chinese OEMs and tier-1 battery suppliers in Cikarang, Kendal, and Morowali balance mandatory local content thresholds (TKDN), raw material processing, and tax incentive eligibility without losing manufacturing velocity.',
                'body' => null,
            ],
            (object)[
                'cat' => 'Digital Commerce',
                'rt' => '7 min read',
                't' => 'The Live-Commerce & Permendag 31 Playbook: Re-Architecting Cross-Border E-Commerce in Indonesia',
                'slug' => 'indonesia-cross-border-ecommerce-permendag-live-selling',
                'cover' => '/images/cases/retail.webp',
                'date' => 'September 2026',
                'author_name' => 'Wei Chen',
                'author_role' => 'Head of Cross-Border Commerce',
                'excerpt' => 'Why direct-to-consumer cross-border shipping is obsolete under Permendag 31, and how top Chinese consumer brands build local PT PMA entities, bonded warehousing, BPOM certification, and TikTok/Tokopedia creator operations.',
                'body' => null,
            ],
            (object)[
                'cat' => 'Policy & Strategy',
                'rt' => '6 min read',
                't' => "Mastering Indonesia's Personal Data Protection (UU PDP): Compliance Roadmaps for Enterprise SaaS & Cloud Platforms",
                'slug' => 'uu-pdp-indonesia-enterprise-saas-cloud-compliance',
                'cover' => '/images/challenges_insights.webp',
                'date' => 'August 2026',
                'author_name' => 'Ahmad Rizky',
                'author_role' => 'Senior Regulatory & Technology Advisor',
                'excerpt' => 'A pragmatic compliance guide to Law No. 27/2022 (UU PDP): local data residency mandates, mandatory Data Protection Officer (DPO) appointments, and cross-border data transfer protocols for multinational software providers.',
                'body' => null,
            ],
            (object)[
                'cat' => 'Operations & Supply Chain',
                'rt' => '11 min read',
                't' => 'Industrial Estate Site Selection in Java vs. Outer Islands: Labor Productivity, Infrastructure, and Port Access',
                'slug' => 'indonesia-industrial-park-site-selection-java-kendal-batang',
                'cover' => '/images/project_analysis.webp',
                'date' => 'July 2026',
                'author_name' => 'Li Jianhua',
                'author_role' => 'Industrial Strategy Director',
                'excerpt' => 'A comparative benchmark of Central Java (Kendal, Batang), West Java (Subang Smartpolitan, Karawang), and Sulawesi for manufacturing relocations: minimum wages, logistics bottlenecks, power stability, and customs clearance.',
                'body' => null,
            ],
            (object)[
                'cat' => 'Consumer & Retail',
                'rt' => '9 min read',
                't' => 'Beyond Greater Jakarta: Cracking Second- and Third-Tier Consumer Markets in Java and Sumatra',
                'slug' => 'tier-2-tier-3-indonesia-consumer-markets-distribution',
                'cover' => '/images/video_manifesto_cover.webp',
                'date' => 'June 2026',
                'author_name' => 'Siti Nurhaliza',
                'author_role' => 'Consumer Insights Lead',
                'excerpt' => 'Why marketing playbooks designed for Jakarta fail in Solo, Malang, and Lampung. How localized price points (sub-Rp 100.000), cash-on-delivery channels, and traditional warung distributor networks unlock 200M+ consumers.',
                'body' => null,
            ],
            (object)[
                'cat' => 'Finance & Tech',
                'rt' => '7 min read',
                't' => 'Cross-Border Payments: The Future of Indonesia-China QRIS & Local Currency Settlement',
                'slug' => 'cross-border-payments-qris',
                'cover' => '/images/insights/qris.webp',
                'date' => 'May 2026',
                'author_name' => '8vice Research Desk',
                'author_role' => 'Fintech Advisory Practice',
                'excerpt' => 'How Bank Indonesia and PBOC\'s bilateral QR code interoperability and Local Currency Settlement (LCS) framework eliminate FX friction for cross-border tourism, fintech wallets, and international trade settlement.',
                'body' => null,
            ],
            (object)[
                'cat' => 'Policy & Strategy',
                'rt' => '10 min read',
                't' => 'Decoding China\'s 15th 5-Year Plan: Strategic Implications for Southeast Asian Corridors',
                'slug' => 'decoding-china-5-year-plan',
                'cover' => '/images/insights/5_year_plan.webp',
                'date' => 'April 2026',
                'author_name' => '8vice Research Desk',
                'author_role' => 'Global Macro Team',
                'excerpt' => 'An executive briefing on Beijing\'s latest industrial restructuring policies, outbound green energy capital, advanced manufacturing shifts, and their direct intersection with Indonesia\'s Golden Vision 2045.',
                'body' => null,
            ],
            (object)[
                'cat' => 'Diplomacy & Trade',
                'rt' => '6 min read',
                't' => 'A New Chapter in ASEAN-China Comprehensive Strategic Partnership & RCEP Tariff Utilization',
                'slug' => 'asean-china-strategic-partnership',
                'cover' => '/images/insights/asean_china.webp',
                'date' => 'March 2026',
                'author_name' => '8vice Research Desk',
                'author_role' => 'Trade Policy Practice',
                'excerpt' => 'Unlocking zero-tariff schedules and non-tariff streamlining under RCEP to accelerate two-way trade between Indonesian commodity processing and China\'s industrial supply chains.',
                'body' => null,
            ]
        ];
    }

    /**
     * 6. Case Studies
     */
    public static function getCaseStudies(): array
    {
        return [
            (object)[
                'tag' => ['en' => 'Fintech · Market Entry', 'id' => 'Fintech · Penetrasi Pasar', 'cn' => '金融科技 · 市场准入'],
                'slug' => 'chinese-fintech-live-in-6-months',
                'cover' => '/images/cases/fintech.webp',
                'h' => ['en' => 'A Chinese Fintech, Live in 6 Months.', 'id' => 'Fintech Tiongkok, Beroperasi Penuh dalam 6 Bulan.', 'cn' => '中国金融科技企业，6个月全面落地运营。'],
                'p' => ['en' => 'Market entry, licensing pathway, and a local operating team - from scoping to launch.', 'id' => 'Penetrasi pasar, perizinan berjenjang, dan tim operasional lokal — dari perencanaan hingga peluncuran.', 'cn' => '从前期调研到正式运营：合规牌照梳理、本土银行合作与核心运营团队构建。'],
                'is_featured' => true,
                'metrics' => [
                    ['value' => '6', 'unit' => 'mo', 'label_en' => 'Scoping to launch', 'label_id' => 'Dari scoping hingga peluncuran', 'label_cn' => '从立项调研到商用上线'],
                    ['value' => '3', 'unit' => '×', 'label_en' => 'Faster than prior attempts', 'label_id' => 'Lebih cepat dari upaya sebelumnya', 'label_cn' => '落地效率较以往提升3倍'],
                    ['value' => '14', 'unit' => '', 'label_en' => 'Local hires onboarded', 'label_id' => 'Tim lokal berhasil direkrut', 'label_cn' => '本土核心运营团队入职'],
                    ['value' => '1', 'unit' => '', 'label_en' => 'License correctly sequenced', 'label_id' => 'Izin usaha diurus dengan urutan tepat', 'label_cn' => '合规牌照精准按序落地'],
                ],
                'corridor' => ['en' => 'China & Global → Indonesia', 'id' => 'Tiongkok & Global → Indonesia', 'cn' => '中国及全球 → 印度尼西亚'],
                'capabilities' => ['en' => 'Market Entry, Regulatory Navigation, Team Building & Strategic Scaling', 'id' => 'Penetrasi Pasar, Navigasi Regulasi, Pembentukan Tim & Penskalaan Strategis', 'cn' => '市场准入策略、监管牌照导航、本土团队组建与战略性业务扩展'],
                'body' => null,
            ],
            (object)[
                'tag' => ['en' => 'Consumer Tech · Retail', 'id' => 'Teknologi Konsumen · Ritel', 'cn' => '消费电子 · 零售渠道'],
                'slug' => 'shelf-to-scale-across-40-cities',
                'cover' => '/images/cases/retail.webp',
                'h' => ['en' => 'Shelf to Scale Across 40 Indonesian Cities.', 'id' => 'Ekspansi Distribusi Ritel ke 40 Kota di Indonesia.', 'cn' => '全渠道零售覆盖：进驻印尼40座城市商圈。'],
                'p' => ['en' => 'Distribution strategy and channel partnerships built around Indonesian buying behaviour.', 'id' => 'Strategi distribusi menyeluruh dan kemitraan kanal yang disesuaikan dengan pola belanja konsumen Indonesia.', 'cn' => '深度契合印尼消费者购买习惯的全渠道分销策略与区域总代商业联盟。'],
                'is_featured' => false,
                'metrics' => [
                    ['value' => '40+', 'unit' => 'cities', 'label_en' => 'Tier-1 to tier-3 coverage', 'label_id' => 'Cakupan kota tier-1 hingga tier-3', 'label_cn' => '覆盖一至三线核心城市'],
                    ['value' => '180', 'unit' => 'days', 'label_en' => 'From signing to shelf presence', 'label_id' => 'Dari penandatanganan hingga ada di rak', 'label_cn' => '从协议签署到全面进驻货架用时'],
                    ['value' => '9', 'unit' => 'distributors', 'label_en' => 'Regional partners signed', 'label_id' => 'Mitra regional ditandatangani', 'label_cn' => '签署省级一级总代协议'],
                ],
                'corridor' => ['en' => 'Shenzhen → Jakarta, Surabaya & Outer Islands', 'id' => 'Shenzhen → Jakarta, Surabaya & Luar Jawa', 'cn' => '深圳 → 雅加达、泗水及外岛核心城市'],
                'capabilities' => ['en' => 'Distribution Strategy, Channel Partner Selection, Retail Localization', 'id' => 'Strategi Distribusi, Seleksi Mitra Kanal, Lokalisasi Ritel', 'cn' => '全渠道分销策略、渠道伙伴严格筛选、本土零售与售后网络布局'],
                'body' => null,
            ],
            (object)[
                'tag' => ['en' => 'Manufacturing · Operations', 'id' => 'Manufaktur · Operasional', 'cn' => '高端制造 · 运营合规'],
                'slug' => 'local-production-de-risked',
                'cover' => '/images/cases/manufacturing.webp',
                'h' => ['en' => 'Local Production, De-Risked.', 'id' => 'Manufaktur Lokal, Bebas Risiko.', 'cn' => '制造业本土化落地：全程风险缓释。'],
                'p' => ['en' => 'Site selection, regulatory navigation, and a resilient supply chain for an industrial entrant.', 'id' => 'Pemilihan lokasi pabrik, kepatuhan regulasi TKDN, dan perancangan rantai pasok tangguh bagi industri manufaktur.', 'cn' => '工业园区选址评估、40% TKDN 国产化率达标与供应链韧性重构。'],
                'is_featured' => false,
                'metrics' => [
                    ['value' => '40%', 'unit' => 'TKDN', 'label_en' => 'Target achieved in year 1', 'label_id' => 'Target tercapai pada tahun pertama', 'label_cn' => '首年达成国家认证国产化率指标'],
                    ['value' => '3', 'unit' => 'zones', 'label_en' => 'Industrial parks evaluated', 'label_id' => 'Kawasan industri dievaluasi', 'label_cn' => '深入比对三处国家级特区工业园'],
                    ['value' => '450+', 'unit' => 'jobs', 'label_en' => 'Local manufacturing roles created', 'label_id' => 'Lapangan kerja lokal tercipta', 'label_cn' => '创造本土高质量产业制造岗位'],
                ],
                'corridor' => ['en' => 'Jiangsu → Central Java Industrial Corridor', 'id' => 'Jiangsu → Koridor Industri Jawa Tengah', 'cn' => '江苏 → 中爪哇核心工业园区走廊'],
                'capabilities' => ['en' => 'Site Selection, Supply Chain Localization, Labor Regulatory Advisory', 'id' => 'Pemilihan Lokasi Pabrik, Lokalisasi Rantai Pasok, Regulasi Ketenagakerjaan', 'cn' => '工业园区选址分析、本土供应链配套、劳工与环境合规咨询'],
                'body' => null,
            ],
            (object)[
                'tag' => ['en' => 'Enterprise SaaS · Tech', 'id' => 'SaaS Korporat · Teknologi', 'cn' => '企业级SaaS · 数字化'],
                'slug' => 'enterprise-saas-cross-border-collaboration',
                'cover' => '/images/challenges_insights.webp',
                'h' => ['en' => 'Enterprise SaaS Localization Without Data Friction.', 'id' => 'Lokalisasi SaaS Korporat Tanpa Hambatan Kedaulatan Data.', 'cn' => '企业级软件本土化：化解数据出境合规阻碍。'],
                'p' => ['en' => 'Data sovereignty compliance, enterprise sales playbook, and multinational team collaboration.', 'id' => 'Kepatuhan UU PDP, strategi penjualan B2B korporasi, dan integrasi kolaborasi tim lintas batas.', 'cn' => '印尼个人数据保护法 (UU PDP) 严格合规、大型企业客群销售打法与双语技术协同。'],
                'is_featured' => false,
                'metrics' => [
                    ['value' => '100%', 'unit' => 'compliant', 'label_en' => 'UU PDP and BI data residency', 'label_id' => 'Kepatuhan penuh UU PDP & BI', 'label_cn' => '通过印尼个人数据保护法与央行审查'],
                    ['value' => '12', 'unit' => 'pilots', 'label_en' => 'Enterprise POCs secured in 90 days', 'label_id' => 'POC korporat diraih dalam 90 hari', 'label_cn' => '90天内落地大型集团概念验证项目 (POC)'],
                ],
                'corridor' => ['en' => 'Hangzhou → Jakarta Financial Sector', 'id' => 'Hangzhou → Sektor Finansial Jakarta', 'cn' => '杭州 → 雅加达金融与企业核心圈'],
                'capabilities' => ['en' => 'Regulatory Compliance, Enterprise Go-to-Market, Data Sovereignty', 'id' => 'Kepatuhan Regulasi, Go-to-Market Korporat, Kedaulatan Data', 'cn' => '数据合规监管审查、企业级 GTM 拓展战略、本土云服务混合架构设计'],
                'body' => null,
            ],
            (object)[
                'tag' => ['en' => 'Creative IP · Media', 'id' => 'IP Kreatif · Media', 'cn' => '数字文化IP · 影视文娱'],
                'slug' => 'digital-ip-and-entertainment-syndication',
                'cover' => '/images/video_manifesto_cover.webp',
                'h' => ['en' => 'Syndicating Global Creative IP to Indonesian Audiences.', 'id' => 'Sindikasi Konten Kreatif dan IP Global untuk Pemirsa Indonesia.', 'cn' => '全球文创数字IP发行：深度融入印尼大众受众。'],
                'p' => ['en' => 'Broadcast licensing, localized dubbing & cultural resonance, and multi-platform distribution.', 'id' => 'Perizinan sensor siaran LSF, lokalisasi pengalihan suara & budaya, serta sindikasi multiplatform digital.', 'cn' => '印尼国家电影审查局 (LSF) 牌照合规、高水准印尼语配音与本土消费品衍生授权。'],
                'is_featured' => false,
                'metrics' => [
                    ['value' => '15M+', 'unit' => 'views', 'label_en' => 'Total reach across broadcast & OTT', 'label_id' => 'Jangkauan tayang di TV & OTT', 'label_cn' => '全国电视台与流媒体平台累计播放量'],
                    ['value' => '4', 'unit' => 'networks', 'label_en' => 'Major broadcasting partners onboard', 'label_id' => 'Mitra stasiun TV nasional', 'label_cn' => '达成协议的印尼主流广播与流媒体平台'],
                ],
                'corridor' => ['en' => 'Changsha / Beijing → Indonesia Digital Entertainment', 'id' => 'Changsha / Beijing → Hiburan Digital Indonesia', 'cn' => '长沙 / 北京 → 印尼全域数字娱乐生态'],
                'capabilities' => ['en' => 'Content Licensing, Media Relations, Cultural Adaptation', 'id' => 'Lisensi Konten, Relasi Media, Adaptasi Budaya', 'cn' => '数字内容出海版权运营、主流传媒公关、跨文化本土化适配与衍生品商业化'],
                'body' => null,
            ],
        ];
    }

    /**
     * 7. Site Settings & Office Coordinates
     */
    public static function getSiteSettings(): object
    {
        return (object)[
            'address' => 'SOHO Building, Jl. Letjen M.T. Haryono No.Kav. 2, RT.1/RW.6, Tebet Bar., Kec. Pancoran, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12810',
            'email' => 'hello@8vice.com',
            'maps_link' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2023023055375!2d106.84074217499052!3d-6.237039593751147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3b9259615c5%3A0x1fa5a36bd5f609ec!2sSOHO%20Pancoran!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid',
            'instagram_url' => 'https://www.instagram.com/8viceofficial',
            'linkedin_url' => 'https://www.linkedin.com/company/8-vice/',
            'whatsapp_url' => 'https://wa.me/628118005110',
            'wechat_url' => null,
            'wechat_qr' => '/images/wechat.webp',
            'wechat_id' => 'eightvice',
            'youtube_url' => null,
            'google_analytics' => null,
            'google_search_console' => '<meta name="google-site-verification" content="mxE9QUV2EQe_-xB0JEapaMjC2zKSjKxAKGtgNyPVwxs" />',
            'google_tag_manager' => 'GTM-W8QBG2XZ',
            'meta_pixels' => '123456789012345',
            'macro_stat_value' => '$130B',
            'macro_stat_label' => 'Bilateral Indonesia–China cross-border tech, infrastructure & retail opportunity in 2026',
            'tagline' => [
                'en' => "Your Strategic Gateway to Indonesia and China.",
                'id' => "Gerbang Strategis Anda Menuju Indonesia dan Tiongkok.",
                'cn' => "连接印尼与中国的战略商业门户。"
            ],
            'footer_description' => [
                'en' => '8 Vice is an Indonesia–China strategic advisory and business development firm helping enterprises navigate market entry, institutional engagement, and bilateral partnerships. With over two decades of cross-border experience, we bridge commercial ambition with practical execution on the ground.',
                'id' => '8 Vice adalah firma penasihat strategis dan pengembangan bisnis Indonesia–Tiongkok yang mendampingi perusahaan menavigasi masuk pasar, hubungan kelembagaan, dan kemitraan bilateral. Berbekal pengalaman lintas batas lebih dari dua dekade, kami menjembatani ambisi komersial dengan eksekusi nyata di lapangan.',
                'cn' => '8 Vice 是一家专注于印尼与中国的双边战略咨询及业务拓展机构，致力于协助企业把握市场准入、政企关系与跨境合作机遇。凭借二十余年的双边实战积淀，我们将企业的商业愿景转化为务实高效的本土落地执行。',
            ]
        ];
    }

    /**
     * 8. Statistics Metrics
     */
    public static function getStatistics(): array
    {
        return [
            (object)[
                'title' => ['en' => '25+', 'id' => '25+', 'cn' => '25+'],
                'description' => [
                    'en' => 'Years combined partner advisory experience',
                    'id' => 'Tahun pengalaman kolektif tim penasihat mitra',
                    'cn' => '合伙人团队累计跨国战略咨询经验（年）',
                ],
                'image' => null,
            ],
            (object)[
                'title' => ['en' => '30+', 'id' => '30+', 'cn' => '30+'],
                'description' => [
                    'en' => 'Cross-border multinational clients & partner institutions',
                    'id' => 'Klien multinasional lintas batas & institusi mitra',
                    'cn' => '服务的跨国领军企业与双边合作机构',
                ],
                'image' => null,
            ],
            (object)[
                'title' => ['en' => '6', 'id' => '6', 'cn' => '6'],
                'description' => [
                    'en' => 'Integrated strategic service pillars',
                    'id' => 'Pilar layanan strategis terintegrasi',
                    'cn' => '六大一体化核心战略服务支柱',
                ],
                'image' => null,
            ],
            (object)[
                'title' => ['en' => '5', 'id' => '5', 'cn' => '5'],
                'description' => [
                    'en' => 'Key bilateral industry focus sectors',
                    'id' => 'Sektor industri prioritas bilateral utama',
                    'cn' => '五大中印尼双边重点聚焦产业领域',
                ],
                'image' => null,
            ],
        ];
    }

    /**
     * 9. Careers / Hiring
     */
    public static function getCareers(): array
    {
        return [
            (object)[
                'title' => [
                    'en' => 'Senior Cross-Border Strategic Advisor',
                    'id' => 'Senior Cross-Border Strategic Advisor',
                    'cn' => '高级跨境战略顾问'
                ],
                'dept' => [
                    'en' => 'Advisory Practice',
                    'id' => 'Praktik Konsultasi (Advisory)',
                    'cn' => '战略咨询业务部'
                ],
                'type' => [
                    'en' => 'Full-time',
                    'id' => 'Purna Waktu (Full-time)',
                    'cn' => '全职'
                ],
                'location' => [
                    'en' => 'Jakarta, Indonesia (SOHO Pancoran)',
                    'id' => 'Jakarta, Indonesia (SOHO Pancoran)',
                    'cn' => '雅加达，印度尼西亚 (SOHO Pancoran)'
                ],
                'reqs' => [
                    'en' => ['4+ years in management consulting or corporate expansion', 'Fluent in Mandarin, English, and Bahasa Indonesia', 'Strong familiarity with Indonesian investment licensing & PT PMA regulations'],
                    'id' => ['4+ tahun pengalaman dalam konsultasi manajemen atau ekspansi korporat', 'Fasih berbahasa Mandarin, Inggris, dan Bahasa Indonesia', 'Memahami regulasi perizinan investasi Indonesia & pendirian PT PMA'],
                    'cn' => ['4年以上管理咨询或企业出海扩张经验', '精通中文、英语及印尼语（听说读写）', '深入熟悉印尼投资审批流程与外资公司 (PT PMA) 设立法规']
                ],
                'description' => [
                    'en' => 'Lead market entry assessments, regulatory roadmaps, and high-level bilateral commercial matchmaking for Chinese multinational enterprises expanding into Indonesia.',
                    'id' => 'Memimpin evaluasi penetrasi pasar, peta jalan regulasi, dan pencocokan komersial bilateral tingkat tinggi bagi perusahaan multinasional Tiongkok yang berekspansi ke Indonesia.',
                    'cn' => '主导中国跨国企业拓展印尼市场的准入评估、合规路线图制定及高层双边商业配对工作。'
                ],
            ],
            (object)[
                'title' => [
                    'en' => 'China Market & Macro Research Analyst',
                    'id' => 'China Market & Macro Research Analyst',
                    'cn' => '中国市场与宏观经济研究分析师'
                ],
                'dept' => [
                    'en' => 'Strategic Research Desk',
                    'id' => 'Meja Riset Strategis',
                    'cn' => '战略研究部'
                ],
                'type' => [
                    'en' => 'Full-time',
                    'id' => 'Purna Waktu (Full-time)',
                    'cn' => '全职'
                ],
                'location' => [
                    'en' => 'Jakarta, Indonesia',
                    'id' => 'Jakarta, Indonesia',
                    'cn' => '雅加达，印度尼西亚'
                ],
                'reqs' => [
                    'en' => ['Mandarin fluency (written & spoken)', 'Experience in industrial policy and cross-border trade analysis', 'Strong qualitative & financial modeling capabilities'],
                    'id' => ['Fasih berbahasa Mandarin (lisan & tulisan)', 'Pengalaman dalam kebijakan industri dan analisis perdagangan lintas batas', 'Kemampuan pemodelan keuangan & kualitatif yang kuat'],
                    'cn' => ['精通中文（听说读写）', '具有产业政策与跨境经贸分析经验', '具备扎实的定性研究与财务建模能力']
                ],
                'description' => [
                    'en' => 'Produce authoritative market intelligence reports, industrial relocation blueprints, and executive briefs covering the Indonesia–China commercial corridor.',
                    'id' => 'Menyusun laporan intelijen pasar otoritatif, cetak biru relokasi industri, dan ringkasan eksekutif koridor komersial Indonesia–Tiongkok.',
                    'cn' => '撰写权威市场洞察报告、产业转移出海蓝图，以及覆盖印尼—中国商业走廊的高管决策简报。'
                ],
            ],
            (object)[
                'title' => [
                    'en' => 'Strategic Communications & PR Associate',
                    'id' => 'Strategic Communications & PR Associate',
                    'cn' => '战略传播与公共关系专员'
                ],
                'dept' => [
                    'en' => 'Communications & Media',
                    'id' => 'Komunikasi & Media',
                    'cn' => '传播与媒体事务部'
                ],
                'type' => [
                    'en' => 'Full-time',
                    'id' => 'Purna Waktu (Full-time)',
                    'cn' => '全职'
                ],
                'location' => [
                    'en' => 'Jakarta, Indonesia',
                    'id' => 'Jakarta, Indonesia',
                    'cn' => '雅加达，印度尼西亚'
                ],
                'reqs' => [
                    'en' => ['2+ years in corporate PR or media agency', 'Established relationships with Indonesian tier-1 business media', 'Experience in brand localization and executive reputation management'],
                    'id' => ['2+ tahun di PR korporat atau agensi media', 'Memiliki relasi kuat dengan media bisnis tier-1 Indonesia', 'Pengalaman dalam lokalisasi brand dan manajemen reputasi eksekutif'],
                    'cn' => ['2年以上企业公关或传媒机构经验', '与印尼一线主流财经商业媒体建立良好合作关系', '具备品牌本土化传播与企业高管声誉管理经验']
                ],
                'description' => [
                    'en' => 'Execute high-impact press conferences, media roundtables, and localized brand positioning campaigns for international market entrants.',
                    'id' => 'Mengeksekusi konferensi pers berdampak tinggi, temu media, dan kampanye positioning merek lokal bagi pendatang pasar internasional.',
                    'cn' => '为进入印尼市场的跨国企业统筹高影响力新闻发布会、媒体圆桌会及本土化品牌定位传播活动。'
                ],
            ],
        ];
    }

    /**
     * 10. Courses (Executive Training)
     */
    public static function getCourses(): array
    {
        return [
            (object)[
                'id' => 1,
                'cat' => 'Executive Masterclass',
                'title' => 'Cross-Cultural Team Management for Global Enterprises',
                'slug' => 'cross-cultural-team-management',
                'free' => true,
                'price' => 'Free',
                'desc' => 'Bridging corporate headquarters with Indonesian workplace dynamics, labor compliance, and talent retention.',
                'dur' => '1h 30m',
                'lessons' => '6 executive modules',
                'cover' => 'COURSE · leadership team',
            ],
            (object)[
                'id' => 2,
                'cat' => 'Regulatory & Licensing',
                'title' => 'Navigating Indonesian Business Licensing & KBLI Codes',
                'slug' => 'navigating-indonesian-business-licensing',
                'free' => false,
                'price' => 'Rp 750.000',
                'desc' => 'OSS-RBA, mandatory local content (TKDN), PT PMA structures, and permits foreign enterprises most often get wrong.',
                'dur' => '2h 15m',
                'lessons' => '10 modules',
                'cover' => 'COURSE · regulatory documents',
            ],
            (object)[
                'id' => 3,
                'cat' => 'E-Commerce & Digital',
                'title' => 'The Permendag 31 & Localized E-Commerce Playbook',
                'slug' => 'ecommerce-marketplace-playbook',
                'free' => false,
                'price' => 'Rp 500.000',
                'desc' => 'Mastering TikTok Shop, Tokopedia, and Shopee algorithms with compliant Indonesian PT entities and bonded warehousing.',
                'dur' => '2h 45m',
                'lessons' => '12 modules',
                'cover' => 'COURSE · live selling studio',
            ]
        ];
    }
}
