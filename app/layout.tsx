import type { ReactNode } from "react";
import { Host_Grotesk, Sofia_Sans_Condensed } from "next/font/google";
import "./globals.css";

const Sofia_Sans_Cond = Sofia_Sans_Condensed({
  variable: "--font-sofia-condensed-sans",
  weight: ["400","700"],
  display: 'swap',
  subsets: ['latin']
});

const Host_Grot = Host_Grotesk({
  variable: "--font-host-grotesk-sans",
  weight: ["300","400","500","600","700","800"],
  display: 'swap',
  subsets: ['latin']
});

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${Sofia_Sans_Cond.variable} ${Host_Grot.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
