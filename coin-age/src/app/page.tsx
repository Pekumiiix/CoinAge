"use client";

import Aside from "./_sections/aside";
import MobileNavigation from "./_sections/mobileNavigation";

export default function Home() {
  return (
    <div className="container flex flex-col lg:flex-row w-full min-h-screen px-0">
      <Aside />
      <MobileNavigation />
    </div>
  );
}
