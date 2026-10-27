'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import SideScrollGallery from '@/components/SideScrollGallery';
import SideScrollBar from '@/components/SideScrollBar';
import { STUDIO_INFO } from '@/data/portfolioData';
import styles from '@/styles/Home.module.css';

export default function HomePage() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  // Passive, GPU-friendly subtle parallax on hero and moments background
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    let ticking = false;
    const heroEl = document.getElementById('hero');
    const momentsEl = document.getElementById('moments');

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          if (heroEl && scrollY < window.innerHeight * 1.3) {
            heroEl.style.setProperty('--hero-scroll-y', `${scrollY * 0.16}px`);
          }
          if (momentsEl) {
            const rect = momentsEl.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
              const relativeOffset = (window.innerHeight - rect.top) * 0.09;
              momentsEl.style.setProperty('--moments-scroll-y', `${relativeOffset}px`);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappHref = `https://wa.me/${STUDIO_INFO.whatsapp}?text=${encodeURIComponent(
    'Hello Lens & Light Studio, I would like to check availability for a photography session in Bhopal.'
  )}`;

  const categories = [
    {
      title: 'VOGUE WEDDINGS',
      image: '/images/magazine-cover.jpg',
      alt: 'Luxury editorial wedding magazine cover in black and white',
      href: '/weddings',
    },
    {
      title: 'TEMPLE CEREMONIES',
      image: '/images/temple-vows.jpg',
      alt: 'Temple wedding vows in front of gopuram',
      href: '/weddings',
    },
    {
      title: 'EQUESTRIAN ROMANCE',
      image: '/images/horse-editorial.jpg',
      alt: 'Bride on horseback in highland meadows',
      href: '/pre-wedding',
    },
    {
      title: 'SKYWARD REACH',
      image: '/images/architectural-reach.jpg',
      alt: 'Dramatic low-angle perspective through neoclassical columns',
      href: '/pre-wedding',
    },
    {
      title: 'MEADOW EMBRACE',
      image: '/images/meadow-embrace.jpg',
      alt: 'Pre-wedding couple embrace under expansive cumulus sky',
      href: '/pre-wedding',
    },
  ];

  return (
    <div className="framed-page">
      {/* FLOATING VERTICAL SIDE SCROLLBAR ON HOME */}
      <SideScrollBar />

      {/* 1. KINEO.IRIS SIGNATURE HERO WITH SCALLOP DIVIDER */}
      <section id="hero" className={styles.heroSection} aria-label="Hero Section">
        <div className={styles.heroBgWrapper}>
          <Image
            src="/images/wedding-veil.jpg"
            alt="Lens & Light Studio - Timeless wedding photography in Bhopal"
            fill
            priority
            sizes="100vw"
            className={styles.heroBg}
          />
        </div>
        <div className={styles.heroOverlay} aria-hidden="true" />

        <div className={styles.heroContent}>
          <span className={styles.heroSub}>EXPLORE THE</span>
          <h1 className={styles.heroTitle} aria-label="PACKAGES">
            {"PACKAGES".split('').map((char, i) => (
              <span
                key={i}
                className={styles.heroTitleChar}
                style={{ animationDelay: `${0.32 + i * 0.05}s` }}
              >
                {char}
              </span>
            ))}
          </h1>
          <p className={styles.heroDesc}>
            A dedicated two-photographer team documenting authentic weddings, poetic pre-weddings, and gentle family heirlooms across Bhopal, Madhya Pradesh, and destination venues nationwide.
          </p>
          <div className={styles.heroActions}>
            <Link href="/portfolio" className="btn-pill btn-pill-bronze">
              <span>View Portfolio</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill btn-pill-outline"
            >
              <span>Check Your Date</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* 2. HORIZONTAL SIDE-SCROLL GALLERY REEL WITH CUSTOM SCROLLBAR */}
      <SideScrollGallery />

      {/* 3. KINEO.IRIS 5-COLUMN CATEGORY SHOWCASE STRIP */}
      <section id="collections" className={styles.categoriesStripSection} aria-label="Photography Collections">
        <div className="container">
          <div className={styles.categoriesHeader} data-reveal="fade-up">
            <span className="section-label">CURATED COLLECTIONS</span>
            <h2 className="section-title">CHOOSE YOUR SESSION</h2>
          </div>

          <div className={styles.categoriesGrid} data-stagger>
            {categories.map((cat, idx) => (
              <article key={idx} className={styles.categoryCard}>
                <Link href={cat.href} className={styles.cardImgWrapper} aria-label={`View ${cat.title} collection`}>
                  <Image
                    src={cat.image}
                    alt={cat.alt}
                    fill
                    sizes="(max-width: 680px) 50vw, (max-width: 1200px) 33vw, 20vw"
                    className={styles.cardImg}
                  />
                </Link>
                <h3 className={styles.cardTitle}>{cat.title}</h3>
                <Link href={cat.href} className={styles.learnMoreBtn}>
                  <span>Learn More</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. KINEO.IRIS "MEMORABLE MOMENTS" ATMOSPHERIC BANNER */}
      <section id="moments" className={styles.quoteSection} aria-label="Memorable Moments Philosophy">
        <div className={styles.quoteBgWrapper}>
          <Image
            src="/images/palace-silhouette.jpg"
            alt="Atmospheric couple silhouette"
            fill
            sizes="100vw"
            className={styles.quoteBg}
          />
        </div>
        <div className={styles.quoteOverlay} aria-hidden="true" />

        <div className={styles.quoteContent} data-reveal="fade-up">
          <h2 className={styles.quoteTitle}>&ldquo;MEMORABLE MOMENTS&rdquo;</h2>
          <p className={styles.quoteText}>
            &ldquo;We believe the most poignant photographs aren&apos;t forced poses, but spontaneous sacred rituals, quiet glances between parents, and unscripted laughter shared between families in Bhopal. By having two dedicated lead photographers present, every angle is documented with artistic grace.&rdquo;
          </p>
          <span className={styles.quoteAuthor}>
            LENS &amp; LIGHT STUDIO • TWO-PHOTOGRAPHER CREATIVE TEAM • BHOPAL
          </span>
        </div>
      </section>

      {/* 5. KINEO.IRIS SIGNATURE DEEP OLIVE / MOSS GREEN PACKAGES SECTION */}
      <section id="packages" className={styles.olivePackagesSection} aria-label="Wedding Packages and Inclusions">
        <div className="container">
          <div className={styles.oliveGrid}>
            {/* Left: Romantic Couple Portrait */}
            <div className={styles.oliveImageCol} data-reveal="soft-zoom">
              <Image
                src="/images/wedding-heritage.jpg"
                alt="Couple in traditional wedding attire in heritage garden"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                className={styles.oliveImg}
              />
            </div>

            {/* Right: Content & Accordions */}
            <div className={styles.oliveContentCol} data-reveal="fade-up">
              <span className={styles.whatsIncludedTitle}>BESPOKE EXPERIENCES</span>
              <h2 className={styles.oliveTitle}>WEDDING PACKAGES</h2>
              <p className={styles.oliveText}>
                No matter how you envision your celebration, our packages are tailored to capture every nuance. From intimate pre-wedding rituals to grand multi-day celebrations, we guarantee focused artistic dedication.
              </p>
              <p className={styles.oliveText}>
                Getting married in Bhopal or destination venues across Madhya Pradesh and India? We travel with complete equipment for seamless indoor, outdoor, and heritage architecture coverage.
              </p>

              <span className={styles.whatsIncludedTitle}>WHATS INCLUDED?</span>
              <ul className={styles.includedList} data-stagger>
                <li className={styles.includedItem}>
                  <svg className={styles.includedIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Two dedicated lead photographers (no random subcontractors)</span>
                </li>
                <li className={styles.includedItem}>
                  <svg className={styles.includedIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Dual perspectives: simultaneous wide ceremonies &amp; candid close-ups</span>
                </li>
                <li className={styles.includedItem}>
                  <svg className={styles.includedIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Complete high-resolution collection with zero watermarks</span>
                </li>
                <li className={styles.includedItem}>
                  <svg className={styles.includedIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Private digital gallery for easy sharing with family worldwide</span>
                </li>
              </ul>

              {/* Interactive Accordion Toggles */}
              <div className={styles.accordionList} data-reveal="fade-up">
                <div
                  className={`${styles.accordionItem} ${openAccordion === 0 ? styles.accordionOpen : ''}`}
                  onClick={() => toggleAccordion(0)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleAccordion(0);
                    }
                  }}
                  aria-expanded={openAccordion === 0}
                >
                  <div className={styles.accordionHeader}>
                    <span className={styles.accordionTitle}>FULL DAY WEDDING (8–10 HOURS)</span>
                    <svg className={styles.accordionChevron} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                  {openAccordion === 0 && (
                    <div className={styles.accordionBody}>
                      Complete coverage from bridal and groom preparation, Baraat arrival, sacred Pheras and Mandap rituals, through to family portraits and evening reception.
                    </div>
                  )}
                </div>

                <div
                  className={`${styles.accordionItem} ${openAccordion === 1 ? styles.accordionOpen : ''}`}
                  onClick={() => toggleAccordion(1)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleAccordion(1);
                    }
                  }}
                  aria-expanded={openAccordion === 1}
                >
                  <div className={styles.accordionHeader}>
                    <span className={styles.accordionTitle}>HALF DAY &amp; PRE-WEDDING (4–6 HOURS)</span>
                    <svg className={styles.accordionChevron} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                  {openAccordion === 1 && (
                    <div className={styles.accordionBody}>
                      Ideal for intimate Sangeet, Haldi ceremonies, or unhurried editorial pre-wedding shoots across Bhopal&apos;s lakes, historic gates, and heritage palaces.
                    </div>
                  )}
                </div>
              </div>

              <div style={{ marginTop: '1rem' }}>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill btn-pill-bronze"
                >
                  <span>Inquire for Custom Quote</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHATSAPP CONVERSION CTA BANNER */}
      <div id="contact-cta" className="container" data-reveal="fade-up">
        <WhatsAppCTA
          title="Ready to Secure Your Celebration Date?"
          subtitle="Because we document weddings as a two-person team without substituting associate shooters, dates are reserved on a strict first-confirmed basis in Bhopal."
          category="Wedding & Pre-Wedding Packages"
        />
      </div>
    </div>
  );
}
