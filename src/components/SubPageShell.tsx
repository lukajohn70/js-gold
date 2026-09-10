import { useEffect, useRef, ReactNode } from 'react'

interface Props {
  title: string
  breadcrumb: string
  onClose: () => void
  children: ReactNode
}

export default function SubPageShell({ title, breadcrumb, onClose, children }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const savedScrollY = useRef(0)

  // Save scroll position and lock body scroll when overlay opens
  useEffect(() => {
    savedScrollY.current = window.scrollY

    // Animate in
    requestAnimationFrame(() => {
      if (containerRef.current) {
        containerRef.current.style.transform = 'translateY(0)'
        containerRef.current.style.opacity = '1'
      }
    })

    // Lock body scroll
    document.body.style.overflow = 'hidden'

    // Keyboard close
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  const handleClose = () => {
    if (containerRef.current) {
      containerRef.current.style.transform = 'translateY(40px)'
      containerRef.current.style.opacity = '0'
      containerRef.current.style.transition = 'transform 0.3s ease, opacity 0.3s ease'
    }
    setTimeout(() => {
      onClose()
      // Restore scroll position
      window.scrollTo({ top: savedScrollY.current, behavior: 'instant' })
    }, 300)
  }

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 200,
        background: 'var(--bg-primary)',
        overflowY: 'auto',
        transform: 'translateY(40px)',
        opacity: 0,
        transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.4s ease',
      }}
      ref={containerRef}
    >
      {/* Ambient background */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 15% 20%, var(--ambient-1) 0%, transparent 60%), radial-gradient(ellipse 60% 80% at 85% 70%, var(--ambient-2) 0%, transparent 60%)',
          zIndex: 0,
        }}
      />

      {/* Sticky top bar */}
      <div
        style={{
          position: 'sticky', top: 0, zIndex: 10,
          background: 'var(--nav-bg)',
          backdropFilter: 'blur(25px)',
          WebkitBackdropFilter: 'blur(25px)',
          borderBottom: '1px solid var(--border-subtle)',
          boxShadow: '0 1px 0 var(--gold-glow)',
        }}
      >
        <div
          className="px-4 sm:px-6 md:px-8"
          style={{ maxWidth: 1280, margin: '0 auto', height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        >
          {/* Back button + breadcrumb */}
          <button
            onClick={handleClose}
            style={{
              display: 'flex', alignItems: 'center', gap: 10,
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: 'inherit', padding: 0,
            }}
          >
            <span style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: 32, height: 32, borderRadius: '50%',
              border: '1px solid var(--border-subtle)',
              background: 'var(--glass-bg)',
              color: 'var(--text-primary)', fontSize: '1rem',
              transition: 'all 0.2s ease',
            }}
              onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'var(--gold)'; el.style.color = 'var(--gold)' }}
              onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'var(--border-subtle)'; el.style.color = 'var(--text-primary)' }}
            >
              ←
            </span>
            <div>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.12em', color: 'var(--text-dim)', fontWeight: 600 }}>
                JS-GOLD / {breadcrumb}
              </div>
              <div style={{ fontSize: '0.88rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.01em', lineHeight: 1.2 }}>
                {title}
              </div>
            </div>
          </button>

          {/* Close */}
          <button
            onClick={handleClose}
            title="Close (Esc)"
            aria-label="Close sub-page"
            style={{
              width: 36, height: 36, borderRadius: '50%',
              border: '1px solid var(--border-subtle)',
              background: 'var(--glass-bg)',
              color: 'var(--text-muted)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', fontFamily: 'inherit', fontSize: '1.1rem',
              transition: 'all 0.2s ease', flexShrink: 0,
            }}
            onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'var(--border-gold)'; el.style.color = 'var(--gold)' }}
            onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'var(--border-subtle)'; el.style.color = 'var(--text-muted)' }}
          >
            ✕
          </button>
        </div>
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>

      {/* Scroll-to-top button */}
      <button
        onClick={() => { containerRef.current?.scrollTo({ top: 0, behavior: 'smooth' }) }}
        style={{
          position: 'fixed', bottom: 28, right: 24,
          width: 44, height: 44, borderRadius: '50%',
          background: 'var(--gold)', color: 'var(--bg-primary)',
          border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1rem', boxShadow: '0 4px 20px var(--gold-dim)',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          zIndex: 20,
        }}
        onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = 'scale(1.1)'; el.style.boxShadow = '0 8px 30px var(--gold-dim)' }}
        onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = 'scale(1)'; el.style.boxShadow = '0 4px 20px var(--gold-dim)' }}
        title="Back to top"
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </div>
  )
}
