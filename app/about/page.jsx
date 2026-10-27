import Image from 'next/image';
import Link from 'next/link';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import { STUDIO_INFO } from '@/data/portfolioData';
import styles from '@/styles/About.module.css';
import heroStyles from '@/styles/PageHero.module.css';

export const metadata = {
  title: 'About Our Two-Photographer Team | Lens & Light Studio Bhopal',
  description: 'Learn about Lens & Light Studio, a two-photographer team documenting authentic weddings and intimate family milestones in Bhopal, Madhya Pradesh.',
};

export default function AboutPage() {
  const whatsappHref = `https://wa.me/${STUDIO_INFO.whatsapp}?text=${encodeURIComponent(
    'Hello Lens & Light Studio, I would like to learn more about your photography team in Bhopal.'
  )}`;

  return (
    <div className="framed-page">
      <div className="container">
        {/* Page Hero Header */}
        <section className={heroStyles.pageHero} aria-label="About Introduction">
          <div className={heroStyles.heroContent}>
            <span className={heroStyles.breadcrumb}>THE STUDIO</span>
            <h1 className={heroStyles.title}>THE TWO-PHOTOGRAPHER TEAM</h1>
            <p className={heroStyles.description}>
              We believe photography is about presence, patience, and honoring the unspoken connections between people. Based in Bhopal, we document real stories with zero pretence.
            </p>
          </div>
        </section>

        {/* Team Narrative Grid */}
        <section className={styles.teamIntroSection} data-reveal="soft-zoom" aria-label="Our Story">
          <div className={styles.teamGrid}>
            <div className={styles.teamImageContainer}>
              <Image
                src="/images/wedding-heritage.jpg"
                alt="Lens & Light Studio - Traditional wedding couple portrait in heritage courtyard"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 50vw"
                className={styles.teamImage}
              />
            </div>

            <div className={styles.teamBioContent}>
              <span className={styles.bioTag}>VISION & PARTNERSHIP</span>
              <h2 className={styles.bioTitle}>TWO PERSPECTIVES, ONE HARMONIOUS STORY.</h2>
              <p className={styles.bioParagraph}>
                Weddings and milestone celebrations are multi-layered. While one of us immerses in the sacred rituals, the other watches the periphery—the tear running down a mother’s cheek, the quiet laughter between siblings, or the nervous handhold just before walking in.
              </p>
              <p className={styles.bioParagraph}>
                By working as an established two-person creative partnership rather than outsourcing to random freelancers, we guarantee consistent artistry, emotional depth, and synchronized storytelling for every single client.
              </p>

              <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill btn-pill-whatsapp"
                >
                  <span>Chat With Our Team</span>
                </a>
                <Link href="/portfolio" className="btn-pill btn-pill-outline">
                  <span>Explore Our Work</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Our Three Core Values */}
        <section className={styles.valuesSection} aria-label="Studio Principles">
          <div className={styles.valuesHeader} data-reveal="fade-up">
            <span className="section-label">HOW WE WORK</span>
            <h2 className={styles.valuesTitle}>UNCOMPROMISING PRINCIPLES</h2>
          </div>

          <div className={styles.valuesGrid} data-stagger>
            <div className={styles.valueCard}>
              <span className={styles.valueNum}>01</span>
              <h3 className={styles.valueTitle}>Authentic Emotion</h3>
              <p className={styles.valueDesc}>
                We do not stage artificial interactions or interrupt sacred rituals. We guide with gentle direction when needed, but always let your natural bond take center stage.
              </p>
            </div>

            <div className={styles.valueCard}>
              <span className={styles.valueNum}>02</span>
              <h3 className={styles.valueTitle}>True-to-Life Colors</h3>
              <p className={styles.valueDesc}>
                Our color grading preserves the true richness of bridal silks, natural skin tones, and sacred ceremonial flora. No heavy, trendy orange filters that date in five years.
              </p>
            </div>

            <div className={styles.valueCard}>
              <span className={styles.valueNum}>03</span>
              <h3 className={styles.valueTitle}>Curated Dedication</h3>
              <p className={styles.valueDesc}>
                We intentionally limit our annual wedding commissions. This ensures every photograph is personally edited by us with the meticulous care it deserves.
              </p>
            </div>
          </div>
        </section>

        {/* Bhopal Heritage Connection */}
        <section className={styles.localSection} data-reveal="soft-zoom" aria-label="Bhopal and Central India Service Area">
          <div className={styles.localGrid}>
            <div>
              <span className="section-label">CENTRAL INDIA HERITAGE</span>
              <h2 className={styles.localTitle}>ROOTED IN BHOPAL, WELCOMING DESTINATIONS.</h2>
              <p className={styles.localText}>
                From the historic sandstone gates of Bhopal to the royal palaces of Gwalior, the tranquil ghats of Ujjain, and private garden estates across Madhya Pradesh, our team has deep familiarity with local heritage locations, lighting, and cultural rituals.
              </p>
              <div className={styles.localBadgeList}>
                <span className={styles.localBadge}>Bhopal Studio</span>
                <span className={styles.localBadge}>Upper Lake & Arera Venues</span>
                <span className={styles.localBadge}>Indore & Ujjain Coverage</span>
                <span className={styles.localBadge}>Heritage MP Forts</span>
                <span className={styles.localBadge}>All-India Destinations</span>
              </div>
            </div>

            <div>
              <div className={styles.connectCard}>
                <span className={styles.connectBadge}>
                  READY TO CONNECT?
                </span>
                <h3 className={styles.connectTitle}>Meet Over Coffee or Video Call</h3>
                <p className={styles.connectDesc}>
                  We would love to hear your story and discuss how we can document your upcoming celebration.
                </p>
                <Link href="/contact" className="btn-pill btn-pill-bronze" style={{ width: '100%' }}>
                  <span>Get in Touch</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* WhatsApp CTA */}
        <WhatsAppCTA
          title="Let's Discuss Your Photography Needs"
          subtitle="Direct WhatsApp message is the fastest way to connect with our two-photographer team in Bhopal."
          category="About Inquiry"
        />
      </div>
    </div>
  );
}
