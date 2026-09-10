import { useState } from 'react'

const categories = [
  {
    label: 'Software',
    color: '#D4AF37',
    tools: [
      { name: 'Laravel', desc: 'Enterprise PHP framework — APIs, ERP, portals' },
      { name: 'PHP', desc: 'Server-side scripting · backend logic · CMS' },
      { name: 'React', desc: 'Component-driven UI · SPAs · design systems' },
      { name: 'Next.js', desc: 'SSR/SSG · SEO-optimised web applications' },
      { name: 'Flutter', desc: 'Cross-platform mobile · iOS · Android · Web' },
    ],
  },
  {
    label: 'Infrastructure',
    color: '#50C8FF',
    tools: [
      { name: 'MikroTik', desc: 'RouterOS · CHR · BGP · OSPF · hotspot' },
      { name: 'Linux', desc: 'Ubuntu Server · RHEL · Debian · hardening' },
      { name: 'Docker', desc: 'Containerisation · orchestration · CI/CD' },
    ],
  },
  {
    label: 'Media',
    color: '#A78BFA',
    tools: [
      { name: 'vMix', desc: 'Live production · switching · streaming · replay' },
      { name: 'Adobe Premiere Pro', desc: 'Post-production · editorial · colour pipeline' },
      { name: 'After Effects', desc: 'Motion graphics · VFX · broadcast animation' },
      { name: 'DaVinci Resolve', desc: 'Colour grading · audio mastering · delivery' },
    ],
  },
  {
    label: 'Design',
    color: '#34D399',
    tools: [
      { name: 'Figma', desc: 'UI/UX design · design systems · prototyping · handoff' },
    ],
  },
]

export default function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [hoveredTool, setHoveredTool] = useState<string | null>(null)

  const active = categories[activeCategory]

  return (
    <div id="tech-stack" className="px-4 sm:px-6 md:px-8 pb-24" style={{ maxWidth: 1280, margin: '0 auto' }}>
      <hr className="razor-line" style={{ marginBottom: 64 }} />

      <div style={{ marginBottom: 40 }}>
        <div style={{ marginBottom: 20 }}>
          <div className="section-label" style={{ marginBottom: 14 }}>◆ &nbsp; Technology Stack</div>
          <h2 style={{ fontSize: 'clamp(1.5rem, 2.2vw, 2rem)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text-primary)', margin: 0 }}>
            The Engineering Toolchain
          </h2>
        </div>
        {/* Category tabs */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveCategory(i)}
              style={{
                padding: '7px 16px', borderRadius: 7, fontSize: '0.75rem', fontWeight: 700,
                letterSpacing: '0.06em', border: '1px solid', fontFamily: 'inherit', cursor: 'pointer',
                background: activeCategory === i ? `${cat.color}15` : 'transparent',
                borderColor: activeCategory === i ? `${cat.color}60` : 'var(--border-subtle)',
                color: activeCategory === i ? cat.color : 'var(--text-muted)',
                transition: 'all 0.2s ease',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tech wall */}
      <div style={{
        padding: '32px', borderRadius: 14,
        background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Background accent */}
        <div style={{ position: 'absolute', top: -60, right: -60, width: 240, height: 240, borderRadius: '50%', background: `radial-gradient(circle, ${active.color}08 0%, transparent 70%)`, pointerEvents: 'none' }} />

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, position: 'relative' }}>
          {active.tools.map((tool) => (
            <div
              key={tool.name}
              onMouseEnter={() => setHoveredTool(tool.name)}
              onMouseLeave={() => setHoveredTool(null)}
              style={{
                padding: '18px 22px', borderRadius: 10, cursor: 'default',
                background: hoveredTool === tool.name ? `${active.color}12` : 'var(--glass-bg)',
                border: `1px solid ${hoveredTool === tool.name ? `${active.color}50` : 'var(--glass-border)'}`,
                boxShadow: hoveredTool === tool.name ? `0 0 20px ${active.color}15` : 'none',
                transition: 'all 0.25s ease',
                minWidth: 160, flex: '1 1 160px',
              }}
            >
              <div style={{
                fontSize: '0.92rem', fontWeight: 800, color: hoveredTool === tool.name ? active.color : 'var(--text-primary)',
                marginBottom: 8, letterSpacing: '-0.01em', transition: 'color 0.2s ease',
              }}>
                {tool.name}
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                {tool.desc}
              </div>
              {hoveredTool === tool.name && (
                <div style={{ marginTop: 10, width: 24, height: 2, background: active.color, borderRadius: 1, boxShadow: `0 0 6px ${active.color}` }} />
              )}
            </div>
          ))}
        </div>

        {/* Legend */}
        <div style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: active.color, boxShadow: `0 0 8px ${active.color}` }} />
          <span style={{ fontSize: '0.68rem', color: 'var(--text-dim)', letterSpacing: '0.08em', fontWeight: 600 }}>
            {active.label.toUpperCase()} DIVISION · {active.tools.length} CORE TECHNOLOGIES
          </span>
        </div>
      </div>
    </div>
  )
}
