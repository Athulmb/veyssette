import React from "react";
import { Link } from "react-router-dom";

const HeroAbout = () => {
  return (
    <section className="relative w-full overflow-hidden border-b border-[#c9a65b]/30 bg-[#0a0907] text-[#f2e5cc]">
      {/* Outer container with Left & Right vertical border lines */}
      <div className="mx-auto max-w-[1920px] border-x border-[#c9a65b]/30">
        <div className="grid min-h-[500px] grid-cols-1 lg:grid-cols-[55%_45%]">

          {/* LEFT CONTENT */}
          <div className="relative flex flex-col justify-center px-8 py-16 sm:px-12 lg:px-20">

            {/* Faint Background Floral Watermark Silhouette */}
            <div className="pointer-events-none absolute left-10 top-1/2 -translate-y-1/2 opacity-[0.06]">
              <svg viewBox="0 0 200 200" className="h-[420px] w-[420px] text-[#c9a65b]" fill="currentColor">
                <path d="M100 0 C110 70 140 90 200 100 C140 110 110 130 100 200 C90 130 60 110 0 100 C60 90 90 70 100 0 Z" />
              </svg>
            </div>

            {/* Breadcrumb */}
            <div className="relative z-10 mb-6 flex items-center gap-4 text-sm font-semibold tracking-wider">
              <Link
                to="/"
                className="text-[#c9a65b] transition-colors hover:text-[#f2e5cc]"
              >
                Home
              </Link>

              <span className="text-[#c9a65b]/40">|</span>

              <span className="text-[#c9a65b]">About Us</span>
            </div>

            {/* Heading */}
            <h1 className="relative z-10 font-serif text-5xl font-normal leading-tight tracking-wide text-[#f3eee3] sm:text-6xl lg:text-7xl">
              About Us
            </h1>

            {/* Gold Underline */}
            <div className="relative z-10 my-6 h-[3px] w-[90px] bg-[#c9a65b]" />

            {/* Description */}
            <p className="relative z-10 max-w-[560px] text-base leading-relaxed text-[#b8ad9e] sm:text-lg">
              Crafted with passion, precision and a deep commitment to
              unforgettable culinary experiences.
            </p>
          </div>

          {/* RIGHT IMAGE WITH LARGE ARCHED TOP-LEFT CORNER AND LEFT BORDER */}
          <div className="group relative min-h-[420px] overflow-hidden rounded-tl-[180px] border-l border-[#c9a65b]/30 lg:min-h-[540px] lg:rounded-tl-[240px]">
            <img
              src="/image/magnific_elegant-personal-chef-por_nTlc3syYQD.webp"
              alt="Professional chef in a fine dining restaurant"
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroAbout;