import { scrollTo } from '../utils'

const industries = [
  {
    title: 'Institutions & Education',
    icon: '🎓',
    tagline: 'Campus networks, student portals, and auditorium AV',
    description: 'We engineer large-scale campus Wi-Fi topologies, MikroTik hotspot bandwidth management, student information portals, and auditorium multimedia installations.',
    tags: ['Campus Wi-Fi', 'Hotspot Gateways', 'Auditorium AV', 'Portal Dev'],
    accent: '#D4AF37',
  },
  {
    title: 'Businesses & Startups',
    icon: '🏢',
    tagline: 'Custom applications, robust networks, and brand identity',
    description: 'From bespoke Laravel web apps and Flutter mobile products to office secure networks and UI/UX design systems that drive customer growth.',
    tags: ['Custom Software', 'Office Networks', 'UI/UX Design', 'API Systems'],
    accent: '#50C8FF',
  },
  {
    title: 'Events & Broadcast Clients',
    icon: '🎬',
    tagline: 'High-definition live streaming, sound, and multicam production',
    description: 'Zero-fail live streaming for conferences, institutional ceremonies, religious bodies, and cultural concerts with multi-camera director switching.',
    tags: ['Multicam Production', 'Low-Latency Streaming', 'Sound Engineering', 'Live Graphics'],
    accent: '#A78BFA',
  },
  {
    title: 'Creators, Brands & Individuals',
    icon: '👤',
    tagline: 'Cinematic video, audio production, and visual storytelling',
    description: 'Professional 4K videography, creative editing, DaVinci color grading, podcast sound mastering, and distinctive digital brand assets.',
    tags: ['Cinematography', 'Video Editing', 'Audio Jingles', 'Visual Branding'],
    accent: '#34D399',
  },
]

export default function IndustriesSection() {
  return (
    <div className="px-4 sm:px-6 md:px-8 pb-24" style={{ maxWidth: 1280, margin: '0 auto' }}>
      <hr className="razor-line" style={{ marginBottom: 64 }} />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12" style={{ alignItems: 'start' }}>

        <div className="lg:col-span-1">
          <div className="section-label" style={{ marginBottom: 14 }}>◆ &nbsp; Who We Serve</div>
          <h2 style={{ fontSize: 'clamp(1.5rem, 2.2vw, 2.1rem)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text-primary)', margin: '0 0 16px', lineHeight: 1.2 }}>
            Versatile Solutions.<br />
            <span style={{ color: 'var(--gold)' }}>Tailored Execution.</span>
          </h2>
          <p style={{ fontSize: '0.86rem', lineHeight: 1.75, color: 'var(--text-muted)', margin: '0 0 24px' }}>
            Whether you are an academic institution needing campus-wide connectivity or an event organizer requiring broadcast-quality live streaming, we deliver precision.
          </p>
          <button
            onClick={() => scrollTo('contact')}
            className="glass-btn"
            style={{ padding: '10px 20px', borderRadius: 8, fontSize: '0.78rem', cursor: 'pointer', fontFamily: 'inherit' }}
          >
            Discuss Your Needs →
          </button>
        </div>

        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-5">
          {industries.map((ind, i) => (
            <div
              key={i}
              className="glass-card flex flex-col justify-between"
              style={{
                padding: '26px 24px',
                borderRadius: 12,
                borderLeft: `3px solid ${ind.accent}`,
              }}
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span style={{ fontSize: '1.4rem' }}>{ind.icon}</span>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                      {ind.title}
                    </h3>
                    <div style={{ fontSize: '0.72rem', color: ind.accent, fontWeight: 600 }}>
                      {ind.tagline}
                    </div>
                  </div>
                </div>

                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.65, margin: '0 0 16px' }}>
                  {ind.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[var(--border-subtle)]">
                {ind.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: '0.68rem',
                      fontWeight: 600,
                      padding: '3px 8px',
                      borderRadius: 4,
                      background: 'var(--bg-surface)',
                      color: 'var(--text-dim)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
