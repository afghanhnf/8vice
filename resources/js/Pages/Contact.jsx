import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import Link from '@/Components/LocalizedLink';
import MainLayout from '@/Layouts/MainLayout';
import { useTranslation } from '@/Contexts/TranslationContext';
import ScrollReveal from '@/Components/ScrollReveal';

export default function Contact() {
  const { t } = useTranslation();
  const [activeInterest, setActiveInterest] = useState('consultancy');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
    }, 800);
  };

  return (
    <MainLayout>
      <Head>
        <title>{t('meta.contact_title')}</title>
        <meta name="description" content={t('meta.contact_desc')} />
        <meta property="og:title" content={t('meta.contact_title')} />
        <meta property="og:description" content={t('meta.contact_desc')} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og-default.png" />
      </Head>

      {/* ============================ HERO ============================ */}
      <section className="page-hero">
        <div className="container">
          <ScrollReveal>
            <div className="breadcrumb">
              <Link href="/">Home</Link><span className="sep">/</span><span className="cur">Contact</span>
            </div>
            <h1 className="t-h1">
              {t('contact_page.hero_title_1') || "Let's talk about your Indonesia move."}
            </h1>
            <p className="page-hero__lead">
              Tell us where you're headed. We'll respond within two business days with an honest read on whether and how we can help.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================ CONTACT SPLIT ============================ */}
      <section className="section section--white">
        <div className="container">
          <div className="contact-split">
            
            {/* Left Info Column */}
            <div>
              <ScrollReveal>
                <div className="eyebrow" style={{ marginBottom: '24px' }}>Reach Us</div>
                
                <div className="contact-info__item">
                  <div className="lbl">Email</div>
                  <div className="val"><a href="mailto:hello@8vice.com">hello@8vice.com</a></div>
                </div>
                
                <div className="contact-info__item">
                  <div className="lbl">WhatsApp</div>
                  <div className="val"><a href="#">+62 &bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull;</a></div>
                </div>
                
                <div className="contact-info__item">
                  <div className="lbl">{t('contact_page.hq_global') || 'Global HQ'}</div>
                  <div className="val">
                    {t('contact_page.hq_global_city') || 'Shenzhen'}, China<br/>
                    <span style={{ fontSize: '15px', color: 'var(--color-gray-600)' }}>
                      {t('contact_page.hq_global_addr') || 'Nanshan District'}
                    </span>
                  </div>
                </div>
                
                <div className="contact-info__item">
                  <div className="lbl">{t('contact_page.hq_regional') || 'Regional HQ'}</div>
                  <div className="val">
                    {t('contact_page.hq_regional_city') || 'Jakarta'}, Indonesia<br/>
                    <span style={{ fontSize: '15px', color: 'var(--color-gray-600)' }}>
                      {t('contact_page.hq_regional_addr') || 'SOHO Pancoran, MT Haryono'}
                    </span>
                  </div>
                </div>

                <div className="contact-info__item">
                  <div className="lbl">Hours</div>
                  <div className="val">Mon–Fri, 09:00–18:00 WIB</div>
                </div>

                <div style={{ aspectRatio: '16/10', borderRadius: '14px', marginTop: '28px', overflow: 'hidden' }}>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63462.65493667381!2d106.77809635127193!3d-6.208742607371145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3b9259615c5%3A0x1fa5a36bd5f609ec!2sSOHO%20Building!5e0!3m2!1sid!2sid!4v1782286305567!5m2!1sid!2sid" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Form Column */}
            <div>
              <ScrollReveal delay={100}>
                <div className="train-req__form" style={{ boxShadow: '0 20px 50px rgba(0,0,0,.05)', border: '1px solid var(--color-gray-200)', background: '#fff' }}>
                  {submitted ? (
                    <div style={{ padding: '64px 0', textAlign: 'center' }}>
                      <svg className="ico ico-24" viewBox="0 0 24 24" style={{ stroke: 'var(--color-success)', width: '48px', height: '48px', margin: '0 auto 24px auto' }}>
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <h4 style={{ fontSize: '24px', marginBottom: '16px' }}>{t('contact_page.msg_success_title') || 'Message sent.'}</h4>
                      <p style={{ color: 'var(--color-gray-600)' }}>
                        {t('contact_page.msg_success_desc') || "We'll get back to you within two business days."}
                      </p>
                    </div>
                  ) : (
                    <>
                      <h3 className="t-h4" style={{ fontSize: '22px' }}>{t('contact_page.form_title') || 'Book a free consultancy'}</h3>
                      <p className="train-req__note">A candid 45-minute call. No pitch, no obligation.</p>
                      
                      <form className="req-form" onSubmit={handleSubmit}>
                        <div className="req-row">
                          <label className="req-field">
                            <span>{t('contact_page.lbl_name') || 'Full name'}</span>
                            <input type="text" placeholder={t('contact_page.ph_name') || 'Your name'} required />
                          </label>
                          <label className="req-field">
                            <span>{t('contact_page.lbl_company') || 'Company'}</span>
                            <input type="text" placeholder={t('contact_page.ph_company') || 'Company name'} />
                          </label>
                        </div>
                        
                        <div className="req-row">
                          <label className="req-field">
                            <span>{t('contact_page.lbl_email') || 'Work email'}</span>
                            <input type="email" placeholder={t('contact_page.ph_email') || 'you@company.com'} required />
                          </label>
                          <label className="req-field">
                            <span>Phone / WhatsApp</span>
                            <input type="text" placeholder="Optional" />
                          </label>
                        </div>

                        <div className="req-field req-field--inline" style={{ marginTop: '16px', marginBottom: '16px' }}>
                          <span>{t('contact_page.lbl_interest') || "I'm interested in"}</span>
                          <div className="req-pills" role="group" aria-label="Interest">
                            <button type="button" className={`req-pill ${activeInterest === 'consultancy' ? 'is-active' : ''}`} onClick={() => setActiveInterest('consultancy')}>Consultancy</button>
                            <button type="button" className={`req-pill ${activeInterest === 'training' ? 'is-active' : ''}`} onClick={() => setActiveInterest('training')}>Training</button>
                            <button type="button" className={`req-pill ${activeInterest === 'other' ? 'is-active' : ''}`} onClick={() => setActiveInterest('other')}>Other</button>
                          </div>
                        </div>

                        <label className="req-field" style={{ width: '100%' }}>
                          <span>What's the move?</span>
                          <textarea rows="4" placeholder="Tell us where you're headed in Indonesia…"></textarea>
                        </label>
                        
                        <button type="submit" className="btn btn--primary" style={{ width: '100%', justifyContent: 'center', marginTop: '16px' }}>
                          {t('contact_page.btn_submit') || 'Send message'}
                          <svg className="ico ico-16" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

    </MainLayout>
  );
}
