import { motion } from 'motion/react';
import { 
  Dumbbell, 
  Zap, 
  Scale, 
  TrendingUp, 
  UserCheck, 
  HeartPulse, 
  Shield, 
  ClipboardList,
  ArrowUpRight
} from 'lucide-react';

interface ServicesProps {
  onServiceSelect: (serviceName: string) => void;
}

export default function Services({ onServiceSelect }: ServicesProps) {
  const servicesList = [
    {
      title: "Gym Membership",
      desc: "Access premium machine circuits, solid cast iron weights, and a focused training environment that inspires discipline.",
      icon: Dumbbell,
      badge: "Full Access"
    },
    {
      title: "Strength Training",
      desc: "Develop structural power with barbell compounds, functional weights, and customized progressive overload guidance.",
      icon: Zap,
      badge: "Power & Form"
    },
    {
      title: "Weight Loss Training",
      desc: "Incorporate high-energy metabolic conditioning and structural cardio routines built to maximize daily calorie output.",
      icon: Scale,
      badge: "Conditioning"
    },
    {
      title: "Muscle Gain Training",
      desc: "hypertrophy-focused movement splits targeting specific muscle groups to build lean, healthy physical structure.",
      icon: TrendingUp,
      badge: "Hypertrophy"
    },
    {
      title: "Personal Training Enquiry",
      desc: "Accelerate your training safely with custom, one-on-one professional physical analysis and dedicated guidance.",
      icon: UserCheck,
      badge: "1-on-1 Support"
    },
    {
      title: "Cardio & General Fitness",
      desc: "Boost your energy and cardiovascular health using our dedicated modern treadmill, bicycle, and elliptical circuits.",
      icon: HeartPulse,
      badge: "Heart Health"
    },
    {
      title: "Beginner Fitness Support",
      desc: "Learn proper lifting posture, gym etiquette, and equipment safety from the ground up without pressure.",
      icon: Shield,
      badge: "Safe Starts"
    },
    {
      title: "Fitness Guidance",
      desc: "Structured advice on exercise consistency, set tracking, and workout frequency planning for long-term health.",
      icon: ClipboardList,
      badge: "Workout Planning"
    }
  ];

  return (
    <section id="training" className="py-24 px-6 md:px-12 bg-brand-bg border-b border-brand-border">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="font-mono text-xs text-brand-primary tracking-widest uppercase block mb-3">
            WHAT WE OFFER
          </span>
          <h2 className="font-display font-black text-3xl md:text-5xl text-white uppercase tracking-tight mb-4">
            ELITE TRAINING SERVICES
          </h2>
          <div className="w-16 h-1 bg-brand-primary mx-auto mb-6"></div>
          <p className="font-sans text-gray-400 text-sm md:text-base">
            Professional fitness services tailored to the Madhuravada community. We prioritize safe setups, experienced guidance, and sustainable training habits.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                onClick={() => onServiceSelect(service.title)}
                className="group relative bg-brand-card hover:bg-brand-card-hover border border-brand-border hover:border-brand-primary/40 p-8 flex flex-col justify-between cursor-pointer transition-all duration-300"
                id={`service-card-${index}`}
              >
                <div>
                  {/* Badge & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 bg-brand-primary/5 rounded-sm border border-brand-primary/10 flex items-center justify-center group-hover:bg-brand-primary/10 group-hover:border-brand-primary/30 transition-all">
                      <IconComponent className="text-brand-primary" size={24} />
                    </div>
                    <span className="font-mono text-[10px] text-gray-400 bg-brand-bg px-2 py-1 border border-brand-border/80 uppercase tracking-wider rounded-sm">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-white mb-3 group-hover:text-brand-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="font-sans text-gray-400 text-xs md:text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 font-display text-[11px] uppercase tracking-wider font-bold text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Enquire Now
                  <ArrowUpRight size={14} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
