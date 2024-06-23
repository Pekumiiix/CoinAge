//import Aside from "./_sections/aside";
//import MobileNavigation from "./_sections/mobileNavigation";
import type { Metadata } from "next";
import TradeNavigation from "./_components/tradeNav";
import AccountSummary from "./_components/accountSummary";

export const metadata: Metadata = {
  title: "CoinAge",
  description:
    "Monitor your cryptocurrency balance, track your portfolio, and manage your account effortlessly with our comprehensive crypto management platform. Stay updated with real-time data, detailed analytics, and personalized insights to make informed investment decisions.",
};

export default function Home() {
  return (
    <>
      <TradeNavigation />

      <AccountSummary />
    </>
  );
}
