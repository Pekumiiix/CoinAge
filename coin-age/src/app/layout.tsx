"use client";

//import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Aside from "./_sections/aside";
import MobileNavigation from "./_sections/mobileNavigation";
import Header from "./_sections/header";

const inter = Inter({ subsets: ["latin"] });

/*export const metadata: Metadata = {
  title: "CoinAge",
  description:
    "Monitor your cryptocurrency balance, track your portfolio, and manage your account effortlessly with our comprehensive crypto management platform. Stay updated with real-time data, detailed analytics, and personalized insights to make informed investment decisions.",
};*/

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="container flex px-0">
        <Aside />

        <div className="flex flex-col w-full min-h-screen bg-myBackground">
          <Header />

          {children}
        </div>

        <MobileNavigation />
      </body>
    </html>
  );
}
