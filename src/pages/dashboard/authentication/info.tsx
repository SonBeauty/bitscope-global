import BarChart from "@/components/BarChart/BarChart";
import CheckInfoUser from "@/components/PageComponents/Authentication/CheckInfoUser";
import CheckQuality from "@/components/PageComponents/Authentication/CheckQuality";
import ChildrenInfoUser from "@/components/PageComponents/Authentication/ChildrenInfoUser";
import OneSeries from "@/components/LineChart/OneSeries";
import Simple from "@/components/LineChart/Simple";
import ActiveShape from "@/components/PieChart/ActiveShape";
import Image from "next/image";
import { BsCalendar3, BsTelegram, BsTwitter } from "react-icons/bs";
import { FcDoNotInhale } from "react-icons/fc";
import LayoutDashBoard from "@/components/layout/Layout";
import ListArr from "@/components/PageComponents/Authentication/ListArr";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
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
    title: "Number of samples",
    count: "3,564",
    bg: "bg-[#C6C7F8] dark:bg-slate-900	",
  },
  {
    title: "Conversation",
    count: "564",
    bg: "bg-[#B8E6FF] dark:bg-slate-900	",
  },
  {
    title: "Admin Messenges",
    count: "1,834",
    bg: "bg-[#BAEDBD] dark:bg-slate-900	",
  },
];
const ArrTwitter = [
  {
    title: "Tweet",
    count: "367K",
    bg: "bg-[#C6C7F8] dark:bg-slate-900	",
  },
  {
    title: "Like",
    count: "1156",
    bg: "bg-[#B8E6FF] dark:bg-slate-900	",
  },
  {
    title: "Follower",
    count: "239K",
    bg: "bg-[#BAEDBD] dark:bg-slate-900	",
  },
  {
    title: "Following",
    count: "239K",
    bg: "bg-[#FEEDD7] dark:bg-slate-900	",
  },
];
const ArrProfileTele = [
  {
    title: "Good Profile",
    count: "64",
    bg: "bg-[#DBFBFE] dark:bg-slate-900	",
    icon: (
      <Image src="/image/icons8-task.png" width={34} height={34} alt="icon" />
    ),
  },
  {
    title: "Average Act Rate",
    count: "64",
    bg: "bg-[#FEEFE9] dark:bg-slate-900	",
    icon: (
      <Image src="/image/icons8-cirkle.png" width={34} height={34} alt="icon" />
    ),
  },
  {
    title: "Positive Time Frame",
    count: "64",
    bg: "bg-[#E3E9FE] dark:bg-slate-900	",
    icon: (
      <Image src="/image/icons8-clock.png" width={34} height={34} alt="icon" />
    ),
  },
  {
    title: "Average Mes",
    count: "64",
    bg: "bg-[#E5F7EF] dark:bg-slate-900	",
    icon: (
      <Image src="/image/icons8-mess.png" width={34} height={34} alt="icon" />
    ),
  },
];
export default function Authentication() {
  const user = useSelector((state: RootState) => state.users.user);
  console.log(user);

  return (
    <LayoutDashBoard>
      <div className="p-1 sm:pt-8 flex flex-col gap-8 w-full m-auto ">
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
                <h2 className="text-white">Hello {user?.name}</h2>
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
          col={4}
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
          <div className="bg-background rounded-2xl border-2 basis-1/4">
            <ActiveShape className="w-full" />
          </div>
          <div className="bg-background p-8 grid lg:grid-cols-3 grid-cols-2 gap-8 items-center border-2 rounded-2xl basis-3/4">
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
                <h5 className="font-semibold text-2xl basis-4/12">
                  6/16 Nomal
                </h5>
                <span className="font-normal text-xs text-[#666666]">
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
      </div>
    </LayoutDashBoard>
  );
}
