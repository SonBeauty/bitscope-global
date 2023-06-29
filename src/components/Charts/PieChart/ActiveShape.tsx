import ToolTip from "@/components/ToolTip";
import QuestionSVG from "@/components/svg/QuestionSVG";
import {
  optionsActiveShapeTE,
  optionsActiveShapeTW,
  optionsActiveShapeFake,
} from "@/constant/charts";
import { labelRender } from "@/constant/components/ActiveShape";
import useWidth from "@/hooks/useWidth";
import { RootState } from "@/store";
import { Spinner } from "flowbite-react";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ActiveShapeMobile from "./ActiveShapeMobile";
import clsx from "clsx";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
interface ActiveShapeProps {
  className?: string;
  series: number[];
  col?: boolean;
  name: string;
  social?: string;
}

export default function ActiveShape({
  className,
  series,
  col = false,
  name,
  social,
}: ActiveShapeProps) {
  const { width, breakpoints } = useWidth();
  const isFake =
    useSelector((state: RootState) => state.authentication.isFakeData) ||
    JSON.stringify(series) === JSON.stringify([0, 0, 0, 0]);

  const [fakeData, setFakeData] = useState<any>([0, 0, 0, 0]);
  useEffect(() => {
    if (isFake) {
      let interval = setInterval(() => {
        setFakeData([
          1 + Math.floor(Math.random() * 23),
          1 + Math.floor(Math.random() * 23),
          1 + Math.floor(Math.random() * 23),
          1 + Math.floor(Math.random() * 23),
        ]);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isFake, series]);
  if (width < breakpoints.md) {
    return (
      <ActiveShapeMobile
        fakeData={fakeData}
        isFake={isFake}
        labelRender={labelRender}
        name={name}
        optionsActiveShapeFake={optionsActiveShapeFake}
        optionsActiveShapeTE={optionsActiveShapeTE}
        optionsActiveShapeTW={optionsActiveShapeTW}
        series={series}
        social={social}
      />
    );
  }
  return (
    <div className={` ${className} `}>
      <div>
        <div className="flex gap-[0.31rem] items-center px-[2px] py-[5px]">
          <h6 className="pb-[10px] font-semibold font-Inter text-base pl-[25px] pt-[10px]">
            {name}
          </h6>
          {social === "twitter" && (
            <ToolTip
              content={
                <p className="font-Inter text-white text-xs leading-[1.25rem] flex flex-col p-[0.8rem]">
                  <span className="font-Inter text-white text-xs leading-[1.25rem] font-bold">
                    EXPRESSION OF WORDS:
                  </span>
                  <p className="font-Inter text-white text-xs leading-[26px] font-semibold">
                    Maybe KOL:
                    <span className="text-white font-Inter text-xs leading-[26px] font-normal">
                      {" "}
                      followers can be celebrities.
                    </span>
                  </p>{" "}
                  <p className="font-Inter text-white text-xs leading-[26px] font-semibold">
                    Good Profile:
                    <span className="text-white font-Inter text-xs leading-[26px] font-normal">
                      {" "}
                      &quot;Followers&quot; have a lot of followers or quality
                      content.
                    </span>
                  </p>
                  <p className="font-Inter text-white text-xs leading-[26px] font-semibold">
                    Full Info:
                    <span className="text-white font-Inter text-xs leading-[26px] font-normal">
                      {" "}
                      Enough basic information
                    </span>
                  </p>
                  <p className="font-Inter text-white text-xs leading-[26px] font-semibold">
                    Miss Info:
                    <span className="text-white font-Inter text-xs leading-[26px] font-normal">
                      {" "}
                      Not enough basic information.
                    </span>
                  </p>
                </p>
              }
              placement="right"
              className="w-[17.7rem] bg-[#28303F] rounded-md shadow-[0_1px_2px_rgba(0,0,0,0.25)]"
            >
              <QuestionSVG />
            </ToolTip>
          )}
          {social === "telegram" && (
            <ToolTip
              content={
                <div className="p-[0.63rem]">
                  <span className="font-Inter text-white text-xs leading-[1.25rem] font-normal">
                    Various behavioral patterns have been used to provide an
                    overview of community members. Please note that this report
                    is for reference purposes only.
                  </span>
                </div>
              }
              placement="right"
              className="w-[17.7rem] bg-[#28303F] rounded-md shadow-[0_1px_2px_rgba(0,0,0,0.25)]"
            >
              <QuestionSVG />
            </ToolTip>
          )}
        </div>
        <Chart
          options={
            isFake
              ? optionsActiveShapeFake
              : social === "twitter"
              ? optionsActiveShapeTW
              : optionsActiveShapeTE
          }
          series={isFake ? fakeData : series}
          type="donut"
          height={250}
          className="items-center"
        />
        {col ? (
          <div className="flex flex-col gap-3 py-4 px-[31px]">
            {labelRender.map((item, index) => {
              return (
                <div
                  className="flex items-center gap-2 justify-between"
                  key={index}
                >
                  <div className="flex gap-1 items-center">
                    <div className={`w-2 h-2 ${item.bg} rounded-full`}></div>
                    <span className="font-Inter font-medium text-sm">
                      {social === "twitter" ? item.labelTW : item.labelTE}
                    </span>
                  </div>
                  <span className="font-Inter font-medium text-sm leading-[18px]">
                    {isFake ? (
                      <Spinner aria-label="Info spinner example" color="info" />
                    ) : (
                      series[index] + "%"
                    )}
                  </span>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="py-4 grid grid-cols-2 gap-2">
            {labelRender.map((item, index) => {
              return (
                <div
                  className="flex justify-between items-center px-1"
                  key={index}
                >
                  <div className="flex gap-1 items-center">
                    <div className={`w-2 h-2 ${item.bg} rounded-full`}></div>
                    <span className="font-Inter font-medium text-sm">
                      {social === "twitter" ? item.labelTW : item.labelTE} :{" "}
                    </span>
                  </div>
                  <span className="font-Inter font-medium text-sm leading-[18px]">
                    {isFake ? (
                      <Spinner aria-label="Info spinner example" color="info" />
                    ) : (
                      series[index] + "%"
                    )}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
