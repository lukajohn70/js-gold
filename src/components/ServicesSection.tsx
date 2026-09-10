import { useState } from 'react'
import { scrollTo } from '../utils'

interface ServiceDivision {
  id: string
  division: string
  title: string
  category: string
  tagline: string
  image: string
  accent: string
  tags: string[]
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
    tagline: 'Custom web and mobile applications engineered for high concurrency, paired with campus-wide MikroTik network routing.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1000&auto=format&fit=crop&q=80',
    accent: '#3B82F6',
    tags: ['React', 'Next.js', 'Laravel', 'Flutter', 'MikroTik RouterOS', 'Bandwidth QoS', 'REST APIs'],
    services: [
      {
        name: 'Custom Web & Mobile App Development',
        description: 'Bespoke web applications built on React and Laravel, paired with cross-platform mobile apps using Flutter. Engineered for speed, security, and scalability.',
        features: [
          'Enterprise web portals & modern dashboards (React & Next.js)',
          'Native-feel iOS & Android apps (Flutter & Dart)',
          'Robust API development & 3rd-party integrations',
          'Database architecture & performance caching',
        ],
      },
      {
        name: 'Campus & Enterprise Network Engineering',
        description: 'Comprehensive network design, installation, and optimization. We specialize in robust MikroTik hotspot routing and structured traffic distribution.',
        features: [
          'MikroTik hotspot routing & captive portal gateways',
          'Bandwidth management, QoS & fair-use traffic shaping',
          'Secure link architecture, VLAN segmentation & VPNs',
          'Wireless backhaul & campus fiber infrastructure',
        ],
      },
      {
        name: 'Infrastructure Audits & Security Assessments',
        description: 'In-depth diagnostic audits of existing IT environments to identify bottlenecks, security vulnerabilities, and reliability risks.',
        features: [
          'Network throughput & latency bottleneck analysis',
          'Security posture & firewall hardening reviews',
          'Hardware lifecycle & capacity planning',
          'Documented remediation blueprints with cost estimates',
        ],
      },
    ],
  },
  {
    id: 'broadcast-av',
    division: '02',
    title: 'Broadcast & AV Systems',
    category: 'Live Production & Sound',
    tagline: 'Broadcast-grade live streaming, multi-camera setups, hardware encoding rigs, and crystal-clear sound engineering.',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1000&auto=format&fit=crop&q=80',
    accent: '#D97706',
    tags: ['vMix 4K Pro', 'Hardware Encoders', 'SRT / RTMP', 'Dante AoIP', 'Multicam Production', 'Sound Design'],
    services: [
      {
        name: 'Live-Streaming Production & Multicam',
        description: 'End-to-end multi-camera production for conferences, institutional ceremonies, concerts, and hybrid events.',
        features: [
          'Multi-camera switching & live director control',
          'Real-time graphic overlays, lower-thirds & live scoreboards',
          'Multi-destination simultaneous streaming (YouTube, social, CDNs)',
          'Dedicated bonding routers for failover internet redundancy',
        ],
      },
      {
        name: 'Hardware Encoding & Low-Latency Streaming',
        description: 'Professional video encoding pipelines that ensure zero dropouts and pristine 1080p60 / 4K fidelity.',
        features: [
          'Ultra-low-latency SRT and RTMP video delivery',
          'Dedicated rackmount and portable hardware encoders',
          'Remote guest feeds and live interactive video callers',
          'ISO recording of each camera angle for post-production',
        ],
      },
      {
        name: 'Sound Engineering & Audio Production',
        description: 'From live event PA mixing to custom musical jingles and commercial voiceover mastering.',
        features: [
          'vMix audio bus routing & digital console management',
          'Acoustic tuning, EQ balancing & feedback suppression',
          'Custom radio/TV jingles, brand anthems & sound design',
          'Commercial podcast & voiceover audio mastering',
        ],
      },
    ],
  },
  {
    id: 'creative-media',
    division: '03',
    title: 'Creative Media & Design',
    category: 'Visual Storytelling & Branding',
    tagline: 'High-impact videography, photography, motion design, DaVinci Resolve color grading, and user interface systems.',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1000&auto=format&fit=crop&q=80',
    accent: '#8B5CF6',
    tags: ['4K Cinematography', 'DaVinci Resolve', 'After Effects', 'Figma UI/UX', 'Drone Aerials', 'Brand Systems'],
    services: [
      {
        name: 'Professional Video & Photo Coverage',
        description: 'Cinematic visual documentation for institutions, brands, corporate milestones, and private functions.',
        features: [
          '4K cinematic camera packages with prime lenses',
          'Aerial drone footage by certified operators',
          'High-resolution corporate and architectural photography',
          'Documentary and promotional event highlight reels',
        ],
      },
      {
        name: 'Creative Video Editing & Post-Production',
        description: 'Transforming raw footage into polished, engaging visual narratives that captivate audiences.',
        features: [
          'Color grading in DaVinci Resolve with film-emulation palettes',
          'Custom motion graphics, intros & kinetic typography',
          'Short-form social cuts (Reels, TikTok) and long-form documentaries',
          'Seamless audio sweetening, foley & music scoring',
        ],
      },
      {
        name: 'Graphics & UI/UX Design',
        description: 'Compelling brand aesthetics and digital interfaces designed with human-centric ergonomics.',
        features: [
          'Complete visual brand identity systems and guidelines',
          'Wireframing, interactive prototyping & design systems in Figma',
          'Marketing collaterals, pitch decks, and digital banners',
          'UI/UX redesigns for web and mobile platforms',
        ],
      },
    ],
  },
]

