"use client";

import { useEffect, useRef, useState } from "react";

interface StatCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
}

export default function StatCounter({
  target,
  suffix = "",
  prefix = "",
  label,
  duration = 2200,
}: StatCounterProps) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [started, target, duration]);

  return (
    <div ref={ref} className="text-center">
      <div
        className="stat-number font-black leading-none mb-3"
        style={{
          fontSize: "clamp(3.5rem, 8vw, 6rem)",
          color: "#F59E0B",
        }}
      >
        {prefix}{count}{suffix}
      </div>
      <div className="text-base md:text-lg font-medium" style={{ color: "rgba(250,250,248,0.55)" }}>
        {label}
      </div>
    </div>
  );
}
