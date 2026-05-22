import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"

import Home from "./pages/Home.jsx"
import AboutPage from "./pages/AboutPage.jsx"
import ServicesPage from "./pages/ServicesPage.jsx"
import ContactPage from "./pages/ContactPage.jsx"
import QuotePage from "./pages/QuotePage.jsx"

import { Routes, Route } from "react-router-dom"

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* NAVBAR */}
      <Navbar />

      {/* PAGE CONTENT */}
      <div className="pt-20">
        <Routes>

          {/* SAFE WRAPPED ROUTES */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/quote" element={<QuotePage />} />
          <Route path="/contact" element={<ContactPage />} />

        </Routes>
      </div>

      {/* FOOTER */}
      <Footer />

    </div>
  )
}