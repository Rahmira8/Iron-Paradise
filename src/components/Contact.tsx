import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Phone, MapPin, Clock, MessageSquare, ExternalLink, ShieldCheck } from 'lucide-react';

interface ContactProps {
  selectedService: string;
  onSubmitSuccess: () => void;
}

export default function Contact({ selectedService, onSubmitSuccess }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    goal: 'General Fitness',
    time: 'Morning',
    message: ''
  });

  useEffect(() => {
    if (selectedService) {
      // Map clicked services to corresponding dropdown option
      if (selectedService.toLowerCase().includes('strength')) {
        setFormData(prev => ({ ...prev, goal: 'Strength Training' }));
      } else if (selectedService.toLowerCase().includes('weight loss')) {
        setFormData(prev => ({ ...prev, goal: 'Weight Loss' }));
      } else if (selectedService.toLowerCase().includes('muscle')) {
        setFormData(prev => ({ ...prev, goal: 'Muscle Gain' }));
      } else {
        setFormData(prev => ({ ...prev, goal: 'General Fitness' }));
      }
      
      // Auto scroll to contact form beautifully
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const headerOffset = 80;
        const elementPosition = contactSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  }, [selectedService]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validate inputs
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert("Please fill out your Name and Phone Number so we can contact you.");
      return;
    }
    onSubmitSuccess();
    // Clear form
    setFormData({
      name: '',
      phone: '',
      goal: 'General Fitness',
      time: 'Morning',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-brand-card/20 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-brand-card border border-brand-border p-8 md:p-12">
            <span className="font-mono text-xs text-brand-primary tracking-widest uppercase block mb-3">
              GET IN TOUCH
            </span>
            <h2 className="font-display font-black text-2xl md:text-4xl text-white uppercase tracking-tight mb-4" id="contact-form-title">
              REQUEST MEMBERSHIP DETAILS
            </h2>
            <div className="w-12 h-1 bg-brand-primary mb-8"></div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name-input" className="block font-display text-xs uppercase tracking-wider font-bold text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    id="name-input"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full bg-brand-bg/50 border border-brand-border focus:border-brand-primary text-white p-4 text-sm outline-none transition-all rounded-none"
                  />
                </div>
                <div>
                  <label htmlFor="phone-input" className="block font-display text-xs uppercase tracking-wider font-bold text-gray-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    id="phone-input"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    className="w-full bg-brand-bg/50 border border-brand-border focus:border-brand-primary text-white p-4 text-sm outline-none transition-all rounded-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="goal-select" className="block font-display text-xs uppercase tracking-wider font-bold text-gray-300 mb-2">
                    Fitness Goal
                  </label>
                  <div className="relative">
                    <select
                      id="goal-select"
                      name="goal"
                      value={formData.goal}
                      onChange={handleChange}
                      className="w-full bg-brand-bg/50 border border-brand-border focus:border-brand-primary text-white p-4 text-sm outline-none transition-all rounded-none appearance-none cursor-pointer"
                    >
                      <option value="General Fitness" className="bg-brand-card">General Fitness</option>
                      <option value="Strength Training" className="bg-brand-card">Strength Training</option>
                      <option value="Weight Loss" className="bg-brand-card">Weight Loss Training</option>
                      <option value="Muscle Gain" className="bg-brand-card">Muscle Gain Training</option>
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400">
                      ▼
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="time-select" className="block font-display text-xs uppercase tracking-wider font-bold text-gray-300 mb-2">
                    Preferred Contact Time
                  </label>
                  <div className="relative">
                    <select
                      id="time-select"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full bg-brand-bg/50 border border-brand-border focus:border-brand-primary text-white p-4 text-sm outline-none transition-all rounded-none appearance-none cursor-pointer"
                    >
                      <option value="Morning" className="bg-brand-card">Morning (5 AM - 12 PM)</option>
                      <option value="Afternoon" className="bg-brand-card">Afternoon (12 PM - 4 PM)</option>
                      <option value="Evening" className="bg-brand-card">Evening (4 PM - 10 PM)</option>
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400">
                      ▼
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message-textarea" className="block font-display text-xs uppercase tracking-wider font-bold text-gray-300 mb-2">
                  Message (Optional)
                </label>
                <textarea
                  id="message-textarea"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your fitness background, medical history, or specific requirements..."
                  className="w-full bg-brand-bg/50 border border-brand-border focus:border-brand-primary text-white p-4 text-sm outline-none transition-all rounded-none resize-none"
                />
              </div>

              {/* Note */}
              <div className="flex items-start gap-2.5 text-[11px] text-gray-400 italic">
                <ShieldCheck size={14} className="text-brand-primary flex-shrink-0 mt-0.5" />
                <p>
                  No payment details required. This submit acts as an enquiry so we can share membership plans with you directly.
                </p>
              </div>

              <button
                id="submit-enquiry-btn"
                type="submit"
                className="w-full bg-brand-primary hover:bg-brand-primary-hover text-white font-display text-sm uppercase tracking-widest font-bold py-5 transition-all active:scale-[0.98] shadow-lg shadow-brand-primary/10 cursor-pointer"
              >
                Send Enquiry
              </button>
            </form>
          </div>

          {/* Right Column: Info & Map */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-10">
            <div className="space-y-8">
              
              {/* Gym Info Section */}
              <div id="location">
                <span className="font-mono text-xs text-brand-primary tracking-widest uppercase block mb-3">
                  OUR HQ
                </span>
                <h3 className="font-display font-black text-xl text-white uppercase tracking-wider mb-6">
                  LOCATION & ACCESS
                </h3>
                
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-brand-primary/5 border border-brand-primary/20 flex items-center justify-center rounded-sm text-brand-primary flex-shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="font-sans text-gray-200 text-sm md:text-base leading-relaxed">
                      no. 1-41, Main Rd, Midhilapuri Vuda Colony, Pothinamallayya Palem, Madhuravada, Andhra Pradesh 530041, India
                    </p>
                    <a
                      href="https://maps.app.goo.gl/5YTbCSoAfg3xtZ3b9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-display text-[11px] uppercase tracking-wider font-bold text-brand-primary hover:underline mt-3"
                      id="maps-link-btn"
                    >
                      Get Directions via Google Maps
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact section */}
              <div>
                <h3 className="font-display font-black text-lg text-white uppercase tracking-wider mb-6">
                  CONTACT DIRECTLY
                </h3>
                
                <div className="flex flex-col gap-4">
                  {/* Call phone */}
                  <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 bg-brand-primary/5 border border-brand-primary/20 flex items-center justify-center rounded-sm text-brand-primary flex-shrink-0">
                      <Phone size={18} />
                    </div>
                    <div>
                      <span className="font-sans text-xs text-gray-400 block">CALL PHONE</span>
                      <a
                        href="tel:+918309014346"
                        className="font-display font-black text-lg md:text-2xl text-white hover:text-brand-primary transition-colors block"
                        id="contact-call-link"
                      >
                        +91-8309014346
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp contact */}
                  <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center rounded-sm text-[#25D366] flex-shrink-0">
                      <MessageSquare size={18} />
                    </div>
                    <div>
                      <span className="font-sans text-xs text-gray-400 block">WHATSAPP MESSAGE</span>
                      <a
                        href="https://wa.me/918309014346?text=Hi%20Iron%20Paradise,%20I%20am%20interested%20in%20gym%20membership%20details."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-display font-black text-base md:text-lg text-white hover:text-[#25D366] transition-colors flex items-center gap-1.5"
                        id="contact-whatsapp-link"
                      >
                        Connect via WhatsApp
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Timings */}
                <div className="flex gap-4 items-start mt-6 border-t border-brand-border/40 pt-6">
                  <div className="w-10 h-10 bg-brand-primary/5 border border-brand-primary/20 flex items-center justify-center rounded-sm text-brand-primary flex-shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <span className="font-sans text-xs text-gray-400 block">GYM HOURS</span>
                    <p className="font-sans text-gray-200 text-sm font-medium">
                      Open Daily: 5:00 AM - 10:00 PM
                    </p>
                    <p className="font-sans text-[11px] text-gray-500 mt-0.5">
                      Maximum training flexibility for morning & evening lifters.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Simulated Map View Container with Photo */}
            <div className="relative group overflow-hidden border border-brand-border h-60 bg-brand-card">
              <img
                src="https://lh3.googleusercontent.com/aida/AP1WRLs5pvLjV1iwvYeouA1QrC1arbsnRpLFBwKwmpigl9NG2R7g0iOZFdO5woEOuIG3oaZaiczsoZZS-by1OSR6Y_QKVEBw1wwxt_Kp6RBNM8t4KuQT1MY8Gg9zoLGW8uMKklfOc0CcpfZnVVj-MHyPGXCP1g4TfIu8HqcGn_UwaFvtRvl2iXTHbpvNxDk70rlpmgBRIVlAZoRsJCKg1bNh-5fgTuLBLOms8Om6bmwotf0At0S1Y89zom-Jalk"
                alt="Iron Paradise Facility Overview Map Pin"
                className="w-full h-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center p-6 z-10">
                <div className="w-12 h-12 bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center rounded-full text-brand-primary mb-3">
                  <MapPin size={24} />
                </div>
                <h4 className="font-display font-black text-sm text-white uppercase tracking-wider">
                  Interactive Map View
                </h4>
                <p className="font-sans text-[11px] text-gray-400 max-w-xs mt-1 mb-4 leading-normal">
                  Serving Madhuravada, PM Palem, & nearby Vizag areas.
                </p>
                <a
                  href="https://maps.app.goo.gl/5YTbCSoAfg3xtZ3b9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-bg border border-brand-border hover:bg-brand-primary hover:text-white hover:border-brand-primary px-5 py-2.5 font-display text-xs uppercase tracking-wider font-bold text-white transition-all flex items-center gap-1.5"
                  id="embed-maps-btn"
                >
                  Get Directions
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
