import { Mail, MessageSquare, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="bg-navy-dark pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-navy-light">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-lg bg-gradient-green flex items-center justify-center shadow-brand-green">
                <span className="text-accent-foreground font-display font-bold text-sm">WG</span>
              </div>
              <span className="font-display font-bold text-lg text-primary-foreground">
                WebGenyx <span className="text-brand-green">Sales</span>
              </span>
            </div>
            <p className="text-primary-foreground/55 text-sm leading-relaxed max-w-xs mb-6">
              Nigeria's growth-focused digital marketing agency helping businesses of all types dominate online.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/2348052434610"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center border border-navy-light hover:border-[#25D366] hover:bg-[#25D366]/10 transition-all duration-200"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 32 32" fill="#25D366" className="w-5 h-5">
                  <path d="M16.004 2.667C8.636 2.667 2.667 8.636 2.667 16c0 2.365.637 4.587 1.75 6.508L2.667 29.333l6.98-1.716A13.285 13.285 0 0 0 16.004 29.333C23.372 29.333 29.333 23.364 29.333 16c0-7.364-5.961-13.333-13.329-13.333ZM16.004 27.2a11.162 11.162 0 0 1-5.664-1.546l-.406-.24-4.145 1.019 1.057-3.985-.267-.42A11.133 11.133 0 0 1 4.8 16c0-6.179 5.025-11.2 11.204-11.2C22.183 4.8 27.2 9.821 27.2 16c0 6.179-5.017 11.2-11.196 11.2Zm6.14-8.4c-.336-.168-1.988-.976-2.296-1.088-.308-.113-.533-.168-.757.168-.224.336-.864 1.088-1.06 1.312-.196.224-.392.252-.728.084-.336-.168-1.42-.52-2.704-1.656-1-.888-1.676-1.984-1.872-2.32-.196-.336-.02-.516.148-.684.152-.15.336-.392.504-.588.168-.196.224-.336.336-.56.113-.224.056-.42-.028-.588-.084-.168-.757-1.82-1.037-2.492-.272-.652-.549-.564-.757-.576l-.644-.012a1.236 1.236 0 0 0-.896.42c-.308.336-1.176 1.148-1.176 2.8 0 1.652 1.204 3.248 1.372 3.472.168.224 2.364 3.612 5.728 5.068.8.344 1.424.548 1.912.704.804.252 1.536.216 2.114.132.644-.096 1.988-.812 2.268-1.596.28-.784.28-1.456.196-1.596-.084-.14-.308-.224-.644-.392Z" />
                </svg>
              </a>
              <a
                href="mailto:webgenyx0@gmail.com"
                className="w-10 h-10 rounded-xl flex items-center justify-center border border-navy-light hover:border-brand-green hover:bg-brand-green/10 transition-all duration-200"
                aria-label="Email"
              >
                <Mail size={18} className="text-primary-foreground/60 hover:text-brand-green" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-primary-foreground text-sm mb-4">Our Services</h4>
            <ul className="space-y-3">
              {[
                "Website Development",
                "Google Business Profile",
                "Review Growth Strategy",
                "Local SEO",
                "Social Media Marketing",
                "Digital Packages",
              ].map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo("services")}
                    className="text-primary-foreground/50 text-sm hover:text-brand-green transition-colors"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-primary-foreground text-sm mb-4">Get In Touch</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/55">
              <li>
                <a href="mailto:webgenyx0@gmail.com" className="hover:text-brand-green transition-colors break-all">
                  webgenyx0@gmail.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/2348052434610" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green transition-colors">
                  +234 805 243 4610
                </a>
              </li>
              <li className="text-primary-foreground/40 text-xs">Mon – Sat, 8am – 8pm WAT</li>
            </ul>

            <button
              onClick={() => scrollTo("contact")}
              className="mt-6 px-5 py-2.5 rounded-lg bg-gradient-green text-accent-foreground font-semibold text-sm shadow-brand-green hover:opacity-90 transition-all"
            >
              Free Consultation
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-4">
          <p className="text-primary-foreground/35 text-xs">
            © {new Date().getFullYear()} WebGenyx Sales. All rights reserved. Helping local businesses grow digitally.
          </p>
          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-xl border border-navy-light flex items-center justify-center text-primary-foreground/40 hover:border-brand-green hover:text-brand-green transition-all duration-200"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
