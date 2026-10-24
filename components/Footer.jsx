import Link from 'next/link';
import { STUDIO_INFO } from '@/data/portfolioData';
import styles from '@/styles/Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappHref = `https://wa.me/${STUDIO_INFO.whatsapp}?text=${encodeURIComponent(
    'Hello Lens & Light Studio, I would like to check availability for a photography session in Bhopal.'
  )}`;

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Top Strip / Editorial Masthead */}
        <div className={styles.topSection}>
          <div className={styles.brandColumn}>
            <span className={styles.mastheadBrand}>LENS &amp; LIGHT</span>
            <span className={styles.mastheadSub}>PHOTOGRAPHY • BHOPAL</span>
            <p className={styles.studioBio}>
              A two-photographer team documenting timeless weddings, cinematic pre-weddings, and gentle family moments across Bhopal, Madhya Pradesh, and across India.
            </p>
            <div className={styles.whatsappActionWrapper}>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-pill-bronze"
              >
                <span>Check Your Date on WhatsApp</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Nav Columns */}
          <div className={styles.linksGrid}>
            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>Collections</h4>
              <ul className={styles.linkList}>
                <li><Link href="/weddings">Weddings</Link></li>
                <li><Link href="/pre-wedding">Pre-Wedding</Link></li>
                <li><Link href="/baby-family">Baby &amp; Family</Link></li>
                <li><Link href="/portfolio">Full Portfolio</Link></li>
              </ul>
            </div>

            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>Studio</h4>
              <ul className={styles.linkList}>
                <li><Link href="/about">About Our Team</Link></li>
                <li><Link href="/contact">Inquiries &amp; Dates</Link></li>
                <li><span className={styles.serviceLocation}>Studio: Bhopal, MP</span></li>
                <li><span className={styles.serviceLocation}>All-India Travel</span></li>
              </ul>
            </div>

            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>Direct Inquiries</h4>
              <ul className={styles.linkList}>
                <li>
                  <a href={`tel:${STUDIO_INFO.phone}`} className={styles.contactItem}>
                    {STUDIO_INFO.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${STUDIO_INFO.email}`} className={styles.contactItem}>
                    {STUDIO_INFO.email}
                  </a>
                </li>
                <li>
                  <span className={styles.subtleText}>Bhopal, Madhya Pradesh, India</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            &copy; {currentYear} {STUDIO_INFO.name}. All rights reserved.
          </p>
          <div className={styles.policyTags}>
            <span>100% Authentic Studio Photography</span>
            <span>•</span>
            <span>Zero AI Generated Imagery</span>
            <span>•</span>
            <span>Heptley GROW Plan</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
