import Image from "next/image";

const services = [
  {
    num: "01",
    title: "Representation in Court",
    body: "We draft, file and argue cases before the Supreme Court, Delhi High Court and Tribunals in Delhi. Where the matter so requires, we brief senior advocates.",
  },
  {
    num: "02",
    title: "Agreements, Contracts & Legal Notices",
    body: "Drafting of legal notices for eviction, non-payment of rent, cheque bouncing and employment dues. Statutory notices under the IBC, wills, gift deeds, partition deeds and commercial agreements.",
  },
  {
    num: "03",
    title: "Advisory",
    body: "Considered opinions on whether to pursue a matter in court or seek settlement. Legal opinions on issues arising in the workplace or otherwise.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-pad bg-[#FAF8F3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left â€” image + header */}
          <div className="lg:col-span-5">
            <p className="text-xs tracking-[0.3em] uppercase text-[#7A5C0A] mb-5 font-medium">
              Services
            </p>
            <h2
              className="text-4xl lg:text-5xl text-[#0d1b2a] leading-tight mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              How the Chamber Can Assist You
            </h2>
            <span className="gold-rule" />
            <p className="text-sm text-[#6B7280] leading-relaxed mb-8 max-w-sm">
              Primarily a litigation chamber, we also offer advisory and miscellaneous
              legal services to individuals, businesses and institutions.
            </p>

            {/* Conference table stock image */}
            <div className="relative h-64 rounded-sm overflow-hidden border border-[#E0D9CC]">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                alt="Conference table"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-[#0d1b2a]/20" />
            </div>
          </div>

          {/* Right â€” service cards */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white border border-[#E0D9CC] rounded-sm p-7 flex gap-5 hover:border-[#B8975A]/60 hover:shadow-sm transition-all duration-300"
              >
                <span
                  className="text-3xl text-[#B8975A]/40 shrink-0 mt-0.5"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {s.num}
                </span>
                <div>
                  <h3
                    className="text-xl text-[#0d1b2a] mb-2"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
