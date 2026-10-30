import { useEffect } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import AOS from "aos"
import "aos/dist/aos.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Treatments from "./pages/Treatments"
import Doctors from "./pages/Doctors"
import Packages from "./pages/Packages"
import HealInIndia from "./pages/HealInIndia"
import Contact from "./pages/Contact"
import FigmaScreens from "./pages/FigmaScreens"

export default function App() {
  const location = useLocation()

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false,
      offset: 80,
      delay: 0,
    })
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    const timer = setTimeout(() => {
      AOS.refreshHard()
    }, 100)
    return () => clearTimeout(timer)
  }, [location.pathname])

  const isFigmaViewer = location.pathname === "/screens"

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {!isFigmaViewer && <Header />}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/treatments" element={<Treatments />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/heal-in-india" element={<HealInIndia />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/screens" element={<FigmaScreens />} />
        </Routes>
      </main>
      {!isFigmaViewer && <Footer />}
    </div>
  )
}
