import SectionHeading from "./SectionHeading";
import { ShoppingCart, LineChart, Factory, Users2 } from "lucide-react";

const segments = [
  {
    title: "Retail and FMCG Distribution",
    description: 
    "High-volume invoice processing from dozens of supplier formats including informal channels like WhatsApp POs. Reduce month-end close time by eliminating the manual entry backlog.",
    icon: ShoppingCart,
  },
  {
    title: "Trading and Commodity Houses",
    description: 
    "Multi-entity operations across GCC and Pakistan, each with different ERPs. One system reads every document and posts to the right destination per entity.",
    icon: LineChart,
  },
  {
    title: "Manufacturing and Procurement",
    description: 
    "Complex multi-page POs with line-item-level extraction — SKUs, barcodes, quantities, unit prices. Three-layer validation catches calculation discrepancies before they reach your books.",
    icon: Factory,
  },
  {
    title: "Shared Services and BPOs",
    description: 
    "Centralised document processing for multiple clients. Configurable per-client intake paths, vendor routing and ERP destinations all visible on one dashboard.",
    icon: Users2,
  },
];

export default function CustomerSegments() {
  return (
    <section className="mx-auto max-w-7xl py-20 px-4 lg:px-0">
      <SectionHeading
        eyebrow="Who This is For"
        title={
          <>
            Built for Finance Teams Processing{" "}
            <span className="font-bold text-primary">Documents at Scale</span>
          </>
        }
      />

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {segments.map(({ title, description, icon: Icon }) => (
          <div key={title} className="flex gap-4 rounded-2xl border border-accent bg-white p-6 shadow-sm">
            {/* <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Icon className="size-6" />
            </div> */}
            <div className="pb-30">
              <h4 className="text-base md:text-2xl font-bold text-primary max-w-50">{title}</h4>
              <p className="mt-14 text-sm md:text-base leading-relaxed text-muted-foreground">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
