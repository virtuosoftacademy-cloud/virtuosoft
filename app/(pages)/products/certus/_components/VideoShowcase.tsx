'use client'

import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function VideoShowcase() {
  return (
    <section id="video" className="mx-auto max-w-7xl px-4 py-20 lg:px-0">
      <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-start">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-white px-4 py-1.5 text-xs font-bold text-primary">
            <Sparkles className="size-3.5" /> See It Work
          </span>

          <h4 className="mt-3 text-3xl leading-tight text-foreground sm:text-4xl md:text-[40px] md:leading-12">
            From Document to ERP in 60 Seconds,{" "}
            <span className="font-bold text-primary">Watch the Full Process</span>
          </h4>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            This 3-minute walkthrough shows a real invoice moving through the pipeline: captured
            from the source folder, cleaned, identified, extracted, validated across three AI
            layers, and posted into the ERP. No editing. No narration tricks. Just the system
            running.
          </p>
        </div>

        <div className="relative shrink-0">
          <span className="absolute -left-8 top-1/2 size-18 -translate-y-1/2 rounded-full bg-primary/40 blur-2xl" aria-hidden="true" />
          <Button />
        </div>
      </div>

      <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-2xl border-[4.5px] border-[#0a162c] shadow-2xl">
        <iframe
          className="size-full"
          src="https://www.youtube.com/embed/bYoCsR-rGFE"
          title="Certus product walkthrough"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </section>
  );
}

function Button() {
  return (
    <Link
      href="/contact"
      className="flex h-12 shrink-0 items-center justify-center rounded-lg bg-primary px-6 text-sm font-bold text-white transition-colors hover:bg-primary/90"
    >
      Book a Working Session
    </Link>
  );
}
