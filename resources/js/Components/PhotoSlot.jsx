import React from 'react';

// ponytail: placeholder frame until real photography is sourced; pass `src` to swap in the photo.
export default function PhotoSlot({ src, label = 'Photo', ratio = '4 / 3', style = {} }) {
  if (src) {
    return (
      <div className="photo-slot photo-slot--filled" style={{ aspectRatio: ratio, ...style }}>
        <img src={src} alt={label} loading="lazy" />
      </div>
    );
  }
  return (
    <div className="photo-slot" style={{ aspectRatio: ratio, ...style }} role="img" aria-label={`Photo placeholder: ${label}`}>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
      <span>{label}</span>
    </div>
  );
}
