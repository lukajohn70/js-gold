import { scrollTo } from '../utils'

const teamMembers = [
  {
    name: 'John Luka',
    role: 'Technical Director & Lead Architect',
    specialty: 'Enterprise Software & Systems Architecture',
    bio: 'Oversees technology strategy, cross-platform app engineering (Laravel & Flutter), and mission-critical network deployments with over 5 years of field-proven delivery.',
    avatar: 'JL',
    tag: 'Founder & Lead',
    accent: '#E5C07B',
  },
  {
    name: 'Lead Network Engineer',
    role: 'Head of Infrastructure & Security',
    specialty: 'MikroTik RouterOS & Campus Fiber Backbones',
    bio: 'Specialist in high-density captive portal routing, BGP peering, bandwidth QoS shaping, and zero-trust perimeter security.',
    avatar: 'NE',
    tag: 'Infrastructure',
    accent: '#50C8FF',
  },
  {
    name: 'Head of Broadcast Production',
    role: 'Chief AV & Live Stream Engineer',
    specialty: 'vMix Multicam & Dante AoIP Protocols',
    bio: 'Directs multi-camera production rigs, low-latency SRT/RTMP pipelines, and professional stage sound balancing.',
    avatar: 'BP',
    tag: 'Live Media',
    accent: '#A78BFA',
  },
  {
    name: 'Creative Media Director',
    role: 'Visual Storyteller & UI/UX Lead',
    specialty: '4K Cinematography & DaVinci Color Grading',
    bio: 'Leads digital visual branding, high-end commercial documentaries, motion graphics, and conversion-focused web/mobile UI design.',
    avatar: 'CD',
    tag: 'Creative',
    accent: '#34D399',
  },
]

const comparison = [
  {
    feature: 'Accountability',
    fragmented: '3 different vendors pointing fingers when things go wrong',
    jsgold: 'Single accountable agency delivering both technology and media',
  },
  {
    feature: 'Live Execution',
    fragmented: 'Media team struggles with poor venue network connectivity',
    jsgold: 'Our network engineers build the dedicated bonded pipe for our broadcast rig',
  },
  {
    feature: 'Digital Apps & Branding',
    fragmented: 'Developers design bad UIs; graphic designers build broken code',
    jsgold: 'UI/UX designers collaborate directly with Laravel/Flutter engineers',
  },
  {
    feature: 'Communication & Cost',
    fragmented: 'Multiple retainer contracts, duplicate overheads, misaligned schedules',
    jsgold: 'Streamlined communication, transparent milestones, optimized budget',
  },
]

export default function CompanyProfileSection() {
  return (
    <div className="section-fade border-y border-[var(--border-subtle)] bg-[var(--section-alt)] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="section-label mb-3">
            <span>◆</span>
            <span>ABOUT JS-GOLD DIGITAL WORLD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] leading-tight">
            Bridging The Void Between{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, var(--gold) 0%, #FFF 40%, var(--gold-light) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Hardware, Code &amp; Camera
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-muted)] mt-4 leading-relaxed">
            Most organizations juggle separate software developers, networking contractors, and video production houses. JS-GOLD Digital World was engineered to eliminate that friction completely.
          </p>
        </div>

        {/* Comparison: The JS-GOLD Unified Advantage */}
        <div className="glass-card p-6 sm:p-10 rounded-2xl mb-20 overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-[var(--border-subtle)]">
            <div>
              <span className="text-xs font-mono font-bold text-[var(--gold)] uppercase tracking-wider">
                The Operational Difference
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--text-primary)] mt-1">
                The Unified Agency Advantage
              </h3>
            </div>
            <span className="text-xs font-mono text-[var(--text-dim)]">One Scope • One SLA • One Standard</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {comparison.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase text-[var(--text-primary)] tracking-wide">
                    {item.feature}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                    JS-GOLD Standard
                  </span>
                </div>

                <div className="text-xs text-red-400/80 line-through">
                  ✕ {item.fragmented}
                </div>

                <div className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] flex items-start gap-2">
                  <span className="text-[var(--gold)] font-bold">✓</span>
                  <span>{item.jsgold}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership & Specialized Talent */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="section-label mb-2">
                <span>◆</span>
                <span>ENGINEERING &amp; CREATIVE TALENT</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)]">
                Leadership Behind The Systems
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] max-w-md">
              Led by seasoned technical architects, certified network specialists, and broadcast-grade media directors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, i) => (
              <div
                key={i}
                className="glass-card p-6 rounded-2xl flex flex-col justify-between group hover:border-[var(--border-gold)] transition-all"
                style={{
                  borderTop: `3px solid ${member.accent}`,
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center font-extrabold text-sm shadow-md"
                      style={{
                        background: `${member.accent}20`,
                        color: member.accent,
                        border: `1px solid ${member.accent}40`,
                      }}
                    >
                      {member.avatar}
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[var(--text-dim)]">
                      {member.tag}
                    </span>
                  </div>

                  <h4 className="text-lg font-extrabold text-[var(--text-primary)] mb-1 group-hover:text-[var(--gold)] transition-colors">
                    {member.name}
                  </h4>
                  <div className="text-xs font-semibold text-[var(--gold)] mb-1">
                    {member.role}
                  </div>
                  <div className="text-[11px] font-mono text-[var(--text-dim)] mb-4">
                    {member.specialty}
                  </div>

                  <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-4">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-[11px] font-mono text-[var(--text-dim)]">
                  <span>Verified Capability</span>
                  <span className="text-emerald-400">● Active</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3-Phase Execution Framework */}
        <div className="glass-card p-8 sm:p-10 rounded-2xl">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-mono font-bold text-[var(--gold)] uppercase tracking-wider">
              Execution Methodology
            </span>
            <h3 className="text-2xl font-extrabold text-[var(--text-primary)] mt-1">
              How We Deliver: Discovery to Handover
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'Technical Discovery & Audit',
                desc: 'We inspect facility constraints, conduct network packet audits, analyze workflow requirements, and deliver a comprehensive architecture proposal.',
              },
              {
                step: '02',
                title: 'Agile Build & Field Testing',
                desc: 'Sprint-based software development, hardware rack integration, multi-camera signal dry runs, and exhaustive user acceptance testing.',
              },
              {
                step: '03',
                title: 'Deployment & SLA Support',
                desc: 'Production go-live, complete technical documentation, on-site team training, and continuous proactive SLA monitoring.',
              },
            ].map((phase) => (
              <div
                key={phase.step}
                className="p-6 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] relative"
              >
                <div className="text-3xl font-extrabold text-[var(--gold)] font-display opacity-80 mb-2">
                  PHASE {phase.step}
                </div>
                <h4 className="text-base font-bold text-[var(--text-primary)] mb-2">
                  {phase.title}
                </h4>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => scrollTo('contact')}
              className="gold-glow-btn px-8 py-3.5 rounded-xl text-xs sm:text-sm font-bold cursor-pointer"
            >
              Request Free Initial Audit →
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
