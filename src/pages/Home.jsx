import { useState } from "react"
import { Link } from "react-router-dom"
import {
  CalendarCheck,
  PhoneCall,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  Stethoscope,
  HeartPulse,
  Activity,
  FlaskConical,
  Scan,
  Building2,
  Award,
  Globe2,
  ChevronRight,
  Star,
  Users,
  MessageCircle,
} from "lucide-react"
import Typewriter from "../components/ui/Typewriter"
import CostSavingsCalculator from "../components/home/CostSavingsCalculator"
import CareJourneyTimeline from "../components/home/CareJourneyTimeline"
import WhyIndiaSection from "../components/home/WhyIndiaSection"
import FaqAccordion from "../components/home/FaqAccordion"

const services = [
  { icon: HeartPulse, label: "Health Packages", to: "/packages", color: "from-orange-500 to-amber-500", text: "text-orange-600", bg: "bg-orange-50" },
  { icon: FlaskConical, label: "Diagnostic Tests", to: "/packages", color: "from-red-500 to-rose-500", text: "text-red-600", bg: "bg-red-50" },
  { icon: Stethoscope, label: "Consult Doctors", to: "/doctors", color: "from-amber-500 to-yellow-500", text: "text-amber-700", bg: "bg-amber-50" },
  { icon: Scan, label: "Radiology & MRI", to: "/treatments", color: "from-orange-600 to-red-600", text: "text-orange-700", bg: "bg-orange-50" },
  { icon: Globe2, label: "Heal in India", to: "/heal-in-india", color: "from-orange-500 to-rose-500", text: "text-orange-600", bg: "bg-orange-50" },
  { icon: Building2, label: "Partner Hospitals", to: "/treatments", color: "from-red-600 to-amber-600", text: "text-red-700", bg: "bg-red-50" },
]

const specialties = [
  {
    title: "Cardiology & Heart Surgery",
    desc: "Bypass surgery (CABG), angioplasty, heart valve repair, and rhythm disorder management.",
    procedures: "25+ Procedures",
    popular: "24/7 Cath Lab",
  },
  {
    title: "Orthopedics & Joint Replacement",
    desc: "Robotic total knee replacement, anterior hip reconstruction, and spine microdiscectomy.",
    procedures: "35+ Procedures",
    popular: "Robotic Mako Tech",
  },
  {
    title: "Oncology (Cancer Treatment)",
    desc: "Precision tumor resections, targeted immunotherapy, and multidisciplinary tumor boards.",
    procedures: "50+ Procedures",
    popular: "Organ-Preserving Care",
  },
  {
    title: "Neurology & Spine Surgery",
    desc: "Endoscopic discectomy, scoliosis correction, brain tumor resections, and neuro-rehabilitation.",
    procedures: "30+ Procedures",
    popular: "Minimally Invasive",
  },
  {
    title: "Laparoscopic & Robotic Surgeries",
    desc: "Single-incision gallbladder removal, complex hernia repair, and bariatric procedures.",
    procedures: "40+ Procedures",
    popular: "Same-Day Discharge",
  },
  {
    title: "Cosmetic & Reconstructive Surgery",
    desc: "Aesthetic contouring, trauma reconstructive surgery, and advanced laser procedures.",
    procedures: "20+ Procedures",
    popular: "Board-Certified Plastic Surgeons",
  },
]

const doctors = [
  {
    name: "Dr. Arvind Sharma",
    role: "Senior Consultant, Surgical Oncology",
    exp: "22+ Years Exp",
    hosp: "Apollo Cancer Centre & Fortis",
    rating: "4.9",
    reviews: "340+",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Dr. Priyamvada Rao",
    role: "Director, Joint Replacement & Orthopedics",
    exp: "18+ Years Exp",
    hosp: "Max Super Specialty Hospital",
    rating: "4.9",
    reviews: "480+",
    image: "https://images.unsplash.com/photo-1594824813583-05986873132e?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Dr. K. S. Ramanathan",
    role: "Chief Cardiac Surgeon",
    exp: "25+ Years Exp",
    hosp: "Manipal Hospital Network",
    rating: "5.0",
    reviews: "620+",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Dr. Sneha Kulkarni",
    role: "Advanced Laparoscopic & GI Surgeon",
    exp: "15+ Years Exp",
    hosp: "Narayana Health City",
    rating: "4.8",
    reviews: "290+",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80",
  },
]

