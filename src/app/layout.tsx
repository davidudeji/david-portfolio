import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.davidudeji.dev"),
  title: "David Udeji | Full-stack developer",
  description:
    "I build whole systems, from interface to database. Full-stack developer in Nigeria building products that hold up under real use.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "David Udeji | Full-stack developer",
    description:
      "I build whole systems, from interface to database. Full-stack developer in Nigeria building products that hold up under real use.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
