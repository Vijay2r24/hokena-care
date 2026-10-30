import { Link } from "react-router-dom"
import {
  ShieldCheck,
  Award,
  Clock,
  DollarSign,
  Heart,
  Globe2,
  FileCheck2,
  Users,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"

const advantages = [
  {
    icon: Clock,
    title: "Minimal Waiting Time",
    desc: "Direct access to operating theatres and senior chief surgeons with zero waiting lists.",
  },
  {
    icon: Award,
    title: "World-Class Technology",
    desc: "da Vinci Xi robotic systems, 3T MRI, PET-CT scanners, and modern hybrid cath labs.",
  },
  {
    icon: Users,
    title: "Globally Renowned Specialists",
    desc: "Surgeons trained at top UK, US, and European institutions with 15+ to 30+ years experience.",
  },
  {
    icon: DollarSign,
    title: "60-80% Affordable Healthcare",
    desc: "Uncompromised clinical outcomes at a fraction of Western costs with transparent fixed pricing.",
  },
  {
    icon: FileCheck2,
    title: "Fast-Tracked Medical Visas",
    desc: "Official hospital invitation letters delivered within 24 hours for patients and attendant visas.",
  },
  {
    icon: Heart,
    title: "Dedicated Personal Care",
    desc: "Personal care managers and language buddies supporting you from arrival to safe recovery.",
  },
]

export default function WhyIndiaSection() {
  return (
    <section className="container-page py-20">
      <div className="grid items-center gap-12 lg:grid-cols-12">
        {/* Left Column */}
        <div className="lg:col-span-5" data-aos="fade-right">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-orange-100 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#ea580c]">
            Heal in India
          </span>

          <h2 className="font-display text-3xl font-black text-slate-900 sm:text-4xl lg:leading-tight">
            Why Patients Worldwide Choose India for Medical Care
          </h2>

          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            India is now the world’s leading hub for medical travel. At Hokena Care, we partner exclusively with JCI and NABH accredited institutions, ensuring top-tier surgical safety, zero bureaucracy, and clinical excellence.
          </p>

          <div className="mt-6 space-y-3">
            {[
              "150+ Partner Super-Specialty Hospitals",
              "5,000+ International Patients Guided",
              "English-Speaking Doctors & Multi-Lingual Interpreters",
            ].map((pt) => (
              <div key={pt} className="flex items-center gap-2.5 text-xs font-extrabold text-slate-800">
                <CheckCircle2 className="h-4 w-4 text-[#ff6b00]" />
                {pt}
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              to="/heal-in-india"
              className="inline-flex items-center gap-2 rounded-full bg-hk-gradient px-6 py-3 font-display text-sm font-extrabold text-white shadow-md shadow-[#ff6b00]/25 hover:brightness-105 transition-all"
            >
              Explore International Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Right Advantages Grid */}
        <div className="lg:col-span-7" data-aos="fade-left">
          <div className="grid gap-4 sm:grid-cols-2">
            {advantages.map((adv) => {
              const Icon = adv.icon
              return (
                <div
                  key={adv.title}
                  className="rounded-[2rem] border border-orange-100 bg-white p-6 shadow-sm transition-all hover:border-orange-200 hover:shadow-md card-shine"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-50 text-[#ff6b00] mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-base font-black text-slate-900 mb-1.5">
                    {adv.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-600">
                    {adv.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
