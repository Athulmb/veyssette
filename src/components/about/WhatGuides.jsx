
import React from 'react';
import {
  Soup,
  House,
  HandHeart,
  Heart,
} from 'lucide-react';

export const WhatGuides = () => {
  const values = [
    {
      title: 'Quality',
      subtitle: 'Ingredients',
      description:
        'Tailored to your tastes, dietary needs and lifestyle.',
      Icon: Soup,
    },
    {
      title: 'Culinary',
      subtitle: 'Excellence',
      description:
        'We use fresh, seasonal and high-quality ingredients.',
      Icon: House,
    },
    {
      title: 'Personalized',
      subtitle: 'Service',
      description:
        'We use fresh, seasonal and high-quality ingredients.',
      Icon: HandHeart,
    },
    {
      title: 'Memorable',
      subtitle: 'Experiences',
      description:
        'We use fresh, seasonal and high-quality ingredients.',
      Icon: Heart,
    },
  ];

  return (
    <section className="bg-[#191612] px-3 py-10 sm:px-6 lg:py-8">
      <div className="relative mx-auto max-w-[1800px] overflow-hidden rounded-md border border-[#594727] bg-[#0e0c0a] px-5 py-16 sm:px-10 lg:px-12 lg:py-20">

        {/* Gold Decorative Particles */}
        <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-between">
          <div className="h-52 w-48 rounded-full bg-[radial-gradient(ellipse_at_top_left,rgba(194,145,36,0.20),transparent_70%)]" />
          <div className="h-52 w-48 rounded-full bg-[radial-gradient(ellipse_at_top_right,rgba(194,145,36,0.20),transparent_70%)]" />
        </div>

        {/* Heading */}
        <div className="relative z-10 mb-16 text-center sm:mb-20">
          <p className="mb-7 text-sm font-bold uppercase tracking-[0.3em] text-[#cba34f]">
            What Guides Us
          </p>

          <h2 className="font-serif text-4xl leading-tight text-[#f2e5cb] sm:text-5xl lg:text-[64px]">
            Our Values In Every Detail
          </h2>
        </div>

        {/* Values Grid */}
        <div className="relative z-10 mx-auto grid max-w-[1550px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ title, subtitle, description, Icon }, index) => (
            <div
              key={title}
              className={`flex flex-col items-center px-5 py-8 text-center sm:px-8 lg:py-0 ${
                index !== 3
                  ? 'lg:border-r lg:border-[#423725]'
                  : ''
              } ${
                index < 2
                  ? 'sm:border-b sm:border-[#423725] lg:border-b-0'
                  : ''
              } ${
                index === 0 || index === 2
                  ? 'sm:border-r sm:border-[#423725] lg:border-r'
                  : ''
              }`}
            >
              <Icon
                size={66}
                strokeWidth={1.8}
                className="mb-8 text-[#cba653]"
              />

              <h3 className="mb-7 font-serif text-2xl leading-tight text-[#f3e6cf] sm:text-[30px]">
                {title}
                <br />
                {subtitle}
              </h3>

              <p className="max-w-[290px] text-base leading-8 text-[#c6b69b] sm:text-lg">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatGuides;
