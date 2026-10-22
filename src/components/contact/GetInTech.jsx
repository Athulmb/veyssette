import React, { useState } from 'react';
import { motion } from 'framer-motion';

const easeCurve = [0.16, 1, 0.3, 1];

export const GetInTech = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceInterest: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        serviceInterest: '',
        message: '',
      });
    }, 4500);
  };

  return (
    <section className="relative w-full bg-[#0a0907] text-[#f3eee3] py-20 lg:py-28 px-6 sm:px-10 lg:px-16 border-b border-[#2a241b]">
      <div className="max-w-[1720px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Heading & Description */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: easeCurve }}
          className="lg:col-span-4 flex flex-col justify-start"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#cba451] mb-4">
            GET IN TOUCH
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[50px] leading-[1.15] text-[#f3eee3] mb-6">
            Let’s Plan Something <br />
            <span className="italic text-[#e5c178]">Exceptional</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#cba451] mb-6" />
          <p className="text-base sm:text-lg leading-[1.7] text-[#b8ad9e] max-w-md">
            Tell us about your event, questions or culinary needs. Our team will get back to you with the next steps to craft your bespoke experience.
          </p>
        </motion.div>

        {/* Middle Column: Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, delay: 0.1, ease: easeCurve }}
          className="lg:col-span-5 flex flex-col"
        >
          {submitted ? (
            <div className="bg-[#14120e] border border-[#cba451]/50 p-8 rounded-xl text-center shadow-2xl">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#cba451]/10 border border-[#cba451] flex items-center justify-center text-[#cba451] text-2xl font-serif">
                ✓
              </div>
              <h3 className="font-serif text-2xl text-[#f3eee3] mb-2">Thank You</h3>
              <p className="text-sm text-[#b8ad9e] leading-relaxed">
                Your message has been received. Our team will contact you shortly to plan your culinary experience.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Row 1: Full Name & Email Address */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="text-xs font-semibold uppercase tracking-[0.16em] text-[#b8ad9e] mb-2">
                    Full Name *
                  </label>
                  <input 
                    type="text" 
                    required
                    placeholder="Your full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="bg-[#14120e] border border-[#2a241b] focus:border-[#cba451]/70 text-[#f3eee3] text-sm rounded-lg p-3.5 outline-none transition-all placeholder-[#5a5246]"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-xs font-semibold uppercase tracking-[0.16em] text-[#b8ad9e] mb-2">
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    required
                    placeholder="Your email address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-[#14120e] border border-[#2a241b] focus:border-[#cba451]/70 text-[#f3eee3] text-sm rounded-lg p-3.5 outline-none transition-all placeholder-[#5a5246]"
                  />
                </div>
              </div>

              {/* Row 2: Phone Number */}
              <div className="flex flex-col">
                <label className="text-xs font-semibold uppercase tracking-[0.16em] text-[#b8ad9e] mb-2">
                  Phone Number
                </label>
                <input 
                  type="tel" 
                  placeholder="Your phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-[#14120e] border border-[#2a241b] focus:border-[#cba451]/70 text-[#f3eee3] text-sm rounded-lg p-3.5 outline-none transition-all placeholder-[#5a5246]"
                />
              </div>

              {/* Row 3: Service Interest */}
              <div className="flex flex-col">
                <label className="text-xs font-semibold uppercase tracking-[0.16em] text-[#b8ad9e] mb-2">
                  Service Interest *
                </label>
                <div className="relative">
                  <select 
                    required
                    value={formData.serviceInterest}
                    onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                    className="w-full bg-[#14120e] border border-[#2a241b] focus:border-[#cba451]/70 text-[#f3eee3] text-sm rounded-lg p-3.5 outline-none transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="text-[#5a5246]">Select Service</option>
                    <option value="private-dining" className="bg-[#14120e] text-[#f3eee3]">Private Dining</option>
                    <option value="meal-prep" className="bg-[#14120e] text-[#f3eee3]">Meal Prep</option>
                    <option value="special-events" className="bg-[#14120e] text-[#f3eee3]">Special Events</option>
                    <option value="corporate-dining" className="bg-[#14120e] text-[#f3eee3]">Corporate Dining</option>
                    <option value="wellness" className="bg-[#14120e] text-[#f3eee3]">Wellness & Dietary Plans</option>
                    <option value="wine-pairing" className="bg-[#14120e] text-[#f3eee3]">Wine Pairing Experience</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#cba451] text-xs">
                    ▼
                  </div>
                </div>
              </div>

              {/* Row 4: Message */}
              <div className="flex flex-col">
                <label className="text-xs font-semibold uppercase tracking-[0.16em] text-[#b8ad9e] mb-2">
                  Message *
                </label>
                <textarea 
                  rows="4"
                  required
                  placeholder="Tell us about your event, preferences, guest count or any special requests..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-[#14120e] border border-[#2a241b] focus:border-[#cba451]/70 text-[#f3eee3] text-sm rounded-lg p-3.5 outline-none transition-all placeholder-[#5a5246] resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="luxury-btn w-full bg-[#cba451] hover:bg-[#d8b065] text-[#0a0907] font-semibold text-xs sm:text-sm uppercase tracking-[0.22em] py-4 rounded-lg shadow-xl cursor-pointer mt-2 transition-all"
              >
                Send Message
              </button>

            </form>
          )}
        </motion.div>

        {/* Right Column: Chef Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, delay: 0.15, ease: easeCurve }}
          className="lg:col-span-3 flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[340px] h-[480px] sm:h-[520px] rounded-t-[140px] overflow-hidden border border-[#cba451]/30 shadow-2xl bg-[#14120e]">
            <img 
              src="/image/magnific_professional-chef-careful_74f0BVaJAL.webp" 
              alt="Professional chef carefully preparing luxury dishes" 
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default GetInTech;