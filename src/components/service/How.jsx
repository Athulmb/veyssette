import React from 'react';

const How = () => {
  const steps = [
    {
      number: "01.",
      title: "Book",
      description: "Choose your date and tell us about your preferences.",
      icon: (
        <svg className="w-6 h-6 text-[#d4af37]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012-2m-6 9l2 2 4-4" />
        </svg>
      )
    },
    {
      number: "02.",
      title: "Plan",
      description: "We create a custom menu just for you.",
      icon: (
        <svg className="w-6 h-6 text-[#d4af37]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      number: "03.",
      title: "Cook",
      description: "We cook in your kitchen while you relax.",
      icon: (
        <svg className="w-6 h-6 text-[#d4af37]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2c2.5 0 4.5 1.85 4.8 4.25A3.5 3.5 0 0119.5 9.75v.25a2 2 0 01-2 2h-11a2 2 0 01-2-2v-.25a3.5 3.5 0 012.7-3.5C7.5 3.85 9.5 2 12 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 14v6a1 1 0 001 1h10a1 1 0 001-1v-6" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17h6" />
        </svg>
      )
    },
    {
      number: "04.",
      title: "Enjoy",
      description: "Savor every bite and we handle the cleanup.",
      icon: (
        <svg className="w-6 h-6 text-[#d4af37]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="bg-[#0b0a08] text-[#f4eedf] font-sans">
      
      {/* Section 1: How It Works */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-20">
            {/* Decorative Ornament */}
            <div className="flex items-center justify-center mb-3">
              <svg className="w-16 h-6 text-[#d4af37]" viewBox="0 0 100 30" fill="currentColor">
                <path d="M50 0 C30 15 10 5 0 10 C10 15 30 25 50 30 C70 25 90 15 100 10 C90 5 70 15 50 0 Z" opacity="0.3" />
                <path d="M45 10 C48 12 52 12 55 10 C53 14 47 14 45 10 Z" fill="#d4af37" />
                <circle cx="50" cy="8" r="2" fill="#d4af37" />
                <path d="M20 12 Q50 22 80 12" fill="none" stroke="#d4af37" strokeWidth="1.5" />
              </svg>
            </div>
            <p className="text-[#d4af37] tracking-[0.25em] text-xs uppercase font-medium mb-3">
              How It Works
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal tracking-wide text-[#fcf8f2]">
              Simple, Personal & Seamless
            </h2>
          </div>

          {/* Steps Grid with Connecting Lines */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center relative group">
                
                {/* Connecting Line between steps (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[calc(50%+40px)] right-[calc(-50%+40px)] h-[1px] bg-[#3a352c] z-0"></div>
                )}

                {/* Circular Icon Badge */}
                <div className="w-20 h-20 rounded-full bg-[#12110e] border border-[#d4af37]/40 flex items-center justify-center mb-6 shadow-xl transition-transform duration-300 group-hover:scale-105 group-hover:border-[#d4af37] relative z-10">
                  {step.icon}
                </div>

                {/* Step Title & Description */}
                <h3 className="text-xl font-serif text-[#fcf8f2] mb-3 tracking-wide">
                  <span className="text-[#d4af37] mr-1 font-sans text-lg">{step.number}</span> {step.title}
                </h3>
                <p className="text-[#a39e93] text-sm leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Section 2: Call to Action Banner */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="relative border border-[#221f1a] bg-[#12110e] py-16 px-6 sm:px-12 lg:px-20 overflow-hidden flex flex-col items-center text-center shadow-2xl">
            
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#fcf8f2] tracking-wide mb-8 max-w-2xl leading-tight">
              Ready To Create Something Extraordinary?
            </h2>

            {/* Button */}
            <button 
              type="button"
              className="bg-[#d4af37] hover:bg-[#c39f2f] text-[#0b0a08] font-medium text-xs sm:text-sm uppercase tracking-[0.2em] py-4 px-8 transition-colors duration-300 shadow-lg cursor-pointer"
            >
              Book Your Experience
            </button>

          </div>
        </div>
      </section>

    </div>
  );
};

export default How;