
import Image from "next/image";
import { Sparkles } from "lucide-react";

import Invoices from "@/public/assets/Images/products/certus/doctypes/invoices.png";
import PurchaseOrders from "@/public/assets/Images/products/certus/doctypes/purchase-orders.png";
import Receipts from "@/public/assets/Images/products/certus/doctypes/receipts.png";
import PassportId from "@/public/assets/Images/products/certus/doctypes/passport-id.png";
import BankStatements from "@/public/assets/Images/products/certus/doctypes/bank-statements.png";
import Cheques from "@/public/assets/Images/products/certus/doctypes/cheques.png";
import CustomsShipping from "@/public/assets/Images/products/certus/doctypes/customs-shipping.png";
import MedicalRecords from "@/public/assets/Images/products/certus/doctypes/medical-records.png";
import InsuranceClaims from "@/public/assets/Images/products/certus/doctypes/insurance-claims.png";
import LegalDocuments from "@/public/assets/Images/products/certus/doctypes/legal-documents.png";

const documentTypes = [
  { label: "Invoices", icon: Invoices },
  { label: "Purchase Orders", icon: PurchaseOrders },
  { label: "Receipts", icon: Receipts },
  { label: "Passport & ID", icon: PassportId },
  { label: "Bank Statements", icon: BankStatements },
  { label: "Cheques", icon: Cheques },
  { label: "Customs & Shipping", icon: CustomsShipping },
  { label: "Medical Records", icon: MedicalRecords },
  { label: "Insurance Claims", icon: InsuranceClaims },
  { label: "Legal Documents", icon: LegalDocuments },
];

export default function Capabilities() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 lg:px-0">
      <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-white px-4 py-1.5 text-xs font-bold text-primary">
        <Sparkles className="size-3.5" /> Advance AI OCR
      </span>

      <h4 className="mt-3 text-3xl leading-tight text-foreground sm:text-4xl md:text-[40px] md:leading-12">
        Not Text Extraction, <span className="font-bold text-primary">Document Understanding</span>
      </h4>

      <p className="mt-4 max-w-4xl text-base leading-relaxed text-muted-foreground">
        Certus identifies vendors, customers, line items, taxes, terms and obligations, validating
        every field against your business rules and enterprise data, then learns from feedback to
        improve over time.
      </p>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-5">
        {documentTypes.map(({ label, icon }) => (
          <div
            key={label}
            className="flex h-40 flex-col items-center justify-center gap-2 rounded-xl border border-primary/15 px-4 py-6 text-center transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-md"
          >
            <Image src={icon} alt={label} className="size-13" width={200} height={200} loading="lazy"/>
            <span className="text-lg font-medium text-foreground">{label}</span>
          </div>
        ))}
      </div>

      <p className="mt-6 text-base text-muted-foreground">
        <span className="text-primary">AI-Powered Classification</span> · Handwritten + Printed ·
        Multi-page · Intelligent Routing
      </p>
    </section>
  );
}
