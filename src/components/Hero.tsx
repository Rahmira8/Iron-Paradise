import React from 'react';
import { motion } from 'motion/react';
import { Phone, ArrowRight, MapPin } from 'lucide-react';

export default function Hero() {
  const scrollToContact = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
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
    <section 
      id="home" 
      className="relative min-h-[95vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-black"
    >
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-bg via-brand-bg/85 to-transparent lg:to-black/30 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-black/50 z-10" />
        <img 
          src="https://lh3.googleusercontent.com/aida/AP1WRLvUIMuiCRtvbapQehPkBXhBMEt-tRqqnElOAARuApNdNafesVvpRXgy8wbHnkHXAuq7cGQmfrBgLxiHjujIVsRseI6zhzeCz12c446SzI6pvq2CLTIG_GzDeqM6KGDV_fzlNWxbnBf8KqrYPITtSM6Z3yhr8Q5dnj2sHGqRSFVYkiqWWlLVhHOCD3Myw5NYeTsFiIdnvbylJf0ZfCPyGO3tg_hJXcUQKYuHS_S3A_zPgTzqtYMoTjLtEx9-" 
          alt="Iron Paradise Premium Strength Facility" 
          className="w-full h-full object-cover object-center scale-105 filter brightness-95 contrast-105"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8 max-w-3xl">
          {/* Subheader Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-brand-primary/10 border border-brand-primary/30 px-3 py-1.5 mb-6 text-brand-primary font-mono text-xs uppercase tracking-wider font-bold rounded-sm"
          >
            <span className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-pulse"></span>
            MADHURAVADA'S PREMIER STRENGTH FACILITY
          </motion.div>

          {/* Primary Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-black text-4xl md:text-5xl lg:text-7xl leading-none text-white tracking-tighter uppercase mb-6"
          >
            BUILD STRENGTH.<br />
            <span className="text-brand-primary">TRAIN BETTER.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display font-medium text-lg md:text-2xl text-gray-200 mb-4 leading-snug"
          >
            Start Your Fitness Journey at Iron Paradise.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-sans text-gray-300 text-sm md:text-base mb-10 max-w-xl leading-relaxed"
          >
            A local gym in Madhuravada helping people train with confidence, consistency, and motivation.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <a
              href="tel:+918309014346"
              className="bg-brand-primary hover:bg-brand-primary-hover text-white font-display text-sm uppercase tracking-wider font-bold px-8 py-4 flex items-center justify-center gap-3 shadow-lg shadow-brand-primary/20 transition-all active:scale-[0.97]"
              id="hero-call-cta"
            >
              <Phone size={16} />
              Call Now
            </a>
            <a
              href="#contact"
              onClick={scrollToContact}
              className="border border-white hover:border-brand-primary hover:bg-brand-primary/5 text-white font-display text-sm uppercase tracking-wider font-bold px-8 py-4 flex items-center justify-center gap-3 transition-all active:scale-[0.97]"
              id="hero-enquiry-cta"
            >
              Request Membership Details
              <ArrowRight size={16} className="text-brand-primary" />
            </a>
          </motion.div>

          {/* Location details */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex items-center gap-3 text-gray-300 border-l-2 border-brand-primary pl-4"
          >
            <MapPin size={20} className="text-brand-primary flex-shrink-0" />
            <div>
              <p className="font-display font-bold text-xs uppercase tracking-wider text-white">
                Located in Midhilapuri Vuda Colony, Madhuravada.
              </p>
              <p className="font-sans text-[11px] text-gray-400">
                Pothinamallayya Palem Road, Visakhapatnam.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
