import { Link } from "react-router-dom"
import { ChevronRight } from "lucide-react"

export default function PageHero({
  eyebrow = "Heal in India",
  title,
  description,
  breadcrumbs = [],
  badge,
}) {
  return (
    <section className="noise-overlay relative overflow-hidden gradient-mesh-orange border-b border-[#ffedd5] pb-12 pt-16 sm:pb-16 sm:pt-20">
      {/* Ambient orbs */}
      <div className="pointer-events-none absolute -right-16 top-10 h-72 w-72 rounded-full bg-[#ff6b00]/15 blur-3xl animate-drift" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-[#f44236]/10 blur-3xl" />

      <div className="container-page relative">
        {breadcrumbs.length > 0 && (
          <nav className="mb-4 flex flex-wrap items-center gap-1.5 text-xs font-semibold text-slate-500">
            <Link to="/" className="hover:text-[#ff6b00] transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb) => (
              <span key={crumb.label} className="flex items-center gap-1.5">
                <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
                {crumb.to ? (
                  <Link to={crumb.to} className="hover:text-[#ff6b00] transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[#ff6b00] font-bold">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        <div className="max-w-3xl" data-aos="fade-up">
          {eyebrow && (
            <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-orange-100/80 px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-[#ea580c] border border-orange-200">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff6b00]" />
              {eyebrow}
            </span>
          )}

          <h1 className="font-display text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {title}
          </h1>

          {description && (
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              {description}
            </p>
          )}

          {badge && (
            <div className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-2 text-xs font-bold text-slate-800 shadow-sm border border-orange-100">
              {badge}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
