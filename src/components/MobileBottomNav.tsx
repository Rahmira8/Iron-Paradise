import { Phone, MessageSquare } from 'lucide-react';

export default function MobileBottomNav() {
  return (
    <div 
      id="mobile-bottom-cta-dock"
      className="fixed bottom-0 left-0 w-full bg-black/90 backdrop-blur-md border-t border-brand-border/80 px-4 py-3 z-40 flex items-center gap-3 lg:hidden shadow-2xl"
    >
      {/* Phone Call Button */}
      <a
        href="tel:+918309014346"
        className="flex-1 bg-brand-primary hover:bg-brand-primary-hover text-white font-display text-xs uppercase tracking-wider font-bold py-3.5 flex items-center justify-center gap-2 transition-all active:scale-[0.97]"
        id="mobile-sticky-call-btn"
      >
        <Phone size={14} />
        Call Now
      </a>

      {/* WhatsApp Quick Message Button */}
      <a
        href="https://wa.me/918309014346?text=Hi%20Iron%20Paradise,%20I%20am%20interested%20in%20gym%20membership%20details."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 bg-[#25D366] hover:bg-[#20ba5a] text-white font-display text-xs uppercase tracking-wider font-bold py-3.5 flex items-center justify-center gap-2 transition-all active:scale-[0.97]"
        id="mobile-sticky-whatsapp-btn"
      >
        <MessageSquare size={14} />
        WhatsApp Us
      </a>
    </div>
  );
}
