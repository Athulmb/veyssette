import React from 'react';

export const HeroContact = () => {
  return (
    <div className="bg-[#0b0a08] text-[#f4eedf] min-h-[500px] lg:min-h-[600px] flex items-center relative overflow-hidden font-sans px-4 sm:px-6 lg:px-12 py-12">
      
      {/* Background Watermark Decorative Emblem */}
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 -translate-x-1/2 opacity-5 pointer-events-none hidden lg:block">
        <svg className="w-[500px] h-[500px] text-[#d4af37]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-w-full w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Content Column */}
        <div className="lg:col-span-6 flex flex-col justify-center text-left">
          
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.2em] mb-6">
            <span className="text-[#a39e93] hover:text-[#d4af37] transition-colors cursor-pointer">Home</span>
            <span className="text-[#3a352c]">/</span>
            <span className="text-[#d4af37] font-medium">Contact Us</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#fcf8f2] tracking-wide mb-6">
            Contact Us
          </h1>

          {/* Gold Underline Accent */}
          <div className="w-16 h-[2px] bg-[#d4af37] mb-6"></div>

          {/* Subtitle */}
          <p className="text-[#a39e93] text-base sm:text-lg leading-relaxed max-w-lg">
            Let’s start planning a personalized culinary experience crafted around you.
          </p>
        </div>

        {/* Right Image Column with Custom Curved Border */}
        <div className="lg:col-span-6 flex justify-end">
          <div className="relative w-full max-w-xl h-[350px] sm:h-[420px] lg:h-[480px] rounded-tl-[160px] sm:rounded-tl-[200px] overflow-hidden border border-[#d4af37]/30 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000" 
              alt="Concierge Desk" 
              className="w-full h-full object-cover"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HeroContact;