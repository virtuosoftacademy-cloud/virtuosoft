import type { ReactNode } from "react";
import "./globals.css";


interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
