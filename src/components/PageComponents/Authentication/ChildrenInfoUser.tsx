import React from "react";
interface ChildrenInfoUserProps {
  icon: any;
  info: string;
  numberInfo: string;
}
export default function ChildrenInfoUser({
  icon,
  info,
  numberInfo,
}: ChildrenInfoUserProps) {
  return (
    <div className="flex justify-center w-full">
      <div className="flex items-center justify-start gap-4 w-[200px]">
        {icon}
        <div className="flex flex-col items-start justify-start">
          <span className="font-normal text-xs text-start text-[#666666]">{info}</span>
          <span className="text-xl font-semibold">{numberInfo}</span>
        </div>
      </div>
    </div>
  );
}