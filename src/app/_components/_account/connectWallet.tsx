import { Button } from "@/components/ui/button";

export default function ConnectWallet() {
  const walletIcon = (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className="w-7 h-7 fill-svgFill"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.999 3c1.103 0 2 .897 2 2v2c1.103 0 2 .897 2 2v10c0 1.103-.897 2-2 2h-15c-1.206 0-3-.799-3-3V6c0-1.654 1.346-3 3-3h13Zm0 2h-13a1.001 1.001 0 0 0 0 2h13V5Zm-1.001 7a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1Z"
        fill="#ADA7C3"
      ></path>
    </svg>
  );

  return (
    <div className="col-start-1 md:row-start-2 lg:row-start-1 lg:col-span-2 flex items-center justify-center h-[400px] border border-borderColor rounded-md">
      <Button
        variant="secondary"
        className="flex w-fit items-center justify-start gap-3 text-lightTextColor bg-lightBackground hover:bg-semiLightBg hover:text-lightTextColor"
      >
        {walletIcon}
        Connect Wallet
      </Button>
    </div>
  );
}
