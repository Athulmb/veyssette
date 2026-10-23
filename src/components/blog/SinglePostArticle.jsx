import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  Calendar,
  Clock,
  Wine,
  ArrowLeft,
  ArrowRight,
  Share2,
  Quote,
} from "lucide-react";
import { blogPosts } from "./BlogList";

const SinglePostArticle = () => {
  const { slug } = useParams();

  // Find post by slug or default to first post
  const currentPost =
    blogPosts.find((p) => p.slug === slug || p.id === slug) || blogPosts[0];

  const relatedPosts = blogPosts.filter((p) => p.id !== currentPost.id).slice(0, 2);

  return (
    <article className="relative w-full bg-[#0a0907] px-6 py-16 text-[#f3eee3] md:px-12 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-[1040px]">
        {/* Back Link */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-xs uppercase font-semibold tracking-wider text-[#cba451] hover:text-white transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          <span>Back to Culinary Journal</span>
        </Link>

        {/* Post Metadata Header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase font-semibold tracking-wider text-[#cba451] mb-4">
            <span className="rounded bg-[#17140e] px-3 py-1 border border-[#cba451]/30">
              {currentPost.category}
            </span>
            <span className="text-[#3b3020]">•</span>
            <span className="flex items-center gap-1.5 text-[#8c8273]">
              <Calendar size={13} className="text-[#cba451]" />
              {currentPost.date}
            </span>
            <span className="text-[#3b3020]">•</span>
            <span className="flex items-center gap-1.5 text-[#8c8273]">
              <Clock size={13} className="text-[#cba451]" />
              {currentPost.readTime}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-[56px] leading-[1.12] text-[#f3eee3] mb-6">
            {currentPost.title}
          </h1>

          <p className="text-lg sm:text-xl text-[#c6b69b] leading-relaxed italic border-l-2 border-[#cba451] pl-5 py-1">
            "{currentPost.excerpt}"
          </p>
        </div>

        {/* Featured Image Banner */}
        <div className="relative mb-14 overflow-hidden rounded-2xl border border-[#cba451]/30 bg-[#14120e] shadow-2xl">
          <img
            src={currentPost.image}
            alt={currentPost.title}
            className="w-full max-h-[560px] object-cover"
          />
        </div>

        {/* Editorial Body Content */}
        <div className="space-y-8 text-base sm:text-lg leading-[1.85] text-[#b8ad9e]">
          <p className="first-letter:font-serif first-letter:text-6xl first-letter:font-bold first-letter:text-[#cba451] first-letter:mr-3 first-letter:float-left first-letter:leading-none">
            In the secluded sanctuary of a private residence, dining transcends the typical restaurant boundary. There is no rushed turn of tables, no competing ambient noise, and no compromise between the kitchen’s artistry and the host’s intimacy. Every aroma wafting from the stove belongs entirely to the host and their invited guests.
          </p>

          <p>
            When structuring a custom seven-course degustation, the chef’s primary compass is progression. A tasting menu must never overwhelm; it must entice, intrigue, pause for contemplation, and culminate in a harmonious crescendo of contrasting textures and nuanced temperatures.
          </p>

          {/* Pull Quote Box */}
          <div className="my-12 rounded-2xl border border-[#cba451]/40 bg-gradient-to-r from-[#17140f] via-[#1c1812] to-[#17140f] p-8 sm:p-12 relative overflow-hidden">
            <Quote
              size={64}
              className="absolute -top-3 right-4 text-[#cba451]/10 pointer-events-none"
            />
            <p className="font-serif text-xl sm:text-2xl text-[#f3eee3] italic leading-relaxed text-center sm:text-left">
              "True luxury in gastronomy is not excessive extravagance; it is the absolute precision of temperature, the freshness of an ingredient harvested that dawn, and the grace of uninterrupted conversation."
            </p>
            <span className="block mt-4 text-xs uppercase tracking-widest text-[#cba451] font-semibold text-center sm:text-left">
              — Chef Adrian Veyssette, Executive Private Chef
            </span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl text-[#f3eee3] pt-4">
            Harmonizing Terroir with Seasonal Produce
          </h2>

          <p>
            Spring summons wild morels and tender asparagus tips; autumn demands the decadent woodiness of Perigord truffles and slow-reduced bone marrow jus. The craft lies in tableside restraint: allowing the inherent vitality of organic, hand-selected ingredients to speak with crystalline clarity rather than heavy masking sauces.
          </p>

          {/* Sommelier Highlight Box */}
          <div className="rounded-xl border border-[#3b3020] bg-[#14120e] p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
            <div className="h-16 w-16 rounded-full border border-[#cba451] bg-[#0a0907] flex items-center justify-center text-[#cba451] shrink-0">
              <Wine size={28} />
            </div>
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#cba451] block mb-1">
                Sommelier Pairing Spotlight
              </span>
              <h4 className="font-serif text-xl text-[#f3eee3] mb-1">
                2019 Domaine Dujac Morey-Saint-Denis Premier Cru
              </h4>
              <p className="text-sm text-[#b8ad9e] leading-relaxed">
                A masterpiece of subtle red currant, forest floor aromas, and silky mineral tannins.
                Served at cellar temperature (16°C), it effortlessly elevates seared duck breast and slow-roasted wild game.
              </p>
            </div>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl text-[#f3eee3] pt-4">
            The Intimacy of Tableside Finishing
          </h2>

          <p>
            Perhaps the most memorable element of a private chef experience is the personal connection. When the chef steps tableside to drizzle an emulsion, explain the provenance of a micro-herb, or shave black truffle over steaming saffron risotto, guests are not merely diners—they become part of the culinary narrative.
          </p>
        </div>

        {/* Share & Save bar */}
        <div className="mt-14 pt-8 border-t border-[#2a241b] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-wider text-[#8c8273]">
            <span>Tags:</span>
            <span className="rounded bg-[#14120e] px-3 py-1 text-[#cba451] border border-[#3b3020]">
              Degustation
            </span>
            <span className="rounded bg-[#14120e] px-3 py-1 text-[#cba451] border border-[#3b3020]">
              Private Dining
            </span>
            <span className="rounded bg-[#14120e] px-3 py-1 text-[#cba451] border border-[#3b3020]">
              Michelin Craft
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => alert("Link copied to clipboard!")}
              className="flex items-center gap-1.5 text-xs text-[#cba451] border border-[#3b3020] rounded-lg px-3 py-2 hover:bg-[#cba451]/10 transition-colors"
            >
              <Share2 size={14} />
              <span>Share Article</span>
            </button>
          </div>
        </div>

        {/* Chef Author Bio Card */}
        <div className="mt-14 rounded-2xl border border-[#cba451]/30 bg-[#14120e] p-8 sm:p-10 flex flex-col sm:flex-row gap-6 items-center">
          <div className="h-24 w-24 rounded-full border-2 border-[#cba451] overflow-hidden shrink-0 bg-[#0a0907]">
            <img
              src="/image/magnific_elegant-personal-chef-por_nTlc3syYQD.webp"
              alt="Chef Adrian Veyssette"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#cba451] block mb-1">
              About The Author
            </span>
            <h3 className="font-serif text-2xl text-[#f3eee3] mb-2">
              Chef Adrian Veyssette
            </h3>
            <p className="text-sm text-[#b8ad9e] leading-relaxed mb-4">
              Trained in legendary Michelin-starred establishments in Lyon and Paris, Chef Adrian delivers haute French and modern Mediterranean gastronomy directly to the private residences of discerning clients worldwide.
            </p>
            <Link
              to="/book"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#cba451] hover:underline"
            >
              Book Chef Adrian For Your Dinner <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Related Articles Section */}
        <div className="mt-20 pt-12 border-t border-[#2a241b]">
          <h3 className="font-serif text-3xl text-[#f3eee3] mb-8">
            Continue Reading
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {relatedPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group flex flex-col rounded-xl border border-[#2a241b] bg-[#14120e] overflow-hidden hover:border-[#cba451]/60 transition-all"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs uppercase font-semibold text-[#cba451] block mb-2">
                    {post.category}
                  </span>
                  <h4 className="font-serif text-xl text-[#f3eee3] group-hover:text-[#cba451] transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default SinglePostArticle;
