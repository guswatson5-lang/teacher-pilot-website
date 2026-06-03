"use client";

import { useEffect, useRef } from "react";
import ScrollReveal from "./ScrollReveal";
import Link from "next/link";

export default function BulkMarking() {
  const bgRef = useRef<HTMLDivElement>(null);
  const fgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!bgRef.current || !fgRef.current) return;
      const section = bgRef.current.closest("section");
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const progress = -rect.top / window.innerHeight;

      bgRef.current.style.transform = `translateY(${progress * 30}px)`;
      fgRef.current.style.transform = `translateY(${progress * -15}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      className="relative py-40 overflow-hidden"
      style={{ background: "#0F0F0F" }}
    >
      {/* Deep amber gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #1a0d00 0%, #0F0F0F 40%, #0F0F0F 60%, #1a0800 100%)",
        }}
      />

      {/* Background depth layer — slow parallax */}
      <div
        ref={bgRef}
        className="absolute inset-[-5%] will-change-transform pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(245,158,11,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Decorative grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(245,158,11,1) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,1) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Content — foreground parallax */}
      <div
        ref={fgRef}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center will-change-transform"
      >
        <ScrollReveal>
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-6"
            style={{ color: "#F59E0B" }}
          >
            Bulk marking
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2
            className="font-black leading-tight mb-6"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              color: "#FAFAF8",
              lineHeight: "1.05",
            }}
          >
            Mark an entire class set
            <br />
            <span className="text-gradient-amber">at once.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p
            className="text-xl md:text-2xl mb-4 font-medium"
            style={{ color: "rgba(250,250,248,0.7)" }}
          >
            25 students. One upload. Done in minutes.
          </p>
          <p
            className="text-base md:text-lg max-w-2xl mx-auto mb-12"
            style={{ color: "rgba(250,250,248,0.4)", lineHeight: "1.7" }}
          >
            Stop marking one at a time. Upload your whole class set and let the AI
            work through every piece simultaneously — grades, comments, and all.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://teacher-pilot.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-base px-8 py-4 rounded-full transition-all duration-300"
              style={{ background: "#F59E0B", color: "#0F0F0F" }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "#FCD34D";
                el.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "#F59E0B";
                el.style.transform = "scale(1)";
              }}
            >
              Try bulk marking free
            </Link>
          </div>
        </ScrollReveal>
      </div>

      {/* Depth dividers */}
      <div
        className="absolute left-6 top-1/2 -translate-y-1/2 pointer-events-none hidden lg:flex flex-col items-center gap-3"
        style={{ color: "rgba(245,158,11,0.2)" }}
      >
        {[...Array(8)].map((_, i) => (
          <div key={i} className="w-px" style={{ height: "20px", background: "rgba(245,158,11,0.15)" }} />
        ))}
      </div>
      <div
        className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none hidden lg:flex flex-col items-center gap-3"
        style={{ color: "rgba(245,158,11,0.2)" }}
      >
        {[...Array(8)].map((_, i) => (
          <div key={i} className="w-px" style={{ height: "20px", background: "rgba(245,158,11,0.15)" }} />
        ))}
      </div>
    </section>
  );
}
