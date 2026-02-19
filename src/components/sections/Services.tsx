import { Globe, MapPin, Star, Search, Share2, Package } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Professional Website Development",
    description:
      "We build fast, mobile-first, and visually stunning websites that convert visitors into customers. Your website becomes your best salesperson — working 24/7.",
    benefits: ["Build instant credibility", "Convert visitors to buyers", "Mobile-optimized design"],
    badge: "Most Popular",
  },
  {
    icon: MapPin,
    title: "Google Business Profile Optimization",
    description:
      "We fully optimize your Google Business Profile so customers find you first when searching locally. Complete profile, accurate information, strategic keywords.",
    benefits: ["Appear in Google Maps", "Attract local customers", "Stand out from competitors"],
  },
  {
    icon: Star,
    title: "Google Review Growth Strategy",
    description:
      "We build a proven system to consistently generate positive Google reviews, boosting your credibility and turning satisfied customers into your loudest advocates.",
    benefits: ["Build online trust fast", "Higher star ratings", "More customer confidence"],
  },
  {
    icon: Search,
    title: "Local SEO & Google Search Visibility",
    description:
      "We optimize your online presence to rank on Google's first page for local searches. When customers search for what you sell, they find you — not your competitor.",
    benefits: ["Page 1 Google rankings", "More organic traffic", "Long-term visibility"],
    badge: "High ROI",
  },
  {
    icon: Share2,
    title: "Social Media Marketing Support",
    description:
      "Strategic social media content that engages your local audience, builds brand awareness, and drives both online and in-store traffic consistently.",
    benefits: ["Grow your following", "Engage local buyers", "Drive store traffic"],
  },
  {
    icon: Package,
    title: "Complete Digital Marketing Packages",
    description:
      "Our all-in-one growth packages combine every service for maximum impact. Ideal for businesses ready to dominate their local market comprehensively.",
    benefits: ["All-in-one solution", "Consistent growth strategy", "Priority support"],
    badge: "Best Value",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gradient-section">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-green/30 bg-brand-green/10 text-brand-green text-sm font-semibold mb-4">
            Our Solutions
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-foreground mb-5">
            Everything You Need to{" "}
            <span className="text-gradient-green">Grow Online</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From website development to Google domination — we handle your complete digital presence so you can focus on running your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map(({ icon: Icon, title, description, benefits, badge }) => (
            <div
              key={title}
              className="group relative rounded-2xl bg-card shadow-brand-card border border-border hover:border-brand-green/30 hover:shadow-brand-md transition-all duration-300 p-7 flex flex-col"
            >
              {/* Badge */}
              {badge && (
                <div className="absolute -top-3 right-5">
                  <span className="px-3 py-1 rounded-full bg-gradient-green text-accent-foreground text-xs font-bold shadow-brand-green">
                    {badge}
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-navy/8 group-hover:bg-brand-green/10 flex items-center justify-center mb-5 transition-colors duration-300">
                <Icon size={26} className="text-navy group-hover:text-brand-green transition-colors duration-300" />
              </div>

              <h3 className="font-display font-bold text-xl text-foreground mb-3">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">{description}</p>

              {/* Benefits */}
              <ul className="space-y-2 border-t border-border pt-5">
                {benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-foreground">
                    <div className="w-4 h-4 rounded-full bg-brand-green/15 flex items-center justify-center flex-shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                    </div>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
