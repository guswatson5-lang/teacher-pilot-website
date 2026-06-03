"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="relative py-16 border-t"
      style={{ background: "#060606", borderColor: "rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo + tagline */}
          <div className="text-center md:text-left">
            <div className="text-2xl font-black mb-2">
              <span style={{ color: "#FAFAF8" }}>Teacher</span>
              <span style={{ color: "#F59E0B" }}>Pilot</span>
            </div>
            <p className="text-sm" style={{ color: "rgba(250,250,248,0.35)" }}>
              Mark smarter. Plan faster. Report with confidence.
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            <Link
              href="https://teacher-pilot.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition-colors duration-300"
              style={{ color: "rgba(250,250,248,0.4)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#FAFAF8")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(250,250,248,0.4)")}
            >
              Open app
            </Link>
            <Link
              href="https://teacher-pilot.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition-colors duration-300"
              style={{ color: "rgba(250,250,248,0.4)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#FAFAF8")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(250,250,248,0.4)")}
            >
              Pricing
            </Link>
            <a
              href="mailto:hello@teacherpilot.com.au"
              className="text-sm transition-colors duration-300"
              style={{ color: "rgba(250,250,248,0.4)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#FAFAF8")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(250,250,248,0.4)")}
            >
              Contact
            </a>
          </div>
        </div>

        {/* Divider */}
        <div
          className="my-8 border-t"
          style={{ borderColor: "rgba(255,255,255,0.05)" }}
        />

        {/* Copyright + legal links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "rgba(250,250,248,0.25)" }}>
            © 2026 Teacher Pilot. Built for Australian educators.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-xs transition-colors duration-300"
              style={{ color: "rgba(250,250,248,0.25)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#FAFAF8")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(250,250,248,0.25)")}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs transition-colors duration-300"
              style={{ color: "rgba(250,250,248,0.25)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#FAFAF8")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(250,250,248,0.25)")}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
