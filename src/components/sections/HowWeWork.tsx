import { BarChart2, Lightbulb, Rocket, LineChart } from "lucide-react";

const steps = [
  {
    icon: BarChart2,
    number: "01",
    title: "Business Analysis",
    description:
      "We start with a thorough audit of your current online presence — website, Google profile, reviews, competitors, and market opportunities. No guesswork, only facts.",
    color: "from-blue-500/20 to-blue-600/10",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Custom Strategy Development",
    description:
      "Based on your analysis, we craft a tailored digital growth strategy aligned with your business goals, target audience, and budget. Every strategy is unique.",
    color: "from-brand-green/20 to-brand-green/10",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Implementation & Optimization",
    description:
      "We execute the strategy with precision — building your website, optimizing your Google profile, running campaigns, and continuously fine-tuning for maximum results.",
    color: "from-purple-500/20 to-purple-600/10",
  },
  {
    icon: LineChart,
    number: "04",
    title: "Growth Monitoring & Support",
    description:
      "We track performance metrics in real-time, provide regular reports, and offer ongoing support to ensure your growth is consistent, sustainable, and always improving.",
    color: "from-brand-gold/20 to-brand-gold/10",
  },
];

const HowWeWork = () => {
  return (
    <section id="process" className="py-24 bg-gradient-section">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-green/30 bg-brand-green/10 text-brand-green text-sm font-semibold mb-4">
            Our Process
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-foreground mb-5">
            Simple Steps to{" "}
            <span className="text-gradient-green">Serious Results</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our structured 4-step approach ensures every client receives a focused, customized, and results-driven digital marketing experience.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector Line - Desktop */}
          <div className="hidden lg:block absolute top-20 left-1/2 -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-transparent via-brand-green/30 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map(({ icon: Icon, number, title, description, color }) => (
              <div
                key={number}
                className="group relative flex flex-col items-center text-center"
              >
                {/* Step Circle */}
                <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${color} border border-border flex items-center justify-center mb-6 group-hover:scale-105 group-hover:shadow-brand-md transition-all duration-300`}>
                  <Icon size={28} className="text-foreground group-hover:text-brand-green transition-colors duration-300" />
                  {/* Number badge */}
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-lg bg-gradient-green flex items-center justify-center shadow-brand-green">
                    <span className="text-accent-foreground font-display font-bold text-xs">{number.slice(-1)}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-lg text-foreground mb-3">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
