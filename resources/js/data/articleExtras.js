/**
 * Article extras (tags, FAQs, references) are managed in the CMS (Filament → Insights)
 * and arrive already resolved for the current locale on the `insight` prop.
 * This helper only normalises them for rendering; there is no hard-coded content here.
 */

const asArray = (value) => (Array.isArray(value) ? value : []);

export function getArticleExtras(insight) {
  const category = (insight?.cat || '').replace(/\s+/g, '');

  const tags = asArray(insight?.tags).filter(Boolean);
  const faqs = asArray(insight?.faqs).filter((f) => f && f.q && f.a);
  const references = asArray(insight?.references).filter((r) => r && r.title);

  return {
    // Fall back to the category as a single topic when editors have not added tags.
    tags: tags.length > 0 ? tags : category ? [category] : [],
    faqs,
    references,
  };
}
