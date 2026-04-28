const posts = [
  {
    title: "Women Reservation in Parliament & State Legislature",
    date: "29 Oct 2024",
    readTime: "3 min read",
    excerpt:
      "An analysis of the Constitution (106th Amendment) Act 2023, which introduces one-third women's reservation in Parliament and State Legislative Assemblies.",
    href: "https://www.vijlawoffices.in/post/women-reservation-in-parliament-state-legislature",
  },
  {
    title: "The \u2018Right\u2019 to Abortion in India",
    date: "12 Oct 2024",
    readTime: "4 min read",
    excerpt:
      "An examination of the Medical Termination of Pregnancy Act 1971, the MTP Rules 2003, and the evolving judicial interpretation of reproductive rights.",
    href: "https://www.vijlawoffices.in/post/the-right-to-abortion-in-india",
  },
];

export default function LegalInsights() {
  return (
    <section id="insights" className="section-pad bg-[#F3EFE6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#7A5C0A] mb-6 font-medium">
              Legal Insights
            </p>
            <h2
              className="text-4xl lg:text-5xl text-[#0d1b2a] leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Writing on the Law
            </h2>
          </div>
          <a
            href="https://www.vijlawoffices.in/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] tracking-[0.2em] uppercase text-[#7A5C0A] hover:text-[#B8975A] transition-colors border-b border-[#B8975A]/50 pb-0.5 whitespace-nowrap font-medium"
          >
            View All &#8599;
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <a
              key={post.title}
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-[#E0D9CC] rounded-sm p-8 hover:border-[#B8975A]/60 hover:shadow-md transition-all duration-300 block"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xs text-[#7A5C0A] font-medium">{post.date}</span>
                <span className="w-1 h-1 rounded-full bg-[#B8975A]/40" />
                <span className="text-xs text-[#6B7280]">{post.readTime}</span>
              </div>
              <h3
                className="text-xl text-[#0d1b2a] mb-4 group-hover:text-[#7A5C0A] transition-colors duration-200 leading-snug"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {post.title}
              </h3>
              <p className="text-sm text-[#6B7280] leading-relaxed mb-5">
                {post.excerpt}
              </p>
              <span className="text-[11px] tracking-[0.2em] uppercase text-[#B8975A]/70 group-hover:text-[#7A5C0A] transition-colors font-medium">
                Read More &#8594;
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
