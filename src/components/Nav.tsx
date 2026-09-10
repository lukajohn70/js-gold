import { useState } from 'react'
import { scrollTo } from '../utils'
import type { Theme } from '../utils'
import logoWhiteBg from '../../JS-GOLD.png'
import logoNoBg from '../../JS-GOLD - NO BG.png'
import { attachRipple } from '../App'

interface NavProps {
  activePage: string
  theme: Theme
  onToggleTheme: () => void
  onOpenServices?: () => void
}

interface NavLink {
  id: string
  label: string
  isSubPage?: boolean
}

const navLinks: NavLink[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'services', label: 'Services', isSubPage: true },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'contact', label: 'Contact' },
]

export default function Nav({ activePage, theme, onToggleTheme, onOpenServices }: NavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const logoSrc = theme === 'light' ? logoWhiteBg : logoNoBg

  const handleLinkClick = (link: NavLink) => {
    setMobileMenuOpen(false)
    if (link.isSubPage && onOpenServices) {
      onOpenServices()
    } else {
      scrollTo(link.id)
    }
  }

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
          <div className="text-left" style={{ lineHeight: 1 }}>
            <div style={{ fontSize: '0.84rem', fontWeight: 800, letterSpacing: '0.08em', color: 'var(--gold)', textTransform: 'uppercase' }}>JS-GOLD</div>
            <div style={{ fontSize: '0.57rem', fontWeight: 500, letterSpacing: '0.14em', color: 'var(--text-dim)', textTransform: 'uppercase', marginTop: 2 }}>Digital World</div>
          </div>
        </button>

        {/* Nav links (desktop) */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activePage === link.id
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link)}
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
                {/* Gradient underline */}
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
              <svg width="16" height="16" viewBox="0 0 15 15" fill="none">
                <path d="M13 8.5a5.5 5.5 0 01-7-7 6 6 0 100 14 5.5 5.5 0 007-7z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 15 15" fill="none">
                <circle cx="7.5" cy="7.5" r="2.8" stroke="currentColor" strokeWidth="1.3" />
                <path d="M7.5 1.5v1.8M7.5 11.7v1.8M1.5 7.5h1.8M11.7 7.5h1.8M3.4 3.4l1.3 1.3M10.3 10.3l1.3 1.3M10.3 4.7l1.3-1.3M3.4 11.6l1.3-1.3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            )}
          </button>

          {/* CTA — with ripple */}
          <button
            onClick={(e) => { attachRipple(e); scrollTo('contact') }}
            className="glass-btn ripple hidden sm:inline-flex"
            style={{ padding: '9px 18px', borderRadius: 8, fontSize: '0.76rem', cursor: 'pointer', fontFamily: 'inherit' }}
          >
            Free Consultation
          </button>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg"
            style={{ background: 'var(--bg-glass)', border: '1px solid var(--border-subtle)', color: 'var(--text-primary)' }}
            aria-label="Toggle menu"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {mobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div
          className="md:hidden px-4 py-4"
          style={{
            background: 'var(--nav-bg)',
            borderBottom: '1px solid var(--border-subtle)',
            backdropFilter: 'blur(25px)',
          }}
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activePage === link.id
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link)}
                  className="text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
                  style={{
                    color: isActive ? 'var(--gold)' : 'var(--text-primary)',
                    background: isActive ? 'var(--gold-glow)' : 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  {link.label}
                </button>
              )
            })}
            <button
              onClick={(e) => {
                setMobileMenuOpen(false)
                attachRipple(e)
                scrollTo('contact')
              }}
              className="gold-glow-btn mt-2 py-2.5 px-4 text-center rounded-lg text-sm font-semibold"
              style={{ border: 'none', cursor: 'pointer' }}
            >
              Free Consultation →
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
