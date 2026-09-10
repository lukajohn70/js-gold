import { scrollTo } from '../utils'

const industries = [
  {
    title: 'Institutions & Education',
    badge: 'Campus Scale',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop',
    scope: 'Campus Wi-Fi topologies, MikroTik captive hotspot billing, student administrative portals built in React & Laravel, and auditorium AV installations.',
    accent: '#D97706',
    stats: '6,000+ Concurrent Campus Nodes',
    deliverables: ['Campus-Wide Wi-Fi Topologies', 'React Student Portals', 'Auditorium AV Rigs'],
  },
  {
    title: 'Corporate Enterprises & SMEs',
    badge: 'Business Operations',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
    scope: 'Bespoke React & Laravel cloud dashboards, cross-platform Flutter mobile apps, multi-branch IPsec VPNs, and corporate multimedia.',
    accent: '#2563EB',
    stats: 'Multi-Branch Secure VPN & Cloud',
    deliverables: ['Custom React Portals', 'Cross-Platform Mobile', 'Secure RouterOS Networks'],
  },
  {
    title: 'Events & Broadcast Organizers',
    badge: 'Live Production',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop',
    scope: 'Zero-dropout multi-camera live streaming, hardware vMix encoding pipelines, low-latency SRT distribution, and stage sound engineering.',
    accent: '#7C3AED',
    stats: '15,000+ Concurrent Live Viewers',
    deliverables: ['Multi-Cam 4K Switching', 'Bonded Cellular Internet', 'Line-Array Acoustics'],
  },
  {
    title: 'Creators, Brands & Media',
    badge: 'Visual Storytelling',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop',
    scope: 'High-end 4K cinematography, DaVinci Resolve color grading, commercial musical jingles, and studio voiceover mastering.',
    accent: '#059669',
    stats: 'Broadcast Loudness EBU R128',
    deliverables: ['4K Cinema Commercials', 'Studio Jingle Production', 'Brand Identity Systems'],
  },
]

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-20 bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="section-label mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              <span>◆</span>
              <span>SECTOR SPECIALIZATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text-primary)]">
              Who We Partner With
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-2xl mt-3 leading-relaxed">
              Tailored software engineering, enterprise network topologies, and high-impact broadcast media configured precisely for your sector.
            </p>
          </div>

          <button
            onClick={() => scrollTo('contact')}
            className="gold-glow-btn px-6 py-3 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 self-start md:self-auto cursor-pointer shadow-md hover:shadow-lg transition-all"
          >
            <span>Request Sector Consultation</span>
            <span>→</span>
          </button>
        </div>

        {/* Grid of 4 Sectors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, i) => (
            <div
              key={i}
              className="group bg-[var(--card-bg)] rounded-2xl border border-[var(--border-subtle)] shadow-sm hover:shadow-xl hover:border-amber-500/40 transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Photo Header with Badge Overlay */}
              <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                <img
                  src={ind.image}
                  alt={ind.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3">
                  <span
                    className="text-[11px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full text-white backdrop-blur-md border border-white/20 shadow-sm"
                    style={{ backgroundColor: `${ind.accent}CC` }}
                  >
                    {ind.badge}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2.5 group-hover:text-amber-600 transition-colors">
                    {ind.title}
                  </h3>

                  <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-5">
                    {ind.scope}
                  </p>

                  {/* Sector Key Deliverables */}
                  <div className="space-y-1.5 mb-6">
                    {ind.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[var(--text-primary)] font-medium">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: ind.accent }} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Track Record Footer */}
                <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs">
                  <span className="text-[var(--text-muted)] font-medium">Proven Metric</span>
                  <span className="font-bold text-[var(--text-primary)]" style={{ color: ind.accent }}>
                    {ind.stats}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

