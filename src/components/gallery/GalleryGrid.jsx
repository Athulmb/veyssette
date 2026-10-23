import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const easeCurve = [0.16, 1, 0.3, 1];

const galleryItems = [
  {
    id: 1,
    title: "Artisanal Wagyu Plating",
    category: "Plated Artistry",
    subtitle: "Truffle jus, parsnip velvet & micro herbs",
    image:
      "/image/magnific_centered-gourmet-filet-mi_xgBZ2UJjfW-ro1pbiv5duej2depdsepykh5torl28prtmmfjo9i88.webp",
  },
  {
    id: 2,
    title: "Candlelit Estate Dinner",
    category: "Private Dinners",
    subtitle: "Intimate 12-guest anniversary celebration",
    image:
      "/image/magnific_elegant-candlelit-private_LU8ABU1swO-ro5e2gxily6xa4l25jr9c2107qgv5k4j99npy51h7c.webp",
  },
  {
    id: 3,
    title: "The Chef at Work",
    category: "Culinary Craft",
    subtitle: "Precision finishing tableside in client kitchen",
    image:
      "/image/magnific_professional-chef-careful_74f0BVaJAL.webp",
  },
  {
    id: 4,
    title: "Grand Tasting Table Scape",
    category: "Ambiance & Decor",
    subtitle: "Curated crystal stemware and floral arrangements",
    image:
      "/image/magnific_luxury-gourmet-dining-tab_ONu4VlEynm.webp",
  },
  {
    id: 5,
    title: "Burrata & Heirloom Garden",
    category: "Plated Artistry",
    subtitle: "Cold-pressed olive oil & 25-year aged balsamic",
    image:
      "/image/magnific_centered-burrata-salad-vi_vuAgUL0a47-ro1pbw0w1iwjkwvl8y3hxh5m52yq2060jfr89jpzt4.webp",
  },
  {
    id: 6,
    title: "Sommelier Vintage Pouring",
    category: "Ambiance & Decor",
    subtitle: "Bespoke wine flight paired with every course",
    image:
      "/image/magnific_luxury-wine-pouring-scene_LUIO0aCswO-ro4x3f0arisct0u3klec9bjd9brjly32giqsmd2oeo.webp",
  },
  {
    id: 7,
    title: "Herb-Crusted Wild Salmon",
    category: "Plated Artistry",
    subtitle: "Saffron risotto and citrus beurre blanc",
    image:
      "/image/magnific_centered-herbcrusted-salm_l7tzY04gv9-e1780268049158-roaemydwjf3egtelfdvcm8rr7tvw3b9x9mne205094.webp",
  },
  {
    id: 8,
    title: "Chef Adrian Veyssette",
    category: "Culinary Craft",
    subtitle: "Over 15 years in Michelin starred European kitchens",
    image:
      "/image/magnific_elegant-personal-chef-por_nTlc3syYQD.webp",
  },
  {
    id: 9,
    title: "Dark Chocolate & Fleur de Sel",
    category: "Plated Artistry",
    subtitle: "Pure Valrhona grand cru and gold leaf",
    image:
      "/image/magnific_centered-dark-chocolate-m_ubWJyChQLD-e1780268112175-roaeollqhzcgs90ktlguhbtsn3s0k8t0hrqzafp7d4.webp",
  },
  {
    id: 10,
    title: "Celebration Toast with Guests",
    category: "Private Dinners",
    subtitle: "Creating unforgettable moments in the comfort of home",
    image:
      "/image/magnific_elegant-group-of-guests-r_vuAgZlia47-ro5e26lairsrqf02txad2mmxohvtsvzhjuhdo3gt3s.webp",
  },
  {
    id: 11,
    title: "Overhead Degustation View",
    category: "Plated Artistry",
    subtitle: "Modern gastronomy harmonized with classical technique",
    image:
      "/image/magnific_overhead-view-of-a-curate_Vd7FUKVMMU-1-e1780267900616-roaej2cafnjgu7x2lqjyonvm01kvmv5n4fd2u4h3yw.webp",
  },
  {
    id: 12,
    title: "Fine Dining Terrace Affair",
    category: "Private Dinners",
    subtitle: "Candlelit alfresco dining experience",
    image:
      "/image/magnific_elegant-candlelit-private_y6uMIgDPW9.webp",
  },
];

