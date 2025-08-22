import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono, Instrument_Serif, Space_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const sans = Bricolage_Grotesque({
  variable: "--font-sans",
  subsets: ["latin"],
});

const serif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
});

const mono = Space_Mono({
  variable: "--font-mono",  
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Zypp Protocol - The first DropFi Protocol on Solana",
  description: "Zypp Protocol is the first DropFi protocol on Solana, powering P2P transactions offline.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
      <ThemeProvider defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
