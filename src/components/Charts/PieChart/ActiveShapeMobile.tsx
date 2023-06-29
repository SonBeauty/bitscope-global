import ToolTip from "@/components/ToolTip";
import QuestionSVG from "@/components/svg/QuestionSVG";
import { Spinner } from "flowbite-react";
import dynamic from "next/dynamic";
import React from "react";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

interface ActiveShapeMobileProps {
  name: string;
  social?: string;
  series: any;
  isFake: boolean;
  optionsActiveShapeFake: any;
  optionsActiveShapeTW: any;
  optionsActiveShapeTE: any;
  fakeData: any;
  labelRender: any;
}
export default function ActiveShapeMobile({
  name,
  social,
  series,
  isFake,
  optionsActiveShapeFake,
  optionsActiveShapeTW,
  optionsActiveShapeTE,
  fakeData,
  labelRender,
}: ActiveShapeMobileProps) {
  return (
    <div className="py-[17px] w-full flex flex-col gap-[35px]">
      <div className="flex items-center justify-center w-full">
        <div className="flex gap-3 items-center justify-center">
          <h6 className="font-Inter font-semibold text-xl leading-5">{name}</h6>
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
      </div>
      <div className="flex items-center justify-between py-3 pr-3 gap-[3px]">
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
          className="basis-[40%] flex-1 text-xs mt-1"
          height={170}
        />
        <div className="flex flex-col gap-[17px] basis-[60%] flex-1">
          {labelRender.map((item: any, index: number) => {
            return (
              <div
                className="flex items-center gap-2 justify-between"
                key={index}
              >
                <div className="flex gap-1 items-center">
                  <div className={`w-2 h-2 ${item.bg} rounded-full mb-1`}></div>
                  <span className="font-Inter font-medium text-base leading-5">
                    {social === "twitter" ? item.labelTW : item.labelTE}
                  </span>
                </div>
                <span className="font-Inter font-semibold text-base leading-5">
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
      </div>
    </div>
  );
}
