import { useState } from "react"
import { Link } from "react-router-dom"
import {
  Activity,
  CalendarCheck,
  ShieldCheck,
  Clock,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Award,
} from "lucide-react"
import PageHero from "../components/PageHero"

const allSurgeries = [
  {
    category: "Orthopedics",
    title: "Robotic Total Knee Replacement",
    hospitalStay: "2-3 Days",
    recovery: "2 Weeks",
    technology: "Stryker Mako Robotic Assistance",
    features: ["Sub-millimeter implant alignment", "Less blood loss & tissue trauma", "Walking on Day 1"],
  },
  {
    category: "Orthopedics",
    title: "Minimally Invasive Hip Replacement",
    hospitalStay: "2-3 Days",
    recovery: "3 Weeks",
    technology: "Direct Anterior Approach",
    features: ["No muscle cutting", "Faster return to normal movement", "Reduced dislocation risk"],
  },
  {
    category: "Laparoscopic",
    title: "Laser & Laparoscopic Gallbladder Removal",
    hospitalStay: "1 Day (Day Care)",
    recovery: "4-5 Days",
    technology: "High-Definition 4K Laparoscopy",
    features: ["Pinhole incisions", "Virtually scarless", "Discharge within 24 hours"],
  },
  {
    category: "Laparoscopic",
    title: "Advanced Hernia Repair (Inguinal / Umbilical)",
    hospitalStay: "1 Day",
    recovery: "1 Week",
    technology: "3D Mesh Fixation",
    features: ["Tension-free repair", "Zero recurrence guarantee", "Minimal post-op pain"],
  },
  {
    category: "Cardiology",
    title: "Coronary Angioplasty & Stenting (PTCA)",
    hospitalStay: "1-2 Days",
    recovery: "1 Week",
    technology: "Drug-Eluting Stents (DES)",
    features: ["Radial wrist artery access", "Instant blood flow restoration", "24/7 emergency readiness"],
  },
  {
    category: "Urology",
    title: "Laser Kidney Stone Removal (RIRS / PCNL)",
    hospitalStay: "1 Day",
    recovery: "2-3 Days",
    technology: "Holmium / Thulium Fiber Laser",
    features: ["Zero skin cuts", "Dusts stones to powder", "Same-day stent placement"],
  },
  {
    category: "Oncology",
    title: "Surgical Oncology & Tumor Resection",
    hospitalStay: "3-5 Days",
    recovery: "3-4 Weeks",
    technology: "Organ-Preserving Precision Surgery",
    features: ["Multidisciplinary Tumor Board", "Sentinel lymph node biopsy", "Comprehensive rehab"],
  },
  {
    category: "Ophthalmology",
    title: "Robotic Blade-Free Femto Lasik & Cataract",
    hospitalStay: "Day Care (2 Hours)",
    recovery: "24-48 Hours",
    technology: "Zeiss / Alcon Femtosecond Laser",
    features: ["15-minute painless procedure", "High-definition vision restoration", "Prescription freedom"],
  },
]

const categories = ["All", "Orthopedics", "Laparoscopic", "Cardiology", "Urology", "Oncology", "Ophthalmology"]

export default function Treatments() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filtered = selectedCategory === "All"
    ? allSurgeries
    : allSurgeries.filter((s) => s.category === selectedCategory)

  return (
    <div>
      <PageHero
        eyebrow="Surgical Specialties"
        title="Accredited Surgeries, Transparent Care Pathways"
        description="Explore evidence-based surgical procedures delivered across India's top tertiary hospitals with certified surgeons and transparent pricing."
        breadcrumbs={[{ label: "Treatments" }]}
      />

      <section className="container-page py-16">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-5 py-2 text-xs font-extrabold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#ff6b00] text-white shadow-md shadow-[#ff6b00]/25"
                  : "bg-orange-50 text-slate-700 hover:bg-orange-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Surgeries Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <div
              key={item.title}
              className="flex flex-col justify-between rounded-[2rem] border border-orange-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl"
              data-aos="fade-up"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-3">
                  <span className="rounded-full bg-orange-100 px-3 py-0.5 text-[#ea580c]">
                    {item.category}
                  </span>
                  <span className="flex items-center gap-1 text-slate-600">
                    <Clock className="h-3.5 w-3.5 text-[#ff6b00]" />
                    Stay: {item.hospitalStay}
                  </span>
                </div>

                <h3 className="font-display text-xl font-black text-slate-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-xs font-bold text-[#ff6b00] mb-4">
                  Tech: {item.technology}
                </p>

                <ul className="space-y-2 mb-6">
                  {item.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                      <CheckCircle2 className="h-4 w-4 text-[#34d373] shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold text-slate-400 block uppercase">Admission</span>
                  <span className="text-xs font-black text-slate-800">Cashless Available</span>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 rounded-full bg-hk-gradient px-4 py-2 text-xs font-extrabold text-white shadow-sm hover:brightness-105"
                >
                  Book Consult <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
