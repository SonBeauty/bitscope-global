import OdometerNumber from "@/components/Odometer";
import dynamic from "next/dynamic";
import { useState } from "react";
const CountUp = dynamic(() => import("react-countup"), {
  ssr: false,
});
interface ChildrenInfoUserProps {
  icon: any;
  info: string;
  numberInfo: string;
  numberInfoStart: number;
  zero?: boolean;
}
export default function ChildrenInfoUser({
  icon,
  info,
  numberInfo,
  zero,
  numberInfoStart,
}: ChildrenInfoUserProps) {
  return (
    <div className="flex justify-center w-full">
      <div className="flex items-center justify-start gap-4 w-[200px]">
        {icon}
        <div className="flex flex-col items-start justify-start">
          <span className="font-normal text-base text-start text-[#666666]">
            {info}
          </span>
          <span className="text-xl font-semibold">
            {zero ? (
              <OdometerNumber
                num={Math.floor(Math.random() * 4) + 1}
                className=""
                run={zero}
              />
            ) : (
              <CountUp
                start={numberInfoStart || 0}
                end={parseInt(numberInfo) || 0}
              />
            )}
          </span>
        </div>
      </div>
    </div>
  );
}
