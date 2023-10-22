import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jeff J. Ahn",
  description: "Financial Analyst, SEO Consultant, and Web Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-gray-50`}>
        <main className="flex min-h-screen flex-col items-center justify-between ">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
