'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { PORTFOLIO_ITEMS, CATEGORIES } from '@/data/portfolioData';
import Lightbox from '@/components/Lightbox';
import styles from '@/styles/Portfolio.module.css';

export default function PortfolioGallery({ initialCategory = 'all' }) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [triggerEl, setTriggerEl] = useState(null);
  const itemRefs = useRef({});

  // Filter items based on activeCategory
  const filteredItems = activeCategory === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  const openLightbox = (index, element) => {
    setLightboxIndex(index);
    setTriggerEl(element);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section className={styles.gallerySection} aria-label="Portfolio Gallery">
      {/* Category Filter Tabs */}
      <div className={styles.filterContainer} data-reveal="fade-up" role="tablist" aria-label="Filter portfolio by photography category">
        {CATEGORIES.map((cat) => {
          const isSelected = activeCategory === cat.key;
          return (
            <button
              key={cat.key}
              role="tab"
              aria-selected={isSelected}
              className={`${styles.filterBtn} ${isSelected ? styles.activeFilter : ''}`}
              onClick={() => setActiveCategory(cat.key)}
            >
              <span>{cat.label}</span>
              {isSelected && <span className={styles.filterDot} aria-hidden="true" />}
            </button>
          );
        })}
      </div>

      {/* Grid of Authentic Photographs */}
      <div className={styles.galleryGrid} data-stagger role="region" aria-live="polite">
        {filteredItems.map((item, idx) => (
          <article
            key={item.id}
            className={styles.galleryCard}
            ref={(el) => (itemRefs.current[item.id] = el)}
          >
            <div
              className={styles.cardImageContainer}
              onClick={(e) => openLightbox(idx, e.currentTarget)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openLightbox(idx, e.currentTarget);
                }
              }}
              aria-label={`Open image: ${item.title} (${item.categoryLabel})`}
            >
              <Image
                src={item.image}
                alt={item.description}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className={styles.cardImage}
                priority={idx < 2}
              />
              <div className={styles.imageOverlay}>
                <div className={styles.overlayMeta}>
                  <span className={styles.overlayCategory}>{item.categoryLabel}</span>
                  <h3 className={styles.overlayTitle}>{item.title}</h3>
                  <span className={styles.overlayLocation}>{item.location}</span>
                </div>
                <div className={styles.zoomIconWrapper} aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    <line x1="11" y1="8" x2="11" y2="14"></line>
                    <line x1="8" y1="11" x2="14" y2="11"></line>
                  </svg>
                </div>
              </div>
            </div>

            {/* Static Card Caption */}
            <div className={styles.cardCaption}>
              <div className={styles.captionHeader}>
                <span className={styles.cardCategory}>{item.categoryLabel}</span>
                <span className={styles.cardNumber}>0{idx + 1}</span>
              </div>
              <h4 className={styles.cardTitle}>{item.title}</h4>
              <p className={styles.cardDesc}>{item.description}</p>
            </div>
          </article>
        ))}
      </div>

      {/* Accessible Lightbox Modal */}
      <Lightbox
        images={filteredItems}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={handleNext}
        onPrev={handlePrev}
        triggerElement={triggerEl}
      />
    </section>
  );
}
