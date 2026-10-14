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

  if (typeof href === 'string' && /^(https?:)?\/\//i.test(href)) {
      return <a href={href} target="_blank" rel="noopener noreferrer" {...props} />;
  }

  return <Link href={localizedHref} {...props} />;
}
