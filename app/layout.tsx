import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import MainNavigation from "@/components/main-navigation/main-navigation";
import { cn } from "@/libs/utils";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sanemuix - Website Design | Digital Branding",
  description: "Sanemuix - Website Design | Digital Branding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("bg-[#f5f5f5]", manrope.className)}>
        <MainNavigation />
        {children}
      </body>
    </html>
  );
}
