"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function FinalCTA() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!bgRef.current) return;
      const section = bgRef.current.closest("section");
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const progress = -rect.top / window.innerHeight;
      bgRef.current.style.transform = `translateY(${progress * 25}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#060606" }}
    >
      {/* Parallax background */}
      <div
        ref={bgRef}
        className="absolute inset-[-10%] will-change-transform pointer-events-none"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center 60%",
          opacity: 0.12,
          filter: "blur(2px)",
        }}
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(15,15,15,0.4) 0%, rgba(6,6,6,0.95) 100%)",
        }}
      />

      {/* Amber radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 60%, rgba(6,182,212,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Grain */}
      <div className="grain-overlay" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-32">
        <ScrollReveal>
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-8"
            style={{ color: "#06B6D4" }}
          >
            Get started today
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2
            className="font-black leading-tight mb-8"
            style={{
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
              color: "#FAFAF8",
              lineHeight: "1.05",
            }}
          >
            Give yourself back
            <br />
            <span className="text-gradient-amber">your evenings.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p
            className="text-lg md:text-xl max-w-xl mx-auto mb-12"
            style={{ color: "rgba(250,250,248,0.5)", lineHeight: "1.7" }}
          >
            Join teachers across Victoria saving hours every week
            with AI-powered marking, planning, and reporting.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <Link
            href="https://teacher-pilot.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-bold text-lg px-10 py-5 rounded-full transition-all duration-300 amber-glow"
            style={{ background: "#06B6D4", color: "#0F0F0F" }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "#67E8F9";
              el.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "#06B6D4";
              el.style.transform = "scale(1)";
            }}
          >
            Get started free
          </Link>
          <p
            className="mt-4 text-sm"
            style={{ color: "rgba(250,250,248,0.3)" }}
          >
            No credit card required. 7-day free trial, cancel anytime.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
