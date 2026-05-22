import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0B0F14]/80 backdrop-blur border-b border-[#C68B59]/20">

      <div className="flex justify-between items-center px-6 py-4">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img
            src="/images/ThunderExpressLogo.jpg"
            className="w-10 h-10 object-contain rounded"
            alt="logo"
          />

          <span className="text-[#42250c] font-bold tracking-wide">
            Thunder Express
          </span>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-6 text-sm text-[#1e425c]">
          <Link className="hover:text-[#75471f] transition" to="/">Home</Link>
          <Link className="hover:text-[#75471f] transition" to="/about">About</Link>
          <Link className="hover:text-[#75471f] transition" to="/services">Services</Link>
          <Link className="hover:text-[#75471f] transition" to="/quote">Quote</Link>
          <Link className="hover:text-[#75471f] transition" to="/contact">Contact</Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-4 text-sm text-[#1e425c] bg-[#0B0F14]">
          <Link onClick={() => setOpen(false)} to="/">Home</Link>
          <Link onClick={() => setOpen(false)} to="/about">About</Link>
          <Link onClick={() => setOpen(false)} to="/services">Services</Link>
          <Link onClick={() => setOpen(false)} to="/quote">Quote</Link>
          <Link onClick={() => setOpen(false)} to="/contact">Contact</Link>
        </div>
      )}

    </nav>
  );
}