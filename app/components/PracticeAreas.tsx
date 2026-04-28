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
    body: "Regular and anticipatory bail, suspension of sentence pending appeal, appeals against convictions, including matters involving the sentence of death penalty.",
  },
  {
    num: "04",
    title: "Service Law",
    body: "Appointment, seniority, promotion and pension in government and statutory organisations — including cases of switch-over from CPF to GPF and disputes under the National Pension Scheme.",
  },
  {
    num: "05",
    title: "Arbitration Law",
    body: "Interim relief, appointment of arbitrators and statutory appeals for both commercial and employment contracts.",
  },
];

export default function PracticeAreas() {
  return (
    <section
      id="practice"
      className="section-pad"
      style={{ background: "linear-gradient(180deg, #0d1b2a 0%, #111e2d 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[#b8975a] mb-6 font-medium">
            Practice Areas
          </p>
          <h2
            className="text-4xl lg:text-5xl text-[#f0ebe3] leading-tight max-w-xl"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Depth Across Disciplines
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#b8975a]/10">
          {areas.map((area) => (
            <div
              key={area.num}
              className="bg-[#0d1b2a] p-8 group hover:bg-[#162032] transition-colors duration-300"
            >
              <span
                className="text-5xl text-[#b8975a]/25 block mb-4 group-hover:text-[#b8975a]/50 transition-colors duration-300"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {area.num}
              </span>
              <h3
                className="text-xl text-[#f0ebe3] mb-4 group-hover:text-[#d4b483] transition-colors duration-300"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {area.title}
              </h3>
              <span className="block w-8 h-px bg-[#b8975a]/40 mb-4 group-hover:w-12 transition-all duration-300" />
              <p className="text-sm text-[#8a9bb0] leading-relaxed">
                {area.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
