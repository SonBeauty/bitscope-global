import TwitterAuthentication from "@/components/PageComponents/Authentication/TwitterAuthentication";
import { TwitterProps } from "@/interface/page/Authentication";
import { Player } from "@lottiefiles/react-lottie-player";
import Image from "next/image";
import { useEffect, useState } from "react";
interface AuthenTwitterProps {
  twitter: TwitterProps;
  progress: number;
}
const initialData = [0, 0, 0, 0, 0, 0, 0, 0, 0];
export default function AuthenTwitter({
  twitter,
  progress,
}: AuthenTwitterProps) {
  const [seriesTwitter, setSeriesTwitter] = useState<number[]>([0, 0, 0, 0]);
  const [twitterArrayInfo, setTwitterArrayInfo] = useState<number[]>([
    0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [twitterArrayInfoStart, setTwitterArrayInfoStart] =
    useState<number[]>(initialData);
  const [dataTwitter, setDataTwitter] = useState<any>([
    [
      {
        title: "Tweet",
        count: 0,
        bg: "bg-[#dbf4e9]",
      },
      {
        title: "Follower",
        count: 0,
        bg: "bg-[#dae1fe]",
      },
      {
        title: "Following",
        count: 0,
        bg: "bg-[#cefbfc]",
      },
    ],
  ]);
  const [dataFolower, setDataFolower] = useState<any>([
    {
      name: "Quantity",
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
  ]);
  useEffect(() => {
    if (twitter) {
      setTwitterArrayInfoStart(twitterArrayInfo);
      setTwitterArrayInfo([
        twitter.overview.regularActivity,
        twitter.overview.tweetRatio,
        twitter.overview.followerRatio,
        twitter.overview.profileAvatar,
        twitter.overview.followersWithCategory,
        twitter.overview.bubblesSpread,
        twitter.overview.followersWithBios,
        twitter.overview.locationInformation,
        twitter.overview.followersWithURL,
      ]);
      setSeriesTwitter([
        Math.round(twitter.overview.highQualityPercentage * 100) / 100,
        Math.round(twitter.overview.normalQualityPercentage * 100) / 100,
        Math.round(twitter.overview.lowQualityPercentage * 100) / 100,
        Math.round(twitter.overview.badQualityPercentage * 100) / 100,
      ]);
      setDataTwitter([
        {
          title: "Tweet",
          count: twitter?.profile?.tweet,
          bg: "bg-[#dbf4e9]",
        },
        {
          title: "Follower",
          count: twitter?.profile?.follower,
          bg: "bg-[#dae1fe]",
        },
        {
          title: "Following",
          count: twitter?.profile?.following,
          bg: "bg-[#cefbfc]",
        },
      ]);
      if (twitter.overview.graphQuality) {
        const mapData = twitter?.overview?.graphQuality;
        return setDataFolower([
          {
            name: "Quantity",
            data: [
              mapData[0],
              mapData[1],
              mapData[2],
              mapData[3],
              mapData[4],
              mapData[5],
              mapData[6],
              mapData[7],
              mapData[8],
              mapData[9],
              mapData[10],
              mapData[11],
              mapData[12],
              mapData[13],
              mapData[14],
              mapData[15],
              mapData[16],
              mapData[17],
            ],
          },
        ]);
      } else {
        setDataFolower([
          {
            name: "Quantity",
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
        ]);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [twitter]);

  return (
    <TwitterAuthentication
      classNameSRC={progress < 100 ? "p-0 border-none" : ""}
      arrInfoUsers={twitterArrayInfoStart}
      arrInfoUser={twitterArrayInfo}
      arrRender={dataTwitter}
      content={`${
        progress < 100
          ? "Loading..."
          : `This Twitter account has ${
              twitter.overview.highQualityPercentage
            }% of followers identified as real people, ${
              twitter.overview.normalQualityPercentage
            }% of average accounts, and ${
              twitter.overview.badQualityPercentage +
              twitter.overview.lowQualityPercentage
            }% of BOT followers.`
      }`}
      corlor={`${
        progress < 100
          ? "bg-[#e9f5f9]"
          : twitter.overview.highQualityPercentage +
              twitter.overview.normalQualityPercentage >
            50
          ? "bg-green-200"
          : "bg-red-200"
      }`}
      data={dataFolower}
      image={twitter?.profile?.avatar}
      name={twitter?.profile?.userName}
      series={seriesTwitter}
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
              twitter.overview.highQualityPercentage +
                twitter.overview.normalQualityPercentage >
              50
                ? "/image/hightQ.svg"
                : "/image/badQ.svg"
            }`}
            alt="quality"
            width={46}
            height={46}
          />
        )
      }
      textJoin={twitter?.profile?.createTime}
      title={`${
        progress < 100
          ? "Please wait for the analysis results from the system"
          : twitter.overview.highQualityPercentage +
              twitter.overview.normalQualityPercentage >
            50
          ? "This is a quality Twitter account"
          : "This is a bad Twitter account"
      }`}
      username={twitter?.profile?.userId}
      number={progress}
    />
  );
}
