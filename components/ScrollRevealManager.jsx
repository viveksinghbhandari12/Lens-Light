'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * ScrollRevealManager
 * High-performance, GPU-friendly scroll reveal controller.
 * Uses native IntersectionObserver.
 * Degrades gracefully: if JS fails, content remains 100% visible.
 * Fully supports prefers-reduced-motion.
 */
export default function ScrollRevealManager() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.documentElement.classList.add('reduced-motion');
      return;
    }

    // Flag that JS is ready to coordinate reveal transitions
    document.documentElement.classList.add('js-reveal-ready');

    const elements = document.querySelectorAll(
      '.reveal-on-scroll, [data-reveal], [data-stagger]'
    );

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.12,
      }
    );

    elements.forEach((el) => {
      // Immediately reveal if already visible in upper viewport on load
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
        el.classList.add('is-revealed');
      } else {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
