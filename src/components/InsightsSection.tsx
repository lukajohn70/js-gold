import { useState } from 'react'

const topics = ['All', 'Cybersecurity', 'Networking', 'AI', 'Software Engineering', 'Broadcasting', 'Digital Transformation']

const articles = [
  {
    topic: 'Networking',
    readTime: '7 min',
    title: 'Why MikroTik CHR Is the Right Choice for Nigerian Campus Networks in 2025',
    excerpt: 'The economics of campus network management in West Africa demand a routing platform that is powerful, cost-effective, and locally supportable.',
    date: 'Jun 2025',
    accent: '#50C8FF',
  },
  {
    topic: 'Digital Transformation',
    readTime: '9 min',
    title: 'The Institutional Digitisation Trap: Why Most Government IT Projects Fail at Year Two',
    excerpt: 'Most institutional digitisation projects successfully deploy in Year One and collapse by Year Two — and the failure is structural, not technical.',
    date: 'May 2025',
    accent: '#D4AF37',
  },
  {
    topic: 'Broadcasting',
    readTime: '6 min',
    title: 'Hybrid Event Architecture: Engineering a Zero-Dropout Live Stream for 10,000+ Viewers',
    excerpt: 'A technical breakdown of the signal chain, redundancy strategy, and failover architecture behind our largest hybrid broadcast deployment.',
    date: 'Apr 2025',
    accent: '#A78BFA',
  },
  {
    topic: 'Cybersecurity',
    readTime: '8 min',
    title: 'Zero-Trust Segmentation on MikroTik: Practical Implementation for African Enterprises',
    excerpt: 'Zero-trust is an architecture you implement — this article details a practical, MikroTik-native approach without expensive third-party overlay tools.',
    date: 'Mar 2025',
    accent: '#34D399',
  },
  {
    topic: 'Software Engineering',
    readTime: '11 min',
    title: 'Building Multi-Tenant Laravel Applications at Institutional Scale: Lessons from the Field',
    excerpt: 'After deploying multi-tenant Laravel systems across three universities and two government agencies, here are the patterns and pitfalls that actually matter.',
    date: 'Feb 2025',
    accent: '#D4AF37',
  },
  {
    topic: 'AI',
    readTime: '5 min',
    title: 'Applied AI in African Enterprise: Where the Real Opportunities Are (and Where They Are Not)',
    excerpt: "The AI discourse is dominated by use cases that don't map to African institutional reality — a practitioner's view of the genuinely high-leverage applications.",
    date: 'Jan 2025',
    accent: '#F59E0B',
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
            <div className="section-label" style={{ marginBottom: 14 }}>◆ &nbsp; Thought Leadership</div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.2vw, 2rem)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text-primary)', margin: 0 }}>
              Insights Hub
            </h2>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
            {topics.map((t) => (
              <button
                key={t}
                onClick={() => setActiveTopic(t)}
                style={{
                  padding: '6px 14px', borderRadius: 6, fontSize: '0.72rem', fontWeight: 600,
                  letterSpacing: '0.04em', border: '1px solid', fontFamily: 'inherit', cursor: 'pointer',
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

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {filtered.map((art, i) => (
            <div
              key={i}
              className="glass-card animated-border"
              style={{ padding: '26px', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 0 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
                <span style={{
                  fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.12em',
                  color: art.accent, background: `${art.accent}12`, border: `1px solid ${art.accent}28`,
                  borderRadius: 4, padding: '3px 9px',
                }}>
                  {art.topic.toUpperCase()}
                </span>
                <span style={{ fontSize: '0.68rem', color: 'var(--text-dim)' }}>{art.readTime}</span>
              </div>

              <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)', margin: '0 0 14px', lineHeight: 1.4, letterSpacing: '-0.01em', flexGrow: 1 }}>
                {art.title}
              </h3>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: '0 0 20px', lineHeight: 1.7 }}>
                {art.excerpt}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
                <span style={{ fontSize: '0.68rem', color: 'var(--text-dim)', letterSpacing: '0.06em' }}>{art.date}</span>
                <span style={{ fontSize: '0.72rem', fontWeight: 700, color: art.accent, letterSpacing: '0.08em' }}>READ →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
