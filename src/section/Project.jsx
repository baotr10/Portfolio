import React, { useState } from "react";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";

const projects = [
  {
    title: "Medicare (POCAMS)",
    description: "A digital healthcare ecosystem for private clinics integrating appointment scheduling, EMR management, and clinical workflows. Centralizes patient data and queue tracking to eliminate operational bottlenecks and reduce wait times. Features AI-assisted diagnostics to enhance patient care quality and overall productivity.",
    img: "/projects/project_1.png",
    tags: ["Next.js", "TypeScript", "NestJS", "PostgreSQL", "Tailwind CSS", "Prisma"],
    link: "https://www.bonix.io.vn/en",
    github: "#",
  }
];

// Interactive 3D Project Card
const ProjectCard = ({ project, idx }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0, opacity: 0, cursorX: 0, cursorY: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Smooth tilt angle (max 8 deg)
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

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
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(${tilt.opacity ? 1.02 : 1}, ${tilt.opacity ? 1.02 : 1}, 1)`,
        transformStyle: "preserve-3d",
      }}
      className="glass rounded-2xl p-4 sm:p-5 border border-border/50 hover:border-primary/50 transition-transform duration-200 ease-out group flex flex-col justify-between overflow-hidden shadow-lg relative cursor-pointer"
    >
      {/* Glare spotlight layer */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300 z-20"
        style={{
          opacity: tilt.opacity,
          background: `radial-gradient(500px circle at ${tilt.cursorX}px ${tilt.cursorY}px, rgba(37, 99, 235, 0.18), transparent 60%)`,
        }}
      />

      <div>
        {/* Image Preview Container with Hover Overlay */}
        <div
          style={{
            transform: tilt.opacity ? "translateZ(25px)" : "translateZ(0px)",
            transition: "transform 0.2s ease-out",
          }}
          className="relative aspect-16/10 overflow-hidden rounded-xl mb-4 bg-surface/50 border border-border/40 group-hover:border-primary/40 transition-colors shadow-md"
        >
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover object-top group-hover:scale-108 transition-transform duration-700 ease-out"
          />

          {/* Dark Glass Overlay & Center Action Badge on Hover */}
          <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full glass border border-primary/40 text-primary font-semibold text-xs shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              <span>View Case Study</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>

          {/* Status Badge */}
          <div className="absolute top-2.5 right-2.5 glass rounded-full px-2.5 py-0.5 text-[11px] font-medium text-foreground border border-white/15 flex items-center gap-1.5 shadow-lg backdrop-blur-md z-10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_#10b981]" />
            </span>
            <span>Live Platform</span>
          </div>
        </div>

        {/* Tech Tags with Micro Hover Scale */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.map((tag, tagIdx) => (
            <span
              key={`project-${idx}-tag-${tagIdx}`}
              className="px-2.5 py-0.5 text-[11px] font-medium rounded-full glass border border-primary/20 text-primary hover:border-primary/60 hover:bg-primary/10 hover:scale-105 transition-all duration-300 cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
          {project.title}
        </h3>

        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
          {project.description}
        </p>
      </div>

      {/* Project Links CTA with 3D Depth */}
      <div
        style={{
          transform: tilt.opacity ? "translateZ(30px)" : "translateZ(0px)",
          transition: "transform 0.2s ease-out",
        }}
        className="flex items-center gap-3 pt-3 border-t border-border/40 relative z-30"
      >
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-primary-foreground font-semibold text-xs sm:text-sm hover:bg-primary/90 transition-all duration-300 shadow-[0_0_15px_color-mix(in_srgb,var(--color-primary)_35%,transparent)] hover:scale-105"
          >
            <span>Visit Platform</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        )}

        {project.github && project.github !== "#" && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full glass border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:scale-110"
            aria-label="GitHub Repository"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
};

export const Project = () => {
  return (
    <section id="project" className="py-32 relative overflow-hidden">
      {/* Background Orbs Glow */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-96 h-96 bg-highlight/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4 animate-fade-in">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-semibold text-primary border border-primary/20 tracking-wider uppercase">
              Featured Projects
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-foreground">
            Projects that{" "}
            <span className="text-primary font-serif italic font-semibold glow-text">make an impact.</span>
          </h2>

          <p className="text-base text-muted-foreground leading-relaxed">
            A selection of my recent work, medical platforms, and case studies.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <ProjectCard key={`project-${idx}`} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};