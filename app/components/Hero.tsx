import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Stock image â€” law library â€” with warm cream overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1920&q=80"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
        {/* Light cream wash so text reads clearly */}
        <div className="absolute inset-0" style={{ background: "rgba(250,248,243,0.88)" }} />
      </div>

      {/* Thin gold vertical rule on left edge */}
      <div className="absolute left-0 top-24 bottom-24 w-[3px] bg-gradient-to-b from-transparent via-[#B8975A]/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-8 lg:px-20 pt-36 pb-28 w-full">
        {/* BIG LOGO â€” hero centrepiece */}
        <div className="mb-10">
          <Image
            src="/images/logo.png"
            alt="Vij Law Offices"
            width={520}
            height={132}
            className="h-28 sm:h-36 w-auto object-contain"
            priority
          />
        </div>

        {/* Gold rule under logo */}
        <span className="block w-20 h-[2px] bg-[#B8975A] mb-10" />

        {/* Headline */}
        <h1
          className="text-5xl sm:text-6xl lg:text-[4.5rem] leading-[1.08] text-[#0d1b2a] mb-8 max-w-3xl"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
        >
          Principled Advocacy.{" "}
          <em className="not-italic" style={{ color: "#7A5C0A" }}>
            Reasoned Counsel.
          </em>
        </h1>

        {/* Sub-line */}
        <p className="text-base sm:text-lg text-[#4a5568] tracking-wide max-w-lg">
          Supreme Court of India &nbsp;Â·&nbsp; Delhi High Court &nbsp;Â·&nbsp; Tribunals in Delhi
        </p>

        {/* Scroll cue */}
        <div className="mt-20 flex items-center gap-4 text-[#B8975A]/70">
          <div className="w-px h-10 bg-[#B8975A]/40" />
          <span className="text-[10px] tracking-[0.3em] uppercase font-medium">Scroll</span>
        </div>
      </div>

      {/* Fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#FAF8F3] to-transparent" />
    </section>
  );
}
