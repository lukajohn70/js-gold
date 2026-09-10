import { useState } from 'react'

const topics = ['All', 'Networking', 'Software', 'Broadcasting', 'Creative Media', 'Strategy']

const articles = [
  {
    topic: 'Networking',
    readTime: '6 min read',
    title: 'Optimizing MikroTik Bandwidth & QoS for High-Density Environments',
    excerpt: 'How proper queue tree hierarchies and dynamic hotspot captive portals prevent bandwidth starvation across busy networks.',
    date: 'Aug 2025',
    accent: '#50C8FF',
  },
  {
    topic: 'Software',
    readTime: '8 min read',
    title: 'Architecture Patterns for Resilient Laravel & Flutter Ecosystems',
    excerpt: 'Bridging backend business logic with offline-first mobile apps: state synchronization, secure tokens, and payload optimization.',
    date: 'Jul 2025',
    accent: '#D4AF37',
  },
  {
    topic: 'Broadcasting',
    readTime: '7 min read',
    title: 'Zero-Dropout Live Streaming: Redundancy, SRT, and Hardware Encoding',
    excerpt: 'A technical deep-dive into multi-WAN internet bonding and low-latency distribution for critical live events.',
    date: 'Jun 2025',
    accent: '#A78BFA',
  },
  {
    topic: 'Creative Media',
    readTime: '5 min read',
    title: 'The Power of Acoustic Branding: Jingles and Sound Design in Digital Media',
    excerpt: 'Why audio signatures and polished sound engineering are the most underutilized levers in modern digital marketing.',
    date: 'May 2025',
    accent: '#34D399',
  },
  {
    topic: 'Strategy',
    readTime: '6 min read',
    title: 'Why One Multidisciplinary Agency Beats Three Disconnected Contractors',
    excerpt: 'Eliminating the friction between your software developers, IT infrastructure technicians, and media content creators.',
    date: 'Apr 2025',
    accent: '#F59E0B',
  },
  {
    topic: 'Software',
    readTime: '9 min read',
    title: 'Conducting an IT Infrastructure Audit: A Practical Checklist',
    excerpt: 'Key indicators that your network architecture, software stack, and security protocols are overdue for an engineering overhaul.',
    date: 'Mar 2025',
    accent: '#D4AF37',
  },
]

export default function InsightsSection() {
  const [activeTopic, setActiveTopic] = useState('All')

  const filtered = activeTopic === 'All' ? articles : articles.filter((a) => a.topic === activeTopic)

  return (
    <div id="insights" className="section-fade" style={{ borderTop: '1px solid var(--border-subtle)', background: 'var(--section-alt)' }}>
      <div className="px-4 sm:px-6 md:px-8 py-16 md:py-24" style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 36, flexWrap: 'wrap', gap: 20 }}>
          <div>
            <div className="section-label" style={{ marginBottom: 14 }}>◆ &nbsp; Insights &amp; Perspectives</div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.4vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text-primary)', margin: 0 }}>
              Knowledge From The Field
            </h2>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginTop: 6, margin: '6px 0 0' }}>
              Practical perspectives on software architecture, network engineering, broadcast technology, and creative production.
            </p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
            {topics.map((t) => (
              <button
                key={t}
                onClick={() => setActiveTopic(t)}
                style={{
                  padding: '7px 16px', borderRadius: 6, fontSize: '0.74rem', fontWeight: 600,
                  letterSpacing: '0.03em', border: '1px solid', fontFamily: 'inherit', cursor: 'pointer',
                  background: activeTopic === t ? 'var(--gold-glow)' : 'transparent',
                  borderColor: activeTopic === t ? 'var(--border-gold)' : 'var(--border-subtle)',
                  color: activeTopic === t ? 'var(--gold)' : 'var(--text-muted)',
                  transition: 'all 0.2s ease',
                }}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((art, i) => (
            <div
              key={i}
              className="glass-card animated-border"
              style={{ padding: '26px', cursor: 'pointer', display: 'flex', flexDirection: 'column', borderRadius: 12 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
                <span style={{
                  fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.1em',
                  color: art.accent, background: `${art.accent}14`, border: `1px solid ${art.accent}28`,
                  borderRadius: 4, padding: '3px 9px',
                }}>
                  {art.topic.toUpperCase()}
                </span>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)' }}>{art.readTime}</span>
              </div>

              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', margin: '0 0 12px', lineHeight: 1.4, letterSpacing: '-0.01em', flexGrow: 1 }}>
                {art.title}
              </h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: '0 0 20px', lineHeight: 1.65 }}>
                {art.excerpt}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', paddingTop: 14, borderTop: '1px solid var(--border-subtle)' }}>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)', letterSpacing: '0.04em' }}>{art.date}</span>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: art.accent, letterSpacing: '0.04em' }}>READ ARTICLE →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
