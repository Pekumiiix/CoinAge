export default function MarketCard() {
  const AddIcon = (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      className="w-7 h-7 bg-svgFill"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
        clipRule="evenodd"
        fill=""
      ></path>
    </svg>
  );

  interface Market {
    marketLogo: string;
    marketName: string;
    marketPrice: string;
    marketPriceChange: string;
  }

  const markets: Market[] = [
    {
      marketLogo: "/assets/_market/btc.svg",
      marketName: "BTC/USD",
      marketPrice: "$64156.10",
      marketPriceChange: "+0.1%",
    },
    {
      marketLogo: "/assets/_market/solanaLogo.svg",
      marketName: "SOl/USD",
      marketPrice: "$153.50",
      marketPriceChange: "+2.1%",
    },
  ];

  return (
    <div className="flex items-center gap-3 w-full pl-3 overflow-hidden">
      <div className="flex gap-3 px-5 py-3 rounded-md border border-borderColor"></div>
    </div>
  );
}
