import { useState } from 'react'

const services = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <rect x="2" y="4" width="22" height="14" rx="2" stroke="#D4AF37" strokeWidth="1.4" />
        <path d="M8 11h10M8 15h6" stroke="#D4AF37" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="21" cy="5" r="3" fill="rgba(80,200,255,0.7)" />
      </svg>
    ),
    division: '01',
    title: 'Software Engineering',
    tagline: 'Enterprise apps, ERPs, mobile platforms & APIs at scale.',
    items: [
      { label: 'Enterprise Web Applications', detail: 'Laravel · Next.js · React · REST & GraphQL APIs' },
      { label: 'Mobile Applications', detail: 'Flutter · cross-platform · offline-first architecture' },
      { label: 'ERP & Business Software', detail: 'Custom ERP · workflow automation · CRM integrations' },
      { label: 'Learning Management Systems', detail: 'LMS platforms · e-assessment · institutional portals' },
      { label: 'APIs & Integrations', detail: 'Third-party integrations · microservices · webhooks' },
      { label: 'Automation Platforms', detail: 'Process automation · scheduled pipelines · reporting' },
    ],
    accent: '#D4AF37',
    glow: 'rgba(212,175,55,0.1)',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <rect x="3" y="8" width="20" height="12" rx="1.5" stroke="#50C8FF" strokeWidth="1.4" />
        <path d="M8 8V6a5 5 0 0110 0v2" stroke="#50C8FF" strokeWidth="1.4" />
        <circle cx="13" cy="14" r="2" fill="#50C8FF" />
      </svg>
    ),
    division: '02',
    title: 'Network Infrastructure',
    tagline: 'Resilient, secure connectivity from campus to enterprise.',
    items: [
      { label: 'MikroTik Solutions', detail: 'CHR · RouterOS · BGP · OSPF · VPN tunnelling' },
      { label: 'Campus Networking', detail: 'Structured cabling · VLAN segmentation · fibre backbones' },
      { label: 'Enterprise Hotspot Gateways', detail: 'User-Manager · captive portals · billing integration' },
      { label: 'Fibre & Wireless Links', detail: 'Point-to-point · PtMP · licensed microwave · last-mile' },
      { label: 'Bandwidth Management', detail: 'QoS policies · traffic shaping · SLA monitoring' },
      { label: 'Network Security', detail: 'Firewall hardening · IDS/IPS · zero-trust segmentation' },
    ],
    accent: '#50C8FF',
    glow: 'rgba(80,200,255,0.08)',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="13" cy="13" r="5" stroke="#D4AF37" strokeWidth="1.4" />
        <circle cx="13" cy="13" r="9" stroke="rgba(212,175,55,0.35)" strokeWidth="1" strokeDasharray="2 3" />
        <path d="M2 13h4M20 13h4M13 2v4M13 20v4" stroke="#D4AF37" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    division: '03',
    title: 'Broadcast Engineering',
    tagline: 'Turnkey broadcast systems and live production at scale.',
    items: [
      { label: 'Live Streaming', detail: 'vMix · OBS · RTMP/SRT · YouTube · multi-platform ingest' },
      { label: 'Multicam Production', detail: 'Genlock · PTZ control · ISO recording · director switching' },
      { label: 'Hybrid Events', detail: 'In-person + virtual simultaneous delivery · interactive Q&A' },
      { label: 'Hardware Encoding', detail: 'Blackmagic · NewTek · AJA · NDI workflows' },
      { label: 'Broadcast Systems', detail: 'Full OB van config · playout · graphics overlay · CG' },
      { label: 'Audio Engineering', detail: 'Dante AoIP · Yamaha · RF coordination · acoustic design' },
    ],
    accent: '#A78BFA',
    glow: 'rgba(167,139,250,0.08)',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M4 19L9 11l4 5 4-7 5 10H4z" stroke="#D4AF37" strokeWidth="1.4" strokeLinejoin="round" />
        <circle cx="20" cy="6" r="3" stroke="#D4AF37" strokeWidth="1.4" />
      </svg>
    ),
    division: '04',
    title: 'Creative Media',
    tagline: 'Cinematic production and precision brand identity for enterprise.',
    items: [
      { label: 'Video Production', detail: 'RED · ARRI · DJI Ronin · colour grading DaVinci Resolve' },
      { label: 'Motion Graphics', detail: 'After Effects · Cinema 4D · branded motion systems' },
      { label: 'Photography', detail: 'Corporate · architectural · product · HDR compositing' },
      { label: 'Graphics & UI/UX Design', detail: 'Figma · brand systems · design token libraries' },
      { label: 'Promotional Campaigns', detail: 'OOH · social · launch event coverage · ad creative' },
      { label: 'Corporate Commissions', detail: 'Annual reports · institutional films · documentary' },
    ],
    accent: '#D4AF37',
    glow: 'rgba(212,175,55,0.1)',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="13" cy="8" r="4" stroke="#50C8FF" strokeWidth="1.4" />
        <path d="M5 22c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="#50C8FF" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M18 12l2 2-2 2M20 14h-4" stroke="#50C8FF" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    division: '05',
    title: 'Consultancy & Capacity Development',
    tagline: 'Strategic advisory and institutional capability building.',
    items: [
      { label: 'Technical Advisory', detail: 'Infrastructure reviews · technology roadmaps · vendor selection' },
      { label: 'Digital Transformation', detail: 'Institutional digitisation · process re-engineering · change management' },
      { label: 'Technology Audits', detail: 'Security posture · network performance · software stack assessments' },
      { label: 'Industry Mentorship', detail: 'Structured mentorship · career pathway design · peer-learning networks' },
      { label: 'Corporate Training', detail: 'MikroTik · broadcast operations · software dev · custom curricula' },
      { label: 'Capacity Building', detail: 'Institutional workshops · practical labs · certification preparation' },
    ],
    accent: '#50C8FF',
    glow: 'rgba(80,200,255,0.08)',
  },
]

