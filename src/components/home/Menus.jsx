import React from "react";

const Menus = () => {
  const dishes = [
    {
      name: "Seared Filet Mignon",
      price: "$20",
      description:
        "Truffle potato purée, roasted vegetables and red wine reduction.",
      image:
        "/image/magnific_centered-gourmet-filet-mi_xgBZ2UJjfW-ro1pbiv5duej2depdsepykh5torl28prtmmfjo9i88.webp",
    },
    {
      name: "Burrata & Heirloom Tomatoes",
      price: "$9",
      description:
        "Fresh basil, aged balsamic glaze and artisan olive oil.",
      image:
        "/image/magnific_centered-burrata-salad-vi_vuAgUL0a47-ro1pbw0w1iwjkwvl8y3hxh5m52yq2060jfr89jpzt4.webp",
    },
  ];

  return (
    <section className="w-full bg-[#0a0907] px-6 py-16 text-[#f3eee3] md:px-12 lg:px-16 lg:py-24">
      <div className="mx-auto grid max-w-[1700px] grid-cols-1 items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">

        {/* Left Content */}
        <div className="flex flex-col items-start justify-center">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#cba451]">
            Featured Menus
          </p>

          <h2 className="max-w-[550px] font-serif text-4xl leading-[1.15] text-[#f3eee3] sm:text-5xl lg:text-[56px]">
            A Taste Of What We Create
          </h2>

          <p className="mt-6 max-w-[500px] text-base leading-[1.7] text-[#b8ad9e] sm:text-lg">
            Experience thoughtfully curated dishes crafted with seasonal
            ingredients, refined techniques and unforgettable presentation
            designed for intimate luxury dining.
          </p>

          <button
            type="button"
            className="mt-8 flex h-[52px] items-center justify-center rounded-md bg-[#d8b065] px-8 text-sm font-semibold text-[#14120e] transition duration-300 hover:bg-[#e2bd78]"
          >
            See Full Menu
          </button>
        </div>

        {/* Right Menu Items */}
        <div className="flex flex-col gap-10 sm:gap-12">
          {dishes.map((dish) => (
            <article
              key={dish.name}
              className="grid grid-cols-1 items-center gap-6 sm:grid-cols-[260px_1fr] sm:gap-8 lg:grid-cols-[280px_1fr]"
            >
              {/* Circular Food Image Container */}
              <div className="mx-auto aspect-square h-[240px] w-[240px] shrink-0 overflow-hidden rounded-full sm:h-[260px] sm:w-[260px] lg:h-[280px] lg:w-[280px]">
                <img
                  src={dish.image}
                  alt={dish.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              {/* Dish Details */}
              <div className="w-full">
                <div className="flex items-center gap-3">
                  <h3 className="font-serif text-2xl font-normal text-[#f3eee3] sm:text-3xl">
                    {dish.name}
                  </h3>

                  <div className="min-w-4 flex-1 border-b border-dotted border-[#cba451]/50" />

                  <span className="font-serif text-xl font-medium text-[#cba451] sm:text-2xl">
                    {dish.price}
                  </span>
                </div>

                <p className="mt-3 max-w-[420px] text-sm leading-relaxed text-[#b8ad9e] sm:text-base">
                  {dish.description}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Menus;