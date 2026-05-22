import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0B0F14]/80 backdrop-blur border-b border-[#C68B59]/20">

      <div className="flex justify-between items-center px-6 py-4">

        {/* LOGO + BRAND */}
        <div className="flex items-center gap-3">

          <img
            src="/images/ThunderExpressLogo.jpg"
            className="w-10 h-10 object-contain rounded"
            alt="logo"
          />

          <span className="text-[#C68B59] font-bold tracking-wide">
            Thunder Express
          </span>

        </div>

        {/* NAV LINKS */}
        <div className="flex gap-6 text-sm text-[#C9D6DF]">

          <Link className="hover:text-[#C68B59] transition" to="/">
            Home
          </Link>

          <Link className="hover:text-[#C68B59] transition" to="/about">
            About
          </Link>

          <Link className="hover:text-[#C68B59] transition" to="/services">
            Services
          </Link>

          <Link className="hover:text-[#C68B59] transition" to="/quote">
            Quote
          </Link>

          <Link className="hover:text-[#C68B59] transition" to="/contact">
            Contact
          </Link>

        </div>

      </div>

    </nav>
  )
}