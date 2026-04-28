export default function ProBono() {
  return (
    <section
      id="probono"
      className="section-pad relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0a1520 0%, #162032 100%)" }}
    >
      {/* Decorative quote mark */}
      <div
        className="absolute right-12 top-8 text-[12rem] leading-none text-[#b8975a]/5 select-none pointer-events-none"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        "
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative">
        <div className="max-w-2xl">
          <p className="text-xs tracking-[0.3em] uppercase text-[#b8975a] mb-6 font-medium">
            Pro Bono
          </p>
          <h2
            className="text-4xl lg:text-5xl text-[#f0ebe3] leading-tight mb-8"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Access to Justice — Without Exception
          </h2>
          <span className="gold-rule" />

          <div className="space-y-5 text-[#a8b8c8] text-base leading-relaxed">
            <p>
              We believe in inclusivity and are fully committed to overcoming the
              limitations that vulnerable sections of society face in accessing
              legal services.
            </p>
            <p>
              The chamber undertakes pro bono work in criminal law — including
              cases of capital punishment, bail and appeals from convictions — as
              well as in civil matters such as pension disputes and matrimonial
              proceedings.
            </p>
            <p>
              Shivani Vij is on the panel of Assisting Counsels of the{" "}
              <span className="text-[#d4b483]">
                Supreme Court Legal Services Committee
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
