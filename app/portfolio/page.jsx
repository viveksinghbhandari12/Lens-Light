import PortfolioGallery from '@/components/PortfolioGallery';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import styles from '@/styles/PageHero.module.css';

export const metadata = {
  title: 'Photography Portfolio | Lens & Light Studio Bhopal',
  description: 'Explore our complete collection of genuine wedding, pre-wedding, and baby photography in Bhopal. Filter by category, view high-resolution photographs, and enquire directly.',
};

export default function PortfolioPage() {
  return (
    <div className="framed-page">
      <div className="container">
        {/* Page Hero Header */}
        <section className={styles.pageHero} aria-label="Portfolio Introduction">
          <div className={styles.heroContent}>
            <span className={styles.breadcrumb}>STUDIO ARCHIVE</span>
            <h1 className={styles.title}>THE COMPLETE PORTFOLIO</h1>
            <p className={styles.description}>
              Every photograph below represents an authentic moment captured by our two-photographer team. Browse by category, click any photograph to open the high-resolution lightbox, and enquire about our availability for your date.
            </p>
          </div>
        </section>

        {/* Interactive Filterable Gallery with Accessible Lightbox */}
        <PortfolioGallery initialCategory="all" />

        {/* WhatsApp CTA */}
        <div style={{ marginTop: '5rem' }}>
          <WhatsAppCTA
            title="Seen Something That Resonates With Your Vision?"
            subtitle="Connect with our photographers directly on WhatsApp to check availability for your wedding, pre-wedding, or family celebration in Bhopal."
            category="Portfolio Inquiry"
          />
        </div>
      </div>
    </div>
  );
}
