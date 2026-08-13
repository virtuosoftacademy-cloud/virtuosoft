import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Virtuosoft | Our Team",
  description: "Created By Virtuosoft Limited",
};

interface TeamLayoutProps {
  children: ReactNode;
}

export default function TeamLayout({ children }: TeamLayoutProps) {
    return (
        <div>
            {children}
        </div>
    )
}
