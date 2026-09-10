import { useState } from 'react'
import { scrollTo } from '../utils'

export default function BroadcastShowreel() {
  const [activeChannel, setActiveChannel] = useState<'pgm' | 'cam1' | 'cam2' | 'cam3'>('pgm')
  const [isPlayingAudio, setIsPlayingAudio] = useState(false)

  const channels = {
    pgm: {
      label: 'PROGRAM OUT (AIR)',
      title: 'Annual Tech Summit 2025: Keynote Stream',
      resolution: '1080p60 SRT Bonded',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop',
      tally: 'bg-red-600 text-white',
      fps: '59.94 FPS',
      bitrate: '8,500 Kbps',
    },
    cam1: {
      label: 'CAM 1: STAGE PODIUM',
      title: 'Sony FX6 4K • Prime 85mm T1.5',
      resolution: '4K SDI Feed',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop',
      tally: 'bg-slate-800 text-slate-300',
      fps: '59.94 FPS',
      bitrate: '12,000 Kbps',
    },
    cam2: {
      label: 'CAM 2: AUDITORIUM CRANE',
      title: 'Blackmagic URSA Mini Pro 12K',
      resolution: '6K Sensor Downsampled',
      image: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=800&auto=format&fit=crop',
      tally: 'bg-slate-800 text-slate-300',
      fps: '59.94 FPS',
      bitrate: '10,000 Kbps',
    },
    cam3: {
      label: 'CAM 3: AERIAL DRONE',
      title: 'DJI Mavic 3 Pro Cine • Hasselblad 5.1K',
      resolution: 'Wireless SRT Feed',
      image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&auto=format&fit=crop',
      tally: 'bg-slate-800 text-slate-300',
      fps: '59.94 FPS',
      bitrate: '6,200 Kbps',
    },
  }

  return (
    <section className="py-20 md:py-28 bg-slate-950 text-white relative overflow-hidden">
      {/* Background glow lines */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(217,119,6,0.15),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-400/20 mb-3 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span>LIVE BROADCAST &amp; AUDIO SUITE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
              Zero-Dropout Multi-Cam Production
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl mt-3 leading-relaxed">
              Experience the control room. We combine hardware vMix switching, multi-WAN bonded cellular redundancy, and studio-grade Dante AoIP sound engineering.
            </p>
          </div>

          <button
            onClick={() => scrollTo('contact')}
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-6 py-3.5 rounded-xl text-xs sm:text-sm flex items-center gap-2 self-start lg:self-auto cursor-pointer shadow-lg shadow-amber-500/20 transition-all hover:scale-105"
          >
            <span>Book Live Broadcast Crew</span>
            <span>→</span>
          </button>
        </div>

        {/* Master Control Switcher Frame */}
        <div className="bg-slate-900/90 rounded-3xl border border-slate-800 p-4 sm:p-8 shadow-2xl backdrop-blur-xl">
          {/* Top telemetry bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-6 border-b border-slate-800 text-xs font-mono">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-red-600 text-white font-bold tracking-wider animate-pulse flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-white" />
                MASTER LIVE
              </span>
              <span className="text-slate-400">ENGINE: vMix 4K Pro</span>
              <span className="hidden sm:inline text-slate-500">•</span>
              <span className="hidden sm:inline text-emerald-400">SRT PROTOCOL BONDED</span>
            </div>

            <div className="flex items-center gap-4 text-slate-400">
              <span>{channels[activeChannel].fps}</span>
              <span className="text-amber-400 font-bold">{channels[activeChannel].bitrate}</span>
              <span className="text-emerald-400 font-bold">DROPPED: 0.00%</span>
            </div>
          </div>

          {/* Main Monitor + Multi-Feed Switcher Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Main Program Monitor (8 cols) */}
            <div className="lg:col-span-8 relative aspect-video rounded-2xl overflow-hidden bg-black border border-slate-800 shadow-xl group">
              <img
                src={channels[activeChannel].image}
                alt={channels[activeChannel].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => { e.currentTarget.style.display = 'none' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30 pointer-events-none" />

              {/* Tally and format overlay */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className={`text-[10px] font-mono font-black uppercase px-2.5 py-1 rounded-md tracking-wider shadow ${channels[activeChannel].tally}`}>
                  {channels[activeChannel].label}
                </span>
                <span className="text-[10px] font-mono bg-black/60 backdrop-blur-md px-2 py-1 rounded text-slate-300 border border-white/10">
                  {channels[activeChannel].resolution}
                </span>
              </div>

              {/* Simulated Audio VU Meter Strip in bottom left */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row sm:items-end justify-between gap-3 text-white">
                <div>
                  <div className="text-base sm:text-xl font-black tracking-tight drop-shadow-md">
                    {channels[activeChannel].title}
                  </div>
                  <div className="text-xs text-amber-400 font-mono mt-0.5">
                    Audio Bus: Dante Stereo Mix (EBU R128 Compliant)
                  </div>
                </div>

                {/* Animated VU Bars */}
                <div className="flex items-end gap-1 h-6 bg-black/70 backdrop-blur-md p-1.5 rounded-lg border border-white/10">
                  <span className="w-1 bg-emerald-500 rounded-xs animate-pulse h-full" />
                  <span className="w-1 bg-emerald-500 rounded-xs animate-pulse h-[80%]" />
                  <span className="w-1 bg-emerald-500 rounded-xs animate-pulse h-[95%]" />
                  <span className="w-1 bg-amber-500 rounded-xs animate-pulse h-[65%]" />
                  <span className="w-1 bg-amber-500 rounded-xs animate-pulse h-[85%]" />
                  <span className="w-1 bg-red-500 rounded-xs animate-pulse h-[30%]" />
                  <span className="text-[9px] font-mono text-slate-400 ml-1">-14 LUFS</span>
                </div>
              </div>
            </div>

            {/* Switcher Control Rack (4 cols) */}
            <div className="lg:col-span-4 space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-bold flex items-center justify-between">
                <span>Multi-Camera Tally Switcher</span>
                <span className="text-[10px] text-emerald-400">READY TO CUT</span>
              </div>

              {(Object.keys(channels) as Array<keyof typeof channels>).map((key) => {
                const ch = channels[key]
                const isActive = activeChannel === key
                return (
                  <button
                    key={key}
                    onClick={() => setActiveChannel(key)}
                    className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center gap-3.5 cursor-pointer ${
                      isActive
                        ? 'bg-amber-500/15 border-amber-400 shadow-md scale-[1.02]'
                        : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                    }`}
                  >
                    <div className="relative w-14 h-10 rounded-lg overflow-hidden bg-slate-800 flex-shrink-0">
                      <img
                        src={ch.image}
                        alt={ch.label}
                        className="w-full h-full object-cover"
                        onError={(e) => { e.currentTarget.style.display = 'none' }}
                      />
                      {isActive && (
                        <div className="absolute inset-0 border-2 border-amber-400 rounded-lg" />
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className={`text-[10px] font-mono font-bold uppercase ${isActive ? 'text-amber-400' : 'text-slate-400'}`}>
                          {ch.label}
                        </span>
                        {isActive && (
                          <span className="text-[9px] font-black font-mono bg-red-600 text-white px-1.5 py-0.2 rounded">
                            LIVE
                          </span>
                        )}
                      </div>
                      <div className="text-xs font-bold text-white truncate mt-0.5">
                        {ch.title}
                      </div>
                    </div>
                  </button>
                )
              })}

              {/* Audio Jingle & Sound Design Showcase Card */}
              <div className="mt-4 p-4 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-mono text-amber-400 font-bold">COMMERCIAL AUDIO MASTER</span>
                  <span className="text-[10px] text-slate-400 font-mono">DAW SESSION</span>
                </div>
                <div className="text-xs font-bold text-white">
                  Brand Signature Jingle (Acoustic &amp; Vocal)
                </div>
                <div className="text-[11px] text-slate-400 mb-3">
                  Custom radio &amp; TV broadcast jingle produced in-house.
                </div>

                <button
                  onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-400 font-mono text-xs font-bold flex items-center justify-center gap-2 border border-slate-700 transition-all cursor-pointer"
                >
                  <span>{isPlayingAudio ? '❚❚ PAUSE PREVIEW' : '▶ PLAY AUDIO SIGNATURE'}</span>
                  {isPlayingAudio && (
                    <span className="flex items-center gap-0.5">
                      <span className="w-1 h-3 bg-amber-400 rounded-full animate-pulse" />
                      <span className="w-1 h-4 bg-amber-400 rounded-full animate-pulse" />
                      <span className="w-1 h-2 bg-amber-400 rounded-full animate-pulse" />
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
