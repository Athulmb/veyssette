import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles, HelpCircle, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const easeCurve = [0.16, 1, 0.3, 1];

const faqData = [
  {
    id: 1,
    category: "General & Booking",
    question: "How far in advance should I reserve Chef Veyssette?",
    answer:
      "We recommend reserving at least 1 to 3 weeks in advance for weekend dinners and intimate gatherings. For peak holiday dates and large estate celebrations, 1 to 2 months notice is recommended. Last-minute bookings can occasionally be accommodated depending on the chef's seasonal schedule.",
  },
  {
    id: 2,
    category: "General & Booking",
    question: "What areas and locations does Chef Veyssette service?",
    answer:
      "We provide private chef services across the metropolitan area, private residences, Hamptons summer estates, and select international villa destinations upon request. Travel arrangements for destination dining can be coordinated with our concierge.",
  },
  {
    id: 3,
    category: "Menu & Dietary",
    question: "Can menus be customized for food allergies and diets?",
    answer:
      "Yes, completely. Prior to your event, Chef Adrian will review all guest dietary requirements including gluten-free, dairy-free, celiac, shellfish-free, vegetarian, keto, and kosher-style preferences. Every dish is adapted without ever compromising on flavor or fine dining elegance.",
  },
  {
    id: 4,
    category: "Menu & Dietary",
    question: "Where are the ingredients sourced from?",
    answer:
      "Chef Adrian personally sources all produce, sustainable seafood, and prime meats on the morning of your event from local organic farms, boutique purveyors, and premium French artisan importers (truffles, Caviar, Valrhona chocolate, and French butter).",
  },
  {
    id: 5,
    category: "Service & Day-Of",
    question: "What kitchen equipment do I need to provide?",
    answer:
      "A standard domestic or professional kitchen with a working stove, oven, refrigerator, and sink is all that is required. Chef Veyssette brings his own professional Japanese knives, copper cookware, specialty plating tools, and fine culinary accessories.",
  },
  {
    id: 6,
    category: "Service & Day-Of",
    question: "Does the chef clean the kitchen after the dinner?",
    answer:
      "Absolutely. Our service includes full kitchen breakdown, sanitization, and trash removal. You and your guests will simply relax and enjoy your evening; when Chef departs, your kitchen will be left in immaculate, pristine condition.",
  },
  {
    id: 7,
    category: "Payment & Policies",
    question: "What is included in the quoted price?",
    answer:
      "Our price is comprehensive: customized menu design, premium organic grocery procurement, travel to your residence, on-site multi-course preparation, tableside presentation, and comprehensive kitchen sanitization. Wine flight pairings and additional waitstaff for large gatherings can be seamlessly added.",
  },
  {
    id: 8,
    category: "Payment & Policies",
    question: "What is your cancellation and rescheduling policy?",
    answer:
      "Events can be rescheduled or cancelled up to 7 business days prior with a full credit toward a future date. Because fresh luxury provisions are procured exclusively for your gathering, cancellations within 48 hours are subject to ingredient procurement costs.",
  },
];

const categories = [
  "All Questions",
  "General & Booking",
  "Menu & Dietary",
  "Service & Day-Of",
  "Payment & Policies",
];

const FaqAccordion = () => {
  const [activeTab, setActiveTab] = useState("All Questions");
  const [openId, setOpenId] = useState(1);

  const filteredFaqs =
    activeTab === "All Questions"
      ? faqData
      : faqData.filter((item) => item.category === activeTab);

  const toggleItem = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative w-full bg-[#0a0907] px-6 py-20 text-[#f3eee3] md:px-12 lg:px-20 lg:py-28">
      <div className="mx-auto max-w-[1300px]">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#cba451] mb-4">
            <Sparkles size={14} />
            <span>Answers & Clarity</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#f3eee3] leading-tight font-normal">
            Common Inquiries
          </h2>
          <div className="mx-auto my-6 h-[2px] w-[70px] bg-[#cba653]" />
          <p className="text-base sm:text-lg text-[#b8ad9e]">
            Transparent answers to help you plan an effortless, unforgettable private
            dining experience with Chef Adrian Veyssette.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-14">
          {categories.map((cat) => {
            const isActive = activeTab === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveTab(cat)}
                className={`relative px-5 py-3 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 border ${
                  isActive
                    ? "bg-[#cba451] text-[#0e0c0a] border-[#cba451] shadow-lg shadow-[#cba451]/20 font-semibold"
                    : "bg-[#14120e] text-[#c6b69b] border-[#3b3020] hover:border-[#cba451]/60 hover:text-white"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div
                key={faq.id}
                layout
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-[#cba451] bg-[#17140e] shadow-xl shadow-[#cba451]/5"
                    : "border-[#2e261a] bg-[#14120e] hover:border-[#cba451]/40"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(faq.id)}
                  className="w-full flex items-center justify-between gap-4 p-6 sm:p-7 text-left transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle
                      size={20}
                      className={`shrink-0 transition-colors ${
                        isOpen ? "text-[#cba451]" : "text-[#7a7061]"
                      }`}
                    />
                    <h3
                      className={`font-serif text-lg sm:text-xl font-normal transition-colors ${
                        isOpen ? "text-[#cba451]" : "text-[#f3eee3]"
                      }`}
                    >
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`h-9 w-9 shrink-0 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? "border-[#cba451] bg-[#cba451] text-[#0a0907] rotate-180"
                        : "border-[#3b3020] text-[#cba451] bg-[#0e0c0a]"
                    }`}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: easeCurve }}
                    >
                      <div className="px-6 pb-7 sm:px-7 pt-2 border-t border-[#2e261a]/60 text-sm sm:text-base leading-relaxed text-[#b8ad9e]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-20 rounded-2xl border border-[#cba451]/30 bg-gradient-to-r from-[#17140f] via-[#1c1812] to-[#17140f] p-8 sm:p-12 text-center max-w-3xl mx-auto">
          <h3 className="font-serif text-2xl sm:text-3xl text-[#f3eee3] mb-3">
            Have a Specific In-Home Request?
          </h3>
          <p className="text-sm sm:text-base text-[#b8ad9e] mb-6 max-w-xl mx-auto">
            Our private dining concierge is delighted to answer customized dietary inquiries,
            wine recommendations, or estate kitchen logistics.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+10331234567"
              className="luxury-btn flex items-center gap-2 h-12 px-6 rounded-lg bg-[#cbaa63] text-sm font-bold text-[#15130f]"
            >
              <Phone size={16} />
              <span>Call +(1) 033 1234-567</span>
            </a>
            <Link
              to="/contact"
              className="flex items-center gap-2 h-12 px-6 rounded-lg border border-[#cba451]/50 bg-transparent text-sm font-semibold text-[#f3eee3] hover:bg-[#cba451]/10 transition-colors"
            >
              <Mail size={16} />
              <span>Send An Inquiry</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqAccordion;
