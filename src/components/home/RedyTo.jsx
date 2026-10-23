
import React from "react";
import { motion } from "framer-motion";

const easeCurve = [0.16, 1, 0.3, 1];

export const RedyTo = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#0d0c0a] px-4 py-10 sm:px-6 md:px-8 md:py-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: easeCurve }}
        className="relative flex min-h-[300px] items-center justify-center overflow-hidden rounded-2xl border border-[#cba451]/30 bg-cover bg-center px-5 py-16 shadow-[0_20px_50px_rgba(0,0,0,0.6)] sm:min-h-[360px] md:min-h-[450px]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1515003197210-e0cd7184f8b5?auto=format&fit=crop&w=2000&q=85')",
        }}
      >
        {/* Dark overlay with subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/70 to-black/80" />

        {/* Ambient gold glow */}
        <div className="pointer-events-none absolute -bottom-20 left-1/2 h-60 w-96 -translate-x-1/2 rounded-full bg-[#cba451]/15 blur-[90px]" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: easeCurve }}
            className="mb-8 font-serif text-3xl font-medium leading-tight text-[#f4e8cf] sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Ready To Enjoy An Unforgettable
            <br className="hidden md:block" />{" "}
            <span className="italic text-[#e5c178]">Culinary Experience?</span>
          </motion.h2>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: easeCurve }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            href="/contact"
            className="luxury-btn inline-flex items-center justify-center rounded-lg bg-[#cba65b] px-10 py-4 text-base font-semibold text-black shadow-xl shadow-[#cba451]/20 sm:px-14 sm:text-lg cursor-pointer"
          >
            Book Your Chef
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default RedyTo;
