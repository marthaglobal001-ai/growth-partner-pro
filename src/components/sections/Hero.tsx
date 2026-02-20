import heroBg from "@/assets/hero-bg.jpg";
import { ArrowRight, Star, TrendingUp, Users } from "lucide-react";

const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Digital growth background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy-dark/60" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-brand-green/10 blur-3xl animate-float" />
      <div className="absolute bottom-1/3 left-1/6 w-48 h-48 rounded-full bg-brand-green/8 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="container relative z-10 mx-auto pt-24 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-green/30 bg-brand-green/10 text-brand-green text-sm font-semibold mb-6 backdrop-blur-sm">
            <Star size={14} className="fill-brand-green" />
            Nigeria's Growth-Focused Digital Agency
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-tight mb-6">
            Your Business Deserves to{" "}
            <span className="text-gradient-green">Dominate</span> Online
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-primary-foreground/75 leading-relaxed mb-10 max-w-2xl">
            WebGenyx Sales helps businesses of all types transform their digital presence — driving more customers, higher Google rankings, and measurable revenue growth.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-14">
            <button
              onClick={() => scrollTo("contact")}
              className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-green text-accent-foreground font-bold text-base shadow-brand-green hover:opacity-90 hover:scale-[1.02] transition-all duration-200"
            >
              Book a Free Consultation
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollTo("services")}
              className="flex items-center gap-2 px-8 py-4 rounded-xl border border-primary-foreground/25 text-primary-foreground/85 font-semibold text-base backdrop-blur-sm hover:border-brand-green hover:text-brand-green transition-all duration-200"
            >
              Explore Our Services
            </button>
          </div>

          {/* Stats Row */}
          <div className="flex flex-wrap gap-8">
            {[
              { icon: TrendingUp, value: "3x", label: "Avg. Traffic Growth" },
              { icon: Users, value: "100+", label: "Businesses Empowered" },
              { icon: Star, value: "4.9★", label: "Client Satisfaction" },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-brand-green/20 flex items-center justify-center">
                  <Icon size={18} className="text-brand-green" />
                </div>
                <div>
                  <div className="font-display font-bold text-xl text-primary-foreground">{value}</div>
                  <div className="text-sm text-primary-foreground/55">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/40">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-0.5 h-8 bg-gradient-to-b from-primary-foreground/40 to-transparent rounded-full" />
      </div>
    </section>
  );
};

export default Hero;
