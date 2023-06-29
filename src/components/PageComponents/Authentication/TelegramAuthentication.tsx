import StepLineChart from "@/components/Charts/AreaChart/StepLineChart";
import BarChart from "@/components/Charts/BarChart/BarChart";
import ActiveShape from "@/components/Charts/PieChart/ActiveShape";
import ProgressBar from "@/components/ui/ProgressBar";
import useWidth from "@/hooks/useWidth";
import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { FcDoNotInhale } from "react-icons/fc";
import CheckInfoUser from "./CheckInfoUser";
import ListArr from "./ListArr";
interface ArrTelegramProps {
  title: string;
  count: string;
  bg: string;
}
interface TelegramProps {
  image: string;
  name: string;
  username: string;
  textJoin?: string;
  arrRender: ArrTelegramProps[];
  corlor: string;
  src: React.ReactNode;
  title: string;
  content: string;
  series: number[];
  number: number;
  data: any;
  sery: any;
  ArrProfileTele: any;
  rankTitle: string;
  rankContent: string;
  srcRank: React.ReactNode;
  classNameSRC?: string;
  arrThree: any;
  arrFour: any;
}

export default function TelegramAuthentication({
  arrRender,
  content,
  corlor,
  image,
  name,
  series,
  src,
  textJoin,
  title,
  username,
  number,
  data,
  sery,
  ArrProfileTele,
  rankTitle,
  rankContent,
  srcRank,
  classNameSRC,
  arrThree,
  arrFour,
}: TelegramProps) {
  const { width, breakpoints } = useWidth();
  return (
    <>
      <div className="px-[5px] md:px-0">
        <CheckInfoUser
          arrThree={arrThree}
          link={username}
          icon={<FaTelegramPlane className="w-6 h-6" />}
          social="Telegram"
          src={image}
          name={name}
          username={username}
          iconJoin={<FcDoNotInhale className="bg-blue-400" />}
          arrRender={arrRender}
          col={3}
        />
      </div>
      <div className="px-[5px] md:px-0">
        <ProgressBar
          value={number}
          className=" bg-blue-500"
          backClass="h-3 rounded-[999px]"
          showValue
        />
      </div>
      <div className="flex md:gap-6 gap-[10px] flex-col md:flex-row">
        <div className="bg-background md:rounded-md rounded-none shadow-md basis-[24%]">
          <ActiveShape
            className="w-full"
            series={series}
            col={true}
            name="Members Overview"
            social="telegram"
          />
        </div>
        <div className="flex flex-col h-full justify-between gap-6 w-full basis-[75.75%] flex-1">
          <div className="flex flex-col lg:flex-row md:gap-6 gap-[10px] w-full px-[5px] md:px-0">
            <BarChart
              className="w-full h-full p-3 shadow-md basis-[67.25%] flex-1"
              series={sery}
            />
            {width > breakpoints.md ? (
              <div className="flex flex-col items-center gap-3 bg-background px-5 py-[30px] basis-[32.75%] flex-1 rounded-md shadow-md">
                {srcRank}
                <h5 className="font-Inter font-medium text-sm basis-4/12 mt-6 text-[#10172B]">
                  {rankTitle}
                </h5>
                <span className="font-Inter font-normal text-xs text-[#10172B] text-center">
                  {rankContent}
                </span>
              </div>
            ) : (
              <div className="flex flex-row items-center justify-start gap-[19px] bg-background px-[15px] py-8 rounded-md shadow-md">
                <div className="w-[265px]">{srcRank}</div>
                <div className="flex flex-col gap-[10px] items-center justify-start">
                  <h5 className="font-Inter font-semibold text-start text-xl leading-[20px] self-start">
                    {rankTitle}
                  </h5>
                  <span className="font-Inter font-normal md:text-xs text-base md:leading-[15px] leading-[19.36px] text-[#10172B] text-start">
                    {rankContent}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="px-[5px] md:px-0">
        <ListArr
          arrFour={arrFour}
          arrRender={ArrProfileTele}
          col={4}
          className="bg-[#F1F5F9]"
          bgs="bg-white"
          tele
        />
      </div>
      <div className="px-[5px] md:px-0">
        <div className="bg-background md:py-[20px] py-[24px] shadow-md rounded-md pr-2">
          <h3 className="font-Inter font-semibold text-base md:pb-[14px] pb-[19px] md:px-[30px] px-[40px] text-black-500">
            Number Of Messages Per Hour
          </h3>
          <StepLineChart series={data} />
          <span className="px-[30px] font-Inter text-xs text-[#000000] font-normal leading-[14.52px] pb-24 italic">
            Do not count BOT and Spammer messages
          </span>
        </div>
      </div>
    </>
  );
}
