import React from "react";
import { motion } from "framer-motion";

const easeCurve = [0.16, 1, 0.3, 1];

const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "300+", label: "Unique Menus" },
  { value: "100+", label: "Happy Clients" },
];

const PassionFor = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#0a0907] px-6 py-16 text-[#f3eee3] md:px-12 lg:px-16 lg:py-24">
      <div className="mx-auto grid max-w-[1700px] grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease: easeCurve }}
          className="flex flex-col justify-center"
        >
          {/* Eyebrow */}
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#cba451]">
            About Us
          </p>

          {/* Title */}
          <h2 className="max-w-[650px] font-serif text-4xl leading-[1.15] text-[#f3eee3] sm:text-5xl lg:text-[58px]">
            Passion For Food.
            <br />
            <span className="italic text-[#e5c178]">Commitment To You</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-6 max-w-[620px] text-base leading-[1.7] text-[#b8ad9e] sm:text-lg">
            We believe that every meal is an opportunity to create memorable
            moments. Our mission is to bring people together through exceptional
            cuisine and personalized service.
          </p>

          {/* Statistics with Framer Motion stagger */}
          <div className="mt-10 grid max-w-[550px] grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 * i, ease: easeCurve }}
                whileHover={{ y: -4 }}
                className="cursor-default"
              >
                <h3 className="font-serif text-3xl font-normal text-[#cba451] sm:text-4xl">
                  {stat.value}
                </h3>
                <p className="mt-1 font-serif text-sm italic text-[#b8ad9e] sm:text-base">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-10">
            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              href="/about"
              className="luxury-btn inline-flex h-[52px] items-center justify-center rounded-md bg-[#d8b065] px-8 text-sm font-semibold text-[#14120e] shadow-lg shadow-[#cba451]/15"
            >
              Learn More About Us
            </motion.a>
          </div>
        </motion.div>

        {/* Right Image Grid with Framer Motion */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease: easeCurve }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6"
        >

          {/* Left Column (2 Stacked Images) */}
          <div className="flex flex-col gap-5 sm:gap-6">
            {/* Top Image: Gourmet Meat Dish */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="luxury-card overflow-hidden rounded-xl border border-[#2a241b] bg-[#14120e]"
            >
              <img
                src="/image/magnific_luxury-gourmet-meat-dish-_ubWJi8TQLD-ro1puapg29vhdb027xri59p48cr672ki4llkvyzvx4.webp"
                alt="Plated gourmet dish"
                className="h-[230px] w-full object-cover transition-transform duration-700 ease-out hover:scale-110 sm:h-[260px]"
              />
            </motion.div>

            {/* Bottom Image: Chef Preparing Dish */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="luxury-card overflow-hidden rounded-xl border border-[#2a241b] bg-[#14120e]"
            >
              <img
                src="/image/magnific_professional-chef-careful_74f0BVaJAL.webp"
                alt="Chef carefully garnishing a gourmet plate"
                className="h-[230px] w-full object-cover transition-transform duration-700 ease-out hover:scale-110 sm:h-[260px]"
              />
            </motion.div>
          </div>

          {/* Right Column (1 Tall Image: Dining Setup) */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="luxury-card overflow-hidden rounded-xl border border-[#2a241b] bg-[#14120e]"
          >
            <img
              src="/image/magnific_luxury-gourmet-dining-tab_ONu4VlEynm.webp"
              alt="Candlelit luxury gourmet dining experience"
              className="h-full min-h-[380px] w-full object-cover transition-transform duration-700 ease-out hover:scale-110 sm:min-h-[540px]"
            />
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default PassionFor;