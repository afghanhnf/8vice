import React, { useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import SeoHead from '@/Components/SeoHead';
import Link from '@/Components/LocalizedLink';
import MainLayout from '@/Layouts/MainLayout';
import { useTranslation } from '@/Contexts/TranslationContext';
import ScrollReveal, { Staggered } from '@/Components/ScrollReveal';

export default function Career({ careers }) {
  const { lang, t } = useTranslation();
  const isId = lang === 'id';
  const isCn = lang === 'cn';
  const [expandedJob, setExpandedJob] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const toggleJob = (id) => {
    setExpandedJob(expandedJob === id ? null : id);
  };

  const { data, setData, post, processing, errors, reset } = useForm({
    career_id: '',
    name: '',
    email: '',
    linkedin: '',
    cv: null,
    website_url: '', // Honeypot field
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const submitUrl = isCn ? '/cn/career-apply' : isId ? '/id/career-apply' : '/career-apply';
    post(submitUrl, {
      preserveScroll: true,
      forceFormData: true,
      onSuccess: () => {
        setSubmitted(true);
        reset();
      },
    });
  };

  const jobs = careers || [];

  // Helper to extract clean localized string from object, array, or string
  const getVal = (field) => {
    if (!field) return '';
    if (typeof field === 'object') {
      return field[lang] || field.en || field.id || Object.values(field)[0] || '';
    }
    return String(field);
  };

  const renderReqs = (reqsData) => {
    const content = getVal(reqsData);
    if (!content) return null;

    if (Array.isArray(content)) {
      return (
        <ul style={{ paddingLeft: '20px', color: 'var(--color-gray-500)', fontSize: '15px', lineHeight: '1.8', listStyleType: 'disc' }}>
          {content.map((item, idx) => (
            <li key={idx}>{typeof item === 'object' ? getVal(item) : item}</li>
          ))}
        </ul>
      );
    }

    if (typeof content === 'string' && (content.includes('<p>') || content.includes('<li>') || content.includes('<br>'))) {
      return (
        <div 
          className="prose-content" 
          style={{ color: 'var(--color-gray-500)', fontSize: '15px', lineHeight: '1.8' }}
          dangerouslySetInnerHTML={{ __html: content }} 
        />
      );
    }

    const items = content.split(/\r?\n|,/).map(s => s.trim()).filter(Boolean);
    return (
      <ul style={{ paddingLeft: '20px', color: 'var(--color-gray-500)', fontSize: '15px', lineHeight: '1.8', listStyleType: 'disc' }}>
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    );
  };

  const renderDesc = (descData) => {
    const content = getVal(descData);
    if (!content) return null;

    if (typeof content === 'string' && (content.includes('<p>') || content.includes('<li>') || content.includes('<br>'))) {
      return (
        <div 
          className="prose-content" 
          style={{ color: 'var(--color-gray-500)', fontSize: '15px', lineHeight: '1.8', marginBottom: '20px' }}
          dangerouslySetInnerHTML={{ __html: content }} 
        />
      );
    }

    return (
      <p style={{ color: 'var(--color-gray-500)', fontSize: '15px', lineHeight: '1.8', marginBottom: '20px' }}>
        {content}
      </p>
    );
  };

  return (
    <MainLayout>
      <SeoHead pageCode="career" />

      {/* ============================ HERO ============================ */}
      <section className="page-hero page-hero--tall">
        <div className="container">
          <ScrollReveal>
            <div className="breadcrumb">
              <Link href="/">{isCn ? '首页' : isId ? 'Beranda' : 'Home'}</Link><span className="sep">/</span><span className="cur">{isCn ? '职业发展' : isId ? 'Karier' : 'Career'}</span>
            </div>
            <h1 className="t-h1" style={{ maxWidth: '20ch' }}>
              {isCn 
                ? '以实战经验为核心，共筑卓越事业。' 
                : isId 
                ? 'Bekerjalah di mana pengalaman Anda adalah nilai utamanya.' 
                : (t('career_page.hero_title_1') || 'Work where your experience is the product.')}
            </h1>
            <p className="page-hero__lead">
              {isCn
                ? '我们不单纯看简历，也不设立层级森严的初级金字塔体系。我们诚邀在印尼或大中华区具备实战落地经验的专业实干家——与我们一同开展真正具有深远影响的咨询事业。'
                : isId
                ? 'Kami tidak merekrut hanya berdasarkan résumé atau menjalankan piramida junior. Kami mengajak praktisi yang telah membangun hal nyata di Indonesia atau Tiongkok Raya - dan memberi mereka ruang untuk mengerjakan hal yang benar-benar bernilai.'
                : "We don't hire for résumés or run a pyramid of juniors. We bring on operators who've built real things in Indonesia or Greater China - and let them do the work that matters."}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================ WHY JOIN ============================ */}
      <section className="section section--paper">
        <div className="container">
          <ScrollReveal>
            <div className="lead-row">
              <div>
                <div className="eyebrow">{isCn ? '为何选择 8 Vice' : isId ? 'Mengapa 8vice' : 'Why 8vice'}</div>
                <h2 className="t-h2">
                  {isCn
                    ? '资深实力、高度自主与真诚合作。'
                    : isId
                    ? 'Senioritas, otonomi, dan integritas kerja.'
                    : 'Seniority, autonomy, and honest work.'}
                </h2>
              </div>
              <div className="lead-row__body">
                <p>
                  {isCn
                    ? '大多数咨询机构要求您花在商务公关上的时间多于实际交付。我们则截然相反：资深精干的团队、精准界定的业务范围，以及对客户据实以告的底气。'
                    : isId
                    ? 'Banyak karier konsultasi menuntut Anda menjual lebih banyak daripada memberi solusi nyata. Kami dibangun berbeda: tim senior yang ramping, cakupan proyek yang jelas, dan kebebasan untuk menyampaikan fakta sesungguhnya kepada klien.'
                    : "Most advisory careers ask you to sell more than you deliver. We're built the other way: small senior teams, scoped engagements, and the freedom to tell a client the truth."}
                </p>
                <p>
                  {isCn
                    ? '如果您曾深耕中国–印尼走廊，并厌倦了脱离实际的PPT报告，您将在这里找到共鸣与归属。'
                    : isId
                    ? 'Jika Anda berpengalaman di koridor Tiongkok–Indonesia dan lelah dengan presentasi teoretis tanpa dampak nyata, Anda akan merasa cocok di sini.'
                    : "If you've operated across the China–Indonesia corridor and you're tired of decks that nobody has to live with, you'll feel at home here."}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================ PERKS ============================ */}
      <section className="section section--white">
        <div className="container">
          <Staggered delay={100} staggerDelay={100} className="cap-grid cap-grid--4col" style={{ gridTemplateColumns: 'repeat(4, minmax(0, 1fr))' }}>
            <div className="cap-cell">
              <div className="cap-cell__ico">
                <svg className="ico ico-24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
              </div>
              <h3 className="t-h4">{t('career_page.val_1_title') || 'Real Autonomy'}</h3>
              <p>{t('career_page.val_1_desc') || 'Take ownership from project direction to delivery, with the trust and responsibility to make decisions directly. We value initiative and accountability over unnecessary layers of approval.'}</p>
            </div>
            <div className="cap-cell">
              <div className="cap-cell__ico">
                <svg className="ico ico-24" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              </div>
              <h3 className="t-h4">{t('career_page.val_2_title') || 'Senior Peers'}</h3>
              <p>{t('career_page.val_2_desc') || 'Work alongside senior consultants and business practitioners who bring real industry and market experience, gain exposure through collaboration, not just through formal training.'}</p>
            </div>
            <div className="cap-cell">
              <div className="cap-cell__ico">
                <svg className="ico ico-24" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
              </div>
              <h3 className="t-h4">{t('career_page.val_3_title') || 'Flexible Base'}</h3>
              <p>{t('career_page.val_3_desc') || 'Based in Jakarta, with opportunities to work across Indonesia and Greater China. We support flexible ways of working while maintaining clear expectations, collaboration, and client commitments.'}</p>
            </div>
            <div className="cap-cell">
              <div className="cap-cell__ico">
                <svg className="ico ico-24" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
              </div>
              <h3 className="t-h4">{t('career_page.val_4_title') || 'Profit Share'}</h3>
              <p>{t('career_page.val_4_desc') || 'When the business grows through strong client relationships, project delivery, and individual contribution, team members can participate in the value created through profit-sharing structure.'}</p>
            </div>
          </Staggered>
        </div>
      </section>

      {/* ============================ OPEN ROLES ============================ */}
      <section className="section section--paper">
        <div className="container">
          <ScrollReveal>
            <div className="section-head section-head--left">
              <div className="eyebrow">{isCn ? '开放职位' : isId ? 'Posisi Tersedia' : 'Open Roles'}</div>
              <h2 className="t-h2">{isCn ? '虚位以待的岗位。' : isId ? 'Peluang karier bersama kami.' : "Where we're hiring."}</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="job-list">
              {jobs.map((job) => {
                const title = getVal(job.title);
                const dept = getVal(job.dept);
                const type = getVal(job.type);
                const location = getVal(job.location);

                return (
                  <div key={job.id} style={{ borderBottom: '1px solid var(--color-gray-200)' }}>
                    {/* Job Row Trigger */}
                    <div 
                      className="job-row" 
                      onClick={() => toggleJob(job.id)}
                      style={{ cursor: 'pointer', borderBottom: 'none' }}
                    >
                      <div>
                        <h3 className="t-h4">{title}</h3>
                        {location && <div style={{ fontSize: '13px', color: 'var(--color-gray-500)', marginTop: '4px' }}>📍 {location}</div>}
                      </div>
                      <span className="job-meta">{dept}</span>
                      <span className="tag">{type}</span>
                      <button className="link-arrow" style={{ background: 'none', border: 'none', color: 'var(--color-red)', fontWeight: 'bold' }}>
                        {expandedJob === job.id ? (isCn ? '收起' : isId ? 'Tutup' : 'Close') : (isCn ? '查看详情' : isId ? 'Detail' : 'Details')}
                        <svg className="ico ico-16" viewBox="0 0 24 24" style={{ transform: expandedJob === job.id ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s ease' }}>
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </button>
                    </div>

                    {/* Accordion Content */}
                    <div style={{ 
                      maxHeight: expandedJob === job.id ? '1000px' : '0', 
                      overflow: 'hidden', 
                      transition: 'max-height 0.4s ease',
                      background: '#fcfcfc',
                      borderBottomLeftRadius: '8px',
                      borderBottomRightRadius: '8px'
                    }}>
                      <div style={{ padding: '32px 40px', borderTop: '1px solid var(--color-gray-200)' }}>
                        {job.description && (
                          <div style={{ marginBottom: '24px' }}>
                            <h4 style={{ fontSize: '18px', marginBottom: '12px', fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--color-ink)' }}>
                              {isCn ? '岗位职责' : isId ? 'Deskripsi Pekerjaan' : 'Job Description'}
                            </h4>
                            {renderDesc(job.description)}
                          </div>
                        )}
                        {job.reqs && (
                          <div>
                            <h4 style={{ fontSize: '18px', marginBottom: '16px', fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--color-ink)' }}>
                              {isCn ? '任职要求 & 资格' : isId ? 'Persyaratan & Kualifikasi' : 'Requirements & Qualifications'}
                            </h4>
                            {renderReqs(job.reqs)}
                          </div>
                        )}
                        <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid var(--color-gray-200)', display: 'flex', justifyContent: 'flex-start' }}>
                          <button
                            type="button"
                            onClick={() => {
                              setData('career_id', String(job.id));
                              const formEl = document.getElementById('apply');
                              if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="btn btn--primary"
                            style={{ fontSize: '14px', padding: '10px 20px' }}
                          >
                            {isCn ? '申请该职位' : isId ? 'Lamar Posisi Ini' : 'Apply for this Role'} &rarr;
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="case-note" style={{ textAlign: 'left', marginTop: '28px' }}>
              {isCn 
                ? '没有找到合适的职位？我们始终期待结识优秀的实干人才。' 
                : isId 
                ? 'Tidak menemukan peran yang sesuai? Kami selalu ingin bertemu dengan operator berpotensi tinggi.' 
                : "Don't see your role? We always want to meet strong operators."}{' '}
              <a href="#apply" className="link-arrow" style={{ fontSize: '14px', cursor: 'pointer' }} onClick={(e) => { e.preventDefault(); setData('career_id', 'open'); document.getElementById('apply').scrollIntoView({ behavior: 'smooth' }); }}>
                {isCn ? '提交自荐申请' : isId ? 'Kirimkan aplikasi terbuka' : 'Send an open application'}
                <svg className="ico ico-16" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================ GLOBAL APPLY FORM ============================ */}
      <section className="section section--white" id="apply" style={{ paddingTop: '80px', paddingBottom: '120px' }}>
        <div className="container" style={{ maxWidth: '640px' }}>
          <ScrollReveal>
            <div className="train-req__form" style={{ padding: '40px', borderRadius: '16px', border: '1px solid var(--color-gray-200)', background: '#fcfcfc' }}>
              {submitted ? (
                <div style={{ padding: '48px 0', textAlign: 'center' }}>
                  <svg className="ico ico-24" viewBox="0 0 24 24" style={{ stroke: 'var(--color-success)', width: '48px', height: '48px', margin: '0 auto 24px auto' }}>
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <h4 style={{ fontSize: '24px', marginBottom: '16px', color: 'var(--color-ink)' }}>
                    {isCn ? '求职申请已收到。' : isId ? 'Aplikasi Lamaran Diterima.' : 'Application received.'}
                  </h4>
                  <p style={{ color: 'var(--color-gray-600)', maxWidth: '440px', margin: '0 auto 24px auto', lineHeight: 1.6 }}>
                    {isCn
                      ? '感谢您的关注。我们的团队将评估您的资质背景，并尽快与您取得联系。'
                      : isId 
                      ? 'Terima kasih atas ketertarikan Anda. Tim kami akan meninjau kualifikasi dan segera menghubungi Anda.' 
                      : 'Thank you for your interest. We will review your application and get back to you soon.'}
                  </p>
                  <button 
                    type="button" 
                    onClick={() => setSubmitted(false)}
                    className="btn btn--secondary"
                    style={{ fontSize: '14px', padding: '10px 24px' }}
                  >
                    {isCn ? '提交其他职位申请' : isId ? 'Kirim Lamaran Lain' : 'Submit Another Application'}
                  </button>
                </div>
              ) : (
                <>
                  <h4 style={{ fontSize: '20px', marginBottom: '24px', fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--color-ink)' }}>
                    {isCn ? '提交您的求职申请' : isId ? 'Kirimkan Lamaran Anda' : 'Submit your application'}
                  </h4>

                  {Object.keys(errors).length > 0 && (
                    <div style={{ padding: '14px 18px', background: 'rgba(214, 40, 40, 0.08)', border: '1px solid rgba(214, 40, 40, 0.25)', borderRadius: '8px', marginBottom: '20px', color: 'var(--color-red)', fontSize: '14px' }}>
                      <strong>{isCn ? '请检查表单填写项：' : isId ? 'Harap periksa isian formulir:' : 'Please check the form inputs:'}</strong>
                      <ul style={{ margin: '6px 0 0 16px', padding: 0 }}>
                        {Object.values(errors).map((err, i) => (
                          <li key={i}>{err}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <form className="req-form" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    
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

                    <label className="req-field" style={{ width: '100%' }}>
                      <span style={{ fontWeight: 600, marginBottom: '8px', display: 'block', color: 'var(--color-ink)' }}>
                        {isCn ? '应聘职位' : isId ? 'Posisi / Role' : 'Role'}
                      </span>
                      <select 
                        required 
                        value={data.career_id} 
                        onChange={e => setData('career_id', e.target.value)}
                        style={{ width: '100%', padding: '14px 16px', borderRadius: '8px', border: '1px solid var(--color-gray-300)', background: '#fff', fontSize: '15px' }}
                      >
                         <option value="">{isCn ? '请选择应聘职位...' : isId ? 'Pilih posisi lowongan...' : 'Select a role...'}</option>
                         {jobs.map(job => (
                           <option key={job.id} value={job.id}>{getVal(job.title)}</option>
                         ))}
                         <option value="open">{isCn ? '自荐申请 / 其他岗位' : isId ? 'Aplikasi Terbuka / Posisi Lain' : 'Open Application / Other'}</option>
                      </select>
                      {errors.career_id && <div className="text-red-500 text-sm mt-1" style={{ color: 'var(--color-error)' }}>{errors.career_id}</div>}
                    </label>

                    <label className="req-field" style={{ width: '100%' }}>
                      <span style={{ fontWeight: 600, marginBottom: '8px', display: 'block', color: 'var(--color-ink)' }}>
                        {isCn ? '姓名' : isId ? 'Nama Lengkap' : 'Full Name'}
                      </span>
                      <input 
                        type="text" 
                        placeholder={isCn ? '您的姓名' : isId ? 'Nama lengkap Anda' : 'Your name'} 
                        value={data.name} 
                        onChange={e => setData('name', e.target.value)} 
                        required 
                        style={{ width: '100%', padding: '14px 16px', borderRadius: '8px', border: '1px solid var(--color-gray-300)', background: '#fff', fontSize: '15px' }} 
                      />
                      {errors.name && <div className="text-red-500 text-sm mt-1" style={{ color: 'var(--color-error)' }}>{errors.name}</div>}
                    </label>

                    <label className="req-field" style={{ width: '100%' }}>
                      <span style={{ fontWeight: 600, marginBottom: '8px', display: 'block', color: 'var(--color-ink)' }}>
                        {isCn ? '电子邮箱' : isId ? 'Alamat Email' : 'Email'}
                      </span>
                      <input 
                        type="email" 
                        placeholder="you@domain.com" 
                        value={data.email} 
                        onChange={e => setData('email', e.target.value)} 
                        required 
                        style={{ width: '100%', padding: '14px 16px', borderRadius: '8px', border: '1px solid var(--color-gray-300)', background: '#fff', fontSize: '15px' }} 
                      />
                      {errors.email && <div className="text-red-500 text-sm mt-1" style={{ color: 'var(--color-error)' }}>{errors.email}</div>}
                    </label>

                    <label className="req-field" style={{ width: '100%' }}>
                      <span style={{ fontWeight: 600, marginBottom: '8px', display: 'block', color: 'var(--color-ink)' }}>
                        {isCn ? 'LinkedIn 个人档案 (选填)' : isId ? 'Profil LinkedIn (opsional)' : 'LinkedIn Profile (optional)'}
                      </span>
                      <input 
                        type="url" 
                        placeholder="https://linkedin.com/in/..." 
                        value={data.linkedin} 
                        onChange={e => setData('linkedin', e.target.value)} 
                        style={{ width: '100%', padding: '14px 16px', borderRadius: '8px', border: '1px solid var(--color-gray-300)', background: '#fff', fontSize: '15px' }} 
                      />
                      {errors.linkedin && <div className="text-red-500 text-sm mt-1" style={{ color: 'var(--color-error)' }}>{errors.linkedin}</div>}
                    </label>
                    
                    <div className="req-field" style={{ width: '100%', marginTop: '8px' }}>
                      <span style={{ fontWeight: 600, marginBottom: '8px', display: 'block', color: 'var(--color-ink)' }}>
                        {isCn ? '个人简历 (PDF 或 DOCX，最大 5MB)' : isId ? 'Resume / CV (PDF atau DOCX maks 5MB)' : 'Resume / CV (PDF or DOCX max 5MB)'}
                      </span>
                      <div style={{ position: 'relative' }}>
                        <input 
                          type="file" 
                          id="cv-global" 
                          onChange={e => setData('cv', e.target.files[0])}
                          style={{ display: 'none' }} 
                          accept=".pdf,.doc,.docx"
                          required
                        />
                        <label htmlFor="cv-global" style={{ 
                          display: 'block', width: '100%', background: '#fff', border: '1px dashed var(--color-gray-400)', 
                          color: data.cv ? 'var(--color-ink)' : 'var(--color-gray-600)', padding: '24px', borderRadius: '8px', textAlign: 'center', cursor: 'pointer',
                          fontWeight: data.cv ? '600' : 'normal',
                          borderColor: data.cv ? 'var(--color-red)' : 'var(--color-gray-400)'
                        }}>
                          {data.cv ? (
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                              <svg className="ico ico-16" viewBox="0 0 24 24" style={{ stroke: 'var(--color-success)' }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                              {data.cv.name}
                            </span>
                          ) : (
                            isCn ? '点击上传简历文件 (PDF / DOCX)' : isId ? 'Klik untuk mengunggah CV (PDF / DOCX)' : 'Click to upload your resume (PDF / DOCX)'
                          )}
                        </label>
                      </div>
                      {errors.cv && <div className="text-red-500 text-sm mt-1" style={{ color: 'var(--color-error)' }}>{errors.cv}</div>}
                    </div>

                    <button 
                      type="submit" 
                      className="btn btn--primary" 
                      style={{ width: '100%', justifyContent: 'center', marginTop: '16px', height: '52px' }}
                      disabled={processing}
                    >
                      {processing 
                        ? (isCn ? '正在提交申请...' : isId ? 'Mengirim Lamaran...' : 'Submitting Application...') 
                        : (isCn ? '提交求职申请' : isId ? 'Kirim Lamaran' : 'Send Application')}
                    </button>
                  </form>
                </>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </MainLayout>
  );
}
