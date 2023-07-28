import DismissableModal from "@/components/Modal";
import LayoutDashBoard from "@/components/layout/Layout";
import BackLeftSVG from "@/components/svg/BackLeftSVG";
import DownloadAll from "@/components/svg/DownloadAll";
import DownloadAuthenSVG from "@/components/svg/DownloadAuthenSVG";
import LoadingSVG from "@/components/svg/LoadingSVG";
import NoAccessHistorySVG from "@/components/svg/NoAccessHistorySVG";
import TelegramHistorySVG from "@/components/svg/TelegramHistorySVG";
import TrashAuthenSVG from "@/components/svg/TrashAuthenSVG";
import TwitterFooterSVG from "@/components/svg/TwitterFooterSVG";
import { deleteHistory, getHistory } from "@/pages/api/authentication/History";
import { Player } from "@lottiefiles/react-lottie-player";
import { Card, CardBody, CardHeader } from "@material-tailwind/react";
import {
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { useIntersectionObserver, useOnClickOutside } from "usehooks-ts";

export default function HistoryMobile() {
  const queryClient = useQueryClient();
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [content, setContent] = useState<string>("");
  const [idHandle, setIdHandle] = useState<string>("");
  const entry = useIntersectionObserver(carouselRef, {});
  const isVisible = !!entry?.isIntersecting;
  const [openModal, setOpenModal] = useState<boolean>(false);
  const router = useRouter();
  const ref = useRef<any>(null);
  const { data, fetchNextPage, isLoading, isFetchingNextPage } =
    useInfiniteQuery(["historyMobile"], getHistory, {
      getNextPageParam: (lastPage: any) => {
        const maxPages = lastPage?.data?.last_page;
        const nextPage = parseInt(lastPage?.data?.page) + 1;
        return nextPage < maxPages ? nextPage : undefined;
      },
    });
  const { mutate, isLoading: loading } = useMutation(deleteHistory, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["historyMobile"] });
      setOpenModal(false);
      toast.success("Delete History Successfully!");
    },
    onError: (err) => {
      console.log(err);
    },
  });
  useEffect(() => {
    if (isVisible) {
      fetchNextPage();
    }
  }, [fetchNextPage, isVisible]);
  const handleClickOutside = () => {
    setOpenModal(false);
  };

  useOnClickOutside(ref, handleClickOutside);
  const handleError = (e: any) => {
    e.target.src =
      "https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png";
  };
  const handleContent = (id: string, content: string) => {
    setContent(content);
    setOpenModal(true);
    setIdHandle(id);
  };
  const handleClick = () => {
    if (content === "Delete") {
      mutate(idHandle);
    }
  };
  return (
    <LayoutDashBoard className="md:p-5 py-[15px] relative bg-[#F6FBFF]">
      <Card className="h-full bg-[#F6FBFF] flex flex-col gap-[6px] w-full max-h-[795.08px] p-0 m-0 shadow-none">
        <div className="relative">
          <CardHeader
            floated={false}
            shadow={false}
            className="rounded-none rounded-tl-[6px] rounded-tr-[6px] bg-[#0046B0] mt-0 mx-0 p-3 px-[16px] h-[54px]"
          >
            <div className="flex justify-between flex-row items-center h-full">
              <span className="flex gap-[14px] items-center justify-center">
                <div onClick={() => router.push("/authentication")}>
                  <BackLeftSVG className="w-[11px] h-[18px] mb-[0.5px]" />
                </div>
                <span className="font-Inter text-white text-lg leading-5 font-bold">
                  ACCESS HISTORY
                </span>
              </span>
              {isLoading ||
                (data?.pages[0]?.data?.data?.length > 0 && (
                  <div
                    className="font-Inter text-white text-lg leading-[21.78px] font-bold cursor-pointer"
                    onClick={() => handleContent("0", "DownloadAll")}
                  >
                    Download all
                  </div>
                ))}
            </div>
          </CardHeader>
        </div>
        <CardBody className={`px-0 p-0 w-full overflow-auto`}>
          {isLoading ? (
            <div className="bg-white flex items-center justify-center h-[75vh]">
              <Player
                autoplay
                loop
                src="/assets/jsonGif/ManAndRobotWithComputers.json"
                style={{
                  height: "11.13rem",
                  width: "20.3rem",
                  background: "#FFFFFF",
                }}
                className="p-0"
              />
            </div>
          ) : data?.pages[0]?.data?.data?.length <= 0 ? (
            <div className="bg-[#F6FBFF] w-full h-[60vh] flex items-center mb-8 md:items-center justify-center overflow-hidden">
              <div className="flex flex-col justify-center items-center gap-7">
                <NoAccessHistorySVG />
                <span className="font-Inter font-bold text-xl leading-[24.2px] text-[#697489]">
                  No Access History
                </span>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-[6px] bg-[#F6FBFF] items-center justify-center ">
              {data?.pages?.map((items: any) => {
                return items?.data?.data?.map((item: any, index: number) => {
                  return item.telegram === null || item.twitter === null ? (
                    <div
                      key={index}
                      className="flex flex-col w-full bg-white p-[10px] gap-[5px]"
                    >
                      <div
                        className="flex gap-[15px]"
                        onClick={() =>
                          router.push(
                            `/authentication/${item._id}?${
                              (item.twitter === null && "1") ??
                              (item.telegram === null && "2")
                            }`
                          )
                        }
                      >
                        <picture className="rounded-full flex items-start justify-start">
                          <img
                            src={
                              item?.telegram?.dataId?.profile?.avatar ??
                              item?.twitter?.dataId?.profile?.avatar ??
                              "https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png"
                            }
                            alt=""
                            className="w-[48px] h-[48px] ring-[#f0f6fe] ring-4 rounded-full"
                            onError={handleError}
                          />
                        </picture>
                        <div className="flex flex-col gap-[7px] justify-start items-start">
                          <div className="flex gap-[15px]">
                            {item?.telegram !== null && (
                              <TelegramHistorySVG className="w-6 h-6 rounded-full" />
                            )}
                            {item?.twitter !== null && (
                              <TwitterFooterSVG className="w-6 h-6 rounded-full p-[3px] bg-[#E4F1FF]" />
                            )}
                            <Link
                              href={
                                item.telegram !== null
                                  ? `https://t.me/${item?.telegram?.objectId}`
                                  : `https://twitter.com/${item?.twitter?.objectId}`
                              }
                              target="_blank"
                              className="font-Inter font-semibold text-lg leading-[22px]"
                            >
                              {item?.telegram?.objectId ??
                                item?.twitter?.objectId}
                            </Link>
                          </div>
                          <span className="font-Inter text-start font-normal text-sm leading-5 text-[#585858]">
                            {item?.createdAt
                              ?.slice(0, 10)
                              .replaceAll("-", ".") +
                              " at " +
                              item.createdAt
                                ?.slice(11, 16)
                                .replaceAll("-", ".")}
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-2 h-2 ml-[7px] ${
                              item?.telegram?.dataId?.overview?.percentCrawl ??
                              item?.twitter?.dataId?.overview?.processBar >= 100
                                ? "bg-[#26D256]"
                                : "bg-[#FFB006]"
                            } visible rounded-full`}
                          ></div>
                          <span
                            className={`text-[#1C1C1C] font-normal text-base leading-5 font-Inter`}
                          >
                            {item?.telegram?.dataId?.overview?.percentCrawl  ??
                            item?.twitter?.dataId?.overview?.processBar >= 100
                              ? "Completed"
                              : "In progress"}
                          </span>
                        </div>
                        <div className="relative flex justify-around items-center gap-1">
                          <span
                            onClick={() =>
                              handleContent(item._id, "DownloadOne")
                            }
                            className="bg-[#f5f5f5] hover:bg-[#ECF2F9] active:bg-[#ECF2F9] rounded-tl-md rounded-bl-md cursor-pointer px-[0.63rem] py-[0.31rem] stroke-[#28303F] hover:stroke-[#005AE2] active:stroke-[#005AE2] duration-500 ease-in-out"
                          >
                            <DownloadAuthenSVG className="stroke-inherit" />
                          </span>
                          <span
                            onClick={() => handleContent(item._id, "Delete")}
                            className="bg-[#f5f5f5] hover:bg-[#FCEBE8] active:bg-[#FCEBE8] rounded-tr-md rounded-br-md cursor-pointer px-[0.63rem] py-[0.31rem] stroke-[#28303F] hover:stroke-[#E32626] active:stroke-[#E32626] duration-500 ease-in-out"
                          >
                            <TrashAuthenSVG className="stroke-inherit" />
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div
                      key={index}
                      className="flex flex-col w-full bg-white p-[10px]"
                    >
                      <div
                        className="flex flex-col w-full gap-[10px]"
                        onClick={() =>
                          router.push(`/authentication/${item._id}?3`)
                        }
                      >
                        <div className="flex gap-[15px] flex-col">
                          <div className="flex gap-[15px]">
                            <picture className="rounded-full flex items-center justify-center">
                              <img
                                src={
                                  item?.telegram?.dataId?.profile?.avatar ??
                                  "https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png"
                                }
                                alt=""
                                onError={handleError}
                                className="w-[48px] h-[48px] ring-[#f0f6fe] ring-4 rounded-full"
                              />
                            </picture>
                            <div className="flex flex-col gap-[7px] justify-start items-start">
                              <div className="flex gap-[15px]">
                                <TelegramHistorySVG className="w-6 h-6 rounded-full" />
                                <Link
                                  href={`https://t.me/${item?.telegram?.objectId}`}
                                  target="_blank"
                                  className="font-Inter font-semibold text-lg leading-[22px]"
                                >
                                  {item?.telegram?.objectId}
                                </Link>
                              </div>
                              <span className="text-start font-Inter font-normal text-sm leading-5 text-[#585858]">
                                {item?.createdAt
                                  ?.slice(0, 10)
                                  .replaceAll("-", ".") +
                                  " at " +
                                  item?.createdAt
                                    ?.slice(11, 16)
                                    .replaceAll("-", ".")}
                              </span>
                            </div>
                          </div>
                          <div className="flex gap-[15px]">
                            <picture className="rounded-full flex items-center justify-center">
                              <img
                                src={
                                  item?.twitter?.dataId?.profile?.avatar ??
                                  "https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png"
                                }
                                alt=""
                                className="w-[48px] h-[48px] ring-[#f0f6fe] ring-4 rounded-full"
                                onError={handleError}
                              />
                            </picture>
                            <div className="flex flex-col gap-[7px] justify-start items-start">
                              <div className="flex gap-[15px]">
                                <TwitterFooterSVG className="w-6 h-6 rounded-full p-[3px] bg-[#E4F1FF]" />
                                <Link
                                  href={`https://twitter.com/${item?.twitter?.objectId}`}
                                  target="_blank"
                                  className="font-Inter font-semibold text-lg leading-[22px]"
                                >
                                  {item?.twitter?.objectId}
                                </Link>
                              </div>
                              <span className="text-start font-Inter font-normal text-sm leading-5 text-[#585858]">
                                {item?.createdAt
                                  ?.slice(0, 10)
                                  .replaceAll("-", ".") +
                                  " at " +
                                  item.createdAt
                                    ?.slice(11, 16)
                                    .replaceAll("-", ".")}
                              </span>
                            </div>
                          </div>
                          <div className="flex justify-start items-start"></div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-2 h-2 ml-[7px] ${
                              item?.telegram?.dataId?.overview?.percentCrawl  &&
                              item?.twitter?.dataId?.overview?.processBar >= 100
                                ? "bg-[#26D256]"
                                : "bg-[#FFB006]"
                            } visible rounded-full`}
                          ></div>
                          <span
                            className={`text-[#1C1C1C] font-normal text-base leading-5 font-Inter`}
                          >
                            {item?.telegram?.dataId?.overview?.percentCrawl  &&
                            item?.twitter?.dataId?.overview?.processBar >= 100
                              ? "Completed"
                              : "In progress"}
                          </span>
                        </div>

                        <div className="relative flex justify-around items-center gap-1">
                          <span
                            onClick={() =>
                              handleContent(item._id, "DownloadOne")
                            }
                            className="bg-[#f5f5f5] hover:bg-[#ECF2F9] active:bg-[#ECF2F9] rounded-tl-md rounded-bl-md cursor-pointer px-[0.63rem] py-[0.31rem] stroke-[#28303F] hover:stroke-[#005AE2] active:stroke-[#005AE2] duration-500 ease-in-out"
                          >
                            <DownloadAuthenSVG className="stroke-inherit" />
                          </span>

                          <span
                            onClick={() => handleContent(item._id, "Delete")}
                            className="bg-[#f5f5f5] hover:bg-[#FCEBE8] active:bg-[#FCEBE8] rounded-tr-md rounded-br-md cursor-pointer px-[0.63rem] py-[0.31rem] stroke-[#28303F] hover:stroke-[#E32626] active:stroke-[#E32626] duration-500 ease-in-out"
                          >
                            <TrashAuthenSVG className="stroke-inherit" />
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                });
              })}
              <div
                ref={carouselRef}
                className="w-full flex justify-center items-start pb-14 pr-3 visible"
              >
                {isFetchingNextPage && (
                  <div
                    className="w-12 h-12 rounded-full animate-spin
                  border border-solid border-yellow-500 border-t-transparent"
                  ></div>
                )}
              </div>
            </div>
          )}
        </CardBody>
      </Card>
      <DismissableModal
        ref={ref}
        open={openModal}
        setOpen={setOpenModal}
        className="w-[300px] h-[280px] mx-auto self-center"
      >
        <div className="relative flex flex-col h-full items-center justify-center px-[58px] gap-5 ">
          <DownloadAll className="mt-[10px]" />
          <span className="font-Inter font-medium text-base leading-6">
            {content === "DownloadAll" &&
              "Are you sure want to download all data?"}
            {content === "Delete" && "Are you sure want to delete data?"}
            {content === "DownloadOne" && "Are you sure want to download data?"}
          </span>
          <button className="" onClick={() => handleClick()}>
            <span className="bg-[#005AE2] py-[9px] px-[27px] text-white font-Inter font-semibold text-lg leading-[22px] rounded-md">
              {loading && <LoadingSVG />}
              {content === "DownloadAll" && "Download"}
              {content === "Delete" && "Delete"}
              {content === "DownloadOne" && "Download"}
            </span>
          </button>
          <div onClick={() => setOpenModal(false)}>
            <div className="absolute w-1 h-5 bg-black-500 top-[10px] right-5 rotate-45" />
            <div className="absolute w-1 h-5 bg-black-500 top-[10px] right-5 rotate-[135deg]" />
          </div>
        </div>
      </DismissableModal>
    </LayoutDashBoard>
  );
}
