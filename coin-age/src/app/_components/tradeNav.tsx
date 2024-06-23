"use client";

import { useState } from "react";
import Link from "next/link";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function TradeNavigation() {
  const refreshIcon = (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      className="h-10 w-10 p-2 rounded-full outline outline-1 outline-[#E6E4EC] fill-[#E6E4EC] hover:outline-svgFill hover:fill-svgFill"
    >
      <path
        fillRule="evenodd"
        d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z"
        clipRule="evenodd"
        fill=""
      ></path>
    </svg>
  );

  const dropDownIndicator = (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      className="h-5 w-5 text-th-fgd-3 rotate-90 fill-svgFill"
    >
      <path
        fill-rule="evenodd"
        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
        clipRule="evenodd"
        fill=""
      ></path>
    </svg>
  );

  interface LinkButton {
    buttonName: string;
    pathLink: string;
    isActive: boolean;
  }

  const [mobileNavValue, setMobileNavValue] = useState<string>("Overview");

  const [linkButtons, setLinkButton] = useState<LinkButton[]>([
    { buttonName: "Overview", pathLink: "/account/", isActive: true },
    { buttonName: "Balances", pathLink: "/account/balance", isActive: false },
    {
      buttonName: "Positions",
      pathLink: "/account/positions",
      isActive: false,
    },
    {
      buttonName: "Orders",
      pathLink: "/account/orders/limit",
      isActive: false,
    },
    {
      buttonName: "Unsettled",
      pathLink: "/account/unsettled",
      isActive: false,
    },
    {
      buttonName: "History",
      pathLink: "/account/history/",
      isActive: false,
    },
  ]);

  const handleClick = (index: number) => {
    const updatedLinkButton = linkButtons.map((button, i) => ({
      ...button,
      isActive: i === index,
    }));
    setLinkButton(updatedLinkButton);
  };

  const handleMobileClick = (e: any) => {
    setMobileNavValue(e.target.textContent);
  };

  return (
    <>
      <div className="flex w-full items-center justify-between px-3 pb-3 border-b border-borderColor">
        <div className="flex sm:hidden w-fit items-center outline outline-1 outline-borderColor rounded-md">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-lightTextColor text-sm font-medium p-3 border-none outline-none">
              <p>{mobileNavValue}</p>
              {dropDownIndicator}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-lightBackground border-none text-lightTextColor">
              {linkButtons.map((button, index) => (
                <DropdownMenuItem key={index}>
                  <Link
                    href={button.pathLink}
                    className={`${button.isActive ? "text-myOrange" : ""}`}
                    onClick={handleMobileClick}
                  >
                    {button.buttonName}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="hidden sm:flex items-center gap-3">
          {linkButtons.map((button, index) => (
            <Link
              href={button.pathLink}
              className={`account-nav px-3 py-2 text-lightTextColor text-base rounded-sm transition-all duration-300 hover:bg-lightorange ${
                button.isActive ? "text-myOrange bg-lightorange" : ""
              }`}
              key={index}
              onClick={() => handleClick(index)}
            >
              {button.buttonName}
            </Link>
          ))}
        </div>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>{refreshIcon}</TooltipTrigger>
            <TooltipContent className="text-xs px-2 py-1 rounded-sm text-lightTextColor bg-lightBackground border-none">
              Manually refresh data
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </>
  );
}
