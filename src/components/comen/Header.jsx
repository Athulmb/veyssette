import React, { useState, useEffect } from "react";
import { Phone, ChevronDown, Menu, X } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'pages' | 'services' | null
  const location = useLocation();

  // Automatically close any dropdown whenever the route changes
  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#c5a45b]/30 bg-[#0d0c0a]/90 text-white backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex min-h-[72px] sm:min-h-[80px] lg:min-h-[96px] max-w-[1920px] items-center justify-between gap-3 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <NavLink to="/" className="flex shrink-0 items-center">
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            src="/image/logo.webp"
            alt="Veyssette logo"
            className="h-[44px] sm:h-[50px] lg:h-[60px] w-auto object-contain cursor-pointer"
          />
        </NavLink>

        {/* Navigation */}
        <nav className="hidden items-center gap-5 lg:flex xl:gap-8 2xl:gap-10 text-sm xl:text-base">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `relative pb-1 font-medium transition ${
                isActive ? "text-[#c5a45b]" : "text-white/90 hover:text-[#c5a45b]"
              }`
            }
          >
            {({ isActive }) => (
              <>
                Home
                {isActive && (
                  <motion.span
                    layoutId="header-active-line"
                    className="absolute bottom-0 left-0 h-[2px] w-full bg-[#c5a45b]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </>
            )}
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `relative pb-1 font-medium transition ${
                isActive ? "text-[#c5a45b]" : "text-white/90 hover:text-[#c5a45b]"
              }`
            }
          >
            {({ isActive }) => (
              <>
                About Us
                {isActive && (
                  <motion.span
                    layoutId="header-active-line"
                    className="absolute bottom-0 left-0 h-[2px] w-full bg-[#c5a45b]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </>
            )}
          </NavLink>

          {/* Pages Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("pages")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              type="button"
              onClick={() =>
                setActiveDropdown((prev) => (prev === "pages" ? null : "pages"))
              }
              aria-haspopup="true"
              className="relative flex items-center gap-1.5 pb-1 font-medium text-white/90 transition hover:text-[#c5a45b]"
            >
              Pages
              <ChevronDown
                size={14}
                className={`text-[#c5a45b] transition-transform duration-300 ${
                  activeDropdown === "pages" ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {activeDropdown === "pages" && (
                <motion.div
                  initial={{ opacity: 0, y: -4, scale: 0.98 }}
                  animate={{ opacity: 1, y: 4, scale: 1 }}
                  exit={{ opacity: 0, y: -4, scale: 0.98 }}
                  transition={{ duration: 0.18 }}
                  role="menu"
                  className="absolute right-0 top-full z-50 w-52 rounded-md border border-[#3b3020] bg-[#1a1712]/95 backdrop-blur-md shadow-2xl overflow-hidden"
                >
                  {[
                    { name: "Menu Experience", path: "/menu" },
                    { name: "Gallery", path: "/gallery" },
                    { name: "Services", path: "/services" },
                    { name: "Book A Chef", path: "/book" },
                    { name: "FAQ", path: "/faq" },
                    { name: "Blog", path: "/blog" },
                    { name: "Single Post", path: "/blog/culinary-artistry" },
                    { name: "404", path: "/404" },
                  ].map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.path}
                      role="menuitem"
                      onClick={() => setActiveDropdown(null)}
                      className={({ isActive }) =>
                        `block border-b border-[#3b3020] px-5 py-3.5 text-sm font-medium last:border-b-0 hover:bg-[#242018] hover:text-[#c5a45b] transition-colors ${
                          isActive ? "text-[#c5a45b] bg-[#242018]/60" : "text-white/90"
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("services")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className="flex items-center gap-1">
              <NavLink
                to="/services"
                onClick={() => setActiveDropdown(null)}
                className={({ isActive }) =>
                  `relative flex items-center pb-1 font-medium transition ${
                    isActive ? "text-[#c5a45b]" : "text-white/90 hover:text-[#c5a45b]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    Services
                    {isActive && (
                      <motion.span
                        layoutId="header-active-line"
                        className="absolute bottom-0 left-0 h-[2px] w-full bg-[#c5a45b]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
              <button
                type="button"
                onClick={() =>
                  setActiveDropdown((prev) => (prev === "services" ? null : "services"))
                }
                className="pb-1 text-white/90 hover:text-[#c5a45b] focus:outline-none"
              >
                <ChevronDown
                  size={14}
                  className={`text-[#c5a45b] transition-transform duration-300 ${
                    activeDropdown === "services" ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            <AnimatePresence>
              {activeDropdown === "services" && (
                <motion.div
                  initial={{ opacity: 0, y: -4, scale: 0.98 }}
                  animate={{ opacity: 1, y: 4, scale: 1 }}
                  exit={{ opacity: 0, y: -4, scale: 0.98 }}
                  transition={{ duration: 0.18 }}
                  role="menu"
                  className="absolute left-0 top-full z-50 w-56 rounded-md border border-[#3b3020] bg-[#1a1712]/95 backdrop-blur-md shadow-2xl overflow-hidden"
                >
                  {[
                    { name: "Private Dining", path: "/services/private-dining" },
                    { name: "Special Events", path: "/services/special-events" },
                    { name: "Weekly Meal Prep", path: "/services/weekly-meal-prep" },
                  ].map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.path}
                      role="menuitem"
                      onClick={() => setActiveDropdown(null)}
                      className={({ isActive }) =>
                        `block border-b border-[#3b3020] px-5 py-3.5 text-sm font-medium last:border-b-0 hover:bg-[#242018] hover:text-[#c5a45b] transition-colors ${
                          isActive ? "text-[#c5a45b] bg-[#242018]/60" : "text-white/90"
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `relative pb-1 font-medium transition ${
                isActive ? "text-[#c5a45b]" : "text-white/90 hover:text-[#c5a45b]"
              }`
            }
          >
            {({ isActive }) => (
              <>
                Contact Us
                {isActive && (
                  <motion.span
                    layoutId="header-active-line"
                    className="absolute bottom-0 left-0 h-[2px] w-full bg-[#c5a45b]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </>
            )}
          </NavLink>
        </nav>

        {/* Contact and CTA */}
        <div className="hidden shrink-0 items-center gap-4 lg:flex xl:gap-8">
          <motion.a
            whileHover={{ x: 3 }}
            href="tel:+10331234567"
            className="hidden items-center gap-2 whitespace-nowrap text-sm font-semibold text-white hover:text-[#c5a45b] transition-colors xl:flex xl:text-base 2xl:text-lg"
          >
            <Phone size={18} className="fill-[#c5a45b] text-[#c5a45b]" />
            <span>+(1) 033 1234-567</span>
          </motion.a>

          <NavLink
            to="/book"
            className="luxury-btn flex min-h-[44px] items-center justify-center rounded-lg bg-[#cbaa63] px-5 text-xs font-bold tracking-wide text-[#15130f] shadow-lg shadow-[#cbaa63]/20 hover:scale-104 transition-transform lg:min-h-[48px] lg:px-6 lg:text-sm"
          >
            Book A Chef
          </NavLink>
        </div>

        {/* Mobile menu toggle & Quick CTA */}
        <div className="flex items-center gap-2.5 sm:gap-3 lg:hidden">
          <NavLink
            to="/book"
            className="luxury-btn flex h-9 sm:h-10 items-center justify-center rounded-lg bg-[#cbaa63] px-3 sm:px-4 text-xs font-bold text-[#15130f]"
          >
            Book A Chef
          </NavLink>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            className="flex items-center gap-1.5 rounded-md border border-[#c5a45b]/50 bg-[#14120e] p-2 text-[#c5a45b] hover:bg-[#c5a45b]/10 transition-colors"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            <span className="text-xs font-semibold uppercase tracking-wider hidden sm:inline">Menu</span>
          </button>
        </div>

      </div>

      {/* Mobile Animated Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-[#3b3020] bg-[#14120e] px-6 py-6 lg:hidden max-h-[80vh] overflow-y-auto"
          >
            <div className="flex flex-col gap-3 text-base font-medium">
              <NavLink
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-[#c5a45b] py-1"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-[#c5a45b] py-1"
              >
                About Us
              </NavLink>
              <div>
                <NavLink
                  to="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white hover:text-[#c5a45b] py-1 block"
                >
                  Services
                </NavLink>
                <div className="flex flex-col gap-1.5 pl-4 pt-1 pb-2">
                  {[
                    { name: "Private Dining", path: "/services/private-dining" },
                    { name: "Special Events", path: "/services/special-events" },
                    { name: "Weekly Meal Prep", path: "/services/weekly-meal-prep" },
                  ].map((s) => (
                    <NavLink
                      key={s.name}
                      to={s.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-xs text-[#b8ad9e] hover:text-[#cba451] py-0.5"
                    >
                      ↳ {s.name}
                    </NavLink>
                  ))}
                </div>
              </div>

              {/* Mobile Pages Submenu */}
              <div className="py-2 border-y border-[#3b3020]/70">
                <span className="text-xs uppercase tracking-widest text-[#cba451] block mb-2 font-bold">
                  Pages
                </span>
                <div className="grid grid-cols-2 gap-2 pl-2">
                  {[
                    { name: "Menu Experience", path: "/menu" },
                    { name: "Gallery", path: "/gallery" },
                    { name: "Book A Chef", path: "/book" },
                    { name: "FAQ", path: "/faq" },
                    { name: "Blog", path: "/blog" },
                    { name: "Single Post", path: "/blog/culinary-artistry" },
                    { name: "404 Page", path: "/404" },
                  ].map((sub) => (
                    <NavLink
                      key={sub.name}
                      to={sub.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-sm text-[#b8ad9e] hover:text-[#cba451] py-1"
                    >
                      {sub.name}
                    </NavLink>
                  ))}
                </div>
              </div>

              <NavLink
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-[#c5a45b] py-1"
              >
                Contact Us
              </NavLink>

              <div className="mt-2 pt-4 border-t border-[#3b3020] flex flex-col gap-3">
                <a
                  href="tel:+10331234567"
                  className="flex items-center gap-2 text-sm text-[#c5a45b]"
                >
                  <Phone size={16} />
                  <span>+(1) 033 1234-567</span>
                </a>
                <NavLink
                  to="/book"
                  onClick={() => setMobileMenuOpen(false)}
                  className="luxury-btn flex h-12 items-center justify-center rounded-lg bg-[#cbaa63] text-sm font-bold text-[#15130f]"
                >
                  Book A Chef
                </NavLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;