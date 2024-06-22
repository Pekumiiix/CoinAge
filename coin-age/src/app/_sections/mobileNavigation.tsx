import { useState } from "react";
import Link from "next/link";

export default function MobileNavigation() {
  const TradeIcon = (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      className="w-5 h-5 fill-svgFill transition-colors duration-300"
    >
      <path
        fillRule="evenodd"
        d="M12.577 4.878a.75.75 0 01.919-.53l4.78 1.281a.75.75 0 01.531.919l-1.281 4.78a.75.75 0 01-1.449-.387l.81-3.022a19.407 19.407 0 00-5.594 5.203.75.75 0 01-1.139.093L7 10.06l-4.72 4.72a.75.75 0 01-1.06-1.061l5.25-5.25a.75.75 0 011.06 0l3.074 3.073a20.923 20.923 0 015.545-4.931l-3.042-.815a.75.75 0 01-.53-.919z"
        clipRule="evenodd"
        fill=""
      ></path>
    </svg>
  );

  const SwapIcon = (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      className="w-5 h-5 fill-svgFill transition-colors duration-300"
    >
      <path
        fillRule="evenodd"
        d="M13.2 2.24a.75.75 0 00.04 1.06l2.1 1.95H6.75a.75.75 0 000 1.5h8.59l-2.1 1.95a.75.75 0 101.02 1.1l3.5-3.25a.75.75 0 000-1.1l-3.5-3.25a.75.75 0 00-1.06.04zm-6.4 8a.75.75 0 00-1.06-.04l-3.5 3.25a.75.75 0 000 1.1l3.5 3.25a.75.75 0 101.02-1.1l-2.1-1.95h8.59a.75.75 0 000-1.5H4.66l2.1-1.95a.75.75 0 00.04-1.06z"
        clipRule="evenodd"
        fill=""
      ></path>
    </svg>
  );

  const AccountIcon = (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      className="w-5 h-5 fill-svgFill transition-colors duration-300"
    >
      <path
        d="M12 9a1 1 0 01-1-1V3c0-.553.45-1.008.997-.93a7.004 7.004 0 015.933 5.933c.078.547-.378.997-.93.997h-5z"
        fill=""
      ></path>
      <path
        d="M8.003 4.07C8.55 3.992 9 4.447 9 5v5a1 1 0 001 1h5c.552 0 1.008.45.93.997A7.001 7.001 0 012 11a7.002 7.002 0 016.003-6.93z"
        fill=""
      ></path>
    </svg>
  );

  const SettingsIcon = (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      className="w-5 h-5 fill-svgFill transition-colors duration-300"
    >
      <path
        fillRule="evenodd"
        d="M8.34 1.804A1 1 0 019.32 1h1.36a1 1 0 01.98.804l.295 1.473c.497.144.971.342 1.416.587l1.25-.834a1 1 0 011.262.125l.962.962a1 1 0 01.125 1.262l-.834 1.25c.245.445.443.919.587 1.416l1.473.294a1 1 0 01.804.98v1.361a1 1 0 01-.804.98l-1.473.295a6.95 6.95 0 01-.587 1.416l.834 1.25a1 1 0 01-.125 1.262l-.962.962a1 1 0 01-1.262.125l-1.25-.834a6.953 6.953 0 01-1.416.587l-.294 1.473a1 1 0 01-.98.804H9.32a1 1 0 01-.98-.804l-.295-1.473a6.957 6.957 0 01-1.416-.587l-1.25.834a1 1 0 01-1.262-.125l-.962-.962a1 1 0 01-.125-1.262l.834-1.25a6.957 6.957 0 01-.587-1.416l-1.473-.294A1 1 0 011 10.68V9.32a1 1 0 01.804-.98l1.473-.295c.144-.497.342-.971.587-1.416l-.834-1.25a1 1 0 01.125-1.262l.962-.962A1 1 0 015.38 3.03l1.25.834a6.957 6.957 0 011.416-.587l.294-1.473zM13 10a3 3 0 11-6 0 3 3 0 016 0z"
        clipRule="evenodd"
        fill=""
      ></path>
    </svg>
  );

  const documentationIcon = (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      className="w-5 h-5 fill-svgFill transition-colors duration-300"
    >
      <path
        fillRule="evenodd"
        d="M4.5 2A1.5 1.5 0 003 3.5v13A1.5 1.5 0 004.5 18h11a1.5 1.5 0 001.5-1.5V7.621a1.5 1.5 0 00-.44-1.06l-4.12-4.122A1.5 1.5 0 0011.378 2H4.5zm2.25 8.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zm0 3a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z"
        clipRule="evenodd"
        fill=""
      ></path>
    </svg>
  );

  interface MenuItem {
    linkPath: string;
    menuIcon: React.ReactNode;
    menuText: string;
    isActive: boolean;
    isHidden: boolean;
  }

  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    {
      menuIcon: TradeIcon,
      menuText: "Trade",
      linkPath: "/",
      isActive: true,
      isHidden: false,
    },
    {
      menuIcon: SwapIcon,
      menuText: "Swap",
      linkPath: "/swap",
      isActive: false,
      isHidden: false,
    },
    {
      menuIcon: AccountIcon,
      menuText: "Account",
      linkPath: "/account/",
      isActive: false,
      isHidden: false,
    },
    {
      menuIcon: SettingsIcon,
      menuText: "Settings",
      linkPath: "/settings",
      isActive: false,
      isHidden: false,
    },
    {
      menuIcon: documentationIcon,
      menuText: "Documentation",
      linkPath: "https://github.com/openbook-dex/openbook-docs",
      isActive: false,
      isHidden: true,
    },
  ]);

  const handleClick = (index: number) => {
    const updatedMenuItems = menuItems.map((item, i) => ({
      ...item,
      isActive: i === index,
    }));
    setMenuItems(updatedMenuItems);
  };

  return (
    <div className="fixed bottom-0 flex items-center justify-between w-full h-fit px-2 bg-lightBackground lg:hidden">
      {menuItems.map((menuItem, index) => (
        <Link
          href={menuItem.linkPath}
          target={`${menuItem.isHidden ? "_blank" : "_self"}`}
          className={`aside-menu-item group flex flex-col items-center p-2 rounded-md ${
            menuItem.isActive ? "active" : ""
          } ${menuItem.isHidden ? "hidden sm:flex" : ""}`}
          onClick={() => handleClick(index)}
          key={index}
        >
          {menuItem.menuIcon}
          <p
            className={`text-white text-sm font-medium transition-colors duration-300 group-hover:text-myOrange`}
          >
            {menuItem.menuText}
          </p>
        </Link>
      ))}
    </div>
  );
}
