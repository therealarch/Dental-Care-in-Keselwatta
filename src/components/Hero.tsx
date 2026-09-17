import { useEffect, useRef, useState } from 'react';
import { MessageCircle, ArrowDown, ShieldCheck, Star, Calendar, Sparkles } from 'lucide-react';
import heroImage from '../assets/images/dental_patient_hero_1789543148053.jpg';
import PrismaticBurst from './PrismaticBurst';

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const heroRef = useRef<HTMLElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const [burstOffset, setBurstOffset] = useState<{ x: number | string; y: number | string }>({ x: '29%', y: 0 });

  useEffect(() => {
    const updateOffset = () => {
      if (!heroRef.current || !rightPanelRef.current) return;
      const heroRect = heroRef.current.getBoundingClientRect();
      const panelRect = rightPanelRef.current.getBoundingClientRect();

      const heroCenterX = heroRect.left + heroRect.width / 2;
      const heroCenterY = heroRect.top + heroRect.height / 2;
      const panelCenterX = panelRect.left + panelRect.width / 2;
      const panelCenterY = panelRect.top + panelRect.height / 2;

      const deltaX = panelCenterX - heroCenterX;
      // WebGL FragCoord Y runs bottom-up; DOM runs top-down
      const deltaY = -(panelCenterY - heroCenterY);

      setBurstOffset({ x: Math.round(deltaX), y: Math.round(deltaY) });
    };

    updateOffset();
    window.addEventListener('resize', updateOffset);
    return () => window.removeEventListener('resize', updateOffset);
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero-section"
      aria-label="Hero Introduction"
      className="w-full max-w-7xl mx-auto border-x border-b border-[#e3e8ee] bg-white relative overflow-hidden shadow-none rounded-none"
    >
      {/* Dynamic Prismatic Burst mesh backdrop - Stripe inspired atmospheric spectrum at 60% opacity */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-60" aria-hidden="true">
        <PrismaticBurst
          animationType="rotate3d"
          intensity={2}
          speed={0.4}
          distort={0.9}
          paused={false}
          offset={burstOffset}
          hoverDampness={0.25}
          rayCount={24}
          lightMode={true}
          colors={['#533afd', '#665efd', '#b9b9f9', '#f5e9d4', '#ea2261']}
        />
      </div>

      {/* White linear gradient on top of the light ray effect from bottom to top slowly fading so the texts are more visible */}
      <div
        className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-t from-white via-white/80 via-55% to-transparent"
        aria-hidden="true"
      />

      {/* Directional soft white wash on left panel text zone for maximum typography contrast */}
      <div
        className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-r from-white/90 via-white/60 to-transparent lg:w-3/5"
        aria-hidden="true"
      />

      {/* Subtle decorative grid lines characteristic of Stripe headers */}
      <div className="absolute inset-0 stripe-dots-pattern opacity-25 pointer-events-none z-0" aria-hidden="true" />

      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#e3e8ee]">
        {/* Left Column: Text Content with generous breathing room */}
        <div className="lg:col-span-7 py-16 sm:py-24 lg:py-28 px-6 sm:px-10 lg:px-14 xl:px-16 flex flex-col justify-center">
          {/* Badge: Clinical location & operating hours tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#533afd]/10 border border-[#533afd]/20 text-[#533afd] text-xs font-medium mb-6 w-fit shadow-none">
            <span className="w-2 h-2 rounded-xs bg-[#533afd]"></span>
            <span className="tracking-tight">Diggala Road, Keselwatta • Panadura</span>
          </div>

          {/* H1 Headline: Bold with tight geometric tracking */}
          <h1
            id="hero-headline"
            className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#0a2540] leading-[1.06] tracking-tight mb-6"
          >
            Modern Dental Care in Keselwatta
          </h1>

          {/* Sub-headline */}
          <p
            id="hero-subheadline"
            className="text-base sm:text-lg font-normal text-[#425466] leading-relaxed max-w-2xl mb-8"
          >
            We provide gentle, professional dental care for families in Panadura. Open daily for routine checkups, extractions, and specialized treatments.
          </p>

          {/* CTA Buttons: Very slightly rounded buttons (rounded-sm) without drop shadows */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Primary CTA */}
            <button
              id="hero-primary-cta"
              type="button"
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-sm bg-[#533afd] hover:bg-[#4434d4] active:bg-[#2e2b8c] text-white text-sm sm:text-base font-medium transition-all shadow-none border border-[#533afd] cursor-pointer group"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:scale-105" />
              <span>WhatsApp for Appointment</span>
            </button>

            {/* Secondary CTA */}
            <a
              id="hero-secondary-cta"
              href="#treatments"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-sm bg-white hover:bg-[#f6f9fc] text-[#0a2540] hover:text-[#533afd] border border-[#e3e8ee] hover:border-[#533afd]/50 text-sm sm:text-base font-medium transition-all shadow-none group"
            >
              <span>View Our Services</span>
              <ArrowDown className="w-4 h-4 text-[#533afd] group-hover:translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Micro-Proof bar with tabular numbers and clinical schedule information */}
          <div className="mt-10 pt-6 border-t border-[#e3e8ee] flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#64748d]">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#533afd]" />
              <span className="font-semibold text-[#0a2540] tnum">Open Daily</span>
            </div>
            <span className="text-[#e3e8ee] hidden sm:inline">•</span>
            <span className="text-[#425466] tnum font-normal">Mon–Sun: 4:30 PM – 8:30 PM</span>
            <span className="text-[#e3e8ee] hidden sm:inline">•</span>
            <span className="inline-flex items-center gap-1 text-[#533afd] font-medium tnum">
              Panadura Area Dental Clinic
            </span>
          </div>
        </div>

        {/* Right Column: Clean Clinic Mockup Frame with generous breathing room */}
        <div
          ref={rightPanelRef}
          id="hero-right-panel"
          className="lg:col-span-5 py-12 sm:py-20 lg:py-24 px-6 sm:px-8 lg:px-10 bg-[#f8fafc]/50 flex flex-col justify-center"
        >
          <div className="relative mx-auto max-w-md lg:max-w-none w-full">
            {/* Image Frame with thin 1px border and very slight rounding */}
            <div className="relative rounded-sm overflow-hidden bg-white shadow-none border border-[#e3e8ee]">
              <div className="p-2 bg-white">
                <img
                  id="hero-patient-image"
                  src={heroImage}
                  alt="Gentle and professional dental care for patients in Keselwatta"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover rounded-xs aspect-[4/3]"
                />
              </div>

              {/* Bottom Clinical Care Card */}
              <div className="p-3.5 bg-white border-t border-[#e3e8ee] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xs bg-[#533afd]/10 border border-[#533afd]/20 flex items-center justify-center text-[#533afd]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#0a2540]">Gentle Clinical Care</p>
                    <p className="text-[11px] text-[#64748d]">Family dentistry in Keselwatta</p>
                  </div>
                </div>
                <span className="text-[11px] font-medium text-[#533afd] bg-[#533afd]/10 border border-[#533afd]/20 px-2.5 py-1 rounded-sm tnum">
                  Open Daily
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
