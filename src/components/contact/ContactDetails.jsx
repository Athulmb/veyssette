import React from 'react';
import { motion } from 'framer-motion';

const easeCurve = [0.16, 1, 0.3, 1];

export const ContactDetails = () => {
  const contactItems = [
    {
      title: "Email",
      details: ["contact@mysite.com", "support@yoursite.com"],
      icon: (
        <svg className="w-7 h-7 text-[#cba451]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Phone",
      details: ["+1 (212) 845 2741", "+1 (111) 123 4567"],
      icon: (
        <svg className="w-7 h-7 text-[#cba451]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      title: "Location",
      details: ["18 W 27th Street, New York", "NY 10001 — USA"],
      icon: (
        <svg className="w-7 h-7 text-[#cba451]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      title: "Business Hours",
      details: ["Mon – Fri: 9AM – 6PM", "Sat: 10AM – 4PM"],
      icon: (
        <svg className="w-7 h-7 text-[#cba451]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-[#0e0c0a] text-[#f3eee3] py-24 px-6 sm:px-10 lg:px-16 font-sans">
      <div className="max-w-[1720px] mx-auto">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: easeCurve }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#cba451] mb-4">
            CONTACT DETAILS
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-serif font-normal text-[#f3eee3] tracking-wide leading-tight">
            We’re Here To Help You Plan Every Detail
          </h2>
        </motion.div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 relative">
          {contactItems.map((item, index) => (
            <motion.div 
              key={item.title} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: easeCurve }}
              className={`flex flex-col items-center text-center px-6 py-6 relative ${
                index < contactItems.length - 1 ? 'lg:border-r lg:border-[#2a241b]' : ''
              }`}
            >
              {/* Icon Container */}
              <div className="mb-6 p-4 rounded-full bg-[#14120e] border border-[#cba451]/30 shadow-lg">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-serif text-[#f3eee3] mb-3 tracking-wide">
                {item.title}
              </h3>

              {/* Details Lines */}
              <div className="flex flex-col space-y-1.5">
                {item.details.map((line, lineIndex) => (
                  <p key={lineIndex} className="text-[#b8ad9e] text-sm leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ContactDetails;