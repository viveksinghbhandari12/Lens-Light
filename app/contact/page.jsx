import ContactForm from '@/components/ContactForm';
import { STUDIO_INFO } from '@/data/portfolioData';
import heroStyles from '@/styles/PageHero.module.css';
import contactStyles from '@/styles/Contact.module.css';

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
          <div className={contactStyles.contactLayout}>
            {/* Left: Interactive Form */}
            <div>
              <h2 className={contactStyles.formHeading}>
                Check Date Availability
              </h2>
              <ContactForm />
            </div>

            {/* Right: Studio Direct Channels */}
            <div className={contactStyles.sidebarColumn}>
              {/* WhatsApp Quick Connect Card */}
              <div className={contactStyles.whatsappSidebarCard}>
                <span className={contactStyles.sidebarCardBadge}>
                  INSTANT RESPONSE
                </span>
                <h3 className={contactStyles.sidebarCardTitle}>
                  Direct WhatsApp Chat
                </h3>
                <p className={contactStyles.sidebarCardDesc}>
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
              <div className={contactStyles.detailsCard}>
                <span className={contactStyles.sidebarCardBadge}>
                  STUDIO CHANNELS
                </span>
                
                <div className={contactStyles.channelList}>
                  <div className={contactStyles.channelItem}>
                    <span className={contactStyles.channelLabel}>
                      Direct Phone
                    </span>
                    <a href={`tel:${STUDIO_INFO.phone}`} className={contactStyles.channelValue}>
                      {STUDIO_INFO.phone}
                    </a>
                  </div>

                  <div className={contactStyles.channelItem}>
                    <span className={contactStyles.channelLabel}>
                      Email Inquiries
                    </span>
                    <a href={`mailto:${STUDIO_INFO.email}`} className={contactStyles.channelValue}>
                      {STUDIO_INFO.email}
                    </a>
                  </div>

                  <div className={contactStyles.channelItem}>
                    <span className={contactStyles.channelLabel}>
                      Service Area
                    </span>
                    <p className={contactStyles.channelText}>
                      <strong style={{ color: 'var(--color-text-champagne)' }}>Primary Base:</strong> Bhopal, Madhya Pradesh<br />
                      <strong style={{ color: 'var(--color-text-champagne)' }}>Coverage:</strong> Central India & Destination Weddings Nationwide
                    </p>
                  </div>
                </div>
              </div>

              {/* Booking Protocol Notice */}
              <div className={contactStyles.noticeCard}>
                <h4 className={contactStyles.noticeTitle}>
                  A Note on Dates &amp; Bookings
                </h4>
                <p className={contactStyles.noticeText}>
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
