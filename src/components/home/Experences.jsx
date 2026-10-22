import React, { useState } from "react";

const Experences = () => {
  const [activeDot, setActiveDot] = useState(3);

  const testimonials = [
    {
      quote:
        "Our anniversary dinner was remarkable, akin to a Michelin-star restaurant, with exceptional service and flavors.",
      name: "Olivia T.",
      occasion: "Special Occasion Dinner",
      image: "/image/avatar-2-ro2xbmbf4ewt8kf5diu71tsq0oyj6vgsy6axl7ic20.webp",
    },
    {
      quote:
        "Every detail felt thoughtfully curated. From the presentation to the flavors, the entire evening was elegant and intimate.",
      name: "Jessica M.",
      occasion: "Private Dinner",
      image: "/image/avatar-1.webp",
    },
    {
      quote:
        "Professional, discreet and incredibly talented. Veyssette created a dining experience that impressed every guest at our event.",
      name: "Michael A.",
      occasion: "Private Event Experience",
      image: "/image/avatar-3-ro5e1g9h0v0ya179n2os8vihr2yvewra26aqxzzdzc.webp",
    },
  ];

  return (
    <section className="w-full bg-[#0a0907] px-6 py-16 text-[#f3eee3] md:px-12 lg:px-16 lg:py-24">
      <div className="mx-auto grid max-w-[1700px] grid-cols-1 items-start gap-12 lg:grid-cols-[0.75fr_2.25fr] lg:gap-16">

        {/* Left Heading */}
        <div className="flex flex-col justify-start">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#cba451]">
            What Our Clients Say
          </p>

          <h2 className="max-w-[450px] font-serif text-4xl leading-[1.15] text-[#f3eee3] sm:text-5xl lg:text-[56px]">
            Experiences That Speak For Themselves
          </h2>
        </div>

        {/* Right Testimonial Cards & Pagination */}
        <div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.map((item) => (
              <article
                key={item.name}
                className="flex flex-col justify-between rounded-xl border border-[#2a241b] bg-[#14120e] p-8 transition duration-300 hover:border-[#cba451]/50 sm:p-9"
              >
                <div>
                  {/* Quote Icon */}
                  <div
                    className="mb-4 font-serif text-6xl leading-[0.8] text-[#cba451]"
                    aria-hidden="true"
                  >
                    “
                  </div>

                  {/* Review Text */}
                  <p className="text-base leading-[1.7] text-[#b8ad9e] sm:text-lg">
                    {item.quote}
                  </p>
                </div>

                {/* Customer Details */}
                <div className="mt-8 pt-6">
                  {/* Divider Line */}
                  <div className="mb-6 h-[1px] w-8 bg-[#cba451]/50" />

                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="mb-3 h-14 w-14 rounded-full object-cover border border-[#cba451]/30"
                  />

                  <h3 className="font-serif text-xl italic text-[#cba451] sm:text-2xl">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-[#b8ad9e] sm:text-sm">
                    {item.occasion}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="mt-10 flex justify-center gap-2.5">
            {[0, 1, 2, 3].map((dot) => (
              <button
                key={dot}
                type="button"
                onClick={() => setActiveDot(dot)}
                aria-label={`Go to testimonial page ${dot + 1}`}
                aria-pressed={activeDot === dot}
                className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
                  activeDot === dot
                    ? "bg-[#cba451]"
                    : "bg-[#2a241b] hover:bg-[#cba451]/40"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experences;