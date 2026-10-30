import { useState } from "react"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  CheckCircle2,
  CalendarCheck,
  Send,
  MessageCircle,
} from "lucide-react"
import PageHero from "../components/PageHero"

const initialForm = {
  name: "",
  phone: "",
  email: "",
  treatment: "General Surgery / Laparoscopic",
  city: "Delhi NCR",
  message: "",
}

export default function Contact() {
  const [formData, setFormData] = useState(initialForm)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setFormData(initialForm)
    }, 1000)
  }

  return (
    <div>
      <PageHero
        eyebrow="24/7 Care Coordination"
        title="Connect with Hokena Care Patient Concierge"
        description="Have questions about a diagnosis, surgical procedure, insurance coverage, or hospital stay? Our senior medical advisors respond within 1 business hour."
        breadcrumbs={[{ label: "Contact" }]}
      />

      <section className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6" data-aos="fade-right">
            <div className="rounded-[2rem] border border-orange-100 bg-white p-7 shadow-sm">
              <h3 className="font-display text-xl font-black text-slate-900 mb-6">
                Get In Touch Directly
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-[#ff6b00]">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 block uppercase">24x7 Helpline</span>
                    <a href="tel:1800465362" className="text-base font-black text-slate-900 hover:text-[#ff6b00]">
                      1800-HOKENA (Toll-Free)
                    </a>
                    <p className="text-xs text-slate-500 mt-0.5">+91 1800-465-362</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-[#f44236]">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 block uppercase">Email Support</span>
                    <a href="mailto:care@hokenacare.com" className="text-base font-black text-slate-900 hover:text-[#f44236]">
                      care@hokenacare.com
                    </a>
                    <p className="text-xs text-slate-500 mt-0.5">reports@hokenacare.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-green-50 text-[#34d373]">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 block uppercase">WhatsApp Doctor Desk</span>
                    <a
                      href="https://wa.me/911800465362"
                      target="_blank"
                      rel="noreferrer"
                      className="text-base font-black text-slate-900 hover:text-[#34d373]"
                    >
                      +91 1800-HOKENA
                    </a>
                    <p className="text-xs text-slate-500 mt-0.5">Instant chat & report sharing</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-[#ea580c]">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 block uppercase">Main Offices</span>
                    <p className="text-sm font-bold text-slate-900">
                      Hokena Tower, Institutional Area, Sector 44, Gurgaon, Delhi NCR 122003
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      Regional Centers: Bengaluru, Mumbai, Hyderabad, Chennai
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed Placeholder with Orange Accent */}
            <div className="rounded-[2rem] border border-orange-200/80 bg-gradient-to-br from-orange-100 to-amber-100 p-8 text-center aspect-[16/10] flex flex-col items-center justify-center">
              <MapPin className="h-10 w-10 text-[#ff6b00] mb-2 animate-bounce" />
              <p className="font-display text-lg font-black text-slate-900">
                Pan-India Hospital Network
              </p>
              <p className="text-xs text-slate-600 mt-1 max-w-xs">
                Partner hospitals located across Delhi NCR, Bengaluru, Mumbai, Hyderabad, Chennai, and Kolkata.
              </p>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7" data-aos="fade-left">
            <div className="rounded-[2.5rem] border border-orange-100 bg-white p-8 sm:p-10 shadow-lg">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#ea580c]">
                Clinical Second Opinion Form
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-black text-slate-900 mt-1 mb-2">
                Request a Confidential Case Review
              </h2>
              <p className="text-sm text-slate-600 mb-8">
                Fill out the details below. Our care coordinator will call you back to discuss recommended surgeons and hospital options.
              </p>

              {submitted && (
                <div className="mb-6 flex items-center gap-3 rounded-2xl bg-green-50 border border-green-200 p-4 text-green-800 text-sm font-bold animate-fade-in">
                  <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
                  <span>Thank you! Your case inquiry has been submitted. Our clinical coordinator will contact you shortly.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#ff6b00] focus:ring-2 focus:ring-orange-100"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#ff6b00] focus:ring-2 focus:ring-orange-100"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#ff6b00] focus:ring-2 focus:ring-orange-100"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Preferred City / Region
                    </label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#ff6b00]"
                    >
                      <option value="Delhi NCR">Delhi NCR</option>
                      <option value="Bengaluru">Bengaluru</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Hyderabad">Hyderabad</option>
                      <option value="Chennai">Chennai</option>
                      <option value="Kolkata">Kolkata</option>
                      <option value="International (Heal in India)">International Patient (Outside India)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Treatment / Surgery Needed
                  </label>
                  <select
                    value={formData.treatment}
                    onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#ff6b00]"
                  >
                    <option value="Laparoscopic Surgery (Gallbladder / Hernia / Appendix)">Laparoscopic Surgery (Gallbladder / Hernia / Appendix)</option>
                    <option value="Orthopedic Knee / Hip Joint Replacement">Orthopedic Knee / Hip Joint Replacement</option>
                    <option value="Cardiac Surgery / Angioplasty / CABG">Cardiac Surgery / Angioplasty / CABG</option>
                    <option value="Surgical Oncology / Cancer Treatment">Surgical Oncology / Cancer Treatment</option>
                    <option value="Laser Urology / Kidney Stone Removal">Laser Urology / Kidney Stone Removal</option>
                    <option value="Eye Surgery / Cataract / Lasik">Eye Surgery / Cataract / Lasik</option>
                    <option value="Other / General Second Opinion">Other / General Second Opinion</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Describe Patient Symptoms / Existing Diagnosis
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Briefly describe your current condition, test results, or doctor recommendations..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#ff6b00] focus:ring-2 focus:ring-orange-100"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-hk-gradient py-4 font-display text-sm font-extrabold text-white shadow-xl shadow-[#ff6b00]/30 hover:shadow-2xl hover:brightness-105 transition-all cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Submitting Case Review...</span>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Submit for Free Doctor Second Opinion
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
