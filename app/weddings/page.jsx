import Image from 'next/image';
import Link from 'next/link';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import { STUDIO_INFO, PORTFOLIO_ITEMS } from '@/data/portfolioData';
import styles from '@/styles/PageHero.module.css';
import portfolioStyles from '@/styles/Portfolio.module.css';

export const metadata = {
  title: 'Wedding Photography in Bhopal | Lens & Light Studio',
  description: 'Documenting authentic wedding rituals, timeless portraits, and candid emotion across Bhopal and central India. Real photographs, two-photographer team.',
};

export default function WeddingsPage() {
  const weddingPhotos = PORTFOLIO_ITEMS.filter((item) => item.category === 'weddings');
  const whatsappHref = `https://wa.me/${STUDIO_INFO.whatsapp}?text=${encodeURIComponent(
    'Hello Lens & Light Studio, I would like to check wedding date availability in Bhopal.'
  )}`;

  return (
    <div className="framed-page">
      <div className="container">
        {/* Page Hero Header */}
        <section className={styles.pageHero} aria-label="Weddings Overview">
          <div className={styles.heroContent}>
            <span className={styles.breadcrumb}>COLLECTION • 01</span>
            <h1 className={styles.title}>SACRED VOWS & CELEBRATIONS</h1>
            <p className={styles.description}>
              We document traditional Indian wedding rituals, quiet intimate glances, and joyful family celebrations across Bhopal, Madhya Pradesh, and destination venues nationwide.
            </p>
            <div className={styles.actions}>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-pill-whatsapp"
              >
                <span>Check Your Wedding Date</span>
              </a>
              <Link href="/portfolio" className="btn-pill btn-pill-outline">
                <span>View Full Portfolio</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Editorial Story 1: Temple Vows */}
        <section className={styles.editorialShowcase} aria-label="Featured Wedding Story">
          <div className={styles.editorialGrid}>
            <div className={styles.editorialImageContainer}>
              <Image
                src="/images/temple-vows.jpg"
                alt="Couple on temple balcony with stone gopuram backdrop"
                fill
                priority
                sizes="(max-width: 860px) 100vw, 50vw"
                className={styles.editorialImage}
              />
            </div>

            <div className={styles.editorialDetails}>
              <span className={styles.detailsTag}>TEMPLE SANCTUM • CEREMONY</span>
              <h2 className={styles.detailsTitle}>The Sacred Gopuram</h2>
              <p className={styles.detailsText}>
                Matrimonial vows framed by timeless Dravidian and Central Indian temple architecture. In traditional ceremonies, we prioritize unobtrusive positioning to capture the sanctity of the rituals and the quiet joy between couple and family.
              </p>

              <ul className={styles.pointsList}>
                <li className={styles.pointsItem}>
                  <svg className={styles.pointIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Dual-angle coverage: simultaneous wide rituals & candid portraits</span>
                </li>
                <li className={styles.pointsItem}>
                  <svg className={styles.pointIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Respectful documentary presence during sacred ceremonies</span>
                </li>
                <li className={styles.pointsItem}>
                  <svg className={styles.pointIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Natural light preservation without harsh, disruptive flash rigs</span>
                </li>
              </ul>

              <div style={{ marginTop: '0.5rem' }}>
                <a
                  href={`https://wa.me/${STUDIO_INFO.whatsapp}?text=${encodeURIComponent(
                    'Hello Lens & Light Studio, I am planning a traditional wedding ceremony in Bhopal and would like to inquire about your coverage.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill btn-pill-primary"
                >
                  <span>Inquire for Ceremonies</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Editorial Story 2: Heritage Courtyard */}
        <section className={styles.editorialShowcase} aria-label="Heritage Wedding Couture">
          <div className={styles.editorialGrid} style={{ direction: 'rtl' }}>
            <div className={styles.editorialImageContainer} style={{ direction: 'ltr' }}>
              <Image
                src="/images/wedding-heritage.jpg"
                alt="Couple in traditional ivory silk and gold tissue couture in courtyard"
                fill
                sizes="(max-width: 860px) 100vw, 50vw"
                className={styles.editorialImage}
              />
            </div>

            <div className={styles.editorialDetails} style={{ direction: 'ltr' }}>
              <span className={styles.detailsTag}>COUTURE & PORTRAITURE</span>
              <h2 className={styles.detailsTitle}>Courtyard of Heritage</h2>
              <p className={styles.detailsText}>
                Elegance in traditional silk attire. Our approach to bridal and couple portraits balances editorial poise with authentic warmth, creating photographs that look as dignified fifty years from now as they do today.
              </p>

              <ul className={styles.pointsList}>
                <li className={styles.pointsItem}>
                  <svg className={styles.pointIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Artful textile & heirloom jewelry detailing</span>
                </li>
                <li className={styles.pointsItem}>
                  <svg className={styles.pointIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Gentle, guided portrait direction for natural posture</span>
                </li>
              </ul>

              <div style={{ marginTop: '0.5rem' }}>
                <Link href="/contact" className="btn-pill btn-pill-outline">
                  <span>Send Studio Inquiry</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Wedding Collection Gallery Preview */}
        <section style={{ marginBottom: '4rem' }} aria-label="Weddings Gallery Highlights">
          <div className="section-header">
            <div>
              <span className="section-label">SELECTED WORKS</span>
              <h2 className="section-title">WEDDINGS SHOWCASE</h2>
            </div>
            <Link href="/portfolio" className="btn-pill btn-pill-outline">
              <span>View All Categories</span>
            </Link>
          </div>

          <div className={portfolioStyles.galleryGrid}>
            {weddingPhotos.map((item) => (
              <div key={item.id} className={portfolioStyles.galleryCard}>
                <div className={portfolioStyles.cardImageContainer}>
                  <Image
                    src={item.image}
                    alt={item.description}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={portfolioStyles.cardImage}
                  />
                </div>
                <div className={portfolioStyles.cardCaption}>
                  <span className={portfolioStyles.cardCategory}>{item.location}</span>
                  <h3 className={portfolioStyles.cardTitle}>{item.title}</h3>
                  <p className={portfolioStyles.cardDesc}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WhatsApp Date CTA */}
        <WhatsAppCTA
          title="Reserve Your Wedding Date"
          subtitle="Our two-photographer team takes on a strictly limited number of weddings per season in Bhopal and Central India to guarantee focused artistic dedication."
          category="Wedding Photography"
        />
      </div>
    </div>
  );
}
