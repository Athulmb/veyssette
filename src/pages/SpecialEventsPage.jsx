import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Flower2,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import PageTransition from "../components/comen/PageTransition";

const easeCurve = [0.16, 1, 0.3, 1];

const eventTypes = [
  {
    title: "Anniversaries & Milestone Birthdays",
    guests: "2 – 40 Guests",
    desc: "Mark landmark occasions with an exquisite multi-course tasting menu, vintage champagne sabering, and bespoke celebration desserts.",
    image: "/image/magnific_elegant-private-celebrati_nTlcF1pYQD-e1780268303514.webp",
  },
  {
    title: "Cocktail Receptions & Passed Hors D'oeuvres",
    guests: "15 – 75 Guests",
    desc: "An ambient cocktail party featuring artful passed canapés, live chef carving stations, raw seafood bars, and craft mixology.",
    image: "/image/magnific_luxury-wine-pouring-scene_LUIO0aCswO-ro4x3f0arisct0u3klec9bjd9brjly32giqsmd2oeo.webp",
  },
  {
    title: "Holiday Gatherings & Feasts",
    guests: "6 – 35 Guests",
    desc: "Spend holidays with your guests, not in the kitchen. Chef Veyssette prepares elevated holiday classics with French technique.",
    image: "/image/magnific_luxury-gourmet-meat-dish-_ubWJi8TQLD-ro1puap9z005m8wttqty8encyvy19qdtp24w9r8mzc.webp",
  },
  {
    title: "Executive & Corporate Dinners",
    guests: "8 – 30 Guests",
    desc: "Impress clients, investors, or leadership teams with Michelin-level culinary execution, confidentiality, and polished discrete service.",
    image: "/image/magnific_luxury-gourmet-dining-tab_ONu4VlEynm.webp",
  },
];

const logisticsSteps = [
  {
    step: "01",
    title: "Vision & Menu Design",
    desc: "We discuss your celebration concept, guest count, dietary nuances, and beverage preferences to build a bespoke culinary roadmap.",
  },
  {
    step: "02",
    title: "Kitchen & Venue Assessment",
    desc: "Chef Adrian reviews equipment, table layout, stemware needs, and service flow to guarantee an effortless experience on event day.",
  },
  {
    step: "03",
    title: "Flawless Execution",
    desc: "Our team arrives early with all ingredients, cookware, and professional waitstaff to coordinate seamless course pacing.",
  },
  {
    step: "04",
    title: "Spotless Teardown",
    desc: "Every plate is cleared, cookware scrubbed, surfaces sanitized, and rubbish removed. You simply celebrate with your guests.",
  },
];

