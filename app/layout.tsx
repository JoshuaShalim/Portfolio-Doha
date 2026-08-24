import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import "./readability.css";

const sans = Space_Grotesk({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://joshuashalimportfolio.vercel.app"),
  title: { default: "Joshua Shalim — Full-Stack, Mobile & AI-Focused Developer", template: "%s — Joshua Shalim" },
  description: "Doha-based full-stack developer building web products, mobile applications, backend integrations, automation, and source-grounded AI systems.",
  openGraph: {
    title: "Joshua Shalim — Full-Stack, Mobile & AI-Focused Developer",
    description: "Verified web, mobile, systems integration, and AI engineering case studies.",
    url: "https://joshuashalimportfolio.vercel.app",
    siteName: "Joshua Shalim Portfolio",
    type: "website"
  },
  alternates: { canonical: "/" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={sans.variable}><body>{children}</body></html>;
}
