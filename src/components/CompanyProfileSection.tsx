import OrgChart from './OrgChart'
import Timeline from './Timeline'

const coreValues = [
  { label: 'Excellence', icon: '◈', body: 'Every deliverable meets a defined engineering standard before it leaves our team.' },
  { label: 'Innovation', icon: '◇', body: 'We select tools that solve the actual problem, not those that generate the most noise.' },
  { label: 'Integrity', icon: '▣', body: 'Our scopes are accurate, our assessments are honest, and our commitments are kept.' },
  { label: 'Reliability', icon: '⬡', body: 'Uptime and delivery milestones are contractual obligations — we engineer for continuity.' },
  { label: 'Partnership', icon: '▦', body: 'Long-term support, training, and advisory are core to every engagement — not add-ons.' },
]

export default function CompanyProfileSection() {
  return (
    <div className="section-fade" style={{ background: 'var(--section-alt)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)', position: 'relative' }}>
      {/* Sticky export bar */}
      <div style={{
        position: 'sticky', top: 68, zIndex: 40,
        background: 'var(--nav-bg)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--border-gold)',
        padding: '10px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Company Profile</span>
          <span style={{ color: 'var(--border-subtle)' }}>|</span>
          <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>JS-GOLD Digital World · Official Dossier 2025</span>
        </div>
        <button
          onClick={() => window.print()}
          className="gold-glow-btn"
          style={{ padding: '8px 18px', borderRadius: 7, fontSize: '0.74rem', border: 'none', cursor: 'pointer', fontFamily: 'inherit', display: 'flex', alignItems: 'center', gap: 7 }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 1v7M3.5 5.5L6 8 8.5 5.5M1 10h10" stroke="var(--bg-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Export Official Profile to PDF
        </button>
      </div>

      <div className="px-4 sm:px-6 md:px-8 py-16" style={{ maxWidth: 1280, margin: '0 auto' }}>

        {/* Mission & Vision */}
        <div style={{ marginBottom: 72 }}>
          <div className="section-label" style={{ marginBottom: 16 }}>◆ &nbsp; Mission & Vision</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                label: 'MISSION',
                headline: 'Engineering Integrated Digital Ecosystems',
                body: 'Engineering integrated digital ecosystems that empower institutions and businesses to innovate, communicate, and scale — through applied technology, precision media, and strategic capacity development.',
                accent: 'var(--gold)',
              },
              {
                label: 'VISION',
                headline: "Africa's Leading Applied Technology & Multimedia Engineering Company",
                body: 'To become Africa\'s foremost applied technology and multimedia engineering company — recognised for operational excellence, technical depth, and the measurable institutional impact of every engagement we undertake.',
                accent: '#50C8FF',
              },
            ].map((item) => (
              <div key={item.label} style={{
                padding: '28px 30px', borderRadius: 12,
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderLeft: `3px solid ${item.accent}`,
              }}>
                <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.18em', color: item.accent, marginBottom: 12 }}>{item.label}</div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)', margin: '0 0 14px', lineHeight: 1.3, letterSpacing: '-0.01em' }}>{item.headline}</h3>
                <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.75 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        <hr className="razor-line-gold" style={{ marginBottom: 72 }} />

        {/* Corporate Manifesto */}
        <div style={{ marginBottom: 72 }}>
          <div className="section-label" style={{ marginBottom: 16 }}>◆ &nbsp; Corporate Manifesto</div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16" style={{ alignItems: 'start' }}>
            <div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 2.5vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.025em', color: 'var(--text-primary)', margin: '0 0 6px', lineHeight: 1.1 }}>Quality</h2>
              <h2 style={{
                fontSize: 'clamp(1.8rem, 2.5vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.025em',
                background: 'linear-gradient(135deg, var(--gold), var(--gold-light))', WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent', backgroundClip: 'text', margin: '0 0 24px', lineHeight: 1.1,
              }}>You Can Trust.</h2>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--text-muted)', margin: '0 0 18px' }}>
                JS-GOLD was founded on the conviction that African institutions deserve the same tier of technical precision and creative excellence that drives global technology leaders.
              </p>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--text-muted)', margin: 0 }}>
                Our engineers, broadcast technicians, creative directors, and consultants operate within a shared delivery framework — one standard, every output.
              </p>
            </div>
            <div style={{ display: 'grid', gap: 14 }}>
              {[
                { title: 'Technical Excellence', body: 'Every deployment begins with a formal infrastructure audit. We engineer to specification, document every configuration, and deliver with version-controlled, reproducible outputs.' },
                { title: 'Scaling Digital Infrastructure', body: "Our network architectures are designed to grow. From a 50-node campus to a multi-site enterprise, our MikroTik and cloud-hybrid topologies adapt without service interruption." },
              ].map((p, i) => (
                <div key={i} style={{ padding: '18px 20px', borderRadius: 9, background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderLeft: '2px solid var(--gold)' }}>
                  <h4 style={{ fontSize: '0.83rem', fontWeight: 700, color: 'var(--gold)', margin: '0 0 7px' }}>{p.title}</h4>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.7 }}>{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <hr className="razor-line-gold" style={{ marginBottom: 72 }} />

        {/* Core Values */}
        <div style={{ marginBottom: 72 }}>
          <div className="section-label" style={{ marginBottom: 16 }}>◆ &nbsp; Core Values</div>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)', margin: '0 0 32px', letterSpacing: '-0.01em' }}>
            The Principles That Govern Every Engagement
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {coreValues.map((v, i) => (
              <div
                key={i}
                className="glass-card animated-border"
                style={{ padding: '24px 20px', textAlign: 'center', cursor: 'default' }}
              >
                <div style={{ fontSize: '1.5rem', color: 'var(--gold)', marginBottom: 12, opacity: 0.7 }}>{v.icon}</div>
                <div style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '0.04em', marginBottom: 12 }}>{v.label}</div>
                <p style={{ fontSize: '0.73rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.65 }}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>

        <hr className="razor-line-gold" style={{ marginBottom: 72 }} />

        {/* Org Chart */}
        <div style={{ marginBottom: 72 }}>
          <div className="section-label" style={{ marginBottom: 16 }}>◆ &nbsp; Organisational Structure</div>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)', margin: '0 0 36px', letterSpacing: '-0.01em' }}>
            Five-Division Intelligence Architecture
          </h3>
          <OrgChart />
        </div>

        <hr className="razor-line-gold" style={{ marginBottom: 72 }} />

        {/* Deployment Timeline */}
        <div>
          <div className="section-label" style={{ marginBottom: 16 }}>◆ &nbsp; Project Deployment Framework</div>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)', margin: '0 0 44px', letterSpacing: '-0.01em' }}>
            3-Phase Execution Pipeline
          </h3>
          <Timeline />
        </div>
      </div>
    </div>
  )
}
