import { Landmark, Phone, MapPin, Share2 } from 'lucide-react';

interface FooterProps {
  onShowDemoModal: (title: string, message: string) => void;
}

export default function Footer({ onShowDemoModal }: FooterProps) {
  const quickLinks = [
    { label: 'Privacy Policy', action: () => onShowDemoModal('Privacy Policy', 'This is a demo website. On the final production website, this link will direct users to a comprehensive Privacy Policy outlining user data usage.') },
    { label: 'Terms of Service', action: () => onShowDemoModal('Terms of Service', 'This is a demo website. On the final production website, this link will direct users to the Terms of Service Agreement of Iron Paradise Gym.') },
    { label: 'Service Areas', action: () => {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }}
  ];

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Iron Paradise Gym - Madhuravada',
        text: 'Check out the demo website for Iron Paradise Gym in Madhuravada, Visakhapatnam.',
        url: window.location.href,
      }).catch(err => console.log(err));
    } else {
      // Fallback
      onShowDemoModal('Share Website', 'This is a demo preview link. You can copy the browser URL and share it directly with the business owner or other stakeholders to showcase the layout design.');
    }
  };

  return (
    <footer className="bg-black border-t border-brand-border text-gray-400">
      
      {/* Upper Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
        
        {/* Brand details column */}
        <div className="md:col-span-5 space-y-6">
          <div className="font-display font-black text-2xl text-white tracking-tighter uppercase">
            IRON <span className="text-brand-primary">PARADISE</span>
          </div>
          <p className="font-sans text-sm text-gray-400 leading-relaxed max-w-sm">
            Madhuravada's premier strength and conditioning center. Built for the dedicated. Trained for results. Offering a results-driven environment with professional standards.
          </p>
          
          <div className="space-y-3 pt-2">
            <div className="flex gap-3 text-xs">
              <Phone size={14} className="text-brand-primary flex-shrink-0" />
              <a href="tel:+918309014346" className="hover:text-white transition-colors">
                +91-8309014346
              </a>
            </div>
            <div className="flex gap-3 text-xs">
              <MapPin size={14} className="text-brand-primary flex-shrink-0" />
              <span className="leading-relaxed">
                no. 1-41, Main Rd, Midhilapuri Vuda Colony, Pothinamallayya Palem, Madhuravada, Visakhapatnam
              </span>
            </div>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="md:col-span-3">
          <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider mb-6">
            Quick Links
          </h4>
          <ul className="space-y-4 text-xs">
            {quickLinks.map((link, idx) => (
              <li key={idx}>
                <button
                  onClick={link.action}
                  className="hover:text-white transition-colors cursor-pointer text-left font-sans"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Social / Sharing Column */}
        <div className="md:col-span-4">
          <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider mb-6">
            Connect & Share
          </h4>
          <p className="font-sans text-xs text-gray-500 mb-6 leading-relaxed">
            Need to present this design proposal? Share this preview link directly with the business owner.
          </p>
          <div className="flex gap-4">
            <button
              onClick={handleShare}
              className="w-10 h-10 border border-brand-border flex items-center justify-center hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all cursor-pointer rounded-sm text-gray-400"
              title="Share Demo"
              id="footer-share-btn"
            >
              <Share2 size={16} />
            </button>
          </div>
        </div>

      </div>

      {/* Demo Disclaimer Banner (CRITICAL AS REQUESTED) */}
      <div className="bg-brand-card/50 border-y border-brand-border py-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex gap-4 items-start">
          <div className="w-1.5 h-1.5 bg-brand-primary rounded-full mt-2 animate-pulse flex-shrink-0" />
          <p className="font-sans text-[11px] text-gray-500 leading-relaxed">
            <strong className="text-gray-300">DEMO PRESENTATION DISCLAIMER:</strong> This is a highly polished demo website concept designed for client presentation and review. Final images, content blocks, service descriptions, timings, customer reviews, and exact physical coordinates can be customized, expanded, and finalized following direct authorization and confirmation from the business owner.
          </p>
        </div>
      </div>

      {/* Copyright Line */}
      <div className="py-8 px-6 md:px-12 text-center border-t border-brand-border/20">
        <p className="font-sans text-xs text-gray-600">
          © {new Date().getFullYear()} Iron Paradise Madhuravada. All rights reserved. Professional Strength & Conditioning.
        </p>
      </div>

    </footer>
  );
}
