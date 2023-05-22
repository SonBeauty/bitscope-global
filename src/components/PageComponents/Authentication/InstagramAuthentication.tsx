import Simple from "@/components/LineChart/Simple";
import React from "react";
import ListArr from "./ListArr";
import Image from "next/image";
import BarChart from "@/components/BarChart/BarChart";
import ActiveShape from "@/components/PieChart/ActiveShape";
import CheckQuality from "./CheckQuality";
import { FcDoNotInhale } from "react-icons/fc";
import { BsTelegram } from "react-icons/bs";
import CheckInfoUser from "./CheckInfoUser";
const ArrProfileTele = [
  {
    title: "Good Profile",
    count: "64",
    bg: "bg-[#DBFBFE] 	",
    icon: (
      <Image src="/image/icons8-task.png" width={34} height={34} alt="icon" />
    ),
  },
  {
    title: "Average Act Rate",
    count: "64",
    bg: "bg-[#FEEFE9] 	",
    icon: (
      <Image src="/image/icons8-cirkle.png" width={34} height={34} alt="icon" />
    ),
  },
  {
    title: "Positive Time Frame",
    count: "64",
    bg: "bg-[#E3E9FE] 	",
    icon: (
      <Image src="/image/icons8-clock.png" width={34} height={34} alt="icon" />
    ),
  },
  {
    title: "Average Mes",
    count: "64",
    bg: "bg-[#E5F7EF] 	",
    icon: (
      <Image src="/image/icons8-mess.png" width={34} height={34} alt="icon" />
    ),
  },
];
interface ArrTelegramProps {
  title: string;
  count: string;
  bg: string;
}
interface ArrInfoUserProps {
  icon: React.ReactNode;
  info: string;
  numberInfo: string;
}
interface TelegramProps {
  image: string;
  name: string;
  username: string;
  textJoin: string;
  arrRender: ArrTelegramProps[];
  corlor: string;
  src: React.ReactNode;
  title: string;
  content: string;
  series: number[];
}
export default function InstagramAuthentication({
  arrRender,
  content,
  corlor,
  image,
  name,
  series,
  src,
  textJoin,
  title,
  username
}: TelegramProps) {
  return (
    <>
      <CheckInfoUser
        icon={<BsTelegram />}
        social="Twitter"
        src={image}
        name={name}
        username={username}
        iconJoin={<FcDoNotInhale className="bg-blue-400" />}
        textJoin={textJoin}
        arrRender={arrRender}
        col={3}
      />

      <CheckQuality
        color={corlor}
        border="border-lime-400"
        src={src}
        title={title}
        content={content}
      />
      <div className="flex gap-8 flex-col md:flex-row">
        <div className="bg-background rounded-2xl border-2 basis-1/4 py-8">
          <ActiveShape className="w-full" series={series} />
        </div>
        <div className="flex flex-col justify-between gap-8 w-full basis-3/4">
          <div className="flex flex-col lg:flex-row  gap-8 w-full">
            <BarChart className="basis-8/12 border-2 w-full h-full" />
            <div className="flex border-2 flex-col items-center gap-4 bg-background p-8 basis-1/3 rounded-2xl">
              <Image
                src="/image/icons8-frowning-face-94.png"
                alt=""
                width={106}
                height={106}
              />
              <h5 className="font-semibold text-2xl basis-4/12">6/16 Nomal</h5>
              <span className="font-normal text-md text-[#666666]">
                A ranking with 30 groups has a 10% difference in membership
                compared to the reference group
              </span>
            </div>
          </div>
          <ListArr
            arrRender={ArrProfileTele}
            col={4}
            className="bg-[#F1F5F9]"
          />
        </div>
      </div>
      <div className="bg-background p-8 border-2 rounded-2xl">
        <Simple />
      </div>
    </>
  );
}