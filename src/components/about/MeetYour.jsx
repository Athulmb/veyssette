import React from "react";

const chefProfile = {
  image: "/image/magnific_fFnrE7SCDY.webp",
  alt: "Chef preparing a gourmet fine dining dish",
  stats: [
    { number: "10+", label: "Years of Experience" },
    { number: "1.000+", label: "Private Events" },
    { number: "100%", label: "Dedication" },
  ],
};

export const ChefProfileContext = React.createContext(null);

export const ChefProfileProvider = ({ children }) => (
  <ChefProfileContext.Provider value={chefProfile}>
    {children}
  </ChefProfileContext.Provider>
);

const MeetYourContent = () => {
  const profile = React.useContext(ChefProfileContext);

  return (
    <section className="w-full bg-[#0a0907] px-6 py-16 text-[#f3eee3] md:px-12 lg:px-16 lg:py-24">
      {/* Outer Bordered Card Box */}
      <div className="mx-auto grid max-w-[1700px] grid-cols-1 overflow-hidden rounded-2xl border border-[#2a241b] bg-[#14120e] lg:grid-cols-2">

        {/* Left Chef Image */}
        <div className="relative min-h-[380px] w-full sm:min-h-[480px] lg:min-h-[580px]">
          <img
            src={profile.image}
            alt={profile.alt}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">

          {/* Eyebrow */}
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#cba451]">
            Meet Your Chef
          </p>

          {/* Heading */}
          <h2 className="max-w-[580px] font-serif text-3xl leading-[1.18] text-[#f3eee3] sm:text-4xl lg:text-[50px]">
            Experience, Dedication &amp; A Love For What We Do
          </h2>

          {/* Paragraph 1 */}
          <p className="mt-6 max-w-[560px] text-base leading-[1.7] text-[#b8ad9e] sm:text-lg">
            With over 20 years of experience in fine dining and private culinary
            services, our chef has worked in award-winning restaurants and
            served discerning clients around the world.
          </p>

          {/* Paragraph 2 */}
          <p className="mt-4 max-w-[560px] text-base leading-[1.7] text-[#b8ad9e] sm:text-lg">
            Today, that expertise comes directly to you, creating refined dishes
            and personalized experiences that reflect a commitment to
            excellence, hospitality and attention to detail.
          </p>

          {/* Statistics Grid */}
          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-[#2a241b] pt-8 sm:gap-6">
            {profile.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-serif text-3xl font-normal text-[#cba451] sm:text-4xl lg:text-5xl">
                  {stat.number}
                </span>

                <span className="mt-2 font-serif text-sm italic text-[#b8ad9e] sm:text-base">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export const MeetYour = () => (
  <ChefProfileProvider>
    <MeetYourContent />
  </ChefProfileProvider>
);

export default MeetYour;