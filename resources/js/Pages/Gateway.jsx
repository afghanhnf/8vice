import React, { useEffect } from 'react';
import SeoHead from '@/Components/SeoHead';
import Link from '@/Components/LocalizedLink';
import MainLayout from '@/Layouts/MainLayout';
import { Arrow } from '@/Components/InnerBlocks';
import { useTranslation } from '@/Contexts/TranslationContext';

/* -------------------------------------------------------------------------- */
/*  Animated Modern City Skyline & Architectural Grid Background SVG          */
/* -------------------------------------------------------------------------- */
function ModernCityBg({ opacity = 0.26, flip = false }) {
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

      {/* Animated Modern City Skyline Vector */}
      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '280px',
          opacity,
          transform: flip ? 'scaleX(-1)' : 'none',
        }}
      >
        <defs>
          <linearGradient id="gwCityFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(230, 57, 70, 0.32)" />
            <stop offset="50%" stopColor="rgba(255, 255, 255, 0.08)" />
            <stop offset="100%" stopColor="rgba(8, 9, 12, 0.0)" />
          </linearGradient>
          <linearGradient id="gwCityStroke" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(255,255,255,0.04)" />
            <stop offset="30%" stopColor="rgba(230,57,70,0.45)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.22)" />
            <stop offset="70%" stopColor="rgba(230,57,70,0.45)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.04)" />
          </linearGradient>
        </defs>

        <path
          d="M0,320 L0,250 L45,250 L45,195 L85,195 L85,235 L115,235 L115,140 L140,105 L165,140 L165,240 L205,240 L205,170 L255,170 L255,220 L290,220 L290,120 L310,120 L310,75 L314,75 L314,120 L335,120 L335,230 L380,230 L380,180 L430,180 L430,245 L480,245 L480,150 L530,130 L530,235 L580,235 L580,190 L635,190 L635,250 L690,250 L690,165 L715,115 L740,165 L740,245 L790,245 L790,145 L840,145 L840,225 L885,225 L885,95 L910,60 L935,95 L935,230 L980,230 L980,160 L1035,160 L1035,215 L1085,215 L1085,125 L1140,125 L1140,235 L1190,235 L1190,175 L1245,175 L1245,220 L1295,220 L1295,150 L1350,150 L1350,240 L1400,240 L1400,200 L1440,200 L1440,320 Z"
          fill="url(#gwCityFade)"
          stroke="url(#gwCityStroke)"
          strokeWidth="1.2"
        />

        <line
          x1="0"
          y1="265"
          x2="1440"
          y2="265"
          stroke="rgba(230, 57, 70, 0.28)"
          strokeWidth="1"
          strokeDasharray="8 12"
          className="gw-city-stream"
        />
        <line
          x1="0"
          y1="290"
          x2="1440"
          y2="290"
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth="1"
          strokeDasharray="4 18"
          className="gw-city-stream-reverse"
        />

        <circle cx="140" cy="105" r="3" fill="#E63946" className="gw-city-beacon" />
        <circle cx="312" cy="75" r="3.5" fill="#FF6B76" className="gw-city-beacon" />
        <circle cx="530" cy="130" r="2.5" fill="#E63946" className="gw-city-beacon" />
        <circle cx="715" cy="115" r="3" fill="#FF6B76" className="gw-city-beacon" />
        <circle cx="910" cy="60" r="3.5" fill="#E63946" className="gw-city-beacon" />
        <circle cx="1112" cy="125" r="2.5" fill="#FF6B76" className="gw-city-beacon" />
      </svg>
    </div>
  );
}

