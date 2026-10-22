import React from "react";

export const OurStory = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#0a0907] px-6 py-16 text-[#f3eee3] md:px-12 lg:px-16 lg:py-24">
      {/* Decorative Gold Floral Outline (Right Side) */}
      <div className="pointer-events-none absolute -right-16 top-1/2 z-0 -translate-y-1/2 opacity-80">
        <svg
          width="280"
          height="380"
          viewBox="0 0 280 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="#cba451" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M120 40 C180 70 200 120 230 150 C170 140 140 100 120 40Z" />
            <path d="M145 70 C190 90 210 120 230 135" />
            <path d="M20 180 C90 130 160 150 220 190 C160 230 80 240 20 180Z" />
            <path d="M55 180 C110 165 160 175 200 190" />
            <path d="M120 320 C150 260 190 240 230 230 C210 290 170 320 120 320Z" />
            <path d="M145 295 C175 270 200 255 220 250" />
          </g>
        </svg>
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1700px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        
        {/* Left Image */}
        <div className="overflow-hidden rounded-xl border border-[#2a241b] bg-[#14120e]">
          <img
            src="/image/freepik_assistant_1780007286682-ro55l3504e9xju2wzcp7c9813mupgbla6800bm2tso.webp"
            alt="Chef carefully garnishing a gourmet fine dining dish"
            className="h-[360px] w-full object-cover transition duration-500 hover:scale-[1.02] sm:h-[480px] lg:h-[540px]"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col items-start justify-center">
          {/* Eyebrow */}
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#cba451]">
            Our Story
          </p>

          {/* Heading */}
          <h2 className="max-w-[620px] font-serif text-3xl leading-[1.18] text-[#f3eee3] sm:text-4xl lg:text-[52px]">
            A Passion For Fine Dining &amp; Meaningful Moments
          </h2>

          {/* Body Text 1 */}
          <p className="mt-6 max-w-[580px] text-base leading-[1.7] text-[#b8ad9e] sm:text-lg">
            Veyssette was created with a simple belief: exceptional food has
            the power to bring people together. With years of experience in
            fine dining and private hospitality, our chef brings
            restaurant-quality cuisine to the comfort of your home.
          </p>

          {/* Body Text 2 */}
          <p className="mt-4 max-w-[580px] text-base leading-[1.7] text-[#b8ad9e] sm:text-lg">
            Every dish is thoughtfully crafted, every detail is considered, and
            every experience is designed to leave a lasting impression.
          </p>

          {/* CTA Button */}
          <button
            type="button"
            className="mt-8 flex h-[48px] items-center justify-center rounded-md bg-[#d8b065] px-8 text-sm font-semibold text-[#14120e] transition duration-300 hover:bg-[#e2bd78]"
          >
            Read More
          </button>
        </div>

      </div>
    </section>
  );
};

export default OurStory;