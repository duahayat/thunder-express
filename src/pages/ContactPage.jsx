export default function ContactPage() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/contact.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.92) contrast(1.05)"
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* CONTENT */}
      <div className="container relative z-10">

        <h1>Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-6 mt-10">

          <div className="card">
            <h2>Main Line</h2>
            <p className="text-muted">682-772-2464</p>
          </div>

          <div className="card">
            <h2>Operations Line</h2>
            <p className="text-muted">682-651-1100</p>
          </div>

          <div className="card">
            <h2>Owner</h2>
            <p className="text-muted">Hamid Shojayee</p>
          </div>

          <div className="card">
            <h2>Operations Manager</h2>
            <p className="text-muted">Muhammad Talha Hayat</p>
          </div>

          <div className="card md:col-span-2">
            <h2>Address</h2>
            <p className="text-muted">
              1521 Finley St, Cedar Hill, TX 75104
            </p>
          </div>

        </div>

      </div>

    </section>
  )
}