export default function ServicesPage() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* BACKGROUND (95% visible) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/services.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.92) contrast(1.05)"
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* CONTENT */}
      <div className="container relative z-10">

        <h1>Our Services</h1>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="card">
            <h2>Freight Transport</h2>
            <p className="text-muted">
              Nationwide reliable trucking solutions.
            </p>
          </div>

          <div className="card">
            <h2>Logistics Planning</h2>
            <p className="text-muted">
              Smart route optimization systems.
            </p>
          </div>

          <div className="card">
            <h2>Secure Cargo Handling</h2>
            <p className="text-muted">
              Safe loading and delivery operations.
            </p>
          </div>

        </div>

      </div>

    </section>
  )
}