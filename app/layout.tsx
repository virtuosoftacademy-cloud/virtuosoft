import type { ReactNode } from "react";
import "./globals.css";

const fonturl = "public/assets/fonts/HelveticaNowDisplay"
const Helvetica_Now_Display = {
  src: [
    { path: `${fonturl}/HelveticaNowDisplay-Thin.otf`, weight: "100", style: "normal" },
    { path: `${fonturl}/HelveticaNowDisplay-ThinIta.otf`, weight: "100", style: "italic" },
    { path: `${fonturl}/HelveticaNowDisplay-ExtLt.otf`, weight: "200", style: "normal" },
    { path: `${fonturl}/HelveticaNowDisplay-ExtLtIta.otf`, weight: "200", style: "italic" },
    { path: `${fonturl}/HelveticaNowDisplay-Light.otf`, weight: "300", style: "normal" },
    { path: `${fonturl}/HelveticaNowDisplay-LightIta.otf`, weight: "300", style: "italic" },
    { path: `${fonturl}/HelveticaNowDisplay-Regular.otf`, weight: "400", style: "normal" },
    { path: `${fonturl}/HelveticaNowDisplay-RegIta.otf`, weight: "400", style: "italic" },
    { path: `${fonturl}/HelveticaNowDisplay-Medium.otf`, weight: "500", style: "normal" },
    { path: `${fonturl}/HelveticaNowDisplay-MedIta.otf`, weight: "500", style: "italic" },
    { path: `${fonturl}/HelveticaNowDisplay-Bold.otf`, weight: "700", style: "normal" },
    { path: `${fonturl}/HelveticaNowDisplay-BoldIta.otf`, weight: "700", style: "italic" },
    { path: `${fonturl}/HelveticaNowDisplay-ExtraBold.otf`, weight: "800", style: "normal" },
    { path: `${fonturl}/HelveticaNowDisplay-ExtBdIta.otf`, weight: "800", style: "italic" },
    { path: `${fonturl}/HelveticaNowDisplay-ExtBlk.otf`, weight: "900", style: "normal" },
    { path: `${fonturl}/HelveticaNowDisplay-ExtBlkIta.otf`, weight: "900", style: "italic" },
  ],
  variable: "--font-helvetica-now-display",
  display: "swap",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${Helvetica_Now_Display.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
