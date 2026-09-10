import { scrollTo } from '../utils'

const teamMembers = [
  {
    name: 'Technical Director & Lead Architect',
    role: 'Chief Technology Direction',
    specialty: 'Enterprise Software (React, Laravel, Flutter) & Systems Architecture',
    bio: 'Oversees full-stack systems architecture, modern frontend & backend engineering (React, Laravel, Flutter), and mission-critical network deployments with over 5 years of verified field delivery.',
    avatar: 'TD',
    accent: 'bg-amber-100 text-amber-800 border-amber-300',
  },
  {
    name: 'Lead Network Engineer',
    role: 'Head of Infrastructure & Security',
    specialty: 'MikroTik RouterOS & Campus Fiber Backbones',
    bio: 'Specialist in high-density captive portal routing, BGP peering, bandwidth QoS shaping, and zero-trust perimeter security.',
    avatar: 'NE',
    accent: 'bg-blue-100 text-blue-800 border-blue-300',
  },
  {
    name: 'Head of Broadcast Production',
    role: 'Chief AV & Live Stream Engineer',
    specialty: 'vMix Multicam & Dante AoIP Protocols',
    bio: 'Directs multi-camera production rigs, low-latency SRT/RTMP pipelines, and professional stage sound balancing.',
    avatar: 'BP',
    accent: 'bg-purple-100 text-purple-800 border-purple-300',
  },
  {
    name: 'Creative Media Director',
    role: 'Visual Storyteller & UI/UX Lead',
    specialty: '4K Cinematography & DaVinci Color Grading',
    bio: 'Leads digital visual branding, high-end commercial documentaries, motion graphics, and conversion-focused web/mobile UI design.',
    avatar: 'CD',
    accent: 'bg-emerald-100 text-emerald-800 border-emerald-300',
  },
]

const values = [
  {
    title: 'Excellence',
    desc: 'Every network configuration, line of code, and camera angle meets a defined commercial engineering standard.',
    icon: '◈',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    title: 'Integrity',
    desc: 'Transparent scopes, realistic delivery timelines, and honest technical assessments without hidden fees.',
    icon: '▣',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'Reliability',
    desc: 'Contractual uptime obligations and redundant internet failovers — we engineer for uninterrupted business continuity.',
    icon: '⬡',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    title: 'Partnership',
    desc: 'Proactive support, staff handover training, and strategic advisory are included in every engagement.',
    icon: '▦',
    color: 'bg-purple-50 text-purple-600',
  },
]

const comparison = [
  {
    feature: 'Accountability',
    fragmented: '3 different contractors pointing fingers when an issue arises',
    jsgold: 'Single accountable agency delivering both technology and media',
  },
  {
    feature: 'Live Broadcast Reliability',
    fragmented: 'Media team suffers because event venue network drops out',
    jsgold: 'Our network engineers deploy the dedicated bonded pipe for our broadcast crew',
  },
  {
    feature: 'Software & Visual Design',
    fragmented: 'Programmers build clunky UIs; designers build code that breaks',
    jsgold: 'UI/UX designers collaborate directly with React, Laravel, and Flutter engineers',
  },
  {
    feature: 'Communication & Overhead',
    fragmented: 'Multiple retainer agreements, duplicate overheads, misaligned schedules',
    jsgold: 'Unified project management, clear milestone deliverables, optimized budget',
  },
]

export default function CompanyProfileSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="section-label mb-3">
            <span>◆</span>
            <span>ABOUT JS-GOLD DIGITAL WORLD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            Engineering Excellence Across{' '}
            <span className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">
              Technology &amp; Media
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Founded on the principle that modern organizations deserve enterprise-grade technical precision paired with world-class creative storytelling — under one unified team.
          </p>
        </div>

        {/* Mission & Vision Cards (Learnerium Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-sm relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center font-black text-xl mb-6 shadow-md">
              🎯
            </div>
            <div className="text-xs font-black uppercase tracking-widest text-amber-600 mb-2">
              OUR MISSION
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 mb-4">
              Engineering Dependable Digital Solutions
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              To deliver resilient campus networks, high-concurrency software, and broadcast-grade live multimedia experiences that empower institutions, businesses, and creators to operate and communicate at their highest level.
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-sm relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-black text-xl mb-6 shadow-md">
              🔭
            </div>
            <div className="text-xs font-black uppercase tracking-widest text-blue-600 mb-2">
              OUR VISION
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 mb-4">
              Africa's Benchmark for Integrated Excellence
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              To stand as West Africa's foremost full-stack digital and media engineering agency — celebrated for absolute technical integrity, verifiable performance standards, and lasting institutional impact.
            </p>
          </div>
        </div>

        {/* The Unified Agency Advantage (Brandstore Comparison) */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-md mb-20">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-black uppercase tracking-widest text-amber-600">
              WHY PARTNER WITH US
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
              The Unified Agency Advantage
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              See why leading organizations choose JS-GOLD over managing separate freelancers and disconnected contractors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {comparison.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase text-slate-900 tracking-wider">
                    {item.feature}
                  </span>
                  <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    JS-GOLD Standard
                  </span>
                </div>

                <div className="text-xs text-red-500/80 line-through">
                  ✕ {item.fragmented}
                </div>

                <div className="text-xs sm:text-sm font-bold text-slate-900 flex items-start gap-2">
                  <span className="text-amber-600 font-black">✓</span>
                  <span>{item.jsgold}</span>
                </div>
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
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
              Our Core Values
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 text-center hover:bg-white hover:shadow-lg transition-all">
                <div className={`w-12 h-12 rounded-2xl mx-auto flex items-center justify-center font-black text-lg mb-4 ${v.color}`}>
                  {v.icon}
                </div>
                <h4 className="text-base font-extrabold text-slate-900 mb-2">
                  {v.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Team Spotlight */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-amber-400">
                LEADERSHIP &amp; EXPERTISE
              </span>
              <h3 className="text-2xl sm:text-3xl font-black mt-2">
                Multidisciplinary Talent
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md">
              Combining senior software engineers, certified network architects, and broadcast media directors under one roof.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex flex-col justify-between">
                <div>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm mb-4 border ${member.accent}`}>
                    {member.avatar}
                  </div>

                  <h4 className="text-lg font-black text-white mb-1">
                    {member.name}
                  </h4>
                  <div className="text-xs font-bold text-amber-400 mb-1">
                    {member.role}
                  </div>
                  <div className="text-[11px] text-slate-400 font-medium mb-3">
                    {member.specialty}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
