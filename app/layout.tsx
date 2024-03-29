import type { Metadata } from "next";
import { Syne } from "next/font/google";
import TopNav from "@/components/UI/navigations/topbar/navbar"

import "./globals.css"

const syne = Syne({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Hylux: Digital Creative Agency",
  description: "Digital Creative Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <body  className={`${syne.className} bg-[#ffffff]`}>
        <TopNav/>
        {children}
      </body>
    </html>
  );
}
