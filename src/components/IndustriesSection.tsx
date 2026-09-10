const industries = [
  { label: 'Universities & Polytechnics', icon: '🏛', note: 'Campus networks · LMS · broadcast studios' },
  { label: 'Government Institutions', icon: '⬡', note: 'Secure infrastructure · digital services · ERP' },
  { label: 'SMEs & Startups', icon: '◈', note: 'Web platforms · automation · brand identity' },
  { label: 'Corporate Organisations', icon: '▣', note: 'Enterprise software · AV · digital transformation' },
  { label: 'Churches & Faith Bodies', icon: '◇', note: 'Live streaming · sound systems · media production' },
  { label: 'NGOs & Development Orgs', icon: '▦', note: 'Programme platforms · reporting tools · training' },
  { label: 'Educational Institutions', icon: '⬢', note: 'E-learning · network infra · laboratory systems' },
  { label: 'Media Organisations', icon: '◉', note: 'Broadcast engineering · studios · playout systems' },
  { label: 'Event Centres & Hospitality', icon: '◊', note: 'Hotspot gateways · AV rigs · event production' },
]

export default function IndustriesSection() {
  return (
    <div className="px-4 sm:px-6 md:px-8 pb-24" style={{ maxWidth: 1280, margin: '0 auto' }}>
      <hr className="razor-line" style={{ marginBottom: 64 }} />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-14" style={{ alignItems: 'start' }}>

        <div className="lg:col-span-1">
          <div className="section-label" style={{ marginBottom: 14 }}>◆ &nbsp; Industries Served</div>
          <h2 style={{ fontSize: 'clamp(1.4rem, 2vw, 1.9rem)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text-primary)', margin: '0 0 16px', lineHeight: 1.2 }}>
            Sector-Agnostic.<br />
            <span style={{ color: 'var(--gold)' }}>Enterprise-Grade.</span>
          </h2>
          <p style={{ fontSize: '0.83rem', lineHeight: 1.75, color: 'var(--text-muted)', margin: 0 }}>
            Any institution or organisation that operates digital infrastructure, communicates at scale, or requires applied technology expertise.
          </p>
        </div>

        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
          {industries.map((ind, i) => (
            <div
              key={i}
              style={{
                padding: '18px 20px', borderRadius: 10,
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                transition: 'all 0.3s ease', cursor: 'default',
                display: 'flex', alignItems: 'flex-start', gap: 14,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'var(--gold-glow)'
                el.style.borderColor = 'var(--border-gold)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'var(--bg-surface)'
                el.style.borderColor = 'var(--border-subtle)'
              }}
            >
              <div style={{ fontSize: '1rem', color: 'var(--gold)', flexShrink: 0, marginTop: 1, opacity: 0.7 }}>{ind.icon}</div>
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 4, lineHeight: 1.3 }}>{ind.label}</div>
                <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{ind.note}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
