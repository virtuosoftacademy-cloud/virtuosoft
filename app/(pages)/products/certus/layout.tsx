import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Virtuosoft | Certus",
  description: "Certus turns invoices, receipts, purchase orders and statements into validated, ERP-ready records in seconds — not text extraction, document understanding.",
};

interface CertusLayoutProps {
  children: ReactNode;
}

export default function CertusLayout({ children }: CertusLayoutProps) {
  return (
    <div>
      {children}
    </div>
  )
}
