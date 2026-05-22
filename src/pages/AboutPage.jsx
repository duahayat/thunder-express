export default function AboutPage() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* BACKGROUND BLUR (NOW USING YOUR CSS CLASS) */}
      <div
        className="absolute inset-0 blur-bg"
        style={{
          backgroundImage: "url('/images/about-truck.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* CONTENT */}
      <div className="container relative z-10 grid md:grid-cols-2 gap-10 items-center">

        {/* IMAGE */}
        <img
          src="/images/about-truck.jpg"
          className="rounded-xl float-truck"
        />

        {/* TEXT */}
        <div>

          <h1>About Thunder Express</h1>

          <p className="text-muted mt-4">
            We provide nationwide freight transportation with reliability,
            safety, and precision logistics solutions.
          </p>

        </div>

      </div>

    </section>
  )
}