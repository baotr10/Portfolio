import React, { useMemo, useState } from "react";
import { Button } from "@/components/Button";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";

// My skills
const skills = [
  "React",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "TailwindCSS",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Figma",
  "Vercel",
  "Git",
  "Github Actions",
]

export const Hero = () => {
  // 3D Tilt effect state for profile card hover
  const [tilt, setTilt] = useState({ x: 0, y: 0, opacity: 0, cursorX: 0, cursorY: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation angles (max 12 deg)
    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    setTilt({ x: rotateX, y: rotateY, opacity: 1, cursorX: x, cursorY: y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0, opacity: 0, cursorX: 0, cursorY: 0 });
  };

  // Generate random dot positions and floating animation parameters once
  const dots = useMemo(() => {
    return Array.from({ length: 35 }, (_, i) => ({
      id: i,
      left: `${(Math.random() * 100).toFixed(2)}%`,
      top: `${(Math.random() * 100).toFixed(2)}%`,
      size: `${(Math.random() * 4 + 2).toFixed(1)}px`,
      opacity: (Math.random() * 0.6 + 0.25).toFixed(2),
      duration: `${(Math.random() * 6 + 6).toFixed(1)}s`,
      delay: `${(Math.random() * 4).toFixed(1)}s`,
      tx: `${(Math.random() * 80 - 40).toFixed(0)}px`,
      ty: `${(Math.random() * 80 - 40).toFixed(0)}px`,
    }));
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden mesh-gradient">
      {/* Background Image & Gradient Overlays */}
      <div className="absolute inset-0">
        <img src="/hero-bg.jpg" alt="Hero Image" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-linear-to-b from-background/30 via-background/60 to-background" />
      </div>

      {/* Decorative Radial Glow Orbs */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Green Glowing & Floating Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {dots.map((dot) => (
          <div
            key={`hero-dot-${dot.id}`}
            className="absolute rounded-full bg-primary animate-float-dot"
            style={{
              left: dot.left,
              top: dot.top,
              width: dot.size,
              height: dot.size,
              opacity: dot.opacity,
              boxShadow: "0 0 12px rgba(37, 99, 235, 0.4)",
              "--duration": dot.duration,
              "--delay": dot.delay,
              "--tx": dot.tx,
              "--ty": dot.ty,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Column */}
          <div className="space-y-8 flex flex-col justify-between">
            <div className="animate-fade-in animation-delay-100">
              <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass text-sm font-medium text-primary border border-primary/20">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_8px_var(--color-primary)]" />
                <span>Software Engineer - React Specialist</span>
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-4xl lg:text-6xl font-bold tracking-tight leading-tight animate-fade-in animation-delay-300">
                I'm <span className="font-serif italic font-normal">Tran</span>{" "}
                <span className="font-serif italic font-normal">Gia</span>{" "}
                <span className="text-primary font-serif italic font-semibold glow-text">Bao</span>
              </h1>

              <p className="text-sm sm:text-xl lg:text-xl text-muted-foreground animate-fade-in animation-delay-500">
                Hi, I'm Tran Gia Bao - a passionate software engineer with a strong focus on building
                innovative web applications. With expertise in React and modern
                frontend technologies, I enjoy creating seamless and user-friendly
                experiences. Let's build something amazing together.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-4 animate-fade-in animation-delay-700">
              <a href="#contact">
                <Button variant="primary">
                  Contact me <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <a href="/cv.pdf" download="CV_Tran_Gia_Bao.pdf">
                <Button variant="outline">
                  Download CV <Download className="w-5 h-5" />
                </Button>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-800 pt-2">
              <span className="text-sm font-medium text-muted-foreground">Follow:</span>
              <div className="flex items-center gap-3">
                {[
                  { icon: GithubIcon, href: "https://github.com/Tranbao100304", label: "GitHub" },
                ].map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={`hero-social-${social.label}-${idx}`}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="p-2.5 rounded-full glass border border-border text-muted-foreground hover:text-primary hover:border-primary/50 hover:scale-110 transition-all duration-300 shadow-sm"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          {/* Right Column */}
          <div className="relative animate-fade-in animation-delay-300 flex flex-col items-center justify-center">
            {/* Profile Image with Interactive 3D Tilt */}
            <div className="relative w-full max-w-sm lg:max-w-md mx-auto flex flex-col">
              <div
                className="relative glass rounded-3xl p-2 glow-border border-primary/20 flex-1 flex transition-transform duration-200 ease-out group cursor-pointer"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(${tilt.opacity ? 1.03 : 1}, ${tilt.opacity ? 1.03 : 1}, 1)`,
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Dynamic Light Glare Overlay */}
                <div
                  className="absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-300 z-20"
                  style={{
                    opacity: tilt.opacity,
                    background: `radial-gradient(500px circle at ${tilt.cursorX}px ${tilt.cursorY}px, rgba(37, 99, 235, 0.2), transparent 60%)`,
                  }}
                />

                <img
                  src="/profile-photo.png"
                  alt="Tran Gia Bao"
                  className="w-full h-full min-h-90 lg:min-h-105 object-cover object-top rounded-2xl shadow-lg transition-all duration-300 group-hover:shadow-[0_0_35px_color-mix(in_srgb,var(--color-primary)_45%,transparent)]"
                  style={{
                    transform: tilt.opacity ? "translateZ(25px)" : "translateZ(0px)",
                    transition: "transform 0.2s ease-out, box-shadow 0.3s ease",
                  }}
                />

                {/* Floating Badge */}
                <div
                  className="absolute -bottom-5 -right-5 glass rounded-2xl px-4 py-3 shadow-xl border border-primary/30 flex items-center gap-3 animate-float z-30 pointer-events-none"
                  style={{
                    transform: tilt.opacity ? "translateZ(35px)" : "translateZ(0px)",
                    transition: "transform 0.2s ease-out",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-[0_0_10px_#10b981]" />
                    </span>
                    <span className="text-xs font-bold tracking-wide text-foreground uppercase">Available for work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-8 text-center">
            Technologies & Tools I Work With
          </p>
          <div className="relative overflow-hidden py-4">
            {/* Left & Right Fading Gradient Masks */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-background to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-background to-transparent z-10" />

            <div className="flex animate-marquee hover:[animation-play-state:paused] gap-4">
              {[...skills, ...skills, ...skills, ...skills].map((skill, idx) => {
                return (
                  <div
                    key={`hero-skill-${skill}-${idx}`}
                    className="shrink-0 glass border border-border/60 hover:border-primary/50 rounded-2xl px-5 py-2.5 flex items-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_color-mix(in_srgb,var(--color-primary)_30%,transparent)] group cursor-pointer"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary group-hover:shadow-[0_0_8px_var(--color-primary)] transition-all duration-300" />
                    <span className="text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                      {skill}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

