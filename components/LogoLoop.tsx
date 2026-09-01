import { logos } from "@/app/_constant";
import { motion } from "framer-motion";
import type { MotionProps } from "framer-motion";
import Image from "next/image";

// Figma fills these logos white through an alpha mask; `bg-white` supplies the
// colour and the artwork supplies the shape.
function maskStyle(src: string): React.CSSProperties {
  return {
    maskImage: `url("${src}")`,
    maskRepeat: "no-repeat",
    maskPosition: "center",
    maskSize: "contain",
    WebkitMaskImage: `url("${src}")`,
    WebkitMaskRepeat: "no-repeat",
    WebkitMaskPosition: "center",
    WebkitMaskSize: "contain",
  };
}

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
  // The track slides by exactly half its own width and resets, so the copy
  // count has to stay EVEN for the reset to land on an identical frame. Four
  // copies keep the row filled edge to edge on displays wider than a single
  // pass of the list, where two would leave a visible gap mid-cycle.
  const loopedLogos = Array.from({ length: 4 }, () => logos).flat()
  return (
    <div className="w-full overflow-hidden">
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen flex">
        {/* `w-max` is what makes the loop seamless: framer-motion resolves a
            percentage `x` against the element's own width, so without it the
            track would size to the viewport and -50% would scroll half a
            screen instead of exactly one copy of the list, jumping on repeat. */}
        <motion.div
          className="flex w-max items-center whitespace-nowrap"
          animate={finalAnimate}
          transition={{
            duration: duration,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {loopedLogos.map((logo, i) => (
            // Figma spaces the cells 32.9px apart -> ~16px of padding a side.
            <div
              key={i}
              className="shrink-0 px-3 md:px-4"
            >
              {logo.companion ? (
                // Figma keeps the mark and its wordmark in one cell rather than
                // treating them as two logos (Eagle Hills: 54x54 + 66x30).
                <span
                  role="img"
                  aria-label={logo.alt}
                  className="flex h-11 items-center gap-1.5 opacity-90 transition-opacity duration-300 hover:opacity-100 md:h-13 lg:h-15"
                >
                  <span className="block aspect-square h-full bg-white" style={maskStyle(logo.src)} />
                  <span className="block h-[56%] w-16 bg-white" style={maskStyle(logo.companion)} />
                </span>
              ) : logo.masked ? (
                // Coloured artwork used as an alpha mask and filled white, so
                // it reads consistently against the dark hero (matches Figma).
                <span
                  role="img"
                  aria-label={logo.alt}
                  className="block h-11 w-32 bg-white opacity-90 transition-opacity duration-300 hover:opacity-100 md:h-13 md:w-36 lg:h-15 lg:w-24"
                  style={maskStyle(logo.src)}
                />
              ) : (
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={580}
                  height={480}
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
