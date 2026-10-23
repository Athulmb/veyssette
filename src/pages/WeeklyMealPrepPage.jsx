import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Flower2,
  Sparkles,
  CheckCircle,
  Leaf,
  Heart,
  ArrowRight,
  Flame,
} from "lucide-react";
import PageTransition from "../components/comen/PageTransition";

const easeCurve = [0.16, 1, 0.3, 1];

const dietaryFocus = [
  {
    icon: Flame,
    title: "High Protein & Performance",
    desc: "Prime lean cuts, wild salmon, and macro-balanced complex grains for athletic recovery and high-energy days.",
  },
  {
    icon: Leaf,
    title: "Keto & Metabolic Low-Carb",
    desc: "Healthy fats, avocado oils, pasture-raised eggs, and nutrient-dense greens keeping carbs under strict limits.",
  },
  {
    icon: Heart,
    title: "Mediterranean Longevity",
    desc: "Rich in cold-pressed olive oils, wild fish, heirloom legumes, and colorful antioxidant-packed vegetables.",
  },
  {
    icon: Sparkles,
    title: "Plant-Based Haute Cuisine",
    desc: "Seasonal roasted roots, French lentil ragouts, nut creams, and botanical flavors elevated to Michelin tier.",
  },
];

const prepPlans = [
  {
    name: "3-Day Wellness",
    tag: "Essential Reset",
    price: "$380",
    frequency: "/ week",
    meals: "6 Gourmet Meals (Lunch & Dinner)",
    details: [
      "2 Customized Recipes crafted weekly",
      "Organic dawn-sourced local produce",
      "Delivered in reusable eco-glass containers",
      "Heating and finishing instructions included",
      "Standard macro & allergy customization",
    ],
  },
  {
    name: "5-Day Executive",
    tag: "Most Popular",
    popular: true,
    price: "$590",
    frequency: "/ week",
    meals: "10 Gourmet Meals (Full Work Week)",
    details: [
      "4 Bespoke Recipes + 2 Artisanal Snacks",
      "Prime proteins (Wild Salmon, Filet, Duck)",
      "Zero preservatives or artificial additives",
      "Delivered twice weekly for maximum freshness",
      "Full macro & micronutrient breakdown sheet",
      "Direct text access to Chef Adrian for updates",
    ],
  },
  {
    name: "Estate Family Residence",
    tag: "Full Household",
    price: "$980",
    frequency: "/ week",
    meals: "16–20 Family-Style Servings",
    details: [
      "Family-style platters & kid-friendly haute options",
      "Cooked directly in your kitchen or hand-delivered",
      "Full refrigerator reorganization & labeling",
      "Breakfast granolas & cold-pressed dressings included",
      "Pristine kitchen sanitization included",
    ],
  },
];

