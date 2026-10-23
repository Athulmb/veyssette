import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Sparkles } from "lucide-react";

const easeCurve = [0.16, 1, 0.3, 1];

export const blogPosts = [
  {
    id: "culinary-artistry",
    slug: "culinary-artistry",
    title: "The Art of the Private Degustation: Crafting Bespoke 7-Course Journeys",
    category: "Gastronomy",
    date: "October 18, 2026",
    readTime: "6 min read",
    author: "Chef Adrian Veyssette",
    excerpt:
      "How balancing acidity, temperature contrasts, and tableside theater elevates an in-home dining experience beyond traditional restaurant dining.",
    image:
      "/image/magnific_luxury-tasting-menu-scene_DBydgiEpcl.webp",
    featured: true,
  },
  {
    id: "wine-pairing-secrets",
    slug: "wine-pairing-secrets",
    title: "Old World vs. New World: Pairing French Burgundy with Autumn Truffles",
    category: "Wine & Spirits",
    date: "October 12, 2026",
    readTime: "5 min read",
    author: "Chef Adrian Veyssette",
    excerpt:
      "A deep dive into terroir, tannin structures, and why a premier cru Pinot Noir transforms fresh shaved black perigord truffles.",
    image:
      "/image/magnific_luxury-wine-pouring-scene_LUIO0aCswO-ro4x3f0arisct0u3klec9bjd9brjly32giqsmd2oeo.webp",
  },
  {
    id: "estate-entertaining",
    slug: "estate-entertaining",
    title: "The Host's Guide to Seamless In-Home Entertaining",
    category: "Hospitality",
    date: "September 29, 2026",
    readTime: "4 min read",
    author: "Elena Rostova, Concierge",
    excerpt:
      "From lighting ambience to pacing cocktail courses, discover how to host effortlessly without spending the evening tied to the stove.",
    image:
      "/image/magnific_elegant-candlelit-private_LU8ABU1swO-ro5e2gxily6xa4l25jr9c2107qgv5k4j99npy51h7c.webp",
  },
  {
    id: "sustainable-sourcing",
    slug: "sustainable-sourcing",
    title: "Beyond Farm-to-Table: Sourcing Regenerative Ingredients",
    category: "Philosophy",
    date: "September 15, 2026",
    readTime: "7 min read",
    author: "Chef Adrian Veyssette",
    excerpt:
      "Why line-caught wild seafood, heirloom varietals, and grass-fed heritage meats fundamentally redefine flavor and texture.",
    image:
      "/image/magnific_centered-herbcrusted-salm_l7tzY04gv9-e1780268049158-roaemydwjf3egtelfdvcm8rr7tvw3b9x9mne205094.webp",
  },
  {
    id: "chocolate-alchemy",
    slug: "chocolate-alchemy",
    title: "The Alchemy of Valrhona: Mastering Chocolate Desserts",
    category: "Pâtisserie",
    date: "August 30, 2026",
    readTime: "5 min read",
    author: "Chef Adrian Veyssette",
    excerpt:
      "Exploring cocoa percentages, emulsification techniques, and the magic of finishing sweet courses with hand-harvested sea salt.",
    image:
      "/image/magnific_centered-dark-chocolate-m_ubWJyChQLD-e1780268112175-roaeollqhzcgs90ktlguhbtsn3s0k8t0hrqzafp7d4.webp",
  },
  {
    id: "chef-knives-ritual",
    slug: "chef-knives-ritual",
    title: "In the Chef's Knife Roll: The Essential Tools of Haute Cuisine",
    category: "Technique",
    date: "August 14, 2026",
    readTime: "4 min read",
    author: "Chef Adrian Veyssette",
    excerpt:
      "Hand-forged Japanese damascus steel, copper sauté pans, and micro-plane balance: a peek inside the private chef kit.",
    image:
      "/image/magnific_professional-chef-careful_74f0BVaJAL.webp",
  },
];

const BlogList = () => {
  const featured = blogPosts.find((p) => p.featured) || blogPosts[0];
  const remaining = blogPosts.filter((p) => p.id !== featured.id);

  return (
    <section className="relative w-full bg-[#0a0907] px-6 py-20 text-[#f3eee3] md:px-12 lg:px-20 lg:py-28">
      <div className="mx-auto max-w-[1700px]">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#cba451] mb-4">
            <Sparkles size={14} />
            <span>Stories & Culinary Wisdom</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#f3eee3] leading-tight font-normal">
            Articles & Insights
          </h2>
          <div className="mx-auto my-6 h-[2px] w-[70px] bg-[#cba653]" />
          <p className="text-base sm:text-lg text-[#b8ad9e]">
            Delve into stories of Michelin techniques, seasonal dining curation, and the fine
            art of private hospitality.
          </p>
        </div>

        {/* Featured Post Banner */}
        <Link
          to={`/blog/${featured.slug}`}
          className="group block mb-16 rounded-2xl border border-[#cba451]/30 bg-[#14120e] overflow-hidden hover:border-[#cba451] transition-all duration-300 shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 h-[360px] sm:h-[420px] lg:h-[480px] overflow-hidden relative">
              <img
                src={featured.image}
                alt={featured.title}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent lg:hidden" />
              <div className="absolute top-6 left-6 rounded-full bg-[#cba451] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#0e0c0a] shadow-lg">
                Featured Story
              </div>
            </div>

            <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 text-xs font-medium text-[#cba451] uppercase tracking-wider mb-4">
                  <span>{featured.category}</span>
                  <span className="text-[#3b3020]">•</span>
                  <span className="text-[#8c8273]">{featured.readTime}</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#f3eee3] group-hover:text-[#cba451] transition-colors leading-tight mb-4">
                  {featured.title}
                </h3>

                <p className="text-sm sm:text-base leading-relaxed text-[#b8ad9e] mb-6">
                  {featured.excerpt}
                </p>
              </div>

              <div className="pt-6 border-t border-[#2a241b] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full border border-[#cba451]/40 overflow-hidden bg-[#0a0907]">
                    <img
                      src="/image/magnific_elegant-personal-chef-por_nTlc3syYQD.webp"
                      alt={featured.author}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-[#f3eee3] block">
                      {featured.author}
                    </span>
                    <span className="text-[11px] text-[#8c8273]">
                      {featured.date}
                    </span>
                  </div>
                </div>

                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#cba451] group-hover:translate-x-1 transition-transform">
                  Read Article <ArrowRight size={16} />
                </span>
              </div>
            </div>
          </div>
        </Link>

        {/* Remaining Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {remaining.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: easeCurve }}
              className="group flex flex-col rounded-2xl border border-[#2a241b] bg-[#14120e] overflow-hidden hover:border-[#cba451]/60 transition-all duration-300 shadow-xl"
            >
              <Link
                to={`/blog/${post.slug}`}
                className="relative block h-[240px] overflow-hidden"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute top-4 left-4 rounded-full bg-[#0a0907]/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#cba451] border border-[#cba451]/30">
                  {post.category}
                </div>
              </Link>

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-[#8c8273] mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} className="text-[#cba451]" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={13} className="text-[#cba451]" />
                      {post.readTime}
                    </span>
                  </div>

                  <Link to={`/blog/${post.slug}`}>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#f3eee3] group-hover:text-[#cba451] transition-colors leading-snug mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="text-sm leading-relaxed text-[#b8ad9e] line-clamp-3 mb-6">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#2a241b] flex items-center justify-between">
                  <span className="text-xs text-[#8c8273]">{post.author}</span>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#cba451] group-hover:translate-x-1 transition-transform"
                  >
                    Read Story <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
