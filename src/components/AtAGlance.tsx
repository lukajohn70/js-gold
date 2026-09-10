import { scrollTo } from '../utils'

interface Props {
  onOpenServices?: () => void
}

export default function AtAGlance({ onOpenServices }: Props) {
  return (
    <div className="section-fade px-4 sm:px-6 md:px-8 py-20 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div>
          <div className="section-label mb-3">
            <span>◆</span>
            <span>THREE SPECIALIZED DIVISIONS · ONE TEAM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text-primary)]">
            Architected for Modern Scale
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-xl mt-3 leading-relaxed">
            Eliminate vendor fragmentation. We unify deep network engineering, broadcast-grade live production, and cinematic visual design.
          </p>
        </div>

        <button
          onClick={() => onOpenServices?.()}
          className="glass-btn px-6 py-3 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 self-start md:self-auto cursor-pointer"
        >
          <span>Explore All Service Modules</span>
          <span className="text-[var(--gold)]">→</span>
        </button>
      </div>

      {/* Bento Grid Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

        {/* BENTO CARD 1: Software & Networking (7 cols) */}
        <div
          onClick={() => onOpenServices?.()}
          className="md:col-span-7 glass-card p-6 sm:p-8 rounded-2xl cursor-pointer group flex flex-col justify-between relative overflow-hidden"
          style={{
            borderTop: '3px solid #50C8FF',
          }}
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold text-[#50C8FF] uppercase tracking-wider bg-[#50C8FF]/10 px-3 py-1 rounded-full border border-[#50C8FF]/20">
                Division 01 • Engineering &amp; Infra
              </span>
              <span className="text-xs text-[var(--text-dim)] font-mono">BGP / QoS / Cloud</span>
            </div>

            <h3 className="text-2xl font-extrabold text-[var(--text-primary)] mb-2 group-hover:text-[#50C8FF] transition-colors">
              Software &amp; Enterprise Networking
            </h3>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-6">
              From custom multi-tenant Laravel backends and offline-first Flutter mobile apps to campus-wide MikroTik hotspot routing and infrastructure security audits.
            </p>

            {/* Interactive Visual Widget */}
            <div className="p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] space-y-2.5 font-mono text-xs mb-6">
              <div className="flex items-center justify-between text-[11px] pb-2 border-b border-[var(--border-subtle)]">
                <span className="text-[var(--text-dim)]">Stack: Laravel • Flutter • MikroTik</span>
                <span className="text-emerald-400 font-bold">● Network Online (99.98%)</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div className="p-2 rounded bg-black/30 border border-white/5">
                  <div className="text-[var(--text-dim)]">Hotspot Capacity</div>
                  <div className="font-bold text-[#50C8FF] text-sm mt-0.5">5,000+ Users</div>
                </div>
                <div className="p-2 rounded bg-black/30 border border-white/5">
                  <div className="text-[var(--text-dim)]">App Architecture</div>
                  <div className="font-bold text-[var(--gold)] text-sm mt-0.5">Offline-First iOS/Android</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-[var(--border-subtle)] text-xs font-bold text-[#50C8FF]">
            <span>View Software &amp; Network Specs</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>

        {/* BENTO CARD 2: Broadcast & AV Systems (5 cols) */}
        <div
          onClick={() => onOpenServices?.()}
          className="md:col-span-5 glass-card p-6 sm:p-8 rounded-2xl cursor-pointer group flex flex-col justify-between relative overflow-hidden"
          style={{
            borderTop: '3px solid #E5C07B',
          }}
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold text-[var(--gold)] uppercase tracking-wider bg-[var(--gold)]/10 px-3 py-1 rounded-full border border-[var(--gold)]/20">
                Division 02 • Live Broadcast
              </span>
              <span className="w-2 h-2 rounded-full bg-red-500 pulse-dot" />
            </div>

            <h3 className="text-2xl font-extrabold text-[var(--text-primary)] mb-2 group-hover:text-[var(--gold)] transition-colors">
              Broadcast &amp; AV Production
            </h3>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-6">
              Turnkey multi-camera live streaming, hardware encoding rigs, vMix switching, and sound engineering with zero dropouts.
            </p>

            {/* Broadcast Visual Widget */}
            <div className="p-4 rounded-xl bg-gradient-to-b from-[#09111E] to-[#04070D] border border-white/10 space-y-3 mb-6">
              <div className="flex items-center justify-between text-xs">
                <span className="text-red-400 font-mono font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  LIVE ON AIR
                </span>
                <span className="text-xs font-mono text-[var(--gold)]">4K UHD • SRT</span>
              </div>
              <div className="h-12 rounded bg-black/50 border border-white/5 flex items-center justify-between px-3">
                <span className="text-[11px] font-mono text-white/70">Dante AoIP Audio Feed</span>
                <div className="flex items-end gap-1 h-5">
                  <div className="w-1 bg-green-400 rounded-full vu-bar-1" />
                  <div className="w-1 bg-green-400 rounded-full vu-bar-2" />
                  <div className="w-1 bg-yellow-400 rounded-full vu-bar-3" />
                  <div className="w-1 bg-red-400 rounded-full vu-bar-4" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-[var(--border-subtle)] text-xs font-bold text-[var(--gold)]">
            <span>Explore Live Stream Capabilities</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>

        {/* BENTO CARD 3: Creative Media & Design (Full 12 cols) */}
        <div
          onClick={() => onOpenServices?.()}
          className="md:col-span-12 glass-card p-6 sm:p-8 md:p-10 rounded-2xl cursor-pointer group flex flex-col md:flex-row md:items-center justify-between gap-8 relative overflow-hidden"
          style={{
            borderTop: '3px solid #A78BFA',
          }}
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono font-bold text-[#A78BFA] uppercase tracking-wider bg-[#A78BFA]/10 px-3 py-1 rounded-full border border-[#A78BFA]/20">
                Division 03 • Creative Media
              </span>
              <span className="text-xs text-[var(--text-dim)] font-mono">DaVinci Resolve • 4K Cinema • Figma</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] mb-3 group-hover:text-[#A78BFA] transition-colors">
              Cinematic Videography, Audio &amp; UI/UX
            </h3>
            <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed mb-6">
              Captivating corporate films, aerial cinematography, color grading in DaVinci Resolve, original musical jingles, and user interface systems that win conversions.
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                '4K Drone & Cinema Camera Packages',
                'DaVinci Resolve Color Mastering',
                'Custom Commercial Jingles & Foley',
                'Figma UI/UX & Design Systems',
                'Short-Form & Social Highlight Reels',
              ].map((pill) => (
                <span
                  key={pill}
                  className="text-xs font-medium px-3 py-1 rounded-md bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[var(--text-muted)]"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end justify-between gap-4 flex-shrink-0">
            <div className="text-left md:text-right">
              <div className="text-2xl font-extrabold text-[var(--text-primary)] font-display">
                Broadcast Grade
              </div>
              <div className="text-xs text-[var(--text-dim)] font-mono">
                From Raw 4K to Master Delivery
              </div>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation()
                scrollTo('portfolio')
              }}
              className="gold-glow-btn px-6 py-3 rounded-xl text-xs font-bold flex items-center gap-2"
            >
              <span>View Portfolio Showreel</span>
              <span>→</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
