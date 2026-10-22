import React from "react";

const PassionFor = () => {
  return (
    <section className="w-full bg-[#0a0907] px-6 py-16 text-[#f3eee3] md:px-12 lg:px-16 lg:py-24">
      <div className="mx-auto grid max-w-[1700px] grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">

        {/* Left Content */}
        <div className="flex flex-col justify-center">
          {/* Eyebrow */}
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#cba451]">
            About Us
          </p>

          {/* Title */}
          <h2 className="max-w-[650px] font-serif text-4xl leading-[1.15] text-[#f3eee3] sm:text-5xl lg:text-[58px]">
            Passion For Food.
            <br />
            Commitment To You
          </h2>

          {/* Subtitle */}
          <p className="mt-6 max-w-[620px] text-base leading-[1.7] text-[#b8ad9e] sm:text-lg">
            We believe that every meal is an opportunity to create memorable
            moments. Our mission is to bring people together through exceptional
            cuisine and personalized service.
          </p>

          {/* Statistics */}
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-[550px]">
            <div>
              <h3 className="font-serif text-3xl font-normal text-[#cba451] sm:text-4xl">
                10+
              </h3>
              <p className="mt-1 font-serif text-sm italic text-[#b8ad9e] sm:text-base">
                Years of Experience
              </p>
            </div>

            <div>
              <h3 className="font-serif text-3xl font-normal text-[#cba451] sm:text-4xl">
                300+
              </h3>
              <p className="mt-1 font-serif text-sm italic text-[#b8ad9e] sm:text-base">
                Unique Menus
              </p>
            </div>

            <div>
              <h3 className="font-serif text-3xl font-normal text-[#cba451] sm:text-4xl">
                100+
              </h3>
              <p className="mt-1 font-serif text-sm italic text-[#b8ad9e] sm:text-base">
                Happy Clients
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-10">
            <a
              href="/about"
              className="inline-flex h-[52px] items-center justify-center rounded-md bg-[#d8b065] px-8 text-sm font-semibold text-[#14120e] transition duration-300 hover:bg-[#e2bd78]"
            >
              Learn More About Us
            </a>
          </div>
        </div>

        {/* Right Image Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">

          {/* Left Column (2 Stacked Images) */}
          <div className="flex flex-col gap-5 sm:gap-6">
            {/* Top Image: Gourmet Meat Dish */}
            <div className="overflow-hidden rounded-xl border border-[#2a241b]">
              <img
                src="/image/magnific_luxury-gourmet-meat-dish-_ubWJi8TQLD-ro1puapg29vhdb027xri59p48cr672ki4llkvyzvx4.webp"
                alt="Plated gourmet dish"
                className="h-[230px] w-full object-cover transition duration-500 hover:scale-105 sm:h-[260px]"
              />
            </div>

            {/* Bottom Image: Chef Preparing Dish */}
            <div className="overflow-hidden rounded-xl border border-[#2a241b]">
              <img
                src="/image/magnific_professional-chef-careful_74f0BVaJAL.webp"
                alt="Chef carefully garnishing a gourmet plate"
                className="h-[230px] w-full object-cover transition duration-500 hover:scale-105 sm:h-[260px]"
              />
            </div>
          </div>

          {/* Right Column (1 Tall Image: Dining Setup) */}
          <div className="overflow-hidden rounded-xl border border-[#2a241b]">
            <img
              src="/image/magnific_luxury-gourmet-dining-tab_ONu4VlEynm.webp"
              alt="Candlelit luxury gourmet dining experience"
              className="h-full min-h-[380px] w-full object-cover transition duration-500 hover:scale-105 sm:min-h-[540px]"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default PassionFor;