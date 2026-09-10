import { scrollTo } from '../utils'

const industries = [
  {
    title: 'Institutions & Education',
    badge: 'Campus Scale',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    scope: 'Campus Wi-Fi topologies, MikroTik captive hotspot billing, student administrative portals, and auditorium AV installations.',
    accent: '#E5C07B',
    stats: '6,000+ Concurrent Campus Nodes',
  },
  {
    title: 'Corporate Enterprises & SMEs',
    badge: 'Business Operations',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    scope: 'Bespoke Laravel web dashboards, cross-platform Flutter mobile apps, multi-branch VPN connectivity, and brand identity design.',
    accent: '#50C8FF',
    stats: 'Multi-Branch Secure VPN & Cloud',
  },
  {
    title: 'Events & Broadcast Organizers',
    badge: 'Live Production',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
    scope: 'Zero-dropout multi-camera live streaming, hardware encoding pipelines, low-latency SRT distribution, and stage sound engineering.',
    accent: '#A78BFA',
    stats: '15,000+ Concurrent Live Viewers',
  },
  {
    title: 'Creators, Brands & Media',
    badge: 'Visual Storytelling',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polygon points="10 8 16 12 10 16 10 8" />
      </svg>
    ),
    scope: 'High-end 4K cinematography, DaVinci Resolve color grading, podcast sound mastering, and original commercial musical jingles.',
    accent: '#34D399',
    stats: 'Broadcast Loudness EBU R128',
  },
]

export default function IndustriesSection() {
  return (
    <div className="section-fade px-4 sm:px-6 md:px-8 py-20 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div>
          <div className="section-label mb-3">
            <span>◆</span>
            <span>SECTOR SPECIALIZATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text-primary)]">
            Who We Partner With
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-xl mt-3 leading-relaxed">
            Tailored engineering, broadcast rigs, and visual production mapped directly to your sector requirements.
          </p>
        </div>

        <button
          onClick={() => scrollTo('contact')}
          className="gold-glow-btn px-6 py-3 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 self-start md:self-auto cursor-pointer"
        >
          <span>Request Technical Consultation</span>
          <span>→</span>
        </button>
      </div>

      {/* Grid of 4 Sectors */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {industries.map((ind, i) => (
          <div
            key={i}
            className="glass-card p-6 rounded-2xl flex flex-col justify-between group hover:border-[var(--border-gold)] transition-all"
            style={{
              borderTop: `3px solid ${ind.accent}`,
            }}
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: `${ind.accent}15`,
                    color: ind.accent,
                    border: `1px solid ${ind.accent}30`,
                  }}
                >
                  {ind.icon}
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[var(--text-dim)]">
                  {ind.badge}
                </span>
              </div>

              <h3 className="text-lg font-extrabold text-[var(--text-primary)] mb-3 group-hover:text-[var(--gold)] transition-colors">
                {ind.title}
              </h3>

              <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-6">
                {ind.scope}
              </p>
            </div>

            <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-[11px] font-mono">
              <span className="text-[var(--text-dim)]">Track Record</span>
              <span className="font-bold" style={{ color: ind.accent }}>{ind.stats}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
