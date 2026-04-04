'use client';

import { useEffect, useState, Suspense } from 'react';
import dynamic from 'next/dynamic';

const FloatingShape = dynamic(() => import('./three/FloatingShape'), {
  ssr: false,
  loading: () => null,
});

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [lettersDone, setLettersDone] = useState(false);

  useEffect(() => {
    setMounted(true);
    const t = setTimeout(() => setLettersDone(true), 1200);
    return () => clearTimeout(t);
  }, []);

  const name = 'Nisham';

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-obsidian"
    >
      {/* ── Radial glows ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 right-[20%] -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-[0.08]"
          style={{ background: 'radial-gradient(circle, #C9A84C 0%, transparent 65%)' }}
        />
        <div
          className="absolute top-1/4 left-[10%] w-[350px] h-[350px] rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, #C9A84C 0%, transparent 70%)' }}
        />
        {/* Subtle horizontal gradient bar */}
        <div
          className="absolute bottom-1/3 left-0 right-0 h-[1px] opacity-20"
          style={{ background: 'linear-gradient(90deg, transparent, #C9A84C 40%, #C9A84C 60%, transparent)' }}
        />
      </div>

      {/* ── 3D canvas ── */}
      <div className="absolute inset-0 md:left-[45%] opacity-50 md:opacity-100">
        {mounted && (
          <Suspense fallback={null}>
            <FloatingShape />
          </Suspense>
        )}
      </div>

      {/* ── Top rule ── */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-20 w-full">
        <div className="max-w-[680px]">

          {/* Availability pill */}
          <div
            className="inline-flex items-center gap-2.5 px-4 py-2 border border-gold/20 bg-gold/5 mb-10 backdrop-blur-sm"
            style={{ animation: 'fadeUp 0.6s ease 0.1s both' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="font-mono text-[0.6rem] tracking-[0.22em] text-gold uppercase">
              Available for projects
            </span>
          </div>

          {/* ── Animated name ── */}
          <div
            className="mb-4 overflow-hidden"
            style={{ animation: 'fadeUp 0.7s ease 0.2s both' }}
          >
            <p className="font-mono text-[0.65rem] tracking-[0.3em] text-ivory-dim uppercase mb-3">
              Hi, I'm
            </p>
            <h1 className="font-display font-light leading-none tracking-tight text-[clamp(4rem,11vw,9rem)] flex flex-wrap">
              {name.split('').map((char, i) => (
                <span
                  key={i}
                  className="inline-block"
                  style={{
                    animation: `fadeUp 0.5s cubic-bezier(0.16,1,0.3,1) ${0.3 + i * 0.07}s both`,
                    color: i === 0 ? '#C9A84C' : '#F5F0E8',
                  }}
                >
                  {char}
                </span>
              ))}
            </h1>
          </div>

          {/* ── Tagline block ── */}
          <div
            className="mb-10 pl-1"
            style={{ animation: 'fadeUp 0.8s ease 0.85s both' }}
          >
            {/* Decorative line + tagline */}
            <div className="flex items-start gap-4">
              <div className="mt-3 w-10 h-[1px] bg-gold flex-shrink-0" />
              <p className="font-display font-light italic text-[clamp(1.2rem,3vw,1.9rem)] text-ivory leading-snug">
                I help brands grow using{' '}
                <span
                  className="not-italic font-semibold"
                  style={{
                    background: 'linear-gradient(90deg, #C9A84C, #E8C97A, #C9A84C)',
                    backgroundSize: '200% auto',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    animation: 'shimmer 3.5s linear infinite',
                  }}
                >
                  AI automation
                </span>
              </p>
            </div>
          </div>

          {/* ── Stats ── */}
          <div
            className="flex flex-wrap gap-x-10 gap-y-6 mb-12 pl-1"
            style={{ animation: 'fadeUp 0.8s ease 1s both' }}
          >
            {[
              { value: '50+', label: 'Brands Grown' },
              { value: '3M+', label: 'Content Reach' },
              { value: '5 yrs', label: 'Experience' },
            ].map((stat, i) => (
              <div key={stat.label} className="flex flex-col relative">
                {i !== 0 && (
                  <div className="absolute -left-5 top-2 bottom-2 w-[1px] bg-white/8" />
                )}
                <span className="font-display text-[2.2rem] font-light text-gold leading-none">
                  {stat.value}
                </span>
                <span className="font-mono text-[0.58rem] tracking-widest text-ivory-dim uppercase mt-1.5">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* ── CTAs ── */}
          <div
            className="flex flex-wrap gap-4"
            style={{ animation: 'fadeUp 0.8s ease 1.1s both' }}
          >
            <a href="#contact" className="btn-primary group">
              Work With Me
              <svg
                width="14" height="14" viewBox="0 0 14 14" fill="none"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#projects" className="btn-outline group">
              View Projects
              <svg
                width="14" height="14" viewBox="0 0 14 14" fill="none"
                className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
              >
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ animation: 'fadeIn 1s ease 1.8s both' }}
      >
        <span className="font-mono text-[0.55rem] tracking-[0.35em] text-ivory-dim uppercase opacity-40">
          Scroll
        </span>
        <div className="relative w-[1px] h-12 overflow-hidden">
          <div
            className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-gold to-transparent"
            style={{ animation: 'scrollPulse 2s ease-in-out infinite' }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollPulse {
          0%   { transform: translateY(-100%); opacity: 1; }
          100% { transform: translateY(100%);  opacity: 0; }
        }
      `}</style>
    </section>
  );
}