export default function ServicesSection() {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <div id="services" className="section-fade px-4 sm:px-6 md:px-8 py-16 md:py-20" style={{ maxWidth: 1280, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 56 }}>
        <div className="section-label" style={{ marginBottom: 14 }}>◆ &nbsp; Five Interconnected Divisions</div>
        <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.4rem)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text-primary)', margin: '0 0 12px' }}>
          A Complete Digital Ecosystem
        </h2>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0, maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}>
          Software, networks, broadcast, creative media, and consultancy — one team, one framework.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((svc, i) => (
          <div
            key={i}
            className="glass-card animated-border"
            onClick={() => setExpanded(expanded === i ? null : i)}
            style={{ padding: 26, cursor: 'pointer', position: 'relative', overflow: 'hidden' }}
          >
            <div
              style={{
                position: 'absolute', top: 0, right: 0, width: 140, height: 140,
                borderRadius: '0 12px 0 140px',
                background: expanded === i ? svc.glow : 'transparent',
                transition: 'background 0.35s ease', pointerEvents: 'none',
              }}
            />

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
              <div style={{
                fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.15em', color: svc.accent,
                background: `${svc.accent}15`, border: `1px solid ${svc.accent}30`,
                borderRadius: 4, padding: '3px 9px',
              }}>
                DIV-{svc.division}
              </div>
              {svc.icon}
            </div>

            <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', margin: '0 0 7px', lineHeight: 1.3, letterSpacing: '-0.01em' }}>
              {svc.title}
            </h3>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: '0 0 18px', lineHeight: 1.6 }}>
              {svc.tagline}
            </p>

            <hr className="razor-line" style={{ marginBottom: 18 }} />

            <div style={{
              display: 'grid', gap: 10,
              maxHeight: expanded === i ? 500 : 148,
              overflow: 'hidden',
              transition: 'max-height 0.4s cubic-bezier(0.4,0,0.2,1)',
            }}>
              {svc.items.map((item, j) => (
                <div key={j}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ width: 4, height: 4, borderRadius: '50%', background: svc.accent, flexShrink: 0, boxShadow: `0 0 5px ${svc.accent}` }} />
                    <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-primary)' }}>{item.label}</span>
                  </div>
                  {expanded === i && (
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', paddingLeft: 12, marginTop: 2, letterSpacing: '0.02em' }}>
                      {item.detail}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div style={{ marginTop: 18, display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.7rem', color: svc.accent, fontWeight: 700, letterSpacing: '0.06em' }}>
              <span>{expanded === i ? 'COLLAPSE' : 'VIEW CAPABILITIES'}</span>
              <span style={{ transform: expanded === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s ease' }}>▾</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
