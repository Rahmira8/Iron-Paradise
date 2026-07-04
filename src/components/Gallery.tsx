import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, Image as ImageIcon, X } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);

  const galleryItems = [
    {
      title: "Gym Interior",
      src: "https://lh3.googleusercontent.com/aida/AP1WRLsLGNsx58B_9x3ammpzqLi1POZfyHmtJNR-m1LnHb9VA3KJGvtpFBhtFTjXlO_b39VX0BYP9jZWQolVNxTYT40Upl21UeXJRVad2AB9Z_AXHmIVnI9R888TDey7M95qRrQtTubuJZ78BC28SADE_DKzvysTpmkv0LJefI579Ih96uKftPg-TfShaNK1LB-TgCKxGy0H46tMElyEToJXsKZN-I0pN_WXQjQ-NzhyifSgDl74ZU72fpBLKuxY",
      size: "md:col-span-2",
      type: "Real Facility Photo"
    },
    {
      title: "Equipment Area",
      src: "https://lh3.googleusercontent.com/aida/AP1WRLsUUH4ID1jiNUCA-oZgBFmGfp2S8ePV-nLt5loY3MZZ4cJOHcsBI431bZmeOnogDU8x1IvoFyBezESj9uItgZ01m0qI_-xT3yvmWI1PZcRNvVcXSyISvFGt3BLQxA_g53iexSqRacjsGR9jvcR50_nNk3E9ofmFgs4YsauQNkkxyhP3vFHvLrlLTh3IH1x2QrQIKjzqpbmoQ7QeIKFFWN-_zaP9KgR2otkFzpsD_RfPENBdLEXKd7OerJ43",
      size: "md:col-span-1",
      type: "Real Facility Photo"
    },
    {
      title: "Training Space",
      src: "https://lh3.googleusercontent.com/aida/AP1WRLs7u3cusaKGFeQYbWy5yXlXNH9BffDq0ZDdSHudb2n91MDqQw3AuYFWcoT8Vi204qN-QwT8QeILk-wIo0cQzjlXUk5Jkh17j_WP0w67RmmCYPPOhRpn2oq2GGHh6aPcCvTmIw9ttd-n70xPtHyB7bE9z_upAOXlderrrBes5ay8T8MsJKwSeY0YM8L8cvfXRMLSloTf1TTTZ87ZPp-N0wT7wnBdJoWJaGhOWXN01ps2_A3pCYre-G4Xtirm",
      size: "md:col-span-1",
      type: "Real Facility Photo"
    },
    {
      title: "Cardio Area",
      src: "placeholder", // Will render as placeholder block since no direct real photo is provided
      size: "md:col-span-2",
      type: "Placeholder - Ready for owner photo"
    },
    {
      title: "Member Activity",
      src: "https://lh3.googleusercontent.com/aida/AP1WRLu6Bs--GW2ehIVN-kiPZKFdHUdF4U2ZfbEHvKxXN-gHCj8IZLGXkHb2jSPvbbNOstK7UbvD_8yFFVmiMnVsYNmPgRTqcqs62y8-ZkZE6esp7U5tI7mzsQwvyhCWn-8SUaAq1hpZEJz8rMAkLZVeTg5XELsg3HYsSFxGXQqXZbi1HQi2Ys6a_U5fbrw5k4CThjg3LT6VPj5XR2DUwaI4gBBPSFuUu_qyozP7VBft-y8VjYaaegcCZLINr2g5",
      size: "md:col-span-2",
      type: "Real Member Photo"
    },
    {
      title: "Reception / Enquiry Area",
      src: "placeholder", // Will render as placeholder block
      size: "md:col-span-1",
      type: "Placeholder - Ready for owner photo"
    }
  ];

  return (
    <section id="gallery" className="py-24 px-6 md:px-12 bg-brand-bg border-b border-brand-border">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
          <div>
            <span className="font-mono text-xs text-brand-primary tracking-widest uppercase block mb-3">
              FACILITY VISUALS
            </span>
            <h2 className="font-display font-black text-3xl md:text-5xl text-white uppercase tracking-tight">
              TRAINING GROUNDS
            </h2>
            <p className="font-sans text-gray-400 text-sm mt-2">
              A professional preview of our Madhuravada training zones.
            </p>
          </div>
          <div className="hidden md:block h-px flex-grow mx-12 bg-brand-border" />
          <span className="font-mono text-xs text-gray-500 uppercase">
            6 GALLERY ZONES PRESET
          </span>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => {
            const isPlaceholder = item.src === "placeholder";
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className={`${item.size} h-80 relative overflow-hidden group border border-brand-border bg-brand-card flex flex-col justify-between`}
                id={`gallery-item-${index}`}
              >
                {isPlaceholder ? (
                  /* Placeholder UI */
                  <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center bg-gradient-to-b from-brand-card to-black">
                    <div className="w-12 h-12 bg-brand-primary/5 border border-brand-primary/10 flex items-center justify-center mb-4 text-brand-primary">
                      <ImageIcon size={20} />
                    </div>
                    <span className="font-display font-bold text-sm text-gray-300 uppercase tracking-wide">
                      {item.title}
                    </span>
                    <span className="font-sans text-[10px] text-gray-500 italic mt-1">
                      {item.type}
                    </span>
                  </div>
                ) : (
                  /* Real Photo UI */
                  <>
                    <img 
                      src={item.src} 
                      alt={item.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                    />
                    {/* Shadow overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity z-10" />

                    {/* Hover search indicator */}
                    <button
                      onClick={() => setSelectedImage({ src: item.src, title: item.title })}
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all z-20 cursor-pointer bg-black/40"
                      aria-label={`View ${item.title}`}
                    >
                      <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center text-white shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <Eye size={20} />
                      </div>
                    </button>
                  </>
                )}

                {/* Bottom title banner */}
                <div className="absolute bottom-4 left-4 right-4 z-25 flex items-center justify-between pointer-events-none">
                  <div className="bg-brand-bg/95 border-l-2 border-brand-primary px-3 py-1.5 backdrop-blur-sm">
                    <span className="font-display font-bold text-xs text-white uppercase tracking-wider block">
                      {item.title}
                    </span>
                    <span className="font-mono text-[9px] text-gray-400 block uppercase mt-0.5">
                      {isPlaceholder ? "TEMPLATE SLOT" : "LIVE FACILITY"}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Lightbox Overlay */}
      <AnimatePresence>
        {selectedImage && (
          <div id="gallery-lightbox" className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-5xl w-full max-h-[85vh] z-10 flex flex-col"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-brand-primary transition-colors flex items-center gap-2 font-mono text-xs uppercase"
              >
                Close <X size={18} />
              </button>
              
              <div className="bg-brand-card p-2 border border-brand-border shadow-2xl">
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.title} 
                  className="w-full max-h-[75vh] object-contain mx-auto"
                />
                <div className="p-4 bg-brand-bg border-t border-brand-border/60 flex items-center justify-between">
                  <span className="font-display font-bold text-sm text-white uppercase tracking-wider">
                    {selectedImage.title}
                  </span>
                  <span className="font-mono text-[10px] text-brand-primary uppercase">
                    Iron Paradise Real Photo
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
