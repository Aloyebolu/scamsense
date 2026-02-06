// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ScamGuard - Spot Scams Before They Spot You",
  description: "An educational simulator to learn how to identify and avoid online scams. No data collected.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={`${inter.className} bg-background text-foreground min-h-screen`}>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}