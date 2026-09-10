import { scrollTo } from '../utils'
import type { Theme } from '../utils'
import logoWhiteBg from '../../JS-GOLD.png'
import logoNoBg from '../../JS-GOLD - NO BG.png'
import { attachRipple } from '../App'

interface FooterProps {
  theme: Theme
  onOpenServices?: () => void
}

export default function Footer({ theme, onOpenServices }: FooterProps) {
  const logoSrc = theme === 'light' ? logoWhiteBg : logoNoBg

  const navLinks = [
    { label: 'Home', action: () => scrollTo('home') },
    { label: 'About Us', action: () => scrollTo('about') },
    { label: 'Our Services', action: () => onOpenServices ? onOpenServices() : scrollTo('home') },
    { label: 'Portfolio & Case Studies', action: () => scrollTo('portfolio') },
    { label: 'Insights & Blog', action: () => scrollTo('insights') },
    { label: 'Client Testimonials', action: () => scrollTo('testimonials') },
    { label: 'Contact', action: () => scrollTo('contact') },
  ]

  const divisionLinks = [
    { label: 'Software & Networking', action: () => onOpenServices ? onOpenServices() : scrollTo('home') },
    { label: 'Broadcast & AV Systems', action: () => onOpenServices ? onOpenServices() : scrollTo('home') },
    { label: 'Creative Media & Design', action: () => onOpenServices ? onOpenServices() : scrollTo('home') },
  ]

  return (
    <footer style={{ borderTop: '1px solid var(--border-subtle)', background: 'var(--section-alt)' }}>
      <div className="px-4 sm:px-6 md:px-8 pt-12 pb-8" style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <img
                src={logoSrc}
                alt="JS-GOLD Logo"
                style={{
                  width: 34, height: 34, borderRadius: 7, objectFit: 'contain',
                  background: theme === 'light' ? '#ffffff' : 'transparent',
                  border: theme === 'light' ? '1px solid var(--border-subtle)' : 'none',
                }}
              />
              <div>
                <div style={{ fontSize: '0.82rem', fontWeight: 800, letterSpacing: '0.08em', color: 'var(--gold)' }}>JS-GOLD</div>
                <div style={{ fontSize: '0.56rem', letterSpacing: '0.12em', color: 'var(--text-dim)' }}>DIGITAL WORLD</div>
              </div>
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.7, margin: '0 0 14px', maxWidth: 260 }}>
              Full-stack technology and multimedia agency. Software engineering, enterprise networking, broadcast production, and creative media.
            </p>
            <div style={{ fontSize: '0.74rem', color: 'var(--gold)', fontWeight: 700, letterSpacing: '0.04em' }}>
              Quality You Can Trust
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', color: 'var(--gold)', marginBottom: 14, textTransform: 'uppercase' }}>Navigation</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
              {navLinks.map((link) => (
                <button key={link.label} onClick={link.action}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0, fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'inherit', transition: 'color 0.2s ease' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)' }}>
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Divisions */}
          <div>
            <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', color: 'var(--gold)', marginBottom: 14, textTransform: 'uppercase' }}>Core Divisions</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
              {divisionLinks.map((div) => (
                <button key={div.label} onClick={div.action}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0, fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'inherit', transition: 'color 0.2s ease', display: 'flex', alignItems: 'center', gap: 6 }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--gold)' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)' }}>
                  <span style={{ fontSize: '0.65rem', color: 'var(--gold)' }}>›</span>
                  {div.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact info & CTA */}
          <div>
            <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', color: 'var(--gold)', marginBottom: 14, textTransform: 'uppercase' }}>Contact &amp; Location</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                <div style={{ color: 'var(--text-primary)', fontWeight: 600, marginBottom: 2 }}>Nigeria</div>
                +234 815 091 7741<br />
                jsgold.dw@gmail.com
              </div>
              <button
                onClick={(e) => { attachRipple(e); scrollTo('contact') }}
                className="gold-glow-btn ripple"
                style={{ padding: '11px 20px', borderRadius: 8, fontSize: '0.78rem', border: 'none', cursor: 'pointer', fontFamily: 'inherit', width: 'fit-content' }}
              >
                Free Consultation →
              </button>
            </div>
          </div>
        </div>

        <hr className="razor-line" style={{ marginBottom: 24 }} />

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', letterSpacing: '0.02em' }}>
            © {new Date().getFullYear()} JS-GOLD Digital World. All rights reserved.
          </div>
          <div style={{ fontSize: '0.68rem', color: 'var(--text-dim)', letterSpacing: '0.04em' }}>
            Quality You Can Trust · Technology &amp; Multimedia Agency
          </div>
        </div>
      </div>
    </footer>
  )
}
