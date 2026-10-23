import React from "react";
import { motion } from "framer-motion";

const easeCurve = [0.16, 1, 0.3, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeCurve,
    },
  },
};

const OurServices = () => {
  const services = [
    {
      title: "Private Dinners",
      description:
        "Intimate and exclusive dinners prepared just for you and your guests.",
      image:
        "/image/magnific_luxury-gourmet-dining-tab_ONu4VlEynm.webp",
    },
    {
      title: "Weekly Meal Prep",
      description:
        "Healthy, personalized meals prepared weekly to save time and meet needs.",
      image:
        "/image/magnific_luxury-gourmet-prepared-m_WMgCsI7cXe-ro1qb09zgyvo0on08yv6k6ud5hky40q1brnneugod4.webp",
    },
    {
      title: "Special Events",
      description:
        "Custom menus for birthdays and special celebrations.",
      image:
        "/image/magnific_elegant-group-of-guests-r_vuAgZlia47-1024x765.webp",
    },
    {
      title: "Dietary Needs",
      description:
        "Menus adapted to dietary restrictions and specific preferences.",
      image:
        "/image/magnific_overhead-view-of-a-curate_Vd7FUKVMMU-1-e1780267900616-roaej2cafnjgu7x2lqjyonvm01kvmv5n4fd2u4h3yw.webp",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#0a0907] px-6 py-16 text-[#f3eee3] md:px-12 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-[1700px]">
        
        {/* Top Header Section with Framer Motion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: easeCurve }}
          className="grid grid-cols-1 items-start gap-6 lg:grid-cols-2 lg:gap-16"
        >
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#cba451]">
              Our Services
            </p>
            <h2 className="font-serif text-4xl leading-[1.15] text-[#f3eee3] sm:text-5xl lg:text-[56px]">
              Culinary Experiences Made
              <br />
              <span className="italic text-[#e5c178]">For You</span>
            </h2>
          </div>

          <div className="lg:pt-8">
            <p className="max-w-[580px] text-base leading-[1.7] text-[#b8ad9e] sm:text-lg">
              From intimate dinners to special celebrations, we offer a variety of
              services designed to make every occasion unique and stress-free. Our
              goal is to ensure that each event is a memorable experience filled with
              joy.
            </p>
          </div>
        </motion.div>

        {/* 4 Cards Grid Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="group flex flex-col cursor-pointer"
            >
              {/* Image Container with Border and Rounded Corners */}
              <div className="luxury-card overflow-hidden rounded-xl border border-[#2a241b] bg-[#14120e]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-[210px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 sm:h-[220px]"
                />
              </div>

              {/* Title */}
              <h3 className="mt-5 font-serif text-2xl font-normal text-[#f3eee3] transition-colors duration-300 group-hover:text-[#cba451]">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-2.5 text-sm leading-relaxed text-[#b8ad9e]">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 flex justify-center"
        >
          <motion.a
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.95, y: 2 }}
            transition={{ duration: 0.15 }}
            href="/services"
            className="luxury-btn flex h-[52px] items-center justify-center rounded-md bg-[#d8b065] px-8 text-sm font-semibold text-[#14120e] shadow-lg shadow-[#cba451]/15"
          >
            View All Services
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

export default OurServices;