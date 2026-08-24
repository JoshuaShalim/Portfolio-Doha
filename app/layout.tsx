import type { Metadata } from "next";
import { Space_Grotesk, Instrument_Serif } from "next/font/google";
import "./globals.css";

const sans = Space_Grotesk({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", variable: "--font-serif", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://joshuashalimportfolio.vercel.app"),
  title: { default: "Joshua Shalim — Full-Stack & Mobile Developer", template: "%s — Joshua Shalim" },
  description: "Full-stack and mobile developer in Doha building reliable web, mobile, API, automation, and AI-assisted product experiences.",
  openGraph: {
    title: "Joshua Shalim — Full-Stack & Mobile Developer",
    description: "An interactive portfolio of web, mobile, systems integration, and AI-assisted engineering work.",
    url: "https://joshuashalimportfolio.vercel.app",
    siteName: "Joshua Shalim Portfolio",
    type: "website"
  },
  alternates: { canonical: "/" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${sans.variable} ${serif.variable}`}><body>{children}</body></html>;
}
