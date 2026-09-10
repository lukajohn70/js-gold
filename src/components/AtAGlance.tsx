import { scrollTo } from '../utils'

interface Props {
  onOpenServices?: () => void
}

const divisions = [
  {
    num: '01',
    name: 'Software & Networking',
    category: 'Engineering & Infrastructure',
    tagline: 'Custom web & mobile apps (Laravel, Flutter), enterprise network engineering, MikroTik hotspot routing, and infrastructure audits.',
    highlights: ['Web & Mobile Apps', 'MikroTik Hotspot & Bandwidth', 'Infrastructure Audits'],
    color: '#D4AF37',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
  },
  {
    num: '02',
    name: 'Broadcast & AV Systems',
    category: 'Live Production & Sound',
    tagline: 'Multi-camera live broadcast production, professional hardware encoding, low-latency streaming, and vMix sound engineering.',
    highlights: ['Multicam Live Production', 'Low-Latency Streaming', 'Sound & Audio Engineering'],
    color: '#50C8FF',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 7l-7 5 7 5V7z" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
  },
  {
    num: '03',
    name: 'Creative Media & Design',
    category: 'Visual Storytelling & Brand',
    tagline: 'Cinematic video & photography, high-end post-production editing, brand identity systems, and intuitive UI/UX interface design.',
    highlights: ['Cinematic Video & Photo', 'Post-Production & Motion', 'UI/UX & Brand Design'],
    color: '#A78BFA',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
]

export default function AtAGlance({ onOpenServices }: Props) {
  return (
    <div className="section-fade px-4 sm:px-6 md:px-8 pb-20" style={{ maxWidth: 1280, margin: '0 auto' }}>
      <hr className="razor-line" style={{ marginBottom: 64 }} />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
        <div>
          <div className="section-label" style={{ marginBottom: 12 }}>◆ &nbsp; Three Core Pillars</div>
          <h2 style={{
            fontSize: 'clamp(1.6rem, 2.4vw, 2.2rem)',
            fontWeight: 800, letterSpacing: '-0.02em',
            color: 'var(--text-primary)', margin: 0,
          }}>
            Our Core Divisions
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: 8, maxWidth: 540 }}>
            Unified under one roof. We eliminate the friction of coordinating multiple vendors by offering cross-disciplinary excellence.
          </p>
        </div>
        <button
          onClick={() => onOpenServices?.()}
          style={{
            background: 'none', border: '1px solid var(--border-gold)',
            color: 'var(--gold)', borderRadius: 8,
            padding: '10px 22px', fontSize: '0.8rem', fontWeight: 700,
            letterSpacing: '0.04em', cursor: 'pointer', fontFamily: 'inherit',
            transition: 'all 0.2s ease', whiteSpace: 'nowrap',
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLButtonElement
            el.style.background = 'var(--gold-glow)'
            el.style.boxShadow = '0 0 16px var(--gold-glow)'
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLButtonElement
            el.style.background = 'none'
            el.style.boxShadow = 'none'
          }}
        >
          View Detailed Services →
        </button>
      </div>

      {/* 3 Division cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {divisions.map((div) => (
          <div
            key={div.num}
            className="animated-border flex flex-col justify-between"
            onClick={() => onOpenServices?.()}
            style={{
              padding: '28px 24px', borderRadius: 14, cursor: 'pointer',
              background: 'var(--bg-card)',
              border: `1px solid ${div.color}28`,
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = `${div.color}66`
              el.style.transform = 'translateY(-4px)'
              el.style.boxShadow = `0 12px 32px ${div.color}15`
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = `${div.color}28`
              el.style.transform = 'translateY(0)'
              el.style.boxShadow = 'none'
            }}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div style={{
                  width: 46, height: 46, borderRadius: 10,
                  background: `${div.color}15`, color: div.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {div.icon}
                </div>
                <div style={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.1em', color: div.color }}>
                  DIVISION {div.num}
                </div>
              </div>

              <div style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>
                {div.category}
              </div>

              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: 12, lineHeight: 1.3, letterSpacing: '-0.01em' }}>
                {div.name}
              </h3>

              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: 20 }}>
                {div.tagline}
              </p>

              <div className="space-y-1.5 mb-6">
                {div.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-primary)' }}>
                    <span style={{ width: 4, height: 4, borderRadius: '50%', background: div.color }} />
                    {h}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 6, paddingTop: 16, borderTop: '1px solid var(--border-subtle)' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: div.color, letterSpacing: '0.04em' }}>
                Explore Capabilities
              </span>
              <span style={{ color: div.color, fontSize: '0.85rem' }}>→</span>
            </div>
          </div>
        ))}
      </div>

      {/* Secondary CTAs */}
      <div className="flex flex-wrap gap-3">
        {[
          { label: 'View Portfolio', action: () => scrollTo('portfolio'), desc: 'Our featured work' },
          { label: 'Request Assessment', action: () => scrollTo('contact'), desc: 'Free consultation & scope' },
          { label: 'Why JS-GOLD?', action: () => scrollTo('about'), desc: 'The unified ecosystem advantage' },
        ].map((cta) => (
          <button
            key={cta.label}
            onClick={cta.action}
            style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '12px 20px', borderRadius: 10, cursor: 'pointer',
              background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)',
              fontFamily: 'inherit', transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = 'var(--border-gold)'
              el.style.background = 'var(--bg-card)'
              el.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = 'var(--border-subtle)'
              el.style.background = 'var(--bg-surface)'
              el.style.transform = 'translateY(0)'
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--gold)', flexShrink: 0 }} />
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)' }}>{cta.label}</div>
              <div style={{ fontSize: '0.68rem', color: 'var(--text-dim)' }}>{cta.desc}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
