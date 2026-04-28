export default function About() {
  return (
    <section id="about" className="section-pad bg-[#FAF8F3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left â€” text */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#7A5C0A] mb-6 font-medium">
              About the Chamber
            </p>
            <h2
              className="text-4xl lg:text-5xl text-[#0d1b2a] mb-8 leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              A Litigation Chamber in New Delhi
            </h2>
            <span className="gold-rule" />

            <div className="space-y-5 text-[#374151] text-[15px] leading-relaxed">
              <p>
                Vij Law Offices is a litigation chamber representing clients in the
                Supreme Court of India, the Delhi High Court and Tribunals in Delhi,
                across a wide range of disputes.
              </p>
              <p>
                The chamber is committed to accessible justice â€” overcoming any
                barriers faced on account of gender or disability. Integrity, ethics
                and compassion underpin every matter undertaken here.
              </p>
              <p>
                Beyond the courtroom, the chamber contributes regularly to
                contemporary legal updates and academic discourse.
              </p>
            </div>
          </div>

          {/* Right â€” value pillars */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "âš–", label: "Integrity", sub: "In every brief, every argument" },
              { icon: "ðŸ“–", label: "Scholarship", sub: "Grounded in legal learning" },
              { icon: "ðŸ¤", label: "Accessibility", sub: "Justice without barriers" },
              { icon: "ðŸŽ¯", label: "Rigour", sub: "Precise, thorough, prepared" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-[#F3EFE6] border border-[#E0D9CC] rounded-sm p-6 flex flex-col gap-2 hover:border-[#B8975A]/50 transition-colors duration-200"
              >
                <span className="text-2xl opacity-70">{item.icon}</span>
                <span
                  className="text-lg text-[#0d1b2a]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {item.label}
                </span>
                <span className="text-[11px] text-[#6B7280] leading-snug">{item.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
