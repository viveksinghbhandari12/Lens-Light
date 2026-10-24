import ContactForm from '@/components/ContactForm';
import { STUDIO_INFO } from '@/data/portfolioData';
import heroStyles from '@/styles/PageHero.module.css';

export const metadata = {
  title: 'Contact Lens & Light Studio | Bhopal Wedding & Portrait Photography',
  description: 'Inquire about wedding, pre-wedding, and family photography dates in Bhopal, Madhya Pradesh. Direct WhatsApp, phone, and inquiry form.',
};

export default function ContactPage() {
  const whatsappHref = `https://wa.me/${STUDIO_INFO.whatsapp}?text=${encodeURIComponent(
    'Hello Lens & Light Studio, I would like to check availability for a shoot in Bhopal.'
  )}`;

  return (
    <div className="framed-page">
      <div className="container">
        {/* Page Hero Header */}
        <section className={heroStyles.pageHero} aria-label="Contact Studio">
          <div className={heroStyles.heroContent}>
            <span className={heroStyles.breadcrumb}>INQUIRIES & BOOKINGS</span>
            <h1 className={heroStyles.title}>LET'S TALK ABOUT YOUR CELEBRATION</h1>
            <p className={heroStyles.description}>
              We document a limited number of celebrations each season to preserve our dedicated focus. Fill out the inquiry form below or connect directly on WhatsApp to check date availability.
            </p>
          </div>
        </section>

        {/* Contact Layout: Form + Studio Details */}
        <section style={{ marginBottom: '5rem' }} aria-label="Inquiry Form and Studio Details">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 'clamp(2rem, 5vw, 4.5rem)', alignItems: 'start' }}>
            {/* Left: Interactive Form */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', marginBottom: '1.25rem' }}>
                Check Date Availability
              </h2>
              <ContactForm />
            </div>

            {/* Right: Studio Direct Channels */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* WhatsApp Quick Connect Card */}
              <div style={{ background: '#121212', color: '#FFFFFF', borderRadius: 'var(--radius-card)', padding: '2rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                <span style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-accent-gold)', fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>
                  INSTANT RESPONSE
                </span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.85rem', color: '#FFFFFF', marginBottom: '0.75rem' }}>
                  Direct WhatsApp Chat
                </h3>
                <p style={{ fontSize: '0.925rem', color: '#B0B3B8', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  Prefer messaging directly? Tap below to open a direct conversation with our two-photographer team.
                </p>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill btn-pill-whatsapp"
                  style={{ width: '100%' }}
                >
                  <span>Chat on WhatsApp Now</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                  </svg>
                </a>
              </div>

              {/* Direct Details Card */}
              <div style={{ background: 'var(--color-surface)', borderRadius: 'var(--radius-card)', padding: '2rem', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-subtle)' }}>
                <span style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-ink-muted)', fontWeight: 600, display: 'block', marginBottom: '0.75rem' }}>
                  STUDIO CHANNELS
                </span>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-ink-muted)', display: 'block' }}>
                      Direct Phone
                    </span>
                    <a href={`tel:${STUDIO_INFO.phone}`} style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-ink-primary)' }}>
                      {STUDIO_INFO.phone}
                    </a>
                  </div>

                  <div>
                    <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-ink-muted)', display: 'block' }}>
                      Email Inquiries
                    </span>
                    <a href={`mailto:${STUDIO_INFO.email}`} style={{ fontSize: '1.05rem', color: 'var(--color-ink-primary)' }}>
                      {STUDIO_INFO.email}
                    </a>
                  </div>

                  <div>
                    <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-ink-muted)', display: 'block' }}>
                      Service Area
                    </span>
                    <p style={{ fontSize: '0.95rem', color: 'var(--color-ink-secondary)', marginTop: '0.2rem' }}>
                      <strong>Primary Base:</strong> Bhopal, Madhya Pradesh<br />
                      <strong>Coverage:</strong> Central India & Destination Weddings Nationwide
                    </p>
                  </div>
                </div>
              </div>

              {/* Booking Protocol Notice */}
              <div style={{ padding: '1.5rem', borderRadius: 'var(--radius-card)', backgroundColor: '#F8F7F4', border: '1px solid var(--color-border)' }}>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--color-ink-primary)' }}>
                  A Note on Dates & Bookings
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-ink-secondary)', lineHeight: '1.6' }}>
                  Because we shoot as a two-person team without substituting associate shooters, dates are reserved on a strict first-confirmed basis with an initial retainer.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
