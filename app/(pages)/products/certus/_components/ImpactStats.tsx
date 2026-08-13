import { Sparkles, CircleCheck } from "lucide-react";
import CountUp from "@/components/ui/CountUp";

const stats = [
  {
    to: 95,
    label: "Less Data Entry",
    highlight: true,
    points: ["Reduced processing costs", "Less fraud & duplicate payments"],
  },
  {
    to: 90,
    label: "Faster",
    highlight: false,
    points: ["Faster invoice approvals", "Real-time business insight"],
  },
  {
    to: 99,
    label: "Reading Accuracy",
    highlight: false,
    points: ["Compliance & audit readiness", "Higher operational efficiency"],
  },
];

export default function ImpactStats() {
  return (
    <section className="mx-auto max-w-7xl px-4 lg:px-0 py-20">
      <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 px-4 py-1.5 text-xs font-semibold text-primary">
        <Sparkles className="size-3.5" /> Business Benefits
      </span>

      <h4 className="mt-5 text-3xl sm:text-4xl md:text-[42px] leading-tight text-foreground">
        Measurable Impact, <span className="font-bold text-primary">From Day One</span>
      </h4>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {stats.map(({ to, label, highlight, points }) => (
          <div key={label} className="rounded-2xl border border-border bg-white px-8 py-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/70">
              Up To
            </p>
            <p className={`mt-2 text-5xl font-extrabold ${highlight ? "text-primary" : "text-foreground"}`}>
              <CountUp to={to} duration={1.5} />%
            </p>
            <p className="mt-3 text-lg font-extrabold uppercase tracking-wide text-foreground">
              {label}
            </p>

            <ul className="mt-4 flex flex-col gap-2.5">
              {points.map((point) => (
                <li key={point} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CircleCheck className="size-4 shrink-0 text-primary" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
