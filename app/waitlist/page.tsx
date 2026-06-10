"use client";

import { useState } from "react";

export default function WaitlistPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setErrorMsg("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  return (
    <main
      className="min-h-screen flex items-center justify-center px-6 py-16"
      style={{ background: "#0a0a0a" }}
    >
      {/* Subtle cyan radial glow */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(6,182,212,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative w-full max-w-lg text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-8"
          style={{
            background: "rgba(6,182,212,0.1)",
            border: "1px solid rgba(6,182,212,0.25)",
            color: "#06B6D4",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "#06B6D4", boxShadow: "0 0 6px #06B6D4" }}
          />
          Coming soon
        </div>

        {/* Logo */}
        <div className="text-2xl font-black mb-10">
          <span style={{ color: "#FAFAF8" }}>Teacher</span>
          <span style={{ color: "#06B6D4" }}>Pilot</span>
        </div>

        {status === "success" ? (
          <div
            className="rounded-2xl p-10"
            style={{
              background: "rgba(6,182,212,0.06)",
              border: "1px solid rgba(6,182,212,0.15)",
            }}
          >
            <div className="text-4xl mb-4">🎉</div>
            <p
              className="text-xl font-bold mb-2"
              style={{ color: "#06B6D4" }}
            >
              You&apos;re on the list!
            </p>
            <p className="text-sm" style={{ color: "rgba(250,250,248,0.5)" }}>
              We&apos;ll be in touch soon.
            </p>
          </div>
        ) : (
          <>
            {/* Headline */}
            <h1
              className="font-black leading-tight mb-5"
              style={{
                fontSize: "clamp(1.8rem, 5vw, 3rem)",
                color: "#FAFAF8",
                lineHeight: 1.15,
              }}
            >
              The AI tool Australian teachers have been waiting for.
            </h1>

            {/* Subheadline */}
            <p
              className="text-base md:text-lg mb-10 leading-relaxed"
              style={{ color: "rgba(250,250,248,0.5)" }}
            >
              Mark smarter. Plan faster. Report with confidence.
              <br />
              Be first to know when Teacher Pilot launches.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                disabled={status === "loading"}
                className="w-full rounded-xl px-5 py-4 text-base outline-none transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#FAFAF8",
                  caretColor: "#06B6D4",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.border = "1px solid rgba(6,182,212,0.5)";
                  e.currentTarget.style.background = "rgba(6,182,212,0.04)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.border = "1px solid rgba(255,255,255,0.1)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                }}
              />

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full rounded-xl px-5 py-4 text-base font-bold transition-all duration-200"
                style={{
                  background: status === "loading" ? "rgba(6,182,212,0.5)" : "#06B6D4",
                  color: "#0a0a0a",
                  cursor: status === "loading" ? "not-allowed" : "pointer",
                }}
                onMouseEnter={(e) => {
                  if (status !== "loading")
                    (e.currentTarget as HTMLButtonElement).style.background = "#67E8F9";
                }}
                onMouseLeave={(e) => {
                  if (status !== "loading")
                    (e.currentTarget as HTMLButtonElement).style.background = "#06B6D4";
                }}
              >
                {status === "loading" ? "Joining…" : "Join the waitlist"}
              </button>

              {status === "error" && errorMsg && (
                <p className="text-sm" style={{ color: "#F87171" }}>
                  {errorMsg}
                </p>
              )}
            </form>

            <p
              className="mt-5 text-xs"
              style={{ color: "rgba(250,250,248,0.3)" }}
            >
              No spam. Just a launch notification when we go live.
            </p>
          </>
        )}
      </div>
    </main>
  );
}
