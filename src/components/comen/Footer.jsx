import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const pages = [
    { name: "Homepage", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Menu Experience", path: "/menu" },
    { name: "Gallery", path: "/gallery" },
    { name: "Book A Chef", path: "/book" },
    { name: "FAQ", path: "/faq" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    "Private Dining",
    "Weekly Meal Prep",
    "Special Events",
    "Dietary Needs",
    "Corporate Dining",
    "Wine Pairing Experience",
  ];

  const socialLinks = [
    { name: "Facebook", icon: FaFacebook, url: "https://facebook.com" },
    { name: "X", icon: FaXTwitter, url: "https://x.com" },
    { name: "YouTube", icon: FaYoutube, url: "https://youtube.com" },
    { name: "Instagram", icon: FaInstagram, url: "https://instagram.com" },
  ];

  return (
    <footer className="w-full bg-[#0d0c0a] px-6 py-14 text-[#f5eee1] md:px-8 lg:py-[76px]">

      {/* Main Footer */}
      <div className="mx-auto grid max-w-[1800px] grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.65fr_1fr_1fr_1.1fr_35px] lg:gap-8">

        {/* Logo and Description */}
        <div>
          <a href="/" className="mb-10 flex items-center gap-4">
            <img
              src="/logo.png"
              alt="Veyssette Logo"
              className="h-[72px] w-[72px] shrink-0 object-contain"
            />

            <div className="min-w-0">
              <h2 className="whitespace-nowrap font-serif text-2xl tracking-[0.19em] text-[#c6a052] md:text-[30px]">
                VEYSSETTE
              </h2>

              <p className="mt-1 whitespace-nowrap border-b border-[#c6a052]/40 pb-1 text-center text-[8px] tracking-[0.25em] text-[#c6a052]">
                PERSONAL CHEF EXPERIENCE
              </p>
            </div>
          </a>

          <p className="max-w-[530px] text-[18px] leading-[1.95] text-[#c8bdac]">
            Crafting unforgettable private dining experiences
            through refined cuisine, elegant presentation and
            personalized hospitality.
          </p>
        </div>

        {/* Our Pages */}
        <div>
          <h3 className="mb-10 font-serif text-[30px] font-normal text-[#d0a34c]">
            Our Pages
          </h3>

          <ul className="space-y-4">
            {pages.map((page) => (
              <li key={page.name}>
                <Link
                  to={page.path}
                  className="text-[17px] font-semibold transition-colors duration-300 hover:text-[#d0a34c]"
                >
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="mb-10 font-serif text-[30px] font-normal text-[#d0a34c]">
            Services
          </h3>

          <ul className="space-y-5">
            {services.map((service) => (
              <li key={service}>
                <a
                  href="/services"
                  className="text-[18px] font-semibold transition-colors duration-300 hover:text-[#d0a34c]"
                >
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="mb-10 font-serif text-[30px] font-normal text-[#d0a34c]">
            Support
          </h3>

          <address className="mb-10 text-[17px] not-italic leading-[1.8] text-[#c8bdac]">
            18 W 27th Street, New York NY 10001
            <br />
            — United States
          </address>

          <div className="space-y-1 text-[17px] leading-[1.7] text-[#c8bdac]">
            <a
              href="tel:+12128452741"
              className="block transition hover:text-[#d0a34c]"
            >
              +1 (212) 845 2741
            </a>

            <a
              href="tel:+16469031187"
              className="block transition hover:text-[#d0a34c]"
            >
              +1 (646) 903 1187
            </a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-start gap-5 sm:col-span-2 lg:col-span-1 lg:flex-col lg:items-end lg:gap-5">
          {socialLinks.map(({ name, icon: Icon, url }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noreferrer"
              aria-label={name}
              className="text-[#c9a451] transition duration-300 hover:scale-110 hover:text-white"
            >
              <Icon size={28} />
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Border and Copyright */}
      <div className="mx-auto mt-[82px] flex max-w-[1800px] flex-col justify-between gap-6 border-t border-[#65512d]/60 pt-10 lg:flex-row lg:items-center">

        <div className="flex flex-wrap gap-x-6 gap-y-4">
          {[
            "Careers",
            "Privacy Policy",
            "Sitemap",
            "Terms & Conditions",
          ].map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and")}`}
              className="text-[17px] font-semibold transition-colors duration-300 hover:text-[#d0a34c]"
            >
              {item}
            </a>
          ))}
        </div>

        <p className="text-[16px] text-[#c8bdac]">
          Veyssette © 2026 All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;