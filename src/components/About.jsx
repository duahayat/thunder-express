export default function About() {
  return (
    <section className="px-8 py-20 max-w-5xl mx-auto">

      <h2 className="text-3xl font-bold text-tan mb-8">About Company</h2>

      <p className="text-white/80 leading-relaxed mb-10">
        Thunder Express Trucking LLC is a professional freight transportation company
        focused on delivering reliable logistics solutions across the United States.
        We operate with a commitment to safety, efficiency, and on-time delivery.
      </p>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
          <h3 className="text-tan font-bold mb-2">Owner</h3>
          <p>Hamid Shojayee</p>
        </div>

        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
          <h3 className="text-tan font-bold mb-2">Operations Manager</h3>
          <p>Muhammad Talha Hayat</p>
        </div>

        <div className="bg-white/5 p-6 rounded-xl border border-white/10 md:col-span-2">
          <h3 className="text-tan font-bold mb-2">Mission Statement</h3>
          <p className="text-white/80">
            Driven by hard work and reliability, our mission is to provide superior freight
            transportation services with unmatched professionalism, timely delivery, and
            a commitment to safety across every mile we serve.
          </p>
        </div>

      </div>

    </section>
  )
}