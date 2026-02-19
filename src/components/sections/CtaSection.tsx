import { ArrowRight, Clock } from "lucide-react";

const CtaSection = () => {
  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto">
        <div className="relative rounded-3xl bg-gradient-hero overflow-hidden px-8 md:px-16 py-16 md:py-20 text-center">
          {/* Decorative circles */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-brand-green/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-brand-green/8 blur-3xl" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-green/30 bg-brand-green/10 text-brand-green text-sm font-semibold mb-6">
              <Clock size={14} />
              Limited Consultation Slots Available
            </div>

            <h2 className="font-display text-4xl md:text-6xl font-extrabold text-primary-foreground mb-6 leading-tight">
              Ready to Take Your Business{" "}
              <span className="text-gradient-green">to the Next Level?</span>
            </h2>

            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Schedule a short, no-obligation consultation with our team. We'll review your current digital presence, identify quick wins, and show you exactly how WebGenyx Sales can increase your visibility and revenue.
            </p>

            <div className="flex flex-wrap justify-center gap-5">
              <button
                onClick={scrollToContact}
                className="group flex items-center gap-2 px-10 py-4 rounded-xl bg-gradient-green text-accent-foreground font-bold text-base shadow-brand-green hover:opacity-90 hover:scale-[1.02] transition-all duration-200"
              >
                Book Your Free Consultation
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={scrollToContact}
                className="flex items-center gap-2 px-10 py-4 rounded-xl border border-primary-foreground/20 text-primary-foreground/80 font-semibold text-base hover:border-brand-green hover:text-brand-green transition-all duration-200"
              >
                Get Free Digital Audit
              </button>
            </div>

            <p className="mt-6 text-primary-foreground/40 text-sm">
              No commitment required. Just a conversation about your growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
