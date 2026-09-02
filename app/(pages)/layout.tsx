import type { ReactNode } from "react";
import type { Metadata } from "next";
import Footer from "@/components/common/Footer"
import Nav from "@/components/common/Nav"
import BackToTop from "@/components/ui/backtotop"
import { Toaster } from "@/components/ui/sonner"
import { Lenis } from "lenis/react";

export const metadata: Metadata = {
  title: "Virtuosoft | Home",
  description: "Created By Virtuosoft Limited",
};

interface LayoutPagesProps {
  children: ReactNode;
}

function LayoutPages({ children }: LayoutPagesProps) {
  return (
    <div>
      <Nav />
      <Lenis root>
        {children}
      </Lenis>
      <BackToTop />
      <Footer />
      <Toaster richColors position="top-right" closeButton />
    </div>
  )
}

export default LayoutPages
