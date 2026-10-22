import React, { useState } from "react";
import { Phone, ChevronDown, Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#c5a45b]/30 bg-[#0d0c0a]/90 text-white backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex min-h-[96px] max-w-[1920px] items-center justify-between gap-8 px-6 lg:px-8">

        {/* Logo */}
        <NavLink to="/" className="flex shrink-0 items-center">
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            src="/image/logo.webp"
            alt="Veyssette logo"
            className="h-[60px] w-auto object-contain cursor-pointer"
          />
        </NavLink>

        {/* Navigation */}
        <nav className="hidden items-center gap-10 xl:flex">
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

          <div className="group relative">
            <button
              type="button"
              aria-haspopup="true"
              className="relative flex items-center gap-1.5 pb-1 font-medium text-white/90 transition hover:text-[#c5a45b]"
            >
              Pages
              <ChevronDown size={14} className="text-[#c5a45b] transition-transform duration-300 group-hover:rotate-180" />
            </button>
            <div
              role="menu"
              className="invisible absolute right-0 top-full z-50 w-44 rounded-md border border-[#3b3020] bg-[#1a1712]/95 backdrop-blur-md opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:opacity-100 group-hover:translate-y-1"
            >
              {[
                "Menu Experience",
                "Gallery",
                "Services",
                "Book A Chef",
                "FAQ",
                "Blog",
                "Single Post",
                "404",
              ].map((item) => (
                <div
                  key={item}
                  role="menuitem"
                  className="border-b border-[#3b3020] px-5 py-3.5 text-sm font-medium text-white/90 last:border-b-0 hover:bg-[#242018] hover:text-[#c5a45b] transition-colors"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="group relative">
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `relative flex items-center gap-1.5 pb-1 font-medium transition ${
                  isActive ? "text-[#c5a45b]" : "text-white/90 hover:text-[#c5a45b]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Services
                  <ChevronDown size={14} className="text-[#c5a45b] transition-transform duration-300 group-hover:rotate-180" />
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
            <div
              role="menu"
              className="invisible absolute left-0 top-full z-50 w-56 rounded-md border border-[#3b3020] bg-[#1a1712]/95 backdrop-blur-md opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:opacity-100 group-hover:translate-y-1"
            >
              {["Private Dining", "Special Events", "Weekly Meal Prep"].map(
                (item) => (
                  <div
                    key={item}
                    role="menuitem"
                    className="border-b border-[#3b3020] px-5 py-3.5 text-sm font-medium text-white/90 last:border-b-0 hover:bg-[#242018] hover:text-[#c5a45b] transition-colors"
                  >
                    {item}
                  </div>
                )
              )}
            </div>
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
        <div className="hidden shrink-0 items-center gap-8 lg:flex">
          <motion.a
            whileHover={{ x: 3 }}
            href="tel:+10331234567"
            className="flex items-center gap-3 whitespace-nowrap text-lg font-semibold text-white hover:text-[#c5a45b] transition-colors"
          >
            <Phone size={20} className="fill-[#c5a45b] text-[#c5a45b]" />
            <span>+(1) 033 1234-567</span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            href="/contact"
            className="luxury-btn flex min-h-[52px] min-w-[170px] items-center justify-center rounded-lg bg-[#cbaa63] px-6 text-sm font-bold tracking-wide text-[#15130f] shadow-lg shadow-[#cbaa63]/20"
          >
            Book A Chef
          </motion.a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="rounded-md border border-[#c5a45b]/50 p-2.5 text-[#c5a45b] lg:hidden"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

      </div>

      {/* Mobile Animated Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-[#3b3020] bg-[#14120e] px-6 py-6 lg:hidden"
          >
            <div className="flex flex-col gap-4 text-base font-medium">
              <NavLink
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-[#c5a45b]"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-[#c5a45b]"
              >
                About Us
              </NavLink>
              <NavLink
                to="/services"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-[#c5a45b]"
              >
                Services
              </NavLink>
              <NavLink
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-[#c5a45b]"
              >
                Contact Us
              </NavLink>

              <div className="mt-4 pt-4 border-t border-[#3b3020] flex flex-col gap-3">
                <a
                  href="tel:+10331234567"
                  className="flex items-center gap-2 text-sm text-[#c5a45b]"
                >
                  <Phone size={16} />
                  <span>+(1) 033 1234-567</span>
                </a>
                <NavLink
                  to="/contact"
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