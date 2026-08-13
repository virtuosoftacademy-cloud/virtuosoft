import { Sparkles } from "lucide-react";
import CountUp from "@/components/ui/CountUp";

const stats = [
  { to: 99.2, suffix: "%", label: "Straight-through Automation Rate" },
  { to: 40000, suffix: "+", label: "Documents Processed End-to-end", separator: "," },
  { to: 106, suffix: "", label: "Flagged before reaching the ERP" },
  { to: 10, suffix: "", label: "Supplier Formats Handled" },
  { to: 60, suffix: "×", label: "Speed Improvement Per Document" },
];

export default function LiveStats() {
  return (
    <section className="mx-auto max-w-7xl px-4 lg:px-0 py-10">
      <div className="rounded-3xl bg-linear-to-br from-primary to-[#001233] px-8 py-14 sm:px-14 sm:py-16">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-primary">
          <Sparkles className="size-3.5" /> Production Numbers
        </span>

        <h4 className="mt-6 text-3xl sm:text-4xl md:text-[42px] leading-tight text-white">
          Not Projections, <span className="font-bold">A Live Production Run</span>
        </h4>

        <p className="mt-4 max-w-4xl text-base font-light leading-relaxed text-white/80">
          These figures come from a live enterprise deployment in the GCC, not a lab, not a pilot
          with hand-picked clean data. Every one of the 106 flagged documents was caught by the
          three-layer engine and safely routed for human review, never posted, never lost. Certus
          knows the difference between a document it can trust and one it cannot, and it never
          guesses.
        </p>

        <div className="mt-14 grid grid-cols-2 gap-x-10 gap-y-10 sm:grid-cols-3 sm:gap-x-16">
          {stats.map(({ to, suffix, label, separator }) => (
            <div key={label}>
              <p className="flex items-baseline text-4xl sm:text-5xl font-extrabold text-white">
                <CountUp to={to} duration={1.5} separator={separator} />
                {suffix}
              </p>
              <p className="mt-2 text-sm font-bold text-white/90">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
