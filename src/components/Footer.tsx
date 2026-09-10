import { scrollTo } from '../utils'
import type { Theme } from '../utils'
import logoWhiteBg from '../../JS-GOLD.png'
import logoNoBg from '../../JS-GOLD - NO BG.png'
import { attachRipple } from '../App'

interface FooterProps {
  theme: Theme
  onOpenServices?: () => void
}

export default function Footer({ theme, onOpenServices }: FooterProps) {
  const logoSrc = theme === 'light' ? logoWhiteBg : logoNoBg

  const navLinks = [
    { label: 'Home', action: () => scrollTo('hero') },
    { label: 'About Us', action: () => scrollTo('about') },
    { label: 'Our Services', action: () => onOpenServices ? onOpenServices() : scrollTo('divisions') },
    { label: 'Featured Portfolio', action: () => scrollTo('portfolio') },
    { label: 'Client Testimonials', action: () => scrollTo('testimonials') },
    { label: 'Contact', action: () => scrollTo('contact') },
  ]

  const divisionLinks = [
    { label: 'Software Engineering (React, Laravel & Flutter)', action: () => onOpenServices ? onOpenServices() : scrollTo('divisions') },
    { label: 'Network Infrastructure (MikroTik Core)', action: () => onOpenServices ? onOpenServices() : scrollTo('divisions') },
    { label: 'Broadcast & AV Systems (vMix Live)', action: () => onOpenServices ? onOpenServices() : scrollTo('divisions') },
    { label: 'Creative Media & UI/UX Design', action: () => onOpenServices ? onOpenServices() : scrollTo('divisions') },
  ]

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={logoSrc}
                alt="JS-GOLD Logo"
                className="w-10 h-10 object-contain rounded-xl shadow-sm"
              />
              <div className="leading-tight">
                <div className="text-base font-black tracking-tight text-slate-900 dark:text-white uppercase">
                  JS-GOLD
                </div>
                <div className="text-[10px] font-extrabold uppercase tracking-widest text-amber-600">
                  Digital World
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-xs">
              Nigeria's full-stack technology and creative powerhouse. Software development, campus networking, live streaming production, and cinematic media.
            </p>

            <div className="text-xs font-black text-amber-600 flex items-center gap-1.5">
              <span>★</span>
              <span>Quality You Can Trust</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Quick Navigation
            </div>
            <div className="flex flex-col space-y-2.5">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={link.action}
                  className="text-left text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition cursor-pointer bg-transparent border-none p-0"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Core Divisions */}
          <div>
            <div className="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Core Divisions
            </div>
            <div className="flex flex-col space-y-2.5">
              {divisionLinks.map((div) => (
                <button
                  key={div.label}
                  onClick={div.action}
                  className="text-left text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition cursor-pointer bg-transparent border-none p-0 flex items-center gap-2"
                >
                  <span className="text-amber-500 text-[10px]">&bull;</span>
                  <span>{div.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Contact Details & CTA */}
          <div className="space-y-4">
            <div className="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Contact &amp; Location
            </div>

            <div className="text-xs text-slate-600 dark:text-slate-400 space-y-1.5 leading-relaxed">
              <div className="font-bold text-slate-900 dark:text-white">Nigeria HQ</div>
              <div>+234 815 091 7741</div>
              <div>jsgold.dw@gmail.com</div>
            </div>

            <button
              onClick={(e) => { attachRipple(e); scrollTo('contact') }}
              className="bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 px-5 py-2.5 rounded-xl text-xs font-bold transition shadow-sm cursor-pointer"
            >
              Request Free Consultation →
            </button>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} JS-GOLD Digital World. All rights reserved.
          </div>
          <div className="font-semibold text-slate-500">
            Powered by Technology &bull; Elevated by Creativity
          </div>
        </div>
      </div>
    </footer>
  )
}
