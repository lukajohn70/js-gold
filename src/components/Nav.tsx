import { scrollTo } from '../utils'
import type { Theme } from '../utils'
import logoWhiteBg from '../../JS-GOLD.png'
import logoNoBg from '../../JS-GOLD - NO BG.png'
import { attachRipple } from '../App'

interface NavProps {
  activePage: string
  theme: Theme
  onToggleTheme: () => void
}

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'company-profile', label: 'Company Profile' },
  { id: 'insights', label: 'Insights' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact Us' },
]

export default function Nav({ activePage, theme, onToggleTheme }: NavProps) {
  const logoSrc = theme === 'light' ? logoWhiteBg : logoNoBg

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: 'var(--nav-bg)',
        backdropFilter: 'blur(25px)',
        WebkitBackdropFilter: 'blur(25px)',
        borderBottom: '1px solid var(--border-subtle)',
        boxShadow: '0 1px 0 var(--gold-glow)',
      }}
    >
      <div className="px-4 sm:px-6 md:px-8" style={{ maxWidth: 1280, margin: '0 auto', height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <button onClick={() => scrollTo('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
          <img
            src={logoSrc}
            alt="JS-GOLD Logo"
            style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              objectFit: 'contain',
              flexShrink: 0,
              boxShadow: theme === 'dark' ? '0 0 16px rgba(212,175,55,0.25)' : 'none',
              background: theme === 'light' ? '#ffffff' : 'transparent',
              border: theme === 'light' ? '1px solid var(--border-subtle)' : 'none',
            }}
          />
          <div className="hidden sm:block" style={{ lineHeight: 1, textAlign: 'left' }}>
            <div style={{ fontSize: '0.84rem', fontWeight: 800, letterSpacing: '0.08em', color: 'var(--gold)', textTransform: 'uppercase' }}>JS-GOLD</div>
            <div style={{ fontSize: '0.57rem', fontWeight: 500, letterSpacing: '0.14em', color: 'var(--text-dim)', textTransform: 'uppercase', marginTop: 2 }}>Digital World</div>
          </div>
        </button>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activePage === link.id
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  padding: '8px 14px', fontSize: '0.78rem',
                  fontWeight: isActive ? 700 : 500, letterSpacing: '0.03em',
                  color: isActive ? 'var(--gold)' : 'var(--text-muted)',
                  position: 'relative', transition: 'color 0.2s ease',
                  fontFamily: 'inherit', borderRadius: 6,
                }}
                onMouseEnter={(e) => { if (!isActive) (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)' }}
                onMouseLeave={(e) => { if (!isActive) (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)' }}
              >
                {link.label}
                {/* Gradient underline — JLM style */}
                <span style={{
                  position: 'absolute', bottom: 2, left: '50%', transform: 'translateX(-50%)',
                  width: isActive ? 14 : 0, height: 2,
                  background: 'linear-gradient(90deg, var(--gold), var(--gold-light), var(--gold))',
                  borderRadius: 1,
                  boxShadow: isActive ? '0 0 6px var(--gold-glow)' : 'none',
                  transition: 'width 0.3s ease',
                }} />
              </button>
            )
          })}
        </nav>

        {/* Right controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {/* Theme toggle */}
          <button
            onClick={onToggleTheme}
            className="theme-toggle"
            title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {theme === 'light' ? (
              /* Moon icon */
              <svg width="16" height="16" viewBox="0 0 15 15" fill="none">
                <path d="M13 8.5a5.5 5.5 0 01-7-7 6 6 0 100 14 5.5 5.5 0 007-7z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            ) : (
              /* Sun icon */
              <svg width="16" height="16" viewBox="0 0 15 15" fill="none">
                <circle cx="7.5" cy="7.5" r="2.8" stroke="currentColor" strokeWidth="1.3" />
                <path d="M7.5 1.5v1.8M7.5 11.7v1.8M1.5 7.5h1.8M11.7 7.5h1.8M3.4 3.4l1.3 1.3M10.3 10.3l1.3 1.3M10.3 4.7l1.3-1.3M3.4 11.6l1.3-1.3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            )}
          </button>

          {/* CTA — with ripple */}
          <button
            onClick={(e) => { attachRipple(e); scrollTo('contact') }}
            className="glass-btn ripple"
            style={{ padding: '9px 18px', borderRadius: 8, fontSize: '0.76rem', cursor: 'pointer', fontFamily: 'inherit' }}
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  )
}
