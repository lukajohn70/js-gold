import { useState, useEffect, lazy, Suspense } from 'react'
import { getStoredTheme, applyTheme, type Theme } from './utils'
import Nav from './components/Nav'
import HeroSection from './components/HeroSection'
import TrustBar from './components/TrustBar'
import AtAGlance from './components/AtAGlance'
import MarqueeRibbon from './components/MarqueeRibbon'
import Footer from './components/Footer'
import SubPageShell from './components/SubPageShell'
import { scrollTo } from './utils'

// Ripple effect utility
export function attachRipple(e: React.MouseEvent<HTMLElement>) {
  const btn = e.currentTarget as HTMLElement
  const ripple = document.createElement('span')
  const rect = btn.getBoundingClientRect()
  const size = Math.max(rect.width, rect.height)
  ripple.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX - rect.left - size / 2}px;top:${e.clientY - rect.top - size / 2}px;`
  ripple.className = 'ripple-effect'
  btn.appendChild(ripple)
  ripple.addEventListener('animationend', () => ripple.remove())
}

// Lazy-load sections
const CompanyProfileSection = lazy(() => import('./components/CompanyProfileSection'))
const ServicesSection = lazy(() => import('./components/ServicesSection'))
const IndustriesSection = lazy(() => import('./components/IndustriesSection'))
const PortfolioSection = lazy(() => import('./components/PortfolioSection'))
const InsightsSection = lazy(() => import('./components/InsightsSection'))
const TestimonialsSection = lazy(() => import('./components/TestimonialsSection'))
const ContactSection = lazy(() => import('./components/ContactSection'))

export type SubPage = 'services' | null

function SectionFallback() {
  return (
    <div style={{ minHeight: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: 32, height: 32, border: '2px solid var(--border-gold)', borderTopColor: 'var(--gold)', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
    </div>
  )
}

export default function App() {
  const [theme, setTheme] = useState<Theme>('light')
  const [activePage, setActivePage] = useState('home')
  const [subPage, setSubPage] = useState<SubPage>(null)

  useEffect(() => {
    const stored = getStoredTheme()
    setTheme(stored)
    applyTheme(stored)
  }, [])

  const toggleTheme = () => {
    const next: Theme = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    applyTheme(next)
  }

  // Section scroll tracking — only when no sub-page is open
  useEffect(() => {
    if (subPage) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActivePage(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    )
    const ids = ['home', 'about', 'portfolio', 'insights', 'testimonials', 'contact']
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [subPage])

  // Section fade-in on scroll
  useEffect(() => {
    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible')
            fadeObserver.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -80px 0px', threshold: 0.05 }
    )
    document.querySelectorAll('.section-fade').forEach((el) => fadeObserver.observe(el))
    return () => fadeObserver.disconnect()
  }, [])

  const openServices = () => {
    setSubPage('services')
    setActivePage('services')
    setTimeout(() => window.scrollTo({ top: 0 }), 10)
  }

  const closeSubPage = () => {
    setSubPage(null)
    setActivePage('home')
  }

  const Background = () => (
    <>
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 15% 20%, var(--ambient-1) 0%, transparent 60%), radial-gradient(ellipse 60% 80% at 85% 70%, var(--ambient-2) 0%, transparent 60%)`,
          zIndex: 0,
        }}
      />
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, var(--scanline) 2px, var(--scanline) 4px)`,
          zIndex: 0,
        }}
      />
    </>
  )

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)', transition: 'background 0.3s ease' }}>
      <Background />

      <Nav
        activePage={activePage}
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenServices={openServices}
      />

      <main className="fade-in-on-load" style={{ position: 'relative', zIndex: 1 }}>

        {/* HOME — hero + trust bar + divisions overview + industries teaser */}
        <div id="home">
          <HeroSection onOpenServices={openServices} />
          <TrustBar />
          <AtAGlance onOpenServices={openServices} />
          <Suspense fallback={<SectionFallback />}>
            <IndustriesSection />
          </Suspense>
        </div>

        {/* ABOUT */}
        <div id="about">
          <Suspense fallback={<SectionFallback />}>
            <CompanyProfileSection />
          </Suspense>
        </div>

        {/* PORTFOLIO */}
        <div id="portfolio">
          <Suspense fallback={<SectionFallback />}>
            <PortfolioSection />
          </Suspense>
        </div>

        {/* INSIGHTS */}
        <div id="insights">
          <Suspense fallback={<SectionFallback />}>
            <InsightsSection />
          </Suspense>
        </div>

        {/* TESTIMONIALS */}
        <div id="testimonials">
          <Suspense fallback={<SectionFallback />}>
            <TestimonialsSection />
          </Suspense>
        </div>

        {/* CONTACT */}
        <div id="contact">
          <Suspense fallback={<SectionFallback />}>
            <ContactSection />
          </Suspense>
        </div>
      </main>

      <Footer theme={theme} onOpenServices={openServices} />

      {/* Services sub-page overlay */}
      {subPage === 'services' && (
        <SubPageShell
          key="services"
          title="Our Services"
          breadcrumb="Services"
          onClose={closeSubPage}
        >
          <Suspense fallback={<SectionFallback />}>
            <ServicesSection />
            {/* CTA at bottom of services overlay */}
            <div className="px-4 sm:px-6 md:px-8 pb-20" style={{ maxWidth: 1280, margin: '0 auto' }}>
              <hr className="razor-line" style={{ marginBottom: 48 }} />
              <div className="flex flex-wrap gap-4 items-center justify-between">
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 6 }}>Ready to get started?</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Book a free consultation — we'll scope your project at no obligation.</div>
                </div>
                <button
                  onClick={() => {
                    closeSubPage()
                    setTimeout(() => scrollTo('contact'), 350)
                  }}
                  className="gold-glow-btn"
                  style={{ padding: '13px 28px', borderRadius: 9, fontSize: '0.84rem', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
                >
                  Request a Free Consultation →
                </button>
              </div>
            </div>
          </Suspense>
        </SubPageShell>
      )}

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  )
}
