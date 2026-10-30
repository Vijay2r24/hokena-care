import { Link } from "react-router-dom"
import {
  Globe2,
  Plane,
  ShieldCheck,
  Building2,
  CalendarCheck,
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  Clock,
  Compass,
  Languages,
  BadgeCheck,
} from "lucide-react"
import PageHero from "../components/PageHero"

const internationalPerks = [
  {
    icon: Globe2,
    title: "Medical Visa & Invitation Letters",
    desc: "Fast-tracked official Medical Visa (MED) invitation letters from accredited tertiary partner hospitals issued within 24 hours.",
  },
  {
    icon: Plane,
    title: "Airport Concierge & Transfers",
    desc: "Private airport pickup, ambulance transfer for critical cases, and hotel/guest house booking for patient attendants.",
  },
  {
    icon: Languages,
    title: "Dedicated Language Interpreters",
    desc: "Fluent translators for Arabic, French, Russian, Swahili, and regional Indian languages dedicated to you throughout the hospital stay.",
  },
  {
    icon: ShieldCheck,
    title: "Accredited JCI & NABH Hospitals",
    desc: "Access premier quaternary healthcare institutions equipped with da Vinci robots, proton therapy, and hybrid cath labs.",
  },
  {
    icon: Clock,
    title: "Zero Waiting Time for Surgeries",
    desc: "Immediate surgery scheduling upon arrival. No waiting queues for cardiac, ortho, or oncology procedures.",
  },
  {
    icon: BadgeCheck,
    title: "Post-Discharge Remote Follow-ups",
    desc: "Continuous tele-health consultations with your operating surgeon after returning to your home country.",
  },
]

export default function HealInIndia() {
  return (
    <div>
      <PageHero
        eyebrow="Government of India · Heal in India Initiative"
        title="Premier Medical Travel & Surgery Concierge in India"
        description="Providing international and outstation patients with transparent surgical care, visa facilitation, multi-lingual assistance, and priority admission across India's top hospital networks."
        breadcrumbs={[{ label: "Heal in India" }]}
      />

      <section className="container-page py-16">
        {/* Flagship stats */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 mb-16">
          <div className="rounded-2xl border border-orange-100 bg-white p-6 text-center shadow-sm">
            <span className="font-display text-3xl font-black text-[#ff6b00]">150+</span>
            <p className="text-xs font-bold text-slate-600 mt-1">NABH & JCI Hospitals</p>
          </div>
          <div className="rounded-2xl border border-orange-100 bg-white p-6 text-center shadow-sm">
            <span className="font-display text-3xl font-black text-[#f44236]">60-80%</span>
            <p className="text-xs font-bold text-slate-600 mt-1">Cost Savings vs US/UK</p>
          </div>
          <div className="rounded-2xl border border-orange-100 bg-white p-6 text-center shadow-sm">
            <span className="font-display text-3xl font-black text-[#ff6b00]">35+</span>
            <p className="text-xs font-bold text-slate-600 mt-1">Countries Served</p>
          </div>
          <div className="rounded-2xl border border-orange-100 bg-white p-6 text-center shadow-sm">
            <span className="font-display text-3xl font-black text-[#34d373]">24/7</span>
            <p className="text-xs font-bold text-slate-600 mt-1">Dedicated Concierge Desk</p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="mb-2 inline-flex items-center gap-2 rounded-full bg-orange-100 px-3.5 py-1 text-xs font-bold text-[#ea580c]">
            Comprehensive Concierge
          </span>
          <h2 className="font-display text-3xl font-black text-slate-900">
            End-to-End International Patient Pathway
          </h2>
          <p className="mt-2 text-slate-600">
            From your very first medical inquiry from overseas to your safe return flight home.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {internationalPerks.map((perk, idx) => {
            const Icon = perk.icon
            return (
              <div
                key={perk.title}
                className="rounded-[2rem] border border-orange-100 bg-white p-7 shadow-sm transition-all hover:border-orange-200 hover:shadow-lg"
                data-aos="fade-up"
                data-aos-delay={idx * 60}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-[#ff6b00] mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900 mb-2">
                  {perk.title}
                </h3>
                <p className="text-xs leading-relaxed text-slate-600">
                  {perk.desc}
                </p>
              </div>
            )
          })}
        </div>

        {/* Inquiry Box */}
        <div className="rounded-[2.5rem] bg-gradient-to-br from-[#0b1220] via-[#1e293b] to-[#0b1220] p-8 sm:p-12 text-white text-center max-w-3xl mx-auto shadow-2xl border border-white/10">
          <Globe2 className="h-12 w-12 text-[#ff6b00] mx-auto mb-4" />
          <h3 className="font-display text-2xl sm:text-3xl font-black">
            Traveling to India for Medical Care?
          </h3>
          <p className="mt-3 text-slate-300 text-sm leading-relaxed max-w-lg mx-auto">
            Send your medical reports and passport details. Our International Patient Coordinator will arrange a custom treatment plan, estimated quote, and Visa letter within 24 hours.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-hk-gradient px-7 py-3.5 font-display text-sm font-extrabold text-white shadow-lg hover:brightness-105"
            >
              <CalendarCheck className="h-4 w-4" />
              Submit International Inquiry
            </Link>
            <a
              href="https://wa.me/911800465362"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 font-display text-sm font-extrabold text-white hover:bg-white/20"
            >
              <PhoneCall className="h-4 w-4 text-[#34d373]" />
              WhatsApp International Desk
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
