import type { Metadata } from "next";
import { Syne } from "next/font/google";
import TopNav from "@/components/UI/dashboard/topbar/navbar"
import WorkSection from "./work";
import ServicesSection from "./services";
import "./globals.css";

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
        <div className="">
          <WorkSection/>
          <ServicesSection/>
        </div>
      </body>
    </html>
  );
}
