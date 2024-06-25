"use client";

import ConnectWallet from "./_components/_account/connectWallet";
import AccountNavigation from "./_components/_account/accountNav";
import AccountShortcuts from "./_components/_account/accountShortcuts";
import AccountSummary from "./_components/_account/accountSummary";

export default function Home() {
  return (
    <>
      <AccountNavigation />

      <AccountSummary />

      <div className="px-3 w-full h-fit grid mb-12 md:mb-0 md:grid-cols-1 lg:grid-cols-3 gap-5 pb-5">
        <AccountShortcuts />
        <ConnectWallet />
      </div>
    </>
  );
}
