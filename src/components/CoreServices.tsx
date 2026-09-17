import { ShieldCheck, Sparkles, Smile, Activity, ChevronRight, MessageCircle } from 'lucide-react';
import asset10 from '../assets/images/Asset 10.png';
import asset13 from '../assets/images/Asset 13.png';
import asset11 from '../assets/images/Asset 11.png';
import asset12 from '../assets/images/Asset 12.png';

interface CoreServicesProps {
  onSelectTreatment: (treatmentName: string) => void;
}

export default function CoreServices({ onSelectTreatment }: CoreServicesProps) {
  const services = [
    {
      id: 'service-card-1' as const,
      title: 'General Dentistry',
      description: 'Comprehensive routine checkups and cleanings for a healthy, pain-free smile.',
      icon: ShieldCheck,
      image: asset10,
      imageAlt: 'Dental professional for General Dentistry routine checkups and cleanings',
    },
    {
      id: 'service-card-2' as const,
      title: 'Scaling & Cleaning',
      description: 'Professional tartar removal to prevent decay and chromogenic bacteria buildup.',
      icon: Sparkles,
      image: asset13,
      imageAlt: 'Professional Scaling & Cleaning for healthy teeth and gums',
    },
    {
      id: 'service-card-3' as const,
      title: 'Root Canal Therapy',
      description: 'Expert treatments to effectively relieve severe tooth pain and save natural teeth.',
      icon: Smile,
      image: asset12,
      imageAlt: 'Root Canal Therapy cross section illustration',
    },
    {
      id: 'service-card-4' as const,
      title: 'Oral Surgery',
      description: 'Safe extractions and surgical wisdom tooth removal for fast relief.',
      icon: Activity,
      image: asset11,
      imageAlt: 'Oral Surgery and surgical wisdom tooth removal diagnostics',
    },
  ];

  return (
    <section
      id="treatments"
      aria-labelledby="services-heading"
      className="w-full max-w-7xl mx-auto border-x border-b border-[#e3e8ee] bg-white shadow-none rounded-none"
    >
      {/* Section Header with generous breathing space */}
      <div className="py-16 sm:py-20 lg:py-24 px-8 sm:px-12 text-center border-b border-[#e3e8ee] bg-white">
        <h2
          id="services-heading"
          className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0a2540] leading-tight"
        >
          Core Services
        </h2>
        <p className="mt-4 text-base sm:text-lg font-normal text-[#425466] max-w-2xl mx-auto leading-relaxed">
          Comprehensive, evidence-based dental care for patients and families in Keselwatta.
        </p>
      </div>

      {/* 4 Grid Cards intersecting seamlessly with thin 1px borders and subtle light purple gradient */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative stripe-card-gradient overflow-hidden rounded-none">
        {/* Subtle decorative dot overlay matching homepage hero aesthetic */}
        <div className="absolute inset-0 stripe-dots-pattern opacity-10 pointer-events-none" aria-hidden="true" />

        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              id={service.id}
              key={service.id}
              className={`group relative z-10 rounded-none py-8 sm:py-10 lg:py-12 px-6 sm:px-7 transition-colors flex flex-col justify-between shadow-none hover:bg-white/40 ${
                index > 0 ? 'border-t md:border-t-0 border-[#e3e8ee]' : ''
              } ${
                index % 2 === 1 ? 'md:border-l border-[#e3e8ee]' : ''
              } ${
                index >= 2 ? 'md:border-t lg:border-t-0 border-[#e3e8ee]' : ''
              } ${
                index > 0 ? 'lg:border-l lg:border-[#e3e8ee]' : ''
              }`}
            >
              <div>
                {/* Visual Asset Illustration Frame placed directly on the light accent background */}
                <div className="w-full h-48 sm:h-52 mb-6 p-2 flex items-center justify-center overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    referrerPolicy="no-referrer"
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-sm"
                  />
                </div>

                {/* Card Title & Icon */}
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-none flex items-center justify-center shrink-0 bg-[#533afd]/10 border border-[#533afd]/20 text-[#533afd]">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-[#0a2540]">
                    {service.title}
                  </h3>
                </div>

                {/* Short Sentence Description */}
                <p className="text-sm leading-relaxed font-normal text-[#425466]">
                  {service.description}
                </p>
              </div>

              {/* Card Action Link */}
              <div className="mt-8 pt-5 flex items-center justify-between border-t border-[#e3e8ee]">
                <button
                  type="button"
                  onClick={() => onSelectTreatment(service.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-medium transition-colors cursor-pointer py-1.5 px-2.5 -ml-1 rounded-none text-[#533afd] group-hover:text-[#2e2b8c] hover:bg-[#533afd]/10 border border-transparent hover:border-[#533afd]/20"
                >
                  <span>Inquire via WhatsApp</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
                <MessageCircle className="w-4 h-4 transition-colors text-[#64748d] group-hover:text-[#533afd]" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
