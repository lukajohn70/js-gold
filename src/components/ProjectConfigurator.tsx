import { useState } from 'react'
import { scrollTo } from '../utils'

interface SolutionPreset {
  id: string
  label: string
  icon: string
  lead: string
  stack: string[]
  timeline: string
  sla: string
}

const solutions: SolutionPreset[] = [
  {
    id: 'software',
    label: 'Enterprise Web & Mobile (React & Flutter)',
    icon: '💻',
    lead: 'Technical Director & Lead Architect',
    stack: ['React 19', 'Laravel 11', 'Flutter 3', 'PostgreSQL Cloud', 'REST API'],
    timeline: '4 – 8 Weeks Turnkey',
    sla: '99.98% High-Concurrency Uptime',
  },
  {
    id: 'networking',
    label: 'Campus Wi-Fi & ISP Network (MikroTik)',
    icon: '🌐',
    lead: 'Lead Network Engineer',
    stack: ['MikroTik RouterOS v7', 'CCR2004 10G', 'QoS Queue Trees', 'User-Manager', 'Fiber Optic'],
    timeline: '3 – 6 Weeks Turnkey',
    sla: '100% Guaranteed Bandwidth Fair-Share',
  },
  {
    id: 'broadcast',
    label: 'Live Broadcast & Multi-Cam Stream (vMix)',
    icon: '🎥',
    lead: 'Head of Broadcast Production',
    stack: ['vMix 4K Pro Suite', 'Bonded Cellular Multi-WAN', 'Dante AoIP Audio', 'SRT / RTMP', 'Sony FX6'],
    timeline: 'Turnkey Event Deployment',
    sla: 'Zero-Dropout Redundant Stream SLA',
  },
  {
    id: 'creative',
    label: 'Commercial Cinema & Brand Jingles',
    icon: '🎵',
    lead: 'Creative Media Director',
    stack: ['Pro Tools Studio DAW', 'DaVinci Resolve ACES', 'Cinema Lenses', 'EBU R128 Mastering'],
    timeline: '2 – 4 Weeks Production',
    sla: 'Broadcast Television & Radio Compliant',
  },
  {
    id: 'hybrid',
    label: 'The Full JS-GOLD Turnkey Triad (All 3)',
    icon: '⚡',
    lead: 'Full Multidisciplinary Engineering Council',
    stack: ['React + Laravel', 'MikroTik Fiber Backbone', '4K vMix Multi-Cam', 'Dante Audio Bus'],
    timeline: '6 – 10 Weeks Unified Deployment',
    sla: 'Single Accountable Partner Warranty',
  },
]

const scales = [
  { id: 'sme', label: 'Corporate SME / Enterprise', desc: 'Single or multi-branch business headquarters' },
  { id: 'campus', label: 'Academic Campus / Institution', desc: '1,000 to 10,000+ active daily users' },
  { id: 'summit', label: 'High-Stakes Live Summit / Event', desc: 'Conferences, assemblies & convocations' },
  { id: 'brand', label: 'Brand & Creator Campaign', desc: 'Sonic and visual market rollout' },
]

