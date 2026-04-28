import Image from "next/image";

export default function ProBono() {
  return (
    <section id="probono" className="section-pad bg-[#F3EFE6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#7A5C0A] mb-6 font-medium">
              Pro Bono
            </p>
            <h2
              className="text-4xl lg:text-5xl text-[#0d1b2a] leading-tight mb-8"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Access to Justice —<br />Without Exception
            </h2>
            <span className="gold-rule" />

            <div className="space-y-5 text-[#374151] text-[15px] leading-relaxed">
              <p>
                The chamber is fully committed to overcoming the limitations that
                vulnerable sections of society face in accessing legal services.
              </p>
              <p>
                Pro bono work is undertaken in criminal law — including cases of
                capital punishment, bail and appeals from conviction — as well as in
                civil matters such as pension disputes and matrimonial proceedings.
              </p>
              <p>
                Shivani Vij is on the panel of Assisting Counsels of the{" "}
                <span className="font-medium text-[#0d1b2a]">
                  Supreme Court Legal Services Committee
                </span>
                .
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-80 lg:h-96 rounded-sm overflow-hidden border border-[#E0D9CC]">
            <Image
              src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=900&q=80"
              alt="Law library bookshelf"
              fill
              className="object-cover object-center"
            />
            {/* Dark overlay with quote */}
            <div className="absolute inset-0 bg-[#0d1b2a]/60 flex items-end p-8">
              <blockquote
                className="text-2xl text-white leading-snug italic"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                "Equal justice under law is not merely a caption on the facade of the Supreme Court — it is perhaps the most inspiring ideal of our society."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
