import { AlertTriangle, Search, Star, Users, Shield, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "No Professional Website",
    description:
      "Without a professional website, customers doubt your credibility. In today's digital world, no web presence means no trust — and no trust means no sales.",
  },
  {
    icon: Search,
    title: "Invisible on Google Search",
    description:
      "If your business doesn't appear on Google's first page, you're handing thousands of potential customers directly to your competitors every single day.",
  },
  {
    icon: Star,
    title: "Weak Review Strategy",
    description:
      "90% of consumers read reviews before making a purchase. Without a consistent review strategy, you're missing out on the most powerful free marketing tool available.",
  },
  {
    icon: Users,
    title: "Losing Customers to Competitors",
    description:
       "Competitors with strong digital presence capture your potential customers online — before they even find your business. The gap widens every month you wait.",
  },
  {
    icon: Shield,
    title: "Limited Online Credibility",
    description:
      "Customers trust businesses they find easily online with complete, professional profiles. Without this, you appear smaller and less reliable than you truly are.",
  },
  {
    icon: TrendingDown,
    title: "Stagnant Sales Growth",
    description:
      "Traditional word-of-mouth alone can no longer sustain business growth. Without digital channels, your revenue ceiling stays frustratingly low.",
  },
];

const Problem = () => {
  return (
    <section id="problem" className="py-24 bg-navy">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-green/30 bg-brand-green/10 text-brand-green text-sm font-semibold mb-4">
            The Real Problem
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-primary-foreground mb-5">
            Why Most Local Businesses{" "}
            <span className="text-gradient-green">Struggle Online</span>
          </h2>
          <p className="text-primary-foreground/65 text-lg max-w-2xl mx-auto">
            These are the exact challenges holding back businesses in Nigeria — and we know exactly how to fix them.
          </p>
        </div>

        {/* Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group relative rounded-2xl border border-navy-light bg-navy-light/40 p-7 hover:border-brand-green/40 hover:bg-navy-light/70 transition-all duration-300 shadow-brand-sm"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-destructive/15 flex items-center justify-center mb-5 group-hover:bg-brand-green/15 transition-colors duration-300">
                <Icon size={22} className="text-destructive group-hover:text-brand-green transition-colors duration-300" />
              </div>
              <h3 className="font-display font-bold text-lg text-primary-foreground mb-3">{title}</h3>
              <p className="text-primary-foreground/60 text-sm leading-relaxed">{description}</p>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-green rounded-full group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-primary-foreground/55 text-base mb-6">
            Sound familiar? You're not alone — and the solution is closer than you think.
          </p>
          <button
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 rounded-xl bg-gradient-green text-accent-foreground font-bold text-base shadow-brand-green hover:opacity-90 transition-all duration-200"
          >
            See How We Solve This →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Problem;
