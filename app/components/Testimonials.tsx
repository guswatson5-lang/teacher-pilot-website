import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    quote:
      "The report comments sound professional and fit the vibe of a school report perfectly. I can't believe how much time I've saved.",
    author: "Sarah, Primary School Teacher",
    location: "Victoria",
    stars: 5,
  },
  {
    quote:
      "I marked an entire class set in minutes. It would have taken me all evening — honestly life-changing for end of term.",
    author: "Michael, Year 6 Teacher",
    location: "Victoria",
    stars: 5,
  },
  {
    quote:
      "The AI feedback was detailed and genuinely useful for my students. It picks up on things I might have missed after marking 25 books.",
    author: "Emma, Primary Teacher",
    location: "Victoria",
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1 mb-4">
      {[...Array(count)].map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#06B6D4">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      className="relative py-32 overflow-hidden"
      style={{ background: "#0A0A0A" }}
    >
      {/* Top fade */}
      <div
        className="absolute top-0 left-0 right-0 h-20 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, #0F0F0F, transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-4"
              style={{ color: "#06B6D4" }}
            >
              What teachers say
            </p>
            <h2
              className="font-black"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                color: "#FAFAF8",
              }}
            >
              Real teachers.
              <br />
              <span className="text-gradient-cyan">Real results.</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.12}>
              <div
                className="glass rounded-2xl p-8 flex flex-col h-full"
                style={{ border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <StarRating count={t.stars} />
                <p
                  className="text-base leading-relaxed flex-1 mb-6"
                  style={{ color: "rgba(250,250,248,0.75)" }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <div className="font-semibold text-sm" style={{ color: "#FAFAF8" }}>
                    {t.author}
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: "rgba(250,250,248,0.4)" }}>
                    {t.location}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #0F0F0F)" }}
      />
    </section>
  );
}
