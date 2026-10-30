import { useState } from "react"
import {
  FileText,
  Search,
  Video,
  FileCheck2,
  CalendarCheck,
  Calculator,
  Plane,
  HeartHandshake,
  Check,
  ChevronDown,
} from "lucide-react"

const steps = [
  {
    step: "01",
    title: "First Enquiry & Guidance",
    desc: "We understand your medical condition, collect essential details, and begin guiding you with clarity from your very first conversation.",
    badge: "Day 1",
  },
  {
    step: "02",
    title: "Expert Medical Record Review",
    desc: "Your diagnostic reports, MRI/CT scans, and medical history are reviewed by our senior clinical panel to ensure an accurate diagnosis.",
    badge: "Within 12 Hours",
  },
  {
    step: "03",
    title: "Specialist & Hospital Matching",
    desc: "We connect you with the most suitable super-specialist in India, ensuring tertiary hospital accreditation and verified surgical outcomes.",
    badge: "Tailored Care",
  },
  {
    step: "04",
    title: "Pre-Travel Video Consultation",
    desc: "Consult directly with your operating surgeon over a secure HD video call to discuss your diagnosis and procedure options before traveling.",
    badge: "Direct Access",
  },
  {
    step: "05",
    title: "Treatment Recommendation",
    desc: "The specialist evaluates your case and provides clear advice, modern surgical techniques (robotic/laparoscopic), and recovery expectations.",
    badge: "Clear Advice",
  },
  {
    step: "06",
    title: "Transparent Cost & Timeline",
    desc: "Receive an itemized treatment estimate covering hospital stay, surgeon fees, implants, and medicines with zero hidden surcharges.",
    badge: "100% Fixed Quote",
  },
  {
    step: "07",
    title: "Visa, Travel & Hospital Booking",
    desc: "We issue official hospital Medical Visa letters within 24 hours, reserve private hospital suites, and arrange attendant accommodations.",
    badge: "Visa Concierge",
  },
  {
    step: "08",
    title: "Arrival, Admission & Surgery",
    desc: "Airport reception, private hospital transfer, dedicated language buddy, and priority zero-wait admission directly under your surgeon.",
    badge: "Zero-Wait OR",
  },
  {
    step: "09",
    title: "Global Support & Safe Recovery",
    desc: "Post-discharge monitoring, digital health records, tele-follow-ups with your surgeon after returning home, and global assistance in the US, UK & Africa.",
    badge: "Lifetime Follow-up",
  },
]

export default function CareJourneyTimeline() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section className="bg-hk-mist py-20 border-y border-orange-100/60">
      <div className="container-page">
        <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
          <span className="mb-2 inline-flex items-center gap-2 rounded-full bg-orange-100 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#ea580c]">
            The Hokena Care Process
          </span>
          <h2 className="font-display text-3xl font-black text-slate-900 sm:text-4xl">
            A Seamless, 9-Step Guided Medical Pathway
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            From your very first enquiry to your safe return home, we handle every detail with medical precision, complete transparency, and ethical care.
          </p>
        </div>

        {/* 9 Steps Interactive Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((item, idx) => (
            <div
              key={item.step}
              onClick={() => setActiveStep(idx)}
              className={`rounded-[2rem] p-7 transition-all border cursor-pointer relative overflow-hidden ${
                activeStep === idx
                  ? "border-[#ff6b00] bg-white shadow-xl shadow-[#ff6b00]/10 -translate-y-1"
                  : "border-slate-200/80 bg-white hover:border-orange-200 hover:shadow-md"
              }`}
              data-aos="fade-up"
              data-aos-delay={idx * 50}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-display text-3xl font-black text-[#ff6b00]/40">
                  {item.step}
                </span>
                <span className="rounded-full bg-orange-50 px-3 py-1 text-[11px] font-extrabold text-[#ea580c] border border-orange-100">
                  {item.badge}
                </span>
              </div>

              <h3 className="font-display text-lg font-black text-slate-900 mb-2">
                {item.title}
              </h3>

              <p className="text-xs leading-relaxed text-slate-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
