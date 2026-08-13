import { Sparkles, ClockArrowDown, ClockArrowUp, ArrowRight } from "lucide-react";

export default function ManualVsAutomated() {
  return (
    <section className="bg-accent/40 py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 lg:grid-cols-2 lg:px-0">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-white px-4 py-1.5 text-xs font-bold text-primary">
            <Sparkles className="size-3.5" /> The Problem
          </span>

          <h4 className="mt-3 text-3xl leading-tight text-foreground sm:text-4xl md:text-[40px] md:leading-[48px]">
            Your Teams Are Still Processing{" "}
            <span className="font-bold text-primary">Documents by Hand</span>
          </h4>

          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
            A single invoice can take up to an hour to process manually, opening it, matching it
            to a PO, and keying every line into the ERP, one keystroke away from a wrong number
            reaching the books.
          </p>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
            Suppliers send scanned PDFs, rotated pages and inconsistent formats. Errors slip
            through until an auditor finds them, often with no dashboard, no alert and no
            visibility.
          </p>
        </div>

        <div className="relative p-4">
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-primary/20 blur-2xl" />

          <p className="text-xs font-medium text-primary/80 pl-2">Per Document</p>

          <div className="mt-2 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-5">
            <div className="flex flex-1 items-center gap-4 rounded-2xl border border-border bg-white px-5 py-5 shadow-sm">
              <ClockArrowDown className="size-11 shrink-0 text-primary" />
              <div>
                <p className="text-[28px] font-bold leading-[40px] text-foreground">60 Min</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  Today, your team spends 60 minutes per document, opening it, checking it,
                  typing it in.
                </p>
              </div>
            </div>

            <ArrowRight className="size-8 shrink-0 rotate-90 text-primary/40 sm:rotate-0 self-center" />

            <div className="flex flex-1 items-center gap-4 rounded-xl bg-primary px-5 py-5 shadow-sm">
              <ClockArrowUp className="size-11 shrink-0 text-white" />
              <div>
                <p className="text-[28px] font-bold leading-[40px] text-white">6 Sec</p>
                <p className="mt-1 text-xs leading-relaxed text-white/70">
                  Certus does the same job in 6 seconds. No data entry. No manual work.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-border bg-white px-5 py-4 shadow-sm">
            <p className="text-base leading-relaxed text-muted-foreground">
              Certus reads documents the way a trained reviewer would, checking its own work
              three separate times, and posting only what it can verify.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
