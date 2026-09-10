const testimonials = [
  {
    stars: 5,
    text: "JS-GOLD deployed a complete campus network across our 14-building institution in under three weeks. The MikroTik CHR configuration they delivered is flawless — zero downtime since go-live. Their documentation alone is worth the engagement fee.",
    name: 'Dr. Adebayo Ogundimu',
    role: 'Director of ICT',
    org: 'Federal Polytechnic, Offa',
    initials: 'AO',
    color: '#D4AF37',
    size: 'large',
  },
  {
    stars: 5,
    text: "The live-stream production quality for our annual convocation ceremony was broadcast-grade. Multi-camera sync, hardware encoding, professional audio — all seamlessly integrated by a single team.",
    name: 'Mrs. Folake Adesanya',
    role: 'Head of Communications',
    org: 'Anchor University Lagos',
    initials: 'FA',
    color: '#50C8FF',
    size: 'small',
  },
  {
    stars: 5,
    text: "We commissioned JS-GOLD for a complete digital rebrand: website, UI/UX system, and a corporate brand film. The output was cinematic quality at a fraction of what Lagos agencies quoted us. The project was delivered two days ahead of schedule.",
    name: 'Engr. Chukwuemeka Eze',
    role: 'Managing Director',
    org: 'Transcorp Energy Solutions',
    initials: 'CE',
    color: '#A78BFA',
    size: 'medium',
  },
  {
    stars: 5,
    text: "Their enterprise hotspot gateway solution for our student accommodation handles 800+ concurrent users without degradation. The billing integration with our ERP was a custom build they delivered in-scope at no extra cost.",
    name: 'Prof. Ngozi Nwosu',
    role: 'VP Infrastructure',
    org: 'Pan-Atlantic University',
    initials: 'NN',
    color: '#D4AF37',
    size: 'small',
  },
  {
    stars: 5,
    text: "JS-GOLD handled our product launch event end-to-end: structural cabling for the venue, full AV rig, live stream to three platforms simultaneously, and post-production of the highlight reel. A genuinely elite operation.",
    name: 'Tayo Ajayi',
    role: 'Brand & Events Lead',
    org: 'Flutterwave',
    initials: 'TA',
    color: '#50C8FF',
    size: 'large',
  },
  {
    stars: 5,
    text: "The architectural photography package they delivered for our real estate portfolio helped us close 40% faster on premium units. Every image is a masterclass in HDR compositing.",
    name: 'Amaka Obi',
    role: 'Marketing Director',
    org: 'Grenadines Homes',
    initials: 'AO',
    color: '#A78BFA',
    size: 'small',
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div style={{ display: 'flex', gap: 3 }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 13 13" fill="#D4AF37">
          <path d="M6.5 1l1.5 3 3.3.5-2.4 2.3.6 3.2L6.5 8.5l-3 1.5.6-3.2L1.7 4.5 5 4z" />
        </svg>
      ))}
    </div>
  )
}

export default function TestimonialsSection() {
  return (
    <div
      className="px-4 sm:px-6 md:px-8 py-16 md:py-24"
      style={{
        maxWidth: 1280,
        margin: '0 auto',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: 60 }}>
        <div className="section-label" style={{ marginBottom: 14 }}>◆ &nbsp; Client Intelligence</div>
        <h2
          style={{
            fontSize: 'clamp(1.6rem, 2.5vw, 2.4rem)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            color: 'var(--text-primary)',
            margin: '0 0 12px',
          }}
        >
          Field-Verified Results
        </h2>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0 }}>
          What clients say, in their own words
        </p>
      </div>

      {/* Masonry grid */}
      <div
        className="masonry-cols"
        style={{
          columns: 3,
          columnGap: 20,
          columnFill: 'balance',
        }}
      >
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="testimonial-card"
            style={{
              padding: t.size === 'large' ? '28px' : t.size === 'medium' ? '24px' : '20px',
              breakInside: 'avoid',
              marginBottom: 20,
              display: 'inline-block',
              width: '100%',
            }}
          >
            <StarRating count={t.stars} />

            <p
              style={{
                fontSize: t.size === 'large' ? '0.9rem' : '0.82rem',
                lineHeight: 1.75,
                color: 'var(--text-muted)',
                margin: '14px 0 20px',
              }}
            >
              "{t.text}"
            </p>

            <hr style={{ border: 'none', borderTop: '1px solid var(--border-subtle)', margin: '0 0 16px' }} />

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                {/* Avatar */}
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    background: `${t.color}20`,
                    border: `1px solid ${t.color}50`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    color: t.color,
                    flexShrink: 0,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.2 }}>{t.name}</div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', lineHeight: 1.3, marginTop: 2 }}>
                    {t.role}
                  </div>
                </div>
              </div>

              {/* Org stamp */}
              <div
                style={{
                  padding: '4px 10px',
                  borderRadius: 4,
                  background: `${t.color}0D`,
                  border: `1px solid ${t.color}25`,
                  fontSize: '0.62rem',
                  fontWeight: 600,
                  color: t.color,
                  letterSpacing: '0.04em',
                  textAlign: 'right',
                  maxWidth: 120,
                  lineHeight: 1.4,
                }}
              >
                {t.org}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
