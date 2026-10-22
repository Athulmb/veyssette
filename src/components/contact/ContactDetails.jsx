import React from 'react'

export const ContactDetails = () => {
  const contactItems = [
    {
      title: "Email",
      details: ["contact@mysite.com", "support@yoursite.com"],
      icon: (
        <svg className="w-6 h-6 text-[#d4af37]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Phone",
      details: ["+1 (212) 845 2741", "+1 (111) 123 4567"],
      icon: (
        <svg className="w-6 h-6 text-[#d4af37]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      title: "Location",
      details: ["18 W 27th Street, New York", "- NY 10001 - USA"],
      icon: (
        <svg className="w-6 h-6 text-[#d4af37]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      title: "Business Hours",
      details: ["Mon | Fri: 9AM – 6PM", "Sat: 10AM – 4PM"],
      icon: (
        <svg className="w-6 h-6 text-[#d4af37]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-[#0b0a08] text-[#f4eedf] py-24 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-[#d4af37] tracking-[0.25em] text-xs uppercase font-medium mb-4">
            CONTACT DETAILS
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#fcf8f2] tracking-wide leading-tight">
            We’re Here To Help You Plan Every Detail
          </h2>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0 relative">
          {contactItems.map((item, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center text-center px-6 relative ${
                index < contactItems.length - 1 ? 'lg:border-r lg:border-[#26221c]' : ''
              }`}
            >
              {/* Icon Container */}
              <div className="mb-6">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-serif text-[#fcf8f2] mb-4 tracking-wide">
                {item.title}
              </h3>

              {/* Details Lines */}
              <div className="flex flex-col space-y-1">
                {item.details.map((line, lineIndex) => (
                  <p key={lineIndex} className="text-[#a39e93] text-sm leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ContactDetails;