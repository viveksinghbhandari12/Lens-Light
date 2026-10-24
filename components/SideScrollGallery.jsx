'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { EDITORIAL_SIDE_SCROLL } from '@/data/portfolioData';
import styles from '@/styles/SideScroll.module.css';

export default function SideScrollGallery() {
  const scrollContainerRef = useRef(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollStatus = () => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll > 0) {
      const percentage = (el.scrollLeft / maxScroll) * 100;
      setScrollPercentage(percentage);
      setCanScrollLeft(el.scrollLeft > 10);
      setCanScrollRight(el.scrollLeft < maxScroll - 10);
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    el.addEventListener('scroll', updateScrollStatus, { passive: true });
    updateScrollStatus();
    return () => el.removeEventListener('scroll', updateScrollStatus);
  }, []);

  const handleScroll = (direction) => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const scrollAmount = el.clientWidth * 0.75;
    el.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section id="side-scroll" className={styles.sideScrollSection} aria-label="Editorial Side Scroll Gallery">
      <div className="container">
        {/* Section Header with Navigation Arrows */}
        <div className={styles.sectionHeaderRow}>
          <div>
            <span className="section-label">HORIZON STORIES • SIDE SCROLL</span>
            <h2 className={styles.galleryHeading}>EDITORIAL REEL</h2>
          </div>

          <div className={styles.controlsGroup}>
            <button
              type="button"
              className={`${styles.arrowBtn} ${!canScrollLeft ? styles.arrowDisabled : ''}`}
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              aria-label="Scroll left through editorial photos"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>

            <button
              type="button"
              className={`${styles.arrowBtn} ${!canScrollRight ? styles.arrowDisabled : ''}`}
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
              aria-label="Scroll right through editorial photos"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Track */}
      <div
        className={styles.horizontalTrack}
        ref={scrollContainerRef}
        tabIndex={0}
        role="region"
        aria-label="Horizontal side-scrolling image gallery"
      >
        <div className={styles.trackPaddingStart} />

        {EDITORIAL_SIDE_SCROLL.map((item, idx) => (
          <article key={idx} className={styles.reelCard}>
            <div className={styles.reelImageContainer}>
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 80vw, 420px"
                className={styles.reelImage}
              />
              <div className={styles.reelOverlay}>
                <span className={styles.reelIndex}>0{idx + 1}</span>
                <div>
                  <span className={styles.reelCategory}>{item.category}</span>
                  <h3 className={styles.reelTitle}>{item.title}</h3>
                </div>
              </div>
            </div>
          </article>
        ))}

        <div className={styles.trackPaddingEnd} />
      </div>

      {/* Horizontal Side Scrollbar & Progress Indicator */}
      <div className="container">
        <div className={styles.progressBarWrapper}>
          <div className={styles.progressTrack}>
            <div
              className={styles.progressThumb}
              style={{
                width: `${Math.max(15, scrollPercentage)}%`,
                left: `${(scrollPercentage * 0.85)}%`,
              }}
              aria-hidden="true"
            />
          </div>
          <div className={styles.scrollHint}>
            <span>DRAG OR SCROLL SIDEWAYS TO EXPLORE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
