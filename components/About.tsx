'use client';

import { useReveal } from './useReveal';

const skills = [
  'AI Automation',
  'Content Strategy',
  'Brand Storytelling',
  'Video Production',
  'Growth Systems',
  'Lead Generation',
];

const values = [
  {
    icon: '◈',
    title: 'Strategy First',
    desc: 'Every piece of content is engineered to convert, not just impress.',
  },
  {
    icon: '◉',
    title: 'AI-Powered',
    desc: 'Leveraging cutting-edge automation to 10x output without sacrificing quality.',
  },
  {
    icon: '◐',
    title: 'Measurable ROI',
    desc: 'I track what matters. Every campaign has a clear north star metric.',
  },
];

export default function About() {
  const sectionRef = useReveal() as React.RefObject<HTMLElement>;

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 lg:py-40 bg-obsidian overflow-hidden"
    >
      {/* Subtle side accent */}
      <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="reveal flex items-center gap-4 mb-16">
          <span className="gold-line animate-line-grow" />
          <span className="section-label">About</span>
          <span className="gold-line animate-line-grow" style={{ transitionDelay: '0.1s' }} />
        </div>

        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-start">
          {/* Left — bio */}
          <div>
            <h2
              className="reveal section-title text-[clamp(2.5rem,5vw,4.5rem)] text-ivory mb-8 leading-none"
              style={{ transitionDelay: '0.1s' }}
            >
              Turning ideas
              <br />
              into{' '}
              <span className="italic text-gold">revenue</span>
            </h2>

            <p
              className="reveal font-body text-[1.05rem] text-ivory-dim leading-[1.85] mb-6"
              style={{ transitionDelay: '0.2s' }}
            >
              I'm a content strategist and AI automation specialist who helps
              businesses cut through the noise. In a world drowning in generic
              content, I build systems that attract, nurture, and convert — on
              autopilot.
            </p>

            <p
              className="reveal font-body text-[1.05rem] text-ivory-dim leading-[1.85] mb-10"
              style={{ transitionDelay: '0.3s' }}
            >
              With 5+ years working with brands across tech, e-commerce, and
              professional services, I've helped generate millions in pipeline
              through strategic content that actually drives results.
            </p>

            {/* Skills tags */}
            <div
              className="reveal flex flex-wrap gap-2"
              style={{ transitionDelay: '0.4s' }}
            >
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="font-mono text-[0.65rem] tracking-widest uppercase px-4 py-2 border border-gold/20 text-gold hover:bg-gold/10 transition-colors duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Right — value cards */}
          <div className="flex flex-col gap-6">
            {values.map((item, i) => (
              <div
                key={item.title}
                className="reveal glass-card p-8 group"
                style={{ transitionDelay: `${0.2 + i * 0.15}s` }}
              >
                <div className="flex items-start gap-5">
                  <span className="text-gold text-2xl mt-0.5 group-hover:scale-110 transition-transform duration-300 inline-block">
                    {item.icon}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-light text-ivory mb-2">
                      {item.title}
                    </h3>
                    <p className="font-body text-sm text-ivory-dim leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Quote callout */}
            <div
              className="reveal mt-2 border-l-2 border-gold pl-6 py-2"
              style={{ transitionDelay: '0.65s' }}
            >
              <p className="font-display text-xl italic text-ivory-dim leading-relaxed">
                "The best marketing doesn't feel like marketing."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
