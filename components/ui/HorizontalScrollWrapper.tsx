"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export interface HorizontalScrollWrapperProps {
  children: ReactNode;
  mobileHeight?: string;
  height?: string;
  startOffset?: number;
  /** Accepted for API compatibility with callers (e.g. HistoryTimeline); currently unused. */
  marginTop?: string;
}

export default function HorizontalScrollWrapper({
  children,
  mobileHeight="auto",
  height = "100vh",
  startOffset = 0
 }: HorizontalScrollWrapperProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const viewportWidth = window.innerWidth;

      // ✅ REAL horizontal scroll distance
      const totalScroll =
        track.scrollWidth - viewportWidth + startOffset;

      gsap.fromTo(
        track,
        { x: startOffset },
        {
          x: -totalScroll,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 20%", // starts near center (as you wanted)
            end: `+=${totalScroll}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, [startOffset]);

  return (
    <section
      ref={sectionRef}
      className={`relative overflow-hidden h-[${mobileHeight}] min-[${height}]`} 
    >
      <div ref={trackRef} className="w-max">
        {children}
      </div>
    </section>
  );
}
