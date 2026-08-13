import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Virtuosoft | Contact Us",
  description: "Created By Virtuosoft Limited",
};

interface ContactLayoutProps {
  children: ReactNode;
}

export default function AboutLayout({ children }: ContactLayoutProps) {
    return (
        <div>
            {children}
        </div>
    )
}
