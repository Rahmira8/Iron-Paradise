import React from 'react';
import { Phone, Mail } from 'lucide-react';

export default function CTASection() {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const headerOffset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="membership" className="py-20 bg-brand-primary relative overflow-hidden">
      {/* Abstract Grid Graphic Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row justify-between items-center gap-10">
        <div className="text-center lg:text-left max-w-2xl">
          <h2 className="font-display font-black text-3xl md:text-5xl text-brand-bg uppercase tracking-tighter mb-4">
            READY TO START TRAINING?
          </h2>
          <p className="font-sans text-brand-bg/90 text-sm md:text-base leading-relaxed">
            Call Iron Paradise today or send an enquiry to know more about membership options and training support. Start your journey with Visakhapatnam's serious training community.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto flex-shrink-0">
          <a
            href="tel:+918309014346"
            className="bg-brand-bg hover:bg-black text-white font-display text-sm uppercase tracking-wider font-bold px-8 py-4 flex items-center justify-center gap-3 transition-all active:scale-[0.97]"
            id="cta-call-direct"
          >
            <Phone size={16} className="text-brand-primary" />
            Call Now
          </a>
          <a
            href="#contact"
            onClick={scrollToContact}
            className="border-2 border-brand-bg text-brand-bg hover:bg-brand-bg hover:text-white font-display text-sm uppercase tracking-wider font-bold px-8 py-4 flex items-center justify-center gap-3 transition-all active:scale-[0.97]"
            id="cta-send-enquiry"
          >
            <Mail size={16} />
            Send Enquiry
          </a>
        </div>
      </div>
    </section>
  );
}
