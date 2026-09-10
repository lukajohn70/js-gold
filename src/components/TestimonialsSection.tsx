const testimonials = [
  {
    stars: 5,
    text: "JS-GOLD deployed a complete campus network across our 14-building institution in under three weeks. The MikroTik routing configuration they delivered is flawless — zero downtime since go-live. Their technical documentation and staff training set a standard we have not seen elsewhere.",
    name: 'Dr. A. Ogundimu',
    role: 'Director of ICT',
    org: 'Higher Education Institution',
    initials: 'AO',
    color: '#E5C07B',
    featured: true,
  },
  {
    stars: 5,
    text: "The live-stream production quality for our annual national convention was true broadcast-grade. Multi-camera switching, hardware encoding, and crystal-clear audio were flawlessly coordinated by a single accountable team.",
    name: 'F. Adesanya',
    role: 'Head of Communications',
    org: 'National Faith & Event Organization',
    initials: 'FA',
    color: '#50C8FF',
  },
  {
    stars: 5,
    text: "We commissioned JS-GOLD for a complete digital overhaul: custom web portal, UI/UX system, and a cinematic corporate film. The output was top-tier quality, delivered ahead of schedule and with rigorous attention to detail.",
    name: 'Engr. C. Eze',
    role: 'Managing Director',
    org: 'Commercial Energy Solutions Group',
    initials: 'CE',
    color: '#A78BFA',
  },
  {
    stars: 5,
    text: "Their enterprise hotspot gateway solution for our student halls handles 1,200+ concurrent users without degradation. The bandwidth management and automated captive portal eliminated all connectivity complaints.",
    name: 'Prof. N. Nwosu',
    role: 'VP Infrastructure & Facilities',
    org: 'Private Academic Campus',
    initials: 'NN',
    color: '#E5C07B',
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1 text-[var(--gold)]">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
          <path d="M7 1l1.6 3.3 3.6.5-2.6 2.5.6 3.6L7 9.2l-3.2 1.7.6-3.6L1.8 4.8l3.6-.5L7 1z" />
        </svg>
      ))}
    </div>
  )
}

export default function TestimonialsSection() {
  const featured = testimonials.find((t) => t.featured) || testimonials[0]
  const rest = testimonials.filter((t) => !t.featured)

  return (
    <div id="testimonials" className="section-fade px-4 sm:px-6 md:px-8 py-20 md:py-28 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="section-label mb-3">
          <span>◆</span>
          <span>CLIENT TRUST &amp; VERIFIED REVIEWS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text-primary)]">
          Field-Verified Trust
        </h2>
        <p className="text-sm sm:text-base text-[var(--text-muted)] mt-3 leading-relaxed">
          What leaders say after partnering with our engineering, broadcast, and creative teams.
        </p>
      </div>

      {/* Hero Spotlight Testimonial */}
      <div
        className="glass-card p-8 sm:p-12 rounded-3xl mb-8 relative overflow-hidden"
        style={{
          border: '1px solid rgba(229,192,123,0.3)',
          background: 'linear-gradient(135deg, rgba(17,21,34,0.9) 0%, rgba(13,17,26,0.95) 100%)',
        }}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <StarRating count={featured.stars} />
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--gold)] bg-[var(--gold)]/10 px-2.5 py-0.5 rounded border border-[var(--gold)]/20">
                Verified Campus Network Deployment
              </span>
            </div>

            <blockquote className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[var(--text-primary)] leading-snug tracking-tight mb-8">
              "{featured.text}"
            </blockquote>

            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center font-extrabold text-base"
                style={{
                  background: `${featured.color}20`,
                  color: featured.color,
                  border: `1px solid ${featured.color}40`,
                }}
              >
                {featured.initials}
              </div>
              <div>
                <div className="text-base font-extrabold text-[var(--text-primary)]">
                  {featured.name}
                </div>
                <div className="text-xs text-[var(--text-muted)]">
                  {featured.role} • <span className="text-[var(--gold)]">{featured.org}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex flex-col items-center justify-center p-6 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-center w-52 flex-shrink-0">
            <div className="text-3xl font-extrabold text-[var(--gold)] font-display">
              100%
            </div>
            <div className="text-xs font-bold text-[var(--text-primary)] mt-1">
              Contract SLA Kept
            </div>
            <div className="text-[11px] text-[var(--text-dim)] font-mono mt-2">
              Zero Unplanned Downtime
            </div>
          </div>
        </div>
      </div>

      {/* Grid of Other Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {rest.map((t, idx) => (
          <div
            key={idx}
            className="glass-card p-6 rounded-2xl flex flex-col justify-between"
            style={{
              borderTop: `2px solid ${t.color}`,
            }}
          >
            <div>
              <div className="mb-4">
                <StarRating count={t.stars} />
              </div>

              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-6">
                "{t.text}"
              </p>
            </div>

            <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-xs"
                style={{
                  background: `${t.color}20`,
                  color: t.color,
                }}
              >
                {t.initials}
              </div>
              <div>
                <div className="text-xs font-bold text-[var(--text-primary)]">
                  {t.name}
                </div>
                <div className="text-[11px] text-[var(--text-dim)]">
                  {t.role}, {t.org}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
