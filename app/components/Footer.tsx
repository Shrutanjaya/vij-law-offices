import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0a131e] border-t border-[#b8975a]/15 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-10">
          {/* Logo & tagline */}
          <div>
            <Image
              src="/images/logo.png"
              alt="Vij Law Offices"
              width={160}
              height={40}
              className="h-9 w-auto object-contain mb-4 opacity-80"
            />
            <p className="text-xs text-[#8a9bb0] max-w-xs leading-relaxed">
              Supreme Court · Delhi High Court · Tribunals
            </p>
          </div>

          {/* Quick links */}
          <nav>
            <p className="text-xs tracking-widest uppercase text-[#b8975a] mb-4 font-medium">
              Navigation
            </p>
            <ul className="grid grid-cols-2 gap-x-10 gap-y-2">
              {[
                ["About", "#about"],
                ["Practice Areas", "#practice"],
                ["Services", "#services"],
                ["Pro Bono", "#probono"],
                ["Counsel", "#counsel"],
                ["Legal Insights", "#insights"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-xs text-[#8a9bb0] hover:text-[#b8975a] transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-[#b8975a]/10 pt-8">
          <p className="text-xs text-[#5a6a7a] leading-relaxed max-w-3xl">
            <span className="text-[#8a9bb0] font-medium">Disclaimer: </span>
            The content of this website is for informational purposes only and
            should not be interpreted as soliciting or advertisement. No
            material or information provided on this website should be construed
            as legal advice. The office, its counsel and associates shall not be
            liable for consequences of any action taken by relying on the
            material or information provided on this website. The contents of
            this website are the intellectual property of the counsel.
          </p>
          <p className="text-xs text-[#4a5a6a] mt-4">
            © {new Date().getFullYear()} Vij Law Offices. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
