import { CheckCircle2, Sparkles, MessageCircle } from 'lucide-react';
import interiorImage from '../assets/images/clinic_interior_1789543163523.jpg';

interface PatientExperienceProps {
  onOpenBooking: () => void;
}

export default function PatientExperience({ onOpenBooking }: PatientExperienceProps) {
  const bullets = [
    'Transparent pricing and clear treatment plans.',
    'Calm, clean, and anxiety-free environment.',
    'Specialized treatments including surgical removals.',
  ];

  return (
    <section
      id="patient-experience-section"
      aria-labelledby="experience-heading"
      className="w-full max-w-7xl mx-auto border-x border-b border-[#e3e8ee] bg-white shadow-none rounded-none"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#e3e8ee]">
        {/* Left Column: Image of Modern Clinic Interior with generous breathing room */}
        <div className="lg:col-span-6 py-14 sm:py-20 lg:py-26 px-6 sm:px-10 lg:px-12 flex items-center justify-center bg-white">
          <div className="relative w-full max-w-lg">
            <div className="relative rounded-sm overflow-hidden bg-white p-2 border border-[#e3e8ee] shadow-none">
              <img
                id="clinic-interior-image"
                src={interiorImage}
                alt="Clean, calming clinic interior with professional dental facilities"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover rounded-xs aspect-[4/3]"
              />

              {/* Inset Hygiene Standards Badge */}
              <div className="absolute top-5 right-5 bg-white px-3 py-1.5 rounded-sm border border-[#e3e8ee] shadow-none flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#533afd]" />
                <span className="text-xs font-semibold text-[#0a2540]">
                  Clean & Sanitized Environment
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Title, Copy, Bullets with generous breathing room */}
        <div className="lg:col-span-6 py-16 sm:py-24 lg:py-28 px-6 sm:px-10 lg:px-14 xl:px-16 flex flex-col justify-center bg-white">
          {/* Section Title */}
          <h2
            id="experience-heading"
            className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#0a2540] leading-tight mb-4"
          >
            Patient-First Care
          </h2>

          {/* Body Copy */}
          <p
            id="experience-body"
            className="text-base sm:text-lg font-normal text-[#425466] leading-relaxed mb-8"
          >
            Experience safe and effective dental solutions designed for your comfort. We focus on providing high-quality care to keep your smile healthy and pain-free.
          </p>

          {/* Bullets List */}
          <ul id="experience-bullets-list" className="space-y-3.5 mb-8">
            {bullets.map((bulletText, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-xs bg-[#533afd]/10 border border-[#533afd]/20 flex items-center justify-center text-[#533afd] shrink-0 shadow-none">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm sm:text-[15px] font-medium text-[#0a2540] leading-snug">
                  {bulletText}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA action: Very slightly rounded button (rounded-sm) */}
          <div>
            <button
              id="experience-book-btn"
              type="button"
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-[#533afd] hover:bg-[#4434d4] active:bg-[#2e2b8c] text-white text-sm font-medium transition-all shadow-none border border-[#533afd] cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp for Appointment</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
