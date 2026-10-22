import React from "react";

const HeroHome = () => {
  return (
    <section className="w-full bg-[#0a0907] text-[#f4ead5]">
      {/* Container with outer Left & Right borders (border-x) matching header max-width */}
      <div className="mx-auto max-w-[1920px] border-x border-[#cba451]/30">
        <div className="grid min-h-[750px] grid-cols-1 lg:grid-cols-[52%_48%]">

          {/* Left Content */}
          <div className="flex flex-col justify-center px-8 py-12 sm:px-12 lg:px-16 lg:py-16">

            {/* Eyebrow */}
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#cba451]">
              Luxury Personal Chef Experience
            </p>

            {/* Main Heading */}
            <h1 className="max-w-[700px] font-serif text-4xl leading-[1.15] text-[#f3eee3] sm:text-5xl lg:text-[62px]">
              Elevated Dining,
              <br />
              Crafted Around You
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-[620px] text-base leading-[1.7] text-[#c5bcad] sm:text-lg">
              Experience restaurant-quality cuisine in the comfort of your home with
              personalized menus, seasonal ingredients, and unforgettable culinary
              moments tailored to your lifestyle.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="/book-a-chef"
                className="flex h-[52px] items-center justify-center rounded-md bg-[#d8b065] px-7 text-sm font-semibold text-[#14120e] transition duration-300 hover:bg-[#e2bd78]"
              >
                Book A Private Experience
              </a>

              <a
                href="/services"
                className="flex h-[52px] items-center justify-center rounded-md border border-[#cba451]/60 px-7 text-sm font-semibold text-[#f3eee3] transition duration-300 hover:border-[#cba451] hover:bg-[#cba451]/10"
              >
                Explore Our Services
              </a>
            </div>

            {/* Trust / Social Proof Section */}
            <div className="mt-12 flex items-center gap-6">
              
              {/* Avatars */}
              <div>
                <p className="mb-2.5 text-xs text-[#b8ad9e]">
                  Trusted by clients in
                </p>

                <div className="flex items-center">
                  {[
                    "photo-1500648767791-00dcc994a43e",
                    "photo-1506794778202-cad84cf45f1d",
                    "photo-1534528741775-53994a69daeb",
                    "photo-1507003211169-0a1dd7228f2d",
                  ].map((photo, index) => (
                    <img
                      key={photo}
                      src={`https://images.unsplash.com/${photo}?auto=format&fit=crop&w=100&h=100&q=80`}
                      alt={`Client ${index + 1}`}
                      className={`h-10 w-10 rounded-full border-2 border-[#0a0907] object-cover ${
                        index > 0 ? "-ml-2.5" : ""
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Small Vertical Divider */}
              <div className="mt-4 h-12 w-[1px] bg-[#cba451]/30" />

              {/* Client Count */}
              <div className="mt-4 flex flex-col justify-center">
                <span className="font-serif text-lg tracking-wider text-[#cba451]">
                  100+
                </span>
                <span className="font-serif text-base italic text-[#c5bcad]">
                  Happy clients
                </span>
              </div>

            </div>
          </div>

          {/* Right Image Container with Left Center Border Line */}
          <div className="relative min-h-[450px] w-full border-t border-[#cba451]/30 lg:border-t-0 lg:border-l lg:border-[#cba451]/30">
            <img
              src="/image/magnific_1sXK7HRr4rr.webp"
              alt="Personal chef"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroHome;