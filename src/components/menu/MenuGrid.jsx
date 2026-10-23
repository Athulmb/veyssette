import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Wine, Award } from "lucide-react";
import { Link } from "react-router-dom";

const easeCurve = [0.16, 1, 0.3, 1];

const menuData = [
  {
    id: 1,
    name: "Seared Filet Mignon de Boeuf",
    category: "Signature Mains",
    price: "$58",
    tag: "Chef's Signature",
    description:
      "Center-cut black angus filet with black winter truffle purée, glazed heritage carrots, and a 48-hour bone marrow reduction.",
    pairing: "2018 Château Margaux, Bordeaux",
    image:
      "/image/magnific_centered-gourmet-filet-mi_xgBZ2UJjfW-ro1pbiv5duej2depdsepykh5torl28prtmmfjo9i88.webp",
  },
  {
    id: 2,
    name: "Burrata & Heirloom Garden Carpaccio",
    category: "Hors D'oeuvres & Starters",
    price: "$28",
    tag: "Vegetarian",
    description:
      "Hand-torn Pugliese burrata, rainbow heirloom tomatoes, compressed melon, 25-year Modena balsamico, and crispy basil crisps.",
    pairing: "2022 Domaine Sigalas Assyrtiko, Santorini",
    image:
      "/image/magnific_centered-burrata-salad-vi_vuAgUL0a47-ro1pbw0w1iwjkwvl8y3hxh5m52yq2060jfr89jpzt4.webp",
  },
  {
    id: 3,
    name: "Herb-Crusted Wild Atlantic Salmon",
    category: "Signature Mains",
    price: "$52",
    tag: "Wild Caught",
    description:
      "Pan-roasted wild salmon in brioche herb crust, served with saffron arborio risotto, shaved baby fennel, and citrus beurre blanc.",
    pairing: "2021 Louis Latour Meursault, Burgundy",
    image:
      "/image/magnific_centered-herbcrusted-salm_l7tzY04gv9-e1780268049158-roaemydwjf3egtelfdvcm8rr7tvw3b9x9mne205094.webp",
  },
  {
    id: 4,
    name: "Pan-Seared Chilean Sea Bass",
    category: "Grand Tasting Entrées",
    price: "$64",
    tag: "Degustation Highlight",
    description:
      "Glazed in white miso emulsion, wilted baby bok choy, parsnip velvet, and an aromatic kaffir lime and lemongrass bouillon.",
    pairing: "2020 Cloudy Bay Te Koko Sauvignon Blanc",
    image: "/image/magnific_premium-fine-dining-filet_ONuRKPBynm.webp",
  },
  {
    id: 5,
    name: "Dark Chocolate & Fleur de Sel Ganache",
    category: "Desserts & Pâtisserie",
    price: "$24",
    tag: "Artisan Valrhona",
    description:
      "70% Guanaja chocolate tart, smoked Maldon sea salt, tart raspberry reduction, and house-churned Tahitian vanilla bean gelato.",
    pairing: "20 Year Tawny Port, Quinta do Noval",
    image:
      "/image/magnific_centered-dark-chocolate-m_ubWJyChQLD-e1780268112175-roaeollqhzcgs90ktlguhbtsn3s0k8t0hrqzafp7d4.webp",
  },
  {
    id: 6,
    name: "Duo of Roasted Duck Breast & Confit",
    category: "Grand Tasting Entrées",
    price: "$62",
    tag: "Chef's Signature",
    description:
      "Pan-seared spiced duck breast with crispy leg confit pastilla, braised baby turnips, and sour cherry-star anise jus.",
    pairing: "2019 Domaine Dujac Morey-Saint-Denis",
    image:
      "/image/magnific_luxury-gourmet-meat-dish-_ubWJi8TQLD-ro1puap9z005m8wttqty8encyvy19qdtp24w9r8mzc.webp",
  },
  {
    id: 7,
    name: "Hokkaido Scallop Crudo",
    category: "Hors D'oeuvres & Starters",
    price: "$34",
    tag: "Raw Bar",
    description:
      "Thinly sliced diver scallops, green apple gelee, finger lime caviar, cold-pressed yuzu oil, and sea seaweeds.",
    pairing: "2021 Billecart-Salmon Brut Rosé Champagne",
    image:
      "/image/magnific_elegant-gourmet-dish-bein_DBytr6rpcl.webp",
  },
  {
    id: 8,
    name: "Caramelized Mille-Feuille Classique",
    category: "Desserts & Pâtisserie",
    price: "$22",
    tag: "French Heritage",
    description:
      "Caramelized inverted puff pastry, Madagascar Bourbon vanilla diplomat cream, and warm salted butter butterscotch.",
    pairing: "2017 Château Guiraud Sauternes 1er Grand Cru",
    image:
      "/image/magnific_luxury-gourmet-prepared-m_WMgCsI7cXe-ro1qb09zgyvo0on08yv6k6ud5hky40q1brnneugod4.webp",
  },
];

