import { useState } from 'react'
import { scrollTo } from '../utils'

const sectors = [
  {
    id: 'education',
    title: 'Institutions & Higher Education',
    shortTitle: 'Institutions & Education',
    badge: 'Campus Scale',
    accent: '#D97706',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop',
    challenge: 'Severe campus Wi-Fi congestion during peak hours, unmetered bandwidth theft, outdated administrative portals, and poor auditorium sound projection during matriculations.',
    solution: 'Engineered a unified campus topology with MikroTik CCR2004 gateways and PCQ fair-share queue trees, paired with a modern React 19 administrative portal and line-array auditorium acoustics.',
    stats: '6,420 Concurrent Campus Nodes',
    uptime: '99.99% Academic SLA',
    stack: ['MikroTik RouterOS v7', 'React 19 Portal', 'Laravel API', 'User-Manager Hotspot', 'Dante AoIP'],
    quote: 'Examinations and student registration transitioned from chaos to instant, zero-dropout operations.',
  },
  {
    id: 'corporate',
    title: 'Corporate Enterprises & SMEs',
    shortTitle: 'Corporate & SMEs',
    badge: 'Business Operations',
    accent: '#2563EB',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
    challenge: 'Disconnected branch offices operating on vulnerable internet links, manual spreadsheet accounting, and inconsistent brand collateral across media channels.',
    solution: 'Designed and deployed encrypted multi-branch IPsec VPNs, custom real-time business operations portals in React & Laravel, and high-conversion commercial media assets.',
    stats: 'Multi-Branch Encrypted Sync',
    uptime: '< 15ms Latency SLA',
    stack: ['IPsec Site-to-Site VPN', 'React Dashboard', 'Flutter Mobile App', 'PostgreSQL Cloud', 'DaVinci Resolve'],
    quote: 'Our headquarters and 4 regional branches now operate as one synchronized, automated unit.',
  },
  {
    id: 'events',
    title: 'Events & Broadcast Organizers',
    shortTitle: 'Live Events & Broadcast',
    badge: 'High-Stakes Live',
    accent: '#7C3AED',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop',
    challenge: 'Unstable local venue internet causing stream buffer dropouts, poor camera switching angles, muffled speaker audio, and delayed post-event recap delivery.',
    solution: 'Deployed mobile broadcast flypacks with vMix 4K Pro, multi-SIM bonded cellular internet encoders, 4K Sony/Blackmagic camera rigs, and broadcast loudness mastering.',
    stats: '15,000+ Concurrent Viewers',
    uptime: '0 Dropped Frames',
    stack: ['vMix 4K Multi-Cam', 'LiveU Cellular Bonding', 'SRT Low-Latency', 'Dante Audio Bus', 'Sony FX6 4K'],
    quote: 'Our 3-day national convention broadcasted flawlessly across YouTube, Facebook, and satellite feeds.',
  },
  {
    id: 'media',
    title: 'Creators, Brands & Media Houses',
    shortTitle: 'Creators & Brand Studios',
    badge: 'Sonic & Visual Storytelling',
    accent: '#059669',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop',
    challenge: 'Generic stock music that fails to build brand recognition, flat video commercials with poor lighting, and inconsistent digital identity systems.',
    solution: 'Crafted original, unforgettable radio/TV acoustic jingles produced with live multi-track instrumentation, paired with cinematic 4K cinematography and film emulation grading.',
    stats: 'EBU R128 Broadcast Loudness',
    uptime: '4K Cinema HDR',
    stack: ['Pro Tools Studio DAW', 'DaVinci Resolve ACES', 'Cinema Lenses', 'Figma Token Systems'],
    quote: 'Our commercial jingle became an instant regional earworm, boosting customer recall by over 200%.',
  },
]

