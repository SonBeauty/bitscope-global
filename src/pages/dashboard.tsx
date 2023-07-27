import Loading from "@/components/Loading";
import DashboardMobile from "@/components/PageComponents/Authentication/DashboardMobile";
import HomeBredCurbs from "@/components/PageComponents/Dashboard/HomeBredCurbs";
import Gainer from "@/components/PageComponents/MainBoard/Gainer";
import Potential from "@/components/PageComponents/MainBoard/Potential";
import Trending from "@/components/PageComponents/MainBoard/Trending";
import LayoutDashBoard from "@/components/layout/Layout";
import FirstBannerSVG from "@/components/svg/FirstBannerSVG";
import IconInfulencerSVG from "@/components/svg/IconInfluencer";
import IconYellowSVG from "@/components/svg/IconYellowSVG";
import SecondBannerSVG from "@/components/svg/SecondBannerSVG";
import ThirdBannerSVG from "@/components/svg/ThirdBannerSVG";
import Card from "@/components/ui/Card";
import PageContainer from "@/container/PageContainer";
import useWidth from "@/hooks/useWidth";
import { RootState } from "@/store";
import { HeartIcon } from "@heroicons/react/24/outline";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { BiBarChart, BiMessageRounded } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import {
  GetDashboard,
  GetInfluencer,
  GetTweet,
} from "./api/influencer/getInfluencer";