export default function Gateway() {
  const { lang } = useTranslation();
  const isId = lang === 'id';

  // Google Material Design 3 (M3) Scroll Transition Observer
  useEffect(() => {
    const elements = document.querySelectorAll('.m3-reveal');
    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -36px 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [lang]);

  const copy = isId
    ? {
        home: 'Beranda',
        breadcrumb: 'Gerbang Indonesia–China',
        eyebrow: 'KORIDOR BILATERAL · GERBANG STRATEGIS',
        heroTitleLine1: 'Dua Pasar.',
        heroTitleLine2: 'Satu Gerbang Strategis.',
        heroLead:
          'Indonesia dan Tiongkok menawarkan peluang besar bagi perusahaan yang mencari pasar baru, kemitraan strategis, kolaborasi teknologi, dan pertumbuhan jangka panjang.',
        introEyebrow: '01 · PENGANTAR GERBANG BILATERAL',
        introTitle: 'Menjembatani Perbedaan Pasar dengan Pengembangan Bisnis Strategis.',
        introP1:
          'Indonesia dan Tiongkok menawarkan peluang signifikan bagi bisnis yang mencari pasar baru, kemitraan strategis, kolaborasi teknologi, serta pertumbuhan jangka panjang.',
        introP2:
          'Namun, memasuki pasar baru menuntut lebih dari sekadar ambisi komersial. Dibutuhkan pemahaman terhadap praktik bisnis lokal, dinamika pasar, ekspektasi pemangku kepentingan, dan perbedaan budaya.',
        introP3:
          '8 Vice membantu menjembatani perbedaan tersebut dengan menghubungkan pemahaman pasar dan pengembangan bisnis strategis.',
        introP4:
          'Baik Anda perusahaan Tiongkok yang sedang menjajaki Indonesia maupun perusahaan Indonesia yang mencari peluang di Tiongkok, kami menyediakan titik awal yang terstruktur untuk mengevaluasi peluang, membangun kemitraan, dan merencanakan langkah berikutnya.',
        introQuote: 'Ambisi bisnis Anda. Perspektif lintas batas kami. Jalan bersama menuju pertumbuhan.',
        cnIdBadge: 'JALUR 01 · TIONGKOK KE INDONESIA',
        cnIdTitle: 'China to Indonesia',
        cnIdSubtitle: 'Mitra Anda dalam Menjajaki Pasar Indonesia.',
        cnIdHeadline: 'Jelajahi Indonesia. Bangun Kemitraan Lokal. Tumbuh dengan Keyakinan.',
        cnIdParagraphs: [
          'Indonesia menghadirkan peluang di berbagai sektor industri, didukung oleh pasar domestik yang besar, adopsi digital yang pesat, serta permintaan tinggi terhadap produk, layanan, dan solusi bisnis baru.',
          'Bagi perusahaan Tiongkok, memasuki Indonesia memerlukan pemahaman mengenai kondisi pasar lokal, ekspektasi pelanggan, praktik bisnis, serta lingkungan pemangku kepentingan yang lebih luas.',
          '8 Vice mendukung pelaku bisnis Tiongkok dalam menjajaki peluang tersebut melalui konsultasi masuk pasar (market entry advisory), identifikasi mitra lokal, keterlibatan pemangku kepentingan, komunikasi strategis, serta fasilitasi pengembangan bisnis.',
          'Peran kami adalah membantu Anda memahami lanskap secara lebih utuh, mengidentifikasi peluang yang relevan, dan meletakkan fondasi bagi kolaborasi lokal yang bermakna.'
        ],
        cnIdSupportTitle: 'Bagaimana Kami Mendukung Ekspansi Anda di Indonesia',
        cnIdSupports: [
          {
            title: 'Market Exploration (Eksplorasi Pasar)',
            desc: 'Memahami lingkungan bisnis Indonesia dan mengidentifikasi area minat komersial yang potensial.'
          },
          {
            title: 'Local Partnership Development (Pengembangan Kemitraan Lokal)',
            desc: 'Menjajaki calon distributor, mitra komersial, dan kolaborator industri yang tepat.'
          },
          {
            title: 'Stakeholder Engagement (Keterlibatan Pemangku Kepentingan)',
            desc: 'Mengoordinasikan perkenalan yang tepat dan keterlibatan profesional dengan pemangku kepentingan bisnis maupun institusional.'
          },
          {
            title: 'Market Positioning (Positioning Pasar)',
            desc: 'Mengadaptasi proposisi nilai bisnis dan pendekatan komunikasi agar sesuai dengan audiens lokal di Indonesia.'
          },
          {
            title: 'Business Development (Pengembangan Bisnis)',
            desc: 'Mendukung diskusi kemitraan, penyusunan proposal komersial, dan koordinasi tindak lanjut.'
          },
          {
            title: 'Project Facilitation (Fasilitasi Proyek)',
            desc: 'Membantu mengoordinasikan pengembangan inisiatif bisnis terpilih bersama mitra yang relevan.'
          }
        ],
        cnIdClosing:
          'Dari eksplorasi pasar awal hingga pengembangan kemitraan, 8 Vice menyediakan titik awal strategis bagi perjalanan ekspansi Anda di Indonesia. Mari Jelajahi Indonesia Bersama.',
        cnIdCta: 'Diskusikan Ekspansi Pasar Indonesia Anda',
        idCnBadge: 'JALUR 02 · INDONESIA KE TIONGKOK',
        idCnTitle: 'Indonesia to China',
        idCnSubtitle: 'Terhubung dengan Peluang di Pasar Tiongkok.',
        idCnHeadline: 'Bawa Bisnis Anda Melampaui Batas Negara.',
        idCnParagraphs: [
          'Tiongkok menawarkan lingkungan bisnis yang dinamis dan beragam dengan peluang besar bagi perusahaan yang mencari kemitraan komersial baru, jalur distribusi, kolaborasi teknologi, serta perluasan pasar.',
          'Namun, keberhasilan di Tiongkok membutuhkan persiapan yang matang, pemahaman akan dinamika pasar lokal, positioning bisnis yang tepat, serta kemampuan membangun relasi dengan mitra yang relevan.',
          '8 Vice membantu perusahaan Indonesia menjajaki pasar Tiongkok melalui konsultasi strategis, kajian pasar awal, identifikasi mitra, komunikasi lintas budaya, dan fasilitasi pengembangan bisnis.',
          'Kami membantu Anda mempersiapkan percakapan pasar, mengartikulasikan proposisi nilai, dan mengeksplorasi jalur praktis untuk berkolaborasi dengan pelaku usaha Tiongkok.'
        ],
        idCnSupportTitle: 'Bagaimana Kami Mendukung Ekspansi Anda ke Tiongkok',
        idCnSupports: [
          {
            title: 'Market Opportunity Assessment (Kajian Peluang Pasar)',
            desc: 'Mengidentifikasi segmen pasar yang relevan dan potensi area kolaborasi komersial.'
          },
          {
            title: 'Partner Identification (Identifikasi Mitra)',
            desc: 'Menjajaki mitra bisnis, distributor, dan pemangku kepentingan industri yang sesuai.'
          },
          {
            title: 'Business Matching (Pencocokan Bisnis)',
            desc: 'Memfasilitasi perkenalan yang relevan dan diskusi bisnis terarah.'
          },
          {
            title: 'Market Positioning (Positioning Pasar)',
            desc: 'Menyusun narasi bisnis dan pendekatan komunikasi yang selaras dengan ekosistem pasar Tiongkok.'
          },
          {
            title: 'Trade & Business Missions (Misi Dagang & Bisnis)',
            desc: 'Mengoordinasikan kunjungan bisnis terpilih, delegasi korporat, dan pertemuan kemitraan.'
          },
          {
            title: 'Commercial Development (Pengembangan Komersial)',
            desc: 'Mendukung penyusunan proposal, diskusi tindak lanjut, dan koordinasi kemitraan.'
          }
        ],
        idCnClosing:
          'Baik Anda merek konsumen, bisnis kreatif, perusahaan teknologi, operator pariwisata, maupun korporasi mapan, 8 Vice siap menstrukturkan eksplorasi awal peluang Anda di Tiongkok. Mari Jelajahi Tiongkok Bersama.',
        idCnCta: 'Diskusikan Ekspansi Pasar Tiongkok Anda',
        processEyebrow: '04 · PROSES LINTAS BATAS KAMI',
        processTitle: 'Pendekatan Terstruktur untuk Bisnis Lintas Negara.',
        steps: [
          {
            num: '01',
            title: 'Discovery',
            desc: 'Kami memulai dari sasaran bisnis, prioritas ekspansi, dan ekspektasi Anda terhadap target pasar.'
          },
          {
            num: '02',
            title: 'Opportunity Assessment',
            desc: 'Kami mengidentifikasi pertimbangan pasar yang relevan, area kemitraan potensial, dan informasi yang dibutuhkan untuk mengambil keputusan.'
          },
          {
            num: '03',
            title: 'Strategic Planning',
            desc: 'Kami merumuskan pendekatan praktis yang mencakup prioritas pasar, kriteria mitra, positioning, dan strategi keterlibatan.'
          },
          {
            num: '04',
            title: 'Partnership Development',
            desc: 'Bila relevan, kami memfasilitasi perkenalan dan mengoordinasikan diskusi dengan calon kolaborator bisnis.'
          },
          {
            num: '05',
            title: 'Follow-Through',
            desc: 'Kami mendukung aktivitas tindak lanjut yang disepakati dan membantu mengoordinasikan langkah berikutnya menuju kolaborasi komersial.'
          }
        ],
        processNote:
          'Setiap penugasan disesuaikan dengan kebutuhan klien, dengan ruang lingkup dan hasil kerja (deliverables) yang disepakati bersama di awal.',
        ctaEyebrow: 'MULAI KOLABORASI BILATERAL',
        ctaTitle: 'Siap Membuka Peluang Lintas Batas di Indonesia atau Tiongkok?',
        ctaDesc: 'Ceritakan arah ekspansi Anda. Tim kami akan menyiapkan langkah awal yang terstruktur.',
        ctaPrimary: 'Mulai Percakapan',
        ctaSecondary: 'Lihat Layanan Kami'
      }
    : {
        home: 'Home',
        breadcrumb: 'Indonesia–China Gateway',
        eyebrow: 'BILATERAL CORRIDOR · STRATEGIC GATEWAY',
        heroTitleLine1: 'Two Markets.',
        heroTitleLine2: 'One Strategic Gateway.',
        heroLead:
          'Indonesia and China offer significant opportunities for businesses seeking new markets, strategic partnerships, technology collaboration, and long-term growth.',
        introEyebrow: '01 · GATEWAY INTRODUCTION',
        introTitle: 'Bridging Market Differences with Strategic Business Development.',
        introP1:
          'Indonesia and China offer significant opportunities for businesses seeking new markets, strategic partnerships, technology collaboration, and long-term growth.',
        introP2:
          'Yet, entering a new market requires more than commercial ambition. It requires an understanding of local business practices, market dynamics, stakeholder expectations, and cultural differences.',
        introP3:
          '8 Vice helps bridge these differences by connecting market understanding with strategic business development.',
        introP4:
          'Whether you are a Chinese company exploring Indonesia or an Indonesian company seeking opportunities in China, we provide a structured starting point for evaluating opportunities, developing partnerships, and planning your next steps.',
        introQuote: 'Your business ambitions. Our cross-border perspective. A shared path to growth.',
        cnIdBadge: 'CORRIDOR 01 · INBOUND TO INDONESIA',
        cnIdTitle: 'China to Indonesia',
        cnIdSubtitle: 'Your Partner in Exploring the Indonesian Market.',
        cnIdHeadline: 'Explore Indonesia. Build Local Partnerships. Grow with Confidence.',
        cnIdParagraphs: [
          'Indonesia presents opportunities across a diverse range of industries, supported by a large domestic market, growing digital adoption, and demand for new products, services, and business solutions.',
          'For Chinese companies, entering Indonesia requires an understanding of local market conditions, customer expectations, business practices, and the broader stakeholder environment.',
          '8 Vice supports Chinese businesses in exploring these opportunities through market entry advisory, local partner identification, stakeholder engagement, strategic communications, and business development facilitation.',
          'Our role is to help you better understand the landscape, identify relevant opportunities, and establish the foundations for meaningful local collaboration.'
        ],
        cnIdSupportTitle: 'How We Support Your Expansion in Indonesia',
        cnIdSupports: [
          {
            title: 'Market Exploration',
            desc: 'Understand the Indonesian business environment and identify areas of potential commercial interest.'
          },
          {
            title: 'Local Partnership Development',
            desc: 'Explore potential distributors, commercial partners, and industry collaborators.'
          },
          {
            title: 'Stakeholder Engagement',
            desc: 'Coordinate appropriate introductions and professional engagement with relevant business and institutional stakeholders.'
          },
          {
            title: 'Market Positioning',
            desc: 'Adapt business propositions and communication approaches to local audiences.'
          },
          {
            title: 'Business Development',
            desc: 'Support partnership discussions, commercial proposals, and follow-up coordination.'
          },
          {
            title: 'Project Facilitation',
            desc: 'Help coordinate the development of selected business initiatives with relevant partners.'
          }
        ],
        cnIdClosing:
          "From initial market exploration to partnership development, 8 Vice provides a strategic starting point for your Indonesia expansion journey. Let's Explore Indonesia Together.",
        cnIdCta: 'Discuss Your Indonesia Market Entry',
        idCnBadge: 'CORRIDOR 02 · OUTBOUND TO CHINA',
        idCnTitle: 'Indonesia to China',
        idCnSubtitle: 'Connect with Opportunities in the Chinese Market.',
        idCnHeadline: 'Take Your Business Beyond Borders.',
        idCnParagraphs: [
          'China offers a complex and diverse business environment with opportunities for companies seeking new commercial partnerships, distribution channels, technology collaboration, and market expansion.',
          'However, success in China requires careful preparation, an understanding of local market dynamics, appropriate business positioning, and the ability to build relationships with relevant partners.',
          '8 Vice helps Indonesian businesses explore the Chinese market through strategic advisory, preliminary market assessment, partner identification, cross-cultural communications, and business development facilitation.',
          'We help you prepare for market conversations, articulate your value proposition, and explore practical pathways for collaboration with Chinese businesses.'
        ],
        idCnSupportTitle: 'How We Support Your China Expansion',
        idCnSupports: [
          {
            title: 'Market Opportunity Assessment',
            desc: 'Identify relevant market segments and potential areas of collaboration.'
          },
          {
            title: 'Partner Identification',
            desc: 'Explore suitable business partners, distributors, and industry stakeholders.'
          },
          {
            title: 'Business Matching',
            desc: 'Facilitate relevant introductions and business discussions.'
          },
          {
            title: 'Market Positioning',
            desc: 'Develop business narratives and communication approaches suited to the Chinese market.'
          },
          {
            title: 'Trade & Business Missions',
            desc: 'Coordinate selected business visits, delegations, and partnership meetings.'
          },
          {
            title: 'Commercial Development',
            desc: 'Support proposals, follow-up discussions, and partnership coordination.'
          }
        ],
        idCnClosing:
          "Whether you are a consumer brand, creative business, technology company, tourism operator, or established enterprise, 8 Vice can help structure your initial exploration of opportunities in China. Let's Explore China Together.",
        idCnCta: 'Discuss Your China Market Entry',
        processEyebrow: '04 · OUR CROSS-BORDER PROCESS',
        processTitle: 'A Structured Approach to Cross-Border Business.',
        steps: [
          {
            num: '01',
            title: 'Discovery',
            desc: 'We begin with your business objectives, expansion priorities, and expectations for the target market.'
          },
          {
            num: '02',
            title: 'Opportunity Assessment',
            desc: 'We identify relevant market considerations, potential partnership areas, and the information required to make informed decisions.'
          },
          {
            num: '03',
            title: 'Strategic Planning',
            desc: 'We define a practical approach covering market priorities, partner requirements, positioning, and engagement.'
          },
          {
            num: '04',
            title: 'Partnership Development',
            desc: 'Where appropriate, we facilitate introductions and coordinate discussions with potential business collaborators.'
          },
          {
            num: '05',
            title: 'Follow-Through',
            desc: 'We support agreed follow-up activities and help coordinate the next steps toward potential commercial collaboration.'
          }
        ],
        processNote:
          "Every engagement is tailored to the client's requirements, with the scope and expected deliverables agreed upon in advance.",
        ctaEyebrow: 'START BILATERAL COLLABORATION',
        ctaTitle: 'Ready to Unlock Cross-Border Opportunities Across Indonesia & China?',
        ctaDesc: 'Tell us your direction. Our team will help you structure a focused starting point.',
        ctaPrimary: 'Start a Conversation',
        ctaSecondary: 'Explore Our Services'
      };

  const corridors = [
    {
      id: 'china-to-indonesia',
      flag: 'CN → ID',
      badge: copy.cnIdBadge,
      title: copy.cnIdTitle,
      subtitle: copy.cnIdSubtitle,
      headline: copy.cnIdHeadline,
      paragraphs: copy.cnIdParagraphs,
      supportTitle: copy.cnIdSupportTitle,
      supports: copy.cnIdSupports,
      closing: copy.cnIdClosing,
      cta: copy.cnIdCta,
      image: '/images/china_city_network.webp',
      photo: isId ? 'Delegasi bisnis Tiongkok di Jakarta' : 'Chinese business delegation in Jakarta'
    },
    {
      id: 'indonesia-to-china',
      flag: 'ID → CN',
      badge: copy.idCnBadge,
      title: copy.idCnTitle,
      subtitle: copy.idCnSubtitle,
      headline: copy.idCnHeadline,
      paragraphs: copy.idCnParagraphs,
      supportTitle: copy.idCnSupportTitle,
      supports: copy.idCnSupports,
      closing: copy.idCnClosing,
      cta: copy.idCnCta,
      image: '/images/china_trade_port.webp',
      photo: isId ? 'Misi dagang Indonesia di Shanghai / Guangzhou' : 'Indonesian trade mission in Shanghai / Guangzhou'
    }
  ];

  return (
    <MainLayout>
      <SeoHead pageCode="gateway" title={copy.breadcrumb} />

      <div className="gw-redesign-root">
        <style
          dangerouslySetInnerHTML={{
            __html: `
            .gw-redesign-root {
              background: #08090C;
              color: #FFFFFF;
              position: relative;
              overflow: hidden;
            }
            @keyframes gwStreamMove {
              0% { stroke-dashoffset: 0; }
              100% { stroke-dashoffset: -200; }
            }
            @keyframes gwBeaconPulse {
              0%, 100% { opacity: 0.35; transform: scale(0.9); }
              50% { opacity: 1; transform: scale(1.35); }
            }
            .gw-city-stream {
              animation: gwStreamMove 14s linear infinite;
            }
            .gw-city-stream-reverse {
              animation: gwStreamMove 18s linear infinite reverse;
            }
            .gw-city-beacon {
              transform-origin: center;
              animation: gwBeaconPulse 3.2s ease-in-out infinite;
            }

            /* Google Material Design 3 (M3) Emphasized Transition System */
            .m3-reveal {
              opacity: 0;
              transform: translateY(34px);
              transition: opacity 0.78s cubic-bezier(0.05, 0.7, 0.1, 1),
                          transform 0.78s cubic-bezier(0.05, 0.7, 0.1, 1);
              will-change: opacity, transform;
            }
            .m3-reveal.m3-reveal--left {
              transform: translateX(-38px);
            }
            .m3-reveal.m3-reveal--right {
              transform: translateX(38px);
            }
            .m3-reveal.m3-reveal--scale {
              transform: translateY(24px) scale(0.96);
            }
            .m3-reveal.is-visible {
              opacity: 1;
              transform: translate(0, 0) scale(1);
            }
            .m3-delay-1 { transition-delay: 0.08s; }
            .m3-delay-2 { transition-delay: 0.16s; }
            .m3-delay-3 { transition-delay: 0.24s; }
            .m3-delay-4 { transition-delay: 0.32s; }
            .m3-delay-5 { transition-delay: 0.40s; }
            .m3-delay-6 { transition-delay: 0.48s; }

            .gw-eyebrow-pill {
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
            .gw-eyebrow-dot {
              width: 7px;
              height: 7px;
              border-radius: 50%;
              background: #E63946;
              box-shadow: 0 0 10px #E63946;
            }
            .gw-glass-card {
              background: linear-gradient(180deg, rgba(20, 23, 32, 0.88) 0%, rgba(12, 14, 20, 0.94) 100%);
              border: 1px solid rgba(255, 255, 255, 0.09);
              border-radius: 22px;
              box-shadow: 0 20px 50px rgba(0, 0, 0, 0.45);
              backdrop-filter: blur(14px);
              -webkit-backdrop-filter: blur(14px);
              transition: transform 0.42s cubic-bezier(0.2, 0, 0, 1),
                          border-color 0.35s ease,
                          box-shadow 0.35s ease;
            }
            .gw-glass-card:hover {
              transform: translateY(-6px);
              border-color: rgba(230, 57, 70, 0.5);
              box-shadow: 0 26px 60px rgba(0, 0, 0, 0.65), 0 0 36px rgba(230, 57, 70, 0.16);
            }
            .gw-hero-frame {
              position: relative;
              border-radius: 28px;
              overflow: hidden;
              border: 1px solid rgba(255, 255, 255, 0.14);
              box-shadow: 0 32px 80px rgba(0, 0, 0, 0.75), 0 0 60px rgba(230, 57, 70, 0.16);
              background: #0D0F15;
            }
            .gw-hero-frame img {
              width: 100%;
              height: 520px;
              object-fit: cover;
              display: block;
              filter: brightness(0.75) contrast(1.1);
              transition: transform 0.9s cubic-bezier(0.2, 0, 0, 1);
            }
            .gw-hero-frame:hover img {
              transform: scale(1.04);
            }
            .gw-split-2 {
              display: grid;
              grid-template-columns: 1.08fr 0.92fr;
              gap: 56px;
              align-items: stretch;
            }
            .gw-supports-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 26px;
            }
            .gw-roadmap-grid {
              display: grid;
              grid-template-columns: repeat(5, 1fr);
              gap: 24px;
              position: relative;
            }
            @media (max-width: 1024px) {
              .gw-split-2 {
                grid-template-columns: 1fr;
                gap: 40px;
              }
              .gw-supports-grid {
                grid-template-columns: repeat(2, 1fr);
              }
              .gw-roadmap-grid {
                grid-template-columns: repeat(2, 1fr);
              }
              .gw-roadmap-connector {
                display: none !important;
              }
            }
            @media (max-width: 640px) {
              .gw-hero-frame img {
                height: 440px;
              }
              .gw-supports-grid,
              .gw-roadmap-grid {
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
            padding: '64px 0 88px',
            background:
              'radial-gradient(ellipse 75% 55% at 50% 0%, rgba(230, 57, 70, 0.20) 0%, rgba(230, 57, 70, 0.05) 48%, transparent 75%), #08090C',
            borderBottom: '1px solid rgba(255, 255, 255, 0.07)'
          }}
        >
          <ModernCityBg opacity={0.34} />

          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            {/* Centered Breadcrumb & Title Block */}
            <div className="m3-reveal is-visible" style={{ textAlign: 'center', maxWidth: '940px', margin: '0 auto 44px' }}>
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
                  marginBottom: '22px'
                }}
              >
                <Link href="/" style={{ color: 'rgba(255, 255, 255, 0.75)', textDecoration: 'none' }}>
                  {copy.home}
                </Link>
                <span style={{ opacity: 0.35 }}>/</span>
                <span style={{ color: '#FF6B76', fontWeight: 600 }}>{copy.breadcrumb}</span>
              </nav>

              <div>
                <div className="gw-eyebrow-pill">
                  <span className="gw-eyebrow-dot" />
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
                  margin: '0 0 28px'
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

              {/* Quick Corridor Anchor Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '14px' }}>
                <a
                  href="#china-to-indonesia"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '13px 26px',
                    borderRadius: '999px',
                    background: 'linear-gradient(135deg, #E63946 0%, #B81D2A 100%)',
                    color: '#FFFFFF',
                    fontSize: '14px',
                    fontWeight: 700,
                    textDecoration: 'none',
                    boxShadow: '0 10px 26px rgba(230, 57, 70, 0.4)'
                  }}
                >
                  <span style={{ opacity: 0.85, fontWeight: 800 }}>CN &rarr; ID</span>
                  <span>{copy.cnIdTitle}</span>
                  <Arrow size={14} />
                </a>

                <a
                  href="#indonesia-to-china"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '13px 26px',
                    borderRadius: '999px',
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.16)',
                    color: '#FFFFFF',
                    fontSize: '14px',
                    fontWeight: 700,
                    textDecoration: 'none'
                  }}
                >
                  <span style={{ color: '#FF7B7B', fontWeight: 800 }}>ID &rarr; CN</span>
                  <span>{copy.idCnTitle}</span>
                  <Arrow size={14} />
                </a>
              </div>
            </div>

            {/* Large Panoramic Image with Embedded Statement Inside */}
            <div className="gw-hero-frame m3-reveal m3-reveal--scale is-visible m3-delay-1">
              <img
                src="/images/hero_globe_china_indonesia.webp"
                alt={copy.breadcrumb}
                loading="lazy"
                decoding="async"
              />

              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(180deg, rgba(8, 9, 12, 0.25) 0%, rgba(8, 9, 12, 0.55) 45%, rgba(8, 9, 12, 0.95) 100%), radial-gradient(circle at 20% 85%, rgba(230, 57, 70, 0.32) 0%, transparent 55%)'
                }}
              />

              <div
                style={{
                  position: 'absolute',
                  top: '24px',
                  left: '26px',
                  right: '26px',
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
                    background: 'rgba(10, 12, 18, 0.84)',
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
                  {copy.eyebrow}
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
                  INDONESIA &harr; CHINA STRATEGIC CORRIDOR
                </span>
              </div>

              <div
                style={{
                  position: 'absolute',
                  bottom: '30px',
                  left: '30px',
                  right: '30px',
                  zIndex: 2
                }}
              >
                <div
                  style={{
                    maxWidth: '980px',
                    margin: '0 auto',
                    padding: '30px 36px',
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
                      fontSize: 'clamp(17px, 2.1vw, 24px)',
                      fontWeight: 700,
                      lineHeight: 1.45,
                      color: '#FFFFFF',
                      margin: 0,
                      letterSpacing: '-0.01em'
                    }}
                  >
                    &ldquo;{copy.heroLead}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 01 · GATEWAY INTRODUCTION (2-COLUMN BALANCED NARRATIVE & VISUAL)          */}
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
            <div className="gw-split-2">
              <div className="m3-reveal m3-reveal--left" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div>
                  <div className="gw-eyebrow-pill">
                    <span className="gw-eyebrow-dot" />
                    <span>{copy.introEyebrow}</span>
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
                  {copy.introTitle}
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                  <p style={{ fontSize: '17px', fontWeight: 500, lineHeight: 1.72, color: 'rgba(255, 255, 255, 0.92)', margin: 0 }}>
                    {copy.introP2}
                  </p>
                  <p style={{ fontSize: '15.5px', lineHeight: 1.75, color: 'rgba(255, 255, 255, 0.72)', margin: 0 }}>
                    {copy.introP3}
                  </p>
                  <p style={{ fontSize: '15.5px', lineHeight: 1.75, color: 'rgba(255, 255, 255, 0.72)', margin: 0 }}>
                    {copy.introP4}
                  </p>
                </div>

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
                  <div style={{ fontSize: '16px', fontWeight: 600, fontStyle: 'italic', color: '#FFFFFF', lineHeight: 1.6 }}>
                    &ldquo;{copy.introQuote}&rdquo;
                  </div>
                </div>
              </div>

              <div className="m3-reveal m3-reveal--right m3-delay-1">
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
                    src="/images/city_orbiting_cards.webp"
                    alt="Jakarta – Shanghai Strategic Gateway"
                    loading="lazy"
                    decoding="async"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      filter: 'contrast(1.08) brightness(0.88)'
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
                      {isId ? 'DUA PASAR · SATU JEMBATAN' : 'TWO MARKETS · ONE BRIDGE'}
                    </span>
                  </div>

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
                      {isId ? 'JAKARTA – SHANGHAI, DUA PASAR' : 'JAKARTA – SHANGHAI, TWO MARKETS'}
                    </div>
                    <div style={{ fontSize: '18px', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.35 }}>
                      {copy.introTitle}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 02 & 03 · BILATERAL CORRIDORS (CHINA -> INDONESIA & INDONESIA -> CHINA)   */}
        {/* ========================================================================= */}
        {corridors.map((c, idx) => (
          <section
            key={c.id}
            id={c.id}
            style={{
              position: 'relative',
              padding: '112px 0',
              scrollMarginTop: '96px',
              background:
                idx % 2 === 0
                  ? 'radial-gradient(ellipse 80% 55% at 85% 20%, rgba(230, 57, 70, 0.14) 0%, transparent 70%), #07080B'
                  : 'radial-gradient(ellipse 80% 55% at 15% 20%, rgba(230, 57, 70, 0.14) 0%, transparent 70%), #0A0B0F',
              borderBottom: '1px solid rgba(255, 255, 255, 0.07)'
            }}
          >
            <ModernCityBg opacity={0.25} flip={idx % 2 === 1} />

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
              {/* Top 2-Column Corridor Narrative & Real Photography */}
              <div className="gw-split-2" style={{ marginBottom: '64px' }}>
                <div
                  className={`m3-reveal ${idx % 2 === 0 ? 'm3-reveal--left' : 'm3-reveal--right'}`}
                  style={{ order: idx % 2 === 0 ? 1 : 2, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                >
                  <div>
                    <div className="gw-eyebrow-pill">
                      <span className="gw-eyebrow-dot" />
                      <span>{c.badge}</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '8px', flexWrap: 'wrap' }}>
                    <span
                      style={{
                        padding: '6px 14px',
                        borderRadius: '10px',
                        background: 'rgba(230, 57, 70, 0.16)',
                        border: '1px solid rgba(230, 57, 70, 0.45)',
                        color: '#FF7B7B',
                        fontSize: '14px',
                        fontWeight: 800,
                        letterSpacing: '0.06em'
                      }}
                    >
                      {c.flag}
                    </span>
                    <h2
                      style={{
                        fontSize: 'clamp(30px, 3.6vw, 46px)',
                        fontWeight: 800,
                        letterSpacing: '-0.025em',
                        color: '#FFFFFF',
                        margin: 0
                      }}
                    >
                      {c.title}
                    </h2>
                  </div>

                  <div style={{ fontSize: '18px', fontWeight: 700, color: '#FF7B7B', marginBottom: '18px' }}>
                    {c.subtitle}
                  </div>

                  <h3 style={{ fontSize: '21px', fontWeight: 700, lineHeight: 1.4, color: '#FFFFFF', margin: '0 0 20px' }}>
                    {c.headline}
                  </h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    {c.paragraphs.map((p, i) => (
                      <p
                        key={i}
                        style={{
                          fontSize: '15.5px',
                          lineHeight: 1.75,
                          color: i === 0 ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.72)',
                          margin: 0
                        }}
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </div>

                <div
                  className={`m3-reveal ${idx % 2 === 0 ? 'm3-reveal--right' : 'm3-reveal--left'} m3-delay-1`}
                  style={{ order: idx % 2 === 0 ? 2 : 1 }}
                >
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
                      src={c.image}
                      alt={c.photo}
                      loading="lazy"
                      decoding="async"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                        filter: 'contrast(1.08) brightness(0.86)'
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

                    <div style={{ position: 'absolute', top: '22px', left: '22px' }}>
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '8px',
                          padding: '7px 14px',
                          borderRadius: '999px',
                          background: 'rgba(10, 12, 16, 0.85)',
                          border: '1px solid rgba(230, 57, 70, 0.45)',
                          backdropFilter: 'blur(10px)',
                          fontSize: '11px',
                          fontWeight: 700,
                          letterSpacing: '0.08em',
                          color: '#FFFFFF',
                          textTransform: 'uppercase'
                        }}
                      >
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#E63946' }} />
                        {c.flag} &middot; {c.title}
                      </span>
                    </div>

                    <div
                      style={{
                        position: 'absolute',
                        bottom: '24px',
                        left: '24px',
                        right: '24px',
                        padding: '22px 24px',
                        borderRadius: '18px',
                        background: 'rgba(12, 14, 20, 0.90)',
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
                        {c.photo}
                      </div>
                      <div style={{ fontSize: '18px', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.35 }}>
                        {c.headline}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 6 Corridor Support Pillars Grid */}
              <div>
                <div
                  className="m3-reveal"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    marginBottom: '28px'
                  }}
                >
                  <span
                    style={{
                      fontSize: '13px',
                      fontWeight: 800,
                      letterSpacing: '0.1em',
                      color: '#FF7B7B',
                      textTransform: 'uppercase'
                    }}
                  >
                    {c.supportTitle}
                  </span>
                  <div
                    style={{
                      flex: 1,
                      height: '1px',
                      background: 'linear-gradient(90deg, rgba(230, 57, 70, 0.5) 0%, rgba(255, 255, 255, 0.06) 100%)'
                    }}
                  />
                </div>

                <div className="gw-supports-grid">
                  {c.supports.map((s, i) => (
                    <div
                      key={i}
                      className={`gw-glass-card m3-reveal m3-delay-${(i % 6) + 1}`}
                      style={{
                        padding: '30px 28px',
                        borderTop: '3px solid #E63946',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                      }}
                    >
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
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
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <span style={{ fontSize: '11px', fontWeight: 700, color: 'rgba(255, 255, 255, 0.4)', letterSpacing: '0.08em' }}>
                            {c.flag}
                          </span>
                        </div>

                        <h4 style={{ fontSize: '18.5px', fontWeight: 700, color: '#FFFFFF', margin: '0 0 10px', lineHeight: 1.35 }}>
                          {s.title}
                        </h4>

                        <p style={{ fontSize: '14.5px', lineHeight: 1.68, color: 'rgba(255, 255, 255, 0.68)', margin: 0 }}>
                          {s.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Corridor Closing Callout & Action Button */}
                <div
                  className="m3-reveal"
                  style={{
                    marginTop: '34px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '24px',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '28px 34px',
                    borderRadius: '20px',
                    background:
                      'linear-gradient(135deg, rgba(230, 57, 70, 0.16) 0%, rgba(16, 19, 27, 0.95) 100%)',
                    border: '1px solid rgba(230, 57, 70, 0.38)'
                  }}
                >
                  <p style={{ margin: 0, flex: '1 1 460px', fontSize: '15.5px', fontWeight: 500, lineHeight: 1.65, color: 'rgba(255, 255, 255, 0.9)' }}>
                    {c.closing}
                  </p>
                  <Link
                    href="/contact"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '14px 26px',
                      borderRadius: '999px',
                      background: 'linear-gradient(135deg, #E63946 0%, #B81D2A 100%)',
                      color: '#FFFFFF',
                      fontSize: '14px',
                      fontWeight: 700,
                      textDecoration: 'none',
                      boxShadow: '0 10px 26px rgba(230, 57, 70, 0.4)',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    <span>{c.cta}</span>
                    <Arrow size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* ========================================================================= */}
        {/* 04 · OUR CROSS-BORDER PROCESS (5-STAGE CONNECTED ROADMAP)                 */}
        {/* ========================================================================= */}
        <section
          id="process"
          style={{
            position: 'relative',
            padding: '112px 0',
            scrollMarginTop: '96px',
            background:
              'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(230, 57, 70, 0.14) 0%, transparent 70%), #07080B',
            borderBottom: '1px solid rgba(255, 255, 255, 0.07)'
          }}
        >
          <ModernCityBg opacity={0.28} />

          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div className="m3-reveal" style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 60px' }}>
              <div className="gw-eyebrow-pill">
                <span className="gw-eyebrow-dot" />
                <span>{copy.processEyebrow}</span>
              </div>
              <h2
                style={{
                  fontSize: 'clamp(30px, 3.5vw, 46px)',
                  fontWeight: 800,
                  lineHeight: 1.15,
                  letterSpacing: '-0.025em',
                  color: '#FFFFFF',
                  margin: 0
                }}
              >
                {copy.processTitle}
              </h2>
            </div>

            <div className="gw-roadmap-grid">
              {copy.steps.map((step, idx) => (
                <div
                  key={step.num}
                  className={`m3-reveal m3-delay-${idx + 1}`}
                  style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column' }}
                >
                  <div style={{ position: 'relative', display: 'flex', alignItems: 'center', marginBottom: '22px' }}>
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #E63946 0%, #9E1B24 100%)',
                        border: '2px solid rgba(255, 255, 255, 0.35)',
                        color: '#FFFFFF',
                        fontWeight: 800,
                        fontSize: '14px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 0 24px rgba(230, 57, 70, 0.55)',
                        position: 'relative',
                        zIndex: 3,
                        flexShrink: 0
                      }}
                    >
                      {step.num}
                    </div>

                    {idx < copy.steps.length - 1 && (
                      <div
                        className="gw-roadmap-connector"
                        style={{
                          position: 'absolute',
                          left: '48px',
                          right: '-24px',
                          top: '50%',
                          height: '2px',
                          background: 'linear-gradient(90deg, #E63946 0%, rgba(230, 57, 70, 0.25) 100%)',
                          transform: 'translateY(-50%)',
                          zIndex: 1
                        }}
                      />
                    )}
                  </div>

                  <div
                    className="gw-glass-card"
                    style={{
                      padding: '28px 24px',
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <h3
                      style={{
                        fontSize: '20px',
                        fontWeight: 800,
                        color: '#FFFFFF',
                        margin: '0 0 10px',
                        letterSpacing: '-0.01em'
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '14px',
                        lineHeight: 1.68,
                        color: 'rgba(255, 255, 255, 0.68)',
                        margin: 0
                      }}
                    >
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="m3-reveal"
              style={{
                marginTop: '36px',
                padding: '18px 26px',
                borderRadius: '14px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                justifyContent: 'center',
                textAlign: 'center'
              }}
            >
              <span style={{ color: '#E63946', fontSize: '16px', flexShrink: 0 }}>&#9679;</span>
              <span style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.6 }}>
                {copy.processNote}
              </span>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 05 · EXECUTIVE CTA BAND                                                   */}
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
              className="m3-reveal m3-reveal--scale"
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
                <div className="gw-eyebrow-pill" style={{ marginBottom: '14px' }}>
                  <span className="gw-eyebrow-dot" />
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
      </div>
    </MainLayout>
  );
}
