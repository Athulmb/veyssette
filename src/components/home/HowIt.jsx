import React from "react";
import {
  ClipboardList,
  CalendarDays,
  ChefHat,
  Heart,
} from "lucide-react";
import { motion } from "framer-motion";

const easeCurve = [0.16, 1, 0.3, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: easeCurve,
    },
  },
};

const HowIt = () => {
  const steps = [
    {
      number: "01.",
      title: "Book",
      description:
        "Choose your date and tell us about your preferences.",
      icon: ClipboardList,
    },
    {
      number: "02.",
      title: "Plan",
      description:
        "We create a custom menu just for you.",
      icon: CalendarDays,
    },
    {
      number: "03.",
      title: "Cook",
      description:
        "We cook in your kitchen while you relax.",
      icon: ChefHat,
    },
    {
      number: "04.",
      title: "Enjoy",
      description:
        "Savor every bite and we handle the cleanup.",
      icon: Heart,
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#0d0c0a] px-5 py-20 text-[#f2e6d0] sm:px-8 lg:py-24">

      {/* Section Heading with Framer Motion */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.85, ease: easeCurve }}
        className="mb-20 text-center"
      >
        {/* Decorative Ornament with subtle floating pulse */}
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="mb-3 flex justify-center text-[#cbaa63]"
        >
          <svg
            width="140"
            height="34"
            viewBox="0 0 140 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M70 28 C60 10 38 5 17 11 C7 14 3 22 12 22 C20 22 18 13 11 16 M70 28 C80 10 102 5 123 11 C133 14 137 22 128 22 C120 22 122 13 129 16 M70 28 C64 20 65 12 70 5 C75 12 76 20 70 28 M70 14 C61 9 61 1 70 3 C79 1 79 9 70 14"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>

        <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#cbaa63]">
          How It Works
        </p>

        <h2 className="mt-8 font-serif text-4xl leading-tight sm:text-5xl lg:text-[68px]">
          Simple, Personal &amp; <span className="italic text-[#e5c178]">Seamless</span>
        </h2>
      </motion.div>

      {/* Steps with Framer Motion Stagger */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto grid max-w-[1700px] grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0"
      >
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <motion.div
              key={step.number}
              variants={stepVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="group relative flex flex-col items-center text-center cursor-pointer"
            >
              {/* Icon Circle and Connector */}
              <div className="relative flex w-full items-center justify-center">

                <motion.div
                  whileHover={{ scale: 1.12, rotate: 6 }}
                  transition={{ type: "spring", stiffness: 350, damping: 15 }}
                  className="flex h-[106px] w-[106px] items-center justify-center rounded-full border border-[#6a542d] bg-[#14120e] text-[#cbaa63] shadow-xl transition-all duration-300 group-hover:border-[#cbaa63] group-hover:shadow-[0_0_25px_rgba(203,170,99,0.3)]"
                >
                  <Icon
                    size={46}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                </motion.div>

                {/* Animated Connecting Line on desktop */}
                {index !== steps.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.2, ease: easeCurve }}
                    style={{ originX: 0 }}
                    className="absolute left-[calc(50%+65px)] hidden h-[1px] w-[calc(100%-130px)] bg-gradient-to-r from-[#6a542d] via-[#cbaa63]/50 to-[#6a542d] lg:block"
                  />
                )}
              </div>

              {/* Step Title */}
              <h3 className="mt-10 font-serif text-[30px] text-[#e9dcc4] transition-colors duration-300 group-hover:text-[#cbaa63]">
                {step.number} {step.title}
              </h3>

              {/* Description */}
              <p className="mt-4 max-w-[300px] text-[18px] leading-[1.8] text-[#b9ad9b]">
                {step.description}
              </p>
            </motion.div>
          );
        })}

      </motion.div>
    </section>
  );
};

export default HowIt;