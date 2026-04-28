const services = [
  {
    icon: "⚖",
    title: "Representation in Court",
    body: "We draft, file and argue cases before the Supreme Court, Delhi High Court and Tribunals in Delhi. Where the matter so requires, we brief senior advocates.",
  },
  {
    icon: "📄",
    title: "Agreements, Contracts & Legal Notices",
    body: "Drafting of legal notices for eviction, non-payment of rent, cheque bouncing and employment dues. Statutory notices under the IBC, wills, gift deeds, partition deeds and commercial agreements.",
  },
  {
    icon: "💬",
    title: "Advisory",
    body: "Considered opinions on whether to pursue a matter in court or seek settlement. Legal opinions on issues arising in the workplace or otherwise.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-pad bg-[#162032]">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-6 items-start">
          {/* Header col */}
          <div className="lg:col-span-1">
            <p className="text-xs tracking-[0.3em] uppercase text-[#b8975a] mb-6 font-medium">
              Services
            </p>
            <h2
              className="text-4xl lg:text-5xl text-[#f0ebe3] leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              What We Offer
            </h2>
            <span className="gold-rule mt-6" />
            <p className="text-sm text-[#8a9bb0] leading-relaxed">
              Primarily a litigation chamber, we also offer advisory and
              miscellaneous legal services to individuals and institutions.
            </p>
          </div>

          {/* Service cards */}
          <div className="lg:col-span-2 grid sm:grid-cols-1 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="border border-[#b8975a]/15 rounded-sm p-7 flex gap-6 hover:border-[#b8975a]/40 transition-colors duration-300 bg-[#0d1b2a]/40"
              >
                <span className="text-2xl mt-1 opacity-70">{s.icon}</span>
                <div>
                  <h3
                    className="text-xl text-[#f0ebe3] mb-3"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-sm text-[#8a9bb0] leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
