import React, { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({ children, className = '', delay = 0, variant = 'up' }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => setIsVisible(true), delay);
          } else {
            setIsVisible(true);
          }
          observer.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`reveal reveal--${variant}${isVisible ? ' is-visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
}

export function Staggered({ children, className = '', variant = 'up', staggerDelay = 50 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal-stagger${isVisible ? ' is-visible' : ''} ${className}`}>
      {React.Children.map(children, (child, i) => {
        if (!child) return null;
        const delay = i * staggerDelay;
        return React.cloneElement(child, {
          style: {
            ...child.props.style,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: `opacity 500ms cubic-bezier(0.05, 0.7, 0.1, 1.0) ${delay}ms, transform 500ms cubic-bezier(0.05, 0.7, 0.1, 1.0) ${delay}ms`,
          },
        });
      })}
    </div>
  );
}
