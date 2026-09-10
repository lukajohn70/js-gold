export default function MarqueeRibbon() {
  const capabilities = [
    'ENTERPRISE NETWORKING',
    'MIKROTIK ROUTEROS',
    '4K LIVE STREAMING',
    'VMIX MULTICAM',
    'CUSTOM LARAVEL & FLUTTER',
    'CINEMATIC 4K VIDEOGRAPHY',
    'SOUND ENGINEERING & JINGLES',
    'UI/UX DESIGN SYSTEMS',
    'QUALITY YOU CAN TRUST',
    'ZERO DOWNTIME BROADCAST',
  ]

  return (
    <div className="py-5 overflow-hidden border-y border-[var(--border-subtle)] bg-[var(--section-alt)] relative">
      <div className="marquee-track flex items-center gap-8 whitespace-nowrap">
        {/* Render twice for seamless continuous loop */}
        {[...capabilities, ...capabilities].map((item, idx) => (
          <div key={idx} className="flex items-center gap-8">
            <span className="text-xs sm:text-sm font-extrabold tracking-widest text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors uppercase font-mono">
              {item}
            </span>
            <span className="text-[var(--gold)] text-xs opacity-70">◆</span>
          </div>
        ))}
      </div>
    </div>
  )
}
