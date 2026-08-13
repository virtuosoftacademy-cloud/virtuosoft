'use client'

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileText, LayoutDashboard, ShieldCheck, Landmark, Factory, ShoppingBag } from "lucide-react";
import Image from "next/image";

const trustIndustries = [
  { label: "Banking & Fintech", icon: Landmark },
  { label: "Manufacturing", icon: Factory },
  { label: "Retail & FMCG", icon: ShoppingBag },
  { label: "Enterprise Finance", icon: ShieldCheck },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-white to-accent/40 pt-16 md:pt-24 ">
      <div className="mx-auto max-w-7xl px-4 lg:px-0">
        <div className="flex justify-between items-center flex-wrap md:flex-nowrap gap-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <span className="inline-flex items-center rounded-full border border-primary/20 gap-2 bg-primary/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary">
            <Image src="/assets/Images/products/certus/star.png" alt="star" width={500} height={800} priority  className="w-5"/>
              AI-Powered Document Intelligence
            </span>
            <h4 className="mt-5 text-3xl sm:text-4xl md:text-5xl leading-[1.05] text-foreground">
              Transform Documents Into{" "}
              <span className="font-bold text-primary">Actionable Intelligence</span>
            </h4>
            <p className="mt-6 text-sm md:text-lg font-light leading-relaxed text-muted-foreground whitespace-pre-line">
              Every organization generates thousands of business documents a day. Certus
              combines AI, LLMs, intelligent OCR, computer vision, machine learning and
              Agentic AI into a single enterprise platform.
              {"\n"}
              Rather than simply extracting text, Certus understands the content, context,
              relationships and business intent behind every document — then classifies,
              extracts, validates, detects fraud, routes for approval, integrates with your
              systems and delivers real-time BI, with minimal human intervention.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="xl" className="rounded-lg hover:bg-accent hover:text-primary hover:border-2 border-primary">
                <Link href="/contact">Book a Working Session</Link>
              </Button>
              <Button
                type="button"
                onClick={() => document.getElementById("video")?.scrollIntoView({ behavior: "smooth", block: "start" })}
                className="rounded-lg py-7 bg-accent text-primary hover:text-accent border-2 border-primary!"
              >
                Watch 4 Min Demo
              </Button>
            </div>
          </div>

          <div className="relative hidden lg:block ">
            <div className="absolute -z-10" />
            {/* <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-2xl shadow-primary/10"> */}
            <Image src="/assets/Images/products/certus/heroImg.png" alt="heroImg" width={400} height={200}  className="w-[835rem]"/>
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
