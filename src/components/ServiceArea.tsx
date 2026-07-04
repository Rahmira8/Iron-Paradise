import { Landmark, Compass } from 'lucide-react';

export default function ServiceArea() {
  const regions = [
    "Madhuravada",
    "Midhilapuri Vuda Colony",
    "Pothinamallayya Palem",
    "PM Palem",
    "Kommadi",
    "Nearby Visakhapatnam Areas"
  ];

  return (
    <section className="py-12 bg-black border-y border-brand-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="w-10 h-10 bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center rounded-sm">
              <Compass className="text-brand-primary" size={18} />
            </div>
            <div>
              <span className="font-mono text-[10px] text-brand-primary tracking-widest uppercase block">
                LOCAL ACCESSIBILITY
              </span>
              <h3 className="font-display font-black text-sm text-white uppercase tracking-tight">
                LOCALLY SERVING FROM
              </h3>
            </div>
          </div>

          {/* Horizontal service area list */}
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 opacity-80">
            {regions.map((region, idx) => (
              <div key={idx} className="flex items-center gap-2">
                {idx > 0 && (
                  <span className="text-brand-primary font-mono text-xs font-bold mr-2 hidden md:inline">
                    |
                  </span>
                )}
                <span className="font-display text-xs uppercase tracking-widest font-bold text-gray-300 hover:text-white transition-colors cursor-default">
                  {region}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
