const steps = [
  { num: '01', label: 'Discovery', desc: 'Stakeholder interviews, requirements capture & constraints mapping.', color: '#D4AF37' },
  { num: '02', label: 'Audit', desc: 'Technical assessment of existing infrastructure, software & security posture.', color: '#E8CC6A' },
  { num: '03', label: 'Architecture', desc: 'System design, technology selection & approved solution specification.', color: '#50C8FF' },
  { num: '04', label: 'Design', desc: 'UI/UX design, network diagrams & stakeholder sign-off on deliverables.', color: '#7DD3FC' },
  { num: '05', label: 'Development', desc: 'Parallel build across all divisions with sprint-based delivery gates.', color: '#A78BFA' },
  { num: '06', label: 'Testing', desc: 'Unit, integration, load & UAT across all system components.', color: '#C4B5FD' },
  { num: '07', label: 'Deployment', desc: 'Production rollout with staged migration & documented rollback procedures.', color: '#34D399' },
  { num: '08', label: 'Optimisation', desc: 'Post-deployment tuning, profiling & iterative improvements from live telemetry.', color: '#6EE7B7' },
  { num: '09', label: 'Support', desc: 'SLA-backed support · quarterly reviews · operator training.', color: '#D4AF37' },
]

export default function ProcessSection() {
  return (
    <div id="methodology" className="px-4 sm:px-6 md:px-8 pb-24" style={{ maxWidth: 1280, margin: '0 auto' }}>
      <hr className="razor-line" style={{ marginBottom: 64 }} />

      <div style={{ marginBottom: 48 }}>
        <div className="section-label" style={{ marginBottom: 14 }}>◆ &nbsp; Engineering Methodology</div>
        <h2 style={{ fontSize: 'clamp(1.5rem, 2.2vw, 2rem)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text-primary)', margin: '0 0 12px' }}>
          Nine-Step Delivery Framework
        </h2>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0, maxWidth: 500 }}>
          Every JS-GOLD engagement — regardless of division — follows the same structured, stage-gated delivery protocol to guarantee consistent, auditable outcomes.
        </p>
      </div>

      {/* Horizontal process rail */}
      <div style={{ position: 'relative', marginBottom: 0 }}>
        {/* Progress line */}
        <div className="hidden lg:block" style={{
          position: 'absolute', top: 28, left: 28, right: 28, height: 2,
          background: 'linear-gradient(to right, #D4AF37, #50C8FF 50%, #34D399)',
          opacity: 0.3, borderRadius: 1,
        }} />

        <div className="flex lg:grid lg:grid-cols-9 gap-6 lg:gap-2 overflow-x-auto lg:overflow-x-visible pb-6 lg:pb-0" style={{ WebkitOverflowScrolling: 'touch' }}>
          {steps.map((step, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[200px] lg:w-auto"
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14, cursor: 'default' }}
            >
              {/* Step node */}
              <div
                style={{
                  width: 56, height: 56, borderRadius: '50%',
                  background: `${step.color}12`,
                  border: `1.5px solid ${step.color}50`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.68rem', fontWeight: 800, color: step.color,
                  letterSpacing: '0.04em', flexShrink: 0,
                  transition: 'all 0.3s ease', zIndex: 1, position: 'relative',
                  boxShadow: `0 0 0 0 ${step.color}`,
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.background = `${step.color}22`
                  el.style.borderColor = step.color
                  el.style.boxShadow = `0 0 16px ${step.color}40`
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.background = `${step.color}12`
                  el.style.borderColor = `${step.color}50`
                  el.style.boxShadow = `0 0 0 0 ${step.color}`
                }}
              >
                {step.num}
              </div>

              {/* Label + desc */}
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: step.color, marginBottom: 5, letterSpacing: '0.04em' }}>
                  {step.label}
                </div>
                <div style={{ fontSize: '0.63rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                  {step.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
