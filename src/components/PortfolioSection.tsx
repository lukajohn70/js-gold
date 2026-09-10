import { useState } from 'react'
import { scrollTo } from '../utils'

interface PortfolioItem {
  id: string
  title: string
  category: string
  division: string
  image: string
  headline: string
  solution: string
  technologies: string[]
  metrics: string
  badgeColor: string
  client: string
  duration: string
}

const filterCategories = [
  'All',
  'Software & Apps',
  'Network Deployments',
  'Broadcast & Live',
  'Creative Media',
]

const portfolioItems: PortfolioItem[] = [
  {
    id: 'campus-network',
    title: 'Multi-Building Campus Wi-Fi & Core Routing',
    category: 'Network Deployments',
    division: 'Software & Networking',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80',
    headline: 'High-density hotspot routing across 14 campus blocks supporting 6,000+ simultaneous student devices.',
    solution: 'Engineered MikroTik CCR2004 core routing with captive portal User-Manager authentication, dynamic PCQ bandwidth traffic shaping, and redundant fiber links.',
    technologies: ['MikroTik RouterOS', 'VLAN Segmentation', 'User-Manager', 'QoS Queue Trees', 'Fibre Backhaul'],
    metrics: '99.98% Network Uptime • 65% Bandwidth Waste Reduction',
    badgeColor: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
    client: 'Leading Regional Polytechnic',
    duration: '6 Weeks Turnkey',
  },
  {
    id: 'hybrid-convocation-stream',
    title: 'National Convocation Multi-Camera Live Broadcast',
    category: 'Broadcast & Live',
    division: 'Broadcast & AV Systems',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&auto=format&fit=crop&q=80',
    headline: 'Four-hour zero-dropout live stream broadcast simultaneously to physical overflow auditoriums and 15,000+ remote viewers.',
    solution: 'Configured 6-camera vMix production rig with hardware encoding, Dante digital audio routing, and bonded dual-WAN failover internet links.',
    technologies: ['vMix 4K Pro', 'Hardware Encoders', 'Dante AoIP', 'SRT / RTMP', 'Blackmagic ATEM'],
    metrics: '15,400 Concurrent Viewers • 0 Dropped Frames',
    badgeColor: 'bg-amber-500/10 text-amber-600 border-amber-500/20',
    client: 'Federal University Senate',
    duration: 'Turnkey Live Event',
  },
  {
    id: 'enterprise-erp',
    title: 'Institutional Operations & Portal Ecosystem',
    category: 'Software & Apps',
    division: 'Software & Networking',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    headline: 'Centralized administrative web portal, automated billing verification, and encrypted student records system.',
    solution: 'Engineered modular Laravel application with role-based access control, responsive React dashboards, and real-time payment reconciliation APIs.',
    technologies: ['React 19', 'Laravel 11', 'PostgreSQL', 'REST API', 'Tailwind CSS'],
    metrics: '4,500+ Daily Active Users • 75% Faster Processing',
    badgeColor: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
    client: 'Tertiary Academic College',
    duration: '8 Weeks',
  },
  {
    id: 'brand-film-campaign',
    title: 'Cinematic Corporate Brand Film & Visual System',
    category: 'Creative Media',
    division: 'Creative Media',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&auto=format&fit=crop&q=80',
    headline: 'Flagship documentary capturing enterprise operational milestones, accompanied by comprehensive visual branding guidelines.',
    solution: 'Shot on 4K cinema camera packages with drone aerials, color graded in DaVinci Resolve, complemented by custom sound design and motion intros.',
    technologies: ['4K Cinematography', 'DaVinci Resolve', 'After Effects', 'Figma', 'Sound Mastering'],
    metrics: 'Over 650,000 Digital Impressions • Aired Nationally',
    badgeColor: 'bg-purple-500/10 text-purple-600 border-purple-500/20',
    client: 'Multinational Manufacturing Brand',
    duration: '4 Weeks',
  },
  {
    id: 'fintech-mobile-app',
    title: 'Cross-Platform Financial Services Mobile App',
    category: 'Software & Apps',
    division: 'Software & Networking',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80',
    headline: 'Biometric consumer and merchant mobile application with offline transaction caching for unstable network zones.',
    solution: 'Built with React Native & Flutter for high performance across Android and iOS devices, communicating via encrypted payloads to an API gateway.',
    technologies: ['React Native', 'Flutter 3', 'Dart', 'REST API', 'Figma UI/UX'],
    metrics: '4.8★ App Store Rating • Sub-second Transaction Times',
    badgeColor: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
    client: 'Fintech Microfinance Group',
    duration: '10 Weeks',
  },
  {
    id: 'audio-production-suite',
    title: 'Commercial Musical Jingles & Station Identity',
    category: 'Creative Media',
    division: 'Broadcast & AV Systems',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&auto=format&fit=crop&q=80',
    headline: 'Custom acoustic branding, radio signatures, and voiceover audio mastering for regional marketing campaigns.',
    solution: 'Composed, recorded, and mixed original musical anthems meeting international broadcast loudness standards (EBU R128).',
    technologies: ['DAW Pro Tools', 'Mastering EQ', 'Voiceover Suite', 'Foley Sound'],
    metrics: 'EBU R128 Broadcast Compliant • 12 Jingles Produced',
    badgeColor: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
    client: 'Regional Retail Supercenter Chain',
    duration: '2 Weeks',
  },
]

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedModalItem, setSelectedModalItem] = useState<PortfolioItem | null>(null)

  const filteredItems = activeFilter === 'All'
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeFilter)

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-[var(--bg-secondary)] border-b border-[var(--border-subtle)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20 mb-3 shadow-xs">
              <span>◆</span>
              <span>VERIFIED CASE STUDIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[var(--text-primary)]">
              Proven Engineering Outcomes.
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-2xl mt-3 leading-relaxed">
              Explore how our multidisciplinary team resolves mission-critical operational challenges with verifiable performance benchmarks.
            </p>
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap items-center gap-2 self-start md:self-auto">
            {filterCategories.map((cat) => {
              const isActive = activeFilter === cat
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-amber-500 text-slate-950 shadow-md font-extrabold'
                      : 'bg-[var(--card-bg)] text-[var(--text-muted)] border border-[var(--border-subtle)] hover:text-[var(--text-primary)] hover:border-amber-500/40'
                  }`}
                >
                  {cat}
                </button>
              )
            })}
          </div>
        </div>

        {/* Flagship Case Study Feature Spotlight (Magazine Style) */}
        <div className="mb-14 bg-[var(--card-bg)] rounded-3xl border border-[var(--border-subtle)] p-6 sm:p-10 shadow-xl overflow-hidden relative">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-amber-500 text-slate-950 shadow-xs">
                FLAGSHIP SPOTLIGHT
              </span>
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
                Full-Stack Hybrid Rollout
              </span>
            </div>
            <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              Verified Production SLA: 99.98%
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-2xl sm:text-3xl font-black text-[var(--text-primary)] leading-tight">
                6,420-User Campus Fiber Infrastructure &amp; React Administrative Portal
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                A regional higher education campus faced daily bandwidth exhaustion and examination crashes. JS-GOLD deployed an end-to-end modernization: MikroTik CCR2004 core routing with fair-share QoS trees, captive hotspot authentication, and a customized React 19 + Laravel portal.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-2">
                <div className="p-3.5 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-center">
                  <div className="text-base sm:text-xl font-black text-amber-600">+300%</div>
                  <div className="text-[10px] text-[var(--text-muted)] font-bold uppercase mt-0.5">Throughput Efficiency</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-center">
                  <div className="text-base sm:text-xl font-black text-emerald-600">0.00%</div>
                  <div className="text-[10px] text-[var(--text-muted)] font-bold uppercase mt-0.5">Exam Packet Loss</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-center">
                  <div className="text-base sm:text-xl font-black text-blue-600">6,420</div>
                  <div className="text-[10px] text-[var(--text-muted)] font-bold uppercase mt-0.5">Concurrent Nodes</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {['React 19', 'Laravel 11', 'MikroTik RouterOS', '10G Fiber Backhaul', 'Dante AoIP'].map((t) => (
                  <span key={t} className="text-xs font-mono font-bold px-3 py-1 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-primary)]">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 relative aspect-4/3 rounded-2xl overflow-hidden bg-slate-900 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80"
                alt="Campus Fiber Infrastructure"
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.style.display = 'none' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-xs font-bold">Client: Regional Tertiary Polytechnic</div>
                <div className="text-[11px] text-amber-400 font-mono">Delivered on-time within 6 weeks</div>
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedModalItem(item)}
              className="group bg-[var(--card-bg)] rounded-2xl border border-[var(--border-subtle)] shadow-sm hover:shadow-xl hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
            >
              <div>
                {/* Photo Thumbnail */}
                <div className="relative h-52 overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute top-4 left-4">
                    <span className={`text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border shadow-sm ${item.badgeColor}`}>
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-lg font-extrabold text-[var(--text-primary)] mb-2 group-hover:text-amber-600 transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-4">
                    {item.headline}
                  </p>

                  <div className="p-3.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] leading-relaxed mb-5">
                    <strong className="text-amber-600">Engineered: </strong>
                    {item.solution}
                  </div>

                  {/* Technology Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-medium px-2 py-0.5 rounded bg-[var(--bg-primary)] text-[var(--text-muted)] border border-[var(--border-subtle)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Outcome Banner */}
              <div className="p-4 px-6 bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)] flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)]">
                    Measured Outcome
                  </div>
                  <div className="text-xs font-black text-emerald-600 mt-0.5">
                    {item.metrics}
                  </div>
                </div>
                <span className="text-xs font-bold text-amber-600 group-hover:translate-x-1 transition-transform">
                  View →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Selected Item Details */}
        {selectedModalItem && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
            <div className="bg-[var(--card-bg)] border border-[var(--border-subtle)] rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setSelectedModalItem(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[var(--bg-secondary)] text-[var(--text-muted)] flex items-center justify-center font-bold hover:text-white hover:bg-slate-900 transition-all cursor-pointer"
              >
                ✕
              </button>

              <div className="relative h-56 rounded-2xl overflow-hidden bg-slate-900 mb-6">
                <img
                  src={selectedModalItem.image}
                  alt={selectedModalItem.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    {selectedModalItem.category} • {selectedModalItem.duration}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black mt-1">
                    {selectedModalItem.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="text-xs font-mono font-bold uppercase text-[var(--text-muted)]">Client / Engagement:</div>
                  <div className="text-sm font-bold text-[var(--text-primary)]">{selectedModalItem.client}</div>
                </div>

                <div>
                  <div className="text-xs font-mono font-bold uppercase text-[var(--text-muted)]">The Challenge &amp; Scope:</div>
                  <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mt-1">{selectedModalItem.headline}</p>
                </div>

                <div className="p-4 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
                  <div className="text-xs font-mono font-bold uppercase text-amber-600">The JS-GOLD Solution Delivered:</div>
                  <p className="text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed mt-1">{selectedModalItem.solution}</p>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                  <div className="text-xs font-mono font-bold uppercase text-emerald-600">Verified Impact:</div>
                  <div className="text-sm font-black text-emerald-700 dark:text-emerald-400 mt-1">{selectedModalItem.metrics}</div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => {
                      setSelectedModalItem(null)
                      scrollTo('contact')
                    }}
                    className="flex-1 gold-glow-btn py-3 rounded-xl text-xs font-bold text-center cursor-pointer"
                  >
                    Discuss Similar Deployment →
                  </button>
                  <button
                    onClick={() => setSelectedModalItem(null)}
                    className="px-5 py-3 rounded-xl border border-[var(--border-subtle)] text-xs font-bold cursor-pointer text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Action Callout Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-950 text-white border border-slate-800 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400">
              FREE TECHNICAL ASSESSMENT
            </span>
            <h3 className="text-2xl sm:text-3xl font-black mt-2 leading-tight">
              Have a Mission-Critical Project?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-lg">
              We review your existing infrastructure, web/mobile software stack, or broadcast requirements with zero obligation.
            </p>
          </div>

          <button
            onClick={() => scrollTo('contact')}
            className="gold-glow-btn px-8 py-4 rounded-xl text-sm font-bold shadow-lg shadow-amber-500/30 hover:scale-105 transition-all cursor-pointer whitespace-nowrap"
          >
            Request Free Assessment →
          </button>
        </div>

      </div>
    </section>
  )
}

