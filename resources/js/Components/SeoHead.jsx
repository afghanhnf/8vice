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
  schema,
}) {
  const { props } = usePage();
  const pageSeos = props.pageSeos || {};
  const siteSettings = props.siteSettings || {};
  const cmsSeo = pageCode ? pageSeos[pageCode] : null;

  // Origin & URLs
  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
  const currentUrl = url || (typeof window !== 'undefined' ? window.location.href : '');

  // Determine language based on pathname
  const isIndonesian = pathname.startsWith('/id');
  const locale = isIndonesian ? 'id_ID' : 'en_US';
  const alternateLocale = isIndonesian ? 'en_US' : 'id_ID';

  // Hreflang alternate URLs
  const cleanPath = pathname.replace(/^\/id/, '') || '/';
  const enUrl = `${origin}${cleanPath === '/' ? '' : cleanPath}`;
  const idUrl = `${origin}/id${cleanPath === '/' ? '' : cleanPath}`;

  // 1. Resolve Title
  let resolvedTitle = '';
  if (article?.t) {
    resolvedTitle = typeof article.t === 'string' ? article.t : (article.t[isIndonesian ? 'id' : 'en'] || article.t.en || article.t.id || '');
    if (resolvedTitle && !resolvedTitle.includes('8vice')) {
      resolvedTitle = `${resolvedTitle} | 8vice`;
    }
  } else if (caseStudy?.h) {
    resolvedTitle = typeof caseStudy.h === 'string' ? caseStudy.h : (caseStudy.h[isIndonesian ? 'id' : 'en'] || caseStudy.h.en || caseStudy.h.id || '');
    if (resolvedTitle && !resolvedTitle.includes('8vice')) {
      resolvedTitle = `${resolvedTitle} | 8vice Case Study`;
    }
  } else if (title) {
    resolvedTitle = title.includes('8vice') || title.includes('|') ? title : `${title} | 8vice`;
  } else if (cmsSeo?.meta_title) {
    resolvedTitle = typeof cmsSeo.meta_title === 'string'
      ? cmsSeo.meta_title
      : (cmsSeo.meta_title[isIndonesian ? 'id' : 'en'] || cmsSeo.meta_title.en || cmsSeo.meta_title.id || '');
  } else if (siteSettings?.default_meta_title) {
    resolvedTitle = typeof siteSettings.default_meta_title === 'string'
      ? siteSettings.default_meta_title
      : (siteSettings.default_meta_title[isIndonesian ? 'id' : 'en'] || siteSettings.default_meta_title.en || siteSettings.default_meta_title.id || '');
  }

  if (!resolvedTitle) {
    resolvedTitle = isIndonesian
      ? '8vice | Solusi Strategis & Konsultasi Bisnis Global di Indonesia'
      : '8vice | Indonesia, Decoded for Chinese Businesses & Global Enterprises';
  }

  // 2. Resolve Description
  let resolvedDescription = '';
  if (article) {
    if (article.excerpt) {
      resolvedDescription = article.excerpt;
    } else if (typeof article.body === 'string') {
      resolvedDescription = article.body.replace(/<[^>]*>?/gm, '').slice(0, 160) + '...';
    } else if (Array.isArray(article.body)) {
      resolvedDescription = article.body.map(b => b.text || '').join(' ').slice(0, 160) + '...';
    } else {
      resolvedDescription = `Read ${resolvedTitle} on 8vice Insights. High-level analysis and strategic intelligence for Indonesia.`;
    }
  } else if (caseStudy?.p) {
    resolvedDescription = typeof caseStudy.p === 'string'
      ? caseStudy.p
      : (caseStudy.p[isIndonesian ? 'id' : 'en'] || caseStudy.p.en || caseStudy.p.id || '');
  } else if (description) {
    resolvedDescription = description;
  } else if (cmsSeo?.meta_description) {
    resolvedDescription = typeof cmsSeo.meta_description === 'string'
      ? cmsSeo.meta_description
      : (cmsSeo.meta_description[isIndonesian ? 'id' : 'en'] || cmsSeo.meta_description.en || cmsSeo.meta_description.id || '');
  } else if (siteSettings?.default_meta_description) {
    resolvedDescription = typeof siteSettings.default_meta_description === 'string'
      ? siteSettings.default_meta_description
      : (siteSettings.default_meta_description[isIndonesian ? 'id' : 'en'] || siteSettings.default_meta_description.en || siteSettings.default_meta_description.id || '');
  }

  if (!resolvedDescription) {
    resolvedDescription = isIndonesian
      ? '8vice membantu bisnis global dan Tiongkok berekspansi di Indonesia dengan strategi masuk pasar, perizinan, struktur bisnis, dan riset mendalam.'
      : '8vice empowers Chinese & global businesses to seamlessly enter, structure, and scale in Indonesia with senior advisors who have operated on the ground.';
  }

  // 3. Resolve Image / OG Image
  let rawImage = '';
  if (article?.cover) {
    rawImage = article.cover.startsWith('/') || article.cover.startsWith('http') ? article.cover : `/storage/${article.cover}`;
  } else if (caseStudy?.cover) {
    rawImage = caseStudy.cover.startsWith('/') || caseStudy.cover.startsWith('http') ? caseStudy.cover : `/storage/${caseStudy.cover}`;
  } else if (image) {
    rawImage = image;
  } else if (cmsSeo?.og_image) {
    rawImage = cmsSeo.og_image;
  } else if (siteSettings?.default_og_image) {
    rawImage = siteSettings.default_og_image;
  } else {
    rawImage = '/images/og-default.webp';
  }

  // Ensure full URL for social crawlers (Facebook, LinkedIn, Twitter, WhatsApp)
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
  if (!resolvedKeywords && cmsSeo?.meta_keywords) {
    resolvedKeywords = typeof cmsSeo.meta_keywords === 'string'
      ? cmsSeo.meta_keywords
      : (cmsSeo.meta_keywords[isIndonesian ? 'id' : 'en'] || cmsSeo.meta_keywords.en || cmsSeo.meta_keywords.id || '');
  }
  if (!resolvedKeywords && siteSettings?.site_keywords) {
    resolvedKeywords = siteSettings.site_keywords;
  }
  if (!resolvedKeywords) {
    resolvedKeywords = 'indonesia market entry, chinese business indonesia, corporate advisory jakarta, business consultancy, business intelligence';
  }

  // 5. OpenGraph Type & Robots
  const resolvedOgType = article || caseStudy ? 'article' : (type || cmsSeo?.og_type || 'website');
  const resolvedRobots = robots || cmsSeo?.robots || 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
  const resolvedCanonical = cmsSeo?.canonical_url || currentUrl;
  const twitterHandle = siteSettings?.twitter_handle || '@8vice';

  // 6. JSON-LD Structured Data
  const defaultSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${origin}/#organization`,
        'name': '8vice',
        'url': origin,
        'logo': {
          '@type': 'ImageObject',
          'url': `${origin}/images/profil/8vice-logo.webp`,
          'caption': '8vice Logo',
        },
        'description': 'Strategic advisory, corporate intelligence, and market entry consultancy for Indonesia.',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'SOHO Building, Jl. Letjen M.T. Haryono No.Kav. 2, RT.1/RW.6, Tebet Bar., Kec. Pancoran',
          'addressLocality': 'Jakarta Selatan',
          'addressCountry': 'ID',
        },
        'sameAs': [
          siteSettings?.linkedin_url || 'https://www.linkedin.com/company/8-vice/',
          siteSettings?.instagram_url || 'https://www.instagram.com/8viceofficial',
        ].filter(Boolean),
      },
      {
        '@type': 'WebSite',
        '@id': `${origin}/#website`,
        'url': origin,
        'name': '8vice',
        'publisher': {
          '@id': `${origin}/#organization`,
        },
      },
      article ? {
        '@type': 'Article',
        '@id': `${currentUrl}#article`,
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
        '@id': `${currentUrl}#faq`,
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
      <meta name="description" content={resolvedDescription} />
      <meta name="keywords" content={resolvedKeywords} />
      <meta name="author" content="8vice Advisory" />
      <meta name="robots" content={resolvedRobots} />
      <meta name="googlebot" content={resolvedRobots} />

      {/* Canonical & Hreflang */}
      <link rel="canonical" href={resolvedCanonical} />
      <link rel="alternate" hrefLang="en" href={enUrl} />
      <link rel="alternate" hrefLang="id" href={idUrl} />
      <link rel="alternate" hrefLang="x-default" href={enUrl} />

      {/* Open Graph / Facebook / LinkedIn / WhatsApp */}
      <meta property="og:site_name" content="8VICE" />
      <meta property="og:type" content={resolvedOgType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={resolvedTitle} />
      <meta property="og:description" content={resolvedDescription} />
      <meta property="og:image" content={resolvedOgImage} />
      <meta property="og:image:secure_url" content={resolvedOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={resolvedTitle} />
      <meta property="og:locale" content={locale} />
      <meta property="og:locale:alternate" content={alternateLocale} />

      {/* Twitter / X Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={resolvedTitle} />
      <meta name="twitter:description" content={resolvedDescription} />
      <meta name="twitter:image" content={resolvedOgImage} />
      <meta name="twitter:image:alt" content={resolvedTitle} />

      {/* Structured Data (JSON-LD) for Google Rich Snippets */}
      <script type="application/ld+json">
        {JSON.stringify(finalSchema)}
      </script>
    </Head>
  );
}
