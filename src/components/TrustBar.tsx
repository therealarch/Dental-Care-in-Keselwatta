import { Clock, ShieldCheck, Heart } from 'lucide-react';

export default function TrustBar() {
  const items = [
    {
      id: 'trust-item-1',
      icon: Clock,
      title: 'Open Daily Evening Hours',
      desc: 'Mon – Sun: 4:30 PM – 8:30 PM',
    },
    {
      id: 'trust-item-2',
      icon: ShieldCheck,
      title: 'Safe Wisdom Tooth Removal',
      desc: 'Careful surgical & routine extractions',
    },
    {
      id: 'trust-item-3',
      icon: Heart,
      title: 'Family-Focused Dentistry',
      desc: 'Gentle clinical care for all ages',
    },
  ];

  return (
    <section
      id="trust-bar-section"
      aria-label="Clinic Highlights"
      className="w-full max-w-7xl mx-auto border-x border-b border-[#e3e8ee] bg-[#f8fafc] shadow-none rounded-none"
    >
      <div className="w-full grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#e3e8ee]">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div
              id={item.id}
              key={item.id}
              className="flex items-center gap-4 py-8 sm:py-10 lg:py-12 px-6 sm:px-8 bg-[#f8fafc] hover:bg-white transition-colors"
            >
              <div className="w-11 h-11 rounded-sm bg-white border border-[#e3e8ee] flex items-center justify-center text-[#533afd] shrink-0 shadow-none">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-[17px] font-semibold text-[#0a2540] tracking-tight tnum">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-[#64748d] mt-0.5 font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
