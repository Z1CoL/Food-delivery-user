"use client";

import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React from "react";
import { Calendar } from "@/components/ui/calendar";
import { DateRange } from "react-day-picker";

export default function OrdersPage() {
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
    from: new Date(2025, 5, 12),
    to: new Date(2025, 6, 15),
  });

  return (
    <div className="flex flex-col bg-[#E4E4E7] w-full p-4">
      <div className="flex w-full flex-col items-end gap-6 ">
        {/* profile */}
        <Image src={"/Avatar.svg"} width={36} height={36} alt="" />

        {/* order list title */}

        <div className="bg-white w-full rounded-t-[5px] border-gray-400  ">
          {/* orders list title  */}
          <div className="flex p-4 justify-between items-center border-b-2">
            <div className="flex w-[485px] flex-col items-start">
              <p className="font-bold text-[20px] space-x-[-2]">Orders</p>
              <p className="text-[#71717A] text-[12px] font-medium">
                {/*items counter*/} 1 items
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Popover>
                <PopoverTrigger asChild>
                  <button className="border-2 px-4 p-2 rounded-full flex gap-2">
                    <Image
                      src={"/_calendar.svg"}
                      width={16}
                      height={16}
                      alt=""
                    ></Image>
                    {dateRange && (
                      <span>
                        {dateRange.from?.toLocaleDateString()} -{" "}
                        {dateRange.to?.toLocaleDateString()}
                      </span>
                    )}
                  </button>
                </PopoverTrigger>

                <PopoverContent>
                  <Calendar
                    mode="range"
                    defaultMonth={dateRange?.from}
                    selected={dateRange}
                    onSelect={setDateRange}
                    numberOfMonths={2}
                    className="rounded-lg border shadow-sm"
                  />
                </PopoverContent>
              </Popover>

              <button className="text-[#FAFAFA] p-2 px-4 bg-gray-300 rounded-full">
                Change delivery state
              </button>
            </div>
          </div>

          {/*  */}

          <div className="w-full">
            <div className="w-full bg-white border-b-2">a</div>
          </div>
        </div>

        {/* lists */}
      </div>
    </div>
  );
}
