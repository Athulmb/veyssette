import React from 'react';
import { Flower2 } from 'lucide-react';
import { motion } from 'framer-motion';

const easeCurve = [0.16, 1, 0.3, 1];

export const HeroContact = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#0e0c0a] text-[#f3e6cf] border-b border-[#2a241b]">

      {/* Decorative Background Flower Watermark with Gentle Ambient Float */}
      <motion.div
        animate={{ rotate: [0, 5, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 opacity-[0.035] text-[#cba653]"
      >
        <Flower2 size={620} strokeWidth={0.8} />
      </motion.div>

      <div className="relative mx-auto max-w-[1720px] px-6 sm:px-10 lg:px-16 xl:px-20 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-12 min-h-[500px] lg:min-h-[560px]">

          {/* Left Content */}
          <div className="relative z-10 lg:col-span-6 flex flex-col justify-center">
            
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: easeCurve }}
              className="mb-6 sm:mb-8 flex items-center gap-3 text-sm sm:text-base font-medium tracking-wide text-[#cba451]"
            >
              <a
                href="/"
                className="transition-colors hover:text-[#f3e6cf]"
              >
                Home
              </a>
              <span className="text-[#cba451]/60">|</span>
              <span className="text-[#cba451]">Contact Us</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.2, ease: easeCurve }}
              className="mb-6 font-serif text-5xl sm:text-6xl lg:text-[76px] font-normal leading-[1.06] tracking-tight text-[#f3e6cf]"
            >
              Contact Us
            </motion.h1>

            {/* Gold Divider Line - animated expand */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.45, ease: easeCurve }}
              style={{ originX: 0 }}
              className="mb-8 h-[2px] w-[72px] bg-[#cba653]"
            />

            {/* Description Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.55, ease: easeCurve }}
              className="max-w-[540px] text-base sm:text-lg lg:text-[19px] leading-[1.7] text-[#c6b69b] font-normal"
            >
              Let's start planning a personalized culinary experience crafted around you.
            </motion.p>
          </div>

          {/* Right Curved Arch Image Container with Right-Edge Gold Ornament */}
          <div className="relative z-10 lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[640px]">

              {/* Arched Image Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.95, delay: 0.25, ease: easeCurve }}
                className="relative w-full h-[380px] sm:h-[460px] lg:h-[540px] xl:h-[560px] overflow-hidden rounded-tl-[160px] sm:rounded-tl-[220px] lg:rounded-tl-[260px] border-t border-l border-[#cba653]/40 shadow-2xl bg-[#14120e] group"
              >
                <motion.img
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.7, ease: easeCurve }}
                  src="/image/magnific_luxury-hospitality-contac_vuGCVnJa47.webp"
                  alt="Luxury hospitality reception desk with guest reservations book"
                  className="h-full w-full object-cover object-center cursor-pointer"
                  loading="eager"
                />
                {/* Subtle Ambient Vignette Overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
              </motion.div>

              {/* Exact Gold Flower Ornament Line Asset - Mounted on the Right Edge of the Image */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.6, ease: easeCurve }}
                className="pointer-events-none absolute top-4 bottom-4 right-0 translate-x-1/2 z-20 flex items-center justify-center"
              >
                <img
                  src="/image/ornament-flower.webp"
                  alt=""
                  aria-hidden="true"
                  className="h-[92%] w-auto object-contain drop-shadow-md"
                />
              </motion.div>

            </div>
          </div>

        </div>
      </div>

      {/* Gold Divider Line where next section starts */}
      <div className="w-full h-[1px] bg-gradient-to-r from-[#cba653]/10 via-[#cba653]/55 to-[#cba653]/10" />
    </section>
  );
};

export default HeroContact;