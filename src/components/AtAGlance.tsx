import { scrollTo } from '../utils'

interface Props {
  onOpenServices?: () => void
}

const divisions = [
  {
    id: 'software-networking',
    number: '01',
    name: 'Software & Networking',
    category: 'Engineering & Infrastructure',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80',
    description: 'Custom web and mobile applications engineered for high concurrency, paired with enterprise-grade MikroTik campus networking.',
    features: [
      'Bespoke Web Platforms (React & Laravel)',
      'Cross-Platform Mobile Apps (Flutter)',
      'MikroTik Hotspot Gateways & User-Manager',
      'Bandwidth QoS & Campus Fiber Backbones',
    ],
    accent: '#3B82F6',
    badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
  },
  {
    id: 'broadcast-av',
    number: '02',
    name: 'Broadcast & AV Systems',
    category: 'Live Production & Audio',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format&fit=crop&q=80',
    description: 'Turnkey live streaming production for conferences, national conventions, and ceremonies with zero audio or video dropouts.',
    features: [
      'Multi-Camera Live Switching & Direction',
      'Hardware Encoding (SRT & RTMP 1080p60)',
      'Dante AoIP Audio Engineering & Mixing',
      'Original Commercial Jingles & Sound Design',
    ],
    accent: '#D97706',
    badgeBg: 'bg-amber-50 text-amber-700 border-amber-200',
  },
  {
    id: 'creative-media',
    number: '03',
    name: 'Creative Media & Design',
    category: 'Visual Storytelling & Branding',
    image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&auto=format&fit=crop&q=80',
    description: 'High-impact cinematic videography, professional documentary storytelling, DaVinci Resolve color grading, and Figma UI/UX systems.',
    features: [
      '4K Cinema & Aerial Drone Cinematography',
      'DaVinci Resolve Film Emulation Color Grading',
      'High-Resolution Corporate Photography',
      'UI/UX Design Systems & Interactive Prototypes',
    ],
    accent: '#8B5CF6',
    badgeBg: 'bg-purple-50 text-purple-700 border-purple-200',
  },
]

export default function AtAGlance({ onOpenServices }: Props) {
  return (
    <section id="divisions" className="py-20 md:py-28 bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="section-label mb-3">
              <span>◆</span>
              <span>THREE INTEGRATED DIVISIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900">
              Our Core Divisions
            </h2>
            <p className="text-base text-slate-600 max-w-xl mt-3 leading-relaxed">
              We eliminate the friction of coordinating multiple disjointed vendors. One multidisciplinary agency, three specialized pillars.
            </p>
          </div>

          <button
            onClick={() => onOpenServices?.()}
            className="bg-white border-2 border-slate-900 text-slate-900 px-6 py-3.5 rounded-xl text-sm font-bold flex items-center gap-2 self-start md:self-auto hover:bg-slate-900 hover:text-white transition-all shadow-sm cursor-pointer"
          >
            <span>View All Service Modules</span>
            <span>→</span>
          </button>
        </div>

        {/* 3 Rich Photographic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {divisions.map((div) => (
            <div
              key={div.id}
              className="pro-card group overflow-hidden flex flex-col justify-between cursor-pointer"
              onClick={() => onOpenServices?.()}
            >
              <div>
                {/* Photographic Header */}
                <div className="relative h-56 overflow-hidden bg-slate-900">
                  <img
                    src={div.image}
                    alt={div.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute top-4 left-4">
                    <span className={`text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border shadow-sm ${div.badgeBg}`}>
                      Division {div.number}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                      {div.category}
                    </div>
                    <h3 className="text-xl font-black tracking-tight">
                      {div.name}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {div.description}
                  </p>

                  <div className="space-y-2.5 mb-6">
                    {div.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <span className="text-amber-600 font-bold mt-0.5">✓</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-4 px-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                <span>Explore Capabilities</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Shortcuts Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="text-sm font-bold text-slate-900">
              Need a cross-division turnkey project?
            </span>
            <span className="text-xs text-slate-500 hidden md:inline">
              We engineer the network, deploy the software, and broadcast your launch event.
            </span>
          </div>

          <button
            onClick={() => scrollTo('contact')}
            className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow cursor-pointer whitespace-nowrap"
          >
            Request Free Technical Assessment →
          </button>
        </div>

      </div>
    </section>
  )
}
