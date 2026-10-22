import React from 'react'

export const GetInTech = () => {
  return (
    <section className="bg-[#0b0a08] text-[#f4eedf] py-20 px-4 sm:px-6 lg:px-12 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Heading & Description */}
        <div className="lg:col-span-4 flex flex-col justify-start">
          <p className="text-[#d4af37] tracking-[0.25em] text-xs uppercase font-medium mb-4">
            GET IN TOUCH
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#fcf8f2] tracking-wide mb-6 leading-tight">
            Let’s Plan Something Exceptional
          </h2>
          <div className="w-12 h-[2px] bg-[#d4af37] mb-6"></div>
          <p className="text-[#a39e93] text-sm sm:text-base leading-relaxed">
            Tell us about your event, questions or culinary needs. Our team will get back to you with the next steps.
          </p>
        </div>

        {/* Middle Column: Form */}
        <div className="lg:col-span-5 flex flex-col">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            
            {/* Row 1: Full Name & Email Address */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-xs text-[#a39e93] mb-1.5 uppercase tracking-wider">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Your full name"
                  className="bg-[#12110e] border border-[#2a2620] focus:border-[#d4af37] text-[#fcf8f2] text-sm rounded-none p-3.5 outline-none transition-colors placeholder-[#5a554c]"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-xs text-[#a39e93] mb-1.5 uppercase tracking-wider">Email Address</label>
                <input 
                  type="email" 
                  placeholder="Your email address"
                  className="bg-[#12110e] border border-[#2a2620] focus:border-[#d4af37] text-[#fcf8f2] text-sm rounded-none p-3.5 outline-none transition-colors placeholder-[#5a554c]"
                />
              </div>
            </div>

            {/* Row 2: Phone Number */}
            <div className="flex flex-col">
              <label className="text-xs text-[#a39e93] mb-1.5 uppercase tracking-wider">Phone Number</label>
              <input 
                type="tel" 
                placeholder="Your phone number"
                className="bg-[#12110e] border border-[#2a2620] focus:border-[#d4af37] text-[#fcf8f2] text-sm rounded-none p-3.5 outline-none transition-colors placeholder-[#5a554c]"
              />
            </div>

            {/* Row 3: Service Interest */}
            <div className="flex flex-col">
              <label className="text-xs text-[#a39e93] mb-1.5 uppercase tracking-wider">Service Interest</label>
              <div className="relative">
                <select 
                  className="w-full bg-[#12110e] border border-[#2a2620] focus:border-[#d4af37] text-[#fcf8f2] text-sm rounded-none p-3.5 outline-none transition-colors appearance-none cursor-pointer"
                  defaultValue=""
                >
                  <option value="" disabled className="text-[#5a554c]">Select Service</option>
                  <option value="private-dining">Private Dining</option>
                  <option value="meal-prep">Meal Prep</option>
                  <option value="special-events">Special Events</option>
                  <option value="corporate-dining">Corporate Dining</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#d4af37] text-xs">
                  ▼
                </div>
              </div>
            </div>

            {/* Row 4: Message */}
            <div className="flex flex-col">
              <label className="text-xs text-[#a39e93] mb-1.5 uppercase tracking-wider">Message</label>
              <textarea 
                rows="4"
                placeholder="Tell us about your event, preferences or any special requests..."
                className="bg-[#12110e] border border-[#2a2620] focus:border-[#d4af37] text-[#fcf8f2] text-sm rounded-none p-3.5 outline-none transition-colors placeholder-[#5a554c] resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              className="w-full bg-[#d4af37] hover:bg-[#c39f2f] text-[#0b0a08] font-medium text-xs sm:text-sm uppercase tracking-[0.2em] py-4 transition-colors duration-300 shadow-lg cursor-pointer mt-2"
            >
              Send Message
            </button>

          </form>
        </div>

        {/* Right Column: Chef Image */}
        <div className="lg:col-span-3 flex justify-center lg:justify-end">
          <div className="relative w-full h-[480px] sm:h-[520px] rounded-t-[140px] overflow-hidden border border-[#2a2620] shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800" 
              alt="Chef plating food" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default GetInTech;