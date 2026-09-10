import { useState } from 'react'
import { scrollTo } from '../utils'

interface PortfolioItem {
  id: string
  title: string
  category: string
  division: string
  description: string
  challenge: string
  solution: string
  technologies: string[]
  metrics: string
  accent: string
}

const filterCategories = [
  'All',
  'Software & Web',
  'Mobile Apps',
  'Network Deployments',
  'Broadcast & Live',
  'Creative Media',
]

const portfolioItems: PortfolioItem[] = [
  {
    id: 'campus-network',
    title: 'Enterprise Campus Wi-Fi & Hotspot Infrastructure',
    category: 'Network Deployments',
    division: 'Software & Networking',
    description: 'Turnkey campus network overhaul supporting 5,000+ simultaneous student and faculty devices with bandwidth management.',
    challenge: 'Fragmented legacy routers, unmanaged bandwidth hogs, and inconsistent coverage across multi-building grounds.',
    solution: 'Engineered a MikroTik core routing topology with captive portal user authentication, dynamic traffic shaping, and VLAN isolation.',
    technologies: ['MikroTik RouterOS', 'VLAN Segmentation', 'User-Manager', 'QoS Shaping', 'Fibre Uplinks'],
    metrics: '99.8% Network Uptime · 65% Bandwidth Efficiency Gain',
    accent: '#50C8FF',
  },
  {
    id: 'enterprise-erp',
    title: 'Institutional Operations & Portal System',
    category: 'Software & Web',
    division: 'Software & Networking',
    description: 'Centralized web portal and workflow automation platform for institutional administration, record management, and secure payments.',
    challenge: 'Disjointed paper-driven departmental operations causing multi-day delays and accounting discrepancies.',
    solution: 'Designed and deployed a responsive Laravel web platform with modular access control, encrypted audits, and instant billing verification.',
    technologies: ['Laravel', 'React', 'MySQL', 'RESTful APIs', 'Tailwind CSS'],
    metrics: '4,000+ Daily Active Users · 75% Faster Processing',
    accent: '#D4AF37',
  },
  {
    id: 'hybrid-convocation-stream',
    title: 'Major Convocation & Multi-Camera Broadcast',
    category: 'Broadcast & Live',
    division: 'Broadcast & AV Systems',
    description: 'Four-hour live multi-camera broadcast streamed concurrently to physical venue overflow displays and global online audiences.',
    challenge: 'High-stakes live environment requiring zero dropouts, synchronized director switching, and crystal-clear sound reproduction.',
    solution: 'Configured a 6-camera vMix production rig with hardware encoding, digital audio console routing, and bonded failover streaming pipelines.',
    technologies: ['vMix', 'Blackmagic Design', 'Dante Audio', 'SRT / RTMP', 'Hardware Encoders'],
    metrics: '15,000+ Concurrent Viewers · 0% Stream Latency Lag',
    accent: '#A78BFA',
  },
  {
    id: 'fintech-mobile-app',
    title: 'Cross-Platform Financial Services Mobile App',
    category: 'Mobile Apps',
    division: 'Software & Networking',
    description: 'Consumer and agent mobile application featuring biometric login, instant transaction routing, and offline transaction caching.',
    challenge: 'Need for high reliability in low-bandwidth network environments across varied Android and iOS device tiers.',
    solution: 'Engineered an offline-first Flutter application coupled to an API gateway with end-to-end payload encryption and intuitive UX.',
    technologies: ['Flutter', 'Dart', 'State Management', 'REST API', 'Figma UI/UX'],
    metrics: '4.8★ App Store Rating · Sub-second Transaction Speed',
    accent: '#50C8FF',
  },
  {
    id: 'brand-film-campaign',
    title: 'Corporate Brand Film & Media Identity',
    category: 'Creative Media',
    division: 'Creative Media',
    description: 'Cinematic corporate documentary highlighting operational milestones, coupled with a comprehensive digital visual identity package.',
    challenge: 'Communicating a complex technical vision in an engaging, cinematic manner for prospective international partners.',
    solution: 'Filmed on 4K cinema cameras with aerial cinematography, graded in DaVinci Resolve, complemented by motion graphics and custom sound design.',
    technologies: ['4K Cinematography', 'DaVinci Resolve', 'After Effects', 'Figma', 'Sound Mastering'],
    metrics: 'Over 500,000 Digital Views · Aired Nationally',
    accent: '#34D399',
  },
  {
    id: 'audio-production-suite',
    title: 'Commercial Audio Production & Station Sound',
    category: 'Creative Media',
    division: 'Broadcast & AV Systems',
    description: 'Custom musical branding, station jingles, and pristine voiceover mastering for broadcast and corporate marketing campaigns.',
    challenge: 'Crafting a memorable acoustic signature meeting broadcast loudness standards (LUFS) across multiple distribution mediums.',
    solution: 'Composed, tracked, and mastered full musical compositions, radio IDs, and podcast series using digital audio workstations.',
    technologies: ['Pro Tools / DAW', 'Digital Master EQ', 'Sound Design', 'Voiceover Suite'],
    metrics: 'Broadcast EBU R128 Compliant · 10+ Radio Jingles Produced',
    accent: '#A78BFA',
  },
]

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredItems = activeFilter === 'All'
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeFilter)

  return (
    <div className="section-fade px-4 sm:px-6 md:px-8 py-20" style={{ maxWidth: 1280, margin: '0 auto' }}>
      <hr className="razor-line" style={{ marginBottom: 64 }} />

      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="section-label" style={{ marginBottom: 12 }}>◆ &nbsp; Featured Work &amp; Case Studies</div>
        <h2 style={{ fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.025em', color: 'var(--text-primary)', margin: '0 0 16px', lineHeight: 1.2 }}>
          Proven Outcomes Across{' '}
          <span style={{
            background: 'linear-gradient(135deg, var(--gold), var(--gold-light))',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>
            Every Division
          </span>
        </h2>
        <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.7, margin: 0 }}>
          Explore how our engineering precision, audiovisual know-how, and creative media craftsmanship solve real-world operational challenges.
        </p>
      </div>

      {/* Filter Chips */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {filterCategories.map((cat) => {
          const isActive = activeFilter === cat
          return (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className="px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer"
              style={{
                background: isActive ? 'var(--gold)' : 'var(--bg-card)',
                color: isActive ? '#000000' : 'var(--text-muted)',
                border: isActive ? '1px solid var(--gold)' : '1px solid var(--border-subtle)',
                boxShadow: isActive ? '0 0 12px var(--gold-glow)' : 'none',
              }}
            >
              {cat}
            </button>
          )
        })}
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="glass-card flex flex-col justify-between"
            style={{
              padding: '28px 24px',
              borderRadius: 14,
              borderTop: `3px solid ${item.accent}`,
            }}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span
                  style={{
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: item.accent,
                    background: `${item.accent}14`,
                    padding: '3px 8px',
                    borderRadius: 4,
                  }}
                >
                  {item.division}
                </span>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)', fontWeight: 600 }}>
                  {item.category}
                </span>
              </div>

              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: 12, lineHeight: 1.35 }}>
                {item.title}
              </h3>

              <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: 16 }}>
                {item.description}
              </p>

              <div className="p-3 rounded-lg mb-4 space-y-2" style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ fontSize: '0.74rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>
                  <strong style={{ color: item.accent }}>Challenge:</strong> {item.challenge}
                </div>
                <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  <strong style={{ color: 'var(--text-primary)' }}>Solution:</strong> {item.solution}
                </div>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontSize: '0.68rem',
                      fontWeight: 600,
                      padding: '2px 7px',
                      borderRadius: 4,
                      background: 'var(--bg-surface)',
                      color: 'var(--text-dim)',
                      border: '1px solid var(--border-subtle)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Impact Metric & Footer */}
            <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
              <div>
                <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', color: 'var(--text-dim)', letterSpacing: '0.05em' }}>Key Result</div>
                <div style={{ fontSize: '0.76rem', fontWeight: 700, color: item.accent }}>
                  {item.metrics}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA Banner */}
      <div
        className="glass-card p-8 md:p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6"
        style={{ border: '1px solid var(--border-gold)', background: 'var(--bg-card)' }}
      >
        <div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: 6 }}>
            Have a project in mind for our engineering or creative teams?
          </h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
            We provide free initial technical assessments and clear scopes of work.
          </p>
        </div>
        <button
          onClick={() => scrollTo('contact')}
          className="gold-glow-btn flex-shrink-0"
          style={{ padding: '12px 28px', borderRadius: 8, fontSize: '0.82rem', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
        >
          Request Technical Assessment →
        </button>
      </div>
    </div>
  )
}
