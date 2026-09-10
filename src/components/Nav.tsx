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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 shadow-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* Logo (Learnerium Style) */}
        <button
          onClick={() => scrollTo('home')}
          className="flex items-center gap-3 bg-transparent border-none cursor-pointer p-0 group text-left"
        >
          <img
            src={logoSrc}
            alt="JS-GOLD Logo"
            className="w-10 h-10 object-contain rounded-xl transition group-hover:scale-105 shadow-sm"
          />
          <div className="leading-tight">
            <div className="text-base font-black tracking-tight text-slate-900 dark:text-white uppercase">
              JS-GOLD
            </div>
            <div className="text-[10px] font-extrabold uppercase tracking-widest text-amber-600 dark:text-amber-400">
              Digital World
            </div>
          </div>
        </button>

        {/* Nav links (Desktop - Learnerium Style) */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = activePage === link.id
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link)}
                className={`text-sm font-bold transition-colors duration-200 relative group py-1 cursor-pointer bg-transparent border-none ${
                  isActive
                    ? 'text-amber-600 dark:text-amber-400'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-600 transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            )
          })}
        </nav>

        {/* Right Action Controls */}
        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={onToggleTheme}
            className="w-10 h-10 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-amber-600 cursor-pointer transition shadow-sm"
            title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <svg width="18" height="18" viewBox="0 0 15 15" fill="none">
                <path d="M13 8.5a5.5 5.5 0 01-7-7 6 6 0 100 14 5.5 5.5 0 007-7z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 15 15" fill="none">
                <circle cx="7.5" cy="7.5" r="2.8" stroke="currentColor" strokeWidth="1.4" />
                <path d="M7.5 1.5v1.8M7.5 11.7v1.8M1.5 7.5h1.8M11.7 7.5h1.8M3.4 3.4l1.3 1.3M10.3 10.3l1.3 1.3M10.3 4.7l1.3-1.3M3.4 11.6l1.3-1.3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            )}
          </button>

          {/* CTA Button (Learnerium Style) */}
          <button
            onClick={(e) => { attachRipple(e); scrollTo('contact') }}
            className="hidden sm:inline-flex bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-md shadow-amber-500/20 hover:scale-105 hover:shadow-lg transition-all cursor-pointer"
          >
            Free Consultation →
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
            aria-label="Toggle navigation menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {mobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 py-6 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-xl">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive = activePage === link.id
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link)}
                  className={`text-left px-4 py-3 rounded-xl text-sm font-bold transition ${
                    isActive
                      ? 'bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50'
                  }`}
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
              className="w-full mt-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white py-3 px-4 rounded-xl text-sm font-bold text-center shadow"
            >
              Free Consultation →
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
