"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(15,15,15,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight" style={{ color: "#FAFAF8" }}>
            Teacher<span style={{ color: "#F59E0B" }}>Pilot</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {["Features", "How it works", "Pricing"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, "-")}`}
              className="text-sm transition-colors duration-300"
              style={{ color: "rgba(250,250,248,0.6)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#FAFAF8")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(250,250,248,0.6)")}
            >
              {item}
            </a>
          ))}
        </div>
        <Link
          href="https://teacher-pilot.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold px-5 py-2 rounded-full transition-all duration-300"
          style={{ background: "#F59E0B", color: "#0F0F0F" }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "#FCD34D";
            (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.03)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "#F59E0B";
            (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
          }}
        >
          Start free
        </Link>
      </div>
    </nav>
  );
}
