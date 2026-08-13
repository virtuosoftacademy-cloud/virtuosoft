"use client";

import type { ReactNode } from "react";
import HorizontalScrollWrapper from "./HorizontalScrollWrapper";

export interface HorizontalScrollProps {
  text: ReactNode;
}

export default function HorizontalScroll({ text }: HorizontalScrollProps) {
  return (
    <HorizontalScrollWrapper
      startOffset={
        typeof window !== "undefined" && window.innerWidth < 640
          ? window.innerWidth * 0.4 // mobile tighter start
          : window.innerWidth * 0.6 // desktop unchanged
      }
      height="100vh"
      mobileHeight="10vh"
    >
      <h2
        className="
          whitespace-nowrap text-gray-900

          /* MOBILE */
          text-[35vw]

          /* SMALL TABLET */
          sm:text-[30vw]

          /* TABLET */
          md:text-[25vw]

          px-12 sm:px-16 md:px-24
        "
      >
        <strong>
          <em>
            {text}
          </em>
        </strong>
      </h2>
    </HorizontalScrollWrapper>
  );
}
