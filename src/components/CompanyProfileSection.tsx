import { useState } from 'react'
import { scrollTo } from '../utils'

const teamMembers = [
  {
    name: 'Technical Director & Lead Architect',
    role: 'Chief Technology Direction',
    specialty: 'Enterprise Software & Cloud Architecture',
    bio: 'Oversees full-stack architectures, high-concurrency cloud infrastructure, and mission-critical software systems across West Africa with 5+ years of verified production delivery.',
    avatar: 'TD',
    tags: ['React 19', 'Laravel 11', 'Flutter 3', 'PostgreSQL', 'Docker'],
    accent: 'border-amber-500/30 text-amber-500 bg-amber-500/10',
  },
  {
    name: 'Lead Network Engineer',
    role: 'Head of Infrastructure & Security',
    specialty: 'MikroTik RouterOS & Campus Fiber Backbones',
    bio: 'Specialist in campus-scale captive portal routing, BGP peering, PCQ bandwidth shaping, and zero-trust perimeter security for institutions and corporate networks.',
    avatar: 'NE',
    tags: ['MikroTik RouterOS', 'CCR2004 10G', 'QoS Queue Trees', 'IPsec VPN', 'Fiber Splice'],
    accent: 'border-blue-500/30 text-blue-500 bg-blue-500/10',
  },
  {
    name: 'Head of Broadcast Production',
    role: 'Chief AV & Live Stream Engineer',
    specialty: 'vMix Multicam & Dante AoIP Protocols',
    bio: 'Directs multi-camera production rigs, low-latency SRT/RTMP pipelines, multi-WAN cellular bonding, and stage line-array acoustic balancing.',
    avatar: 'BP',
    tags: ['vMix 4K Pro', 'Dante AoIP', 'Cellular Bonding', 'Sony FX6', 'NDI Protocols'],
    accent: 'border-purple-500/30 text-purple-500 bg-purple-500/10',
  },
  {
    name: 'Creative Media Director',
    role: 'Visual Storyteller & Studio Lead',
    specialty: '4K Cinematography & Acoustic Branding',
    bio: 'Leads commercial cinematography, original musical jingle composition, DaVinci Resolve film color science, and high-conversion UI/UX design systems.',
    avatar: 'CD',
    tags: ['Pro Tools DAW', 'DaVinci Resolve', 'Commercial Jingles', 'ACES Color', 'Figma UI/UX'],
    accent: 'border-emerald-500/30 text-emerald-500 bg-emerald-500/10',
  },
]

const values = [
  {
    title: 'Excellence',
    desc: 'Every network packet, line of code, and broadcast frame adheres to strict commercial standards.',
    icon: '◈',
    color: 'bg-amber-500/10 text-amber-600 border border-amber-500/20',
  },
  {
    title: 'Integrity',
    desc: 'Transparent deliverables, fixed timelines, and honest technical assessments without hidden fee traps.',
    icon: '▣',
    color: 'bg-blue-500/10 text-blue-600 border border-blue-500/20',
  },
  {
    title: 'Reliability',
    desc: 'Redundant hardware failovers and contractual SLAs engineered for zero unexpected business downtime.',
    icon: '⬡',
    color: 'bg-emerald-500/10 text-emerald-600 border border-emerald-500/20',
  },
  {
    title: 'Partnership',
    desc: 'Proactive support, staff training, and ongoing architectural advisory are standard in every engagement.',
    icon: '▦',
    color: 'bg-purple-500/10 text-purple-600 border border-purple-500/20',
  },
]

const comparison = [
  {
    feature: 'Contractual Accountability',
    fragmented: '3 different contractors pointing fingers when a system fails',
    jsgold: 'Single accountable agency delivering technology, networking & media',
  },
  {
    feature: 'Live Broadcast Reliability',
    fragmented: 'Media crew suffers because event venue network drops or throttles',
    jsgold: 'Our certified network engineers deploy the dedicated bonded pipe for our broadcast crew',
  },
  {
    feature: 'Software & Visual Design',
    fragmented: 'Developers build clunky portals; graphic designers build files that cannot be coded',
    jsgold: 'UI/UX designers collaborate directly with React, Laravel & Flutter engineers',
  },
  {
    feature: 'Overhead & Project Velocity',
    fragmented: 'Multiple retainer invoices, misaligned project managers, and conflicting schedules',
    jsgold: 'Unified milestone roadmap, shared repositories, and optimized capital expenditure',
  },
]

