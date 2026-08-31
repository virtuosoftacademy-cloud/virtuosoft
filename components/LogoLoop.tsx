import { logos } from "@/app/_constant";
import { motion } from "framer-motion";
import type { MotionProps } from "framer-motion";
import Image from "next/image";

export interface LogoLoopProps {
  animate?: MotionProps["animate"];              // if passed, overrides everything
  direction?: "left" | "right";                   // default = your original direction
  duration?: number;
}

export default function LogoCloud({
  animate,
  direction = "left",
  duration = 40,
}: LogoLoopProps) {
  // Choose animation based on direction (unless custom animate is passed)
  const defaultAnimate: MotionProps["animate"] =
    direction === "right"
      ? { x: ["-50%", "0%"] }                 // left → right scrolling
      : { x: ["0%", "-50%"] };                // right → left scrolling (your original)

  const finalAnimate = animate || defaultAnimate;
  const doubledLogos = [...logos, ...logos]
  return (
    <div className="w-full overflow-hidden">
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
        <motion.div
          className="flex items-center whitespace-nowrap"
          animate={finalAnimate}
          transition={{
            duration: duration,
            ease: "linear",
            repeat: Infinity,
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {doubledLogos.map((logo, i) => (
            // Figma spaces the cells 32.9px apart -> ~16px of padding a side.
            <div
              key={i}
              className="shrink-0 px-3 md:px-4"
            >
              {logo.masked ? (
                // Coloured artwork used as an alpha mask and filled white, so
                // it reads consistently against the dark hero (matches Figma).
                <span
                  role="img"
                  aria-label={logo.alt}
                  className="block h-11 w-32 bg-white opacity-90 transition-opacity duration-300 hover:opacity-100 md:h-13 md:w-36 lg:h-15 lg:w-37.5"
                  style={{
                    maskImage: `url("${logo.src}")`,
                    maskRepeat: "no-repeat",
                    maskPosition: "center",
                    maskSize: "contain",
                    WebkitMaskImage: `url("${logo.src}")`,
                    WebkitMaskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                    WebkitMaskSize: "contain",
                  }}
                />
              ) : (
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={380}
                  height={280}
                  className="h-11 md:h-13 lg:h-15 w-auto max-w-37.5 object-contain opacity-90 transition-opacity duration-300 hover:opacity-100"
                  loading="lazy"
                />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
