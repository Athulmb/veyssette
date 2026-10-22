
import React from "react";

export const RedyTo = () => {
  return (
    <section className="w-full bg-[#0d0c0a] px-4 py-10 sm:px-6 md:px-8 md:py-16">
      <div
        className="relative flex min-h-[300px] items-center justify-center overflow-hidden rounded-md border border-[#4c4025] bg-cover bg-center px-5 py-16 sm:min-h-[360px] md:min-h-[450px]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1515003197210-e0cd7184f8b5?auto=format&fit=crop&w=2000&q=85')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <h2 className="mb-8 font-serif text-3xl font-medium leading-tight text-[#f4e8cf] sm:text-4xl md:text-5xl lg:text-6xl">
            Ready To Enjoy An Unforgettable
            <br className="hidden md:block" /> Culinary Experience?
          </h2>

          <button className="rounded-lg bg-[#cba65b] px-10 py-4 text-base font-semibold text-black transition duration-300 hover:bg-[#e0bd76] sm:px-14 sm:text-lg">
            Book Your Chef
          </button>
        </div>
      </div>
    </section>
  );
};

export default RedyTo;
