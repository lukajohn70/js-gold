import { scrollTo } from '../utils'
import { attachRipple } from '../App'

interface HeroSectionProps {
  onOpenServices?: () => void
}

export default function HeroSection({ onOpenServices }: HeroSectionProps) {
  return (
    <section id="hero" className="relative min-h-[88vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-amber-50/20 pt-28 pb-16 lg:py-24">
      {/* Subtle Ambient Glows */}
      <div className="absolute top-12 left-8 w-72 h-72 bg-amber-200/30 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 right-8 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">

          {/* Left Column: Heading & Value Prop (Learnerium Style) */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Tagline Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md border border-amber-500/30 rounded-full px-4 py-2 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-amber-500 pulse-dot" />
              <span className="text-xs font-extrabold text-slate-800 tracking-wide">
                ✨ Quality You Can Trust &bull; Technology &amp; Multimedia Agency
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-[1.12] tracking-tight">
              We Build. We Broadcast.{' '}
              <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 bg-clip-text text-transparent">
                We Create.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              JS-GOLD Digital World is Nigeria's full-stack technology and creative powerhouse. From robust enterprise software &amp; campus network infrastructure to broadcast-grade multicam live streaming and cinematic media, we deliver end-to-end digital excellence.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button
                onClick={(e) => { attachRipple(e); scrollTo('contact') }}
                className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-xl text-base font-bold shadow-lg shadow-amber-500/25 transition-all duration-200 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Start a Project</span>
                <span>→</span>
              </button>

              <button
                onClick={() => onOpenServices ? onOpenServices() : scrollTo('about')}
                className="bg-white border-2 border-slate-800 text-slate-800 px-8 py-4 text-base rounded-xl font-bold transition-all duration-200 hover:scale-105 hover:shadow-xl hover:bg-slate-800 hover:text-white flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Explore Capabilities</span>
              </button>
            </div>

            {/* 4 Trust Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200 text-left">
              {[
                { number: '3', label: 'Core Divisions', sub: 'Single Accountable Team' },
                { number: '100+', label: 'Delivered Projects', sub: 'Institutions & Brands' },
                { number: '99.9%', label: 'Network Uptime', sub: 'MikroTik High Concurrency' },
                { number: '4K UHD', label: 'Live Broadcast', sub: 'Zero Latency Multicam' },
              ].map((m) => (
                <div key={m.label} className="p-2">
                  <div className="text-2xl sm:text-3xl font-black text-amber-600 tracking-tight">
                    {m.number}
                  </div>
                  <div className="text-xs font-bold text-slate-800 mt-0.5">
                    {m.label}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {m.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Hero Visual with Real Photography & Floating Glass Badges (Learnerium Style) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-white">
              {/* High-res Cinema & Broadcast Production Photography */}
              <img
                src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1000&auto=format&fit=crop&q=80"
                alt="JS-GOLD Professional Broadcast & Production"
                className="w-full h-[460px] sm:h-[500px] object-cover object-center transition-transform duration-700 hover:scale-105"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

              {/* Top Floating Glass Badge: Live Multicam Broadcast */}
              <div className="absolute top-5 left-5 floating-glass-badge p-3.5 px-4 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-500 pulse-dot" />
                <div>
                  <p className="text-xs font-extrabold text-slate-900 leading-none">
                    Live 4K Broadcast Active
                  </p>
                  <p className="text-[10px] text-slate-500 mt-1 leading-none font-medium">
                    vMix SRT Multicam &bull; Low Latency
                  </p>
                </div>
              </div>

              {/* Bottom Left Floating Badge: Software & Apps */}
              <div className="absolute bottom-6 left-5 floating-glass-badge p-3.5 px-4 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow-md">
                  ⚡
                </div>
                <div>
                  <p className="text-xs font-extrabold text-slate-900 leading-none">
                    Enterprise Software
                  </p>
                  <p className="text-[10px] text-slate-500 mt-1 leading-none font-medium">
                    Laravel &bull; Flutter &bull; MikroTik
                  </p>
                </div>
              </div>

              {/* Bottom Right Floating Badge: Quality You Can Trust */}
              <div className="absolute bottom-6 right-5 floating-glass-badge p-3.5 px-4 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold text-sm shadow-md">
                  ★
                </div>
                <div>
                  <p className="text-xs font-extrabold text-slate-900 leading-none">
                    Quality You Can Trust
                  </p>
                  <p className="text-[10px] text-slate-500 mt-1 leading-none font-medium">
                    100% Milestone Guarantee
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
