import { MessageCircle, MapPin, Phone, Mail, Clock, ExternalLink, Sparkles, Instagram, Facebook, Twitter } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export default function Footer({ onOpenBooking }: FooterProps) {
  const googleMapsUrl =
    'https://maps.google.com/?q=Diggala+Road+Keselwatta+Panadura+Sri+Lanka';

  return (
    <footer id="contact" className="bg-white overflow-hidden pb-20 sm:pb-24">
      {/* Upper Band: Final CTA with generous vertical breathing room */}
      <div className="w-full max-w-7xl mx-auto border-x border-b border-[#e3e8ee] bg-[#0a2540] relative overflow-hidden shadow-none rounded-none py-20 sm:py-28 px-8 sm:px-14 text-center flex flex-col justify-center items-center">
        {/* Atmospheric subtle glow accents */}
        <div
          className="absolute -top-24 -right-24 w-96 h-96 bg-[#533afd]/25 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#ea2261]/15 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-2xl mx-auto">
          {/* Final CTA Headline */}
          <h2
            id="final-cta-headline"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 leading-tight"
          >
            Ready for a healthier smile?
          </h2>

          <p className="text-base sm:text-lg font-normal text-slate-300 mb-10 max-w-xl mx-auto leading-relaxed">
            Message our care team directly on WhatsApp for appointments, questions, or treatment consultations.
          </p>

          {/* Final CTA Buttons: Very slightly rounded buttons (rounded-sm) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              id="footer-whatsapp-cta-btn"
              type="button"
              onClick={onOpenBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-sm bg-[#533afd] text-white text-base font-medium hover:bg-[#4434d4] active:bg-[#2e2b8c] transition-all shadow-none border border-[#533afd] cursor-pointer"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Message Us on WhatsApp</span>
            </button>

            <a
              id="footer-call-btn"
              href="tel:+94773956787"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm bg-white/10 hover:bg-white/15 border border-white/15 text-white text-base font-medium transition-all shadow-none tnum"
            >
              <Phone className="w-4 h-4 text-[#b9b9f9]" />
              <span>077 395 6787</span>
            </a>
          </div>
        </div>
      </div>

      {/* Standard Footer Section with generous breathing room */}
      <div className="w-full max-w-7xl mx-auto border-x border-b border-[#e3e8ee] bg-[#f8fafc] py-16 sm:py-20 px-8 sm:px-12 shadow-none rounded-none">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Brand & Overview */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-sm bg-[#533afd] flex items-center justify-center text-white shadow-none">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="text-lg font-semibold tracking-tight text-[#0a2540]">
                Modern Dental Care
              </span>
            </div>
            <p className="text-xs sm:text-[13px] text-[#425466] font-normal leading-relaxed">
              Gentle, professional dental care for families in Panadura. Open daily for routine checkups, extractions, and specialized treatments.
            </p>
            <div className="pt-1">
              <span className="inline-block text-[11px] font-medium text-[#4434d4] bg-[#533afd]/10 border border-[#533afd]/20 px-2.5 py-1 rounded-sm shadow-none">
                Keselwatta, Panadura
              </span>
            </div>
          </div>

          {/* Column 2: Hours */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#0a2540]">
              <Clock className="w-4 h-4 text-[#533afd]" />
              <h3>Hours</h3>
            </div>
            <ul className="text-xs sm:text-[13px] text-[#425466] space-y-2 font-normal tnum">
              <li className="flex justify-between pb-1.5 border-b border-[#e3e8ee]">
                <span>Mon – Sun:</span>
                <span className="font-semibold text-[#0a2540]">4:30 PM – 8:30 PM</span>
              </li>
              <li className="text-[12px] text-[#64748d] pt-1">
                Open daily during evening hours for patient convenience.
              </li>
            </ul>
          </div>

          {/* Column 3: Location */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#0a2540]">
              <MapPin className="w-4 h-4 text-[#533afd]" />
              <h3>Location</h3>
            </div>
            <p className="text-xs sm:text-[13px] text-[#425466] leading-relaxed font-normal">
              Diggala Road, Keselwatta<br />
              Panadura, Sri Lanka
            </p>
            <div className="pt-1">
              <a
                id="footer-google-maps-link"
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#533afd] hover:text-[#2e2b8c] transition-colors"
              >
                <span>View on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#0a2540]">
              <Phone className="w-4 h-4 text-[#533afd]" />
              <h3>Contact Info</h3>
            </div>

            <div className="space-y-2 text-xs sm:text-[13px] font-normal">
              <a
                id="footer-contact-phone-1"
                href="tel:+94773956787"
                className="flex items-center gap-2 text-[#425466] hover:text-[#533afd] transition-colors tnum"
              >
                <Phone className="w-3.5 h-3.5 text-[#533afd]" />
                <span className="font-medium text-[#0a2540]">077 395 6787</span>
              </a>

              <a
                id="footer-contact-phone-2"
                href="tel:+94771547593"
                className="flex items-center gap-2 text-[#425466] hover:text-[#533afd] transition-colors tnum"
              >
                <Phone className="w-3.5 h-3.5 text-[#533afd]" />
                <span className="font-medium text-[#0a2540]">077 154 7593</span>
              </a>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#533afd] hover:text-[#2e2b8c] transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Direct WhatsApp Assistance</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Attribution */}
        <div className="mt-14 pt-6 border-t border-[#e3e8ee] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748d] font-normal">
          <p>© {new Date().getFullYear()} Modern Dental Care. All rights reserved.</p>
          <p className="text-[11px]">
            Diggala Road, Keselwatta • Panadura, Sri Lanka
          </p>
        </div>
      </div>
    </footer>
  );
}
