import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimationControls } from "framer-motion";

const easeCurve = [0.22, 1, 0.36, 1];

// Exactly the 3 original client cards
const initialTestimonials = [
  {
    id: "t1",
    quote:
      "Our anniversary dinner was remarkable, akin to a Michelin-star restaurant, with exceptional service and flavors.",
    name: "Olivia T.",
    occasion: "Special Occasion Dinner",
    image: "/image/avatar-2-ro2xbmbf4ewt8kf5diu71tsq0oyj6vgsy6axl7ic20.webp",
  },
  {
    id: "t2",
    quote:
      "Every detail felt thoughtfully curated. From the presentation to the flavors, the entire evening was elegant and intimate.",
    name: "Jessica M.",
    occasion: "Private Dinner",
    image: "/image/avatar-1.webp",
  },
  {
    id: "t3",
    quote:
      "Professional, discreet and incredibly talented. Veyssette created a dining experience that impressed every guest at our event.",
    name: "Michael A.",
    occasion: "Private Event Experience",
    image: "/image/avatar-3-ro5e1g9h0v0ya179n2os8vihr2yvewra26aqxzzdzc.webp",
  },
];

// Static persistent buffer of 4 cycles (12 cards) - completely avoids DOM remounts and state re-renders
const carouselCards = [
  ...initialTestimonials,
  ...initialTestimonials,
  ...initialTestimonials,
  ...initialTestimonials,
];

const Experences = () => {
  const [activeDot, setActiveDot] = useState(0);
  const controls = useAnimationControls();
  const firstCardRef = useRef(null);

  useEffect(() => {
    let isMounted = true;

    const runContinuousCarousel = async () => {
      // Small pause on mount to ensure firstCardRef width is painted
      await new Promise((resolve) => setTimeout(resolve, 80));

      let stepIndex = 0;

      while (isMounted) {
        if (!firstCardRef.current) {
          await new Promise((resolve) => setTimeout(resolve, 100));
          continue;
        }

        const cardWidth = firstCardRef.current.offsetWidth;
        stepIndex += 1;

        // Smooth 1.5s forward slide to next position (no reset, zero blink!)
        await controls.start({
          x: -stepIndex * cardWidth,
          transition: { duration: 1.5, ease: easeCurve },
        });

        if (!isMounted) break;

        // Update active indicator dot (0 -> 1 -> 2 -> 0)
        setActiveDot((prev) => (prev + 1) % initialTestimonials.length);

        // When 1 full cycle of 3 cards finishes, reset x to 0 seamlessly without any DOM remount
        if (stepIndex === initialTestimonials.length) {
          controls.set({ x: 0 });
          stepIndex = 0;
        }

        // Brief settling moment before the next card moves
        await new Promise((resolve) => setTimeout(resolve, 400));
      }
    };

    runContinuousCarousel();

    return () => {
      isMounted = false;
    };
  }, [controls]);

  return (
    <section className="relative w-full overflow-hidden bg-[#0a0907] px-6 py-16 text-[#f3eee3] md:px-12 lg:px-16 lg:py-24">
      <div className="mx-auto grid max-w-[1700px] grid-cols-1 items-start gap-12 lg:grid-cols-[0.75fr_2.25fr] lg:gap-16">

        {/* Left Heading */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-start"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#cba451]">
            What Our Clients Say
          </p>

          <h2 className="max-w-[450px] font-serif text-4xl leading-[1.15] text-[#f3eee3] sm:text-5xl lg:text-[56px]">
            Experiences That Speak <br />
            <span className="italic text-[#e5c178]">For Themselves</span>
          </h2>
        </motion.div>

        {/* Right Testimonial Stream - Moves continuously without any blink or glitch */}
        <div className="relative w-full overflow-hidden">
          <div className="overflow-hidden py-3">
            <motion.div
              animate={controls}
              className="flex"
            >
              {carouselCards.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  ref={index === 0 ? firstCardRef : null}
                  className="w-full sm:w-[360px] lg:w-[380px] shrink-0 px-3"
                >
                  <article className="luxury-card flex h-[460px] w-full flex-col justify-between rounded-xl border border-[#2a241b] bg-[#14120e] p-8 shadow-lg transition-colors duration-300 hover:border-[#cba451]/60">
                    <div>
                      {/* Quote Icon */}
                      <div
                        className="mb-4 font-serif text-5xl leading-[0.8] text-[#cba451]"
                        aria-hidden="true"
                      >
                        “
                      </div>

                      {/* Review Text - Fixed height for perfect horizontal alignment */}
                      <div className="h-[125px] overflow-hidden flex items-start">
                        <p className="text-[15px] sm:text-[16px] leading-[1.75] text-[#b8ad9e]">
                          {item.quote}
                        </p>
                      </div>
                    </div>

                    {/* Customer Details - Uniform alignment on all cards */}
                    <div className="pt-4">
                      {/* Divider Line */}
                      <div className="mb-5 h-[1px] w-8 bg-[#cba451]/50" />

                      <img
                        src={item.image}
                        alt={item.name}
                        loading="lazy"
                        className="mb-3.5 h-14 w-14 rounded-full object-cover border border-[#cba451]/40 shadow-md"
                      />

                      <h3 className="font-serif text-2xl italic text-[#cba451]">
                        {item.name}
                      </h3>

                      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#b8ad9e]">
                        {item.occasion}
                      </p>
                    </div>
                  </article>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Indicator Dots */}
          <div className="mt-8 flex justify-center gap-2.5">
            {initialTestimonials.map((_, dot) => (
              <div
                key={dot}
                aria-label={`Testimonial ${dot + 1}`}
                className={`h-2.5 rounded-full transition-all duration-500 ${
                  activeDot === dot
                    ? "w-8 bg-[#cba451]"
                    : "w-2.5 bg-[#2a241b]"
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