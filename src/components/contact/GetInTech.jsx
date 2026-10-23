import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    <section className="relative w-full bg-[#0e0c0a] text-[#f3eee3] py-16 lg:py-24 px-6 sm:px-10 lg:px-16 xl:px-20 border-b border-[#2a241b]">
      <div className="max-w-[1720px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
        
        {/* Left Column: Heading & Description */}
        <div className="lg:col-span-4 flex flex-col justify-start pt-2">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: easeCurve }}
            className="text-xs font-semibold uppercase tracking-[0.25em] text-[#cba451] mb-6"
          >
            GET IN TOUCH
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1, ease: easeCurve }}
            className="font-serif text-5xl sm:text-6xl lg:text-[62px] font-normal leading-[1.08] tracking-tight text-[#f3eee3] mb-6"
          >
            Let’s Plan <br />
            Something <br />
            Exceptional
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.3, ease: easeCurve }}
            style={{ originX: 0 }}
            className="w-[60px] h-[2px] bg-[#cba451] mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.4, ease: easeCurve }}
            className="text-sm sm:text-base leading-[1.65] text-[#b8ad9e] max-w-[340px]"
          >
            Tell us about your event, questions or culinary needs. <br className="hidden sm:inline" />
            Our team will get back to you with the next steps.
          </motion.p>
        </div>

        {/* Middle Column: Form with Staggered Inputs */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, delay: 0.15, ease: easeCurve }}
          className="lg:col-span-5 flex flex-col justify-between"
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="submitted-state"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: easeCurve }}
                className="bg-[#12110e] border border-[#cba451]/50 p-8 rounded-lg text-center shadow-2xl my-auto"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#cba451]/10 border border-[#cba451] flex items-center justify-center text-[#cba451] text-2xl font-serif">
                  ✓
                </div>
                <h3 className="font-serif text-2xl text-[#f3eee3] mb-2">Thank You</h3>
                <p className="text-sm text-[#b8ad9e] leading-relaxed">
                  Your message has been received. Our team will contact you shortly to plan your culinary experience.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form-fields"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                
                {/* Row 1: Full Name & Email Address */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label className="text-sm font-medium text-[#f3eee3] mb-2">
                      Full Name
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="Your full name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="bg-[#12110e] border border-[#26211a] focus:border-[#cba451]/80 text-[#f3eee3] text-sm rounded-md p-3.5 outline-none transition-all placeholder-[#4a443a] focus:shadow-[0_0_12px_rgba(203,164,81,0.2)]"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm font-medium text-[#f3eee3] mb-2">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      required
                      placeholder="Your email address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-[#12110e] border border-[#26211a] focus:border-[#cba451]/80 text-[#f3eee3] text-sm rounded-md p-3.5 outline-none transition-all placeholder-[#4a443a] focus:shadow-[0_0_12px_rgba(203,164,81,0.2)]"
                    />
                  </div>
                </div>

                {/* Row 2: Phone Number */}
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-[#f3eee3] mb-2">
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-[#12110e] border border-[#26211a] focus:border-[#cba451]/80 text-[#f3eee3] text-sm rounded-md p-3.5 outline-none transition-all placeholder-[#4a443a] focus:shadow-[0_0_12px_rgba(203,164,81,0.2)]"
                  />
                </div>

                {/* Row 3: Service Interest */}
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-[#f3eee3] mb-2">
                    Service Interest
                  </label>
                  <div className="relative">
                    <select 
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full bg-[#12110e] border border-[#26211a] focus:border-[#cba451]/80 text-[#f3eee3] text-sm rounded-md p-3.5 outline-none transition-all appearance-none cursor-pointer focus:shadow-[0_0_12px_rgba(203,164,81,0.2)]"
                    >
                      <option value="" disabled className="text-[#4a443a]">Select Service</option>
                      <option value="private-dining" className="bg-[#12110e] text-[#f3eee3]">Private Dining</option>
                      <option value="meal-prep" className="bg-[#12110e] text-[#f3eee3]">Meal Prep</option>
                      <option value="special-events" className="bg-[#12110e] text-[#f3eee3]">Special Events</option>
                      <option value="corporate-dining" className="bg-[#12110e] text-[#f3eee3]">Corporate Dining</option>
                      <option value="wellness" className="bg-[#12110e] text-[#f3eee3]">Wellness & Dietary Plans</option>
                      <option value="wine-pairing" className="bg-[#12110e] text-[#f3eee3]">Wine Pairing Experience</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#cba451] text-xs">
                      ▼
                    </div>
                  </div>
                </div>

                {/* Row 4: Message */}
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-[#f3eee3] mb-2">
                    Message
                  </label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your event, preferences or any special requests..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-[#12110e] border border-[#26211a] focus:border-[#cba451]/80 text-[#f3eee3] text-sm rounded-md p-3.5 outline-none transition-all placeholder-[#4a443a] resize-none focus:shadow-[0_0_12px_rgba(203,164,81,0.2)]"
                  ></textarea>
                </div>

                {/* Submit Button with Tactile Hover & Tap */}
                <motion.button 
                  whileHover={{ scale: 1.015 }}
                  whileTap={{ scale: 0.95, y: 2 }}
                  type="submit"
                  className="w-full bg-[#c5a059] hover:bg-[#d8b065] text-[#0a0907] font-semibold text-sm rounded-md py-4 transition-colors duration-300 shadow-md cursor-pointer mt-1"
                >
                  Send Message
                </motion.button>

              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Right Column: Exact Veyssette Chef Plating Image with Subtle Hover Zoom */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, delay: 0.2, ease: easeCurve }}
          className="lg:col-span-3 flex justify-center lg:justify-end items-stretch"
        >
          <div className="relative w-full h-[460px] sm:h-[500px] lg:h-full min-h-[460px] overflow-hidden rounded-md shadow-2xl bg-[#12110e] border border-[#26211a] group">
            <motion.img 
              whileHover={{ scale: 1.035 }}
              transition={{ duration: 0.7, ease: easeCurve }}
              src="/image/chef-veyssette-plating.png" 
              alt="Veyssette executive chef garnishing fine dining dish with precision" 
              className="w-full h-full object-cover object-center cursor-pointer"
              loading="lazy"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default GetInTech;