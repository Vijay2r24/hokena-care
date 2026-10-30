import { useState, useMemo } from "react"
import { Link } from "react-router-dom"
import {
  CalendarCheck,
  Star,
  ShieldCheck,
  MapPin,
  Search,
  Award,
  ArrowRight,
  Filter,
} from "lucide-react"
import PageHero from "../components/PageHero"

const doctorList = [
  {
    name: "Dr. Arvind Sharma",
    specialty: "Surgical Oncology",
    experience: "22+ Years",
    degrees: "MBBS, MS (Surg), MCh (Surg Onco), FACS",
    hospital: "Apollo Cancer Centre & Fortis Healthcare",
    city: "Delhi NCR",
    rating: 4.9,
    reviews: 340,
    languages: "English, Hindi",
    fee: "Free Second Opinion",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Dr. Priyamvada Rao",
    specialty: "Orthopedics & Joint Replacement",
    experience: "18+ Years",
    degrees: "MBBS, MS (Ortho), Fellowship (Robotic Arthroplasty, UK)",
    hospital: "Max Super Specialty Hospital",
    city: "Bengaluru",
    rating: 4.9,
    reviews: 480,
    languages: "English, Kannada, Hindi",
    fee: "Free Second Opinion",
    image: "https://images.unsplash.com/photo-1594824813583-05986873132e?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Dr. K. S. Ramanathan",
    specialty: "Cardiac Surgery",
    experience: "25+ Years",
    degrees: "MBBS, MS, MCh (CTVS), Fellowship (Cleveland Clinic)",
    hospital: "Manipal Hospital Network",
    city: "Chennai",
    rating: 5.0,
    reviews: 620,
    languages: "English, Tamil, Hindi",
    fee: "Free Second Opinion",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Dr. Sneha Kulkarni",
    specialty: "Laparoscopic Surgery",
    experience: "15+ Years",
    degrees: "MBBS, DNB (Gen Surg), FIAGES, FALS",
    hospital: "Narayana Health City",
    city: "Mumbai",
    rating: 4.8,
    reviews: 290,
    languages: "English, Marathi, Hindi",
    fee: "Free Second Opinion",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Dr. Rajeshwar Naidu",
    specialty: "Urology & Kidney Transplant",
    experience: "20+ Years",
    degrees: "MBBS, MS, MCh (Urology), FRCS",
    hospital: "Yashoda & KIMS Hospitals",
    city: "Hyderabad",
    rating: 4.9,
    reviews: 410,
    languages: "English, Telugu, Hindi",
    fee: "Free Second Opinion",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Dr. Meenakshi Sundaram",
    specialty: "Ophthalmology & Lasik",
    experience: "16+ Years",
    degrees: "MBBS, MS (Ophthal), Cornea Fellowship",
    hospital: "Nethradhama Super Specialty",
    city: "Bengaluru",
    rating: 4.9,
    reviews: 350,
    languages: "English, Kannada, Hindi",
    fee: "Free Second Opinion",
    image: "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?auto=format&fit=crop&w=600&q=80",
  },
]

export default function Doctors() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSpecialty, setSelectedSpecialty] = useState("All")

  const specialties = ["All", "Surgical Oncology", "Orthopedics & Joint Replacement", "Cardiac Surgery", "Laparoscopic Surgery", "Urology & Kidney Transplant", "Ophthalmology & Lasik"]

  const filteredDoctors = useMemo(() => {
    return doctorList.filter((doc) => {
      const matchSpec = selectedSpecialty === "All" || doc.specialty === selectedSpecialty
      const matchQuery =
        doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.hospital.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.city.toLowerCase().includes(searchTerm.toLowerCase())
      return matchSpec && matchQuery
    })
  }, [searchTerm, selectedSpecialty])

  return (
    <div>
      <PageHero
        eyebrow="Board-Certified Clinicians"
        title="Consult India's Premier Surgeons & Specialists"
        description="Connect with leading clinical directors and super-specialists across top accredited hospital networks in India. Get direct second opinions and priority surgical scheduling."
        breadcrumbs={[{ label: "Doctors" }]}
      />

      <section className="container-page py-16">
        {/* Search and Filters Bar */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by doctor name, hospital, or city..."
              className="w-full rounded-full border border-orange-200 bg-white pl-11 pr-4 py-3 text-sm outline-none focus:border-[#ff6b00] focus:ring-2 focus:ring-orange-200"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
            <span className="text-xs font-bold text-slate-500 whitespace-nowrap flex items-center gap-1">
              <Filter className="h-3.5 w-3.5" /> Filter:
            </span>
            <select
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
              className="rounded-full border border-orange-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-800 outline-none focus:border-[#ff6b00]"
            >
              {specialties.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Doctor Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredDoctors.map((doc) => (
            <div
              key={doc.name}
              className="flex flex-col justify-between rounded-[2rem] border border-orange-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl"
              data-aos="fade-up"
            >
              <div>
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="h-20 w-20 rounded-2xl object-cover border-2 border-orange-100 shrink-0"
                  />
                  <div>
                    <div className="flex items-center gap-1 text-xs font-bold text-amber-600 mb-1">
                      <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                      {doc.rating} ({doc.reviews} reviews)
                    </div>
                    <h3 className="font-display text-lg font-black text-slate-900 leading-tight">
                      {doc.name}
                    </h3>
                    <p className="text-xs font-extrabold text-[#ea580c] mt-0.5">{doc.specialty}</p>
                    <span className="inline-block mt-1 text-[11px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                      {doc.experience}
                    </span>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs text-slate-600 border-t border-slate-100 pt-3 mb-4">
                  <p className="font-medium line-clamp-1">🎓 {doc.degrees}</p>
                  <p className="font-medium flex items-center gap-1 line-clamp-1">
                    🏥 {doc.hospital}
                  </p>
                  <p className="font-medium flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5 text-[#ff6b00]" /> {doc.city} · Speaks {doc.languages}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Consultation</span>
                  <span className="text-xs font-black text-[#34d373] block">{doc.fee}</span>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 rounded-full bg-hk-gradient px-4 py-2 text-xs font-extrabold text-white shadow-sm hover:brightness-105"
                >
                  <CalendarCheck className="h-3.5 w-3.5" />
                  Book Appointment
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
