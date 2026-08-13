import SectionHeading from "./SectionHeading";
import {
  Landmark,
  Building,
  HeartPulse,
  ShieldCheck,
  ShoppingBag,
  Factory,
  Fuel,
  Warehouse,
  Radio,
  GraduationCap,
} from "lucide-react";

const industries = [
  { label: "Banking & Fintech", description: "Secure digital banking and financial innovation at scale.", icon: Landmark },
  { label: "Government", description: "Modern digital services for connected public institutions.", icon: Building },
  { label: "Healthcare", description: "Technology that improves patient care and clinical outcomes.", icon: HeartPulse },
  { label: "Insurance", description: "Smarter insurance platforms with seamless customer experiences.", icon: ShieldCheck },
  { label: "Retail", description: "Driving growth through connected commerce and retail innovation.", icon: ShoppingBag },
  { label: "Manufacturing", description: "Intelligent manufacturing powered by automation and analytics.", icon: Factory },
  { label: "Oil, Gas and Energy", description: "Digital solutions for efficient and sustainable energy operations.", icon: Fuel },
  { label: "Logistics", description: "Connected logistics with smarter supply chain management.", icon: Warehouse },
  { label: "Telecommunications", description: "Reliable network solutions for the connected world.", icon: Radio },
  { label: "Education", description: "Empowering modern education through digital learning experiences.", icon: GraduationCap },
];

export default function Industries() {
  return (
    <section className="mx-auto max-w-7xl px-4 lg:px-0 py-20">
      <SectionHeading
        eyebrow="Industry Solutions"
        title={
          <>
            Built for Document-heavy <span className="font-bold text-primary">Industries</span>
          </>
        }
      />

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map(({ label, icon: Icon, description }) => (
          <div
            key={label}
            className="flex gap-3 rounded-sm border border-border bg-white px-5 py-5 shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
          >
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Icon className="size-5" />
            </div>
            <div>
              <span className="text-lg md:text-2xl font-semibold text-foreground">{label}</span>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
