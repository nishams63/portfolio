'use client';

import { useReveal } from './useReveal';

const projects = [
  {
    index: '01',
    title: 'SaaS Brand Relaunch',
    category: 'Brand Strategy · Content',
    description:
      'Complete brand voice overhaul and content system for a B2B SaaS company. Built an AI-powered content pipeline delivering 30 assets per month at 1/3 the previous cost.',
    results: [
      { metric: '312%', label: 'organic traffic growth' },
      { metric: '4.2x', label: 'lead conversion rate' },
      { metric: '60%', label: 'cost reduction' },
    ],
    tags: ['AI Automation', 'Content System', 'SEO'],
    accentColor: 'rgba(201, 168, 76, 0.06)',
  },
  {
    index: '02',
    title: 'E-commerce Video Strategy',
    category: 'Video Production · Growth',
    description:
      'Developed a short-form video strategy for a DTC e-commerce brand. Produced 60 videos over 90 days, turning dormant social accounts into their primary acquisition channel.',
    results: [
      { metric: '2.8M', label: 'organic views' },
      { metric: '$380K', label: 'attributed revenue' },
      { metric: '18%', label: 'purchase intent lift' },
    ],
    tags: ['Short-form Video', 'DTC', 'Social Growth'],
    accentColor: 'rgba(201, 168, 76, 0.04)',
  },
  {
    index: '03',
    title: 'Personal Brand Launch',
    category: 'Personal Branding · Consulting',
    description:
      'Took a founder from zero online presence to thought leader in 6 months. Built their content strategy, LinkedIn presence, and newsletter that now generates inbound consulting leads.',
    results: [
      { metric: '0→22K', label: 'LinkedIn followers' },
      { metric: '5K+', label: 'newsletter subscribers' },
      { metric: '8 deals', label: 'directly attributed' },
    ],
    tags: ['LinkedIn', 'Newsletter', 'Thought Leadership'],
    accentColor: 'rgba(201, 168, 76, 0.06)',
  },
  {
    index: '04',
    title: 'AI Content Automation System',
    category: 'AI · Workflow Design',
    description:
      'Designed and deployed a full AI automation stack for a media company — from research to publishing. Reduced content production time from 8 hours to 45 minutes per piece.',
    results: [
      { metric: '91%', label: 'time saved per article' },
      { metric: '10x', label: 'content output' },
      { metric: '3x', label: 'team productivity' },
    ],
    tags: ['AI', 'Automation', 'Workflow'],
    accentColor: 'rgba(201, 168, 76, 0.04)',
  },
];

function ProjectCard({
  project,
  delay,
}: {
  project: (typeof projects)[0];
  delay: string;
}) {
  return (
    <div
      className="reveal group relative overflow-hidden border border-white/6 hover:border-gold/25 transition-all duration-500"
      style={{
        transitionDelay: delay,
        background: project.accentColor,
      }}
    >
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold/0 via-gold/40 to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="p-8 lg:p-10">
        {/* Header row */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <span className="font-mono text-[0.65rem] text-gold tracking-widest uppercase">
              {project.index}
            </span>
            <div className="mt-1">
              <span className="font-mono text-[0.65rem] tracking-wider text-ivory-dim uppercase">
                {project.category}
              </span>
            </div>
          </div>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="text-ivory-dim opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 mt-1"
          >
            <path
              d="M3 17L17 3M17 3H8M17 3v9"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Title */}
        <h3 className="font-display text-2xl font-light text-ivory mb-4 group-hover:text-gold transition-colors duration-300 leading-snug">
          {project.title}
        </h3>

        {/* Description */}
        <p className="font-body text-sm text-ivory-dim leading-relaxed mb-8">
          {project.description}
        </p>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-4 mb-8 pt-6 border-t border-white/5">
          {project.results.map((result) => (
            <div key={result.label} className="flex flex-col">
              <span className="font-display text-2xl font-light text-gold leading-none mb-1">
                {result.metric}
              </span>
              <span className="font-mono text-[0.58rem] tracking-wider text-ivory-dim uppercase leading-tight">
                {result.label}
              </span>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[0.58rem] tracking-widest uppercase px-3 py-1 border border-white/8 text-ivory-dim"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const sectionRef = useReveal() as React.RefObject<HTMLElement>;

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-32 lg:py-40 bg-obsidian"
    >
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="reveal flex items-center gap-4 mb-6">
          <span className="gold-line" />
          <span className="section-label">Work</span>
        </div>

        <div
          className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
          style={{ transitionDelay: '0.1s' }}
        >
          <h2 className="section-title text-[clamp(2.5rem,5vw,4rem)] text-ivory leading-none">
            Selected
            <br />
            <span className="italic text-gold">projects</span>
          </h2>
          <p className="font-body text-sm text-ivory-dim max-w-sm leading-relaxed">
            Real results for real brands. Every number is verified and
            client-approved.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.index}
              project={project}
              delay={`${0.1 + i * 0.1}s`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
