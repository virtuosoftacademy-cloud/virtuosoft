import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Virtuosoft | Careers",
  description: "Created By Virtuosoft Limited",
};

interface CareersLayoutProps {
  children: ReactNode;
}

export default function CareersLayout({ children }: CareersLayoutProps) {
    return (
        <div>
            {children}
        </div>
    )
}
