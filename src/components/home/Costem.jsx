import React from "react";
import { ClipboardList, Utensils, Home, Sparkles } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: ClipboardList,
      title: "Custom\nMenus",
      description: "Tailored to your tastes, dietary needs and lifestyle.",
    },
    {
      icon: Utensils,
      title: "Premium\nIngredients",
      description: "We use fresh, seasonal and high-quality ingredients.",
    },
    {
      icon: Home,
      title: "In-Home\nExperience",
      description: "Relax and enjoy as we prepare your kitchen.",
    },
    {
      icon: Sparkles,
      title: "Impeccable\nService",
      description: "Professional, discreet and dedicated to every detail.",
    },
  ];

  return (
    <section className="w-full bg-[#0a0907] px-4 py-12 sm:px-8 sm:py-16">
      {/* Curved Container Wrapper */}
      <div className="mx-auto max-w-[1920px] rounded-[50px] sm:rounded-[100px] lg:rounded-[180px] bg-[#14120e] px-6 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-24">
        
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`flex flex-col items-center text-center px-4 sm:px-6 ${
                  /* Adding vertical divider lines between columns on desktop */
                  index !== features.length - 1
                    ? "lg:border-r lg:border-[#cba451]/20"
                    : ""
                }`}
              >
                {/* Gold Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center text-[#cba451]">
                  <Icon size={42} strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="whitespace-pre-line font-serif text-2xl font-normal leading-tight text-[#f3eee3] sm:text-3xl">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-4 max-w-[240px] text-sm leading-relaxed text-[#b8ad9e] sm:text-base">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Features;