import React from 'react';

export default function WhatWe() {
  const services = [
    {
      title: "Private Dining",
      description: "Exclusive in-home dining experiences crafted just for you and your guests. Perfect for intimate dinners and memorable nights.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Meal Prep",
      description: "Weekly or custom meal plans designed around your goals and preferences. Healthy, delicious and ready when you are.",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Special Events",
      description: "From birthdays to anniversaries, we create extraordinary culinary experiences for your most important celebrations.",
      image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Corporate Dining",
      description: "Elevate your business gatherings with refined menus and seamless service that impresses every time.",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Wellness & Dietary Plans",
      description: "Specialized menus for vegan, keto, gluten-free and other dietary needs without compromising on flavor or creativity.",
      image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Wine Pairing Experience",
      description: "Carefully selected wine pairings designed to complement every dish and enhance the entire dining experience.",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <section className="bg-[#0b0a08] text-[#f4eedf] py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          {/* Decorative Top Icon / Ornament */}
          <div className="flex items-center justify-center mb-3">
            <svg className="w-16 h-6 text-[#d4af37]" viewBox="0 0 100 30" fill="currentColor">
              <path d="M50 0 C30 15 10 5 0 10 C10 15 30 25 50 30 C70 25 90 15 100 10 C90 5 70 15 50 0 Z" opacity="0.3" />
              <path d="M45 10 C48 12 52 12 55 10 C53 14 47 14 45 10 Z" fill="#d4af37" />
              <circle cx="50" cy="8" r="2" fill="#d4af37" />
              <path d="M20 12 Q50 22 80 12" fill="none" stroke="#d4af37" strokeWidth="1.5" />
            </svg>
          </div>
          <p className="text-[#d4af37] tracking-[0.25em] text-xs uppercase font-medium mb-3">
            What We Offer
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal tracking-wide mb-4 text-[#fcf8f2]">
            Services Tailored To Every Occasion
          </h2>
          <p className="text-[#a39e93] text-sm sm:text-base leading-relaxed">
            Every experience is fully customized, from the menu to the final detail, to create moments that are unique, delicious and unforgettable.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-[#12110e] border border-[#221f1a] flex flex-col justify-between overflow-hidden group transition-all duration-300 hover:border-[#d4af37]/40"
            >
              {/* Image & Centered Badge Container */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Dark Gradient Overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#12110e] via-transparent to-black/20 opacity-60"></div>

                {/* Chef Hat Icon Badge (Overlapping bottom border of image) */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-12 h-12 rounded-full bg-[#12110e] border border-[#d4af37]/60 flex items-center justify-center shadow-xl">
                    <svg className="w-5 h-5 text-[#d4af37]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2c2.5 0 4.5 1.85 4.8 4.25A3.5 3.5 0 0119.5 9.75v.25a2 2 0 01-2 2h-11a2 2 0 01-2-2v-.25a3.5 3.5 0 012.7-3.5C7.5 3.85 9.5 2 12 2z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 14v6a1 1 0 001 1h10a1 1 0 001-1v-6" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17h6" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Card Content with Further Increased Padding & Height */}
              <div className="pt-16 pb-14 px-8 text-center flex flex-col flex-grow justify-between min-h-[290px]">
                <div>
                  <h3 className="text-xl font-serif text-[#fcf8f2] mb-4 tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-[#a39e93] text-sm leading-relaxed mb-8">
                    {service.description}
                  </p>
                </div>
                
                <div>
                  <a 
                    href="#learn-more" 
                    className="inline-flex items-center justify-center text-xs uppercase tracking-[0.2em] text-[#d4af37] font-medium hover:text-[#e5c158] transition-colors group/link"
                  >
                    <span>Learn More</span>
                    <span className="ml-2 transform transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}