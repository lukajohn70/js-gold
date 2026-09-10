import { useState } from 'react'

const filters = [
  'All',
  'Web Applications',
  'Mobile Applications',
  'Network Infrastructure',
  'Broadcasting',
  'Motion Graphics',
  'Branding',
  'Media Production',
  'Training & Capacity Development',
]

const cases = [
  {
    title: 'Enterprise Campus Network — Federal Polytechnic',
    category: 'Network Infrastructure',
    challenge: 'Fragmented legacy cabling, no centralised access control, and persistent bandwidth abuse across a 14-building campus serving 6,000+ users.',
    solution: 'Designed and deployed a full MikroTik CHR-based core with VLAN segmentation, BGP peering, User-Manager hotspot billing, and QoS policy enforcement.',
    technologies: ['MikroTik', 'CHR', 'BGP', 'User-Manager', 'Structured Cabling'],
    impact: '99.7% uptime over 18 months · 60% reduction in bandwidth waste · full campus covered',
    accent: '#50C8FF',
  },
  {
    title: 'Annual Convocation Live Stream — Anchor University',
    category: 'Broadcasting',
    challenge: 'First-ever hybrid convocation requiring simultaneous broadcast to a 2,000-seat auditorium and a global online audience of 12,000+.',
    solution: 'Deployed a 6-camera vMix production setup with hardware encoding, NDI signal routing, and RTMP multi-platform streaming with redundant internet failover.',
    technologies: ['vMix', 'NDI', 'Blackmagic ATEM', 'Dante Audio', 'RTMP'],
    impact: '12,400 live viewers · zero stream dropout · 4-hour broadcast with ISO recordings',
    accent: '#A78BFA',
  },
  {
    title: 'Institutional ERP & Student Portal — Private University',
    category: 'Web Applications',
    challenge: 'Disconnected administrative workflows: admissions, fee collection, course registration, and result publication each ran on separate, unintegrated systems.',
    solution: 'Built a unified Laravel ERP with modules for admissions, finance, academic records, and a student-facing Next.js portal with real-time grade publication.',
    technologies: ['Laravel', 'Next.js', 'MySQL', 'REST API', 'Docker'],
    impact: '4,200 active users · 70% reduction in administrative processing time · paperless admissions',
    accent: '#D4AF37',
  },
  {
    title: 'Corporate Brand Film — Transcorp Energy',
    category: 'Media Production',
    challenge: 'Launch of a new energy product line required a cinematic corporate film for OOH, broadcast, and digital distribution within a 3-week production window.',
    solution: 'Produced a 4-minute cinematic film with drone aerials, colour-graded in DaVinci Resolve, accompanied by a full suite of social assets and a motion graphics package.',
    technologies: ['RED Camera', 'DJI Ronin', 'DaVinci Resolve', 'After Effects', 'Premiere Pro'],
    impact: '2.1M impressions in first week · aired on 3 national TV networks',
    accent: '#D4AF37',
  },
  {
    title: 'Digital Transformation Roadmap — Government Agency',
    category: 'Training & Capacity Development',
    challenge: 'Agency operating entirely on paper-based workflows with no internal IT capacity and a mandate to digitise within 12 months.',
    solution: 'Conducted a full technology audit, designed a phased digitisation roadmap, delivered 6-week training programme for 40 staff, and deployed a document management platform.',
    technologies: ['Laravel', 'Linux', 'Docker', 'Custom LMS', 'Process Mapping'],
    impact: '40 staff trained · 3 departments fully digitised · 12-month roadmap on schedule',
    accent: '#34D399',
  },
  {
    title: 'Cross-Platform Mobile App — SME Retail Chain',
    category: 'Mobile Applications',
    challenge: 'Retail chain with 8 outlets needed inventory management, staff timekeeping, and customer loyalty features accessible on iOS and Android.',
    solution: 'Designed and built a Flutter app with offline-first architecture, syncing to a Laravel backend via REST API, with a Figma-designed UI system.',
    technologies: ['Flutter', 'Laravel', 'REST API', 'Figma', 'SQLite'],
    impact: '8 outlets live · 92% staff adoption · inventory accuracy improved by 38%',
    accent: '#50C8FF',
  },
]

export default function CaseStudiesSection() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All' ? cases : cases.filter((c) => c.category === activeFilter)

  return (
    <div id="case-studies" className="px-4 sm:px-6 md:px-8 pb-24" style={{ maxWidth: 1280, margin: '0 auto' }}>
      <hr className="razor-line" style={{ marginBottom: 64 }} />

      <div style={{ marginBottom: 36 }}>
        <div className="section-label" style={{ marginBottom: 14 }}>◆ &nbsp; Applied Deployments</div>
        <h2 style={{ fontSize: 'clamp(1.5rem, 2.2vw, 2rem)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text-primary)', margin: '0 0 12px' }}>
          Case Studies
        </h2>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
          Measurable outcomes across enterprise software, infrastructure, broadcast, and media engagements.
        </p>
      </div>

      {/* Portfolio filter bar */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 36 }}>
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            style={{
              padding: '6px 14px', borderRadius: 6, fontSize: '0.72rem', fontWeight: 600,
              letterSpacing: '0.04em', border: '1px solid', fontFamily: 'inherit', cursor: 'pointer',
              background: activeFilter === f ? 'rgba(212,175,55,0.12)' : 'transparent',
              borderColor: activeFilter === f ? 'rgba(212,175,55,0.5)' : 'var(--border-subtle)',
              color: activeFilter === f ? 'var(--gold)' : 'var(--text-muted)',
              transition: 'all 0.2s ease',
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Cases grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {filtered.map((c, i) => (
          <div
            key={i}
            className="glass-card"
            style={{ padding: '26px', position: 'relative', overflow: 'hidden' }}
          >
            {/* Category chip */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
              <span style={{
                fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.12em',
                color: c.accent, background: `${c.accent}12`, border: `1px solid ${c.accent}28`,
                borderRadius: 4, padding: '3px 9px',
              }}>
                {c.category.toUpperCase()}
              </span>
              <span style={{ fontSize: '0.65rem', color: 'var(--text-dim)', letterSpacing: '0.06em' }}>CASE STUDY</span>
            </div>

            <h3 style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-primary)', margin: '0 0 20px', lineHeight: 1.35, letterSpacing: '-0.01em' }}>
              {c.title}
            </h3>

            {[
              { field: 'CHALLENGE', content: c.challenge },
              { field: 'SOLUTION', content: c.solution },
            ].map((row) => (
              <div key={row.field} style={{ marginBottom: 16 }}>
                <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.14em', color: 'var(--text-dim)', marginBottom: 5 }}>{row.field}</div>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.65 }}>{row.content}</p>
              </div>
            ))}

            {/* Tech pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 18 }}>
              {c.technologies.map((t) => (
                <span key={t} style={{
                  padding: '2px 8px', borderRadius: 3, fontSize: '0.62rem', fontWeight: 600,
                  color: c.accent, background: `${c.accent}10`, border: `1px solid ${c.accent}22`,
                }}>
                  {t}
                </span>
              ))}
            </div>

            <hr className="razor-line" style={{ marginBottom: 16 }} />

            {/* Impact */}
            <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
              <span style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.14em', color: c.accent, flexShrink: 0, marginTop: 2 }}>IMPACT</span>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-primary)', lineHeight: 1.55 }}>{c.impact}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
