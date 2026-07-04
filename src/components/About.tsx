import { motion } from 'motion/react';
import { Check } from 'lucide-react';
// @ts-ignore
import gymExterior from '../assets/images/regenerated_image_1783167396286.png';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-brand-bg/50 border-b border-brand-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Copy */}
          <div className="lg:col-span-6">
            <span className="font-mono text-xs text-brand-primary tracking-widest uppercase block mb-3">
              ABOUT THE GYM
            </span>
            <h2 className="font-display font-black text-3xl md:text-5xl text-white uppercase tracking-tight mb-6">
              LOCAL STRENGTH,<br />
              <span className="text-brand-primary">ELITE STANDARDS</span>
            </h2>
            <div className="w-16 h-1 bg-brand-primary mb-8"></div>
            
            <p className="font-sans text-gray-200 text-sm md:text-base leading-relaxed mb-6">
              Iron Paradise is a local fitness centre based in Madhuravada, created for people who want a clear, motivating, and accessible place to train. This demo website shows how the gym can present its services, location, photos, and enquiry options online.
            </p>
            
            <p className="font-sans text-gray-400 text-sm leading-relaxed mb-8">
              We focus on cultivating a clean, high-energy environment for compound lift patterns, strength building, and progressive conditioning. Equipped with solid machinery and loaded weight selections, our space is designed specifically to inspire consistency and trackable performance.
            </p>

            {/* Quick badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-brand-border/40 pt-6">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-brand-primary/10 border border-brand-primary/25 rounded-full flex items-center justify-center">
                  <Check size={12} className="text-brand-primary" />
                </div>
                <span className="font-display text-xs uppercase tracking-wider font-bold text-white">
                  Local Expertise
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-brand-primary/10 border border-brand-primary/25 rounded-full flex items-center justify-center">
                  <Check size={12} className="text-brand-primary" />
                </div>
                <span className="font-display text-xs uppercase tracking-wider font-bold text-white">
                  Modern Equipment
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Framed Image */}
          <div className="lg:col-span-6 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-video w-full bg-brand-card overflow-hidden border border-brand-border"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/50 via-transparent to-transparent z-10" />
              <img 
                src={gymExterior} 
                alt="Iron Paradise Gym exterior facade with modern industrial cladding and glowing signage" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Industrial corner accents */}
            <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-brand-primary pointer-events-none" />
            <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-brand-primary pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}