const categories = [
  "All Showcases",
  "Plated Artistry",
  "Private Dinners",
  "Culinary Craft",
  "Ambiance & Decor",
];

const GalleryGrid = () => {
  const [activeTab, setActiveTab] = useState("All Showcases");
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const filteredItems =
    activeTab === "All Showcases"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeTab);

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) =>
      prev === 0 ? filteredItems.length - 1 : prev - 1
    );
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) =>
      prev === filteredItems.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="relative w-full bg-[#0a0907] px-6 py-20 text-[#f3eee3] md:px-12 lg:px-20 lg:py-28">
      <div className="mx-auto max-w-[1720px]">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#cba451] mb-4">
            <Sparkles size={14} />
            <span>Memorable Moments & Art</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#f3eee3] leading-tight font-normal">
            Gastronomic Gallery
          </h2>
          <div className="mx-auto my-6 h-[2px] w-[70px] bg-[#cba653]" />
          <p className="text-base sm:text-lg text-[#b8ad9e]">
            A showcase of intimate dinners, bespoke menus, and exquisite culinary
            creations delivered into our clients' homes.
          </p>
        </div>

        {/* Filter Tabs */}
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

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: idx * 0.04, ease: easeCurve }}
                onClick={() => setSelectedImageIndex(idx)}
                className="group relative h-[360px] sm:h-[400px] overflow-hidden rounded-2xl border border-[#2e261a] bg-[#14120e] cursor-pointer"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />

                {/* Dark & Gold Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Top Corner Icon */}
                <div className="absolute top-4 right-4 h-10 w-10 rounded-full bg-[#14120e]/80 border border-[#cba451]/40 flex items-center justify-center text-[#cba451] opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                  <Maximize2 size={16} />
                </div>

                {/* Caption Card at Bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#cba451] block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-2xl font-normal text-[#f3eee3] group-hover:text-[#cba451] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#b8ad9e] mt-1 line-clamp-1">
                    {item.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImageIndex(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-md p-4 sm:p-8"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedImageIndex(null)}
              className="absolute top-6 right-6 z-50 rounded-full border border-[#cba451]/40 bg-[#14120e] p-3 text-[#cba451] hover:bg-[#cba451] hover:text-[#0a0907] transition-colors"
            >
              <X size={22} />
            </button>

            {/* Previous Button */}
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 rounded-full border border-[#cba451]/40 bg-[#14120e]/90 p-3 text-[#cba451] hover:bg-[#cba451] hover:text-[#0a0907] transition-colors"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 rounded-full border border-[#cba451]/40 bg-[#14120e]/90 p-3 text-[#cba451] hover:bg-[#cba451] hover:text-[#0a0907] transition-colors"
            >
              <ChevronRight size={24} />
            </button>

            {/* Active Image Modal Box */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ ease: easeCurve, duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[85vh] overflow-hidden rounded-2xl border border-[#cba451]/40 bg-[#14120e] shadow-2xl flex flex-col"
            >
              <div className="relative overflow-hidden bg-black flex items-center justify-center max-h-[68vh]">
                <img
                  src={filteredItems[selectedImageIndex]?.image}
                  alt={filteredItems[selectedImageIndex]?.title}
                  className="max-h-[68vh] w-auto max-w-full object-contain"
                />
              </div>
              <div className="p-6 border-t border-[#2a241b] bg-[#14120e] flex items-center justify-between gap-4">
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-[#cba451]">
                    {filteredItems[selectedImageIndex]?.category}
                  </span>
                  <h3 className="font-serif text-2xl text-[#f3eee3] mt-1">
                    {filteredItems[selectedImageIndex]?.title}
                  </h3>
                  <p className="text-sm text-[#b8ad9e]">
                    {filteredItems[selectedImageIndex]?.subtitle}
                  </p>
                </div>
                <span className="text-xs font-mono text-[#cba451]/70">
                  {selectedImageIndex + 1} / {filteredItems.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GalleryGrid;
