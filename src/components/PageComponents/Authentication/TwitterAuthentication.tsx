import BasicBar from "@/components/Charts/BasicChart/BasicBar";
import ActiveShape from "@/components/Charts/PieChart/ActiveShape";
import ProgressBar from "@/components/ui/ProgressBar";
import { ArrInfoUser } from "@/constant/components/Authentication";
import React, { useEffect, useState } from "react";
import { BsCalendar3, BsTwitter } from "react-icons/bs";
import CheckInfoUser from "./CheckInfoUser";
import CheckQuality from "./CheckQuality";
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
  classNameSRC?: string;
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
  classNameSRC,
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
      <CheckInfoUser
        icon={<BsTwitter className="w-6 h-6" />}
        social="Twitter"
        src={image}
        name={name}
        username={username}
        iconJoin={<BsCalendar3 className="bg-blue-400" />}
        textJoin={textJoin}
        arrRender={arrRender}
        link="https://twitter.com/"
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
          className=" bg-blue-500 "
          backClass="h-[14px] rounded-[999px]"
          showValue
        />
      </div>
      <div className="flex gap-6 flex-col md:flex-row ">
        <div className="bg-background rounded-3xl p-2 shadow-md basis-4/12">
          <ActiveShape className="w-full" series={series} />
        </div>
        <div className="bg-background relative p-8 grid lg:grid-cols-3 grid-cols-2 gap-8 items-center shadow-md rounded-3xl basis-8/12">
          {ArrInfoUser.map((item: any, index: number) => {
            return (
              <ChildrenInfoUser
                key={index}
                icon={item.icon}
                info={item.info}
                numberInfo={`${arrInfoUser[index]}`}
                numberInfoStart={arrInfoUsers[index]}
                zero={zero}
              />
            );
          })}
        </div>
      </div>
      <div className="w-full bg-background p-8 shadow-md rounded-2xl">
        <h3 className="font-semibold text-sm pb-8 text-black-500">
          Followers Quality Graph
        </h3>
        <BasicBar series={data} />
      </div>
    </>
  );
}
