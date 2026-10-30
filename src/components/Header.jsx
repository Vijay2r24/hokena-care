import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import {
  PhoneCall,
  Menu,
  X,
  CalendarCheck,
  ChevronRight,
  ShieldCheck,
  Globe2,
  Sparkles,
} from "lucide-react"

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Treatments", to: "/treatments" },
  { label: "Doctors", to: "/doctors" },
  { label: "Health Packages", to: "/packages" },
  { label: "Heal in India", to: "/heal-in-india" },
  { label: "Contact", to: "/contact" },
  { label: "Figma Screens", to: "/screens", highlight: true },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <>
      {/* Top micro banner */}
      <div className="bg-gradient-to-r from-[#0b1220] via-[#1e293b] to-[#0b1220] px-4 py-2 text-xs text-white/90">
        <div className="container-page flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-[#ff6b00] animate-ping" />
            <span className="font-semibold text-white">Heal in India:</span>
            <span className="text-white/80 hidden sm:inline">NABH & NABL Accredited Surgery Network with Cashless Support</span>
          </div>
          <div className="flex items-center gap-4 text-white/80">
            <a href="tel:+918296183009" className="flex items-center gap-1.5 hover:text-[#ff8533] transition-colors">
              <PhoneCall className="h-3 w-3 text-[#ff6b00]" />
              <span className="font-bold text-white">+91 8296 183 009</span> (24x7 Helpline)
            </a>
            <span className="text-white/30 hidden md:inline">|</span>
            <a href="https://wa.me/918296183009" target="_blank" rel="noreferrer" className="hidden md:flex items-center gap-1 text-[#34d373] hover:underline transition-colors font-bold">
              WhatsApp Desk
            </a>
            <span className="text-white/30 hidden md:inline">|</span>
            <Link to="/heal-in-india" className="hidden md:flex items-center gap-1 hover:text-white transition-colors">
              <Globe2 className="h-3 w-3 text-[#ff6b00]" />
              International Concierge
            </Link>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled || mobileOpen
            ? "border-b border-[#ffedd5] bg-white/95 shadow-md shadow-[#ff6b00]/5 backdrop-blur-xl"
            : "border-b border-transparent bg-white/80 backdrop-blur-md"
        }`}
      >
        <div className="container-page flex h-20 items-center justify-between">
          {/* Logo Lockup */}
          <Link to="/" className="group flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Hokena Care Logo"
              className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-display text-xl font-black tracking-tight text-[#0b1220] transition-colors group-hover:text-[#ff6b00]">
                HOKENA <span className="text-[#ff6b00]">CARE</span>
              </span>
              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#f44236]">
                Heal In India
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = location.pathname === link.to
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative rounded-full px-4 py-2 font-display text-sm font-bold transition-all duration-200 ${
                    active
                      ? "text-[#ff6b00] bg-[#fff7ed]"
                      : link.highlight
                      ? "text-[#ea580c] bg-orange-50/80 hover:bg-orange-100/80 font-extrabold border border-orange-200/60"
                      : "text-slate-700 hover:text-[#ff6b00] hover:bg-[#fff7ed]/60"
                  }`}
                >
                  {link.highlight && <Sparkles className="inline-block h-3.5 w-3.5 mr-1 text-[#ff6b00]" />}
                  {link.label}
                  {active && (
                    <span className="absolute bottom-1 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-[#ff6b00]" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Header Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-hk-gradient px-5 py-2.5 font-display text-sm font-extrabold text-white shadow-md shadow-[#ff6b00]/25 transition-all duration-300 hover:shadow-lg hover:shadow-[#ff6b00]/35 hover:-translate-y-0.5 active:scale-95"
            >
              <CalendarCheck className="h-4 w-4" />
              Book Consultation
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-slate-800 lg:hidden hover:bg-orange-100"
            aria-label="Toggle Navigation Menu"
          >
            {mobileOpen ? <X className="h-6 w-6 text-[#ff6b00]" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileOpen && (
          <div className="border-b border-[#ffedd5] bg-white px-5 py-6 lg:hidden shadow-xl animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-bold transition-colors ${
                    location.pathname === link.to
                      ? "bg-[#fff7ed] text-[#ff6b00]"
                      : "text-slate-800 hover:bg-[#fff7ed] hover:text-[#ff6b00]"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {link.highlight && <Sparkles className="h-4 w-4 text-[#ff6b00]" />}
                    {link.label}
                  </span>
                  <ChevronRight className="h-4 w-4 text-slate-400" />
                </Link>
              ))}

              <div className="pt-4 mt-2 border-t border-slate-100">
                <Link
                  to="/contact"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-hk-gradient py-3 text-sm font-extrabold text-white shadow-md"
                >
                  <CalendarCheck className="h-4 w-4" />
                  Book Consultation
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
