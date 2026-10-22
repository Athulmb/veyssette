import React from "react";

const OurServices = () => {
  const services = [
    {
      title: "Private Dinners",
      description:
        "Intimate and exclusive dinners prepared just for you and your guests.",
      image:
        "/image/magnific_luxury-gourmet-dining-tab_ONu4VlEynm.webp",
    },
    {
      title: "Weekly Meal Prep",
      description:
        "Healthy, personalized meals prepared weekly to save time and meet needs.",
      image:
        "/image/magnific_luxury-gourmet-prepared-m_WMgCsI7cXe-ro1qb09zgyvo0on08yv6k6ud5hky40q1brnneugod4.webp",
    },
    {
      title: "Special Events",
      description:
        "Custom menus for birthdays and special celebrations.",
      image:
        "/image/magnific_elegant-group-of-guests-r_vuAgZlia47-1024x765.webp",
    },
    {
      title: "Dietary Needs",
      description:
        "Menus adapted to dietary restrictions and specific preferences.",
      image:
        "/image/magnific_overhead-view-of-a-curate_Vd7FUKVMMU-1-e1780267900616-roaej2cafnjgu7x2lqjyonvm01kvmv5n4fd2u4h3yw.webp",
    },
  ];

  return (
    <section className="w-full bg-[#0a0907] px-6 py-16 text-[#f3eee3] md:px-12 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-[1700px]">
        
        {/* Top Header Section */}
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#cba451]">
              Our Services
            </p>
            <h2 className="font-serif text-4xl leading-[1.15] text-[#f3eee3] sm:text-5xl lg:text-[56px]">
              Culinary Experiences Made
              <br />
              For You
            </h2>
          </div>

          <div className="lg:pt-8">
            <p className="max-w-[580px] text-base leading-[1.7] text-[#b8ad9e] sm:text-lg">
              From intimate dinners to special celebrations, we offer a variety of
              services designed to make every occasion unique and stress-free. Our
              goal is to ensure that each event is a memorable experience filled with
              joy.
            </p>
          </div>
        </div>

        {/* 4 Cards Grid Section */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {services.map((service) => (
            <div key={service.title} className="flex flex-col">
              {/* Image Container with Border and Rounded Corners */}
              <div className="overflow-hidden rounded-xl border border-[#2a241b] bg-[#14120e]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-[210px] w-full object-cover transition duration-500 hover:scale-105 sm:h-[220px]"
                />
              </div>

              {/* Title */}
              <h3 className="mt-5 font-serif text-2xl font-normal text-[#f3eee3]">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-2.5 text-sm leading-relaxed text-[#b8ad9e]">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-14 flex justify-center">
          <a
            href="/services"
            className="flex h-[52px] items-center justify-center rounded-md bg-[#d8b065] px-8 text-sm font-semibold text-[#14120e] transition duration-300 hover:bg-[#e2bd78]"
          >
            View All Services
          </a>
        </div>

      </div>
    </section>
  );
};

export default OurServices;