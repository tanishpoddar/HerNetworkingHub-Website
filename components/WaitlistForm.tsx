'use client';

import { useState } from 'react';

export default function WaitlistForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    jobProfession: '',
    company: '',
    portfolio: '',
    linkedin: '',
    instagram: '',
    country: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Call secure API route instead of directly accessing Google Sheets
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Submission failed');
      }

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        jobProfession: '',
        company: '',
        portfolio: '',
        linkedin: '',
        instagram: '',
        country: ''
      });
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="flex flex-col gap-10 py-8">
      <div className="flex flex-col gap-4 text-center px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
          Ready to <span className="text-primary">Join the Movement?</span>
        </h2>
        <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto px-4">
          Be Among The Many Powerhouse Women To Join Our Exclusive Community
        </p>
        {/* Decorative fading line */}
        <div className="w-full max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      </div>

      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto w-full">
        <div className="bg-card-dark/30 border border-border-dark/50 rounded-2xl p-6 md:p-10 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label htmlFor="name" className="block text-sm font-semibold text-white/90 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background-dark/50 border border-border-dark rounded-lg text-white placeholder:text-white/40 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                placeholder="Priya Sharma"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-white/90 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background-dark/50 border border-border-dark rounded-lg text-white placeholder:text-white/40 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                placeholder="priya.sharma@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-white/90 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background-dark/50 border border-border-dark rounded-lg text-white placeholder:text-white/40 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                placeholder="+91 98765 43210"
              />
            </div>

            <div>
              <label htmlFor="jobProfession" className="block text-sm font-semibold text-white/90 mb-2">
                Job Profession *
              </label>
              <input
                type="text"
                id="jobProfession"
                name="jobProfession"
                value={formData.jobProfession}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background-dark/50 border border-border-dark rounded-lg text-white placeholder:text-white/40 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                placeholder="Entrepreneur, Founder, Coach..."
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-semibold text-white/90 mb-2">
                Company *
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background-dark/50 border border-border-dark rounded-lg text-white placeholder:text-white/40 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                placeholder="Sharma Enterprises"
              />
            </div>

            <div>
              <label htmlFor="portfolio" className="block text-sm font-semibold text-white/90 mb-2">
                Portfolio *
              </label>
              <input
                type="url"
                id="portfolio"
                name="portfolio"
                value={formData.portfolio}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background-dark/50 border border-border-dark rounded-lg text-white placeholder:text-white/40 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                placeholder="https://priyasharma.com"
              />
            </div>

            <div>
              <label htmlFor="linkedin" className="block text-sm font-semibold text-white/90 mb-2">
                LinkedIn Profile *
              </label>
              <input
                type="url"
                id="linkedin"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background-dark/50 border border-border-dark rounded-lg text-white placeholder:text-white/40 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                placeholder="https://linkedin.com/in/priyasharma"
              />
            </div>

            <div>
              <label htmlFor="instagram" className="block text-sm font-semibold text-white/90 mb-2">
                Instagram Handle *
              </label>
              <input
                type="text"
                id="instagram"
                name="instagram"
                value={formData.instagram}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background-dark/50 border border-border-dark rounded-lg text-white placeholder:text-white/40 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                placeholder="@priyasharma"
              />
            </div>

            <div>
              <label htmlFor="country" className="block text-sm font-semibold text-white/90 mb-2">
                Country *
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background-dark/50 border border-border-dark rounded-lg text-white placeholder:text-white/40 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                placeholder="India"
              />
            </div>
          </div>

          {submitStatus === 'success' && (
            <div className="mt-6 p-4 bg-primary/10 border border-primary/30 rounded-lg text-primary">
              ✨ Thank you! You've been added to the waitlist. We'll be in touch soon!
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mt-6 p-4 bg-electric-purple/10 border border-electric-purple/30 rounded-lg text-electric-purple">
              Something went wrong. Please try again.
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="relative w-full mt-8 bg-gradient-to-r from-primary/30 via-primary/40 to-primary/30 hover:from-primary/40 hover:via-primary/50 hover:to-primary/40 backdrop-blur-xl border border-primary/60 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_8px_32px_0_rgba(255,0,127,0.37)] hover:shadow-[0_8px_32px_0_rgba(255,0,127,0.5)] overflow-hidden"
          >
            <span className="relative z-10">{isSubmitting ? 'Submitting...' : 'Join the Waitlist'}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </button>
        </div>
      </form>
    </section>
  );
}