export default function MainBoard() {
  const user = useSelector((state: RootState) => state.users.user);
  const { width } = useWidth();
  const convertFormat = (number: any) => {
    const suffixes = ["", "K", "M", "B", "T"];
    const suffixIndex = Math.floor(Math.log10(number) / 3);
    const shortNumber = (number / Math.pow(10, suffixIndex * 3))
      .toFixed(1)
      .replace(".0", "");

    return `${shortNumber}${suffixes[suffixIndex]}`;
  };
  const { data } = useQuery(["influencers"], GetInfluencer, {
    refetchInterval: 5 * 60 * 1000,
  });
  const { data: dataTop } = useQuery(["dashboard"], GetDashboard);
  const { data: tweet } = useQuery(["tweet"], GetTweet);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    appendDots: (dots: any) => (
      <div
        style={{
          borderRadius: "10px",
          bottom: 0,
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  if (!user || user.isActive === false) {
    return (
      <PageContainer>
        <Loading />;
      </PageContainer>
    );
  }

  if (width < 1024) {
    return (
      <DashboardMobile
        tweet={tweet && tweet[0]?.data}
        influencer={data?.data}
        trending={dataTop?.data}
      />
    );
  }
  const handleError = (e: any) => {
    e.target.src =
      "https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png";
  };

  return (
    <LayoutDashBoard>
      <HomeBredCurbs title="" />
      <div className="grid md:grid-cols-4 gap-3 sm:grid-cols-2 grid-cols-1 text-lg">
        <div className="p-6 relative z-[1] rounded-lg text-white bg-[#005AE2] flex justify-between items-center flex-col shadow-lg">
          <picture>
            <img
              src={`${user?.avatar}?${Math.floor(Math.random() * 1000 + 1)}`}
              alt="avatar"
              className="w-24 h-24 object-cover rounded-full"
              onError={handleError}
            />
          </picture>
          <div className="text-white flex flex-col items-center justify-center">
            <h6 className="text-inherit font-light mt-1">Good Evening</h6>
            <h5 className="text-inherit font-semibold">{user?.name}</h5>
          </div>
          <h6 className="text-white font-light">Welcome to BitScope</h6>
        </div>
        <Gainer
          rows={dataTop?.data?.gainer}
          src="/image/wchar.svg"
          title="Biggest Gainers"
        />
        <Potential
          rows={dataTop?.data?.potential}
          src="/image/groupstar.svg"
          title="Potential Tokens"
        />
        <Trending
          src="/image/trend.svg"
          rows={dataTop?.data?.trending}
          title="Trending Topic"
          reset={true}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-3 grid-cols-1 mt-3">
        <div className=" rounded-md">
          <div
            id="divSlider"
            className="px-4 py-4 rounded-md h-[300px] mb-3 bg-[#fff] drop-shadow-xl"
          >
            <Slider
              {...settings}
              className="w-full h-[280px] rounded-md custom-slider"
            >
              <Link
                href="https://bitscope.global/blog/building-a-web3-community-quantity-or-quality"
                target="_blank"
              >
                <FirstBannerSVG />
              </Link>
              <Link
                href="https://discord.com/channels/1093829979399274527/1093829979650928640/1121661893724082206"
                target="_blank"
              >
                <SecondBannerSVG />
              </Link>
              <Link
                href="https://discord.com/channels/1093829979399274527/1093829979650928640/1107556222904844349"
                target="_blank"
              >
                <ThirdBannerSVG />
              </Link>
            </Slider>
          </div>
          <div className="flex justify-between gap-2 2xl:gap-3">
            {tweet &&
              tweet[0]?.data?.map((item: any, index: any) => {
                const render = item?.content.split("\n");
                return (
                  <Link
                    href={
                      item?.link ? item?.link : "https://twitter.com/BitscopeAI"
                    }
                    key={index}
                    className="w-[33%] drop-shadow-md"
                    target="_blank"
                  >
                    <div className="flex bg-[#fff] hover:bg-[#F0F0F0] pt-4 flex-col gap-2 2xl:gap-4 rounded-md">
                      <div className="flex px-3">
                        <picture className="mr-2">
                          <img
                            src={item?.avatar}
                            alt=""
                            className="w-10 h-10 rounded-full"
                          />
                        </picture>
                        <div>
                          <div className="flex">
                            <span className="font-Inter font-bold text-base">
                              {item?.userName}
                            </span>
                            <div className="ml-1 mt-[2px]">
                              <IconInfulencerSVG />
                            </div>
                          </div>
                          <div className="flex">
                            <span className="font-Inter text-xs font-normal mr-1">
                              {item?.userId}
                            </span>
                            <div className="w-[3px] h-[3px] mr-1 bg-[#585858] rounded-full mt-[6px]" />
                            <div className="text-[#536471] text-xs font-Inter font-normal">
                              {item.createdAt.slice(4, 10)}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="break-words px-3">
                        <div className="font-Inter text-sm font-normal h-[220px] 2xl:h-[180px] 3xl:h-[150px] overflow-hidden">
                          {render.map((line: any, index: any) => {
                            return <p key={index}>{line}</p>;
                          })}
                        </div>
                      </div>
                      {item?.images && (
                        <div className="rounded-md px-3">
                          <Image
                            width={174}
                            height={100}
                            src={item?.images[0]}
                            alt=""
                            className="rounded-md w-full"
                          />
                        </div>
                      )}
                      {item?.video && (
                        <div className="rounded-md px-3">
                          <video src={item?.video?.link} width="100%" height="100%" controls className="rounded-md"></video>
                        </div>
                      )}
                      <div className="flex justify-between pb-2 px-0 md:px-3 ml-[-5px]">
                        <div className="flex">
                          <div className="rounded-full hover:text-[#00BA7C] hover:bg-[#E5F8F2] p-1">
                            <FaRetweet className="h-6 w-6" />
                          </div>
                          <span className="text-sm text-[#536471] mt-[6px]">
                            {item?.retweetCount === 0
                              ? 0
                              : convertFormat(item.retweetCount)}
                          </span>
                        </div>
                        <div className="flex">
                          <div className="rounded-full hover:text-[#F91880] hover:bg-[#FEE7F2] p-1">
                            <HeartIcon className="h-6 w-6" />
                          </div>
                          <span className="text-sm text-[#536471] mt-[6px]">
                            {item?.favoriteCount === 0
                              ? 0
                              : convertFormat(item.favoriteCount)}
                          </span>
                        </div>
                        <div className="flex">
                          <div className="rounded-full hover:text-[#00BA7C] hover:bg-[#E8F5FD] p-1">
                            <BiBarChart className="h-6 w-6 text-[#536471] hover:text-[#1D9BF0]" />
                          </div>
                          <div className="mt-[4px]">
                            <span className="text-sm h-6 w-6 text-[#536471] ">
                              {item?.views === 0
                                ? 0
                                : convertFormat(item?.views)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
        <Card
          title="Influencer saying"
          className="border-none rounded-lg shadow-md overflow-y-auto custom-card"
        >
          <div className="flex flex-col gap-3">
            {data?.data?.map((item: any, index: any) => {
              return item?.data ? (
                <div
                  key={index}
                  className="bg-background flex px-4 py-4 2xl:px-8 flex-col gap-3 rounded-md hover:bg-[#f8f9fb]"
                >
                  <div className="flex gap-2">
                    <picture className="mr-2">
                      <img
                        src={item?.data?.avatar}
                        alt="alt"
                        className="w-16 h-16 rounded-full"
                      />
                    </picture>
                    <div className="w-3/4 mt-1">
                      <div className="flex">
                        <h6 className="text-black-500 mr-1 text-base font-Inter font-bold mt-[1px]">
                          {item?.data?.userName}
                        </h6>
                        {item?.data?.isActive ? (
                          item?.data?.isActive == "blue" ? (
                            <div className="mr-1 mt-[3px]">
                              <IconInfulencerSVG />
                            </div>
                          ) : (
                            <div className="mr-1 mt-[3px]">
                              <IconYellowSVG />
                            </div>
                          )
                        ) : (
                          <div></div>
                        )}
                        <div className="mb-2">
                          <p className="font-Inter font-normal text-base text-[#585858] mr-1">
                            {"@" + item?.data?.userId}
                          </p>
                        </div>
                        <div className="w-[3px] h-[3px] mr-1 bg-[#585858] rounded-full mt-[11px]" />
                        <div className="flex">
                          <div className="text-[#585858]">
                            <span className="text-[#585858] text-base">
                              {item?.data?.createdAt?.slice(4, 10)}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="pb-2">
                        <p className="text-start font-Inter text-sm font-normal">
                          {item?.data?.content.slice(0, 100) + "... "}
                          <Link
                            href={
                              item?.data?.link ||
                              "https://twitter.com/BitscopeAI"
                            }
                            target="_blank"
                            className="text-[#005AE2] cursor-pointer rounded-3xl basis-4/12 text-center text-sm font-medium italic"
                          >
                            View More
                          </Link>
                        </p>
                      </div>
                      {item?.data?.video && (
                        <video
                          controls
                          width="100%"
                          height="100%"
                          src={item?.data?.video?.link}
                          className="rounded-md max-h-[267px]"
                        ></video>
                      )}
                      {item?.data?.images &&
                        item?.data?.images?.length !== 0 && (
                          <div
                            className={`grid ${item?.data?.images?.length > 1
                              ? " grid-col-2 grid-flow-col gap-1 "
                              : "grid-col-1 grid-flow-col"
                              }`}
                          >
                            {item?.data?.images
                              ?.slice(0, 3)
                              .map((image: any, index: any) => {
                                return (
                                  <div
                                    key={index}
                                    className={`${index === 0 &&
                                      item?.data?.images?.length > 2
                                      ? "row-span-2"
                                      : ""
                                      }`}
                                  >
                                    <picture>
                                      <img
                                        src={image}
                                        alt=""
                                        className={`${item?.data?.images?.length > 1
                                          ? item?.data?.images?.length > 2
                                            ? index === 1 || index === 2
                                              ? "h-[133px]"
                                              : "h-[267px]"
                                            : "w-full h-[267px]"
                                          : "w-auto max-h-[267px]"
                                          } rounded-md`}
                                      />
                                    </picture>
                                  </div>
                                );
                              })}
                          </div>
                        )}
                      <div className="flex gap-8 flex-col w-full mt-2 h-[20px]">
                        <div className="flex justify-between items-start basis-8/12">
                          <Link href={item?.data?.link || ""} target="_blank">
                            <div className="flex gap-1 rounded-full w-[70px]">
                              <div className="rounded-full hover:text-[#1D9BF0] hover:bg-[#E8F5FD] p-1">
                                <BiMessageRounded className="h-6 w-6" />
                              </div>
                              <div className="mt-[3px]">
                                <span className="text-sm text-[#536471]">
                                  {item?.data?.replyCount === 0
                                    ? 0
                                    : convertFormat(item?.data?.replyCount)}
                                </span>
                              </div>
                            </div>
                          </Link>
                          <Link href={item?.data?.link || ""} target="_blank">
                            <div className="flex gap-1 w-[70px]">
                              <div className="rounded-full hover:text-[#00BA7C] hover:bg-[#E5F8F2] p-1">
                                <FaRetweet className=" text-[#536471]  hover:text-[#00BA7C] h-6 w-6" />
                              </div>
                              <div className="mt-[3px]">
                                <span className="text-sm text-[#536471]">
                                  {item?.data?.retweetCount === 0
                                    ? 0
                                    : convertFormat(item.data?.retweetCount)}
                                </span>
                              </div>
                            </div>
                          </Link>
                          <Link href={item?.data?.link || ""} target="_blank">
                            <div className="flex gap-1 w-[70px]">
                              <div className="rounded-full hover:bg-[#FEE7F2] p-1">
                                <HeartIcon className="h-6 w-6 text-[#536471] hover:text-[#F91880] text-sm" />
                              </div>
                              <div className="mt-[3px]">
                                <span className="text-sm text-[#536471]">
                                  {item?.data?.favoriteCount === 0
                                    ? 0
                                    : convertFormat(item.data?.favoriteCount)}
                                </span>
                              </div>
                            </div>
                          </Link>
                          <Link href={item?.data?.link || ""} target="_blank">
                            <div className="flex gap-1 w-[70px]">
                              <div className="rounded-full hover:text-[#00BA7C] hover:bg-[#E8F5FD] p-1">
                                <BiBarChart className="h-6 w-6 hover:text-[#1D9BF0] text-[#536471] " />
                              </div>
                              <div className="mt-[3px] ">
                                <span className="text-sm h-6 w-6 text-[#536471] ">
                                  {item?.data?.views === 0
                                    ? 0
                                    : convertFormat(item.data?.views)}
                                </span>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null;
            })}
          </div>
        </Card>
      </div>
    </LayoutDashBoard>
  );
}
