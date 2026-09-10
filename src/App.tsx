import { useState, useEffect, lazy, Suspense } from 'react'
import { getStoredTheme, applyTheme, type Theme } from './utils'
import Nav from './components/Nav'
import HeroSection from './components/HeroSection'
import AtAGlance from './components/AtAGlance'
import Footer from './components/Footer'
import SubPageShell from './components/SubPageShell'

// Attach ripple effect to any .ripple button
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

// Lazy-load main SPA pages
const CompanyProfileSection = lazy(() => import('./components/CompanyProfileSection'))
const InsightsSection = lazy(() => import('./components/InsightsSection'))
const TestimonialsSection = lazy(() => import('./components/TestimonialsSection'))
const ContactSection = lazy(() => import('./components/ContactSection'))

// Lazy-load sub-pages
const ServicesSection = lazy(() => import('./components/ServicesSection'))
const IndustriesSection = lazy(() => import('./components/IndustriesSection'))
const TechStackSection = lazy(() => import('./components/TechStackSection'))
const ValuePropSection = lazy(() => import('./components/ValuePropSection'))
const ProcessSection = lazy(() => import('./components/ProcessSection'))
const CaseStudiesSection = lazy(() => import('./components/CaseStudiesSection'))
const CapacitySection = lazy(() => import('./components/CapacitySection'))

export type SubPage = 'services' | 'approach' | 'case-studies' | 'capacity' | null

function SectionFallback() {
  return (
    <div style={{ minHeight: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: 32, height: 32, border: '2px solid var(--border-gold)', borderTopColor: 'var(--gold)', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
    </div>
  )
}

const subPageMeta: Record<NonNullable<SubPage>, { title: string; breadcrumb: string }> = {
  services: { title: 'Our Services & Divisions', breadcrumb: 'Services' },
  approach: { title: 'Our Approach & Methodology', breadcrumb: 'Our Approach' },
  'case-studies': { title: 'Case Studies', breadcrumb: 'Case Studies' },
  capacity: { title: 'Training & Capacity Development', breadcrumb: 'Capacity' },
}

function SubPageContent({ page, onOpenSubPage }: { page: NonNullable<SubPage>; onOpenSubPage: (p: NonNullable<SubPage>) => void }) {
  switch (page) {
    case 'services':
      return (
        <Suspense fallback={<SectionFallback />}>
          <ServicesSection />
          <IndustriesSection />
          <TechStackSection />
          {/* CTA to approach sub-page */}
          <div className="px-4 sm:px-6 md:px-8 pb-16" style={{ maxWidth: 1280, margin: '0 auto' }}>
            <hr className="razor-line" style={{ marginBottom: 48 }} />
            <div className="flex flex-wrap gap-3 items-center justify-between">
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 4 }}>Want to know how we deliver?</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Our nine-step methodology and why clients choose us.</div>
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => onOpenSubPage('approach')}
                  className="glass-btn"
                  style={{ padding: '10px 22px', borderRadius: 8, fontSize: '0.78rem', cursor: 'pointer', fontFamily: 'inherit' }}
                >
                  Our Methodology →
                </button>
                <button
                  onClick={() => onOpenSubPage('case-studies')}
                  className="glass-btn"
                  style={{ padding: '10px 22px', borderRadius: 8, fontSize: '0.78rem', cursor: 'pointer', fontFamily: 'inherit' }}
                >
                  View Case Studies →
                </button>
              </div>
            </div>
          </div>
        </Suspense>
      )
    case 'approach':
      return (
        <Suspense fallback={<SectionFallback />}>
          <ValuePropSection />
          <ProcessSection />
        </Suspense>
      )
    case 'case-studies':
      return (
        <Suspense fallback={<SectionFallback />}>
          <CaseStudiesSection />
        </Suspense>
      )
    case 'capacity':
      return (
        <Suspense fallback={<SectionFallback />}>
          <CapacitySection />
        </Suspense>
      )
  }
}

export default function App() {
  const [theme, setTheme] = useState<Theme>('light')
  const [activePage, setActivePage] = useState('home')
  const [subPage, setSubPage] = useState<SubPage>(null)

  // Apply stored theme on mount
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

  // Track active section for nav highlight
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActivePage(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    )
    const ids = ['home', 'company-profile', 'insights', 'testimonials', 'contact']
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

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

  const openSubPage = (page: NonNullable<SubPage>) => {
    setSubPage(page)
    // Scroll sub-page overlay to top
    setTimeout(() => window.scrollTo({ top: 0 }), 10)
  }

  const closeSubPage = () => setSubPage(null)

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

      <Nav activePage={activePage} theme={theme} onToggleTheme={toggleTheme} />

      <main className="fade-in-on-load" style={{ position: 'relative', zIndex: 1 }}>

        {/* HOME */}
        <div id="home">
          <HeroSection />
          <AtAGlance onOpenSubPage={openSubPage} />
        </div>

        {/* COMPANY PROFILE */}
        <div id="company-profile">
          <Suspense fallback={<SectionFallback />}>
            <CompanyProfileSection />
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

      <Footer theme={theme} />

      {/* Sub-page overlay */}
      {subPage && (
        <SubPageShell
          key={subPage}
          title={subPageMeta[subPage].title}
          breadcrumb={subPageMeta[subPage].breadcrumb}
          onClose={closeSubPage}
        >
          <SubPageContent page={subPage} onOpenSubPage={openSubPage} />
        </SubPageShell>
      )}

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  )
}
