import { scrollTo } from '../utils'
import NetworkVisual from './NetworkVisual'
import { attachRipple } from '../App'

interface HeroSectionProps {
  onOpenServices?: () => void
}

export default function HeroSection({ onOpenServices }: HeroSectionProps) {
  return (
    <div className="section-fade" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: 68, position: 'relative', overflow: 'hidden' }}>

      {/* Grid background */}
      <div
        style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          mask: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
          WebkitMask: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
        }}
      />

      {/* Floating ambient blobs */}
      <div
        className="blob-gold"
        style={{
          position: 'absolute', top: '10%', left: '5%',
          width: 220, height: 220,
          borderRadius: '50%',
          background: 'var(--gold)',
          opacity: 0.07,
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />
      <div
        className="blob-blue"
        style={{
          position: 'absolute', bottom: '12%', right: '6%',
          width: 300, height: 300,
          borderRadius: '50%',
          background: '#50C8FF',
          opacity: 0.06,
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 px-4 sm:px-6 md:px-8 py-12 lg:py-20" style={{
        maxWidth: 1280, margin: '0 auto',
        width: '100%', alignItems: 'center', position: 'relative', zIndex: 1,
      }}>
        {/* Left: Copy */}
        <div>
          <div className="section-label" style={{ marginBottom: 20 }}>
            ◆ &nbsp; Technology &amp; Multimedia Agency · Quality You Can Trust
          </div>

          <h1 style={{
            fontSize: 'clamp(2.1rem, 3.8vw, 3.4rem)', fontWeight: 800, lineHeight: 1.12,
            letterSpacing: '-0.025em', color: 'var(--text-primary)', margin: '0 0 20px',
          }}>
            We Build.{' '}
            <span style={{
              background: 'linear-gradient(135deg, #D4AF37 0%, #E8CC6A 60%, #D4AF37 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              We Broadcast.
            </span>
            <br />
            We Create.
          </h1>

          <p style={{ fontSize: '1rem', lineHeight: 1.75, color: 'var(--text-muted)', margin: '0 0 24px', maxWidth: 480 }}>
            JS-GOLD Digital World is a full-stack technology and creative powerhouse. From robust enterprise software &amp; network engineering to high-definition broadcast production and captivating multimedia, we deliver end-to-end digital excellence.
          </p>

          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '8px 16px', borderRadius: 6, marginBottom: 32,
            background: 'var(--gold-glow)', border: '1px solid var(--border-gold)',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--gold)', flexShrink: 0 }} />
            <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.06em', color: 'var(--gold)' }}>
              Quality You Can Trust — 3 Core Divisions Under One Roof
            </span>
          </div>

          <div style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={(e) => { attachRipple(e); scrollTo('contact') }}
              className="gold-glow-btn ripple"
              style={{ padding: '13px 28px', borderRadius: 9, fontSize: '0.85rem', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
            >
              Start a Project
            </button>

            <button
              onClick={() => {
                if (onOpenServices) onOpenServices()
                else scrollTo('about')
              }}
              title="Explore Our Services"
              className="glass-btn ripple"
              style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '12px 22px', borderRadius: 9,
                fontSize: '0.82rem', cursor: 'pointer', fontFamily: 'inherit',
              }}
            >
              Explore Our Services →
            </button>
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', gap: 28, marginTop: 44, paddingTop: 24, borderTop: '1px solid var(--border-subtle)', flexWrap: 'wrap' }}>
            {[
              { value: '3', label: 'Core Divisions' },
              { value: '100+', label: 'Delivered Projects' },
              { value: '99.9%', label: 'Network Reliability' },
              { value: '5+ Years', label: 'Industry Excellence' },
            ].map((stat) => (
              <div key={stat.label}>
                <div style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--gold)', letterSpacing: '-0.02em', lineHeight: 1 }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', marginTop: 5, letterSpacing: '0.03em' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Visual */}
        <div className="hidden lg:flex" style={{ justifyContent: 'center', alignItems: 'center' }}>
          <NetworkVisual />
        </div>
      </div>
    </div>
  )
}
