import React, { useState, useEffect } from 'react';
import SeoHead from '@/Components/SeoHead';
import Link from '@/Components/LocalizedLink';
import MainLayout from '@/Layouts/MainLayout';
import { useTranslation } from '@/Contexts/TranslationContext';

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

export default function About() {
  const { lang } = useTranslation();
  const isId = lang === 'id';
  const [selectedPerson, setSelectedPerson] = useState(null);

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

  const copy = isId
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

        overviewEyebrow: '01 · GAMBARAN PERUSAHAAN',
        overviewTitle: 'Menjembatani Ambisi Komersial dengan Konteks Pasar Lokal.',
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

        vmEyebrow: '02 · VISI & MISI KAMI',
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

        leadEyebrow: '03 · KEPEMIMPINAN & KAPABILITAS MULTIDISIPLIN',
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

        peopleEyebrow: '04 · THE PEOPLE BEHIND 8 VICE',
        peopleTitle: 'Sosok di Balik 8 Vice.',
        peopleLead:
          'Sinergi para pemimpin strategis yang menggabungkan pengalaman lintas industri, jaringan kelembagaan, dan pemahaman budaya bisnis Indonesia–Tiongkok. Klik pada setiap profil untuk membaca pesan strategis dari tim kami.',
        peopleClickHint: 'Klik untuk membaca pesan & profil',
        peopleModalClose: 'Tutup Profil',
        peopleModalLabel: 'PESAN DARI TIM KEPEMIMPINAN 8 VICE',
        people: [
          {
            id: 'helda',
            callName: 'Ibu Helda',
            fullName: 'Nama Lengkap, S.E., M.M.',
            nameNote: 'Ibu Helda',
            subtitle: 'Co-Founder & Managing Partner · Strategic Advisory & Institutional Relations',
            shortBio:
              'Memimpin arah penasihat strategis, hubungan kelembagaan, serta pengembangan kolaborasi tingkat eksekutif antara pemangku kepentingan di Indonesia dan Tiongkok.',
            photo: '/images/profil/siti_nurhaliza.webp',
            focusTags: ['Strategic Advisory', 'Institutional Engagement', 'Public-Private Dialogue'],
            socials: {
              linkedin: 'https://www.linkedin.com/company/8-vice/',
              instagram: 'https://www.instagram.com/8viceofficial',
              email: 'mailto:hello@8vice.com'
            },
            quoteTitle: 'Membangun Kepercayaan sebagai Fondasi Ekspansi Lintas Batas',
            message: [
              '“Dalam setiap inisiatif lintas negara antara Indonesia dan Tiongkok, keberhasilan jangka panjang tidak pernah ditentukan oleh kecepatan transaksi semata, melainkan oleh kedalaman kepercayaan dan pemahaman terhadap konteks lokal.”',
              '“Di 8 Vice, komitmen kami adalah memastikan setiap klien melangkah dengan kejelasan strategis, terhubung dengan pemangku kepentingan yang tepat, dan membangun kemitraan yang memberikan nilai berkelanjutan bagi kedua belah pihak.”'
            ]
          },
          {
            id: 'gandhi',
            callName: 'Pak Gandhi',
            fullName: 'Nama Lengkap, S.I.Kom., M.B.A.',
            nameNote: 'Pak Gandhi',
            subtitle: 'Co-Founder & Partner · Strategic Communications, Media & Brand Positioning',
            shortBio:
              'Mengarahkan strategi komunikasi korporat, penempatan posisi pasar (market positioning), hubungan media, dan manajemen reputasi lintas budaya.',
            photo: '/images/profil/ahmad_rizky.webp',
            focusTags: ['Strategic Communications', 'Media Relations', 'Brand Localization'],
            socials: {
              linkedin: 'https://www.linkedin.com/company/8-vice/',
              instagram: 'https://www.instagram.com/8viceofficial',
              email: 'mailto:hello@8vice.com'
            },
            quoteTitle: 'Menjembatani Persepsi melalui Komunikasi yang Kredibel',
            message: [
              '“Memasuki pasar baru berarti memperkenalkan identitas dan nilai perusahaan kepada audiens yang memiliki cara pandang, budaya, dan ekspektasi yang berbeda.”',
              '“Melalui pendekatan komunikasi strategis dan hubungan media yang terarah, kami membantu perusahaan membangun narasi yang relevan, menjaga reputasi korporat, serta memenangkan kepercayaan publik di pasar Indonesia maupun Tiongkok.”'
            ]
          },
          {
            id: 'christine',
            callName: 'Ci Christine',
            fullName: 'Nama Lengkap, B.A., M.Sc.',
            nameNote: 'Ci Christine',
            subtitle: 'Co-Founder & Partner · China–Indonesia Cross-Border Business Development',
            shortBio:
              'Memfokuskan keahlian pada konektivitas bisnis bilateral Indonesia–Tiongkok, kurasi mitra strategis B2B, serta fasilitasi proyek dan delegasi lintas batas.',
            photo: '/images/profil/wei_chen.webp',
            focusTags: ['Indonesia–China Corridor', 'Business Matching', 'Cross-Cultural Advisory'],
            socials: {
              linkedin: 'https://www.linkedin.com/company/8-vice/',
              instagram: 'https://www.instagram.com/8viceofficial',
              email: 'mailto:hello@8vice.com'
            },
            quoteTitle: 'Menghubungkan Dua Budaya Bisnis Menjadi Peluang Nyata',
            message: [
              '“Perusahaan Tiongkok dan Indonesia memiliki potensi sinergi yang luar biasa, namun sering kali terkendala oleh perbedaan bahasa bisnis, ritme negosiasi, dan struktur ekosistem lokal.”',
              '“Peran kami di 8 Vice adalah menjadi jembatan aktif yang menerjemahkan ambisi bisnis dari kedua sisi menjadi kolaborasi yang konkret, saling menguntungkan, dan siap dieksekusi di lapangan.”'
            ]
          }
        ],

        approachEyebrow: '05 · PENDEKATAN STRATEGIS KAMI',
        approachTitle: 'Dari Pemahaman Pasar Menuju Peluang Bisnis Nyata.',
        approachLead:
          'Setiap peluang lintas negara memiliki tantangan yang berbeda. Pendekatan 5 tahap kami dirancang untuk membantu klien melangkah dengan pemahaman yang jernih mengenai tujuan, prioritas, dan langkah selanjutnya.',
        steps: [
          {
            num: '01',
            title: 'Understand',
            sub: 'Memahami Tujuan',
            desc: 'Kami memulai dengan memahami bisnis klien, sasaran ekspansi, target pasar, serta tantangan spesifik yang dihadapi.'
          },
          {
            num: '02',
            title: 'Assess',
            sub: 'Mengkaji Pasar',
            desc: 'Kami mengevaluasi kondisi pasar yang relevan, lanskap pemangku kepentingan, potensi peluang, serta kemungkinan hambatan masuk.'
          },
          {
            num: '03',
            title: 'Strategize',
            sub: 'Merumuskan Strategi',
            desc: 'Kami menyusun pendekatan khusus yang mencakup market positioning, prioritas kemitraan, strategi keterlibatan, dan langkah praktis berikutnya.'
          },
          {
            num: '04',
            title: 'Connect',
            sub: 'Menghubungkan Mitra',
            desc: 'Bila relevan, kami memfasilitasi perkenalan dan keterlibatan dengan pelaku bisnis, institusi, serta calon mitra strategis yang tepat.'
          },
          {
            num: '05',
            title: 'Develop',
            sub: 'Mengembangkan Kolaborasi',
            desc: 'Kami mendukung koordinasi tindak lanjut, diskusi kemitraan, dan pengembangan proyek berdasarkan ruang lingkup kerja yang disepakati.'
          }
        ],
        approachNote:
          'Pendekatan kami disesuaikan dengan kebutuhan setiap klien. Ruang lingkup, hasil kerja (deliverables), dan tanggung jawab implementasi disepakati bersama di awal setiap penugasan.',

        valuesEyebrow: '06 · NILAI-NILAI INTI KAMI',
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
        eyebrow: 'ABOUT 8 VICE · BILATERAL STRATEGIC ADVISORY',
        heroTitleLine1: 'Built on Insight.',
        heroTitleLine2: 'Driven by Connectivity.',
        heroSubtitle:
          'Strategic Advisory, Cross-Border Partnerships, and Market Engagement Across Indonesia and China.',
        heroBannerBadge: 'OUR FOUNDING MANDATE · INDONESIA–CHINA CORRIDOR',
        heroBannerQuote:
          '8 Vice was established to help businesses navigate the opportunities and complexities of cross-border expansion, with a particular focus on Indonesia and China.',
        heroBannerSub:
          'Bridging local market understanding, trusted stakeholder relationships, and practical execution across two of Asia’s most dynamic economies.',

        overviewEyebrow: '01 · COMPANY OVERVIEW',
        overviewTitle: 'Bridging Commercial Ambition with Local Market Context.',
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

        vmEyebrow: '02 · VISION & MISSION',
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

        leadEyebrow: '03 · FOUNDER & LEADERSHIP PERSPECTIVE',
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

        peopleEyebrow: '04 · THE PEOPLE BEHIND 8 VICE',
        peopleTitle: 'The People Behind 8 Vice.',
        peopleLead:
          'Meet the multidisciplinary leaders driving our strategic advisory, stakeholder connectivity, and cross-border execution across Indonesia and China. Click any profile card to read a personal message from our team.',
        peopleClickHint: 'Click to read message & profile',
        peopleModalClose: 'Close Profile',
        peopleModalLabel: 'A MESSAGE FROM THE 8 VICE LEADERSHIP TEAM',
        people: [
          {
            id: 'helda',
            callName: 'Ibu Helda',
            fullName: 'Nama Lengkap, S.E., M.M.',
            nameNote: 'Ibu Helda',
            subtitle: 'Co-Founder & Managing Partner · Strategic Advisory & Institutional Relations',
            shortBio:
              'Leading corporate strategic advisory, institutional stakeholder engagement, and executive-level collaboration across Indonesia and China.',
            photo: '/images/profil/siti_nurhaliza.webp',
            focusTags: ['Strategic Advisory', 'Institutional Engagement', 'Public-Private Dialogue'],
            socials: {
              linkedin: 'https://www.linkedin.com/company/8-vice/',
              instagram: 'https://www.instagram.com/8viceofficial',
              email: 'mailto:hello@8vice.com'
            },
            quoteTitle: 'Building Trust as the Foundation of Cross-Border Growth',
            message: [
              '“In every cross-border initiative between Indonesia and China, sustainable success is never defined by the speed of a transaction alone, but by the depth of trust and local context behind it.”',
              '“At 8 Vice, our commitment is to ensure that every client moves forward with strategic clarity, connects with the right institutional and commercial stakeholders, and builds partnerships that create lasting mutual value.”'
            ]
          },
          {
            id: 'gandhi',
            callName: 'Pak Gandhi',
            fullName: 'Nama Lengkap, S.I.Kom., M.B.A.',
            nameNote: 'Pak Gandhi',
            subtitle: 'Co-Founder & Partner · Strategic Communications, Media & Brand Positioning',
            shortBio:
              'Directing strategic corporate communications, market positioning, cross-cultural media relations, and executive reputation management.',
            photo: '/images/profil/ahmad_rizky.webp',
            focusTags: ['Strategic Communications', 'Media Relations', 'Brand Localization'],
            socials: {
              linkedin: 'https://www.linkedin.com/company/8-vice/',
              instagram: 'https://www.instagram.com/8viceofficial',
              email: 'mailto:hello@8vice.com'
            },
            quoteTitle: 'Bridging Perceptions Through Credible Communication',
            message: [
              '“Entering a new market means introducing your corporate identity and value proposition to stakeholders with distinct cultural perspectives, media landscapes, and expectations.”',
              '“Through integrated strategic communications and trusted media engagement, we help organizations craft resonant narratives, safeguard corporate reputation, and earn long-term credibility across Indonesia and China.”'
            ]
          },
          {
            id: 'christine',
            callName: 'Ci Christine',
            fullName: 'Nama Lengkap, B.A., M.Sc.',
            nameNote: 'Ci Christine',
            subtitle: 'Co-Founder & Partner · China–Indonesia Cross-Border Business Development',
            shortBio:
              'Spearheading bilateral China–Indonesia business connectivity, curated B2B partner matching, and cross-border project facilitation.',
            photo: '/images/profil/wei_chen.webp',
            focusTags: ['Indonesia–China Corridor', 'Business Matching', 'Cross-Cultural Advisory'],
            socials: {
              linkedin: 'https://www.linkedin.com/company/8-vice/',
              instagram: 'https://www.instagram.com/8viceofficial',
              email: 'mailto:hello@8vice.com'
            },
            quoteTitle: 'Connecting Two Business Cultures into Actionable Opportunity',
            message: [
              '“Chinese and Indonesian enterprises share extraordinary complementary strengths, yet promising opportunities often stall due to differences in business customs, communication styles, and local networks.”',
              '“Our role at 8 Vice is to serve as an active bridge—translating commercial ambition on both sides into structured, high-trust collaborations that are ready for real-world execution.”'
            ]
          }
        ],

        approachEyebrow: '05 · OUR STRATEGIC APPROACH',
        approachTitle: 'From Market Understanding to Business Opportunities.',
        approachLead:
          'Every cross-border opportunity comes with different challenges. Our five-stage methodology is designed to help clients move through the process with a clear understanding of their objectives, priorities, and next steps.',
        steps: [
          {
            num: '01',
            title: 'Understand',
            sub: 'Client Objectives & Context',
            desc: "We begin by understanding the client's business, expansion objectives, target market, and specific challenges."
          },
          {
            num: '02',
            title: 'Assess',
            sub: 'Market & Stakeholder Landscape',
            desc: 'We evaluate relevant market conditions, stakeholder landscapes, potential opportunities, and possible barriers to entry.'
          },
          {
            num: '03',
            title: 'Strategize',
            sub: 'Tailored Action Roadmap',
            desc: 'We develop a tailored approach covering market positioning, partnership priorities, engagement strategies, and practical next steps.'
          },
          {
            num: '04',
            title: 'Connect',
            sub: 'Curated Introductions',
            desc: 'Where appropriate, we facilitate introductions and engagement with relevant businesses, institutions, and potential strategic partners.'
          },
          {
            num: '05',
            title: 'Develop',
            sub: 'Execution & Follow-Through',
            desc: 'We support follow-up coordination, partnership discussions, and project development based on the agreed scope of work.'
          }
        ],
        approachNote:
          'Our approach is tailored to the needs of each client. The scope, deliverables, and implementation responsibilities are agreed upon at the beginning of every engagement.',

        valuesEyebrow: '06 · OUR CORE VALUES',
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
            .about-social-btn {
              width: 36px;
              height: 36px;
              border-radius: 10px;
              background: rgba(255, 255, 255, 0.05);
              border: 1px solid rgba(255, 255, 255, 0.12);
              color: rgba(255, 255, 255, 0.78);
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
              grid-template-columns: repeat(3, 1fr);
              gap: 30px;
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
            .about-roadmap-grid {
              display: grid;
              grid-template-columns: repeat(5, 1fr);
              gap: 24px;
              position: relative;
            }
            .about-values-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 26px;
            }
            @media (max-width: 1024px) {
              .about-split-2 {
                grid-template-columns: 1fr;
                gap: 40px;
              }
              .about-foundations-grid,
              .about-people-grid {
                grid-template-columns: 1fr;
              }
              .about-mission-card,
              .about-mission-card--wide {
                grid-column: span 6;
              }
              .about-roadmap-grid {
                grid-template-columns: repeat(2, 1fr);
              }
              .about-roadmap-connector {
                display: none !important;
              }
              .about-values-grid {
                grid-template-columns: repeat(2, 1fr);
              }
            }
            @media (max-width: 640px) {
              .about-hero-frame img {
                height: 440px;
              }
              .about-domains-grid,
              .about-roadmap-grid,
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
                src="/images/china_city_network.jpg"
                alt="8 Vice Indonesia-China Cross-Border Gateway"
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
                    src="/images/executive_profile_bw.jpg"
                    alt="8 Vice Executive Advisory"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      filter: 'grayscale(100%) contrast(1.12) brightness(0.9)'
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

            {/* Visual Bridge Connecting Overview to the 3 Essential Foundations */}
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
            <div className="about-anim" style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 56px' }}>
              <div className="about-eyebrow-pill">
                <span className="about-eyebrow-dot" />
                <span>{copy.vmEyebrow}</span>
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
                {copy.vmHeading}
              </h2>
              <p style={{ fontSize: '16.5px', lineHeight: 1.65, color: 'rgba(255, 255, 255, 0.7)', margin: 0 }}>
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
                    src="/images/consultation_advisory_bw.jpg"
                    alt="8 Vice Leadership & Strategic Advisory"
                    style={{
                      width: '100%',
                      height: '500px',
                      objectFit: 'cover',
                      display: 'block',
                      filter: 'grayscale(100%) contrast(1.12) brightness(0.88)'
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

            {/* 3 Executive Cards: Ibu Helda, Pak Gandhi, Ci Christine */}
            <div className="about-people-grid">
              {copy.people.map((person, idx) => (
                <div
                  key={person.id}
                  onClick={() => setSelectedPerson(person)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedPerson(person);
                    }
                  }}
                  className={`about-glass-card about-person-card about-anim about-delay-${idx + 1}`}
                >
                  {/* Top Portrait Area */}
                  <div style={{ position: 'relative', height: '340px', overflow: 'hidden', background: '#10131C' }}>
                    <img
                      src={person.photo}
                      alt={person.callName}
                      className="about-person-img"
                    />
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background:
                          'linear-gradient(180deg, rgba(8, 9, 12, 0.1) 0%, rgba(8, 9, 12, 0.35) 55%, rgba(12, 14, 20, 0.98) 100%)'
                      }}
                    />

                    {/* Top Call-Name Badge */}
                    <div style={{ position: 'absolute', top: '18px', left: '18px' }}>
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '8px',
                          padding: '6px 14px',
                          borderRadius: '999px',
                          background: 'rgba(10, 12, 18, 0.85)',
                          border: '1px solid rgba(230, 57, 70, 0.45)',
                          backdropFilter: 'blur(10px)',
                          color: '#FFFFFF',
                          fontSize: '12px',
                          fontWeight: 700,
                          letterSpacing: '0.04em'
                        }}
                      >
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#E63946' }} />
                        {person.callName}
                      </span>
                    </div>

                    {/* Social Media Floating Icons on Portrait Top-Right */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '16px',
                        right: '16px',
                        display: 'flex',
                        gap: '8px'
                      }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <a
                        href={person.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="about-social-btn"
                        aria-label={`${person.callName} LinkedIn`}
                        title="LinkedIn"
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect x="2" y="9" width="4" height="12" />
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                      </a>
                      <a
                        href={person.socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="about-social-btn"
                        aria-label={`${person.callName} Instagram`}
                        title="Instagram"
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                      </a>
                      <a
                        href={person.socials.email}
                        className="about-social-btn"
                        aria-label={`Email ${person.callName}`}
                        title="Email"
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Card Body: Full Name & Degree Placeholder, Subtitle, Tags, and Modal Trigger */}
                  <div
                    style={{
                      padding: '26px 28px 28px',
                      display: 'flex',
                      flexDirection: 'column',
                      flex: 1,
                      justifyContent: 'space-between'
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: '11.5px',
                          fontWeight: 700,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: '#FF7B7B',
                          marginBottom: '6px'
                        }}
                      >
                        {person.nameNote}
                      </div>

                      <h3
                        style={{
                          fontSize: '22px',
                          fontWeight: 800,
                          color: '#FFFFFF',
                          margin: '0 0 8px',
                          letterSpacing: '-0.015em',
                          lineHeight: 1.25
                        }}
                      >
                        {person.fullName}
                      </h3>

                      <div
                        style={{
                          fontSize: '13.5px',
                          fontWeight: 600,
                          color: 'rgba(255, 255, 255, 0.85)',
                          lineHeight: 1.45,
                          marginBottom: '14px',
                          paddingBottom: '14px',
                          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
                        }}
                      >
                        {person.subtitle}
                      </div>

                      <p
                        style={{
                          fontSize: '14px',
                          lineHeight: 1.65,
                          color: 'rgba(255, 255, 255, 0.65)',
                          margin: '0 0 18px'
                        }}
                      >
                        {person.shortBio}
                      </p>

                      {/* Focus Tags */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '22px' }}>
                        {person.focusTags.map((tag) => (
                          <span
                            key={tag}
                            style={{
                              padding: '4px 10px',
                              borderRadius: '999px',
                              background: 'rgba(255, 255, 255, 0.04)',
                              border: '1px solid rgba(255, 255, 255, 0.08)',
                              fontSize: '11px',
                              fontWeight: 600,
                              color: 'rgba(255, 255, 255, 0.65)'
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Interactive Button to Open Executive Quote Modal */}
                    <div
                      className="about-person-cta"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '12px 18px',
                        borderRadius: '12px',
                        background: 'rgba(230, 57, 70, 0.12)',
                        border: '1px solid rgba(230, 57, 70, 0.35)',
                        color: '#FF7B7B',
                        fontSize: '13px',
                        fontWeight: 700,
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <span>{copy.peopleClickHint}</span>
                      <span>&rarr;</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 05 · OUR STRATEGIC APPROACH (5-STAGE CONNECTED ROADMAP)                   */}
        {/* ========================================================================= */}
        <section
          style={{
            position: 'relative',
            padding: '112px 0',
            background:
              'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(230, 57, 70, 0.14) 0%, transparent 70%), #0A0B0F',
            borderBottom: '1px solid rgba(255, 255, 255, 0.07)'
          }}
        >
          <ModernCityBg opacity={0.28} flip />

          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div className="about-anim" style={{ textAlign: 'center', maxWidth: '860px', margin: '0 auto 64px' }}>
              <div className="about-eyebrow-pill">
                <span className="about-eyebrow-dot" />
                <span>{copy.approachEyebrow}</span>
              </div>
              <h2
                style={{
                  fontSize: 'clamp(30px, 3.5vw, 46px)',
                  fontWeight: 800,
                  lineHeight: 1.15,
                  letterSpacing: '-0.025em',
                  color: '#FFFFFF',
                  margin: '0 0 18px'
                }}
              >
                {copy.approachTitle}
              </h2>
              <p
                style={{
                  fontSize: '16.5px',
                  lineHeight: 1.7,
                  color: 'rgba(255, 255, 255, 0.72)',
                  margin: 0
                }}
              >
                {copy.approachLead}
              </p>
            </div>

            {/* 5-Stage Connected Roadmap */}
            <div className="about-roadmap-grid">
              {copy.steps.map((step, idx) => (
                <div
                  key={step.num}
                  className={`about-anim about-delay-${idx + 1}`}
                  style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column' }}
                >
                  {/* Top Glowing Node + Connector Line */}
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
                        className="about-roadmap-connector"
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

                  {/* Step Card */}
                  <div
                    className="about-glass-card"
                    style={{
                      padding: '28px 24px',
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <div
                      style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                        color: '#FF7B7B',
                        textTransform: 'uppercase',
                        marginBottom: '6px'
                      }}
                    >
                      {step.sub}
                    </div>
                    <h3
                      style={{
                        fontSize: '21px',
                        fontWeight: 800,
                        color: '#FFFFFF',
                        margin: '0 0 12px',
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

            {/* Governance & Scope Footnote Banner */}
            <div
              className="about-anim"
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
                {copy.approachNote}
              </span>
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
        {selectedPerson && (
          <div
            onClick={() => setSelectedPerson(null)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 99999,
              background: 'rgba(5, 7, 11, 0.85)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px',
              animation: 'aboutBackdropIn 0.25s ease forwards'
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: '760px',
                width: '100%',
                borderRadius: '26px',
                background: 'linear-gradient(165deg, #141824 0%, #0B0D14 100%)',
                border: '1px solid rgba(230, 57, 70, 0.45)',
                boxShadow: '0 32px 90px rgba(0, 0, 0, 0.8), 0 0 50px rgba(230, 57, 70, 0.18)',
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
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.14)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 10
                }}
              >
                &#10005;
              </button>

              {/* Modal Header with Portrait & Credentials */}
              <div
                style={{
                  padding: '36px 36px 28px',
                  background:
                    'radial-gradient(ellipse 80% 90% at 0% 0%, rgba(230, 57, 70, 0.22) 0%, transparent 70%)',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  gap: '24px',
                  alignItems: 'center',
                  flexWrap: 'wrap'
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
                    alt={selectedPerson.callName}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
                  />
                </div>

                <div style={{ flex: 1, minWidth: '240px' }}>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '4px 12px',
                      borderRadius: '999px',
                      background: 'rgba(230, 57, 70, 0.16)',
                      border: '1px solid rgba(230, 57, 70, 0.4)',
                      color: '#FF7B7B',
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      marginBottom: '10px'
                    }}
                  >
                    <span>{selectedPerson.callName}</span>
                  </div>

                  <h3
                    style={{
                      fontSize: '26px',
                      fontWeight: 800,
                      color: '#FFFFFF',
                      margin: '0 0 6px',
                      letterSpacing: '-0.02em'
                    }}
                  >
                    {selectedPerson.fullName}
                  </h3>

                  <div style={{ fontSize: '14px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.78)', marginBottom: '12px' }}>
                    {selectedPerson.subtitle}
                  </div>

                  {/* Social Links inside Modal */}
                  <div style={{ display: 'flex', gap: '8px' }}>
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
                    <a
                      href={selectedPerson.socials.email}
                      className="about-social-btn"
                      aria-label="Email"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Modal Body: Words / Message from 8 Vice Team */}
              <div style={{ padding: '32px 36px 36px' }}>
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
                  {selectedPerson.message.map((para, i) => (
                    <p
                      key={i}
                      style={{
                        fontSize: '15.5px',
                        lineHeight: 1.75,
                        color: 'rgba(255, 255, 255, 0.88)',
                        fontStyle: 'italic',
                        margin: 0
                      }}
                    >
                      {para}
                    </p>
                  ))}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {selectedPerson.focusTags.map((tag) => (
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
          </div>
        )}
      </div>
    </MainLayout>
  );
}
