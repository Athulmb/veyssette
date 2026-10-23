import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Flower2,
  Sparkles,
  Wine,
  Utensils,
  CheckCircle,
  ShieldCheck,
  ArrowRight,
  Star,
} from "lucide-react";
import PageTransition from "../components/comen/PageTransition";

const easeCurve = [0.16, 1, 0.3, 1];

const sampleCourses = [
  {
    course: "Course I — Amuse-Bouche",
    dish: "Hokkaido Scallop Crudo",
    details: "Finger lime caviar, compressed granny smith apple, and cold-pressed yuzu emulsion.",
  },
  {
    course: "Course II — Starter",
    dish: "Hand-Torn Pugliese Burrata",
    details: "Heirloom garden carpaccio, 25-year aged balsamic pearls, and micro basil crisps.",
  },
  {
    course: "Course III — Seafood",
    dish: "Pan-Roasted Wild Atlantic Salmon",
    details: "Saffron arborio risotto, braised baby fennel, and citrus beurre noisette.",
  },
  {
    course: "Course IV — Main",
    dish: "Center-Cut Filet Mignon de Boeuf",
    details: "Perigord black truffle purée, glazed heritage carrots, and 48-hour bone marrow jus.",
  },
  {
    course: "Course V — Dessert",
    dish: "Valrhona Guanaja Dark Chocolate Ganache",
    details: "Fleur de sel, raspberry reduction, and house-churned Madagascar vanilla bean gelato.",
  },
];

const packages = [
  {
    title: "Signature 3-Course",
    tag: "Intimate Classic",
    price: "$145",
    per: "per guest",
    desc: "A refined three-course seasonal journey designed for weeknight celebrations and cozy private dinners.",
    features: [
      "Custom 3-Course Menu Curation",
      "Fresh Market Ingredient Sourcing",
      "On-Site Private Preparation & Service",
      "Standard Dietary Adaptations",
      "Spotless Kitchen Sanitization",
    ],
  },
  {
    title: "Grand Tasting 5-Course",
    tag: "Most Popular",
    popular: true,
    price: "$195",
    per: "per guest",
    desc: "Our hallmark culinary experience. Balanced progression of textures, premium cuts, and tableside plating.",
    features: [
      "Amuse-Bouche + 5 Full Courses",
      "Handmade Pasta / Premium Seafood Course",
      "Prime Black Angus or Dry-Aged Beef",
      "Sommelier Wine Flight Recommendation",
      "Full Tableside Culinary Storytelling",
      "Complete Kitchen Breakdown & Cleanup",
    ],
  },
  {
    title: "Royal 7-Course Degustation",
    tag: "Michelin Prestige",
    price: "$260",
    per: "per guest",
    desc: "The ultimate culinary showcase featuring luxury provisions: Caviar, Black Truffle, and Grand Cru pairings.",
    features: [
      "Imperial Caviar & Canapé Welcome",
      "7-Course Michelin-Caliber Degustation",
      "Tableside Truffle Shaving & Finishing",
      "Dedicated Assistant / Server Included (6+ guests)",
      "Handmade Petit Fours & Artisan Chocolates",
      "Immaculate Five-Star Kitchen Turnaround",
    ],
  },
];

