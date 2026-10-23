import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const easeCurve = [0.16, 1, 0.3, 1];

const Menus = () => {
  const dishes = [
    {
      name: "Seared Filet Mignon",
      price: "$20",
      description:
        "Truffle potato purée, roasted vegetables and red wine reduction.",
      image:
        "/image/magnific_centered-gourmet-filet-mi_xgBZ2UJjfW-ro1pbiv5duej2depdsepykh5torl28prtmmfjo9i88.webp",
    },
    {
      name: "Burrata & Heirloom Tomatoes",
      price: "$9",
      description:
        "Fresh basil, aged balsamic glaze and artisan olive oil.",
      image:
        "/image/magnific_centered-burrata-salad-vi_vuAgUL0a47-ro1pbw0w1iwjkwvl8y3hxh5m52yq2060jfr89jpzt4.webp",
    },
    {
      name: "Herb-Crusted Wild Salmon",
      price: "$24",
      description:
        "Asparagus spears, saffron risotto and lemon-dill emulsion.",
      image:
        "/image/magnific_centered-herbcrusted-salm_l7tzY04gv9-e1780268049158-roaemydwjf3egtelfdvcm8rr7tvw3b9x9mne205094.webp",
    },
    {
      name: "Pan-Seared Sea Bass",
      price: "$28",
      description:
        "Sautéed baby spinach, parsnip puree and citrus beurre blanc.",
      image:
        "/image/magnific_premium-fine-dining-filet_ONuRKPBynm.webp",
    },
    {
      name: "Dark Chocolate Ganache",
      price: "$14",
      description:
        "Gold leaf, raspberry coulis and Madagascar vanilla bean gelato.",
      image:
        "/image/magnific_centered-dark-chocolate-m_ubWJyChQLD-e1780268112175-roaeollqhzcgs90ktlguhbtsn3s0k8t0hrqzafp7d4.webp",
    },
  ];

  return (
    <section className="relative w-full bg-[#0a0907] px-6 py-16 text-[#f3eee3] md:px-12 lg:px-16 lg:py-24">
      <div className="mx-auto grid max-w-[1700px] grid-cols-1 items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">

        {/* Left Content - Freezes when reaching top, releases when bottom is reached */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, ease: easeCurve }}
            className="flex flex-col items-start justify-start pt-2"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#cba451]">
              Featured Menus
            </p>

            <h2 className="max-w-[550px] font-serif text-4xl leading-[1.15] text-[#f3eee3] sm:text-5xl lg:text-[56px]">
              A Taste Of What We
              <br />
              Create
            </h2>

            <p className="mt-6 max-w-[500px] text-base leading-[1.7] text-[#b8ad9e] sm:text-lg">
              Experience thoughtfully curated dishes crafted with seasonal
              ingredients, refined techniques and unforgettable presentation
              designed for intimate luxury dining.
            </p>

            <Link to="/menu">
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                type="button"
                className="luxury-btn mt-8 flex h-[52px] items-center justify-center rounded-md bg-[#d8b065] px-8 text-sm font-semibold text-[#14120e] shadow-lg shadow-[#cba451]/15"
              >
                See Full Menu
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Right Menu Items - 5 items */}
        <div className="flex flex-col gap-10 sm:gap-12">
          {dishes.map((dish, i) => (
            <motion.article
              key={dish.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: easeCurve }}
              whileHover={{ x: 6 }}
              className="group grid grid-cols-1 items-center gap-6 sm:grid-cols-[240px_1fr] sm:gap-8 lg:grid-cols-[260px_1fr] cursor-pointer"
            >
              {/* Circular Food Image Container */}
              <div className="relative mx-auto aspect-square h-[220px] w-[220px] shrink-0 overflow-hidden rounded-full border-2 border-[#cba451]/20 sm:h-[240px] sm:w-[240px] lg:h-[260px] lg:w-[260px] group-hover:border-[#cba451]/60 transition-colors duration-500 shadow-2xl bg-[#14120e]">
                <img
                  src={dish.image}
                  alt={dish.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>

              {/* Dish Details */}
              <div className="w-full">
                <div className="flex items-center gap-3">
                  <h3 className="font-serif text-2xl font-normal text-[#f3eee3] sm:text-3xl transition-colors duration-300 group-hover:text-[#cba451]">
                    {dish.name}
                  </h3>

                  <div className="min-w-4 flex-1 border-b border-dotted border-[#cba451]/50" />

                  <span className="font-serif text-xl font-medium text-[#cba451] sm:text-2xl">
                    {dish.price}
                  </span>
                </div>

                <p className="mt-3 max-w-[420px] text-sm leading-relaxed text-[#b8ad9e] sm:text-base">
                  {dish.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Menus;