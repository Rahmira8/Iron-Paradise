import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, X } from 'lucide-react';

interface DemoNotificationProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
}

export default function DemoNotification({
  isOpen,
  onClose,
  title = "Demo Enquiry Received!",
  message = "Thank you. This is a demo form. The final website can connect this to WhatsApp, email, or CRM to help you capture and organize potential client leads seamlessly."
}: DemoNotificationProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div id="demo-notification-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            id="demo-notification-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            id="demo-notification-card"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-md bg-brand-card border border-brand-primary p-8 shadow-2xl z-10"
          >
            <button
              id="close-notification-btn"
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mb-6 border border-brand-primary/20">
                <CheckCircle2 className="text-brand-primary" size={32} />
              </div>

              <h3 className="font-display font-bold text-2xl text-white mb-3 tracking-tight">
                {title}
              </h3>
              
              <p className="font-sans text-gray-300 text-sm leading-relaxed mb-6">
                {message}
              </p>

              <div className="w-full bg-brand-bg p-4 border border-brand-border text-left mb-6 rounded-sm">
                <span className="font-mono text-[10px] text-brand-primary tracking-widest uppercase block mb-1">
                  DEMO NOTICE
                </span>
                <p className="font-sans text-[12px] text-gray-400 leading-normal">
                  All interactive features are live in this prototype. You can present this directly to the business owner to demonstrate how customers will inquire, call, and interact.
                </p>
              </div>

              <button
                id="notification-acknowledge-btn"
                onClick={onClose}
                className="w-full bg-brand-primary hover:bg-brand-primary-hover text-white font-display uppercase tracking-wider font-bold py-3 text-sm transition-all active:scale-[0.98]"
              >
                Continue Demo
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
