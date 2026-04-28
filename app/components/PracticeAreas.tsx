import Image from "next/image";

const areas = [
  {
    num: "01",
    title: "Civil & Commercial Law",
    body: "Transfer Petitions, Statutory Appeals under the Consumer Protection Act, Insolvency & Bankruptcy Code, Companies Act and Arbitration Act before the Supreme Court.",
  },
  {
    num: "02",
    title: "Constitutional Law",
    body: "Reservation challenges under Articles 15 & 16, scope of parliamentary privileges, basic structure challenges to constitutional amendments and fundamental rights matters.",
  },
  {
    num: "03",
    title: "Criminal Law",
    body: "Regular and anticipatory bail, suspension of sentence pending appeal, appeals against convictions — including matters involving the sentence of death penalty.",
  },
  {
    num: "04",
    title: "Service Law",
    body: "Appointment, seniority, promotion and pension in government and statutory organisations, including switch-over from CPF to GPF and disputes under the National Pension Scheme.",
  },
  {
    num: "05",
    title: "Arbitration Law",
    body: "Interim relief, appointment of arbitrators and statutory appeals for both commercial and employment contracts.",
  },
];

export default function PracticeAreas() {
  return (
    <section id="practice" className="section-pad bg-[#F3EFE6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Header row */}
        <div className="grid lg:grid-cols-2 gap-10 items-end mb-16">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#7A5C0A] mb-5 font-medium">
              Practice Areas
            </p>
            <h2
              className="text-4xl lg:text-5xl text-[#0d1b2a] leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Can We Help with Your Matter?
            </h2>
          </div>
          {/* Stock image accent — law books */}
          <div className="hidden lg:block relative h-36 rounded-sm overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=900&q=80"
              alt="Law books"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[#F3EFE6]/40" />
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {areas.map((area) => (
            <div
              key={area.num}
              className="bg-white border border-[#E0D9CC] rounded-sm p-8 group hover:border-[#B8975A]/60 hover:shadow-md transition-all duration-300"
            >
              <span
                className="text-4xl text-[#B8975A]/30 block mb-4 group-hover:text-[#B8975A]/60 transition-colors duration-300"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {area.num}
              </span>
              <h3
                className="text-xl text-[#0d1b2a] mb-3 group-hover:text-[#7A5C0A] transition-colors duration-300"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {area.title}
              </h3>
              <span className="block w-8 h-0.5 bg-[#B8975A]/50 mb-4 group-hover:w-12 transition-all duration-300" />
              <p className="text-sm text-[#6B7280] leading-relaxed">{area.body}</p>
            </div>
          ))}

          {/* Stock image card */}
          <div className="relative rounded-sm overflow-hidden min-h-[220px] hidden lg:block">
            <Image
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=700&q=80"
              alt="Gavel and law books"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[#0d1b2a]/50" />
            <div className="absolute bottom-6 left-6 right-6">
              <p
                className="text-white text-xl leading-snug"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Appearing before India's highest courts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
