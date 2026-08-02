import React, { useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle2, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { Button } from "@/components/Button";

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
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbw5jMZqGoGZgenxtXAGxCWX3HrbintcpHFwDAWZGgC_QXINPM0dRxzhh5_z_-o2_EmgEQ/exec";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (GOOGLE_SHEET_URL) {
        const queryParams = new URLSearchParams({
          name: formState.name,
          email: formState.email,
          message: formState.message,
          timestamp: new Date().toLocaleString("vi-VN"),
        });

        const targetUrl = `${GOOGLE_SHEET_URL}?${queryParams.toString()}`;

        await fetch(targetUrl, {
          method: "GET",
          mode: "no-cors",
        });
      }
      setIsSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Submission error:", error);
      setIsSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }
  };

  return (
    <section id="contact" className="pt-32 pb-12 relative overflow-hidden mesh-gradient-alt">
      {/* Background Glow Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-highlight/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4 animate-fade-in">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-semibold text-primary border border-primary/20 tracking-wider uppercase">
              Get In Touch
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-foreground">
            Let's build something{" "}
            <span className="text-primary font-serif italic font-semibold glow-text">extraordinary together.</span>
          </h2>

          <p className="text-base text-muted-foreground leading-relaxed">
            I am currently open to Software Engineer / Frontend Developer opportunities. Whether you have a question or just want to say hi, my inbox is always open!
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column - Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              {contactInfo.map((info, idx) => {
                const Icon = info.icon;
                return (
                  <a
                    key={`contact-info-${idx}`}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="glass rounded-2xl p-5 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_color-mix(in_srgb,var(--color-primary)_15%,transparent)] group flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl glass border border-primary/30 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-0.5">
                        {info.label}
                      </p>
                      <p className="text-base font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                        {info.value}
                      </p>
                    </div>

                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                  </a>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="glass rounded-2xl p-6 border border-border/50 space-y-4">
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                Connect with me
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/Tranbao100304"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-full glass border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300 hover:scale-105 text-sm font-medium"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass rounded-3xl p-6 sm:p-8 border border-border/50 shadow-2xl relative">
              <h3 className="text-2xl font-bold text-foreground mb-2">Send me a message</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>

              {isSubmitted ? (
                <div className="glass rounded-2xl p-8 border border-emerald-500/30 text-center space-y-3 animate-fade-in">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
                  <h4 className="text-lg font-bold text-foreground">Message Sent Successfully!</h4>
                  <p className="text-sm text-muted-foreground">
                    Thank you for reaching out. I'll review your message and reply shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-foreground uppercase tracking-wider">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full rounded-xl px-4 py-3 bg-surface/50 border border-border/60 text-foreground placeholder:text-muted-foreground/60 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-foreground uppercase tracking-wider">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full rounded-xl px-4 py-3 bg-surface/50 border border-border/60 text-foreground placeholder:text-muted-foreground/60 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-foreground uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Hi Bao, I would like to discuss a job opportunity..."
                      className="w-full rounded-xl px-4 py-3 bg-surface/50 border border-border/60 text-foreground placeholder:text-muted-foreground/60 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all duration-300 shadow-[0_0_25px_color-mix(in_srgb,var(--color-primary)_40%,transparent)] hover:scale-105 cursor-pointer disabled:opacity-50"
                  >
                    <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer Copyright */}
        <div className="mt-24 pt-8 border-t border-border/40">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} Tran Gia Bao. All rights reserved.</p>
            <p className="flex items-center gap-1.5">
              Built with using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};