const stats = [
  { value: "15+", label: "Years Experience", desc: "Trusted healthcare leadership" },
  { value: "5K+", label: "Happy Patients", desc: "Guided across 20+ countries" },
  { value: "50+", label: "Partner Hospitals", desc: "JCI & NABH Accredited institutions" },
  { value: "20+", label: "Countries Connected", desc: "Global patient support desk" },
  { value: "24/7", label: "Care Assistance", desc: "Dedicated personal coordinator" },
]

export default function Home() {
  return (
    <div>
      {/* 1. Hero Section with Authentic Hokena Care Copy */}
      <section className="noise-overlay relative overflow-hidden gradient-mesh-orange pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-[#fed7aa]/50">
        <div className="container-page grid items-center gap-12 lg:grid-cols-12">
          {/* Left Hero Content */}
          <div className="lg:col-span-7">
            {/* Brand Eyebrow Badge */}
            <div
              className="inline-flex items-center gap-2 rounded-full border border-[#fdba74] bg-white/90 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-[#ea580c] shadow-sm backdrop-blur-md mb-6"
              data-aos="fade-down"
            >
              <span className="flex h-2 w-2 rounded-full bg-[#f44236] animate-ping" />
              <Sparkles className="h-3.5 w-3.5 text-[#ff6b00]" />
              Healing Beyond Borders · International Medical Care in India
            </div>

            {/* Main Typewriter Heading */}
            <h1
              className="font-display text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl lg:leading-[1.12]"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <Typewriter
                phrases={[
                  "Healing Beyond Borders, Trusted Care in India",
                  "Your Health, Your Journey, Your Peace of Mind",
                  "World-Class Surgeries, Complete Transparency",
                  "Expert Clinicians, Seamless Recovery",
                ]}
              />
            </h1>

            {/* Subtitle from HokenaCare */}
            <p
              className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              From consultation to recovery, we guide you through every step of your medical journey with clarity, care, and complete transparency. Access world-class healthcare, expert doctors, and seamless medical travel support — all in one place.
            </p>

            {/* Action Buttons */}
            <div
              className="mt-8 flex flex-wrap items-center gap-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-hk-gradient px-7 py-3.5 font-display text-sm font-extrabold text-white shadow-xl shadow-[#ff6b00]/30 transition-all duration-300 hover:shadow-2xl hover:shadow-[#ff6b00]/40 hover:-translate-y-1 active:scale-95"
              >
                <CalendarCheck className="h-4 w-4" />
                Enquire Now / Free Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://wa.me/918296183009"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-green-300 bg-white/95 px-6 py-3.5 font-display text-sm font-extrabold text-green-700 shadow-sm transition-all duration-300 hover:bg-green-50 active:scale-95"
              >
                <MessageCircle className="h-4 w-4 text-[#34d373]" />
                WhatsApp +91 8296 183 009
              </a>
            </div>

            {/* Core Values Strip from hokenacare.com */}
            <div
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-orange-200/60 pt-6 text-xs font-bold text-slate-600"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[#ff6b00]" />
                Ethical & Transparent
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[#f44236]" />
                Patient Focused
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[#ff6b00]" />
                Global Support (US, UK, Africa)
              </div>
            </div>
          </div>

          {/* Right Hero Visual Card */}
          <div className="lg:col-span-5" data-aos="zoom-in" data-aos-delay="200">
            <div className="relative">
              {/* Radiant Glow Aura */}
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-[#ff6b00] via-[#ff8533] to-[#f44236] opacity-25 blur-3xl" />

              {/* Card Container */}
              <div className="group relative overflow-hidden rounded-[2.25rem] border-[6px] border-white/90 bg-white shadow-[0_30px_90px_rgba(255,107,0,0.2)]">
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80"
                  alt="Doctor reviewing medical scan with international patient"
                  className="h-[440px] sm:h-[480px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Floating Brand Logo Badge */}
                <div className="absolute top-4 right-4 z-20 rounded-2xl border border-white/90 bg-white/95 p-3 shadow-xl backdrop-blur-md transition-transform duration-300 hover:scale-105">
                  <img src="/logo.png" alt="Hokena Care" className="h-12 w-12 object-contain" />
                </div>

                {/* Top Left Tag */}
                <div className="absolute top-4 left-4 z-20 rounded-full border border-white/60 bg-white/90 px-3.5 py-1 text-xs font-bold text-slate-800 shadow-md backdrop-blur-md flex items-center gap-1.5">
                  <Globe2 className="h-3.5 w-3.5 text-[#ff6b00]" />
                  Heal In India Partner
                </div>

                {/* Bottom Overlay Glass Card */}
                <div className="absolute bottom-4 left-4 right-4 z-20 rounded-2xl border border-white/90 bg-white/95 p-4 sm:p-5 shadow-2xl backdrop-blur-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-display text-sm sm:text-base font-extrabold text-slate-900">
                        Peace Assured Medical Travel
                      </p>
                      <p className="mt-0.5 text-xs text-slate-600 line-clamp-1">
                        Full coordination: Hospital selection, visa assistance & post-recovery care.
                      </p>
                    </div>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-[#ff6b00]">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Quick Services Strip */}
      <section className="container-page relative z-20 -mt-10 mb-8" data-aos="fade-up">
        <div className="rounded-[2.25rem] border border-orange-100 bg-white/95 p-3 sm:p-5 shadow-[0_20px_50px_rgba(255,107,0,0.12)] backdrop-blur-xl">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-6 lg:gap-4">
            {services.map(({ icon: Icon, label, to, text, bg }, idx) => (
              <Link
                key={label}
                to={to}
                className="group relative flex flex-col items-center justify-center gap-3 rounded-2xl p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-orange-50/60"
              >
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110 shadow-sm ${bg} ${text} group-hover:bg-[#ff6b00] group-hover:text-white`}
                >
                  <Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                </span>
                <span className="font-display text-xs sm:text-sm font-extrabold text-slate-800 transition-colors group-hover:text-[#ff6b00]">
                  {label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 5 Pillars Stats Counter Strip (From hokenacare.com) */}
      <section className="container-page py-12" data-aos="fade-up">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-5">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-orange-100 bg-gradient-to-b from-white to-orange-50/30 p-6 text-center shadow-sm"
            >
              <span className="font-display text-3xl sm:text-4xl font-black text-[#ff6b00]">
                {s.value}
              </span>
              <h4 className="font-display text-sm font-extrabold text-slate-900 mt-1">
                {s.label}
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Interactive Cost Savings Calculator (Better than hokenacare.com!) */}
      <CostSavingsCalculator />

      {/* 5. Medical Specialties We Support */}
      <section className="container-page py-16" id="treatments">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end mb-12">
          <div>
            <span className="mb-2 inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-[#ea580c]">
              Treatments We Cover
            </span>
            <h2 className="font-display text-3xl font-black text-slate-900 sm:text-4xl">
              Medical Specialties We Support
            </h2>
            <p className="mt-2 max-w-2xl text-slate-600 text-sm sm:text-base">
              We connect you with trusted specialists across a wide range of advanced medical fields, ensuring expert care tailored to your specific health needs.
            </p>
          </div>
          <Link
            to="/treatments"
            className="inline-flex items-center gap-1.5 font-display text-sm font-extrabold text-[#ff6b00] hover:text-[#ea580c]"
          >
            Explore all specialties <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {specialties.map((spec, idx) => (
            <div
              key={spec.title}
              className="group rounded-[1.75rem] border border-slate-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-200 hover:shadow-xl card-shine"
              data-aos="fade-up"
              data-aos-delay={idx * 60}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="rounded-full bg-orange-50 px-3 py-1 text-[11px] font-extrabold text-[#ff6b00]">
                  {spec.popular}
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  {spec.procedures}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 group-hover:text-[#ff6b00] transition-colors">
                {spec.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                {spec.desc}
              </p>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500">Free Second Opinion</span>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1 text-sm font-extrabold text-[#ff6b00] group-hover:gap-2 transition-all"
                >
                  Enquire Now <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. The 9-Step Guided Process (from hokenacare.com) */}
      <CareJourneyTimeline />

      {/* 7. Why Choose India Section (from hokenacare.com) */}
      <WhyIndiaSection />

      {/* 8. Senior Specialists Showcase */}
      <section className="container-page py-16">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end mb-12">
          <div>
            <span className="mb-2 inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-[#ea580c]">
              Senior Specialists
            </span>
            <h2 className="font-display text-3xl font-black text-slate-900 sm:text-4xl">
              Meet Our Chief Surgeons & Department Heads
            </h2>
            <p className="mt-2 max-w-2xl text-slate-600 text-sm">
              Trained at premier UK, US, and European institutions with decades of verified clinical excellence.
            </p>
          </div>
          <Link
            to="/doctors"
            className="inline-flex items-center gap-1.5 font-display text-sm font-extrabold text-[#ff6b00]"
          >
            Browse all doctors <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doc, idx) => (
            <div
              key={doc.name}
              className="group overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              data-aos="fade-up"
              data-aos-delay={idx * 80}
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="font-bold text-[#ea580c]">{doc.exp}</span>
                  <span className="flex items-center gap-1 font-bold text-amber-600">
                    <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                    {doc.rating} ({doc.reviews})
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900">
                  {doc.name}
                </h3>
                <p className="text-xs text-slate-600 mt-1 font-medium">{doc.role}</p>
                <p className="text-xs text-slate-500 mt-0.5">{doc.hosp}</p>

                <div className="mt-5">
                  <Link
                    to="/contact"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-50 py-2.5 text-xs font-bold text-[#ff6b00] transition-colors group-hover:bg-[#ff6b00] group-hover:text-white"
                  >
                    <CalendarCheck className="h-3.5 w-3.5" />
                    Book Video Consultation
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Comprehensive FAQs (from hokenacare.com) */}
      <FaqAccordion />

      {/* 10. High-Converting Bottom CTA Banner */}
      <section className="container-page my-16">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#0b1220] via-[#1e293b] to-[#0b1220] p-8 sm:p-12 lg:p-16 text-white shadow-2xl border border-white/10">
          {/* Ambient Glows */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-[#ff6b00]/25 blur-[100px]" />
          <div className="pointer-events-none absolute -left-20 -bottom-20 h-96 w-96 rounded-full bg-[#f44236]/20 blur-[100px]" />

          <div className="relative grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#ff8533] backdrop-blur-md mb-6">
                <Sparkles className="h-3.5 w-3.5 text-[#ff6b00]" />
                Start Your Medical Journey with Confidence
              </span>

              <h2 className="font-display text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                Ready to take the next step with{" "}
                <span className="bg-gradient-to-r from-[#ff8533] to-[#f44236] bg-clip-text text-transparent">
                  Hokena Care?
                </span>
              </h2>

              <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-xl">
                Share your medical reports for a comprehensive second opinion, hospital comparison, and transparent quotation within 24 hours.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-hk-gradient px-7 py-3.5 font-display text-sm font-extrabold text-white shadow-lg shadow-[#ff6b00]/30 hover:shadow-xl hover:-translate-y-0.5 transition-all"
                >
                  <CalendarCheck className="h-4 w-4" />
                  Enquire Now / Free Quote
                </Link>
                <a
                  href="https://wa.me/918296183009"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 font-display text-sm font-extrabold text-white backdrop-blur-md hover:bg-white/20 transition-all"
                >
                  <MessageCircle className="h-4 w-4 text-[#34d373]" />
                  WhatsApp +91 8296 183 009
                </a>
              </div>
            </div>

            {/* Right Card */}
            <div className="lg:col-span-5">
              <div className="rounded-[2rem] border border-white/20 bg-white/10 p-6 sm:p-7 backdrop-blur-xl">
                <div className="flex items-center gap-3 border-b border-white/15 pb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#ff6b00] text-white">
                    <Stethoscope className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-extrabold text-white">
                      Hokena Care International Desk
                    </h3>
                    <p className="text-xs text-white/70">Bangalore Headquarters, India</p>
                  </div>
                </div>

                <div className="mt-5 space-y-3 text-xs">
                  <div className="flex items-start gap-3 rounded-xl bg-white/5 p-3">
                    <ShieldCheck className="h-4 w-4 text-[#ff6b00] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white">Official Medical Visa Support</span>
                      <p className="text-slate-300 mt-0.5">24-hour invitation letters for patient and attendants.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-xl bg-white/5 p-3">
                    <CheckCircle2 className="h-4 w-4 text-[#34d373] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white">100% Transparent Pricing</span>
                      <p className="text-slate-300 mt-0.5">Fixed quotes covering surgery, hospital stay & follow-ups.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 rounded-xl bg-black/30 p-3 text-center text-xs">
                  <p className="text-white/80">
                    Email our Clinical Panel:{" "}
                    <a
                      href="mailto:info@hokenacare.com"
                      className="font-bold text-[#ff8533] hover:underline"
                    >
                      info@hokenacare.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
