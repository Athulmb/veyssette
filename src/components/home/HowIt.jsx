import React from "react";
import {
  ClipboardList,
  CalendarDays,
  ChefHat,
  Heart,
} from "lucide-react";

const HowIt = () => {
  const steps = [
    {
      number: "01.",
      title: "Book",
      description:
        "Choose your date and tell us about your preferences.",
      icon: ClipboardList,
    },
    {
      number: "02.",
      title: "Plan",
      description:
        "We create a custom menu just for you.",
      icon: CalendarDays,
    },
    {
      number: "03.",
      title: "Cook",
      description:
        "We cook in your kitchen while you relax.",
      icon: ChefHat,
    },
    {
      number: "04.",
      title: "Enjoy",
      description:
        "Savor every bite and we handle the cleanup.",
      icon: Heart,
    },
  ];

  return (
    <section className="w-full overflow-hidden bg-[#0d0c0a] px-5 py-20 text-[#f2e6d0] sm:px-8 lg:py-24">

      {/* Section Heading */}
      <div className="mb-20 text-center">
        {/* Decorative Ornament */}
        <div className="mb-3 flex justify-center text-[#cbaa63]">
          <svg
            width="140"
            height="34"
            viewBox="0 0 140 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M70 28 C60 10 38 5 17 11 C7 14 3 22 12 22 C20 22 18 13 11 16 M70 28 C80 10 102 5 123 11 C133 14 137 22 128 22 C120 22 122 13 129 16 M70 28 C64 20 65 12 70 5 C75 12 76 20 70 28 M70 14 C61 9 61 1 70 3 C79 1 79 9 70 14"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#cbaa63]">
          How It Works
        </p>

        <h2 className="mt-8 font-serif text-4xl leading-tight sm:text-5xl lg:text-[68px]">
          Simple, Personal &amp; Seamless
        </h2>
      </div>

      {/* Steps */}
      <div className="mx-auto grid max-w-[1700px] grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">

        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div
              key={step.number}
              className="relative flex flex-col items-center text-center"
            >
              {/* Icon Circle and Connector */}
              <div className="relative flex w-full items-center justify-center">

                <div className="flex h-[106px] w-[106px] items-center justify-center rounded-full border border-[#6a542d] text-[#cbaa63]">
                  <Icon
                    size={49}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                </div>

                {/* Connecting Line */}
                {index !== steps.length - 1 && (
                  <div className="absolute left-[calc(50%+122px)] hidden h-px w-[calc(100%-160px)] bg-[#514126] lg:block" />
                )}
              </div>

              {/* Step Title */}
              <h3 className="mt-10 font-serif text-[30px] text-[#e9dcc4]">
                {step.number} {step.title}
              </h3>

              {/* Description */}
              <p className="mt-6 max-w-[300px] text-[18px] leading-[1.8] text-[#b9ad9b]">
                {step.description}
              </p>
            </div>
          );
        })}

      </div>
    </section>
  );
};

export default HowIt;