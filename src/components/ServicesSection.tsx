import { useState } from 'react'
import { scrollTo } from '../utils'

interface ServiceDivision {
  id: string
  division: string
  title: string
  category: string
  tagline: string
  accent: string
  glow: string
  tags: string[]
  icon: JSX.Element
  services: {
    name: string
    description: string
    features: string[]
  }[]
}

const divisions: ServiceDivision[] = [
  {
    id: 'software-networking',
    division: '01',
    title: 'Software & Networking',
    category: 'Engineering & Infrastructure',
    tagline: 'Custom applications, mission-critical network engineering, and enterprise infrastructure audits.',
    accent: '#D4AF37',
    glow: 'rgba(212,175,55,0.12)',
    tags: ['Laravel', 'Flutter', 'React', 'MikroTik RouterOS', 'Bandwidth QoS', 'REST/GraphQL'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
    services: [
      {
        name: 'Custom Web & Mobile App Development',
        description: 'Bespoke web applications built on Laravel and cross-platform mobile apps using Flutter. Engineered for performance, security, and scalability.',
        features: ['Enterprise web portals & management dashboards', 'Native-feel iOS & Android apps (Flutter)', 'Robust API development & 3rd-party integrations', 'Database architecture & performance tuning'],
      },
      {
        name: 'Campus & Enterprise Network Engineering',
        description: 'Comprehensive network design, installation, and optimization. We specialize in robust MikroTik hotspot routing and structured traffic distribution.',
        features: ['MikroTik hotspot routing & captive portal gateways', 'Bandwidth management, QoS, and fair-use traffic shaping', 'Secure link architecture, VLAN segmentation, and VPNs', 'Wireless backhaul & campus fiber infrastructure'],
      },
      {
        name: 'Infrastructure Audits & Assessments',
        description: 'In-depth diagnostic audits of existing IT environments to identify bottlenecks, security vulnerabilities, and reliability risks.',
        features: ['Network throughput & latency bottleneck analysis', 'Security posture & firewall hardening reviews', 'Hardware lifecycle & capacity planning', 'Documented remediation roadmaps'],
      },
    ],
  },
  {
    id: 'broadcast-av',
    division: '02',
    title: 'Broadcast & AV Systems',
    category: 'Live Production & Audio Engineering',
    tagline: 'Broadcast-grade live streaming, multi-camera setups, and crystal-clear audio engineering.',
    accent: '#50C8FF',
    glow: 'rgba(80,200,255,0.12)',
    tags: ['vMix', 'Hardware Encoders', 'SRT/RTMP', 'Dante Audio', 'Multi-Camera', 'Sound Design'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 7l-7 5 7 5V7z" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
    services: [
      {
        name: 'Live-Streaming Production & Multicam',
        description: 'End-to-end multi-camera production for conferences, institutional ceremonies, concerts, and hybrid events.',
        features: ['Multi-camera switching & live director control', 'Real-time graphic overlays, lower-thirds & live scoreboards', 'Simultaneous multi-destination streaming (YouTube, social, custom CDNs)', 'Dedicated bonding routers for failover network redundancy'],
      },
      {
        name: 'Hardware Encoding & Low-Latency Streaming',
        description: 'Professional video encoding pipelines that ensure zero dropouts and pristine 1080p60 / 4K fidelity.',
        features: ['Ultra-low-latency SRT and RTMP video delivery', 'Dedicated rackmount and portable hardware encoders', 'Remote guest feeds and live video callers', 'ISO recording of each camera angle for post-production'],
      },
      {
        name: 'Sound Engineering & Audio Production',
        description: 'From live event PA mixing to custom musical jingles and commercial voiceover mastering.',
        features: ['vMix audio bus routing & digital console management', 'Acoustic tuning, EQ balancing & feedback suppression', 'Custom radio/TV jingles, brand anthems & sound design', 'Commercial podcast & voiceover audio mastering'],
      },
    ],
  },
  {
    id: 'creative-media',
    division: '03',
    title: 'Creative Media & Design',
    category: 'Visual Storytelling & Brand Identity',
    tagline: 'High-impact videography, photography, motion design, and user interface systems.',
    accent: '#A78BFA',
    glow: 'rgba(167,139,250,0.12)',
    tags: ['DaVinci Resolve', '4K Cinematography', 'Figma UI/UX', 'Motion Graphics', 'Brand Identity'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
    services: [
      {
        name: 'Professional Video & Photo Coverage',
        description: 'Cinematic visual documentation for institutions, brands, corporate milestones, and private functions.',
        features: ['4K cinematic camera packages with prime lenses', 'Aerial drone footage by certified operators', 'High-resolution corporate and architectural photography', 'Documentary and promotional event highlight reels'],
      },
      {
        name: 'Creative Video Editing & Post-Production',
        description: 'Transforming raw footage into polished, engaging visual narratives that captivate audiences.',
        features: ['Color grading in DaVinci Resolve with film-emulation palettes', 'Custom motion graphics, intros & animated kinetic typography', 'Short-form social cuts (Reels, TikTok) and long-form documentaries', 'Seamless audio sweetening, foley & music scoring'],
      },
      {
        name: 'Graphics & UI/UX Design',
        description: 'Compelling brand aesthetics and digital interfaces designed with human-centric ergonomics.',
        features: ['Complete visual brand identity systems and guidelines', 'Wireframing, interactive prototyping & design systems in Figma', 'Marketing collaterals, pitch decks, and digital banners', 'UI/UX redesigns for web and mobile platforms'],
      },
    ],
  },
]

export default function ServicesSection() {
  const [selectedDivision, setSelectedDivision] = useState<string>(divisions[0].id)

  const activeDiv = divisions.find((d) => d.id === selectedDivision) || divisions[0]

  return (
    <div id="services-content" className="px-4 sm:px-6 md:px-8 py-12 md:py-16" style={{ maxWidth: 1280, margin: '0 auto' }}>
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="section-label" style={{ marginBottom: 12 }}>◆ &nbsp; Comprehensive Capabilities</div>
        <h2 style={{ fontSize: 'clamp(1.8rem, 2.6vw, 2.6rem)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text-primary)', margin: '0 0 14px' }}>
          Built for Impact. Engineered to Last.
        </h2>
        <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.7 }}>
          Our services span three interconnected disciplines. We can handle a single specialized task or coordinate a cross-division turnkey project.
        </p>
      </div>

      {/* Division Selector Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
        {divisions.map((div) => {
          const isSelected = div.id === selectedDivision
          return (
            <button
              key={div.id}
              onClick={() => setSelectedDivision(div.id)}
              className="px-5 py-3 rounded-xl font-semibold text-sm transition-all flex items-center gap-3 cursor-pointer"
              style={{
                background: isSelected ? div.glow : 'var(--bg-card)',
                border: isSelected ? `2px solid ${div.accent}` : '1px solid var(--border-subtle)',
                color: isSelected ? div.accent : 'var(--text-muted)',
                boxShadow: isSelected ? `0 4px 20px ${div.glow}` : 'none',
              }}
            >
              <div style={{ color: isSelected ? div.accent : 'var(--text-dim)' }}>
                {div.icon}
              </div>
              <div className="text-left">
                <div style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.08em', opacity: 0.8 }}>Division {div.division}</div>
                <div style={{ fontSize: '0.9rem', fontWeight: 700 }}>{div.title}</div>
              </div>
            </button>
          )
        })}
      </div>

      {/* Active Division Showcase */}
      <div
        className="glass-card p-6 sm:p-8 md:p-10 rounded-2xl mb-12"
        style={{
          borderTop: `4px solid ${activeDiv.accent}`,
          background: 'var(--bg-card)',
        }}
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-[var(--border-subtle)] mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: activeDiv.accent, letterSpacing: '0.1em' }}>
                DIVISION {activeDiv.division}
              </span>
              <span style={{ color: 'var(--border-subtle)' }}>•</span>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', fontWeight: 600 }}>
                {activeDiv.category}
              </span>
            </div>
            <h3 style={{ fontSize: 'clamp(1.5rem, 2.2vw, 2.2rem)', fontWeight: 800, color: 'var(--text-primary)', margin: '0 0 10px' }}>
              {activeDiv.title}
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', maxWidth: 650, margin: 0, lineHeight: 1.7 }}>
              {activeDiv.tagline}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 lg:max-w-xs">
            {activeDiv.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  padding: '4px 10px',
                  borderRadius: 6,
                  background: 'var(--bg-surface)',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Detailed Service Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activeDiv.services.map((svc, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl flex flex-col justify-between"
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <div>
                <div style={{ fontSize: '0.72rem', fontWeight: 800, color: activeDiv.accent, marginBottom: 8 }}>
                  MODULE 0{idx + 1}
                </div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 10, lineHeight: 1.35 }}>
                  {svc.name}
                </h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: 16 }}>
                  {svc.description}
                </p>
                <div className="space-y-2 mb-6">
                  {svc.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs" style={{ color: 'var(--text-primary)', lineHeight: 1.5 }}>
                      <span style={{ color: activeDiv.accent, fontWeight: 800, marginTop: -1 }}>✓</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => scrollTo('contact')}
                className="w-full py-2.5 px-4 rounded-lg text-xs font-bold transition-all text-center cursor-pointer"
                style={{
                  background: 'transparent',
                  border: `1px solid ${activeDiv.accent}66`,
                  color: activeDiv.accent,
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget
                  el.style.background = activeDiv.accent
                  el.style.color = '#000'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.background = 'transparent'
                  el.style.color = activeDiv.accent
                }}
              >
                Inquire About This Service →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
