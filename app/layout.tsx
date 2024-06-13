import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import MainNavigation from "@/components/main-navigation/main-navigation";
import { cn } from "@/lib/utils";
import Footer from "@/components/footer";
import { CursorContextProvider } from "@/contexts/cursor-context";
import DotCursor from "@/components/ui/dot-cursor";
import Template from "./template";

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
      <body className={cn("bg-[#f5f5f5] overflow-x-hidden text-[1vw]", manrope.className)}>
        <CursorContextProvider>
          <MainNavigation />
          <DotCursor />
          <Template>{children}</Template>
          <Footer />
        </CursorContextProvider>
      </body>
    </html>
  );
}
