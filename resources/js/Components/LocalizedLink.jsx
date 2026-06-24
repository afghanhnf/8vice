import React from 'react';
import { Link, usePage } from '@inertiajs/react';

export default function LocalizedLink({ href, ...props }) {
  const { locale } = usePage().props;
  
  // If no locale is set, or it's english, we don't need a prefix.
  // We only prefix if locale is 'id', and href is a relative path (starts with /), and doesn't already start with /id
  let localizedHref = href;
  if (locale === 'id' && typeof href === 'string' && href.startsWith('/')) {
      if (href === '/') {
          localizedHref = '/id';
      } else if (!href.startsWith('/id/') && href !== '/id') {
          localizedHref = `/id${href}`;
      }
  }
  // Detect GitHub Pages (UI Preview)
  const isStaticPreview = typeof window !== 'undefined' && window.location.hostname === 'afghanhnf.github.io';
  
  if (isStaticPreview) {
      if (typeof localizedHref === 'string' && localizedHref.startsWith('/')) {
          localizedHref = `/8vice${localizedHref}`;
      }
      return <a href={localizedHref} {...props} />;
  }

  return <Link href={localizedHref} {...props} />;
}
