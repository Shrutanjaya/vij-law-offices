export default function Contact() {
  return (
    <section id="contact" className="section-pad bg-[#0d1b2a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#B8975A] mb-6 font-medium">
              Contact
            </p>
            <h2
              className="text-4xl lg:text-5xl text-[#F0EBE3] leading-tight mb-8"
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

          {/* Right â€” contact details */}
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
                value: "G-12, Basement, Jangpura Extension, New Delhi â€” 110014",
                href: "https://maps.google.com/?q=G-12+Basement+Jangpura+Extension+New+Delhi+110014",
              },
              {
                label: "LinkedIn",
                value: "Shivani Vij",
                href: "https://www.linkedin.com/in/shivani-vij-a5243a139/",
              },
            ].map((item) => (
              <div key={item.label} className="flex gap-6">
                <span className="text-[11px] tracking-[0.2em] uppercase text-[#B8975A] font-medium w-24 pt-0.5 shrink-0">
                  {item.label}
                </span>
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-sm text-[#a8b8c8] hover:text-[#D4B483] transition-colors duration-200 leading-relaxed"
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
