import { useState, type FormEvent } from 'react'

const partnershipWorkflow = [
  { id: 'consultation', label: 'Preliminary Technical Consultation', desc: '30-min discovery call with a JS-GOLD division lead' },
  { id: 'assessment', label: 'Infrastructure Assessment', desc: 'On-site or remote audit of your facility and systems' },
  { id: 'architecture', label: 'Solution Architecture', desc: 'Formal scope document with approved technical specification' },
  { id: 'implementation', label: 'Implementation', desc: 'Phased build with UAT sign-off gates at each milestone' },
  { id: 'sla', label: 'Service Level Agreement', desc: 'Bespoke SLA with defined KPIs and response SLOs' },
  { id: 'support', label: 'Long-Term Support', desc: 'Quarterly reviews, operator training, and system optimisation' },
]

const projectScopes = [
  'Software Engineering — Web / Mobile / ERP',
  'Network Infrastructure — Campus / Enterprise / Hotspot',
  'Broadcast Engineering — Live Streaming / AV Production',
  'Creative Media — Video / Photography / Design',
  'Consultancy & Capacity Development',
  'Multi-Division Integrated Engagement',
]

export default function ContactSection() {
  const [checked, setChecked] = useState<Set<string>>(new Set())
  const [activeTab, setActiveTab] = useState<'brief' | 'consult' | 'partnership'>('brief')
  const [form, setForm] = useState({ name: '', email: '', scope: '', brief: '' })
  const [submitted, setSubmitted] = useState(false)

  const toggle = (id: string) => {
    setChecked((prev) => {
      const next = new Set(prev); next.has(id) ? next.delete(id) : next.add(id); return next
    })
  }

  const handleSubmit = (e: FormEvent) => { e.preventDefault(); setSubmitted(true) }

  return (
    <div className="px-4 sm:px-6 md:px-8 py-20" style={{ borderTop: '1px solid var(--border-subtle)', maxWidth: 1280, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: 60 }}>
        <div className="section-label" style={{ marginBottom: 14 }}>◆ &nbsp; Strategic Partnership Portal</div>
        <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.3rem)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text-primary)', margin: '0 0 12px' }}>
          Initiate a Partnership
        </h2>
        <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', margin: 0 }}>
          Enterprise engagements · Institutional contracts · Technical consultancy · Capacity programmes
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12" style={{ alignItems: 'start' }}>

        {/* Left column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>

          {/* Direct channels */}
          <div style={{ padding: '26px', borderRadius: 12, background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', backdropFilter: 'blur(25px)' }}>
            <div className="section-label" style={{ marginBottom: 18 }}>Direct Channels</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>

              {[
                { icon: 'phone', href: 'tel:+2348150917741', label: 'PHONE', value: '+234 815 091 7741', accent: 'var(--gold)', bg: 'var(--gold-glow)', border: 'var(--border-gold)' },
                { icon: 'email', href: 'mailto:jsgold.dw@gmail.com', label: 'EMAIL', value: 'jsgold.dw@gmail.com', accent: '#50C8FF', bg: 'rgba(80,200,255,0.05)', border: 'rgba(80,200,255,0.2)' },
              ].map((ch) => (
                <a key={ch.label} href={ch.href} style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', padding: '12px 16px', borderRadius: 8, background: ch.bg, border: `1px solid ${ch.border}`, transition: 'all 0.25s ease' }}
                  onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.opacity = '0.85' }}
                  onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.opacity = '1' }}>
                  <div style={{ width: 34, height: 34, borderRadius: 7, background: `${ch.accent}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {ch.icon === 'phone' ? (
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M12 9.4c-.2-.2-1.6-1.2-1.9-1.2-.4 0-.5.2-.9.5-.3.4-.5.5-.9.5-.3 0-.6-.2-1.1-.5C6.4 8 5.8 7 5.8 6.6c0-.3.2-.5.5-.9.3-.3.5-.5.5-.9C6.8 4.4 5.8 3 5.6 2.8 5.4 2.7 5.2 2.6 5 2.6c-.4 0-.9.4-1.2.7C3.3 3.8 3 4.3 3 4.8c0 1 .5 2.3 1.7 3.5 1.2 1.2 2.4 1.7 3.4 1.7.5 0 1-.3 1.5-.8.4-.4.7-.9.7-1.3 0-.1 0-.3-.3-.5z" stroke={ch.accent} strokeWidth="1.1" /></svg>
                    ) : (
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1.5" y="3.5" width="11" height="7.5" rx="1.2" stroke={ch.accent} strokeWidth="1.1" /><path d="M1.5 5.5l5.5 3.5 5.5-3.5" stroke={ch.accent} strokeWidth="1.1" /></svg>
                    )}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--text-dim)', marginBottom: 2 }}>{ch.label}</div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: ch.accent }}>{ch.value}</div>
                  </div>
                </a>
              ))}

              {/* WhatsApp */}
              <a
                href="https://wa.me/2348150917741"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', padding: '12px 16px', borderRadius: 8, background: 'rgba(37,211,102,0.05)', border: '1px solid rgba(37,211,102,0.22)', transition: 'all 0.25s ease' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(37,211,102,0.1)' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(37,211,102,0.05)' }}
              >
                <div style={{ width: 34, height: 34, borderRadius: 7, background: 'rgba(37,211,102,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="#25D366">
                    <path d="M8 1C4.1 1 1 4.1 1 8c0 1.2.3 2.4.9 3.4L1 15l3.7-.9C5.7 14.7 6.8 15 8 15c3.9 0 7-3.1 7-7s-3.1-7-7-7zm3.6 9.6c-.2.4-.9.8-1.3.9-.3.1-.8.1-2.6-.7-2.2-.9-3.6-3.1-3.7-3.3-.1-.2-.8-1.1-.8-2 0-1 .5-1.4.7-1.6.2-.2.4-.2.5-.2h.4c.1 0 .3 0 .4.3.2.4.6 1.4.7 1.5.1.1.1.3 0 .4-.1.2-.2.3-.3.4-.1.1-.2.3-.1.5.3.4.7.9 1.1 1.2.5.4 1 .7 1.3.8.2.1.4.1.5-.1.2-.2.4-.5.7-.8.2-.2.3-.2.5-.1l1.6.8c.2.1.3.2.3.3 0 .1 0 .4-.2.7z" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--text-dim)', marginBottom: 2 }}>WHATSAPP</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#25D366' }}>Message Us Directly</div>
                </div>
                <div style={{ marginLeft: 'auto', fontSize: '0.65rem', color: 'var(--text-dim)', letterSpacing: '0.06em' }}>INSTANT →</div>
              </a>

              {/* Meeting booking */}
              <button
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                style={{
                  display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none',
                  padding: '12px 16px', borderRadius: 8, background: 'var(--gold-glow)',
                  border: '1px solid var(--border-gold)', cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.25s ease', width: '100%',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'var(--gold-dim)' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'var(--gold-glow)' }}
              >
                <div style={{ width: 34, height: 34, borderRadius: 7, background: 'var(--gold-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1.5" y="2.5" width="11" height="10" rx="1.5" stroke="var(--gold)" strokeWidth="1.1" /><path d="M1.5 6h11M4.5 1.5v2M9.5 1.5v2" stroke="var(--gold)" strokeWidth="1.1" strokeLinecap="round" /></svg>
                </div>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--text-dim)', marginBottom: 2 }}>MEETING</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--gold)' }}>Book a Technical Consultation</div>
                </div>
              </button>
            </div>
          </div>

          {/* Partnership workflow checklist */}
          <div style={{ padding: '26px', borderRadius: 12, background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', backdropFilter: 'blur(25px)' }}>
            <div className="section-label" style={{ marginBottom: 18 }}>Partnership Workflow</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {partnershipWorkflow.map((step, i) => (
                <button key={step.id} onClick={() => toggle(step.id)}
                  style={{
                    display: 'flex', gap: 12, alignItems: 'flex-start',
                    background: checked.has(step.id) ? 'var(--gold-glow)' : 'var(--bg-surface)',
                    border: `1px solid ${checked.has(step.id) ? 'var(--border-gold)' : 'var(--border-subtle)'}`,
                    borderRadius: 8, padding: '12px 14px', cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit', transition: 'all 0.2s ease',
                  }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0, marginTop: 1 }}>
                    <span style={{ fontSize: '0.6rem', fontWeight: 700, color: 'var(--gold)', opacity: 0.7, letterSpacing: '0.05em', minWidth: 16 }}>0{i + 1}</span>
                    <div style={{
                      width: 16, height: 16, borderRadius: 3, border: `1.5px solid ${checked.has(step.id) ? 'var(--gold)' : 'var(--border-subtle)'}`,
                      background: checked.has(step.id) ? 'var(--gold)' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s ease',
                      boxShadow: checked.has(step.id) ? '0 0 8px var(--gold-glow)' : 'none',
                    }}>
                      {checked.has(step.id) && <svg width="9" height="9" viewBox="0 0 9 9" fill="none"><path d="M1.5 4.5l2 2L7.5 2.5" stroke="var(--bg-primary)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', fontWeight: 600, color: checked.has(step.id) ? 'var(--gold)' : 'var(--text-primary)', transition: 'color 0.2s ease', lineHeight: 1.3 }}>{step.label}</div>
                    <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', marginTop: 3, lineHeight: 1.5 }}>{step.desc}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Form panel */}
        <div id="contact-form" style={{ padding: '32px', borderRadius: 14, background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', backdropFilter: 'blur(25px)' }}>

          {/* Form tabs */}
          <div style={{ display: 'flex', gap: 0, marginBottom: 28, borderBottom: '1px solid var(--border-subtle)' }}>
            {[
              { key: 'brief', label: 'Project Brief' },
              { key: 'consult', label: 'Consultation Request' },
              { key: 'partnership', label: 'Strategic Partnership' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as typeof activeTab)}
                style={{
                  padding: '9px 14px', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit',
                  fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.04em',
                  color: activeTab === tab.key ? 'var(--gold)' : 'var(--text-muted)',
                  borderBottom: `2px solid ${activeTab === tab.key ? 'var(--gold)' : 'transparent'}`,
                  marginBottom: -1, transition: 'all 0.2s ease',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {submitted ? (
            <div style={{ textAlign: 'center', padding: '52px 20px' }}>
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--gold-glow)', border: '1px solid var(--border-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', boxShadow: '0 0 24px var(--gold-glow)' }}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M4.5 11l5 5L17.5 6" stroke="var(--gold)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', margin: '0 0 10px' }}>Request Received</h3>
              <p style={{ fontSize: '0.83rem', color: 'var(--text-muted)', lineHeight: 1.7, margin: '0 0 24px' }}>
                Our engineering team will review your submission and contact you within 24 business hours to schedule a preliminary technical consultation.
              </p>
              <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', scope: '', brief: '' }) }}
                style={{ padding: '9px 20px', borderRadius: 7, background: 'transparent', border: '1px solid var(--border-gold)', color: 'var(--gold)', fontSize: '0.76rem', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}>
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {activeTab === 'consult' && (
                <div style={{ padding: '12px 14px', borderRadius: 7, background: 'rgba(80,200,255,0.06)', border: '1px solid rgba(80,200,255,0.2)', fontSize: '0.76rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  Request a 30-minute discovery call with a JS-GOLD division lead. No obligation — designed to clarify scope and assess feasibility before any commitment.
                </div>
              )}
              {activeTab === 'partnership' && (
                <div style={{ padding: '12px 14px', borderRadius: 7, background: 'var(--gold-glow)', border: '1px solid var(--border-gold)', fontSize: '0.76rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  For institutions or organisations seeking a long-term strategic technology partner. Include your digital transformation objectives and existing infrastructure constraints.
                </div>
              )}

              <div>
                <label style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--text-dim)', display: 'block', marginBottom: 6 }}>NAME / ORGANISATION</label>
                <input className="cyber-input" type="text" placeholder="Full name · Institution or company name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
              </div>

              <div>
                <label style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--text-dim)', display: 'block', marginBottom: 6 }}>BUSINESS EMAIL</label>
                <input className="cyber-input" type="email" placeholder="official@institution.edu.ng" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
              </div>

              <div>
                <label style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--text-dim)', display: 'block', marginBottom: 6 }}>PROJECT SCOPE</label>
                <select className="cyber-input" value={form.scope} onChange={(e) => setForm({ ...form, scope: e.target.value })} required style={{ cursor: 'pointer' }}>
                  <option value="">Select a division or engagement type →</option>
                  {projectScopes.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div>
                <label style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--text-dim)', display: 'block', marginBottom: 6 }}>
                  {activeTab === 'consult' ? 'CONSULTATION AGENDA' : activeTab === 'partnership' ? 'TRANSFORMATION OBJECTIVES' : 'PROJECT BRIEFING'}
                </label>
                <textarea className="cyber-input" placeholder="Describe your project scope, scale, timeline, and any existing infrastructure constraints..." rows={5} value={form.brief} onChange={(e) => setForm({ ...form, brief: e.target.value })} required style={{ resize: 'vertical', minHeight: 96 }} />
              </div>

              <button type="submit" className="gold-glow-btn" style={{ padding: '15px 28px', borderRadius: 10, fontSize: '0.84rem', border: 'none', cursor: 'pointer', fontFamily: 'inherit', width: '100%', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                Initiate Strategic Partnership
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: 7, justifyContent: 'center' }}>
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><rect x="1.5" y="4.5" width="8" height="5.5" rx="1" stroke="var(--border-subtle)" strokeWidth="1" /><path d="M3.5 4.5V3a2 2 0 014 0v1.5" stroke="var(--border-subtle)" strokeWidth="1" /></svg>
                <span style={{ fontSize: '0.65rem', color: 'var(--text-dim)', letterSpacing: '0.05em' }}>Encrypted · Confidential · No unsolicited communications</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
