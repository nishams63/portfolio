'use client';

import { useState, FormEvent } from 'react';
import { useReveal } from './useReveal';

const services = [
  'AI Automation Setup',
  'Content Strategy',
  'Brand Identity',
  'Video Production',
  'Growth Consulting',
  'Other',
];

export default function Contact() {
  const sectionRef = useReveal() as React.RefObject<HTMLElement>;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate send (replace with your API route or service like Resend/Formspree)
    await new Promise((r) => setTimeout(r, 1500));
    setStatus('sent');
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-32 lg:py-40 bg-obsidian-2 overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/15 to-transparent" />

      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] pointer-events-none opacity-[0.05]"
        style={{ background: 'radial-gradient(circle, #C9A84C 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="reveal flex items-center gap-4 mb-6">
          <span className="gold-line" />
          <span className="section-label">Contact</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32">
          {/* Left — CTA copy */}
          <div>
            <p
              className="reveal font-mono text-[0.6rem] tracking-[0.25em] text-gold uppercase mb-4"
              style={{ transitionDelay: '0.05s' }}
            >
              Nisham S
            </p>
            <h2
              className="reveal section-title text-[clamp(2.8rem,6vw,5rem)] text-ivory leading-none mb-8"
              style={{ transitionDelay: '0.1s' }}
            >
              Let's work
              <br />
              <span className="italic text-gold">together</span>
            </h2>

            <p
              className="reveal font-body text-[1.05rem] text-ivory-dim leading-relaxed mb-12 max-w-md"
              style={{ transitionDelay: '0.2s' }}
            >
              Ready to grow your brand with AI-powered content? I take on a
              limited number of clients each quarter. Tell me about your project
              and let's see if we're a good fit.
            </p>

            {/* Contact info */}
            <div
              className="reveal flex flex-col gap-6"
              style={{ transitionDelay: '0.3s' }}
            >
              {[
                { label: 'Email', value: 'nianzaimedia@gmail.com', href: 'mailto:nianzaimedia@gmail.com' },
                { label: 'Phone', value: '+91 87549 34665', href: 'tel:+918754934665' },
                { label: 'Instagram', value: '@nianzaimedia', href: 'https://instagram.com/nianzaimedia' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-6">
                  <span className="font-mono text-[0.65rem] tracking-widest text-ivory-dim uppercase w-20">
                    {item.label}
                  </span>
                  <div className="flex-1 h-[1px] bg-white/5" />
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm text-ivory hover:text-gold transition-colors duration-300"
                  >
                    {item.value}
                  </a>
                </div>
              ))}
            </div>

            {/* Availability badge */}
            <div
              className="reveal mt-12 inline-flex items-center gap-3 px-5 py-3 border border-gold/20 bg-gold/5"
              style={{ transitionDelay: '0.4s' }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="font-mono text-[0.65rem] tracking-widest text-ivory-dim uppercase">
                Available for Q3 2024 projects
              </span>
            </div>
          </div>

          {/* Right — form */}
          <div className="reveal" style={{ transitionDelay: '0.25s' }}>
            {status === 'sent' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20 glass-card p-12">
                <div className="text-gold text-5xl mb-6">✦</div>
                <h3 className="font-display text-3xl font-light text-ivory mb-4">
                  Message received
                </h3>
                <p className="font-body text-ivory-dim text-sm leading-relaxed max-w-xs">
                  Thank you for reaching out. I'll review your project and get
                  back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[0.6rem] tracking-widest text-ivory-dim uppercase">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[0.6rem] tracking-widest text-ivory-dim uppercase">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[0.6rem] tracking-widest text-ivory-dim uppercase">
                    Service
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="form-input appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='none'%3E%3Cpath d='M2 4l4 4 4-4' stroke='%239e9890' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 16px center',
                    }}
                  >
                    <option value="" disabled>Select a service…</option>
                    {services.map((s) => (
                      <option key={s} value={s} className="bg-obsidian-3">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[0.6rem] tracking-widest text-ivory-dim uppercase">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    placeholder="Tell me about your project, goals, and timeline…"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary justify-center mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <>
                      <span className="w-4 h-4 border border-current border-t-transparent rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </>
                  )}
                </button>

                <p className="font-mono text-[0.6rem] tracking-wider text-ivory-dim text-center mt-2">
                  I respond within 24 hours · No spam, ever
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
