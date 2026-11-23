/**
 * Formats an integer amount into Indonesian Rupiah display string (e.g. "Rp 1.490.000").
 */
export function formatRupiah(amount) {
  if (amount === null || amount === undefined || amount === '') return '';
  const num = Number(amount);
  if (!Number.isFinite(num) || num < 0) return '';
  return `Rp ${new Intl.NumberFormat('id-ID').format(Math.round(num))}`;
}

/**
 * Resolves a trilingual object { en, id, cn } or plain string into the active language.
 */
export function getLocalizedText(value, lang = 'en') {
  if (!value) return '';
  if (typeof value === 'string') return value;
  return (
    (lang === 'cn' ? value.cn : lang === 'id' ? value.id : value.en) ||
    value.en ||
    value.id ||
    value.cn ||
    ''
  );
}

/**
 * Resolves a trilingual list ({ en: [], id: [], cn: [] } or array) into a flat string array.
 */
export function getLocalizedList(value, lang = 'en') {
  if (!value) return [];
  if (Array.isArray(value)) return value.filter(Boolean);
  const picked =
    (lang === 'cn' ? value.cn : lang === 'id' ? value.id : value.en) ||
    value.en ||
    value.id ||
    value.cn ||
    [];
  return Array.isArray(picked) ? picked.filter(Boolean) : [];
}

/**
 * Resolves storage/static cover path consistently.
 */
export function resolveInsightCover(cover, fallback = '/images/china_city_network.webp') {
  if (!cover) return fallback;
  if (cover.startsWith('/') || cover.startsWith('http')) return cover;
  return `/storage/${cover}`;
}

/**
 * Normalizes a database Insight (where is_research_paper is true) combined with any
 * optional static editorial metadata fallback from researchPapers.js.
 */
