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
    title: "The 'Right' to Abortion in India",
    date: "12 Oct 2024",
    readTime: "4 min read",
    excerpt:
      "An examination of the Medical Termination of Pregnancy Act 1971, the MTP Rules 2003, and the evolving judicial interpretation of reproductive rights.",
    href: "https://www.vijlawoffices.in/post/the-right-to-abortion-in-india",
  },
];

export default function LegalInsights() {
  return (
    <section id="insights" className="section-pad bg-[#111e2d]">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#b8975a] mb-6 font-medium">
              Legal Insights
            </p>
            <h2
              className="text-4xl lg:text-5xl text-[#f0ebe3] leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Engagement with the Law
            </h2>
          </div>
          <a
            href="https://www.vijlawoffices.in/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-widest uppercase text-[#b8975a] hover:text-[#d4b483] transition-colors border-b border-[#b8975a]/40 pb-0.5 whitespace-nowrap"
          >
            View All ↗
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <a
              key={post.title}
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-[#b8975a]/15 rounded-sm p-8 hover:border-[#b8975a]/40 hover:bg-[#162032]/50 transition-all duration-300 block"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xs text-[#b8975a] font-medium">{post.date}</span>
                <span className="w-1 h-1 rounded-full bg-[#b8975a]/40" />
                <span className="text-xs text-[#8a9bb0]">{post.readTime}</span>
              </div>
              <h3
                className="text-xl text-[#f0ebe3] mb-4 group-hover:text-[#d4b483] transition-colors duration-200 leading-snug"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {post.title}
              </h3>
              <p className="text-sm text-[#8a9bb0] leading-relaxed mb-5">
                {post.excerpt}
              </p>
              <span className="text-xs tracking-widest uppercase text-[#b8975a]/70 group-hover:text-[#b8975a] transition-colors">
                Read More →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
