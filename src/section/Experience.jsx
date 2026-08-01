import React, { useState } from "react";
import { Briefcase, GraduationCap, Calendar, ChevronRight } from "lucide-react";

// Accurate Timeline Data for FPT University Can Tho Graduate
const experiences = [
  {
    id: 1,
    type: "education",
    period: "05/2024 - Present",
    role: "Bachelor of Software Engineering",
    company: "FPT University Can Tho",
    location: "Can Tho, Vietnam",
    description: [
      "Completed Software Engineering major at FPT University Can Tho.",
      "Developed Capstone Project Medicare (POCAMS) - an integrated digital healthcare management platform for private clinics.",
      "Served as Team Leader for over 6 academic project teams, managing task allocation, timelines, and technical presentations.",
    ],
    skills: ["React", "Next.js", "TypeScript", "NestJS", "PostgreSQL", "Team Leadership"],
  },
  {
    id: 2,
    type: "work",
    period: "01/2024 - 04/2024",
    role: "Frontend Developer Intern (OJT)",
    company: "BRB Software",
    companyUrl: "https://brightbrain.vn/",
    location: "Can Tho, Vietnam",
    description: [
      "Completed 4-month On-the-Job Training (OJT) internship at BRB Software, contributing to real-world client projects.",
      "Built responsive UI components and implemented modern layouts using React and Tailwind CSS.",
      "Integrated RESTful APIs, participated in code reviews, and collaborated with senior developers using Git workflows.",
    ],
    skills: ["React", "JavaScript (ES6+)", "Tailwind CSS", "REST API", "Git"],
  },
  {
    id: 3,
    type: "education",
    period: "2022 - 01/2024",
    role: "Bachelor of Information Technology",
    company: "FPT University Can Tho",
    location: "Vietnam",
    description: [
      "Served as Team Leader for over 6 academic project teams, managing task allocation, timeline tracking, and presentation.",
      "Majored in Software Engineering with a strong focus on Web Development and Database Architecture.",
      "Successfully led coursework projects applying Object-Oriented Programming (OOP) and modern web stacks.",
    ],
    skills: ["Team Leadership", "Project Management", "Software Engineering", "PostgreSQL", "OOP"],
  },
];

export const Experience = () => {
  const [activeId, setActiveId] = useState(1);

  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* Background Orbs Glow */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4 animate-fade-in">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-semibold text-primary border border-primary/20 tracking-wider uppercase">
              Career & Journey
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-foreground">
            Experience & <span className="text-primary font-serif italic font-semibold glow-text">Education.</span>
          </h2>

          <p className="text-base text-muted-foreground leading-relaxed">
            My professional internship, freelance development, and academic background.
          </p>
        </div>

        {/* Vertical Interactive Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Glowing Line */}
          <div className="absolute left-4 sm:left-8 top-3 bottom-3 w-0.5 bg-linear-to-b from-primary via-primary/50 to-transparent opacity-40" />

          <div className="space-y-10">
            {experiences.map((exp) => {
              const isWork = exp.type === "work";
              const isActive = activeId === exp.id;

              return (
                <div
                  key={`exp-${exp.id}`}
                  onClick={() => setActiveId(exp.id)}
                  className="relative pl-12 sm:pl-20 group cursor-pointer"
                >
                  {/* Timeline Dot Indicator */}
                  <div
                    className={`absolute left-0 sm:left-4 top-1.5 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 z-10 ${isActive
                      ? "bg-primary text-primary-foreground shadow-[0_0_20px_color-mix(in_srgb,var(--color-primary)_60%,transparent)] scale-110"
                      : "glass border border-primary/30 text-primary group-hover:border-primary group-hover:scale-105"
                      }`}
                  >
                    {isWork ? <Briefcase className="w-4 h-4" /> : <GraduationCap className="w-4 h-4" />}
                  </div>

                  {/* Card Container */}
                  <div
                    className={`glass rounded-3xl p-6 sm:p-8 border transition-all duration-300 ${isActive
                      ? "border-primary/50 shadow-[0_0_35px_color-mix(in_srgb,var(--color-primary)_20%,transparent)]"
                      : "border-border/50 hover:border-primary/30"
                      }`}
                  >
                    {/* Header Info */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                      <div>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass border border-primary/20 text-xs font-semibold text-primary mb-2">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{exp.period}</span>
                        </span>

                        <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {exp.role}
                        </h3>

                        <p className="text-sm font-medium text-muted-foreground mt-0.5">
                          {exp.companyUrl ? (
                            <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">{exp.company}</a>
                          ) : (
                            exp.company
                          )}
                          {" "}• <span className="text-xs">{exp.location}</span>
                        </p>
                      </div>
                    </div>

                    {/* Bullet Points List */}
                    <ul className="space-y-2.5 mb-6 text-sm text-muted-foreground leading-relaxed">
                      {exp.description.map((point, pointIdx) => (
                        <li key={`exp-${exp.id}-pt-${pointIdx}`} className="flex items-start gap-2.5">
                          <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Skills Used */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-border/40">
                      {exp.skills.map((skill, skillIdx) => (
                        <span
                          key={`exp-${exp.id}-skill-${skillIdx}`}
                          className="px-3 py-1 text-xs font-medium rounded-full glass border border-primary/20 text-primary"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};