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

const initialData = [0, 0, 0, 0, 0, 0, 0, 0, 0];
const initialDataFour = [0, 0, 0, 0];

export default function AuthenTelegram({
  telegram,
  progress,
}: AuthenTelegramProps) {
  const [seriesTele, setSeriesTele] = useState<number[]>([0, 0, 0, 0]);
  const [chartTimeTele, setChartTimetele] = useState<number[]>([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
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
      title: "Admin Count",
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
      title: "Active members",
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
      title: "Average Mess",
      count: 0,
      bg: "bg-[#F1F5F9]",
      icon: (
        <Image src="/image/averageMess.svg" width={80} height={80} alt="icon" />
      ),
    },
  ]);
  const [telegramArrayInfoStart, setTelegramArrayInfoStart] =
    useState<number[]>(initialData);
  const [telegramArrayThreeStart, setTelegramArrayThreeStart] =
    useState<number[]>(initialDataFour);
  useEffect(() => {
    if (telegram) {
      setTelegramArrayThreeStart(arrInfoTelegram);
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
          title: "Admin Count",
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
      setChartTimetele([
        parseFloat(telegram?.overview.hourOfOperation[0]),
        parseFloat(telegram?.overview.hourOfOperation[1]),
        parseFloat(telegram?.overview.hourOfOperation[2]),
        parseFloat(telegram?.overview.hourOfOperation[3]),
        parseFloat(telegram?.overview.hourOfOperation[4]),
        parseFloat(telegram?.overview.hourOfOperation[5]),
        parseFloat(telegram?.overview.hourOfOperation[6]),
        parseFloat(telegram?.overview.hourOfOperation[7]),
        parseFloat(telegram?.overview.hourOfOperation[8]),
        parseFloat(telegram?.overview.hourOfOperation[9]),
        parseFloat(telegram?.overview.hourOfOperation[10]),
        parseFloat(telegram?.overview.hourOfOperation[11]),
        parseFloat(telegram?.overview.hourOfOperation[12]),
        parseFloat(telegram?.overview.hourOfOperation[13]),
        parseFloat(telegram?.overview.hourOfOperation[14]),
        parseFloat(telegram?.overview.hourOfOperation[15]),
        parseFloat(telegram?.overview.hourOfOperation[16]),
        parseFloat(telegram?.overview.hourOfOperation[17]),
        parseFloat(telegram?.overview.hourOfOperation[18]),
        parseFloat(telegram?.overview.hourOfOperation[19]),
        parseFloat(telegram?.overview.hourOfOperation[20]),
        parseFloat(telegram?.overview.hourOfOperation[21]),
        parseFloat(telegram?.overview.hourOfOperation[22]),
        parseFloat(telegram?.overview.hourOfOperation[23]),
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
      setTelegramArrayInfoStart(arrInfoUser);
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
          title: "Active members",
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
          title: "Average Mess",
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [telegram]);
  const handleGroupPrivate = () => {
    if (telegram.overview?.percentCrawl < 10 && telegram.status === "4") {
      return "Telegram group data has been limited. BitScope cannot authenticate at this time";
    }
    return progress < 100
      ? "Please wait for the analysis resultrom the system"
      : `Sorry, this feature is being optimized. Results will be hidden!`;
  };
  return (
    <TelegramAuthentication
      arrThree={telegramArrayThreeStart}
      arrFour={telegramArrayInfoStart}
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
              style={{ height: "230px", maxWidth: "300px" }}
              className="p-0"
            ></Player>
          </div>
        ) : parseFloat(telegram.overview.activeReview.active) +
            parseFloat(telegram?.overview?.activeReview?.normal) >
          50 ? (
          <Image src="/image/goodRank.svg" alt="" width={143} height={143} />
        ) : (
          <Image
            src="/image/badRank.svg"
            alt="quality"
            width={143}
            height={143}
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
              telegram.overview.ranking?.ranking.split("/")[1] || 0
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
      image={telegram.profile?.avatar}
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
      username={telegram.profile.objectId}
      data={chartTimeTele}
      sery={activitiesOfTheWeek}
      ArrProfileTele={arrInfoUser}
      rankTitle={telegram.overview.ranking?.ranking ?? "Loading"}
      rankContent={handleGroupPrivate()}
    />
  );
}
