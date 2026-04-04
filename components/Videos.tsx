'use client';

import { useReveal } from './useReveal';

const reels = [
  {
    url: 'https://www.instagram.com/reel/DSXRD6Tkt_J/?igsh=eXh2anp0cGpydjg=',
    shortcode: 'DSXRD6Tkt_J',
    title: 'AI Automation in Action',
    description:
      'Behind the scenes of how I use AI tools to build content pipelines that scale brands effortlessly.',
    tag: 'AI & Automation',
    gradient: 'from-[#833ab4] via-[#fd1d1d] to-[#fcb045]',
  },
  {
    url: 'https://www.instagram.com/reel/DRma_5SEvmJ/?igsh=cGN2MmhxdGhqYzRl',
    shortcode: 'DRma_5SEvmJ',
    title: 'Brand Growth Strategy',
    description:
      'The exact content framework I use to grow brand awareness and convert followers into loyal customers.',
    tag: 'Brand Strategy',
    gradient: 'from-[#405de6] via-[#5851db] to-[#833ab4]',
  },
  {
    url: 'https://www.instagram.com/reel/DTP5r6eErdL/?igsh=MWZtdmtyZDVwZ3Y5bg==',
    shortcode: 'DTP5r6eErdL',
    title: 'Content That Converts',
    description:
      'How to craft short-form content that stops the scroll, builds trust, and drives real business results.',
    tag: 'Content Creation',
    gradient: 'from-[#fcb045] via-[#fd1d1d] to-[#833ab4]',
  },
];

function ReelCard({
  reel,
  delay,
  index,
}: {
  reel: (typeof reels)[0];
  delay: string;
  index: number;
}) {
  return (
    <a
      href={reel.url}
      target="_blank"
      rel="noopener noreferrer"
      className="reveal glass-card group relative overflow-hidden flex flex-col cursor-pointer"
      style={{ transitionDelay: delay }}
    >
      {/* ── Reel visual preview ── */}
      <div className="relative aspect-[9/14] sm:aspect-[9/12] bg-obsidian-3 overflow-hidden flex-shrink-0">

        {/* Instagram gradient background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${reel.gradient} opacity-80`} />

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />

        {/* Center elements */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
          {/* Faint IG icon */}
          <svg
            viewBox="0 0 24 24"
            className="w-10 h-10 text-white/25"
            fill="currentColor"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>

          {/* Play button */}
          <div className="w-16 h-16 rounded-full bg-white/15 border border-white/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-white/25 shadow-[0_0_40px_rgba(255,255,255,0.1)]">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="white" className="ml-1">
              <polygon points="5,2 20,11 5,20" />
            </svg>
          </div>

          <span className="font-mono text-[0.6rem] tracking-[0.25em] text-white/60 uppercase">
            Watch Reel
          </span>
        </div>

        {/* Large index watermark */}
        <div className="absolute bottom-4 left-4 font-display text-[4.5rem] font-light text-white/5 leading-none select-none pointer-events-none">
          {String(index + 1).padStart(2, '0')}
        </div>

        {/* Tag badge */}
        <span className="absolute top-3 left-3 font-mono text-[0.58rem] tracking-widest uppercase px-3 py-1.5 bg-black/40 border border-white/15 text-white backdrop-blur-md">
          {reel.tag}
        </span>

        {/* Reel label */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1.5 bg-black/40 border border-white/10 backdrop-blur-md">
          <svg viewBox="0 0 24 24" className="w-3 h-3 text-white" fill="currentColor">
            <path d="M2 6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm10 1L7 18h10L12 7z" />
          </svg>
          <span className="font-mono text-[0.55rem] text-white/80 tracking-wider">Reel</span>
        </div>

        {/* Hover darkening overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-all duration-300" />
      </div>

      {/* ── Text content ── */}
      <div className="p-6 flex flex-col gap-2 flex-1">
        <h3 className="font-display text-lg font-light text-ivory group-hover:text-gold transition-colors duration-300 leading-snug">
          {reel.title}
        </h3>
        <p className="font-body text-sm text-ivory-dim leading-relaxed">
          {reel.description}
        </p>
        <div className="mt-auto pt-4 flex items-center gap-2 text-gold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
          <span className="font-mono text-[0.6rem] tracking-widest uppercase">Open on Instagram</span>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M1 9L9 1M9 1H3M9 1v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </a>
  );
}

export default function Videos() {
  const sectionRef = useReveal() as React.RefObject<HTMLElement>;

  return (
    <section
      id="videos"
      ref={sectionRef}
      className="relative py-32 lg:py-40 bg-obsidian-2"
    >
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="reveal flex items-center gap-4 mb-6">
          <span className="gold-line" />
          <span className="section-label">Content</span>
        </div>

        <div
          className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
          style={{ transitionDelay: '0.1s' }}
        >
          <div>
            <h2 className="section-title text-[clamp(2.5rem,5vw,4rem)] text-ivory leading-none">
              Watch my{' '}
              <span className="italic text-gold">reels</span>
            </h2>
            <p className="font-body text-sm text-ivory-dim mt-3 max-w-xs leading-relaxed">
              Short-form content crafted to educate, inspire, and convert.
            </p>
          </div>
          <a
            href="https://www.instagram.com/nianzaimedia"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline flex-shrink-0 flex items-center gap-2"
          >
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            All Reels
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M1 9L9 1M9 1H3M9 1v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </a>
        </div>

        {/* 3-column portrait reel grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reels.map((reel, i) => (
            <ReelCard
              key={reel.shortcode}
              reel={reel}
              index={i}
              delay={`${0.12 + i * 0.1}s`}
            />
          ))}
        </div>

        <p
          className="reveal text-center font-mono text-[0.58rem] tracking-widest text-ivory-dim uppercase mt-10 opacity-40"
          style={{ transitionDelay: '0.5s' }}
        >
          Click any reel to watch on Instagram
        </p>
      </div>
    </section>
  );
}
