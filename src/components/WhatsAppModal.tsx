import React, { useState } from 'react';
import { MessageCircle, Phone, Calendar, Clock, X, CheckCircle2, Sparkles, Send } from 'lucide-react';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTreatment?: string;
}

export default function WhatsAppModal({
  isOpen,
  onClose,
  defaultTreatment = 'General Dentistry',
}: WhatsAppModalProps) {
  const [name, setName] = useState('');
  const [treatment, setTreatment] = useState(defaultTreatment);
  const [preferredDay, setPreferredDay] = useState('Earliest Available');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleLaunchWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const clinicPhone = '94773956787';
    const message = encodeURIComponent(
      `Hello Modern Dental Care Keselwatta! I would like to book an appointment.\n` +
      `• Patient Name: ${name.trim() || 'Patient'}\n` +
      `• Treatment: ${treatment}\n` +
      `• Preferred Time: ${preferredDay}` +
      (notes.trim() ? `\n• Notes: ${notes.trim()}` : '')
    );
    const waUrl = `https://wa.me/${clinicPhone}?text=${message}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div
      id="whatsapp-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0d253d]/50 backdrop-blur-xs transition-opacity duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="whatsapp-modal-content"
        className="relative w-full max-w-lg bg-white rounded-sm p-6 sm:p-8 shadow-none border border-[#e3e8ee] animate-in fade-in zoom-in-95 duration-150"
      >
        {/* Close Button */}
        <button
          id="close-whatsapp-modal-btn"
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-[#64748d] hover:text-[#0a2540] hover:bg-[#f8fafc] rounded-sm border border-transparent hover:border-[#e3e8ee] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-sm bg-[#533afd]/10 border border-[#533afd]/20 flex items-center justify-center text-[#533afd]">
            <MessageCircle className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold tracking-tight text-[#0a2540]">
              WhatsApp for Appointment
            </h3>
            <p className="text-xs text-[#64748d]">
              Diggala Road, Keselwatta • Hours: 4:30 PM - 8:30 PM Daily
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleLaunchWhatsApp} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-[#273951] mb-1.5">
              Your Name (Optional)
            </label>
            <input
              id="patient-name-input"
              type="text"
              placeholder="e.g. A. Perera"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-sm border border-[#a8c3de] text-sm text-[#0a2540] placeholder:text-[#64748d]/60 focus:outline-none focus:border-[#533afd] transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-[#273951] mb-1.5">
              Selected Treatment
            </label>
            <select
              id="treatment-select"
              value={treatment}
              onChange={(e) => setTreatment(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-sm border border-[#a8c3de] text-sm text-[#0a2540] bg-white focus:outline-none focus:border-[#533afd] transition-colors"
            >
              <option value="General Dentistry">General Dentistry (Routine checkups & cleanings)</option>
              <option value="Scaling & Cleaning">Scaling & Cleaning (Tartar removal & hygiene)</option>
              <option value="Root Canal Therapy">Root Canal Therapy (Severe pain relief)</option>
              <option value="Oral Surgery">Oral Surgery (Safe wisdom tooth removal & extractions)</option>
              <option value="General Consultation">General Consultation / Questions</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-[#273951] mb-1.5">
              Preferred Evening Slot (Mon–Sun: 4:30 PM – 8:30 PM)
            </label>
            <div className="grid grid-cols-2 gap-2">
              {['Earliest Available', '4:30 PM - 6:00 PM', '6:00 PM - 7:30 PM', '7:30 PM - 8:30 PM'].map((time) => (
                <button
                  type="button"
                  key={time}
                  onClick={() => setPreferredDay(time)}
                  className={`px-3 py-2 text-xs rounded-sm border text-left transition-all ${
                    preferredDay === time
                      ? 'border-[#533afd] bg-[#533afd]/10 text-[#533afd] font-medium'
                      : 'border-[#e3e8ee] hover:border-[#a8c3de] text-[#273951]'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-[#273951] mb-1.5">
              Brief Note / Symptoms (Optional)
            </label>
            <textarea
              id="patient-notes-input"
              rows={2}
              placeholder="e.g. Toothache or scheduling routine cleaning"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3.5 py-2 rounded-sm border border-[#a8c3de] text-sm text-[#0a2540] placeholder:text-[#64748d]/60 focus:outline-none focus:border-[#533afd] transition-colors resize-none"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
            <button
              id="confirm-whatsapp-booking-btn"
              type="submit"
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-sm bg-[#533afd] hover:bg-[#4434d4] active:bg-[#2e2b8c] text-white text-sm font-medium transition-all shadow-none border border-[#533afd] cursor-pointer"
            >
              <Send className="w-4 h-4" />
              Open WhatsApp Chat
            </button>
            <a
              id="modal-direct-phone-btn"
              href="tel:+94773956787"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-sm border border-[#e3e8ee] hover:border-[#533afd] text-[#0a2540] text-sm font-medium hover:text-[#533afd] transition-colors shadow-none tnum"
            >
              <Phone className="w-4 h-4 text-[#533afd]" />
              077 395 6787
            </a>
          </div>

          <p className="text-[11px] text-[#64748d] text-center pt-1 tnum">
            Clinic Contact: 077 395 6787 | 077 154 7593
          </p>
        </form>
      </div>
    </div>
  );
}
