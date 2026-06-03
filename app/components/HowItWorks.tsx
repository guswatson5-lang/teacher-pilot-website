import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Upload",
    description: "Take a photo of student work or paste text. Upload a whole class set at once.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Assess",
    description: "AI analyses the work against your rubric — producing grades, feedback, and report comments.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Export",
    description: "Download professional report comments, structured feedback, or share directly with your school system.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-32 overflow-hidden"
      style={{ background: "#0A0A0A" }}
    >
      {/* Top fade */}
      <div
        className="absolute top-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, #0F0F0F, transparent)" }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-4"
              style={{ color: "#F59E0B" }}
            >
              How it works
            </p>
            <h2
              className="font-black"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                color: "#FAFAF8",
              }}
            >
              Three steps.
              <br />
              <span className="text-gradient-amber">Minutes, not hours.</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Connecting line */}
          <div
            className="hidden md:block absolute top-16 left-[calc(16.67%+32px)] right-[calc(16.67%+32px)] h-px"
            style={{
              background: "linear-gradient(to right, transparent, rgba(245,158,11,0.3), rgba(245,158,11,0.3), transparent)",
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 0.15}>
                <div className="flex flex-col items-center text-center">
                  {/* Icon circle */}
                  <div
                    className="relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6 z-10"
                    style={{
                      background: "rgba(245,158,11,0.1)",
                      border: "1px solid rgba(245,158,11,0.25)",
                      color: "#F59E0B",
                    }}
                  >
                    {step.icon}
                    <span
                      className="absolute -top-2 -right-2 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center"
                      style={{ background: "#F59E0B", color: "#0F0F0F" }}
                    >
                      {i + 1}
                    </span>
                  </div>

                  <h3
                    className="text-2xl font-bold mb-3"
                    style={{ color: "#FAFAF8" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "rgba(250,250,248,0.5)" }}
                  >
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #0F0F0F)" }}
      />
    </section>
  );
}
