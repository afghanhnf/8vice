/**
 * Deeply merges CMS page content overrides (for active locale) onto static default copy.
 * Empty strings, null, or empty arrays fall back gracefully to defaults so partial edits never blank out a section.
 */
export function mergePageContent(base, override) {
  if (!override || typeof override !== 'object') {
    return base;
  }

  const out = Array.isArray(base) ? [...base] : { ...base };

  for (const [key, val] of Object.entries(override)) {
    if (val === null || val === undefined || val === '') {
      continue;
    }

    if (Array.isArray(val)) {
      if (val.length === 0) continue;
      // Unwrap Filament simple Repeater items ({ item: '...' } / { line: '...' }) if needed
      out[key] = val.map((el) => {
        if (el && typeof el === 'object' && !Array.isArray(el)) {
          if ('item' in el && Object.keys(el).length === 1) return el.item;
          if ('line' in el && Object.keys(el).length === 1) return el.line;
        }
        return el;
      });
      continue;
    }

    if (typeof val === 'object' && typeof base?.[key] === 'object' && !Array.isArray(base?.[key])) {
      out[key] = mergePageContent(base[key], val);
      continue;
    }

    out[key] = val;
  }

  return out;
}
