import { scrollTo } from '../utils'
import StudioConsole from './StudioConsole'
import { attachRipple } from '../App'

interface HeroSectionProps {
  onOpenServices?: () => void
}

export default function HeroSection({ onOpenServices }: HeroSectionProps) {
  return (
    <div className="section-fade relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Subtle Background Radial Atmosphere */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 65% 55% at 20% 15%, var(--ambient-1) 0%, transparent 60%),
            radial-gradient(ellipse 60% 60% at 85% 65%, var(--ambient-2) 0%, transparent 60%)
          `,
        }}
      />

      {/* Modern Grid Line Mask */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: 'linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 100%)',
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Bold Typography & Action */}
          <div className="lg:col-span-7">
            {/* Tagline Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full mb-6 border border-[var(--border-gold)] bg-[var(--gold-glow)] backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[var(--gold)] pulse-dot" />
              <span className="text-xs font-mono font-bold tracking-wider text-[var(--gold)] uppercase">
                Quality You Can Trust
              </span>
              <span className="text-[var(--text-dim)]">•</span>
              <span className="text-xs font-semibold text-[var(--text-primary)]">
                Integrated Agency
              </span>
            </div>

            {/* Giant Headline */}
            <h1
              className="font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.08] mb-6"
              style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4.2rem)' }}
            >
              We Build.{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, var(--gold) 0%, #FFF 40%, var(--gold-light) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                We Broadcast.
              </span>
              <br />
              We Create.
            </h1>

            {/* Compelling Value Proposition */}
            <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed max-w-xl mb-8 font-normal">
              JS-GOLD Digital World is a full-stack technology and multimedia agency. We engineer enterprise software &amp; campus network infrastructure, produce broadcast-grade live streams, and deliver cinematic creative media under one accountable roof.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <button
                onClick={(e) => { attachRipple(e); scrollTo('contact') }}
                className="gold-glow-btn ripple px-8 py-4 rounded-xl text-sm font-bold flex items-center gap-2 cursor-pointer shadow-xl"
              >
                <span>Start a Project</span>
                <span>→</span>
              </button>

              <button
                onClick={() => onOpenServices ? onOpenServices() : scrollTo('about')}
                className="glass-btn ripple px-7 py-4 rounded-xl text-sm font-semibold flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Capabilities</span>
              </button>
            </div>

            {/* Live Stats Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-[var(--border-subtle)]">
              {[
                { number: '3', label: 'Core Divisions', sub: 'Integrated Teams' },
                { number: '100+', label: 'Delivered Projects', sub: 'Enterprise & SMEs' },
                { number: '99.9%', label: 'Network SLA', sub: 'High Reliability' },
                { number: '0s', label: 'Live Stream Lag', sub: 'Broadcast Low-Latency' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[var(--gold)] font-display tracking-tight">
                    {stat.number}
                  </div>
                  <div className="text-xs font-bold text-[var(--text-primary)] mt-1">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-[var(--text-dim)] font-mono">
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Studio Console */}
          <div className="lg:col-span-5 flex justify-center">
            <StudioConsole />
          </div>

        </div>
      </div>
    </div>
  )
}
