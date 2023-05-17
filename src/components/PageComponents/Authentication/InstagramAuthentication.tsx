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
const ArrTelegram = [
  {
    title: "Number of samples",
    count: "3,564",
    bg: "bg-[#C6C7F8] 	",
  },
  {
    title: "Conversation",
    count: "564",
    bg: "bg-[#B8E6FF] 	",
  },
  {
    title: "Admin Messenges",
    count: "1,834",
    bg: "bg-[#BAEDBD] 	",
  },
];

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
export default function InstagramAuthentication() {
  return (
    <>
      {/* <CheckInfoUser
        icon={<BsTelegram />}
        social="Telegram"
        src="https://pbs.twimg.com/profile_images/1645401771693719553/65iMDPo-_400x400.png"
        name="Luan Wise"
        username="@luanwise"
        iconJoin={<FcDoNotInhale />}
        textJoin="14.166 sample member"
        arrRender={ArrTelegram}
        col={3}
      />
      <CheckQuality
        color="bg-yellow-100"
        border="border-lime-400"
        src={
          <Image
            src="/image/icons8-dislike.png"
            alt="quality"
            width={76}
            height={76}
          />
        }
        title="That Telegram Group don’t seem so good"
        content="Bitscope discovered that 22% of the members of this community are BOT-Net, the number of active user account for 18% (186 members), the rest are in the medium group. Group [xxxx] ranked 6/16 groups of similar size."
      />
      <div className="flex gap-8 flex-col md:flex-row">
        <div className="bg-background rounded-2xl border-2 basis-1/4 py-8">
          <ActiveShape className="w-full" />
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
              <span className="font-normal text-sm text-[#666666]">
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
      </div> */}
    </>
  );
}
