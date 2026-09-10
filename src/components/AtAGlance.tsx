import { useState } from 'react'
import { scrollTo } from '../utils'

interface Props {
  onOpenServices?: () => void
}

export default function AtAGlance({ onOpenServices }: Props) {
  const [activeCodeTab, setActiveCodeTab] = useState<'react' | 'laravel' | 'flutter'>('react')
  const [activeCameraFeed, setActiveCameraFeed] = useState<'cam1' | 'cam2' | 'drone'>('cam1')

  const codeSnippets = {
    react: `// React 19 + TypeScript Platform Component
export function LiveAnalyticsPortal() {
  const { metrics, streamHealth } = useCampusTopology()
  return (
    <PortalView qos="Guaranteed" latency="<14ms">
      <TelemetryGauge nodes={6420} uptime="99.98%" />
      <ActiveSessions throughput="10Gbps" />
    </PortalView>
  )
}`,
    laravel: `// Enterprise High-Concurrency API Controller
public function dispatchCampusQoS(RouterOSNode $router) {
    return $this->bandwidthManager
        ->allocateDynamicQueues(users: 6000)
        ->enforceCaptiveAuth(token: $router->secureHash)
        ->streamMetrics();
}`,
    flutter: `// Cross-Platform Flutter Mobile Ecosystem
class StudentPortalApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) => OfflineFirstSync(
    localDb: EncryptedHive(),
    backendSync: WssChannel('/stream/v1'),
  );
}`,
  }

  const cameraFeeds = {
    cam1: {
      name: 'Cam 1: Stage Left (Sony FX6 4K)',
      tag: '4K HDR • Optical 28-135mm',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format&fit=crop&q=80',
    },
    cam2: {
      name: 'Cam 2: Center Jib Crane (Blackmagic 6K)',
      tag: 'Wide Auditorium • Active Tally',
      image: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=800&auto=format&fit=crop&q=80',
    },
    drone: {
      name: 'Cam 3: DJI Mavic 3 Cine 5.1K',
      tag: 'Aerial Live Downlink • 1080p60 SRT',
      image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&auto=format&fit=crop&q=80',
    },
  }

  return (
    <section id="divisions" className="py-20 md:py-28 bg-[var(--bg-secondary)] border-y border-[var(--border-subtle)] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header with Status Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20 mb-3 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span>THE JS-GOLD INTEGRATED TRIAD</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[var(--text-primary)]">
              Engineered as One Architecture.
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-2xl mt-3 leading-relaxed">
              We eliminate the friction of coordinating multiple disjointed vendors. One multidisciplinary powerhouse bridging custom software, campus networks, and broadcast media.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenServices?.()}
              className="gold-glow-btn px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 cursor-pointer shadow-md hover:shadow-lg transition-all"
            >
              <span>Explore All Service Modules</span>
              <span>→</span>
            </button>
          </div>
        </div>

        {/* Asymmetric Bento Command Center */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Bento Tile 1: Software Engineering (Large 7-col hero) */}
          <div className="lg:col-span-7 bg-[var(--card-bg)] rounded-3xl border border-[var(--border-subtle)] p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-blue-500/10 via-transparent to-transparent pointer-events-none rounded-tr-3xl" />

            <div>
              {/* Division Badge & Stack Pills */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-blue-500/10 text-blue-600 border border-blue-500/20">
                    Division 01
                  </span>
                  <span className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider">
                    Software &amp; Cloud Engineering
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  {['React 19', 'Laravel 11', 'Flutter 3'].map((tech) => (
                    <span key={tech} className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded-md bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[var(--text-primary)]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] mb-3 group-hover:text-amber-600 transition-colors">
                High-Concurrency Web Platforms &amp; Mobile Ecosystems
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-6">
                Bespoke interactive React portals, robust multi-tenant Laravel backends, and responsive Flutter iOS/Android mobile apps engineered for speed, offline synchronization, and bank-grade security.
              </p>

              {/* Interactive Code / Architecture Console */}
              <div className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden shadow-inner text-slate-300">
                {/* Window header */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                    <span className="text-[11px] font-mono text-slate-400 ml-2">js-gold-core-engine</span>
                  </div>

                  {/* Tabs */}
                  <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800">
                    {(['react', 'laravel', 'flutter'] as const).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveCodeTab(tab)}
                        className={`px-2.5 py-1 text-[11px] font-mono font-bold rounded cursor-pointer transition-all ${
                          activeCodeTab === tab
                            ? 'bg-amber-500 text-slate-950 shadow-xs'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        {tab.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Code body */}
                <pre className="p-4 text-[11px] sm:text-xs font-mono overflow-x-auto text-emerald-400 leading-relaxed max-h-48 selection:bg-amber-500 selection:text-slate-950">
                  <code>{codeSnippets[activeCodeTab]}</code>
                </pre>
              </div>
            </div>

            {/* Bottom KPI strip */}
            <div className="grid grid-cols-3 gap-4 pt-6 mt-6 border-t border-[var(--border-subtle)] text-center">
              <div>
                <div className="text-base sm:text-lg font-black text-[var(--text-primary)]">React 19</div>
                <div className="text-[10px] sm:text-xs text-[var(--text-muted)] font-medium">Sub-100ms Hydration</div>
              </div>
              <div>
                <div className="text-base sm:text-lg font-black text-amber-600">100% SLA</div>
                <div className="text-[10px] sm:text-xs text-[var(--text-muted)] font-medium">Zero-Drop Security</div>
              </div>
              <div>
                <div className="text-base sm:text-lg font-black text-blue-600">6,000+</div>
                <div className="text-[10px] sm:text-xs text-[var(--text-muted)] font-medium">Active Concurrent Users</div>
              </div>
            </div>
          </div>

          {/* Bento Tile 2: ISP & Campus Networks (5-col tall card) */}
          <div className="lg:col-span-5 bg-[var(--card-bg)] rounded-3xl border border-[var(--border-subtle)] p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-60 h-60 bg-gradient-to-bl from-amber-500/10 via-transparent to-transparent pointer-events-none rounded-tr-3xl" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-amber-500/10 text-amber-600 border border-amber-500/20">
                  Division 02
                </span>
                <span className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-600 font-bold bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  RouterOS Live
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-[var(--text-primary)] mb-3 group-hover:text-amber-600 transition-colors">
                ISP-Grade Campus Topologies &amp; MikroTik Networks
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-6">
                Bandwidth queue tree QoS architectures, dynamic captive hotspot portals, multi-branch IPsec VPNs, and fiber optic distribution.
              </p>

              {/* Interactive Network Topology Status Widget */}
              <div className="bg-[var(--bg-primary)] p-4 rounded-2xl border border-[var(--border-subtle)] space-y-3.5 mb-6">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-[var(--text-muted)]">Active Gateways:</span>
                  <span className="font-mono font-bold text-[var(--text-primary)]">MikroTik CCR2004 10G</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-[var(--text-muted)]">Campus Concurrency:</span>
                  <span className="font-mono font-bold text-amber-600">6,420 Active Hotspot Nodes</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-[var(--text-muted)]">Bandwidth Fair-Share:</span>
                  <span className="font-mono font-bold text-blue-600">PCQ Dynamic Trees</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-emerald-500 to-amber-500 h-2 rounded-full w-[92%]" />
                </div>
                <div className="flex justify-between text-[10px] font-mono text-[var(--text-muted)]">
                  <span>Packet Drop: 0.00%</span>
                  <span>Uptime: 99.99%</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => scrollTo('contact')}
              className="w-full py-3 rounded-xl bg-[var(--bg-primary)] hover:bg-slate-900 hover:text-white border border-[var(--border-subtle)] text-xs font-bold transition-all text-center cursor-pointer shadow-xs"
            >
              Request Campus Network Audit →
            </button>
          </div>

          {/* Bento Tile 3: Live Broadcast Switching (5-col interactive preview) */}
          <div className="lg:col-span-5 bg-[var(--card-bg)] rounded-3xl border border-[var(--border-subtle)] p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-purple-500/10 text-purple-600 border border-purple-500/20">
                  Division 03
                </span>
                <span className="text-xs font-mono font-bold text-red-500 flex items-center gap-1.5 bg-red-500/10 px-2.5 py-1 rounded-full border border-red-500/20">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  ON AIR
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-[var(--text-primary)] mb-3 group-hover:text-purple-600 transition-colors">
                Turnkey Multi-Camera Live Broadcast &amp; AV
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-5">
                Zero-dropout live streaming for national summits, conferences, and mega ceremonies with bonded cellular internet and Dante AoIP audio.
              </p>

              {/* Simulated Live Broadcast Switcher Feeds */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-950 aspect-video mb-4 shadow-md">
                <img
                  src={cameraFeeds[activeCameraFeed].image}
                  alt={cameraFeeds[activeCameraFeed].name}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Overlay telemetry */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-red-600 text-white font-mono text-[10px] font-black uppercase tracking-wider shadow">
                    PROGRAM OUT
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-900/80 backdrop-blur-md text-white font-mono text-[10px]">
                    1080p60 SRT
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="text-xs font-bold">{cameraFeeds[activeCameraFeed].name}</div>
                  <div className="text-[10px] text-amber-400 font-mono">{cameraFeeds[activeCameraFeed].tag}</div>
                </div>
              </div>

              {/* Switcher Feed Buttons */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                {(['cam1', 'cam2', 'drone'] as const).map((feed) => (
                  <button
                    key={feed}
                    onClick={() => setActiveCameraFeed(feed)}
                    className={`py-2 px-1 text-center rounded-xl text-[11px] font-mono font-bold transition-all cursor-pointer ${
                      activeCameraFeed === feed
                        ? 'bg-purple-600 text-white shadow-sm'
                        : 'bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    {feed === 'cam1' ? 'CAM 1' : feed === 'cam2' ? 'CAM 2' : 'DRONE 5K'}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs">
              <span className="text-[var(--text-muted)] font-medium">SRT Latency: &lt; 800ms</span>
              <span className="font-bold text-purple-600">vMix 4K Pro Suite</span>
            </div>
          </div>

          {/* Bento Tile 4: Creative Media & Audio Jingle Studio (7-col wide card) */}
          <div className="lg:col-span-7 bg-[var(--card-bg)] rounded-3xl border border-[var(--border-subtle)] p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-emerald-500/10 via-transparent to-transparent pointer-events-none rounded-tr-3xl" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
                    Creative Studio
                  </span>
                  <span className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider">
                    Cinematography &amp; Acoustic Branding
                  </span>
                </div>
                <span className="text-xs font-mono font-bold text-emerald-600">
                  DaVinci Resolve Studio
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] mb-3 group-hover:text-emerald-600 transition-colors">
                Cinema-Grade Commercials &amp; Original Brand Jingles
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-6">
                We craft sonic signatures that live rent-free in your customers' minds, paired with 4K HDR cinematography, color grading, and broadcast loudness compliance (EBU R128).
              </p>

              {/* Studio Capabilities Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                  <div className="text-xs font-extrabold text-emerald-600 uppercase mb-1">Commercial Audio</div>
                  <div className="text-sm font-bold text-[var(--text-primary)]">Radio &amp; TV Jingles</div>
                  <div className="text-[11px] text-[var(--text-muted)] mt-1">Multi-track voice &amp; instrument composition</div>
                </div>

                <div className="p-4 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                  <div className="text-xs font-extrabold text-emerald-600 uppercase mb-1">Color Science</div>
                  <div className="text-sm font-bold text-[var(--text-primary)]">Film Emulation</div>
                  <div className="text-[11px] text-[var(--text-muted)] mt-1">Arri / RED LogC3 &amp; ACES pipelines</div>
                </div>

                <div className="p-4 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                  <div className="text-xs font-extrabold text-emerald-600 uppercase mb-1">Brand Systems</div>
                  <div className="text-sm font-bold text-[var(--text-primary)]">Figma UI/UX Kits</div>
                  <div className="text-[11px] text-[var(--text-muted)] mt-1">Design tokens &amp; accessible palettes</div>
                </div>
              </div>
            </div>

            {/* Bottom Callout Banner */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-amber-500/10 to-blue-500/10 border border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-xs">
                <span className="text-lg">🎯</span>
                <span className="font-bold text-[var(--text-primary)]">
                  Need a full-spectrum digital rollout? We handle code, networks, and cinema in parallel.
                </span>
              </div>
              <button
                onClick={() => scrollTo('contact')}
                className="gold-glow-btn px-5 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap cursor-pointer"
              >
                Schedule Solution Call →
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

