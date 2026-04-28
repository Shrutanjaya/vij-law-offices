import Image from "next/image";

export default function Counsel() {
  return (
    <section id="counsel" className="section-pad bg-[#FAF8F3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Section label */}
        <p className="text-xs tracking-[0.3em] uppercase text-[#7A5C0A] mb-16 font-medium">
          Counsel &amp; Founder
        </p>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Photo column */}
          <div className="lg:col-span-4">
            <div className="relative w-full max-w-sm">
              {/* Offset gold border */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#B8975A]/40 rounded-sm" />
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src="/images/founder.jpg"
                  alt="Shivani Vij — Counsel & Founder, Vij Law Offices"
                  fill
                  className="object-cover object-top rounded-sm"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>

            {/* Name plate */}
            <div className="mt-8 pl-5 border-l-[3px] border-[#B8975A]">
              <p
                className="text-2xl text-[#0d1b2a]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Shivani Vij
              </p>
              <p className="text-[11px] tracking-[0.2em] uppercase text-[#7A5C0A] mt-1 font-medium">
                Counsel &amp; Founder
              </p>
              <p className="text-xs text-[#6B7280] mt-1 leading-relaxed">
                Advocate on Record<br />Supreme Court of India
              </p>
            </div>
          </div>

          {/* Bio column */}
          <div className="lg:col-span-8">
            <h2
              className="text-4xl lg:text-5xl text-[#0d1b2a] leading-tight mb-6 max-w-2xl"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Eight Years at the Bar. Oxford-Trained.
              <br />
              <span style={{ color: "#7A5C0A" }}>Advocate on Record, Supreme Court.</span>
            </h2>
            <span className="gold-rule" />

            <div className="space-y-5 text-[#374151] text-[15px] leading-relaxed mb-10">
              <p>
                Shivani Vij is a graduate of the National Law Institute University,
                Bhopal and holds a master's degree from the{" "}
                <span className="font-medium text-[#0d1b2a]">University of Oxford</span>, where
                she studied on the prestigious{" "}
                <span className="font-medium text-[#0d1b2a]">Chevening Scholarship</span> awarded by
                the British Council, United Kingdom.
              </p>
              <p>
                She is an <span className="font-medium text-[#0d1b2a]">Advocate on Record</span> at
                the Supreme Court of India — a qualification held by a limited number of advocates
                that authorises filing matters directly before the Court.
              </p>
              <p>
                She trained in the chambers of Senior Advocate Gautam Narayan and in the
                chambers of Senior Advocates Haripriya Padmanabhan and Gopal
                Sankaranarayanan before the Delhi High Court and the Supreme Court. She has
                also practised with <span className="font-medium text-[#0d1b2a]">Khaitan &amp; Co.</span> at the Bombay High Court.
              </p>
              <p>
                She is the co-author of{" "}
                <em className="text-[#7A5C0A]">The Patent Case Digest for India</em>, a Thomson
                Reuters publication, and is a regular contributor to legal scholarship and
                contemporary updates.
              </p>
              <p>
                Shivani is on the panel of Assisting Counsels of the{" "}
                <span className="font-medium text-[#0d1b2a]">
                  Supreme Court Legal Services Committee
                </span>
                .
              </p>
            </div>

            {/* Credentials grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { label: "Advocate on Record", sub: "Supreme Court of India" },
                { label: "Chevening Scholar", sub: "University of Oxford" },
                { label: "8+ Years", sub: "at the Bar" },
                { label: "Thomson Reuters", sub: "Co-Author" },
                { label: "SCLSC Panel", sub: "Assisting Counsel" },
                { label: "Khaitan & Co.", sub: "Bombay High Court" },
              ].map((c) => (
                <div
                  key={c.label}
                  className="bg-[#F3EFE6] border border-[#E0D9CC] rounded-sm px-4 py-4"
                >
                  <p className="text-[13px] font-medium text-[#0d1b2a] leading-snug">{c.label}</p>
                  <p className="text-[11px] text-[#6B7280] mt-0.5">{c.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
