import { useState } from "react"

export default function QuotePage() {

  const [form, setForm] = useState({})

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Quote request sent successfully. Dispatch team will contact you.")
  }

  return (
    <section className="container">

      <h1>Request a Freight Quote</h1>

      <form onSubmit={handleSubmit} className="card grid md:grid-cols-2 gap-5 mt-10">

        <input name="name" placeholder="Full Name"
          onChange={handleChange}
          className="p-3 bg-transparent border border-[#8A94A6] rounded-lg"
        />

        <input name="phone" placeholder="Phone Number"
          onChange={handleChange}
          className="p-3 bg-transparent border border-[#8A94A6] rounded-lg"
        />

        <input name="email" placeholder="Email"
          onChange={handleChange}
          className="md:col-span-2 p-3 bg-transparent border border-[#8A94A6] rounded-lg"
        />

        <input name="pickup" placeholder="Pickup Location"
          className="p-3 bg-transparent border border-[#8A94A6] rounded-lg"
        />

        <input name="delivery" placeholder="Delivery Location"
          className="p-3 bg-transparent border border-[#8A94A6] rounded-lg"
        />

        <textarea name="details" placeholder="Cargo Details"
          className="md:col-span-2 p-3 bg-transparent border border-[#8A94A6] rounded-lg"
        />

        <button className="btn-primary md:col-span-2">
          Submit Quote Request
        </button>

      </form>

    </section>
  )
}