
import React, { useState } from 'react';

export const WhatOur = () => {
  const [activeDot, setActiveDot] = useState(1);

  const testimonials = [
    {
      quote:
        'Professional, discreet and incredibly talented. Veyssette created a dining experience that impressed every guest at our event.',
      name: 'Michael A.',
      service: 'Private Event Experience',
      image:
        'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      quote:
        'The meal prep transformed our routine with quality, beautifully prepared meals and an effortless experience.',
      name: 'Daniel R.',
      service: 'Weekly Meal Prep',
      image:
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      quote:
        'Our anniversary dinner was remarkable, akin to a Michelin-star restaurant, with exceptional service and flavors.',
      name: 'Olivia T.',
      service: 'Special Occasion Dinner',
      image:
        'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
  ];

  return (
    <section className="w-full bg-[#191612] px-5 py-16 text-[#f3e6ce] sm:px-8 lg:px-5 lg:py-16">
      <div className="mx-auto grid max-w-[1800px] grid-cols-1 items-start gap-10 lg:grid-cols-[0.9fr_2fr] lg:gap-12">

        {/* Section Heading */}
        <div className="pt-2">
          <p className="mb-9 text-sm font-bold uppercase tracking-[0.28em] text-[#cba34f]">
            What Our Clients Say
          </p>

          <h2 className="max-w-[520px] font-serif text-4xl leading-[1.2] sm:text-5xl lg:text-[64px]">
            Experiences That Speak For Themselves
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.map((item) => (
              <article
                key={item.name}
                className="flex min-h-[500px] flex-col rounded-md border border-[#443721] bg-[#0e0c0a] px-7 py-9 sm:px-10"
              >
                {/* Quote Icon */}
                <div className="mb-5 font-serif text-[76px] leading-[0.8] text-[#cba653]">
                  “
                </div>

                {/* Testimonial */}
                <p className="mb-8 text-lg leading-[1.6] text-[#bdb09d]">
                  {item.quote}
                </p>

                {/* Customer Details */}
                <div className="mt-auto">
                  <div className="mb-5 h-px w-7 bg-[#cba653]" />

                  <div className="mb-3 flex h-[84px] w-[84px] items-center justify-center overflow-hidden rounded-full">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <h3 className="mb-1 font-serif text-2xl italic text-[#cba653]">
                    {item.name}
                  </h3>

                  <p className="text-base leading-6 text-[#cba653]">
                    {item.service}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="mt-7 flex justify-center gap-3">
            {[0, 1, 2, 3].map((dot) => (
              <button
                key={dot}
                type="button"
                aria-label={`Go to testimonial page ${dot + 1}`}
                aria-pressed={activeDot === dot}
                onClick={() => setActiveDot(dot)}
                className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
                  activeDot === dot
                    ? 'bg-[#cba653]'
                    : 'bg-[#443721] hover:bg-[#8e7139]'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatOur;