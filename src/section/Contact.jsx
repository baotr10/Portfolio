import React from "react";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "trangiabao100304@gmail.com",
    href: "mailto:trangiabao100304@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "0966 382 655",
    href: "tel:0966382655",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Can Tho, Viet Nam",
    href: "https://maps.app.goo.gl/J8MXQ2XqsuEg8a7x8",
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="pt-32 pb-12 relative overflow-hidden mesh-gradient-alt">
      {/* Background Glow Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-highlight/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4 animate-fade-in">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-semibold text-primary border border-primary/20 tracking-wider uppercase">
              Get In Touch
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-foreground">
            Let's build something{" "}
            <span className="text-primary font-serif italic font-semibold glow-text">extraordinary together.</span>
          </h2>

          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            I am currently open to Software Engineer / Frontend Developer opportunities. Feel free to reach out via any of the contact channels below!
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {contactInfo.map((info, idx) => {
            const Icon = info.icon;
            return (
              <a
                key={`contact-info-${idx}`}
                href={info.href}
                target={info.href.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="glass rounded-3xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_color-mix(in_srgb,var(--color-primary)_15%,transparent)] group flex flex-col justify-between h-full relative"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl glass border border-primary/30 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shrink-0 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="w-8 h-8 rounded-full glass border border-border flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary/10 transition-all">
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                    {info.label}
                  </p>
                  <p className="text-base font-bold text-foreground group-hover:text-primary transition-colors break-words">
                    {info.value}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        {/* Social Connections */}
        <div className="glass rounded-3xl p-8 border border-border/50 text-center space-y-4 max-w-2xl mx-auto shadow-xl">
          <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
            Connect with me
          </h4>
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://github.com/Tranbao100304"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-full glass border border-border text-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:scale-105 text-sm font-semibold shadow-sm"
            >
              <GithubIcon className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Footer Copyright */}
        <div className="mt-20 pt-8 border-t border-border/40">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} Tran Gia Bao. All rights reserved.</p>
            <p className="flex items-center gap-1.5">
              Built using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};