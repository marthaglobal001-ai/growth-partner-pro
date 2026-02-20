import { TrendingUp, MapPin, Shield, Heart, DollarSign, Award } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    value: "3x",
    label: "More Customers",
    description: "Businesses optimized by us see an average 3x increase in customer traffic within 90 days.",
  },
  {
    icon: MapPin,
    value: "#1",
    label: "Higher Google Rankings",
    description: "Get your business to Google's first page for the keywords that bring real buying customers.",
  },
  {
    icon: Shield,
    value: "5★",
    label: "Stronger Online Credibility",
    description: "A polished online presence makes customers trust you before they ever contact you.",
  },
  {
    icon: Heart,
    value: "90%",
    label: "More Customer Trust",
    description: "Strong reviews and a professional website make customers choose you over the competition, consistently.",
  },
  {
    icon: DollarSign,
    value: "40%",
    label: "Increase in Daily Sales",
    description: "Our clients report an average 40% increase in daily revenue after 6 months of consistent digital marketing.",
  },
  {
    icon: Award,
    value: "Top",
    label: "Competitive Advantage",
    description: "While competitors are still figuring out digital marketing, you'll already own your local market.",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-24 bg-navy overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-green/30 bg-brand-green/10 text-brand-green text-sm font-semibold mb-6">
              Measurable Results
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-primary-foreground mb-6 leading-tight">
              Real Growth.{" "}
              <span className="text-gradient-green">Real Numbers.</span>{" "}
              Real Returns.
            </h2>
            <p className="text-primary-foreground/65 text-lg leading-relaxed mb-8">
              Every naira you invest in digital marketing with WebGenyx Sales is an investment with measurable returns. We don't just promise growth — we deliver documented, trackable results.
            </p>
            <div className="flex items-center gap-4 p-5 rounded-2xl border border-brand-green/20 bg-brand-green/8">
              <div className="w-12 h-12 rounded-xl bg-brand-green/20 flex items-center justify-center flex-shrink-0">
                <TrendingUp size={22} className="text-brand-green" />
              </div>
              <div>
                <div className="font-display font-bold text-primary-foreground text-base">ROI-Focused Strategy</div>
                <div className="text-primary-foreground/55 text-sm">Every campaign is built with measurable return on investment as the core goal.</div>
              </div>
            </div>
          </div>

          {/* Right Column - Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {benefits.map(({ icon: Icon, value, label, description }) => (
              <div
                key={label}
                className="group rounded-2xl border border-navy-light bg-navy-light/30 p-6 hover:border-brand-green/40 hover:bg-navy-light/60 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Icon size={18} className="text-brand-green" />
                  <span className="font-display font-extrabold text-2xl text-brand-green">{value}</span>
                </div>
                <h3 className="font-display font-bold text-primary-foreground text-sm mb-2">{label}</h3>
                <p className="text-primary-foreground/50 text-xs leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
