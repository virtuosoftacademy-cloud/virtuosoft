import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Virtuosoft | Tarabut Case Study",
  description:
    "Powering secure open banking innovation — how Virtuosoft partnered with Tarabut to deliver software development and security controls across the MENA region.",
};

interface TarabutCaseStudyLayoutProps {
  children: ReactNode;
}

export default function TarabutCaseStudyLayout({ children }: TarabutCaseStudyLayoutProps) {
  return (
    <div>
      {children}
    </div>
  )
}
