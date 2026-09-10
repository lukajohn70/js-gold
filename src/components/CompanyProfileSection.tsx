import Timeline from './Timeline'

const coreValues = [
  { label: 'Excellence', icon: '◈', body: 'Every deliverable meets a rigorous engineering standard before deployment.' },
  { label: 'Innovation', icon: '◇', body: 'We leverage modern, battle-tested tools that solve actual problems with measurable ROI.' },
  { label: 'Integrity', icon: '▣', body: 'Transparent scopes, honest assessments, and realistic milestone schedules.' },
  { label: 'Reliability', icon: '⬡', body: 'We build for uptime, high concurrency, and uninterrupted business continuity.' },
  { label: 'Partnership', icon: '▦', body: 'We stand by our work with proactive maintenance, training, and strategic advisory.' },
]

const teamMembers = [
  {
    name: 'John Luka',
    role: 'Technical Director & Lead Architect',
    division: 'Executive & Engineering',
    bio: 'Oversees technology architecture, software systems, and enterprise network design with a focus on high-reliability infrastructure.',
    avatar: 'JL',
    color: '#D4AF37',
  },
  {
    name: 'Lead Network Engineer',
    role: 'Head of Infrastructure & Security',
    division: 'Software & Networking',
    bio: 'Specialist in MikroTik routing, bandwidth management, campus fiber distribution, and robust multi-site network topologies.',
    avatar: 'NE',
    color: '#50C8FF',
  },
  {
    name: 'Head of Broadcast Production',
    role: 'Chief AV & Streaming Engineer',
    division: 'Broadcast & AV Systems',
    bio: 'Directs multi-camera live productions, broadcast-grade video encoding, audio mastering, and low-latency digital streams.',
    avatar: 'BP',
    color: '#A78BFA',
  },
  {
    name: 'Creative Media Director',
    role: 'Lead Visual Storyteller & Designer',
    division: 'Creative Media',
    bio: 'Leads digital visual branding, cinematic cinematography, UI/UX interaction systems, and high-impact post-production.',
    avatar: 'CD',
    color: '#34D399',
  },
]

const differentiators = [
  {
    title: 'The Unified Agency Advantage',
    desc: 'Most clients struggle managing separate software developers, IT networking contractors, and video production teams. At JS-GOLD, these disciplines communicate seamlessly under one roof.',
    badge: 'Single Accountability',
  },
  {
    title: 'Enterprise-Grade Engineering',
    desc: 'Whether configuring a 1,000-user MikroTik campus hotspot or architecting a Laravel backend, we adhere to strict international engineering standards and version control.',
    badge: 'Production-Ready',
  },
  {
    title: 'Precision Live Execution',
    desc: 'There are no second takes during a live conference, church service, or major institution event. Our redundant broadcast and AV setups guarantee flawless uptime.',
    badge: 'Zero Downtime',
  },
  {
    title: 'Quality You Can Trust',
    desc: 'From day one, our ethos has been built on long-term client trust. We provide complete documentation, staff handover training, and responsive ongoing support.',
    badge: 'Commitment',
  },
]

