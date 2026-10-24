import Image from 'next/image';
import Link from 'next/link';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import { STUDIO_INFO, PORTFOLIO_ITEMS } from '@/data/portfolioData';
import styles from '@/styles/PageHero.module.css';
import portfolioStyles from '@/styles/Portfolio.module.css';

export const metadata = {
  title: 'Baby & Family Photography in Bhopal | Lens & Light Studio',
  description: 'Multi-generational family portraits, celebratory wedding family stages, and gentle newborn milestones documented with warmth and timeless poise in Bhopal, Madhya Pradesh.',
};

export default function BabyFamilyPage() {
  const familyPhotos = PORTFOLIO_ITEMS.filter((item) => item.category === 'baby-family');
  const whatsappHref = `https://wa.me/${STUDIO_INFO.whatsapp}?text=${encodeURIComponent(
    'Hello Lens & Light Studio, I would like to inquire about a family portrait or baby milestone session in Bhopal.'
  )}`;

  return (
    <div className="framed-page">
      <div className="container">
        {/* Page Hero Header */}
        <section className={styles.pageHero} aria-label="Baby and Family Overview">
          <div className={styles.heroContent}>
            <span className={styles.breadcrumb}>COLLECTION • 03</span>
            <h1 className={styles.title}>BABY &amp; FAMILY MILESTONES</h1>
            <p className={styles.description}>
              Preserving life&apos;s most meaningful bonds—from grand multi-generational wedding gatherings to dignified studio heirlooms and tender newborn blessings across Bhopal, Madhya Pradesh.
            </p>
            <div className={styles.actions}>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill btn-pill-bronze"
              >
                <span>Check Date on WhatsApp</span>
              </a>
              <Link href="/portfolio" className="btn-pill btn-pill-outline">
                <span>View Full Portfolio</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Feature 1: The Heirloom Legacy (Studio Heritage Portrait) */}
        <section className={styles.editorialShowcase} aria-label="The Heirloom Legacy Feature">
          <div className={styles.editorialGrid}>
            <div className={styles.editorialImageContainer}>
              <Image
                src="/images/family-studio-portrait.jpg"
                alt="Dignified Indian family portrait in Bhopal studio with parents and adult children"
                fill
                priority
                sizes="(max-width: 860px) 100vw, 50vw"
                className={styles.editorialImage}
              />
            </div>

            <div className={styles.editorialDetails}>
              <span className={styles.detailsTag}>STUDIO HERITAGE • HEIRLOOM</span>
              <h2 className={styles.detailsTitle}>The Heirloom Legacy</h2>
              <p className={styles.detailsText}>
                A classic generational portrait honoring family dignity, timeless poise, and enduring bonds. With careful attention to lighting, posture, and traditional attire, we craft portraits that become family centerpieces for decades.
              </p>

              <ul className={styles.pointsList}>
                <li className={styles.pointsItem}>
                  <svg className={styles.pointIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Meticulously composed studio lighting for rich, natural skin tones</span>
                </li>
                <li className={styles.pointsItem}>
                  <svg className={styles.pointIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Patience with all generations, from elders to young adults</span>
                </li>
                <li className={styles.pointsItem}>
                  <svg className={styles.pointIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>High-resolution master files suitable for grand archival framing</span>
                </li>
              </ul>

              <div style={{ marginTop: '0.5rem' }}>
                <a
                  href={`https://wa.me/${STUDIO_INFO.whatsapp}?text=${encodeURIComponent(
                    'Hello Lens & Light Studio, I would like to book a studio family heirloom portrait session in Bhopal.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill btn-pill-bronze"
                >
                  <span>Book Studio Session</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Feature 2: Generations in Celebration (Wedding Stage Family Portrait) */}
        <section className={styles.editorialShowcase} aria-label="Wedding Stage Family Portrait">
          <div className={styles.editorialGrid} style={{ direction: 'rtl' }}>
            <div className={styles.editorialImageContainer} style={{ direction: 'ltr' }}>
              <Image
                src="/images/family-wedding-stage.jpg"
                alt="Multi-generational family portrait on festive wedding stage with floral arch and chandeliers"
                fill
                sizes="(max-width: 860px) 100vw, 50vw"
                className={styles.editorialImage}
              />
            </div>

            <div className={styles.editorialDetails} style={{ direction: 'ltr' }}>
              <span className={styles.detailsTag}>CELEBRATION • WEDDING STAGE</span>
              <h2 className={styles.detailsTitle}>Generations in Celebration</h2>
              <p className={styles.detailsText}>
                During weddings, family is the beating heart of every ritual. We ensure that amidst the whirlwind of ceremonies, dedicated time is created to capture the entire family together in radiant harmony, vibrant silks, and joyous smiles.
              </p>

              <ul className={styles.pointsList}>
                <li className={styles.pointsItem}>
                  <svg className={styles.pointIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Coordinated group arrangement ensuring every family member is illuminated</span>
                </li>
                <li className={styles.pointsItem}>
                  <svg className={styles.pointIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Fast, organized group photography without delaying wedding ceremonies</span>
                </li>
                <li className={styles.pointsItem}>
                  <svg className={styles.pointIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Cherished keepsakes for parents, grandparents, and siblings</span>
                </li>
              </ul>

              <div style={{ marginTop: '0.5rem' }}>
                <a
                  href={`https://wa.me/${STUDIO_INFO.whatsapp}?text=${encodeURIComponent(
                    'Hello Lens & Light Studio, we are planning a wedding in Bhopal and want complete family coverage.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill btn-pill-outline"
                >
                  <span>Inquire for Wedding Stage</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Feature 3: Lakeside Whispers & Gentle Moments */}
        <section className={styles.editorialShowcase} aria-label="Outdoor Natural Light Family Portrait">
          <div className={styles.editorialGrid}>
            <div className={styles.editorialImageContainer}>
              <Image
                src="/images/family-outdoor-lake.jpg"
                alt="Parents holding toddler and baby by scenic lake with forest backdrop"
                fill
                sizes="(max-width: 860px) 100vw, 50vw"
                className={styles.editorialImage}
              />
            </div>

            <div className={styles.editorialDetails}>
              <span className={styles.detailsTag}>OUTDOOR LIFESTYLE • YOUNG FAMILY</span>
              <h2 className={styles.detailsTitle}>Lakeside Whispers</h2>
              <p className={styles.detailsText}>
                Unhurried, candid memories in natural light. Whether by Bhopal&apos;s Upper Lake or serene outdoor gardens, we document parents and little ones in comfort, capturing spontaneous hugs, baby smiles, and genuine tenderness.
              </p>

              <ul className={styles.pointsList}>
                <li className={styles.pointsItem}>
                  <svg className={styles.pointIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Relaxed, baby-led pace with plenty of time for feeding and breaks</span>
                </li>
                <li className={styles.pointsItem}>
                  <svg className={styles.pointIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Golden hour natural backlighting for soft, atmospheric portraits</span>
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

        {/* Complete Family & Baby Archive Gallery */}
        <section style={{ marginBottom: '4.5rem' }} aria-label="Family and Baby Gallery Archive">
          <div className="section-header">
            <div>
              <span className="section-label">ALL FAMILY WORKS</span>
              <h2 className="section-title">THE FAMILY ARCHIVE</h2>
            </div>
            <Link href="/portfolio" className="btn-pill btn-pill-outline">
              <span>View In Full Gallery ({PORTFOLIO_ITEMS.length})</span>
            </Link>
          </div>

          <div className={portfolioStyles.galleryGrid}>
            {familyPhotos.map((item, idx) => (
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
                  <div className={portfolioStyles.captionHeader}>
                    <span className={portfolioStyles.cardCategory}>{item.location}</span>
                    <span className={portfolioStyles.cardNumber}>0{idx + 1}</span>
                  </div>
                  <h3 className={portfolioStyles.cardTitle}>{item.title}</h3>
                  <p className={portfolioStyles.cardDesc}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WhatsApp CTA */}
        <WhatsAppCTA
          title="Celebrate Your Family Milestones"
          subtitle="Whether gathering generations for an heirloom portrait or welcoming a newborn in Bhopal, connect with our two-photographer team to reserve your date."
          category="Baby & Family Photography"
        />
      </div>
    </div>
  );
}
