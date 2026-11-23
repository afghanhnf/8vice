/**
 * Deeply merges CMS page content overrides (for active locale) onto static default copy.
 * Explicitly cleared strings ("" or null) replace string defaults so Admin edits can hide fields immediately,
 * while undefined values or missing keys fall back to defaults. Booleans always take precedence.
 */
export function mergePageContent(base, override) {
  if (!override || typeof override !== 'object') {
    return base;
  }

  const out = Array.isArray(base) ? [...base] : { ...base };

  for (const [key, val] of Object.entries(override)) {
    if (val === undefined) {
      continue;
    }

    if (typeof val === 'boolean') {
      out[key] = val;
      continue;
    }

    if (val === null || val === '') {
      // If Admin explicitly cleared an existing string field, honor empty string so content disappears cleanly
      if (typeof base?.[key] === 'string') {
        out[key] = '';
      }
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

    if (typeof val === 'object' && !Array.isArray(val) && base?.[key] === undefined) {
      out[key] = { ...val };
      continue;
    }

    out[key] = val;
  }

  return out;
}
