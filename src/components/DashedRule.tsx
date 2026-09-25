"use client";

import { useEffect, useRef, useState } from "react";

export function DashedRule() {
  const ref = useRef<HTMLDivElement>(null);
  const [draw, setDraw] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setDraw(true);
          observer.disconnect();
        }
      },
      { threshold: 0.8 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className={draw ? "rule rule-draw" : "rule"} />;
}
