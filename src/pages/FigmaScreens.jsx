import { useState } from "react"
import { Link } from "react-router-dom"
import {
  Monitor,
  Tablet,
  Smartphone,
  ExternalLink,
  Layers,
  Palette,
  Type,
  Layout,
  Check,
  Copy,
  Sparkles,
  Download,
  ShieldCheck,
  Heart,
} from "lucide-react"

const screens = [
  {
    id: "home",
    title: "Screen 01: Landing & Hero Pathway",
    path: "/",
    desc: "Hero typewriter headline, quick services strip, 24/7 emergency strip, specialties grid, 3-step journey, and floating navigator CTA.",
  },
  {
    id: "treatments",
    title: "Screen 02: Surgical Treatments & Specialties",
    path: "/treatments",
    desc: "Interactive category filter, robotic & laparoscopic procedure cards, technology specs, and hospital stay metrics.",
  },
  {
    id: "doctors",
    title: "Screen 03: Specialist Doctors & Surgeons",
    path: "/doctors",
    desc: "Doctor directory with multi-specialty filter, experience badges, hospital affiliations, patient ratings, and consult booking.",
  },
  {
    id: "packages",
    title: "Screen 04: Health Checkups & Pre-Op Diagnostics",
    path: "/packages",
    desc: "Diagnostic test packages with pricing comparison, free home sample collection benefits, and fast digital report turnaround.",
  },
  {
    id: "heal-in-india",
    title: "Screen 05: Heal in India Concierge",
    path: "/heal-in-india",
    desc: "Dedicated medical tourism portal with visa facilitation, airport concierge, language interpreters, and international inquiry form.",
  },
  {
    id: "contact",
    title: "Screen 06: Contact & Second Opinion Request",
    path: "/contact",
    desc: "Confidential surgical review form, hospital network location map, 24/7 hotline cards, and WhatsApp direct connection.",
  },
]

const colorTokens = [
  { name: "Primary Brand Orange", hex: "#FF6B00", role: "Primary CTAs, Brand Ring, Highlights", text: "text-white" },
  { name: "Warm Orange", hex: "#FF7A00", role: "Gradients, Active States, Badges", text: "text-white" },
  { name: "Medical Red Accent", hex: "#F44236", role: "Cross, Caduceus, Urgent Indicators", text: "text-white" },
  { name: "Deep Ink Navy", hex: "#0B1220", role: "Headings, Dark Sections, Footers", text: "text-white" },
  { name: "Warm Mist Surface", hex: "#FFFBF7", role: "Backgrounds, Mesh Gradients", text: "text-slate-800", border: true },
  { name: "Border Line", hex: "#F1E5DB", role: "Subtle Card Dividers & Borders", text: "text-slate-800", border: true },
]

