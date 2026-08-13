import { Sparkles, CircleCheck } from "lucide-react";

const rows = [
  {
    capability: "Document understanding",
    certus: "Understands semantic meaning and intent",
    ocr: "Simple character recognition only",
  },
  {
    capability: "Validation",
    certus: "Autonomous, rule-based verification",
    ocr: "Costly manual verification cycles",
  },
  {
    capability: "Fraud detection",
    certus: "Native forensic forgery detection",
    ocr: "Requires third-party tools",
  },
  {
    capability: "ERP integration",
    certus: "Native bi-directional connectivity",
    ocr: "Isolated, static output",
  },
  {
    capability: "Workflow automation",
    certus: "Straight-through processing (STP)",
    ocr: "Fragmented manual workflows",
  },
  {
    capability: "Analytics",
    certus: "AI-powered predictive insights",
    ocr: "Basic volumetric reporting",
  },
  {
    capability: "Natural-language assistant",
    certus: "In-app conversational intelligence",
    ocr: "None available",
  },
  {
    capability: "Security",
    certus: "SOC2 Type II & End-to-end encryption",
    ocr: "Standard encryption",
  },
];

export default function ComparisonTable() {
  return (
    <section className="mx-auto max-w-7xl px-4 lg:px-0 py-20">
      <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 px-4 py-1.5 text-xs font-semibold text-primary">
        <Sparkles className="size-3.5" /> The Problem
      </span>

      <h4 className="mt-5 text-3xl sm:text-4xl md:text-[42px] leading-tight text-foreground">
        Certus vs. <span className="font-bold text-primary">Traditional OCR</span>
      </h4>

      <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted-foreground">
        The next generation of document intelligence, engineered for accuracy and enterprise-grade
        performance.
      </p>

      <div className="mt-10 overflow-x-auto rounded-2xl border border-border bg-white shadow-sm">
        <div className="grid min-w-[720px] grid-cols-[1fr_1.4fr_1.4fr]">
          <div className="flex items-end border-b border-border px-6 py-6">
            <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground/70">
              Capability
            </span>
          </div>
          <div className="flex flex-col items-start gap-2 border-b border-border bg-primary/5 px-6 py-6">
            <span className="rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
              Recommended
            </span>
            <span className="text-2xl font-bold text-primary">Certus</span>
          </div>
          <div className="flex items-end border-b border-border px-6 py-6">
            <span className="text-2xl font-bold text-muted-foreground/40">Traditional OCR</span>
          </div>

          {rows.map((row, i) => {
            const border = i === rows.length - 1 ? "" : "border-b border-border";
            return (
              <div key={row.capability} className="contents">
                <div className={`flex items-center px-6 py-6 font-bold text-foreground ${border}`}>
                  {row.capability}
                </div>
                <div className={`flex items-center gap-3 bg-primary/5 px-6 py-6 ${border}`}>
                  <CircleCheck className="size-5 shrink-0 fill-green-500 text-white" />
                  <span className="font-bold text-primary">{row.certus}</span>
                </div>
                <div className={`flex items-center px-6 py-6 text-muted-foreground/70 ${border}`}>
                  {row.ocr}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