const WeeklyMealPrepPage = () => {
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
                <span className="text-[#cba451]">Weekly Meal Prep</span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.2, ease: easeCurve }}
                className="mb-6 font-serif text-5xl sm:text-6xl lg:text-[76px] font-normal leading-[1.06] tracking-tight text-[#f3e6cf]"
              >
                Weekly Meal Prep
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
                Michelin-caliber culinary nutrition delivered to your refrigerator every week.
                Wholesome, organic gourmet dishes prepared specifically for your health goals
                and refined lifestyle.
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
                    src="/image/magnific_premium-weekly-meal-prep-_tfZvlgzmZJ-e1780268215441.webp"
                    alt="Premium weekly meal prep containers with gourmet ingredients"
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

      {/* SECTION 1: DIETARY PLANS */}
      <section className="relative px-6 py-20 md:px-12 lg:px-20 lg:py-28 max-w-[1700px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#cba451] mb-4">
            <Sparkles size={14} />
            <span>Tailored Wellness</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#f3eee3] font-normal">
            Nutrition Designed Around You
          </h2>
          <div className="mx-auto my-4 h-[2px] w-[60px] bg-[#cba653]" />
          <p className="text-sm sm:text-base text-[#b8ad9e]">
            Never compromise on taste to meet your wellness targets. Each recipe is balanced by culinary masters.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {dietaryFocus.map((plan, i) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: easeCurve }}
                className="p-8 rounded-2xl border border-[#2e261a] bg-[#14120e] hover:border-[#cba451]/50 transition-colors"
              >
                <div className="h-12 w-12 rounded-xl border border-[#cba451]/30 bg-[#0a0907] flex items-center justify-center text-[#cba451] mb-5">
                  <Icon size={22} />
                </div>
                <h3 className="font-serif text-xl text-[#f3eee3] mb-2">{plan.title}</h3>
                <p className="text-xs text-[#b8ad9e] leading-relaxed">{plan.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* SECTION 2: PLANS & PACKAGES */}
      <section className="relative px-6 py-20 md:px-12 lg:px-20 bg-[#0e0c0a] border-y border-[#2a241b]">
        <div className="max-w-[1700px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#cba451] block mb-2">
              Weekly Subscriptions
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#f3eee3]">
              Curated Meal Prep Plans
            </h2>
            <div className="mx-auto my-4 h-[2px] w-[60px] bg-[#cba653]" />
            <p className="text-sm sm:text-base text-[#b8ad9e]">
              Pause, modify, or cancel anytime. Sourced fresh twice a week and delivered in hermetic glass.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {prepPlans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: easeCurve }}
                className={`rounded-2xl border p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.popular
                    ? "border-[#cba451] bg-[#17140e] shadow-2xl shadow-[#cba451]/10 md:-translate-y-2"
                    : "border-[#2e261a] bg-[#14120e] hover:border-[#cba451]/50"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#cba451] px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-[#0a0907]">
                    {plan.tag}
                  </div>
                )}

                <div>
                  <span className="text-xs font-mono text-[#cba451] uppercase tracking-wider block mb-2">
                    {!plan.popular && plan.tag}
                  </span>
                  <h3 className="font-serif text-2xl text-[#f3eee3] mb-1">{plan.name}</h3>
                  <p className="text-xs text-[#cba451] font-medium mb-4">{plan.meals}</p>

                  <div className="flex items-baseline gap-2 mb-8 pb-6 border-b border-[#2e261a]">
                    <span className="font-serif text-4xl sm:text-5xl font-bold text-[#cba451]">
                      {plan.price}
                    </span>
                    <span className="text-xs text-[#8c8273]">{plan.frequency}</span>
                  </div>

                  <ul className="space-y-3.5 mb-8">
                    {plan.details.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-xs text-[#d8c39e]">
                        <CheckCircle size={15} className="text-[#cba451] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/book"
                  className={`w-full h-13 rounded-lg flex items-center justify-center text-xs font-bold uppercase tracking-wider transition-all ${
                    plan.popular
                      ? "bg-[#cbaa63] text-[#0e0c0a] hover:bg-[#d8b56f]"
                      : "border border-[#cba451]/50 text-[#cba451] hover:bg-[#cba451]/10"
                  }`}
                >
                  Start This Plan
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: INQUIRY BANNER */}
      <section className="px-6 py-24 md:px-12 lg:px-20 max-w-[1500px] mx-auto">
        <div className="rounded-2xl border border-[#cba451]/40 bg-gradient-to-r from-[#17140f] via-[#1c1812] to-[#17140f] p-8 sm:p-14 text-center">
          <h3 className="font-serif text-3xl sm:text-4xl text-[#f3eee3] mb-4">
            Reclaim Your Weekly Time & Health
          </h3>
          <p className="max-w-2xl mx-auto text-base text-[#b8ad9e] mb-8 leading-relaxed">
            Let Chef Adrian take full care of your grocery sourcing, organic meal preparation,
            and weekly culinary nutrition.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/book"
              className="luxury-btn flex items-center gap-2 h-14 px-8 rounded-lg bg-[#cbaa63] text-sm font-bold text-[#15130f] hover:scale-105 transition-transform"
            >
              <span>Subscribe to Weekly Prep</span>
              <ArrowRight size={16} />
            </Link>
            <a
              href="tel:+10331234567"
              className="flex items-center gap-2 h-14 px-8 rounded-lg border border-[#cba451]/50 bg-transparent text-sm font-semibold text-[#f3eee3] hover:bg-[#cba451]/10 transition-colors"
            >
              <span>Call Chef Concierge</span>
            </a>
          </div>
        </div>
      </section>
    </main>
    </PageTransition>
  );
};

export default WeeklyMealPrepPage;
