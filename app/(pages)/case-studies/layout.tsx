import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Virtuosoft | Our Success Stories",
  description:
    "Explore how Virtuosoft has helped businesses transform through innovative custom software solutions — from open banking and enterprise IT service management to conversational data agents.",
};

interface CaseStudyDetailLayoutProps {
  children: ReactNode;
}

export default function CaseStudyDetailLayout({ children }: CaseStudyDetailLayoutProps) {
  return <div>{children}</div>;
}
