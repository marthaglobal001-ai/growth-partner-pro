import { Mail, MessageSquare, Phone } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hello WebGenyx Sales! My name is ${formData.name || "[Your Name]"} from ${formData.business || "[Business Name]"}. I'm interested in ${formData.service || "your digital marketing services"} and would like to discuss how you can help grow my business online.`
    );
    window.open(`https://wa.me/2348052434610?text=${msg}`, "_blank");
  };

  const handleEmail = () => {
    const subject = encodeURIComponent("Business Growth Inquiry - " + (formData.business || "New Client"));
    const body = encodeURIComponent(
      `Hello WebGenyx Sales Team,\n\nMy name is ${formData.name}.\nBusiness: ${formData.business}\nPhone: ${formData.phone}\nService Interested In: ${formData.service}\n\n${formData.message}\n\nLooking forward to hearing from you.`
    );
    window.open(`mailto:webgenyx0@gmail.com?subject=${subject}&body=${body}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-navy">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Info */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-green/30 bg-brand-green/10 text-brand-green text-sm font-semibold mb-6">
              Let's Talk Growth
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-primary-foreground mb-6 leading-tight">
              Start Your{" "}
              <span className="text-gradient-green">Digital Journey</span>{" "}
              Today
            </h2>
            <p className="text-primary-foreground/65 text-lg leading-relaxed mb-10">
              Whether you need a professional website, better Google visibility, or a complete digital marketing overhaul — we're here to help. Reach out today for your free consultation.
            </p>

            {/* Contact Cards */}
            <div className="space-y-4">
              <a
                href="https://wa.me/2348052434610"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 rounded-2xl border border-navy-light bg-navy-light/30 hover:border-brand-green/40 hover:bg-navy-light/60 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/15 flex items-center justify-center flex-shrink-0">
                  <MessageSquare size={22} className="text-[#25D366]" />
                </div>
                <div>
                  <div className="font-display font-bold text-primary-foreground text-sm">WhatsApp</div>
                  <div className="text-primary-foreground/55 text-sm">+234 805 243 4610</div>
                  <div className="text-brand-green text-xs mt-0.5 group-hover:underline">Chat with us now →</div>
                </div>
              </a>

              <a
                href="mailto:webgenyx0@gmail.com"
                className="group flex items-center gap-4 p-5 rounded-2xl border border-navy-light bg-navy-light/30 hover:border-brand-green/40 hover:bg-navy-light/60 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-green/15 flex items-center justify-center flex-shrink-0">
                  <Mail size={22} className="text-brand-green" />
                </div>
                <div>
                  <div className="font-display font-bold text-primary-foreground text-sm">Email Us</div>
                  <div className="text-primary-foreground/55 text-sm">webgenyx0@gmail.com</div>
                  <div className="text-brand-green text-xs mt-0.5 group-hover:underline">Send us an email →</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-5 rounded-2xl border border-navy-light bg-navy-light/30">
                <div className="w-12 h-12 rounded-xl bg-brand-gold/15 flex items-center justify-center flex-shrink-0">
                  <Phone size={22} className="text-brand-gold" />
                </div>
                <div>
                  <div className="font-display font-bold text-primary-foreground text-sm">Response Time</div>
                  <div className="text-primary-foreground/55 text-sm">We reply within 24 hours</div>
                  <div className="text-brand-gold text-xs mt-0.5">Mon – Sat, 8am – 8pm WAT</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="rounded-2xl border border-navy-light bg-navy-light/30 p-8">
            <h3 className="font-display font-bold text-xl text-primary-foreground mb-6">
              Get Your Free Consultation
            </h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-primary-foreground/60 text-xs font-medium mb-1.5 block">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-navy border border-navy-light text-primary-foreground placeholder:text-primary-foreground/30 text-sm focus:outline-none focus:border-brand-green transition-colors"
                  />
                </div>
                <div>
                  <label className="text-primary-foreground/60 text-xs font-medium mb-1.5 block">Business Name</label>
                  <input
                    type="text"
                    name="business"
                    value={formData.business}
                    onChange={handleChange}
                    placeholder="Your Store"
                    className="w-full px-4 py-3 rounded-xl bg-navy border border-navy-light text-primary-foreground placeholder:text-primary-foreground/30 text-sm focus:outline-none focus:border-brand-green transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-primary-foreground/60 text-xs font-medium mb-1.5 block">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@business.com"
                  className="w-full px-4 py-3 rounded-xl bg-navy border border-navy-light text-primary-foreground placeholder:text-primary-foreground/30 text-sm focus:outline-none focus:border-brand-green transition-colors"
                />
              </div>

              <div>
                <label className="text-primary-foreground/60 text-xs font-medium mb-1.5 block">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+234 800 000 0000"
                  className="w-full px-4 py-3 rounded-xl bg-navy border border-navy-light text-primary-foreground placeholder:text-primary-foreground/30 text-sm focus:outline-none focus:border-brand-green transition-colors"
                />
              </div>

              <div>
                <label className="text-primary-foreground/60 text-xs font-medium mb-1.5 block">Service Interested In</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-navy border border-navy-light text-primary-foreground text-sm focus:outline-none focus:border-brand-green transition-colors"
                >
                  <option value="">Select a service...</option>
                  <option>Website Development</option>
                  <option>Google Business Profile</option>
                  <option>Review Growth Strategy</option>
                  <option>Local SEO</option>
                  <option>Social Media Marketing</option>
                  <option>Complete Digital Package</option>
                </select>
              </div>

              <div>
                <label className="text-primary-foreground/60 text-xs font-medium mb-1.5 block">Tell Us About Your Business</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Briefly describe your business and what you'd like to achieve..."
                  className="w-full px-4 py-3 rounded-xl bg-navy border border-navy-light text-primary-foreground placeholder:text-primary-foreground/30 text-sm focus:outline-none focus:border-brand-green transition-colors resize-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <button
                  onClick={handleWhatsApp}
                  className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#25D366] text-white font-bold text-sm hover:bg-[#20c05c] transition-all duration-200"
                >
                  <MessageSquare size={16} />
                  WhatsApp Us
                </button>
                <button
                  onClick={handleEmail}
                  className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-green text-accent-foreground font-bold text-sm shadow-brand-green hover:opacity-90 transition-all duration-200"
                >
                  <Mail size={16} />
                  Send Email
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
