"use client";

import { useEffect, useRef } from "react";
import ScrollReveal from "./ScrollReveal";

const features = [
  {
    title: "AI Marking Assistant",
    subtitle: "Upload. Assess. Done.",
    description:
      "Upload a photo of student work and get instant grades, strengths, improvements, and report comments — aligned to the Victorian Curriculum from Prep to Year 12 including VCE.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1920&q=80",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Lesson Planner & Rubric Generator",
    subtitle: "Plan and assess in minutes.",
    description:
      "Generate Victorian Curriculum-aligned lesson plans and detailed marking rubrics for any year level, subject, or assessment task — customised to your school's grade boundaries.",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1920&q=80",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Report Writer",
    subtitle: "Personalised, professional reports.",
    description:
      "Generate polished report comments using AI marking history, manual teacher notes, or uploaded handwritten observations. Every comment sounds like you wrote it yourself.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&q=80",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Moderation Tool",
    subtitle: "Compare. Assess. Verify.",
    description:
      "Upload two pieces of student work and get a side-by-side AI moderation report — grades, strengths, improvements, and a clear verdict on which sample is stronger.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920&q=80",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 3v18M15 3v18" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Bulk Marking",
    subtitle: "Mark a whole class at once.",
    description:
      "Upload an entire class set in one go. Teacher Pilot processes every student sequentially with live progress — grades, feedback, and report comments for all 25 students in minutes.",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1920&q=80",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Class Management",
    subtitle: "Your classes. Your data.",
    description:
      "Create class lists, scan physical rolls with your camera, and access every student's full marking history, progress tracking, and at-risk alerts — all in one place.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1920&q=80",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const viewH = window.innerHeight;
      const progress = 1 - (rect.top + rect.height / 2) / viewH;
      const clampedProgress = Math.max(-0.5, Math.min(1.5, progress));
      const translateY = clampedProgress * 20;
      const scale = 1.05 + clampedProgress * 0.03;
      el.style.transform = `translateY(${translateY}px) scale(${scale})`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <ScrollReveal delay={(index % 3) * 0.15}>
      <div
        className="feature-card rounded-2xl overflow-hidden relative group h-full"
        style={{
          background: "#141414",
          border: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {/* Image container */}
        <div className="relative h-56 overflow-hidden">
          <div
            ref={imgRef}
            className="absolute inset-[-10%] will-change-transform"
            style={{
              backgroundImage: `url('${feature.image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: "scale(1.1)",
            }}
          />
          <div
            className="absolute inset-0 z-[1]"
            style={{
              background: "linear-gradient(180deg, rgba(15,15,15,0.1) 0%, rgba(15,15,15,0.7) 100%)",
            }}
          />
          <div
            className="absolute inset-0 z-[2] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{ background: "rgba(6,182,212,0.08)" }}
          />
        </div>

        {/* Content */}
        <div className="p-7">
          <div
            className="inline-flex items-center justify-center w-10 h-10 rounded-xl mb-4"
            style={{ background: "rgba(6,182,212,0.12)", color: "#06B6D4" }}
          >
            {feature.icon}
          </div>
          <h3 className="text-lg font-bold mb-1" style={{ color: "#FAFAF8" }}>
            {feature.title}
          </h3>
          <p className="text-sm font-medium mb-3" style={{ color: "#06B6D4" }}>
            {feature.subtitle}
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "rgba(250,250,248,0.5)" }}>
            {feature.description}
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function Features() {
  return (
    <section
      id="features"
      className="relative py-32 overflow-hidden"
      style={{ background: "#0F0F0F" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-4"
              style={{ color: "#06B6D4" }}
            >
              Features
            </p>
            <h2
              className="font-black"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                color: "#FAFAF8",
              }}
            >
              Everything a teacher needs.
              <br />
              <span className="text-gradient-amber">{"Nothing they don't."}</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
