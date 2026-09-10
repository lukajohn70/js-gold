export default function MarqueeRibbon() {
  const capabilities = [
    'REACT 19 WEB PLATFORMS',
    'ENTERPRISE CAMPUS NETWORKING',
    'MIKROTIK ROUTEROS CCR2004',
    '4K MULTI-CAM LIVE STREAMING',
    'VMIX BROADCAST SUITE',
    'LARAVEL 11 & FLUTTER 3',
    'CINEMATIC 4K VIDEOGRAPHY',
    'ACOUSTIC JINGLES & SOUND DESIGN',
    'DANTE AOIP AUDIO PROTOCOLS',
    'ZERO-DROPOUT BONDED STREAMING',
    'QUALITY YOU CAN TRUST',
  ]

  return (
    <div className="py-4 overflow-hidden border-y border-[var(--border-subtle)] bg-[var(--bg-secondary)] relative">
      <div className="marquee-track flex items-center gap-8 whitespace-nowrap">
        {/* Render twice for seamless continuous loop */}
        {[...capabilities, ...capabilities].map((item, idx) => (
          <div key={idx} className="flex items-center gap-8">
            <span className="text-xs font-mono font-black tracking-widest text-[var(--text-muted)] hover:text-amber-600 transition-colors uppercase">
              {item}
            </span>
            <span className="text-amber-500 text-xs">✦</span>
          </div>
        ))}
      </div>
    </div>
  )
}

