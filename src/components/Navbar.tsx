import { useState } from 'react';
import { MessageCircle, Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (treatment?: string) => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      id="main-header"
      className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-[#e3e8ee] transition-all"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-x border-[#e3e8ee] h-18 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a
          id="brand-logo-link"
          href="#"
          className="flex items-center gap-2.5 group focus:outline-none"
        >
          <div className="w-9 h-9 rounded-sm bg-[#533afd] flex items-center justify-center text-white shadow-none group-hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-medium tracking-tight text-[#0d253d] leading-none">
              Modern Dental Care
            </span>
            <span className="text-[11px] text-[#64748d] tracking-normal font-normal">
              Keselwatta, Panadura
            </span>
          </div>
        </a>

        {/* Desktop Navigation: Treatments & Contact */}
        <nav id="desktop-navbar" className="hidden md:flex items-center gap-8">
          <a
            id="nav-link-treatments"
            href="#treatments"
            className="text-[15px] font-normal text-[#273951] hover:text-[#533afd] transition-colors py-1 relative"
          >
            Treatments
          </a>
          <a
            id="nav-link-contact"
            href="#contact"
            className="text-[15px] font-normal text-[#273951] hover:text-[#533afd] transition-colors py-1 relative"
          >
            Contact
          </a>
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            id="nav-book-whatsapp-btn"
            type="button"
            onClick={() => onOpenBooking()}
            className="inline-flex items-center gap-2 bg-[#533afd] hover:bg-[#4434d4] active:bg-[#2e2b8c] text-white text-sm font-medium px-4 py-2 rounded-sm transition-all shadow-none border border-[#533afd] cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp for Appointment</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            id="mobile-book-whatsapp-icon-btn"
            type="button"
            onClick={() => onOpenBooking()}
            className="p-2 rounded-sm bg-[#533afd] text-white shadow-none"
            aria-label="WhatsApp for Appointment"
          >
            <MessageCircle className="w-4 h-4" />
          </button>
          <button
            id="mobile-menu-toggle-btn"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#0d253d] hover:bg-[#f6f9fc] rounded-sm transition-colors border border-transparent hover:border-[#e3e8ee]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-dropdown"
          className="sm:hidden border-b border-[#e3e8ee] bg-white px-5 pt-3 pb-6 space-y-4 animate-in slide-in-from-top-2 duration-150"
        >
          <div className="flex flex-col space-y-3 pt-1">
            <a
              id="mobile-nav-link-treatments"
              href="#treatments"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-normal text-[#0d253d] hover:text-[#533afd] py-2 border-b border-[#e3e8ee]/60"
            >
              Treatments
            </a>
            <a
              id="mobile-nav-link-contact"
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-normal text-[#0d253d] hover:text-[#533afd] py-2 border-b border-[#e3e8ee]/60"
            >
              Contact
            </a>
          </div>
          <button
            id="mobile-menu-whatsapp-btn"
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="w-full inline-flex items-center justify-center gap-2 bg-[#533afd] hover:bg-[#4434d4] active:bg-[#2e2b8c] text-white text-sm font-medium px-4 py-2.5 rounded-sm transition-all shadow-none border border-[#533afd] cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp for Appointment
          </button>
        </div>
      )}
    </header>
  );
}
