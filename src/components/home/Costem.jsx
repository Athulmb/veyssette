import React from "react";
import { ClipboardList, Utensils, Home, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const Features = () => {
  const features = [
    {
      icon: ClipboardList,
      title: "Custom\nMenus",
      description: "Tailored to your tastes, dietary needs and lifestyle.",
    },
    {
      icon: Utensils,
      title: "Premium\nIngredients",
      description: "We use fresh, seasonal and high-quality ingredients.",
    },
    {
      icon: Home,
      title: "In-Home\nExperience",
      description: "Relax and enjoy as we prepare your kitchen.",
    },
    {
      icon: Sparkles,
      title: "Impeccable\nService",
      description: "Professional, discreet and dedicated to every detail.",
    },
  ];

  return (
    <section className="w-full bg-[#0a0907] px-4 py-12 sm:px-8 sm:py-16">
      {/* Curved Container Wrapper */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-[1920px] rounded-[50px] bg-[#14120e] px-6 py-16 sm:rounded-[100px] sm:px-12 sm:py-20 lg:rounded-[180px] lg:px-16 lg:py-24 border border-[#cba451]/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className={`group flex flex-col items-center px-4 text-center sm:px-6 cursor-pointer ${
                  index !== features.length - 1
                    ? "lg:border-r lg:border-[#cba451]/20"
                    : ""
                }`}
              >
                {/* Gold Icon with hover spring */}
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#cba451]/10 text-[#cba451] transition-colors duration-300 group-hover:bg-[#cba451]/20 group-hover:text-[#f3eee3]"
                >
                  <Icon size={38} strokeWidth={1.6} />
                </motion.div>

                {/* Title */}
                <h3 className="whitespace-pre-line font-serif text-2xl font-normal leading-tight text-[#f3eee3] sm:text-3xl transition-colors duration-300 group-hover:text-[#cba451]">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-4 max-w-[240px] text-sm leading-relaxed text-[#b8ad9e] sm:text-base">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Features;