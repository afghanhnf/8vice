import React from 'react';
import { Link, usePage } from '@inertiajs/react';

export default function LocalizedLink({ href, ...props }) {
  const { locale } = usePage().props;

  let activeLocale = locale;
  if ((!activeLocale || activeLocale === 'en') && typeof window !== 'undefined') {
    const p = window.location.pathname;
    if (p === '/id' || p.startsWith('/id/')) activeLocale = 'id';
    else if (p === '/cn' || p.startsWith('/cn/')) activeLocale = 'cn';
  }

  let localizedHref = href;
  if ((activeLocale === 'id' || activeLocale === 'cn') && typeof href === 'string' && href.startsWith('/')) {
    const prefix = `/${activeLocale}`;
    if (href === '/') {
      localizedHref = prefix;
    } else if (
      !href.startsWith('/id/') &&
      href !== '/id' &&
      !href.startsWith('/cn/') &&
      href !== '/cn'
    ) {
      localizedHref = `${prefix}${href}`;
    }
  }

  if (typeof href === 'string' && /^(https?:)?\/\//i.test(href)) {
    return <a href={href} target="_blank" rel="noopener noreferrer" {...props} />;
  }

  return <Link href={localizedHref} {...props} />;
}
