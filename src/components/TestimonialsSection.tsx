const testimonials = [
  {
    stars: 5,
    text: "JS-GOLD deployed a complete campus network across our 14-building institution in under three weeks. The MikroTik routing configuration they delivered is flawless — zero downtime since go-live. Their technical documentation and staff training set a standard we have not seen elsewhere.",
    name: 'Dr. A. Ogundimu',
    role: 'Director of ICT',
    org: 'Higher Education Institution',
    initials: 'AO',
    color: 'bg-amber-100 text-amber-800 border-amber-300',
  },
  {
    stars: 5,
    text: "The live-stream production quality for our annual national convention was true broadcast-grade. Multi-camera switching, hardware encoding, and crystal-clear audio were flawlessly coordinated by a single accountable team.",
    name: 'Mrs. F. Adesanya',
    role: 'Head of Communications',
    org: 'National Faith & Event Organization',
    initials: 'FA',
    color: 'bg-blue-100 text-blue-800 border-blue-300',
  },
  {
    stars: 5,
    text: "We commissioned JS-GOLD for a complete digital overhaul: custom web portal, UI/UX system, and a cinematic corporate film. The output was top-tier quality, delivered ahead of schedule and with rigorous attention to detail.",
    name: 'Engr. C. Eze',
    role: 'Managing Director',
    org: 'Commercial Energy Solutions Group',
    initials: 'CE',
    color: 'bg-purple-100 text-purple-800 border-purple-300',
  },
  {
    stars: 5,
    text: "Their enterprise hotspot gateway solution for our student halls handles 1,200+ concurrent users without degradation. The bandwidth management and automated captive portal eliminated all connectivity complaints.",
    name: 'Prof. N. Nwosu',
    role: 'VP Infrastructure & Facilities',
    org: 'Private Academic Campus',
    initials: 'NN',
    color: 'bg-emerald-100 text-emerald-800 border-emerald-300',
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1 text-amber-500">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 1.5l1.8 3.8 4.2.6-3 3 .7 4.1L8 11l-3.7 2 .7-4.1-3-3 4.2-.6L8 1.5z" />
        </svg>
      ))}
    </div>
  )
}

export default function TestimonialsSection() {
  const featured = testimonials[0]
  const others = testimonials.slice(1)

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="section-label mb-3">
            <span>◆</span>
            <span>VERIFIED CLIENT REVIEWS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900">
            Field-Verified Trust
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            What leaders say after partnering with our software, networking, and broadcast production teams.
          </p>
        </div>

        {/* Featured Testimonial Banner (Learnerium Style) */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-sm mb-12 relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <StarRating count={featured.stars} />
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-800 bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
                  Verified Campus Network Deployment
                </span>
              </div>

              <blockquote className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug tracking-tight mb-6">
                "{featured.text}"
              </blockquote>

              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm border shadow-sm ${featured.color}`}>
                  {featured.initials}
                </div>
                <div>
                  <div className="text-base font-extrabold text-slate-900">
                    {featured.name}
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    {featured.role} &bull; <span className="text-amber-600 font-semibold">{featured.org}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex flex-col items-center justify-center p-6 rounded-2xl bg-white border border-slate-200 text-center w-52 flex-shrink-0 shadow-sm">
              <div className="text-4xl font-black text-amber-600">
                100%
              </div>
              <div className="text-xs font-bold text-slate-900 mt-1">
                Contract SLA Kept
              </div>
              <div className="text-[11px] text-slate-500 font-medium mt-1">
                Zero Unplanned Downtime
              </div>
            </div>
          </div>
        </div>

        {/* 3 Review Cards Grid (Brandstore Style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {others.map((t, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between hover:bg-white hover:shadow-lg transition-all">
              <div>
                <div className="mb-4">
                  <StarRating count={t.stars} />
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  "{t.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80 flex items-center gap-3.5">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-xs border ${t.color}`}>
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-extrabold text-slate-900">
                    {t.name}
                  </div>
                  <div className="text-xs text-slate-500">
                    {t.role}, {t.org}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
