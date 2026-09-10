import { scrollTo } from '../utils'

const whyPillars = [
  {
    icon: '⬡',
    title: 'Single Integrated Ecosystem Partner',
    body: 'One vendor for software, networks, broadcast, creative, and consultancy — no inter-vendor friction, no accountability gaps.',
  },
  {
    icon: '◈',
    title: 'Applied Engineering Philosophy',
    body: 'We engineer systems grounded in field-validated technical assessment — not sales incentives.',
  },
  {
    icon: '◇',
    title: 'Enterprise-Grade Standards',
    body: 'Every deployment is formally documented, version-controlled, and auditable — built to survive personnel changes.',
  },
  {
    icon: '▦',
    title: 'Long-Term Partnership Approach',
    body: 'SLA contracts, operator training, and quarterly reviews are standard in every engagement — not extras.',
  },
]

export default function ValuePropSection() {
  return (
    <div className="px-4 sm:px-6 md:px-8 pb-24" style={{ maxWidth: 1280, margin: '0 auto' }}>
      <hr className="razor-line" style={{ marginBottom: 64 }} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16" style={{ alignItems: 'start' }}>

        {/* Left */}
        <div className="lg:col-span-1">
          <div className="section-label" style={{ marginBottom: 14 }}>◆ &nbsp; Why JS-GOLD</div>
          <h2 style={{ fontSize: 'clamp(1.4rem, 2vw, 1.9rem)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text-primary)', margin: '0 0 18px', lineHeight: 1.2 }}>
            The Integrated Ecosystem Advantage
          </h2>
          <p style={{ fontSize: '0.84rem', lineHeight: 1.75, color: 'var(--text-muted)', margin: '0 0 32px' }}>
            Multiple specialist agencies create coordination overhead, misaligned accountability, and bloated costs. JS-GOLD eliminates all of that — one deeply integrated technical and media partner across every digital domain.
          </p>

          <button
            onClick={() => scrollTo('contact')}
            className="gold-glow-btn"
            style={{ padding: '13px 28px', borderRadius: 9, fontSize: '0.85rem', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
          >
            Initiate Consultation
          </button>
        </div>

        {/* Right: pillars */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {whyPillars.map((p, i) => (
            <div
              key={i}
              style={{
                padding: '22px 20px',
                borderRadius: 10,
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                transition: 'all 0.3s ease',
                cursor: 'default'
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
              <div style={{ fontSize: '1.3rem', color: 'var(--gold)', marginBottom: 12, opacity: 0.75 }}>{p.icon}</div>
              <h4 style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--text-primary)', margin: '0 0 8px', letterSpacing: '-0.01em' }}>{p.title}</h4>
              <p style={{ fontSize: '0.77rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.7 }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