export default function CompanyProfileSection() {
  const [activeTab, setActiveTab] = useState<'triad' | 'fragmented'>('triad')

  return (
    <section id="about" className="py-20 md:py-28 bg-[var(--bg-secondary)] border-y border-[var(--border-subtle)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20 mb-3 shadow-xs">
            <span>◆</span>
            <span>ABOUT JS-GOLD DIGITAL WORLD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[var(--text-primary)] leading-tight">
            Engineering Excellence Across{' '}
            <span className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">
              Technology &amp; Media.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-muted)] mt-4 leading-relaxed max-w-2xl">
            Founded on the principle that ambitious organizations deserve enterprise-grade technical precision paired with world-class creative storytelling — delivered by one unified powerhouse.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="p-8 sm:p-10 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-subtle)] shadow-sm relative overflow-hidden group hover:border-amber-500/40 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center font-black text-xl mb-6 shadow-md shadow-amber-500/20">
              🎯
            </div>
            <div className="text-xs font-black uppercase tracking-widest text-amber-600 mb-2">
              OUR MISSION
            </div>
            <h3 className="text-2xl font-extrabold text-[var(--text-primary)] mb-4">
              Engineering Resilient Digital Systems
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
              To deliver resilient campus networks, high-concurrency software platforms in React &amp; Laravel, and zero-dropout live broadcast productions that empower institutions, enterprises, and creators to operate with total confidence.
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-subtle)] shadow-sm relative overflow-hidden group hover:border-blue-500/40 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-black text-xl mb-6 shadow-md shadow-blue-500/20">
              🔭
            </div>
            <div className="text-xs font-black uppercase tracking-widest text-blue-600 mb-2">
              OUR VISION
            </div>
            <h3 className="text-2xl font-extrabold text-[var(--text-primary)] mb-4">
              West Africa's Benchmark for Unified Delivery
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
              To stand as the foremost multidisciplinary technology and broadcast agency in West Africa — celebrated for uncompromised engineering integrity, verified uptime standards, and measurable institutional impact.
            </p>
          </div>
        </div>

        {/* The Unified Agency Architecture Engine */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-subtle)] shadow-md mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-amber-600">
                ARCHITECTURAL ENGINE
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[var(--text-primary)] mt-1">
                The Unified Triad Advantage
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1 max-w-xl">
                Compare the chaotic traditional approach of managing 3 isolated contractors versus the seamless JS-GOLD synchronized ecosystem.
              </p>
            </div>

            {/* Toggle Tab */}
            <div className="flex items-center gap-1 bg-[var(--bg-secondary)] p-1.5 rounded-xl border border-[var(--border-subtle)]">
              <button
                onClick={() => setActiveTab('triad')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'triad'
                    ? 'bg-amber-500 text-slate-950 shadow-sm'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                ✨ The JS-GOLD Triad
              </button>
              <button
                onClick={() => setActiveTab('fragmented')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'fragmented'
                    ? 'bg-red-500 text-white shadow-sm'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                ✕ Traditional Disconnected Vendors
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {comparison.map((item, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl border transition-all duration-300 space-y-3 ${
                  activeTab === 'triad'
                    ? 'bg-emerald-500/5 border-emerald-500/20'
                    : 'bg-red-500/5 border-red-500/20'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase text-[var(--text-primary)] tracking-wider">
                    {item.feature}
                  </span>
                  <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border ${
                    activeTab === 'triad'
                      ? 'text-emerald-600 bg-emerald-500/10 border-emerald-500/20'
                      : 'text-red-500 bg-red-500/10 border-red-500/20'
                  }`}>
                    {activeTab === 'triad' ? 'JS-GOLD Triad' : 'Disconnected Vendor Trap'}
                  </span>
                </div>

                {activeTab === 'triad' ? (
                  <div className="text-xs sm:text-sm font-bold text-[var(--text-primary)] flex items-start gap-2">
                    <span className="text-amber-600 font-black mt-0.5">✓</span>
                    <span>{item.jsgold}</span>
                  </div>
                ) : (
                  <div className="text-xs text-red-500 flex items-start gap-2">
                    <span className="font-black mt-0.5">✕</span>
                    <span>{item.fragmented}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-amber-600">
              GUIDING PRINCIPLES
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-[var(--text-primary)] mt-1">
              Our Operational Values
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-subtle)] text-center hover:border-amber-500/40 hover:shadow-lg transition-all">
                <div className={`w-12 h-12 rounded-2xl mx-auto flex items-center justify-center font-black text-lg mb-4 ${v.color}`}>
                  {v.icon}
                </div>
                <h4 className="text-base font-extrabold text-[var(--text-primary)] mb-2">
                  {v.title}
                </h4>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Team Spotlight */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-950 text-white border border-slate-800 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-amber-400">
                DISCIPLINE LEADERSHIP
              </span>
              <h3 className="text-2xl sm:text-3xl font-black mt-1">
                Multidisciplinary Talent Dossier
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md">
              Senior software architects, certified RouterOS engineers, and broadcast media directors working under one roof.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between hover:border-amber-500/40 transition-all">
                <div>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm mb-4 border ${member.accent}`}>
                    {member.avatar}
                  </div>

                  <h4 className="text-base font-black text-white mb-1">
                    {member.name}
                  </h4>
                  <div className="text-xs font-bold text-amber-400 mb-1">
                    {member.role}
                  </div>
                  <div className="text-[11px] text-slate-400 font-medium mb-3">
                    {member.specialty}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {member.bio}
                  </p>
                </div>

                {/* Skill tags */}
                <div className="pt-3 border-t border-slate-800 flex flex-wrap gap-1.5">
                  {member.tags.map((t) => (
                    <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

