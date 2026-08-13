import Image from "next/image";
import { Sparkles } from "lucide-react";
import IntelligentDocumentProcessingIcon from "@/public/assets/Images/products/certus/capabilities/intelligent-document-processing.png";
import AdvancedAiOcrIcon from "@/public/assets/Images/products/certus/capabilities/advanced-ai-ocr.png";
import IntelligentDataExtractionIcon from "@/public/assets/Images/products/certus/capabilities/intelligent-data-extraction.png";
import AiValidationVerificationIcon from "@/public/assets/Images/products/certus/capabilities/ai-validation-verification.png";
import WorkflowAutomationIcon from "@/public/assets/Images/products/certus/capabilities/workflow-automation.png";
import EnterpriseIntegrationsIcon from "@/public/assets/Images/products/certus/capabilities/enterprise-integrations.png";

const capabilities = [
  {
    title: "Intelligent Document Processing",
    description: "Sorts every document and sends it to the right place, whatever the format.",
    icon: IntelligentDocumentProcessingIcon,
  },
  {
    title: "Advanced AI OCR",
    description: "Reads the important numbers and details from any document.",
    icon: AdvancedAiOcrIcon,
  },
  {
    title: "Intelligent Data Extraction",
    description: "Pulls out vendors, line items, VAT, due dates and bank details.",
    icon: IntelligentDataExtractionIcon,
  },
  {
    title: "AI Validation & Verification",
    description: "Catches duplicates and fraud and matches invoices to POs.",
    icon: AiValidationVerificationIcon,
  },
  {
    title: "Workflow Automation",
    description: "Handles approvals and sign-offs, with a full record of who did what.",
    icon: WorkflowAutomationIcon,
  },
  {
    title: "Enterprise Integrations",
    description: "Ask a question in plain language, get the answer from your documents.",
    icon: EnterpriseIntegrationsIcon,
  },
];

export default function PlatformCapabilities() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 lg:px-0">
      <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-white px-4 py-1.5 text-xs font-bold text-primary">
        <Sparkles className="size-3.5" /> Capabilities
      </span>

      <h4 className="mt-3 text-3xl leading-tight text-foreground sm:text-4xl md:text-[40px] md:leading-12">
        One Platform, <span className="font-bold text-primary">Eight Capabilities</span>
      </h4>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map(({ title, description, icon }) => (
          <div
            key={title}
            className="flex flex-col gap-5 rounded-2xl border border-primary/10 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-md"
          >
            <Image src={icon} alt="" className="size-10" />
            <div>
              <p className="text-2xl font-bold leading-8 text-primary">{title}</p>
              <p className="mt-1 text-base leading-relaxed text-muted-foreground">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
