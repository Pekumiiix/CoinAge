import React from "react";
import { ReactElement } from "react";
import HealthCard from "./healthCard";

export default function AccountSummary() {
  const healthIcon = (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 stroke-pink-700"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M18.5 9.00002H16.5M16.5 9.00002L14.5 9.00002M16.5 9.00002L16.5 7M16.5 9.00002L16.5 11"
          stroke=""
          strokeWidth="1.5"
          strokeLinecap="round"
        ></path>{" "}
        <path
          d="M8.96173 19.3786L9.43432 18.7963L8.96173 19.3786ZM12 5.57412L11.4522 6.08635C11.594 6.23803 11.7923 6.32412 12 6.32412C12.2077 6.32412 12.406 6.23803 12.5478 6.08635L12 5.57412ZM15.0383 19.3787L15.5109 19.961L15.0383 19.3787ZM12 21L12 20.25L12 21ZM2.65159 13.6821C2.86595 14.0366 3.32705 14.1501 3.68148 13.9358C4.03591 13.7214 4.14946 13.2603 3.9351 12.9059L2.65159 13.6821ZM6.53733 16.1707C6.24836 15.8739 5.77352 15.8676 5.47676 16.1566C5.18 16.4455 5.17369 16.9204 5.46267 17.2171L6.53733 16.1707ZM2.75 9.3175C2.75 6.41289 4.01766 4.61731 5.58602 4.00319C7.15092 3.39043 9.34039 3.82778 11.4522 6.08635L12.5478 5.06189C10.1598 2.50784 7.34924 1.70187 5.0391 2.60645C2.73242 3.50967 1.25 5.99209 1.25 9.3175H2.75ZM15.5109 19.961C17.0033 18.7499 18.7914 17.1268 20.2127 15.314C21.6196 13.5196 22.75 11.4354 22.75 9.31747H21.25C21.25 10.9289 20.3707 12.6814 19.0323 14.3884C17.7084 16.077 16.0156 17.6197 14.5657 18.7963L15.5109 19.961ZM22.75 9.31747C22.75 5.99208 21.2676 3.50966 18.9609 2.60645C16.6508 1.70187 13.8402 2.50784 11.4522 5.06189L12.5478 6.08635C14.6596 3.82778 16.8491 3.39042 18.414 4.00319C19.9823 4.6173 21.25 6.41287 21.25 9.31747H22.75ZM8.48914 19.961C9.76058 20.9928 10.6423 21.75 12 21.75L12 20.25C11.2771 20.25 10.8269 19.9263 9.43432 18.7963L8.48914 19.961ZM14.5657 18.7963C13.1731 19.9263 12.7229 20.25 12 20.25L12 21.75C13.3577 21.75 14.2394 20.9928 15.5109 19.961L14.5657 18.7963ZM3.9351 12.9059C3.18811 11.6708 2.75 10.455 2.75 9.3175H1.25C1.25 10.8297 1.82646 12.3179 2.65159 13.6821L3.9351 12.9059ZM9.43432 18.7963C8.51731 18.0521 7.49893 17.1582 6.53733 16.1707L5.46267 17.2171C6.47548 18.2572 7.53996 19.1908 8.48914 19.961L9.43432 18.7963Z"
          fill="#be185d"
        ></path>{" "}
      </g>
    </svg>
  );

  const debitIcon = (
    <svg
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className="w-5 h-5 stroke-red-700"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          stroke=""
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.343 15.657L15.657 4.343m0 0v9.9m0-9.9h-9.9"
        ></path>{" "}
      </g>
    </svg>
  );

  const creditIcon = (
    <svg
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className="w-5 h-5 stroke-green-700"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          stroke=""
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.343 4.343l11.314 11.314m0 0h-9.9m9.9 0v-9.9"
        ></path>{" "}
      </g>
    </svg>
  );

  interface Cards {
    cardIcon: ReactElement;
    amount: string;
    percentageChange: string;
    isCredit: boolean;
  }

  const summaryCards: Cards[] = [
    {
      cardIcon: creditIcon,
      amount: "$3.45K",
      percentageChange: "+64.5%",
      isCredit: true,
    },
    {
      cardIcon: debitIcon,
      amount: "$7.95K",
      percentageChange: "-4.5%",
      isCredit: false,
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 w-full h-fit px-3 gap-5">
      {summaryCards.map((card, index) => (
        <div
          className="flex gap-3 h-fit px-3 py-5 rounded-lg border bg-semiLightBg border-borderColor"
          key={index}
        >
          <div
            className={`flex items-center p-1 sm:p-2 rounded-md h-fit ${
              card.isCredit ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {card.cardIcon}
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-xs text-[rgba(255,255,255,0.5)]">This Month</p>
            <p className="text-2xl font-semibold text-white">{card.amount}</p>
            <p
              className={`text-sm p-1 rounded-md w-fit ${
                card.isCredit
                  ? "bg-green-500 text-green-700"
                  : "text-red-700 bg-red-500"
              }`}
            >
              {card.percentageChange}
            </p>
          </div>
        </div>
      ))}

      <HealthCard icon={healthIcon} />
    </div>
  );
}
