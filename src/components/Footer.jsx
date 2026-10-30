import { Link } from "react-router-dom"
import {
  PhoneCall,
  Mail,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Award,
  Globe2,
  Heart,
  ArrowUpRight,
} from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden border-t border-[#fed7aa]/60 bg-[#0b1220] text-white/80">
      {/* Top Accent Strip */}
      <div className="h-1.5 w-full bg-hk-gradient" />

      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -left-32 -top-20 h-80 w-80 rounded-full bg-[#ff6b00]/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#f44236]/10 blur-[100px]" />

      <div className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand info */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3">
              <img src="/logo.png" alt="Hokena Care" className="h-14 w-14 object-contain" />
              <div>
                <span className="font-display text-2xl font-black tracking-tight text-white">
                  HOKENA <span className="text-[#ff6b00]">CARE</span>
                </span>
                <p className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#f44236]">
                  Heal in India
                </p>
              </div>
            </Link>

            <p className="mt-4 text-sm leading-relaxed text-slate-300 max-w-sm">
              Hokena Care is India's premier surgical pathway and healthcare concierge, connecting domestic and international patients with accredited hospital networks, board-certified surgeons, and end-to-end recovery coordination.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold text-white/90">
                <ShieldCheck className="h-3.5 w-3.5 text-[#ff6b00]" />
                NABH & NABL Network
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold text-white/90">
                <Globe2 className="h-3.5 w-3.5 text-[#f44236]" />
                Heal in India Partner
              </div>
            </div>
          </div>

          {/* Quick Links 1: Surgical Pathways */}
          <div>
            <h4 className="font-display text-sm font-extrabold uppercase tracking-wider text-white">
              Surgical Specialties
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                "Laparoscopic Surgery",
                "Orthopedics & Joint Replacement",
                "Cardiology & Cardiac Surgery",
                "Oncology & Cancer Care",
                "Urology & Kidney Care",
                "Ophthalmology / Lasik",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/treatments"
                    className="text-slate-400 transition-colors hover:text-[#ff8533]"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links 2: Patient Services */}
          <div>
            <h4 className="font-display text-sm font-extrabold uppercase tracking-wider text-white">
              Patient Services
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                { label: "Book Free Second Opinion", to: "/contact" },
                { label: "Find Super-Specialists", to: "/doctors" },
                { label: "Preventive Health Packages", to: "/packages" },
                { label: "International Patient Desk", to: "/heal-in-india" },
                { label: "Cashless Insurance Assistance", to: "/contact" },
                { label: "Figma Screen Showcase", to: "/screens" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-slate-400 transition-colors hover:text-[#ff8533]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-display text-sm font-extrabold uppercase tracking-wider text-white">
              24/7 Helpline
            </h4>
            <div className="mt-4 space-y-3 text-sm">
              <a
                href="tel:1800465362"
                className="flex items-center gap-2.5 font-bold text-white hover:text-[#ff8533] transition-colors"
              >
                <PhoneCall className="h-4 w-4 text-[#ff6b00]" />
                1800-HOKENA (Toll Free)
              </a>
              <a
                href="mailto:care@hokenacare.com"
                className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 text-[#f44236]" />
                care@hokenacare.com
              </a>
              <a
                href="https://wa.me/911800465362"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors"
              >
                <MessageCircle className="h-4 w-4 text-[#34d373]" />
                WhatsApp 24x7 Support
              </a>
              <p className="flex items-start gap-2.5 text-xs text-slate-400 pt-2">
                <MapPin className="h-4 w-4 text-[#ff6b00] shrink-0 mt-0.5" />
                Hokena Tower, Sector 44, Gurgaon, Delhi NCR & Health City Bengaluru, India
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} Hokena Care Pvt. Ltd. All rights reserved. Heal in India initiative.</p>
          <p className="flex items-center gap-1.5">
            Designed with <Heart className="h-3.5 w-3.5 text-[#f44236] fill-[#f44236]" /> for Patient-First Clinical Excellence
          </p>
        </div>
      </div>
    </footer>
  )
}
