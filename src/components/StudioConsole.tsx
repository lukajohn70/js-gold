import { useState } from 'react'

export default function StudioConsole() {
  const [activeTab, setActiveTab] = useState<'broadcast' | 'software' | 'network'>('broadcast')

  return (
    <div className="w-full max-w-lg lg:max-w-none">
      {/* Outer Glow Container */}
      <div
        className="relative rounded-2xl p-1 shadow-2xl transition-all duration-300"
        style={{
          background: 'linear-gradient(145deg, rgba(229,192,123,0.3) 0%, rgba(255,255,255,0.06) 50%, rgba(60,130,255,0.15) 100%)',
        }}
      >
        <div
          className="rounded-[15px] p-4 sm:p-6 overflow-hidden"
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            backdropFilter: 'blur(30px)',
          }}
        >
          {/* Top Window Bar */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-[var(--border-subtle)]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              <span className="ml-2 text-xs font-mono text-[var(--text-dim)] hidden sm:inline">
                jsgold-core-telemetry v2.5
              </span>
            </div>

            {/* Console Switcher Tabs */}
            <div className="flex items-center gap-1 bg-[var(--bg-primary)] p-1 rounded-lg border border-[var(--border-subtle)]">
              {[
                { id: 'broadcast', label: 'Broadcast AV', icon: '🔴' },
                { id: 'software', label: 'Software', icon: '⚡' },
                { id: 'network', label: 'Network', icon: '📡' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-[var(--gold)] text-black shadow-sm font-bold'
                      : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  <span className="mr-1">{tab.icon}</span> {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* TAB 1: BROADCAST & AV CONSOLE */}
          {activeTab === 'broadcast' && (
            <div className="space-y-4">
              {/* Program Output Screen */}
              <div
                className="relative rounded-xl overflow-hidden aspect-video flex flex-col justify-between p-4"
                style={{
                  background: 'linear-gradient(180deg, #09111E 0%, #03060C 100%)',
                  border: '1px solid rgba(229,192,123,0.2)',
                }}
              >
                {/* Status Bar */}
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <div className="flex items-center gap-2 bg-black/60 px-2.5 py-1 rounded-full border border-white/10 backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-red-500 pulse-dot" />
                    <span className="text-red-400 font-bold tracking-wider">LIVE PGM 01</span>
                    <span className="text-white/60">01:42:19</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/70 bg-black/60 px-2.5 py-1 rounded-full border border-white/10">
                    <span>1080p60</span>
                    <span>•</span>
                    <span className="text-[var(--gold)]">SRT 8.2 Mbps</span>
                  </div>
                </div>

                {/* Center Broadcast Graphic Preview */}
                <div className="my-auto text-center">
                  <div className="inline-block px-3 py-1 rounded bg-[var(--gold)] text-black text-[10px] font-extrabold uppercase tracking-widest mb-1 shadow-lg">
                    Keynote Stream
                  </div>
                  <div className="text-white font-extrabold text-sm sm:text-base tracking-tight">
                    International Digital Innovation Summit
                  </div>
                  <div className="text-[var(--gold-light)] text-xs font-mono opacity-80 mt-0.5">
                    Stage Audio: Dante Master • Multicam ISO Active
                  </div>
                </div>

                {/* Bottom Audio Levels & Camera feeds */}
                <div className="flex items-end justify-between pt-2 border-t border-white/10">
                  <div className="flex gap-1.5">
                    {['CAM 1 (PGM)', 'CAM 2 (Audience)', 'CAM 3 (Jib)'].map((cam, idx) => (
                      <div
                        key={cam}
                        className={`text-[9px] font-mono px-2 py-0.5 rounded border ${
                          idx === 0
                            ? 'bg-red-500/20 border-red-500/50 text-red-300 font-bold'
                            : 'bg-white/5 border-white/10 text-white/60'
                        }`}
                      >
                        {cam}
                      </div>
                    ))}
                  </div>

                  {/* Dynamic Audio Equalizer VU Meter */}
                  <div className="flex items-end gap-1 h-5 bg-black/40 px-2 py-0.5 rounded border border-white/10">
                    <span className="text-[9px] font-mono text-[var(--gold)] mr-1">VU</span>
                    <div className="w-1 bg-green-400 rounded-full vu-bar-1" />
                    <div className="w-1 bg-green-400 rounded-full vu-bar-2" />
                    <div className="w-1 bg-yellow-400 rounded-full vu-bar-3" />
                    <div className="w-1 bg-red-400 rounded-full vu-bar-4" />
                  </div>
                </div>
              </div>

              {/* Hardware Metrics Footer */}
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-2 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                  <div className="text-[var(--text-dim)] text-[10px] uppercase font-mono">Encoder Rig</div>
                  <div className="font-bold text-[var(--text-primary)] mt-0.5">vMix 4K Pro</div>
                </div>
                <div className="p-2 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                  <div className="text-[var(--text-dim)] text-[10px] uppercase font-mono">Audio Engine</div>
                  <div className="font-bold text-[var(--text-primary)] mt-0.5">Dante AoIP 32ch</div>
                </div>
                <div className="p-2 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                  <div className="text-[var(--text-dim)] text-[10px] uppercase font-mono">Dropout Rate</div>
                  <div className="font-bold text-emerald-400 mt-0.5">0.00% Rock Solid</div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: SOFTWARE & MOBILE PLATFORMS */}
          {activeTab === 'software' && (
            <div className="space-y-4">
              <div
                className="rounded-xl p-4 flex flex-col justify-between"
                style={{
                  background: 'linear-gradient(180deg, #09111E 0%, #03060C 100%)',
                  border: '1px solid rgba(80,200,255,0.2)',
                }}
              >
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-dot" />
                    <span className="font-mono text-white font-bold">api.jsgold.cloud</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                    HTTP/2 200 OK • 14ms
                  </span>
                </div>

                {/* Code / API Endpoint preview */}
                <div className="my-3 font-mono text-[11px] text-white/80 space-y-1.5 leading-relaxed bg-black/40 p-3 rounded-lg border border-white/5">
                  <div className="text-purple-400">
                    <span className="text-yellow-400">Route</span>::post(<span className="text-emerald-300">'/v1/auth/biometric'</span>, [AuthController::<span className="text-blue-300">class</span>]);
                  </div>
                  <div className="text-emerald-400">
                    <span className="text-white/40">// Multi-tenant Laravel backend + Flutter offline sync</span>
                  </div>
                  <div className="text-blue-300">
                    ✓ 10,000+ Concurrency Handled • Redis Cached
                  </div>
                </div>

                {/* Live App Performance Metrics */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10">
                  <div className="flex items-center justify-between text-xs px-2 py-1 bg-white/5 rounded">
                    <span className="text-white/60 text-[11px]">Stack:</span>
                    <span className="font-mono text-[var(--gold)] font-bold">Laravel 11 • Flutter</span>
                  </div>
                  <div className="flex items-center justify-between text-xs px-2 py-1 bg-white/5 rounded">
                    <span className="text-white/60 text-[11px]">Active Devices:</span>
                    <span className="font-mono text-emerald-400 font-bold">14,890 live</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-2 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                  <div className="text-[var(--text-dim)] text-[10px] uppercase font-mono">Architecture</div>
                  <div className="font-bold text-[var(--text-primary)] mt-0.5">Microservices</div>
                </div>
                <div className="p-2 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                  <div className="text-[var(--text-dim)] text-[10px] uppercase font-mono">Mobile App</div>
                  <div className="font-bold text-[var(--text-primary)] mt-0.5">iOS + Android</div>
                </div>
                <div className="p-2 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                  <div className="text-[var(--text-dim)] text-[10px] uppercase font-mono">Uptime SLA</div>
                  <div className="font-bold text-emerald-400 mt-0.5">99.98%</div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: NETWORK CORE TELEMETRY */}
          {activeTab === 'network' && (
            <div className="space-y-4">
              <div
                className="rounded-xl p-4 flex flex-col justify-between"
                style={{
                  background: 'linear-gradient(180deg, #09111E 0%, #03060C 100%)',
                  border: '1px solid rgba(229,192,123,0.2)',
                }}
              >
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400 pulse-dot" />
                    <span className="font-mono text-white font-bold">MikroTik RouterOS v7.14</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">
                    BGP Core Gateway Up
                  </span>
                </div>

                {/* Telemetry rows */}
                <div className="my-3 space-y-2 font-mono text-xs">
                  <div className="flex items-center justify-between p-2 rounded bg-black/40 border border-white/5">
                    <span className="text-white/60">Campus Hotspot Leases</span>
                    <span className="text-[var(--gold)] font-bold">1,420 Active Users</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-black/40 border border-white/5">
                    <span className="text-white/60">Fiber Uplink Throughput</span>
                    <span className="text-emerald-400 font-bold">1.25 Gbps / 1.25 Gbps</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded bg-black/40 border border-white/5">
                    <span className="text-white/60">Traffic Shaper (QoS)</span>
                    <span className="text-blue-300 font-bold">Zero Bufferbloat (Grade A)</span>
                  </div>
                </div>

                <div className="text-[10px] text-white/50 text-right font-mono">
                  Managed by JS-GOLD Network Operations Center (NOC)
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-2 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                  <div className="text-[var(--text-dim)] text-[10px] uppercase font-mono">Core Routing</div>
                  <div className="font-bold text-[var(--text-primary)] mt-0.5">MikroTik CCR</div>
                </div>
                <div className="p-2 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                  <div className="text-[var(--text-dim)] text-[10px] uppercase font-mono">Security</div>
                  <div className="font-bold text-[var(--text-primary)] mt-0.5">Firewall Hardened</div>
                </div>
                <div className="p-2 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                  <div className="text-[var(--text-dim)] text-[10px] uppercase font-mono">Latency</div>
                  <div className="font-bold text-emerald-400 mt-0.5">&lt; 8ms avg</div>
                </div>
              </div>
            </div>
          )}

          {/* Console Action Prompt */}
          <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs text-[var(--text-dim)]">
            <span className="flex items-center gap-1.5 font-mono text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
              Interactive Division Telemetry
            </span>
            <span className="text-[11px] text-[var(--gold)] font-medium">Click tabs to toggle</span>
          </div>
        </div>
      </div>
    </div>
  )
}
