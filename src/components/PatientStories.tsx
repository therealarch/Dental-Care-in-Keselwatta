import { Star, CheckCircle2 } from 'lucide-react';

export default function PatientStories() {
  const testimonials = [
    {
      id: 'testimonial-1',
      quote:
        '“They saw me right away when I had terrible tooth pain. The root canal was carefully handled and the staff made me feel at ease.”',
      author: 'A. Perera',
      treatment: 'Root Canal Treatment',
      focus: 'Pain Relief / Emergency',
    },
    {
      id: 'testimonial-2',
      quote:
        '“I visited for a general checkup and scaling. The dentist was incredibly professional and explained every step clearly.”',
      author: 'S. Fernando',
      treatment: 'Routine Cleaning',
      focus: 'Gentle Care',
    },
    {
      id: 'testimonial-3',
      quote:
        '“A reliable clinic with convenient evening hours for working professionals. Clean facilities and they never suggest treatments you don’t need.”',
      author: 'K. De Silva',
      treatment: 'Family Care',
      focus: 'Long-Term Trust / Family',
    },
  ];

  return (
    <section
      id="testimonials-section"
      aria-labelledby="testimonials-heading"
      className="w-full max-w-7xl mx-auto border-x border-b border-[#e3e8ee] bg-white shadow-none rounded-none"
    >
      {/* Section Header with generous breathing space */}
      <div className="py-16 sm:py-20 lg:py-24 px-8 sm:px-12 text-center border-b border-[#e3e8ee] bg-white">
        <h2
          id="testimonials-heading"
          className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0a2540]"
        >
          Trusted by Our Patients
        </h2>
        <p className="mt-4 text-base sm:text-lg font-normal text-[#425466] max-w-2xl mx-auto leading-relaxed">
          See why local families choose us for their dental health.
        </p>
      </div>

      {/* 3-Column Intersecting Grid with 1px borders and ample vertical breathing room */}
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#e3e8ee]">
        {testimonials.map((item) => (
          <div
            id={item.id}
            key={item.id}
            className="bg-white rounded-none py-12 sm:py-16 px-6 sm:px-8 lg:px-10 flex flex-col justify-between hover:bg-[#f8fafc] transition-colors shadow-none"
          >
            <div>
              {/* 5-Star Graphic above quote */}
              <div className="flex items-center gap-1 mb-5" aria-label="5 out of 5 stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-[15px] sm:text-base font-normal text-[#0a2540] leading-relaxed italic mb-8">
                {item.quote}
              </blockquote>
            </div>

            {/* Attribution */}
            <div className="pt-5 border-t border-[#e3e8ee] flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-[#0a2540]">
                  {item.author} – <span className="text-[#533afd] font-medium">{item.treatment}</span>
                </p>
                <span className="text-[11px] text-[#64748d] flex items-center gap-1 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Verified Patient
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Trust Anchor (Placed just below the testimonials) */}
      <div
        id="trust-anchor"
        className="w-full border-t border-[#e3e8ee] py-6 px-6 bg-[#f8fafc] flex items-center justify-center gap-3 text-center rounded-none shadow-none"
      >
        <div className="flex items-center gap-2">
          <div className="flex -space-x-0.5">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-sm sm:text-[15px] font-medium text-[#0a2540]">
            Committed to high-quality dental care in the Panadura area.
          </span>
        </div>
      </div>
    </section>
  );
}
