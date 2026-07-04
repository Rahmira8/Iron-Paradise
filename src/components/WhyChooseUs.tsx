import { motion } from 'motion/react';
import { 
  MapPin, 
  Users, 
  ClipboardCheck, 
  PhoneCall, 
  Globe, 
  Eye 
} from 'lucide-react';

export default function WhyChooseUs() {
  const points = [
    {
      title: "Convenient Location",
      desc: "Located in Midhilapuri Vuda Colony, making it highly accessible for Madhuravada residents to complete daily training sessions.",
      icon: MapPin
    },
    {
      title: "Beginner & Regular Friendly",
      desc: "Dedicated onboarding and physical orientation support for newcomers to ensure safe, effective, and confident lift forms.",
      icon: Users
    },
    {
      title: "Clear Enquiry Structure",
      desc: "Straightforward training programs and digital membership routes that allow you to request pricing details effortlessly.",
      icon: ClipboardCheck
    },
    {
      title: "Direct Phone & Map Access",
      desc: "Single-tap mobile dialing and one-click Google Maps links for immediate navigational support to the facility.",
      icon: PhoneCall
    },
    {
      title: "Professional Online Presence",
      desc: "Demonstrates high-standard service visibility, high-resolution interior photos, and authentic service representation.",
      icon: Globe
    },
    {
      title: "Local Nearby Visibility",
      desc: "Establishes a strong physical presence serving PM Palem, Pothinamallayya Palem, and nearby Visakhapatnam areas.",
      icon: Eye
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-brand-bg border-b border-brand-border">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="font-mono text-xs text-brand-primary tracking-widest uppercase block mb-3">
            THE STRENGTH DIFFERENCE
          </span>
          <h2 className="font-display font-black text-3xl md:text-5xl text-white uppercase tracking-tight mb-4">
            WHY TRAIN WITH US?
          </h2>
          <div className="w-16 h-1 bg-brand-primary mx-auto mb-6"></div>
          <p className="font-sans text-gray-400 text-sm">
            We provide a no-nonsense, community-oriented facility focused on real progress.
          </p>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex gap-5 p-6 bg-brand-card/30 border border-brand-border/60 hover:border-brand-primary/30 hover:bg-brand-card/50 transition-all rounded-sm"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-brand-primary/5 border border-brand-primary/20 flex items-center justify-center rounded-sm">
                  <IconComponent className="text-brand-primary" size={22} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-white mb-2 uppercase tracking-wide">
                    {item.title}
                  </h4>
                  <p className="font-sans text-gray-400 text-xs md:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
