import RefferalMobile from "@/components/PageComponents/referral/history";
import LayoutDashBoard from "@/components/layout/Layout";
import BackLeftSVG from "@/components/svg/BackLeftSVG";
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
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { useHover } from "usehooks-ts";
import { RootState } from "@/store";
import NoreferralSVG from "@/components/svg/NoreferralSVG";
import Link from "next/link";

export default function History() {
  const router = useRouter();
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);
  const { width } = useWidth();
  const [data, setData] = useState<any>(null);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState(true);
  const user = useSelector((state: RootState) => state.users.user);

  useEffect(() => {
    const token = localStorage.getItem("token") ?? sessionStorage.getItem("token");
    fetch(
      `${process.env.SERVER}/users/${user?._id}/referral?page=${currentPage}&limit=10`,
      {
        headers: {
          Authorization: `${token}`,
          'Content-Type': 'application/json'
        }
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setTotalPage(data?.data?.totalPage);
        setData(data?.data?.data);
        setIsLoading(false);
      });
  }, [user?._id, width, currentPage]);
  if (width < 1024) {
    return <RefferalMobile data={data?.listReferral} isLoading={isLoading} />;
  }
  return (
    <LayoutDashBoard className="bg-white md:p-5 py-[15px]">
      <div className="flex flex-col gap-4 ">
        <Card className="h-full bg-[#f6fbff] w-full max-h-[795.08px] p-0 m-0 shadow-[0_1px_2px_rgba(0,0,0,0.25)] rounded-md">
          <CardHeader
            floated={false}
            shadow={false}
            className={`rounded-none rounded-tl-[6px] rounded-tr-[6px] mt-0 mx-0 duration-200 md:h-[54px] ${isHover ? "bg-[#00388D]" : "bg-[#0046B0]"
              } `}
          >
            <div className="flex justify-between flex-row items-center ">
              <span className="flex gap-[14px] items-center justify-center px-[1rem] md:px-0">
                <div
                  ref={hoverRef}
                  className=""
                  onClick={() => router.push("/referral")}
                >
                  <BackLeftSVG className="w-[11px] h-[18px] mb-[0.5px] ml-[25px] mr-[-10px] cursor-pointer" />
                </div>
                <span className="font-Inter py-[1.06rem] md:px-[1.38rem] text-white text-lg leading-5 font-bold">
                  REFERRAL HISTORY
                </span>
              </span>
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
                    <tr className="bg-[#D3ECFF] h-[55px] font-medium text-base  w-full  px-2 md:pl-[35px] py-[17px] md:pr-[42px] font-Inter">
                      <th className="px-[20px]">ID</th>
                      <th>User Name</th>
                      <th>Email</th>
                      <th>Time</th>
                      <th className="px-[20px]">Process</th>
                      <th>Bonus Reward</th>
                      <th>Pre-sale Reward</th>
                    </tr>
                  </thead>
                  <tbody className="w-full">
                    {data?.listReferral?.map((item: any, index: number) => {
                      const isLast = index === data?.length - 1;
                      const time = new Date(
                        item?.userId?.createdAt
                      ).toLocaleTimeString("en-us", { hour12: false });
                      const classes = isLast
                        ? ""
                        : "border-b border-dashed border-[#e4e3e3]";
                      return (
                        item?.userId && <tr
                          className="hover:bg-[#EBF4FF] hover:shadow-sm duration-300 ease-in-out"
                          key={index}
                        >
                          <td
                            className={`${classes} py-[13px] px-[20px] h-[55px]`}
                          >
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-medium text-[16.26px] leading-[28.69px] text-[#1C1C1C]"
                            >
                              {(currentPage - 1) * 10 + index + 1}
                            </Typography>
                          </td>
                          <td
                            className={`${classes} border-b border-dashed py-[18px] h-[55px]`}
                          >
                            <Typography className="text-[#1C1C1C] font-medium text-base leading-5 font-Inter">
                              {item?.userId?.name}
                            </Typography>
                          </td>
                          <td
                            className={`${classes} justify-start border-b border-dashed py-[18px] h-[55px]`}
                          >
                            <Typography className="text-[#1C1C1C] font-medium text-base leading-5 font-Inter">
                              {item?.userId?.email}
                            </Typography>
                          </td>
                          <td
                            className={`${classes}  justify-start border-b border-dashed py-[18px] h-[55px] basis-[21%] 2xl:basis-[22.5%]`}
                          >
                            <Typography className="text-[#1C1C1C] font-medium text-base leading-5 font-Inter">
                              {item?.userId?.createdAt
                                ?.slice(0, 10)
                                .split("-")
                                .map((part: any) => part.padStart(2, "0"))
                                .join(".") +
                                " at " +
                                time}
                            </Typography>
                          </td>
                          <td
                            className={`${classes}   justify-start border-b border-dashed py-[18px]  h-[55px] `}
                          >
                            <Typography
                              className={`text-[#1C1C1C] font-medium px-[20px] text-base leading-5 font-Inter ${item?.userId?.isActive
                                ? "text-[#00A72F]"
                                : "text-yellow-300"
                                }`}
                            >
                              {item?.userId?.isActive ? "Confirm" : "Register"}
                            </Typography>
                          </td>
                          <td
                            className={`${classes}  border-b  border-dashed py-[18px] h-[55px]`}
                          >
                            <Typography className="text-[#1C1C1C] font-medium text-base leading-5 font-Inter">
                              ${item?.userId?.isActive ? data?.detailReferral?.percentBonusReward : "0.0"}
                            </Typography>
                          </td>
                          <td
                            className={`${classes} justify-start border-b border-dashed py-[18px] h-[55px]`}
                          >
                            <Typography className="text-[#1C1C1C] font-medium text-base leading-5 font-Inter">
                              ${item?.userId?.presaleReward || "0.0"}
                            </Typography>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              )}
            </div>
            {!isLoading && (data?.listReferral?.length === 0 || !data) && (
              <div className="w-full h-[60vh] items-center mb-8 md:items-center justify-center overflow-hidden">
                <div className="flex flex-col justify-center items-center gap-7">
                  <NoreferralSVG />
                </div>
              </div>
            )}
          </CardBody>
        </Card>
        {!isLoading && data?.listReferral?.length > 0 && (
          <CardFooter className="-mr-[9.5px] flex items-center justify-end p-0 bg-white">
            <div className="flex items-center justify-center w-[32px] h-[32px] py-[6px] px-[13px] rounded-[3.825px]">
              <Link
                href={`?page=${currentPage}`}
                onClick={() => currentPage !== 1 && setCurrentPage(currentPage - 1)}
              >
                <span className="font-Inter cursor-pointer text-white font-bold text-[16px] leading-[19.36px]">
                  <ChevronLeftIcon className="h-4 w-4 text-[#000000] cursor-pointer" />
                </span>
              </Link>
            </div>
            <div className="flex items-center px-[6px]">
              {Array(totalPage)
                .fill("")
                .map((_, index) => {
                  return (
                    <Link
                      href={`?page=${index + 1}`}
                      onClick={() => setCurrentPage(index + 1)}
                      key={index}
                      className={`flex items-center justify-center w-[32px] h-[32px] py-[6px] px-[13px] rounded-[3.825px] ${index + 1 == currentPage ? "bg-[#009EF7]" : "bg-[#fff]"
                        }`}
                    >
                      <span
                        className={`font-Inter cursor-pointer  ${index + 1 == currentPage
                          ? "text-white"
                          : "text-[#000]"
                          } font-medium text-[16px] leading-[19.36px]`}
                      >
                        {index + 1}
                      </span>
                    </Link>
                  );
                })}
            </div>
            <div className="flex items-center justify-center w-[32px] h-[32px] py-[6px] px-[13px] rounded-[3.825px]">
              <Link
                href={`?page=${currentPage}`}
                onClick={() => currentPage < totalPage && setCurrentPage(currentPage + 1)}
              >
                <span className="font-Inter cursor-pointer text-white font-bold text-[16px] leading-[19.36px]">
                  <ChevronRightIcon className="h-4 w-4 text-[#000000] cursor-pointer" />
                </span>
              </Link>
            </div>
          </CardFooter>
        )}
      </div>
    </LayoutDashBoard>
  );
}
