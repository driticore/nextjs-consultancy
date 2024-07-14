import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Consultancy Website",
  description: "A consultancy website for potential buyers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
    <body className={cn("bg-background relative h-full w-full antialiased", inter.className)}>
      
      <main className="absolute w-full z-50 overflow-x-hidden">
        <NavBar></NavBar>
        <div className="flex-row flex-1">
          {children}
        </div>
      </main>
      
    </body>
    </html>
  );
}
