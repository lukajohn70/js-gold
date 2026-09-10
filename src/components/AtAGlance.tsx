type SubPage = 'services' | 'approach' | 'case-studies' | 'capacity'

interface Props {
  onOpenSubPage: (page: SubPage) => void
}

const divisions = [
  {
    num: '01',
    name: 'Software Engineering',
    tagline: 'Enterprise apps, ERPs, mobile & APIs',
    color: '#D4AF37',
  },
  {
    num: '02',
    name: 'Network Infrastructure',
    tagline: 'Campus networks, fibre & MikroTik',
    color: '#50C8FF',
  },
  {
    num: '03',
    name: 'Broadcast Engineering',
    tagline: 'Live production, AV systems & streaming',
    color: '#A78BFA',
  },
  {
    num: '04',
    name: 'Creative Media',
    tagline: 'Video, photography, motion & branding',
    color: '#34D399',
  },
  {
    num: '05',
    name: 'Consultancy & Capacity',
    tagline: 'Digital strategy & training programmes',
    color: '#F59E0B',
  },
]

export default function AtAGlance({ onOpenSubPage }: Props) {
  return (
    <div className="section-fade px-4 sm:px-6 md:px-8 pb-20" style={{ maxWidth: 1280, margin: '0 auto' }}>
      <hr className="razor-line" style={{ marginBottom: 64 }} />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
        <div>
          <div className="section-label" style={{ marginBottom: 12 }}>◆ &nbsp; Five Interconnected Divisions</div>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 2.2vw, 2rem)',
            fontWeight: 800, letterSpacing: '-0.02em',
            color: 'var(--text-primary)', margin: 0,
          }}>
            A Complete Digital Ecosystem
          </h2>
        </div>
        <button
          onClick={() => onOpenSubPage('services')}
          style={{
            background: 'none', border: '1px solid var(--border-gold)',
            color: 'var(--gold)', borderRadius: 8,
            padding: '9px 20px', fontSize: '0.78rem', fontWeight: 700,
            letterSpacing: '0.06em', cursor: 'pointer', fontFamily: 'inherit',
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
          Full Capabilities →
        </button>
      </div>

      {/* Division cards — animated-border on hover */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-12">
        {divisions.map((div) => (
          <div
            key={div.num}
            className="animated-border"
            onClick={() => onOpenSubPage('services')}
            style={{
              padding: '20px 18px', borderRadius: 12, cursor: 'pointer',
              background: `${div.color}07`,
              border: `1px solid ${div.color}28`,
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.background = `${div.color}14`
              el.style.borderColor = `${div.color}55`
              el.style.transform = 'translateY(-2px)'
              el.style.boxShadow = `0 8px 24px ${div.color}18`
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.background = `${div.color}07`
              el.style.borderColor = `${div.color}28`
              el.style.transform = 'translateY(0)'
              el.style.boxShadow = 'none'
            }}
          >
            <div style={{ fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.14em', color: div.color, marginBottom: 10 }}>
              DIV-{div.num}
            </div>
            <div style={{ fontSize: '0.88rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: 8, lineHeight: 1.3, letterSpacing: '-0.01em' }}>
              {div.name}
            </div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              {div.tagline}
            </div>
            <div style={{ marginTop: 14, display: 'flex', alignItems: 'center', gap: 5 }}>
              <div style={{ width: 18, height: 2, background: div.color, borderRadius: 1, opacity: 0.6 }} />
              <span style={{ fontSize: '0.6rem', fontWeight: 700, color: div.color, letterSpacing: '0.08em' }}>DETAILS →</span>
            </div>
          </div>
        ))}
      </div>

      {/* Secondary CTAs */}
      <div className="flex flex-wrap gap-3">
        {[
          { label: 'Case Studies', page: 'case-studies' as SubPage, desc: 'Real-world outcomes' },
          { label: 'Our Methodology', page: 'approach' as SubPage, desc: 'How we deliver' },
          { label: 'Training & Capacity', page: 'capacity' as SubPage, desc: 'Programmes & courses' },
        ].map((cta) => (
          <button
            key={cta.label}
            onClick={() => onOpenSubPage(cta.page)}
            style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '10px 18px', borderRadius: 8, cursor: 'pointer',
              background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)',
              fontFamily: 'inherit', transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLButtonElement
              el.style.borderColor = 'var(--border-gold)'
              el.style.background = 'var(--gold-glow)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLButtonElement
              el.style.borderColor = 'var(--border-subtle)'
              el.style.background = 'var(--bg-surface)'
            }}
          >
            <div>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)', textAlign: 'left' }}>{cta.label}</div>
              <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textAlign: 'left' }}>{cta.desc}</div>
            </div>
            <span style={{ color: 'var(--gold)', fontSize: '0.75rem' }}>›</span>
          </button>
        ))}
      </div>
    </div>
  )
}
