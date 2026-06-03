"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!bgRef.current) return;
      const y = window.scrollY;
      bgRef.current.style.transform = `translateY(${y * 0.4}px) scale(1.1)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#0F0F0F" }}
    >
      {/* Parallax background image */}
      <div
        ref={bgRef}
        className="absolute inset-0 will-change-transform"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          transform: "scale(1.1)",
        }}
      />

      {/* Dark overlay gradient */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(180deg, rgba(15,15,15,0.3) 0%, rgba(15,15,15,0.55) 50%, rgba(15,15,15,0.85) 100%)",
        }}
      />

      {/* Cinematic grain */}
      <div className="grain-overlay" />

      {/* Ambient amber light from bottom */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-[2] pointer-events-none"
        style={{
          width: "80%",
          height: "40%",
          background: "radial-gradient(ellipse at bottom, rgba(245,158,11,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-[3] text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium mb-8 opacity-0"
          style={{
            background: "rgba(245,158,11,0.12)",
            border: "1px solid rgba(245,158,11,0.3)",
            color: "#F59E0B",
            animation: "fadeIn 1s cubic-bezier(0.22,1,0.36,1) 0.3s forwards",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "#F59E0B", boxShadow: "0 0 6px #F59E0B" }}
          />
          Built for Australian teachers
        </div>

        {/* Headline */}
        <h1
          className="font-black leading-[1.05] tracking-tight mb-6 opacity-0"
          style={{
            fontSize: "clamp(2.8rem, 7vw, 6rem)",
            color: "#FAFAF8",
            animation: "fadeUp 1s cubic-bezier(0.22,1,0.36,1) 0.5s forwards",
          }}
        >
          Mark smarter.
          <br />
          <span className="text-gradient-amber">Plan faster.</span>
          <br />
          Report with confidence.
        </h1>

        {/* Subheading */}
        <p
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-0"
          style={{
            color: "rgba(250,250,248,0.65)",
            lineHeight: "1.7",
            animation: "fadeUp 1s cubic-bezier(0.22,1,0.36,1) 0.7s forwards",
          }}
        >
          AI-powered tools designed for the reality of Australian classrooms.
          Save hours every week on the work that doesn&apos;t need to take hours.
        </p>

        {/* CTA buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0"
          style={{ animation: "fadeUp 1s cubic-bezier(0.22,1,0.36,1) 0.9s forwards" }}
        >
          <Link
            href="https://teacher-pilot.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-base px-8 py-4 rounded-full transition-all duration-300 amber-glow"
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
            Start for free
          </Link>
          <a
            href="#features"
            className="font-medium text-base px-8 py-4 rounded-full transition-all duration-300"
            style={{
              background: "rgba(255,255,255,0.06)",
              color: "#FAFAF8",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.1)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.06)";
            }}
          >
            See how it works
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[3] flex flex-col items-center gap-2 opacity-0"
        style={{ animation: "fadeIn 1s cubic-bezier(0.22,1,0.36,1) 1.4s forwards" }}
      >
        <span className="text-xs tracking-widest uppercase" style={{ color: "rgba(250,250,248,0.35)" }}>
          Scroll
        </span>
        <div
          className="w-px h-12"
          style={{
            background: "linear-gradient(to bottom, rgba(245,158,11,0.6), transparent)",
          }}
        />
      </div>

      {/* Bottom gradient fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-[4] pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #0F0F0F)" }}
      />

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
