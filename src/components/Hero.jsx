function Hero() {
  return (
    <section
      className="h-screen bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('/images/hero-truck.jpg')",
      }}
    >

      <div className="absolute inset-0 hero-overlay"></div>

      <div className="relative z-10 flex items-center h-full px-[8%]">

        <div className="max-w-3xl">

          <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
            Reliable Freight Transportation Built on Trust
          </h1>

          <p className="text-xl text-gray-300 mb-8">
            Thunder Express Trucking LLC delivers dependable logistics
            and transportation solutions with professionalism,
            punctuality, and safety.
          </p>

          <div className="flex gap-5">

            <button className="bg-tan text-navy px-8 py-4 rounded-2xl font-semibold hover:scale-105 duration-300">
              Request Quote
            </button>

            <button className="border border-tan text-tan px-8 py-4 rounded-2xl hover:bg-tan hover:text-navy duration-300">
              Contact Us
            </button>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Hero