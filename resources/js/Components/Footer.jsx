import React, { useState, useEffect } from 'react';
import Link from '@/Components/LocalizedLink';
import { usePage } from '@inertiajs/react';
import { useTranslation } from '@/Contexts/TranslationContext';
import ChatFloatingWidget from '@/Components/ChatFloatingWidget';

export default function Footer() {
  const { siteSettings } = usePage().props;
  const { lang, t } = useTranslation();
  const isId = lang === 'id';
  const isCn = lang === 'cn';
  const [activeLegalModal, setActiveLegalModal] = useState(null); // 'privacy' | 'terms' | null

  // Escape key listener for legal modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveLegalModal(null);
    };
    if (activeLegalModal) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeLegalModal]);

  const defaultTagline = isCn
    ? '通往印尼与中国的战略商业门户。'
    : isId
    ? 'Gerbang Strategis Anda Menuju Indonesia dan Tiongkok.'
    : 'Your Strategic Gateway to Indonesia and China.';

  const displayTagline = typeof siteSettings?.tagline === 'object'
    ? (siteSettings?.tagline?.[lang] || siteSettings?.tagline?.en || defaultTagline)
    : (siteSettings?.tagline || defaultTagline);

  const rawEmail = siteSettings?.email || 'hello@8vice.com';
  const cleanEmail = rawEmail.replace(/^mailto:/i, '').trim();
  const emailHref = `mailto:${cleanEmail}`;

  return (
    <>
      <footer className="footer" data-screen-label="Footer">
        <div className="container">
          <div className="footer__grid">
            
            {/* Column 1: Brand & Action */}
            <div className="footer__col footer__brand">
              <Link href="/" className="logo" aria-label="8vice home">
                <span className="logo__word">8vice</span>
                <span className="logo__dot"></span>
              </Link>
              <p className="footer__tag">{displayTagline}</p>
              
              <Link href="/contact" className="footer__cta-pill">
                <span>{isCn ? '预约免费咨询' : isId ? 'Konsultasi Gratis' : 'Book a Consultation'}</span>
                <svg className="ico ico-14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>

            {/* Column 2: Explore */}
            <div className="footer__col">
              <h3>{isCn ? '网站导航' : isId ? 'Eksplorasi' : 'Explore'}</h3>
              <div className="footer__nav-list">
                <Link href="/about">{isCn ? '关于我们' : isId ? 'Tentang Kami' : 'About Us'}</Link>
                <Link href="/services">{isCn ? '核心服务' : isId ? 'Layanan Kami' : 'Our Services'}</Link>
                <Link href="/gateway">{isCn ? '印中战略门户' : isId ? 'Gerbang Indonesia–China' : 'Indonesia–China Gateway'}</Link>
                <Link href="/industries">{isCn ? '重点行业与机遇' : isId ? 'Industri & Peluang' : 'Industries & Opportunities'}</Link>
                <Link href="/insights">{isCn ? '商业洞察与合作' : isId ? 'Wawasan & Kemitraan' : 'Insights & Partnerships'}</Link>
                <Link href="/client">{isCn ? '客户与合作伙伴' : isId ? 'Klien & Portofolio Mitra' : 'Clients & Brand Portfolio'}</Link>
                <Link href="/case-study">{isCn ? '成功案例分析' : isId ? 'Studi Kasus Ekspansi' : 'Client Case Studies'}</Link>
                <Link href="/career">{isCn ? '招贤纳士' : isId ? 'Karier di 8vice' : 'Careers & Opportunities'}</Link>
                <Link href="/contact">{isCn ? '联系我们' : isId ? 'Hubungi Kami' : 'Contact Us'}</Link>
              </div>
            </div>

            {/* Column 3: 6 Services */}
            <div className="footer__col">
              <h3>{isCn ? '核心服务' : isId ? 'Layanan Kami' : 'Our Services'}</h3>
              <div className="footer__nav-list">
                <Link href="/services/advisory">{t('nav.svc_strategic_advisory') || 'Strategic Advisory & Market Entry'}</Link>
                <Link href="/services/gov-relations">{t('nav.svc_gov_relations') || 'Government Relations'}</Link>
                <Link href="/services/business-matching">{t('nav.svc_business_matching') || 'Business Matching & Partnerships'}</Link>
                <Link href="/services/comms">{t('nav.svc_strategic_comms') || 'Strategic Communications'}</Link>
                <Link href="/services/media-relations">{t('nav.svc_media_relations') || (isId ? 'Hubungan Media & Komunikasi Krisis' : 'Media Relations & Crisis Communications')}</Link>
                <Link href="/services/investment">{t('nav.svc_investment_dev') || 'Investment & Project Facilitation'}</Link>
              </div>
            </div>

            {/* Column 4: Contact */}
            <div className="footer__col footer__contact">
              <h3>{isCn ? '联系方式与办公地址' : isId ? 'Kontak & Kantor' : 'Contact'}</h3>
              <div className="footer__contact-items">
                <div className="footer__contact-item">
                  <span className="lbl">{isCn ? '电子邮箱' : 'Email'}</span>
                  <a href={emailHref} className="val" aria-label={`Email ${cleanEmail}`}>
                    <svg className="ico ico-14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    <span>{cleanEmail}</span>
                  </a>
                </div>

                <div className="footer__contact-item">
                  <span className="lbl">{isCn ? '雅加达总部' : isId ? 'Kantor Jakarta' : 'Office'}</span>
                  <span className="val" style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.72)' }}>
                    {siteSettings?.address || 'SOHO Building, Jl. Letjen M.T. Haryono No.Kav. 2, RT.1/RW.6, Tebet Bar., Kec. Pancoran, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12810'}
                  </span>
                </div>
                
                <div className="footer__contact-item">
                  <span className="lbl">{isCn ? '服务时间' : isId ? 'Jam Layanan' : 'Service Hours'}</span>
                  <span className="val" style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.72)' }}>
                    <svg className="ico ico-14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    <span>{isCn ? '工作日 (09:00 - 17:00)' : isId ? 'Hari Kerja (09.00 - 17.00)' : 'Weekdays (9 am-5 pm)'}</span>
                  </span>
                </div>
              </div>

              {/* Social Media */}
              <div className="footer__social">
                <a href={siteSettings?.linkedin_url || 'https://www.linkedin.com/company/8-vice/'} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <svg className="ico ico-20" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href={siteSettings?.instagram_url || 'https://www.instagram.com/8viceofficial'} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <svg className="ico ico-20" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="footer__bottom">
            <span>© {new Date().getFullYear()} 8vice. All rights reserved.</span>
            
            <div className="footer__bottom-badge">
              <span className="footer__bottom-pulse"></span>
              <span>{isCn ? '为中资与全球企业深度解码印尼市场' : isId ? 'Indonesia, Terdekode untuk Bisnis Global' : 'Indonesia, Decoded for Chinese & Global Businesses'}</span>
            </div>

            <div className="footer__bottom-links">
              <button
                type="button"
                onClick={() => setActiveLegalModal('privacy')}
                style={{ background: 'transparent', border: 'none', color: 'inherit', font: 'inherit', cursor: 'pointer', padding: 0 }}
              >
                {isCn ? '隐私与数据保护政策' : isId ? 'Kebijakan Privasi' : 'Privacy Policy'}
              </button>
              <span style={{ opacity: 0.3 }}>·</span>
              <button
                type="button"
                onClick={() => setActiveLegalModal('terms')}
                style={{ background: 'transparent', border: 'none', color: 'inherit', font: 'inherit', cursor: 'pointer', padding: 0 }}
              >
                {isCn ? '咨询服务条款' : isId ? 'Syarat & Ketentuan' : 'Terms of Engagement'}
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* ========================================================================= */}
      {/* LEGAL DIALOG MODAL (PRIVACY & TERMS OF ENGAGEMENT)                       */}
      {/* ========================================================================= */}
      {activeLegalModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="legal-modal-title"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            background: 'rgba(5, 6, 8, 0.82)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px'
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveLegalModal(null);
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '680px',
              maxHeight: '88vh',
              background: '#0D0E13',
              border: '1px solid rgba(255, 255, 255, 0.14)',
              borderRadius: '24px',
              boxShadow: '0 30px 80px rgba(0, 0, 0, 0.75), 0 0 40px rgba(230, 57, 70, 0.16)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              color: '#FFFFFF'
            }}
          >
            {/* Modal Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '22px 28px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                background: 'rgba(255, 255, 255, 0.02)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '10px',
                    background: 'rgba(230, 57, 70, 0.12)',
                    color: '#E63946',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div>
                  <h3 id="legal-modal-title" style={{ fontSize: '17px', fontWeight: 700, margin: 0, color: '#FFFFFF' }}>
                    {activeLegalModal === 'privacy'
                      ? (isCn ? '隐私与个人数据保护政策' : isId ? 'Kebijakan Privasi & Perlindungan Data' : 'Privacy & Data Protection Policy')
                      : (isCn ? '战略咨询与客户合作条款' : isId ? 'Syarat & Ketentuan Penugasan' : 'Terms of Advisory & Client Engagement')}
                  </h3>
                  <span style={{ fontSize: '11.5px', color: 'rgba(255, 255, 255, 0.5)' }}>
                    PT Delapan Solusi Penasihat (8vice) · Jakarta, Indonesia
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setActiveLegalModal(null)}
                aria-label="Close dialog"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: 'rgba(255, 255, 255, 0.8)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div
              style={{
                padding: '28px',
                overflowY: 'auto',
                fontSize: '14.5px',
                lineHeight: 1.75,
                color: 'rgba(255, 255, 255, 0.78)',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
              }}
            >
              {activeLegalModal === 'privacy' ? (
                isCn ? (
                  <>
                    <p>
                      <strong>1. 保密承诺与印尼《个人数据保护法》合规</strong><br />
                      8vice 严格遵守印度尼西亚共和国《个人数据保护法》（UU PDP No. 27/2022）及国际合规治理标准，全力保障企业客户商业机密、研究文档及个人联络信息的安全与完整。
                    </p>
                    <p>
                      <strong>2. 信息收集与使用目的</strong><br />
                      通过本网站提交的所有市场需求、商务资料及联系方式，仅用于战略咨询评估、印中双边商务配对对接，或履行付费研究报告的授权交付。
                    </p>
                    <p>
                      <strong>3. 第三方数据保护与保密协议（NDA）</strong><br />
                      未经客户书面授权或签署保密协议（NDA），8vice 绝不向任何第三方出售、出租或转让客户商业信息。
                    </p>
                  </>
                ) : isId ? (
                  <>
                    <p>
                      <strong>1. Komitmen Kerahasiaan & PDP Indonesia</strong><br />
                      8vice berkomitmen menjaga integritas data klien korporasi, dokumen riset, dan informasi perorangan sesuai Undang-Undang Perlindungan Data Pribadi (UU PDP No. 27/2022) Republik Indonesia dan standar tata kelola kepatuhan internasional.
                    </p>
                    <p>
                      <strong>2. Penggunaan Informasi Penugasan</strong><br />
                      Setiap informasi pasar, data komersial, materi kontak, dan korespondensi yang disampaikan melalui situs ini semata-mata digunakan untuk evaluasi inisiasi kemitraan, konsultasi strategis, atau pemenuhan pengiriman dokumen riset berbayar.
                    </p>
                    <p>
                      <strong>3. Batasan Berbagi Data Pihak Ketiga</strong><br />
                      Kami tidak pernah menjual, menyewakan, atau memindahtangankan data identitas klien kepada pihak ketiga mana pun tanpa persetujuan tertulis (*Non-Disclosure Agreement*).
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      <strong>1. Data Protection & Indonesia PDP Law Compliance</strong><br />
                      8vice is committed to safeguarding corporate client data, proprietary market insights, and institutional correspondence in strict compliance with Indonesia&apos;s Personal Data Protection Law (Law No. 27/2022) and international security best practices.
                    </p>
                    <p>
                      <strong>2. Purpose of Information Processing</strong><br />
                      Information submitted through our digital channels is utilized exclusively for strategic advisory evaluation, bilateral business matching facilitation, or fulfillment of licensed research paper access.
                    </p>
                    <p>
                      <strong>3. Non-Disclosure & Third-Party Protections</strong><br />
                      Under no circumstances does 8vice sell, rent, or distribute client intelligence to third parties without prior mutual Non-Disclosure Agreement (NDA) covenants.
                    </p>
                  </>
                )
              ) : (
                isCn ? (
                  <>
                    <p>
                      <strong>1. 战略咨询服务范围</strong><br />
                      8vice 发布的市场研究报告、行业简报及战略路线图均基于独立专业的调研方法论编制，旨在为跨境扩张与投资决策提供高价值战略参考。
                    </p>
                    <p>
                      <strong>2. 知识产权与研究报告许可</strong><br />
                      所有研究出版物、量化数据模型及印中产业蓝图文档均受 8vice 知识产权保护。高管版与企业版许可严格按照约定的授权席位范围使用。
                    </p>
                    <p>
                      <strong>3. 政企沟通与合规透明度</strong><br />
                      所有政府关系对接与公私部门对话均通过合法、透明的官方渠道开展，严格遵守反腐败准则及双边投资法规。
                    </p>
                  </>
                ) : isId ? (
                  <>
                    <p>
                      <strong>1. Ruang Lingkup Penugasan Konsultasi</strong><br />
                      Kajian, artikel riset, dan analisis komersial yang dipublikasikan oleh 8vice disiapkan berdasarkan metodologi riset independen. Informasi ini bersifat strategis dan ditujukan sebagai panduan awal ekspansi pasar.
                    </p>
                    <p>
                      <strong>2. Hak Cipta & Lisensi Research Paper</strong><br />
                      Seluruh publikasi riset, data model (.xlsx), dan dokumen kajian China-Indonesia Blueprint dilindungi hak cipta intelektual 8vice. Lisensi Eksekutif dan Korporat diberikan sesuai ketentuan hak pakai yang disepakati.
                    </p>
                    <p>
                      <strong>3. Integritas Hubungan Pemerintah & Regulasi</strong><br />
                      Seluruh fasilitasi kelembagaan publik-swasta dijalankan melalui jalur resmi, transparan, dan mematuhi etika anti-penyuapan serta peraturan penanaman modal bilateral.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      <strong>1. Advisory Scope of Engagement</strong><br />
                      Market analyses, intelligence briefs, and strategic roadmaps prepared by 8vice represent independent professional evaluations aimed at facilitating cross-border expansion and investment decisions.
                    </p>
                    <p>
                      <strong>2. Intellectual Property & Research Licensing</strong><br />
                      All research publications, quantitative datasets, and bilateral industrial blueprints remain the intellectual property of 8vice. Executive and Corporate licenses are granted strictly per user seat covenants.
                    </p>
                    <p>
                      <strong>3. Regulatory & Institutional Transparency</strong><br />
                      All government liaison and public-private dialogue engagements are conducted through sanctioned, compliant channels adhering to anti-corruption standards and statutory investment codes.
                    </p>
                  </>
                )
              )}
            </div>

            {/* Modal Footer */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 28px',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                background: 'rgba(255, 255, 255, 0.02)'
              }}
            >
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  type="button"
                  onClick={() => setActiveLegalModal('privacy')}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '8px',
                    border: 'none',
                    background: activeLegalModal === 'privacy' ? 'rgba(230, 57, 70, 0.2)' : 'transparent',
                    color: activeLegalModal === 'privacy' ? '#FF7B7B' : 'rgba(255, 255, 255, 0.6)',
                    fontSize: '12px',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  {isCn ? '隐私政策' : isId ? 'Privasi' : 'Privacy'}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveLegalModal('terms')}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '8px',
                    border: 'none',
                    background: activeLegalModal === 'terms' ? 'rgba(230, 57, 70, 0.2)' : 'transparent',
                    color: activeLegalModal === 'terms' ? '#FF7B7B' : 'rgba(255, 255, 255, 0.6)',
                    fontSize: '12px',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  {isCn ? '服务条款' : isId ? 'Ketentuan' : 'Terms'}
                </button>
              </div>

              <button
                type="button"
                onClick={() => setActiveLegalModal(null)}
                style={{
                  padding: '9px 20px',
                  borderRadius: '999px',
                  background: 'linear-gradient(135deg, #E63946 0%, #B81D2A 100%)',
                  border: 'none',
                  color: '#FFFFFF',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                {isCn ? '我知道了' : isId ? 'Tutup' : 'Understood'}
              </button>
            </div>
          </div>
        </div>
      )}

      <ChatFloatingWidget />
    </>
  );
}
