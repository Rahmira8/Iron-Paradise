import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onShowDemoModal: (title: string, message: string) => void;
}

export default function Header({ onShowDemoModal }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Simple active section detection based on viewport scroll position
      const sections = ['home', 'about', 'training', 'membership', 'gallery', 'location', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Training', href: '#training', id: 'training' },
    { label: 'Membership', href: '#membership', id: 'membership' },
    { label: 'Gallery', href: '#gallery', id: 'gallery' },
    { label: 'Location', href: '#location', id: 'location' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetEl = document.querySelector(href);
    if (targetEl) {
      const headerOffset = 80;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      id="main-app-header"
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-brand-bg/95 border-b border-brand-border py-4 shadow-xl backdrop-blur-md' 
          : 'bg-gradient-to-b from-black/80 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleLinkClick(e, '#home')}
          className="flex items-center gap-2 group"
          id="logo-brand-link"
        >
          <span className="font-display font-black text-2xl md:text-3xl text-white tracking-tighter uppercase group-hover:text-brand-primary transition-colors">
            IRON <span className="text-brand-primary">PARADISE</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8" id="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`font-display text-xs uppercase tracking-widest font-bold transition-all relative py-2 ${
                activeSection === link.id 
                  ? 'text-brand-primary' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-primary"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="tel:+918309014346"
            className="flex items-center gap-2 font-display text-xs uppercase tracking-wider font-bold text-gray-300 hover:text-white py-2 px-3 border border-transparent hover:border-brand-border transition-all"
            id="header-phone-link"
          >
            <Phone size={14} className="text-brand-primary" />
            +91-8309014346
          </a>
          <a
            href="tel:+918309014346"
            onClick={(e) => {
              // Direct Click to Call link, but trigger beautiful tracking message as a bonus
              console.log("Directing call connection to: +918309014346");
            }}
            className="bg-brand-primary hover:bg-brand-primary-hover text-white font-display text-xs uppercase tracking-wider font-bold px-6 py-3 transition-all active:scale-[0.97]"
            id="header-cta-call"
          >
            Call Now
          </a>
        </div>

        {/* Mobile Hamburger Trigger */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
          aria-label="Toggle Menu"
          id="mobile-menu-trigger"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden w-full bg-brand-bg/95 border-b border-brand-border backdrop-blur-lg overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`font-display text-sm uppercase tracking-widest font-bold py-2 border-b border-brand-border/30 ${
                    activeSection === link.id ? 'text-brand-primary pl-2' : 'text-gray-300'
                  } transition-all`}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col sm:hidden gap-4 mt-4 pt-4 border-t border-brand-border/50">
                <a
                  href="tel:+918309014346"
                  className="flex items-center justify-center gap-2 bg-brand-card hover:bg-brand-card-hover border border-brand-border text-white font-display text-xs uppercase tracking-wider font-bold py-4 transition-all"
                  id="mobile-drawer-call-text"
                >
                  <Phone size={14} className="text-brand-primary" />
                  +91-8309014346
                </a>
                <a
                  href="tel:+918309014346"
                  className="bg-brand-primary hover:bg-brand-primary-hover text-white text-center font-display text-xs uppercase tracking-wider font-bold py-4 transition-all"
                  id="mobile-drawer-call-btn"
                >
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
