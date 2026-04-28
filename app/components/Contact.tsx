export default function Contact() {
  return (
    <section
      id="contact"
      className="section-pad"
      style={{ background: "linear-gradient(160deg, #0a1520 0%, #162032 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#b8975a] mb-6 font-medium">
              Contact
            </p>
            <h2
              className="text-4xl lg:text-5xl text-[#f0ebe3] leading-tight mb-8"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Reach the Chamber
            </h2>
            <span className="gold-rule" />
            <p className="text-sm text-[#8a9bb0] leading-relaxed max-w-sm">
              For enquiries regarding representation or advisory matters, please
              write or call the chamber directly.
            </p>
          </div>

          {/* Right — contact details */}
          <div className="space-y-8">
            {[
              {
                label: "Email",
                value: "shivanivij.adv@gmail.com",
                href: "mailto:shivanivij.adv@gmail.com",
              },
              {
                label: "Telephone",
                value: "+91 96303 39000",
                href: "tel:+919630339000",
              },
              {
                label: "Office",
                value: "G-12, Basement, Jangpura Extension, New Delhi — 110014",
                href: "https://maps.google.com/?q=G-12+Basement+Jangpura+Extension+New+Delhi+110014",
              },
              {
                label: "LinkedIn",
                value: "shivani-vij-a5243a139",
                href: "https://www.linkedin.com/in/shivani-vij-a5243a139/",
              },
            ].map((item) => (
              <div key={item.label} className="flex gap-6 group">
                <span className="text-xs tracking-widest uppercase text-[#b8975a] font-medium w-20 pt-0.5 shrink-0">
                  {item.label}
                </span>
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-sm text-[#a8b8c8] hover:text-[#d4b483] transition-colors duration-200 leading-relaxed"
                >
                  {item.value}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
