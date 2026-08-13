import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Virtuosoft | Blogs",
  description: "Created By Virtuosoft Limited",
};

interface BlogLayoutProps {
  children: ReactNode;
}

export default function BlogLayout({ children }: BlogLayoutProps) {
    return (
        <div>
            {children}
        </div>
    )
}