export default function ProjectConfigurator() {
  const [selectedSolutionId, setSelectedSolutionId] = useState('hybrid')
  const [selectedScaleId, setSelectedScaleId] = useState('campus')

  const currentSolution = solutions.find((s) => s.id === selectedSolutionId) || solutions[0]
  const currentScale = scales.find((s) => s.id === selectedScaleId) || scales[0]

  const whatsappMessage = encodeURIComponent(
    `Hello JS-GOLD Digital World! I configured a solution on your website:
- Focus: ${currentSolution.label}
- Organization Scale: ${currentScale.label}
- Target Timeline: ${currentSolution.timeline}
I would like to schedule a technical discovery call.`
  )

  return (
    <section className="py-20 md:py-28 bg-[var(--bg-primary)] border-t border-[var(--border-subtle)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20 mb-3 shadow-xs">
            <span>⚡</span>
            <span>INTERACTIVE ARCHITECTURAL CONFIGURATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[var(--text-primary)]">
            Configure Your Ideal Solution.
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-muted)] mt-3 leading-relaxed">
            Select your discipline requirements and organization scale. Generate an instant technical blueprint and dispatch a pre-scoped inquiry directly to our engineering leads.
          </p>
        </div>

        {/* Configurator Card */}
        <div className="bg-[var(--card-bg)] rounded-3xl border border-[var(--border-subtle)] p-6 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Step 1 & 2 Inputs (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              {/* Step 1: Solution Type */}
              <div>
                <div className="text-xs font-mono font-bold uppercase text-[var(--text-muted)] tracking-wider mb-3 flex items-center justify-between">
                  <span>Step 1: Select Primary Scope Focus</span>
                  <span className="text-amber-600 font-bold">5 Options</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {solutions.map((sol) => {
                    const isSelected = selectedSolutionId === sol.id
                    return (
                      <button
                        key={sol.id}
                        onClick={() => setSelectedSolutionId(sol.id)}
                        className={`p-4 rounded-2xl text-left border transition-all duration-200 flex items-start gap-3 cursor-pointer ${
                          isSelected
                            ? 'bg-amber-500/10 border-amber-500 shadow-sm ring-1 ring-amber-500'
                            : 'bg-[var(--bg-secondary)] border-[var(--border-subtle)] hover:border-slate-300 dark:hover:border-slate-700'
                        }`}
                      >
                        <span className="text-2xl flex-shrink-0">{sol.icon}</span>
                        <div>
                          <div className={`text-xs font-bold leading-snug ${isSelected ? 'text-amber-700 dark:text-amber-400' : 'text-[var(--text-primary)]'}`}>
                            {sol.label}
                          </div>
                          <div className="text-[11px] text-[var(--text-muted)] font-mono mt-1">
                            {sol.timeline}
                          </div>
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Step 2: Scale */}
              <div>
                <div className="text-xs font-mono font-bold uppercase text-[var(--text-muted)] tracking-wider mb-3 flex items-center justify-between">
                  <span>Step 2: Select Organization Scale</span>
                  <span className="text-amber-600 font-bold">4 Categories</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {scales.map((sc) => {
                    const isSelected = selectedScaleId === sc.id
                    return (
                      <button
                        key={sc.id}
                        onClick={() => setSelectedScaleId(sc.id)}
                        className={`p-3.5 rounded-2xl text-left border transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? 'bg-blue-500/10 border-blue-500 shadow-sm ring-1 ring-blue-500'
                            : 'bg-[var(--bg-secondary)] border-[var(--border-subtle)] hover:border-slate-300 dark:hover:border-slate-700'
                        }`}
                      >
                        <div className={`text-xs font-bold ${isSelected ? 'text-blue-600 dark:text-blue-400' : 'text-[var(--text-primary)]'}`}>
                          {sc.label}
                        </div>
                        <div className="text-[11px] text-[var(--text-muted)] mt-0.5">
                          {sc.desc}
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Generated Architectural Blueprint Card (5 cols) */}
            <div className="lg:col-span-5 bg-[var(--bg-secondary)] rounded-2xl border border-[var(--border-subtle)] p-6 sm:p-7 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)] mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-mono font-black uppercase tracking-wider text-[var(--text-primary)]">
                      Generated Blueprint
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-amber-600 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20 font-bold">
                    PRE-SCOPED
                  </span>
                </div>

                <div className="space-y-4 text-xs">
                  <div>
                    <div className="text-[10px] font-mono font-bold uppercase text-[var(--text-muted)]">Assigned Lead:</div>
                    <div className="text-sm font-extrabold text-[var(--text-primary)] mt-0.5">{currentSolution.lead}</div>
                  </div>

                  <div>
                    <div className="text-[10px] font-mono font-bold uppercase text-[var(--text-muted)]">Recommended Technology Stack:</div>
                    <div className="flex flex-wrap gap-1.5 mt-1.5">
                      {currentSolution.stack.map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded bg-[var(--card-bg)] text-[var(--text-primary)] border border-[var(--border-subtle)] font-mono text-[11px] font-semibold">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] font-mono font-bold uppercase text-[var(--text-muted)]">Estimated Deployment Runway:</div>
                    <div className="text-xs font-bold text-amber-600 mt-0.5 font-mono">{currentSolution.timeline}</div>
                  </div>

                  <div>
                    <div className="text-[10px] font-mono font-bold uppercase text-[var(--text-muted)]">Guaranteed Production SLA:</div>
                    <div className="text-xs font-bold text-emerald-600 mt-0.5 font-mono">{currentSolution.sla}</div>
                  </div>
                </div>
              </div>

              {/* Action Dispatch Buttons */}
              <div className="pt-4 border-t border-[var(--border-subtle)] space-y-2.5">
                <a
                  href={`https://wa.me/2348150917741?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 transition-all cursor-pointer"
                >
                  <span>💬 Dispatch to Technical Director via WhatsApp</span>
                  <span>→</span>
                </a>

                <button
                  onClick={() => scrollTo('contact')}
                  className="w-full py-3 px-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border-subtle)] hover:border-amber-500/40 text-[var(--text-primary)] text-xs font-bold text-center transition-all cursor-pointer"
                >
                  Or Submit Via Formal Web RFP Form →
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
