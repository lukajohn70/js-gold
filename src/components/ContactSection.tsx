import { useState, type FormEvent } from 'react'

const projectScopes = [
  'Software & Networking — Custom Web/Mobile & MikroTik Infrastructure',
  'Broadcast & AV Systems — Live Streaming, Multicam & Audio',
  'Creative Media — Video, Photography, Motion & UI/UX',
  'Multi-Division Integrated Project',
  'Free Technical Infrastructure Assessment',
  'General Inquiry & Consultation',
]

export default function ContactSection() {
  const [activeTab, setActiveTab] = useState<'brief' | 'assessment' | 'consult'>('brief')
  const [form, setForm] = useState({ name: '', email: '', phone: '', scope: '', brief: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="section-label mb-3">
            <span>◆</span>
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900">
            Let's Build Something Great
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            Ready to engineer a solution, broadcast a live event, or elevate your brand? Tell us about your project or request a free technical assessment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Left Column: Direct Contact & Trust Badges */}
          <div className="lg:col-span-5 space-y-6">

            {/* WhatsApp Quick Action Card (Learnerium Style) */}
            <a
              href="https://wa.me/2348150917741"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm flex items-center gap-5 group hover:shadow-md hover:border-emerald-300 transition-all text-left no-underline block"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                💬
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-600 bg-emerald-100/70 px-2 py-0.5 rounded-full">
                  INSTANT MESSAGING
                </span>
                <div className="text-base font-black text-slate-900 mt-1">
                  Chat on WhatsApp
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  Direct reply from our technical team
                </div>
              </div>
            </a>

            {/* Direct Phone & Email Cards */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-5">
              <h4 className="text-sm font-black uppercase tracking-wider text-slate-900">
                Direct Contact Channels
              </h4>

              <div className="space-y-4">
                <a
                  href="tel:+2348150917741"
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-50 hover:bg-slate-100 transition text-slate-900 font-semibold text-sm no-underline"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                    📞
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase">CALL US</div>
                    <div className="text-sm font-extrabold text-slate-900">+234 815 091 7741</div>
                  </div>
                </a>

                <a
                  href="mailto:jsgold.dw@gmail.com"
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-50 hover:bg-slate-100 transition text-slate-900 font-semibold text-sm no-underline"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                    ✉️
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase">EMAIL US</div>
                    <div className="text-sm font-extrabold text-slate-900">jsgold.dw@gmail.com</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Guarantee Callout */}
            <div className="p-6 rounded-3xl bg-amber-50 border border-amber-200/80 text-amber-900">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-amber-800 mb-1">
                <span>★</span>
                <span>Our Response Commitment</span>
              </div>
              <p className="text-xs text-amber-800/90 leading-relaxed m-0">
                Every inquiry is reviewed by our lead technical architects. We provide transparent initial estimates within 24 business hours.
              </p>
            </div>

          </div>

          {/* Right Column: Contact & Project Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-md">

            {/* Form Mode Selector Tabs */}
            <div className="flex gap-2 p-1.5 rounded-2xl bg-slate-100 mb-8">
              {[
                { key: 'brief', label: 'Project Brief' },
                { key: 'assessment', label: 'Free Assessment' },
                { key: 'consult', label: 'Consultation' },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as typeof activeTab)}
                  className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeTab === tab.key
                      ? 'bg-white text-slate-900 shadow-sm font-extrabold'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-3xl mx-auto mb-4 shadow-sm">
                  ✓
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">
                  Inquiry Received!
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto mb-6">
                  Thank you for reaching out. A JS-GOLD technical director will review your details and contact you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', scope: '', brief: '' }) }}
                  className="px-6 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-50 cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Your Name or Organization *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe · Apex University"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm text-slate-900"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@domain.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="+234 ..."
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm text-slate-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Area of Interest *
                  </label>
                  <select
                    required
                    value={form.scope}
                    onChange={(e) => setForm({ ...form, scope: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm text-slate-900 bg-white"
                  >
                    <option value="">Select a division or engagement type →</option>
                    {projectScopes.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    {activeTab === 'assessment' ? 'Infrastructure / Audit Details *' : 'Project Description & Objectives *'}
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us what you want to build, broadcast, or improve, along with your timeline and goals..."
                    value={form.brief}
                    onChange={(e) => setForm({ ...form, brief: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm text-slate-900"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-4 rounded-xl text-sm font-bold shadow-lg shadow-amber-500/25 hover:scale-[1.02] transition-all cursor-pointer"
                >
                  {activeTab === 'assessment' ? 'Request Free Assessment →' : 'Submit Project Inquiry →'}
                </button>

                <p className="text-center text-xs text-slate-400">
                  🔒 Confidential &bull; We never share your contact details.
                </p>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  )
}
