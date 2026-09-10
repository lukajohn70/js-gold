import { useState } from 'react'

const topics = ['All', 'Networking', 'Software', 'Broadcasting', 'Creative Media', 'Strategy']

const articles = [
  {
    topic: 'Networking',
    readTime: '6 min read',
    title: 'Optimizing MikroTik Bandwidth & QoS for High-Density Environments',
    excerpt: 'How proper queue tree hierarchies and dynamic hotspot captive portals prevent bandwidth starvation across campus networks.',
    date: 'Aug 2025',
    accent: '#2563EB',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop',
  },
  {
    topic: 'Software',
    readTime: '8 min read',
    title: 'Architecture Patterns for Resilient React, Laravel & Flutter Systems',
    excerpt: 'Bridging high-performance React frontends with Laravel APIs and offline-first mobile apps: tokens, hydration, and state sync.',
    date: 'Jul 2025',
    accent: '#D97706',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
  },
  {
    topic: 'Broadcasting',
    readTime: '7 min read',
    title: 'Zero-Dropout Live Streaming: Redundancy, SRT, and Hardware Encoding',
    excerpt: 'A technical deep-dive into multi-WAN internet bonding and low-latency distribution with vMix for mission-critical broadcasts.',
    date: 'Jun 2025',
    accent: '#7C3AED',
    image: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=800&auto=format&fit=crop',
  },
  {
    topic: 'Creative Media',
    readTime: '5 min read',
    title: 'The Power of Acoustic Branding: Jingles and Sound Design in Digital Media',
    excerpt: 'Why audio signatures and polished studio sound mastering are the most underutilized levers in brand recognition and engagement.',
    date: 'May 2025',
    accent: '#059669',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800&auto=format&fit=crop',
  },
  {
    topic: 'Strategy',
    readTime: '6 min read',
    title: 'Why One Multidisciplinary Agency Beats Three Disconnected Contractors',
    excerpt: 'Eliminating the friction between your software developers, IT infrastructure technicians, and media content creators.',
    date: 'Apr 2025',
    accent: '#EA580C',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
  },
  {
    topic: 'Software',
    readTime: '9 min read',
    title: 'Conducting an IT Infrastructure Audit: A Practical Checklist',
    excerpt: 'Key indicators that your network architecture, software stack, and security protocols are overdue for an engineering overhaul.',
    date: 'Mar 2025',
    accent: '#D97706',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop',
  },
]

export default function InsightsSection() {
  const [activeTopic, setActiveTopic] = useState('All')

  const filtered = activeTopic === 'All' ? articles : articles.filter((a) => a.topic === activeTopic)

  return (
    <section id="insights" className="py-20 bg-[var(--bg-primary)] border-t border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="section-label mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              <span>◆</span>
              <span>INSIGHTS &amp; PERSPECTIVES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text-primary)]">
              Knowledge From The Field
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-2xl mt-3 leading-relaxed">
              Engineering case insights, architectural best practices, and production workflows across our digital divisions.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {topics.map((t) => (
              <button
                key={t}
                onClick={() => setActiveTopic(t)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeTopic === t
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                    : 'bg-[var(--card-bg)] text-[var(--text-muted)] border border-[var(--border-subtle)] hover:text-[var(--text-primary)] hover:border-amber-500/30'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((art, i) => (
            <article
              key={i}
              className="group bg-[var(--card-bg)] rounded-2xl border border-[var(--border-subtle)] shadow-sm hover:shadow-xl hover:border-amber-500/40 transition-all duration-300 flex flex-col overflow-hidden cursor-pointer"
            >
              {/* Photo Thumbnail */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3">
                  <span
                    className="text-[11px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full text-white backdrop-blur-md border border-white/20 shadow-sm"
                    style={{ backgroundColor: `${art.accent}CC` }}
                  >
                    {art.topic}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3">
                  <span className="text-[11px] font-medium text-slate-200 bg-slate-950/70 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/10">
                    {art.readTime}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] mb-2.5 group-hover:text-amber-600 transition-colors line-clamp-2 leading-snug">
                    {art.title}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed line-clamp-3 mb-6">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs">
                  <span className="text-[var(--text-muted)]">{art.date}</span>
                  <span className="font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform" style={{ color: art.accent }}>
                    <span>Read Analysis</span>
                    <span>→</span>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

