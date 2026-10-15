import React, { useState } from 'react';
import { Head, useForm, usePage } from '@inertiajs/react';
import SeoHead from '@/Components/SeoHead';
import Link from '@/Components/LocalizedLink';
import MainLayout from '@/Layouts/MainLayout';
import { useTranslation } from '@/Contexts/TranslationContext';
import ScrollReveal from '@/Components/ScrollReveal';

export default function Contact() {
  const { t, lang } = useTranslation();
  const isId = lang === 'id';
  const { siteSettings } = usePage().props;
  const rawEmail = siteSettings?.email || 'hello@8vice.com';
  const cleanEmail = rawEmail.replace(/^mailto:/i, '').trim();
  const emailHref = `mailto:${cleanEmail}`;
  const [activeInterest, setActiveInterest] = useState('Consultancy');
  const [submitted, setSubmitted] = useState(false);

  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: 'Consultancy',
    message: '',
    website_url: '', // Honeypot field
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post('/contact-submit', {
      preserveScroll: true,
      onSuccess: () => {
        setSubmitted(true);
        reset();
      },
    });
  };

  return (
    <MainLayout>
      <SeoHead pageCode="contact" />

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
                  <div className="val"><a href={emailHref}>{cleanEmail}</a></div>
                </div>
                
                <div className="contact-info__item">
                  <div className="lbl">WhatsApp</div>
                  <div className="val"><a href={siteSettings?.whatsapp_url || 'https://wa.me/628118005110'} target="_blank" rel="noreferrer">+62 811-8005-110</a></div>
                </div>
                
                <div className="contact-info__item">
                  <div className="lbl">Address</div>
                  <div className="val">
                    <span style={{ fontSize: '15px', color: 'var(--color-gray-600)', lineHeight: '1.5', display: 'block' }}>
                      {siteSettings?.address || 'SOHO Building, Jl. Letjen M.T. Haryono No.Kav. 2, RT.1/RW.6, Tebet Bar., Kec. Pancoran, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12810'}
                    </span>
                  </div>
                </div>

                <div className="contact-info__item">
                  <div className="lbl">Hours</div>
                  <div className="val">Mon–Fri, 09:00–18:00 WIB</div>
                </div>

                <div style={{ aspectRatio: '16/10', borderRadius: '14px', marginTop: '28px', overflow: 'hidden', border: '1px solid var(--color-gray-200)' }}>
                  <iframe 
                    src={(siteSettings?.maps_link && (siteSettings.maps_link.includes('embed') || siteSettings.maps_link.includes('output=embed')))
                      ? siteSettings.maps_link 
                      : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2023023055375!2d106.84074217499052!3d-6.237039593751147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3b9259615c5%3A0x1fa5a36bd5f609ec!2sSOHO%20Pancoran!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid'} 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="SOHO Building Location Map"
                  ></iframe>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Form Column */}
            <div>
              <ScrollReveal delay={100}>
                <div className="train-req__form" style={{ boxShadow: '0 20px 50px rgba(0,0,0,.05)', border: '1px solid var(--color-gray-200)', background: '#fff' }}>
                  {submitted ? (
                    <div style={{ padding: '48px 0', textAlign: 'center' }}>
                      <svg className="ico ico-24" viewBox="0 0 24 24" style={{ stroke: 'var(--color-success)', width: '48px', height: '48px', margin: '0 auto 24px auto' }}>
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <h4 style={{ fontSize: '24px', marginBottom: '16px', color: 'var(--color-ink)' }}>
                        {t('contact_page.msg_success_title') || (isId ? 'Pesan Terkirim.' : 'Message sent.')}
                      </h4>
                      <p style={{ color: 'var(--color-gray-600)', maxWidth: '440px', margin: '0 auto 24px auto', lineHeight: 1.6 }}>
                        {t('contact_page.msg_success_desc') || (isId ? 'Kami akan menghubungi Anda dalam waktu maksimal dua hari kerja.' : "We'll get back to you within two business days.")}
                      </p>
                      <button 
                        type="button" 
                        onClick={() => setSubmitted(false)}
                        className="btn btn--secondary"
                        style={{ fontSize: '14px', padding: '10px 24px' }}
                      >
                        {isId ? 'Kirim Pesan Lain' : 'Send Another Message'}
                      </button>
                    </div>
                  ) : (
                    <>
                      <h3 className="t-h4" style={{ fontSize: '22px' }}>
                        {t('contact_page.form_title') || (isId ? 'Jadwalkan Konsultasi Gratis' : 'Book a free consultancy')}
                      </h3>
                      <p className="train-req__note">
                        {isId ? 'Sesi diskusi terarah 45 menit. Tanpa penawaran agresif, tanpa kewajiban.' : 'A candid 45-minute call. No pitch, no obligation.'}
                      </p>

                      {Object.keys(errors).length > 0 && (
                        <div style={{ padding: '14px 18px', background: 'rgba(214, 40, 40, 0.08)', border: '1px solid rgba(214, 40, 40, 0.25)', borderRadius: '8px', marginBottom: '20px', color: 'var(--color-red)', fontSize: '14px' }}>
                          <strong>{isId ? 'Harap periksa isian formulir:' : 'Please check the form inputs:'}</strong>
                          <ul style={{ margin: '6px 0 0 16px', padding: 0 }}>
                            {Object.values(errors).map((err, i) => (
                              <li key={i}>{err}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      <form className="req-form" onSubmit={handleSubmit}>
                        {/* Honeypot field - invisible to user */}
                        <div style={{ display: 'none' }} aria-hidden="true">
                          <label>
                            Leave this field empty if you're human:
                            <input 
                              type="text" 
                              name="website_url" 
                              value={data.website_url} 
                              onChange={e => setData('website_url', e.target.value)} 
                              tabIndex="-1" 
                              autoComplete="off" 
                            />
                          </label>
                        </div>

                        <div className="req-row">
                          <label className="req-field">
                            <span>{t('contact_page.lbl_name') || (isId ? 'Nama Lengkap' : 'Full name')}</span>
                            <input 
                              type="text" 
                              placeholder={t('contact_page.ph_name') || (isId ? 'Nama Anda' : 'Your name')} 
                              value={data.name} 
                              onChange={e => setData('name', e.target.value)} 
                              required 
                            />
                            {errors.name && <div className="text-red-500 text-sm mt-1" style={{ color: 'var(--color-error)' }}>{errors.name}</div>}
                          </label>
                          <label className="req-field">
                            <span>{t('contact_page.lbl_company') || (isId ? 'Perusahaan' : 'Company')}</span>
                            <input 
                              type="text" 
                              placeholder={t('contact_page.ph_company') || (isId ? 'Nama perusahaan' : 'Company name')} 
                              value={data.company} 
                              onChange={e => setData('company', e.target.value)} 
                            />
                          </label>
                        </div>
                        
                        <div className="req-row">
                          <label className="req-field">
                            <span>{t('contact_page.lbl_email') || (isId ? 'Email Kerja' : 'Work email')}</span>
                            <input 
                              type="email" 
                              placeholder={t('contact_page.ph_email') || 'you@company.com'} 
                              value={data.email} 
                              onChange={e => setData('email', e.target.value)} 
                              required 
                            />
                            {errors.email && <div className="text-red-500 text-sm mt-1" style={{ color: 'var(--color-error)' }}>{errors.email}</div>}
                          </label>
                          <label className="req-field">
                            <span>{isId ? 'Telepon / WhatsApp (opsional)' : 'Phone / WhatsApp (optional)'}</span>
                            <input 
                              type="tel" 
                              placeholder="+62 / +86 ..." 
                              value={data.phone} 
                              onChange={e => setData('phone', e.target.value)} 
                            />
                            {errors.phone && <div className="text-red-500 text-sm mt-1" style={{ color: 'var(--color-error)' }}>{errors.phone}</div>}
                          </label>
                        </div>

                        <div className="req-field req-field--inline" style={{ marginTop: '16px', marginBottom: '16px' }}>
                          <span>{t('contact_page.lbl_interest') || (isId ? 'Layanan yang Diminati' : "I'm interested in")}</span>
                          <div className="req-pills" role="group" aria-label="Interest">
                            <button 
                              type="button" 
                              className={`req-pill ${activeInterest === 'Consultancy' ? 'is-active' : ''}`} 
                              onClick={() => {
                                setActiveInterest('Consultancy');
                                setData('subject', 'Consultancy');
                              }}
                            >
                              Consultancy
                            </button>
                            <button 
                              type="button" 
                              className={`req-pill ${activeInterest === 'Training' ? 'is-active' : ''}`} 
                              onClick={() => {
                                setActiveInterest('Training');
                                setData('subject', 'Training');
                              }}
                            >
                              Training
                            </button>
                            <button 
                              type="button" 
                              className={`req-pill ${activeInterest === 'Other' ? 'is-active' : ''}`} 
                              onClick={() => {
                                setActiveInterest('Other');
                                setData('subject', 'Other Inquiry');
                              }}
                            >
                              {isId ? 'Lainnya' : 'Other'}
                            </button>
                          </div>
                        </div>

                        <label className="req-field" style={{ width: '100%' }}>
                          <span>{isId ? 'Ceritakan rencana atau kebutuhan bisnis Anda' : "What's the move?"}</span>
                          <textarea 
                            rows="4" 
                            placeholder={isId ? 'Jelaskan tujuan atau kendala ekspansi Anda di Indonesia…' : "Tell us where you're headed in Indonesia…"} 
                            value={data.message} 
                            onChange={e => setData('message', e.target.value)} 
                            required
                          ></textarea>
                          {errors.message && <div className="text-red-500 text-sm mt-1" style={{ color: 'var(--color-error)' }}>{errors.message}</div>}
                        </label>
                        
                        <button type="submit" className="btn btn--primary" disabled={processing} style={{ width: '100%', justifyContent: 'center', marginTop: '16px', opacity: processing ? 0.7 : 1 }}>
                          {processing ? (isId ? 'Mengirim...' : 'Sending...') : (t('contact_page.btn_submit') || (isId ? 'Kirim Pesan' : 'Send message'))}
                          {!processing && <svg className="ico ico-16" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>}
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
