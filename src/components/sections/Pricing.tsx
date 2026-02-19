import { Check, ArrowRight } from "lucide-react";

const packages = [
  {
    name: "Starter",
    tagline: "Perfect for getting started",
    description: "Ideal for small businesses taking their first steps online",
    features: [
      "Professional 5-page website",
      "Google Business Profile setup",
      "Basic local SEO optimization",
      "Monthly performance report",
      "Email support",
    ],
    cta: "Get a Quote",
    highlight: false,
  },
  {
    name: "Growth",
    tagline: "Most popular choice",
    description: "Designed for businesses ready to compete and dominate locally",
    features: [
      "Professional multi-page website",
      "Full Google Business optimization",
      "Google Review Growth Strategy",
      "Advanced Local SEO campaigns",
      "Social media content support",
      "Bi-weekly performance reports",
      "Priority WhatsApp support",
    ],
    cta: "Get a Quote",
    highlight: true,
  },
  {
    name: "Dominator",
    tagline: "Complete market ownership",
    description: "Full-scale digital marketing for businesses ready to lead their market",
    features: [
      "Premium website with e-commerce",
      "Complete Google ecosystem setup",
      "Aggressive review growth system",
      "Multi-channel SEO strategy",
      "Full social media management",
      "Ad campaigns management",
      "Weekly reports + analytics",
      "Dedicated account manager",
    ],
    cta: "Get a Quote",
    highlight: false,
  },
];

const Pricing = () => {
  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="pricing" className="py-24 bg-navy">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-green/30 bg-brand-green/10 text-brand-green text-sm font-semibold mb-4">
            Pricing Plans
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-primary-foreground mb-5">
            Investment in Your{" "}
            <span className="text-gradient-green">Digital Growth</span>
          </h2>
          <p className="text-primary-foreground/65 text-lg max-w-2xl mx-auto">
            Pricing is tailored to your business size, goals, and the services you need. Request a personalized proposal — we'll create a package that delivers maximum ROI for your budget.
          </p>
        </div>

        <p className="text-center text-brand-green font-semibold mb-12">
          ✦ All packages include a free initial digital audit ✦
        </p>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-12">
          {packages.map(({ name, tagline, description, features, cta, highlight }) => (
            <div
              key={name}
              className={`relative rounded-2xl p-8 flex flex-col ${
                highlight
                  ? "bg-gradient-to-br from-brand-green/90 to-brand-green border border-brand-green shadow-brand-green scale-[1.03]"
                  : "bg-navy-light/40 border border-navy-light hover:border-brand-green/30 transition-all duration-300"
              }`}
            >
              {highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 rounded-full bg-brand-gold text-navy font-bold text-xs shadow-md">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`font-display font-extrabold text-2xl mb-1 ${
                    highlight ? "text-accent-foreground" : "text-primary-foreground"
                  }`}
                >
                  {name}
                </h3>
                <p
                  className={`text-sm font-semibold mb-3 ${
                    highlight ? "text-accent-foreground/80" : "text-brand-green"
                  }`}
                >
                  {tagline}
                </p>
                <p
                  className={`text-sm leading-relaxed ${
                    highlight ? "text-accent-foreground/75" : "text-primary-foreground/55"
                  }`}
                >
                  {description}
                </p>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check
                      size={16}
                      className={`flex-shrink-0 mt-0.5 ${
                        highlight ? "text-accent-foreground" : "text-brand-green"
                      }`}
                    />
                    <span
                      className={
                        highlight ? "text-accent-foreground/85" : "text-primary-foreground/70"
                      }
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className={`group flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-200 ${
                  highlight
                    ? "bg-accent-foreground text-brand-green hover:bg-accent-foreground/90"
                    : "bg-brand-green/15 text-brand-green border border-brand-green/30 hover:bg-brand-green hover:text-accent-foreground"
                }`}
              >
                {cta}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Custom Note */}
        <div className="text-center p-6 rounded-2xl border border-navy-light bg-navy-light/20 max-w-2xl mx-auto">
          <p className="text-primary-foreground/65 text-sm">
            <span className="text-brand-green font-semibold">🎯 Custom Package Available:</span>{" "}
            Have a specific need or budget? We build customized strategies for every business. Contact us and we'll design the perfect solution for your goals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
