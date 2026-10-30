import { useState } from "react"
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react"

const faqs = [
  {
    q: "Why should I choose India for my medical treatment?",
    a: "India has become a leading destination for global healthcare due to its internationally accredited (JCI and NABH) hospitals, highly experienced surgeons, advanced robotic technology, and significantly affordable healthcare—often 60% to 80% lower than US/UK costs with minimal waiting time.",
  },
  {
    q: "How does Hokena Care help me throughout the medical journey?",
    a: "We are your boutique medical concierge based in Bangalore, India. We handle everything from reviewing your medical reports, arranging video second opinions with top surgeons, issuing official medical visa invitation letters, booking hospital suites, providing airport transfers, to continuous post-op recovery tracking.",
  },
  {
    q: "How do I get an initial medical opinion and cost estimate?",
    a: "Simply send us your current medical reports, scans, and doctor prescriptions via our website or directly on WhatsApp (+91 8296 183 009). Our clinical panel will review your case and provide an expert opinion and transparent cost estimate within 24 hours.",
  },
  {
    q: "Can I consult with the surgeon before traveling to India?",
    a: "Yes! We organize a secure, high-definition video consultation between you and the operating super-specialist so you can ask questions, understand the surgical procedure, and discuss recovery timelines before booking your travel.",
  },
  {
    q: "Are there any hidden costs in the treatment quotes?",
    a: "None. Hokena Care operates on a foundation of absolute ethical transparency. We provide fixed, itemized treatment estimates covering pre-op investigations, hospital stay, surgeon and anesthetist fees, implants, and routine medications.",
  },
  {
    q: "What support is provided for patient attendants and language barriers?",
    a: "We arrange guest house or hotel accommodations near the hospital for family members. We also provide dedicated language interpreters for Arabic, French, Russian, Swahili, and regional Indian languages throughout your stay.",
  },
]

export default function FaqAccordion() {
  const [openIdx, setOpenIdx] = useState(0)

  return (
    <section className="bg-hk-mist py-20 border-t border-orange-100/60">
      <div className="container-page max-w-4xl">
        <div className="text-center mb-12" data-aos="fade-up">
          <span className="mb-2 inline-flex items-center gap-2 rounded-full bg-orange-100 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#ea580c]">
            <HelpCircle className="h-3.5 w-3.5" />
            Frequently Asked Questions
          </span>
          <h2 className="font-display text-3xl font-black text-slate-900 sm:text-4xl">
            Everything You Need to Know About Medical Travel
          </h2>
          <p className="mt-2 text-slate-600 text-sm">
            Answers to common questions regarding surgeries, medical visas, costs, and hospital care in India.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx
            return (
              <div
                key={faq.q}
                className="rounded-2xl border border-slate-200/80 bg-white transition-all overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={idx * 50}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="flex w-full items-center justify-between p-6 text-left font-display text-base font-extrabold text-slate-900 hover:text-[#ff6b00] cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-[#ff6b00] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm leading-relaxed text-slate-600 border-t border-slate-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* WhatsApp prompt */}
        <div className="mt-10 rounded-2xl border border-green-200 bg-green-50/60 p-6 text-center sm:flex sm:items-center sm:justify-between sm:text-left">
          <div>
            <h4 className="font-display text-sm font-extrabold text-green-900">
              Have a specific medical question?
            </h4>
            <p className="text-xs text-green-700 mt-0.5">
              Chat directly with our Bangalore Doctor Desk on WhatsApp.
            </p>
          </div>
          <a
            href="https://wa.me/918296183009"
            target="_blank"
            rel="noreferrer"
            className="mt-4 sm:mt-0 inline-flex items-center gap-2 rounded-full bg-[#34d373] px-5 py-2.5 text-xs font-black text-white shadow-md hover:brightness-105 transition-all"
          >
            <MessageCircle className="h-4 w-4" />
            Chat on WhatsApp (+91 8296 183 009)
          </a>
        </div>
      </div>
    </section>
  )
}
