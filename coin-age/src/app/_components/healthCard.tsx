import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function HealthCard({ icon }) {
  return (
    <div className="flex gap-3 h-fit px-3 py-5 rounded-lg border bg-semiLightBg border-borderColor col-span-2 sm:col-span-1">
      <div className="flex items-center p-2 rounded-md h-fit bg-pink-500">
        {icon}
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-xs text-[rgba(255,255,255,0.5)]">Health</p>
        <p className="text-2xl font-semibold text-white">76.6%</p>
        <div className="flex items-center gap-2">
          <Popover>
            <PopoverTrigger className="text-[rgba(255,255,255,0.5)] text-base border-b border-dashed border-[rgba(255,255,255,0.5)]">
              Leverage:
            </PopoverTrigger>
            <PopoverContent className="w-fit px-3 py-2 bg-lightBackground rounded-md border-none text-xs text-lightTextColor">
              Total assets value divided by account equity value
            </PopoverContent>
          </Popover>

          <p className="text-sm text-white">0.00x</p>
        </div>
      </div>
    </div>
  );
}
