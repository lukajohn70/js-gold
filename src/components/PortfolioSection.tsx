import { useState } from 'react'
import { scrollTo } from '../utils'

interface PortfolioItem {
  id: string
  title: string
  category: string
  division: string
  previewType: 'app' | 'stream' | 'network' | 'video'
  headline: string
  solution: string
  technologies: string[]
  metrics: string
  accent: string
  badgeText: string
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
    previewType: 'network',
    headline: 'High-density hotspot routing across 14 campus blocks supporting 6,000+ simultaneous devices.',
    solution: 'Engineered MikroTik core routing with captive portal User-Manager authentication, dynamic QoS bandwidth traffic shaping, and redundant fiber links.',
    technologies: ['MikroTik RouterOS', 'VLAN Segmentation', 'User-Manager', 'QoS Queue Trees', 'Fibre Backhaul'],
    metrics: '99.8% Network Uptime • 65% Bandwidth Waste Reduction',
    accent: '#50C8FF',
    badgeText: 'MikroTik Core v7',
  },
  {
    id: 'hybrid-convocation-stream',
    title: 'National Convocation Multi-Camera Live Broadcast',
    category: 'Broadcast & Live',
    division: 'Broadcast & AV Systems',
    previewType: 'stream',
    headline: 'Four-hour zero-dropout live stream broadcast simultaneously to physical overflow auditoriums and 15,000+ remote viewers.',
    solution: 'Configured 6-camera vMix production rig with hardware encoding, Dante digital audio routing, and bonded dual-WAN failover internet links.',
    technologies: ['vMix 4K Pro', 'Hardware Encoders', 'Dante AoIP', 'SRT / RTMP', 'Blackmagic ATEM'],
    metrics: '15,400 Concurrent Viewers • 0 Dropped Frames',
    accent: '#E5C07B',
    badgeText: 'Live Multicam PGM',
  },
  {
    id: 'enterprise-erp',
    title: 'Institutional Operations & Portal Ecosystem',
    category: 'Software & Apps',
    division: 'Software & Networking',
    previewType: 'app',
    headline: 'Centralized administrative web portal, automated billing verification, and encrypted student records system.',
    solution: 'Engineered modular Laravel application with role-based access control, responsive dashboards, and real-time payment reconciliation APIs.',
    technologies: ['Laravel 11', 'React', 'MySQL', 'REST API', 'Tailwind CSS'],
    metrics: '4,500+ Daily Active Users • 75% Faster Processing',
    accent: '#50C8FF',
    badgeText: 'Laravel Cloud API',
  },
  {
    id: 'brand-film-campaign',
    title: 'Cinematic Corporate Brand Film & Visual System',
    category: 'Creative Media',
    division: 'Creative Media',
    previewType: 'video',
    headline: 'Flagship documentary capturing enterprise operational milestones, accompanied by comprehensive visual branding guidelines.',
    solution: 'Shot on 4K cinema camera packages with drone aerials, color graded in DaVinci Resolve, complemented by custom sound design and motion intros.',
    technologies: ['4K Cinematography', 'DaVinci Resolve', 'After Effects', 'Figma', 'Sound Mastering'],
    metrics: 'Over 650,000 Digital Impressions • Aired Nationally',
    accent: '#A78BFA',
    badgeText: '4K Cinema / DaVinci',
  },
  {
    id: 'fintech-mobile-app',
    title: 'Cross-Platform Financial Services Mobile App',
    category: 'Software & Apps',
    division: 'Software & Networking',
    previewType: 'app',
    headline: 'Biometric consumer and merchant mobile application with offline transaction caching for unstable network zones.',
    solution: 'Built with Flutter for high performance across Android and iOS devices, communicating via encrypted payloads to an API gateway.',
    technologies: ['Flutter', 'Dart', 'State Management', 'REST API', 'Figma UI/UX'],
    metrics: '4.8★ App Store Rating • Sub-second Transaction Times',
    accent: '#50C8FF',
    badgeText: 'Flutter Mobile App',
  },
  {
    id: 'audio-production-suite',
    title: 'Commercial Musical Jingles & Station Identity',
    category: 'Creative Media',
    division: 'Broadcast & AV Systems',
    previewType: 'video',
    headline: 'Custom acoustic branding, radio signatures, and voiceover audio mastering for regional marketing campaigns.',
    solution: 'Composed, recorded, and mixed original musical anthems meeting international broadcast loudness standards (EBU R128).',
    technologies: ['DAW Pro Tools', 'Mastering EQ', 'Voiceover Suite', 'Foley Sound'],
    metrics: 'EBU R128 Broadcast Compliant • 12 Jingles Produced',
    accent: '#34D399',
    badgeText: 'Studio Master Audio',
  },
]

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredItems = activeFilter === 'All'
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeFilter)

  return (
    <div id="portfolio" className="section-fade px-4 sm:px-6 md:px-8 py-20 md:py-28 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div>
          <div className="section-label mb-3">
            <span>◆</span>
            <span>PROVEN RESULTS &amp; CASE STUDIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text-primary)]">
            Our Work in the Field
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-xl mt-3 leading-relaxed">
            Real outcomes across software engineering, enterprise network installations, and broadcast productions.
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
                    ? 'bg-[var(--gold)] text-black shadow-lg font-extrabold'
                    : 'bg-[var(--bg-card)] text-[var(--text-muted)] border border-[var(--border-subtle)] hover:text-[var(--text-primary)]'
                }`}
              >
                {cat}
              </button>
            )
          })}
        </div>
      </div>

      {/* Showcase Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-[var(--border-gold)] transition-all"
            style={{
              borderTop: `3px solid ${item.accent}`,
            }}
          >
            <div>
              {/* Visual Simulated Viewport Header */}
              <div
                className="p-4 bg-[var(--bg-primary)] border-b border-[var(--border-subtle)]"
                style={{
                  background: 'linear-gradient(180deg, rgba(13,17,26,0.9) 0%, rgba(7,9,14,0.95) 100%)',
                }}
              >
                <div className="flex items-center justify-between text-[11px] font-mono mb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-white/20 inline-block" />
                    <span className="w-2 h-2 rounded-full bg-white/20 inline-block" />
                    <span className="w-2 h-2 rounded-full bg-white/20 inline-block" />
                  </div>
                  <span
                    className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded"
                    style={{
                      background: `${item.accent}15`,
                      color: item.accent,
                      border: `1px solid ${item.accent}30`,
                    }}
                  >
                    {item.badgeText}
                  </span>
                </div>

                {/* Simulated Preview Box */}
                <div className="h-28 rounded-lg bg-black/50 border border-white/5 p-3 flex flex-col justify-between font-mono text-[11px]">
                  {item.previewType === 'stream' && (
                    <>
                      <div className="flex items-center justify-between text-red-400 font-bold">
                        <span className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-red-500 pulse-dot" />
                          LIVE BROADCAST
                        </span>
                        <span className="text-white/60">1080p60</span>
                      </div>
                      <div className="text-center text-xs text-white font-sans font-bold">
                        {item.title}
                      </div>
                      <div className="flex items-center justify-between text-[10px] text-white/50">
                        <span>vMix SRT Switcher</span>
                        <span className="text-[var(--gold)]">Audio: Balanced OK</span>
                      </div>
                    </>
                  )}

                  {item.previewType === 'network' && (
                    <>
                      <div className="flex items-center justify-between text-blue-400">
                        <span>MikroTik RouterOS</span>
                        <span className="text-emerald-400">● 1.25 Gbps</span>
                      </div>
                      <div className="space-y-1 text-[10px] text-white/70">
                        <div>VLAN 10: Academic Core [Tagged]</div>
                        <div>VLAN 20: Hotspot Portal [1,400 users]</div>
                      </div>
                      <div className="text-[10px] text-emerald-400 font-bold">
                        QoS Dynamic Shaper Active (0% Loss)
                      </div>
                    </>
                  )}

                  {item.previewType === 'app' && (
                    <>
                      <div className="flex items-center justify-between text-yellow-400">
                        <span>Laravel 11 Cloud</span>
                        <span className="text-emerald-400">200 OK 12ms</span>
                      </div>
                      <div className="text-white/80 text-[10px] space-y-0.5">
                        <div>GET /api/v1/auth/session → Valid</div>
                        <div>Encrypted AES-256 Storage</div>
                      </div>
                      <div className="text-[10px] text-white/50">
                        Syncing 4,500+ Active Clients
                      </div>
                    </>
                  )}

                  {item.previewType === 'video' && (
                    <>
                      <div className="flex items-center justify-between text-purple-400">
                        <span>DaVinci Colorist Master</span>
                        <span className="text-white/60">ProRes 422 HQ</span>
                      </div>
                      <div className="text-center text-xs text-white font-sans font-bold">
                        Cinematic 4K Master Grade
                      </div>
                      <div className="flex items-center justify-between text-[10px] text-white/50">
                        <span>Timeline: 24.000 fps</span>
                        <span className="text-[var(--gold)]">LUT: Film Emulation</span>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <div className="text-[11px] font-mono text-[var(--text-dim)] uppercase tracking-wider mb-2">
                  {item.category} • {item.division}
                </div>

                <h3 className="text-lg font-extrabold text-[var(--text-primary)] mb-3 leading-snug group-hover:text-[var(--gold)] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-4">
                  {item.headline}
                </p>

                <div className="p-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] mb-5">
                  <div className="text-[10px] font-mono font-bold uppercase text-[var(--gold)] mb-1">
                    Delivered Solution
                  </div>
                  <div className="text-[11px] leading-relaxed text-[var(--text-muted)]">
                    {item.solution}
                  </div>
                </div>

                {/* Technology Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-primary)] text-[var(--text-dim)] border border-[var(--border-subtle)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Impact Metric Footer */}
            <div className="p-4 px-6 border-t border-[var(--border-subtle)] bg-[var(--bg-primary)] flex items-center justify-between">
              <div>
                <div className="text-[10px] font-mono text-[var(--text-dim)] uppercase">Outcome</div>
                <div className="text-xs font-bold" style={{ color: item.accent }}>
                  {item.metrics}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Conversion Banner */}
      <div
        className="glass-card p-8 sm:p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-[var(--border-gold)]"
      >
        <div>
          <span className="text-xs font-mono font-bold text-[var(--gold)] uppercase tracking-wider">
            Ready to Scope Your Project?
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--text-primary)] mt-1">
            Let's Engineer Your Solution
          </h3>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1">
            We review technical specifications, network requirements, or broadcast timelines with zero obligation.
          </p>
        </div>

        <button
          onClick={() => scrollTo('contact')}
          className="gold-glow-btn px-8 py-3.5 rounded-xl text-xs sm:text-sm font-bold flex-shrink-0 cursor-pointer"
        >
          Request Technical Assessment →
        </button>
      </div>
    </div>
  )
}