const categories = [
  "All Courses",
  "Hors D'oeuvres & Starters",
  "Signature Mains",
  "Grand Tasting Entrées",
  "Desserts & Pâtisserie",
];

const MenuGrid = () => {
  const [activeTab, setActiveTab] = useState("All Courses");

  const filteredDishes =
    activeTab === "All Courses"
      ? menuData
      : menuData.filter((item) => item.category === activeTab);

  return (
    <section className="relative w-full bg-[#0a0907] px-6 py-20 text-[#f3eee3] md:px-12 lg:px-20 lg:py-28">
      <div className="mx-auto max-w-[1700px]">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#cba451] mb-4">
            <Sparkles size={14} />
            <span>À La Carte & Tasting Selections</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#f3eee3] leading-tight font-normal">
            Bespoke Haute Cuisine
          </h2>
          <div className="mx-auto my-6 h-[2px] w-[70px] bg-[#cba653]" />
          <p className="text-base sm:text-lg text-[#b8ad9e] leading-relaxed">
            Every dish is custom-prepared in your home kitchen using freshly sourced organic
            produce, artisanal imported French delicacies, and prime sustainable meats.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-16">
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

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <AnimatePresence mode="popLayout">
            {filteredDishes.map((dish, i) => (
              <motion.div
                key={dish.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: easeCurve }}
                className="group relative flex flex-col sm:flex-row gap-6 p-6 sm:p-7 rounded-2xl bg-[#14120e] border border-[#2e261a] hover:border-[#cba451]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#cba451]/5"
              >
                {/* Dish Circular Thumbnail */}
                <div className="relative aspect-square w-full sm:w-[150px] sm:h-[150px] shrink-0 overflow-hidden rounded-xl border border-[#cba451]/30 bg-[#0a0907] self-start">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute top-2 left-2 rounded bg-[#0a0907]/90 px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider text-[#cba451] border border-[#cba451]/30">
                    {dish.tag}
                  </div>
                </div>

                {/* Content Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-baseline justify-between gap-4 mb-2">
                      <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#f3eee3] group-hover:text-[#cba451] transition-colors">
                        {dish.name}
                      </h3>
                      <span className="font-serif text-xl font-medium text-[#cba451] shrink-0">
                        {dish.price}
                      </span>
                    </div>

                    <p className="text-sm leading-relaxed text-[#b8ad9e] mb-4">
                      {dish.description}
                    </p>
                  </div>

                  {/* Wine Pairing Pill */}
                  <div className="pt-3 border-t border-[#2a241b] flex items-center gap-2 text-xs text-[#cba451]">
                    <Wine size={14} className="shrink-0" />
                    <span className="text-[#8c8273] uppercase tracking-wider text-[11px]">
                      Recommended Wine:
                    </span>
                    <span className="italic truncate text-[#d8c39e]">{dish.pairing}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Tasting Menu Degustation CTA Banner */}
        <div className="mt-20 rounded-2xl border border-[#cba451]/40 bg-gradient-to-r from-[#17140f] via-[#1c1812] to-[#17140f] p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#cba451] mb-3">
              <Award size={16} />
              <span>Tailored For Your Occasion</span>
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#f3eee3] mb-4">
              Looking for a Multi-Course Degustation?
            </h3>
            <p className="text-base text-[#c6b69b] leading-relaxed mb-8">
              Chef Veyssette designs exclusive 5-course, 7-course, or 9-course bespoke tasting journeys with sommelier wine pairings, tableside explanations, and effortless clean up.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/book"
                className="luxury-btn flex h-14 items-center justify-center rounded-lg bg-[#cbaa63] px-8 text-sm font-bold text-[#15130f] shadow-lg shadow-[#cbaa63]/20 hover:scale-105 transition-transform"
              >
                Reserve Your Chef & Tasting
              </Link>
              <Link
                to="/contact"
                className="flex h-14 items-center justify-center rounded-lg border border-[#cba451]/50 bg-transparent px-8 text-sm font-semibold text-[#f3eee3] hover:bg-[#cba451]/10 transition-colors"
              >
                Inquire Special Dietary Needs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuGrid;
