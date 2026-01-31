
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Unfinished Ideas | Where Ideas Don't Die",
  description: "The world’s most searchable, discoverable, and structured database of unfinished ideas. Find your next project today.",
  keywords: ["startup ideas", "project ideas", "developer projects", "unfinished ideas", "business ideas"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <div className="fixed inset-0 z-[-1] pointer-events-none">
          <div className="absolute inset-0 bg-[#0a0a0a] opacity-80"></div>
          <div className="absolute inset-0 bg-[url('/background-constellations.png')] bg-cover bg-center opacity-60 mix-blend-screen"></div>
        </div>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <footer className="border-t py-6 md:py-0">
          <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row mx-auto px-4">
            <p className="text-sm text-balance text-center leading-loose text-muted-foreground md:text-left">
              Built by <span className="font-medium underline underline-offset-4">DENWIN</span>. The source code is available on <a href="https://github.com/DUKE21-BYTE/UNFINISHED-BUSINESS.git" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">GitHub</a>.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
