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
                    'id' => 'Konsultasi Strategis & Ekspansi Pasar'
                ],
                'summary' => [
                    'en' => 'Helping businesses evaluate cross-border opportunities, understand commercial dynamics, and formulate executable market entry roadmaps.',
                    'id' => 'Membantu organisasi mengevaluasi peluang lintas negara, memahami dinamika komersial, dan menyusun peta jalan ekspansi yang terukur.'
                ],
                'headline' => [
                    'en' => 'Enter New Markets with Greater Clarity.',
                    'id' => 'Masuki Pasar Baru dengan Kejelasan Strategis.'
                ],
                'hero_image' => '/images/china_tech_hub.webp',
                'detail_image' => '/images/consultation_advisory_bw.webp',
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
                    'id' => 'Hubungan Pemerintah & Pemangku Kepentingan'
                ],
                'summary' => [
                    'en' => 'Supporting stakeholder mapping, institutional engagement, and public-private dialogue through appropriate and transparent channels.',
                    'id' => 'Pemetaan pemangku kepentingan, pelibatan kelembagaan, dan dialog publik-swasta melalui jalur resmi dan transparan.'
                ],
                'headline' => [
                    'en' => 'Building Trust with Institutions and Regulators.',
                    'id' => 'Membangun Kepercayaan dengan Institusi dan Regulator.'
                ],
                'hero_image' => '/images/city_orbiting_cards.webp',
                'detail_image' => '/images/executive_red_cards.webp',
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
                    'id' => 'Pencocokan Bisnis & Kemitraan Strategis'
                ],
                'summary' => [
                    'en' => 'Connecting businesses with relevant commercial partners, distributors, investors, and industry stakeholders across Indonesia and China.',
                    'id' => 'Menghubungkan korporasi dengan mitra komersial, distributor, investor, dan pelaku industri yang relevan.'
                ],
                'headline' => [
                    'en' => 'Connect with the Right Partners at the Right Level.',
                    'id' => 'Terhubung dengan Mitra yang Tepat pada Tingkat yang Tepat.'
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
                    'id' => 'Komunikasi Strategis & Positioning Pasar'
                ],
                'summary' => [
                    'en' => 'Positioning corporate brands, shaping narrative resonance, and delivering impactful communications strategies in local contexts.',
                    'id' => 'Positioning korporat, narasi merek bernilai tinggi, dan strategi komunikasi yang mengakar pada konteks lokal.'
                ],
                'headline' => [
                    'en' => 'Communicate with Purpose, Cultural Context, and Impact.',
                    'id' => 'Berkomunikasi dengan Tujuan, Konteks Budaya, dan Dampak.'
                ],
                'hero_image' => '/images/industry_creative.webp',
                'detail_image' => '/images/consultation_advisory_bw.webp',
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
                    'id' => 'Hubungan Media & Komunikasi Krisis'
                ],
                'summary' => [
                    'en' => 'Building credible media relationships, managing press strategy, and safeguarding corporate reputation in critical moments.',
                    'id' => 'Membangun relasi media kredibel, mengelola strategi pers, dan melindungi reputasi korporat di situasi krusial.'
                ],
                'headline' => [
                    'en' => 'Earned Media Credibility and Resilient Reputation Protection.',
                    'id' => 'Kredibilitas Media dan Perlindungan Reputasi yang Tangguh.'
                ],
                'hero_image' => '/images/media_relations_press_hero.webp',
                'detail_image' => '/images/executive_red_cards.webp',
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
                    'id' => 'Fasilitasi Investasi & Pengembangan Bisnis'
                ],
                'summary' => [
                    'en' => 'Supporting investment opportunity assessment, commercial proposal development, and project coordination from conception to execution.',
                    'id' => 'Mendukung evaluasi peluang investasi, perumusan proposal komersial, dan koordinasi proyek dari inisiasi hingga eksekusi.'
                ],
                'headline' => [
                    'en' => 'Navigating Capital Deployment and Strategic Commercial Projects.',
                    'id' => 'Memandu Penyaluran Modal dan Proyek Komersial Strategis.'
                ],
                'hero_image' => '/images/hero_globe_china_indonesia.webp',
                'detail_image' => '/images/consultation_advisory_bw.webp',
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
     * 3. Leadership Team / People Behind 8Vice (Ibu Helda, Pak Gandhi, Ci Christine)
     */
    public static function getProfiles(): array
    {
        return [
            (object)[
                'call_name' => 'Ibu Helda',
                'title' => 'Helda Chandra, S.E., M.Si.',
                'role' => [
                    'en' => 'CEO & Co-Founder, 8 Vice · Managing Partner, Gentala Institute',
                    'id' => 'CEO & Co-Founder, 8 Vice · Managing Partner, Gentala Institute'
                ],
                'short_bio' => [
                    'en' => 'Seasoned business strategist with over 20 years guiding multinational corporations, BUMN, and governments. Spearheads cross-border advisory for Alibaba Group, DingTalk, Alipay, DiDi, Coolita, and Skyworth. Serves as Expert Consultant to the Indonesian Ministry of Creative Economy and former PT MRT Jakarta Commissioner Committee.',
                    'id' => 'Konsultan bisnis dan penasihat strategis dengan pengalaman 20+ tahun memandu korporasi multinasional, BUMN, dan pemerintah. Memimpin advisori lintas batas untuk Alibaba Group, DingTalk, Alipay, DiDi, Coolita, dan Skyworth. Menjabat Konsultan Ahli di Kementerian Ekonomi Kreatif RI dan purna Komite Dewan Komisaris PT MRT Jakarta.'
                ],
                'image' => '/images/profiles/helda_chandra.webp',
                'focus_tags' => ['Indonesia–China Strategy', 'Government Relations', 'Brand Strategy', 'GRC & Advisory', 'Creative Economy'],
                'socials' => [
                    'linkedin' => 'https://www.linkedin.com/in/helda-chandra-a0b27b1b/',
                    'instagram' => 'https://www.instagram.com/heldachandra',
                    'email' => 'mailto:Heldachandra@gmail.com'
                ],
                'quote_title' => [
                    'en' => 'Bridging Governance, Enterprise Innovation, and Bilateral Growth',
                    'id' => 'Menjembatani Tata Kelola, Inovasi Korporasi, dan Pertumbuhan Bilateral'
                ],
                'quote_message' => [
                    'en' => [
                        '“In every cross-border initiative between Indonesia and China, sustainable success is never defined by transaction speed alone, but by the depth of institutional trust, regulatory compliance, and nuanced cultural understanding.”',
                        '“With over two decades of advisory experience—from public infrastructure at PT MRT Jakarta and creative economy strategy for the Indonesian Government, to market entry for Alibaba Group, DingTalk, and DiDi—our focus at 8 Vice is building high-trust partnerships that create long-term commercial and sovereign value.”',
                        '“Education & Credentials: Master of Communication Studies (Marketing Communication) & Bachelor of Economics & Management from University of Indonesia; Associate in Chinese Literature & Culture from Beijing Language and Culture University; Certified Marketing Analyst (AAPM USA) & Certified Strategic Business Analyst (AAFM).”'
                    ],
                    'id' => [
                        '“Dalam setiap inisiatif lintas negara antara Indonesia dan Tiongkok, keberhasilan jangka panjang tidak pernah ditentukan oleh kecepatan transaksi semata, melainkan oleh kedalaman kepercayaan institusional, kepatuhan regulasi, dan pemahaman budaya lokal yang matang.”',
                        '“Dengan lebih dari dua dekade pengalaman mendampingi BUMN, pemerintah, dan korporasi global—mulai dari infrastruktur publik di PT MRT Jakarta, strategi pemasaran di Kementerian Ekonomi Kreatif RI, hingga ekspansi Alibaba Group, DingTalk, dan DiDi—fokus kami di 8 Vice adalah membangun kemitraan bernilai jangka panjang.”',
                        '“Latar Belakang Pendidikan & Sertifikasi: Magister Ilmu Komunikasi & Sarjana Ekonomi Universitas Indonesia; Sastra & Budaya Mandarin di Beijing Language and Culture University; Certified Marketing Analyst (AAPM USA) & Certified Strategic Business Analyst (AAFM).”'
                    ]
                ]
            ],
            (object)[
                'call_name' => 'Pak Gandhi',
                'title' => 'Gandhi Priambodho',
                'role' => [
                    'en' => 'Director of International Business · Partner, 8 Vice',
                    'id' => 'Director of International Business · Partner, 8 Vice'
                ],
                'short_bio' => [
                    'en' => 'Spearheads the expansion of business, trade and investment networks in Indonesia and China. Based in Beijing since 2002, Gandhi has long fostered eclectic business development networks across trade, industrial cooperation, energy & minerals, media, creative industry, tourism, education, real estate, and healthcare.',
                    'id' => 'Memimpin ekspansi jaringan bisnis, perdagangan, dan investasi di Indonesia dan Tiongkok. Berdomisili di Beijing sejak 2002, Gandhi telah lama membangun jejaring pengembangan bisnis lintas sektor: perdagangan, kerja sama industri, energi & mineral, media, industri kreatif & pariwisata, pendidikan, properti, dan layanan kesehatan.'
                ],
                'image' => '/images/profiles/gandhi_priambodho.webp',
                'focus_tags' => ['International Business', 'Trade & Investment', 'Energy & Minerals', 'Beijing Network', 'Media & Industry'],
                'socials' => [
                    'linkedin' => 'https://www.linkedin.com/company/8-vice/',
                    'instagram' => 'https://www.instagram.com/8viceofficial',
                    'email' => 'mailto:hello@8vice.com'
                ],
                'quote_title' => [
                    'en' => 'Two Decades of Grounded Cross-Border Networks in Beijing & Jakarta',
                    'id' => 'Dua Dekade Membangun Jejaring Lintas Batas di Beijing & Jakarta'
                ],
                'quote_message' => [
                    'en' => [
                        '“DIRECTOR OF INTERNATIONAL BUSINESS spearheads the expansion of business, trade and investment networks in Indonesia and China. Based in Beijing since 2002, Gandhi has long fostered eclectic business development networks in various sectors, including: trade and industrial cooperation, energy and minerals, media, creative industry and tourism, education, real estate, health services and many others.”',
                        "Educational Background:\n• Renmin University of China - Graduate Program (Contemporary China Studies)\n• American World University in California - Bachelor Program (Business Administration)\n• University of Indonesia - Bachelor Program (Chinese Language and Literature)",
                        "Professional Experiences:\n• Nanyang Bridge Media, co. Ltd\n• Red&White China\n• Beijing An Hua Property Consultant, China\n• CENTURY 21 Troop Real Estate, China\n• Indonesia Shangbao\n• PT Falah Jaya Agung, Indonesia\n• Lippo Group, Indonesia\n• Indonesia Air Show Foundation"
                    ],
                    'id' => [
                        '“DIRECTOR OF INTERNATIONAL BUSINESS yang memimpin ekspansi jaringan bisnis, perdagangan, dan investasi di Indonesia dan Tiongkok. Menetap di Beijing sejak tahun 2002, Gandhi telah lama membina jejaring pengembangan bisnis di berbagai sektor strategis: perdagangan & kerja sama industri, energi dan mineral, media, industri kreatif & pariwisata, pendidikan, properti, hingga layanan kesehatan.”',
                        "Latar Belakang Pendidikan:\n• Renmin University of China - Program Pascasarjana (Contemporary China Studies)\n• American World University in California - Sarjana (Administrasi Bisnis)\n• Universitas Indonesia - Sarjana (Bahasa dan Sastra Mandarin)",
                        "Pengalaman Profesional:\n• Nanyang Bridge Media, co. Ltd\n• Red&White China\n• Beijing An Hua Property Consultant, China\n• CENTURY 21 Troop Real Estate, China\n• Indonesia Shangbao\n• PT Falah Jaya Agung, Indonesia\n• Lippo Group, Indonesia\n• Indonesia Air Show Foundation"
                    ]
                ]
            ],
            (object)[
                'call_name' => 'Ci Christine',
                'title' => 'Christine Susanna Tjhin',
                'role' => [
                    'en' => 'Co-Founder & Director of Strategic Communication and Research, Gentala Institute · Strategic Partner, 8 Vice',
                    'id' => 'Co-Founder & Director of Strategic Communication and Research, Gentala Institute · Strategic Partner, 8 Vice'
                ],
                'short_bio' => [
                    'en' => 'Co-Founder and Director of Strategic Communication and Research at Gentala Institute and Partner at 8 Vice. Serves as advisor on China affairs to the Deputy for Geopolitics at the Indonesian National Defense Council (DPN), Member of the Supervisory Body of Indonesia Council of Sinologists, Senior Expert at FPCI China Policy Group, and former CSIS Indonesia researcher.',
                    'id' => 'Co-Founder dan Director of Strategic Communication and Research di Gentala Institute serta Partner di 8 Vice. Menjabat penasihat urusan Tiongkok untuk Deputi Bidang Geopolitik Dewan Pertahanan Nasional (DPN), Dewan Sinolog Indonesia, Senior Expert FPCI China Policy Group, serta peneliti senior di CSIS Indonesia (2003).'
                ],
                'image' => '/images/profiles/christine_tjhin.webp',
                'focus_tags' => ['Geopolitics & Policy', 'Gentala Institute', 'Sinology & China Affairs', 'CSIS Indonesia', 'Strategic Communications'],
                'socials' => [
                    'linkedin' => 'https://www.linkedin.com/in/christine-susanna-tjhin-0a9557b/',
                    'instagram' => 'https://www.instagram.com/8viceofficial',
                    'email' => 'mailto:hello@8vice.com'
                ],
                'quote_title' => [
                    'en' => 'Rigorous Geopolitical Insight as the Bedrock of Resilient Bilateral Partnerships',
                    'id' => 'Wawasan Geopolitik Teruji sebagai Landasan Kemitraan Bilateral yang Tangguh'
                ],
                'quote_message' => [
                    'en' => [
                        '“Christine Susanna Tjhin is the Co-Founder and Director of Strategic Communication and Research at Gentala Institute. Established in 2020 to support the distribution of vaccines and medical equipment between Indonesia and China, Gentala Institute has since evolved into a business consultancy and policy research institute promoting sustainable, smart, and socially responsible partnerships.”',
                        '“Beyond Gentala Institute, Christine serves as an advisor on China affairs to the Deputy for Geopolitics at the Indonesian National Defense Council (DPN); a member of the Supervisory Body of the Indonesia Council of Sinologists (World Sinology Center); a Senior Expert in the China Policy Group at the Foreign Policy Community Indonesia (FPCI); and Coordinator for China observer networks consulting regularly with the Indonesian Ministry of Foreign Affairs.”',
                        '“She commenced her think tank career in 2002 at the Indonesian Pluralism Institute (IPI) and in 2003 at the Centre for Strategic and International Studies (CSIS Indonesia). She studied Economics, Strategic Management, East Asian Studies, and International Relations across Peking University, Beihang University, Fujian Normal University, Australian National University, and Universitas Tarumanagara.”'
                    ],
                    'id' => [
                        '“Christine Susanna Tjhin adalah Co-Founder dan Director of Strategic Communication and Research di Gentala Institute. Didirikan pada tahun 2020 untuk mendukung distribusi vaksin dan alat kesehatan antara Indonesia dan Tiongkok, Gentala Institute telah berkembang menjadi lembaga riset kebijakan dan konsultasi bisnis yang memajukan kemitraan berkelanjutan dan bertanggung jawab secara sosial.”',
                        '“Di luar Gentala Institute, Christine menjabat sebagai penasihat urusan Tiongkok untuk Deputi Bidang Geopolitik Dewan Pertahanan Nasional (DPN), Anggota Badan Pengawas Dewan Sinolog Indonesia (World Sinology Center), Pakar Senior China Policy Group di FPCI, dan Koordinator jejaring pengamat Tiongkok untuk Kementerian Luar Negeri RI.”',
                        '“Memulai karier think-tank pada tahun 2002 di Indonesian Pluralism Institute (IPI) dan tahun 2003 di Centre for Strategic and International Studies (CSIS Indonesia). Menempuh studi Ekonomi, Manajemen Strategis, Studi Asia Timur, dan Hubungan Internasional di Peking University, Beihang University, Fujian Normal University, Australian National University, dan Universitas Tarumanagara.”'
                    ]
                ]
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
                    'id' => 'Infrastruktur & Pengembangan Perkotaan'
                ],
                'tagline' => [
                    'en' => 'Building connectivity for sustainable growth.',
                    'id' => 'Membangun konektivitas untuk pertumbuhan berkelanjutan.'
                ],
                'tag' => 'High-Growth Infrastructure',
                'image' => '/images/industry_infrastructure.webp',
                'description' => [
                    'en' => 'We explore opportunities for collaboration across urban infrastructure, transportation, mobility, and city development, connecting relevant stakeholders to support project evaluation.',
                    'id' => 'Mengevaluasi peluang kolaborasi infrastruktur perkotaan, sistem transportasi publik, utilitas terbarukan, dan pengembangan kawasan industri terintegrasi.'
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
                    'id' => 'Teknologi & Ekosistem Digital'
                ],
                'tagline' => [
                    'en' => 'Bringing technology and markets closer together.',
                    'id' => 'Mendekatkan teknologi mutakhir dengan kebutuhan pasar nyata.'
                ],
                'tag' => 'Digital Economy',
                'image' => '/images/industry_technology.webp',
                'description' => [
                    'en' => 'We help explore partnerships involving digital platforms, consumer technology, payment ecosystems, and technology-enabled services, focusing on localized commercial applications.',
                    'id' => 'Mendukung kemitraan platform digital, teknologi konsumen, infrastruktur pembayaran lintas negara, serta integrasi AI dan SaaS korporasi.'
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
                    'id' => 'Pariwisata, Perjalanan & Perhotelan'
                ],
                'tagline' => [
                    'en' => 'Creating connections through travel and destination experiences.',
                    'id' => 'Menciptakan jembatan pertukaran budaya dan pengalaman destinasi bernilai tinggi.'
                ],
                'tag' => 'Bilateral Tourism',
                'image' => '/images/industry_tourism.webp',
                'description' => [
                    'en' => 'We support tourism-related collaboration through destination promotion, travel industry partnerships, visitor engagement initiatives, and MICE development connecting Indonesia with Chinese markets.',
                    'id' => 'Memfasilitasi promosi destinasi terpadu, kemitraan rantai perhotelan internasional, pengembangan MICE, dan pembukaan akses wisatawan Tiongkok ke destinasi Indonesia.'
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
                    'id' => 'Ekonomi Kreatif & Gaya Hidup'
                ],
                'tagline' => [
                    'en' => 'Connecting culture, creativity, and commercial opportunity.',
                    'id' => 'Memadukan ekspresi budaya, kekayaan intelektual, dan peluang komersial.'
                ],
                'tag' => 'Culture & Lifestyle',
                'image' => '/images/industry_creative.webp',
                'description' => [
                    'en' => 'We explore collaboration across fashion, crafts, culinary, film, music, games, applications, and creative IP, supporting market positioning and brand partnerships.',
                    'id' => 'Mendorong kolaborasi lintas batas industri fesyen, kriya, kuliner, lisensi film & animasi, gaming, dan sindikasi kekayaan intelektual (IP).'
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
                    'id' => 'Perdagangan & Barang Konsumsi'
                ],
                'tagline' => [
                    'en' => 'Helping businesses find new commercial pathways.',
                    'id' => 'Membuka jalur komersial dan rantai distribusi ritel yang berdaya saing.'
                ],
                'tag' => 'Market Expansion',
                'image' => '/images/industry_trade.webp',
                'description' => [
                    'en' => 'We help businesses explore distribution partnerships, product localization, market positioning, and commercial channels for cross-border trade relationships.',
                    'id' => 'Mendukung penetrasi produk konsumen, pemilihan distributor nasional, lokalisasi sertifikasi (BPOM/Halal), dan efisiensi logistik perdagangan bilateral.'
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
                'tag' => 'Fintech · Market Entry',
                'slug' => 'chinese-fintech-live-in-6-months',
                'cover' => '/images/cases/fintech.webp',
                'h' => 'A Chinese Fintech, Live in 6 Months.',
                'p' => 'Market entry, licensing pathway, and a local operating team - from scoping to launch.',
                'is_featured' => true,
                'metrics' => [
                    ['value' => '6', 'unit' => 'mo', 'label_en' => 'Scoping to launch', 'label_id' => 'Dari scoping hingga peluncuran'],
                    ['value' => '3', 'unit' => '×', 'label_en' => 'Faster than prior attempts', 'label_id' => 'Lebih cepat dari upaya sebelumnya'],
                    ['value' => '14', 'unit' => '', 'label_en' => 'Local hires onboarded', 'label_id' => 'Tim lokal berhasil direkrut'],
                    ['value' => '1', 'unit' => '', 'label_en' => 'License correctly sequenced', 'label_id' => 'Izin usaha diurus dengan urutan tepat'],
                ],
                'corridor' => ['en' => 'China & Global → Indonesia', 'id' => 'Tiongkok & Global → Indonesia'],
                'capabilities' => ['en' => 'Market Entry, Regulatory Navigation, Team Building & Strategic Scaling', 'id' => 'Penetrasi Pasar, Navigasi Regulasi, Pembentukan Tim & Penskalaan Strategis'],
                'body' => null,
            ],
            (object)[
                'tag' => 'Consumer Tech · Retail',
                'slug' => 'shelf-to-scale-across-40-cities',
                'cover' => '/images/cases/retail.webp',
                'h' => 'Shelf to Scale Across 40 Indonesian Cities.',
                'p' => 'Distribution strategy and channel partnerships built around Indonesian buying behaviour.',
                'is_featured' => false,
                'metrics' => [
                    ['value' => '40+', 'unit' => 'cities', 'label_en' => 'Tier-1 to tier-3 coverage', 'label_id' => 'Cakupan kota tier-1 hingga tier-3'],
                    ['value' => '180', 'unit' => 'days', 'label_en' => 'From signing to shelf presence', 'label_id' => 'Dari penandatanganan hingga ada di rak'],
                    ['value' => '9', 'unit' => 'distributors', 'label_en' => 'Regional partners signed', 'label_id' => 'Mitra regional ditandatangani'],
                ],
                'corridor' => ['en' => 'Shenzhen → Jakarta, Surabaya & Outer Islands', 'id' => 'Shenzhen → Jakarta, Surabaya & Luar Jawa'],
                'capabilities' => ['en' => 'Distribution Strategy, Channel Partner Selection, Retail Localization', 'id' => 'Strategi Distribusi, Seleksi Mitra Kanal, Lokalisasi Ritel'],
                'body' => null,
            ],
            (object)[
                'tag' => 'Manufacturing · Operations',
                'slug' => 'local-production-de-risked',
                'cover' => '/images/cases/manufacturing.webp',
                'h' => 'Local Production, De-Risked.',
                'p' => 'Site selection, regulatory navigation, and a resilient supply chain for an industrial entrant.',
                'is_featured' => false,
                'metrics' => [
                    ['value' => '40%', 'unit' => 'TKDN', 'label_en' => 'Target achieved in year 1', 'label_id' => 'Target tercapai pada tahun pertama'],
                    ['value' => '3', 'unit' => 'zones', 'label_en' => 'Industrial parks evaluated', 'label_id' => 'Kawasan industri dievaluasi'],
                    ['value' => '450+', 'unit' => 'jobs', 'label_en' => 'Local manufacturing roles created', 'label_id' => 'Lapangan kerja lokal tercipta'],
                ],
                'corridor' => ['en' => 'Jiangsu → Central Java Industrial Corridor', 'id' => 'Jiangsu → Koridor Industri Jawa Tengah'],
                'capabilities' => ['en' => 'Site Selection, Supply Chain Localization, Labor Regulatory Advisory', 'id' => 'Pemilihan Lokasi Pabrik, Lokalisasi Rantai Pasok, Regulasi Ketenagakerjaan'],
                'body' => null,
            ],
            (object)[
                'tag' => 'Enterprise SaaS · Tech',
                'slug' => 'enterprise-saas-cross-border-collaboration',
                'cover' => '/images/challenges_insights.webp',
                'h' => 'Enterprise SaaS Localization Without Data Friction.',
                'p' => 'Data sovereignty compliance, enterprise sales playbook, and multinational team collaboration.',
                'is_featured' => false,
                'metrics' => [
                    ['value' => '100%', 'unit' => 'compliant', 'label_en' => 'UU PDP and BI data residency', 'label_id' => 'Kepatuhan penuh UU PDP & BI'],
                    ['value' => '12', 'unit' => 'pilots', 'label_en' => 'Enterprise POCs secured in 90 days', 'label_id' => 'POC korporat diraih dalam 90 hari'],
                ],
                'corridor' => ['en' => 'Hangzhou → Jakarta Financial Sector', 'id' => 'Hangzhou → Sektor Finansial Jakarta'],
                'capabilities' => ['en' => 'Regulatory Compliance, Enterprise Go-to-Market, Data Sovereignty', 'id' => 'Kepatuhan Regulasi, Go-to-Market Korporat, Kedaulatan Data'],
                'body' => null,
            ],
            (object)[
                'tag' => 'Creative IP · Media',
                'slug' => 'digital-ip-and-entertainment-syndication',
                'cover' => '/images/video_manifesto_cover.webp',
                'h' => 'Syndicating Global Creative IP to Indonesian Audiences.',
                'p' => 'Broadcast licensing, localized dubbing & cultural resonance, and multi-platform distribution.',
                'is_featured' => false,
                'metrics' => [
                    ['value' => '15M+', 'unit' => 'views', 'label_en' => 'Total reach across broadcast & OTT', 'label_id' => 'Jangkauan tayang di TV & OTT'],
                    ['value' => '4', 'unit' => 'networks', 'label_en' => 'Major broadcasting partners onboard', 'label_id' => 'Mitra stasiun TV nasional'],
                ],
                'corridor' => ['en' => 'Changsha / Beijing → Indonesia Digital Entertainment', 'id' => 'Changsha / Beijing → Hiburan Digital Indonesia'],
                'capabilities' => ['en' => 'Content Licensing, Media Relations, Cultural Adaptation', 'id' => 'Lisensi Konten, Relasi Media, Adaptasi Budaya'],
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
            'google_analytics' => 'G-1234567890',
            'google_search_console' => '<meta name="google-site-verification" content="1234567890" />',
            'google_tag_manager' => null,
            'meta_pixels' => '123456789012345',
            'macro_stat_value' => '$130B',
            'macro_stat_label' => 'Bilateral Indonesia–China cross-border tech, infrastructure & retail opportunity in 2026',
            'tagline' => [
                'en' => "Your Strategic Gateway to Indonesia and China.",
                'id' => "Gerbang Strategis Anda Menuju Indonesia dan Tiongkok."
            ]
        ];
    }

    /**
     * 8. Statistics Metrics
     */
    public static function getStatistics(): array
    {
        return [
            (object)['title' => '25+', 'description' => 'Years combined partner advisory experience', 'image' => null],
            (object)['title' => '30+', 'description' => 'Cross-border multinational clients & partner institutions', 'image' => null],
            (object)['title' => '6', 'description' => 'Integrated strategic service pillars', 'image' => null],
            (object)['title' => '5', 'description' => 'Key bilateral industry focus sectors', 'image' => null],
        ];
    }

    /**
     * 9. Careers / Hiring
     */
    public static function getCareers(): array
    {
        return [
            (object)[
                'title' => 'Senior Cross-Border Strategic Advisor',
                'dept' => 'Advisory Practice',
                'type' => 'Full-time',
                'location' => 'Jakarta, Indonesia (SOHO Pancoran)',
                'reqs' => json_encode(['4+ years in management consulting or corporate expansion', 'Fluent in Mandarin, English, and Bahasa Indonesia', 'Strong familiarity with Indonesian investment licensing & PT PMA regulations']),
                'description' => 'Lead market entry assessments, regulatory roadmaps, and high-level bilateral commercial matchmaking for Chinese multinational enterprises expanding into Indonesia.',
            ],
            (object)[
                'title' => 'China Market & Macro Research Analyst',
                'dept' => 'Strategic Research Desk',
                'type' => 'Full-time',
                'location' => 'Jakarta, Indonesia',
                'reqs' => json_encode(['Mandarin fluency (written & spoken)', 'Experience in industrial policy and cross-border trade analysis', 'Strong qualitative & financial modeling capabilities']),
                'description' => 'Produce authoritative market intelligence reports, industrial relocation blueprints, and executive briefs covering the Indonesia–China commercial corridor.',
            ],
            (object)[
                'title' => 'Strategic Communications & PR Associate',
                'dept' => 'Communications & Media',
                'type' => 'Full-time',
                'location' => 'Jakarta, Indonesia',
                'reqs' => json_encode(['2+ years in corporate PR or media agency', 'Established relationships with Indonesian tier-1 business media', 'Experience in brand localization and executive reputation management']),
                'description' => 'Execute high-impact press conferences, media roundtables, and localized brand positioning campaigns for international market entrants.',
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
