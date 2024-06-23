import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";

import { cn } from "@/libs/utils";


const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portafolio web",
  description: "Portafolio web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
          <body className={cn('bg-dark text-gray-300', font.className )}>
        
        <main className="lg:pl-[13vw] px-5 lg:px-0 container mx-auto py-5 lg:py-8">
            {children}
            </main>
        </body>
    </html>
  );
}
