import React, { useState, useEffect } from "react";
import {
  Phone,
  ChevronDown,
  Menu,
  X,
  Sparkles,
  Calendar,
  ArrowRight,
  Utensils,
  BookOpen,
  HelpCircle,
  Image as ImageIcon,
  FileText,
  Clock,
  Compass,
} from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'pages' | 'services' | null
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobilePagesOpen, setMobilePagesOpen] = useState(false);
  const location = useLocation();

  // Close menus & dropdowns when route changes
  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Handle ESC key to close menus
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const servicesList = [
    {
      name: "Private Dining",
      path: "/services/private-dining",
      desc: "Intimate multi-course bespoke dining",
      icon: Utensils,
    },
    {
      name: "Special Events",
      path: "/services/special-events",
      desc: "Curated gatherings & celebrations",
      icon: Sparkles,
    },
    {
      name: "Weekly Meal Prep",
      path: "/services/weekly-meal-prep",
      desc: "Artisan gourmet nutrition tailored to you",
      icon: Clock,
    },
  ];

  const pagesList = [
    { name: "Menu Experience", path: "/menu", icon: Utensils },
    { name: "Gallery Showcase", path: "/gallery", icon: ImageIcon },
    { name: "Book A Chef", path: "/book", icon: Calendar },
    { name: "FAQ Guide", path: "/faq", icon: HelpCircle },
    { name: "Culinary Journal", path: "/blog", icon: BookOpen },
    { name: "Featured Story", path: "/blog/culinary-artistry", icon: FileText },
    { name: "Services Overview", path: "/services", icon: Compass },
    { name: "404 Page", path: "/404", icon: FileText },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-[#c5a45b]/30 bg-[#0d0c0a]/92 text-white backdrop-blur-md transition-all duration-300">
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

          {/* Desktop Navigation (Visible on lg >= 1024px including 1073px, 1280px, etc.) */}
          <nav className="hidden items-center gap-5 lg:flex xl:gap-8 2xl:gap-10 text-sm xl:text-base">
            {/* Home */}
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

            {/* About Us */}
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

            {/* Services Dropdown */}
            <div
              className="relative py-2"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="flex items-center gap-1.5 cursor-pointer">
                <NavLink
                  to="/services"
                  onClick={() => setActiveDropdown(null)}
                  className={({ isActive }) =>
                    `relative pb-1 font-medium transition ${
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
                  aria-label="Toggle services menu"
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

              {/* Invisible hover bridge to prevent menu closing */}
              <AnimatePresence>
                {activeDropdown === "services" && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                    role="menu"
                    className="absolute left-0 top-full pt-2 z-50 w-72"
                  >
                    <div className="rounded-xl border border-[#c5a45b]/30 bg-[#14120e]/98 p-2 shadow-2xl backdrop-blur-xl">
                      <div className="px-3 py-2 border-b border-[#3b3020]/60 mb-1">
                        <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#c5a45b]">
                          Culinary Services
                        </span>
                      </div>
                      {servicesList.map((item) => {
                        const Icon = item.icon;
                        return (
                          <NavLink
                            key={item.name}
                            to={item.path}
                            role="menuitem"
                            onClick={() => setActiveDropdown(null)}
                            className={({ isActive }) =>
                              `group flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all ${
                                isActive
                                  ? "bg-[#252119] text-[#c5a45b]"
                                  : "text-white/85 hover:bg-[#201d16] hover:text-[#c5a45b]"
                              }`
                            }
                          >
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-[#c5a45b]/30 bg-[#1c1812] text-[#c5a45b] group-hover:border-[#c5a45b]">
                              <Icon size={14} />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-sm font-medium">{item.name}</span>
                              <span className="text-[11px] text-[#9c9182] group-hover:text-[#bdae9c]">
                                {item.desc}
                              </span>
                            </div>
                          </NavLink>
                        );
                      })}
                      <div className="mt-1 pt-1.5 border-t border-[#3b3020]/60">
                        <NavLink
                          to="/services"
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-center justify-between rounded-lg px-3 py-2 text-xs font-semibold text-[#c5a45b] hover:bg-[#201d16] transition-colors"
                        >
                          <span>Explore All Services</span>
                          <ArrowRight size={13} />
                        </NavLink>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Pages Dropdown */}
            <div
              className="relative py-2"
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
                    initial={{ opacity: 0, y: 6, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                    role="menu"
                    className="absolute left-1/2 -translate-x-1/2 top-full pt-2 z-50 w-64"
                  >
                    <div className="rounded-xl border border-[#c5a45b]/30 bg-[#14120e]/98 p-2 shadow-2xl backdrop-blur-xl">
                      <div className="px-3 py-2 border-b border-[#3b3020]/60 mb-1">
                        <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#c5a45b]">
                          Site Navigation
                        </span>
                      </div>
                      <div className="grid grid-cols-1 gap-0.5">
                        {pagesList.map((item) => {
                          const Icon = item.icon;
                          return (
                            <NavLink
                              key={item.name}
                              to={item.path}
                              role="menuitem"
                              onClick={() => setActiveDropdown(null)}
                              className={({ isActive }) =>
                                `flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs xl:text-sm font-medium transition-colors ${
                                  isActive
                                    ? "bg-[#252119] text-[#c5a45b]"
                                    : "text-white/85 hover:bg-[#201d16] hover:text-[#c5a45b]"
                                }`
                              }
                            >
                              <Icon size={14} className="text-[#c5a45b]/70 shrink-0" />
                              <span>{item.name}</span>
                            </NavLink>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Contact Us */}
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

          {/* Desktop Right CTA (Visible on lg >= 1024px) */}
          <div className="hidden shrink-0 items-center gap-4 lg:flex xl:gap-8">
            <motion.a
              whileHover={{ x: 3 }}
              href="tel:+10331234567"
              className="flex items-center gap-2.5 whitespace-nowrap text-sm font-semibold text-white hover:text-[#c5a45b] transition-colors xl:text-base 2xl:text-lg"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c5a45b]/40 bg-[#1a1712] text-[#c5a45b] shadow-sm">
                <Phone size={17} className="fill-[#c5a45b]" />
              </div>
              <span>+(1) 033 1234-567</span>
            </motion.a>

            <NavLink
              to="/book"
              className="luxury-btn flex min-h-[44px] items-center justify-center rounded-lg bg-[#cbaa63] px-5 text-xs font-bold tracking-wide text-[#15130f] shadow-lg shadow-[#cbaa63]/20 hover:scale-104 transition-transform lg:min-h-[48px] lg:px-6 lg:text-sm"
            >
              Book A Chef
            </NavLink>
          </div>

          {/* Mobile/Tablet Bar Actions (Visible on < 1024px) */}
          <div className="flex items-center gap-2.5 sm:gap-3 lg:hidden">
            {/* Quick Call Icon Button */}
            <a
              href="tel:+10331234567"
              aria-label="Direct Call Concierge"
              className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-[#c5a45b]/40 bg-[#181510] text-[#c5a45b] shadow-sm hover:border-[#c5a45b] hover:bg-[#c5a45b]/15 active:scale-95 transition-all"
            >
              <Phone size={16} className="fill-[#c5a45b]" />
            </a>

            {/* Quick Book CTA Button */}
            <NavLink
              to="/book"
              className="luxury-btn flex h-9 sm:h-10 items-center justify-center rounded-lg bg-[#cbaa63] px-3 sm:px-4 text-xs font-bold text-[#15130f] shadow-md hover:bg-[#dfbd72] active:scale-95 transition-all"
            >
              Book A Chef
            </NavLink>

            {/* Luxury Animated Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              className="relative flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-[#c5a45b]/50 bg-[#1c1812]/95 text-[#c5a45b] shadow-md shadow-black/40 hover:border-[#c5a45b] hover:bg-[#c5a45b]/15 active:scale-95 transition-all focus:outline-none"
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close-icon"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu-icon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>

        </div>
      </header>

      {/* Luxury Mobile Slide-Over Drawer & Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden overflow-hidden">
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              aria-hidden="true"
            />

            {/* Slide-over Drawer */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 flex w-full max-w-[390px] sm:max-w-[420px] flex-col justify-between bg-[#0e0c09] border-l border-[#c5a45b]/30 shadow-[-15px_0_40px_rgba(0,0,0,0.9)] overflow-hidden"
              aria-label="Mobile Navigation"
            >
              {/* Drawer Top Bar */}
              <div className="flex h-18 sm:h-20 items-center justify-between border-b border-[#3b3020]/80 px-5 sm:px-6 bg-[#13110d]">
                <NavLink
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3"
                >
                  <img
                    src="/image/logo.webp"
                    alt="Veyssette logo"
                    className="h-9 sm:h-10 w-auto object-contain"
                  />
                </NavLink>

                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                  className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-[#c5a45b]/40 bg-[#1c1812] text-[#c5a45b] hover:border-[#c5a45b] hover:bg-[#c5a45b]/20 active:scale-95 transition-all"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Drawer Scrollable Content */}
              <div className="flex-1 overflow-y-auto px-5 py-5 space-y-4">

                {/* Primary Nav Links */}
                <div className="flex flex-col space-y-1.5">
                  {/* Home */}
                  <NavLink
                    to="/"
                    end
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold transition-all ${
                        isActive
                          ? "border border-[#c5a45b]/40 bg-[#1e1a14] text-[#c5a45b]"
                          : "text-white/90 hover:bg-[#181510] hover:text-[#c5a45b]"
                      }`
                    }
                  >
                    <span>Home</span>
                    <ArrowRight size={16} className="text-[#c5a45b]/60" />
                  </NavLink>

                  {/* About Us */}
                  <NavLink
                    to="/about"
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold transition-all ${
                        isActive
                          ? "border border-[#c5a45b]/40 bg-[#1e1a14] text-[#c5a45b]"
                          : "text-white/90 hover:bg-[#181510] hover:text-[#c5a45b]"
                      }`
                    }
                  >
                    <span>About Us</span>
                    <ArrowRight size={16} className="text-[#c5a45b]/60" />
                  </NavLink>

                  {/* Services Collapsible Accordion */}
                  <div className="rounded-xl border border-[#3b3020]/80 bg-[#14120e] overflow-hidden transition-colors">
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="flex w-full items-center justify-between px-4 py-3.5 text-left text-base font-semibold text-white/90 hover:text-[#c5a45b] transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <span>Services</span>
                        <span className="rounded-full border border-[#c5a45b]/40 bg-[#241f17] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#c5a45b]">
                          3 Offerings
                        </span>
                      </div>
                      <ChevronDown
                        size={18}
                        className={`text-[#c5a45b] transition-transform duration-300 ${
                          mobileServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="border-t border-[#3b3020]/60 bg-[#100e0a] px-3 py-2 space-y-1.5"
                        >
                          {servicesList.map((s) => {
                            const Icon = s.icon;
                            return (
                              <NavLink
                                key={s.name}
                                to={s.path}
                                onClick={() => setMobileMenuOpen(false)}
                                className={({ isActive }) =>
                                  `flex items-start gap-3 rounded-lg p-2.5 transition-all ${
                                    isActive
                                      ? "bg-[#201c15] text-[#c5a45b]"
                                      : "text-white/80 hover:bg-[#1a1712] hover:text-[#c5a45b]"
                                  }`
                                }
                              >
                                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-[#c5a45b]/30 bg-[#16130e] text-[#c5a45b]">
                                  <Icon size={14} />
                                </div>
                                <div className="flex flex-col">
                                  <span className="text-sm font-medium">{s.name}</span>
                                  <span className="text-[11px] text-[#918575] leading-tight">
                                    {s.desc}
                                  </span>
                                </div>
                              </NavLink>
                            );
                          })}

                          <NavLink
                            to="/services"
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center justify-between rounded-lg px-3 py-2 text-xs font-semibold text-[#c5a45b] hover:bg-[#1a1712] transition-colors mt-1"
                          >
                            <span>View All Services</span>
                            <ArrowRight size={13} />
                          </NavLink>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Pages Collapsible Accordion */}
                  <div className="rounded-xl border border-[#3b3020]/80 bg-[#14120e] overflow-hidden transition-colors">
                    <button
                      type="button"
                      onClick={() => setMobilePagesOpen(!mobilePagesOpen)}
                      className="flex w-full items-center justify-between px-4 py-3.5 text-left text-base font-semibold text-white/90 hover:text-[#c5a45b] transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <span>Pages & Experiences</span>
                        <span className="rounded-full border border-[#c5a45b]/40 bg-[#241f17] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#c5a45b]">
                          Explore
                        </span>
                      </div>
                      <ChevronDown
                        size={18}
                        className={`text-[#c5a45b] transition-transform duration-300 ${
                          mobilePagesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {mobilePagesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="border-t border-[#3b3020]/60 bg-[#100e0a] p-2.5"
                        >
                          <div className="grid grid-cols-2 gap-1.5">
                            {pagesList.map((page) => {
                              const Icon = page.icon;
                              return (
                                <NavLink
                                  key={page.name}
                                  to={page.path}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className={({ isActive }) =>
                                    `flex items-center gap-2 rounded-lg p-2 text-xs font-medium transition-colors ${
                                      isActive
                                        ? "bg-[#221d16] text-[#c5a45b] border border-[#c5a45b]/30"
                                        : "text-white/80 hover:bg-[#1a1712] hover:text-[#c5a45b]"
                                    }`
                                  }
                                >
                                  <Icon size={13} className="text-[#c5a45b] shrink-0" />
                                  <span className="truncate">{page.name}</span>
                                </NavLink>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Contact Us */}
                  <NavLink
                    to="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold transition-all ${
                        isActive
                          ? "border border-[#c5a45b]/40 bg-[#1e1a14] text-[#c5a45b]"
                          : "text-white/90 hover:bg-[#181510] hover:text-[#c5a45b]"
                      }`
                    }
                  >
                    <span>Contact Us</span>
                    <ArrowRight size={16} className="text-[#c5a45b]/60" />
                  </NavLink>
                </div>

                {/* Concierge Reservation Card */}
                <div className="rounded-2xl border border-[#c5a45b]/35 bg-gradient-to-b from-[#1b1712] to-[#12100d] p-4 shadow-xl">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a45b]">
                      Private Dining Concierge
                    </span>
                    <span className="flex items-center gap-1.5 text-[11px] text-[#86e39c]">
                      <span className="h-2 w-2 rounded-full bg-[#34d399] animate-pulse" />
                      Available Now
                    </span>
                  </div>

                  <a
                    href="tel:+10331234567"
                    className="flex items-center gap-3 rounded-xl border border-[#3b3020] bg-[#14120e] p-3 text-white hover:border-[#c5a45b]/60 transition-colors group mb-3"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#c5a45b]/20 text-[#c5a45b] group-hover:bg-[#c5a45b] group-hover:text-black transition-colors">
                      <Phone size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-semibold text-[#9e9282]">
                        Speak with our team
                      </p>
                      <p className="text-sm font-bold text-white group-hover:text-[#c5a45b] transition-colors">
                        +(1) 033 1234-567
                      </p>
                    </div>
                  </a>

                  <NavLink
                    to="/book"
                    onClick={() => setMobileMenuOpen(false)}
                    className="luxury-btn flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#cbaa63] text-sm font-bold uppercase tracking-wider text-[#15130f] shadow-lg shadow-[#cbaa63]/25 active:scale-98 transition-transform"
                  >
                    <Calendar size={17} />
                    <span>Book A Chef</span>
                  </NavLink>
                </div>

              </div>

              {/* Drawer Footer with Socials */}
              <div className="border-t border-[#3b3020]/80 bg-[#110f0b] px-6 py-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#8c8070]">Connect with us</span>
                  <div className="flex items-center gap-3 text-[#c5a45b]">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="p-1.5 rounded-full hover:bg-[#201c15] hover:text-white transition-colors"
                    >
                      <FaInstagram size={17} />
                    </a>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="p-1.5 rounded-full hover:bg-[#201c15] hover:text-white transition-colors"
                    >
                      <FaFacebook size={17} />
                    </a>
                    <a
                      href="https://x.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="X Twitter"
                      className="p-1.5 rounded-full hover:bg-[#201c15] hover:text-white transition-colors"
                    >
                      <FaXTwitter size={16} />
                    </a>
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="YouTube"
                      className="p-1.5 rounded-full hover:bg-[#201c15] hover:text-white transition-colors"
                    >
                      <FaYoutube size={17} />
                    </a>
                  </div>
                </div>
              </div>

            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;