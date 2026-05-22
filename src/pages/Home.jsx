import { useNavigate } from "react-router-dom"

export default function Home() {
  const navigate = useNavigate()

  return (
    <section className="parallax min-h-screen flex items-center">

      <div
        className="parallax-bg"
        style={{ backgroundImage: "url('/images/hero-truck.jpg')" }}
      />

      <div className="parallax-overlay"></div>

      <div className="container relative z-10">

        <h1>Thunder Express Trucking LLC</h1>

        <p className="text-muted mt-4">
          Precision logistics built on trust, speed, and control.
        </p>

        <button
          onClick={() => navigate("/about")}
          className="btn-primary mt-8"
        >
          Explore Company
        </button>

      </div>

    </section>
  )
}