export default function IndustriesSection() {
  const [activeSectorIndex, setActiveSectorIndex] = useState(0)
  const current = sectors[activeSectorIndex]

  return (
    <section id="industries" className="py-20 md:py-28 bg-[var(--bg-primary)] border-t border-[var(--border-subtle)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20 mb-3 shadow-xs">
              <span>◆</span>
              <span>SECTOR SPECIALIZATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[var(--text-primary)]">
              Who We Build &amp; Broadcast For.
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-2xl mt-3 leading-relaxed">
              Explore how our integrated triad solves high-stakes operational challenges across distinct industries.
            </p>
          </div>

          <button
            onClick={() => scrollTo('contact')}
            className="gold-glow-btn px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 self-start md:self-auto cursor-pointer shadow-md hover:shadow-lg transition-all"
          >
            <span>Request Sector Consultation</span>
            <span>→</span>
          </button>
        </div>

        {/* Interactive Sector Split Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Vertical Sector Selector (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-mono font-bold uppercase text-[var(--text-muted)] tracking-wider mb-2">
              Select Sector Focus:
            </div>

            {sectors.map((sec, idx) => {
              const isActive = activeSectorIndex === idx
              return (
                <button
                  key={sec.id}
                  onClick={() => setActiveSectorIndex(idx)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                    isActive
                      ? 'bg-[var(--card-bg)] border-amber-500 shadow-lg shadow-amber-500/10 scale-[1.02]'
                      : 'bg-[var(--bg-secondary)] border-[var(--border-subtle)] hover:border-slate-300 dark:hover:border-slate-700 opacity-80 hover:opacity-100'
                  }`}
                  style={{
                    borderLeft: isActive ? `4px solid ${sec.accent}` : undefined,
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--text-muted)]">
                      0{idx + 1} // {sec.badge}
                    </span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: sec.accent }} />
                    )}
                  </div>

                  <div className="text-base font-extrabold text-[var(--text-primary)]">
                    {sec.shortTitle}
                  </div>

                  <div className="text-xs text-[var(--text-muted)] mt-1 font-mono">
                    {sec.stats}
                  </div>
                </button>
              )
            })}
          </div>

          {/* Right Cinematic Deployment Showcase (8 cols) */}
          <div className="lg:col-span-8 bg-[var(--card-bg)] rounded-3xl border border-[var(--border-subtle)] overflow-hidden shadow-xl flex flex-col">
            {/* Photographic Banner */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900">
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                onError={(e) => { e.currentTarget.style.display = 'none' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-transparent pointer-events-none" />

              <div className="absolute top-4 left-4">
                <span
                  className="text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full text-white backdrop-blur-md shadow-md"
                  style={{ backgroundColor: `${current.accent}E6` }}
                >
                  {current.badge}
                </span>
              </div>

              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-400">
                  Tailored Blueprint
                </div>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight mt-1">
                  {current.title}
                </h3>
              </div>
            </div>

            {/* Showcase Body */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Challenge vs Solution Split */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-red-500/5 border border-red-500/15">
                  <div className="text-xs font-black uppercase tracking-wider text-red-600 dark:text-red-400 mb-2 flex items-center gap-1.5">
                    <span>✕</span>
                    <span>The Client's Operational Bottleneck</span>
                  </div>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                    {current.challenge}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/15">
                  <div className="text-xs font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2 flex items-center gap-1.5">
                    <span>✓</span>
                    <span>The JS-GOLD Engineered Solution</span>
                  </div>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                    {current.solution}
                  </p>
                </div>
              </div>

              {/* Technologies Employed */}
              <div>
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-muted)] mb-2.5">
                  Deployed Technology &amp; Hardware Stack:
                </div>
                <div className="flex flex-wrap gap-2">
                  {current.stack.map((item) => (
                    <span
                      key={item}
                      className="text-xs font-semibold px-3 py-1 rounded-lg bg-[var(--bg-secondary)] text-[var(--text-primary)] border border-[var(--border-subtle)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Client Quote & Impact Footer */}
              <div className="p-4 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs italic text-[var(--text-primary)]">
                  "{current.quote}"
                </div>

                <div className="flex items-center gap-4 whitespace-nowrap text-xs font-mono font-bold">
                  <span className="text-amber-600">{current.stats}</span>
                  <span className="text-emerald-600">{current.uptime}</span>
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => scrollTo('contact')}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-900 text-white dark:bg-amber-500 dark:text-slate-950 text-xs font-bold transition-all hover:opacity-90 cursor-pointer text-center"
                >
                  Consult on {current.shortTitle} →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


