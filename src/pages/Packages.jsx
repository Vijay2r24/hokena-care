import { Link } from "react-router-dom"
import {
  HeartPulse,
  CheckCircle2,
  CalendarCheck,
  Home,
  Clock,
  ShieldCheck,
  ArrowRight,
  Sparkles,
} from "lucide-react"
import PageHero from "../components/PageHero"

const packages = [
  {
    name: "Pre-Operative Comprehensive Health Screen",
    tag: "Surgery Clearance",
    tests: "68 Tests Included",
    reportTime: "Same-Day Reports",
    homeCollection: "Free Home Pickup",
    price: "₹2,499",
    originalPrice: "₹5,500",
    discount: "55% OFF",
    highlights: [
      "Complete Hemogram & Blood Grouping",
      "Cardiac Markers & ECG (12-Lead)",
      "Kidney (KFT) & Liver Function Tests (LFT)",
      "Coagulation Profile (PT/INR, APTT)",
      "Chest X-Ray & Viral Markers (HIV, HBsAg, HCV)",
      "Physician Clinical Fitness Certificate",
    ],
    badge: "Recommended for Surgery",
  },
  {
    name: "Hokena Full Body Executive Health Checkup",
    tag: "Preventive Care",
    tests: "85 Tests Included",
    reportTime: "24-Hour Digital Delivery",
    homeCollection: "Free Home Pickup",
    price: "₹1,999",
    originalPrice: "₹4,999",
    discount: "60% OFF",
    highlights: [
      "Lipid Profile & Extended Cardiac Risk Panel",
      "HbA1c & Fasting Blood Glucose",
      "Thyroid Profile Total (T3, T4, TSH)",
      "Vitamin D3 & Vitamin B12 Deficiency Check",
      "Pancreatic Amylase & Electrolyte Panel",
      "Free Tele-Consultation with Senior Physician",
    ],
    badge: "Most Popular",
  },
  {
    name: "Cardiac & Vascular Health Vital Screen",
    tag: "Heart Health",
    tests: "55 Tests Included",
    reportTime: "24-Hour Digital Delivery",
    homeCollection: "Free Home Pickup",
    price: "₹2,999",
    originalPrice: "₹6,200",
    discount: "52% OFF",
    highlights: [
      "High-Sensitivity C-Reactive Protein (hs-CRP)",
      "Apolipoprotein A1 & B Panel",
      "Homocysteine & Cardiac Enzymes",
      "Detailed Lipid & Triglyceride Analysis",
      "Kidney Function & Microalbuminuria",
      "Senior Cardiologist Tele-Consultation",
    ],
    badge: "Cardiac Specialist",
  },
]

export default function Packages() {
  return (
    <div>
      <PageHero
        eyebrow="Preventive & Pre-Surgery Diagnostics"
        title="NABL-Accredited Health Checkup Packages"
        description="Doctor-curated preventive health packages and pre-surgery clearance panels with 100% free home sample pickup, digital report tracking, and complimentary physician teleconsultation."
        breadcrumbs={[{ label: "Health Packages" }]}
      />

      <section className="container-page py-16">
        {/* Quality trust strip */}
        <div className="grid gap-4 sm:grid-cols-3 mb-12">
          <div className="flex items-center gap-3 rounded-2xl border border-orange-100 bg-orange-50/50 p-4">
            <ShieldCheck className="h-6 w-6 text-[#ff6b00]" />
            <div className="text-xs">
              <span className="font-extrabold text-slate-900 block">NABL & CAP Certified</span>
              <span className="text-slate-600">Strict clinical lab standards</span>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-orange-100 bg-orange-50/50 p-4">
            <Home className="h-6 w-6 text-[#ff6b00]" />
            <div className="text-xs">
              <span className="font-extrabold text-slate-900 block">Free Home Sample Pickup</span>
              <span className="text-slate-600">Sterile, barcoded collection kits</span>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-orange-100 bg-orange-50/50 p-4">
            <Clock className="h-6 w-6 text-[#ff6b00]" />
            <div className="text-xs">
              <span className="font-extrabold text-slate-900 block">Fast Digital Reports</span>
              <span className="text-slate-600">Delivered directly via WhatsApp/Email</span>
            </div>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="flex flex-col justify-between rounded-[2.25rem] border border-orange-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl relative overflow-hidden"
              data-aos="fade-up"
            >
              {pkg.badge && (
                <div className="absolute top-5 right-5 rounded-full bg-hk-gradient px-3 py-1 text-[10px] font-black uppercase tracking-wider text-white shadow-sm">
                  {pkg.badge}
                </div>
              )}

              <div>
                <span className="text-xs font-bold text-[#ea580c] uppercase tracking-wider">
                  {pkg.tag}
                </span>

                <h3 className="font-display text-xl font-black text-slate-900 mt-2 mb-3">
                  {pkg.name}
                </h3>

                <div className="flex items-baseline gap-2 mb-4">
                  <span className="font-display text-3xl font-black text-slate-900">
                    {pkg.price}
                  </span>
                  <span className="text-sm font-semibold text-slate-400 line-through">
                    {pkg.originalPrice}
                  </span>
                  <span className="rounded-md bg-green-100 px-2 py-0.5 text-xs font-bold text-green-700">
                    {pkg.discount}
                  </span>
                </div>

                <div className="text-xs font-bold text-slate-600 space-y-1 mb-6 pb-4 border-b border-slate-100">
                  <p>🧪 {pkg.tests}</p>
                  <p>⚡ {pkg.reportTime}</p>
                  <p>🏡 {pkg.homeCollection}</p>
                </div>

                <div className="space-y-2.5 mb-8">
                  {pkg.highlights.map((item) => (
                    <div key={item} className="flex items-start gap-2 text-xs text-slate-600 font-medium">
                      <CheckCircle2 className="h-4 w-4 text-[#34d373] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Link
                  to="/contact"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-hk-gradient py-3.5 font-display text-sm font-extrabold text-white shadow-md shadow-[#ff6b00]/25 transition-all hover:brightness-105"
                >
                  <CalendarCheck className="h-4 w-4" />
                  Book Package with Home Pickup
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
