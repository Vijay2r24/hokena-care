import { useState } from "react"
import { Link } from "react-router-dom"
import { Calculator, ArrowRight, CheckCircle2, ShieldCheck, Sparkles, DollarSign } from "lucide-react"

const procedures = [
  {
    name: "Total Knee Replacement (Robotic)",
    usCost: 32000,
    ukCost: 18000,
    indiaCost: 5500,
    daysStay: "3-4 Days",
    recovery: "2 Weeks",
  },
  {
    name: "Coronary Artery Bypass (CABG)",
    usCost: 85000,
    ukCost: 35000,
    indiaCost: 6800,
    daysStay: "5-7 Days",
    recovery: "3 Weeks",
  },
  {
    name: "Hip Replacement (Direct Anterior)",
    usCost: 38000,
    ukCost: 19500,
    indiaCost: 5900,
    daysStay: "3-4 Days",
    recovery: "2-3 Weeks",
  },
  {
    name: "Laser Kidney Stone Removal (RIRS)",
    usCost: 14000,
    ukCost: 8500,
    indiaCost: 2400,
    daysStay: "1 Day",
    recovery: "3 Days",
  },
  {
    name: "Laparoscopic Gallbladder Surgery",
    usCost: 16000,
    ukCost: 9000,
    indiaCost: 2200,
    daysStay: "1 Day",
    recovery: "4-5 Days",
  },
  {
    name: "Spine Microdiscectomy / Fusion",
    usCost: 45000,
    ukCost: 24000,
    indiaCost: 5200,
    daysStay: "2-3 Days",
    recovery: "2 Weeks",
  },
]

export default function CostSavingsCalculator() {
  const [selectedIdx, setSelectedIdx] = useState(0)
  const [currency, setCurrency] = useState("USD")

  const proc = procedures[selectedIdx]
  const savingsAmount = proc.usCost - proc.indiaCost
  const savingsPct = Math.round((savingsAmount / proc.usCost) * 100)

  return (
    <section className="container-page py-16 lg:py-20">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-orange-200/80 bg-gradient-to-br from-[#fff7ed] via-white to-[#fffaf5] p-8 sm:p-12 lg:p-16 shadow-[0_25px_70px_rgba(255,107,0,0.1)]">
        {/* Ambient Glow */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#ff6b00]/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-[#f44236]/10 blur-3xl" />

        <div className="relative grid items-center gap-10 lg:grid-cols-12">
          {/* Left Column: Heading and Procedure Picker */}
          <div className="lg:col-span-6" data-aos="fade-right">
            <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-orange-100 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#ea580c]">
              <Calculator className="h-3.5 w-3.5 text-[#ff6b00]" />
              Transparent Pricing Estimator
            </span>

            <h2 className="font-display text-3xl font-black text-slate-900 sm:text-4xl lg:text-4xl lg:leading-tight">
              Compare Surgery Costs & Save Up to{" "}
              <span className="bg-gradient-to-r from-[#ff6b00] to-[#f44236] bg-clip-text text-transparent">
                85% in India
              </span>
            </h2>

            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Same international JCI/NABH accredited standards, certified senior surgeons, and cutting-edge robotic technology at a fraction of Western costs with zero hidden charges.
            </p>

            {/* Select Procedure Dropdown */}
            <div className="mt-8 space-y-2">
              <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700">
                Choose Surgical Procedure:
              </label>
              <div className="grid gap-2 sm:grid-cols-2">
                {procedures.map((p, idx) => (
                  <button
                    key={p.name}
                    type="button"
                    onClick={() => setSelectedIdx(idx)}
                    className={`rounded-2xl p-3 text-left transition-all text-xs font-bold border cursor-pointer ${
                      selectedIdx === idx
                        ? "border-[#ff6b00] bg-[#ff6b00] text-white shadow-md shadow-[#ff6b00]/25"
                        : "border-orange-100 bg-white text-slate-800 hover:border-orange-200 hover:bg-orange-50/50"
                    }`}
                  >
                    {p.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Comparative Savings Box */}
          <div className="lg:col-span-6" data-aos="fade-left">
            <div className="rounded-[2.25rem] border border-orange-200 bg-white p-7 sm:p-9 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                <div>
                  <span className="text-[11px] font-extrabold text-[#ea580c] uppercase">Selected Surgery</span>
                  <h3 className="font-display text-xl font-black text-slate-900">{proc.name}</h3>
                </div>
                <div className="rounded-full bg-green-50 px-3 py-1 text-xs font-black text-green-700 border border-green-200">
                  Save ~{savingsPct}%
                </div>
              </div>

              {/* Price comparison bars */}
              <div className="space-y-4 mb-8">
                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-600 mb-1">
                    <span>United States (Avg.)</span>
                    <span className="text-slate-900">${proc.usCost.toLocaleString()}</span>
                  </div>
                  <div className="h-3 w-full rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full bg-slate-400 rounded-full w-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-600 mb-1">
                    <span>United Kingdom (NHS / Private)</span>
                    <span className="text-slate-900">${proc.ukCost.toLocaleString()}</span>
                  </div>
                  <div className="h-3 w-full rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full bg-amber-400 rounded-full" style={{ width: `${(proc.ukCost / proc.usCost) * 100}%` }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-extrabold text-[#ff6b00] mb-1">
                    <span>India (Hokena Care Partner Network)</span>
                    <span className="text-base font-black text-[#ff6b00]">${proc.indiaCost.toLocaleString()}</span>
                  </div>
                  <div className="h-4 w-full rounded-full bg-orange-100 overflow-hidden p-0.5">
                    <div className="h-full bg-hk-gradient rounded-full" style={{ width: `${(proc.indiaCost / proc.usCost) * 100}%` }} />
                  </div>
                </div>
              </div>

              {/* Inclusions summary */}
              <div className="grid grid-cols-2 gap-3 text-xs border-t border-slate-100 pt-5 mb-6">
                <div>
                  <span className="text-slate-400 font-bold block">Hospital Stay</span>
                  <span className="font-extrabold text-slate-800">{proc.daysStay} Private Room</span>
                </div>
                <div>
                  <span className="text-slate-400 font-bold block">Average Recovery</span>
                  <span className="font-extrabold text-slate-800">{proc.recovery}</span>
                </div>
              </div>

              <div className="space-y-2 mb-6 text-xs text-slate-600">
                <p className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="h-4 w-4 text-[#34d373]" />
                  Includes surgeon fee, OR charges, implants & pre-op tests
                </p>
                <p className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="h-4 w-4 text-[#34d373]" />
                  Complimentary airport pickup & dedicated language translator
                </p>
              </div>

              <Link
                to="/contact"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-hk-gradient py-3.5 font-display text-sm font-extrabold text-white shadow-lg shadow-[#ff6b00]/25 transition-all hover:brightness-105"
              >
                Get Exact Custom Quote for {proc.name}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
