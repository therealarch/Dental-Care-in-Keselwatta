import { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import TrustBar from './components/TrustBar.tsx';
import CoreServices from './components/CoreServices.tsx';
import PatientExperience from './components/PatientExperience.tsx';
import PatientStories from './components/PatientStories.tsx';
import Footer from './components/Footer.tsx';
import WhatsAppModal from './components/WhatsAppModal.tsx';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState('General Dentistry');
  const lenisRef = useRef<Lenis | null>(null);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });
    lenisRef.current = lenis;

    // RAF Loop
    let animationFrameId: number;
    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    // Smooth scroll for anchor clicks
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('a');
      if (!target) return;
      const href = target.getAttribute('href');
      if (!href) return;

      if (href === '#' || href === '#top') {
        e.preventDefault();
        lenis.scrollTo(0, { duration: 1.2 });
        return;
      }

      if (href.startsWith('#') && href.length > 1) {
        try {
          const el = document.querySelector(href);
          if (el) {
            e.preventDefault();
            lenis.scrollTo(el as HTMLElement, {
              offset: -64,
              duration: 1.2,
            });
          }
        } catch {
          // Ignore invalid selector, allow standard browser navigation
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      cancelAnimationFrame(animationFrameId);
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Pause scroll when modal is open, resume when closed
  useEffect(() => {
    if (lenisRef.current) {
      if (isBookingOpen) {
        lenisRef.current.stop();
      } else {
        lenisRef.current.start();
      }
    }
  }, [isBookingOpen]);

  const handleOpenBooking = (treatment?: string) => {
    if (treatment) {
      setSelectedTreatment(treatment);
    }
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0d253d] selection:bg-[#533afd]/15 selection:text-[#533afd]">
      {/* 1. Header with Treatments & Contact */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main className="flex-1">
        {/* 1. Hero Section (Above the Fold) */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 2. Trust Bar (Social Proof / Quick Facts) */}
        <TrustBar />

        {/* 3. Core Services (4 Cards) */}
        <CoreServices onSelectTreatment={(t) => handleOpenBooking(t)} />

        {/* 4. Patient Experience (Why Choose Us) */}
        <PatientExperience onOpenBooking={() => handleOpenBooking()} />

        {/* 5. Social Proof / Patient Stories */}
        <PatientStories />
      </main>

      {/* 6. Footer & Final CTA */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive WhatsApp Booking Dialog */}
      <WhatsAppModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        defaultTreatment={selectedTreatment}
      />

      {/* Persistent Floating WhatsApp Quick-Action Button */}
      <button
        id="floating-whatsapp-trigger"
        type="button"
        onClick={() => handleOpenBooking()}
        className="fixed bottom-6 right-6 z-30 flex items-center gap-2 bg-[#25D366] hover:bg-[#20b858] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group cursor-pointer"
        aria-label="Chat with clinic on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
        <span className="hidden sm:inline-block text-xs font-medium tracking-normal">
          Chat on WhatsApp
        </span>
      </button>
    </div>
  );
}
