import React from "react";
import CheckInfoUser from "./CheckInfoUser";
import { BsCalendar3, BsTwitter } from "react-icons/bs";
import CheckQuality from "./CheckQuality";
import Image from "next/image";
import ActiveShape from "@/components/PieChart/ActiveShape";
import ChildrenInfoUser from "./ChildrenInfoUser";
import OneSeries from "@/components/LineChart/OneSeries";


interface ArrTwitterProps {
  title: string;
  count: string;
  bg: string;
}
interface ArrInfoUserProps {
  icon: React.ReactNode;
  info: string;
  numberInfo: string;
}
interface TwitterAuthenticationProps {
  image: string;
  name: string;
  username: string;
  textJoin: string;
  arrRender: ArrTwitterProps[];
  corlor: string;
  src: React.ReactNode;
  title: string;
  content: string;
  series: number[];
  arrInfoUser: ArrInfoUserProps[];
  data: any;
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
}: TwitterAuthenticationProps) {
  return (
    <>
      <CheckInfoUser
        icon={<BsTwitter />}
        social="Twitter"
        src={image}
        name={name}
        username={username}
        iconJoin={<BsCalendar3 className="bg-blue-400" />}
        textJoin={textJoin}
        arrRender={arrRender}
        col={4}
      />
      <CheckQuality
        color={corlor}
        border="border-lime-400"
        src={src}
        title={title}
        content={content}
      />
      <div className="flex gap-8 flex-col md:flex-row ">
        <div className="bg-background rounded-2xl border-2 basis-1/4">
          <ActiveShape className="w-full" series={series} />
        </div>
        <div className="bg-background p-8 grid lg:grid-cols-3 grid-cols-2 gap-8 items-center border-2 rounded-2xl basis-3/4">
          {arrInfoUser.map((item: any, index: number) => {
            return (
              <ChildrenInfoUser
                key={index}
                icon={item.icon}
                info={item.info}
                numberInfo={item.numberInfo}
              />
            );
          })}
        </div>
      </div>
      <div className="w-full bg-background p-8 border-2 rounded-2xl">
        <h3 className="font-semibold text-sm pb-8 text-black-500">Followers Quality Graph</h3>
        <OneSeries
          series={[
            {
              name: "Followers Quality",
              data: data,
            },
          ]}
        />
      </div>
    </>
  );
}
