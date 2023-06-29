import OdometerNumber from "@/components/Odometer";
import Card from "@/components/ui/Card";
import { ArrRender } from "@/interface/page/Authentication";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Player } from "@lottiefiles/react-lottie-player";
import ToolTip from "@/components/ToolTip";
import QuestionSVG from "@/components/svg/QuestionSVG";
import useWidth from "@/hooks/useWidth";
import ListArrMobile from "./ListArrMobile";
import clsx from "clsx";
const CountUp = dynamic(() => import("react-countup"), {
  ssr: false,
});
interface ListArrProps {
  arrRender: ArrRender[];
  className?: string;
  col: number;
  bg?: string;
  bgs?: string;
  cols?: number;
  dataFourStart?: any;
  arrThree?: any;
  arrFour?: any;
  tele?: boolean;
}

export default function ListArr({
  arrRender,
  className,
  col,
  bgs,
  cols = 4,
  dataFourStart,
  arrThree,
  arrFour,
  tele,
}: ListArrProps) {
  const { width, breakpoints } = useWidth();
  const [zero, setZero] = useState<boolean>(true);
  const convert = (chuoi: string) => {
    if (chuoi.includes(".") && !chuoi.includes("K")) {
      return parseFloat(chuoi);
    }
    let chuois = chuoi.replace(/\D/g, "");

    if (chuoi.endsWith("K")) {
      return parseInt(chuois) * 100;
    } else if (chuoi.endsWith("M")) {
      return parseInt(chuois) * 100000;
    } else if (chuoi.endsWith("B")) {
      return parseInt(chuois) * 100000000;
    }
    return parseInt(chuois);
  };
  const data = arrRender.map((item) => {
    return item.count;
  });
  useEffect(() => {
    if (
      JSON.stringify(data) === JSON.stringify([0, 0, "0", 0]) ||
      JSON.stringify(data) === JSON.stringify([0, 0, 0, 0]) ||
      JSON.stringify(data) === JSON.stringify([0, 0, 0])
    ) {
      return setZero(true);
    }
    return setZero(false);
  }, [data]);
  const dataStart = dataFourStart || arrFour || arrThree;
  if (width < breakpoints.md && col === 3) {
    return (
      <ListArrMobile
        arrRender={arrRender}
        col={col}
        convert={convert}
        dataStart={dataStart}
        zero={zero}
        className={className}
      />
    );
  }
  return (
    <Card
      bodyClass={`${className ? className : "bg-background"}`}
      className="shadow-none"
    >
      <div
        className={`grid bg-[#F7F9FB] ${
          col === 4 ? "md:grid-cols-4" : "md:grid-cols-3"
        } grid-cols-2 gap-[10px] md:gap-[22px] ${bgs}`}
      >
        {arrRender.map((item: ArrRender, i: number) => (
          <div
            className={clsx(
              item?.bg,
              "rounded-md shadow-md md:p-[24px] ",
              !tele && "py-[17px] px-6",
              tele && "p-3"
            )}
            key={i}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-start flex-col h-full w-full ">
                <div className="flex flex-col justify-between items-start w-full md:gap-[9px] gap-[3px]">
                  <div className="flex gap-[0.73rem] items-center w-full">
                    <span
                      className={clsx(
                        "font-Inter text-[#10172B] text-center dark:text-white text-[16px] font-normal leading-5",
                        tele && "font-semibold text-sm"
                      )}
                    >
                      {item?.title}
                    </span>
                    {item.content && (
                      <ToolTip content={item.content} placement="top">
                        <QuestionSVG />
                      </ToolTip>
                    )}
                  </div>
                  <div className="font-Inter text-[#1C1C1C] dark:text-white font-semibold flex w-full items-center justify-between leading-9 text-2xl">
                    {item.title === "Positive Time Frame" ? (
                      zero ? (
                        <OdometerNumber num={i + 1} className="" run={zero} />
                      ) : (
                        item.count
                      )
                    ) : zero ? (
                      <OdometerNumber num={i + 1} className="" run={zero} />
                    ) : (
                      <CountUp
                        start={dataStart ? dataStart[i]?.count : 0}
                        end={convert(`${item?.count}`)}
                      />
                    )}
                    {item.icon && zero ? (
                      <Player
                        autoplay
                        loop
                        src="/assets/jsonGif/searching.json"
                        style={{ height: "100%", width: "100%" }}
                        className="p-0"
                      ></Player>
                    ) : (
                      <div className="block">{item.icon}</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
