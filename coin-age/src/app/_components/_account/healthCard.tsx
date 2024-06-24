import React, { ReactElement } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface HealthCardProps {
  icon: ReactElement;
}

const HealthCard: React.FC<HealthCardProps> = ({ icon }) => {
  return (
    <div className="flex gap-3 h-fit px-3 py-5 rounded-lg border bg-semiLightBg border-borderColor col-span-2 sm:col-span-1">
      <div className="flex items-center p-1 sm:p-2 rounded-md h-fit bg-pink-500">
        {icon}
      </div>

      <div className="flex flex-col gap-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="w-fit text-xs text-[rgba(255,255,255,0.5)] border-b border-dashed border-[rgba(255,255,255,0.5)] hover:border-transparent">
              Health
            </TooltipTrigger>
            <TooltipContent className="max-w-[250px] px-3 py-2 bg-lightBackground rounded-md border-none text-xs text-lightTextColor">
              <p>
                Health describes how close your account is to liquidation. The
                lower your account health is the more likely you are to get
                liquidated when prices fluctuate.
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <p className="text-2xl font-semibold text-white">76.6%</p>
        <div className="flex items-center gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="text-[rgba(255,255,255,0.5)] text-base border-b border-dashed border-[rgba(255,255,255,0.5)] hover:border-transparent">
                Leverage:
              </TooltipTrigger>
              <TooltipContent className="w-fit px-3 py-2 bg-lightBackground rounded-md border-none text-xs text-lightTextColor">
                <p>Total assets value divided by account equity value</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <p className="text-sm text-white">0.00x</p>
        </div>
      </div>
    </div>
  );
};

export default HealthCard;
