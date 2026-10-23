import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Flower2, Home, Utensils, Calendar } from "lucide-react";
import PageTransition from "../components/comen/PageTransition";

const easeCurve = [0.16, 1, 0.3, 1];

const NotFoundPage = () => {
  return (
    <PageTransition>
      <main className="relative min-h-[85vh] w-full overflow-hidden bg-[#0a0907] px-6 py-24 text-[#f3eee3] flex items-center justify-center">
      {/* Background Floral Watermark */}
      <motion.div
        animate={{ rotate: [0, 8, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.035] text-[#cba653]"
      >
        <Flower2 size={700} strokeWidth={0.7} />
      </motion.div>

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Animated 404 Accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.85, ease: easeCurve }}
          className="relative inline-block mb-4"
        >
          <span className="font-serif text-[110px] sm:text-[150px] lg:text-[180px] font-bold leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#e8cf96] via-[#cba451] to-[#6d5523] select-none drop-shadow-2xl">
            404
          </span>
          <div className="absolute inset-0 blur-3xl bg-[#cba451]/10 -z-10" />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.15, ease: easeCurve }}
          className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#f3eee3] font-normal mb-4"
        >
          L'Entrée Introuvable
        </motion.h1>

        {/* Gold Divider Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: easeCurve }}
          className="mx-auto my-5 h-[2px] w-[70px] bg-[#cba653]"
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.35, ease: easeCurve }}
          className="text-base sm:text-lg text-[#b8ad9e] leading-relaxed mb-10 max-w-lg mx-auto"
        >
          The page or culinary selection you are seeking has been moved, renamed,
          or belongs to a past private tasting vintage.
        </motion.p>

        {/* Quick Action Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.45, ease: easeCurve }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            to="/"
            className="luxury-btn flex items-center gap-2 h-13 px-7 rounded-lg bg-[#cbaa63] text-sm font-bold text-[#15130f] shadow-lg shadow-[#cbaa63]/20 hover:scale-105 transition-transform"
          >
            <Home size={16} />
            <span>Return to Home</span>
          </Link>

          <Link
            to="/menu"
            className="flex items-center gap-2 h-13 px-7 rounded-lg border border-[#cba451]/50 bg-[#14120e] text-sm font-semibold text-[#f3eee3] hover:border-[#cba451] hover:text-[#cba451] transition-all"
          >
            <Utensils size={16} />
            <span>Explore Menu</span>
          </Link>

          <Link
            to="/book"
            className="flex items-center gap-2 h-13 px-7 rounded-lg border border-[#3b3020] bg-[#14120e] text-sm font-semibold text-[#c6b69b] hover:border-[#cba451]/50 hover:text-white transition-all"
          >
            <Calendar size={16} />
            <span>Book A Chef</span>
          </Link>
        </motion.div>
      </div>
    </main>
    </PageTransition>
  );
};

export default NotFoundPage;
