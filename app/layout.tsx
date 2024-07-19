import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { cn } from "@/lib/utils";

const IBMPlex = IBM_Plex_Sans({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: '--font-ibm-plex' 
});

export const metadata: Metadata = {
  title: "Dreamit",
  description: "AI image generation tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider 
      afterSignOutUrl="/" 
      appearance={{
        variables: 
          {colorPrimary:'#A147B0'}
      }}>
      <html lang="en">
        <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
