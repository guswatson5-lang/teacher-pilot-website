import ScrollReveal from "./ScrollReveal";
import StatCounter from "./StatCounter";

export default function Problem() {
  return (
    <section
      className="relative py-32 overflow-hidden"
      style={{ background: "#0A0A0A" }}
    >
      {/* Ambient light */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: "60%",
          height: "1px",
          background: "linear-gradient(to right, transparent, rgba(6,182,212,0.2), transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-6"
              style={{ color: "#06B6D4" }}
            >
              The reality
            </p>
            <h2
              className="font-black leading-tight max-w-4xl mx-auto"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                color: "#FAFAF8",
                lineHeight: "1.15",
              }}
            >
              Teachers spend{" "}
              <span className="text-gradient-amber">8+ hours a week</span>{" "}
              on marking and reports.
            </h2>
            <p
              className="mt-6 text-lg md:text-xl max-w-2xl mx-auto"
              style={{ color: "rgba(250,250,248,0.5)", lineHeight: "1.75" }}
            >
              That&apos;s time away from the classroom, away from your students,
              away from your life. It doesn&apos;t have to be this way.
            </p>
          </div>
        </ScrollReveal>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <ScrollReveal delay={0}>
            <div
              className="glass rounded-2xl p-10 text-center"
              style={{ border: "1px solid rgba(6,182,212,0.1)" }}
            >
              <StatCounter target={8} suffix="+" label="hours per week on admin work" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div
              className="glass rounded-2xl p-10 text-center"
              style={{ border: "1px solid rgba(6,182,212,0.1)" }}
            >
              <StatCounter target={25} label="students per class to report on" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div
              className="glass rounded-2xl p-10 text-center"
              style={{ border: "1px solid rgba(6,182,212,0.1)" }}
            >
              <StatCounter target={40} label="school weeks every year" />
            </div>
          </ScrollReveal>
        </div>

        {/* Pull quote */}
        <ScrollReveal delay={0.1}>
          <div className="mt-20 text-center">
            <p
              className="text-xl md:text-2xl font-medium max-w-3xl mx-auto"
              style={{ color: "rgba(250,250,248,0.45)", lineHeight: "1.7" }}
            >
              &ldquo;What if the hours you spend on paperwork could become hours
              you spend on the things that matter?&rdquo;
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #0F0F0F)" }}
      />
    </section>
  );
}