const SpecialEventsPage = () => {
  return (
    <PageTransition>
      <main className="min-h-screen bg-[#0a0907] text-[#f3eee3]">
      {/* HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-[#0e0c0a] text-[#f3e6cf] border-b border-[#2a241b]">
        {/* Background Flower Watermark */}
        <motion.div
          animate={{ rotate: [0, 6, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
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
                <Link to="/" className="transition-colors hover:text-[#f3e6cf]">
                  Home
                </Link>
                <span className="text-[#cba451]/60">|</span>
                <Link to="/services" className="transition-colors hover:text-[#f3e6cf]">
                  Services
                </Link>
                <span className="text-[#cba451]/60">|</span>
                <span className="text-[#cba451]">Special Events</span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.2, ease: easeCurve }}
                className="mb-6 font-serif text-5xl sm:text-6xl lg:text-[76px] font-normal leading-[1.06] tracking-tight text-[#f3e6cf]"
              >
                Special Events
              </motion.h1>

              {/* Gold Divider Line */}
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
                Extraordinary celebrations orchestrated with culinary excellence.
                Anniversaries, milestone birthdays, cocktail galas, and holiday feasts
                executed with effortless grandeur.
              </motion.p>
            </div>

            {/* Right Curved Arch Image Container */}
            <div className="relative z-10 lg:col-span-6 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[640px]">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ duration: 0.95, delay: 0.25, ease: easeCurve }}
                  className="relative w-full h-[380px] sm:h-[460px] lg:h-[540px] xl:h-[560px] overflow-hidden rounded-tl-[160px] sm:rounded-tl-[220px] lg:rounded-tl-[260px] border-t border-l border-[#cba653]/40 shadow-2xl bg-[#14120e] group"
                >
                  <motion.img
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.7, ease: easeCurve }}
                    src="/image/magnific_elegant-group-of-guests-r_vuAgZlia47-ro5e26lairsrqf02txad2mmxohvtsvzhjuhdo3gt3s.webp"
                    alt="Guests celebrating special event with private chef"
                    className="h-full w-full object-cover object-center cursor-pointer"
                    loading="eager"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
                </motion.div>

                {/* Right Edge Gold Flower Ornament */}
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

        {/* Gold Bottom Border */}
        <div className="w-full h-[1px] bg-gradient-to-r from-[#cba653]/10 via-[#cba653]/55 to-[#cba653]/10" />
      </section>

      {/* SECTION 1: EVENT FORMATS */}
      <section className="relative px-6 py-20 md:px-12 lg:px-20 lg:py-28 max-w-[1700px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#cba451] mb-4">
            <Sparkles size={14} />
            <span>Unrivaled Hospitality</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#f3eee3] font-normal">
            Bespoke Event Experiences
          </h2>
          <div className="mx-auto my-4 h-[2px] w-[60px] bg-[#cba653]" />
          <p className="text-sm sm:text-base text-[#b8ad9e]">
            Tailored formats configured to match the scale, intimacy, and style of your gathering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {eventTypes.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: easeCurve }}
              className="rounded-2xl border border-[#2e261a] bg-[#14120e] overflow-hidden group hover:border-[#cba451]/60 transition-all flex flex-col sm:flex-row"
            >
              <div className="sm:w-1/2 h-64 sm:h-auto overflow-hidden relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute top-4 left-4 rounded-full bg-[#0a0907]/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#cba451] border border-[#cba451]/30">
                  {event.guests}
                </div>
              </div>

              <div className="sm:w-1/2 p-7 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl text-[#f3eee3] mb-3 group-hover:text-[#cba451] transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#b8ad9e] leading-relaxed mb-6">
                    {event.desc}
                  </p>
                </div>

                <Link
                  to="/book"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#cba451] group-hover:translate-x-1 transition-transform"
                >
                  <span>Plan This Event</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 2: 4-STEP LOGISTICS */}
      <section className="relative px-6 py-20 md:px-12 lg:px-20 bg-[#0e0c0a] border-y border-[#2a241b]">
        <div className="max-w-[1500px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#cba451] block mb-2">
              Flawless Process
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#f3eee3]">
              How We Coordinate Your Event
            </h2>
            <div className="mx-auto my-4 h-[2px] w-[60px] bg-[#cba653]" />
            <p className="text-sm sm:text-base text-[#b8ad9e]">
              From initial sketch to the final champagne toast, every detail is meticulously orchestrated.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {logisticsSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: easeCurve }}
                className="p-8 rounded-2xl border border-[#2e261a] bg-[#14120e] relative hover:border-[#cba451]/50 transition-colors"
              >
                <span className="font-serif text-5xl font-bold text-[#cba451]/20 block mb-4">
                  {step.step}
                </span>
                <h4 className="font-serif text-xl text-[#f3eee3] mb-2">{step.title}</h4>
                <p className="text-xs text-[#b8ad9e] leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: INQUIRY BANNER */}
      <section className="px-6 py-24 md:px-12 lg:px-20 max-w-[1500px] mx-auto">
        <div className="rounded-2xl border border-[#cba451]/40 bg-gradient-to-r from-[#17140f] via-[#1c1812] to-[#17140f] p-8 sm:p-14 text-center">
          <h3 className="font-serif text-3xl sm:text-4xl text-[#f3eee3] mb-4">
            Let's Make Your Next Event Remarkable
          </h3>
          <p className="max-w-2xl mx-auto text-base text-[#b8ad9e] mb-8 leading-relaxed">
            Reserve your date with Chef Adrian Veyssette. We handle full menu design, ingredient
            procurement, beverage pairing, and service staff.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/book"
              className="luxury-btn flex items-center gap-2 h-14 px-8 rounded-lg bg-[#cbaa63] text-sm font-bold text-[#15130f] hover:scale-105 transition-transform"
            >
              <span>Inquire About Event Dates</span>
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="flex items-center gap-2 h-14 px-8 rounded-lg border border-[#cba451]/50 bg-transparent text-sm font-semibold text-[#f3eee3] hover:bg-[#cba451]/10 transition-colors"
            >
              <span>Contact Concierge Desk</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
    </PageTransition>
  );
};

export default SpecialEventsPage;
