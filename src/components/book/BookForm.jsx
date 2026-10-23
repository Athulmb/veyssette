import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Users,
  Clock,
  Sparkles,
  ShieldCheck,
  CheckCircle,
  Wine,
  Utensils,
  Phone,
} from "lucide-react";

const easeCurve = [0.16, 1, 0.3, 1];

const BookForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    eventDate: "",
    eventTime: "19:00",
    guests: 4,
    occasion: "Private Dinner",
    experience: "5-Course Grand Tasting",
    winePairing: true,
    dietary: [],
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const dietaryOptions = [
    "Gluten-Free",
    "Dairy-Free",
    "Nut Allergies",
    "Vegetarian",
    "Pescatarian",
    "Shellfish-Free",
  ];

  const handleDietaryToggle = (item) => {
    setFormData((prev) => {
      const exists = prev.dietary.includes(item);
      return {
        ...prev,
        dietary: exists
          ? prev.dietary.filter((d) => d !== item)
          : [...prev.dietary, item],
      };
    });
  };

  const getBasePrice = () => {
    if (formData.experience === "3-Course Signature") return 145;
    if (formData.experience === "5-Course Grand Tasting") return 195;
    if (formData.experience === "7-Course Degustation") return 260;
    return 180;
  };

  const wineCost = formData.winePairing ? 75 : 0;
  const pricePerGuest = getBasePrice() + wineCost;
  const estimatedTotal = pricePerGuest * formData.guests;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative w-full bg-[#0a0907] px-6 py-20 text-[#f3eee3] md:px-12 lg:px-20 lg:py-28">
      <div className="mx-auto max-w-[1700px]">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#cba451] mb-4">
            <Sparkles size={14} />
            <span>Bespoke Reservation</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#f3eee3] leading-tight font-normal">
            Design Your Dining Affair
          </h2>
          <div className="mx-auto my-6 h-[2px] w-[70px] bg-[#cba653]" />
          <p className="text-base sm:text-lg text-[#b8ad9e]">
            Complete the details below to reserve your date. Chef Veyssette and his team
            will review your request and confirm menu specifics within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Form (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl border border-[#2a241b] bg-[#14120e] p-8 sm:p-10 lg:p-12 shadow-2xl">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-8"
                >
                  {/* Step 1: Occasion & Guests */}
                  <div>
                    <h3 className="text-lg font-serif text-[#cba451] uppercase tracking-wider mb-4 pb-2 border-b border-[#2e261a] flex items-center gap-2">
                      <Utensils size={18} />
                      <span>1. Event & Dining Experience</span>
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label className="block text-xs uppercase font-medium tracking-wider text-[#b8ad9e] mb-2">
                          Occasion Type
                        </label>
                        <select
                          value={formData.occasion}
                          onChange={(e) =>
                            setFormData({ ...formData, occasion: e.target.value })
                          }
                          className="w-full rounded-lg border border-[#3b3020] bg-[#0e0c0a] px-4 py-3.5 text-sm text-[#f3eee3] focus:border-[#cba451] focus:outline-none transition-colors"
                        >
                          <option value="Private Dinner">Intimate Private Dinner</option>
                          <option value="Anniversary">Anniversary Celebration</option>
                          <option value="Birthday Dinner">Birthday Gathering</option>
                          <option value="Corporate Executive">Corporate Executive Dining</option>
                          <option value="Holiday Feast">Holiday Celebration</option>
                          <option value="Weekly Residence">Weekly Private Residence</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs uppercase font-medium tracking-wider text-[#b8ad9e] mb-2">
                          Tasting Experience Level
                        </label>
                        <select
                          value={formData.experience}
                          onChange={(e) =>
                            setFormData({ ...formData, experience: e.target.value })
                          }
                          className="w-full rounded-lg border border-[#3b3020] bg-[#0e0c0a] px-4 py-3.5 text-sm text-[#f3eee3] focus:border-[#cba451] focus:outline-none transition-colors"
                        >
                          <option value="3-Course Signature">3-Course Signature ($145 / guest)</option>
                          <option value="5-Course Grand Tasting">5-Course Grand Tasting ($195 / guest)</option>
                          <option value="7-Course Degustation">7-Course Degustation ($260 / guest)</option>
                        </select>
                      </div>
                    </div>

                    {/* Guests Slider */}
                    <div className="rounded-xl border border-[#3b3020] bg-[#0a0907] p-5">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-[#f3eee3] flex items-center gap-2">
                          <Users size={16} className="text-[#cba451]" />
                          Number of Guests
                        </span>
                        <span className="font-serif text-2xl text-[#cba451] font-semibold">
                          {formData.guests} Guests
                        </span>
                      </div>
                      <input
                        type="range"
                        min="2"
                        max="24"
                        value={formData.guests}
                        onChange={(e) =>
                          setFormData({ ...formData, guests: Number(e.target.value) })
                        }
                        className="w-full accent-[#cba451] cursor-pointer"
                      />
                      <div className="flex justify-between text-[11px] text-[#8c8273] mt-2">
                        <span>2 Guests (Couple)</span>
                        <span>12 Guests (Dinner Party)</span>
                        <span>24 Guests (Grand Feast)</span>
                      </div>
                    </div>
                  </div>

                  {/* Step 2: Date & Location */}
                  <div>
                    <h3 className="text-lg font-serif text-[#cba451] uppercase tracking-wider mb-4 pb-2 border-b border-[#2e261a] flex items-center gap-2">
                      <Calendar size={18} />
                      <span>2. Date, Time & Location</span>
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label className="block text-xs uppercase font-medium tracking-wider text-[#b8ad9e] mb-2">
                          Event Date
                        </label>
                        <input
                          type="date"
                          required
                          value={formData.eventDate}
                          onChange={(e) =>
                            setFormData({ ...formData, eventDate: e.target.value })
                          }
                          className="w-full rounded-lg border border-[#3b3020] bg-[#0e0c0a] px-4 py-3 text-sm text-[#f3eee3] focus:border-[#cba451] focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs uppercase font-medium tracking-wider text-[#b8ad9e] mb-2">
                          Preferred Dining Time
                        </label>
                        <div className="relative">
                          <input
                            type="time"
                            value={formData.eventTime}
                            onChange={(e) =>
                              setFormData({ ...formData, eventTime: e.target.value })
                            }
                            className="w-full rounded-lg border border-[#3b3020] bg-[#0e0c0a] px-4 py-3 text-sm text-[#f3eee3] focus:border-[#cba451] focus:outline-none transition-colors"
                          />
                          <Clock
                            size={16}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#cba451] pointer-events-none"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-medium tracking-wider text-[#b8ad9e] mb-2">
                        Location / Residence City or Address
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Tribeca, New York NY or Hamptons Private Villa"
                        value={formData.location}
                        onChange={(e) =>
                          setFormData({ ...formData, location: e.target.value })
                        }
                        className="w-full rounded-lg border border-[#3b3020] bg-[#0e0c0a] px-4 py-3.5 text-sm text-[#f3eee3] placeholder-[#6b6255] focus:border-[#cba451] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Step 3: Wine & Dietary */}
                  <div>
                    <h3 className="text-lg font-serif text-[#cba451] uppercase tracking-wider mb-4 pb-2 border-b border-[#2e261a] flex items-center gap-2">
                      <Wine size={18} />
                      <span>3. Pairings & Dietary Preferences</span>
                    </h3>

                    {/* Wine Pairing Checkbox */}
                    <label className="flex items-center gap-4 p-4 rounded-xl border border-[#3b3020] bg-[#0e0c0a] cursor-pointer hover:border-[#cba451]/60 transition-colors mb-5">
                      <input
                        type="checkbox"
                        checked={formData.winePairing}
                        onChange={(e) =>
                          setFormData({ ...formData, winePairing: e.target.checked })
                        }
                        className="h-5 w-5 accent-[#cba451] rounded"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-[#f3eee3]">
                            Include Sommelier Wine Flight Pairing
                          </span>
                          <span className="text-xs text-[#cba451] font-mono">
                            +$75 / guest
                          </span>
                        </div>
                        <p className="text-xs text-[#b8ad9e] mt-0.5">
                          Carefully cellared European wines paired to harmonize with each course.
                        </p>
                      </div>
                    </label>

                    {/* Dietary Badges */}
                    <div>
                      <label className="block text-xs uppercase font-medium tracking-wider text-[#b8ad9e] mb-2">
                        Dietary Requirements Among Guests
                      </label>
                      <div className="flex flex-wrap gap-2.5">
                        {dietaryOptions.map((item) => {
                          const isSelected = formData.dietary.includes(item);
                          return (
                            <button
                              key={item}
                              type="button"
                              onClick={() => handleDietaryToggle(item)}
                              className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-all ${
                                isSelected
                                  ? "bg-[#cba451] text-[#0a0907] font-semibold border border-[#cba451]"
                                  : "bg-[#0e0c0a] text-[#b8ad9e] border border-[#3b3020] hover:border-[#cba451]/50"
                              }`}
                            >
                              {item}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Step 4: Contact Info */}
                  <div>
                    <h3 className="text-lg font-serif text-[#cba451] uppercase tracking-wider mb-4 pb-2 border-b border-[#2e261a] flex items-center gap-2">
                      <Phone size={18} />
                      <span>4. Primary Guest Contact Details</span>
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                      <div>
                        <label className="block text-xs uppercase font-medium tracking-wider text-[#b8ad9e] mb-2">
                          Your Full Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Lord / Lady / Mr. John Doe"
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData({ ...formData, fullName: e.target.value })
                          }
                          className="w-full rounded-lg border border-[#3b3020] bg-[#0e0c0a] px-4 py-3 text-sm text-[#f3eee3] placeholder-[#6b6255] focus:border-[#cba451] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase font-medium tracking-wider text-[#b8ad9e] mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="client@luxuryestate.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full rounded-lg border border-[#3b3020] bg-[#0e0c0a] px-4 py-3 text-sm text-[#f3eee3] placeholder-[#6b6255] focus:border-[#cba451] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase font-medium tracking-wider text-[#b8ad9e] mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+1 (555) 000-0000"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full rounded-lg border border-[#3b3020] bg-[#0e0c0a] px-4 py-3 text-sm text-[#f3eee3] placeholder-[#6b6255] focus:border-[#cba451] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-medium tracking-wider text-[#b8ad9e] mb-2">
                        Special Notes or Kitchen Notes (Optional)
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Tell us about your kitchen equipment, preferred wine vintage, or celebration milestones..."
                        value={formData.notes}
                        onChange={(e) =>
                          setFormData({ ...formData, notes: e.target.value })
                        }
                        className="w-full rounded-lg border border-[#3b3020] bg-[#0e0c0a] p-4 text-sm text-[#f3eee3] placeholder-[#6b6255] focus:border-[#cba451] focus:outline-none"
                      />
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.95, y: 2 }}
                    type="submit"
                    className="luxury-btn w-full h-16 rounded-xl bg-[#cbaa63] font-serif text-lg font-bold tracking-wide text-[#0e0c0a] shadow-xl shadow-[#cbaa63]/20 hover:bg-[#d8b56f] transition-all"
                  >
                    Confirm & Reserve Chef Adrian Veyssette
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: easeCurve }}
                  className="py-16 text-center"
                >
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#cba451]/20 border border-[#cba451] text-[#cba451]">
                    <CheckCircle size={44} />
                  </div>
                  <h3 className="font-serif text-4xl text-[#f3eee3] mb-3">
                    Reservation Request Received
                  </h3>
                  <div className="mx-auto my-4 h-[2px] w-[60px] bg-[#cba653]" />
                  <p className="max-w-md mx-auto text-base text-[#b8ad9e] mb-6 leading-relaxed">
                    Thank you, <strong className="text-[#f3eee3]">{formData.fullName}</strong>.
                    Chef Veyssette's private concierge will contact you at{" "}
                    <span className="text-[#cba451]">{formData.phone}</span> within 24 hours to
                    confirm table arrangements and custom course preferences.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-[#cba451]/50 text-sm font-semibold text-[#cba451] hover:bg-[#cba451]/10 transition-colors"
                  >
                    Edit Reservation Details
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Summary Card (5 cols) */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            <div className="rounded-2xl border border-[#cba451]/40 bg-gradient-to-b from-[#191611] to-[#12100d] p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#cba451]/5 rounded-full blur-2xl pointer-events-none" />

              <h3 className="font-serif text-2xl text-[#f3eee3] mb-2 flex items-center justify-between">
                <span>Reservation Summary</span>
                <Sparkles size={18} className="text-[#cba451]" />
              </h3>
              <p className="text-xs uppercase tracking-widest text-[#8c8273] mb-6">
                Transparent All-Inclusive Estimate
              </p>

              <div className="space-y-4 text-sm border-y border-[#2e261a] py-6 mb-6">
                <div className="flex justify-between">
                  <span className="text-[#b8ad9e]">Occasion:</span>
                  <span className="text-[#f3eee3] font-medium">{formData.occasion}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#b8ad9e]">Guest Count:</span>
                  <span className="text-[#f3eee3] font-medium">{formData.guests} Guests</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#b8ad9e]">Experience Tier:</span>
                  <span className="text-[#f3eee3] font-medium text-right max-w-[200px]">
                    {formData.experience}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#b8ad9e]">Wine Flight Pairing:</span>
                  <span className="text-[#cba451] font-medium">
                    {formData.winePairing ? "Included ($75/guest)" : "None selected"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#b8ad9e]">Estimated Date:</span>
                  <span className="text-[#f3eee3] font-medium">
                    {formData.eventDate || "Date pending"} ({formData.eventTime})
                  </span>
                </div>
                {formData.dietary.length > 0 && (
                  <div className="flex justify-between">
                    <span className="text-[#b8ad9e]">Dietary Notes:</span>
                    <span className="text-[#cba451] font-medium text-right max-w-[180px]">
                      {formData.dietary.join(", ")}
                    </span>
                  </div>
                )}
              </div>

              {/* Price Calculation */}
              <div className="bg-[#0a0907] p-5 rounded-xl border border-[#3b3020] mb-6">
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-xs uppercase tracking-wider text-[#b8ad9e]">
                    Rate Per Guest
                  </span>
                  <span className="font-serif text-2xl text-[#f3eee3]">
                    ${pricePerGuest}
                  </span>
                </div>
                <div className="flex justify-between items-baseline pt-3 border-t border-[#2e261a]">
                  <div>
                    <span className="text-sm font-semibold text-[#cba451] block">
                      Estimated Total
                    </span>
                    <span className="text-[10px] text-[#8c8273]">
                      Includes ingredients, culinary execution & cleanup
                    </span>
                  </div>
                  <span className="font-serif text-3xl font-bold text-[#cba451]">
                    ${estimatedTotal.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Luxury Guarantee */}
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-xs text-[#b8ad9e]">
                  <ShieldCheck size={18} className="text-[#cba451] shrink-0 mt-0.5" />
                  <span>
                    <strong>Michelin Standard Service:</strong> Chef Adrian personally sources all
                    ingredients on the morning of your event.
                  </span>
                </div>
                <div className="flex items-start gap-3 text-xs text-[#b8ad9e]">
                  <CheckCircle size={18} className="text-[#cba451] shrink-0 mt-0.5" />
                  <span>
                    <strong>Pristine Kitchen Guarantee:</strong> Your kitchen is returned spotless and sanitized after dining concludes.
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Concierge Assistance */}
            <div className="rounded-xl border border-[#2a241b] bg-[#14120e] p-6 text-center">
              <p className="text-xs text-[#8c8273] uppercase tracking-wider mb-2">
                Need urgent booking or custom estate event?
              </p>
              <a
                href="tel:+10331234567"
                className="font-serif text-lg text-[#cba451] hover:text-white transition-colors"
              >
                Call Chef Concierge: +(1) 033 1234-567
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookForm;
