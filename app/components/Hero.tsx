export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0d1b2a 0%, #162032 60%, #1a2a3a 100%)" }}
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#b8975a 1px, transparent 1px), linear-gradient(90deg, #b8975a 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Gold accent line left */}
      <div className="absolute left-0 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-[#b8975a]/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-16 pt-32 pb-24">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className="text-xs tracking-[0.3em] uppercase text-[#b8975a] mb-8 font-medium">
            Supreme Court &nbsp;·&nbsp; Delhi High Court &nbsp;·&nbsp; Tribunals
          </p>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl leading-[1.1] text-[#f0ebe3] mb-8" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}>
            Principled Advocacy.{" "}
            <em className="text-[#b8975a] not-italic">Reasoned Counsel.</em>
          </h1>

          {/* Divider */}
          <span className="gold-rule" />

          {/* Sub-headline */}
          <p className="text-lg sm:text-xl text-[#a8b8c8] max-w-xl leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
            A litigation chamber committed to rigorous legal work across
            Constitutional, Civil-Commercial, Criminal, Service and Arbitration Law.
          </p>

          {/* Scroll cue */}
          <div className="mt-20 flex items-center gap-4 text-[#b8975a]/60">
            <div className="w-px h-12 bg-[#b8975a]/30" />
            <span className="text-xs tracking-[0.25em] uppercase">Scroll</span>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0d1b2a] to-transparent" />
    </section>
  );
}
