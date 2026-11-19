import React, { useEffect } from 'react';
import { usePage } from '@inertiajs/react';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';

export default function MainLayout({ children }) {
  const { url } = usePage();

  useEffect(() => {
    // 1. Progressive Lazy Loading for non-hero Images
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      const isHero = img.closest('.page-hero, .hero, .hero-slider, .geo-hero, header');
      if (!isHero) {
        if (!img.getAttribute('loading')) {
          img.setAttribute('loading', 'lazy');
        }
        if (!img.getAttribute('decoding')) {
          img.setAttribute('decoding', 'async');
        }
      } else {
        img.setAttribute('loading', 'eager');
        if (!img.getAttribute('fetchpriority')) {
          img.setAttribute('fetchpriority', 'high');
        }
      }

      if (img.complete && img.naturalWidth > 0) {
        img.classList.add('is-loaded');
      } else {
        img.addEventListener('load', () => img.classList.add('is-loaded'), { once: true });
      }
    });
  }, [url]);

  useEffect(() => {
    // 3. Google M3 Tactile Press State Interaction Layer
    const handleMouseDown = (e) => {
      const target = e.target.closest('.btn, .article-pill, .tab, .case-card, .article-card, .nav__link');
      if (target) {
        target.classList.add('m3-active-state');
      }
    };

    const handleMouseUp = () => {
      document.querySelectorAll('.m3-active-state').forEach((el) => {
        el.classList.remove('m3-active-state');
      });
    };

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      <Header />
      <main key={url} className="m3-page-transition">
        {children}
      </main>
      <Footer />
    </>
  );
}
