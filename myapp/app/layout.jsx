// import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionProviderContext from '@/components/SessionProviderContext'

export const metadata = {
  title: "Travel App",
  description: "Travel UI/UX App for Camping",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>
        <SessionProviderContext>
          <Navbar />
          <main className="relative overflow-hidden">{children}</main>
          <Footer />
        </SessionProviderContext>
      </body>
    </html>
  );
}
