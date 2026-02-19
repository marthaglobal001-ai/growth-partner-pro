import { Target, MessageCircle, Users2, TrendingUp } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Value-Based Communication",
    description:
      "We lead every conversation with value — not a sales pitch. Our goal is to show you exactly what's possible before asking for anything in return.",
  },
  {
    icon: MessageCircle,
    title: "Professional Follow-Ups",
    description:
      "We respect your time with structured, purposeful follow-ups that keep your digital growth on track without ever feeling pushy or intrusive.",
  },
  {
    icon: Users2,
    title: "Long-Term Client Relationships",
    description:
      "We don't chase one-time transactions. We build partnerships built on trust, transparency, and consistent results — clients stay because results speak.",
  },
  {
    icon: TrendingUp,
    title: "Growth-Focused Strategies",
    description:
      "Every decision we make is filtered through one question: 'Does this drive real, measurable growth for our client?' If not, we don't do it.",
  },
];

const Positioning = () => {
  return (
    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-green/30 bg-brand-green/10 text-brand-green text-sm font-semibold mb-6">
              Why Choose Us
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-foreground mb-6 leading-tight">
              Strategic, Trustworthy &{" "}
              <span className="text-gradient-green">Built for Growth</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              WebGenyx Sales isn't just another marketing agency. We're strategic growth partners — deeply invested in your success because your growth directly reflects our expertise.
            </p>
            <div className="p-6 rounded-2xl bg-navy text-primary-foreground">
              <p className="font-display font-bold text-lg mb-2">Our Commitment to You</p>
              <p className="text-primary-foreground/65 text-sm leading-relaxed">
                "We don't win unless you win. Every strategy we build, every campaign we run, and every recommendation we make is centered around one goal — growing your business profitably."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-green flex items-center justify-center">
                  <span className="text-accent-foreground font-bold text-xs">WG</span>
                </div>
                <div>
                  <div className="text-primary-foreground font-semibold text-sm">WebGenyx Sales Team</div>
                  <div className="text-primary-foreground/40 text-xs">Digital Growth Partners</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="group rounded-2xl bg-card border border-border hover:border-brand-green/30 hover:shadow-brand-card p-6 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-navy/6 group-hover:bg-brand-green/10 flex items-center justify-center mb-4 transition-colors duration-300">
                  <Icon size={20} className="text-navy group-hover:text-brand-green transition-colors duration-300" />
                </div>
                <h3 className="font-display font-bold text-sm text-foreground mb-2">{title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Positioning;
