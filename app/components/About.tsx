export default function About() {
  return (
    <section id="about" className="section-pad bg-[#0d1b2a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#b8975a] mb-6 font-medium">
              About the Chamber
            </p>
            <h2
              className="text-4xl lg:text-5xl text-[#f0ebe3] mb-8 leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Where Integrity Meets Craft
            </h2>
            <span className="gold-rule" />

            <div className="space-y-5 text-[#a8b8c8] text-base leading-relaxed">
              <p>
                Vij Law Offices is a litigation chamber with committed practitioners
                representing clients in the Supreme Court of India, the Delhi High
                Court and Tribunals in Delhi across a wide range of disputes.
              </p>
              <p>
                We are committed to accessible justice — overcoming any barriers
                faced on account of gender or disability. Integrity, ethics and
                compassion are the values underpinning every matter we take.
              </p>
              <p>
                Even beyond the courtroom, the chamber engages constantly with the
                law, contributing to contemporary legal updates and academic discourse.
              </p>
            </div>
          </div>

          {/* Right — stat cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { number: "8+", label: "Years at the Bar" },
              { number: "SC", label: "Supreme Court of India" },
              { number: "AOR", label: "Advocate on Record" },
              { number: "Oxford", label: "Chevening Scholar" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-[#162032] border border-[#b8975a]/15 rounded-sm p-7 flex flex-col gap-2"
              >
                <span
                  className="text-3xl text-[#b8975a]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {item.number}
                </span>
                <span className="text-xs tracking-wide text-[#8a9bb0] uppercase font-medium">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
