import React, { useState } from "react";
import { Code2, Rocket, Sparkles, Layout } from "lucide-react";

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

            {/* Description about me */}
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200 leading-relaxed text-base">
              <p>
                Hi, I'm Tran Gia Bao - a passionate software engineer specializing in building modern, performant web applications using React, Next.js, and TypeScript.
              </p>
              <p>
                My development philosophy centers on clean code, seamless user interactions, and continuous learning. I love turning complex challenges into elegant digital solutions.
              </p>
            </div>

            {/* Interactive Developer Code Window - Dark Theme */}
            <div className="code-window rounded-2xl p-5 shadow-2xl relative overflow-hidden font-mono text-xs animate-fade-in animation-delay-300 group hover:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.35)] transition-all duration-500">
              <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-700/50">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <span className="text-[11px] text-slate-400 font-sans font-medium">developer.config.ts</span>
              </div>
              <pre className="text-slate-300 leading-relaxed overflow-x-auto">
                <code>
                  <span className="text-purple-400 font-semibold">const</span> <span className="text-blue-400 font-semibold">developer</span> = &#123;<br />
                  &nbsp;&nbsp;<span className="text-cyan-400">name</span>: <span className="text-emerald-400">"Tran Gia Bao"</span>,<br />
                  &nbsp;&nbsp;<span className="text-cyan-400">role</span>: <span className="text-emerald-400">"Frontend Developer"</span>,<br />
                  &nbsp;&nbsp;<span className="text-cyan-400">skills</span>: [<span className="text-emerald-400">"React"</span>, <span className="text-emerald-400">"Next.js"</span>, <span className="text-emerald-400">"TypeScript"</span>],<br />
                  &nbsp;&nbsp;<span className="text-cyan-400">status</span>: <span className="text-emerald-400 font-bold">"Ready to innovate"</span>,<br />
                  &#125;;
                </code>
              </pre>
            </div>

            {/* Mission Statement */}
            <div className="glass rounded-2xl p-6 glow-border border-primary/20 animate-fade-in animation-delay-400">
              <p className="text-base font-medium italic text-foreground leading-relaxed">
                "My mission is to create innovative, intuitive web experiences that solve real-world problems and bring value to users."
              </p>
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

