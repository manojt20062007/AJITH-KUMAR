import "./globals.css";
import "./ditto-chrome.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";
import { ThemeToggleButton } from "./components/ThemeToggleButton";
import { Preloader } from "./components/Preloader";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "FOCUS VFX STUDIO | Premium ROTO & Post Production",
  "description": "Focus VFX Studio delivers premium Hollywood-grade ROTO, CGI, Motion Graphics, and Post Production solutions for films and advertisements.",
  "icons": {
    "icon": [
      {
        "url": "/assets/cloned/images/b0adffef7d54.png",
        "type": "image/png"
      }
    ]
  }
};
export const viewport = {
  "width": "device-width",
  "initialScale": 1
};


import { cn } from "../lib/utils";


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={"en"}>
      <body className="cn0" data-cid="n0">
        <Preloader />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
