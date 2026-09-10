export default function TrustBar() {
  const pillars = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: 'Quality You Can Trust',
      subtitle: 'Rigorous engineering standards & 99.9% verified SLA uptime.',
      color: 'bg-amber-50 text-amber-600 border-amber-200',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
      ),
      title: 'Full-Stack Software & Networks',
      subtitle: 'Custom Laravel/Flutter platforms & MikroTik enterprise routing.',
      color: 'bg-blue-50 text-blue-600 border-blue-200',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="23 7 16 12 23 17 23 7" />
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
        </svg>
      ),
      title: 'Broadcast & AV Production',
      subtitle: 'Zero-dropout multicam live streams with Dante sound engineering.',
      color: 'bg-purple-50 text-purple-600 border-purple-200',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: 'One Accountable Team',
      subtitle: 'No vendor finger-pointing. One cohesive agency handling everything.',
      color: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    },
  ]

  return (
    <section className="py-10 bg-white border-y border-slate-100 shadow-sm relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 border shadow-sm ${item.color}`}>
                {item.icon}
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-slate-900 leading-tight">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
