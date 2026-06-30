import { useEffect, useRef, useState } from "react";

/**
 * useReveal
 * Lightweight IntersectionObserver based scroll-reveal hook.
 * Mirrors the "fade-up on scroll" animation pattern used across
 * the ssaircons.vercel.app partner pages (e.g. /our-partners/symphony).
 */
export function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}

/**
 * Reveal
 * Wrap any block of content to animate it in on scroll.
 * direction: "up" | "left" | "right" | "fade"
 * delay: stagger delay in ms
 */
export function Reveal({ children, direction = "up", delay = 0, className = "" }) {
  const [ref, visible] = useReveal();

  const base = "transition-all duration-700 ease-out will-change-transform";
  const hidden = {
    up: "opacity-0 translate-y-10",
    left: "opacity-0 -translate-x-10",
    right: "opacity-0 translate-x-10",
    fade: "opacity-0",
  }[direction];
  const shown = "opacity-100 translate-y-0 translate-x-0";

  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={`${base} ${visible ? shown : hidden} ${className}`}
    >
      {children}
    </div>
  );
}

/** Stagger a list of children with incremental delay */
export function StaggerGroup({ children, step = 90, direction = "up" }) {
  return (
    <>
      {children.map((child, i) => (
        <Reveal key={i} direction={direction} delay={i * step}>
          {child}
        </Reveal>
      ))}
    </>
  );
}
