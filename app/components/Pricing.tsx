"use client";

import ScrollReveal from "./ScrollReveal";
import Link from "next/link";

const plans = [
  {
    name: "Trial",
    priceDisplay: "Free",
    period: "for 7 days",
    subtext: "Try everything. No credit card required.",
    badge: null,
    highlight: false,
    features: [
      "Full access to all features",
      "Unlimited AI markings during trial",
      "Bulk marking",
      "Lesson planner & rubric generator",
      "Report writer",
      "Moderation tool",
    ],
    cta: "Start free trial",
    ctaHref: "https://teacher-pilot.vercel.app",
  },
  {
    name: "Individual",
    priceDisplay: "$14.99",
    period: "per month",
    subtext: "For teachers who want the full power of AI in their classroom.",
    badge: "Most popular",
    highlight: true,
    features: [
      "Unlimited AI markings",
      "Bulk marking — full class sets",
      "Lesson planner & rubric generator",
      "Report writer with student history",
      "Moderation tool",
      "Victorian Curriculum & VCE alignment",
      "Priority support",
    ],
    cta: "Start free trial",
    ctaHref: "https://teacher-pilot.vercel.app",
  },
  {
    name: "Annual",
    priceDisplay: "$119.99",
    period: "per year",
    subtext: "Save $59.89 compared to monthly. Best value.",
    badge: "Best value",
    highlight: false,
    features: [
      "Everything in Individual",
      "2 months free",
      "Locked in price — never increases",
      "Early access to new features",
    ],
    cta: "Start annual plan",
    ctaHref: "https://teacher-pilot.vercel.app",
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
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
              Pricing
            </p>
            <h2
              className="font-black"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                color: "#FAFAF8",
              }}
            >
              Simple, honest pricing.
              <br />
              <span className="text-gradient-amber">Start free today.</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 0.12}>
              <div
                className="pricing-card rounded-2xl p-8 relative"
                style={{
                  background: plan.highlight ? "rgba(6,182,212,0.08)" : "#141414",
                  border: plan.highlight
                    ? "1px solid rgba(6,182,212,0.4)"
                    : "1px solid rgba(255,255,255,0.06)",
                  boxShadow: plan.highlight ? "0 0 60px rgba(6,182,212,0.1)" : "none",
                }}
              >
                {plan.badge && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap"
                    style={{ background: "#06B6D4", color: "#0F0F0F" }}
                  >
                    {plan.badge}
                  </div>
                )}

                <div className="mb-6">
                  <h3
                    className="text-lg font-bold mb-1"
                    style={{ color: plan.highlight ? "#06B6D4" : "#FAFAF8" }}
                  >
                    {plan.name}
                  </h3>
                  <div className="flex items-end gap-1 mb-2">
                    <span
                      className="font-black"
                      style={{ fontSize: "2.5rem", lineHeight: 1, color: "#FAFAF8" }}
                    >
                      {plan.priceDisplay}
                    </span>
                    <span className="text-sm pb-1" style={{ color: "rgba(250,250,248,0.4)" }}>
                      /{plan.period}
                    </span>
                  </div>
                  <p className="text-sm" style={{ color: "rgba(250,250,248,0.5)" }}>
                    {plan.subtext}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#06B6D4"
                        strokeWidth="2"
                        className="mt-0.5 flex-shrink-0"
                      >
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span style={{ color: "rgba(250,250,248,0.65)" }}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center font-semibold text-sm py-3 rounded-xl transition-all duration-300"
                  style={{ background: "#06B6D4", color: "#0F0F0F" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "#67E8F9";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "#06B6D4";
                  }}
                >
                  {plan.cta}
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
