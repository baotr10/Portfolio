import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, FileText } from "lucide-react";

const certificates = [
    {
        title: "User Experience Research and Design Specialization",
        issuer: "University of Michigan",
        date: "Oct 2025",
        description: "Comprehensive UX research, interaction design, prototyping, and usability testing methodologies.",
        imgUrl: "/certificates/cert1.jpeg",
    },
    {
        title: "Project Management Principles and Practices Specialization",
        issuer: "University of California, Irvine",
        date: "Aug 2025",
        description: "Project planning, scope management, risk assessment, schedule control, and team leadership.",
        imgUrl: "/certificates/cert2.jpeg",
    },
    {
        title: "CertNexus Certified Ethical Emerging Technologist Professional Certificate",
        issuer: "CertNexus",
        date: "Nov 2024",
        description: "Ethical data practices, AI governance, and responsible implementation of emerging technologies.",
        imgUrl: "/certificates/cert3.jpeg",
    },
    {
        title: "Software Development Lifecycle Specialization",
        issuer: "University of Minnesota",
        date: "Jul 2024",
        description: "Agile methodologies, software testing, requirements engineering, and DevOps practices.",
        imgUrl: "/certificates/cert4.jpeg",
    },
    {
        title: "Web Design for Everybody: Basics of Web Development & Coding Specialization",
        issuer: "University of Michigan",
        date: "Apr 2024",
        description: "HTML5, CSS3, JavaScript fundamentals, responsive design, and web accessibility standards.",
        imgUrl: "/certificates/cert5.jpeg",
    },
    {
        title: "Computer Communications Specialization",
        issuer: "University of Colorado System",
        date: "Nov 2023",
        description: "Network protocols, Internet architecture, socket programming, and data communication principles.",
        imgUrl: "/certificates/cert6.jpeg",
    },
    {
        title: "Academic Skills for University Success Specialization",
        issuer: "University of Sydney / Coursera",
        date: "2023",
        description: "Critical thinking, research methodology, academic writing, and problem-solving skills.",
        imgUrl: "/certificates/cert7.jpeg",
    }
];

export const Certificates = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Number of visible cards per slide (responsive: 3 on desktop, 2 on tablet, 1 on mobile)
    const cardsPerPage = 3;
    const maxIndex = Math.max(0, certificates.length - cardsPerPage);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    return (
        <section id="certificates" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header with Navigation Arrows */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="max-w-2xl space-y-4">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-semibold text-primary border border-primary/20 tracking-wider uppercase">
                            Certifications
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                            Verified <span className="text-primary italic font-serif">Certificates.</span>
                        </h2>
                    </div>

                    {/* Carousel Navigation Buttons */}
                    <div className="flex items-center gap-2">
                        <button
                            onClick={prevSlide}
                            className="p-3 rounded-full glass border border-border text-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 active:scale-95"
                            aria-label="Previous Certificate"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="p-3 rounded-full glass border border-border text-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 active:scale-95"
                            aria-label="Next Certificate"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Carousel Container showing 3 cards per slide */}
                <div className="relative overflow-hidden rounded-3xl p-1">
                    <div
                        className="flex transition-transform duration-500 ease-out gap-6"
                        style={{ transform: `translateX(-${currentIndex * (100 / cardsPerPage)}%)` }}
                    >
                        {certificates.map((cert, idx) => (
                            <div
                                key={`cert-card-${idx}`}
                                className="w-full md:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)] shrink-0"
                            >
                                <div className="glass rounded-2xl p-5 border border-border/50 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between group shadow-lg h-full">
                                    <div>
                                        {/* Certificate Image Container */}
                                        <div className="relative aspect-16/10 rounded-xl overflow-hidden mb-4 bg-surface border border-border/40 flex items-center justify-center group/img cursor-pointer">
                                            {cert.imgUrl ? (
                                                <img
                                                    src={cert.imgUrl}
                                                    alt={cert.title}
                                                    onError={(e) => {
                                                        if (e.target.src.endsWith('.jpeg')) {
                                                            e.target.src = e.target.src.replace('.jpeg', '.png');
                                                        } else if (e.target.src.endsWith('.png')) {
                                                            e.target.src = e.target.src.replace('.png', '.jpg');
                                                        }
                                                    }}
                                                    className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                                                />
                                            ) : (
                                                <FileText className="w-16 h-16 text-primary/40" />
                                            )}

                                            <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-semibold text-primary border border-primary/20">
                                                {cert.date}
                                            </div>
                                        </div>

                                        <span className="text-xs font-medium text-primary uppercase tracking-wider">{cert.issuer}</span>
                                        <h3 className="text-lg font-bold text-foreground mt-1 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                            {cert.title}
                                        </h3>
                                        <p className="text-xs text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                                            {cert.description}
                                        </p>
                                    </div>

                                    {/* Action Button: View Full Image only */}
                                    <div className="pt-4 border-t border-border/40">
                                        <a
                                            href={cert.imgUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-all shadow-md"
                                        >
                                            <ExternalLink className="w-3.5 h-3.5" />
                                            <span>View Full Certificate</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Carousel Dots Indicator */}
                <div className="flex justify-center items-center gap-2 mt-8">
                    {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                        <button
                            key={`cert-dot-${idx}`}
                            onClick={() => setCurrentIndex(idx)}
                            className={`h-2.5 rounded-full transition-all duration-300 ${
                                currentIndex === idx
                                    ? "w-8 bg-primary shadow-[0_0_10px_color-mix(in_srgb,var(--color-primary)_50%,transparent)]"
                                    : "w-2.5 bg-border hover:bg-primary/50"
                            }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
