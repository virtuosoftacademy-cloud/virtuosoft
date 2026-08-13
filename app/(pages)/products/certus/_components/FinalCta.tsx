import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Ban, CircleCheck, CircleSlash2, TrendingUp } from "lucide-react";

const highlights = [
  { icon: CircleCheck, label: "No Generic \nDemo" },
  { icon: Ban, label: "No Slide \nDeck" },
  { icon: TrendingUp, label: "Your Documents, Your System, Your Numbers" },
];

export default function FinalCta() {
  return (
    <section className="mx-auto max-w-7xl my-0 lg:my-20  bg-linear-to-b from-primary/5 to-accent/50">
      <div className="mx-auto max-w-4xl text-center py-12 px-2">
        <h4 className="text-3xl sm:text-4xl md:text-[42px] leading-tight text-foreground">
          See It Against Your <span className="font-bold text-primary">Own Documents</span>
        </h4>

        <div className="mt-10 grid grid-cols-1 border-primary/10 border-t border-b sm:grid-cols-3">
          {highlights.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-3 px-10 py-8">
              <Icon className="size-6 text-primary" />
              <h4 className="text-base font-extrabold leading-snug text-foreground whitespace-pre-line">{label}</h4>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 text-sm md:text-base leading-relaxed text-muted-foreground">
          Book a 30-minute working session with the Virtuosoft team. We will walk through your
          actual invoice volume, your current ERP setup and your supplier mix and show you exactly
          what automation looks like for your business specifically.
        </p>

        <div className="mt-8 flex justify-center">
          <Button asChild size="xl" className="rounded-lg">
            <Link href="/contact">Start Your Free POC</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