const PrivateDiningPage = () => {
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
                <span className="text-[#cba451]">Private Dining</span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.2, ease: easeCurve }}
                className="mb-6 font-serif text-5xl sm:text-6xl lg:text-[76px] font-normal leading-[1.06] tracking-tight text-[#f3e6cf]"
              >
                Private Dining
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
                An intimate fine dining sanctuary brought directly into your private home.
                Tailored multi-course degustation menus, personal tableside chef service,
                and impeccable culinary artistry.
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
                    src="/image/magnific_elegant-candlelit-private_LU8ABU1swO-ro5e2gxily6xa4l25jr9c2107qgv5k4j99npy51h7c.webp"
                    alt="Intimate candlelit private dining table"
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

      {/* SECTION 1: THE IN-HOME DINING ARTISTRY */}
      <section className="relative px-6 py-20 md:px-12 lg:px-20 lg:py-28 max-w-[1700px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text & 4 Pillars */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeCurve }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#cba451] mb-4">
              <Sparkles size={14} />
              <span>Bespoke Hospitality</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#f3eee3] leading-tight font-normal mb-6">
              Michelin-Caliber Dining In The Seclusion Of Home
            </h2>
            <div className="h-[2px] w-[60px] bg-[#cba653] mb-6" />
            <p className="text-base sm:text-lg text-[#b8ad9e] leading-relaxed mb-8">
              Every private dinner with Chef Adrian Veyssette is an orchestration of sensory delight.
              You never have to navigate crowded dining rooms, parking, or noisy restaurants. Instead,
              your dining table becomes the centerpiece of an unforgettable gastronomic celebration.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl border border-[#2a241b] bg-[#14120e]">
                <Utensils size={24} className="text-[#cba451] mb-3" />
                <h4 className="font-serif text-lg text-[#f3eee3] mb-1">Tailored Degustation</h4>
                <p className="text-xs text-[#b8ad9e] leading-relaxed">
                  Every dish is customized around your taste profile, dietary needs, and seasonal preferences.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[#2a241b] bg-[#14120e]">
                <Star size={24} className="text-[#cba451] mb-3" />
                <h4 className="font-serif text-lg text-[#f3eee3] mb-1">Dawn Market Sourcing</h4>
                <p className="text-xs text-[#b8ad9e] leading-relaxed">
                  Prime cuts, wild catches, and organic farm produce sourced specifically the morning of your dinner.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[#2a241b] bg-[#14120e]">
                <Wine size={24} className="text-[#cba451] mb-3" />
                <h4 className="font-serif text-lg text-[#f3eee3] mb-1">Sommelier Pairings</h4>
                <p className="text-xs text-[#b8ad9e] leading-relaxed">
                  Rare European vintages and artisanal wine flights harmonized course-by-course.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[#2a241b] bg-[#14120e]">
                <ShieldCheck size={24} className="text-[#cba451] mb-3" />
                <h4 className="font-serif text-lg text-[#f3eee3] mb-1">Pristine Kitchen Promise</h4>
                <p className="text-xs text-[#b8ad9e] leading-relaxed">
                  Your kitchen is left completely sanitized, cookware polished, and surfaces gleaming.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Floating Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeCurve }}
            className="lg:col-span-5 relative"
          >
            <div className="rounded-2xl border border-[#cba451]/30 overflow-hidden bg-[#14120e] shadow-2xl relative">
              <img
                src="/image/magnific_centered-gourmet-filet-mi_xgBZ2UJjfW-ro1pbiv5duej2depdsepykh5torl28prtmmfjo9i88.webp"
                alt="Plated wagyu filet mignon"
                className="w-full h-80 object-cover"
              />
              <div className="p-8">
                <span className="text-xs font-bold uppercase tracking-widest text-[#cba451] block mb-2">
                  Chef's Guarantee
                </span>
                <p className="font-serif text-xl text-[#f3eee3] italic mb-4">
                  "We bring not just food, but the spirit, hospitality, and ceremonial elegance of classic European gastronomy into your home."
                </p>
                <span className="text-xs text-[#8c8273] uppercase tracking-wider">
                  — Adrian Veyssette, Executive Chef
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: SAMPLE DEGUSTATION PROGRESSION */}
      <section className="relative px-6 py-20 md:px-12 lg:px-20 bg-[#0e0c0a] border-y border-[#2a241b]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#cba451] block mb-2">
              Culinary Narrative
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#f3eee3]">
              Sample 5-Course Progression
            </h2>
            <div className="mx-auto my-4 h-[2px] w-[60px] bg-[#cba653]" />
            <p className="text-sm sm:text-base text-[#b8ad9e]">
              A balance of acidity, temperature contrasts, and tableside finishes.
            </p>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {sampleCourses.map((c, i) => (
              <motion.div
                key={c.course}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: easeCurve }}
                className="p-6 rounded-xl border border-[#2e261a] bg-[#14120e] flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[#cba451]/50 transition-colors"
              >
                <div>
                  <span className="text-[11px] font-mono text-[#cba451] uppercase tracking-widest block mb-1">
                    {c.course}
                  </span>
                  <h4 className="font-serif text-xl text-[#f3eee3] mb-1">{c.dish}</h4>
                  <p className="text-xs text-[#b8ad9e]">{c.details}</p>
                </div>
                <div className="h-10 w-10 rounded-full border border-[#cba451]/30 bg-[#0a0907] flex items-center justify-center text-[#cba451] shrink-0 self-start sm:self-center">
                  <CheckCircle size={18} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: PRICING & TIERS */}
      <section className="relative px-6 py-20 md:px-12 lg:px-20 lg:py-28 max-w-[1700px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#cba451] block mb-2">
            Transparent Pricing
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#f3eee3]">
            Private Dining Packages
          </h2>
          <div className="mx-auto my-4 h-[2px] w-[60px] bg-[#cba653]" />
          <p className="text-sm sm:text-base text-[#b8ad9e]">
            All inclusive: grocery procurement, table setting advice, multi-course execution, and complete cleanup.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: easeCurve }}
              className={`rounded-2xl border p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative ${
                pkg.popular
                  ? "border-[#cba451] bg-[#17140e] shadow-2xl shadow-[#cba451]/10 md:-translate-y-2"
                  : "border-[#2e261a] bg-[#14120e] hover:border-[#cba451]/50"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#cba451] px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-[#0a0907]">
                  {pkg.tag}
                </div>
              )}

              <div>
                <span className="text-xs font-mono text-[#cba451] uppercase tracking-wider block mb-2">
                  {!pkg.popular && pkg.tag}
                </span>
                <h3 className="font-serif text-2xl text-[#f3eee3] mb-3">{pkg.title}</h3>
                <p className="text-xs text-[#b8ad9e] leading-relaxed mb-6">{pkg.desc}</p>

                <div className="flex items-baseline gap-2 mb-8 pb-6 border-b border-[#2e261a]">
                  <span className="font-serif text-4xl sm:text-5xl font-bold text-[#cba451]">
                    {pkg.price}
                  </span>
                  <span className="text-xs text-[#8c8273]">{pkg.per}</span>
                </div>

                <ul className="space-y-3.5 mb-8">
                  {pkg.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-xs text-[#d8c39e]">
                      <CheckCircle size={15} className="text-[#cba451] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/book"
                className={`w-full h-13 rounded-lg flex items-center justify-center text-xs font-bold uppercase tracking-wider transition-all ${
                  pkg.popular
                    ? "bg-[#cbaa63] text-[#0e0c0a] hover:bg-[#d8b56f]"
                    : "border border-[#cba451]/50 text-[#cba451] hover:bg-[#cba451]/10"
                }`}
              >
                Reserve This Experience
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 4: INQUIRY BANNER */}
      <section className="px-6 pb-24 md:px-12 lg:px-20 max-w-[1500px] mx-auto">
        <div className="rounded-2xl border border-[#cba451]/40 bg-gradient-to-r from-[#17140f] via-[#1c1812] to-[#17140f] p-8 sm:p-14 text-center">
          <h3 className="font-serif text-3xl sm:text-4xl text-[#f3eee3] mb-4">
            Reserve Chef Adrian For Your Private Dinner
          </h3>
          <p className="max-w-2xl mx-auto text-base text-[#b8ad9e] mb-8 leading-relaxed">
            Whether an intimate dinner for two, a family reunion, or an executive tasting,
            we craft an evening that lingers in your memory forever.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/book"
              className="luxury-btn flex items-center gap-2 h-14 px-8 rounded-lg bg-[#cbaa63] text-sm font-bold text-[#15130f] hover:scale-105 transition-transform"
            >
              <span>Book A Chef Online</span>
              <ArrowRight size={16} />
            </Link>
            <a
              href="tel:+10331234567"
              className="flex items-center gap-2 h-14 px-8 rounded-lg border border-[#cba451]/50 bg-transparent text-sm font-semibold text-[#f3eee3] hover:bg-[#cba451]/10 transition-colors"
            >
              <span>Call Concierge: +(1) 033 1234-567</span>
            </a>
          </div>
        </div>
      </section>
    </main>
    </PageTransition>
  );
};

export default PrivateDiningPage;
