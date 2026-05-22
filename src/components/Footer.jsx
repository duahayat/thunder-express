export default function Footer() {
  return (
    <footer className="bg-[#0B0F14] border-t border-[#C68B59]/20 px-8 py-10">

      <div className="grid md:grid-cols-3 gap-8">

        {/* COMPANY */}
        <div>
          <h3 className="text-[#B87333] font-bold text-xl">
            Thunder Express
          </h3>

          <p className="text-[#8A94A6] mt-3 leading-7">
            Reliable freight transportation and logistics solutions
            across the United States with professionalism,
            safety, and precision.
          </p>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-[#B87333] font-bold text-xl">
            Contact
          </h3>

          <div className="mt-3 space-y-2 text-[#8A94A6]">

            <p>
              Company Main Line: 682-772-2464
            </p>

            <p>
              Operations Line: 682-651-1100
            </p>

          </div>
        </div>

        {/* EMAIL */}
      <div>
  <h3 className="text-[#B87333] font-bold text-xl">
    Official Email
  </h3>

  <p className="text-[#8A94A6] mt-3">
    You can contact us through our official mail:
  </p>

  <a
    href="mailto:THUNDEREXPRESS.TRUCKING@gmail.com"
    className="text-[#C68B59] font-semibold hover:text-[#D08A55] transition mt-3 inline-block"
  >
    THUNDEREXPRESS.TRUCKING@gmail.com
  </a>
</div>

      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-white/10 mt-10 pt-6 text-center text-[#6B7280] text-sm">
        © 2026 Thunder Express Trucking LLC — All Rights Reserved
      </div>

    </footer>
  )
}