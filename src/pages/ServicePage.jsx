import React from 'react';

const ServiceHero = () => {
  return (
    <div className="relative bg-[#12100e] text-[#f5f0eb] min-h-[70vh] flex flex-col justify-between overflow-hidden px-6 md:px-16 pt-8 pb-12">
      
      {/* Background Watermark / Geometric Pattern (Optional subtle overlay) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
        <div className="w-[600px] h-[600px] border border-[#d4af37]/30 rounded-full flex items-center justify-center">
          <div className="w-[450px] h-[450px] border border-[#d4af37]/20 rounded-full"></div>
        </div>
      </div>

      {/* Top Breadcrumb Navigation */}
      <div className="relative z-10 flex items-center space-x-3 text-sm tracking-wide">
        <a href="/" className="text-[#d4af37] hover:underline font-light">Home</a>
        <span className="text-[#d4af37]/60">|</span>
        <span className="text-[#f5f0eb] font-light">Services</span>
      </div>

      {/* Main Content Grid: Left Text & Right Curved Image */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto pt-8">
        
        {/* Left Side: Title & Description */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-serif font-normal tracking-wide text-[#fdfbf7]">
            Services
          </h1>
          
          {/* Gold Divider Line */}
          <div className="w-16 h-[2px] bg-[#d4af37]"></div>

          <p className="text-base md:text-lg font-light text-[#dcd6cd] max-w-lg leading-relaxed">
            Personal chef experiences crafted for private dinners, weekly routines and unforgettable celebrations.
          </p>
        </div>

        {/* Right Side: Curved Luxury Image Container */}
        <div className="lg:col-span-6 flex justify-end">
          <div className="relative w-full max-w-[620px] h-[380px] md:h-[420px] overflow-hidden rounded-tl-[160px] border border-[#d4af37]/40 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop" 
              alt="Luxury Dining Experience" 
              className="w-full h-full object-cover"
            />
            {/* Inner subtle shadow gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default ServiceHero;