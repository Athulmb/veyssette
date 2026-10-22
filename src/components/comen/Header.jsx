import React from "react";
import { Phone, ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    /* Added border-b border-[#c5a45b]/30 for the bottom line */
    <header className="w-full border-b border-[#c5a45b]/30 bg-[#0d0c0a] text-white">
      <div className="mx-auto flex min-h-[104px] max-w-[1920px] items-center justify-between gap-8 px-6 lg:px-8">

        {/* Logo Only */}
        <a href="/" className="flex shrink-0 items-center">
          <img
            src="/image/logo.webp"
            alt="Veyssette logo"
            className="h-[64px] w-auto object-contain"
          />
        </a>

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
                  <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#c5a45b]" />
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
                  <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#c5a45b]" />
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
              <ChevronDown size={14} className="text-[#c5a45b]" />
            </button>
            <div
              role="menu"
              className="invisible absolute right-0 top-full z-50 w-44 border border-[#3b3020] bg-[#1a1712] opacity-0 shadow-xl transition-opacity duration-150 group-hover:visible group-hover:opacity-100"
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
                  className="border-b border-[#3b3020] px-5 py-4 text-sm font-medium text-white/90 last:border-b-0 hover:bg-[#242018] hover:text-[#c5a45b]"
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
                  <ChevronDown size={14} className="text-[#c5a45b]" />
                  {isActive && (
                    <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#c5a45b]" />
                  )}
                </>
              )}
            </NavLink>
            <div
              role="menu"
              className="invisible absolute left-0 top-full z-50 w-56 border border-[#3b3020] bg-[#1a1712] opacity-0 shadow-xl transition-opacity duration-150 group-hover:visible group-hover:opacity-100"
            >
              {["Private Dining", "Special Events", "Weekly Meal Prep"].map(
                (item) => (
                  <div
                    key={item}
                    role="menuitem"
                    className="border-b border-[#3b3020] px-5 py-4 text-sm font-medium text-white/90 last:border-b-0 hover:bg-[#242018] hover:text-[#c5a45b]"
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
                  <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#c5a45b]" />
                )}
              </>
            )}
          </NavLink>
        </nav>

        {/* Contact and CTA */}
        <div className="hidden shrink-0 items-center gap-8 lg:flex">
          <a
            href="tel:+10331234567"
            className="flex items-center gap-3 whitespace-nowrap text-lg font-semibold text-white"
          >
            <Phone size={20} className="fill-white text-white" />
            <span>+(1) 033 1234-567</span>
          </a>

          <a
            href="/book-a-chef"
            className="flex min-h-[56px] min-w-[180px] items-center justify-center rounded-lg bg-[#cbaa63] px-6 text-sm font-bold tracking-wide text-[#15130f] transition hover:bg-[#dfbd78]"
          >
            Book A Chef
          </a>
        </div>

        {/* Mobile menu placeholder */}
        <button
          type="button"
          aria-label="Open navigation menu"
          className="rounded-md border border-[#c5a45b]/50 p-2.5 text-[#c5a45b] lg:hidden"
        >
          <span className="text-xl">☰</span>
        </button>

      </div>
    </header>
  );
};

export default Header;