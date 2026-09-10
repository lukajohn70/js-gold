import { scrollTo } from '../utils'
import type { Theme } from '../utils'
import type { SubPage } from '../App'
import logoWhiteBg from '../../JS-GOLD.png'
import logoNoBg from '../../JS-GOLD - NO BG.png'
import { attachRipple } from '../App'

interface FooterProps {
  theme: Theme
  onOpenSubPage: (page: NonNullable<SubPage>) => void
}

export default function Footer({ theme, onOpenSubPage }: FooterProps) {
  const logoSrc = theme === 'light' ? logoWhiteBg : logoNoBg

  const navLinks = [
    { label: 'Home', action: () => scrollTo('home') },
    { label: 'Company Profile', action: () => scrollTo('company-profile') },
    { label: 'Insights Hub', action: () => scrollTo('insights') },
    { label: 'Testimonials', action: () => scrollTo('testimonials') },
    { label: 'Contact', action: () => scrollTo('contact') },
  ]

  const deepLinks = [
    { label: 'Our Services', action: () => onOpenSubPage('services') },
    { label: 'Our Methodology', action: () => onOpenSubPage('approach') },
    { label: 'Case Studies', action: () => onOpenSubPage('case-studies') },
    { label: 'Training & Capacity', action: () => onOpenSubPage('capacity') },
  ]

  return (
    <footer style={{ borderTop: '1px solid var(--border-subtle)', background: 'var(--section-alt)' }}>
      <div className="px-4 sm:px-6 md:px-8 pt-10 pb-6" style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <img
                src={logoSrc}
                alt="JS-GOLD Logo"
                style={{
                  width: 32, height: 32, borderRadius: 7, objectFit: 'contain',
                  background: theme === 'light' ? '#ffffff' : 'transparent',
                  border: theme === 'light' ? '1px solid var(--border-subtle)' : 'none',
                }}
              />
              <div>
                <div style={{ fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.08em', color: 'var(--gold)' }}>JS-GOLD</div>
                <div style={{ fontSize: '0.55rem', letterSpacing: '0.12em', color: 'var(--text-dim)' }}>DIGITAL WORLD</div>
              </div>
            </div>
            <p style={{ fontSize: '0.76rem', color: 'var(--text-muted)', lineHeight: 1.7, margin: '0 0 12px', maxWidth: 240 }}>
              Integrated technology and media engineering.
            </p>
            <div style={{ fontSize: '0.68rem', color: 'var(--text-dim)', letterSpacing: '0.04em', lineHeight: 1.7 }}>
              +234 815 091 7741<br />jsgold.dw@gmail.com
            </div>
          </div>

          {/* Platform nav */}
          <div>
            <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.14em', color: 'var(--gold)', marginBottom: 14, textTransform: 'uppercase' }}>Platform</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
              {navLinks.map((link) => (
                <button key={link.label} onClick={link.action}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0, fontSize: '0.76rem', color: 'var(--text-muted)', fontFamily: 'inherit', transition: 'color 0.2s ease' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)' }}>
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Deep-dive links */}
          <div>
            <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.14em', color: 'var(--gold)', marginBottom: 14, textTransform: 'uppercase' }}>Explore</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
              {deepLinks.map((link) => (
                <button key={link.label} onClick={link.action}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0, fontSize: '0.76rem', color: 'var(--text-muted)', fontFamily: 'inherit', transition: 'color 0.2s ease', display: 'flex', alignItems: 'center', gap: 5 }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--gold)' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)' }}>
                  <span style={{ fontSize: '0.6rem', color: 'var(--gold)' }}>›</span>
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div>
            <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.14em', color: 'var(--gold)', marginBottom: 14, textTransform: 'uppercase' }}>Contact</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ fontSize: '0.73rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                <div style={{ color: 'var(--text-primary)', fontWeight: 600, marginBottom: 2 }}>Nigeria HQ</div>
                +234 815 091 7741<br />jsgold.dw@gmail.com
              </div>
              <button
                onClick={(e) => { attachRipple(e); scrollTo('contact') }}
                className="gold-glow-btn ripple"
                style={{ padding: '10px 18px', borderRadius: 8, fontSize: '0.76rem', border: 'none', cursor: 'pointer', fontFamily: 'inherit', marginTop: 4 }}
              >
                Initiate a Partnership →
              </button>
            </div>
          </div>
        </div>

        <hr className="razor-line" style={{ marginBottom: 22 }} />

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
          <div style={{ fontSize: '0.68rem', color: 'var(--text-dim)', letterSpacing: '0.04em' }}>
            © 2025 JS-GOLD Digital World. All rights reserved. · RC No. Pending Registration
          </div>
          <div style={{ fontSize: '0.64rem', color: 'var(--text-dim)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            Engineering Digital Ecosystems for Institutional Scale
          </div>
        </div>
      </div>
    </footer>
  )
}
