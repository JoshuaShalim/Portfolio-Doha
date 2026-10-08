import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import "./readability.css";

const sans = Space_Grotesk({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://joshuashalimportfolio.vercel.app"),
  title: { default: "Joshua Shalim — IT Support & Full-Stack Systems", template: "%s — Joshua Shalim" },
  description: "Doha-based IT support and systems professional with full-stack development, e-commerce operations, mobile, backend integration, and practical troubleshooting experience.",
  openGraph: {
    title: "Joshua Shalim — IT Support & Full-Stack Systems",
    description: "IT support, systems integration, e-commerce, web, mobile, and backend project evidence.",
    url: "https://joshuashalimportfolio.vercel.app",
    siteName: "Joshua Shalim Portfolio",
    type: "website"
  },
  alternates: { canonical: "/" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={sans.variable}><body>{children}</body></html>;
}
