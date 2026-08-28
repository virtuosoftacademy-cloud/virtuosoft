import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Virtuosoft | Certus",
  description:
    "Certus turns invoices, receipts, purchase orders and statements into validated, ERP-ready records in seconds — combining OCR, LLMs and Agentic AI in a single platform, with every extracted value traceable to the exact spot it was read from.",
};

interface CertusLayoutProps {
  children: ReactNode;
}

export default function CertusLayout({ children }: CertusLayoutProps) {
  return <div>{children}</div>;
}
