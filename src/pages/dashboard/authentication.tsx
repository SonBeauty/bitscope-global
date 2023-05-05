import BarChart from "@/components/BarChart/BarChart";
import OneSeries from "@/components/LineChart/OneSeries";
import Simple from "@/components/LineChart/Simple";
import CheckInfoUser from "@/components/PageComponents/Authentication/CheckInfoUser";
import CheckQuality from "@/components/PageComponents/Authentication/CheckQuality";
import ChildrenInfoUser from "@/components/PageComponents/Authentication/ChildrenInfoUser";
import ActiveShape from "@/components/PieChart/ActiveShape";
import LayoutDashBoard from "@/components/layout/Layout";
import Image from "next/image";
import { BsCalendar3, BsTelegram, BsTwitter } from "react-icons/bs";
import { FcDoNotInhale } from "react-icons/fc";

const ArrInfoUser = [
  {
    icon: (
      <Image
        src="/image/icons8-toggle-off.png"
        alt="icon"
        width={29}
        height={29}
      />
    ),
    info: "Inactive for a long time",
    numberInfo: "5,984",
  },
  {
    icon: (
      <Image src="/image/icons8-worse.png" alt="icon" width={29} height={29} />
    ),
    info: "Very less tweets",
    numberInfo: "442",
  },
  {
    icon: (
      <Image
        src="/image/icons8-three-user.png"
        alt="icon"
        width={29}
        height={29}
      />
    ),
    info: "Very less followers",
    numberInfo: "196",
  },
  {
    icon: (
      <Image
        src="/image/icons8-user-perso.png"
        alt="icon"
        width={29}
        height={29}
      />
    ),
    info: "Without profile avatar",
    numberInfo: "206",
  },
  {
    icon: (
      <Image
        src="/image/icons8-user-find.png"
        alt="icon"
        width={29}
        height={29}
      />
    ),
    info: "Spamy name/ username",
    numberInfo: "262",
  },
  {
    icon: (
      <Image src="/image/icons8-bright.png" alt="icon" width={29} height={29} />
    ),
    info: "Uneven followers following ratio",
    numberInfo: "656",
  },
  {
    icon: (
      <Image src="/image/icons8-list.png" alt="icon" width={29} height={29} />
    ),
    info: "Without Bios",
    numberInfo: "1,873",
  },
  {
    icon: (
      <Image src="/image/icons8-notmap.png" alt="icon" width={29} height={29} />
    ),
    info: "Without location information",
    numberInfo: "5,637",
  },
  {
    icon: (
      <Image
        src="/image/icons8-notlink.png"
        alt="icon"
        width={29}
        height={29}
      />
    ),
    info: "Followers without URL",
    numberInfo: "4,496",
  },
];
const ArrTelegram = [
  {
    name: "Number of samples",
    number: "3,564",
    color: "bg-purple-300",
  },
  {
    name: "Conversation",
    number: "564",

    color: "bg-blue-200",
  },
  {
    name: "Admin Messenges",
    number: "1,834",
    color: "bg-green-200",
  },
];
const ArrTwitter = [
  {
    name: "Tweet",
    number: "367K",
    color: "bg-blue-100",
  },
  {
    name: "Like",
    number: "1,156",
    color: "bg-orange-100",
  },
  {
    name: "Follower",
    number: "239K",
    color: "bg-purple-100",
  },
  {
    name: "Following",
    number: "239K",
    color: "bg-green-100",
  },
];
const QualityRating = [
  {
    name: "Hight Quality",
    number: "38.6%",
    color: "bg-blue-500",
  },
  {
    name: "Normal Quality",
    number: "30.8%",
    color: "bg-green-300",
  },
  {
    name: "Low Quality",
    number: "22.5%",
    color: "bg-yellow-300",
  },
  {
    name: "BOT or Bad quality",
    number: "8.1%",
    color: "bg-orange-400",
  },
];
const ArrProfileTele = [
  {
    name: "Good Profile",
    number: 64,
    icon: (
      <Image src="/image/icons8-task.png" width={34} height={34} alt="icon" />
    ),
    color: "bg-blue-200",
  },
  {
    name: "Average Act Rate",
    number: 64,
    icon: (
      <Image src="/image/icons8-cirkle.png" width={34} height={34} alt="icon" />
    ),
    color: "bg-orange-100",
  },
  {
    name: "Positive Time Frame",
    number: 64,
    icon: (
      <Image src="/image/icons8-clock.png" width={34} height={34} alt="icon" />
    ),
    color: "bg-purple-100",
  },
  {
    name: "Average Mes",
    number: 64,
    icon: (
      <Image src="/image/icons8-mess.png" width={34} height={34} alt="icon" />
    ),
    color: "bg-blue-100",
  },
];
export default function Authentication() {
  return (
    <LayoutDashBoard>
      <div className="p-4 sm:pt-8 flex flex-col gap-8 w-full m-auto ">
        <div className="bg-[url('/image/bg-cover-1.svg')] bg-no-repeat bg-cover rounded-2xl">
          <div className="max-w-[585px] float-right p-8">
            <div className="flex flex-col items-start justify-center gap-4 p-8">
              <div className=" font-normal text-5xl flex gap-2">
                <Image
                  src="/image/icons8-raised-hand-96.png"
                  width={53}
                  height={53}
                  alt="hand"
                />
                <h2 className="text-white">Hello Albert</h2>
              </div>
              <span className="text-white font-normal text-2xl">
                Welcome to Authentication.
              </span>
              <p className="text-slate-50 font-normal text-base">
                Authentication is currently in development, so the results are
                relative and not 100% accurate for user quality. We are working
                hard everyday to deliver the most complete product. Below is an
                overview of two specified Twitter/ Telegram links.
              </p>
            </div>
          </div>
        </div>
        <CheckInfoUser
          icon={<BsTwitter />}
          social="Twitter"
          src="https://pbs.twimg.com/profile_images/1645401771693719553/65iMDPo-_400x400.png"
          name="Luan Wise"
          username="@luanwise"
          iconJoin={<BsCalendar3 className="bg-blue-400" />}
          textJoin="Joined 30 Mar, 2009"
          arrRender={ArrTwitter}
          sizeItem="w-40 h-28"
        />
        <CheckQuality
          color="bg-green-200"
          border="border-lime-400"
          src={
            <Image
              src="/image/checkOke.png"
              alt="quality"
              width={76}
              height={76}
            />
          }
          title="This is a quality Twitter account"
          content="This Twitter account has 36% of followers identified as real people,
        27% of average accounts, and only 8% of BOT followers."
        />
        <div className="flex gap-8 flex-col md:flex-row ">
          <div className="bg-background rounded-2xl border-2">
            <ActiveShape />
            <div className="flex flex-wrap max-w-[415px] items-center justify-center ">
              {QualityRating.map((item: any, index: number) => {
                return (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-4 w-[180px]"
                  >
                    <span
                      className={`w-2 h-2 inline-block rounded-full ${item.color}`}
                    ></span>
                    <span className="text-xs font-normal">{item.name}</span>
                    <span className="text-xs font-normal ml-3">
                      {item.number}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="bg-background p-8 flex flex-wrap gap-8 items-center border-2 justify-center rounded-2xl">
            {ArrInfoUser.map((item: any, index: number) => {
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
          <h3 className="font-semibold text-sm pb-8">
            Followers Quality Graph
          </h3>
          <OneSeries />
        </div>
        <CheckInfoUser
          icon={<BsTelegram />}
          social="Telegram"
          src="https://pbs.twimg.com/profile_images/1645401771693719553/65iMDPo-_400x400.png"
          name="Luan Wise"
          username="@luanwise"
          iconJoin={<FcDoNotInhale />}
          textJoin="14.166 sample member"
          arrRender={ArrTelegram}
          sizeItem="w-[225px] h-[112px]"
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
          <div className="bg-background rounded-2xl border-2">
            <ActiveShape />
            <div className="flex flex-wrap max-w-[420px] items-center justify-center">
              {QualityRating.map((item: any, index: number) => {
                return (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-4 w-[160px]"
                  >
                    <span
                      className={`w-2 h-2 inline-block rounded-full ${item.color}`}
                    ></span>
                    <span className="text-xs font-normal">{item.name}</span>
                    <span className="text-xs font-normal ml-3">
                      {item.number}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col justify-between gap-8 w-full">
            <div className="flex flex-col lg:flex-row  gap-8 w-full">
              <BarChart className="basis-2/3 border-2" />
              <div className="flex border-2 flex-col items-center gap-4 bg-background p-8 basis-1/3 rounded-2xl">
                <Image
                  src="/image/icons8-frowning-face-94.png"
                  alt=""
                  width={106}
                  height={106}
                />
                <h5 className="font-semibold text-2xl">6/16 Nomal</h5>
                <span className="font-normal text-xs text-[#666666]">
                  A ranking with 30 groups has a 10% difference in membership
                  compared to the reference group
                </span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 justify-between">
              {ArrProfileTele.map((item: any, index: number) => {
                return (
                  <div
                    key={index}
                    className={`flex items-center justify-center flex-col w-40 h-36 ${item.color} rounded-2xl gap-2`}
                  >
                    {item.icon}
                    <span className="text-sm font-semibold">{item.name}</span>
                    <span className="text-2xl font-semibold">
                      {item.number}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="bg-background p-8 border-2 rounded-2xl">
          <Simple />
        </div>
      </div>
    </LayoutDashBoard>
  );
}
