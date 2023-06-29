import DismissableModal from "@/components/Modal";
import HistoryMobile from "@/components/PageComponents/Authentication/HistoryMobile";
import LayoutDashBoard from "@/components/layout/Layout";
import BackLeftSVG from "@/components/svg/BackLeftSVG";
import DownloadAllMD from "@/components/svg/DownloadAllMD";
import DownloadAuthenSVG from "@/components/svg/DownloadAuthenSVG";
import NoAccessHistorySVG from "@/components/svg/NoAccessHistorySVG";
import TelegramHistorySVG from "@/components/svg/TelegramHistorySVG";
import TrashAuthenSVG from "@/components/svg/TrashAuthenSVG";
import TwitterHistorySVG from "@/components/svg/TwitterHistorySVG";
import { TABLE_HEAD, TABLE_ROWS } from "@/constant/components/History";
import useWidth from "@/hooks/useWidth";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Player } from "@lottiefiles/react-lottie-player";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { getHistory } from "../api/authentication/History";
import ProgressBar from "@/components/ui/ProgressBar";

export default function History() {
  const router = useRouter();
  const ref = useRef<any>(null);
  const { width } = useWidth();
  const [page, setPage] = useState<number>(1);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { data, isLoading } = useQuery<any>({
    queryKey: ["history"],
    queryFn: () =>
      getHistory({
        sort: "1",
        page: page,
        limit: "10",
      }),
  });
  const realData = data?.data;
  const handleClickOutside = () => {
    setOpenModal(false);
  };
  useOnClickOutside(ref, handleClickOutside);
  if (width < 1024) {
    return <HistoryMobile data={realData} isLoading={isLoading} />;
  }

  const handleError = (e: any) => {
    e.target.src =
      "https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png";
  };
  return (
    <LayoutDashBoard className="bg-white md:p-5 py-[15px]">
      <div className="flex flex-col gap-4">
        <Link
          href="/authentication"
          className="bg-[#005AE2] hover:bg-[#00388D] duration-500 ease-in-out rounded-md hidden md:inline-block h-[45px] w-[188px]"
        >
          <div className="flex gap-[9.31px] items-center justify-center h-full">
            <div onClick={() => router.push("/authentication")}>
              <BackLeftSVG className="w-[8.69px] h-[15px] mb-[1px]" />
            </div>
            <span className="font-Inter text-white font-semibold text-base leading-4">
              Bit Authentication
            </span>
          </div>
        </Link>
        <Card className="h-full bg-[#f6fbff] w-full max-h-[795.08px] p-0 m-0 shadow-[0_1px_2px_rgba(0,0,0,0.25)] rounded-md">
          <CardHeader
            floated={false}
            shadow={false}
            className="rounded-none rounded-tl-[6px] rounded-tr-[6px] bg-[#0046B0] mt-0 mx-0  md:h-[54px]"
          >
            <div className="flex justify-between flex-row items-center">
              <span className="flex gap-[14px] items-center justify-center px-[1rem] md:px-0">
                <div
                  onClick={() => router.push("/authentication")}
                  className="md:hidden block"
                >
                  <BackLeftSVG className="w-[11px] h-[18px] mb-[0.5px]" />
                </div>
                <span className="font-Inter py-[1.06rem] md:px-[1.38rem] text-white text-lg leading-5 font-bold">
                  ACCESS HISTORY
                </span>
              </span>
              {!isLoading && realData?.data?.length > 0 && (
                <div
                  onClick={() => setOpenModal(true)}
                  className="hidden hover:bg-[#00388D] duration-500 ease-linear md:block pt-[1.06rem] px-[1.81rem] pb-[0.94rem] font-Inter text-white text-lg leading-[21.78px] font-semibold cursor-pointer"
                >
                  Download all
                </div>
              )}
            </div>
          </CardHeader>
          <CardBody className="px-0 p-0 md:bg-[#F6FBFF] bg-[#D3ECFF] w-full overflow-x-auto ">
            <div className="block">
              {isLoading ? (
                <div className="h-[65vh] flex items-center justify-center">
                  <Player
                    autoplay
                    loop
                    src="/assets/jsonGif/ManAndRobotWithComputers.json"
                    style={{ minHeight: "40vh", width: "40%" }}
                    className="p-0"
                  />
                </div>
              ) : (
                <table className="w-full table-auto text-left">
                  <thead className="w-full ">
                    <tr className="bg-[#D3ECFF] h-[55px] flex w-full justify-between px-2 md:pl-[22px] py-[17px] md:pr-[42px]">
                      {TABLE_HEAD.map((head, index) => (
                        <th
                          key={index}
                          className={`${head.class} flex items-center`}
                        >
                          <Typography
                            className={`font-Inter font-semibold text-start text-lg leading-[22px] text-[#181C32] `}
                          >
                            {head.title}
                          </Typography>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="w-full">
                    {realData?.data?.length > 0 &&
                      realData?.data?.map((item: any, index: number) => {
                        const isLast = index === TABLE_ROWS.length - 1;
                        const classes = isLast
                          ? ""
                          : "border-b border-dashed border-[#e4e3e3]";
                        return (
                          <>
                            {item.telegram !== null &&
                              item.telegram?.dataId !== null && (
                                <tr
                                  className="flex hover:bg-[#EBF4FF] hover:shadow-sm duration-300 ease-in-out"
                                  key={item._id}
                                >
                                  <td
                                    className={`${classes} py-[13px] px-[22px] h-[55px] basis-[5%]`}
                                  >
                                    <Typography
                                      variant="small"
                                      color="blue-gray"
                                      className="font-medium text-[16.26px] leading-[28.69px] text-[#1C1C1C]"
                                    >
                                      {index === 1 ? 3 : index * index + 1}
                                    </Typography>
                                  </td>
                                  <td
                                    className={`${classes} py-[7px] px-0 md:px-[22px] h-[55px] flex items-center justify-start basis-[11.5%]`}
                                  >
                                    <picture className="w-[41px] h-[41px] ring-[#f0f6fe] ring-4 rounded-full">
                                      <img
                                        className="w-[41px] h-[41px] rounded-full"
                                        src={
                                          item?.telegram?.dataId?.profile
                                            ?.avatar
                                        }
                                        alt=""
                                        onError={handleError}
                                      />
                                    </picture>
                                  </td>
                                  <td
                                    className={`${classes} flex items-center justify-start py-[14px] px-[22px] h-[55px]  basis-[23.5%]`}
                                  >
                                    <div className="flex items-center justify-center gap-[10px]">
                                      <TelegramHistorySVG className="w-6 h-6 rounded-full" />

                                      <Typography className="text-[#1C1C1C] font-medium text-base leading-5 text-center font-Inter cursor-pointer">
                                        {item?.telegram?.objectId}
                                      </Typography>
                                    </div>
                                  </td>
                                  <td
                                    className={`${classes} flex items-center justify-start border-b text-center border-dashed py-[18px] px-[22px] h-[55px] basis-[20.1%]`}
                                  >
                                    <Typography className="text-[#1C1C1C] font-medium text-base leading-5 font-Inter">
                                      {item.createdAt?.slice(0, 10) +
                                        " at " +
                                        item.createdAt?.slice(11, 16)}
                                    </Typography>
                                  </td>
                                  <td
                                    className={`${classes} pt-[12px] pb-[17px] px-[22px] h-[55px] basis-[30.1%]`}
                                  >
                                    <div className="flex justify-between w-[250px]">
                                      <Typography className="text-[#000000] font-Inter font-medium text-sm leading-[17px]">
                                        Process
                                      </Typography>
                                      <Typography className="text-[#000000] font-Inter font-medium text-sm leading-[17px]">
                                        {
                                          item?.telegram?.dataId?.overview
                                            ?.percent
                                        }
                                      </Typography>
                                    </div>
                                    <div className="w-[250px]">
                                      <ProgressBar
                                        className="bg-[#26D256] rounded-full"
                                        backClass="h-[5px] w-[250px] rounded-full"
                                        value={
                                          item?.telegram?.dataId?.overview
                                            ?.percent
                                        }
                                      />
                                    </div>
                                  </td>
                                  <td
                                    className={`${classes} flex items-center justify-start py-[10px] px-[22px] h-[55px]  basis-[15%]`}
                                  >
                                    <div className="w-full items-center justify-start flex">
                                      <Link
                                        href={`/authentication/${item._id}`}
                                        target="_blank"
                                        className="h-[35px] cursor-pointer text-center w-[96px]  flex items-center bg-[#D7E8FD] hover:bg-[#005AE2] text-[#005AE2] hover:text-white justify-center rounded-[8px] duration-500 ease-in-out"
                                      >
                                        <span className="font-Inter font-medium text-[15.3px] leading-[18.52px] text-center text-inherit">
                                          View more
                                        </span>
                                      </Link>
                                    </div>
                                  </td>
                                  <td
                                    className={`${classes} flex items-center justify-start pt-[18px] pb-[17px] px-[22px] pr-[42px] h-[55px] basis-0`}
                                  >
                                    <div className="flex items-center gap-[19px] justify-center">
                                      <div className="cursor-pointer">
                                        <DownloadAuthenSVG className="stroke-[#28303F] hover:stroke-[#005AE2] duration-500 ease-in-out" />
                                      </div>
                                      <div className="cursor-pointer">
                                        <TrashAuthenSVG className="stroke-[#28303F] hover:stroke-[#E32626] duration-500 ease-in-out" />
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              )}
                            {item.twitter !== null &&
                              item.twitter?.dataId?.profile !== null && (
                                <tr className="flex hover:bg-[#EBF4FF] hover:shadow-sm duration-300 ease-in-out">
                                  <td
                                    className={`${classes} py-[13px] px-[22px] h-[55px] basis-[5%]`}
                                  >
                                    <Typography
                                      variant="small"
                                      color="blue-gray"
                                      className="font-medium text-[16.26px] leading-[28.69px] text-[#1C1C1C]"
                                    >
                                      {(index + 1) * 2}
                                    </Typography>
                                  </td>
                                  <td
                                    className={`${classes} py-[7px] px-0 md:px-[22px] h-[55px] flex items-center justify-start basis-[11.5%]`}
                                  >
                                    <picture className="w-[41px] h-[41px] ring-[#f0f6fe] ring-4 rounded-full">
                                      <img
                                        className="w-[41px] h-[41px] rounded-full"
                                        src={
                                          item?.twitter?.dataId?.profile?.avatar
                                        }
                                        alt="twitter"
                                        onError={handleError}
                                      />
                                    </picture>
                                  </td>
                                  <td
                                    className={`${classes} flex items-center justify-start py-[14px] px-[22px] h-[55px]  basis-[23.5%]`}
                                  >
                                    <div className="flex items-center justify-center gap-[10px]">
                                      <TwitterHistorySVG className="w-6 h-6 rounded-full" />

                                      <Typography className="text-[#1C1C1C] font-medium text-base leading-5 text-center font-Inter cursor-pointer">
                                        {item?.twitter?.objectId}
                                      </Typography>
                                    </div>
                                  </td>
                                  <td
                                    className={`${classes} flex items-center justify-start border-b text-center border-dashed py-[18px] px-[22px] h-[55px] basis-[20.1%]`}
                                  >
                                    <Typography className="text-[#1C1C1C] font-medium text-base leading-5 font-Inter">
                                      {item.createdAt?.slice(0, 10) +
                                        " at " +
                                        item.createdAt?.slice(11, 16)}
                                    </Typography>
                                  </td>
                                  <td
                                    className={`${classes} pt-[12px] pb-[17px] px-[22px] h-[55px] basis-[30.1%]`}
                                  >
                                    <div className="flex justify-between w-[250px]">
                                      <Typography className="text-[#000000] font-Inter font-medium text-sm leading-[17px]">
                                        Process
                                      </Typography>
                                      <Typography className="text-[#000000] font-Inter font-medium text-sm leading-[17px]">
                                        {
                                          item?.twitter?.dataId?.overview
                                            ?.processBar
                                        }
                                      </Typography>
                                    </div>
                                    <div className="w-[250px]">
                                      <ProgressBar
                                        className="bg-[#26D256] rounded-full"
                                        backClass="h-[5px] w-[250px] rounded-full"
                                        value={
                                          item?.twitter?.dataId?.overview
                                            ?.processBar
                                        }
                                      />
                                    </div>
                                  </td>
                                  <td
                                    className={`${classes} flex items-center justify-start py-[10px] px-[22px] h-[55px]  basis-[15%]`}
                                  >
                                    <div className="w-full items-center justify-start flex">
                                      <Link
                                        href={`/authentication/${item._id}`}
                                        target="_blank"
                                        className="h-[35px] cursor-pointer text-center w-[96px]  flex items-center bg-[#D7E8FD] hover:bg-[#005AE2] text-[#005AE2] hover:text-white justify-center rounded-[8px] duration-500 ease-in-out"
                                      >
                                        <span className="font-Inter font-medium text-[15.3px] leading-[18.52px] text-center text-inherit">
                                          View more
                                        </span>
                                      </Link>
                                    </div>
                                  </td>
                                  <td
                                    className={`${classes} flex items-center justify-start pt-[18px] pb-[17px] px-[22px] pr-[42px] h-[55px] basis-0`}
                                  >
                                    <div className="flex items-center gap-[19px] justify-center">
                                      <div className="cursor-pointer">
                                        <DownloadAuthenSVG className="stroke-[#28303F] hover:stroke-[#005AE2] duration-500 ease-in-out" />
                                      </div>
                                      <div className="cursor-pointer">
                                        <TrashAuthenSVG className="stroke-[#28303F] hover:stroke-[#E32626] duration-500 ease-in-out" />
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              )}
                          
                          </>
                        );
                      })}
                  </tbody>
                </table>
              )}
            </div>
            {!isLoading &&
              (realData?.data?.length === 0 || !realData?.data) && (
                <div className="w-full h-[60vh] flex items-center mb-8 md:items-center justify-center overflow-hidden">
                  <div className="flex flex-col justify-center items-center gap-7">
                    <NoAccessHistorySVG />
                    <span className="font-Inter font-bold text-xl leading-[24.2px] text-[#697489]">
                      No Access History
                    </span>
                  </div>
                </div>
              )}
          </CardBody>
        </Card>
        {!isLoading && realData?.data?.length > 0 && (
          <CardFooter className="-mr-[9.5px] flex items-center justify-end p-0 bg-white">
            <div className="flex items-center justify-center w-[32px] h-[32px] py-[6px] px-[13px] rounded-[3.825px]">
              <span className="font-Inter cursor-pointer text-white font-bold text-[16px] leading-[19.36px]">
                <ChevronLeftIcon className="h-4 w-4 text-[#000000] cursor-pointer" />
              </span>
            </div>
            <div className="flex items-center px-[6px]">
              <div className="flex items-center justify-center w-[32px] h-[32px] bg-[#009EF7] py-[6px] px-[13px] rounded-[3.825px]">
                <span className="font-Inter cursor-pointer text-white font-bold text-[16px] leading-[19.36px]">
                  1
                </span>
              </div>
              <div className="flex items-center justify-center w-[32px] h-[32px] py-[6px] px-[13px] rounded-[3.825px]">
                <span className="font-Inter cursor-pointer text-[#000000] font-medium text-[16px] leading-[19.36px]">
                  2
                </span>
              </div>
              <div className="flex items-center justify-center w-[32px] h-[32px] py-[6px] px-[13px] rounded-[3.825px]">
                <span className="font-Inter cursor-pointer text-[#000000] font-medium text-[16px] leading-[19.36px]">
                  3
                </span>
              </div>
              <div className="flex items-center justify-center w-[32px] h-[32px] py-[6px] px-[13px] rounded-[3.825px]">
                <span className="font-Inter cursor-pointer text-[#000000] font-medium text-[16px] leading-[19.36px]">
                  4
                </span>
              </div>
              <div className="flex items-center justify-center w-[32px] h-[32px] py-[6px] px-[13px] rounded-[3.825px]">
                <span className="font-Inter cursor-pointer text-[#000000] font-medium text-[16px] leading-[19.36px]">
                  5
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center w-[32px] h-[32px] py-[6px] px-[13px] rounded-[3.825px]">
              <span className="font-Inter cursor-pointer text-white font-bold text-[16px] leading-[19.36px]">
                <ChevronRightIcon className="h-4 w-4 text-[#000000] cursor-pointer" />
              </span>
            </div>
          </CardFooter>
        )}
      </div>
      <DismissableModal
        ref={ref}
        open={openModal}
        setOpen={setOpenModal}
        className="w-[388px] h-[144px] mx-auto self-center"
      >
        <div className="relative flex items-center justify-between px-9 py-[18px]">
          <DownloadAllMD className="basis-5/12 w-[120px] h-[106px]" />
          <div className="ml-3 flex flex-col gap-[16px] items-center basis-7/12 pb-1">
            <span className="font-Inter text-center font-medium text-base leading-6">
              Are you sure want to download all data?
            </span>
            <Button
              className="w-[114px] h-[40px] p-0"
              onClick={() => setOpenModal(false)}
            >
              <span className="text-white font-Inter font-semibold text-lg leading-[22px] p-0">
                Download
              </span>
            </Button>
          </div>
          <div onClick={() => setOpenModal(false)} className="cursor-pointer">
            <div className="absolute w-1 h-5 bg-black-500 top-[10px] right-5 rotate-45" />
            <div className="absolute w-1 h-5 bg-black-500 top-[10px] right-5 rotate-[135deg]" />
          </div>
        </div>
      </DismissableModal>
    </LayoutDashBoard>
  );
}
