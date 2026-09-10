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
    headline: 'High-density hotspot routing across 14 campus blocks supporting 6,000+ simultaneous devices.',
    solution: 'Engineered MikroTik core routing with captive portal User-Manager authentication, dynamic QoS bandwidth traffic shaping, and redundant fiber links.',
    technologies: ['MikroTik RouterOS', 'VLAN Segmentation', 'User-Manager', 'QoS Queue Trees', 'Fibre Backhaul'],
    metrics: '99.8% Network Uptime • 65% Bandwidth Waste Reduction',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
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
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
  },
  {
    id: 'enterprise-erp',
    title: 'Institutional Operations & Portal Ecosystem',
    category: 'Software & Apps',
    division: 'Software & Networking',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    headline: 'Centralized administrative web portal, automated billing verification, and encrypted student records system.',
    solution: 'Engineered modular Laravel application with role-based access control, responsive dashboards, and real-time payment reconciliation APIs.',
    technologies: ['Laravel 11', 'React', 'MySQL', 'REST API', 'Tailwind CSS'],
    metrics: '4,500+ Daily Active Users • 75% Faster Processing',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
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
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
  },
  {
    id: 'fintech-mobile-app',
    title: 'Cross-Platform Financial Services Mobile App',
    category: 'Software & Apps',
    division: 'Software & Networking',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80',
    headline: 'Biometric consumer and merchant mobile application with offline transaction caching for unstable network zones.',
    solution: 'Built with React Native & Flutter for high performance across Android and iOS devices, communicating via encrypted payloads to an API gateway.',
    technologies: ['React Native', 'Flutter', 'Dart', 'REST API', 'Figma UI/UX'],
    metrics: '4.8★ App Store Rating • Sub-second Transaction Times',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
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
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
  },
]

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredItems = activeFilter === 'All'
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeFilter)

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-slate-50/60 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="section-label mb-3">
              <span>◆</span>
              <span>VERIFIED CASE STUDIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900">
              Featured Outcomes
            </h2>
            <p className="text-base text-slate-600 max-w-xl mt-3 leading-relaxed">
              Explore how our engineering precision and creative media craftsmanship solve complex operational challenges in the field.
            </p>
          </div>

          {/* Filter Chips (Brandstore Style) */}
          <div className="flex flex-wrap items-center gap-2 self-start md:self-auto">
            {filterCategories.map((cat) => {
              const isActive = activeFilter === cat
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              )
            })}
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="pro-card group overflow-hidden flex flex-col justify-between bg-white"
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
                  <h3 className="text-lg font-extrabold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {item.headline}
                  </p>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 leading-relaxed mb-5">
                    <strong className="text-slate-900">Delivered: </strong>
                    {item.solution}
                  </div>

                  {/* Technology Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Outcome Banner */}
              <div className="p-4 px-6 bg-slate-50 border-t border-slate-100">
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Measured Outcome
                </div>
                <div className="text-xs font-black text-emerald-600 mt-0.5">
                  {item.metrics}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner (Brandstore Summer Offer Style) */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400">
              FREE TECHNICAL ASSESSMENT
            </span>
            <h3 className="text-2xl sm:text-3xl font-black mt-2 leading-tight">
              Have a Project in Mind?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-lg">
              We review your existing infrastructure, application requirements, or broadcast timelines with zero obligation.
            </p>
          </div>

          <button
            onClick={() => scrollTo('contact')}
            className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-xl text-sm font-bold shadow-lg shadow-amber-500/30 hover:scale-105 transition-all cursor-pointer whitespace-nowrap"
          >
            Request Free Assessment →
          </button>
        </div>

      </div>
    </section>
  )
}