export default function CompanyProfileSection() {
  return (
    <div className="section-fade" style={{ background: 'var(--section-alt)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)', position: 'relative' }}>
      <div className="px-4 sm:px-6 md:px-8 py-20" style={{ maxWidth: 1280, margin: '0 auto' }}>

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="section-label" style={{ marginBottom: 12 }}>◆ &nbsp; About JS-GOLD Digital World</div>
          <h2 style={{
            fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 800,
            letterSpacing: '-0.025em', color: 'var(--text-primary)', margin: '0 0 16px', lineHeight: 1.2,
          }}>
            Engineering Excellence Across{' '}
            <span style={{
              background: 'linear-gradient(135deg, var(--gold), var(--gold-light))',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              Bits &amp; Broadcast
            </span>
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.7, margin: 0 }}>
            We are a technology and multimedia engineering agency bridging the gap between digital systems and creative execution. We turn technical complexity into seamless operations.
          </p>
        </div>

        {/* Mission & Vision */}
        <div style={{ marginBottom: 64 }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                label: 'OUR MISSION',
                headline: 'Engineering Integrated Digital Solutions',
                body: 'To deliver dependable technology infrastructure, cutting-edge software, and premium multimedia experiences that empower organizations, businesses, and creators to achieve their highest ambitions.',
                accent: 'var(--gold)',
              },
              {
                label: 'OUR VISION',
                headline: 'A Benchmark for Technology & Media in Africa',
                body: 'To stand as the most trusted full-stack digital agency in our region — recognized for absolute technical integrity, creative distinction, and sustainable digital impact.',
                accent: '#50C8FF',
              },
            ].map((item) => (
              <div key={item.label} style={{
                padding: '32px', borderRadius: 14,
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderLeft: `4px solid ${item.accent}`,
              }}>
                <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', color: item.accent, marginBottom: 12 }}>{item.label}</div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', margin: '0 0 12px', lineHeight: 1.3 }}>{item.headline}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.75 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why JS-GOLD */}
        <div style={{ marginBottom: 64 }}>
          <div className="section-label" style={{ marginBottom: 12 }}>◆ &nbsp; Why Partner With Us</div>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', margin: '0 0 28px', letterSpacing: '-0.01em' }}>
            Why Clients Choose JS-GOLD Digital World
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {differentiators.map((diff, i) => (
              <div key={i} className="glass-card" style={{ padding: '24px 26px', borderRadius: 12 }}>
                <div className="flex items-center justify-between mb-3">
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>{diff.title}</h4>
                  <span style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--gold)', background: 'var(--gold-glow)', padding: '3px 10px', borderRadius: 4 }}>
                    {diff.badge}
                  </span>
                </div>
                <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.7 }}>{diff.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <hr className="razor-line-gold" style={{ marginBottom: 64 }} />

        {/* Core Values */}
        <div style={{ marginBottom: 64 }}>
          <div className="section-label" style={{ marginBottom: 12 }}>◆ &nbsp; Core Values</div>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', margin: '0 0 28px', letterSpacing: '-0.01em' }}>
            The Principles That Guide Every Project
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {coreValues.map((v, i) => (
              <div
                key={i}
                className="glass-card animated-border"
                style={{ padding: '24px 20px', textAlign: 'center' }}
              >
                <div style={{ fontSize: '1.6rem', color: 'var(--gold)', marginBottom: 12 }}>{v.icon}</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '0.04em', marginBottom: 10 }}>{v.label}</div>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.65 }}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>

        <hr className="razor-line-gold" style={{ marginBottom: 64 }} />

        {/* Leadership & Key Roles */}
        <div style={{ marginBottom: 64 }}>
          <div className="section-label" style={{ marginBottom: 12 }}>◆ &nbsp; Our Team &amp; Leadership</div>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', margin: '0 0 10px', letterSpacing: '-0.01em' }}>
            Multidisciplinary Technical Talent
          </h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: 32, maxWidth: 580 }}>
            Our team blends seasoned software developers, certified network engineers, audiovisual specialists, and visual artists.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {teamMembers.map((member, i) => (
              <div
                key={i}
                className="glass-card flex flex-col justify-between"
                style={{ padding: '24px 20px', borderRadius: 12, borderTop: `3px solid ${member.color}` }}
              >
                <div>
                  <div style={{
                    width: 48, height: 48, borderRadius: '50%',
                    background: `${member.color}20`, color: member.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 800, fontSize: '0.9rem', marginBottom: 16,
                  }}>
                    {member.avatar}
                  </div>
                  <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: 4 }}>
                    {member.name}
                  </div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, color: member.color, marginBottom: 2 }}>
                    {member.role}
                  </div>
                  <div style={{ fontSize: '0.65rem', color: 'var(--text-dim)', marginBottom: 14 }}>
                    {member.division}
                  </div>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.65, margin: 0 }}>
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <hr className="razor-line-gold" style={{ marginBottom: 64 }} />

        {/* Delivery Pipeline */}
        <div>
          <div className="section-label" style={{ marginBottom: 12 }}>◆ &nbsp; Execution Pipeline</div>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', margin: '0 0 36px', letterSpacing: '-0.01em' }}>
            How We Deliver: From Discovery to Deployment
          </h3>
          <Timeline />
        </div>

      </div>
    </div>
  )
}
