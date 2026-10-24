'use client';

import { useState, useEffect } from 'react';
import styles from '@/styles/SideScroll.module.css';

export default function SideScrollBar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  const sections = [
    { id: 'hero', label: '01 Hero' },
    { id: 'side-scroll', label: '02 Editorial Reel' },
    { id: 'collections', label: '03 Collections' },
    { id: 'moments', label: '04 Moments' },
    { id: 'packages', label: '05 Packages' },
    { id: 'contact-cta', label: '06 Connect' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Calculate overall page scroll percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }

      // Check which section is in view
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;
      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i].id);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className={styles.sideScrollBarWrapper} aria-label="Page section navigation">
      {/* Vertical Track Line with dynamic progress fill */}
      <div className={styles.verticalTrack}>
        <div
          className={styles.trackFill}
          style={{ height: `${scrollProgress}%` }}
          aria-hidden="true"
        />
      </div>

      {/* Section Node Dots */}
      <nav className={styles.sectionsList}>
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <button
              key={section.id}
              type="button"
              className={`${styles.sectionNode} ${isActive ? styles.nodeActive : ''}`}
              onClick={() => scrollToSection(section.id)}
              aria-label={`Scroll to ${section.label}`}
              aria-current={isActive ? 'true' : undefined}
            >
              <span className={styles.nodeIndicator} />
              <span className={styles.nodeLabel}>{section.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
