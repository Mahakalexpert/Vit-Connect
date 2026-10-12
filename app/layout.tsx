import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: "VIT Connect | Campus Hub Foundation",
  description:
    "Foundation milestone for VIT Connect, a VIT Pune Campus Hub prototype with a reusable design system and application shell.",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-page text-text-primary antialiased">{children}</body>
    </html>
  );
}
