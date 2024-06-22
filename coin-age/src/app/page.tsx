//import Aside from "./_sections/aside";
//import MobileNavigation from "./_sections/mobileNavigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CoinAge",
  description:
    "Monitor your cryptocurrency balance, track your portfolio, and manage your account effortlessly with our comprehensive crypto management platform. Stay updated with real-time data, detailed analytics, and personalized insights to make informed investment decisions.",
};

export default function Home() {
  return (
    <main className="flex flex-col gap-3 items-center w-full h-screen"></main>
  );
}
