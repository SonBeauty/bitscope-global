import OdometerNumber from "@/components/Odometer";
import ToolTip from "@/components/ToolTip";
import QuestionSVG from "@/components/svg/QuestionSVG";
import dynamic from "next/dynamic";
const CountUp = dynamic(() => import("react-countup"), {
  ssr: false,
});
interface ChildrenInfoUserProps {
  icon: any;
  info: string;
  numberInfo: string;
  numberInfoStart: number;
  zero?: boolean;
  content?: string;
  position?: "bottom" | "top" | "left" | "right";
}

export default function ChildrenInfoUser({
  icon,
  info,
  numberInfo,
  zero,
  numberInfoStart,
  content,
  position,
}: ChildrenInfoUserProps) {
  return (
    <div className="flex md:justify-center justify-between w-full pt-[7px] md:pt-0">
      <div className="flex items-center justify-start gap-[30px] md:w-[210px] w-full">
        {icon}
        <div className="flex md:flex-col flex-row md:items-start items-center justify-between w-full gap-[6px]">
          <div className="flex items-center gap-3">
            <span className="font-Inter font-normal md:font-medium text-base leading-[19.36px] md:leading-5 md:text-sm text-start md:text-[#949597] text-[#888888]">
              {info}
            </span>
            {content && (
              <ToolTip content={content} placement="top">
                <QuestionSVG />
              </ToolTip>
            )}
          </div>
          <span className="font-Inter text-base md:text-xl leading-5 font-semibold text-[#1C1C1C]">
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
