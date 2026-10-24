import { STUDIO_INFO } from '@/data/portfolioData';
import styles from '@/styles/Home.module.css';

export default function WhatsAppCTA({
  title = "Ready to Begin Your Story?",
  subtitle = "Check wedding dates, pre-wedding concepts, or family portrait sessions directly with our creative team in Bhopal.",
  category = "General Inquiry",
}) {
  const encodedText = encodeURIComponent(
    `Hello Lens & Light Studio, I would like to check availability for ${category} in Bhopal.`
  );
  const whatsappHref = `https://wa.me/${STUDIO_INFO.whatsapp}?text=${encodedText}`;

  return (
    <section className={styles.ctaBannerSection} aria-label="WhatsApp Enquiry Call to Action">
      <div className={styles.ctaBannerContainer}>
        <div className={styles.ctaContent}>
          <span className={styles.ctaBadge}>DIRECT STUDIO INQUIRY</span>
          <h2 className={styles.ctaTitle}>{title}</h2>
          <p className={styles.ctaSubtitle}>{subtitle}</p>
        </div>

        <div className={styles.ctaActions}>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill btn-pill-whatsapp"
            aria-label="Chat on WhatsApp"
          >
            <span>Check Date on WhatsApp</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
            </svg>
          </a>

          <a
            href={`tel:${STUDIO_INFO.phone}`}
            className="btn-pill btn-pill-outline"
            aria-label={`Call studio at ${STUDIO_INFO.phone}`}
          >
            <span>Call Studio</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
