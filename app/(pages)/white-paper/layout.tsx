import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Virtuosoft | White Papers",
  description:
    "Discover in-depth research and expert perspectives on AI, digital transformation, emerging technologies, and the trends shaping modern businesses.",
};

interface WhitePaperLayoutProps {
  children: ReactNode;
}

export default function WhitePaperLayout({ children }: WhitePaperLayoutProps) {
  return (
    <div>
      {children}
    </div>
  )
}
