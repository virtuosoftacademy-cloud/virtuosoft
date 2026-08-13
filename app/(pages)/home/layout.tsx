import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Virtuosoft | Home",
  description: "Created By Virtuosoft Limited",
};

interface HomeLayoutProps {
  children: ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
    return (
        <div>
            {children}
        </div>
    )
}

