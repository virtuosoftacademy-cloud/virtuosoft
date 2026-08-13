import { cn } from "@/lib/utils";
import Image from "next/image";
import type { ReactNode } from "react";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "left" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-flex items-center rounded-full border px-4 py-1.5 text-xs font-semibold tracking-wide gap-2",
            light
              ? "border-white/20 text-white/80 bg-white/5"
              : "border-primary/20 text-primary bg-primary/5"
          )}
        >
          <Image src="/assets/Images/products/certus/star.png" alt="star" width={500} height={800} priority className="w-3.5" />
          {eyebrow}
        </span>
      )}
      <h4
        className={cn(
          "text-3xl sm:text-4xl md:text-[42px] leading-tight",
          light ? "text-white" : "text-foreground"
        )}
      >
        {title}
      </h4>
      {subtitle && (
        <p
          className={cn(
            "max-w-4xl text-base md:text-lg leading-relaxed text-muted-foreground whitespace-normal")}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
