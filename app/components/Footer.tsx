import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0d1b2a] border-t border-[#B8975A]/20 py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          {/* Logo & tagline */}
          <div>
            <Image
              src="/images/logo.png"
              alt="Vij Law Offices"
              width={200}
              height={50}
              className="h-12 w-auto object-contain mb-5"
              style={{ filter: "brightness(0) invert(1) opacity(0.85)" }}
            />
            <p className="text-xs text-[#8a9bb0] max-w-xs leading-relaxed tracking-wide">
              Supreme Court of India &nbsp;&middot;&nbsp; Delhi High Court &nbsp;&middot;&nbsp; Tribunals in Delhi
            </p>
          </div>

          {/* Quick links */}
          <nav>
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#B8975A] mb-4 font-medium">
              Navigation
            </p>
            <ul className="grid grid-cols-2 gap-x-12 gap-y-2.5">
              {[
                ["Counsel", "#counsel"],
                ["Practice Areas", "#practice"],
                ["Services", "#services"],
                ["Pro Bono", "#probono"],
                ["About", "#about"],
                ["Legal Insights", "#insights"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-xs text-[#8a9bb0] hover:text-[#B8975A] transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-[#B8975A]/10 pt-8">
          <p className="text-xs text-[#5a6a7a] leading-relaxed max-w-3xl">
            <span className="text-[#7a8a9a] font-medium">Disclaimer: </span>
            The content of this website is for informational purposes only and should not
            be interpreted as soliciting or advertisement. No material or information
            provided on this website should be construed as legal advice. The office, its
            counsel and associates shall not be liable for consequences of any action taken
            by relying on the material or information provided on this website. The contents
            of this website are the intellectual property of the counsel.
          </p>
          <p className="text-xs text-[#4a5a6a] mt-4">
            &copy; {new Date().getFullYear()} Vij Law Offices. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
