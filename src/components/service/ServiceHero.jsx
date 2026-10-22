import React from 'react';
import { Flower2 } from 'lucide-react';
import { motion } from 'framer-motion';

const easeCurve = [0.16, 1, 0.3, 1];

const ServiceHero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#0e0c0a] text-[#f3e6cf]">

      {/* Decorative Background Flower Watermark */}
      <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 opacity-[0.035] text-[#cba653]">
        <Flower2 size={620} strokeWidth={0.8} />
      </div>

      <div className="relative mx-auto max-w-[1720px] px-6 sm:px-10 lg:px-16 xl:px-20 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-12 min-h-[500px] lg:min-h-[560px]">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, ease: easeCurve }}
            className="relative z-10 lg:col-span-6 flex flex-col justify-center"
          >
            {/* Breadcrumb */}
            <div className="mb-6 sm:mb-8 flex items-center gap-3 text-sm sm:text-base font-medium tracking-wide text-[#cba451]">
              <a
                href="/"
                className="transition-colors hover:text-[#f3e6cf]"
              >
                Home
              </a>
              <span className="text-[#cba451]/60">|</span>
              <span className="text-[#cba451]">Services</span>
            </div>

            {/* Main Heading */}
            <h1 className="mb-6 font-serif text-5xl sm:text-6xl lg:text-[76px] font-normal leading-[1.06] tracking-tight text-[#f3e6cf]">
              Services
            </h1>

            {/* Gold Divider Line */}
            <div className="mb-8 h-[2px] w-[72px] bg-[#cba653]" />

            {/* Description Paragraph */}
            <p className="max-w-[540px] text-base sm:text-lg lg:text-[19px] leading-[1.7] text-[#c6b69b] font-normal">
              Personal chef experiences crafted for private dinners, weekly routines and unforgettable celebrations.
            </p>
          </motion.div>

          {/* Right Curved Arch Image Container with Right-Edge Gold Ornament */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.95, ease: easeCurve }}
            className="relative z-10 lg:col-span-6 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[640px]">
              
              {/* Arched Image Container */}
              <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[540px] xl:h-[560px] overflow-hidden rounded-tl-[160px] sm:rounded-tl-[220px] lg:rounded-tl-[260px] border-t border-l border-[#cba653]/40 shadow-2xl bg-[#14120e]">
                <img
                  src="/image/magnific_luxury-gourmet-dining-tab_ONu4VlEynm.webp"
                  alt="Elegant luxury fine dining table with candlelight and champagne"
                  className="h-full w-full object-cover object-center"
                  loading="eager"
                />
                {/* Subtle Ambient Vignette Overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
              </div>

              {/* Exact Gold Flower Ornament Line Asset - Mounted on the Right Edge of the Image */}
              <div className="pointer-events-none absolute top-4 bottom-4 right-0 translate-x-1/2 z-20 flex items-center justify-center">
                <img
                  src="/image/ornament-flower.webp"
                  alt=""
                  aria-hidden="true"
                  className="h-[92%] w-auto object-contain drop-shadow-md"
                />
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Gold Divider Line where next section starts */}
      <div className="w-full h-[1px] bg-gradient-to-r from-[#cba653]/10 via-[#cba653]/55 to-[#cba653]/10" />
    </section>
  );
};

export default ServiceHero;