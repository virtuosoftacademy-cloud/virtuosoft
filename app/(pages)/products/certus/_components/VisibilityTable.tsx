import Image from "next/image";
import { Sparkles } from "lucide-react";
import AllProcessFiles from "@/public/assets/Images/products/certus/dashboard/all-process-files.png";
import CertusLogo from "@/public/assets/Images/products/certus/dashboard/certus-logo-overlay.png";

const tags = [
  { label: "Live System", active: true },
  { label: "Daily Report", active: false },
  { label: "When Some Thing Needs a Human", active: false },
];

export default function VisibilityTable() {
  return (
    <section className="bg-accent/40 py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-0">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-white px-4 py-1.5 text-xs font-bold text-primary">
          <Sparkles className="size-3.5" /> Smart Document Processing
        </span>

        <h4 className="mt-3 text-3xl leading-tight text-foreground sm:text-4xl md:text-[40px] md:leading-12">
          One Platform. Every Document.{" "}
          <span className="font-bold text-primary">Complete Visibility</span>
        </h4>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Track every invoice and purchase order, organize documents automatically, receive daily
          reports and ensure nothing slips through the cracks.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {tags.map(({ label, active }) => (
            <span
              key={label}
              className={`rounded-xl px-4 py-2.5 text-xs font-bold ${
                active ? "bg-primary text-white" : "border border-primary text-primary"
              }`}
            >
              {label}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start gap-10 lg:flex-row lg:gap-16">
          <div className="lg:w-[362px] lg:shrink-0">
            <h4 className="text-3xl font-bold leading-tight text-foreground">
              Every Document, Sorted <span className="text-primary">by Company</span>
            </h4>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Certus keeps every document organized by company, automatically. No folders to
              manage, no manual sorting. Open any company and see every invoice or purchase order
              it has processed, and whether it went through clean.
            </p>
          </div>

          <div className="relative w-full overflow-hidden rounded-2xl border border-primary/10 shadow-[0_4px_35px_0_rgba(0,81,228,0.15)]">
            <Image src={AllProcessFiles} alt="Certus dashboard — every document, sorted by company" className="w-full" />
            <Image
              src={CertusLogo}
              alt="Certus"
              className="absolute left-4 top-3 h-6 w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
