import TelegramAuthentication from "@/components/PageComponents/Authentication/TelegramAuthentication";
import { TelegramProps } from "@/interface/page/Authentication";
import { Player } from "@lottiefiles/react-lottie-player";
import Image from "next/image";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
interface AuthenTelegramProps {
  telegram: TelegramProps;
  progress: number;
}
export default function AuthenTelegram({
  telegram,
  progress,
}: AuthenTelegramProps) {
  const [seriesTele, setSeriesTele] = useState<number[]>([0, 0, 0, 0]);
  const [chartTimeTele, setChartTimetele] = useState<any>([
    {
      category: "0h",
      value: 0,
    },
    {
      category: "1h",
      value: 0,
    },
    {
      category: "2h",
      value: 0,
    },
    {
      category: "3h",
      value: 0,
    },
    {
      category: "4h",
      value: 0,
    },
    {
      category: "5h",
      value: 0,
    },
    {
      category: "6h",
      value: 0,
    },
    {
      category: "7h",
      value: 0,
    },
    {
      category: "8h",
      value: 0,
    },
    {
      category: "9h",
      value: 0,
    },
    {
      category: "10h",
      value: 0,
    },
    {
      category: "11h",
      value: 0,
    },
    {
      category: "12h",
      value: 0,
    },
    {
      category: "13h",
      value: 0,
    },
    {
      category: "14h",
      value: 0,
    },
    {
      category: "15h",
      value: 0,
    },
    {
      category: "16h",
      value: 0,
    },
    {
      category: "17h",
      value: 0,
    },
    {
      category: "18h",
      value: 0,
    },
    {
      category: "19h",
      value: 0,
    },
    {
      category: "20h",
      value: 0,
    },
    {
      category: "21h",
      value: 0,
    },
    {
      category: "22h",
      value: 0,
    },
    {
      category: "23h",
      value: 0,
    },
  ]);
  const [activitiesOfTheWeek, setActivitiesOfTheWeek] = useState([
    {
      name: "Activities",
      type: "bar",
      data: [0, 0, 0, 0, 0, 0, 0],
    },
  ]);
  const [arrInfoTelegram, setArrInfoTelegram] = useState<any>([
    {
      title: "Number of samples",
      count: 0,
      bg: "bg-[#dbf4e9]",
    },
    {
      title: "Conversation",
      count: 0,
      bg: "bg-[#fee9e1]",
    },
    {
      title: "Admin Messenges",
      count: 0,
      bg: "bg-[#dae1fe]",
    },
  ]);
  const [arrInfoUser, setArrInfoUser] = useState<any>([
    {
      title: "Good Profile",
      count: 0,
      bg: "bg-[#F1F5F9]",
      icon: (
        <Image src="/image/goodProfile.svg" width={80} height={80} alt="icon" />
      ),
    },
    {
      title: "Average Act Rate",
      count: 0,
      bg: "bg-[#F1F5F9]",
      icon: (
        <Image src="/image/actRate.svg" width={80} height={80} alt="icon" />
      ),
    },
    {
      title: "Positive Time Frame",
      count: 0,
      bg: "bg-[#F1F5F9]",
      icon: (
        <Image src="/image/positive.svg" width={80} height={80} alt="icon" />
      ),
    },
    {
      title: "Average Mes",
      count: 0,
      bg: "bg-[#F1F5F9]",
      icon: (
        <Image src="/image/averageMess.svg" width={80} height={80} alt="icon" />
      ),
    },
  ]);
  useEffect(() => {
    if (telegram) {
      setArrInfoTelegram([
        {
          title: "Number of samples",
          count: telegram?.overview?.general?.numberOfSample,
          bg: "bg-[#dbf4e9]",
        },
        {
          title: "Conversation",
          count: telegram?.overview?.general?.numberOfConversation,
          bg: "bg-[#fee9e1]",
        },
        {
          title: "Admin Messenges",
          count: telegram?.overview?.general?.numberOfAdmin,
          bg: "bg-[#dae1fe]",
        },
      ]);
      setSeriesTele([
        parseFloat(telegram?.overview?.activeReview?.active),
        parseFloat(telegram?.overview?.activeReview?.normal),
        parseFloat(telegram?.overview?.activeReview?.low),
        parseFloat(telegram?.overview?.activeReview?.bot),
      ]);
      telegram?.result &&
        setChartTimetele([
          {
            category: "0h",
            value: parseFloat(telegram?.overview.hourOfOperation[0]),
          },
          {
            category: "1h",
            value: parseFloat(telegram?.overview.hourOfOperation[1]),
          },
          {
            category: "2h",
            value: parseFloat(telegram?.overview.hourOfOperation[2]),
          },
          {
            category: "3h",
            value: parseFloat(telegram?.overview.hourOfOperation[3]),
          },
          {
            category: "4h",
            value: parseFloat(telegram?.overview.hourOfOperation[4]),
          },
          {
            category: "5h",
            value: parseFloat(telegram?.overview.hourOfOperation[5]),
          },
          {
            category: "6h",
            value: parseFloat(telegram?.overview.hourOfOperation[6]),
          },
          {
            category: "7h",
            value: parseFloat(telegram?.overview.hourOfOperation[7]),
          },
          {
            category: "8h",
            value: parseFloat(telegram?.overview.hourOfOperation[8]),
          },
          {
            category: "9h",
            value: parseFloat(telegram?.overview.hourOfOperation[9]),
          },
          {
            category: "10h",
            value: parseFloat(telegram?.overview.hourOfOperation[10]),
          },
          {
            category: "11h",
            value: parseFloat(telegram?.overview.hourOfOperation[11]),
          },
          {
            category: "12h",
            value: parseFloat(telegram?.overview.hourOfOperation[12]),
          },
          {
            category: "13h",
            value: parseFloat(telegram?.overview.hourOfOperation[13]),
          },
          {
            category: "14h",
            value: parseFloat(telegram?.overview.hourOfOperation[14]),
          },
          {
            category: "15h",
            value: parseFloat(telegram?.overview.hourOfOperation[15]),
          },
          {
            category: "16h",
            value: parseFloat(telegram?.overview.hourOfOperation[16]),
          },
          {
            category: "17h",
            value: parseFloat(telegram?.overview.hourOfOperation[17]),
          },
          {
            category: "18h",
            value: parseFloat(telegram?.overview.hourOfOperation[18]),
          },
          {
            category: "19h",
            value: parseFloat(telegram?.overview.hourOfOperation[19]),
          },
          {
            category: "20h",
            value: parseFloat(telegram?.overview.hourOfOperation[20]),
          },
          {
            category: "21h",
            value: parseFloat(telegram?.overview.hourOfOperation[21]),
          },
          {
            category: "22h",
            value: parseFloat(telegram?.overview.hourOfOperation[22]),
          },
          {
            category: "23h",
            value: parseFloat(telegram?.overview.hourOfOperation[23]),
          },
        ]);
      setActivitiesOfTheWeek([
        {
          name: "Activities",
          type: "bar",
          data: [
            Math.round(
              telegram?.overview?.activitiesOfTheWeek?.percentUser?.monday * 100
            ) / 100,
            Math.round(
              telegram?.overview?.activitiesOfTheWeek?.percentUser?.tuesday *
                100
            ) / 100,
            Math.round(
              telegram?.overview?.activitiesOfTheWeek?.percentUser?.wednesday *
                100
            ) / 100,
            Math.round(
              telegram?.overview?.activitiesOfTheWeek?.percentUser?.thursday *
                100
            ) / 100,
            Math.round(
              telegram?.overview?.activitiesOfTheWeek?.percentUser?.friday * 100
            ) / 100,
            Math.round(
              telegram?.overview?.activitiesOfTheWeek?.percentUser?.saturday *
                100
            ) / 100,
            Math.round(
              telegram?.overview?.activitiesOfTheWeek?.percentUser?.sunday * 100
            ) / 100,
          ],
        },
      ]);
      setArrInfoUser([
        {
          title: "Good Profile",
          count: telegram?.overview?.avg?.goodProfile,
          bg: "bg-[#F1F5F9]",
          icon: (
            <Image
              src="/image/goodProfile.svg"
              width={80}
              height={80}
              alt="icon"
            />
          ),
        },
        {
          title: "Average Act Rate",
          count: telegram?.overview?.avg?.avgActiveMember,
          bg: "bg-[#F1F5F9]",
          icon: (
            <Image src="/image/actRate.svg" width={80} height={80} alt="icon" />
          ),
        },
        {
          title: "Positive Time Frame",
          count: telegram?.overview?.avg?.postimeFrans,
          bg: "bg-[#F1F5F9]",
          icon: (
            <Image
              src="/image/positive.svg"
              width={80}
              height={80}
              alt="icon"
            />
          ),
        },
        {
          title: "Average Mes",
          count: telegram?.overview?.avg?.avgMess,
          bg: "bg-[#F1F5F9]",
          icon: (
            <Image
              src="/image/averageMess.svg"
              width={80}
              height={80}
              alt="icon"
            />
          ),
        },
      ]);
    }
  }, [telegram]);
  return (
    <TelegramAuthentication
      classNameSRC={progress < 100 ? "p-0 border-none" : ""}
      number={progress}
      arrRender={arrInfoTelegram}
      srcRank={
        progress < 100 ? (
          <div className="h-56">
            <Player
              autoplay
              loop
              src="/assets/jsonGif/clockGearWorkingMan.json"
              style={{ height: "230px", width: "300px" }}
              className="p-0"
            ></Player>
          </div>
        ) : parseFloat(telegram.overview.activeReview.active) +
            parseFloat(telegram?.overview?.activeReview?.normal) >
          50 ? (
          <Image src="/image/goodRank.svg" alt="" width={206} height={206} />
        ) : (
          <Image
            src="/image/badRank.svg"
            alt="quality"
            width={206}
            height={206}
          />
        )
      }
      content={`${
        progress < 100
          ? "Loading..."
          : `Bitscope discovered that ${
              telegram.overview.activeReview.bot
            }% of the members of this community are BOT-Net, the number of active user account for ${
              telegram.overview.activeReview.active
            }, the rest are in the medium group. Group ${
              telegram.overview.ranking?.ranking.split("/")[0]
            } ranked ${
              telegram.overview.ranking?.ranking.split("/")[1]
            } groups of similar size.`
      }`}
      corlor={`${
        progress < 100
          ? "bg-[#FFFFFF]"
          : parseFloat(telegram?.overview.activeReview.active) +
              parseFloat(telegram?.overview.activeReview.normal) >
            50
          ? "bg-green-200"
          : "bg-red-200"
      }`}
      image={"null"}
      name={telegram.profile?.name}
      series={seriesTele}
      src={
        progress < 100 ? (
          <Player
            autoplay
            loop
            src="/assets/jsonGif/dataScanning.json"
            style={{ height: "100px", width: "100px" }}
            className="p-0"
          ></Player>
        ) : (
          <Image
            src={`${
              parseFloat(telegram?.overview.activeReview.active) +
                parseFloat(telegram?.overview.activeReview.normal) >
              50
                ? "/image/hightQ.svg"
                : "/image/badQ.svg"
            }`}
            alt="quality"
            className=""
            width={46}
            height={46}
          />
        )
      }
      title={
        progress < 100
          ? "Please wait for the analysis resultrom the system"
          : parseFloat(telegram.overview.activeReview.active) +
              parseFloat(telegram.overview.activeReview.normal) >
            50
          ? "That Telegram Group so good"
          : "That Telegram Group don’t seem so good"
      }
      username={telegram.profile.name}
      data={chartTimeTele}
      sery={activitiesOfTheWeek}
      ArrProfileTele={arrInfoUser}
      rankTitle={telegram.overview.ranking?.ranking || "Loading"}
      rankContent={
        progress < 100
          ? "Please wait for the analysis resultrom the system"
          : `A ranking with ${telegram.overview.ranking?.ranking} groups has a 10% difference in membership
        compared to the reference group`
      }
    />
  );
}
