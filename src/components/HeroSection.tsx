import { useState, useEffect } from 'react'
import { scrollTo } from '../utils'
import { attachRipple } from '../App'

interface HeroSectionProps {
  onOpenServices?: () => void
}

const slides = [
  {
    id: 'broadcast',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1600&auto=format&fit=crop&q=80',
    tag: 'Live Broadcast & AV Production',
    headlineHighlight: 'We Broadcast Live.',
    desc: 'Broadcast-grade multi-camera production, low-latency SRT/RTMP streaming, and Dante AoIP sound engineering for major conferences, institutional convocations, and conventions.',
  },
  {
    id: 'software',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&auto=format&fit=crop&q=80',
    tag: 'Software & Mobile Development',
    headlineHighlight: 'We Build Systems.',
    desc: 'High-performance web and mobile platforms engineered with React, Laravel, and Flutter. Architected for massive concurrency, enterprise security, and seamless user experiences.',
  },
  {
    id: 'media',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1600&auto=format&fit=crop&q=80',
    tag: 'Creative Media & Visual Branding',
    headlineHighlight: 'We Create Stories.',
    desc: 'Cinematic 4K videography, aerial drone cinematography, DaVinci Resolve color grading, commercial musical jingles, and intuitive UI/UX interface systems.',
  },
  {
    id: 'networking',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&auto=format&fit=crop&q=80',
    tag: 'Campus Network Engineering',
    headlineHighlight: 'We Connect Campuses.',
    desc: 'Enterprise-grade MikroTik core routing, captive portal User-Manager gateways, bandwidth QoS traffic shaping, and campus fiber infrastructure with guaranteed uptime.',
  },
]

export default function HeroSection({ onOpenServices }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-advance slideshow every 6 seconds with subtle animation
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white"
    >
      {/* Background Slideshow with Subtle Ken Burns Zoom Animation */}
      {slides.map((slide, index) => {
        const isActive = index === currentSlide
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-0' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.tag}
              className={`w-full h-full object-cover object-center transform transition-transform duration-[6500ms] ease-out ${
                isActive ? 'scale-110' : 'scale-100'
              }`}
              loading={index === 0 ? 'eager' : 'lazy'}
              onError={(e) => {
                // Fallback gradient in case network blocks third-party CDN
                e.currentTarget.style.display = 'none'
              }}
            />
          </div>
        )
      })}

      {/* Dark Scrim Overlays for Pristine Text Readability (Krosskhana Style) */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: `
            linear-gradient(180deg, rgba(15, 23, 42, 0.75) 0%, rgba(15, 23, 42, 0.85) 50%, rgba(15, 23, 42, 0.95) 100%),
            radial-gradient(ellipse at center, rgba(217, 119, 6, 0.15) 0%, transparent 70%)
          `,
        }}
      />

      {/* Hero Content Overlay */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 py-28 text-center flex flex-col items-center">

        {/* Tagline Pill Badge */}
        <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6 shadow-lg">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 pulse-dot" />
          <span className="text-xs font-black text-white tracking-wider uppercase font-mono">
            ✨ Quality You Can Trust &bull; Technology &amp; Multimedia Agency
          </span>
        </div>

        {/* Dynamic Slide Category Label */}
        <div className="text-xs font-extrabold uppercase tracking-widest text-amber-400 mb-3">
          {slides[currentSlide].tag}
        </div>

        {/* Main Display Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white mb-6 leading-[1.1]">
          We Build. We Broadcast.{' '}
          <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
            We Create.
          </span>
        </h1>

        {/* Subtitle with explicit stack: React, Laravel, Flutter, MikroTik, vMix */}
        <p className="text-base sm:text-xl text-slate-200 mb-10 max-w-3xl leading-relaxed font-normal">
          {slides[currentSlide].desc}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14 w-full sm:w-auto">
          <button
            onClick={(e) => { attachRipple(e); scrollTo('contact') }}
            className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 px-8 py-4 rounded-xl text-base font-black shadow-xl shadow-amber-500/25 hover:scale-105 hover:shadow-2xl transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Start a Project</span>
            <span>→</span>
          </button>

          <button
            onClick={() => onOpenServices ? onOpenServices() : scrollTo('about')}
            className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/25 text-white px-8 py-4 text-base rounded-xl font-bold hover:bg-white hover:text-slate-950 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Explore Capabilities</span>
          </button>
        </div>

        {/* Interactive Slideshow Dots Indicator */}
        <div className="flex items-center gap-3 mb-12">
          {slides.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentSlide
                  ? 'w-10 bg-amber-400 shadow-md shadow-amber-400/50'
                  : 'w-2.5 bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        {/* 4 Floating Quick Metrics Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl pt-8 border-t border-white/15">
          {[
            { value: '3', label: 'Core Divisions', note: 'Single Accountable Team' },
            { value: '100+', label: 'Delivered Projects', note: 'Institutions & Brands' },
            { value: '99.9%', label: 'Network Uptime', note: 'MikroTik High Concurrency' },
            { value: '4K UHD', label: 'Live Broadcast', note: 'Zero Latency Multicam' },
          ].map((item) => (
            <div
              key={item.label}
              className="p-3 sm:p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-left"
            >
              <div className="text-2xl sm:text-3xl font-black text-amber-400 tracking-tight font-display">
                {item.value}
              </div>
              <div className="text-xs font-bold text-white mt-0.5">
                {item.label}
              </div>
              <div className="text-[10px] text-slate-300">
                {item.note}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Prev / Next Arrows */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        aria-label="Previous Slide"
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md border border-white/20 text-white items-center justify-center transition-all cursor-pointer"
      >
        ‹
      </button>

      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        aria-label="Next Slide"
        className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md border border-white/20 text-white items-center justify-center transition-all cursor-pointer"
      >
        ›
      </button>
    </section>
  )
}
