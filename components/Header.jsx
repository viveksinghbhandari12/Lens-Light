'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { STUDIO_INFO } from '@/data/portfolioData';
import styles from '@/styles/Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const leftLinks = [
    { href: '/about', label: 'About' },
    { href: '/weddings', label: 'Weddings' },
    { href: '/portfolio', label: 'Gallery' },
  ];

  const rightLinks = [
    { href: '/pre-wedding', label: 'Pre-Wedding' },
    { href: '/baby-family', label: 'Family' },
  ];

  const allNavLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/weddings', label: 'Weddings' },
    { href: '/pre-wedding', label: 'Pre-Wedding' },
    { href: '/baby-family', label: 'Baby & Family' },
    { href: '/portfolio', label: 'Gallery' },
    { href: '/contact', label: "Let's Connect" },
  ];

  const whatsappHref = `https://wa.me/${STUDIO_INFO.whatsapp}?text=${encodeURIComponent(
    'Hello Lens & Light Studio, I would like to check availability for a photography session in Bhopal.'
  )}`;

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.headerContainer}>
        {/* Left Nav */}
        <nav className={styles.desktopNav} aria-label="Primary Left Navigation">
          <ul className={styles.navList}>
            {leftLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`${styles.navLink} ${isActive ? styles.active : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Center Brand Mark (KINEO.IRIS Signature) */}
        <div className={styles.brandWrapper}>
          <Link href="/" className={styles.brandLink} aria-label="Lens & Light Studio Home">
            <span className={styles.brandName}>LENS &amp; LIGHT</span>
            <span className={styles.brandSub}>PHOTOGRAPHY • BHOPAL</span>
          </Link>
        </div>

        {/* Right Nav & "Let's Connect" CTA */}
        <div className={styles.rightActions}>
          <nav className={styles.desktopNavSecondary} aria-label="Primary Right Navigation">
            <ul className={styles.navList}>
              {rightLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`${styles.navLink} ${isActive ? styles.active : ''}`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <Link href="/contact" className={styles.connectBtn}>
            <span>LET&apos;S CONNECT</span>
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className={styles.menuToggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          >
            <span className={`${styles.menuBar} ${mobileMenuOpen ? styles.barTop : ''}`}></span>
            <span className={`${styles.menuBar} ${mobileMenuOpen ? styles.barMid : ''}`}></span>
            <span className={`${styles.menuBar} ${mobileMenuOpen ? styles.barBot : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Full-Screen Overlay */}
      <div
        className={`${styles.mobileOverlay} ${mobileMenuOpen ? styles.mobileOpen : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className={styles.mobileContent}>
          <div className={styles.mobileBrand}>
            <span className={styles.mobileBrandName}>LENS &amp; LIGHT</span>
            <span className={styles.mobileBrandSub}>PHOTOGRAPHY • BHOPAL</span>
          </div>

          <ul className={styles.mobileNavList}>
            {allNavLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`${styles.mobileNavLink} ${isActive ? styles.mobileActive : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className={styles.mobileFooterCta}>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill btn-pill-bronze"
              style={{ width: '100%' }}
            >
              Check Date on WhatsApp
            </a>
            <span className={styles.mobileLocation}>Bhopal, Madhya Pradesh</span>
          </div>
        </div>
      </div>
    </header>
  );
}
