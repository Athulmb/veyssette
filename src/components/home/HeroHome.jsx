import React from "react";
import { Sparkles } from "lucide-react";
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

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: easeCurve,
    },
  },
};

const HeroHome = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#0a0907] text-[#f4ead5]">
      {/* Subtle ambient golden glows in the background */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.16, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#cba451]/10 blur-[130px]"
      />
      <div className="pointer-events-none absolute -bottom-40 right-0 h-[450px] w-[450px] rounded-full bg-[#cba451]/5 blur-[100px]" />

      {/* Container with outer Left & Right borders (border-x) matching header max-width */}
      <div className="mx-auto max-w-[1920px] border-x border-[#cba451]/30">
        <div className="grid min-h-[750px] grid-cols-1 lg:grid-cols-[52%_48%]">

          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center px-8 py-12 sm:px-12 lg:px-16 lg:py-16"
          >

            {/* Eyebrow */}
            <motion.div variants={itemVariants} className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-[#cba451] animate-ping" />
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#cba451]">
                Luxury Personal Chef Experience
              </p>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="mt-6 max-w-[700px] font-serif text-4xl leading-[1.15] text-[#f3eee3] sm:text-5xl lg:text-[62px]"
            >
              Elevated Dining,
              <br />
              <span className="italic text-[#e5c178]">Crafted Around You</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-[620px] text-base leading-[1.7] text-[#c5bcad] sm:text-lg"
            >
              Experience restaurant-quality cuisine in the comfort of your home with
              personalized menus, seasonal ingredients, and unforgettable culinary
              moments tailored to your lifestyle.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                href="/book-a-chef"
                className="luxury-btn flex h-[52px] items-center justify-center rounded-md bg-[#d8b065] px-7 text-sm font-semibold text-[#14120e] shadow-lg shadow-[#cba451]/20"
              >
                Book A Private Experience
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                href="/services"
                className="luxury-btn flex h-[52px] items-center justify-center rounded-md border border-[#cba451]/60 px-7 text-sm font-semibold text-[#f3eee3] hover:border-[#cba451] hover:bg-[#cba451]/10"
              >
                Explore Our Services
              </motion.a>
            </motion.div>

            {/* Trust / Social Proof Section */}
            <motion.div
              variants={itemVariants}
              className="mt-12 flex items-center gap-6"
            >
              {/* Avatars */}
              <div>
                <p className="mb-2.5 text-xs text-[#b8ad9e]">
                  Trusted by clients in
                </p>

                <div className="flex items-center">
                  {[
                    "photo-1500648767791-00dcc994a43e",
                    "photo-1506794778202-cad84cf45f1d",
                    "photo-1534528741775-53994a69daeb",
                    "photo-1507003211169-0a1dd7228f2d",
                  ].map((photo, index) => (
                    <motion.img
                      key={photo}
                      whileHover={{ scale: 1.25, zIndex: 10 }}
                      transition={{ duration: 0.25 }}
                      src={`https://images.unsplash.com/${photo}?auto=format&fit=crop&w=100&h=100&q=80`}
                      alt={`Client ${index + 1}`}
                      className={`h-10 w-10 cursor-pointer rounded-full border-2 border-[#0a0907] object-cover ${
                        index > 0 ? "-ml-2.5" : ""
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Small Vertical Divider */}
              <div className="mt-4 h-12 w-[1px] bg-[#cba451]/30" />

              {/* Client Count */}
              <div className="mt-4 flex flex-col justify-center">
                <span className="font-serif text-lg tracking-wider text-[#cba451]">
                  100+
                </span>
                <span className="font-serif text-base italic text-[#c5bcad]">
                  Happy clients
                </span>
              </div>

            </motion.div>
          </motion.div>

          {/* Right Image Container */}
          <div className="group relative min-h-[450px] w-full overflow-hidden border-t border-[#cba451]/30 lg:border-t-0 lg:border-l lg:border-[#cba451]/30">
            <motion.img
              initial={{ scale: 1.08, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: easeCurve }}
              src="/image/magnific_1sXK7HRr4rr.webp"
              alt="Personal chef"
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            {/* Subtle dark vignette */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0907]/60 via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:to-[#0a0907]/20" />

            {/* Floating Luxury Quality Badge with smooth Framer Motion float */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: [0, -8, 0],
              }}
              transition={{
                opacity: { duration: 0.8, delay: 0.5 },
                y: {
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                },
              }}
              className="absolute bottom-8 left-8 z-10 flex items-center gap-3 rounded-full border border-[#cba451]/40 bg-[#14120e]/90 px-5 py-3 shadow-2xl backdrop-blur-md"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#cba451]/20 text-[#cba451]">
                <Sparkles size={16} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold tracking-wider text-[#f3eee3]">Michelin-Level Artistry</span>
                <span className="text-[10px] uppercase tracking-widest text-[#cba451]">Bespoke Fine Dining</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroHome;