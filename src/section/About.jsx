import React, { useState } from "react";
import { Code2, Rocket, Sparkles, Layout, GraduationCap } from "lucide-react";

// Highlight cards data
const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, well-structured, and easy-to-read code adhering to industry standards.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimizing web apps for lightning-fast load times, SEO, and smooth animations.",
  },
  {
    icon: Sparkles,
    title: "Modern UI/UX",
    description: "Crafting sleek, intuitive, and highly responsive user interfaces with attention to detail.",
  },
  {
    icon: Layout,
    title: "Scalable Architecture",
    description: "Building robust component structures and clean state management that grow with your project.",
  },
];

// Interactive 3D Tilt Card Component
const TiltCard = ({ highlight, index }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0, opacity: 0, cursorX: 0, cursorY: 0 });
  const Icon = highlight.icon;

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

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(${tilt.opacity ? 1.04 : 1}, ${tilt.opacity ? 1.04 : 1}, 1)`,
        transformStyle: "preserve-3d",
      }}
      className="relative glass rounded-3xl p-6 border border-border/50 hover:border-primary/50 transition-transform duration-200 ease-out group cursor-pointer overflow-hidden shadow-lg"
    >
      {/* Dynamic Radial Glare Spotlight */}
      <div
        className="absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-300 z-10"
        style={{
          opacity: tilt.opacity,
          background: `radial-gradient(400px circle at ${tilt.cursorX}px ${tilt.cursorY}px, rgba(37, 99, 235, 0.18), transparent 80%)`,
        }}
      />

      {/* 3D Depth Layer 1: Icon */}
      <div
        style={{
          transform: tilt.opacity ? "translateZ(30px)" : "translateZ(0px)",
          transition: "transform 0.2s ease-out",
        }}
        className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 mb-5 shadow-sm"
      >
        <Icon className="w-6 h-6" />
      </div>

      {/* 3D Depth Layer 2: Title */}
      <h3
        style={{
          transform: tilt.opacity ? "translateZ(20px)" : "translateZ(0px)",
          transition: "transform 0.2s ease-out",
        }}
        className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors"
      >
        {highlight.title}
      </h3>

      {/* 3D Depth Layer 3: Description */}
      <p
        style={{
          transform: tilt.opacity ? "translateZ(10px)" : "translateZ(0px)",
          transition: "transform 0.2s ease-out",
        }}
        className="text-sm text-muted-foreground leading-relaxed"
      >
        {highlight.description}
      </p>
    </div>
  );
};

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden mesh-gradient-alt">
      {/* Decorative Glow Orbs */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-semibold text-primary border border-primary/20 tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-foreground animate-fade-in animation-delay-100">
              Building <span className="font-serif italic font-normal">fast, responsive</span>, and{" "}
              <span className="text-primary font-serif italic font-semibold glow-text">user-centric</span> web experiences that scale.
            </h2>

            {/* Description & Education Badge */}
            <div className="space-y-6 animate-fade-in animation-delay-200">
              <p className="text-base text-muted-foreground leading-relaxed">
                Hi, I'm <strong className="text-foreground font-semibold">Tran Gia Bao</strong> - a passionate software engineer specializing in building modern, performant web applications with React, Next.js, and TypeScript. Focus on clean code, intuitive UX/UI design, and high performance.
              </p>

              {/* Compact Sleek Education Card */}
              <div className="glass rounded-2xl p-5 border border-primary/20 hover:border-primary/40 transition-all flex items-center justify-between gap-4 shadow-md">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground">FPT University Can Tho</h4>
                    <p className="text-xs text-muted-foreground">Bachelor of Software Engineering (2022 – 2026)</p>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 shrink-0">
                  GPA 3.23 / 4.0
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - 3D Tilt Highlight Cards Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <TiltCard key={`about-highlight-${index}`} highlight={highlight} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