export default function FigmaScreens() {
  const [activeScreen, setActiveScreen] = useState(screens[0])
  const [device, setDevice] = useState("desktop")
  const [copiedColor, setCopiedColor] = useState("")

  const copyToClipboard = (hex) => {
    navigator.clipboard.writeText(hex)
    setCopiedColor(hex)
    setTimeout(() => setCopiedColor(""), 2000)
  }

  const deviceWidths = {
    desktop: "w-full h-[780px]",
    tablet: "w-[768px] h-[780px]",
    mobile: "w-[390px] h-[740px]",
  }

  return (
    <div className="bg-[#0f172a] text-slate-100 min-h-screen">
      {/* Top Figma Control Bar */}
      <div className="border-b border-slate-800 bg-[#090d16] px-6 py-4 sticky top-0 z-50">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-hk-gradient text-white shadow-md">
              <Layers className="h-5 w-5" />
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display text-base font-black text-white">
                  Hokena Care · Figma UI Screens
                </span>
                <span className="rounded-full bg-orange-500/20 px-2.5 py-0.5 text-[11px] font-bold text-[#ff8533] border border-orange-500/30">
                  Figma High-Fidelity
                </span>
              </div>
              <p className="text-xs text-slate-400">Design System & Interactive Screen Mockups</p>
            </div>
          </div>

          {/* Device Frame Viewport Selectors */}
          <div className="flex items-center gap-1 rounded-2xl bg-slate-900 p-1 border border-slate-800">
            <button
              type="button"
              onClick={() => setDevice("desktop")}
              className={`flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-extrabold transition-all cursor-pointer ${
                device === "desktop"
                  ? "bg-[#ff6b00] text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Monitor className="h-3.5 w-3.5" /> Desktop
            </button>
            <button
              type="button"
              onClick={() => setDevice("tablet")}
              className={`flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-extrabold transition-all cursor-pointer ${
                device === "tablet"
                  ? "bg-[#ff6b00] text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Tablet className="h-3.5 w-3.5" /> Tablet (768px)
            </button>
            <button
              type="button"
              onClick={() => setDevice("mobile")}
              className={`flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-extrabold transition-all cursor-pointer ${
                device === "mobile"
                  ? "bg-[#ff6b00] text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Smartphone className="h-3.5 w-3.5" /> Mobile (390px)
            </button>
          </div>

          {/* Action to open in new tab */}
          <Link
            to={activeScreen.path}
            target="_blank"
            className="inline-flex items-center gap-1.5 rounded-xl bg-slate-800 px-4 py-2 text-xs font-bold text-white hover:bg-slate-700 transition-colors"
          >
            Open Live Screen <ExternalLink className="h-3.5 w-3.5 text-[#ff8533]" />
          </Link>
        </div>
      </div>

      <div className="container-page py-10">
        {/* Screen Picker Tabs */}
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
            Select Screen to Inspect:
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {screens.map((screen) => (
              <button
                key={screen.id}
                type="button"
                onClick={() => setActiveScreen(screen)}
                className={`text-left rounded-2xl p-4 transition-all border cursor-pointer ${
                  activeScreen.id === screen.id
                    ? "border-[#ff6b00] bg-orange-500/10 shadow-lg shadow-[#ff6b00]/10"
                    : "border-slate-800 bg-slate-900/60 hover:border-slate-700"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-display text-sm font-extrabold text-white">
                    {screen.title}
                  </span>
                  {activeScreen.id === screen.id && (
                    <span className="h-2 w-2 rounded-full bg-[#ff6b00] animate-ping" />
                  )}
                </div>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {screen.desc}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Live Device Frame Preview Canvas */}
        <div className="mb-14 rounded-[2.5rem] border border-slate-800 bg-[#070b14] p-4 sm:p-8 flex flex-col items-center shadow-2xl relative">
          <div className="w-full flex items-center justify-between text-xs text-slate-400 pb-4 mb-4 border-b border-slate-800">
            <span className="font-bold flex items-center gap-2">
              <Layout className="h-4 w-4 text-[#ff6b00]" />
              Frame: {activeScreen.title} ({device.toUpperCase()})
            </span>
            <span className="text-[11px] font-mono text-slate-500">
              Interactive Live Preview
            </span>
          </div>

          {/* Mockup Frame Container */}
          <div
            className={`transition-all duration-300 rounded-[2rem] border-4 border-slate-700 bg-white overflow-hidden shadow-2xl ${deviceWidths[device]}`}
          >
            <iframe
              title={activeScreen.title}
              src={activeScreen.path}
              className="w-full h-full border-none"
            />
          </div>
        </div>

        {/* Figma Design System Inspector Section */}
        <div className="rounded-[2.5rem] border border-slate-800 bg-[#090d16] p-8 lg:p-12 shadow-xl">
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-800">
            <Palette className="h-6 w-6 text-[#ff6b00]" />
            <div>
              <h3 className="font-display text-xl font-black text-white">
                Hokena Care · Figma Design Tokens
              </h3>
              <p className="text-xs text-slate-400">
                Official color palette, typography hierarchy, and UI components
              </p>
            </div>
          </div>

          {/* Color Palette Swatches */}
          <div className="mb-10">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              Color Styles (Click Hex to Copy)
            </h4>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {colorTokens.map((c) => (
                <div
                  key={c.name}
                  onClick={() => copyToClipboard(c.hex)}
                  className="group rounded-2xl border border-slate-800 bg-slate-900 p-4 transition-all hover:border-[#ff6b00] cursor-pointer"
                >
                  <div
                    className={`h-16 w-full rounded-xl mb-3 flex items-center justify-center font-mono font-bold text-sm ${c.text} ${c.border ? 'border border-slate-700' : ''}`}
                    style={{ backgroundColor: c.hex }}
                  >
                    {copiedColor === c.hex ? (
                      <span className="flex items-center gap-1 bg-black/50 px-3 py-1 rounded-full text-xs text-white">
                        <Check className="h-3.5 w-3.5" /> Copied!
                      </span>
                    ) : (
                      <span>{c.hex}</span>
                    )}
                  </div>
                  <p className="font-display text-sm font-bold text-white">{c.name}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{c.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Typography Scale */}
          <div className="border-t border-slate-800 pt-8">
            <div className="flex items-center gap-2 mb-4">
              <Type className="h-4 w-4 text-[#ff6b00]" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Typography Scale
              </h4>
            </div>

            <div className="space-y-4 rounded-2xl bg-slate-900/60 p-6 border border-slate-800">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="font-display text-2xl font-black text-white">Display Heading Bold</span>
                <span className="text-xs font-mono text-slate-400">Plus Jakarta Sans / 900 / -0.025em</span>
              </div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="font-display text-lg font-bold text-white">Section Title Medium</span>
                <span className="text-xs font-mono text-slate-400">Plus Jakarta Sans / 700</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-300">Clean body text for medical procedures, descriptions and clinical guidance.</span>
                <span className="text-xs font-mono text-slate-400">Inter / 400 / 1.6</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
