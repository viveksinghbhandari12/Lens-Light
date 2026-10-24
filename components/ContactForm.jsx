'use client';

import { useState } from 'react';
import { STUDIO_INFO } from '@/data/portfolioData';
import styles from '@/styles/Contact.module.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: 'Weddings',
    eventDate: '',
    location: 'Bhopal',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim() || !formData.eventDate) {
      setErrorMsg('Please complete your name, contact number, and tentative event date.');
      return;
    }

    // Format pre-filled WhatsApp message
    const formattedMessage =
      `*New Photography Inquiry — Lens & Light Studio*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Contact:* ${formData.phone}\n` +
      `*Category:* ${formData.category}\n` +
      `*Date:* ${formData.eventDate}\n` +
      `*Location/Venue:* ${formData.location || 'Bhopal'}\n` +
      `*Details:* ${formData.message || 'Looking to discuss photography packages and availability.'}`;

    const whatsappUrl = `https://wa.me/${STUDIO_INFO.whatsapp}?text=${encodeURIComponent(formattedMessage)}`;

    // Set submitted state
    setSubmitted(true);

    // Open WhatsApp in a new tab
    if (typeof window !== 'undefined') {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }
  };

  if (submitted) {
    return (
      <div className={styles.successCard} role="alert">
        <div className={styles.successIcon} aria-hidden="true">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>
        <h3 className={styles.successTitle}>Inquiry Prepared!</h3>
        <p className={styles.successText}>
          Thank you, <strong>{formData.name}</strong>. WhatsApp has been opened with your inquiry details. If it did not open automatically, please click below:
        </p>
        <a
          href={`https://wa.me/${STUDIO_INFO.whatsapp}?text=${encodeURIComponent(
            `Hello Lens & Light Studio, this is ${formData.name}. I am checking availability for ${formData.category} on ${formData.eventDate} in ${formData.location}.`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-pill btn-pill-whatsapp"
        >
          Open WhatsApp Directly
        </a>
        <button
          type="button"
          className={styles.resetBtn}
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: '',
              phone: '',
              category: 'Weddings',
              eventDate: '',
              location: 'Bhopal',
              message: '',
            });
          }}
        >
          Send Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      {errorMsg && (
        <div className={styles.errorMessage} role="alert">
          {errorMsg}
        </div>
      )}

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>
            Your Full Name <span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className={styles.input}
            placeholder="e.g. Priyanshu Sharma"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone" className={styles.label}>
            Phone / WhatsApp Number <span className={styles.required}>*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className={styles.input}
            placeholder="+91 98765 43210"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="category" className={styles.label}>
            Photography Session <span className={styles.required}>*</span>
          </label>
          <select
            id="category"
            name="category"
            className={styles.select}
            value={formData.category}
            onChange={handleChange}
          >
            <option value="Weddings">Wedding Ceremony & Reception</option>
            <option value="Pre-Wedding">Editorial Pre-Wedding Shoot</option>
            <option value="Baby & Family">Baby & Family Milestone</option>
            <option value="Destination Wedding">Destination Wedding</option>
            <option value="Other">Other Custom Inquiry</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="eventDate" className={styles.label}>
            Event Date / Month <span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            id="eventDate"
            name="eventDate"
            required
            className={styles.input}
            placeholder="e.g. December 15, 2026 or Dec 2026"
            value={formData.eventDate}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="location" className={styles.label}>
          Event City / Location
        </label>
        <input
          type="text"
          id="location"
          name="location"
          className={styles.input}
          placeholder="e.g. Bhopal, Indore, or Venue Name"
          value={formData.location}
          onChange={handleChange}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message" className={styles.label}>
          Tell Us About Your Vision
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          className={styles.textarea}
          placeholder="Share details about your ceremonies, aesthetic preferences, or specific moments you want us to document..."
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>

      <button type="submit" className="btn-pill btn-pill-primary" style={{ width: '100%' }}>
        <span>Send Date Inquiry via WhatsApp</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </button>

      <p className={styles.privacyNote}>
        We value your privacy. No spam. You will connect directly with our two-photographer team in Bhopal.
      </p>
    </form>
  );
}
