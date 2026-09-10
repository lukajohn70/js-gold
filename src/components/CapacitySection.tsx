const capacityPillars = [
  {
    icon: '◉',
    title: 'Industrial Mentorship',
    desc: 'Emerging technologists paired with senior JS-GOLD engineers — pathway-mapped, outcome-tracked.',
    color: '#D4AF37',
  },
  {
    icon: '◈',
    title: 'Practical Workshops',
    desc: 'Hands-on labs in MikroTik, broadcast production, software dev, and digital media.',
    color: '#50C8FF',
  },
  {
    icon: '▣',
    title: 'Technology Exposure',
    desc: 'Immersive sessions with enterprise-grade tools — live switching consoles, CHR environments, Figma, API sandboxes.',
    color: '#A78BFA',
  },
  {
    icon: '◇',
    title: 'Institutional Collaborations',
    desc: 'Formal MoUs with universities and polytechnics integrating JS-GOLD curricula into academic programmes.',
    color: '#34D399',
  },
  {
    icon: '▦',
    title: 'Entrepreneurship Support',
    desc: 'Product ideation, technical validation, and go-to-market guidance for technology entrepreneurs.',
    color: '#F59E0B',
  },
]

const programmes = [
  { label: 'MikroTik Network Engineering', duration: '4 Weeks', level: 'Intermediate · Advanced', cert: 'MTCNA-Aligned' },
  { label: 'Live Broadcast Production', duration: '3 Weeks', level: 'Beginner · Intermediate', cert: 'JS-GOLD Certified' },
  { label: 'Laravel & REST API Development', duration: '6 Weeks', level: 'Intermediate', cert: 'JS-GOLD Certified' },
  { label: 'Digital Media Production Suite', duration: '5 Weeks', level: 'All Levels', cert: 'JS-GOLD Certified' },
  { label: 'Institutional Digital Transformation', duration: 'Custom', level: 'Executive · Management', cert: 'Bespoke Programme' },
  { label: 'UI/UX Design & Figma Mastery', duration: '4 Weeks', level: 'Beginner · Intermediate', cert: 'JS-GOLD Certified' },
]

export default function CapacitySection() {
  return (
    <div id="capacity" className="px-4 sm:px-6 md:px-8 pb-24" style={{ maxWidth: 1280, margin: '0 auto' }}>
      <hr className="razor-line" style={{ marginBottom: 64 }} />

      <div style={{ marginBottom: 52 }}>
        <div className="section-label" style={{ marginBottom: 14 }}>◆ &nbsp; Training & Capacity Development</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12" style={{ alignItems: 'end' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 2.2vw, 2rem)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text-primary)', margin: 0 }}>
            Building the Next Generation of<br />
            <span style={{ color: 'var(--gold)' }}>African Digital Engineers</span>
          </h2>
          <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.75, margin: 0 }}>
            Structured training programmes, institutional partnerships, and mentorship tracks that build lasting technical depth.
          </p>
        </div>
      </div>

      {/* Five pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
        {capacityPillars.map((p, i) => (
          <div key={i} className="glass-card animated-border" style={{ padding: '22px 18px', cursor: 'default' }}>
            <div style={{ fontSize: '1.2rem', color: p.color, marginBottom: 12, opacity: 0.75 }}>{p.icon}</div>
            <h4 style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)', margin: '0 0 10px', lineHeight: 1.3 }}>{p.title}</h4>
            <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.65 }}>{p.desc}</p>
          </div>
        ))}
      </div>

      {/* Training programmes table */}
      <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid var(--border-subtle)' }}>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 items-center" style={{ padding: '16px 24px', background: 'var(--gold-glow)', borderBottom: '1px solid var(--border-subtle)' }}>
          <span style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.14em', color: 'var(--gold)' }}>PROGRAMME</span>
          <span className="hidden sm:inline" style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.14em', color: 'var(--gold)' }}>DURATION</span>
          <span className="hidden sm:inline" style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.14em', color: 'var(--gold)' }}>LEVEL</span>
          <span style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.14em', color: 'var(--gold)', textAlign: 'right' }}>CERTIFICATION</span>
        </div>
        {programmes.map((prog, i) => (
          <div
            key={i}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 items-center"
            style={{
              padding: '16px 24px',
              borderBottom: i < programmes.length - 1 ? '1px solid var(--border-subtle)' : 'none',
              background: 'var(--bg-surface)',
              transition: 'background 0.2s ease', cursor: 'default',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'var(--gold-glow)' }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'var(--bg-surface)' }}
          >
            <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-primary)' }}>{prog.label}</span>
            <span className="hidden sm:inline" style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{prog.duration}</span>
            <span className="hidden sm:inline" style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>{prog.level}</span>
            <div style={{ textAlign: 'right' }}>
              <span style={{
                fontSize: '0.65rem', fontWeight: 700, color: 'var(--gold)',
                background: 'var(--gold-glow)', border: '1px solid var(--border-gold)',
                borderRadius: 4, padding: '3px 8px', display: 'inline-block',
              }}>
                {prog.cert}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
