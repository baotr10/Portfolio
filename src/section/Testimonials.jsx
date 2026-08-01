import React from "react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "Tran Gia Bao demonstrated outstanding technical initiative and problem-solving skills during his Capstone project. As a team leader, he effectively coordinated team members and delivered a high-quality healthcare platform.",
    name: "Capstone Advisor & Lecturer",
    role: "Department of Software Engineering",
    company: "FPT University Can Tho",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lecturer",
    rating: 5,
  },
  {
    id: 2,
    quote: "During his 4-month internship, Bao proved to be an eager learner with a solid foundation in React and modern front-end tools. He consistently met project deadlines and maintained clean, responsive code.",
    name: "Senior Frontend Lead",
    role: "Internship Mentor",
    company: "IT Technology Solutions",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mentor",
    rating: 5,
  },
  {
    id: 3,
    quote: "Having worked under Bao's leadership across more than 6 university course projects, I deeply appreciate his clear task delegation, technical guidance, and dedication to team success.",
    name: "Project Teammate",
    role: "Software Engineering Peer",
    company: "FPT University Can Tho",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Teammate",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      {/* Background Orbs Glow */}
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-96 h-96 bg-highlight/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4 animate-fade-in">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-semibold text-primary border border-primary/20 tracking-wider uppercase">
              Endorsements & Feedback
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-foreground">
            What mentors & teammates{" "}
            <span className="text-primary font-serif italic font-semibold glow-text">say about me.</span>
          </h2>

          <p className="text-base text-muted-foreground leading-relaxed">
            Recommendations and feedback from university advisors, internship leads, and project teammates.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={`testimonial-${item.id}`}
              className="glass rounded-3xl p-6 sm:p-8 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_color-mix(in_srgb,var(--color-primary)_15%,transparent)] group flex flex-col justify-between"
            >
              <div>
                {/* Header Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={`star-${item.id}-${i}`} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <Quote className="w-8 h-8 text-primary/30 group-hover:text-primary/60 transition-colors" />
                </div>

                {/* Quote Content */}
                <p className="text-sm text-muted-foreground leading-relaxed italic mb-8">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Profile */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-border/40">
                <div className="w-11 h-11 rounded-full glass border border-primary/30 overflow-hidden shrink-0 bg-surface/50">
                  <img src={item.avatar} alt={item.name} className="w-full h-full object-cover" />
                </div>

                <div>
                  <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {item.role} • <span className="text-primary/90">{item.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};