import BasicBar from "@/components/Charts/BasicChart/BasicBar";
import ActiveShape from "@/components/Charts/PieChart/ActiveShape";
import CalendarSVG from "@/components/svg/CalendarSVG";
import TwitterFooterSVG from "@/components/svg/TwitterFooterSVG";
import ProgressBar from "@/components/ui/ProgressBar";
import { ArrInfoUser } from "@/constant/components/Authentication";
import React, { useEffect, useState } from "react";
import CheckInfoUser from "./CheckInfoUser";
import ChildrenInfoUser from "./ChildrenInfoUser";
interface ArrTwitterProps {
  title: string;
  count: string;
  bg: string;
}
interface TwitterAuthenticationProps {
  image: string | null | undefined;
  name: string | null | undefined;
  username: string | null | undefined;
  textJoin: string | null | undefined;
  arrRender: ArrTwitterProps[];
  corlor: string;
  src: React.ReactNode;
  title: string;
  content: string;
  series: number[];
  arrInfoUser: number[];
  data: any;
  number: number;
  arrInfoUsers: any;
  dataFourStart?: any;
}

export default function TwitterAuthentication({
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
  arrInfoUser,
  data,
  number,
  arrInfoUsers,
  dataFourStart,
}: TwitterAuthenticationProps) {
  const [zero, setZero] = useState<boolean>(true);
  useEffect(() => {
    if (JSON.stringify(arrInfoUser) === JSON.stringify(Array(9).fill(0))) {
      return setZero(true);
    }
    return setZero(false);
  }, [arrInfoUser]);
  return (
    <>
      <div className="px-[5px] md:px-0">
        <CheckInfoUser
          icon={<TwitterFooterSVG className="w-5 h-5" fillOne="white" />}
          social="Twitter"
          src={image}
          name={name}
          username={username}
          iconJoin={<CalendarSVG className="w-[31px] h-[23px]" />}
          textJoin={textJoin}
          arrRender={arrRender}
          link={`https://twitter.com/${username}`}
          col={4}
          dataFourStart={dataFourStart}
        />
      </div>
      <div className="px-[5px] md:px-0">
        <ProgressBar
          value={number}
          className=" bg-blue-500 "
          backClass="h-[14px] rounded-[999px]"
          showValue
        />
      </div>
      <div className="flex md:gap-[18px] gap-[10px] flex-col md:flex-row px-[5px] md:px-0">
        <div className="bg-background rounded-none md:rounded-md p-2 shadow-md basis-4/12">
          <ActiveShape
            className="w-full"
            series={series}
            name="Recent Follower Ratio"
            social="twitter"
          />
        </div>

        <div className="bg-background relative md:px-8 px-[15px] pb-[14px] md:pt-[47px] pt-[57px] grid lg:grid-cols-3 grid-cols-1 md:gap-8 gap-[10px] items-center shadow-md rounded-md basis-8/12">
          <h6 className="absolute md:top-[25px] top-[25px] text-[#1C1C1C] md:left-8 left-[38%] text-xl md:text-base  font-Inter font-semibold leading-5">
            Key Metrics
          </h6>
          {ArrInfoUser.map((item: any, index: number) => {
            return (
              <ChildrenInfoUser
                key={index}
                icon={item.icon}
                info={item.info}
                position={item.position}
                content={item.content}
                numberInfo={`${arrInfoUser[index]}`}
                numberInfoStart={arrInfoUsers[index]}
                zero={zero}
              />
            );
          })}
        </div>
      </div>
      <div className="px-[5px] md:px-0">
        <div className="w-full bg-background md:p-6 py-[25px] shadow-md rounded-md">
          <h3 className="font-Inter md:text-[0.875rem] text-xl font-semibold leading-[1.25rem] pb-8 text-[#1C1C1C]">
            Followers Hit Key Metrics
          </h3>
          <BasicBar series={data} />
          <span className="text-[#000000] text-[0.75rem] font-Inter md:leading-[14.52px] leading-5 font-normal italic">
            Just wanted let you know that BitScope don&apos;t judge anyone. This
            data for the Community Manager track campaign performance.
          </span>
        </div>
      </div>
    </>
  );
}
