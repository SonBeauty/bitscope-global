import BarChart from "@/components/Charts/BarChart/BarChart";
import OneSeries from "@/components/Charts/LineChart/OneSeries";
import ActiveShape from "@/components/Charts/PieChart/ActiveShape";
import ProgressBar from "@/components/ui/ProgressBar";
import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { FcDoNotInhale } from "react-icons/fc";
import CheckInfoUser from "./CheckInfoUser";
import CheckQuality from "./CheckQuality";
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
}: TelegramProps) {
  return (
    <>
      <CheckInfoUser
        link="https://t.me/"
        icon={<FaTelegramPlane className="w-6 h-6" />}
        social="Telegram"
        src={image}
        name={name}
        username={username}
        iconJoin={<FcDoNotInhale className="bg-blue-400" />}
        arrRender={arrRender}
        col={3}
      />
      <CheckQuality
        color={corlor}
        border=""
        src={src}
        title={title}
        content={content}
        classNameSRC={classNameSRC}
      />
      <div className="">
        <ProgressBar
          value={number}
          className=" bg-blue-500"
          backClass="h-3 rounded-[999px]"
          showValue
        />
      </div>
      <div className="flex gap-6 flex-col md:flex-row">
        <div className="bg-background rounded-lg shadow-md basis-[24%]">
          <ActiveShape className="w-full" series={series} col={true} />
        </div>
        <div className="flex flex-col h-full justify-between gap-6 w-full basis-[76%]">
          <div className="flex flex-col lg:flex-row gap-6 w-full">
            <BarChart
              className="w-full h-full px-4 py-10 shadow-md basis-2/3"
              series={sery}
            />
            <div className="flex flex-col items-center gap-3 bg-background p-8 basis-[32%] rounded-2xl shadow-md">
              {srcRank}
              <h5 className="font-semibold text-2xl basis-4/12 mt-8">
                {rankTitle}
              </h5>
              <span className="font-normal text-lg text-[#666666] text-center">
                {rankContent}
              </span>
            </div>
          </div>
        </div>
      </div>
      <ListArr
        arrRender={ArrProfileTele}
        col={4}
        className="bg-[#F1F5F9]"
        bgs="bg-white"
      />
      <div className="bg-background py-8 pr-8 shadow-md rounded-2xl">
        <h3 className="font-semibold text-sm pb-8 px-8 text-black-500">
          Active time frame
        </h3>
        <OneSeries
          series={[
            {
              name: "Followers Quality Graph",
              data: data,
            },
          ]}
        />
      </div>
    </>
  );
}
