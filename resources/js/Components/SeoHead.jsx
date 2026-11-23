import React from 'react';
import { Head, usePage } from '@inertiajs/react';

export default function SeoHead({
  pageCode,
  title,
  description,
  image,
  url,
  type,
  keywords,
  robots,
  article,
  caseStudy,
  service,
  schema,
}) {
  const { props } = usePage();
  const pageSeos = props.pageSeos || {};
  const siteSettings = props.siteSettings || {};
  const appUrl = props.appUrl || siteSettings?.app_url || '';
  const cmsSeo = pageCode ? pageSeos[pageCode] : null;

  // Origin & Canonical URLs (strip query string so UTM parameters never split canonicals)
  const origin =
    (typeof window !== 'undefined' && window.location.origin)
      ? window.location.origin.replace(/\/+$/, '')
      : (appUrl || '').replace(/\/+$/, '');
  const pathname = typeof window !== 'undefined' ? (window.location.pathname || '/') : '/';
  const normalizedPath = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
  const canonicalPathUrl = url || `${origin}${normalizedPath}`;

  // Determine language based on pathname or Inertia shared locale
  const isIndonesian = pathname === '/id' || pathname.startsWith('/id/');
  const isChinese = pathname === '/cn' || pathname.startsWith('/cn/');
  const langKey = isChinese ? 'cn' : isIndonesian ? 'id' : (props.locale || 'en');
  const locale = langKey === 'cn' ? 'zh_CN' : langKey === 'id' ? 'id_ID' : 'en_US';
  const alternateLocale = langKey === 'en' ? 'zh_CN' : 'en_US';

  // Hreflang alternate URLs
  const cleanPath = normalizedPath.replace(/^\/(id|cn)(\/|$)/, '/') || '/';
  const enUrl = `${origin}${cleanPath === '/' ? '/' : cleanPath}`;
  const idUrl = `${origin}/id${cleanPath === '/' ? '' : cleanPath}`;
  const cnUrl = `${origin}/cn${cleanPath === '/' ? '' : cleanPath}`;

  const pickLang = (field) => {
    if (!field) return '';
    if (typeof field === 'string') {
      const trimmed = field.trim();
      if (trimmed.startsWith('{') && trimmed.endsWith('}')) {
        try {
          const parsed = JSON.parse(trimmed);
          if (parsed && typeof parsed === 'object') {
            return String(parsed[langKey] || parsed.en || parsed.id || parsed.cn || '').trim();
          }
        } catch (e) {}
      }
      return trimmed;
    }
    if (typeof field === 'object') {
      return String(field[langKey] || field.en || field.id || field.cn || Object.values(field)[0] || '').trim();
    }
    return '';
  };

  // 1. Resolve Title (Entity -> CMS PageSeo -> explicit fallback title -> Site Default -> Fallback)
  let resolvedTitle = '';
  if (article?.t_i18n || article?.t || article?.title) {
    resolvedTitle = pickLang(article.t_i18n || article.t || article.title);
    if (resolvedTitle && !resolvedTitle.includes('8vice') && !resolvedTitle.includes('8 Vice')) {
      resolvedTitle = `${resolvedTitle} | 8vice`;
    }
  } else if (caseStudy?.h_i18n || caseStudy?.h || caseStudy?.title) {
    resolvedTitle = pickLang(caseStudy.h_i18n || caseStudy.h || caseStudy.title);
    if (resolvedTitle && !resolvedTitle.includes('8vice') && !resolvedTitle.includes('8 Vice')) {
      resolvedTitle = `${resolvedTitle} | 8vice Case Study`;
    }
  } else if (service?.title_i18n || service?.title) {
    resolvedTitle = pickLang(service.title_i18n || service.title);
    if (resolvedTitle && !resolvedTitle.includes('8vice') && !resolvedTitle.includes('8 Vice')) {
      resolvedTitle = `${resolvedTitle} | 8vice`;
    }
  } else if (cmsSeo?.meta_title_i18n || cmsSeo?.meta_title) {
    resolvedTitle = pickLang(cmsSeo.meta_title_i18n || cmsSeo.meta_title);
  } else if (title) {
    resolvedTitle = title.includes('8vice') || title.includes('8 Vice') || title.includes('|') ? title : `${title} | 8vice`;
  } else if (siteSettings?.default_meta_title_i18n || siteSettings?.default_meta_title) {
    resolvedTitle = pickLang(siteSettings.default_meta_title_i18n || siteSettings.default_meta_title);
  }

  if (!resolvedTitle) {
    resolvedTitle = langKey === 'cn'
      ? '8vice | 通往印尼与中国的战略商业门户'
      : langKey === 'id'
      ? '8vice | Solusi Strategis & Konsultasi Bisnis Global di Indonesia'
      : '8vice | Indonesia, Decoded for Chinese Businesses & Global Enterprises';
  }

  // 2. Resolve Description
  let resolvedDescription = '';
  if (article) {
    const rawDesc = article.excerpt_i18n || article.excerpt || article.description;
    if (rawDesc) {
      resolvedDescription = pickLang(rawDesc);
    } else if (typeof article.body === 'string') {
      resolvedDescription = article.body.replace(/<[^>]*>?/gm, '').slice(0, 160) + '...';
    } else if (Array.isArray(article.body)) {
      resolvedDescription = article.body.map(b => b.text || '').join(' ').slice(0, 160) + '...';
    } else {
      resolvedDescription = `Read ${resolvedTitle} on 8vice Insights. High-level analysis and strategic intelligence for Indonesia.`;
    }
  } else if (caseStudy?.p_i18n || caseStudy?.p || caseStudy?.description || caseStudy?.summary) {
    resolvedDescription = pickLang(caseStudy.p_i18n || caseStudy.p || caseStudy.description || caseStudy.summary);
  } else if (service?.description_i18n || service?.description || service?.summary) {
    resolvedDescription = pickLang(service.description_i18n || service.description || service.summary);
  } else if (cmsSeo?.meta_description_i18n || cmsSeo?.meta_description) {
    resolvedDescription = pickLang(cmsSeo.meta_description_i18n || cmsSeo.meta_description);
  } else if (description) {
    resolvedDescription = description;
  } else if (siteSettings?.default_meta_description_i18n || siteSettings?.default_meta_description) {
    resolvedDescription = pickLang(siteSettings.default_meta_description_i18n || siteSettings.default_meta_description);
  }

  if (!resolvedDescription) {
    resolvedDescription = langKey === 'cn'
      ? '8vice 助力中国与跨国企业无缝进入印尼市场，提供战略咨询、市场准入、政府关系、商业配对与品牌本土化落地服务。'
      : langKey === 'id'
      ? '8vice membantu bisnis global dan Tiongkok berekspansi di Indonesia dengan strategi masuk pasar, perizinan, struktur bisnis, dan riset mendalam.'
      : '8vice empowers Chinese & global businesses to seamlessly enter, structure, and scale in Indonesia with senior advisors who have operated on the ground.';
  }

  // 3. Resolve Image / OG Image
  let rawImage = '';
  if (article?.cover || article?.image) {
    const c = article.cover || article.image;
    rawImage = c.startsWith('/') || c.startsWith('http') ? c : `/storage/${c}`;
  } else if (caseStudy?.cover || caseStudy?.image) {
    const c = caseStudy.cover || caseStudy.image;
    rawImage = c.startsWith('/') || c.startsWith('http') ? c : `/storage/${c}`;
  } else if (service?.detail_image || service?.detailImage || service?.image || service?.hero_image || service?.heroImage) {
    rawImage = service.detail_image || service.detailImage || service.image || service.hero_image || service.heroImage;
  } else if (cmsSeo?.og_image) {
    rawImage = cmsSeo.og_image;
  } else if (image) {
    rawImage = image;
  } else if (siteSettings?.default_og_image) {
    rawImage = siteSettings.default_og_image;
  } else {
    rawImage = '/images/og-default.webp';
  }

  // Ensure full URL for social crawlers (Facebook, LinkedIn, Twitter, WhatsApp, WeChat)
  let resolvedOgImage = '';
  if (rawImage.startsWith('http://') || rawImage.startsWith('https://')) {
    resolvedOgImage = rawImage;
  } else if (rawImage.startsWith('/')) {
    resolvedOgImage = `${origin}${rawImage}`;
  } else if (rawImage.startsWith('images/')) {
    resolvedOgImage = `${origin}/${rawImage}`;
  } else {
    resolvedOgImage = `${origin}/storage/${rawImage.replace(/^\/+/, '')}`;
  }

  // 4. Resolve Keywords
  let resolvedKeywords = keywords;
  if (!resolvedKeywords && (cmsSeo?.meta_keywords_i18n || cmsSeo?.meta_keywords)) {
    resolvedKeywords = pickLang(cmsSeo.meta_keywords_i18n || cmsSeo.meta_keywords);
  }
  if (!resolvedKeywords && siteSettings?.site_keywords) {
    resolvedKeywords = pickLang(siteSettings.site_keywords);
  }
  if (!resolvedKeywords) {
    resolvedKeywords = 'indonesia market entry, chinese business indonesia, corporate advisory jakarta, business consultancy, business intelligence';
  }

  // 5. OpenGraph Type & Robots
  const resolvedOgType = article || caseStudy ? 'article' : (type || cmsSeo?.og_type || 'website');
  const resolvedRobots = robots || cmsSeo?.robots || 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
  const resolvedCanonical = cmsSeo?.canonical_url || canonicalPathUrl;
  const twitterHandle = siteSettings?.twitter_handle || '@8vice';

  // 6. JSON-LD Structured Data
  const defaultSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${origin}/#organization`,
        'name': '8vice',
        'alternateName': ['8 Vice', '8vice Advisory'],
        'url': origin,
        'logo': {
          '@type': 'ImageObject',
          'url': `${origin}/images/profil/8vice-logo.webp`,
          'caption': '8vice Logo',
        },
        'description': 'Strategic advisory, corporate intelligence, and market entry consultancy for Indonesia.',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': siteSettings?.address || 'SOHO Building, Jl. Letjen M.T. Haryono No.Kav. 2, Jakarta Selatan 12810',
          'addressLocality': 'Jakarta Selatan',
          'addressCountry': 'ID',
        },
        'sameAs': [
          siteSettings?.linkedin_url,
          siteSettings?.instagram_url,
        ].filter(Boolean),
      },
      {
        '@type': 'WebSite',
        '@id': `${origin}/#website`,
        'url': origin,
        'name': '8vice',
        'alternateName': ['8 Vice', '8vice Advisory'],
        'publisher': {
          '@id': `${origin}/#organization`,
        },
      },
      article ? {
        '@type': 'Article',
        '@id': `${canonicalPathUrl}#article`,
        'isPartOf': {
          '@id': `${origin}/#website`,
        },
        'headline': resolvedTitle,
        'description': resolvedDescription,
        'image': resolvedOgImage,
        'datePublished': article.created_at || undefined,
        'dateModified': article.updated_at || undefined,
        'author': {
          '@type': 'Person',
          'name': article.author_name || '8vice Editorial Team',
        },
        'publisher': {
          '@id': `${origin}/#organization`,
        },
      } : null,
      Array.isArray(article?.faqs) && article.faqs.length > 0 ? {
        '@type': 'FAQPage',
        '@id': `${canonicalPathUrl}#faq`,
        'mainEntity': article.faqs
          .filter((f) => f?.q && f?.a)
          .map((f) => ({
            '@type': 'Question',
            'name': f.q,
            'acceptedAnswer': { '@type': 'Answer', 'text': f.a },
          })),
      } : null,
    ].filter(Boolean),
  };

  const finalSchema = schema || defaultSchema;

  return (
    <Head>
      {/* Standard Meta Tags */}
      <title>{resolvedTitle}</title>
      <meta head-key="description" name="description" content={resolvedDescription} />
      <meta head-key="keywords" name="keywords" content={resolvedKeywords} />
      <meta head-key="author" name="author" content="8vice Advisory" />
      <meta head-key="robots" name="robots" content={resolvedRobots} />
      <meta head-key="googlebot" name="googlebot" content={resolvedRobots} />

      {/* Canonical & Hreflang */}
      <link head-key="canonical" rel="canonical" href={resolvedCanonical} />
      <link head-key="hreflang-en" rel="alternate" hrefLang="en" href={enUrl} />
      <link head-key="hreflang-id" rel="alternate" hrefLang="id" href={idUrl} />
      <link head-key="hreflang-cn" rel="alternate" hrefLang="zh-CN" href={cnUrl} />
      <link head-key="hreflang-default" rel="alternate" hrefLang="x-default" href={enUrl} />

      {/* Open Graph / Facebook / LinkedIn / WhatsApp */}
      <meta head-key="og:site_name" property="og:site_name" content="8vice" />
      <meta head-key="og:type" property="og:type" content={resolvedOgType} />
      <meta head-key="og:url" property="og:url" content={canonicalPathUrl} />
      <meta head-key="og:title" property="og:title" content={resolvedTitle} />
      <meta head-key="og:description" property="og:description" content={resolvedDescription} />
      <meta head-key="og:image" property="og:image" content={resolvedOgImage} />
      <meta head-key="og:image:secure_url" property="og:image:secure_url" content={resolvedOgImage} />
      <meta head-key="og:image:alt" property="og:image:alt" content={resolvedTitle} />
      <meta head-key="og:locale" property="og:locale" content={locale} />
      <meta head-key="og:locale:alternate" property="og:locale:alternate" content={alternateLocale} />

      {/* Twitter / X Cards */}
      <meta head-key="twitter:card" name="twitter:card" content="summary_large_image" />
      <meta head-key="twitter:site" name="twitter:site" content={twitterHandle} />
      <meta head-key="twitter:creator" name="twitter:creator" content={twitterHandle} />
      <meta head-key="twitter:title" name="twitter:title" content={resolvedTitle} />
      <meta head-key="twitter:description" name="twitter:description" content={resolvedDescription} />
      <meta head-key="twitter:image" name="twitter:image" content={resolvedOgImage} />
      <meta head-key="twitter:image:alt" name="twitter:image:alt" content={resolvedTitle} />

      {/* Structured Data (JSON-LD) for Google Rich Snippets */}
      <script head-key="jsonld" type="application/ld+json">
        {JSON.stringify(finalSchema)}
      </script>
    </Head>
  );
}
