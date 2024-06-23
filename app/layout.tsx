import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import Sidebar from "@/components/shared/sidebar";
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
        <Sidebar />
        <main className="pl-[13vw]">{children}</main>
        </body>
    </html>
  );
}
