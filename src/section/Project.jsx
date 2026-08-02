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
    status: "Live Platform",
  },
  {
    title: "BusNest - Online Bus Booking & Operator Management SaaS",
    description: "A two-sided platform bridging technological gaps in passenger transport: an intuitive e-commerce marketplace for seat selection, real-time tracking, and ticket booking, alongside a SaaS solution for bus operators to optimize scheduling, pricing, and revenue management.",
    img: "/projects/busnet.png",
    tags: ["Project Lead", "React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/Busnet-FPT",
    status: "In Development",
    role: "Team Lead",
  },
  {
    title: "Econest - 3D Interactive Eco-Decor Platform",
    description: "A sustainable e-commerce platform bridging green lifestyle with smart home decor. Econest transforms upcycled materials into aesthetic, multi-functional decor while integrating interactive 3D web graphics allowing customers to preview products in simulated space before purchasing.",
    img: "/projects/EXE_2410.png",
    tags: ["Project Lead", "React", "3D Web Graphics", "Tailwind CSS", "Seed Funding"],
    github: "https://github.com/Tranbao100304",
    status: "Seed Funding (20M VND)",
    role: "Project Lead",
  },
  {
    title: "Coffee Shop",
    description: "A modern, responsive landing page interface for a specialty coffee shop. Designed with rich warm tones, smooth transitions, product catalog highlights, and an intuitive online ordering presentation.",
    img: "/projects/coffee_shop.png",
    tags: ["React", "Vite", "Tailwind CSS", "AOS Animation"],
    link: "https://coffee-nine.vercel.app/",
    github: "https://github.com/baotr10/coffee-shop",
    status: "Live Platform",
  }
];

// Project Card
const ProjectCard = ({ project, idx }) => {
  const isLive = project.status === "Live Platform" || project.link;

  return (
    <div
      className="glass rounded-2xl p-4 sm:p-5 border border-border/50 hover:border-primary/50 transition-all duration-300 group flex flex-col justify-between overflow-hidden shadow-lg relative"
    >
      <div>
        {/* Image Preview Container with Hover Overlay */}
        <div
          className="relative aspect-16/10 overflow-hidden rounded-xl mb-4 bg-surface/50 border border-border/40 group-hover:border-primary/40 transition-colors shadow-md"
        >
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
          />

          {/* Dark Glass Overlay & Center Action Badge on Hover */}
          <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full glass border border-primary/40 text-primary font-semibold text-xs shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              <span>{isLive ? "View Project" : "View Repository"}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>

          {/* Dynamic Status Badge */}
          <div className="absolute top-2.5 right-2.5 glass rounded-full px-2.5 py-0.5 text-[11px] font-medium text-foreground border border-white/15 flex items-center gap-1.5 shadow-lg backdrop-blur-md z-10">
            <span className="relative flex h-2 w-2">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isLive ? 'bg-emerald-400' : 'bg-amber-400'} opacity-75`} />
              <span className={`relative inline-flex rounded-full h-2 w-2 ${isLive ? 'bg-emerald-500 shadow-[0_0_8px_#10b981]' : 'bg-amber-500 shadow-[0_0_8px_#f59e0b]'}`} />
            </span>
            <span>{project.status || (isLive ? "Live Platform" : "In Development")}</span>
          </div>
        </div>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.map((tag, tagIdx) => (
            <span
              key={`project-${idx}-tag-${tagIdx}`}
              className={`px-2.5 py-0.5 text-[11px] font-medium rounded-full glass border transition-all duration-300 cursor-default ${tag === "Project Lead" || tag === "Team Lead"
                ? "border-amber-500/40 text-amber-400 bg-amber-500/10 font-semibold"
                : "border-primary/20 text-primary hover:border-primary/60 hover:bg-primary/10"
                }`}
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

      {/* Project Links CTA */}
      <div
        className="flex items-center gap-3 pt-3 border-t border-border/40 relative z-30"
      >
        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-primary-foreground font-semibold text-xs sm:text-sm hover:bg-primary/90 transition-all duration-300 shadow-[0_0_15px_color-mix(in_srgb,var(--color-primary)_35%,transparent)]"
          >
            <span>Visit Platform</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        ) : (
          project.github && project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full glass border border-primary/40 text-primary font-semibold text-xs sm:text-sm hover:bg-primary/10 transition-all duration-300"
            >
              <span>View Repository</span>
              <GithubIcon className="w-3.5 h-3.5" />
            </a>
          )
        )}

        {project.link && project.github && project.github !== "#" && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full glass border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
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
    <section id="project" className="py-32 relative overflow-hidden mesh-gradient-alt">
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
