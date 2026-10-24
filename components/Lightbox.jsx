'use client';

import { useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import styles from '@/styles/Lightbox.module.css';

export default function Lightbox({
  images = [],
  currentIndex = 0,
  isOpen = false,
  onClose,
  onNext,
  onPrev,
  triggerElement = null,
}) {
  const modalRef = useRef(null);
  const closeBtnRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const currentImage = images[currentIndex];

  // Keyboard navigation & Esc to close
  const handleKeyDown = useCallback(
    (e) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        onNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        onPrev();
      } else if (e.key === 'Tab') {
        // Trap focus inside modal
        if (!modalRef.current) return;
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      }
    },
    [isOpen, onClose, onNext, onPrev]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      // Focus the close button when opened
      setTimeout(() => {
        closeBtnRef.current?.focus();
      }, 50);
    } else {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
      // Restore focus to original trigger element if provided
      if (triggerElement && triggerElement.focus) {
        triggerElement.focus();
      }
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown, triggerElement]);

  // Touch swipe handling
  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    handleSwipeGesture();
  };

  const handleSwipeGesture = () => {
    const swipeDistance = touchEndX.current - touchStartX.current;
    const minSwipeDistance = 45; // px

    if (swipeDistance > minSwipeDistance) {
      // Swiped Right -> Previous
      onPrev();
    } else if (swipeDistance < -minSwipeDistance) {
      // Swiped Left -> Next
      onNext();
    }
  };

  if (!isOpen || !currentImage) return null;

  return (
    <div
      className={styles.backdrop}
      role="dialog"
      aria-modal="true"
      aria-label={`Viewing ${currentImage.title || 'Portfolio Image'}`}
      ref={modalRef}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Bar with Counter and Close Button */}
      <div className={styles.topBar}>
        <div className={styles.counter}>
          <span className={styles.currentIndex}>{String(currentIndex + 1).padStart(2, '0')}</span>
          <span className={styles.separator}>/</span>
          <span className={styles.totalCount}>{String(images.length).padStart(2, '0')}</span>
        </div>

        <button
          ref={closeBtnRef}
          type="button"
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close Lightbox (Press Escape)"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      {/* Main Image Stage */}
      <div className={styles.stage}>
        {/* Previous Button */}
        <button
          type="button"
          className={`${styles.navBtn} ${styles.prevBtn}`}
          onClick={onPrev}
          aria-label="Previous Image (Press Left Arrow)"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        {/* Display Image */}
        <div className={styles.imageWrapper}>
          <Image
            src={currentImage.image}
            alt={currentImage.description || currentImage.title}
            fill
            sizes="(max-width: 768px) 100vw, 85vw"
            priority
            className={styles.lightboxImage}
          />
        </div>

        {/* Next Button */}
        <button
          type="button"
          className={`${styles.navBtn} ${styles.nextBtn}`}
          onClick={onNext}
          aria-label="Next Image (Press Right Arrow)"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>

      {/* Caption Strip */}
      <div className={styles.captionBar}>
        <div className={styles.captionContent}>
          <span className={styles.categoryTag}>{currentImage.categoryLabel}</span>
          <h2 className={styles.captionTitle}>{currentImage.title}</h2>
          <p className={styles.captionDesc}>{currentImage.description}</p>
        </div>
      </div>
    </div>
  );
}
