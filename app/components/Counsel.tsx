import Image from "next/image";

export default function Counsel() {
  return (
    <section id="counsel" className="section-pad bg-[#0d1b2a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="mb-14">
          <p className="text-xs tracking-[0.3em] uppercase text-[#b8975a] mb-6 font-medium">
            Counsel
          </p>
          <h2
            className="text-4xl lg:text-5xl text-[#f0ebe3] leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            The Person Behind the Practice
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Photo */}
          <div className="lg:col-span-2 relative">
            <div className="relative w-full aspect-[3/4] max-w-sm">
              {/* Gold border accent */}
              <div className="absolute -top-3 -left-3 w-full h-full border border-[#b8975a]/30" />
              <Image
                src="/images/founder.jpg"
                alt="Shivani Vij — Counsel & Founder, Vij Law Offices"
                fill
                className="object-cover object-top grayscale-[20%] rounded-sm"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>

            {/* Name plate */}
            <div className="mt-6 border-l-2 border-[#b8975a] pl-5">
              <p
                className="text-xl text-[#f0ebe3]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Shivani Vij
              </p>
              <p className="text-xs tracking-widest uppercase text-[#b8975a] mt-1 font-medium">
                Counsel & Founder
              </p>
              <p className="text-xs text-[#8a9bb0] mt-1">
                Advocate on Record, Supreme Court of India
              </p>
            </div>
          </div>

          {/* Bio */}
          <div className="lg:col-span-3 space-y-5 text-[#a8b8c8] text-base leading-relaxed">
            <p>
              Shivani Vij is a graduate of the National Law Institute University,
              Bhopal, with more than eight years of experience at the bar. She is
              an Advocate on Record at the Supreme Court of India.
            </p>
            <p>
              She pursued her masters from the{" "}
              <span className="text-[#d4b483]">University of Oxford</span>, backed
              by the prestigious{" "}
              <span className="text-[#d4b483]">Chevening Scholarship</span> offered
              by the British Council, United Kingdom.
            </p>
            <p>
              She is the co-author of{" "}
              <em className="text-[#d4b483]">
                The Patent Case Digest for India
              </em>
              , a Thomson Reuters publication.
            </p>
            <p>
              Shivani has prior experience working in the Chambers of Senior Advocate
              Gautam Narayan, and in the Chambers of Senior Advocates Haripriya
              Padmanabhan and Gopal Sankaranarayanan before the Delhi High Court and
              Supreme Court. She has also practised at the Bombay High Court with
              Khaitan & Co.
            </p>

            {/* Credentials strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6">
              {[
                "Advocate on Record — Supreme Court",
                "Chevening Scholar — Oxford",
                "Co-Author — Thomson Reuters",
                "SCLSC Assisting Counsel",
                "NLIU Bhopal Graduate",
                "Khaitan & Co. Alumni",
              ].map((c) => (
                <div
                  key={c}
                  className="border border-[#b8975a]/15 rounded-sm px-4 py-3 text-xs text-[#8a9bb0] leading-snug"
                >
                  {c}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
