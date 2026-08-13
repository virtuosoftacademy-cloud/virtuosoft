'use client'

import Image from "next/image";
import Link from "next/link";
import { Sparkles, Play } from "lucide-react";
import Background from "@/public/assets/Images/products/certus/video/background.png";
import CertusLogo from "@/public/assets/Images/products/certus/video/certus-logo-mask.png";

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

        <Button />
      </div>

      <button
        type="button"
        aria-label="Play Certus product walkthrough"
        className="group relative mt-8 flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl border-[4.5px] border-[#0a162c] shadow-2xl"
      >
        <Image src={Background} alt="" fill className="object-cover opacity-60" />
        <div className="relative z-10 flex flex-col items-center gap-5 pt-10">
          <Image src={CertusLogo} alt="Certus" className="h-auto w-56 brightness-0 invert sm:w-72" />
          <span className="flex size-20 items-center justify-center rounded-full bg-primary shadow-xl transition-transform group-hover:scale-110">
            <Play className="size-8 fill-white text-white" />
          </span>
        </div>
        <span className="absolute bottom-4 left-4 rounded-md border border-white/20 bg-[#0f1a2e]/80 px-4 py-2.5 text-xs font-bold text-[#b0c9f7] backdrop-blur">
          Ready to See It Against Your Own Documents?
        </span>
      </button>
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