export function normalizeResearchPaper(dbItem, staticFallback = null, lang = 'en') {
  const isId = lang === 'id';
  const isCn = lang === 'cn';
  const source = dbItem || staticFallback || {};
  const fb = staticFallback || {};

  const priceIdr =
    dbItem?.paper_price_idr !== null && dbItem?.paper_price_idr !== undefined && dbItem?.paper_price_idr !== ''
      ? Number(dbItem.paper_price_idr)
      : fb?.pricing?.individualPriceIdr ?? null;

  const originalPriceIdr =
    dbItem?.paper_original_price_idr !== null &&
    dbItem?.paper_original_price_idr !== undefined &&
    dbItem?.paper_original_price_idr !== ''
      ? Number(dbItem.paper_original_price_idr)
      : null;

  const priceIdrFormatted = priceIdr !== null ? formatRupiah(priceIdr) : '';
  const originalPriceIdrFormatted =
    originalPriceIdr && (!priceIdr || originalPriceIdr > priceIdr)
      ? formatRupiah(originalPriceIdr)
      : '';

  const priceUsd =
    dbItem?.paper_price_usd ||
    fb?.pricing?.individualPriceUsd ||
    '';

  const pagesCount = Number(dbItem?.paper_pages || fb?.pagesCount || 58);

  const fileFormat =
    dbItem?.paper_file_format ||
    fb?.fileFormat ||
    (isCn
      ? `完整 ${pagesCount} 页 PDF 研究报告`
      : isId
      ? `Laporan PDF Lengkap ${pagesCount} Halaman`
      : `Full ${pagesCount}-Page PDF Report`);

  const badge =
    getLocalizedText(dbItem?.paper_badge, lang) ||
    (isCn ? fb?.badgeCn : isId ? fb?.badgeId : fb?.badge) ||
    (isCn ? '锁定专享 · 深度研究报告' : isId ? 'RISET MENDALAM · DOKUMEN TERKUNCI' : 'LOCKED RESEARCH PAPER');

  const scalevUrl = (dbItem?.research_paper_link || fb?.paymentLink || '').trim();

  const ctaLabel =
    getLocalizedText(dbItem?.paper_cta_label, lang) ||
    (isCn ? '通过 Scalev 购买解锁报告' : isId ? 'Beli & Buka Akses via Scalev' : 'Unlock & Buy via Scalev');

  const includesFromDb = getLocalizedList(dbItem?.paper_includes, lang);
  const includesFromFallback = fb?.pricing?.featuresIndividual
    ? (isCn
        ? fb.pricing.featuresIndividual.cn
        : isId
        ? fb.pricing.featuresIndividual.id
        : fb.pricing.featuresIndividual.en) || []
    : [];

  const includes = includesFromDb.length > 0 ? includesFromDb : includesFromFallback;

  const titleText =
    getLocalizedText(dbItem?.t || dbItem?.title, lang) ||
    (isCn ? fb?.title?.cn : isId ? fb?.title?.id : fb?.title?.en) ||
    '';

  const excerptText =
    getLocalizedText(dbItem?.excerpt, lang) ||
    (isCn ? fb?.subtitle?.cn : isId ? fb?.subtitle?.id : fb?.subtitle?.en) ||
    '';

  const readTime = dbItem?.rt || fb?.readTime || `${Math.max(10, Math.round(pagesCount / 4))} min read · ${pagesCount}-Page Paper`;
  const category = dbItem?.cat || (isCn ? fb?.categoryCn : isId ? fb?.categoryId : fb?.category) || 'China Research & Strategy';

  const defaultHighlights = [
    { value: `${pagesCount} pp`, label: isCn ? '研究篇幅' : isId ? 'Halaman Riset' : 'Paper Volume' },
    { value: isCn ? 'PDF / 数据表' : 'PDF + Data', label: isCn ? '交付格式' : isId ? 'Format Berkas' : 'Deliverable' },
    { value: scalevUrl ? 'Scalev' : 'Direct', label: isCn ? '直连结账' : isId ? 'Akses Instan' : 'Direct Checkout' },
    { value: dbItem?.is_paywall_locked !== false ? (isCn ? '专享锁定' : isId ? 'Terkunci' : 'Locked') : 'Open', label: isCn ? '访问状态' : isId ? 'Status Akses' : 'Access Mode' },
  ];

  const highlights = fb?.highlights
    ? (isCn ? fb.highlights.cn : isId ? fb.highlights.id : fb.highlights.en) || defaultHighlights
    : defaultHighlights;

  return {
    id: source.id || source.slug,
    slug: source.slug,
    cover: resolveInsightCover(dbItem?.cover || fb?.cover),
    date: dbItem?.date || fb?.publishedDate || '2026',
    readTime,
    category,
    badge,
    title: titleText,
    subtitle: excerptText,
    pagesCount,
    fileFormat,
    priceIdr,
    priceIdrFormatted,
    originalPriceIdr,
    originalPriceIdrFormatted,
    priceUsd,
    includes,
    scalevUrl,
    ctaLabel,
    isLocked: dbItem?.is_paywall_locked ?? fb?.isLocked ?? true,
    highlights,
    author: fb?.author || {
      name: dbItem?.author_name || '8 Vice Strategic Research Desk',
      role: dbItem?.author_role || 'Cross-Border Research Practice',
    },
    tocPreview: fb?.tocPreview || [
      {
        num: '01',
        title: {
          en: 'Executive Brief & Market Thesis',
          id: 'Ringkasan Eksekutif & Tesis Pasar',
          cn: '执行摘要与核心市场论点',
        },
        pages: 'pp. 1–6',
        isLocked: false,
      },
      {
        num: '02',
        title: {
          en: 'Full Quantitative Benchmarks & Strategic Frameworks',
          id: 'Analisis Kuantitatif Mendalam & Kerangka Eksekusi',
          cn: '完整量化基准数据与战略执行框架',
        },
        pages: `pp. 7–${pagesCount}`,
        isLocked: true,
      },
    ],
    sampleExcerpt: fb?.sampleExcerpt || {
      en: excerptText,
      id: excerptText,
      cn: excerptText,
    },
  };
}
