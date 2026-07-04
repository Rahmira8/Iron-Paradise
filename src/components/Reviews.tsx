import { Star, MessageSquareQuote } from 'lucide-react';

export default function Reviews() {
  const placeholders = [
    {
      label: "Strength Member slot",
      highlight: "Experience with gym equipment and atmosphere.",
      stars: 5
    },
    {
      label: "General Fitness slot",
      highlight: "Feedback regarding the trainer's support and local convenience.",
      stars: 5
    },
    {
      label: "Muscle Gain Member slot",
      highlight: "Comment on results achieved in muscle gain and conditioning.",
      stars: 5
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-brand-bg/40 border-b border-brand-border">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="font-mono text-xs text-brand-primary tracking-widest uppercase block mb-3">
            MEMBER TESTIMONIALS
          </span>
          <h2 className="font-display font-black text-3xl md:text-5xl text-white uppercase tracking-tight mb-4">
            CUSTOMER REVIEWS
          </h2>
          <div className="w-16 h-1 bg-brand-primary mx-auto mb-6"></div>
          
          <div className="bg-brand-card/80 border border-brand-primary/20 p-4 max-w-lg mx-auto rounded-sm mb-4">
            <p className="font-sans text-xs md:text-sm text-brand-primary font-medium italic">
              “Real customer reviews can be added here after approval from the business owner.”
            </p>
          </div>
          <p className="font-sans text-[11px] text-gray-500 max-w-md mx-auto">
            Below is the approved layout designed for displaying local community feedback. It supports multi-star rating outputs and text commentaries.
          </p>
        </div>

        {/* Testimonial Placeholder Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {placeholders.map((ph, idx) => (
            <div 
              key={idx}
              className="p-8 border border-brand-border bg-brand-card/40 flex flex-col justify-between relative group"
              id={`review-placeholder-${idx}`}
            >
              <div className="absolute top-4 right-6 text-brand-border/40 group-hover:text-brand-primary/10 transition-colors">
                <MessageSquareQuote size={40} />
              </div>

              <div>
                {/* Rating indicators */}
                <div className="flex gap-1 mb-6">
                  {[...Array(ph.stars)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className="text-brand-primary fill-brand-primary" 
                    />
                  ))}
                </div>

                <p className="font-sans text-gray-200 text-sm italic leading-relaxed mb-6">
                  "Customer review placeholder - {ph.highlight}"
                </p>
              </div>

              <div className="border-t border-brand-border/50 pt-4 mt-2">
                <span className="font-mono text-[10px] text-brand-primary tracking-wider uppercase block">
                  {ph.label}
                </span>
                <span className="font-sans text-[11px] text-gray-500 italic block mt-0.5">
                  Pending Owner Verification
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
