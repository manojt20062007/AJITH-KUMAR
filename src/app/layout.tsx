import "./globals.css";
import "./ditto-chrome.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";
import { ThemeToggleButton } from "./components/ThemeToggleButton";
import { Preloader } from "./components/Preloader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { cn } from "../lib/utils";
import { CustomCursor } from "./components/custom-cursor";

// Define the fallback origin or use SITE_ORIGIN
const siteUrl = SITE_ORIGIN || "https://ajithkumarak.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AJITH KUMAR PORTFOLIO",
    template: "%s | AJITH KUMAR PORTFOLIO",
  },
  description:
    "Ajith Kumar Studio delivers premium Hollywood-grade ROTO, PREP, COMPOSITING, MATCH MOVE, and DIGITAL CLEANUP.",
  keywords: [
    "Ajith Kumar",
    "Portfolio",
    "VFX",
    "ROTO",
    "PREP",
    "COMPOSITING",
    "MATCH MOVE",
    "DIGITAL CLEANUP",
    "Visual Effects",
  ],
  authors: [{ name: "Ajith Kumar" }],
  creator: "Ajith Kumar",

  // Favicon & Icons Configuration
  icons: {
    icon: [
      {
        url: "/assets/cloned/images/b0adffef7d54.png",
        type: "image/png",
      },
    ],
    shortcut: "/assets/cloned/images/b0adffef7d54.png",
    apple: "/assets/cloned/images/b0adffef7d54.png",
  },

  // Open Graph configuration (for WhatsApp, LinkedIn, Facebook, etc.)
  openGraph: {
    title: "AJITH KUMAR PORTFOLIO",
    description:
      "Ajith Kumar Studio delivers premium Hollywood-grade ROTO, PREP, COMPOSITING, MATCH MOVE, and DIGITAL CLEANUP.",
    url: siteUrl,
    siteName: "AJITH KUMAR PORTFOLIO",
    images: [
      {
        url: "/assets/cloned/images/b0adffef7d54.png",
        width: 1200,
        height: 630,
        alt: "AJITH KUMAR PORTFOLIO Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Card configuration
  twitter: {
    card: "summary_large_image",
    title: "AJITH KUMAR PORTFOLIO",
    description:
      "Ajith Kumar Studio delivers premium Hollywood-grade ROTO, PREP, COMPOSITING, MATCH MOVE, and DIGITAL CLEANUP.",
    images: ["/assets/cloned/images/b0adffef7d54.png"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="cn0" data-cid="n0">
        <CustomCursor />
        <Preloader />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
