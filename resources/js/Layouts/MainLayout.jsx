import React, { useEffect } from 'react';
import { usePage } from '@inertiajs/react';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';

export default function MainLayout({ children }) {
  const { url } = usePage();

  useEffect(() => {
    // 1. Google M3 Progressive Lazy Loading for Images
    const setupLazyImages = () => {
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
    };

    // 2. Google M3 Section Scroll Transitions (Shared Axis Y)
    const setupSectionTransitions = () => {
      const sections = document.querySelectorAll('.section:not(.page-hero):not(.hero)');
      if ('IntersectionObserver' in window) {
        const sectionObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
              }
            });
          },
          { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
        );

        sections.forEach((sec) => {
          sec.classList.add('m3-section-reveal');
          sectionObserver.observe(sec);
        });

        return () => sectionObserver.disconnect();
      } else {
        sections.forEach((sec) => sec.classList.add('is-visible'));
      }
    };

    // Delay slightly to let React finish rendering DOM
    const timer = setTimeout(() => {
      setupLazyImages();
      const cleanupSections = setupSectionTransitions();
      return cleanupSections;
    }, 50);

    return () => clearTimeout(timer);
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
