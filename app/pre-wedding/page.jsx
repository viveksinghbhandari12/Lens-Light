import Image from 'next/image';
import Link from 'next/link';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import { STUDIO_INFO, PORTFOLIO_ITEMS } from '@/data/portfolioData';
import styles from '@/styles/PageHero.module.css';
import portfolioStyles from '@/styles/Portfolio.module.css';

export const metadata = {
  title: 'Pre-Wedding Photography in Bhopal | Lens & Light Studio',
  description: 'Editorial pre-wedding shoots, cinematic palace portraits, and intimate couple storytelling in Bhopal and heritage locations across Madhya Pradesh.',
};

export default function PreWeddingPage() {
  const preWeddingPhotos = PORTFOLIO_ITEMS.filter((item) => item.category === 'pre-wedding');
  const whatsappHref = `https://wa.me/${STUDIO_INFO.whatsapp}?text=${encodeURIComponent(
    'Hello Lens & Light Studio, I would like to check dates for a pre-wedding shoot in Bhopal.'
  )}`;

  return (
    <div className="framed-page">
      <div className="container">
        {/* Page Hero Header */}
        <section className={styles.pageHero} aria-label="Pre-Wedding Overview">
          <div className={styles.heroContent}>
            <span className={styles.breadcrumb}>COLLECTION • 02</span>
            <h1 className={styles.title}>EDITORIAL PRE-WEDDINGS</h1>
            <p className={styles.description}>
              Unhurried, cinematic portraits set against Madhya Pradesh’s historic palaces, natural sanctuaries, and tranquil architectural retreats. Focused on connection, atmosphere, and natural intimacy.
            </p>
            <div className={styles.actions}>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-pill-whatsapp"
              >
                <span>Book Pre-Wedding Session</span>
              </a>
              <Link href="/portfolio" className="btn-pill btn-pill-outline">
                <span>View All Collections</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Feature 1: The Golden Jaali */}
        <section className={styles.editorialShowcase} aria-label="The Golden Jaali Story">
          <div className={styles.editorialGrid}>
            <div className={styles.editorialImageContainer}>
              <Image
                src="/images/palace-silhouette.jpg"
                alt="Couple silhouette backlit by intricate stone jaali window"
                fill
                priority
                sizes="(max-width: 860px) 100vw, 50vw"
                className={styles.editorialImage}
              />
            </div>

            <div className={styles.editorialDetails}>
              <span className={styles.detailsTag}>LIGHT & ARCHITECTURE</span>
              <h2 className={styles.detailsTitle}>The Golden Jaali</h2>
              <p className={styles.detailsText}>
                When ancient craftsmanship meets contemporary romance. We utilize the natural geometry of historic jaali screens to cast intricate shadow tapestries, placing the quiet embrace of the couple at the center of the frame.
              </p>

              <ul className={styles.pointsList}>
                <li className={styles.pointsItem}>
                  <svg className={styles.pointIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Dramatic play between natural light and architectural shadows</span>
                </li>
                <li className={styles.pointsItem}>
                  <svg className={styles.pointIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Candid, unscripted moments rather than rigid poses</span>
                </li>
                <li className={styles.pointsItem}>
                  <svg className={styles.pointIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Curated heritage locations in Bhopal, Mandu, Gwalior & Orchha</span>
                </li>
              </ul>

              <div style={{ marginTop: '0.5rem' }}>
                <a
                  href={`https://wa.me/${STUDIO_INFO.whatsapp}?text=${encodeURIComponent(
                    'Hello Lens & Light Studio, I love your silhouette and heritage pre-wedding work. Can we discuss concepts and dates?'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill btn-pill-primary"
                >
                  <span>Inquire for Pre-Wedding</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Feature 2: Whispering Sandstone */}
        <section className={styles.editorialShowcase} aria-label="Whispering Sandstone Feature">
          <div className={styles.editorialGrid} style={{ direction: 'rtl' }}>
            <div className={styles.editorialImageContainer} style={{ direction: 'ltr' }}>
              <Image
                src="/images/wedding-veil.jpg"
                alt="Couple in pavilion with floating sheer veil"
                fill
                sizes="(max-width: 860px) 100vw, 50vw"
                className={styles.editorialImage}
              />
            </div>

            <div className={styles.editorialDetails} style={{ direction: 'ltr' }}>
              <span className={styles.detailsTag}>CINEMATIC MOTION</span>
              <h2 className={styles.detailsTitle}>Whispering Sandstone</h2>
              <p className={styles.detailsText}>
                Capturing grace in motion. A flowing sheer veil suspended in the palace breeze, evoking the timeless grandeur of royalty while keeping the couple’s tender connection immediate and real.
              </p>

              <ul className={styles.pointsList}>
                <li className={styles.pointsItem}>
                  <svg className={styles.pointIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Bespoke styling guidance and color harmony advice</span>
                </li>
                <li className={styles.pointsItem}>
                  <svg className={styles.pointIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Unhurried sessions allowing natural chemistry to flourish</span>
                </li>
              </ul>

              <div style={{ marginTop: '0.5rem' }}>
                <Link href="/contact" className="btn-pill btn-pill-outline">
                  <span>Contact Our Bhopal Team</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Wedding Grid Highlights */}
        <section style={{ marginBottom: '4rem' }} aria-label="Pre-Wedding Highlights">
          <div className="section-header">
            <div>
              <span className="section-label">SELECTED STORIES</span>
              <h2 className="section-title">PRE-WEDDING ARCHIVE</h2>
            </div>
            <Link href="/portfolio" className="btn-pill btn-pill-outline">
              <span>View All Categories</span>
            </Link>
          </div>

          <div className={portfolioStyles.galleryGrid}>
            {preWeddingPhotos.map((item) => (
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

        {/* WhatsApp CTA */}
        <WhatsAppCTA
          title="Plan Your Pre-Wedding Session"
          subtitle="Whether in Bhopal's historic courtyards, serene lakesides, or ancient MP forts, our two-photographer team creates a relaxed, memorable experience."
          category="Pre-Wedding Session"
        />
      </div>
    </div>
  );
}
