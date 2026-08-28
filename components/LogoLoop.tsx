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
            <div
              key={i}
              className="shrink-0 px-6 md:px-10 lg:px-12"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={380}
                height={280}
                className="h-10 md:h-12 lg:h-14 w-auto max-w-[160px] object-contain transition-all duration-300 contrast-0 brightness-100"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
