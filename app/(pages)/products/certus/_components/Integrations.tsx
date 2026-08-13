import Image, { type StaticImageData } from "next/image";
import { Sparkles } from "lucide-react";
import Sap from "@/public/assets/Images/products/certus/integrations/sap.png";
import Oracle from "@/public/assets/Images/products/certus/integrations/oracle.png";
import Dynamics365 from "@/public/assets/Images/products/certus/integrations/dynamics365.png";
import Workday from "@/public/assets/Images/products/certus/integrations/workday.png";
import Odoo from "@/public/assets/Images/products/certus/integrations/odoo.png";
import Sage from "@/public/assets/Images/products/certus/integrations/sage.png";
import QuickBooks from "@/public/assets/Images/products/certus/integrations/quickbooks.png";
import Xero from "@/public/assets/Images/products/certus/integrations/xero.png";
import PowerBi from "@/public/assets/Images/products/certus/integrations/powerbi.png";
import Tableau from "@/public/assets/Images/products/certus/integrations/tableau.png";
import RestApi from "@/public/assets/Images/products/certus/integrations/restapi.png";
import Webhooks from "@/public/assets/Images/products/certus/integrations/webhooks.png";

interface IntegrationGroup {
  category: string;
  logos: { name: string; src: StaticImageData; className?: string }[];
}

const groups: IntegrationGroup[] = [
  {
    category: "Education",
    logos: [
      { name: "SAP", src: Sap, className: "h-30 w-auto" },
      { name: "Oracle Cloud ERP", src: Oracle, className: "h-24 w-auto" },
      { name: "Microsoft Dynamics 365", src: Dynamics365, className: "h-24 w-auto" },
      { name: "Workday", src: Workday, className: "h-26 w-auto" },
      { name: "Odoo", src: Odoo, className: "h-22 w-auto" },
    ],
  },
  {
    category: "Accounting",
    logos: [
      { name: "Sage", src: Sage, className: "h-22 w-auto" },
      { name: "QuickBooks", src: QuickBooks, className: "h-18 w-auto" },
      { name: "Xero", src: Xero, className: "h-18 w-auto" },
    ],
  },
  {
    category: "Analytics & Connectivity",
    logos: [
      { name: "Power BI", src: PowerBi, className: "h-24 w-auto" },
      { name: "Tableau", src: Tableau, className: "h-18 w-auto" },
      { name: "REST API", src: RestApi, className: "h-24 w-auto" },
      { name: "Webhooks", src: Webhooks, className: "h-18 w-auto" },
    ],
  },
];

export default function Integrations() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 lg:px-0">
      <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-white px-4 py-1.5 text-xs font-bold text-primary">
        <Sparkles className="size-3.5" /> Works With Your Stack
      </span>

      <h4 className="mt-3 text-3xl leading-tight text-foreground sm:text-4xl md:text-[40px] md:leading-12">
        Posts to the ERP or Accounting Software{" "}
        <span className="font-bold text-primary">You Already Run</span>
      </h4>

      <p className="mt-4 max-w-4xl text-base leading-relaxed text-muted-foreground">
        Certus maps validated data to your existing system SAP, Oracle, Microsoft Dynamics, or a
        regional accounting platform. The production deployment posted to SAP; additional ERP
        destinations are supported by the platform architecture and scoped per client environment.
        You do not need to change your stack. The system adapts to yours.
      </p>

      <div className="mt-10 flex flex-col gap-8">
        {groups.map(({ category, logos }) => (
          <div key={category} className="flex flex-col gap-5">
            <h4 className="text-2xl font-bold text-foreground">{category}</h4>
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 lg:gap-6">
              {logos.map(({ name, src, className }) => (
                <div
                  key={name}
                  className="flex h-40 w-40 sm:h-[140px] sm:w-[230px] items-center justify-center rounded-xl bg-[#fbfdff] p-2"
                >
                  <Image src={src} alt={name} className={className ?? "h-12 w-auto"} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
