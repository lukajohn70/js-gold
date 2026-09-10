const divisions = [
  { name: 'Software Engineering', color: '#D4AF37', pills: ['Laravel', 'React', 'Flutter', 'Next.js', 'PHP'] },
  { name: 'Network Infrastructure', color: '#50C8FF', pills: ['MikroTik', 'Linux', 'Docker', 'BGP', 'VLAN'] },
  { name: 'Broadcast Engineering', color: '#A78BFA', pills: ['vMix', 'NDI', 'Dante', 'Blackmagic', 'OBS'] },
  { name: 'Creative Media', color: '#F59E0B', pills: ['DaVinci', 'After Effects', 'Figma', 'Premiere', 'RED'] },
  { name: 'Consultancy & Capacity', color: '#34D399', pills: ['Advisory', 'Training', 'Audits', 'Mentorship', 'LMS'] },
]

export default function OrgChart() {
  return (
    <div style={{ padding: '36px 28px', borderRadius: 14, background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }} />
      <div style={{ position: 'relative' }}>

        {/* Central node */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 0 }}>
          <div style={{
            padding: '16px 36px', borderRadius: 10,
            background: 'var(--gold-glow)', border: '1px solid var(--border-gold)',
            boxShadow: '0 0 30px var(--gold-glow), inset 0 0 20px var(--gold-glow)',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--gold)', marginBottom: 4 }}>HEADQUARTERS · NIGERIA</div>
            <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>JS-GOLD Digital World</div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: 3 }}>Integrated Technology & Media Group</div>
          </div>
        </div>

        {/* SVG connector lines (hidden on mobile/tablet) */}
        <div className="hidden lg:block" style={{ position: 'relative', height: 56, overflow: 'visible' }}>
          <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'visible' }} preserveAspectRatio="none">
            <defs>
              {divisions.map((d, i) => (
                <linearGradient key={i} id={`grad${i}`} x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor={d.color} stopOpacity="0.6" />
                  <stop offset="100%" stopColor={d.color} stopOpacity="0.9" />
                </linearGradient>
              ))}
              <filter id="node-glow">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>
            {/* Vertical drop */}
            <line x1="50%" y1="0" x2="50%" y2="24" stroke="var(--border-gold)" strokeWidth="1.5" filter="url(#node-glow)" />
            {/* Horizontal span: 10% to 90% */}
            <line x1="10%" y1="24" x2="90%" y2="24" stroke="var(--border-gold)" strokeWidth="1.2" opacity="0.5" />
            {/* 5 drops: 10%, 30%, 50%, 70%, 90% */}
            {[10, 30, 50, 70, 90].map((pct, i) => (
              <line key={i} x1={`${pct}%`} y1="24" x2={`${pct}%`} y2="56" stroke={`url(#grad${i})`} strokeWidth="1.5" filter="url(#node-glow)" />
            ))}
          </svg>
        </div>

        {/* Division nodes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {divisions.map((div, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
              <div
                style={{
                  padding: '13px 14px', borderRadius: 9, textAlign: 'center', width: '100%',
                  background: `${div.color}0C`, border: `1px solid ${div.color}38`,
                  boxShadow: `0 0 16px ${div.color}0D`,
                  transition: 'all 0.3s ease', cursor: 'default',
                }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = `${div.color}18`; el.style.borderColor = `${div.color}60` }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = `${div.color}0C`; el.style.borderColor = `${div.color}38` }}
              >
                <div style={{ fontSize: '0.57rem', fontWeight: 700, letterSpacing: '0.1em', color: div.color, marginBottom: 5 }}>DIV-0{i + 1}</div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.3 }}>{div.name}</div>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, justifyContent: 'center' }}>
                {div.pills.map((pill) => (
                  <span key={pill} style={{
                    padding: '2px 7px', borderRadius: 3, fontSize: '0.58rem', fontWeight: 600, letterSpacing: '0.05em',
                    color: div.color, background: `${div.color}10`, border: `1px solid ${div.color}22`,
                  }}>
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
