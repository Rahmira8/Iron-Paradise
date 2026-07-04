import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import CTASection from './components/CTASection';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import ServiceArea from './components/ServiceArea';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileBottomNav from './components/MobileBottomNav';
import DemoNotification from './components/DemoNotification';

export default function App() {
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalMessage, setModalMessage] = useState('');

  // Selected training service for pre-populating enquiry form
  const [selectedService, setSelectedService] = useState('');

  const triggerDemoModal = (title: string, message: string) => {
    setModalTitle(title);
    setModalMessage(message);
    setIsModalOpen(true);
  };

  const handleServiceSelect = (serviceName: string) => {
    setSelectedService(serviceName);
  };

  const handleFormSubmitSuccess = () => {
    triggerDemoModal(
      "Enquiry Received!",
      "Thank you for submitting your details. This is a highly functional demo form. On the live website, we can securely link this direct message to your WhatsApp, forward it to your business email (+91-8309014346), or integrate it into a client management system (CRM) to help you manage leads."
    );
  };

  return (
    <div id="iron-paradise-app" className="min-h-screen bg-brand-bg text-[#e5e2e1] flex flex-col font-sans selection:bg-brand-primary selection:text-white pb-16 lg:pb-0">
      
      {/* Header NavBar */}
      <Header onShowDemoModal={triggerDemoModal} />

      {/* Main Sections */}
      <main className="flex-grow">
        
        {/* 1. Hero banner */}
        <Hero />

        {/* 2. Services Grid */}
        <Services onServiceSelect={handleServiceSelect} />

        {/* 3. High conversion CTA banner */}
        <CTASection />

        {/* 4. Honest About description */}
        <About />

        {/* 5. Bento features card layout */}
        <WhyChooseUs />

        {/* 6. Professional review placeholders */}
        <Reviews />

        {/* 7. Image gallery (Real Photos + labels) */}
        <Gallery />

        {/* 8. Local geographical accessibility panel */}
        <ServiceArea />

        {/* 9. Structured contact form with maps details */}
        <Contact 
          selectedService={selectedService} 
          onSubmitSuccess={handleFormSubmitSuccess} 
        />

      </main>

      {/* Footer Details & Disclaimer */}
      <Footer onShowDemoModal={triggerDemoModal} />

      {/* Sticky Bottom Actions Dock (Mobile Only) */}
      <MobileBottomNav />

      {/* Beautiful Animated Toast / Dialogue Notification */}
      <DemoNotification 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalTitle}
        message={modalMessage}
      />

    </div>
  );
}
