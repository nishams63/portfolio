export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative py-12 bg-obsidian border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <span className="font-display text-xl font-light text-ivory">
            NS<span className="text-gold">.</span>
          </span>
          <span className="text-white/10">|</span>
          <span className="font-mono text-[0.6rem] tracking-widest text-ivory-dim uppercase">
            AI Automation & Content
          </span>
        </div>

        {/* Nav */}
        <nav className="flex flex-wrap items-center justify-center gap-8">
          {['About', 'Videos', 'Projects', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-mono text-[0.6rem] tracking-widest text-ivory-dim hover:text-gold uppercase transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <p className="font-mono text-[0.6rem] tracking-widest text-ivory-dim uppercase">
          © {year} Nisham S
        </p>
      </div>
    </footer>
  );
}
