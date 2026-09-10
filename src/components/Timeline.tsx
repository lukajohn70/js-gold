const phases = [
  {
    phase: 'Phase 01',
    title: 'Audit & Infrastructure Assessment',
    color: '#D4AF37',
    tasks: [
      'Evaluate client facility layout and structural cabling constraints',
      'Assess existing network topology, bandwidth profiles, and failure points',
      'Review current digital media pipelines, production workflows, and hardware inventory',
      'Deliver a formal Infrastructure Assessment Report with scope-of-work matrix',
    ],
    deliverable: 'Infrastructure Assessment Report',
  },
  {
    phase: 'Phase 02',
    title: 'Custom Engineering & Deployment',
    color: '#50C8FF',
    tasks: [
      'Build and configure fast, scalable web platforms and mobile applications',
      'Deploy structured network with MikroTik routing, VLANs, and hotspot gateways',
      'Install and calibrate broadcast-grade AV rigs with NDI/Dante integration',
      'Conduct staged UAT with signed sign-off documentation at each gate',
    ],
    deliverable: 'Fully Commissioned System + UAT Sign-off',
  },
  {
    phase: 'Phase 03',
    title: 'Operational Optimization & Mentorship',
    color: '#A78BFA',
    tasks: [
      'System stress-testing under peak-load simulations and edge-case scenarios',
      'Long-term technical support via dedicated SLA with defined response SLOs',
      'Industry-standard operator training for in-house technical staff',
      'Quarterly performance reviews with optimization recommendations',
    ],
    deliverable: 'SLA Contract + Training Certification',
  },
]

export default function Timeline() {
  return (
    <div style={{ position: 'relative' }}>
      {/* Vertical track */}
      <div
        style={{
          position: 'absolute',
          left: 108,
          top: 24,
          bottom: 24,
          width: 2,
          background: 'linear-gradient(to bottom, #D4AF37, #50C8FF 50%, #A78BFA)',
          boxShadow: '0 0 12px var(--gold-glow)',
          borderRadius: 1,
        }}
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {phases.map((phase, i) => (
          <div
            key={i}
            style={{
              display: 'grid',
              gridTemplateColumns: '120px 1fr',
              gap: 32,
              paddingBottom: i < phases.length - 1 ? 48 : 0,
              position: 'relative',
            }}
          >
            {/* Phase label column */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', paddingTop: 18 }}>
              <div
                style={{
                  fontSize: '0.62rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  color: phase.color,
                  textAlign: 'right',
                  marginBottom: 4,
                }}
              >
                {phase.phase}
              </div>

              {/* Node dot */}
              <div
                style={{
                  position: 'absolute',
                  right: -8 - 32 + 2,
                  top: 22,
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  background: phase.color,
                  boxShadow: `0 0 12px ${phase.color}, 0 0 24px ${phase.color}60`,
                  border: '2px solid var(--timeline-dot-border)',
                  zIndex: 2,
                }}
              />
            </div>

            {/* Content */}
            <div
              style={{
                padding: '20px 24px',
                borderRadius: 10,
                background: 'var(--bg-surface)',
                border: `1px solid var(--border-subtle)`,
                borderLeft: `2px solid ${phase.color}50`,
                transition: 'all 0.3s ease',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.background = `${phase.color}08`
                el.style.borderLeftColor = phase.color
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.background = 'var(--bg-surface)'
                el.style.borderLeftColor = `${phase.color}50`
              }}
            >
              <h4
                style={{
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  margin: '0 0 16px',
                  letterSpacing: '-0.01em',
                }}
              >
                {phase.title}
              </h4>

              <ul style={{ margin: '0 0 18px', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {phase.tasks.map((task, j) => (
                  <li key={j} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <span style={{ color: phase.color, fontSize: '0.65rem', marginTop: 3, flexShrink: 0 }}>▸</span>
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{task}</span>
                  </li>
                ))}
              </ul>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '5px 12px',
                  borderRadius: 5,
                  background: `${phase.color}12`,
                  border: `1px solid ${phase.color}30`,
                }}
              >
                <span style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', color: phase.color }}>
                  DELIVERABLE
                </span>
                <span style={{ width: 1, height: 10, background: `${phase.color}40` }} />
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                  {phase.deliverable}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
