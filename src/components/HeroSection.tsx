import { scrollTo } from '../utils'
import NetworkVisual from './NetworkVisual'
import { attachRipple } from '../App'

export default function HeroSection() {
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

      {/* Floating ambient blobs — JLM-inspired */}
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
            ◆ &nbsp; Integrated Technology &amp; Media Group · Nigeria
          </div>

          <h1 style={{
            fontSize: 'clamp(2rem, 3.5vw, 3.1rem)', fontWeight: 800, lineHeight: 1.1,
            letterSpacing: '-0.025em', color: 'var(--text-primary)', margin: '0 0 20px',
          }}>
            Engineering Digital Ecosystems for{' '}
            <span style={{
              background: 'linear-gradient(135deg, #D4AF37 0%, #E8CC6A 60%, #D4AF37 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              Institutional Scale
            </span>
          </h1>

          {/* Concise — JLM-style single punch line */}
          <p style={{ fontSize: '0.97rem', lineHeight: 1.75, color: 'var(--text-muted)', margin: '0 0 28px', maxWidth: 440 }}>
            Five divisions. One team. Software, networks, broadcast, creative media, and consultancy — under one operational framework.
          </p>

          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '8px 16px', borderRadius: 6, marginBottom: 36,
            background: 'var(--gold-glow)', border: '1px solid var(--border-gold)',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--gold)', flexShrink: 0 }} />
            <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.06em', color: 'var(--gold)' }}>
              End-to-end technology. One accountable team.
            </span>
          </div>

          <div style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={(e) => { attachRipple(e); scrollTo('services') }}
              className="gold-glow-btn ripple"
              style={{ padding: '13px 28px', borderRadius: 9, fontSize: '0.85rem', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
            >
              Explore Our Capabilities
            </button>

            <button
              onClick={() => scrollTo('company-profile')}
              title="View Company Profile"
              className="glass-btn ripple"
              style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '11px 18px', borderRadius: 9,
                fontSize: '0.78rem', cursor: 'pointer', fontFamily: 'inherit',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1v8M4 6.5L7 9.5 10 6.5M1.5 11h11" stroke="var(--gold)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Company Dossier
            </button>
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', gap: 24, marginTop: 48, paddingTop: 24, borderTop: '1px solid var(--border-subtle)', flexWrap: 'wrap' }}>
            {[
              { value: '5', label: 'Divisions' },
              { value: '200+', label: 'Deployments' },
              { value: '99.9%', label: 'Uptime SLA' },
              { value: '10+', label: 'Industries' },
            ].map((stat) => (
              <div key={stat.label}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--gold)', letterSpacing: '-0.02em', lineHeight: 1 }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.68rem', color: 'var(--text-dim)', marginTop: 4, letterSpacing: '0.04em' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Visual — hidden on mobile */}
        <div className="hidden lg:flex" style={{ justifyContent: 'center', alignItems: 'center' }}>
          <NetworkVisual />
        </div>
      </div>
    </div>
  )
}