export default function ServicesSection() {
  const [selectedDivision, setSelectedDivision] = useState<string>(divisions[0].id)
  const activeDiv = divisions.find((d) => d.id === selectedDivision) || divisions[0]

  return (
    <section id="services-content" className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="section-label mb-3">
          <span>◆</span>
          <span>COMPREHENSIVE CAPABILITIES</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900">
          Built for Impact. Engineered to Last.
        </h2>
        <p className="text-base text-slate-600 mt-3 leading-relaxed">
          Our services span three interconnected disciplines. We can handle a single specialized task or coordinate a cross-division turnkey project.
        </p>
      </div>

      {/* Division Selector Tabs (Learnerium Style) */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
        {divisions.map((div) => {
          const isSelected = div.id === selectedDivision
          return (
            <button
              key={div.id}
              onClick={() => setSelectedDivision(div.id)}
              className={`px-5 py-3 rounded-2xl font-extrabold text-sm transition-all cursor-pointer flex items-center gap-2.5 shadow-sm ${
                isSelected
                  ? 'bg-slate-900 text-white shadow-md scale-105'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900'
              }`}
            >
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ background: div.accent }}
              />
              <span>Division {div.division}: {div.title}</span>
            </button>
          )
        })}
      </div>

      {/* Active Division Photographic Showcase Card */}
      <div className="pro-card bg-white p-6 sm:p-10 rounded-3xl mb-12 overflow-hidden">
        {/* Banner with Photographic Header & Scrim */}
        <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden mb-8 bg-slate-900 shadow-md">
          <img
            src={activeDiv.image}
            alt={activeDiv.title}
            className="w-full h-full object-cover object-center"
            onError={(e) => { e.currentTarget.style.display = 'none' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent pointer-events-none" />

          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-amber-400 bg-amber-500/20 border border-amber-400/30 px-3 py-1 rounded-full">
              Division {activeDiv.division} &bull; {activeDiv.category}
            </span>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight mt-3">
              {activeDiv.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 mt-1 max-w-2xl leading-relaxed">
              {activeDiv.tagline}
            </p>
          </div>
        </div>

        {/* Tech Stack Pills Strip */}
        <div className="flex flex-wrap items-center gap-2 mb-8 pb-6 border-b border-slate-100">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2">
            Technology Stack:
          </span>
          {activeDiv.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-bold px-3 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* 3 Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activeDiv.services.map((svc, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between"
            >
              <div>
                <div
                  className="text-xs font-black uppercase tracking-wider mb-2"
                  style={{ color: activeDiv.accent }}
                >
                  MODULE 0{idx + 1}
                </div>

                <h4 className="text-base font-extrabold text-slate-900 mb-2 leading-snug">
                  {svc.name}
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed mb-5">
                  {svc.description}
                </p>

                <div className="space-y-2 mb-6">
                  {svc.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                      <span className="text-amber-600 font-black mt-0.5">✓</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => scrollTo('contact')}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all text-center cursor-pointer border border-slate-300 hover:bg-slate-900 hover:text-white hover:border-slate-900 bg-white text-slate-800 shadow-sm"
              >
                Inquire About This Module →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
