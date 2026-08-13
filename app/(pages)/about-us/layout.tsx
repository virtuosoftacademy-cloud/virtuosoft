import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Virtuosoft | About Us",
  description: "Created By Virtuosoft Limited",
};

interface AboutLayoutProps {
  children: ReactNode;
}

export default function AboutLayout({ children }: AboutLayoutProps) {
    return (
        <div>
            {children}
        </div>
    )
}
