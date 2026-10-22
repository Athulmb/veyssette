
import React from 'react';
import { Flower2 } from 'lucide-react';

const ServiceHero = () => {
  return (
    <section className="relative w-full overflow-hidden border-b border-[#493b24] bg-[#0e0c0a] text-[#f3e6cf]">

      {/* Decorative Background Flower */}
      <div className="pointer-events-none absolute -left-20 top-0 opacity-[0.035]">
        <Flower2 size={650} strokeWidth={1} />
      </div>

      <div className="relative mx-auto grid min-h-[600px] max-w-[1900px] grid-cols-1 items-center lg:grid-cols-[1.25fr_1fr]">

        {/* Left Content */}
        <div className="relative z-10 px-6 py-16 sm:px-10 lg:py-24 xl:px-9">

          {/* Breadcrumb */}
          <div className="mb-10 flex items-center gap-6 text-lg font-semibold text-[#cba34f]">
            <a
              href="/"
              className="transition-colors hover:text-[#f3e6cf]"
            >
              Home
            </a>

            <span className="h-5 w-px bg-[#493b24]" />

            <span>Services</span>
          </div>

          {/* Heading */}
          <h1 className="mb-12 font-serif text-5xl leading-tight sm:text-6xl lg:text-7xl xl:text-[88px]">
            Services
          </h1>

          {/* Gold Divider */}
          <div className="mb-12 h-1 w-[137px] bg-[#cba653]" />

          {/* Description */}
          <p className="max-w-[820px] text-lg leading-9 text-[#c6b69b] sm:text-xl lg:text-[25px] lg:leading-[1.7]">
            Personal chef experiences crafted for private dinners,
            weekly routines and unforgettable celebrations.
          </p>
        </div>

        {/* Right Image */}
        <div className="relative h-[420px] overflow-hidden border-l-0 border-[#493b24] sm:h-[520px] lg:h-[675px] lg:border-l-[3px] lg:rounded-tl-[300px]">

          <img
            src="https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Elegant fine dining table prepared for a private dinner"
            className="h-full w-full object-cover"
          />

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />

          {/* Gold Decorative Flower */}
          <div className="absolute right-8 top-8 text-[#cba653]">
            <Flower2 size={76} strokeWidth={0.8} />
          </div>

          {/* Vertical Gold Line */}
          <div className="absolute bottom-12 right-8 top-36 flex flex-col items-center">
            <div className="h-full w-px bg-[#cba653]" />
            <div className="mt-1 h-3 w-3 rotate-45 border border-[#cba653] bg-[#0e0c0a]" />
          </div>
        </div>
      </div>

      {/* Bottom Decorative Space */}
      <div className="h-20 sm:h-24" />
    </section>
  );
};

export default ServiceHero;