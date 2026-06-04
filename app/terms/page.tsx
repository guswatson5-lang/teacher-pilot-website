import Link from "next/link";
import type { Metadata } from "next";

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: "Terms of Service — Teacher Pilot",
};

export default function TermsPage() {
  return (
    <main
      className="min-h-screen flex flex-col"
      style={{ background: "#0F0F0F" }}
    >
      <div className="flex-1 flex items-center justify-center px-6 py-24">
        <div className="max-w-xl w-full">
          {/* Amber accent line */}
          <div
            className="w-12 h-1 rounded-full mb-8"
            style={{ background: "#06B6D4" }}
          />

          <h1
            className="font-black mb-3"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)", color: "#FAFAF8", lineHeight: 1.1 }}
          >
            Terms of Service
          </h1>

          <p
            className="text-lg font-semibold mb-6"
            style={{ color: "#06B6D4" }}
          >
            Coming soon
          </p>

          <p
            className="text-base leading-relaxed mb-10"
            style={{ color: "rgba(250,250,248,0.55)", lineHeight: "1.75" }}
          >
            Our Terms of Service are currently being finalised and will be
            published here shortly. If you have any questions in the meantime,
            please contact us.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-300"
            style={{ color: "rgba(250,250,248,0.45)" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#06B6D4")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(250,250,248,0.45)")}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
